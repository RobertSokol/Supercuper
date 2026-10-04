const ALLOWED_ORIGINS = new Set([
  'https://supercuper.se',
  'https://www.supercuper.se',
]);

const REQUIRED_FIELDS = ['Kontaktperson', 'email', 'Telefon', 'Klubb', 'Lag', 'Åldersklass', 'Nivå', 'Godkännande'];
const MAX_BODY_BYTES = 16_384;

const json = (body, status, origin) => new Response(JSON.stringify(body), {
  status,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
    'Cache-Control': 'no-store',
  },
});

const clean = (value, maxLength = 200) => typeof value === 'string'
  ? value.trim().replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').slice(0, maxLength)
  : '';

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 160;

const fieldRow = (label, value) => `
  <tr>
    <td style="padding:10px 14px;color:#62758b;border-bottom:1px solid #e6ebf0;width:34%;vertical-align:top">${escapeHtml(label)}</td>
    <td style="padding:10px 14px;color:#002d62;border-bottom:1px solid #e6ebf0;font-weight:600;white-space:pre-wrap">${escapeHtml(value || '—')}</td>
  </tr>`;

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    if (!ALLOWED_ORIGINS.has(origin)) {
      return new Response('Forbidden', { status: 403 });
    }

    if (request.method === 'OPTIONS') return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
        'Vary': 'Origin',
      },
    });
    if (request.method !== 'POST') return json({ ok: false, error: 'Method not allowed' }, 405, origin);

    const contentLength = Number(request.headers.get('Content-Length') || 0);
    if (contentLength > MAX_BODY_BYTES) return json({ ok: false, error: 'För mycket information.' }, 413, origin);

    let input;
    try {
      input = await request.json();
    } catch {
      return json({ ok: false, error: 'Ogiltig förfrågan.' }, 400, origin);
    }

    if (!input || typeof input !== 'object' || Array.isArray(input)) {
      return json({ ok: false, error: 'Ogiltig förfrågan.' }, 400, origin);
    }

    // Bots commonly fill this visually hidden field. Return success without sending.
    if (clean(input._honey)) return json({ ok: true }, 200, origin);

    const data = {
      type: clean(input['Typ av intresseanmälan'], 100),
      cup: clean(input['Cup eller matchcamp'], 100),
      contact: clean(input.Kontaktperson, 80),
      email: clean(input.email, 160).toLowerCase(),
      phone: clean(input.Telefon, 30),
      club: clean(input.Klubb, 100),
      team: clean(input.Lag, 100),
      age: clean(input['Åldersklass'], 30),
      level: clean(input.Nivå, 30),
      message: clean(input.Meddelande, 800),
      consent: clean(input.Godkännande, 10),
    };

    const normalized = {
      Kontaktperson: data.contact,
      email: data.email,
      Telefon: data.phone,
      Klubb: data.club,
      Lag: data.team,
      'Åldersklass': data.age,
      'Nivå': data.level,
      'Godkännande': data.consent,
    };
    if (REQUIRED_FIELDS.some((field) => !normalized[field]) || !isEmail(data.email) || data.consent !== 'Ja') {
      return json({ ok: false, error: 'Kontrollera att alla obligatoriska uppgifter är korrekt ifyllda.' }, 422, origin);
    }

    if (!env.RESEND_API_KEY) return json({ ok: false, error: 'Tjänsten är inte konfigurerad.' }, 500, origin);

    const subject = data.cup
      ? `Cupintresse – ${data.cup} – ${data.club}`
      : `Generell intresseanmälan – ${data.club}`;
    const rows = [
      ['Typ', data.type || (data.cup ? 'Specifik cup eller matchcamp' : 'Generell')],
      ...(data.cup ? [['Cup eller matchcamp', data.cup]] : []),
      ['Kontaktperson', data.contact],
      ['E-post', data.email],
      ['Telefon', data.phone],
      ['Klubb', data.club],
      ['Lag', data.team],
      ['Åldersklass', data.age],
      ['Nivå', data.level],
      ['Meddelande', data.message],
      ['Godkännande', data.consent],
    ].map(([label, value]) => fieldRow(label, value)).join('');

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Super Cuper <formular@supercuper.se>',
        to: ['robertgiuricici@gmail.com'],
        reply_to: data.email,
        subject,
        html: `<div style="background:#f5f7f9;padding:28px;font-family:Arial,sans-serif"><div style="max-width:680px;margin:auto;background:#fff;border-radius:14px;overflow:hidden"><div style="background:#002d62;color:#fff;padding:25px 28px"><p style="margin:0;color:#ff6414;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase">Super Cuper</p><h1 style="margin:8px 0 0;font-size:24px">Ny intresseanmälan</h1></div><table role="presentation" style="width:100%;border-collapse:collapse;font-size:15px">${rows}</table></div></div>`,
        text: [subject, '', ...[
          ['Typ', data.type], ['Cup eller matchcamp', data.cup], ['Kontaktperson', data.contact],
          ['E-post', data.email], ['Telefon', data.phone], ['Klubb', data.club], ['Lag', data.team],
          ['Åldersklass', data.age], ['Nivå', data.level], ['Meddelande', data.message],
        ].filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`)].join('\n'),
      }),
    });

    if (!resendResponse.ok) {
      // Avoid returning provider details or personal data to the browser.
      return json({ ok: false, error: 'Meddelandet kunde inte skickas just nu.' }, 502, origin);
    }

    return json({ ok: true }, 200, origin);
  },
};
