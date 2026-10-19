# K-tools-hubs progress

Thread: K-tools-hubs (Ava). Branch: `growth/k-tools-hubs`. Worktree: `~/.t3/worktrees/kiwicamping-web/growth-k-tools-hubs`.

## Status
- M1 App data export: done, handed off (export script, lib/data/*.json, lib/hubs.ts gate, scripts/audit-hubs.mjs in content:check, credits Data sources)
- M2 Tools split: not started
- M3 Data hubs: not started

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

## Next
- M2: tools split.

## Blockers
- None.
