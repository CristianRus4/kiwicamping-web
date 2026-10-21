# kai-es-gap progress (Spanish gaps, KiwiCamping side)

Lane: kai-es-gap (Kai account). Branch `i18n/k-es-gap` (kiwicamping-web), worktree `~/.t3/worktrees/kiwicamping-web/kai-es-gap`. Never pushed.
AussieCamps side is done on `i18n/a-es-gap` (see its progress file). Working files (recreate if lost): `/tmp/kai-es-gap`
(BRIEF.md, REVIEW-BRIEF.md, KPROMPT.txt, KREVPROMPT.txt, mkbatch.py, ap.sh, qa.py, neg.py, merge.py, k/batches, k/out).
Packet: `translation-engine packet --config docs/translation.config.json --locale es --output /tmp/kai-es-gap/k/todo.json`.

## KiwiCamping gap at start (2026-10-21)
48/89 guides complete; 41 missing (2320 units): 20 road trips, 9 listicles/apps, 12 rule/topic guides.
Order: GSC impressions (best-nz-camping-apps, where-to-camp, east-cape, coromandel, northland, arthurs-pass, taranaki, picton-kaikoura,
wanaka-haast, nelson, banks, bay-of-islands, rakiura, three-week, christchurch-tekapo), listicles in publish order (wikicamps-alternatives,
best-campervan-apps, best-weather-apps, fuel-price-apps, working-holiday-apps, money-saving), then rules/topic guides and 0-impression road trips.
House terms: «el Pase»; glossary Isla Norte / Isla Sur / Isla Stewart (Rakiura); DOC campsites «campings del DOC»; "leave early" «márchate pronto».

## Done
- kb1a: best-nz-camping-apps (136 units). es 49/89 guides.

- kb4 (591 units, 14 guides): where-to-camp-in-new-zealand, east-cape, coromandel-rotorua, northland-cape-reinga, arthurs-pass, taranaki-forgotten-world, picton-kaikoura-christchurch, wanaka-haast-pass, nelson-abel-tasman-golden-bay, banks-peninsula, bay-of-islands, rakiura-stewart-island, three-week-campervan-route, christchurch-tekapo-aoraki. es 63/89 guides.

- kb5 (629 units, 6 listicles): wikicamps-alternatives, best-campervan-apps, best-weather-apps, fuel-price-apps, working-holiday-apps, money-saving-travel-apps (all NZ). es 69/89 guides.

- kb6 (600 units, 11 guides): freedom-camping-rules, freedom-camping-guide, self-contained-campervan-green-warrant, camping-fees-2026, doc-campsites-guide, holiday-parks-guide, camping-wastewater-rubbish, campfire-rules, packing-list, best-time-camping, scenic-campsites. es 80/89 guides.

## Next
- Drafting kr4 (responsible-camping, two-week-camper-itinerary, wellington-wairarapa, north-island-two-week, west-coast-south-island) and kr5 (queenstown-glenorchy, southern-scenic-route, fiordland, south-island-two-week); then review, apply, LANE COMPLETE.
- Then kl1..kl3 (6 listicles), kr1..kr5 (rules/topic guides, remaining road trips): batches already built in /tmp/kai-es-gap/k/batches.

## Notes for orchestrator (English source oddities, translated faithfully)
- best-nz-camping-apps: NZMCA section says the app "had no ratings yet" (past tense) while the table says "No ratings yet".

- where-to-camp-in-new-zealand: "four land types" vs FAQ "broadly five"; FAQ "No. Not by default:" reads oddly. east-cape: top up "with more than half a tank showing" probably means less than; pohutukawa/Tane Mahuta macrons missing in places. arthurs-pass: one section says wait if the pass closes, another says reroute. nelson-abel-tasman: description says international price "up to $31", body says "$21 to $31"; wanaka-haast: "an hour from Queenstown" (more like 1h15-1h30); Isthmus Peak "comparable" vs tip "same" views. three-week route tip "8 north, 1 ferry, 12 south" vs body 9/1/11. christchurch-tekapo: Pūkaki/Pukaki both spelled. picton-kaikoura: one "Kaikoura" without macron (Spanish uses Kaikōura throughout). Style guide has no entry for seals (lobos marinos used).

- Listicles: First Table called "highest-rated app" at 4.9 but Too Good To Go is also 4.9; "AT Mobile caps Auckland fares" (cap is Auckland Transport's AT HOP); Imoova "$1 a day"/Camplify "$85" are NZD by context only; Travellers Autobarn November relocation without a year.

- Rules guides: stay limits disagree (body "two to four nights", tip "1–2 night limits", rules tip "two nights common"); "5 working days" for rental fee notices ambiguous; fees description says "converted into 10 currencies" but no table; rules intro "an infringement everywhere else" vs backcountry rules; wastewater description "$800 fine for dumping waste" vs body ($800 for depositing waste while freedom camping); campfire FAQ "gas stove unaffected by fire seasons" vs body; scenic FAQ "those six charge $18 to $23" (only Waikawau above $20); Tapotupotu 5-10 min vs 10 min; packing list English still says "arrival card" (applied biosecurity guide says New Zealand Traveller Declaration).

## Blockers
none
