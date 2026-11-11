# Publish schedule

New guides publish themselves on a set day. Add `publishAt: "YYYY-MM-DD"` (a New Zealand date) to
the article in `lib/content/*.ts` (`makeArticle`), merge it, and add a row below. GitHub
Pages builds every day at 07:15 NZDT (06:15 NZST), and the first build on or after that day
publishes the guide (`lib/publish.ts`). Until then it exists nowhere on the site: no page in any
language, no sitemap entry, hreflang, listing, related card or llms.txt line, and links to it are
plain text.


From 2026-11-11 every guide is published (the owner's call): the dated rows after today are an indexing calendar, 10 guides per day in seasonal order (summer and the current season first, winter topics last). The daily task requests Search Console indexing for each day's rows; the guides are already live.

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
| 2026-10-27 | best-weather-apps-new-zealand | scheduled |
| 2026-10-28 | road-trip-planner-apps-new-zealand | scheduled |
| 2026-10-29 | fuel-price-apps-new-zealand | scheduled |
| 2026-10-30 | best-travel-apps-new-zealand | scheduled |
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
| 2026-11-09 | wikicamps-not-working-new-zealand | live (no publishAt, 9 Nov push) |
| 2026-11-09 | doc-campsite-pass-new-zealand | live (no publishAt, 9 Nov push) |
| 2026-11-09 | freedom-camping-tent-new-zealand | live (no publishAt, 9 Nov push) |
| 2026-11-09 | camping-without-self-contained-vehicle-new-zealand | live (no publishAt, 9 Nov push) |
| 2026-11-10 | can-i-camp-anywhere-on-doc-land | scheduled |
| 2026-11-11 | can-i-park-overnight-at-a-beach-in-new-zealand | scheduled |
| 2026-11-12 | wikicamps-not-working-new-zealand | index |
| 2026-11-12 | auckland-to-bay-of-islands-drive-guide | index |
| 2026-11-12 | 10-day-campervan-itinerary-new-zealand | index |
| 2026-11-12 | auckland-to-napier-drive-guide | index |
| 2026-11-12 | auckland-to-new-plymouth-drive-guide | index |
| 2026-11-12 | auckland-to-taupo-drive-guide | index |
| 2026-11-12 | auckland-to-tauranga-drive-guide | index |
| 2026-11-12 | auckland-to-waitomo-hobbiton-drive-guide | index |
| 2026-11-12 | auckland-to-wellington-drive-guide | index |
| 2026-11-12 | campervan-holiday-with-kids-new-zealand | index |
| 2026-11-13 | can-i-drive-a-campervan-on-a-car-licence-nz | index |
| 2026-11-13 | can-i-drive-on-the-beach-in-new-zealand | index |
| 2026-11-13 | christchurch-to-dunedin-drive-guide | index |
| 2026-11-13 | christchurch-to-franz-josef-drive-guide | index |
| 2026-11-13 | christchurch-to-hanmer-springs-drive-guide | index |
| 2026-11-13 | christchurch-to-hokitika-greymouth-road-trip | index |
| 2026-11-13 | christchurch-to-invercargill-drive-guide | index |
| 2026-11-13 | christchurch-to-kaikoura-drive-guide | index |
| 2026-11-13 | christchurch-to-marlborough-drive-guide | index |
| 2026-11-13 | christchurch-to-nelson-drive-guide | index |
| 2026-11-14 | christchurch-to-queenstown-drive-guide | index |
| 2026-11-14 | christchurch-to-te-anau-drive-guide | index |
| 2026-11-14 | christchurch-to-wanaka-drive-guide | index |
| 2026-11-14 | doc-campsites-sell-out-summer-new-zealand | index |
| 2026-11-14 | family-holiday-parks-new-zealand | index |
| 2026-11-14 | freedom-camping-north-island | index |
| 2026-11-14 | freedom-camping-queenstown-lakes-2026 | index |
| 2026-11-14 | freedom-camping-south-island | index |
| 2026-11-14 | freedom-camping-waihi-beach | index |
| 2026-11-14 | lakeside-camping-south-island | index |
| 2026-11-15 | north-island-vs-south-island-campervan | index |
| 2026-11-15 | one-week-campervan-itinerary-new-zealand | index |
| 2026-11-15 | queenstown-to-milford-sound-drive-guide | index |
| 2026-11-15 | waterfalls-lakes-campgrounds-new-zealand | index |
| 2026-11-15 | wellington-to-napier-drive-guide | index |
| 2026-11-15 | auckland-3-days-campervan | index |
| 2026-11-15 | buying-a-campervan-new-zealand-working-holiday | index |
| 2026-11-15 | campervan-hire-cost-new-zealand-2026 | index |
| 2026-11-15 | campervan-relocations-new-zealand | index |
| 2026-11-15 | campervan-vs-car-and-tent-new-zealand | index |
| 2026-11-16 | camping-in-paihia-bay-of-islands | index |
| 2026-11-16 | can-i-fly-a-drone-at-a-doc-campsite-nz | index |
| 2026-11-16 | can-i-go-to-the-toilet-outdoors-camping-nz | index |
| 2026-11-16 | can-i-park-a-campervan-on-the-street-overnight-nz | index |
| 2026-11-16 | christchurch-campervan-starting-point | index |
| 2026-11-16 | doc-campsite-pass-new-zealand | index |
| 2026-11-16 | doc-hut-great-walk-booked-out | index |
| 2026-11-16 | dunedin-3-days-campervan | index |
| 2026-11-16 | easy-campervan-meals-new-zealand | index |
| 2026-11-16 | easy-doc-huts-families-first-timers | index |
| 2026-11-17 | freedom-camping-akaroa | index |
| 2026-11-17 | freedom-camping-arrowtown | index |
| 2026-11-17 | freedom-camping-auckland-2026 | index |
| 2026-11-17 | freedom-camping-christchurch-2026 | index |
| 2026-11-17 | freedom-camping-colac-bay | index |
| 2026-11-17 | freedom-camping-dunedin-2026 | index |
| 2026-11-17 | freedom-camping-far-north-2026 | index |
| 2026-11-17 | freedom-camping-gisborne | index |
| 2026-11-17 | freedom-camping-haast | index |
| 2026-11-17 | freedom-camping-kaikoura | index |
| 2026-11-18 | freedom-camping-lumsden | index |
| 2026-11-18 | freedom-camping-mackenzie-2026 | index |
| 2026-11-18 | freedom-camping-marlborough-2026 | index |
| 2026-11-18 | freedom-camping-matakana | index |
| 2026-11-18 | freedom-camping-motueka | index |
| 2026-11-18 | freedom-camping-napier-hastings | index |
| 2026-11-18 | freedom-camping-nelson | index |
| 2026-11-18 | freedom-camping-new-plymouth-2026 | index |
| 2026-11-18 | freedom-camping-paihia | index |
| 2026-11-18 | freedom-camping-picton | index |
| 2026-11-19 | freedom-camping-raglan | index |
| 2026-11-19 | freedom-camping-rotorua-2026 | index |
| 2026-11-19 | freedom-camping-southland-2026 | index |
| 2026-11-19 | freedom-camping-tasman-2026 | index |
| 2026-11-19 | freedom-camping-taupo | index |
| 2026-11-19 | freedom-camping-tauranga-2026 | index |
| 2026-11-19 | freedom-camping-te-anau | index |
| 2026-11-19 | freedom-camping-tent-new-zealand | index |
| 2026-11-19 | freedom-camping-thames-coromandel-2026 | index |
| 2026-11-19 | freedom-camping-timaru | index |
| 2026-11-20 | freedom-camping-twizel | index |
| 2026-11-20 | freedom-camping-waitaki-2026 | index |
| 2026-11-20 | freedom-camping-wanaka | index |
| 2026-11-20 | freedom-camping-wellington-2026 | index |
| 2026-11-20 | freedom-camping-west-coast | index |
| 2026-11-20 | freedom-camping-westland-2026 | index |
| 2026-11-20 | freedom-camping-westport | index |
| 2026-11-20 | freedom-camping-whakatane-2026 | index |
| 2026-11-20 | freedom-camping-whangamata | index |
| 2026-11-20 | freedom-camping-whanganui | index |
| 2026-11-21 | freedom-camping-whangarei-2026 | index |
| 2026-11-21 | freedom-camping-whitianga | index |
| 2026-11-21 | glamping-new-zealand | index |
| 2026-11-21 | great-barrier-island-camping | index |
| 2026-11-21 | hawkes-bay-wairarapa-wine-trail-campervan | index |
| 2026-11-21 | holiday-park-prices-new-zealand-2026 | index |
| 2026-11-21 | lake-waikaremoana-great-walk-camping-2026-27 | index |
| 2026-11-21 | long-weekend-camping-new-zealand | index |
| 2026-11-21 | lupins-and-southern-lights-camping-new-zealand | index |
| 2026-11-21 | manawatu-road-trip-camping | index |
| 2026-11-22 | new-zealand-wine-regions-campervan | index |
| 2026-11-22 | pacific-coast-highway-auckland-to-napier-camping | index |
| 2026-11-22 | road-user-charges-campervan-new-zealand | index |
| 2026-11-22 | rotorua-3-days-campervan | index |
| 2026-11-22 | scenic-lookouts-new-zealand-drive-up | index |
| 2026-11-22 | selling-a-campervan-new-zealand-before-you-leave | index |
| 2026-11-22 | sunrise-spots-new-zealand-campervan | index |
| 2026-11-22 | top-of-the-south-itinerary-nelson-golden-bay-marlborough | index |
| 2026-11-22 | volcanic-loop-road-trip-new-zealand | index |
| 2026-11-22 | wellington-3-days-campervan | index |
| 2026-11-23 | working-holiday-road-trip-budget-new-zealand-2026 | index |
| 2026-11-23 | abel-tasman-coast-track-campsites-2026-27 | index |
| 2026-11-23 | banks-peninsula-campsites | index |
| 2026-11-23 | camping-base-hooker-valley-aoraki-mount-cook | index |
| 2026-11-23 | camping-base-roys-peak-wanaka | index |
| 2026-11-23 | camping-base-tongariro-alpine-crossing | index |
| 2026-11-23 | camping-bases-best-day-walks-new-zealand | index |
| 2026-11-23 | camping-in-auckland | index |
| 2026-11-23 | camping-in-christchurch | index |
| 2026-11-23 | camping-in-kaikoura | index |
| 2026-11-24 | camping-in-queenstown | index |
| 2026-11-24 | camping-in-taupo | index |
| 2026-11-24 | camping-in-tekapo | index |
| 2026-11-24 | camping-in-wellington | index |
| 2026-11-24 | camping-without-self-contained-vehicle-new-zealand | index |
| 2026-11-24 | can-i-camp-on-a-farm-or-private-land-in-nz | index |
| 2026-11-24 | can-i-drink-the-water-at-nz-campsites | index |
| 2026-11-24 | eco-stays-near-new-zealand-cities | index |
| 2026-11-24 | franz-josef-fox-glacier-camping | index |
| 2026-11-24 | great-taste-trail-by-bike | index |
| 2026-11-25 | great-walks-2027-28-bookings-new-zealand | index |
| 2026-11-25 | heaphy-track-by-bike | index |
| 2026-11-25 | heaphy-track-camping-2026-27 | index |
| 2026-11-25 | hipcamp-alternatives | index |
| 2026-11-25 | hump-ridge-track-huts-booking-2026-27 | index |
| 2026-11-25 | is-camping-in-new-zealand-safe | index |
| 2026-11-25 | kaikoura-wildlife-and-diving | index |
| 2026-11-25 | kea-and-wildlife-encounters-new-zealand | index |
| 2026-11-25 | kepler-track-camping-2026-27 | index |
| 2026-11-25 | milford-track-2026-27-huts-booking-fees | index |
| 2026-11-26 | new-zealand-experiences-under-100-dollars | index |
| 2026-11-26 | nz-great-walks-2026-27-huts-campsites-booking-fees | index |
| 2026-11-26 | paparoa-track-huts-booking-2026-27 | index |
| 2026-11-26 | punakaiki-oparara-basin-camping | index |
| 2026-11-26 | queenstown-walks-camping-base | index |
| 2026-11-26 | rakiura-track-camping-2026-27 | index |
| 2026-11-26 | roadtrippers-alternatives | index |
| 2026-11-26 | routeburn-track-camping-2026-27 | index |
| 2026-11-26 | school-public-holidays-new-zealand-2027 | index |
| 2026-11-26 | surf-highway-45-camping-guide | index |
| 2026-11-27 | thermal-explorer-highway-camping-guide | index |
| 2026-11-27 | tongariro-northern-circuit-camping-2026-27 | index |
| 2026-11-27 | two-week-new-zealand-trip-cost | index |
| 2026-11-27 | wellington-hikes-camping-base | index |
| 2026-11-27 | wet-weather-camping-new-zealand | index |
| 2026-11-27 | whanganui-journey-camping-2026-27 | index |
| 2026-11-27 | matariki-camping-new-zealand-2027 | index |
| 2026-11-27 | walks-closed-for-lambing-new-zealand | index |
| 2026-11-27 | halloween-guy-fawkes-camping-new-zealand | index |
