import './style.css';

const cups = [
  { slug: 'solna-blixt-camp', title: 'Solna Blixt Camp', place: 'Råstasjöns IP, Solna', date: '18 oktober', ages: 'B2018 · B2015', format: '5v5 · 7v7', note: '', cohost: 'AS Solna FF', logos: ['/logos/supercuper-main.jpg', '/logos/as-solna-ff.jpg'] },
  { slug: 'super-five', title: 'Super Five', place: 'Järvastadens IP, Solna', date: '24–25/10', ages: 'B2019', format: '5v5', note: 'Planerad cup', logo: '/logos/super-five.jpg' },
  { slug: 'super-six', title: 'Super Six', place: 'Meddelas snart', date: 'TBD', ages: 'Meddelas snart', format: '6v6', note: 'Intresseanmälan öppen', logo: '/logos/super-six.jpg' },
  { slug: 'super-eight', title: 'Super Eight', place: 'Meddelas snart', date: 'TBD', ages: 'B2015', format: '8v8', note: 'Intresseanmälan öppen', logo: '/logos/super-8.jpg' },
  { slug: 'super-nine', title: 'Super Nine', place: 'Meddelas snart', date: 'TBD', ages: 'B2015 & B2014', format: '9v9', note: 'Intresseanmälan öppen', logo: '/logos/super-nine.jpg' },
  { slug: 'solna-masterskapen', title: 'Solna Mästerskapen', place: 'Solna · arena meddelas snart', date: '2027', ages: 'B2019–B2015 · G2019–G2015', format: 'Meddelas snart', note: 'Flera åldersklasser', logo: '/logos/solna-masterskapen-2027.png', artwork: true },
];

const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>';
const downArrow = '<svg class="down-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v15M6.5 13.5 12 19l5.5-5.5"/></svg>';
const searchIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></svg>';
const mailIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6.5h18v12H3zM3.5 7l8.5 7 8.5-7"/></svg>';
const instagramIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="social-dot" cx="17.4" cy="6.7" r="1"/></svg>';
const youtubeIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 8.1c-.2-1.4-1-2.3-2.4-2.5C16.7 5.3 14.5 5.2 12 5.2s-4.7.1-6.6.4C4 5.8 3.2 6.7 3 8.1c-.2 1.2-.3 2.5-.3 3.9s.1 2.7.3 3.9c.2 1.4 1 2.3 2.4 2.5 1.9.3 4.1.4 6.6.4s4.7-.1 6.6-.4c1.4-.2 2.2-1.1 2.4-2.5.2-1.2.3-2.5.3-3.9s-.1-2.7-.3-3.9Z"/><path d="m10 9 5 3-5 3Z"/></svg>';
const tiktokIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.2 3v11.7a4.4 4.4 0 1 1-3.6-4.3v3.4a1.5 1.5 0 1 0 .6 1.2V3h3c.4 2.2 1.7 3.6 4 4v3.1a8.2 8.2 0 0 1-4-1.5"/></svg>';
const footballIcon = '<span class="faq-ball"></span>';
const footerMarkup = (prefix = '') => `<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-contact"><h2>Kontakt</h2><a href="mailto:hej@supercuper.se">hej@supercuper.se</a><p>Solna<br />Sverige</p></div>
    <div class="footer-links"><h2>Länkar</h2><a href="${prefix}#top">Hem</a><a href="${prefix}#super-tv">Super-TV</a><a href="${prefix}#arrangemang">Cuper</a><a href="/information">Information</a><a href="/om-oss">Om oss</a></div>
    <div class="footer-social"><h2>Social</h2><div class="social-icons" aria-label="Super Cuper i sociala medier"><span aria-label="Instagram">${instagramIcon}</span><span aria-label="YouTube">${youtubeIcon}</span><span aria-label="TikTok">${tiktokIcon}</span></div><a class="footer-policy" href="mailto:hej@supercuper.se?subject=Villkor%20och%20policy">Villkor och policy</a><p class="footer-copy">© ${new Date().getFullYear()} Super Cuper</p></div>
  </div>
</footer>`;
const priorityMarkup = () => `<section class="priority-invite" aria-labelledby="priority-title">
  <div class="priority-inner">
    <p class="priority-label">Förtur för lag</p>
    <h2 id="priority-title">Först till nästa avspark.</h2>
    <p>Anslut laget till Super Cupers förturslista. Ni får inbjudningar till nya cuper och matchcamper innan platserna släpps brett.</p>
    <a href="/fortur">Säkra lagets förtur ${arrow}</a>
  </div>
</section>`;
const faqQuestions = [
  {
    question: 'När stänger anmälan?',
    answer: '<p>Anmälan är öppen så länge det finns lediga platser. När en cup är fullbokad stänger vi anmälan, vilket innebär att den kan stänga tidigare än planerat. Vi rekommenderar därför att ni anmäler laget i god tid.</p>',
  },
  {
    question: 'Vad gäller vid sjukdom eller skada?',
    answer: '<p>Vi vet att saker kan förändras inför en cup. Enstaka spelare kan därför läggas till eller tas bort från lagets anmälan fram till två veckor före cupstart.</p>',
  },
  {
    question: 'När får vi fakturan för deltagandet?',
    answer: '<p>Fakturan för anmälningsavgiften skickas efter att lagets plats har bekräftats och ska betalas inom 10 dagar. Eventuell deltagaravgift faktureras cirka tre månader före cupen.</p>',
  },
  {
    question: 'Går det att titta på matcherna i efterhand?',
    answer: '<p>Snart kommer ni kunna följa matcherna både live och i efterhand via <strong>Super-TV</strong>. Vi arbetar just nu med att färdigställa tjänsten och kommer att dela mer information när lanseringen närmar sig.</p>',
  },
  {
    question: 'Är vår plats bekräftad direkt efter anmälan?',
    answer: '<p>Nej. En inskickad anmälan innebär inte automatiskt att laget har fått en plats. Vi förbehåller oss möjligheten att göra ett urval för att skapa en bra geografisk spridning och framför allt så jämna, konkurrenskraftiga och utvecklande matcher som möjligt.</p><p>Lagets plats är bekräftad först när ni har fått en bekräftelse/faktura från oss och anmälningsavgiften är betald.</p>',
  },
];
const faqMarkup = `<section class="faq-section" aria-labelledby="faq-title">
  <div class="faq-inner">
    <div class="faq-heading"><h2 id="faq-title">Bra att veta</h2></div>
    <div class="faq-list">${faqQuestions.map(({ question, answer }, index) => `<details class="faq-item"><summary><span><i>${String(index + 1).padStart(2, '0')}</i>${question}</span><b aria-hidden="true">${footballIcon}</b></summary><div class="faq-answer">${answer}</div></details>`).join('')}</div>
  </div>
</section>`;
const blixtClubs = [
  ['AS Solna FF', 'as-solna'], ['Järfälla FF', 'jarfalla'], ['AIK', 'aik'], ['Södertälje FF', 'sodertalje'],
  ['Fisksätra IF', 'fisksatra'], ['Vendelsö IK', 'vendelso'], ['Kista SC', 'kista'],
  ['IFK Stocksund', 'stocksund'], ['IFK Haninge', 'haninge'],
  ['Arameisk-Syrianska IF', 'arameisk'], ['IFK Lidingö', 'lidingo'],
];
const clubLogoCards = blixtClubs.map(([name, file]) => `<div class="club-logo-card"><img src="/logos/clubs/${file}.webp" alt="${name} logotyp" draggable="false" /><span>${name}</span></div>`).join('');
const cupCards = cups.map((cup) => `
  <article class="cup-card">
    <a class="cup-visual ${cup.logos ? 'co-brand' : cup.artwork ? 'cup-artwork' : cup.logo ? 'cup-logo' : ''}" href="/cuper/${cup.slug}" aria-label="Läs mer om ${cup.title}">
      ${cup.logos ? cup.logos.map((logo, index) => `<img src="${logo}" alt="${index === 0 ? 'Super Cuper logotyp' : 'AS Solna FF logotyp'}" loading="lazy" />`).join('<i aria-hidden="true">×</i>') : `<img src="${cup.logo || cup.image}" alt="${cup.logo ? `${cup.title} logotyp` : `Fotboll under ${cup.title}`}" loading="lazy" />`}
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
    <div class="mobile-tools mobile-tools-left">
      <button class="menu-button" aria-expanded="false" aria-controls="menu"><span></span><span></span><span></span><b class="sr-only">Öppna meny</b></button>
      <a href="#arrangemang" aria-label="Se kommande cuper">${searchIcon}</a>
    </div>
    <a class="brand" href="#top" aria-label="Supercuper startsida"><img src="/logos/supercuper-main.jpg" alt="Super Cuper – Fotboll tillsammans" /></a>
    <nav id="menu" class="nav" aria-label="Huvudmeny">
      <a href="#top">Hem</a><a href="#super-tv">Super-TV</a><a href="#arrangemang">Cuper</a><a href="/information">Information</a><a href="/om-oss">Om oss</a>
    </nav>
    <div class="mobile-tools mobile-tools-right"><a href="/fortur" aria-label="Säkra lagets förtur">${mailIcon}</a></div>
  </header>
  <main id="top">
    <section class="hero">
      <img class="hero-photo" src="/images/hero-real-madrid.webp" alt="Ungdomsspelare från Super Cuper i match mot Real Madrid" />
      <div class="hero-shade"></div>
      <div class="hero-content">
        <p class="kicker">Super Cuper · Solna</p>
        <h1>Fotboll<br />tillsammans.</h1>
        <p class="hero-lead">Välorganiserade cuper och matchcamper med jämna matcher, tydlig information och en upplevelse spelarna minns.</p>
        <a class="primary" href="#arrangemang">Se kommande cuper ${downArrow}</a>
      </div>
    </section>
    <section id="arrangemang" class="cups-section">
      <div class="cups-heading">
        <div><p class="section-label">Kalender</p><h2>Kommande cuper</h2></div>
        <div class="cup-controls" aria-label="Bläddra bland cuper"><button type="button" data-direction="-1" aria-label="Föregående cuper">←</button><button type="button" data-direction="1" aria-label="Nästa cuper">→</button></div>
      </div>
      <div class="cups-rail" tabindex="0" aria-label="Planerade cuper">${cupCards}</div>
    </section>
    <section id="super-tv" class="tv-teaser"><div class="wrap"><p class="section-label light">Super-TV</p><h2>Matcherna.<br />Minnena. <em>Snart här.</em></h2><p>Livesändningar, repriser och höjdpunkter från våra cuper samlas på ett ställe.</p></div></section>
  </main>
  ${faqMarkup}
  ${priorityMarkup()}
  ${footerMarkup()}
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
const fivePhaseOneA = [
  ['13:00–13:15', 'Järfälla FF', 'AIK Grön 2'],
  ['13:16–13:31', 'Arameiska Syrianska 1', 'IFK Stocksund 2'],
  ['13:32–13:47', 'Järfälla FF', 'Arameiska Syrianska 1'],
  ['13:48–14:03', 'AIK Grön 2', 'IFK Stocksund 2'],
  ['14:04–14:19', 'Järfälla FF', 'IFK Stocksund 2'],
  ['14:20–14:35', 'AIK Grön 2', 'Arameiska Syrianska 1'],
];
const fivePhaseOneB = [
  ['13:00–13:15', 'AIK Grön 1', 'Arameiska Syrianska 2'],
  ['13:16–13:31', 'IFK Stocksund 1', 'Södertälje FF'],
  ['13:32–13:47', 'AIK Grön 1', 'IFK Stocksund 1'],
  ['13:48–14:03', 'Arameiska Syrianska 2', 'Södertälje FF'],
  ['14:04–14:19', 'AIK Grön 1', 'Södertälje FF'],
  ['14:20–14:35', 'IFK Stocksund 1', 'Arameiska Syrianska 2'],
];
const fivePhaseTwoGold = [
  ['14:40–14:55', 'A1', 'B1'], ['14:56–15:11', 'A2', 'B2'], ['15:12–15:27', 'A1', 'A2'],
  ['15:28–15:43', 'B1', 'B2'], ['15:44–15:59', 'A1', 'B2'], ['16:00–16:10', 'A2', 'B1'],
];
const fivePhaseTwoSilver = [
  ['14:40–14:55', 'A3', 'B3'], ['14:56–15:11', 'A4', 'B4'], ['15:12–15:27', 'A3', 'A4'],
  ['15:28–15:43', 'B3', 'B4'], ['15:44–15:59', 'A3', 'B4'], ['16:00–16:10', 'A4', 'B3'],
];
const scheduleTable = (title, rows) => `<div class="schedule-card"><h4>${title}</h4><table><thead><tr><th>Tid</th><th>Match</th></tr></thead><tbody>${rows.map(([time, home, away]) => `<tr><td>${time}</td><td><span>${home}</span><i>–</i><span>${away}</span></td></tr>`).join('')}</tbody></table></div>`;

const detailHeader = `
  <div class="topline">Kvalitet · utveckling · fotboll tillsammans</div>
  <header class="header detail-nav">
    <div class="mobile-tools mobile-tools-left">
      <button class="menu-button" aria-expanded="false" aria-controls="menu"><span></span><span></span><span></span><b class="sr-only">Öppna meny</b></button>
      <a href="/#arrangemang" aria-label="Se kommande cuper">${searchIcon}</a>
    </div>
    <a class="brand" href="/" aria-label="Supercuper startsida"><img src="/logos/supercuper-main.jpg" alt="Super Cuper – Fotboll tillsammans" /></a>
    <nav id="menu" class="nav" aria-label="Huvudmeny"><a href="/">Hem</a><a href="/#super-tv">Super-TV</a><a href="/#arrangemang">Cuper</a><a href="/information">Information</a><a href="/om-oss">Om oss</a></nav>
    <div class="mobile-tools mobile-tools-right"><a href="/fortur" aria-label="Säkra lagets förtur">${mailIcon}</a></div>
  </header>`;

const detailFooter = `${faqMarkup}${priorityMarkup()}${footerMarkup('/')}`;

const contentPage = (eyebrow, title, intro) => `${detailHeader}
  <main id="top" class="content-page">
    <section class="content-page-hero"><p>${eyebrow}</p><h1>${title}</h1><div><span>Super Cuper</span><p>${intro}</p></div></section>
    <section class="content-page-ready"><p class="section-label">Mer kommer</p><h2>Sidan fylls på<br />inom kort.</h2><p>Här samlar vi snart all information på ett tydligt och lättillgängligt sätt.</p><a class="primary" href="/#arrangemang">Se kommande cuper ${arrow}</a></section>
  </main>
  ${footerMarkup('/')}`;

const informationPage = contentPage('Bra att veta', 'Information', 'Praktisk information före, under och efter våra cuper och matchcamper.');
const aboutPage = contentPage('Fotboll tillsammans', 'Om oss', 'Lär känna människorna, ambitionen och tanken bakom Super Cuper.');

const priorityPage = `${detailHeader}
  <main id="top" class="priority-page">
    <section class="priority-page-intro">
      <div class="priority-page-copy"><p>Super Cuper · Förturslistan</p><h1>Var först<br />på bollen.</h1><p>De bästa matcherna börjar med rätt lag. Registrera ert intresse så får ni information om nya cuper och matchcamper innan platserna släpps brett.</p></div>
      <div class="priority-benefits" aria-label="Fördelar med förturslistan"><span><b>01</b>Tidig information</span><span><b>02</b>Personliga inbjudningar</span><span><b>03</b>Rätt nivå från start</span></div>
    </section>
    <section class="priority-form-section">
      <div class="priority-form-heading"><p class="section-label">Registrera laget</p><h2>Berätta vilka<br />ni är.</h2><p>Det tar mindre än en minut. En registrering är kostnadsfri och innebär ingen bindande anmälan till en cup.</p></div>
      <form id="priority-form" class="priority-form" action="https://formsubmit.co/robertgiuricici@gmail.com" method="POST">
        <input type="hidden" name="_subject" value="Ny registrering till Super Cupers förturslista" /><input type="hidden" name="_template" value="table" />
        <div class="priority-field"><label for="contact-name">Kontaktperson</label><input id="contact-name" name="Kontaktperson" autocomplete="name" required placeholder="För- och efternamn" /></div>
        <div class="priority-field"><label for="priority-email">E-post</label><input id="priority-email" name="E-post" type="email" autocomplete="email" required placeholder="namn@klubb.se" /></div>
        <div class="priority-field"><label for="priority-phone">Telefon</label><input id="priority-phone" name="Telefon" type="tel" autocomplete="tel" required placeholder="070 000 00 00" /></div>
        <div class="priority-field"><label for="priority-club">Klubb</label><input id="priority-club" name="Klubb" required placeholder="Klubbens namn" /></div>
        <div class="priority-field"><label for="priority-team">Lag</label><input id="priority-team" name="Lag" required placeholder="Exempel: P2015 Svår" /></div>
        <div class="priority-field"><label for="priority-age">Åldersklass</label><select id="priority-age" name="Åldersklass" required><option value="" selected disabled>Välj åldersklass</option><option>B2019</option><option>B2018</option><option>B2017</option><option>B2016</option><option>B2015</option><option>B2014</option><option>G2019</option><option>G2018</option><option>G2017</option><option>G2016</option><option>G2015</option><option>Annan</option></select></div>
        <div class="priority-field priority-field-wide"><label for="priority-message">Något vi bör veta? <span>Valfritt</span></label><textarea id="priority-message" name="Meddelande" rows="3" placeholder="Nivå, önskad spelform eller annan relevant information"></textarea></div>
        <label class="priority-consent"><input type="checkbox" name="Godkännande" value="Ja" required /><span>Jag godkänner att Super Cuper kontaktar mig med information och relevanta inbjudningar.</span></label>
        <button type="submit">Registrera laget ${arrow}</button>
        <p class="priority-privacy">Uppgifterna används endast av Super Cuper och delas inte med andra.</p>
      </form>
    </section>
  </main>
  ${faqMarkup}${footerMarkup('/')}`;

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
        <dl><div><dt>Var</dt><dd>Råstasjöns IP, Solna</dd></div><div><dt>När</dt><dd>18 oktober</dd></div><div><dt>Åldrar</dt><dd>B2018 · B2015</dd></div><div><dt>Spelform</dt><dd>5v5 · 7v7</dd></div><div><dt>Nivå</dt><dd>Svår · extra svår</dd></div><div><dt>Medarrangör</dt><dd>AS Solna FF</dd></div></dl>
      </aside>
    </section>
    <section class="schedule-section">
      <div class="wrap"><div class="schedule-heading"><p class="section-label">Grupper & spelschema</p><h2>Två klasser</h2><div><span>18 oktober</span><span>Råstasjöns IP</span><span>5v5 · 7v7</span></div></div>
        <div class="age-schedules">
          <article class="age-column">
            <header class="age-heading"><p>B2015</p><h3>7v7</h3><span>2 planer · 8 lag</span></header>
            <div class="groups"><article><h3>Grupp A</h3><ol><li>Fisksätra Y-O</li><li>Norsborgs FC</li><li>Vendelsö IK</li><li>Hammarby A2</li></ol></article><article><h3>Grupp B</h3><ol><li>IFK Haninge</li><li>IFK Lidingö</li><li>Kista SC</li><li>AS Solna 1</li></ol></article></div>
            <h3 class="phase-title">Gruppspel · fas 1</h3><p class="swipe-hint">Svep för plan 2 →</p><div class="schedule-grid">${scheduleTable('Plan 1 · Grupp A', phaseOneA)}${scheduleTable('Plan 2 · Grupp B', phaseOneB)}</div>
            <div class="schedule-break"><strong>17:15–17:25</strong><span>Paus · 10 min</span></div>
            <h3 class="phase-title">Gruppspel · fas 2</h3><p class="swipe-hint">Svep för plan 2 →</p><div class="schedule-grid">${scheduleTable('Plan 1 · Guldgrupp', phaseTwoGold)}${scheduleTable('Plan 2 · Silvergrupp', phaseTwoSilver)}</div>
            <div class="schedule-end"><strong>19:35</strong><span>Avslutning</span></div>
          </article>
          <article class="age-column">
            <header class="age-heading"><p>B2018</p><h3>5v5</h3><span>2 planer · 8 lag</span></header>
            <div class="groups"><article><h3>Grupp A</h3><ol><li>Järfälla FF</li><li>Arameiska Syrianska 1</li><li>IFK Stocksund 2</li><li>AIK Grön 2</li></ol></article><article><h3>Grupp B</h3><ol><li>AIK Grön 1</li><li>IFK Stocksund 1</li><li>Södertälje FF</li><li>Arameiska Syrianska 2</li></ol></article></div>
            <h3 class="phase-title">Gruppspel · fas 1</h3><p class="swipe-hint">Svep för plan 2 →</p><div class="schedule-grid">${scheduleTable('Plan 1 · Grupp A', fivePhaseOneA)}${scheduleTable('Plan 2 · Grupp B', fivePhaseOneB)}</div>
            <div class="schedule-break"><strong>14:35–14:40</strong><span>Paus & omgruppering · 5 min</span></div>
            <h3 class="phase-title">Gruppspel · fas 2</h3><p class="swipe-hint">Svep för plan 2 →</p><div class="schedule-grid">${scheduleTable('Plan 1 · Guldgrupp', fivePhaseTwoGold)}${scheduleTable('Plan 2 · Silvergrupp', fivePhaseTwoSilver)}</div>
            <div class="schedule-end"><strong>16:10</strong><span>Avslutning</span></div>
          </article>
        </div>
      </div>
    </section>
    <section class="club-showcase" aria-label="Deltagande lag i Solna Blixt Camp">
      <div class="club-showcase-heading"><p>Solna Blixt Camp · deltagande lag</p><span>18 oktober · Råstasjöns IP</span></div>
      <div class="club-marquee" aria-label="Deltagande klubbar"><div class="club-marquee-track"><div class="club-logo-set" aria-hidden="true">${clubLogoCards}</div><div class="club-logo-set">${clubLogoCards}</div><div class="club-logo-set" aria-hidden="true">${clubLogoCards}</div></div></div>
    </section>
  </main>${detailFooter}`;

const genericCupPage = (cup) => `${detailHeader}<main id="top" class="cup-page generic-cup"><section class="generic-hero${cup.artwork ? ' artwork-hero' : ''}"><div><p>${cup.date} · ${cup.place}</p><h1>${cup.title}</h1></div><img src="${cup.logo || cup.image}" alt="${cup.title}" /></section><nav class="breadcrumbs wrap" aria-label="Brödsmulor"><a href="/">Hem</a><span>/</span><a href="/#arrangemang">Cuper</a><span>/</span><strong>${cup.title}</strong></nav><section class="generic-copy wrap"><p class="section-label">Kommande cup</p><h2>Mer information<br />kommer snart.</h2><dl><div><dt>Var</dt><dd>${cup.place}</dd></div><div><dt>När</dt><dd>${cup.date}</dd></div><div><dt>Åldrar</dt><dd>${cup.ages}</dd></div><div><dt>Spelform</dt><dd>${cup.format}</dd></div></dl><a class="primary" href="/fortur">Anmäl intresse ${arrow}</a></section></main>${detailFooter}`;

const slug = decodeURIComponent(window.location.pathname).match(/^\/cuper\/([^/]+)\/?$/)?.[1];
const activeCup = cups.find((cup) => cup.slug === slug);
const isPriorityPage = /^\/fortur\/?$/.test(window.location.pathname);
const isInformationPage = /^\/information\/?$/.test(window.location.pathname);
const isAboutPage = /^\/om-oss\/?$/.test(window.location.pathname);
document.querySelector('#app').innerHTML = isPriorityPage ? priorityPage : isInformationPage ? informationPage : isAboutPage ? aboutPage : activeCup ? (activeCup.slug === 'solna-blixt-camp' ? blixtPage(activeCup) : genericCupPage(activeCup)) : homeMarkup;
if (activeCup) {
  document.title = `${activeCup.title} — Super Cuper`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', `${activeCup.title}: ${activeCup.date}, ${activeCup.place}. Åldrar ${activeCup.ages}, spelform ${activeCup.format}.`);
}
if (isPriorityPage) {
  document.title = 'Förturslistan — Super Cuper';
  document.querySelector('meta[name="description"]')?.setAttribute('content', 'Registrera laget för tidig information och personliga inbjudningar till Super Cupers kommande cuper och matchcamper.');
}
if (isInformationPage) {
  document.title = 'Information — Super Cuper';
  document.querySelector('meta[name="description"]')?.setAttribute('content', 'Information om Super Cupers cuper och matchcamper.');
}
if (isAboutPage) {
  document.title = 'Om oss — Super Cuper';
  document.querySelector('meta[name="description"]')?.setAttribute('content', 'Om Super Cuper och vår ambition för utvecklande fotbollscuper och matchcamper.');
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

const clubMarquee = document.querySelector('.club-marquee');
if (clubMarquee) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let paused = reduceMotion;
  let dragging = false;
  let pointerId;
  let startX = 0;
  let startScroll = 0;
  let lastFrame = performance.now();
  let resumeTimer;

  const normalizeScroll = () => {
    const loopWidth = clubMarquee.scrollWidth / 3;
    if (loopWidth && clubMarquee.scrollLeft >= loopWidth * 2) clubMarquee.scrollLeft -= loopWidth;
    if (loopWidth && clubMarquee.scrollLeft < loopWidth * .25) clubMarquee.scrollLeft += loopWidth;
  };
  const resumeSoon = () => {
    clearTimeout(resumeTimer);
    resumeTimer = window.setTimeout(() => { paused = reduceMotion; }, 850);
  };
  const animate = (now) => {
    if (!paused && !dragging) {
      clubMarquee.scrollLeft += Math.min(now - lastFrame, 50) * .03;
      normalizeScroll();
    }
    lastFrame = now;
    requestAnimationFrame(animate);
  };

  clubMarquee.addEventListener('pointerdown', (event) => {
    dragging = true;
    paused = true;
    pointerId = event.pointerId;
    startX = event.clientX;
    startScroll = clubMarquee.scrollLeft;
    clubMarquee.setPointerCapture(pointerId);
    clubMarquee.classList.add('is-dragging');
  });
  clubMarquee.addEventListener('pointermove', (event) => {
    if (!dragging || event.pointerId !== pointerId) return;
    clubMarquee.scrollLeft = startScroll - (event.clientX - startX);
    normalizeScroll();
  });
  const finishDrag = (event) => {
    if (!dragging || event.pointerId !== pointerId) return;
    dragging = false;
    clubMarquee.classList.remove('is-dragging');
    if (clubMarquee.hasPointerCapture(pointerId)) clubMarquee.releasePointerCapture(pointerId);
    resumeSoon();
  };
  clubMarquee.addEventListener('pointerup', finishDrag);
  clubMarquee.addEventListener('pointercancel', finishDrag);
  clubMarquee.scrollLeft = clubMarquee.scrollWidth / 3;
  requestAnimationFrame(animate);
}
