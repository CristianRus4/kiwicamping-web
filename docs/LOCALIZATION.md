# Localisation

The static site publishes editions at `/de`, `/es`, `/fr`, `/it`, `/nl` and `/pt`. Each locale
contains the homepage, `/guides`, every translatable guide, tools, support, privacy and terms.

**Road trip guides are English-only** and appear in no locale. Everything else is translatable: UI
copy, the support, privacy and terms pages, and the rules, camping, planning, cost and app guides.
The rule lives in `untranslatedCategories` in `lib/localized.ts`.

`KiwiCamping` remains untranslated. Māori names and macrons are preserved wherever possible.

Translations are committed as local JSON in `lib/translations/`, so production pages never call an
external service. The English source a translator works from is generated:

```bash
npm run translations:source
```

That writes `lib/translations/en.json`. See [TRANSLATIONS.md](TRANSLATIONS.md) for the full process.

Nothing is ever rendered half-translated. A locale publishes a guide only once its translation is
complete and structurally identical to the English; until then the guide has no URL in that locale,
and the locale's links to it go to the English page. A locale shell is published once every UI
string is translated; its guide URLs appear one by one as their translations are completed.

The previous generated translations were removed because the English guides had been rewritten and
expanded underneath them, leaving them structurally stale. Privacy and terms survived intact.

## Right-to-left languages

Hebrew (`/he`) is the first right-to-left edition. A locale opts in with `"dir": "rtl"` in
`lib/locales.json`; nothing else names a direction.

- Its pages carry `dir="rtl"` on the locale wrapper (`app/[locale]/layout.tsx`) and on the exported
  `<html>` (`scripts/export-github-pages.mjs`).
- `app/globals.css` uses logical properties (`margin-inline-start`, `inset-inline-end`,
  `border-inline-start`, `text-align: start`), so layout mirrors without per-language rules. Write new
  CSS the same way: no `left`/`right`, `margin-left` or `text-align: left`.
- Arrows that point along the reading direction (`ArrowRight`, `ArrowLeft`, `ArrowUpRight`,
  `ExternalLink`) are flipped by one `:dir(rtl)` rule. Maps, photos and logos are never flipped.
- English fallback inside a localised page uses `englishFallback()` from `lib/locales.ts`, which sets
  `lang` and `dir="ltr"` together, so it reads left to right inside a Hebrew page.
- Hebrew is never letter-spaced or uppercased, and falls back to the system Hebrew font (DM Sans has
  no Hebrew glyphs).
