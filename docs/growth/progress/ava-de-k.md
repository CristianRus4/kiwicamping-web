# ava-de-k progress (German, KiwiCamping guides)

Lane: ava-de-k (Ava account). Worktree `~/.t3/worktrees/kiwicamping-web/ava-de-k`, branch `i18n/k-de-2` (cut from origin/main 2026-10-21).
Task: translate every untranslated KiwiCamping guide into German. Touch only `lib/translations/de.json`, `lib/translations/meta/de.json`, this file.
Skipped (other lane's listicles): rankers-alternatives, campermate-alternatives, free-camping-apps-new-zealand, road-trip-planner-apps-new-zealand, best-travel-apps-new-zealand, wikicamps-alternatives, best-campervan-apps-new-zealand.

Start state: de 48/85 guides complete; 35 to do (37 missing minus 2 skipped listicles).
Working files (not committed): /tmp/ava-de-k (extract.mjs, check.mjs, apply.mjs, src/, out/). Subagents not allowed before 09:00 21 Oct, so drafting is done directly until then.

## Order (GSC impressions first, then rules, costs, camping, planning, road trips)
B1: best-nz-camping-apps, where-to-camp-in-new-zealand, east-cape-road-trip, rakiura-stewart-island-camping-guide, northland-cape-reinga-camping-route
B2: arthurs-pass-camping-route, taranaki-forgotten-world-highway, coromandel-rotorua-road-trip, picton-kaikoura-christchurch-route, wanaka-haast-pass-route
B3: banks-peninsula-camping-weekend, bay-of-islands-camping-week, christchurch-tekapo-aoraki-road-trip, responsible-camping-new-zealand, freedom-camping-rules-new-zealand
B4: self-contained-campervan-green-warrant, camping-wastewater-rubbish-new-zealand, campfire-rules-new-zealand, camping-fees-new-zealand-2026, freedom-camping-new-zealand-guide
B5: doc-campsites-new-zealand-guide, holiday-parks-new-zealand-guide, scenic-campsites-new-zealand, new-zealand-camping-packing-list, best-time-camping-new-zealand
B6-B7: remaining road trips (wellington-wairarapa, north-island-two-week, west-coast-south-island, queenstown-glenorchy, southern-scenic-route, fiordland, nelson-abel-tasman, south-island-two-week, new-zealand-three-week, two-week-camper-itinerary)

## Done
- B1 applied, stamped, content:check passes (de 53/85): best-nz-camping-apps, where-to-camp-in-new-zealand, east-cape-road-trip, rakiura-stewart-island-camping-guide, northland-cape-reinga-camping-route. Drafted directly (no subagents before 09:00); native-review pass by an Opus subagent is still to do after 09:00 (reviewer feedback gets applied as a follow-up commit).
- B2 applied, stamped, content:check passes (de 58/85): arthurs-pass-camping-route, taranaki-forgotten-world-highway, coromandel-rotorua-road-trip, picton-kaikoura-christchurch-route, wanaka-haast-pass-route.
- B3 applied, stamped, content:check passes (de 63/85): banks-peninsula-camping-weekend, bay-of-islands-camping-week, christchurch-tekapo-aoraki-road-trip, responsible-camping-new-zealand, freedom-camping-rules-new-zealand.
- B4 applied, stamped, content:check passes (de 68/85; the 17 left are the 2 skipped listicles + B5 + 10 road trips): self-contained-campervan-green-warrant, camping-wastewater-rubbish-new-zealand, campfire-rules-new-zealand, camping-fees-new-zealand-2026, freedom-camping-new-zealand-guide.
- `npm run check` passed on B1..B3 (exit 0, 42 tests).
- B5 applied, stamped, content:check passes (de 73/85): doc-campsites-new-zealand-guide, holiday-parks-new-zealand-guide, scenic-campsites-new-zealand, new-zealand-camping-packing-list, best-time-camping-new-zealand.
- `npm run check` passed on B1..B4 (exit 0).
- B6 applied, stamped, content:check passes (de 79/85): wellington-wairarapa-camping-loop, north-island-two-week-road-trip, west-coast-south-island-road-trip, queenstown-glenorchy-camping, southern-scenic-route-camping, fiordland-camping-road-trip.

## Next
Hand off B1..B5 (12 left: 10 road trips + 2 skipped listicles = 10 to do); B6/B7 road trips after `npm run check` and review of the rules units; then B4; after 09:00 start the Opus native review of B1..B3.

## Blockers
None.
