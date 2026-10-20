# ava-tools-i18n-k progress

Lane: translate the KiwiCamping `tools` namespace (152 units: shared, index, fuel, drive, campsite, currency, water) into
de, es, fr, it, nl, pt, nb, sv (da already done). Branch `i18n/k-tools`. Never pushed; the orchestrator merges.
Working files: `/tmp/ktools` (BRIEF.md, en.json, out/<code>.json drafts, check.py structure and placeholder check,
neg.py English/target pairs for the negation check, merge.py). Recreate from en.json `tools` if /tmp is gone.

Process per language: Sonnet drafts (high) -> Opus native review (medium) -> check.py + neg.py -> merge.py into
lib/translations/<code>.json -> `npm run translations:stamp -- --locale <code>` -> `npm run content:check`.

## Done
(none yet)

## Next
de, es (first handoff), fr, it (second), nl, pt, nb, sv.

## Blockers
none
