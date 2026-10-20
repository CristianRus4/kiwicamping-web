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
- Triage, this file.

## Next
- ContextCta, guideTitle, content fixes + translations, lakes, rescue doc, changelog, npm run check, handoff.

## Blockers
- None.
