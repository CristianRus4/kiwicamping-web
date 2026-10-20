# ava-k-content-3 progress (Ava)

Lane: rescue the unmerged WIP on `growth/k-content-2` (566fe1f, 8c70bec, 19bb185, 18b0b8f) and `growth/k-tools-hubs-2` (fa0a6ae, 063131a). Branch `growth/k-content-3`, worktree `~/.t3/worktrees/kiwicamping-web/ava-k-content-3`. Decisions per change go in `docs/growth/k-content-2-rescue.md`.

## Triage (done)
Main (9d0f03b) already carries almost everything, in newer fact-checked form. Still missing and wanted:
1. **ContextCta** (8c70bec): in-article App Store CTAs per page type (PLAN.md "Conversion"). Port to main's GuideArticle, English only. Fixes needed vs the WIP: no "one-week or one-year, no subscription" claim (the app now sells a weekly subscription and lifetime, see the app's Kiwi/StoreKit.storekit); no stale bookable-hut counts; inline CTA must not use `<aside>` or `<p>` (the protected similarity audit and rendered-html tests cut the body at `</div><aside` and treat repeated `<p>` as duplicate prose); end CTA keeps the exact `<div class="article-end-cta">` wrapper; road trips keep "Save the stops. Plan the whole trip." (protected test).
2. **guideTitle** (18b0b8f): drop the " | KiwiCamping" suffix when a guide title would pass 60 characters (63 of 78 guide titles do).
3. **doc-campsite-rules + FAQ** (19bb185): Campsite Pass holders without a booking pay a $10 fee and can be turned away (DOC Campsite Pass page). Main implies they pay the full penalty rate. Translated in 9 live locales: re-translate.
4. **doc-campsites-new-zealand-guide sources** (19bb185): Kepler, Routeburn and Tongariro Northern Circuit season pages and the Hut Pass exclusions list. The page states those season start dates with no source (verified 20 Oct 2026: TNC 23 Oct, Kepler 27 Oct, Routeburn 1 Nov). Translated: re-translate the 4 labels.
5. **Lakes on hub maps** (063131a): main's outline has the coastline only.

## Done
- Triage, this file. Rescue decisions: docs/growth/k-content-2-rescue.md.
- 4faf9c2 English: doc-campsite-rules + FAQ ($10 Campsite Pass rule), DOC bookings guide sources (+ changelog).
- 8a416a5 ContextCta. f4d69e1 guideTitle. 3c665aa lakes on hub maps (Natural Earth lakes in /tmp/ne, script args changed).
- da1f548 translations (sonnet draft, opus review, negation check) in 9 live locales; stamped only these units in fr, pt, da, nb, sv (de, es, it, nl have no meta file on main; the stamp script would have created full files, so it was not run there). Working files /tmp/k3.
- content:check passes. First full check failed similarity: the audit regex `<p[^>]*>` matched the inline button's SVG `<path>`; the inline CTA button now has no icon.

## Next
- Handed off. npm run check passed on the final commit (946 pages exported, 504 indexable, 42/42 tests, similarity and assets pass). Lane complete.

## Blockers
- None.
