# K-content progress

Branch `growth/k-content`. Owner of `docs/growth/changelog.csv` in this repo (every change is logged there; it is the done-list).

## Done (committed, not yet handed off)
- Brief batches 0-3: blue-warrant fix everywhere + self-contained page rewrite; DOC booking page rewrite + doc-huts / doc-campsite-rules retitles; home meta + map-intent section + Look Around; best-nz-camping-apps rewrite with dated comparison table (new optional `comparison` field in lib/article-model.ts, rendered in components/guide-article.tsx; English-only pages).
- Audit P0 confirmed errors: overseas licence (12-month rule from 1 Nov 2026), left-side-driving give-way, alcohol-fatigue, towing licence weight, grocery Woolworths, camping-costs "Scenic", doc-campsite-rules dogs (74 of 287), doc-hut-rules "turned away", Remutaka Hill / Desert Road (campervan-road-rules, towing, wellington-wairarapa loop).
- Audit P0 (no research needed): offline-data guide, /support/ Pass boundary, North Island geothermal claim.
- Audit P1 retitles all done (tools, speed-limits, campervan-road-rules, public-transport, eating-out, travel-cost, wof, road-signs, volcanic, biosecurity, beer-wine-coffee, cook-strait, taranaki, river-crossing; script /tmp/kcontent-factcheck/retitle.py logs to the changelog). Also: camping-costs-nz, campfire-rules-nz, nz-camping-seasons-weather-sandflies, sandflies guide, holiday-parks (expanded, TOP 10 Club figures, BookIt-free CTA).

## Handoff 1 (20 Oct): all four fact-check batches applied (verdicts in docs/growth/factcheck/). npm run check: content, build, export, similarity, assets pass; 2 protected tests fail by design (see Blockers).

## Blockers (orchestrator)
- NEW after rebase on K-foundation M2 (6838b88): scripts/audit-content.mjs 'Translations changed a number or a brand' fails 487 strings across de/es/fr/it/nl/pt, because the English of already-translated guides changed numbers (doc-huts, fuel-cost, eating-out, travel-cost, beer-wine-coffee, grocery, public-transport, doc-campsite-rules, offline-data, weather-look-around) and 2 home UI strings dropped 'Apple'. Fixing it means touching locale JSON (i18n threads) or running translations:invalidate per locale. Content lane cannot resolve it. List: /tmp/kcontent-factcheck/numgate.txt.
- Separate urgent branch growth/k-content-licence (worktree ~/.t3/worktrees/kiwicamping-web/growth-k-content-licence, commit 24f4221 on 6838b88): overseas-licence guide + FAQ only; full npm run check passes (36 tests).
- tests/rendered-html.test.mjs 'the 15 legacy pages keep main's English body byte for byte' freezes legacy bodies against tests/fixtures/legacy-bodies/ (pre-push snapshot). The brief rewrites 10 of them on purpose: best-nz-camping-apps, campfire-rules-nz, camping-costs-nz, doc-campsites-huts-guide, free-camping-nz-legal, freedom-camping-rules-nz, holiday-parks-nz-booking-guide, nz-camping-seasons-weather-sandflies, self-contained-vehicles-nz, where-to-camp-in-new-zealand. Fixtures need regenerating by the foundation thread/orchestrator (tests/** is protected).
- Same file, 'renders dated New Zealand cost tables in ten currencies' hard-codes /Prices checked 12 August 2026/ for the grocery page; the table now carries Stats NZ September 2026 data.
- Helper: node /tmp/kcontent-factcheck/legacydiff.mjs "$PWD" lists changed legacy bodies after an export.

## In progress (history)
- Independent fact-check (never run by the previous session) of every changed rules/fee page. Page text exported to /tmp/kcontent-factcheck/<slug>.md by /tmp/kcontent-factcheck/export.ts (copy into repo root as .fc-export.ts, run `npx tsx ./.fc-export.ts <slugs>`, delete). Verdicts go to /tmp/kcontent-factcheck/verdict-<batch>.md. Batches A (self-contained/freedom) and B (DOC) DONE and fixed (commit 3b59721; verdicts copied to docs/growth/factcheck/). C (driving) DONE and fixed (d673c69). D relaunched on sonnet/high, awaiting verdict at /tmp/kcontent-factcheck/verdict-D.md. C driving (overseas licence, left-side, alcohol-fatigue, towing, campervan-road-rules, speed-limits), D commercial (best-nz-camping-apps, holiday parks, grocery, public-transport, eating-out, travel-cost, beer-wine-coffee, north-island geothermal lines).

## Batch 2 (after handoff 1)
- Done: fuel-cost page refreshed (MBIE wk ending 11 Oct 2026, monthly series; research in docs/growth/factcheck/k-content-E-fuel-research.md); dump-stations expanded (regional counts, $800 fine) + retitle; 13 P2 retitles (responsible camping, routes, costs, dogs, bus-ferry-train).
- Running: sonnet fact-check E (fuel, dump stations, dogs) -> /tmp/kcontent-factcheck/verdict-E.md.
- Not done on purpose: /tools fuel default ($2.96) and FX date: protected test hard-codes 'NZ$355.20'; needs foundation/orchestrator.

## Session 3 (20 Oct, background agent of the orchestrator)
- Rebased on origin/main f5e27aa (K-tools-hubs). Conflict in app/tools/page.tsx resolved to main (tools-hubs now owns the tools titles in lib/source-strings.ts; my old /tools retitle is superseded).
- Licence: verified against NZTA Factsheet 72 (July 2026) and the Amendment Rule 2024 Schedule 1AA Part 2 cl 2 (arrivals 1 Nov 2024 to 31 Oct 2026 keep 18 months). Page and FAQ consistent; no change. growth/k-content-licence rebased on origin/main: 6b10f69, content:check passes.
- Fact-check E done by this session (verdict docs/growth/factcheck/k-content-E-fuel-dump-dogs.md); one fix (MBIE week date 9 Oct).
- Hub links: optional `hubs` field + English-only "Browse by region" block in GuideArticle (indexable hubs only). Added to DOC, freedom-camping, where-to-camp and 17 regional road trips. Commit bec9669. In legacy files `hubs` must come after `legacyPath` (audit regex).
- content:check: only the known number-gate blocker fails (487 strings, unchanged).

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
