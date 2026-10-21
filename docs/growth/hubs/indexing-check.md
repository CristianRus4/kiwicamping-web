# Hub indexing check (English hubs)

Linear CNTXT-877. Written 2026-10-22 by the data-hubs lane for the Site admin session, which runs Search Console.

## What we know (2026-10-22)

- **Indexed hubs confirmed: 0 of 33.** No evidence either way yet.
- The hubs shipped on 2026-10-20. The only Search Console export in the repo (`docs/growth/gsc/2026-10-19/`) was pulled the day before, so it has no hub URLs at all.
- The sitemap index was resubmitted on 2026-10-21 (docs/growth/MEASUREMENT.md), and it includes every indexable hub below.
- `site:` searches from the agent environment return no results for campingapp.nz: the search tool ignores the `site:` operator, so it cannot count indexed pages. Only Search Console can answer this.
- 20 more English hubs are built but noindex (below the quality gate). They are deliberately out of the sitemap, so they are not listed here.

## Please check in Search Console (sc-domain:campingapp.nz)

1. **Pages report:** Indexing, Pages. Filter by URL containing `/camping/`, `/huts/` or `/freedom-camping/`. Note how many are "Indexed" and the reasons for the rest ("Discovered - currently not indexed", "Crawled - currently not indexed", etc.).
2. **URL Inspection** for each URL below, if the quota allows: is it on Google, and when was it last crawled? Request indexing for any that are not.
3. **Performance:** pages containing `/camping/`, `/huts/` or `/freedom-camping/`, last 7 days: impressions and clicks.
4. Record the result in a dated table at the end of this file, and tell the data-hubs lane (Ops node t3-ava-hubs) or the orchestrator.

**Why it matters:** the owner will switch on the translated hubs only once Search Console shows the English hubs being indexed.

## Live, indexable English hubs (33, in the sitemap since 2026-10-20)

- https://campingapp.nz/camping/
- https://campingapp.nz/huts/
- https://campingapp.nz/freedom-camping/
- https://campingapp.nz/camping/canterbury/
- https://campingapp.nz/camping/central-north-island/
- https://campingapp.nz/camping/coromandel/
- https://campingapp.nz/camping/east-coast/
- https://campingapp.nz/camping/fiordland/
- https://campingapp.nz/camping/manawatu-whanganui/
- https://campingapp.nz/camping/marlborough/
- https://campingapp.nz/camping/nelson-tasman/
- https://campingapp.nz/camping/northland/
- https://campingapp.nz/camping/otago/
- https://campingapp.nz/camping/west-coast/
- https://campingapp.nz/freedom-camping/central-otago/
- https://campingapp.nz/freedom-camping/hawkes-bay/
- https://campingapp.nz/freedom-camping/new-plymouth/
- https://campingapp.nz/freedom-camping/tongariro/
- https://campingapp.nz/freedom-camping/turangi/
- https://campingapp.nz/freedom-camping/wakatipu/
- https://campingapp.nz/huts/canterbury/
- https://campingapp.nz/huts/central-north-island/
- https://campingapp.nz/huts/east-coast/
- https://campingapp.nz/huts/fiordland/
- https://campingapp.nz/huts/hawkes-bay/
- https://campingapp.nz/huts/manawatu-whanganui/
- https://campingapp.nz/huts/marlborough/
- https://campingapp.nz/huts/nelson-tasman/
- https://campingapp.nz/huts/otago/
- https://campingapp.nz/huts/southland/
- https://campingapp.nz/huts/wairarapa/
- https://campingapp.nz/huts/wellington-kapiti/
- https://campingapp.nz/huts/west-coast/

## Joining the sitemap at the next deploy (2)

These are lifted over the quality gate on this branch. Check them a week after they deploy.

- https://campingapp.nz/freedom-camping/south-westland/
- https://campingapp.nz/freedom-camping/te-anau/

## Results

| Date | Indexed | Not indexed (reason) | Impressions (7 days) | Notes |
|---|---|---|---|---|
