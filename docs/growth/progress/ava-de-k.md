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
- B7 applied, stamped, content:check passes (de 83/85, the 2 left are the skipped listicles wikicamps-alternatives and best-campervan-apps-new-zealand): nelson-abel-tasman-golden-bay, south-island-two-week-road-trip, new-zealand-three-week-campervan-route, two-week-camper-itinerary-new-zealand.

- `npm run check` passed (exit 0, 42 tests) on the final branch state, rebased on origin/main 47b8dae (de 83/89 guides, 0 stale, 0 unstamped). The 6 not translated are listicles: wikicamps-alternatives, best-campervan-apps-new-zealand (my skip list) and the four scheduled listicles that landed on main after this task was written (best-weather-apps, fuel-price-apps, working-holiday-apps, money-saving-travel-apps; treated as the listicle lane's).

## Next
- Native review (Opus, medium, 2 at a time) of all 35 guides is NOT done yet: subagents were not allowed before 09:00 on 21 Oct. Review packs and brief are prepared in /tmp/ava-de-k/review (pack-A..D.md, BRIEF.md); fixes get applied with the engine as a follow-up commit.
- Then: ask the orchestrator whether the 4 new scheduled listicles are mine.

## English source oddities noticed (for the content lanes, not changed)
- new-zealand-three-week-campervan-route: tip says "Roughly 8 north, 1 ferry, 12 south" but the text says nine north, one ferry, eleven south.
- where-to-camp-in-new-zealand: section "The four land types" but the FAQ lists five kinds of camping.
- arthurs-pass-camping-route: heading "The highest of the three alpine crossings" says 920 m is highest, but the text then compares only with Lewis and Haast.
- best-time-camping-new-zealand: title and meta are about sandflies, the page is mostly seasons (sandflies is one section).
- wanaka-haast-pass-route / west-coast: "Haast Pass" link texts point at the offline-data guide ("no reception").

## Blockers
None.
