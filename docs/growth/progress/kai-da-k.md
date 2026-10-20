# kai-da-k progress (Danish coverage, KiwiCamping)

Lane: kai-da-k. Branch `i18n/k-da-2`, worktree `~/.t3/worktrees/kiwicamping-web/kai-da-k`.
Touches only `lib/translations/da.json`, its stamp file (`lib/translations/meta/da.json`) and this file.
Working files (inventory, packet, batches, subagent output, QA scripts): `/tmp/da-k2`
(rebuild: `translation-engine packet --config docs/translation.config.json --locale da --catalog kiwicamping-website-da --limit 100000 --no-usage --output /tmp/da-k2/packet.json`; inventory `/tmp/da-k2/inv.mts`).

## Start state (2026-10-20)
- 85 translatable guides, 22 complete in da; 63 untranslated. Skipped (other lane): rankers-alternatives, campermate-alternatives, free-camping-apps-new-zealand, road-trip-planner-apps-new-zealand, best-travel-apps-new-zealand, wikicamps-alternatives, best-campervan-apps-new-zealand. So 56 guides to do.
- Order: GSC impressions (docs/growth/gsc/2026-10-19, overall; there is no /da data), then rules and safety, app guides, camping guides, trip planning, road trips.

## Done
- Batch 1 (c5fc471, 3728b4b): doc-campsites-new-zealand-guide, campfire-rules-new-zealand, best-nz-camping-apps, camping-fees-new-zealand-2026, best-time-camping-new-zealand. Drafted (sonnet high), reviewed (opus medium), negation sweep by hand, engine apply, stamp, content:check clean (da 27/85 guides).

- Batch 2 (fdd1023): where-to-camp-in-new-zealand, self-contained-campervan-green-warrant, freedom-camping-rules-new-zealand, camping-wastewater-rubbish-new-zealand, freedom-camping-new-zealand-guide. da 32/85 guides. `npm run check` passed after batch 2 (handoff 1).

- Batches 3-5 (ce56bac, ed42471, 7fb5092; b4 commit is ed42471): b3 holiday-parks, scenic-campsites, sandflies, volcanic-safety, coromandel-rotorua; b4 dogs, domestic-flights, northland-cape-reinga, packing-list, responsible-camping; b5 arthurs-pass, cook-strait-ferry, kauri-dieback, taranaki-forgotten-world, bus-ferry-train-costs. da 47/85 guides.
- Overnight rule (to 09:00): no subagents; drafted b6+ myself (see Working notes).

- Batch 6 (5316954, drafted and reviewed by me alone): picton-kaikoura-christchurch-route, wanaka-haast-pass-route, alcohol-fatigue-driving-new-zealand, doc-hut-rules-etiquette, river-crossing-safety-new-zealand. da 52/85 guides.

- Batch 7 (drafted and reviewed by me alone): nelson-abel-tasman-golden-bay, left-side-driving-new-zealand, banks-peninsula-camping-weekend, two-week-camper-itinerary-new-zealand, new-zealand-driving-day-planner. da 57/85 guides.

## Next
- b8 wildlife-livestock-road-safety-new-zealand bay-of-islands-camping-week rakiura-stewart-island-camping-guide new-zealand-three-week-campervan-route christchurch-tekapo-aoraki-road-trip; then b9..b13 in /tmp/da-k2/queue.json (b13 is a single road trip).
- Working method without helpers (numbered): `python3 /tmp/da-k2/numview.py NAME` to read, write `N|||Danish` lines, `fromnum.py NAME lines out.json`, `edit.py` for fixes; then the steps below.
- Earlier method: `python3 /tmp/da-k2/mkbatch.py NAME slugs...`, write `key|||Danish` lines, `fromlines.py`, `ap.sh --dry-run`, `qa.py`, side-by-side read (`side.py`, `neg.py`), apply, `translations:stamp -- --locale da`, `content:check`, commit.

## Blockers / questions
(none)

## English source issues found (Danish follows the English)
- campfire-rules: body says a prohibited fire season can restrict some appliances such as gas cookers; FAQ says a gas stove is unaffected by fire seasons.
- doc-campsites: "most campsites outside serviced huts" (Backcountry Hut Pass) and "the Milford and Paparoa tracks have none" are ambiguous.
- sandflies / best-time: sandfly guide title says "Sandfly Season"/worst on West Coast and Fiordland but best-time says no official season.
- best-nz-camping-apps: bare "$" amounts where the table uses NZ$.
- where-to-camp: body says four land types, faq[0] says "Broadly five"; freedom-camping guide: "two to four nights" vs tip "1-2 night limits"; camping-wastewater-rubbish sections[2].body[1] says "Premium pass" where other guides say KiwiCamping Pass.
- doc-hut-rules-etiquette: English meta description is only 80 characters, so the Danish is short too (no facts added).
- alcohol-fatigue-driving: Danish writes the blood limit as 0,05 with no promille gloss (section 0: no added conversions).
