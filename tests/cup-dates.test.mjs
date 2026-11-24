import assert from 'node:assert/strict';
import test from 'node:test';
import {
  cupLastDate,
  currentCups,
  isCupCurrentOrUpcoming,
  isCupRegistrationOpen,
  nextStockholmMidnight,
  stockholmDateKey,
} from '../src/cupDates.js';
import { cupRegistrations } from '../src/cupRegistrations.js';

test('Futsal Edition disappears and closes at Stockholm midnight after December 28', () => {
  const cup = cupRegistrations.find(({ slug }) => slug === 'super-five-futsal');
  assert.ok(cup);
  const before = new Date('2026-12-28T22:59:59Z');
  const after = new Date('2026-12-28T23:00:00Z');
  assert.equal(nextStockholmMidnight(before).toISOString(), after.toISOString());
  assert.deepEqual(currentCups([cup], before), [cup]);
  assert.equal(isCupRegistrationOpen(cup, before), true);
  assert.deepEqual(currentCups([cup], after), []);
  assert.equal(isCupRegistrationOpen(cup, after), false);
});

test('only an explicit valid endDate controls date filtering', () => {
  assert.equal(cupLastDate({ date: '18 oktober 2026' }), null);
  assert.equal(cupLastDate({ date: '2027' }), null);
  assert.equal(cupLastDate({ date: 'Våren 2027' }), null);
  assert.equal(cupLastDate({ date: 'Datum meddelas' }), null);
  assert.equal(cupLastDate({ date: '18–20 oktober 2026', endDate: '2026-10-20' }), '2026-10-20');
  assert.equal(cupLastDate({ endDate: '2026-02-30' }), null);
});

test('keeps cups from yesterday, today and tomorrow according to Stockholm dates', () => {
  const now = new Date('2026-11-24T11:00:00Z');
  assert.equal(stockholmDateKey(now), '2026-11-24');
  assert.equal(isCupCurrentOrUpcoming({ endDate: '2026-11-23' }, now), false);
  assert.equal(isCupCurrentOrUpcoming({ endDate: '2026-11-24' }, now), true);
  assert.equal(isCupCurrentOrUpcoming({ endDate: '2026-11-25' }, now), true);
});

test('keeps a single-day cup through the final Stockholm day, then closes registration', () => {
  const cup = { endDate: '2026-10-18' };
  assert.equal(isCupCurrentOrUpcoming(cup, new Date('2026-10-18T21:59:59Z')), true);
  assert.equal(isCupRegistrationOpen(cup, new Date('2026-10-18T21:59:59Z')), true);
  assert.equal(isCupCurrentOrUpcoming(cup, new Date('2026-10-18T22:00:00Z')), false);
  assert.equal(isCupRegistrationOpen(cup, new Date('2026-10-18T22:00:00Z')), false);
});

test('uses the last date for a multi-day cup', () => {
  const cup = { date: '18–19 oktober 2026', endDate: '2026-10-19' };
  assert.equal(isCupRegistrationOpen(cup, new Date('2026-10-19T21:59:59Z')), true);
  assert.equal(isCupRegistrationOpen(cup, new Date('2026-10-19T22:00:00Z')), false);
});

test('retains undated cups and supports manually hiding a card without closing its registration', () => {
  const cups = [
    { slug: 'past', endDate: '2026-11-23' },
    { slug: 'future', endDate: '2026-12-21' },
    { slug: 'planned', date: 'Datum meddelas' },
    { slug: 'hidden', endDate: '2026-12-21', visible: false },
  ];
  const now = new Date('2026-11-24T11:00:00Z');
  assert.deepEqual(currentCups(cups, now).map(({ slug }) => slug), ['future', 'planned']);
  assert.equal(isCupRegistrationOpen(cups[3], now), true);
});

test('calculates Stockholm midnights across both daylight-saving transitions', () => {
  const springMidnight = nextStockholmMidnight(new Date('2026-03-28T12:00:00Z'));
  const nextSpringMidnight = nextStockholmMidnight(new Date(springMidnight.getTime() + 1));
  assert.equal(springMidnight.toISOString(), '2026-03-28T23:00:00.000Z');
  assert.equal(nextSpringMidnight - springMidnight, 23 * 60 * 60 * 1000);
  assert.equal(stockholmDateKey(nextSpringMidnight), '2026-03-30');

  const fallMidnight = nextStockholmMidnight(new Date('2026-10-24T10:00:00Z'));
  const nextFallMidnight = nextStockholmMidnight(new Date(fallMidnight.getTime() + 1));
  assert.equal(fallMidnight.toISOString(), '2026-10-24T22:00:00.000Z');
  assert.equal(nextFallMidnight - fallMidnight, 25 * 60 * 60 * 1000);
  assert.equal(stockholmDateKey(nextFallMidnight), '2026-10-26');
});
