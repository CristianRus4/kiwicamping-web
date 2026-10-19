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

## M2 i18n platform: IN PROGRESS (session 3, Kai, 2026-10-20)
Two parallel streams existed. Stream B (worktree growth-k-foundation-2, commits bcd59fe..28c926c) follows
the aussiecamps-web file layout, has redirects and the reviews flag: growth/k-foundation now builds on it.
Stream A (uncommitted Ava work left in growth-k-foundation until 04:00) is saved on branch
growth/k-foundation-streamA; mine it only for pieces B lacks. Orchestrator addenda: real IDs and ct<=30
are already in (check MAX_CAMPAIGN_TOKEN); redirects map done (lib/redirects.ts).

Done:
- Registry, locales:sync, route manifest, exporter on manifest, sitemap index, alternatesFor, related,
  dates, CJK CSS, switcher, stamps, redirects (stream B).
- scripts/audit-seo.mjs in check (9b06a1a); docs/growth/ranking-urls.txt (115 URLs from GSC).

Next (in order):
1. Name alignment with aussie PARITY: getConsent -> getConsentStrings; renderGuideLinks signature;
   app-store CAMPAIGN_TOKEN_MAX/campaignTokenPattern/locale default; stamps script -> scripts/translations-stamp.mjs
   (exports leaves, staleSummary, stamp, invalidate); lib/translation-source.ts + staleness assert; CJK reading time.
2. Legacy body: replace permanent test with one-off scripts/verify-legacy-bodies.mjs (addendum 2); keep the
   permanent guards (15 legacy URLs 200, self-canonical .html, no English /guides/<legacy-slug>/).
3. Port aussie M2 tests: drafts not routed, table-shape gate, no hardcoded locale lists, manifest == export,
   URL baseline, localized guide lang/date/breadcrumbs, data-guide links, related, stamps, translation source.
4. docs/PARITY.md (copy aussie's, Kiwi columns; add the redirects mechanism).
5. npm run check, hand off M2.
Not in baseline but have GSC impressions (return when translated): it/de/es/pt east-cape-road-trip,
fr coromandel-rotorua-road-trip, es nelson-abel-tasman-golden-bay, de rakiura-stewart-island-camping-guide,
nl new-zealand-three-week-campervan-route.

## Blockers / notes for the orchestrator
- None.
