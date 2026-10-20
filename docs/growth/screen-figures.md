# Screenshot figures in the app guides

Each listicle and comparison guide shows one image of KiwiCamping inside the section about the app: a
pre-rendered 1600x900 WebP with the brand gradient (`#142719 -> #507a49`) and a centred iPhone screenshot
with its own soft shadow. AussieCamps has the same feature with the same names, code and design
(docs/PARITY.md).

## Figures

Section is the zero-based index into the guide's `sections` (the page anchor is `#step-<section + 1>`),
followed by that section's heading. Source screenshots are in `~/Marketing/Camping/Media/App-kit/KiwiCamping/`.

| Slug | Section | Source screenshot | Alt |
|---|---|---|---|
| rankers-alternatives | 2 (1. KiwiCamping: best for turning saved places into a dated route) | kiwicamping_collections_want-to-visit.png | KiwiCamping on iPhone: a Want to Visit collection of saved places |
| campermate-alternatives | 2 (1. KiwiCamping: best for DOC campsites and planning the whole route) | kiwicamping_filter-facilities_queenstown.png | KiwiCamping on iPhone: combining filters for toilets and a water supply |
| free-camping-apps-new-zealand | 5 (4. KiwiCamping: best for free DOC campsites) | kiwicamping_filter-free_south-island.png | KiwiCamping on iPhone: the cost filter set to show free places |
| road-trip-planner-apps-new-zealand | 1 (1. KiwiCamping: best for planning a camping trip night by night) | kiwicamping_trip-planner_south-island-loop.png | KiwiCamping on iPhone: a South Island trip itinerary with the distance and drive time between stops |
| best-travel-apps-new-zealand | 1 (1. KiwiCamping: where to stay and how to string the trip together) | kiwicamping_map-pins_mackenzie.png | KiwiCamping on iPhone: places on the map with the Explore list below |
| best-nz-camping-apps | 1 (1. KiwiCamping: best for DOC campsites, huts and planning the route) | kiwicamping_weather_tongariro.png | KiwiCamping on iPhone: a place page with the local weather forecast and useful places nearby |

Every figure sits in the section whose heading names KiwiCamping; this site has no exception.
`best-nz-camping-apps` is the legacy page `/best-nz-camping-apps.html` and shows its figure there; the
others are scheduled and show their figure from their publish date.

## How it works

- `lib/screen-figures.ts` lists `screenFigures: readonly ScreenFigure[]` (`{ slug, section, src, alt }`).
  `applyScreenFigures(list, figures = screenFigures)` runs where `allArticles` is built (`lib/site.ts`) and
  sets `figure: ArticleFigure` (`{ src, alt }`) on the matching section, so the article literals stay
  untouched. At module load it throws (prefix `screen-figures:`) on a section used twice, a slug listed
  twice (one figure per guide), an unknown slug, an out-of-range section, an image missing from
  `lib/image-manifest.json` or an empty alt.
- `components/guide-article.tsx` (English) and `components/localized-site.tsx` (locale pages) render
  `GuideFigure` from `components/site-image.tsx` after the section's paragraphs and before its table or
  tips: `<figure class="guide-figure">` with an `<img>` carrying the manifest's width, height and srcset,
  lazy loading and async decoding. No caption, no link.
- `sizes` follows the measured prose column: `(max-width: 600px) calc(100vw - 94px), (max-width: 900px)
  calc(100vw - 149px), (max-width: 1162px) calc(100vw - 497px), 665px` (281px wide at 375, 651px at 800,
  503px at 1000, 665px from 1162). At 900px and below `.article-layout` is `minmax(0, 1fr)`, so a wide
  table cannot stretch the column past a phone screen.
- `.guide-figure` CSS is identical on both sites: margin only, the img full width. Corners are square,
  like the hero image, through the global `border-radius: 0 !important` reset on both sites.
- Figures are not translated text, so nothing enters `lib/translations/en.json` or `isArticleComplete`.
  A translated page keeps the image and uses that locale's section heading as the alt; an untranslated
  locale falls back to the English guide and its English alt.
- `tests/rendered-html.test.mjs` checks the validation errors, that no figure reaches the translation
  source, that each figure sits in the section naming the app (one per guide), and that the English,
  translated and fallback exports carry the figure with the expected alt.

## Adding one

1. Pick the app screenshot (a full-size iPhone PNG) and the guide's section that names KiwiCamping.
2. Render it (zsh and ImageMagick 7):
   `scripts/make-screen-figure.sh <screenshot.png> public/images/screens/<slug>.webp '#142719' '#507a49'`.
   It writes `<slug>.webp` (1600x900) and `<slug>-800.webp` for the srcset.
3. Run `npm run images:manifest` so `lib/image-manifest.json` lists the image and its variant.
4. Add a row to `screenFigures` in `lib/screen-figures.ts`: `{ slug, section, src: "/images/screens/<slug>.webp", alt }`,
   with the alt written as "KiwiCamping on iPhone: …" and saying only what the screenshot shows. Add it to the table above.
5. Run `npm run check`.
