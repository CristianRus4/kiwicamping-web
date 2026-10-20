# Scheduler lane (CNTXT-892): drip publishing

## Done (KiwiCamping, `growth/k-scheduler`; same design as `growth/a-scheduler`)
- `lib/publish.ts` (identical to AussieCamps): `buildDate()`, `isPublished()`; `publishAt` on `Article` (lib/article-model.ts); `articles` is published only, `allArticles` feeds en.json, link selection and audits. Legacy `.html` guides cannot carry publishAt.
- Links to a scheduled guide render as plain text; its credit row waits; its dates are publishAt unless git is later.
- Pages workflow: daily `15 18 * * *` build, `BUILD_DATE` pinned per job.
- `tests/publish-schedule.test.mjs`: two exports (`PAGES_DIST`), both pass `seo:audit`.
- `docs/growth/publish-schedule.md`, PARITY rows.

## Next
- Nothing. Hand off to the orchestrator.

## Blockers
- None.
