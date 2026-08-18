# Localisation

The static site publishes complete editions at `/de`, `/es`, `/fr`, `/it`, `/nl` and `/pt`. Each locale contains the homepage, all 74 full articles, tools, support, privacy and terms.

`KiwiCamping` remains untranslated. Māori names and macrons are preserved wherever possible. Generated translations are committed as local JSON so production pages do not call an external translation service. Re-run `npx tsx scripts/translate-content.ts` and `node scripts/translate-static-pages.mjs` only when the English source changes, then review the changed language files before publishing.
