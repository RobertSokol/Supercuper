# Super Cuper forms Worker

Cloudflare Worker that validates interest forms and sends them through Resend.

## Deployment

1. Paste `supercuper-forms.js` into the Cloudflare Worker editor.
2. Add `RESEND_API_KEY` as an encrypted Worker secret.
3. Deploy and verify the public endpoint before changing the website form endpoint.

The secret must never be committed or exposed to browser code.
