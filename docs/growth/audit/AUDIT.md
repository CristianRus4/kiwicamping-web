# campingapp.nz (KiwiCamping) content audit, 19 Oct 2026

Scope: 86 English URLs scored (scorecards in this folder). GSC: last 3 months, 1,320 clicks, 85.1k impressions, CTR 1.6%, average position 11.9. Clicks are rising (Sep 2026: 586, the best month so far). Average weighted score is 50.9/100 (range 33.0 to 68.4); only 7 pages score 60 or more. 32 of 86 URLs had no English impressions, and 83 carried at least one auditor accuracy flag before adjudication.

## What wins and what fails

| Content type | URLs | Impr (EN, 3m) | Clicks | CTR | Verdict |
|---|---|---|---|---|---|
| Home (app + map) | 1 | 14,583 | 442 | 3.0% | **Wins.** The map cluster has the best CTR on the site: 1,134 impr, 84 clicks (7.4%), pos 8.8 |
| App guides (best-apps + 6 feature guides) | 7 | 5,206 | 135 | 2.6% | **Wins, but only through best-nz-camping-apps.** The other 6 feature guides have 0 impressions |
| Rules & safety | 26 | 13,614 | 139 | 1.0% | **Underperforms.** Ranks pos 6-9 but CTR is less than half the expected rate, so the problem is titles. 8 URLs have 0 impr |
| Costs | 12 | 9,526 | 107 | 1.1% | **Underperforms**, same title problem: grocery 0.6% CTR at pos 5.8, fuel 0% at pos 6.7 |
| Camping guides (DOC, parks, seasons) | 13 | 22,865 | 138 | 0.6% | **Fails on CTR.** The DOC hub has 12,621 impr at 0.2% because DOC booking queries are navigational (4,505 impr, 5 clicks) |
| Road trips | 18 | 1,789 | 21 | 1.2% | **Fails.** 7 URLs have 0 impr and itinerary queries sit at pos 40-77. All locales: 40 clicks across 183 URLs |
| Tools | 1 | 1,554 | 4 | 0.3% | **Fails on title.** Queries ask for a fuel or distance calculator |

Head terms ("camping new zealand", "nz campsites") bring 4,599 impr at pos 38.5 and only 10 clicks, and no page owns them. Free camping queries get 829 impr at pos 48.7.

## Top 15 actions (full list in summary.csv)

1. **Self-contained cluster, P0.** Resolve the blue-warrant validity and the fixed-toilet start date (2023 vs 2025) on self-contained-vehicles-nz, freedom-camping-rules-nz, free-camping-nz-legal and where-to-camp (8.6k impr combined). These are auditor flags not yet checked against official sources; check MBIE/NZTA first. Then 301 free-camping-nz-legal into freedom-camping-rules.
2. **Overseas driver licence, P0, urgent.** The page contradicts itself on 18 vs 12 months. The 12-month rule starts 1 Nov 2026, in 13 days.
3. **left-side-driving, P0.** Rewrite section 07 on the 2012 give-way changes (confirmed error). Fix every locale.
4. **alcohol-fatigue-driving, raised from MERGE/P3 to FIX-FACTS/P0.** Fix the breath-test refusal statement and remove the fatigue statistics (both confirmed errors), then merge.
5. **Home, P0.** Replace "Street View" with Apple Look Around and trim the meta to 155 characters. Leave the title alone: 3.0% CTR at pos 16.
6. **DOC hub (doc-campsites-huts-guide), P0.** Fix the hut count and remove "Scenic" (DOC has no Scenic tier, cross-checked). Open with a prominent DOC booking link, then retitle.
7. **best-nz-camping-apps, P0.** Correct the free-tier vs Pass boundary and date the competitor claims, then retitle (5.2k impr, 2.6% CTR).
8. **camping-costs-nz, P1.** Retitle (the 73-character title truncates; 5.3k impr, 1.7% CTR at pos 6.5) and drop "Scenic" from the FAQ.
9. **campfire-rules-nz, P1.** Accuracy cleared. Retitle around "current fire bans" (4.2k impr, 0.9% CTR at pos 7.2) and use a fire-specific CTA.
10. **nz-camping-seasons-weather-sandflies, P1.** Retitle to "Sandfly season NZ" (3.2k impr, pos 6.0, 1.5% CTR). Retarget the sandflies guide so it stops competing.
11. **new-zealand-grocery-prices-2026, P0.** Change Countdown to Woolworths NZ and refresh the June data from Stats NZ, then retitle (1.8k impr, 0.6% CTR).
12. **towing-caravan-new-zealand, P0.** The licence-weight FAQ (4,500 vs 6,000 kg) is in the FAQ schema. Fix it, along with the "90 km/h whatever the sign says" line.
13. **new-zealand-road-trip-fuel-cost-2026, P0.** Replace the stale 26 July benchmark with a dated monthly MBIE series and retitle (437 impr, 0 clicks).
14. **/tools, P1.** Retitle to "NZ fuel and distance calculator" (1.5k impr, 0.3% CTR) and refresh the FX date.
15. **Consolidation.** Merge doc-hut-rules into doc-huts-new-zealand-guide, bus-ferry-train into public-transport-costs, and two-week-camper-itinerary into south-island-two-week. Rewrite where-to-camp as the head-term hub after item 1.

## Confirmed factual errors (official-source adjudicated)

| Page | Error | Correct statement / source |
|---|---|---|
| alcohol-fatigue-driving | Refusing a breath screening test "is an offence in its own right", worse than failing | Refusing the screening test is not an offence in itself. It leads to an evidential breath or blood test, and refusing the blood test carries the serious drink-driving penalty (LTA 1998 ss 56, 59, 60, 68, 69) |
| alcohol-fatigue-driving | Fatigue is "a substantial share" of visitor crashes; the first 48 hours are the highest risk | Contradicted by MoT "Overseas Drivers in Crashes" (2016). Remove the statistics |
| left-side-driving | "Turning gives way to straight-through" is presented as the post-2012 rule | That rule is long-standing. The 25 Mar 2012 changes were right-turner gives way to oncoming left-turner, and top-of-the-T (NZTA) |
| campervan-road-rules | "Rimutaka Hill"; Desert Road closes to high-sided vehicles | Remutaka Hill (SH2) closes in severe wind. Desert Road gets cautions only (NZTA bulletins) |
| camping-costs-nz | FAQ says the guide prices a "Scenic" tier | DOC has no Scenic tier: Basic, Standard, Serviced, Backcountry, Great Walk. Drop "Scenic" |
| doc-campsite-rules | "A few" campsites allow dogs | About a quarter do (74 of 287 in app data); never in national parks (DOC) |
| doc-hut-rules-etiquette | Heading "Nobody is turned away" | True only at non-bookable huts. Bookable and Great Walk huts can turn you away (DOC) |

Rejected after checking, so the pages are correct: campfire gas-stove rules (FENZ), DOC serviced powered vs unpowered fees, the biosecurity "instant fine" (MPI NZ$400), DOC quiet hours, checkout and cancellation terms, Class 1 licence, the 3,500 kg speed threshold, and child restraints. Campfire and biosecurity now have no accuracy flags.

**Not yet adjudicated.** The verdict input was cut off after the biosecurity page. Flags on the other rules and legal pages are still unverified auditor findings: self-contained, freedom/free camping, where-to-camp, towing, overseas-licence, speed-limits, volcanic, WoF, winter driving and others. Their summary.csv rows say "not adjudicated".

## Cannibalisation pairs

- / vs best-nz-camping-apps: "camping app nz" queries. Home owns the app and brand terms; best-apps owns "best" and comparison terms.
- doc-campsites-huts-guide vs doc-campsite-rules vs doc-huts-new-zealand-guide vs doc-hut-rules-etiquette.
- freedom-camping-rules-nz vs free-camping-nz-legal vs camping-rules-local-councils, with self-contained-vehicles-nz overlapping.
- nz-camping-seasons-weather-sandflies vs sandflies-new-zealand-camping: same primary query.
- two-week-camper-itinerary-nz vs south-island-two-week vs north-island-two-week vs three-week route.
- public-transport-costs-2026 vs bus-ferry-train-costs, with cook-strait-ferry overlapping on ferry queries.
- new-zealand-travel-cost-2026 vs campervan-budget vs camping-costs vs accommodation-costs.
- beer-wine-coffee-prices vs eating-out-prices.
- campervan-road-rules vs overseas-driver-licence on car-licence queries; left-side-driving and alcohol-fatigue also overlap.
- speed-limits vs towing-caravan on towing speed.
- /tools vs new-zealand-driving-day-planner vs plan-trip-kiwicamping on distance calculator queries.
- where-to-camp vs home vs top-scenic-campsites on head terms.

## New-page opportunities (clusters with no good owner; see keyword-map.csv)

- **Per-place campsite pages** built from app data. Place-name queries such as Twenty Five Mile Stream and Duddings Lake rank at pos 30-50 with no page; this is the biggest long-tail lever.
- **Campervan hire and running costs 2026**: 123 impr, pos 37, mostly nl. Repurpose campervan-budget for this instead of merging it.
- **Car licence for a campervan or motorhome**: 69 impr, pos 67. Add an answer block on campervan-road-rules.
- **"New self-containment rules"**: 151 impr, pos 48.8. Add a dated section on self-contained-vehicles-nz once the facts are settled.
- **Head-term hub "camping in New Zealand"**: 4.6k impr, pos 38.5. where-to-camp needs a rewrite to own it.
- Smaller gaps: holiday park memberships (60 impr, pos 25), best/scenic campsites (136 impr, pos 51), and a Spanish road-trip hub (25 impr, pos 90).
- Not winnable: DOC booking navigational queries (4.5k impr) and "Kiwi Camp", a different business (~470 impr).
