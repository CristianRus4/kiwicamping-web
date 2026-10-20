# ava-i18n-k-list-2 progress

Lane: translate the five scheduled KiwiCamping listicles into es, fr, it, pt (one language at a time).
Branch `i18n/k-list-2`, worktree `~/.t3/worktrees/kiwicamping-web/ava-i18n-k-list-2`. Never pushed.

Pages: rankers-alternatives (94 units), campermate-alternatives (95), free-camping-apps-new-zealand (88),
road-trip-planner-apps-new-zealand (109), best-travel-apps-new-zealand (127).

Catalogs for engine apply: es `kiwicamping-website-es`, fr `kiwicamping-website-fr`, it and pt `kiwicamping-website`.

## Working files (scratch, rebuildable; not in git)
- `/tmp/kl2/src.json`: the five English articles. `/tmp/kl2/BRIEF.md`: subagent brief.
- `/tmp/kl2/verify.mjs <draft.json>`: shape, numbers, markup, brand terms. Drafts in `/tmp/kl2/<code>/`.
- Rebuild src: node script reading `lib/translations/en.json` `articles[<slug>]` for the five slugs.

## Process per language
1. Two sonnet-high drafters (3 + 2 articles) from BRIEF.md. 2. verify.mjs clean. 3. Opus-medium native review incl. negation check.
4. Merge into `lib/translations/<code>.json` via engine apply (values file, dry run first). 5. stamp, `npm run content:check`, commit.

## Done
- es: all five listicles (513 units) drafted, opus native review (84 units fixed, negation check clean), engine apply 0 rejected, stamped (only these keys: `node /tmp/kl2/stampmine.mjs es`, because es has no meta file yet and a full stamp would hide other stale guides), content:check green.

- fr: all five listicles (513 units), opus review (~109 units fixed, negation check clean), engine apply 0 rejected, `translations:stamp -- --locale fr` run (3 stale are pre-existing, not these pages), content:check green.

## Next
- it (drafting in /tmp/kl2/it), then pt. Stamp fr and pt with `npm run translations:stamp -- --locale <code>`; es and it have no meta file, so stamp only the five articles.

## Blockers
- None.
