# ava-k-listicles-2 progress

Lane: ava-k-listicles-2 (Ava). Branch: `growth/k-listicles-2`. Worktree: `~/.t3/worktrees/kiwicamping-web/ava-k-listicles-2`.
Brief: `/Users/cristian/Developer/Webs/.growth-lanes/briefs/listicles-common.md`. Model: run 1 in `lib/content/listicles.ts` (progress in `k-listicles.md`).
Research fact sheets (dated, sourced): `/Users/cristian/Developer/Webs/.growth-lanes/research/k-listicles2-*.md`.

## Pages (run 2), in order, with publishAt
| # | Slug | publishAt | Status |
|---|---|---|---|
| 1 | wikicamps-alternatives | 2026-10-23 | committed |
| 2 | best-campervan-apps-new-zealand | 2026-10-25 | committed |
| 3 | best-weather-apps-new-zealand | 2026-10-27 | committed |
| 4 | fuel-price-apps-new-zealand | 2026-10-29 | committed |
| 5 | working-holiday-apps-new-zealand | 2026-10-31 | committed |
| 6 | money-saving-travel-apps-new-zealand | 2026-11-01 | research |

Each page: article in `lib/content/listicles.ts`, FAQ in `lib/content/faqs.ts`, keyword-map row, schedule row,
Wikimedia Commons hero (1600x900 + 800) credited in `docs/IMAGE-SOURCES.md`, screen figure in `lib/screen-figures.ts`.

## Done
- Setup: read rules, brief, run 1 model, fact sheets, screenshot inventory. No owner conflicts in keyword-map.csv
  (existing related pages to link, not duplicate: new-zealand-road-trip-fuel-cost-2026, food-fuel-resupply-new-zealand-road-trip,
  new-zealand-severe-weather-camping, campervan-budget-new-zealand, new-zealand-travel-cost-2026, kiwicamping-weather-look-around).

## App facts checked in the app repo (read-only)
- Weather on place screens and trip stops is Apple Weather (WeatherKit): current conditions, gusts, feels-like, 7 daily highs/lows;
  trip stops show the forecast for the arrival day. Not official warnings. Needs signal.

## Handoff 1 (2026-10-20): pages 1-2
- Commits 55bd00a (wikicamps-alternatives), fbc5475 (best-campervan-apps-new-zealand), 47a4593 (similarity rewording).
- `npm run check` passed: content, build, export (946 pages), SEO (504 indexable, unchanged), 42/42 tests, similarity, assets.
- Local skeleton checker (not committed, excluded via .git/info/exclude): `npx tsx .skelcheck.mts <slug>...` mirrors the similarity audit without a build.

## Owner rule from 2026-10-21 (pages 3+)
- Do not explain free vs Pass for KiwiCamping. Say what it has and does; table price line "Free to download, with in-app purchases". Never call Pass-only data free. Overnight: no subagents, one page per batch, commit, hand off.

## Next
- Page 3 weather: committed 2026-10-21.
- Page 4 fuel: committed 2026-10-21 (KiwiCamping not ranked; 'Where KiwiCamping fits' section holds the figure).
- Page 5 working holiday: committed 2026-10-21 (figure: Inbox kiwicamping_map_new-zealand_clusters.png).
- Page 6 money-saving: research in `k-listicles2-whv-money.md` Part B; not drafted. Hero held in `.growth-lanes/research/k-listicles2-work/hold/`.
- Held hero/screen images for pages 3-6: `.growth-lanes/research/k-listicles2-work/hold/` (move into public/images/articles with each page).
- Research notes: Apple review RSS returned nothing for MetService/Gaspy/Z, so pages 3-4 report no review counts. Visitor licence duration (12 vs 18 months) unconfirmed: not stated on any page.

## Blockers
- None.

## Heroes (files written to public/images/articles; credit rows go in with each page commit)
- wikicamps-alternatives: Cameron Flat Campground at dawn.jpg | Karitxa | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Cameron_Flat_Campground_at_dawn.jpg (candidates seen: Lake Poaka vans (logos), Tupungato West Coast RV (Apollo logo), Double Hut campsite, Lake Clearwater settlement, Lake Hawea campsite, Siberia campsite)
- best-campervan-apps-new-zealand: Fiat Ducato, New Zealand, September 2016.jpg | dorfor | CC0 | https://commons.wikimedia.org/wiki/File:Fiat_Ducato,_New_Zealand,_September_2016.jpg (number plate and badge blurred; candidates: NZ Camper Vans (logos), Tupungato RV (logo), Cameron Flats first light (logo), several roads)
- best-weather-apps-new-zealand: Clouds over Mt Cook. NZ (8364206704).jpg | Bernard Spragg. NZ | CC0 | https://commons.wikimedia.org/wiki/File:Clouds_over_Mt_Cook._NZ_(8364206704).jpg (candidates: two lenticular Mt Cook shots (watermarked), Milford Sound in the rain x2, Mueller Hut x2, trampers)
- fuel-price-apps-new-zealand: State Highway 6 NZ 01.jpg | Krzysztof Golik | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:State_Highway_6_NZ_01.jpg (candidates: 6 NZ petrol stations, all with brand logos; Lindis Pass x2 (too close to an existing hero); SH6 Haast x2)
- working-holiday-apps-new-zealand: Autumn in the Awatere Valley.jpg | Phillip Capper | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Autumn_in_the_Awatere_Valley.jpg (cropped above numbered posts; candidates: kiwifruit orchards x2, Napier apple orchards x2, Gibbston and Rippon vineyards, kiwifruit harvest)
- money-saving-travel-apps-new-zealand: Moke Lake.jpg | André Richard Chalmers | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Moke_Lake.jpg (DOC campsite lake; candidates: 4 farmers markets, Lake Mahinapua picnic table, Matata DOC campsite)

## Screen figures chosen
- wikicamps-alternatives: Inbox kiwicamping_place-detail_black-rock-campsite_fees-facilities.png (rendered)
- best-campervan-apps-new-zealand: Inbox kiwicamping_guides_west-coast-road-trip_top.png (rendered; avoids dump-station data, which came from WikiCamps)
