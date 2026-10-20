# ava-pt-gap progress, KiwiCamping side (Ava)

Lane: fill every remaining European Portuguese gap on KiwiCamping (branch `i18n/k-pt-gap`). The
AussieCamps side is done on `i18n/a-pt-gap` (80/80). Never pushed; the orchestrator merges.

Method (scratch in /tmp/ptgap, rebuildable): engine packet -> in-<slug>.json, Sonnet-high drafts,
Opus-medium native review + negation table, apply with the engine, `translations:stamp -- --locale pt`,
`npm run content:check`, commit. Rule/negation units re-read against the English before each commit.

## Gaps at start: 41 guides (all missing). Order: GSC impressions, then scheduled listicles, then the rest
- K1 f69b307: best-nz-camping-apps, where-to-camp-in-new-zealand, east-cape-road-trip, coromandel-rotorua-road-trip, northland-cape-reinga-camping-route
- K2 ed05dc8: arthurs-pass, taranaki-forgotten-world, picton-kaikoura-christchurch, wanaka-haast-pass, nelson-abel-tasman-golden-bay
- K3 6fd2bc9: banks-peninsula, bay-of-islands, rakiura-stewart-island, new-zealand-three-week-campervan-route, christchurch-tekapo-aoraki
- K5 4271a1a: wellington-wairarapa, north-island-two-week, west-coast-south-island, queenstown-glenorchy, southern-scenic-route
- K4 676305c (scheduled listicles): wikicamps-alternatives, best-campervan-apps, best-weather-apps, fuel-price-apps, working-holiday-apps, money-saving-travel-apps
- K6 (in review): fiordland-camping-road-trip, south-island-two-week-road-trip, responsible-camping-new-zealand, two-week-camper-itinerary-new-zealand, freedom-camping-rules-new-zealand
- K7 (drafting): freedom-camping-new-zealand-guide, self-contained-campervan-green-warrant, doc-campsites-new-zealand-guide, holiday-parks-new-zealand-guide, camping-wastewater-rubbish-new-zealand
- K8 (drafting): campfire-rules-new-zealand, new-zealand-camping-packing-list, best-time-camping-new-zealand, scenic-campsites-new-zealand, camping-fees-new-zealand-2026

pt on KiwiCamping: 74/89 guides after K4 (K6, K7, K8 remain = 15).

## Notes
- Weather apps = "app de meteorologia". Māori spelling mirrors each English unit. Brand/agency names are never added where the English has a pronoun (engine count check). Descriptions stay within the English facts, so some are under 150 characters.
