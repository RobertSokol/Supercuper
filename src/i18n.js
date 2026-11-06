import english from './en-US.json';

const languageKey = 'supercuper-language';
const normalize = (value) => value.replace(/\s+/g, ' ').trim();

function selectedLanguage() {
  const requested = new URLSearchParams(window.location.search).get('lang');
  if (requested === 'en' || requested === 'sv') return requested;
  try { return localStorage.getItem(languageKey) === 'en' ? 'en' : 'sv'; }
  catch { return 'sv'; }
}

export const language = selectedLanguage();

// Patterns cover text that includes a cup, age group, or level.
// Form field names and values remain in Swedish to preserve the form API contract.
const patterns = [
  [/^Läs mer om (.+)$/, 'Learn more about $1'],
  [/^(.+) logotyp$/, '$1 logo'],
  [/^Fotboll under (.+)$/, 'Soccer at $1'],
  [/^Visa eller dölj (.+)$/, 'Show or hide $1'],
  [/^Det här formuläret gäller (.+)\. Skicka lagets uppgifter så återkommer vi med information om just den här cupen\.$/, 'This form is for $1. Send us your team details, and we will get back to you with information about this tournament.'],
  [/^Uppgifterna kopplas direkt till (.+)\. Intresseanmälan är kostnadsfri och blir bindande först efter separat bekräftelse och betalning\.$/, 'Your details will be linked directly to $1. Expressing interest is free and becomes binding only after separate confirmation and payment.'],
  [/^Jag godkänner att Super Cuper kontaktar mig angående (.+)\. Läs vår$/, 'I agree to be contacted by Super Cuper about $1. Read our'],
  [/^Den här cupen gäller (.+)\.$/, 'This tournament is for $1.'],
  [/^Den här cupen riktar sig till nivå (.+)\.$/, 'This tournament is for teams at the $1 level.'],
  [/^Tack! Er intresseanmälan till (.+) skickas nu\.$/, 'Thank you! Your expression of interest in $1 is being sent.'],
  [/^Tack! Er intresseanmälan till (.+) är skickad\.$/, 'Thank you! Your expression of interest in $1 has been sent.'],
  [/^Intresseanmälan till (.+) — Super Cuper$/, 'Expression of interest in $1 — Super Cuper'],
  [/^(.+): (.+)\. Åldrar (.+), spelform (.+)\.$/, '$1: $2. Age groups $3, playing format $4.'],
];

export function translate(value) {
  const key = normalize(value);
  if (Object.hasOwn(english, key)) return english[key];
  for (const [pattern, replacement] of patterns) {
    if (pattern.test(key)) return key.replace(pattern, (...groups) => replacement.replace(/\$(\d+)/g,
      (_, index) => english[normalize(groups[Number(index)])] ?? groups[Number(index)]))
      .replace(/18 oktober 2026/g, 'October 18, 2026')
      .replace(/21 november 2026/g, 'November 21, 2026')
      .replace(/\bextra svår\b/g, 'highly advanced').replace(/\bsvår\b/g, 'advanced');
  }
  return key;
}

function translateText(node) {
  if (node.parentElement?.closest('script, style, [translate="no"], .language-switch')) return;
  const original = node.nodeValue;
  if (!original.trim()) return;
  const translated = translate(original);
  if (translated !== normalize(original)) {
    node.nodeValue = original.replace(/\S[\s\S]*\S|\S/, translated);
  }
}

function translateElement(element) {
  if (element.closest('[translate="no"], .language-switch')) return;
  // Options without explicit values inherit their text as the submitted value.
  if (element.matches('option') && !element.hasAttribute('value')) {
    element.setAttribute('value', element.textContent);
  }
  for (const attribute of ['alt', 'aria-label', 'placeholder', 'title']) {
    if (!element.hasAttribute(attribute)) continue;
    const original = element.getAttribute(attribute);
    const translated = translate(original);
    if (translated !== normalize(original)) element.setAttribute(attribute, translated);
  }
  if (element.matches('meta[name="description"], meta[property^="og:"], meta[name^="twitter:"]')) {
    const original = element.getAttribute('content');
    if (original) {
      const translated = translate(original);
      if (translated !== original) element.setAttribute('content', translated);
    }
  }
  // Preserve the chosen language on internal navigation, including form links.
  if (element.matches('a[href]')) {
    const url = new URL(element.getAttribute('href'), window.location.href);
    if (url.origin === window.location.origin && /^https?:$/.test(url.protocol)) {
      url.searchParams.set('lang', 'en');
      const href = `${url.pathname}${url.search}${url.hash}`;
      if (element.getAttribute('href') !== href) element.setAttribute('href', href);
    }
  }
}

function localize(root) {
  if (root.nodeType === Node.TEXT_NODE) { translateText(root); return; }
  if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;
  if (root.nodeType === Node.ELEMENT_NODE) translateElement(root);
  root.querySelectorAll('*').forEach(translateElement);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) translateText(node);
}

export function initializeLanguage() {
  document.documentElement.lang = language === 'en' ? 'en-US' : 'sv';
  try { localStorage.setItem(languageKey, language); } catch { /* Storage may be disabled. */ }

  document.querySelectorAll('.header > .brand').forEach((brand) => {
    const group = document.createElement('div');
    group.className = 'brand-language';
    brand.before(group);
    group.append(brand);
    const control = document.createElement('div');
    control.className = 'language-switch';
    control.innerHTML = `<select aria-label="${language === 'en' ? 'Choose language' : 'Välj språk'}"><option value="sv" lang="sv">Svenska</option><option value="en" lang="en-US">English</option></select>`;
    group.append(control);
    const select = control.querySelector('select');
    select.value = language;
    select.addEventListener('change', () => {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', select.value);
      try { localStorage.setItem(languageKey, select.value); } catch { /* Use the URL instead. */ }
      window.location.assign(url.href);
    });
  });

  if (language !== 'en') return;
  localize(document);
  // Browser validation otherwise follows the visitor's browser language.
  document.querySelectorAll('form').forEach((form) => {
    const clearValidation = ({ target }) => target.setCustomValidity?.('');
    form.addEventListener('input', clearValidation, true);
    form.addEventListener('change', clearValidation, true);
    form.addEventListener('invalid', ({ target }) => {
      target.setCustomValidity('');
      if (target.validity.valueMissing) {
        target.setCustomValidity(target.type === 'checkbox' ? 'Please check this box to continue.'
          : target.tagName === 'SELECT' ? 'Please select an option.' : 'Please fill out this field.');
      } else if (target.validity.typeMismatch && target.type === 'email') {
        target.setCustomValidity('Please enter a valid email address.');
      } else if (!target.validity.valid) {
        target.setCustomValidity('Please check the information in this field.');
      }
    }, true);
  });
  // Translate asynchronous form feedback, expanded schedules, and changing labels.
  const observer = new MutationObserver((records) => {
    observer.disconnect();
    for (const record of records) {
      if (record.type === 'characterData') translateText(record.target);
      else if (record.type === 'attributes') translateElement(record.target);
      else record.addedNodes.forEach(localize);
    }
    observe();
  });
  const observe = () => observer.observe(document.documentElement, {
    subtree: true, childList: true, characterData: true, attributes: true,
    attributeFilter: ['alt', 'aria-label', 'placeholder', 'title', 'content', 'href'],
  });
  observe();
}
