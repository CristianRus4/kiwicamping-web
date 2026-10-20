# kai-sv-k progress (Kai account)

Lane: raise Swedish (sv) coverage on KiwiCamping. Branch `i18n/k-sv-2`, worktree `~/.t3/worktrees/kiwicamping-web/kai-sv-k`. Touches only `lib/translations/sv.json`, `lib/translations/meta/sv.json` and this file.

## Plan
62 guides remain (7 listicles skipped: rankers-alternatives, campermate-alternatives, free-camping-apps-new-zealand, road-trip-planner-apps-new-zealand, best-travel-apps-new-zealand, wikicamps-alternatives, best-campervan-apps-new-zealand). Order: Search Console impressions (docs/growth/gsc/2026-10-19/pages-3m.tsv, no Swedish rows exist), then rules and safety, costs, app guides, camping guides, trip planning, road trips.

Batches (about five guides each):
1. self-contained-campervan-green-warrant, freedom-camping-rules-new-zealand, camping-wastewater-rubbish-new-zealand, freedom-camping-new-zealand-guide, holiday-parks-new-zealand-guide
2. east-cape-road-trip, scenic-campsites-new-zealand, eating-out-new-zealand-prices-2026, new-zealand-road-signs-visitors, domestic-flight-costs-new-zealand-2026
3. wof-registration-campervan-new-zealand, accommodation-costs-new-zealand-2026, volcanic-safety-new-zealand-travel, northland-cape-reinga-camping-route, new-zealand-camping-packing-list
4+. the rest in impressions order, then zero-impression rules and safety, app guides, camping guides, trip planning, road trips.

## Done
- [x] Batch 1 applied (6 guides): self-contained-campervan-green-warrant, freedom-camping-rules-new-zealand, camping-wastewater-rubbish-new-zealand, freedom-camping-new-zealand-guide, holiday-parks-new-zealand-guide, east-cape-road-trip. Negation re-read done against the English, content:check passes.
- [x] Batch 2 applied (6 guides): scenic-campsites-new-zealand, eating-out-new-zealand-prices-2026, new-zealand-road-signs-visitors, domestic-flight-costs-new-zealand-2026, wof-registration-campervan-new-zealand, accommodation-costs-new-zealand-2026.
- [x] Batch 3 applied (8 guides): volcanic-safety-new-zealand-travel, new-zealand-camping-packing-list, beer-wine-coffee-prices-new-zealand, responsible-camping-new-zealand, northland-cape-reinga-camping-route, arthurs-pass-camping-route, dogs-camping-new-zealand, cook-strait-ferry-campervan-guide.
- [x] Batch 4 applied (8 guides): taranaki-forgotten-world-highway, bus-ferry-train-costs-new-zealand, coromandel-rotorua-road-trip, picton-kaikoura-christchurch-route, sandflies-new-zealand-camping, overseas-driver-licence-new-zealand, wanaka-haast-pass-route, doc-hut-rules-etiquette.
- [x] Batch 5 applied (4 guides): river-crossing-safety-new-zealand, left-side-driving-new-zealand, banks-peninsula-camping-weekend, two-week-camper-itinerary-new-zealand.
- [x] Batch 6 applied (5 guides): new-zealand-driving-day-planner, bay-of-islands-camping-week, christchurch-tekapo-aoraki-road-trip, kauri-dieback-camping-travel, new-zealand-severe-weather-camping.
- [x] Batch 7 applied (6 guides, rules and safety complete): earthquake-tsunami-camping-new-zealand, winter-driving-new-zealand-campervan, alcohol-fatigue-driving-new-zealand, one-lane-bridges-gravel-roads-new-zealand, wildlife-livestock-road-safety-new-zealand, camping-rules-local-councils-new-zealand.
- [x] Batch 8 applied (6 app guides): plan-trip-kiwicamping, save-places-kiwicamping, kiwicamping-filters-guide, kiwicamping-offline-data-guide, kiwicamping-weather-look-around, kiwicamping-currency-place-costs. Checked Pass boundary and no offline-map wording (title/intro of the offline guide say the app does not give maps without a connection).
- [x] Batch 9 applied (3 guides): winter-camping-new-zealand, campervan-budget-new-zealand, food-fuel-resupply-new-zealand-road-trip.
- [x] Batch 10 applied (2 road trips): wellington-wairarapa-camping-loop, north-island-two-week-road-trip.
- [x] Batch 11 applied (4 road trips): west-coast-south-island-road-trip, queenstown-glenorchy-camping, southern-scenic-route-camping, fiordland-camping-road-trip.

## Next
No subagents (overnight rule until 09:00). Next: the 4 remaining road trips: nelson-abel-tasman-golden-bay, south-island-two-week-road-trip, new-zealand-three-week-campervan-route, rakiura-stewart-island-camping-guide. Then final gate check and the full npm run check.
Audit rules: no genitive -s on KiwiCamping or other brands (MetService, Apple); English number-words stay words; keep English macron spelling exactly.

## Blockers
none

## Working method (to resume)
Scratch in `/tmp/sv-k2/` (not in repo): `k/full.json` = `translation-engine packet --config docs/translation.config.json --locale sv --catalog kiwicamping-website-sv --no-usage` (applied units drop out), `k/src/<slug>.json` per guide, `k/out/<slug>.json` values, `scripts/` (lint.py, neg.py, neg2.py, gloss.py, links.py, mkinput.py, gate.mts), `BRIEF.md` subagent brief, `k/ref-approved.txt` approved examples. If /tmp is lost, regenerate the packet and split by slug (units grouped by `articles.<slug>`).
