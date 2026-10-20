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

## Next
- Batches 3, 4, 5 drafted/in flight (see /tmp/da-k2/out).
- Queue for later batches: /tmp/da-k2/queue.json (b3 holiday-parks, scenic-campsites, sandflies, volcanic-safety, coromandel-rotorua; b4 dogs, domestic-flights, northland, packing-list, responsible-camping; then b5..b13).

## Blockers / questions
(none)

## English source issues found (Danish follows the English)
- campfire-rules: body says a prohibited fire season can restrict some appliances such as gas cookers; FAQ says a gas stove is unaffected by fire seasons.
- doc-campsites: "most campsites outside serviced huts" (Backcountry Hut Pass) and "the Milford and Paparoa tracks have none" are ambiguous.
- sandflies / best-time: sandfly guide title says "Sandfly Season"/worst on West Coast and Fiordland but best-time says no official season.
- best-nz-camping-apps: bare "$" amounts where the table uses NZ$.
- where-to-camp: body says four land types, faq[0] says "Broadly five"; freedom-camping guide: "two to four nights" vs tip "1-2 night limits"; camping-wastewater-rubbish sections[2].body[1] says "Premium pass" where other guides say KiwiCamping Pass.
