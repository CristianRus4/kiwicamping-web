# K-listicles progress

Thread: k-listicles (Kai). Branch: `growth/k-listicles`. Worktree: `~/.t3/worktrees/kiwicamping-web/growth-k-listicles`.
Brief: `/Users/cristian/Developer/Webs/.growth-lanes/briefs/listicles-common.md`.
Research fact sheets (dated, sourced): `/Users/cristian/Developer/Webs/.growth-lanes/research/k-listicles-*.md`.

## Plan (run 1, up to 6 pages)
1. Flagship refresh: `/best-nz-camping-apps.html` as "Best Camping Apps for New Zealand 2026: 7 Compared". In progress.
2. Rankers alternatives (new, `/guides/rankers-alternatives/`). Rankers has 3,322 NZ App Store ratings, the most in NZ results.
3. CamperMate alternatives (new, `/guides/campermate-alternatives/`). 606 NZ ratings; "campermate nz" has the highest NZ brand popularity (Astro 64).
4. to 6. Niches by search value, then the rest of the brief's list.

## Decisions
- Section tables, section CTAs and `listicle` (CTA placement `listicle`) ported from aussiecamps-web (`ArticleTable`, `SectionTable`, `cta`, `listicle`) so both sites match PARITY.md. Locale pages show a table only when it is translated whole (lib/localized.ts merge, not the gate).
- KiwiCamping's dump-station and day-use data was scraped from WikiCamps NZ (see k-tools-hubs progress), so no listicle cites those counts or claims them as an advantage.
- Freedom-camping notices may not show in the app (k-tools-hubs bug note), so no listicle claims freedom-camping data in KiwiCamping.
- Honest cons for KiwiCamping: iPhone only, iOS 26 or later, 4 NZ ratings (3.8) on 2026-10-20, no reviews, DOC data behind the Pass.

## For the orchestrator
- Gate parity: `isArticleComplete` in K does not check section tables (A's does, via `isTableComplete`). Foundation-owned; port it when convenient.
- App Store listing says "4,500+ places"; site says 6,500+. Not changed here.

## Next
- Fact-check flagship (Opus), commit, then the two alternatives pages.

## Blockers
- None.
