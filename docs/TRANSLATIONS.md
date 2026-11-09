# Translating the KiwiCamping site

The live languages are listed in `lib/locales.json`. Each is served from its own URL prefix
(`/de`, `/es`, …). Its shell is the home page, `/guides`, `/tools` and the tool pages; on top of
that it publishes each guide, data hub, and support, privacy or terms page once that page is
translated.

## What gets translated

Everything: all UI copy (navigation, hero, features, planner, FAQ, footer, tools, article chrome),
the support, privacy and terms pages, and every guide, road trips and the legacy `.html` articles
included. A category can be kept out of translation with `untranslatedCategories` in
`lib/localized.ts`; nothing else needs changing.

## The workflow

1. Regenerate the English source:

   ```bash
   npm run translations:source
   ```

   That writes `lib/translations/en.json` — every translatable string on the site, in the exact
   shape a locale file uses.

2. Translate the **values**. Keep every key and every array position exactly as it is; the site
   matches translations to English by position, so a merged or dropped array item shifts the rest.

3. Save the result as `lib/translations/<code>.json` (`de.json`, `es.json`, …).

4. `npm run check`. The content audit verifies the file is well-formed, carries no road trip and
   translates nothing that is not an article on this site.

## Nothing is ever shown half-translated

This is the one rule the site enforces hardest, because the opposite shipped once: the English
guides were rewritten and expanded — one went from three sections to seven — *after* their
translations were generated. Matching by position then put translated paragraphs under unrelated
English headings and appended four untranslated sections underneath.

So a translation counts only when it is **complete and structurally identical** to the English it
translates: same number of sections, same number of paragraphs and tips in each, every one filled
in. Anything short of that is treated as absent:

- an incomplete guide, hub, or support/privacy/terms page **does not exist** in that locale. Every
  link to it from the locale's pages (guide cards, in-article links, hub and tool pages, the footer)
  goes to the English page instead, and the language switcher on the English page links to the
  locale's home. No English copy is exported under a locale prefix: with 25 locales those copies
  were thousands of pages with no search value, and they pushed the GitHub Pages deploy past its
  time limit
- a locale with an incomplete UI is not published at all (see below)

The rule lives in the route manifest (`lib/routes.ts` and `lib/routes/*.ts`); `hrefFor` there is
how a link picks the locale's page or the English one.

You can still deliver in stages — finish the UI, then guides one at a time. Just finish whatever you
start: a guide is either wholly translated or absent. `npm run check` fails if a translation file
contains a guide the site cannot render, and tells you which one.

### Whenever the English changes

If an English guide gains a section or a paragraph, its existing translations become structurally
stale and the localised page disappears (its links go to English) until they are updated. That is deliberate: it is
exactly the failure above, caught before a reader sees it. `npm run check` fails in that case and
names the guide, so it cannot go unnoticed. Re-run `npm run translations:source` and re-translate it.

An English edit that keeps every count the same (a reworded paragraph, a corrected fee) does not change
the structure, so the gate cannot see it. Stamps catch it. After translating, the locale's thread runs
`npm run translations:stamp -- --locale <code>`, which records in `lib/translations/meta/<code>.json` a
hash of the English each string was translated from. `npm run content:check` then prints that locale's
stale count, and `npm run translations:invalidate -- --locale <code>` blanks the stale strings so the
translation engine lists them again (their guide leaves the locale until they are redone). Add
`--all` to `translations:stamp` only after reviewing the whole file, to accept every current
translation as up to date.

## When a locale goes live

A locale is published once **every** UI string is translated. A partial UI would put a translated
hero above an English FAQ, which is the same defect as a half-translated guide.

That makes the locale shell indexable, along with every guide, hub and page it has translated: each
gets a self-canonical, `index` robots tag, a sitemap entry and hreflang with its other translations.

A locale whose UI is not complete is not routed in a normal build. When it is previewed, its shell
and translated pages build but are marked `noindex`, kept out of `sitemap.xml` and hidden from the
footer language switcher. There is no flag to flip: filling the file in is the switch.

`npm run check` prints the progress of every locale:

```
Translations: de 86/186 ui, 0/43 guides, 2/3 pages · es 86/186 ui, ...
```

## House rules

- **Never translate the product name.** `KiwiCamping` stays as written.
- **No em dashes.** The content audit rejects them in both English and translated copy.
- Prices stay in NZD. The multi-currency table converts mechanically and its column headers are
  currency codes, which are not translated.
- Place names, park names and official body names stay in their original form. That includes
  the island names (North Island, South Island, Stewart Island), which the engine protects. Only
  the country itself uses each language's form (Neuseeland, Nouvelle-Zélande, Nueva Zelanda…).

## Engine integration

The website publishes complete locale shells and only indexes a guide once its
translation is structurally complete. The shared engine preserves nested keys,
ordered arrays, links, markup, SEO fields, and protected New Zealand terms.
