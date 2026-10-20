# kai-nb-k progress (Norwegian Bokmål on KiwiCamping, lane 2)

Branch `i18n/k-nb-2`, worktree `~/.t3/worktrees/kiwicamping-web/kai-nb-k`. Never pushed; the orchestrator merges.
Task: translate every remaining incomplete KiwiCamping guide into nb, GSC impressions first, then rules and safety, costs,
app guides, camping guides, road trips. Skip the 7 listicles owned by another lane.

## Start state (2026-10-20)
85 guides, 21 complete in nb (incl. 5 of the skipped listicles), 62 to do (queue = 13 batches n01..n13 of about 5 guides).
Working files in `/tmp/nbk` (batches/nXX.input.json English, batches/nXX/<slug>.json drafts, applybatch.py, checkbatch.py,
negcheck.py, merge.py, complete.py gate mirror). Queue order file: `/tmp/nbk-queue.json` (recreate from GSC pages-3m.tsv).

## Done
n01-n06 (30 guides, nb 51/85 complete). n01-n03: doc-campsites-new-zealand-guide, camping-fees-new-zealand-2026, best-nz-camping-apps,
campfire-rules-new-zealand, best-time-camping-new-zealand, where-to-camp-in-new-zealand, self-contained-campervan-green-warrant,
freedom-camping-rules-new-zealand, camping-wastewater-rubbish-new-zealand, freedom-camping-new-zealand-guide,
beer-wine-coffee-prices-new-zealand, holiday-parks-new-zealand-guide, scenic-campsites-new-zealand,
overseas-driver-licence-new-zealand, sandflies-new-zealand-camping.
n04-n06: volcanic-safety-new-zealand-travel, coromandel-rotorua-road-trip, dogs-camping-new-zealand,
northland-cape-reinga-camping-route, new-zealand-camping-packing-list, responsible-camping-new-zealand, arthurs-pass-camping-route,
cook-strait-ferry-campervan-guide, kauri-dieback-camping-travel, taranaki-forgotten-world-highway, bus-ferry-train-costs-new-zealand,
picton-kaikoura-christchurch-route, wanaka-haast-pass-route, alcohol-fatigue-driving-new-zealand, doc-hut-rules-etiquette.

## Next
n07..n13 (34 guides, working alone, no helpers, overnight rule): n07 river-crossing-safety, nelson-abel-tasman-golden-bay,
left-side-driving, banks-peninsula, two-week-camper-itinerary; n08 driving-day-planner, wildlife-livestock-road-safety,
bay-of-islands-camping-week, rakiura-stewart-island, three-week-campervan-route; n09..n13 as in /tmp/nbk-queue.json
(recreate: GSC impressions, then rules and safety, costs, app guides, camping guides, road trips).
Pipeline per batch: draft to /tmp/nbk/batches/nXX/<slug>.json, `python3 /tmp/nbk/merge.py nXX`, `python3 /tmp/nbk/applybatch.py nXX`
(dry run), negation check with `negcheck.py`, then `/tmp/nbk/finish.sh nXX "message"` (apply, stamp, content:check, commit).

## Notes
- The engine rejects a string whose protected-term counts (DOC, App Store, BookIt ...) differ from English: keep every DOC.
- Source oddities kept as written: where-to-camp "four land types" vs FAQ "Broadly five"; freedom-camping guide two to four
  nights vs 1-2 nights in tips; best-nz-camping-apps heading "Three realistic daily budgets"; best-time-camping title is about
  sandflies; the English says "Premium pass" for the paid subscription (written Pass in nb).

## Blockers
none
