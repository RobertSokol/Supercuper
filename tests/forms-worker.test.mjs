import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { cupRegistrations } from '../src/cupRegistrations.js';
import worker, { CUP_REGISTRATIONS, cupRegistrationError, isRegistrationOpenUntil } from '../worker/supercuper-forms.js';

const expiredCupSubmission = {
  'Typ av intresseanmälan': 'Specifik cup eller matchcamp',
  'Cup eller matchcamp': 'Solna Blixt Camp',
  cupSlug: 'solna-blixt-camp',
};

const validFields = {
  Kontaktperson: 'Testperson',
  email: 'team@example.com',
  Telefon: '0700000000',
  Klubb: 'Testklubb',
  Lag: 'Testlag',
  'Åldersklass': 'P2015',
  Nivå: 'Mellan',
  Godkännande: 'Ja',
};

const makeRequest = (body) => new Request('https://forms.example.test/', {
  method: 'POST',
  headers: {
    Origin: 'https://supercuper.se',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
});

test('Worker registration data matches the website source of truth', async () => {
  assert.deepEqual(CUP_REGISTRATIONS, cupRegistrations);
  const mainSource = await readFile(new URL('../src/main.js', import.meta.url), 'utf8');
  for (const { slug, title } of cupRegistrations) {
    assert.ok(mainSource.includes(`slug: '${slug}', title: '${title}'`), `Missing website card for ${slug}`);
  }
});

test('generic contact-form submissions continue through Resend', async () => {
  const originalFetch = globalThis.fetch;
  let resendPayload;
  globalThis.fetch = async (_url, options) => {
    resendPayload = JSON.parse(options.body);
    return new Response(JSON.stringify({ id: 'test-message' }), { status: 200 });
  };
  try {
    const response = await worker.fetch(makeRequest({
      'Typ av intresseanmälan': 'Generell',
      ...validFields,
    }), { RESEND_API_KEY: 'test-key' });
    assert.equal(response.status, 200);
    assert.equal(resendPayload.reply_to, 'team@example.com');
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('a cup remains open through its final Stockholm day, then closes at midnight', () => {
  assert.equal(cupRegistrationError(expiredCupSubmission, new Date('2026-10-18T21:59:59Z')), null);
  assert.deepEqual(cupRegistrationError(expiredCupSubmission, new Date('2026-10-18T22:00:00Z')), {
    status: 410,
    error: 'Anmälan till Solna Blixt Camp har stängt.',
  });
  assert.deepEqual(cupRegistrationError({
    ...expiredCupSubmission,
    cupSlug: '',
    'Cup eller matchcamp': 'Unknown Cup',
  }), {
    status: 422,
    error: 'Turneringens anmälan kunde inte verifieras.',
  });
});

test('legacy cup-specific requests use the server registry when their slug is absent', () => {
  assert.equal(cupRegistrationError({
    'Typ av intresseanmälan': 'Specifik cup eller matchcamp',
    'Cup eller matchcamp': 'Super Six',
  }, new Date('2026-11-24T12:00:00Z')), null);
  assert.deepEqual(cupRegistrationError({
    'Typ av intresseanmälan': 'Specifik cup eller matchcamp',
    'Cup eller matchcamp': 'Solna Blixt Camp',
  }, new Date('2026-10-18T22:00:00Z')), {
    status: 410,
    error: 'Anmälan till Solna Blixt Camp har stängt.',
  });
});

test('uses the last date for a multi-day cup', () => {
  assert.equal(isRegistrationOpenUntil('2026-11-25', new Date('2026-11-25T22:59:59Z')), true);
  assert.equal(isRegistrationOpenUntil('2026-11-25', new Date('2026-11-25T23:00:00Z')), false);
});

test('registration boundaries follow Stockholm time across daylight-saving changes', () => {
  assert.equal(isRegistrationOpenUntil('2026-03-29', new Date('2026-03-29T21:59:59Z')), true);
  assert.equal(isRegistrationOpenUntil('2026-03-29', new Date('2026-03-29T22:00:00Z')), false);
  assert.equal(isRegistrationOpenUntil('2026-10-25', new Date('2026-10-25T22:59:59Z')), true);
  assert.equal(isRegistrationOpenUntil('2026-10-25', new Date('2026-10-25T23:00:00Z')), false);
});

test('undated cups stay open and browser-supplied dates do not control the Worker', () => {
  assert.equal(cupRegistrationError({
    'Typ av intresseanmälan': 'Specifik cup eller matchcamp',
    'Cup eller matchcamp': 'Super Six',
    cupSlug: 'super-six',
    endDate: '2000-01-01',
  }, new Date('2026-11-24T12:00:00Z')), null);
});

test('rejects direct requests with unknown or inconsistent cup identifiers before Resend', async () => {
  const requests = [
    { 'Cup eller matchcamp': 'Solna Blixt Camp', 'Typ av intresseanmälan': 'Generell' },
    { 'Cup eller matchcamp': 'Solna Blixt Camp' },
    { 'Typ av intresseanmälan': 'Specifik cup eller matchcamp', 'Cup eller matchcamp': 'Solna Blixt Camp', cupSlug: 'unknown-cup' },
    { ...expiredCupSubmission, 'Cup eller matchcamp': 'Super Six' },
  ];
  const originalFetch = globalThis.fetch;
  let resendCalls = 0;
  globalThis.fetch = async () => {
    resendCalls += 1;
    return new Response('{}', { status: 200 });
  };
  try {
    for (const input of requests) {
      const response = await worker.fetch(makeRequest({ ...validFields, ...input }), { RESEND_API_KEY: 'test-key' });
      assert.equal(response.status, 422);
    }
    assert.equal(resendCalls, 0);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('Worker rejects a completed cup before Resend, even if a future date is submitted', async () => {
  let resendCalled = false;
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => {
    resendCalled = true;
    return new Response('{}', { status: 200 });
  };
  try {
    const response = await worker.fetch(makeRequest({
      ...validFields,
      ...expiredCupSubmission,
      endDate: '2099-12-31',
    }), { RESEND_API_KEY: 'test-key' });
    assert.equal(response.status, 410);
    assert.deepEqual(await response.json(), {
      ok: false,
      error: 'Anmälan till Solna Blixt Camp har stängt.',
    });
    assert.equal(resendCalled, false);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('valid cup-specific registrations continue through Resend', async () => {
  const originalFetch = globalThis.fetch;
  let resendPayload;
  globalThis.fetch = async (_url, options) => {
    resendPayload = JSON.parse(options.body);
    return new Response('{}', { status: 200 });
  };
  try {
    const response = await worker.fetch(makeRequest({
      ...validFields,
      'Typ av intresseanmälan': 'Specifik cup eller matchcamp',
      'Cup eller matchcamp': 'Super Six',
      cupSlug: 'super-six',
    }), { RESEND_API_KEY: 'test-key' });
    assert.equal(response.status, 200);
    assert.ok(resendPayload.to.length > 0);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('the current website form payload continues working without a cup slug', async () => {
  const originalFetch = globalThis.fetch;
  let resendCalls = 0;
  globalThis.fetch = async () => {
    resendCalls += 1;
    return new Response('{}', { status: 200 });
  };
  try {
    const response = await worker.fetch(makeRequest({
      ...validFields,
      'Typ av intresseanmälan': 'Specifik cup eller matchcamp',
      'Cup eller matchcamp': 'Super Six',
    }), { RESEND_API_KEY: 'test-key' });
    assert.equal(response.status, 200);
    assert.equal(resendCalls, 1);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('does not expose Resend failures or the Worker secret to callers', async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => new Response('provider detail test-key', { status: 401 });
  try {
    const response = await worker.fetch(makeRequest({
      'Typ av intresseanmälan': 'Generell',
      ...validFields,
    }), { RESEND_API_KEY: 'test-key' });
    const body = await response.text();
    assert.equal(response.status, 502);
    assert.equal(body.includes('provider detail'), false);
    assert.equal(body.includes('test-key'), false);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
