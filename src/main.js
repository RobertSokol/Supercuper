import './style.css';
import { competitionRulesHtml } from './competitionRules.js';

const cups = [
  { slug: 'solna-blixt-camp', title: 'Solna Blixt Camp', place: 'Råstasjöns IP, Solna', date: '18 oktober 2026', ages: 'B2018 · B2015', format: '5v5 · 7v7', cohost: 'AS Solna FF', logos: ['/logos/supercuper-main.jpg', '/logos/as-solna-ff.jpg'] },
  { slug: 'super-five', title: 'Super Five', place: 'TBD', date: '24–25 oktober 2026', ages: 'B2019', format: '5v5', logo: '/logos/super-five.jpg' },
  { slug: 'super-six', title: 'Super Six', place: 'Plats meddelas', date: 'Datum meddelas', ages: 'Åldersklass meddelas', format: '6v6', logo: '/logos/super-six.jpg', summary: 'Ett kommande Super Cuper-format med sex spelare per lag. Datum, plats och åldersklass publiceras när upplägget är fastställt.' },
  { slug: 'super-eight', title: 'Super Eight', place: 'Plats meddelas', date: 'Datum meddelas', ages: 'B2015', format: '8v8', logo: '/logos/super-8.jpg', summary: 'Super Eight planeras för B2015 och spelas i spelformen 8v8. Fullständig turneringsinformation publiceras när datum och arena är bekräftade.' },
  { slug: 'super-nine', title: 'Super Nine', place: 'Plats meddelas', date: 'Datum meddelas', ages: 'B2015 & B2014', format: '9v9', logo: '/logos/super-nine.jpg', summary: 'Super Nine planeras för B2015 och B2014 i spelformen 9v9. Datum, arena och matchupplägg publiceras när planeringen är klar.' },
  { slug: 'solna-masterskapen', title: 'Solna Mästerskapen', place: 'Solna · arena meddelas', date: '2027', ages: 'B2019–B2015 · G2019–G2015', format: 'Spelformer meddelas', logo: '/logos/solna-masterskapen-2027.webp', cardLogo: '/logos/solna-masterskapen-2027-card.webp', artwork: true, summary: 'Solna Mästerskapen samlar pojk- och flicklag födda 2019–2015. Arena, spelformer och datum publiceras när respektive klass är fastställd.' },
];

const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>';
const downArrow = '<svg class="down-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v15M6.5 13.5 12 19l5.5-5.5"/></svg>';
const calendarIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4.5h14a2 2 0 0 1 2 2v13H3v-13a2 2 0 0 1 2-2Z"/><path d="M3 9h18M8 2.5v4M16 2.5v4"/></svg>';
const interestIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-4.5 7-11a4 4 0 0 0-7-2.7A4 4 0 0 0 5 10c0 6.5 7 11 7 11Z"/></svg>';
const instagramIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.7" r="1"/></svg>';
// Font Awesome Free "futbol" icon, CC BY 4.0: https://fontawesome.com/license/free
const footballIcon = '<svg class="faq-ball" viewBox="0 0 512 512" aria-hidden="true"><path d="M417.3 360.1l-71.6-4.8c-5.2-.3-10.3 1.1-14.5 4.2s-7.2 7.4-8.4 12.5l-17.6 69.6C289.5 445.8 273 448 256 448s-33.5-2.2-49.2-6.4L189.2 372c-1.3-5-4.3-9.4-8.4-12.5s-9.3-4.5-14.5-4.2l-71.6 4.8c-17.6-27.2-28.5-59.2-30.4-93.6L125 228.3c4.4-2.8 7.6-7 9.2-11.9s1.4-10.2-.5-15l-26.7-66.6C128 109.2 155.3 89 186.7 76.9l55.2 46c4 3.3 9 5.1 14.1 5.1s10.2-1.8 14.1-5.1l55.2-46c31.3 12.1 58.7 32.3 79.6 57.9l-26.7 66.6c-1.9 4.8-2.1 10.1-.5 15s4.9 9.1 9.2 11.9l60.7 38.2c-1.9 34.4-12.8 66.4-30.4 93.6zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm14.1-325.7c-8.4-6.1-19.8-6.1-28.2 0L194 221c-8.4 6.1-11.9 16.9-8.7 26.8l18.3 56.3c3.2 9.9 12.4 16.6 22.8 16.6h59.2c10.4 0 19.6-6.7 22.8-16.6l18.3-56.3c3.2-9.9-.3-20.7-8.7-26.8l-47.9-34.8z"/></svg>';
const expandIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3H3v6M3 3l7 7M15 3h6v6M21 3l-7 7M9 21H3v-6M3 21l7-7M15 21h6v-6M21 21l-7-7"/></svg>';
const informationNavigation = '<div class="nav-dropdown"><button class="nav-trigger" type="button" data-menu-only aria-haspopup="true" aria-expanded="false">Information</button><div class="nav-submenu"><a href="/tavlingsbestammelser">Tävlingsbestämmelser</a></div></div>';
const aboutNavigation = '<div class="nav-dropdown"><a class="nav-trigger" href="/om-oss" aria-expanded="false">Om oss</a><div class="nav-submenu"><a href="/var-vardegrund">Vår värdegrund</a></div></div>';
const footerMarkup = (prefix = '') => `<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-contact"><h2>Kontakt</h2><a href="mailto:hej@supercuper.se">hej@supercuper.se</a><p>Solna<br />Sverige</p></div>
    <div class="footer-links"><h2>Länkar</h2><a href="${prefix}#top">Hem</a><a href="${prefix}#super-tv">Super-TV</a><a href="${prefix}#arrangemang">Cuper</a><a href="/fortur">Intresseanmälan</a><a href="/tavlingsbestammelser">Tävlingsbestämmelser</a><a href="/om-oss">Om oss</a><a href="/var-vardegrund">Vår värdegrund</a></div>
    <div class="footer-social"><h2>Följ Super Cuper</h2><a class="instagram-link" href="https://www.instagram.com/sup3rcuper/" target="_blank" rel="noopener noreferrer" aria-label="Följ Sup3rcuper på Instagram">${instagramIcon}<span>@sup3rcuper</span></a><a class="footer-policy" href="/integritet">Integritet</a><a class="footer-policy" href="/villkor">Villkor</a><p class="footer-copy">© ${new Date().getFullYear()} Super Cuper</p></div>
  </div>
</footer>`;
const priorityMarkup = () => `<section class="priority-invite" aria-labelledby="priority-title">
  <div class="priority-inner">
    <p class="priority-label">Intresseanmälan</p>
    <h2 id="priority-title">Få nästa inbjudan först.</h2>
    <p>Anmäl lagets generella intresse för Super Cuper. Då kan vi skicka nyheter och relevanta inbjudningar till kommande cuper och matchcamper.</p>
    <a href="/fortur">Anmäl lagets intresse ${arrow}</a>
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
  <a class="cup-card" href="/cuper/${cup.slug}" aria-label="Läs mer om ${cup.title}">
    <div class="cup-visual ${cup.logos ? 'co-brand' : cup.artwork ? 'cup-artwork' : cup.logo ? 'cup-logo' : ''}">
      ${cup.logos ? cup.logos.map((logo, index) => `<img src="${logo}" alt="${index === 0 ? 'Super Cuper logotyp' : 'AS Solna FF logotyp'}" loading="lazy" />`).join('<i aria-hidden="true">×</i>') : `<img src="${cup.cardLogo || cup.logo || cup.image}" alt="${cup.logo ? `${cup.title} logotyp` : `Fotboll under ${cup.title}`}" loading="lazy" />`}
    </div>
    <div class="cup-details">
      <h3>${cup.title}</h3>
      <dl>
        <div><dt>Var</dt><dd>${cup.place}</dd></div>
        <div><dt>När</dt><dd>${cup.date}</dd></div>
        <div><dt>Åldrar</dt><dd>${cup.ages}</dd></div>
        <div><dt>Spelform</dt><dd>${cup.format}</dd></div>
        ${cup.cohost ? `<div><dt>Medarrangör</dt><dd>${cup.cohost}</dd></div>` : ''}
      </dl>
      <span class="cup-more">Läs mer ${arrow}</span>
    </div>
  </a>`).join('');

const homeMarkup = `
  <a class="skip-link" href="#top">Hoppa till innehållet</a>
  <div class="topline">Kvalitet · utveckling · fotboll tillsammans</div>
  <header class="header">
    <div class="mobile-tools mobile-tools-left">
      <button class="menu-button" aria-expanded="false" aria-controls="menu"><span></span><span></span><span></span><b class="sr-only">Öppna meny</b></button>
      <a href="#arrangemang" aria-label="Se kommande cuper">${calendarIcon}</a>
    </div>
    <a class="brand" href="#top" aria-label="Supercuper startsida"><img src="/logos/supercuper-main.jpg" alt="Super Cuper – Fotboll tillsammans" /></a>
    <nav id="menu" class="nav" aria-label="Huvudmeny">
      <a href="#top">Hem</a><a href="#super-tv">Super-TV</a><a href="#arrangemang">Cuper</a>${informationNavigation}${aboutNavigation}
    </nav>
    <div class="mobile-tools mobile-tools-right"><a href="/fortur" aria-label="Anmäl lagets intresse">${interestIcon}</a></div>
  </header>
  <main id="top">
    <section class="hero">
      <img class="hero-photo" fetchpriority="high" decoding="async" src="/images/hero-real-madrid.webp" alt="Ungdomsspelare från Super Cuper i match mot Real Madrid" />
      <div class="hero-shade"></div>
      <div class="hero-content">
        <p class="kicker">Super Cuper · Solna</p>
        <h1>Fotboll<br />tillsammans.</h1>
        <p class="hero-lead">Välorganiserade cuper och matchcamper med jämna matcher, tydlig information och en upplevelse spelarna minns.</p>
        <a class="primary" href="#arrangemang">Se kommande cuper ${downArrow}</a>
      </div>
      <a class="hero-scroll-cue" href="#arrangemang" aria-label="Scrolla ned till kommande cuper"><span>Scrolla ned</span><i></i></a>
    </section>
    <section id="arrangemang" class="cups-section">
      <div class="cups-heading">
        <div><p class="section-label">Kalender</p><h2>Kommande cuper<br /><span>&amp; matchcamper</span></h2></div>
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
  <a class="skip-link" href="#top">Hoppa till innehållet</a>
  <div class="topline">Kvalitet · utveckling · fotboll tillsammans</div>
  <header class="header detail-nav">
    <div class="mobile-tools mobile-tools-left">
      <button class="menu-button" aria-expanded="false" aria-controls="menu"><span></span><span></span><span></span><b class="sr-only">Öppna meny</b></button>
      <a href="/#arrangemang" aria-label="Se kommande cuper">${calendarIcon}</a>
    </div>
    <a class="brand" href="/" aria-label="Supercuper startsida"><img src="/logos/supercuper-main.jpg" alt="Super Cuper – Fotboll tillsammans" /></a>
    <nav id="menu" class="nav" aria-label="Huvudmeny"><a href="/">Hem</a><a href="/#super-tv">Super-TV</a><a href="/#arrangemang">Cuper</a>${informationNavigation}${aboutNavigation}</nav>
    <div class="mobile-tools mobile-tools-right"><a href="/fortur" aria-label="Anmäl lagets intresse">${interestIcon}</a></div>
  </header>`;

const detailFooter = `${faqMarkup}${priorityMarkup()}${footerMarkup('/')}`;

const contentPage = (eyebrow, title, intro) => `${detailHeader}
  <main id="top" class="content-page">
    <section class="content-page-hero"><p>${eyebrow}</p><h1>${title}</h1><div><span>Super Cuper</span><p>${intro}</p></div></section>
    <section class="content-page-ready"><p class="section-label">Mer kommer</p><h2>Sidan fylls på<br />inom kort.</h2><p>Här samlar vi snart all information på ett tydligt och lättillgängligt sätt.</p><a class="primary" href="/#arrangemang">Se kommande cuper ${arrow}</a></section>
  </main>
  ${footerMarkup('/')}`;

const informationPage = contentPage('Bra att veta', 'Information', 'Praktisk information före, under och efter våra cuper och matchcamper.');
const aboutPage = `${detailHeader}
  <main id="top" class="content-page about-page">
    <section class="content-page-hero about-hero"><p>Fotboll tillsammans</p><h1>Om oss</h1><div><span>Super Cuper</span><p>Vi skapar fotbollsupplevelser där nya format, nya utmaningar och gemenskap utvecklar både spelaren och människan.</p></div></section>
    <section class="about-story">
      <aside><p>Vår idé</p><span>01</span></aside>
      <article>
        <p class="about-lead">Super Cuper grundades med en tydlig idé: <strong>att ta Europas och världens fotbollsutbildning till Sverige.</strong></p>
        <p>Runt om i världen utbildas unga spelare på olika sätt. <strong>Spelformer, matchformat och cupformat skiljer sig mellan länder och fotbollskulturer – och bakom dem finns olika idéer om hur unga spelare utvecklas genom matchen.</strong> Det skapar olika utmaningar, olika matchsituationer och olika fotbollsproblem att lösa.</p>
        <blockquote>Vi vet att det inte finns ett enda perfekt format för spelarutveckling. <em>Vi tror på variation.</em></blockquote>
        <p>Därför hämtar vi inspiration från etablerade fotbollsmiljöer runt om i Europa och världen och omsätter den i våra cuper och matchcamper. Ena gången kan spelarna möta ett format inspirerat av Nederländerna, nästa gång av Spanien, Danmark, Belgien eller någon annan fotbollskultur.</p>
        <p><strong>Syftet är alltid spelarutveckling.</strong> Genom att låta spelarna möta olika format, ytor och matchsituationer skapar vi variation i deras fotbollsutbildning. De ställs inför nya utmaningar, får lösa olika fotbollsproblem och utvecklar sin förmåga att fatta beslut och anpassa sitt spel efter situationen.</p>
      </article>
    </section>
    <section class="about-community">
      <div class="about-community-image"><img src="/images/team-huddle-supercuper.webp" alt="Unga fotbollsspelare samlade som ett lag" loading="lazy" /></div>
      <div class="about-community-copy"><p class="section-label light">Större än spelet</p><h2>Fotboll är<br />människor.</h2><p>Men fotboll är större än själva spelet.</p><p>Det är glädjen när bollen rullar. Lagkamraterna bredvid dig. Motståndarna du möter. Tränarna, föräldrarna och människorna runt planen. Det är resorna, skratten, nervositeten inför avspark och matcherna man fortfarande pratar om långt senare.</p><strong>Det är gemenskap. Det är minnen.<br />Det är människor. Det är fotboll tillsammans.</strong></div>
    </section>
    <section class="about-purpose">
      <div><p>02 · Vårt syfte</p><h2>Upplevelser<br />som stannar kvar.</h2></div>
      <div><p>Därför vill vi skapa mer än välorganiserade matcher. Vi vill skapa fotbollsupplevelser som barnen tar med sig – både som spelare och som människor.</p><p>För oss är en cup mer än matcher och resultat. <strong>Den är en del av spelarens fotbollsutbildning, men också en plats för glädje, gemenskap och minnen.</strong></p></div>
    </section>
    <section class="about-manifesto"><p>Olika format. Olika utmaningar. Nya erfarenheter.</p><h2>Super Cuper</h2><strong>Europas och världens fotbollsutbildning till Sverige.</strong><span>Fotboll tillsammans.</span></section>
  </main>
  ${footerMarkup('/')}`;

const values = [
  ['01', 'Spelarutveckling i centrum', '<p>Varje cup och matchcamp vi arrangerar ska ha ett tydligt sportsligt syfte. Vi ser matchen som en viktig del av spelarens fotbollsutbildning – en miljö där spelaren får fatta beslut, lösa problem, utmanas och lära sig genom spelet.</p><p>Genom olika spelformer, matchformat och cupformat vill vi ge spelarna variation och nya erfarenheter. <strong>Utveckling handlar inte bara om att bli bättre på det man redan kan, utan också om att möta det man ännu inte behärskar.</strong></p>'],
  ['02', 'Glädje, gemenskap och minnen', '<p>Barnfotboll ska vara något man längtar till.</p><p>Vi vill skapa evenemang fyllda av energi, glädje och positiva upplevelser – både på och utanför planen. Matcher är en viktig del av dagen, men det är också lagkamraterna, skratten, resorna, nya bekantskaper och känslan av att uppleva något tillsammans.</p><p><strong>De bästa fotbollsminnena skapas sällan av enbart ett resultat. De skapas tillsammans med andra.</strong></p>'],
  ['03', 'Respekt och Fair Play', '<p>Vi tävlar för att vinna våra matcher, men aldrig på bekostnad av respekt.</p><p>Spelare, tränare, domare, motståndare, funktionärer och publik är alla en del av samma fotbollsmiljö. Vi förväntar oss ett gott uppträdande både på och utanför planen och accepterar inte kränkningar, hot eller osportsligt beteende.</p><p><strong>Vi kan vara motståndare under matchen och samtidigt visa respekt före, under och efter den.</strong></p>'],
  ['04', 'Alla ska känna sig välkomna', '<p>Fotboll tillhör alla.</p><p>Hos Super Cuper ska människor bemötas med respekt oavsett kön, bakgrund, etnicitet, religion, funktionsvariation, sexuell läggning eller andra individuella förutsättningar.</p><p>Vi vill skapa en miljö där barn vågar uttrycka sig, vågar försöka och vågar misslyckas. <strong>Ingen spelare ska behöva förändra vem den är för att känna sig välkommen på en fotbollsplan.</strong></p>'],
  ['05', 'Trygga miljöer för barn', '<p>Barnens trygghet kommer alltid först.</p><p>Våra arrangemang ska präglas av tydlighet, ansvar och omtanke. Vi arbetar för att skapa både en fysiskt säker miljö och en social miljö där barn känner sig trygga med spelare, ledare, domare och vuxna runt omkring dem.</p><p>Fotboll ska kunna vara utmanande. <strong>Miljön runt barnet ska vara trygg.</strong></p>'],
  ['06', 'Nyfikenhet och nya perspektiv', '<p>Fotboll spelas över hela världen – och den behöver inte se likadan ut överallt.</p><p>Vi vill uppmuntra både spelare och tränare att vara nyfikna. Genom inspiration från olika fotbollskulturer, spelformer och utbildningsmiljöer vill vi öppna dörren för nya idéer och nya sätt att se på spelarutveckling.</p><p>Vi tror på att <strong>prova, uppleva, lära och utvecklas</strong> – inte på att det bara finns ett sätt att spela eller utbilda.</p>'],
  ['07', 'Fotboll tillsammans', '<p>Det här sammanfattar egentligen allt vi vill stå för.</p><p>Fotboll skapas av människor. Av barnen som spelar, tränarna som utbildar, domarna som leder matcherna, föräldrarna som stöttar och föreningarna som varje dag skapar möjligheter för barn att spela.</p><p>Vi vill bidra till en fotboll där utveckling och ambition kan gå hand i hand med glädje, respekt och gemenskap.</p><p><strong>Olika format. Olika utmaningar. Nya erfarenheter.<br />Samma kärlek till spelet.</strong></p>'],
];
const valuePage = `${detailHeader}
  <main id="top" class="values-page">
    <section class="values-hero"><p>Super Cuper · Vår kompass</p><h1>Vår<br />värdegrund</h1><div><span>Utveckla</span><span>Förena</span><span>Skapa glädje</span></div></section>
    <section class="values-intro"><p class="section-label">Det vi står för</p><h2>Fotboll ska utveckla,<br />förena och skapa glädje.</h2><div><p>Super Cuper handlar om mer än matcher, resultat och minuter på en fotbollsplan. Vi vill skapa miljöer där barn får utvecklas som fotbollsspelare, möta nya människor, uppleva nya sätt att spela fotboll och skapa minnen tillsammans.</p><p>Vår värdegrund utgår från en enkel tanke: <strong>fotboll ska utveckla, förena och skapa glädje.</strong></p></div></section>
    <section class="values-list">${values.map(([number, title, copy]) => `<article class="value-principle"><span>${number}</span><h2>${title}</h2><div>${copy}</div></article>`).join('')}</section>
    <section class="values-closing"><p>Vår gemensamma riktning</p><h2>Super Cuper</h2><strong>Fotboll tillsammans.</strong></section>
  </main>
  ${footerMarkup('/')}`;

const policyPage = (eyebrow, title, intro, sections) => `${detailHeader}
  <main id="top" class="policy-page">
    <section class="policy-hero"><p>${eyebrow}</p><h1>${title}</h1><div><span>Senast uppdaterad 1 oktober 2026</span><p>${intro}</p></div></section>
    <section class="policy-content">${sections.map(([heading, body]) => `<article><h2>${heading}</h2>${body}</article>`).join('')}</section>
  </main>
  ${footerMarkup('/')}`;

const privacyPage = policyPage('Din information', 'Integritet', 'Här beskriver vi vilka uppgifter Super Cuper tar emot, varför vi behöver dem och vilka val du har.', [
  ['Vilka uppgifter vi samlar in', '<p>När en vuxen kontaktperson skickar en intresseanmälan tar vi emot namn, e-postadress, telefonnummer, klubb, lag, åldersklass och eventuellt meddelande. Vi ber inte om personuppgifter om barn i formuläret.</p>'],
  ['Varför uppgifterna används', '<p>Uppgifterna används för att besvara förfrågningar, bedöma intresse för våra arrangemang och skicka relevant information om cuper och matchcamper som kontaktpersonen har bett om.</p>'],
  ['Lagring och delning', '<p>Uppgifterna används av Super Cuper och delas inte för marknadsföring av andra aktörer. Formulärdata skickas via vår formulärtjänst till vår mottagande e-post. Vi sparar uppgifterna så länge de behövs för kontakten eller tills kontaktpersonen ber oss att radera dem.</p>'],
  ['Dina val', '<p>Du kan be om information om dina uppgifter, rättelse eller radering genom att kontakta <a href="mailto:hej@supercuper.se">hej@supercuper.se</a>. Du kan också när som helst be oss sluta skicka nyheter och inbjudningar.</p>'],
]);

const termsPage = policyPage('Tydliga villkor', 'Villkor', 'Dessa grundvillkor förklarar vad en intresseanmälan innebär. Särskilda cupvillkor framgår alltid innan en plats blir bindande.', [
  ['Intresseanmälan', '<p>En intresseanmälan är kostnadsfri och innebär inte att laget automatiskt har fått en plats. Platsen är bekräftad först när Super Cuper har skickat en skriftlig bekräftelse eller faktura och anmälningsavgiften har betalats.</p>'],
  ['Urval och platsfördelning', '<p>Super Cuper kan göra ett urval för att skapa geografisk spridning samt jämna, konkurrenskraftiga och utvecklande matcher. En inskickad intresseanmälan garanterar därför inte deltagande.</p>'],
  ['Betalning och ändringar', '<p>Betalningsvillkor, eventuella deltagaravgifter och regler för ändringar anges i bekräftelsen för respektive arrangemang. Tävlingsreglerna finns på sidan <a href="/tavlingsbestammelser">Tävlingsbestämmelser</a>.</p>'],
  ['Kontakt', '<p>Frågor om en anmälan eller ett arrangemang skickas till <a href="mailto:hej@supercuper.se">hej@supercuper.se</a>.</p>'],
]);

const competitionRulesPage = `${detailHeader}
  <main id="top" class="rules-page">
    <section class="rules-hero"><p>Super Cuper · Regelverk</p><h1>Tävlings&shy;bestämmelser</h1><div><span>Gäller samtliga Super Cuper-turneringar</span><p>Bestämmelserna kompletterar Svenska Fotbollförbundets, distriktsförbundets och respektive turnerings regelverk.</p></div></section>
    <section class="rules-intro"><p class="section-label">Tydliga förutsättningar</p><h2>För trygga, rättvisa och utvecklande matcher.</h2><p>Här finns de gemensamma tävlingsbestämmelser som gäller för Super Cupers turneringar. Turneringsspecifika villkor, matchtider och spelformer publiceras alltid tillsammans med respektive cup.</p></section>
    <nav class="rules-index" aria-label="Innehållsförteckning"><p>Hoppa till</p><div><a href="#regel-1">Grundregler <small>01–06</small></a><a href="#regel-7">Spelare <small>07–13</small></a><a href="#regel-14">Matchmiljö <small>14–18</small></a><a href="#regel-19">Tävlingsärenden <small>19–25</small></a></div></nav>
    <div class="rules-content">${competitionRulesHtml}</div>
    <div class="rules-version"><span>Version 1.0</span><span>Senast uppdaterad 1 oktober 2026</span></div>
    <section class="rules-closing"><p>Super Cuper</p><h2>Vi tävlar mot varandra.</h2><strong>Men vi skapar matchen tillsammans.</strong></section>
  </main>
  ${footerMarkup('/')}`;

const priorityPage = `${detailHeader}
  <main id="top" class="priority-page">
    <section class="priority-page-intro">
      <div class="priority-page-copy"><p>Super Cuper · Intresseanmälan</p><h1>Var först<br />på bollen.</h1><p>Anmäl lagets generella intresse. Då kan vi hålla er uppdaterade med nyheter och bjuda in er till relevanta cuper och matchcamper.</p></div>
      <div class="priority-benefits" aria-label="Fördelar med generell intresseanmälan"><span><b>01</b>Tidig information</span><span><b>02</b>Personliga inbjudningar</span><span><b>03</b>Rätt nivå från start</span></div>
    </section>
    <section class="priority-form-section">
      <div class="priority-form-heading"><p class="section-label">Generell intresseanmälan</p><h2>Berätta vilka<br />ni är.</h2><p>Det tar mindre än en minut. Intresseanmälan är kostnadsfri, gäller nyheter och inbjudningar och innebär ingen bindande cupanmälan.</p></div>
      <form id="priority-form" class="priority-form" method="POST">
        <input type="hidden" name="Typ av intresseanmälan" value="Generell – nyheter och inbjudningar" /><input class="form-honey" type="text" name="_honey" tabindex="-1" autocomplete="off" />
        <div class="priority-field"><label for="contact-name">Kontaktperson</label><input id="contact-name" name="Kontaktperson" autocomplete="name" maxlength="80" required placeholder="För- och efternamn" /></div>
        <div class="priority-field"><label for="priority-email">E-post</label><input id="priority-email" name="email" type="email" autocomplete="email" maxlength="160" required placeholder="namn@klubb.se" /></div>
        <div class="priority-field"><label for="priority-phone">Telefon</label><input id="priority-phone" name="Telefon" type="tel" autocomplete="tel" inputmode="tel" maxlength="30" required placeholder="070 000 00 00" /></div>
        <div class="priority-field"><label for="priority-club">Klubb</label><input id="priority-club" name="Klubb" autocomplete="organization" maxlength="100" required placeholder="Klubbens namn" /></div>
        <div class="priority-field"><label for="priority-team">Lag</label><input id="priority-team" name="Lag" maxlength="100" required placeholder="Exempel: P2015 Svår" /></div>
        <div class="priority-field"><label for="priority-age">Åldersklass</label><select id="priority-age" name="Åldersklass" required><option value="" selected disabled>Välj åldersklass</option><option>B2019</option><option>B2018</option><option>B2017</option><option>B2016</option><option>B2015</option><option>B2014</option><option>G2019</option><option>G2018</option><option>G2017</option><option>G2016</option><option>G2015</option><option>Annan</option></select></div>
        <div class="priority-field"><label for="priority-level">Nivå</label><select id="priority-level" name="Nivå" required><option value="" selected disabled>Välj nivå</option><option>Lätt</option><option>Medel</option><option>Svår</option><option>Extra svår</option><option>Osäker</option></select></div>
        <div class="priority-field priority-field-wide"><label for="priority-message">Något vi bör veta? <span>Valfritt</span></label><textarea id="priority-message" name="Meddelande" rows="3" maxlength="800" placeholder="Nivå, önskad spelform eller annan relevant information"></textarea></div>
        <label class="priority-consent"><input type="checkbox" name="Godkännande" value="Ja" required /><span>Jag godkänner att Super Cuper kontaktar mig med information och relevanta inbjudningar. Läs vår <a href="/integritet">integritetspolicy</a>.</span></label>
        <button type="submit">Skicka intresseanmälan ${arrow}</button>
        <p class="priority-form-status" role="status" aria-live="polite"></p>
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
      <div class="cup-page-title"><p>18 oktober 2026 · Råstasjöns IP, Solna</p><h1>Solna<br />Blixt Camp</h1><a class="cup-interest" href="/fortur?cup=solna-blixt-camp">Anmäl intresse ${arrow}</a></div>
      <small>Foto: Sports Labs</small>
    </section>
    <nav class="breadcrumbs wrap" aria-label="Brödsmulor"><a href="/">Hem</a><span>/</span><a href="/#arrangemang">Cuper</a><span>/</span><strong>Solna Blixt Camp</strong></nav>
    <section class="cup-intro wrap">
      <div class="cup-intro-copy"><p class="section-label">Inbjudningsturnering · 5v5 · 7v7</p><h2>Välkomna till<br />Solna Blixt Camp.</h2><p class="lead">En inbjudningsturnering för två åldersklasser som vänder sig till lag på svår och extra svår nivå. Cupen spelas på anrika Råstasjöns IP i Solna.</p><p>Alla lag garanteras sex matcher om 1 × 20 minuter. Här utmanas ni i att hålla ett högt tempo redan från start och får möjlighet att träna på att spela en effektiv fotboll under totalt 120 intensiva fotbollsminuter.</p><p>Samtliga lag har tillgång till omklädningsrum. Kiosk och grill finns på plats. Alla lag tilldelas medaljer och matchens spelare utses efter varje match.</p></div>
      <aside class="cup-facts">
        <div class="detail-logos"><img src="/logos/supercuper-main.jpg" alt="Super Cuper logotyp" /><i>×</i><img src="/logos/as-solna-ff.jpg" alt="AS Solna FF logotyp" /></div>
        <dl><div><dt>Var</dt><dd>Råstasjöns IP, Solna</dd></div><div><dt>När</dt><dd>18 oktober 2026</dd></div><div><dt>Åldrar</dt><dd>B2018 · B2015</dd></div><div><dt>Spelform</dt><dd>5v5 · 7v7</dd></div><div><dt>Nivå</dt><dd>Svår · extra svår</dd></div><div><dt>Medarrangör</dt><dd>AS Solna FF</dd></div></dl>
      </aside>
    </section>
    <section class="schedule-section">
      <div class="wrap"><div class="schedule-heading"><p class="section-label">Grupper & spelschema</p><h2>Två klasser</h2><div><span>18 oktober 2026</span><span>Råstasjöns IP</span><span>5v5 · 7v7</span></div></div>
        <div class="age-schedules">
          <article class="age-column">
            <header class="age-heading"><p>B2015</p><button class="age-expand" type="button" data-age-label="7v7" aria-label="Öppna 7v7 i förstorat format"><strong>7v7</strong>${expandIcon}</button><span>2 planer · 8 lag</span></header>
            <div class="groups"><article><h3>Grupp A</h3><ol><li>Fisksätra Y-O</li><li>Norsborgs FC</li><li>Vendelsö IK</li><li>Hammarby A2</li></ol></article><article><h3>Grupp B</h3><ol><li>IFK Haninge</li><li>IFK Lidingö</li><li>Kista SC</li><li>AS Solna 1</li></ol></article></div>
            <h3 class="phase-title">Gruppspel · fas 1</h3><p class="swipe-hint">Svep för plan 2 →</p><div class="schedule-grid">${scheduleTable('Plan 1 · Grupp A', phaseOneA)}${scheduleTable('Plan 2 · Grupp B', phaseOneB)}</div>
            <div class="schedule-break"><strong>17:15–17:25</strong><span>Paus · 10 min</span></div>
            <h3 class="phase-title">Gruppspel · fas 2</h3><p class="swipe-hint">Svep för plan 2 →</p><div class="schedule-grid">${scheduleTable('Plan 1 · Guldgrupp', phaseTwoGold)}${scheduleTable('Plan 2 · Silvergrupp', phaseTwoSilver)}</div>
            <div class="schedule-end"><strong>19:35</strong><span>Avslutning</span></div>
          </article>
          <article class="age-column">
            <header class="age-heading"><p>B2018</p><button class="age-expand" type="button" data-age-label="5v5" aria-label="Öppna 5v5 i förstorat format"><strong>5v5</strong>${expandIcon}</button><span>2 planer · 8 lag</span></header>
            <div class="groups"><article><h3>Grupp A</h3><ol><li>Järfälla FF</li><li>Arameiska Syrianska 1</li><li>IFK Stocksund 2</li><li>AIK Grön 2</li></ol></article><article><h3>Grupp B</h3><ol><li>AIK Grön 1</li><li>IFK Stocksund 1</li><li>Södertälje FF</li><li>Arameiska Syrianska 2</li></ol></article></div>
            <h3 class="phase-title">Gruppspel · fas 1</h3><p class="swipe-hint">Svep för plan 2 →</p><div class="schedule-grid">${scheduleTable('Plan 1 · Grupp A', fivePhaseOneA)}${scheduleTable('Plan 2 · Grupp B', fivePhaseOneB)}</div>
            <div class="schedule-break"><strong>14:35–14:40</strong><span>Paus & omgruppering · 5 min</span></div>
            <h3 class="phase-title">Gruppspel · fas 2</h3><p class="swipe-hint">Svep för plan 2 →</p><div class="schedule-grid">${scheduleTable('Plan 1 · Guldgrupp', fivePhaseTwoGold)}${scheduleTable('Plan 2 · Silvergrupp', fivePhaseTwoSilver)}</div>
            <div class="schedule-end"><strong>16:10</strong><span>Avslutning</span></div>
          </article>
        </div>
      </div>
    </section>
    <dialog class="schedule-modal" aria-label="Förstorat spelschema"><button class="schedule-modal-close" type="button" aria-label="Stäng förstorat spelschema">×</button><div class="schedule-modal-content"></div></dialog>
    <section class="club-showcase" aria-label="Deltagande lag i Solna Blixt Camp">
      <div class="club-showcase-heading"><p>Solna Blixt Camp · deltagande lag</p><span>18 oktober 2026 · Råstasjöns IP</span></div>
      <button class="marquee-toggle" type="button" aria-pressed="false">Pausa loggor</button>
      <div class="club-marquee" aria-label="Deltagande klubbar"><div class="club-marquee-track"><div class="club-logo-set" aria-hidden="true">${clubLogoCards}</div><div class="club-logo-set">${clubLogoCards}</div><div class="club-logo-set" aria-hidden="true">${clubLogoCards}</div></div></div>
    </section>
  </main>${detailFooter}`;

const superFivePage = (cup) => `${detailHeader}
  <main id="top" class="cup-page generic-cup super-five-page">
    <section class="generic-hero super-five-hero">
      <div><p>24–25 oktober 2026 · Plats meddelas snart</p><h1>Super<br />Five</h1><a class="cup-interest" href="/fortur?cup=${cup.slug}">Anmäl intresse ${arrow}</a></div>
      <img src="${cup.logo}" alt="Super Five logotyp" />
    </section>
    <nav class="breadcrumbs wrap" aria-label="Brödsmulor"><a href="/">Hem</a><span>/</span><a href="/#arrangemang">Cuper</a><span>/</span><strong>Super Five</strong></nav>
    <section class="cup-intro wrap super-five-intro">
      <div class="cup-intro-copy">
        <p class="section-label">Inbjudningsturnering · B2019 · 5v5</p>
        <h2>Sex matcher.<br />Två intensiva dagar.</h2>
        <p class="lead">Super Five är en inbjudningsturnering för pojkar födda 2019, riktad till lag på svår nivå.</p>
        <p>Den första gruppspelsomgången spelas under dag ett. Dag två fortsätter turneringen med en andra gruppspelsomgång. Varje lag spelar tre matcher per dag.</p>
        <p>Alla lag garanteras totalt sex matcher om 2 × 15 minuter – sammanlagt 180 matchminuter under helgen.</p>
        <p>Samtliga lag har tillgång till omklädningsrum. Kiosk och grill finns på plats. Alla lag tilldelas medaljer och matchens spelare utses efter varje match.</p>
      </div>
      <aside class="cup-facts">
        <div class="single-detail-logo"><img src="${cup.logo}" alt="Super Five logotyp" /></div>
        <dl>
          <div><dt>Var</dt><dd>TBD</dd></div><div><dt>När</dt><dd>24–25 oktober 2026</dd></div><div><dt>Ålder</dt><dd>Pojkar födda 2019</dd></div><div><dt>Spelform</dt><dd>5v5</dd></div><div><dt>Nivå</dt><dd>Svår</dd></div><div><dt>Matcher</dt><dd>6 matcher · 2 × 15 min</dd></div>
        </dl>
      </aside>
    </section>
    <section class="super-five-format">
      <div class="wrap">
        <p class="section-label light">Turneringsformat</p><h2>Tre matcher.<br />Varje dag.</h2>
        <div><article><span>Dag 01</span><h3>Första gruppspelet</h3><p>Tre matcher som sätter nivån och tempot för helgen.</p></article><article><span>Dag 02</span><h3>Andra gruppspelet</h3><p>Tre nya matcher och fortsatt utveckling mot jämnt motstånd.</p></article></div>
      </div>
    </section>
  </main>${detailFooter}`;

const genericCupPage = (cup) => `${detailHeader}<main id="top" class="cup-page generic-cup"><section class="generic-hero${cup.artwork ? ' artwork-hero' : ''}"><div><p>${cup.date} · ${cup.place}</p><h1>${cup.title}</h1><a class="cup-interest" href="/fortur?cup=${cup.slug}">Anmäl intresse ${arrow}</a></div><img src="${cup.logo || cup.image}" alt="${cup.title} logotyp" fetchpriority="high" /></section>${cup.artwork ? `<div class="cup-interest-bar"><a class="cup-interest" href="/fortur?cup=${cup.slug}">Anmäl intresse ${arrow}</a></div>` : ''}<nav class="breadcrumbs wrap" aria-label="Brödsmulor"><a href="/">Hem</a><span>/</span><a href="/#arrangemang">Cuper</a><span>/</span><strong>${cup.title}</strong></nav><section class="generic-copy wrap"><div class="generic-copy-main"><p class="section-label">Planeras just nu</p><h2>Förhandsintresset<br />är öppet.</h2><p class="generic-lead">${cup.summary}</p><p>Skicka en kostnadsfri intresseanmälan om ni vill få information när de återstående detaljerna är klara. En intresseanmälan är inte bindande och garanterar inte en plats.</p><a class="primary" href="/fortur?cup=${cup.slug}">Anmäl lagets intresse ${arrow}</a></div><aside class="generic-facts"><p>Det här vet vi</p><dl><div><dt>Var</dt><dd>${cup.place}</dd></div><div><dt>När</dt><dd>${cup.date}</dd></div><div><dt>Åldrar</dt><dd>${cup.ages}</dd></div><div><dt>Spelform</dt><dd>${cup.format}</dd></div></dl><small>Informationen uppdateras när planeringen är fastställd.</small></aside></section></main>${detailFooter}`;

const slug = decodeURIComponent(window.location.pathname).match(/^\/cuper\/([^/]+)\/?$/)?.[1];
const activeCup = cups.find((cup) => cup.slug === slug);
const isPriorityPage = /^\/fortur\/?$/.test(window.location.pathname);
const isInformationPage = /^\/information\/?$/.test(window.location.pathname);
const isAboutPage = /^\/om-oss\/?$/.test(window.location.pathname);
const isValuesPage = /^\/var-vardegrund\/?$/.test(window.location.pathname);
const isCompetitionRulesPage = /^\/tavlingsbestammelser\/?$/.test(window.location.pathname);
const isPrivacyPage = /^\/integritet\/?$/.test(window.location.pathname);
const isTermsPage = /^\/villkor\/?$/.test(window.location.pathname);
if (isInformationPage) window.location.replace('/');
document.querySelector('#app').innerHTML = isPriorityPage ? priorityPage : isInformationPage ? informationPage : isAboutPage ? aboutPage : isValuesPage ? valuePage : isCompetitionRulesPage ? competitionRulesPage : isPrivacyPage ? privacyPage : isTermsPage ? termsPage : activeCup ? (activeCup.slug === 'solna-blixt-camp' ? blixtPage(activeCup) : activeCup.slug === 'super-five' ? superFivePage(activeCup) : genericCupPage(activeCup)) : homeMarkup;
if (activeCup) {
  document.title = `${activeCup.title} — Super Cuper`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', `${activeCup.title}: ${activeCup.date}, ${activeCup.place}. Åldrar ${activeCup.ages}, spelform ${activeCup.format}.`);
}
if (isPriorityPage) {
  document.title = 'Intresseanmälan — Super Cuper';
  document.querySelector('meta[name="description"]')?.setAttribute('content', 'Anmäl lagets intresse för nyheter och personliga inbjudningar till Super Cupers kommande cuper och matchcamper.');
}
if (isInformationPage) {
  document.title = 'Information — Super Cuper';
  document.querySelector('meta[name="description"]')?.setAttribute('content', 'Information om Super Cupers cuper och matchcamper.');
}
if (isAboutPage) {
  document.title = 'Om oss — Super Cuper';
  document.querySelector('meta[name="description"]')?.setAttribute('content', 'Super Cuper tar inspiration från Europas och världens fotbollsutbildning till Sverige genom varierade, utvecklande cuper och matchcamper.');
}
if (isValuesPage) {
  document.title = 'Vår värdegrund — Super Cuper';
  document.querySelector('meta[name="description"]')?.setAttribute('content', 'Super Cupers värdegrund för spelarutveckling, glädje, gemenskap, respekt, trygghet och fotboll tillsammans.');
}
if (isCompetitionRulesPage) {
  document.title = 'Tävlingsbestämmelser — Super Cuper';
  document.querySelector('meta[name="description"]')?.setAttribute('content', 'Tävlingsbestämmelser för Super Cupers fotbollsturneringar, inklusive spelformer, speltid, behörighet, Fair Play och trygg matchmiljö.');
}
if (isPrivacyPage) document.title = 'Integritet — Super Cuper';
if (isTermsPage) document.title = 'Villkor — Super Cuper';

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
  if (open) document.querySelectorAll('.nav-dropdown').forEach((dropdown) => {
    dropdown.classList.remove('is-open');
    dropdown.querySelector(':scope > .nav-trigger')?.setAttribute('aria-expanded', 'false');
  });
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  if (link.matches('.nav-dropdown > .nav-trigger') && (link.hasAttribute('data-menu-only') || window.matchMedia('(max-width: 900px)').matches)) return;
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  link.blur();
}));
document.querySelectorAll('.nav-dropdown').forEach((dropdown) => {
  const trigger = dropdown.querySelector(':scope > .nav-trigger');
  trigger?.addEventListener('click', (event) => {
    if (trigger.hasAttribute('data-menu-only')) event.preventDefault();
    if (!window.matchMedia('(max-width: 900px)').matches) return;
    event.preventDefault();
    const willOpen = !dropdown.classList.contains('is-open');
    document.querySelectorAll('.nav-dropdown').forEach((item) => {
      item.classList.remove('is-open');
      item.querySelector(':scope > .nav-trigger')?.setAttribute('aria-expanded', 'false');
    });
    dropdown.classList.toggle('is-open', willOpen);
    trigger.setAttribute('aria-expanded', String(willOpen));
  });
  dropdown.querySelector('.nav-submenu a')?.addEventListener('click', () => {
    if (!window.matchMedia('(max-width: 900px)').matches) dropdown.classList.add('is-dismissed');
  });
  dropdown.addEventListener('pointerleave', () => dropdown.classList.remove('is-dismissed'));
});

const priorityForm = document.querySelector('#priority-form');
if (priorityForm) {
  const requestedCup = cups.find((cup) => cup.slug === new URLSearchParams(window.location.search).get('cup'));
  if (requestedCup) {
    const cupField = document.createElement('input');
    cupField.type = 'hidden';
    cupField.name = 'Cup eller matchcamp';
    cupField.value = requestedCup.title;
    priorityForm.prepend(cupField);
    priorityForm.querySelector('input[name="Typ av intresseanmälan"]').value = 'Specifik cup eller matchcamp';
    priorityForm.insertAdjacentHTML('afterbegin', `<div class="cup-form-context"><span>Intresseanmälan gäller</span><strong>${requestedCup.title}</strong><p>${requestedCup.date} · ${requestedCup.ages} · ${requestedCup.format}</p></div>`);
    const pageEyebrow = document.querySelector('.priority-page-copy > p:first-child');
    const pageTitle = document.querySelector('.priority-page-copy h1');
    const pageIntro = document.querySelector('.priority-page-copy > p:last-child');
    if (pageEyebrow) pageEyebrow.textContent = `Super Cuper · ${requestedCup.title}`;
    if (pageTitle) pageTitle.innerHTML = 'Anmäl ert<br />intresse.';
    if (pageIntro) pageIntro.textContent = `Det här formuläret gäller ${requestedCup.title}. Skicka lagets uppgifter så återkommer vi med information om just den här cupen.`;
    const benefits = document.querySelector('.priority-benefits');
    if (benefits) benefits.innerHTML = `<span><b>01</b>${requestedCup.title}</span><span><b>02</b>${requestedCup.ages}</span><span><b>03</b>${requestedCup.format}</span>`;
    const formLabel = document.querySelector('.priority-form-heading .section-label');
    const formHeading = document.querySelector('.priority-form-heading h2');
    const formIntro = document.querySelector('.priority-form-heading > p:last-child');
    if (formLabel) formLabel.textContent = 'Cupspecifik intresseanmälan';
    if (formHeading) formHeading.innerHTML = `Intresse för<br />${requestedCup.title}.`;
    if (formIntro) formIntro.textContent = `Uppgifterna kopplas direkt till ${requestedCup.title}. Intresseanmälan är kostnadsfri och blir bindande först efter separat bekräftelse och betalning.`;
    const consent = priorityForm.querySelector('.priority-consent span');
    if (consent) consent.innerHTML = `Jag godkänner att Super Cuper kontaktar mig angående ${requestedCup.title}. Läs vår <a href="/integritet">integritetspolicy</a>.`;
    const cupAgeOptions = {
      'solna-blixt-camp': ['B2018', 'B2015'],
      'super-five': ['B2019'],
      'super-eight': ['B2015'],
      'super-nine': ['B2015', 'B2014'],
      'solna-masterskapen': ['B2019', 'B2018', 'B2017', 'B2016', 'B2015', 'G2019', 'G2018', 'G2017', 'G2016', 'G2015'],
    };
    const validAges = cupAgeOptions[requestedCup.slug];
    const ageSelect = priorityForm.querySelector('#priority-age');
    if (validAges && ageSelect) {
      ageSelect.replaceChildren(...validAges.map((age) => new Option(age, age)));
      if (validAges.length === 1) {
        ageSelect.value = validAges[0];
        ageSelect.setAttribute('aria-describedby', 'fixed-age-note');
        ageSelect.insertAdjacentHTML('afterend', `<small id="fixed-age-note" class="fixed-field-note">Den här cupen gäller ${validAges[0]}.</small>`);
      } else {
        ageSelect.prepend(new Option('Välj åldersklass', '', true, true));
        ageSelect.options[0].disabled = true;
      }
    }
    const cupLevelOptions = {
      'solna-blixt-camp': ['Svår', 'Extra svår'],
      'super-five': ['Svår'],
    };
    const validLevels = cupLevelOptions[requestedCup.slug];
    const levelSelect = priorityForm.querySelector('#priority-level');
    if (validLevels && levelSelect) {
      levelSelect.replaceChildren(...validLevels.map((level) => new Option(level, level)));
      if (validLevels.length === 1) {
        levelSelect.value = validLevels[0];
        levelSelect.setAttribute('aria-describedby', 'fixed-level-note');
        levelSelect.insertAdjacentHTML('afterend', `<small id="fixed-level-note" class="fixed-field-note">Den här cupen riktar sig till nivå ${validLevels[0].toLowerCase()}.</small>`);
      } else {
        levelSelect.prepend(new Option('Välj nivå', '', true, true));
        levelSelect.options[0].disabled = true;
      }
    }
    document.title = `Intresseanmälan till ${requestedCup.title} — Super Cuper`;
  }

  priorityForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = priorityForm.querySelector('.priority-form-status');
    const submitButton = priorityForm.querySelector('button[type="submit"]');
    const originalButtonContent = submitButton.innerHTML;
    const payload = Object.fromEntries(new FormData(priorityForm).entries());
    submitButton.disabled = true;
    submitButton.textContent = 'Skickar…';
    priorityForm.setAttribute('aria-busy', 'true');
    status.className = 'priority-form-status is-success';
    status.textContent = requestedCup ? `Tack! Er intresseanmälan till ${requestedCup.title} skickas nu.` : 'Tack! Lagets generella intresseanmälan skickas nu.';
    const slowMessage = window.setTimeout(() => {
      status.textContent = 'Sändningen tar lite längre tid än normalt. Låt sidan vara öppen så försöker vi klart.';
    }, 6000);

    fetch('https://supercuper-forms.robertgiuricici.workers.dev/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    }).then(async (response) => {
      clearTimeout(slowMessage);
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.ok !== true) throw new Error(result.error || 'Formuläret kunde inte skickas.');
      priorityForm.reset();
      priorityForm.setAttribute('aria-busy', 'false');
      submitButton.textContent = 'Skickad ✓';
      status.textContent = requestedCup ? `Tack! Er intresseanmälan till ${requestedCup.title} är skickad.` : 'Tack! Lagets generella intresseanmälan är skickad.';
    }).catch(() => {
      clearTimeout(slowMessage);
      priorityForm.setAttribute('aria-busy', 'false');
      status.className = 'priority-form-status is-error';
      status.classList.add('is-error');
      status.textContent = 'Något gick fel. Försök igen eller kontakta hej@supercuper.se.';
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonContent;
    });
  });
}

const rail = document.querySelector('.cups-rail');
document.querySelectorAll('.cup-controls button').forEach((button) => button.addEventListener('click', () => {
  rail?.scrollBy({ left: Number(button.dataset.direction) * Math.min(rail.clientWidth * .82, 940), behavior: 'smooth' });
}));

const rulesMedia = window.matchMedia('(max-width: 900px)');
document.querySelectorAll('.rule-section').forEach((section, index) => {
  const heading = section.querySelector('h2');
  const content = section.querySelector(':scope > div');
  if (!heading || !content) return;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'rule-toggle';
  button.setAttribute('aria-label', `Visa eller dölj ${heading.textContent}`);
  button.innerHTML = '<span aria-hidden="true"></span>';
  heading.append(button);
  const setState = (expanded) => {
    section.classList.toggle('is-collapsed', !expanded);
    button.setAttribute('aria-expanded', String(expanded));
  };
  setState(!rulesMedia.matches || index === 0);
  button.addEventListener('click', () => setState(button.getAttribute('aria-expanded') !== 'true'));
  rulesMedia.addEventListener('change', ({ matches }) => setState(!matches || index === 0));
  if ((index + 1) % 5 === 0 && index < 24) section.insertAdjacentHTML('beforeend', '<a class="rules-to-top" href="#top">Till toppen ↑</a>');
});

const scheduleModal = document.querySelector('.schedule-modal');
const scheduleModalContent = scheduleModal?.querySelector('.schedule-modal-content');
document.querySelectorAll('.age-expand').forEach((button) => button.addEventListener('click', () => {
  const ageColumn = button.closest('.age-column');
  if (!scheduleModal || !scheduleModalContent || !ageColumn) return;
  const enlarged = ageColumn.cloneNode(true);
  const clonedButton = enlarged.querySelector('.age-expand');
  if (clonedButton) {
    const title = document.createElement('h3');
    title.textContent = button.dataset.ageLabel;
    clonedButton.replaceWith(title);
  }
  enlarged.querySelectorAll('.swipe-hint').forEach((hint) => hint.remove());
  scheduleModalContent.replaceChildren(enlarged);
  scheduleModal.showModal();
}));
document.querySelectorAll('.age-heading').forEach((heading) => heading.addEventListener('click', (event) => {
  if (!event.target.closest('.age-expand')) heading.querySelector('.age-expand')?.click();
}));
scheduleModal?.querySelector('.schedule-modal-close')?.addEventListener('click', () => scheduleModal.close());
scheduleModal?.addEventListener('click', (event) => {
  if (event.target === scheduleModal) scheduleModal.close();
});

const clubMarquee = document.querySelector('.club-marquee');
if (clubMarquee) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pixelsPerMillisecond = .03;
  const marqueeToggle = document.querySelector('.marquee-toggle');
  let userPaused = reduceMotion;
  let paused = reduceMotion;
  let dragging = false;
  let touching = false;
  let pointerId;
  let startX = 0;
  let startScroll = 0;
  let position = 0;
  let lastFrame = performance.now();
  let resumeTimer;

  const normalizePosition = () => {
    const loopWidth = clubMarquee.scrollWidth / 3;
    if (loopWidth && position >= loopWidth * 2) position -= loopWidth;
    if (loopWidth && position < loopWidth * .25) position += loopWidth;
  };
  const resumeSoon = () => {
    clearTimeout(resumeTimer);
    resumeTimer = window.setTimeout(() => { paused = userPaused; }, 850);
  };
  const animate = (now) => {
    if (!paused && !dragging) {
      position += Math.min(now - lastFrame, 50) * pixelsPerMillisecond;
      normalizePosition();
      clubMarquee.scrollLeft = position;
    }
    lastFrame = now;
    requestAnimationFrame(animate);
  };

  clubMarquee.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'touch') return;
    dragging = true;
    paused = true;
    pointerId = event.pointerId;
    startX = event.clientX;
    startScroll = clubMarquee.scrollLeft;
    position = startScroll;
    clubMarquee.setPointerCapture(pointerId);
    clubMarquee.classList.add('is-dragging');
  });
  clubMarquee.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    if (!dragging || event.pointerId !== pointerId) return;
    position = startScroll - (event.clientX - startX);
    normalizePosition();
    clubMarquee.scrollLeft = position;
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
  clubMarquee.addEventListener('touchstart', () => {
    touching = true;
    paused = true;
    clearTimeout(resumeTimer);
    position = clubMarquee.scrollLeft;
  }, { passive: true });
  clubMarquee.addEventListener('touchend', () => {
    touching = false;
    resumeSoon();
  }, { passive: true });
  clubMarquee.addEventListener('touchcancel', () => {
    touching = false;
    resumeSoon();
  }, { passive: true });
  clubMarquee.addEventListener('scroll', () => {
    if (!paused || dragging) return;
    position = clubMarquee.scrollLeft;
    if (!touching) resumeSoon();
  }, { passive: true });
  const updateToggle = () => {
    if (!marqueeToggle) return;
    marqueeToggle.setAttribute('aria-pressed', String(userPaused));
    marqueeToggle.textContent = userPaused ? 'Starta loggor' : 'Pausa loggor';
  };
  marqueeToggle?.addEventListener('click', () => {
    userPaused = !userPaused;
    paused = userPaused;
    clearTimeout(resumeTimer);
    updateToggle();
  });
  updateToggle();
  requestAnimationFrame((now) => {
    position = clubMarquee.scrollWidth / 3;
    clubMarquee.scrollLeft = position;
    lastFrame = now;
    requestAnimationFrame(animate);
  });
}
