# ava-i18n-k-list-1 progress

Lane: Ava account, branch `i18n/k-list-1`. Task: translate the five scheduled KiwiCamping listicles
(rankers-alternatives, campermate-alternatives, free-camping-apps-new-zealand, road-trip-planner-apps-new-zealand,
best-travel-apps-new-zealand) into de, nl, da, nb, sv, one language at a time, all pages per language.

## Working method (to resume)
- Scratch in `/tmp/kl1` (recreate if lost): `scripts/mksrc.py <code> <catalog>` slices the engine packet into
  `<code>/<slug>.src.json` (key -> English) and `.extras.json`; drafters (sonnet, high) write `<code>/<slug>.val.json`;
  `scripts/qa.py <code> <slug> [neg]` checks keys, numbers, data-guide anchors, brand names, parentheses, dashes;
  reviewer (opus, medium) corrects; negation re-read against English; `scripts/apply.py <code>` dry-runs and applies via the engine,
  then `npm run translations:stamp -- --locale <code>` and `npm run content:check`.
- Catalogs: de, nl -> kiwicamping-website; da -> kiwicamping-website-da; nb -> kiwicamping-website-nb; sv -> kiwicamping-website-sv.

## Done
- de: all 5 pages (513 units), drafted (sonnet), reviewed (opus), negation re-read, applied, stamped (new `lib/translations/meta/de.json`, 2857 stamps, 0 stale). `content:check` passes, de guides 43 -> 48 of 83.

## Next
- nl (drafts and review in progress in /tmp/kl1/nl), then da, nb, sv.

## Blockers
- None.
