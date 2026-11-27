# Cup page content model

All seven `/cuper/:slug` routes use the same `cupPageTemplate(cup)` renderer in `src/main.js`. Cup-specific content is configuration; it does not select a separate page design. The configuration is the intended boundary for future Super Cup Manager (SCM) administration. No SCM, Supabase, Worker, or Resend integration is implemented.

## Current ownership

| Content | Current source | Rendering |
| --- | --- | --- |
| Cup identity, date, place, age groups, format, card art | `cups` array in `src/main.js` | Shared home cards and all seven detail routes |
| Cup-specific hero, intro, fact rows, tournament copy, guarantee, phases, awards, rules, FAQ, CTA label, and optional Blixt schedule | `cupPageContentOverrides[slug]` | Merged into `cupPageContentBySlug`; rendered by `cupPageTemplate(cup)` |
| Registration status and CTA destination | `src/cupRegistrations.js`, `src/cupDates.js`, `cupInterestMarkup()` | Shared hero CTA; closed cups render a disabled label and open cups link to `/fortur?cup=<slug>` |
| Shared hero, intro, fact panel, collage area, guarantee/fase styling | `cupPageTemplate(cup)` and `src/style.css` | Same structure and visual system across all seven cups; optional content is omitted when absent |
| Blixt schedule, expandable schedule, and club rail | `blixtExtraSections()` | Optional Blixt-specific content within the shared cup-page shell; existing interactions remain enabled |
| Lodging options | `cupSupplementContent[slug].lodging` | `lodgingSectionMarkup()`; disabled by default and omitted when disabled or without published items |
| Intro collage | `cupPageContentOverrides[slug].introPhotos` | `.cup-intro-photo-grid`; configured only for Super Five |
| Full-width photo gallery | `sharedCupGalleryImages` plus `cupSupplementContent[slug].gallery` | `gallerySectionMarkup()`; all seven cups share the approved Super Five four-image gallery by default and can override or disable it individually |
| FAQ, closing CTA, footer | `faq` in `cupPageContentBySlug`, `priorityMarkup()`, and `footerMarkup()` | FAQ defaults to shared questions but can be overridden per cup |
| English strings | `src/en-US.json` and `src/i18n.js` | Selected through `?lang=en` or the language control. Dynamic copy and labels need exact dictionary entries; Swedish is the default |

## Supplement configuration

`cupSupplementContent` is keyed by cup slug. Every registered cup receives disabled lodging and gallery defaults. Super Five explicitly enables its four-image gallery; lodging remains disabled and has no public items. Renderers return an empty string when a section is disabled or has no published lodging items / valid gallery images, so no empty DOM space is left behind.

The fictional hotel examples are stored separately in `fixtures/lodging-preview.json`. They are not imported by `src/main.js`, are not copied from `public/`, and do not appear in the production bundle or on a cup page.

The four-photo gallery directly above FAQ uses the approved Super Five image set as its shared default for all seven cups. Future SCM configuration can replace `cupSupplementContent[slug].gallery.images` or set `enabled: false` per cup without changing the shared gallery layout.

A future SCM response can map to the existing renderer without changing its visual components:

```json
{
  "lodging": {
    "enabled": false,
    "title": "BOENDEALTERNATIV",
    "description": "",
    "items": []
  },
  "gallery": {
    "enabled": true,
    "images": [
      {
        "src": "/images/cups/super-five.webp",
        "alt": "Ungdomslag samlade på fotbollsplanen",
        "position": "center 48%",
        "mobilePosition": "center 42%",
        "sortOrder": 1
      }
    ]
  }
}
```

SCM should own per-cup enablement and published records. The page renderer remains responsible for escaping text, validating HTTP(S) links, sorting by `sortOrder`, and suppressing empty sections. Do not copy fixture examples into the live configuration.

## Cup-specific detail examples

- Solna Blixt Camp keeps its confirmed date, venue, age groups, formats, six-game guarantee, awards, existing schedule, and participating-club rail.
- Super Five keeps the approved design, six games of 1 × 20 minutes, two-stage group format, medal information, and its own three-photo collage and four-photo gallery.
- Super Five – Futsal Edition has six invited U11 teams, a single Round Robin, five games per team / 15 total, awards, SvFF futsal rules, and no retreat line. Its format does not reuse Super Five's group-stage copy.
- Super Six uses `April 2027` and `Järvastadens IP` consistently on card and detail page, with 16 teams, 42 × 30 metre pitches, and 7-a-side goals. No calendar day is fabricated.
- Super Eight and Super Nine show 16 and seven teams respectively.
- Solna Mästerskapen retains only the existing confirmed age range and the note that venue, playing formats, and dates will be announced when finalized.
- Each cup inherits shared FAQ content unless its configuration supplies its own questions. Optional content such as phases, collage, lodging, and gallery is omitted without leaving an empty section.
