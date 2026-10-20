# ava-nordic-gap progress (de, da, sv, nb gaps on AussieCamps, then KiwiCamping)

Lane: ava-nordic-gap (Ava account). Branches `i18n/a-nordic-gap` (aussiecamps-web) and `i18n/k-nordic-gap` (kiwicamping-web).
Worktrees `~/.t3/worktrees/aussiecamps-web/ava-nordic-gap` and `~/.t3/worktrees/kiwicamping-web/ava-nordic-gap`.
Working files (not in git): `/tmp/ava-ng` (BRIEF.md, REVIEW.md, mkbatch.py, qa.py, ap.sh, gaps.py; per-site dirs a/ and k/ with batches, out, rev).
Gap finder: `python3 /tmp/ava-ng/gaps.py <worktree> <out.json>` (structural comparison with en.json, same rules as `isArticleComplete`).
Packets: `translation-engine packet --config docs/translation.config.json --locale <code> --output <new path>` (it fails if the output file exists).

## Gaps (2026-10-21, after rebasing on origin/main c866810 / 018c804)
- Other lanes (kai-*-a, kai-*-k) had already merged the road-trip, how-to and app guides in all four locales to both repos' main by the time this lane started drafting. Duplicate drafts for nb road trips and how-to guides were dropped (kept in branch `backup/a-nordic-gap-pre-rebase`, not for merge).
- What was really left: the scheduled listicles. AussieCamps: five per locale (best-caravan-rv-apps, best-apps-working-holiday, best-weather-apps-camping, best-money-saving-travel-apps, hipcamp-alternatives) in de, da, sv, nb. KiwiCamping: six per locale (wikicamps-alternatives, best-campervan-apps, best-weather-apps, fuel-price-apps, working-holiday-apps, money-saving-travel-apps) in de, da, sv, nb, plus one unit of doc-campsite-rules in de.
- Search Console: no impressions for any of these guides.

## Done
- AussieCamps COMPLETE: the five listicles in de, sv, da, nb applied, native-reviewed (opus), stamped. All four locales are 80/80 guides.

## Done (KiwiCamping, branch i18n/k-nordic-gap)
- sv ea3b23e, da 8c22365, de f257194, nb fbb59d8: the six listicles each (de also one doc-campsite-rules unit), native-reviewed (opus), stamped. de, da, sv, nb are each 89/89 guides on KiwiCamping.

## Next
- Nothing left in this lane: no gap in de, da, sv or nb on either site (checked with gaps.py against origin/main). Waiting for the orchestrator to merge `i18n/k-nordic-gap`.

## Blockers / notes
- none
