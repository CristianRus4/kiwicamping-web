# K-foundation progress (kiwicamping-web, branch growth/k-foundation)

Owner: K-foundation thread (Ava). Only this thread edits this file.

## Baseline
- `npm run check` on untouched main (d3de92b): green, 12/12 tests. No pre-existing failure.
- main's export saved before any change; the 15 legacy bodies are snapshotted from it in
  `tests/fixtures/legacy-bodies/` (normalisation documented in `tests/legacy-body.mjs`).

## M1 Instrumentation + CI gate: DONE (handed off)
- CI: `pages.yml` checkout `fetch-depth: 0`, `npm ci`, `npm run check`, upload. `check` = content:check,
  build, export (tsx), test, similarity, assets. `build:pages` = build + export. `export` and `test` run under tsx.
- `lib/app-store.ts`: `appStoreUrl({placement, locale})`, `campaignToken`, `smartBannerContent`.
  `APPLE_PROVIDER_TOKEN` and `GA_MEASUREMENT_ID` in `lib/site.ts`, both "" (orchestrator fills them).
- Every store link: `appStoreUrl` + `data-cta` (hdr, hero, card, stick, foot, llms, dl, qr).
  `<main data-page-kind data-locale data-slug data-category>` on every page.
- `lib/analytics.ts`: one inline `<script data-static-keep="analytics">` first in `<body>` (only when the GA id is set).
  Consent Mode v2 region default + global default, stored choice, gtag.js injected, config with signals off,
  `app_store_click` beacon, `window.acTrack`. Exporter keeps `data-static-keep`.
- Consent bar (`components/consent-bar.tsx`), new `consent` namespace (English fallback per string, never gates),
  footer "Privacy choices" link; sticky CTA hidden while the bar is open.
- Smart App Banner `affiliate-data=pt=…&ct=w_sb_<locale>` when pt is set.
- QR: inline SVG from `qrcode` (`components/qr-code.tsx`); PNG removed. Verified both QRs decode.
- Privacy: "Website analytics" section, effective 19 October 2026; English /privacy renders from `staticPages.privacy`.
  Locale privacy pages fall back to English until re-translated (2/3 pages per locale now).
- `scripts/smoke-live.mjs` (`npm run smoke:live`).
- Tests: script allowlist, store-link placement/campaign, schema installUrl clean + smart banner, `<main>` data,
  legacy body byte-identity. Verified also with fake GA/pt values (17/17) and in a browser (Europe vs Auckland tz).
- `next` pinned to 16.2.6 (matches aussiecamps-web). Obsolete "neue / do not push" hold removed from docs.

## M2 i18n platform: IN PROGRESS
Next: locale registry + locales:sync, route manifest, translate everything, alternatesFor, schema, dates/sitemap index,
link markup, related, dates/money, CJK CSS, switcher, stale detection, audit-seo, number parity, URL baseline, PARITY.md.

## Blockers / notes for the orchestrator
- `docs/growth/url-baseline.txt` is not on main yet (needed for M2 item 16).
