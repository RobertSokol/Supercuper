import './style.css';

const cups = [
  { slug: 'solna-blixt-camp', title: 'Solna Blixt Camp', place: 'Råstasjöns IP, Solna', date: '18 oktober', ages: 'B2018 · B2016/2015', format: '5v5 · 7v7', note: '', cohost: 'AS Solna FF', logos: ['/logos/supercuper-main.jpg', '/logos/as-solna-ff.jpg'] },
  { slug: 'super-five', title: 'Super Five', place: 'Järvastadens IP, Solna', date: '24–25/10', ages: 'B2019', format: '5v5', note: 'Planerad cup', logo: '/logos/super-five.jpg' },
  { slug: 'super-six', title: 'Super Six', place: 'Meddelas snart', date: 'TBD', ages: 'Meddelas snart', format: '6v6', note: 'Intresseanmälan öppen', logo: '/logos/super-six.jpg' },
  { slug: 'super-eight', title: 'Super Eight', place: 'Meddelas snart', date: 'TBD', ages: 'B2015', format: '8v8', note: 'Intresseanmälan öppen', logo: '/logos/super-8.jpg' },
  { slug: 'super-nine', title: 'Super Nine', place: 'Meddelas snart', date: 'TBD', ages: 'B2015/2014', format: '9v9', note: 'Intresseanmälan öppen', logo: '/logos/super-nine.jpg' },
  { slug: 'solna-masterskapen', title: 'Solna Mästerskapen', place: 'Solna · arena meddelas snart', date: 'TBD', ages: 'B2019–B2015', format: 'Meddelas snart', note: 'Flera åldersklasser', image: '/images/team-celebration.jpg' },
];

const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>';
const cupCards = cups.map((cup) => `
  <article class="cup-card">
    <a class="cup-visual ${cup.logos ? 'co-brand' : cup.logo ? 'cup-logo' : ''}" href="/cuper/${cup.slug}" aria-label="Läs mer om ${cup.title}">
      ${cup.logos ? cup.logos.map((logo, index) => `<img src="${logo}" alt="${index === 0 ? 'Super Cuper logotyp' : 'AS Solna FF logotyp'}" loading="lazy" />`).join('<i aria-hidden="true">×</i>') : `<img src="${cup.logo || cup.image}" alt="${cup.logo ? `${cup.title} logotyp` : `Fotboll under ${cup.title}`}" loading="lazy" />`}
      <span>Planerad</span>
    </a>
    <div class="cup-details">
      <h3><a href="/cuper/${cup.slug}">${cup.title}</a></h3>
      <dl>
        <div><dt>Var</dt><dd>${cup.place}</dd></div>
        <div><dt>När</dt><dd>${cup.date}</dd></div>
        <div><dt>Åldrar</dt><dd>${cup.ages}</dd></div>
        <div><dt>Spelform</dt><dd>${cup.format}</dd></div>
        ${cup.cohost ? `<div><dt>Medarrangör</dt><dd>${cup.cohost}</dd></div>` : ''}
      </dl>
      ${cup.note ? `<p>${cup.note}</p>` : ''}
      <a href="/cuper/${cup.slug}" aria-label="Läs mer om ${cup.title}">Läs mer ${arrow}</a>
    </div>
  </article>`).join('');

const homeMarkup = `
  <div class="topline">Kvalitet · utveckling · fotboll tillsammans</div>
  <header class="header">
    <a class="brand" href="#top" aria-label="Supercuper startsida"><img src="/logos/supercuper-main.jpg" alt="Super Cuper – Fotboll tillsammans" /></a>
    <button class="menu-button" aria-expanded="false" aria-controls="menu"><span></span><span></span><span></span><b class="sr-only">Öppna meny</b></button>
    <nav id="menu" class="nav" aria-label="Huvudmeny">
      <a href="#top">Hem</a><a href="#super-tv">Super-TV</a><a href="#arrangemang">Cuper</a><a href="#information">Information</a><a href="#om-oss">Om oss</a>
      <a class="nav-cta" href="#kontakt">Intresseanmälan ${arrow}</a>
    </nav>
  </header>
  <main id="top">
    <section class="hero">
      <img class="hero-photo" src="/images/hero-match.jpg" alt="Ungdomsspelare i en intensiv fotbollsmatch" />
      <div class="hero-shade"></div>
      <div class="hero-content">
        <p class="kicker">Super Cuper · Solna</p>
        <h1>Fotboll<br />tillsammans.</h1>
        <p class="hero-lead">Välorganiserade cuper och matchcamper med jämna matcher, tydlig information och en upplevelse spelarna minns.</p>
        <a class="primary" href="#arrangemang">Se kommande cuper ${arrow}</a>
      </div>
      <a class="scroll" href="#arrangemang">Kommande cuper <span>↓</span></a>
    </section>
    <section id="arrangemang" class="cups-section">
      <div class="cups-heading">
        <div><p class="section-label">Kalender</p><h2>Kommande cuper</h2></div>
        <div class="cup-controls" aria-label="Bläddra bland cuper"><button type="button" data-direction="-1" aria-label="Föregående cuper">←</button><button type="button" data-direction="1" aria-label="Nästa cuper">→</button></div>
      </div>
      <div class="cups-rail" tabindex="0" aria-label="Planerade cuper">${cupCards}</div>
    </section>
    <section id="information" class="intro wrap">
      <p class="section-label">Vår idé</p>
      <div><h2>Rätt matcher.<br />Rätt nivå. <em>Större upplevelse.</em></h2><p>Vi bygger cupdagar där fotbollen står i centrum och allt runt omkring fungerar. Tydlig nivåindelning, genomtänkta spelscheman och ett värdskap som märks.</p></div>
    </section>
    <section id="om-oss" class="concept">
      <div class="concept-image"><img src="/images/team-preparing.jpg" alt="Fotbollslag samlat inför match" loading="lazy" /></div>
      <div class="concept-copy"><p class="section-label light">Super Cuper</p><h2>Byggt för<br />bra fotboll.</h2>
        <ol><li><span>01</span><div><h3>Jämna matcher</h3><p>Lag matchas efter ålder, spelform och faktisk nivå.</p></div></li><li><span>02</span><div><h3>Mer tid på planen</h3><p>Smarta spelscheman med meningsfulla matcher och mindre väntan.</p></div></li><li><span>03</span><div><h3>Tydligt hela vägen</h3><p>Samlad information och närvarande värdskap före och under cupen.</p></div></li></ol>
      </div>
    </section>
    <section id="super-tv" class="tv-teaser"><div class="wrap"><p class="section-label light">Super-TV</p><h2>Matcherna.<br />Minnena. <em>Snart här.</em></h2><p>Livesändningar, repriser och höjdpunkter från våra cuper samlas på ett ställe.</p></div></section>
    <section class="statement wrap"><p class="section-label">För spelarna</p><blockquote>“Det ska kännas stort<br />redan innan avspark.”</blockquote></section>
    <section id="kontakt" class="contact">
      <div class="wrap contact-inner"><div><p class="section-label light">Få förtur</p><h2>Vilken cup<br />väntar ni på?</h2></div>
        <form id="interest" class="contact-form" action="https://formsubmit.co/robertgiuricici@gmail.com" method="POST"><input type="hidden" name="_subject" value="Ny intresseanmälan från Super Cuper" /><input type="hidden" name="_template" value="table" /><div class="contact-fields"><label for="name">Namn<input id="name" name="name" autocomplete="name" required placeholder="Ditt namn" /></label><label for="club">Klubb<input id="club" name="club" required placeholder="Lag eller klubb" /></label><label for="email">E-post<input id="email" name="email" type="email" autocomplete="email" required placeholder="din@klubb.se" /></label><label class="message-field" for="message">Meddelande<textarea id="message" name="message" rows="3" placeholder="Vilken cup är ni intresserade av?"></textarea></label></div><button class="form-submit" type="submit">Skicka intresseanmälan ${arrow}</button><p>Din intresseanmälan skickas direkt till Super Cuper.</p></form>
      </div>
    </section>
  </main>
  <footer class="footer wrap"><a class="brand dark" href="#top" aria-label="Supercuper startsida"><img src="/logos/supercuper-main.jpg" alt="Super Cuper – Fotboll tillsammans" /></a><div><p>Fotbollscuper & matchcamper</p><p>Solna, Sverige</p></div><div><a href="mailto:hej@supercuper.se">hej@supercuper.se</a><a href="#top">Till toppen ↑</a></div><small>© ${new Date().getFullYear()} Super Cuper</small></footer>
`;

const phaseOneA = [
  ['15:00–15:20', 'Fisksätra Y-O', 'Hammarby A2'],
  ['15:23–15:43', 'Norsborgs FC', 'Vendelsö IK'],
  ['15:46–16:06', 'Fisksätra Y-O', 'Norsborgs FC'],
  ['16:09–16:29', 'Hammarby A2', 'Vendelsö IK'],
  ['16:32–16:52', 'Fisksätra Y-O', 'Vendelsö IK'],
  ['16:55–17:15', 'Hammarby A2', 'Norsborgs FC'],
];
const phaseOneB = [
  ['15:00–15:20', 'IFK Haninge', 'AS Solna 1'],
  ['15:23–15:43', 'IFK Lidingö', 'Kista SC'],
  ['15:46–16:06', 'IFK Haninge', 'IFK Lidingö'],
  ['16:09–16:29', 'AS Solna 1', 'Kista SC'],
  ['16:32–16:52', 'IFK Haninge', 'Kista SC'],
  ['16:55–17:15', 'AS Solna 1', 'IFK Lidingö'],
];
const phaseTwoGold = [
  ['17:25–17:45', 'A1', 'B2'], ['17:47–18:07', 'B1', 'A2'], ['18:09–18:29', 'A1', 'B1'],
  ['18:31–18:51', 'A2', 'B2'], ['18:53–19:13', 'A1', 'A2'], ['19:15–19:35', 'B1', 'B2'],
];
const phaseTwoSilver = [
  ['17:25–17:45', 'A3', 'B4'], ['17:47–18:07', 'B3', 'A4'], ['18:09–18:29', 'A3', 'B3'],
  ['18:31–18:51', 'A4', 'B4'], ['18:53–19:13', 'A3', 'A4'], ['19:15–19:35', 'B3', 'B4'],
];
const scheduleTable = (title, rows) => `<div class="schedule-card"><h4>${title}</h4><table><thead><tr><th>Tid</th><th>Match</th></tr></thead><tbody>${rows.map(([time, home, away]) => `<tr><td>${time}</td><td><span>${home}</span><i>–</i><span>${away}</span></td></tr>`).join('')}</tbody></table></div>`;

const detailHeader = `
  <div class="topline">Kvalitet · utveckling · fotboll tillsammans</div>
  <header class="header detail-nav">
    <a class="brand" href="/" aria-label="Supercuper startsida"><img src="/logos/supercuper-main.jpg" alt="Super Cuper – Fotboll tillsammans" /></a>
    <button class="menu-button" aria-expanded="false" aria-controls="menu"><span></span><span></span><span></span><b class="sr-only">Öppna meny</b></button>
    <nav id="menu" class="nav" aria-label="Huvudmeny"><a href="/">Hem</a><a href="/#super-tv">Super-TV</a><a href="/#arrangemang">Cuper</a><a href="/#information">Information</a><a href="/#om-oss">Om oss</a><a class="nav-cta" href="/#kontakt">Intresseanmälan ${arrow}</a></nav>
  </header>`;

const detailFooter = `<footer class="footer wrap"><a class="brand dark" href="/" aria-label="Supercuper startsida"><img src="/logos/supercuper-main.jpg" alt="Super Cuper – Fotboll tillsammans" /></a><div><p>Fotbollscuper & matchcamper</p><p>Solna, Sverige</p></div><div><a href="mailto:hej@supercuper.se">hej@supercuper.se</a><a href="#top">Till toppen ↑</a></div><small>© ${new Date().getFullYear()} Super Cuper</small></footer>`;

const blixtPage = (cup) => `${detailHeader}
  <main id="top" class="cup-page">
    <section class="cup-page-hero">
      <img src="/images/rastasjon-ip.webp" alt="Fotbollsplanerna på Råstasjöns IP i Solna" />
      <div class="cup-page-overlay"></div>
      <div class="cup-page-title"><p>18 oktober · Råstasjöns IP, Solna</p><h1>Solna<br />Blixt Camp</h1></div>
      <small>Foto: Sports Labs</small>
    </section>
    <nav class="breadcrumbs wrap" aria-label="Brödsmulor"><a href="/">Hem</a><span>/</span><a href="/#arrangemang">Cuper</a><span>/</span><strong>Solna Blixt Camp</strong></nav>
    <section class="cup-intro wrap">
      <div class="cup-intro-copy"><p class="section-label">Inbjudningsturnering · 7v7</p><h2>Välkomna till<br />Solna Blixt Camp.</h2><p class="lead">En inbjudningsturnering för två åldersklasser som vänder sig till lag på svår och extra svår nivå. Cupen spelas på anrika Råstasjöns IP i Solna.</p><p>Alla lag garanteras sex matcher om 1 × 20 minuter. Här utmanas ni i att hålla ett högt tempo redan från start och får möjlighet att träna på att spela en effektiv fotboll under totalt 120 intensiva fotbollsminuter.</p><p>Samtliga lag har tillgång till omklädningsrum. Kiosk och grill finns på plats. Alla lag tilldelas medaljer och matchens spelare utses efter varje match.</p></div>
      <aside class="cup-facts">
        <div class="detail-logos"><img src="/logos/supercuper-main.jpg" alt="Super Cuper logotyp" /><i>×</i><img src="/logos/as-solna-ff.jpg" alt="AS Solna FF logotyp" /></div>
        <dl><div><dt>Var</dt><dd>Råstasjöns IP, Solna</dd></div><div><dt>När</dt><dd>18 oktober</dd></div><div><dt>Åldrar</dt><dd>B2018 · B2016/2015</dd></div><div><dt>Spelform</dt><dd>5v5 · 7v7</dd></div><div><dt>Nivå</dt><dd>Svår · extra svår</dd></div><div><dt>Medarrangör</dt><dd>AS Solna FF</dd></div></dl>
      </aside>
    </section>
    <section class="schedule-section">
      <div class="wrap"><div class="schedule-heading"><p class="section-label">Spelschema</p><h2>7v7</h2><div><span>18 oktober</span><span>Råstasjöns IP</span><span>2 planer</span></div></div>
        <div class="groups"><article><h3>Grupp A</h3><ol><li>Fisksätra Y-O</li><li>Norsborgs FC</li><li>Vendelsö IK</li><li>Hammarby A2</li></ol></article><article><h3>Grupp B</h3><ol><li>IFK Haninge</li><li>IFK Lidingö</li><li>Kista SC</li><li>AS Solna 1</li></ol></article></div>
        <h3 class="phase-title">Gruppspel · fas 1</h3><p class="swipe-hint">Svep för plan 2 →</p><div class="schedule-grid">${scheduleTable('Plan 1 · Grupp A', phaseOneA)}${scheduleTable('Plan 2 · Grupp B', phaseOneB)}</div>
        <div class="schedule-break"><strong>17:15–17:25</strong><span>Paus · 10 minuter</span></div>
        <h3 class="phase-title">Gruppspel · fas 2</h3><p class="swipe-hint">Svep för plan 2 →</p><div class="schedule-grid">${scheduleTable('Plan 1 · Guldgrupp', phaseTwoGold)}${scheduleTable('Plan 2 · Silvergrupp', phaseTwoSilver)}</div>
        <div class="schedule-end"><strong>19:35</strong><span>Avslutning</span></div>
      </div>
    </section>
    <section class="detail-cta"><p>Solna Blixt Camp</p><h2>Många intensiva matcher.<br />Varje aktion räknas.</h2><a class="primary" href="/#kontakt">Anmäl intresse ${arrow}</a></section>
  </main>${detailFooter}`;

const genericCupPage = (cup) => `${detailHeader}<main id="top" class="cup-page generic-cup"><section class="generic-hero"><div><p>${cup.date} · ${cup.place}</p><h1>${cup.title}</h1></div><img src="${cup.logo || cup.image}" alt="${cup.title}" /></section><nav class="breadcrumbs wrap" aria-label="Brödsmulor"><a href="/">Hem</a><span>/</span><a href="/#arrangemang">Cuper</a><span>/</span><strong>${cup.title}</strong></nav><section class="generic-copy wrap"><p class="section-label">Kommande cup</p><h2>Mer information<br />kommer snart.</h2><dl><div><dt>Var</dt><dd>${cup.place}</dd></div><div><dt>När</dt><dd>${cup.date}</dd></div><div><dt>Åldrar</dt><dd>${cup.ages}</dd></div><div><dt>Spelform</dt><dd>${cup.format}</dd></div></dl><a class="primary" href="/#kontakt">Anmäl intresse ${arrow}</a></section></main>${detailFooter}`;

const slug = decodeURIComponent(window.location.pathname).match(/^\/cuper\/([^/]+)\/?$/)?.[1];
const activeCup = cups.find((cup) => cup.slug === slug);
document.querySelector('#app').innerHTML = activeCup ? (activeCup.slug === 'solna-blixt-camp' ? blixtPage(activeCup) : genericCupPage(activeCup)) : homeMarkup;
if (activeCup) {
  document.title = `${activeCup.title} — Super Cuper`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', `${activeCup.title}: ${activeCup.date}, ${activeCup.place}. Åldrar ${activeCup.ages}, spelform ${activeCup.format}.`);
}

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const rail = document.querySelector('.cups-rail');
document.querySelectorAll('.cup-controls button').forEach((button) => button.addEventListener('click', () => {
  rail?.scrollBy({ left: Number(button.dataset.direction) * Math.min(rail.clientWidth * .82, 940), behavior: 'smooth' });
}));
