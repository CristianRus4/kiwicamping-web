# K-content progress

Branch `growth/k-content`. Owner of `docs/growth/changelog.csv` in this repo (every change is logged there; it is the done-list).

## Done (committed, not yet handed off)
- Brief batches 0-3: blue-warrant fix everywhere + self-contained page rewrite; DOC booking page rewrite + doc-huts / doc-campsite-rules retitles; home meta + map-intent section + Look Around; best-nz-camping-apps rewrite with dated comparison table (new optional `comparison` field in lib/article-model.ts, rendered in components/guide-article.tsx; English-only pages).
- Audit P0 confirmed errors: overseas licence (12-month rule from 1 Nov 2026), left-side-driving give-way, alcohol-fatigue, towing licence weight, grocery Woolworths, camping-costs "Scenic", doc-campsite-rules dogs (74 of 287), doc-hut-rules "turned away", Remutaka Hill / Desert Road (campervan-road-rules, towing, wellington-wairarapa loop).
- Audit P0 (no research needed): offline-data guide, /support/ Pass boundary, North Island geothermal claim.
- Audit P1 retitles all done (tools, speed-limits, campervan-road-rules, public-transport, eating-out, travel-cost, wof, road-signs, volcanic, biosecurity, beer-wine-coffee, cook-strait, taranaki, river-crossing; script /tmp/kcontent-factcheck/retitle.py logs to the changelog). Also: camping-costs-nz, campfire-rules-nz, nz-camping-seasons-weather-sandflies, sandflies guide, holiday-parks (expanded, TOP 10 Club figures, BookIt-free CTA).

## In progress
- Independent fact-check (never run by the previous session) of every changed rules/fee page. Page text exported to /tmp/kcontent-factcheck/<slug>.md by /tmp/kcontent-factcheck/export.ts (copy into repo root as .fc-export.ts, run `npx tsx ./.fc-export.ts <slugs>`, delete). Verdicts go to /tmp/kcontent-factcheck/verdict-<batch>.md. Batches A (self-contained/freedom) and B (DOC) DONE and fixed (commit 3b59721; verdicts copied to docs/growth/factcheck/). C (opus, legal/fines) running; D was stopped on the orchestrator's usage rule and must be relaunched with sonnet/high after C finishes. C driving (overseas licence, left-side, alcohol-fatigue, towing, campervan-road-rules, speed-limits), D commercial (best-nz-camping-apps, holiday parks, grocery, public-transport, eating-out, travel-cost, beer-wine-coffee, north-island geothermal lines).

## Next
1. Fix everything the fact-checks flag, commit, hand off (rebase, `npm run check`, report).
2. Audit P0 left: new-zealand-road-trip-fuel-cost-2026 (dated MBIE monthly series + retitle 'NZ Petrol Prices 2026 and Campervan Fuel Cost'; needs research subagent). /tools FX date refresh (audit item 14).
3. Then P2 rows of docs/growth/audit/summary.csv, then brief batches 4-8 (check keyword-map.csv before new pages).

## Subagent rules (orchestrator, 20 Oct, to save Kai's usage)
- Fact-check and research subagents: model sonnet, effort high, ONE at a time.
- Opus medium only when a Sonnet check is inconclusive or the claim is a fine, penalty or legal requirement.

## Notes and constraints found
- Translated guides (43 slugs in every locale file) must keep identical structure (section/paragraph/tip/FAQ/source/priceTable row counts) or content:check fails, and locale JSON is off limits. Legacy (.html) pages are not translated, so they can be restructured.
- Counts taken from the app JSON (read-only) until lib/data/product-facts.json lands on main; reconcile then.
- zsh: `echo =====` fails (equals expansion); ugrep is the default grep and chokes on `.{0,80}` with alternations, use /usr/bin/grep.
