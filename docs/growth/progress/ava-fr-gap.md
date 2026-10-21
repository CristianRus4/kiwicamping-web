# ava-fr-gap progress (Ava account)

Lane: fill the remaining French (fr) guide gaps on both sites. Branches `i18n/a-fr-gap` (AussieCamps,
worktree `~/.t3/worktrees/aussiecamps-web/ava-fr-gap`) and `i18n/k-fr-gap` (KiwiCamping, worktree
`~/.t3/worktrees/kiwicamping-web/ava-fr-gap`). Never pushed; the orchestrator merges. The same file is kept in both repos.

## Gaps found (2026-10-21, comparing en.json keys with fr.json; ui, consent, tools, pages are complete on both sites)
AussieCamps, 18 guides missing in fr (62/80 complete):
- road trips with Search Console impressions: melbourne-to-adelaide-coastal-route, sunshine-coast-hinterland-camping,
  gibb-river-road-camping, nullarbor-crossing-camping-guide, flinders-ranges-camping-guide, red-centre-way-camping
- scheduled listicles in publish order: best-caravan-rv-apps-australia (10-26), best-apps-working-holiday-australia (10-27),
  best-weather-apps-camping-australia (10-28), best-money-saving-travel-apps-australia (10-29), hipcamp-alternatives (10-30)
- other road trips: tasmania-camping-loop, sydney-south-coast-camping, queensland-outback-way, south-west-wa-camping-loop,
  victoria-high-country-camping, kangaroo-island-camping-guide, blue-mountains-camping-weekend

KiwiCamping, 26 guides missing in fr (63/89 complete):
- by impressions: best-nz-camping-apps, campfire-rules-new-zealand, where-to-camp-in-new-zealand,
  self-contained-campervan-green-warrant, scenic-campsites-new-zealand, new-zealand-camping-packing-list,
  responsible-camping-new-zealand, two-week-camper-itinerary-new-zealand
- listicles in publish order: wikicamps-alternatives, best-campervan-apps-new-zealand, best-weather-apps-new-zealand,
  fuel-price-apps-new-zealand, working-holiday-apps-new-zealand, money-saving-travel-apps-new-zealand
- rest: camping-wastewater-rubbish-new-zealand, best-time-camping-new-zealand and 10 road trips (nelson-abel-tasman-golden-bay,
  rakiura-stewart-island-camping-guide, new-zealand-three-week-campervan-route, wellington-wairarapa-camping-loop,
  north-island-two-week-road-trip, west-coast-south-island-road-trip, queenstown-glenorchy-camping,
  southern-scenic-route-camping, fiordland-camping-road-trip, south-island-two-week-road-trip)

## Method (scratch in /tmp/ava-frgap, recreate if lost)
`mkinput.mjs <au|nz> <batch> <slugs…>` makes engine input files from the packet (catalog `aussiecamps-website-fr` /
`kiwicamping-website-fr`); `BRIEF.md` drafter brief (sonnet, high), `REVIEW-BRIEF.md` native review (opus, medium, negation table),
`check.mjs` number/link/tag/dash/offline-map check, `merge.mjs` merges values files. Apply with `translation-engine apply`,
`npm run translations:stamp -- --locale fr`, `npm run content:check`, commit.

## Done (lane complete, 2026-10-21)
- AussieCamps: all 18 gaps filled (6 road trips with impressions, 5 scheduled listicles, 7 other road trips) plus three lines that read as offline-map
  advice reworded to « cartes téléchargées ». fr is 80/80 guides, 0 stale. Engine audit of the fr catalog: complete, warnings only (source-equal, glossary).
- KiwiCamping: all 26 gaps filled (8 high-impression core guides, 6 listicles, wastewater, best-time, 10 road trips). fr is 89/89 guides, 0 stale.
  Engine audit of the fr catalog: complete; 8 `register` warnings are false positives (Māori "Te Anau", "Te Papa", "Te Ara", "te reo").
- Every batch: Sonnet draft, Opus native review with negation table, own negation re-read against the English, typography check, stamped,
  `content:check` passing. Both branches rebased on origin/main; `npm run check` run before the final handoff.

## Next
nothing: the lane is complete.

## English-source notes for the orchestrator (translated as written)
- melbourne-to-adelaide sections[5].body[0]: describes a fixed fruit-fly checkpoint with bins on the coastal SA entry and says fresh produce "cannot be carried in";
  SA's permanent quarantine stations are on other highways and the rule is for restricted items. Worth a fact check. sections[7].tips[2] says "Free ferry crossings" the body never states.
- gibb-river-road sections[4].body[0] closes "roughly November to April" vs "closes again around October"; sections[7].body[3] repeats sections[4].body[2] ("Main Roads" vs "Main Roads WA").
- sunshine-coast sections[7].body[1] "one of only two everglade systems in the world" is an unverified claim.
- red-centre-way: "visitor pass" (s0) and "Parks and Wildlife pass" (s7) probably name the same NT parks pass; Anangu is written without its underline; Uluru without the diacritic in s3.body[0].
- nullarbor: lookouts "with barriers" (s2) vs "unfenced" (s6); flinders-ranges: Pichi Richi railway credited to both Quorn and Hawker.
- best-apps-working-holiday-australia: source label "third Work and Holiday 417 visa" mixes 417 (Working Holiday) and 462 (Work and Holiday); tip "Super refund taxed at 65%" is looser than its paragraph.
- best-caravan-rv-apps-australia: free bookings list omits hotels (the WHV page includes them); "up to A$50 each" (G'day Rewards) ambiguous.
- best-money-saving-travel-apps-australia: Splitwise "settles up at the end" (s12.body[0]) contradicts "you settle up yourself" (s12.body[1] and table).
- best-weather-apps-camping-australia: Weatherzone Pro A$5.99 a month and ad-free A$5.99 a year cost the same, worth rechecking.
- hipcamp-alternatives: the AussieCamps section never says campground data needs the Pass (translated as written).

## Blockers
none

## English-source notes, KiwiCamping (translated as written)
- best-nz-camping-apps: Rankers called the most-rated app (3,322 ratings) while the table gives AllTrails 5,198; sections[6].body[0] writes $5 / $150 / $102 / $252 without NZ.
- campfire-rules-new-zealand: sections[4].body[0] says a prohibited season can restrict some appliances, but faq[1][1] says gas stoves are unaffected by fire seasons (a safety rule worth aligning).
- where-to-camp-in-new-zealand: "four land types" in three places, but the FAQ says "broadly five"; council self-contained rule worded more broadly in sections[6].body[0] than in sections[0].body[1].
- scenic-campsites-new-zealand: says "Premium pass" where other pages say "KiwiCamping Pass"; the "October 2026" booking status will date the page.
- fuel and money listicles: money page calls First Table "the highest-rated app here" at 4.9 while Too Good To Go is also 4.9; the wikicamps-alternatives page repeats the Rankers "most ratings" claim.
- new-zealand-three-week-campervan-route: a tip says "Roughly 8 north, 1 ferry, 12 south" against 9 / 1 / 11 in the body and description.
- north-island-two-week-road-trip: the Napier "workable shape" conflicts with the main route and the Taranaki cut.
- nelson-abel-tasman-golden-bay: the description's "$21 NZ" means the New Zealander rate (rendered « pour les Néo-Zélandais »); tide windows and "4 huts and 18 campsites" are worth a check against DOC.
- queenstown-glenorchy-camping: 46 km in the intro vs 45 km in section 3; Whakatipu vs Wakatipu spelled both ways.
- Macrons: "Ngai Tahu" has no macron in the English (west-coast road trip); the French writes « Ngāi Tahu » like the sibling pages. Taupo/Taupō and kaka/kākā are also inconsistent in the English.

## English-source notes, AussieCamps road trips added in batch 3
- tasmania-camping-loop: tip "Buy the holiday parks pass" contradicts the body (a national parks holiday pass); "book the pass in advance" probably means the shuttle or a campsite.
- queensland-outback-way: lists Charleville as a service centre on a route that does not go through it. sydney-south-coast-camping: the NSW booking window is never defined.
- kangaroo-island-camping-guide: intro recommends four or five nights, a later paragraph says three days is the minimum; a heading says "2020 fires" while its paragraph says 2019 to 2020. victoria-high-country-camping: "Queen's Birthday" (now King's Birthday); Dargo listed as a sealed road open all year.

## Blockers
none
