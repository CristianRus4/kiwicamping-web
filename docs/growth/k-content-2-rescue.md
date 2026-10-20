# Rescue of growth/k-content-2 and growth/k-tools-hubs-2

Lane ava-k-content-3, 20 October 2026, against origin/main 9d0f03b. Main is the source of truth for anything newer: the K-content release, its four fact-check batches and the K-tools-hubs lane all merged after these WIP commits were written, mostly as later versions of the same work. Method: every line each commit added was compared with main (`git cherry`, per-line and per-sentence diffs), and anything missing was checked against the current official source before porting.

Status key: **ported** (on this branch), **on main** (already there, often in a newer or fact-checked form), **dropped** (with the reason).

## growth/k-content-2

### 566fe1f WIP checkpoint before takeover
| Change | Status | Notes |
|---|---|---|
| Blue-warrant end date (7 June 2026) on freedom-camping, free-camping, where-to-camp, self-contained pages and FAQ | on main | Later fact-check A wording on main. |
| `/self-contained-vehicles-nz.html` rewrite and retitle | on main | Plus the Whakaipo fix ("free DOC site"). |
| `/doc-campsites-huts-guide.html` booking rewrite, fee table, Hut Pass break-even | on main | Main has the seasonal serviced-hut fees ($25 to $34) from fact-check B; the WIP's flat "$25" and "pays for itself after 7 serviced nights" are wrong for October to April. |
| doc-huts guide fee paragraphs, categories, FAQ "How much does a DOC hut cost" | on main | Newer seasonal fees and club huts on main. |
| doc-campsite-rules retitle and description | on main | |
| Home: retitle to "NZ Camping Map & App: DOC Campsites, Huts, Dump Stations" | dropped | Main kept the title on purpose (changelog: 3.0% CTR at position 16 beats the benchmark). Main has the map-intent section and meta description. |
| best-nz-camping-apps rewrite with a 5-app comparison table, FAQs | on main | Superseded by the 7-app listicle ("Best Camping Apps for New Zealand 2026: 7 Compared"). |
| `ArticleComparison` type and comparison table rendering | on main | Main's version adds `rowHeader`. |
| changelog.csv rows | on main | |

### 8c70bec fact-check fixes, ContextCta, dump stations page
| Change | Status | Notes |
|---|---|---|
| **ContextCta**: inline CTA after section 2 and end CTA with screenshot and QR, per page type, counts from product-facts.json | **ported** (8a416a5) | PLAN.md "Conversion". Fixed on the way: removed "a one-week or one-year purchase with no subscription" (the app now sells a weekly subscription and lifetime, Kiwi/StoreKit.storekit and KiwiPaywallConfiguration.swift); removed the stale "127 huts and 177 campsites take bookings" (DOC has since moved every serviced hut online); no promise of the freedom-camping notices (possible app bug, see k-tools-hubs progress); dropped the unused `workingHoliday` variant; inline block uses `<div>` text, not `<aside>`/`<p>`, so the protected similarity audit and the body extraction in tests are unaffected; end block keeps the exact `<div class="article-end-cta">` wrapper; listicles keep their own inline button and get only the end block. Not done: the sticky iOS bar after 40% scroll from the plan (never in the WIP). |
| Dump stations page: regional counts table (`counts`, `badge`, `asOfLabel` comparison options), retitle, regional sections | on main | Main's 63ca4c6 gives the same regional counts in prose, the fee split and the sourced $800 fine. The table options were only needed by the WIP's table. |
| Dump stations: "a rental company can pass the fine to the hirer", "a certified vehicle holds three days" | dropped | Main's fact-checked page (verdict E) left both out; not re-litigated. |
| best-apps table cell fixes (CamperMate advertising, Campable offline) | on main | Superseded by the listicle. |
| Freedom-camping, DOC bookings, where-to-camp fact-check fixes | on main | Main's wording is the later fact-checked version (e.g. "110 ... are self-registration"). |
| Home meta description and map section | on main | Main also names the DOC notices. |

### 19bb185 DOC cluster fact-check fixes
| Change | Status | Notes |
|---|---|---|
| doc-campsite-rules: Campsite Pass holders without a booking pay a $10 fee and are turned away if full | **ported** (4faf9c2, da1f548) | Main's page read as if pass holders pay the full penalty rate, contradicting main's own DOC bookings page. Source: DOC Campsite Pass page ("A $10 booking fee will apply to any campers without bookings"; "If no space is available you will be turned away"), checked 20 Oct 2026. Also the FAQ answer. Re-translated in de, es, fr, it, nl, pt, da, nb, sv. |
| DOC bookings guide sources: Routeburn, Kepler, Tongariro Northern Circuit season pages; Hut Pass exclusions list | **ported** (4faf9c2, da1f548) | The price-table note gives those season start dates with only Milford cited. Verified on each DOC page 20 Oct 2026: TNC 23 Oct, Kepler 27 Oct, Routeburn 1 Nov 2026 to 30 April 2027. fr and sv translate this guide, so they got the 4 labels. |
| Serviced Hut Tickets: "contact DOC to have tickets applied" | dropped | Main's wording was verified by fact-check B against DOC's 1 October 2026 release. |
| Great Walk huts "bookable in the season, which on some tracks is the whole year"; "Nobody is turned away" heading; "two categories" of hut | on main | Main's fact-checked wording (three categories incl. club huts; bookable huts can turn you away). |
| Campsite stay limit FAQ wording, visitor-centre booking wording | on main | |

### 18b0b8f Look Around fix, title template, changelog
| Change | Status | Notes |
|---|---|---|
| "Street View" to "Look Around" in home, llms.txt, app guides, FAQs, SoftwareApplication schema | on main | Main's wording ("where coverage exists") is newer and already translated. |
| **guideTitle**: drop " \| KiwiCamping" when title plus suffix passes 60 characters | **ported** (f4d69e1) | 63 of 78 guide titles pass 60 with the suffix. Also applied to localized guide titles (the WIP only did English). |
| changelog rows | on main | |

## growth/k-tools-hubs-2

The branch was a parallel re-implementation after the takeover; main merged growth/k-tools-hubs (791b13c, 6153aaa, 86e3720), which covers the same pages and is wired into the route manifest.

### fa0a6ae Split the tools into one page per calculator
| Change | Status | Notes |
|---|---|---|
| /tools/<slug>/ pages, `tools` namespace, lib/tools.ts, calculator defaults, product-facts | on main | Main's version is newer (route manifest, localeRoot, DOC campsite link fix). |
| `TOOL_PAGES_EXPORTED` flag | dropped | Main replaced the flags with the route manifest. |

### 063131a Add the DOC data hubs
| Change | Status | Notes |
|---|---|---|
| Camping, huts and freedom-camping hubs, index pages, prose, council links, BreadcrumbList/ItemList, indexing gate | on main | Same counts (52 built, 30 indexable). |
| **Lakes on the hub maps** (Natural Earth 1:10m lakes) | **ported** (3c665aa) | Main's outline was coastline only. Coastline rings rebuilt byte-identical (same source sha256); lakes of about 10 km² or more (20). Captions and credits now say "Coastline and lakes". |
| audit-hubs.mjs: cross-hub sentence-shape check, outline provenance check, `HUBS_ONLY` | dropped | scripts/audit-*.mjs is protected (foundation thread only). Main's audit already checks council links and grounding. Suggest to the foundation owner if wanted. |
| Separate hub-index.tsx, lib/hub-pages.ts, lib/hub-map.ts structure | dropped | Different structure for the same output; main's components are newer. |
| `HUB_PAGES_EXPORTED` flag | dropped | Superseded by the route manifest. |
