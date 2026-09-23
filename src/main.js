import './style.css';

const events = [
  { type: 'Cup', title: 'Supercup Stockholm', place: 'Stockholm', age: 'P2013 · 9 mot 9', date: 'Våren 2027', image: '/images/cup-action.jpg' },
  { type: 'Matchcamp', title: 'Next Level Camp', place: 'Stockholm', age: 'F2012–F2013 · 9 mot 9', date: 'Hösten 2027', image: '/images/team-huddle.jpg' },
  { type: 'Invite', title: 'Supercuper Invitational', place: 'Mälardalen', age: 'P2014 · 7 mot 7', date: 'Kommer snart', image: '/images/team-celebration.jpg' }
];

const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>';
const eventCards = events.map((event, index) => `
  <article class="event reveal" style="--delay:${index * 80}ms">
    <div class="event-image"><img src="${event.image}" alt="Ungdomsspelare under fotbollsmatch" loading="lazy" /><span>${event.type}</span></div>
    <div class="event-copy">
      <p class="meta">${event.place} <i></i> ${event.date}</p>
      <h3>${event.title}</h3>
      <p>${event.age}</p>
      <a href="#kontakt" aria-label="Visa intresse för ${event.title}">Visa intresse ${arrow}</a>
    </div>
  </article>`).join('');

document.querySelector('#app').innerHTML = `
  <header class="header">
    <a class="brand" href="#top" aria-label="Supercuper startsida"><img src="/logos/supercuper-main.jpg" alt="Super Cuper – Fotboll tillsammans" /></a>
    <button class="menu-button" aria-expanded="false" aria-controls="menu"><span></span><span></span><span></span><b class="sr-only">Öppna meny</b></button>
    <nav id="menu" class="nav" aria-label="Huvudmeny">
      <a href="#arrangemang">Cuper & matchcamper</a><a href="#koncept">Konceptet</a><a href="#kontakt">Kontakt</a>
      <a class="nav-cta" href="#kontakt">Intresseanmälan ${arrow}</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero">
      <img class="hero-photo" src="/images/hero-match.jpg" alt="Ungdomsspelare i en intensiv fotbollsmatch" />
      <div class="hero-shade"></div>
      <div class="hero-content">
        <p class="kicker">Fotboll som känns på riktigt</p>
        <h1>Mer än<br />en match.</h1>
        <p class="hero-lead">Noggrant utvalda cuper och matchcamper för lag som vill möta rätt motstånd, utvecklas och minnas helgen länge.</p>
        <a class="primary" href="#arrangemang">Upptäck Supercuper ${arrow}</a>
      </div>
      <div class="hero-index"><span>01</span><div></div><span>03</span></div>
      <a class="scroll" href="#intro">Utforska <span>↓</span></a>
    </section>

    <section id="intro" class="intro wrap reveal">
      <p class="section-label">Vår idé</p>
      <div><h2>Rätt matcher.<br />Rätt nivå. <em>Större upplevelse.</em></h2><p>Vi bygger helger där fotbollen står i centrum och allt runt omkring fungerar. Tydlig nivåindelning, genomtänkta spelscheman och ett värdskap som märks.</p></div>
    </section>

    <section id="arrangemang" class="events-section">
      <div class="wrap section-head reveal"><div><p class="section-label">På gång</p><h2>Kommande<br />arrangemang</h2></div><p>Nya cuper och matchcamper publiceras löpande. Anmäl ditt intresse så hör vi av oss när en plats passar ert lag.</p></div>
      <div class="events wrap">${eventCards}</div>
    </section>

    <section id="koncept" class="concept">
      <div class="concept-image"><img src="/images/team-preparing.jpg" alt="Fotbollslag samlat inför match" loading="lazy" /></div>
      <div class="concept-copy reveal"><p class="section-label light">Supercuper-metoden</p><h2>Byggt för<br />bra fotboll.</h2>
        <ol><li><span>01</span><div><h3>Jämna matcher</h3><p>Lag matchas efter ålder, spelform och faktisk nivå.</p></div></li><li><span>02</span><div><h3>Mer tid på planen</h3><p>Ett smart schema med meningsfulla matcher och mindre väntan.</p></div></li><li><span>03</span><div><h3>En hel upplevelse</h3><p>Tydlig information, bra värdskap och detaljer som lyfter helgen.</p></div></li></ol>
      </div>
    </section>

    <section class="statement wrap reveal"><p class="section-label">För spelarna</p><blockquote>“Det ska kännas stort<br />redan innan avspark.”</blockquote></section>

    <section id="kontakt" class="contact">
      <div class="wrap contact-inner reveal"><div><p class="section-label light">Håll mig uppdaterad</p><h2>Vilken cup<br />väntar ni på?</h2></div>
        <form id="interest"><label for="email">E-post</label><div class="email-row"><input id="email" name="email" type="email" autocomplete="email" required placeholder="din@klubb.se" /><button type="submit" aria-label="Skicka intresseanmälan">${arrow}</button></div><p>Förhandsinformation om kommande cuper och matchcamper. Ingen spam.</p><div class="form-message" role="status"></div></form>
      </div>
    </section>
  </main>

  <footer class="footer wrap"><a class="brand dark" href="#top" aria-label="Supercuper startsida"><img src="/logos/supercuper-main.jpg" alt="Super Cuper – Fotboll tillsammans" /></a><div><p>Fotbollscuper & matchcamper</p><p>Stockholm, Sverige</p></div><div><a href="mailto:hej@supercuper.se">hej@supercuper.se</a><a href="#top">Till toppen ↑</a></div><small>© ${new Date().getFullYear()} Supercuper</small></footer>
`;

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open)); nav.classList.toggle('open', !open);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }));

document.querySelector('#interest').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('.form-message').textContent = 'Tack! Intresseformuläret är förberett och kopplas till e-post före publicering.';
  event.currentTarget.reset();
});

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach((element) => observer.observe(element));
window.setTimeout(() => revealElements.forEach((element) => element.classList.add('visible')), 900);
