# K-tools-hubs progress

Thread: K-tools-hubs (Ava). Branch: `growth/k-tools-hubs`. Worktree: `~/.t3/worktrees/kiwicamping-web/growth-k-tools-hubs`.

## Status
- M1 App data export: done, handed off (export script, lib/data/*.json, lib/hubs.ts gate, scripts/audit-hubs.mjs in content:check, credits Data sources)
- M2 Tools split: done, handed off. Five pages at /tools/<slug>/ (English + every locale, locale noindex until `tools` strings translated), `tools` namespace in lib/source-strings.ts, lib/tools.ts, lib/routes/tools.ts. Not exported or linked until the route manifest lands (`TOOL_PAGES_EXPORTED = false`).
- M3 Data hubs: done, handed off. 52 hubs built (17 camping, 17 huts, 18 freedom-camping), 30 indexable (11 camping, 13 huts, 6 freedom-camping), 22 noindex, 20 not built. Pages: app/camping, app/huts, app/freedom-camping (+ index pages); components/hub-page.tsx, hub-map.tsx; lib/routes/hubs.ts (HUB_PAGES_EXPORTED = false). Prose: lib/hub-prose/{camping,huts,freedom-camping}.ts. Coastline: lib/data/nz-outline.json (Natural Earth, scripts/build-nz-outline.mjs).

## Decisions
- **Source licences** (`scripts/export-app-data.mjs`, fails closed):
  - DOC campsites, huts, tracks, freedom-camping notices (`freedom.json`, `freedomgeo.geojson`): `cc-by-4.0`, "Source: Department of Conservation" (wording from doc.govt.nz/footer-links/copyright/).
  - `dumps.json`, `dayusenorth.json`, `dayusesouth.json`: every record links to wikicamps.co.nz, so these are scraped from WikiCamps NZ, a competing commercial directory. Classed `exclude`: no record is republished. Only inventory counts (a fact about the app) reach product-facts.json. The `/dump-stations/<region>/` hubs are therefore not built. Flip `wikicamps` to `facts-only` in the allowlist if the owner decides otherwise.
  - `bookit.json`, `bookit_full.csv`: partner feed, `exclude`, never opened.
- **freedom.json**: 354 records = 266 prohibited, 85 restricted, 3 permitted, but 67 of them have `status: historic`. Hubs list current notices only (287).
- **Possible app bug (read-only, report only)**: `freedom.json` rows carry no latitude/longitude, and `KiwiPlacesRepository.makeRecord` drops rows without a coordinate, so the notices may not appear in the app at all. CTAs must not promise them until confirmed on a device.
- `/camping/<region>/` lists DOC campsites; the region's hut count is a fact row linking to `/huts/<region>/`, so the two hub types never overlap.

- Freedom notices: `city`/`address`/`contact_phone` are the issuing DOC office, not the place, so hubs use the DOC district as locality.
- All 3 "permitted" notices are historic; current data has 224 prohibited and 63 restricted.
- NaPALIS ids are land parcels and repeat (354 notices, 200 ids); notices join to `freedomgeo.geojson` by OBJECTID.

- Tool pages: the framework renders each inline script twice, so the tool script binds once per tool (`data-bound`); `tool_used` fires once per tool per page view.
- The old /tools/ defaults showed stale outputs (drive "4 h 32 min", tank grey "4.5", currency "US$58.72"); they are now computed from the same defaults the script uses.

- Camping fact "Reached only on foot or by boat" now counts only campsites that list foot/boat access; blank access is its own row ("Access not listed by DOC").
- Freedom pages never say the notices are in the app (unconfirmed, see the app bug above).
- Council links for freedom hubs were matched by reverse-geocoding each notice point (OpenStreetMap). Central Otago DOC district notices all sit in Queenstown Lakes District (Wānaka). QLDC, Taupō and Ruapehu pages block plain curl (bot check), so a curl link checker will misreport them.

## Waiting on foundation M2
- Register `toolRoutes` (lib/routes/tools.ts) and `hubRoutes` (lib/routes/hubs.ts) in lib/routes.ts, set `TOOL_PAGES_EXPORTED` and `HUB_PAGES_EXPORTED` to true, link locale /<locale>/tools/ to the tool pages, and add indexable hubs to the sitemap via the manifest.

- DOC's campsite-categories page now 404s; links use /parks-and-recreation/places-to-stay/stay-at-a-campsite/ (also fixes the campsite tool's source link).

## Next
- Wire routes when foundation M2 lands. Then: links into hubs from guides (ask K-content), llms.txt entry for hubs.

## Blockers
- None.
