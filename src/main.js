import './style.css';

const cups = [
  { title: 'Solna Blixt Camp', place: 'Råstasjöns IP, Solna', date: '18 oktober', ages: 'B2018 · B2016/2015', format: '5v5 · 7v7', note: 'Två åldersanpassade spelformer', image: '/images/cup-action.jpg' },
  { title: 'Super Five', place: 'Järvastadens IP, Solna', date: '24–15 oktober', ages: 'B2019', format: '5v5', note: 'Planerad cup', logo: '/logos/super-five.jpg' },
  { title: 'Super Six', place: 'Meddelas snart', date: 'TBD', ages: 'Meddelas snart', format: '6v6', note: 'Intresseanmälan öppen', logo: '/logos/super-six.jpg' },
  { title: 'Super Eight', place: 'Meddelas snart', date: 'TBD', ages: 'B2015', format: '8v8', note: 'Intresseanmälan öppen', logo: '/logos/super-8.jpg' },
  { title: 'Super Nine', place: 'Meddelas snart', date: 'TBD', ages: 'B2015/2014', format: '9v9', note: 'Intresseanmälan öppen', logo: '/logos/super-nine.jpg' },
  { title: 'Solna Mästerskapen', place: 'Solna · arena meddelas snart', date: 'TBD', ages: 'B2019–B2015', format: 'Meddelas snart', note: 'Flera åldersklasser', image: '/images/team-celebration.jpg' },
];

const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>';
const cupCards = cups.map((cup) => `
  <article class="cup-card">
    <div class="cup-visual ${cup.logo ? 'cup-logo' : ''}">
      <img src="${cup.logo || cup.image}" alt="${cup.logo ? `${cup.title} logotyp` : `Fotboll under ${cup.title}`}" loading="lazy" />
      <span>Planerad</span>
    </div>
    <div class="cup-details">
      <h3>${cup.title}</h3>
      <dl>
        <div><dt>Var</dt><dd>${cup.place}</dd></div>
        <div><dt>När</dt><dd>${cup.date}</dd></div>
        <div><dt>Åldrar</dt><dd>${cup.ages}</dd></div>
        <div><dt>Spelform</dt><dd>${cup.format}</dd></div>
      </dl>
      <p>${cup.note}</p>
      <a href="#kontakt" aria-label="Visa intresse för ${cup.title}">Visa intresse ${arrow}</a>
    </div>
  </article>`).join('');

document.querySelector('#app').innerHTML = `
  <div class="topline">Kvalitet · glädje · fotboll tillsammans</div>
  <header class="header">
    <a class="brand" href="#top" aria-label="Supercuper startsida"><img src="/logos/supercuper-main.jpg" alt="Super Cuper – Fotboll tillsammans" /></a>
    <button class="menu-button" aria-expanded="false" aria-controls="menu"><span></span><span></span><span></span><b class="sr-only">Öppna meny</b></button>
    <nav id="menu" class="nav" aria-label="Huvudmeny">
      <a href="#top">Hem</a><a href="#arrangemang">Cuper</a><a href="#koncept">Om oss</a><a href="#kontakt">Kontakt</a>
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
    <section class="intro wrap">
      <p class="section-label">Vår idé</p>
      <div><h2>Rätt matcher.<br />Rätt nivå. <em>Större upplevelse.</em></h2><p>Vi bygger cupdagar där fotbollen står i centrum och allt runt omkring fungerar. Tydlig nivåindelning, genomtänkta spelscheman och ett värdskap som märks.</p></div>
    </section>
    <section id="koncept" class="concept">
      <div class="concept-image"><img src="/images/team-preparing.jpg" alt="Fotbollslag samlat inför match" loading="lazy" /></div>
      <div class="concept-copy"><p class="section-label light">Super Cuper</p><h2>Byggt för<br />bra fotboll.</h2>
        <ol><li><span>01</span><div><h3>Jämna matcher</h3><p>Lag matchas efter ålder, spelform och faktisk nivå.</p></div></li><li><span>02</span><div><h3>Mer tid på planen</h3><p>Smarta spelscheman med meningsfulla matcher och mindre väntan.</p></div></li><li><span>03</span><div><h3>Tydligt hela vägen</h3><p>Samlad information och närvarande värdskap före och under cupen.</p></div></li></ol>
      </div>
    </section>
    <section class="statement wrap"><p class="section-label">För spelarna</p><blockquote>“Det ska kännas stort<br />redan innan avspark.”</blockquote></section>
    <section id="kontakt" class="contact">
      <div class="wrap contact-inner"><div><p class="section-label light">Få förtur</p><h2>Vilken cup<br />väntar ni på?</h2></div>
        <form id="interest"><label for="email">E-post</label><div class="email-row"><input id="email" name="email" type="email" autocomplete="email" required placeholder="din@klubb.se" /><button type="submit" aria-label="Skicka intresseanmälan">${arrow}</button></div><p>Förhandsinformation om kommande cuper och matchcamper.</p><div class="form-message" role="status"></div></form>
      </div>
    </section>
  </main>
  <footer class="footer wrap"><a class="brand dark" href="#top" aria-label="Supercuper startsida"><img src="/logos/supercuper-main.jpg" alt="Super Cuper – Fotboll tillsammans" /></a><div><p>Fotbollscuper & matchcamper</p><p>Solna, Sverige</p></div><div><a href="mailto:hej@supercuper.se">hej@supercuper.se</a><a href="#top">Till toppen ↑</a></div><small>© ${new Date().getFullYear()} Super Cuper</small></footer>
`;

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const rail = document.querySelector('.cups-rail');
document.querySelectorAll('.cup-controls button').forEach((button) => button.addEventListener('click', () => {
  rail.scrollBy({ left: Number(button.dataset.direction) * Math.min(rail.clientWidth * .82, 940), behavior: 'smooth' });
}));

document.querySelector('#interest').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('.form-message').textContent = 'Tack! Intresseformuläret är förberett och kopplas till e-post före publicering.';
  event.currentTarget.reset();
});
