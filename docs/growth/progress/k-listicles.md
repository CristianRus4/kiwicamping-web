# K-listicles progress

Thread: k-listicles (Kai). Branch: `growth/k-listicles`. Worktree: `~/.t3/worktrees/kiwicamping-web/growth-k-listicles`.
Brief: `/Users/cristian/Developer/Webs/.growth-lanes/briefs/listicles-common.md`.
Research fact sheets (dated, sourced): `/Users/cristian/Developer/Webs/.growth-lanes/research/k-listicles-*.md`.
Proposed publish dates: `docs/growth/publish-schedule.md`. Query ownership: rows added to `docs/growth/audit/keyword-map.csv`.

## Done (run 1)
1. Flagship refresh `/best-nz-camping-apps.html`: "Best Camping Apps for New Zealand 2026: 7 Compared". Fact-checked.
2. `/guides/rankers-alternatives/`. Fact-checked.
3. `/guides/campermate-alternatives/`. Fact-checked.
4. `/guides/road-trip-planner-apps-new-zealand/`. Fact-checked.
5. `/guides/free-camping-apps-new-zealand/`: KiwiCamping ranked 4th on purpose (its free DOC campsites need the Pass). Fact-check pending at time of writing.
6. `/guides/best-travel-apps-new-zealand/`. Fact-check pending at time of writing.

## Next (run 2 candidates, by search value)
- Best campervan apps NZ (check overlap with the flagship first), best camping weather apps NZ, best fuel price apps NZ, best apps for working holiday makers NZ, best apps to save money travelling NZ, WikiCamps NZ alternatives ("wikicamps nz" 65 impr in GSC 3m).

## Decisions
- Section tables, section CTAs and `listicle` (CTA placement `listicle`) ported from aussiecamps-web (`ArticleTable`, `SectionTable`, `cta`, `listicle`) to match PARITY.md. Locale pages show a table only when it is translated whole (lib/localized.ts merge, not the gate).
- Pass boundary per the app's `CampingPaywallGate`: DOC place details, collections, trips, pins, guides and Google directions need the Pass. Only BookIt stays and tours are free.
- KiwiCamping's dump-station and day-use data was scraped from WikiCamps NZ (see k-tools-hubs), so no listicle cites those counts or claims them as an advantage.
- Freedom-camping notices may not show in the app (k-tools-hubs note), so no listicle claims freedom-camping data in KiwiCamping. The app does not read DOC's campsite `access` field, so no "campervan access" claim.
- Honest cons for KiwiCamping on every page: iPhone only, iOS 26 or later, 4 NZ ratings (3.8) on 2026-10-20, no traveller reviews, Pass needed.
- Review themes are reported as counts from the 50 most recent NZ App Store reviews, labelled as reviewers' accounts.

## For the orchestrator
- Gate parity: K's `isArticleComplete` does not check section tables (A's does, via `isTableComplete`). Foundation-owned.
- KiwiCamping's App Store description says "4,500+ places"; the site says 6,500+.
- Blue-warrant deadline: several existing K guides say blue warrants last to 31 Dec 2027; govt.nz says the transition ended 7 June 2026. Logged in `.growth-lanes/source-issues.md` for K-content.

## Blockers
- None.
