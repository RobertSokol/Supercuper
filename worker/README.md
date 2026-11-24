# Super Cuper forms Worker

Cloudflare Worker that validates interest forms and sends them through Resend.

## Deployment

For the existing production Worker, record its deployed version, code, settings, bindings, and routes before deploying. Paste `supercuper-forms.js` into the existing Worker's editor without changing its configuration. Preserve the existing `RESEND_API_KEY` secret and do not replace or delete it. Confirm the secret binding, compatibility settings, and routes remain unchanged after deployment; stop the website rollout if they cannot be verified.

For a new Worker only, add `RESEND_API_KEY` as an encrypted Worker secret. Deploy the Worker and verify the public endpoint before publishing the website.

The secret must never be committed or exposed to browser code.

The website's canonical cup registration metadata is in `src/cupRegistrations.js`. The Worker keeps an embedded copy in `CUP_REGISTRATIONS` so it remains a standalone script in Cloudflare's editor. `tests/forms-worker.test.mjs` verifies that the two lists match, and `src/main.js` fails fast if a displayed cup is missing or has a different title in the canonical list.

When adding a cup or changing its slug, title, or last competition date, update `src/cupRegistrations.js` and the Worker copy together, update the displayed details in `src/main.js`, and run the date/Worker tests before building. Keep `endDate` as the final competition day in `YYYY-MM-DD`; use `null` only until a confirmed date exists. The Worker ignores browser-supplied dates, computes today's date in `Europe/Stockholm`, and rejects ambiguous or mismatched cup-specific submissions before calling Resend. For compatibility during website rollout, it accepts a missing slug only when the submitted cup title exactly matches the server registry; any supplied slug must match the title. Deploy the Worker before publishing matching website data so direct submissions are protected throughout the rollout.
