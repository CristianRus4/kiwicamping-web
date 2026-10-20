# Screenshot figures in the listicles

Each listicle and comparison guide shows one image of KiwiCamping inside the section about the app.
The image is a pre-rendered 1600x900 WebP: the brand gradient (`#142719 -> #507a49`) with a centred
iPhone screenshot and its own soft shadow. AussieCamps has the same feature, names and design
(`#1e2b18 -> #6f873c`); see docs/PARITY.md.

## Where the figures are

Section is the zero-based index into the guide's `sections`, always the entry about KiwiCamping.
Source screenshots are in `~/Marketing/Camping/Media/App-kit/KiwiCamping/`.

| Slug | Section | Source screenshot | English alt |
|---|---|---|---|
| rankers-alternatives | 2 | kiwicamping_collections_want-to-visit.png | KiwiCamping on iPhone: a Want to Visit collection of saved places |
| campermate-alternatives | 2 | kiwicamping_filter-facilities_queenstown.png | KiwiCamping on iPhone: combining filters for toilets, showers and drinking water |
| free-camping-apps-new-zealand | 5 | kiwicamping_filter-free_south-island.png | KiwiCamping on iPhone: the cost filter set to show free places |
| road-trip-planner-apps-new-zealand | 1 | kiwicamping_trip-planner_south-island-loop.png | KiwiCamping on iPhone: a South Island trip itinerary with the distance and drive time between stops |
| best-travel-apps-new-zealand | 1 | kiwicamping_map-pins_mackenzie.png | KiwiCamping on iPhone: places on the map with the Explore list below |
| best-nz-camping-apps | 1 | kiwicamping_weather_tongariro.png | KiwiCamping on iPhone: a place page with the local weather forecast and useful places nearby |

`best-nz-camping-apps` is the legacy page `/best-nz-camping-apps.html`; the figure renders there too.
The others are scheduled guides and show their figure from their publish date.

## How it works

- `lib/screen-figures.ts` lists `{ slug, section, src, alt }` and `applyScreenFigures()` attaches each
  one to its section where `allArticles` is built (`lib/site.ts`). The article literals are untouched.
  It throws at module load for an unknown slug, an out-of-range section or an image missing from
  `lib/image-manifest.json`.
- `components/guide-article.tsx` (English, legacy pages included) and `components/localized-site.tsx`
  (locale pages) render `GuideFigure` from `components/site-image.tsx` after the section's prose and
  before its tips: `<figure class="guide-figure">` with an `<img>` carrying the manifest's width,
  height and srcset, lazy loading and async decoding. No caption, no link.
- Figures are not translated text, so nothing enters `lib/translations/en.json` or the completeness
  check. A translated page keeps the figure and uses that locale's section heading as the alt.
- `tests/rendered-html.test.mjs` checks each figure sits in the KiwiCamping section and that every
  published figure guide exports the figure in English and in every live locale.

## Adding one

1. Pick the app screenshot (a full-size iPhone PNG) and the guide's KiwiCamping section.
2. Render it: `scripts/make-screen-figure.sh <screenshot.png> public/images/screens/<slug>.webp '#142719' '#507a49'`
   (needs zsh and ImageMagick 7; it writes `<slug>.webp` and `<slug>-800.webp`).
3. Run `npm run images:manifest`.
4. Add a row to `lib/screen-figures.ts` and to the table above.
5. Run `npm run check`.
