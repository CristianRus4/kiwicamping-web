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

Nothing is ever rendered half-translated. A guide is published in a locale only when its translation
is complete and structurally identical to the English; otherwise its localised URL 404s and the
reader gets the English guide. A locale is published only when every UI string is translated, and
stays `noindex` and out of `sitemap.xml` and the footer language switcher until then.

The previous generated translations were removed because the English guides had been rewritten and
expanded underneath them, leaving them structurally stale. Privacy and terms survived intact.
