# kai-sv-k progress (Kai account)

Lane: raise Swedish (sv) coverage on KiwiCamping. Branch `i18n/k-sv-2`, worktree `~/.t3/worktrees/kiwicamping-web/kai-sv-k`. Touches only `lib/translations/sv.json`, `lib/translations/meta/sv.json` and this file.

## Plan
62 guides remain (7 listicles skipped: rankers-alternatives, campermate-alternatives, free-camping-apps-new-zealand, road-trip-planner-apps-new-zealand, best-travel-apps-new-zealand, wikicamps-alternatives, best-campervan-apps-new-zealand). Order: Search Console impressions (docs/growth/gsc/2026-10-19/pages-3m.tsv, no Swedish rows exist), then rules and safety, costs, app guides, camping guides, trip planning, road trips.

Batches (about five guides each):
1. self-contained-campervan-green-warrant, freedom-camping-rules-new-zealand, camping-wastewater-rubbish-new-zealand, freedom-camping-new-zealand-guide, holiday-parks-new-zealand-guide
2. east-cape-road-trip, scenic-campsites-new-zealand, eating-out-new-zealand-prices-2026, new-zealand-road-signs-visitors, domestic-flight-costs-new-zealand-2026
3. wof-registration-campervan-new-zealand, accommodation-costs-new-zealand-2026, volcanic-safety-new-zealand-travel, northland-cape-reinga-camping-route, new-zealand-camping-packing-list
4+. the rest in impressions order, then zero-impression rules and safety, app guides, camping guides, trip planning, road trips.

## Done
(nothing applied yet)

## Next
Batch 1 drafting.

## Blockers
none

## Working method (to resume)
Scratch in `/tmp/sv-k2/` (not in repo): `k/full.json` = `translation-engine packet --config docs/translation.config.json --locale sv --catalog kiwicamping-website-sv --no-usage` (applied units drop out), `k/src/<slug>.json` per guide, `k/out/<slug>.json` values, `scripts/` (lint.py, neg.py, neg2.py, gloss.py, links.py, mkinput.py, gate.mts), `BRIEF.md` subagent brief, `k/ref-approved.txt` approved examples. If /tmp is lost, regenerate the packet and split by slug (units grouped by `articles.<slug>`).
