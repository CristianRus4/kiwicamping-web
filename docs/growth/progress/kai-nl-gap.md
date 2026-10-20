# kai-nl-gap progress (KiwiCamping, Dutch gaps)

Lane: kai-nl-gap (Kai account). Branch `i18n/k-nl-gap`, worktree `~/.t3/worktrees/kiwicamping-web/kai-nl-gap`. AussieCamps side is complete (see that repo's progress file).
Working files in `/tmp/kai-nl-gap` (briefs, mkbatch.py, qa.py, ap.sh, batches/K-k*.json, out/, rev/). Packet: `translation-engine packet --config docs/translation.config.json --locale nl --output /tmp/kai-nl-gap/todoK.json`.

## State at start (2026-10-21)
nl 48/89 guides; 41 missing.

## Done
- K1 (6a6d827): east-cape-road-trip, coromandel-rotorua-road-trip, northland-cape-reinga-camping-route, arthurs-pass-camping-route, taranaki-forgotten-world-highway.
- K2 (e66e0dd): picton-kaikoura-christchurch-route, wanaka-haast-pass-route, nelson-abel-tasman-golden-bay, banks-peninsula-camping-weekend, bay-of-islands-camping-week.

- K3 (e7720ab): rakiura-stewart-island-camping-guide, new-zealand-three-week-campervan-route, christchurch-tekapo-aoraki-road-trip, wikicamps-alternatives, best-campervan-apps-new-zealand.
- K5 (efd7610): wellington-wairarapa-camping-loop, north-island-two-week-road-trip, west-coast-south-island-road-trip, queenstown-glenorchy-camping, southern-scenic-route-camping.
- K4 (fa185c9): best-weather-apps-new-zealand, fuel-price-apps-new-zealand, working-holiday-apps-new-zealand, money-saving-travel-apps-new-zealand. nl 72/89.

## Next (batch files exist in /tmp/kai-nl-gap/batches)
- k6 (drafting): fiordland-camping-road-trip, south-island-two-week-road-trip, two-week-camper-itinerary-new-zealand, responsible-camping-new-zealand, best-nz-camping-apps
- k7 (drafting): where-to-camp-in-new-zealand, freedom-camping-rules-new-zealand, freedom-camping-new-zealand-guide, self-contained-campervan-green-warrant, doc-campsites-new-zealand-guide
- k8 (drafting): holiday-parks-new-zealand-guide, camping-wastewater-rubbish-new-zealand, campfire-rules-new-zealand, new-zealand-camping-packing-list, best-time-camping-new-zealand, scenic-campsites-new-zealand, camping-fees-new-zealand-2026

## English source issues (NZ)
- east-cape: "pōhutukawa" has the macron in two units, none in two others; "Tane Mahuta" has no macron.
- picton-kaikoura-christchurch-route sections[8].body[0] writes Kaikoura without macron (rest of the page: Kaikōura).
- arthurs-pass: says both "wait" and "reroute rather than wait" when the pass is closed; NZTA vs Waka Kotahi used interchangeably.
- nelson-abel-tasman description: "$21 NZ, up to $31 international" is ambiguous (read as NZ$ 21 for New Zealanders).
- banks-peninsula: the "within ninety minutes of Christchurch" sentence repeats in sections[6] and sections[8].

## Blockers
- none
- west-coast-south-island-road-trip / north-island-two-week-road-trip: Taupō vs Taupo and Lake Wakatipu vs Whakatipu used inconsistently; Ngai Tahu, kaka, tui written without macrons; Glenorchy road "about 46 km" in the intro vs "45 km" in section 3.
- new-zealand-three-week-campervan-route: description/heading/body say 9 days north + 1 ferry + 11 south, tip says 8 + 1 + 12.
- christchurch-tekapo-aoraki-road-trip: Pūkaki and Pukaki both used; Omarama without macrons.
- rakiura-stewart-island-camping-guide: unclear whether "1 October to 30 April" also applies to the hut prices.
- fuel/money app listicles: Plan My Walk "covers both" follows a list of three; First Table called highest-rated app but Too Good To Go ties at 4.9 (money guide).
