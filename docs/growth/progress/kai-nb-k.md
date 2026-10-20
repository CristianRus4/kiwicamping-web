# kai-nb-k progress (Norwegian Bokmål on KiwiCamping, lane 2)

Branch `i18n/k-nb-2`, worktree `~/.t3/worktrees/kiwicamping-web/kai-nb-k`. Never pushed; the orchestrator merges.
Task: translate every remaining incomplete KiwiCamping guide into nb, GSC impressions first, then rules and safety, costs,
app guides, camping guides, road trips. Skip the 7 listicles owned by another lane.

## Start state (2026-10-20)
85 guides, 21 complete in nb (incl. 5 of the skipped listicles), 62 to do (queue = 13 batches n01..n13 of about 5 guides).
Working files in `/tmp/nbk` (batches/nXX.input.json English, batches/nXX/<slug>.json drafts, applybatch.py, checkbatch.py,
negcheck.py, merge.py, complete.py gate mirror). Queue order file: `/tmp/nbk-queue.json` (recreate from GSC pages-3m.tsv).

## Done
n01-n08 (40 guides, nb 61/85 complete). n01-n03: doc-campsites-new-zealand-guide, camping-fees-new-zealand-2026, best-nz-camping-apps,
campfire-rules-new-zealand, best-time-camping-new-zealand, where-to-camp-in-new-zealand, self-contained-campervan-green-warrant,
freedom-camping-rules-new-zealand, camping-wastewater-rubbish-new-zealand, freedom-camping-new-zealand-guide,
beer-wine-coffee-prices-new-zealand, holiday-parks-new-zealand-guide, scenic-campsites-new-zealand,
overseas-driver-licence-new-zealand, sandflies-new-zealand-camping.
n04-n06: volcanic-safety-new-zealand-travel, coromandel-rotorua-road-trip, dogs-camping-new-zealand,
northland-cape-reinga-camping-route, new-zealand-camping-packing-list, responsible-camping-new-zealand, arthurs-pass-camping-route,
cook-strait-ferry-campervan-guide, kauri-dieback-camping-travel, taranaki-forgotten-world-highway, bus-ferry-train-costs-new-zealand,
picton-kaikoura-christchurch-route, wanaka-haast-pass-route, alcohol-fatigue-driving-new-zealand, doc-hut-rules-etiquette.
n07-n08 (drafted alone): river-crossing-safety-new-zealand, nelson-abel-tasman-golden-bay, left-side-driving-new-zealand,
banks-peninsula-camping-weekend, two-week-camper-itinerary-new-zealand, new-zealand-driving-day-planner,
wildlife-livestock-road-safety-new-zealand, bay-of-islands-camping-week, rakiura-stewart-island-camping-guide,
new-zealand-three-week-campervan-route.

## Next
n09..n13 (24 guides left, working alone): n09 christchurch-tekapo-aoraki-road-trip, camping-rules-local-councils-new-zealand,
earthquake-tsunami-camping-new-zealand, new-zealand-severe-weather-camping, one-lane-bridges-gravel-roads-new-zealand;
n10 winter-driving-new-zealand-campervan, kiwicamping-currency-place-costs, kiwicamping-filters-guide,
kiwicamping-offline-data-guide, kiwicamping-weather-look-around; n11 plan-trip-kiwicamping, save-places-kiwicamping,
winter-camping-new-zealand, fiordland-camping-road-trip, north-island-two-week-road-trip; n12 queenstown-glenorchy-camping,
south-island-two-week-road-trip, southern-scenic-route-camping, wellington-wairarapa-camping-loop, west-coast-south-island-road-trip;
n13 campervan-budget-new-zealand, food-fuel-resupply-new-zealand-road-trip.
Pipeline: draft to /tmp/nbk/batches/nXX/<slug>.json (inputs in nXX.input.json), `python3 /tmp/nbk/merge.py nXX`,
`python3 /tmp/nbk/applybatch.py nXX` (dry run), negation check, then `/tmp/nbk/finish.sh nXX "message"`. If /tmp/nbk is lost,
recreate from the git history of this file: the tools only flatten the nb guide shape into engine leaf keys and call
`translation-engine apply --config docs/translation.config.json` on catalog kiwicamping-website-nb.

## Notes
- The engine rejects a string whose protected-term counts (DOC, App Store, BookIt ...) differ from English: keep every DOC.
- Source oddities kept as written: where-to-camp "four land types" vs FAQ "Broadly five"; freedom-camping guide two to four
  nights vs 1-2 nights in tips; best-nz-camping-apps heading "Three realistic daily budgets"; best-time-camping title is about
  sandflies; the English says "Premium pass" for the paid subscription (written Pass in nb).

## Blockers
none
