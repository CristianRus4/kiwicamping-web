# KiwiCamping website

The product and travel website for KiwiCamping, the iPhone app for exploring 6,500+ New Zealand places, saving collections and planning complete multi-stop road trips.

This rebuild is deployed from `main` to GitHub Pages at [campingapp.nz](https://campingapp.nz/).

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. Run the full verification suite with `npm run check`.

## Content

- 74 original long-form New Zealand guides across routes, camping, rules, planning, app tutorials and current costs
- at least ten prose paragraphs in each article before its numbered summary
- ten-currency tables mechanically derived from dated NZD benchmarks
- English plus complete German, Spanish, French, Italian, Dutch and Portuguese editions
- 74 different local article images with source and licence records in `docs/IMAGE-SOURCES.md`

Core product copy is based on the current KiwiCamping app in `/Users/cristian/Developer/Apps/Camping/Kiwi`, not the former website. The App Store destination and QR code both resolve to app ID `6746952595`.

## Deployment

Pushing to `main` runs `.github/workflows/pages.yml`, which runs `npm run check` (content audit, build, static export, tests, similarity and asset checks) and deploys `pages-dist` to the custom domain only if all of it passes. The workflow deliberately uses no project base path because `campingapp.nz` is served from the domain root. After a deploy, `npm run smoke:live` checks the live site.

## Analytics and campaign links

- `lib/site.ts` holds `GA_MEASUREMENT_ID` and `APPLE_PROVIDER_TOKEN`. Empty means no analytics script and plain store links.
- Every store link goes through `appStoreUrl({ placement, locale })` in `lib/app-store.ts` and carries `data-cta="<placement>"`; with a provider token set, it adds `?pt=…&ct=w_<placement>_<locale>&mt=8`. `APP_STORE_URL` itself stays clean for the schema.
- `lib/analytics.ts` renders the one inline GA4 script (Consent Mode v2, `app_store_click`, `window.acTrack`), kept by the exporter through `data-static-keep`. `<main>` carries `data-page-kind`, `data-locale`, `data-slug` and `data-category` for it.
- The consent bar (`components/consent-bar.tsx`) shows only to visitors in a European time zone with no stored choice. Its strings live in the `consent` namespace, never in `ui`.
