# The extra place pages on Cloudflare

Every place in the app has a page. The 723 full listings are built and served by GitHub Pages like the
rest of the site. The other ~5,500 places (BookIt stays and tours, tracks, council campgrounds, dump
stations, day-use areas, closed and thin DOC places) are served by a Cloudflare Worker on the free plan,
`kiwicamping-places` (places-worker/), as on AussieCamps: on GitHub Pages they took the site to 887 MB of
its 1 GB.

- **Same template.** `npm run places:worker` renders them with components/places/place-page.tsx into the
  shell of an exported place page (scripts/export-place-pages.tsx `--out worker-dist`), after the Pages
  export. They load the site's CSS and scripts from campingapp.nz like every page. noindex, in no sitemap,
  not in IndexNow.
- **Routing.** The Worker answers `/places/<region>/<slug>/` for those pages from the R2 bucket (a slash-less
  path gets a 301 to the slash); any other path passes through to GitHub Pages unchanged.
- **Deploy.** pages.yml renders and deploys the Worker in the same build as the Pages artifact, so its
  pages always name the CSS file that is going live. It uses the repository secrets
  `CLOUDFLARE_API_TOKEN` (Workers Scripts and Workers Routes edit) and `CLOUDFLARE_ACCOUNT_ID`; without the
  token the step is skipped.
- **Free plan.** R2: 10 GB storage and no file limit (about 186 MB used). Workers: 100,000 requests a day;
  every `/places/*` request runs the Worker.

## Cutover (14 Nov 2026)

The domain's apex `A` records are proxied through Cloudflare (orange cloud) and SSL/TLS is Full; `www`
stays DNS only (GitHub redirects it). The Worker runs on the route `campingapp.nz/places/*`
(places-worker/wrangler.jsonc), so every deploy keeps it. Test address:
`https://kiwicamping-places.cristianrus.workers.dev/places/…`, which passes any other path through to campingapp.nz.

- A slash-less path redirects to its slash with a 307 from the Worker (GitHub Pages answers 301): same
  page, and these pages are noindex.
- Cloudflare's Email Address Obfuscation (Scrape Shield) is on for the zone: on proxied pages the footer's
  mailto link becomes a `/cdn-cgi/l/email-protection` link decoded by a small script. Turn it off in the
  dashboard to serve the pages byte for byte as GitHub Pages does.

Rollback: remove the route in places-worker/wrangler.jsonc and deploy (the extra pages then 404,
everything else is unaffected), or set the `A` records back to DNS only.

## R2 (14 Nov 2026)

The pages are objects in the R2 bucket `kiwicamping-places` (free: 10 GB, no file limit), bound to the Worker
as PLACES. CI renders them with `PLACES_R2=1`, and scripts/sync-places-r2.mjs uploads only the pages whose
MD5 changed (and deletes removed ones) over R2's S3 endpoint, with keys derived from CLOUDFLARE_API_TOKEN.
The Worker answers `/places/<region>/<slug>/` from the bucket (a slash-less path gets a 301), and passes
everything else through to GitHub Pages.
