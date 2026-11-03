# KiwiCamping page fixes (October review), lane k-oct-pages

Branch `growth/k-oct-pages`. Brief: `/Users/cristian/Developer/Webs/.growth-lanes/oct-review/brief-k-pages.md`.

## Baseline (3 Nov 2026, before any change)
`npm run content:check`: all 15 live locales 151/151 guides, 3/3 pages, 0 stale; hubs 32 indexable in every locale; tools 5/5 translated in every locale.

## Done
- Milestone 1: DOC bookings page (button, intro, description, steps, Great Walk fee and cancellation tables, alerts, payment), fire ban page (retitle, checkitsalright button, intro, season table), tools index and fuel and drive-time calculators (titles, MBIE 23 Oct prices from one constant, RUC, price and route tables, FAQs) with all 15 locales translated.

- Milestone 1 merged 3 Nov (main adc8473); the orchestrator updated the protected fuel test.
- Milestone 2: approximate route distances with cited sources; home title and description; freedom camping rules and where-to-camp retitled with answer-first intros; dump stations, DOC huts, road rules and East Cape descriptions and intros (titles kept under the 15 Oct rule); internal links checked (all point at the .html canonicals); cost-cluster drop investigated (see changelog: September spike plus noindexed English copies under locale URLs, no revert).

- Milestone 3: a download line right after the opening answer on the 8 guides and 2 calculators I changed, with campaign token w_ans_<locale>, translated into all 15 locales.

- The DOC bookings and DOC huts pages list the booked-out guide (from 13 Nov) and the easy huts guide (from 6 Jan) first under Related guides.

## Next
- Waiting for the orchestrator on the cost pages: headline prices in the first sentence need the intros changed in all 15 locales (the number gate fails otherwise), and those are guide locale strings owned by the tech lane.
- doc-campsite-rules and self-contained-vehicles: left as they are (answer-first already; retitled 19 Oct; the .html vs slashless split is the tech lane's).

## Blockers
None.
