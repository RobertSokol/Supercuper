# Super Cuper forms Worker

Cloudflare Worker that validates interest forms and sends them through Resend.

## Deployment

1. Paste `supercuper-forms.js` into the Cloudflare Worker editor.
2. Add `RESEND_API_KEY` as an encrypted Worker secret.
3. Deploy and verify the public endpoint before changing the website form endpoint.

The secret must never be committed or exposed to browser code.

The website's canonical cup registration metadata is in `src/cupRegistrations.js`. The Worker keeps an embedded copy in `CUP_REGISTRATIONS` so it remains a standalone script in Cloudflare's editor. `tests/forms-worker.test.mjs` verifies that the two lists match, and `src/main.js` fails fast if a displayed cup is missing or has a different title in the canonical list.

When adding a cup or changing its slug, title, or last competition date, update `src/cupRegistrations.js` and the Worker copy together, update the displayed details in `src/main.js`, and run the date/Worker tests before building. Keep `endDate` as the final competition day in `YYYY-MM-DD`; use `null` only until a confirmed date exists. The Worker ignores browser-supplied dates, computes today's date in `Europe/Stockholm`, and rejects ambiguous or mismatched cup-specific submissions before calling Resend. Deploy the Worker before publishing matching website data so direct submissions are protected throughout the rollout.
