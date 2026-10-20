# ava-k-facts (release/k-facts)

## Done
- Verified on 2026-10-20: PGDB private vehicle owners page (system began 7 Dec 2023, transition to 6 Jun 2026, only green from 7 Jun 2026, $400 fee) and govt.nz freedom camping (transition ended Sun 7 Jun 2026, updated 17 Jun 2026).
- Merged growth/k-content-facts. Kept main's warrant wording (already correct). Applied $56 fix on main's holiday-parks sentence.
- Fixed speed-limits s4.b1 duplicate sentence.

- Translations: holiday-parks s0.b0 exists only in fr; updated to 56 $ and "reviennent au même prix". The speed-limits s4.b1 translations in all 9 live locales were already a single sentence matching the fixed English; reviewed, unchanged.
- Stamped only reviewed keys (script /tmp/kfacts-stamp/stamp-keys.py, keeps key order): speed-limits s4.b1 in fr, pt, sv, da, nb; fr holiday-parks s0.b0; fr titles of eating-out-new-zealand-prices-2026, arthurs-pass-camping-route, banks-peninsula-camping-weekend (stale on main from an English title-case/"NZ" change; French still matches). Plain `translations:stamp` was not run: it would also stamp 27 sv, 12 da, 28 nb strings their lanes changed without stamping.
- content:check: 0 stale for fr, pt, da, nb, sv. de, es, it, nl have no stamp file (not stamped), so nothing can be stale there.

## Next
- npm run check, hand off.

## Blockers
- none
