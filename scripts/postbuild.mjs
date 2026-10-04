import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const origin = 'https://supercuper.se';
const baseDescription = 'Super Cuper skapar noggrant utvalda fotbollscuper och matchcamper med jämna, utvecklande matcher.';
const pages = [
  ['', 'Super Cuper — Fotboll tillsammans', baseDescription],
  ['fortur', 'Intresseanmälan — Super Cuper', 'Anmäl lagets intresse för nyheter och relevanta inbjudningar till Super Cupers cuper och matchcamper.'],
  ['om-oss', 'Om oss — Super Cuper', 'Läs om Super Cupers idé: att ta inspiration från Europas och världens fotbollsutbildning till Sverige.'],
  ['var-vardegrund', 'Vår värdegrund — Super Cuper', 'Super Cupers värdegrund för spelarutveckling, glädje, gemenskap, respekt och trygga fotbollsmiljöer.'],
  ['tavlingsbestammelser', 'Tävlingsbestämmelser — Super Cuper', 'Tävlingsbestämmelser för Super Cupers turneringar, med regler för spelformer, behörighet, Fair Play och trygg matchmiljö.'],
  ['integritet', 'Integritet — Super Cuper', 'Så hanterar Super Cuper kontaktuppgifter och intresseanmälningar.'],
  ['villkor', 'Villkor — Super Cuper', 'Grundvillkor för intresseanmälan och deltagande i Super Cupers arrangemang.'],
  ['cuper/solna-blixt-camp', 'Solna Blixt Camp — Super Cuper', 'Solna Blixt Camp på Råstasjöns IP den 18 oktober 2026 för B2018 i 5v5 och B2015 i 7v7.'],
  ['cuper/super-five', 'Super Five — Super Cuper', 'Super Five den 24–25 oktober 2026: en inbjudningsturnering i 5v5 för pojkar födda 2019.'],
  ['cuper/super-six', 'Super Six — Super Cuper', 'Kommande 6v6-turnering från Super Cuper.'],
  ['cuper/super-eight', 'Super Eight — Super Cuper', 'Kommande 8v8-turnering för B2015 från Super Cuper.'],
  ['cuper/super-nine', 'Super Nine — Super Cuper', 'Kommande 9v9-turnering för B2015 och B2014 från Super Cuper.'],
  ['cuper/solna-masterskapen', 'Solna Mästerskapen 2027 — Super Cuper', 'Solna Mästerskapen 2027 för pojkar och flickor födda 2019–2015.'],
];

const template = await readFile('dist/index.html', 'utf8');
const knownEvents = {
  'cuper/solna-blixt-camp': {
    '@type': 'SportsEvent',
    name: 'Solna Blixt Camp',
    startDate: '2026-10-18',
    endDate: '2026-10-18',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: { '@type': 'Place', name: 'Råstasjöns IP', address: { '@type': 'PostalAddress', addressLocality: 'Solna', addressCountry: 'SE' } },
  },
};
const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const pageHtml = (route, title, description) => {
  const url = `${origin}/${route ? `${route}/` : ''}`;
  const organizer = { '@type': 'Organization', name: 'Super Cuper', url: origin, email: 'hej@supercuper.se' };
  const schema = route === ''
    ? { '@context': 'https://schema.org', ...organizer, logo: `${origin}/images/social-supercuper.png` }
    : knownEvents[route]
      ? { '@context': 'https://schema.org', ...knownEvents[route], url, organizer }
      : { '@context': 'https://schema.org', '@type': 'WebPage', name: title, description, url, isPartOf: { '@type': 'WebSite', name: 'Super Cuper', url: origin } };
  return template
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escapeHtml(description)}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${escapeHtml(description)}" />`)
    .replace('</head>', `    <link rel="canonical" href="${url}" />\n    <script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>\n  </head>`);
};

for (const [route, title, description] of pages) {
  const html = pageHtml(route, title, description);
  if (!route) await writeFile('dist/index.html', html);
  else {
    const directory = join('dist', route);
    await mkdir(directory, { recursive: true });
    await writeFile(join(directory, 'index.html'), html);
  }
}
await writeFile('dist/404.html', pageHtml('', pages[0][1], pages[0][2]));
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.filter(([route]) => route !== 'fortur').map(([route]) => `  <url><loc>${origin}/${route ? `${route}/` : ''}</loc><lastmod>2026-10-04</lastmod></url>`).join('\n')}\n</urlset>\n`);
