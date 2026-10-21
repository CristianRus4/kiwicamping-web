# Publish schedule

New guides publish themselves on a set day. Add `publishAt: "YYYY-MM-DD"` (a New Zealand date) to
the article in `lib/content/*.ts` (`makeArticle`), merge it, and add a row below. GitHub
Pages builds every day at 07:15 NZDT (06:15 NZST), and the first build on or after that day
publishes the guide (`lib/publish.ts`). Until then it exists nowhere on the site: no page in any
language, no sitemap entry, hreflang, listing, related card or llms.txt line, and links to it are
plain text.

## Rules

- At most one new guide per day on this site.
- `publishAt` is only for new guides. Never set it on a guide that is already live (the SEO audit fails,
  because every live URL must stay; see `docs/growth/url-baseline.txt`) or on a legacy `.html` guide
  (the build throws: those are always published).
- Translations go live with their English guide or after it. A translation merged early waits for the
  English date; one merged later goes live with the next build.
- Updates to existing pages are not scheduled or throttled. Merge them when they are ready.
- The guide must pass `npm run check` when it is merged, not on its publish day: the content and
  similarity audits check scheduled guides too.

## How to

1. Pick the first free day in the table (one guide per day).
2. Set `publishAt` on the article, run `npm run translations:source`, and commit both.
3. Add a row here with status `scheduled`.
4. After the guide is live, change its status to `live`.

To preview a site as it will be on a given day: `BUILD_DATE=2026-11-05 npm run build:pages`.

| Date | Slug | Status |
|---|---|---|
| 2026-10-22 | rankers-alternatives | scheduled |
| 2026-10-23 | wikicamps-alternatives | scheduled |
| 2026-10-24 | campermate-alternatives | scheduled |
| 2026-10-25 | best-campervan-apps-new-zealand | scheduled |
| 2026-10-26 | free-camping-apps-new-zealand | scheduled |
| 2026-10-28 | road-trip-planner-apps-new-zealand | scheduled |
| 2026-10-30 | best-travel-apps-new-zealand | scheduled |
| 2026-10-27 | best-weather-apps-new-zealand | scheduled |
| 2026-10-29 | fuel-price-apps-new-zealand | scheduled |
| 2026-10-31 | working-holiday-apps-new-zealand | scheduled |
| 2026-11-01 | money-saving-travel-apps-new-zealand | scheduled |
| 2026-11-02 | christmas-summer-camping-new-zealand-2026-27 | scheduled |
| 2026-11-03 | new-years-eve-summer-event-camping-new-zealand | scheduled |
| 2026-11-04 | best-campsite-booking-apps-new-zealand | scheduled |
| 2026-11-05 | campable-alternatives | scheduled |
| 2026-11-06 | best-tramping-great-walks-apps-new-zealand | scheduled |
| 2026-11-07 | best-dump-station-apps-new-zealand | scheduled |
| 2026-11-08 | best-south-island-road-trip-apps-new-zealand | scheduled |
| 2026-11-09 | can-i-sleep-in-my-car-in-new-zealand | scheduled |
| 2026-11-10 | can-i-camp-anywhere-on-doc-land | scheduled |
| 2026-11-11 | can-i-park-overnight-at-a-beach-in-new-zealand | scheduled |
| 2026-11-12 | can-i-camp-on-a-farm-or-private-land-in-nz | scheduled |
| 2026-11-13 | can-i-park-a-campervan-on-the-street-overnight-nz | scheduled |
| 2026-11-14 | can-i-drive-a-campervan-on-a-car-licence-nz | scheduled |
| 2026-11-15 | can-i-fly-a-drone-at-a-doc-campsite-nz | scheduled |
| 2026-11-16 | can-i-drive-on-the-beach-in-new-zealand | scheduled |
| 2026-11-17 | can-i-drink-the-water-at-nz-campsites | scheduled |
| 2026-11-18 | can-i-go-to-the-toilet-outdoors-camping-nz | scheduled |
| 2026-11-19 | freedom-camping-queenstown-lakes-2026 | scheduled |
| 2026-11-20 | freedom-camping-thames-coromandel-2026 | scheduled |
| 2026-11-21 | nz-great-walks-2026-27-huts-campsites-booking-fees | scheduled |
| 2026-11-22 | freedom-camping-tauranga-2026 | scheduled |
| 2026-11-23 | freedom-camping-whangarei-2026 | scheduled |
| 2026-11-24 | abel-tasman-coast-track-campsites-2026-27 | scheduled |
| 2026-11-25 | freedom-camping-southland-2026 | scheduled |
| 2026-11-26 | freedom-camping-new-plymouth-2026 | scheduled |
| 2026-11-27 | routeburn-track-camping-2026-27 | scheduled |
| 2026-11-28 | freedom-camping-waitaki-2026 | scheduled |
| 2026-11-29 | freedom-camping-whakatane-2026 | scheduled |
| 2026-11-30 | tongariro-northern-circuit-camping-2026-27 | scheduled |
| 2026-12-10 | rakiura-track-camping-2026-27 | scheduled |
| 2026-12-11 | whanganui-journey-camping-2026-27 | scheduled |
| 2026-12-07 | milford-track-2026-27-huts-booking-fees | scheduled |
| 2026-12-08 | kepler-track-camping-2026-27 | scheduled |
