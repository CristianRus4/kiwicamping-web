# K-content progress (Ava)

Branch `growth/k-content`. Owner of `docs/growth/changelog.csv` in this repo.

## Done
- Batch 0 (in progress): blue-warrant fix in every English occurrence (legacy-migrated.ts freedom-camping-rules + free-camping-nz-legal, legacy.ts where-to-camp, faqs.ts) and full 2026 rewrite of /self-contained-vehicles-nz.html. Facts verified on PGDB (private owners page, rental page, June 2026 media release), DOC freedom camping page, Freedom Camping Act Schedule 1AA, SR 2023/136 Schedule 2, SR 2023/217, PGD Act s87V.

## Next
- Fact-check verdict for batch 0, fix, commit, hand off.
- Batch 1: DOC booking page rewrite + retitle doc-huts and doc-campsite-rules.

## Notes and constraints found
- Translated guides (43 slugs in every locale file) must keep identical structure (section/paragraph/tip/FAQ/source/priceTable row counts) or content:check fails, and locale JSON is off limits. Legacy (.html) pages are not translated, so they can be restructured.
- Counts taken from the app JSON (read-only) until lib/data/product-facts.json lands on main; reconcile then.
- No locale JSON carries the "2027" blue-warrant claim (checked).
