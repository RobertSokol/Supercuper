# Cup page content model

This document describes the current server-rendered cup-page structure in `src/main.js` and the configuration boundary intended for future Super Cup Manager (SCM) administration. No SCM or Supabase integration is implemented.

## Current ownership

| Content | Current source | Rendering |
| --- | --- | --- |
| Cup identity, date, place, age groups, format, logo | `cups` array in `src/main.js` | Passed to `superFivePage(cup)` or `genericCupPage(cup)` by the route slug |
| Cup-card date/place overrides | `cupCardMetadataOverrides` in `src/main.js` | Applied to the cup record before both the home rail and detail route render; Super Six uses `April 2027` and `Järvastadens IP` |
| Cup-specific intro heading, description additions, fact rows, and note visibility | `cupPageContentBySlug[slug]` in `src/main.js` | Applied after the existing generic page template is rendered and before language initialization; existing layout, CTA, and shell remain shared |
| Registration status and link | `src/cupRegistrations.js`, `src/cupDates.js`, `cupInterestMarkup()` | Existing CTA markup; closed cups render a disabled label |
| Super Five introduction and facts | `superFivePage(cup)` template | Existing `.cup-intro`, `.cup-facts`, and `.super-five-hero` sections |
| Tournament format and match guarantee | `superFivePage(cup)` template | `.cup-intro-details` and `.super-five-format-guarantee` |
| Tournament phases | `superFivePage(cup)` template | `.super-five-phases` cards |
| Lodging options | `cupSupplementContent[slug].lodging` | `lodgingSectionMarkup()`; renders only when `enabled` is true and at least one item is `published` |
| Photo collage | `superFivePage(cup)` template | `.cup-intro-photo-grid`; the three images are selected for the Super Five introduction |
| Full-width photo gallery | `cupSupplementContent[slug].gallery` | `gallerySectionMarkup()`; renders only when enabled and at least one valid image exists |
| FAQ, closing CTA, footer | `faqQuestions`, `priorityMarkup()`, and `footerMarkup()` in `src/main.js` | Shared `detailFooter`, appended after cup-page main content |
| English strings | `src/en-US.json` and `src/i18n.js` | Selected through `?lang=en` or the language control; Swedish remains the default. Added labels, fact values, headings, copy, and image alt text must have exact dictionary entries |

## Supplement configuration

`cupSupplementContent` is keyed by cup slug. Every registered cup receives disabled lodging and gallery defaults. Super Five explicitly enables its four-image gallery; lodging remains disabled and has no public items. Renderers return an empty string when a section is disabled or has no published lodging items / valid gallery images, so no empty DOM space is left behind.

The fictional hotel examples are stored separately in `fixtures/lodging-preview.json`. They are not imported by `src/main.js`, are not copied from `public/`, and do not appear in the production bundle or on a cup page.

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

- Super Five – Futsal Edition: title/intro and the Round Robin, five-game guarantee, awards, and futsal rules are in `cupPageContentBySlug['super-five-futsal']`; its common cup metadata supplies Solnahallen, December 28, 2026, U11, and Futsal.
- Super Six: `cupCardMetadataOverrides['super-six']` supplies April 2027 and Järvastadens IP to both the cup card and detail page. `cupPageContentBySlug['super-six']` supplies 16 teams, 42 × 30 metre pitch dimensions, 7-a-side goals, and the matching description addition. April is stored as month/year text, not a fabricated day.
- Super Eight and Super Nine: their existing descriptions are preserved; their slug entries add only 16 teams and seven teams respectively.
- The general cup-information rows are rendered from `cups` plus optional `infoRows`. Extra rows and descriptive copy are data, not separate visual components, so SCM can later provide those fields without a design change.
- FAQ content is currently shared in `faqQuestions`; the rendered cup-page footer sequence remains FAQ, closing CTA, then footer.
