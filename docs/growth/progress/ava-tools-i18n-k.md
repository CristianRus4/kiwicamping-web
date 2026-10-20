# ava-tools-i18n-k progress

Lane: translate the KiwiCamping `tools` namespace (152 units: shared, index, fuel, drive, campsite, currency, water) into
de, es, fr, it, nl, pt, nb, sv (da already done). Branch `i18n/k-tools`. Never pushed; the orchestrator merges.
Working files: `/tmp/ktools` (BRIEF.md, en.json, out/<code>.json drafts, check.py structure and placeholder check,
neg.py English/target pairs for the negation check, merge.py). Recreate from en.json `tools` if /tmp is gone.

Process per language: Sonnet drafts (high) -> Opus native review (medium) -> check.py + neg.py -> merge.py into
lib/translations/<code>.json -> `npm run translations:stamp -- --locale <code>` -> `npm run content:check`.

## Done
- All 8 languages: es (56386d7), de (84aa479), fr (e8bcfe2), nl (43ffd29), it (1e9b040), nb (51da972), sv (1cf09df), pt (43fc2c9). 152 tools units each; Sonnet draft, Opus native review, negation and parenthesis check against the English, stamped. Final `npm run check` passed; /<locale>/tools/ and the five calculator pages export indexable for every language.

## Next
Nothing; lane complete.

## Blockers
none

## Notes for the orchestrator
- Stamping es and de wrote first-time stamp files covering the whole file (meta/es.json, meta/de.json), not just tools. Other lanes touching those locales will conflict on meta/<code>.json; re-run `translations:stamp` after merging.
- Style guides ask for first-use glosses (DOC, MBIE, NZTA, RUC); not added, because the orchestrator rule forbids added glosses.
- With de-DE, `formatMoney` in lib/tools.ts renders `2,96 NZ$` where the de style guide wants `2,96 NZD`; decide whether to force `currencyDisplay: "code"`.
- fr has 3 stale strings that were already there before this lane.
