const TIME_ZONE = 'Europe/Stockholm';
const stockholmDateFormatter = new Intl.DateTimeFormat('sv-SE', {
  timeZone: TIME_ZONE,
  calendar: 'gregory',
  numberingSystem: 'latn',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const isValidDateKey = (value) => {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00.000Z`);
  return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
};

export const stockholmDateKey = (date = new Date()) => {
  const parts = Object.fromEntries(stockholmDateFormatter.formatToParts(date).map(({ type, value }) => [type, value]));
  return `${parts.year}-${parts.month}-${parts.day}`;
};

export const cupLastDate = (cup) => isValidDateKey(cup.endDate) ? cup.endDate : null;

export const isCupRegistrationOpen = (cup, now = new Date()) => {
  const lastDate = cupLastDate(cup);
  return !lastDate || lastDate >= stockholmDateKey(now);
};

export const isCupCurrentOrUpcoming = (cup, now = new Date()) => cup.visible !== false && isCupRegistrationOpen(cup, now);

export const currentCups = (cups, now = new Date()) => cups.filter((cup) => isCupCurrentOrUpcoming(cup, now));

export const nextStockholmMidnight = (now = new Date()) => {
  const currentDate = stockholmDateKey(now);
  let low = now.getTime();
  let high = low + 36 * 60 * 60 * 1000;

  while (stockholmDateKey(new Date(high)) === currentDate) high += 12 * 60 * 60 * 1000;
  while (high - low > 1) {
    const middle = Math.floor((low + high) / 2);
    if (stockholmDateKey(new Date(middle)) === currentDate) low = middle;
    else high = middle;
  }
  return new Date(high);
};
