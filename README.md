# KiwiCamping website

The product and travel website for KiwiCamping, the iPhone app for exploring 4,500+ New Zealand places, saving collections and planning complete multi-stop road trips.

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

Pushing to `main` runs `.github/workflows/pages.yml`, exports the static site and deploys it to the custom domain. The workflow deliberately uses no project base path because `campingapp.nz` is served from the domain root.
