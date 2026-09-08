# KiwiCamping website documentation

This directory is the operating knowledge base for `campingapp.nz`. Existing
briefs, source records, localization guidance, and asset manifests remain
authoritative in their domains; the new documents connect them into one
technical and release model.

## Start here

| Work | Read |
| --- | --- |
| Product, routes, rendering, content system, or deployment architecture | [Site blueprint](SITE_BLUEPRINT.md) |
| Claims, editorial changes, releases, or incident handling | [Marketing and operations](MARKETING_AND_OPERATIONS.md) |
| Public product facts, tone, and page requirements | [Website brief](WEBSITE-BRIEF.md) |
| Translation behavior | [Localization](LOCALIZATION.md) and [translation workflow](TRANSLATIONS.md) |
| Images and licensing | [Asset manifest](ASSET-MANIFEST.md) and [image sources](IMAGE-SOURCES.md) |
| Editorial evidence | [Research sources](RESEARCH-SOURCES.md) |
| App and shared Camping architecture | [Camping documentation](../../../Apps/Camping/docs/README.md) |

## Identity

- Product: **KiwiCamping**
- Canonical domain: `https://campingapp.nz`
- App Store ID: `6746952595`
- Source language: New Zealand English
- Hosting: static export on GitHub Pages
- App source: `Apps/Camping/Kiwi` with shared code in `Apps/Camping/Packages`

## Ownership contract

The app repository is authoritative for shipped product behavior and bundled
place data. This repository is authoritative for public pages, article content,
translations, source records, metadata, and web deployment. Official agencies
and current on-the-ground notices outrank both for road, weather, conservation,
fire, freedom-camping, and safety conditions.

All Markdown under `docs/` is included by the Nexus manifest and syncs after a
commit is pushed to main.
