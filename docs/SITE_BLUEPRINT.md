# KiwiCamping site blueprint

## Site jobs

The site presents the KiwiCamping iPhone app, helps travellers make practical
New Zealand road-trip decisions, and earns durable discovery through useful,
source-backed guides. It does not replace current official alerts or guarantee
that a place is open, legal, safe, bookable, or suitable for a vehicle.

## Technical architecture

- React 19 and Next-compatible routing rendered through Vinext/Vite
- TypeScript and Tailwind CSS
- Server-rendered/static content, exported to `pages-dist`
- GitHub Pages deployment from `main`
- Custom domain served from `/`, with no repository base path
- Committed local translation JSON; no translation service in production
- Committed local article images with source and licence records

Primary commands:

```bash
npm ci
npm run dev
npm run check
npm run build:pages
```

`npm run check` is the release-quality gate: content audit, production build,
rendered HTML tests, article-similarity audit, and asset validation. `npm run
build:pages` builds and exports the GitHub Pages artifact.

## Content model

The site combines:

- a product homepage with screenshots, feature explanations, testimonials,
  FAQ, App Store link, and QR code;
- a guide index and long-form route, camping, rules, planning, cost, and app
  articles;
- currency and fuel-cost tools;
- support, privacy, and terms;
- sitemap, robots, canonical/alternate metadata, structured data, and `llms.txt`;
- six localized site editions in addition to English.

Article records, route generation, currency derivation, localization, and asset
checks live in source and scripts. Do not hand-edit generated output in
`pages-dist`; change the content model or source assets and rebuild.

## Product boundary

The website may describe current KiwiCamping capabilities verified in the app:
map/list/satellite exploration, detailed place filters, offline bundled place
details, collections, multi-stop trips and tasks, weather and costs where
available, Look Around where available, widgets, and selected in-app guides.

Network-dependent maps, routing, weather, external pages, booking, and current
alerts are not offline guarantees. Counts such as 6,500+ places and 2,000+
places to stay are versioned public claims: revalidate them when the bundled
dataset or category rules change.

The iOS URL-scheme identifiers are not currently consistent across the Kiwi
target's configuration and handler. Do not introduce public deep links until
the app-side contract is resolved and tested.

## Localization architecture

Localized routes use `/de`, `/es`, `/fr`, `/it`, `/nl`, and `/pt`. UI, support,
legal, tools, and non-road-trip guide categories are translatable; road-trip
guides remain English-only by policy. A structurally incomplete guide falls
back as a whole to English, stays `noindex`, and is excluded from the sitemap.

The English source catalog is generated with:

```bash
npm run translations:source
```

Never edit locale keys or array structure casually. Preserve `KiwiCamping`,
Māori names and macrons, official names, measurements, URLs, and source meaning.

## Data and trust boundaries

The public site is static and should not collect app library, trip, account, or
location data. Calculator inputs should remain client-side unless a future
change explicitly documents collection. The app's Core Data/CloudKit library,
RevenueCat state, and place database are not website databases.

Every factual travel or rules claim needs an appropriate current source.
`RESEARCH-SOURCES.md` and `IMAGE-SOURCES.md` record evidence and provenance;
they do not make stale content current automatically.
