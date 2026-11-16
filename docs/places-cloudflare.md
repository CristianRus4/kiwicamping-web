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
  `CLOUDFLARE_API_TOKEN` (Workers Scripts, Workers Routes and R2 edit) and `CLOUDFLARE_ACCOUNT_ID`; without the
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

## Live trip and collection links (15 Nov 2026)

The app's "Send link" publishes a trip or a collection to a page that follows later changes:
`https://campingapp.nz/trip/<id>` or `/collection/<id>`. The same Worker runs the API and the pages on the
routes `/api/links/*`, `/trip/*` and `/collection/*` (places-worker/wrangler.jsonc). The old
`/trip/#<payload>` links are untouched: anything under `/trip/` or `/collection/` that isn't a 12-character id
passes through to GitHub Pages.

**API.** `id` is 12 letters or digits; the token is 43 base64url characters the app makes and keeps.

| Request | Answer |
|---|---|
| `PUT /api/links/<id>`, `Authorization: Bearer <token>`, JSON body ≤ 64 KB | 200 `{"url":"https://campingapp.nz/trip/<id>"}` (or `/collection/<id>`); 400 `{"error":"…"}` for a bad body or id, 401 no token, 403 another token, 413 too big |
| `DELETE /api/links/<id>`, same token | 204; the page then answers 410 "This link was removed", and a later PUT with the same token restores it |
| `GET /api/links/<id>` | the stored link, `no-store`; 404 unknown, 410 removed |
| `GET /api/links/stats/<yyyy-mm-dd>` | that UTC day's totals: `writes`, `creates`, `removes`, `capped`, `clients` (counts only) |
| anything under `/api/links/<id>/` | 404 |

- The first PUT claims the id: it stores the SHA-256 of the token with the link, as a conditional create, so
  of two racing creators only one wins. Later PUTs and DELETEs must bring the same token.
- Body: trip `{"v":1,"kind":"trip","n","sym","col","sd","ed","dist","dur","u","s":[{"t","id","la","lo","d"}]}` (≤ 300
  stops), collection `{"v":1,"kind":"collection","n","sym","col","u","p":[{"t","id","la","lo"}]}` (≤ 500
  places). Unknown keys are refused; every limit is in places-worker/src/validate.js. A trip's optional `dist`
  is its total driving distance in metres (a finite number, 0–20,000,000) and `dur` its total driving time in
  seconds (0–10,000,000). `col` (6 hex digits) and `sym` (an SF Symbol name) are accepted and stored for the
  app; the page doesn't use them and always shows the site's own green.
- Rate limits per client (an IPv4 address, or an IPv6 /64): 30 writes and 300 reads (API and pages) a minute, then 429 with `Retry-After: 60`.
  Other methods get 405.
  Each site has its own counters (rate-limit namespace ids: AussieCamps 1001 and 1002, KiwiCamping 2001 and
  2002; both sites are in one Cloudflare account). See "Write limits" for the daily caps.
- Storage: the R2 bucket `kiwicamping-links` (binding LINKS), objects `links/<id>.json`. pages.yml creates
  the bucket if it is missing; nothing in the build ever syncs or empties it.

**Pages.** The Worker fills the shell `shells/link.html` (app/link-shell/page.tsx, copied by
`npm run links:assets -- --out worker-dist` after the place export) with the link's name, stats (a trip's
dates, stops, distance and driving time when the app sent them; a collection's places), map and list, and its
own title, description, Open Graph tags and canonical; noindex. `og:image` and `twitter:image` are always the
site's own image (`homeOgImage`), as for a shared pin. The 404 and 410 pages keep Open in app (it opens the app
itself) and a line linking to the contact address. Each stop with an app place id shows
its place card (`cards/<encodeURIComponent(id)>.json`, same script): name, photo, type line, rating or fee,
linking to its place page. Pins and addresses are plain rows. Both live in the places bucket, so the sync
must carry them. Pages are cached for 60 seconds with an ETag.
Only the first 100 distinct ids in the app's place-id format (`SITE.placeId`) are looked up, and each card
read goes through the data centre's cache for an hour (missing cards too), so repeat views cost no R2 reads.
The page sends only the origin as referrer, and analytics reports `/trip/` or `/collection/` without the id:
the id is the link's only key.

**Stylesheets.** The bucket's pages (place pages and the shell) link `/places/_assets/<file>.css`, a copy of
the build's CSS (scripts/r2-stylesheets.ts) that the sync uploads before the pages, so they are styled even
while GitHub Pages is still deploying the same build. The Worker serves it as immutable.

Local test: `npx wrangler dev --config places-worker/wrangler.jsonc --compatibility-date 2026-05-22` (the
local runtime may be older than the config's date), after putting the shell and some cards into the local
bucket with `npx wrangler r2 object put kiwicamping-places/<key> --file <file> --local`.

## Taking a page down (16 Nov 2026)

Every live link's page ends with a small **Report** link: a mail to support@cntxtlabs.co with the page's
address in the subject. To take a page down:

1. Read the report and open the page (`https://campingapp.nz/trip/<id>` or `/collection/<id>`).
2. GitHub → Actions → **Links admin** → Run workflow, action `remove`, id = the 12 letters or digits after
   `/trip/` or `/collection/`. Or locally, with the Cloudflare secrets in the environment:
   `CLOUDFLARE_API_TOKEN=… CLOUDFLARE_ACCOUNT_ID=… node scripts/remove-link.mjs <id>`.
3. The page and `GET /api/links/<id>` answer 410 "This link was removed" within a minute (the page's cache).

It leaves the same tombstone as the owner's DELETE plus `b: "1"`: the owner's app can't put the page back (its
PUT answers 410). Undo by hand only: in the Cloudflare dashboard, delete `links/<id>.json` from `kiwicamping-links`; the
owner's next change then publishes it again. Action `report` lists what the bucket holds, including anything
left under `images/`.

## Write limits (16 Nov 2026)

Anyone can call the API, and the first PUT to an unused id claims it, so writes are limited three ways:

- Per minute, per client: 30 writes, 300 reads (above).
- Per UTC day, per client (`counters/<day>/<hash of the address>.json`): 300 writes and 50 new links. The app
  sends a link a few seconds after each change and nothing while it is unchanged, so one person editing all day
  stays far below both. Over either: 429 until midnight UTC.
- The day's totals (`stats/<day>.json`, `GET /api/links/stats/<day>`). `node scripts/link-stats.mjs [day]`
  prints yesterday's and, above 2,000 writes, 200 new links or 20 capped requests, raises the Ops banner
  "Check unusual KiwiCamping link traffic…" and exits 2. It belongs in the daily morning task (Links admin → `stats`
  runs it on GitHub). The totals are read, add, write: two writes at once can lose a count.

pages.yml adds R2 lifecycle rules so counters go after 2 days and totals after 400.

**Later, with the app:** App Attest on the first PUT. The app would ask DeviceCheck's `DCAppAttestService` for a
key and an attestation once per install, send them with the first PUT of a new id, and the Worker would verify
the attestation against Apple's root (and keep the key's public key with the link, so later PUTs can be
asserted too). A website-only check can't do it: the app has to produce the attestation.

## The page's language (16 Nov 2026)

The page's own words (its stats, the headings and messages of a missing or removed link, the contact line and
Report) follow the visitor's `Accept-Language`, in the 28 languages the site has, falling back to English
(places-worker/src/labels.js; machine-translated, not reviewed by a person). Dates and numbers use the language's
own format, and distances are in miles for visitors whose first locale is in the US, the UK, Liberia or Myanmar.
The rest of the page (header, footer, Open in app) is the English shell. Answers carry `Vary: Accept-Language`
and an ETag per language and unit. The link preview's text (`og:description`) stays English.

## Expiry: not yet (16 Nov 2026)

Pages don't expire. Expiring links not updated for 12 months would delete pages people still use: the app sends a
link only when its content changes (`CampingPublicLink.publish`: an unchanged payload's hash matches the record's
and nothing is sent), so an unchanged trip is never written again. Before an expiry rule is added, the app must
write each link again when its last successful PUT is older than about 3 months, even unchanged (keep the date of
the last PUT with the record). Then a lifecycle rule on `links/` with a 12-month age can go in pages.yml.

## DOC closure alerts (16 Nov 2026)

The app fetches closure alerts through the site instead of calling DOC with a key built into the app
(places-worker/src/alerts.js, route `campingapp.nz/api/alerts/*`):

| Address | DOC source |
|---|---|
| `https://campingapp.nz/api/alerts/campsites` | `https://api.doc.govt.nz/v2/campsites/alerts` |
| `https://campingapp.nz/api/alerts/huts` | `https://api.doc.govt.nz/v2/huts/alerts` |
| `https://campingapp.nz/api/alerts/tracks` | `https://api.doc.govt.nz/v1/tracks/alerts` |

- DOC's JSON comes back byte for byte, so the app only changes the address (and drops its `x-api-key`).
- The Worker sends the server's own DOC key (the Worker secret `DOC_API_KEY`) as `x-api-key`, keeps each answer
  6 hours in the data centre's cache, and saves every good answer to `alerts/<kind>.json` in `kiwicamping-links`.
  When DOC fails, or before the key is set, it serves that saved copy with `X-Alerts-Stale: 1`; with no copy
  either, 503. `X-Alerts-Fetched-At` gives the fetch time for the app's "as of" line.
- Reads count toward the per-client read limit (300 a minute).

Setup (Cristian): ask DOC for a new key for the server (keep the old one valid: App Store versions use it), then
`npx wrangler secret put DOC_API_KEY --config places-worker/wrangler.jsonc` and paste it when asked. Never copy
the key from the app.

## DOC photos: use DOC's own addresses (16 Nov 2026, proposal, not switched)

Today both the app (Kiwi/Camp/KiwiPlacesRepository.swift `docImageBase`, DataManager.swift) and this site's place
pages load DOC photos from the public GitHub repo `CristianRus4/kiwicamping`: `campsites_images/campsite_<id>.jpg`
and `huts_images/hut_<id>.jpg` (928 photos). **That repo stays up and unchanged** while any App Store version
still points at it.

Instead of hosting copies, use the photo DOC itself shows on each place's page:
- **Where it comes from:** every DOC campsite and hut in the app's data has a `website` link
  (`https://www.doc.govt.nz/link/<guid>.aspx`). That page's share picture (`og:image`) is DOC's photo of the place.
  A script (outside this repo for now: Webs/.growth-lanes/doc-photos/collect.py) reads all 1,214 pages, four at a
  time, and keeps the photo's path under `https://www.doc.govt.nz/`, such as
  `contentassets/cf39971f7ce4428a841777d9e2ad03d5/kuripapango-campsite-1920.jpg`.
- **Coverage (16 Nov):** 1,159 places have a DOC photo: 925 of the 928 in the GitHub repo, plus 234 that have none
  today. 48 DOC pages have no photo, 6 pages are gone (404: campsites 100037922, 100038010, 100094138, 100100774,
  100133707 and hut 100031574), and one didn't resolve. The 3 GitHub-only photos stay on GitHub as the fallback.
- **Sizes:** DOC serves each photo in several sizes from the same path: `thumbs/gallery/<path>` (460×300, ~35 KB) for
  lists and cards, `thumbs/hero/<path>` (1066×600, ~150 KB) for a place's page, and `<path>` itself (the original,
  up to ~450 KB).
- **Serving:** DOC's site is behind Cloudflare (`cache-control: public, max-age=1800`), answers other sites'
  pages normally, and costs us nothing to serve. Photos keep the place pages' existing credit, "DOC, CC BY 4.0".
- **Refresh:** rerun the script monthly; DOC changes a place's photo rarely, and a changed photo has a new path.
  A photo that stops loading falls back to the GitHub copy, then to no photo.
- **App (a separate job for the app):** look up the DOC path for a place, load `thumbs/gallery/` or `thumbs/hero/`
  from `https://www.doc.govt.nz/`, and keep the GitHub address as the fallback, so older versions and missing
  photos still work.
- **Site:** `scripts/export-places.mjs` takes the DOC path first and keeps the GitHub address as the fallback.
