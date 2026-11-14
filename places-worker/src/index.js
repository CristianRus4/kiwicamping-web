/**
 * Runs only for requests that are not one of the extra place pages (those are served straight from the
 * static assets, see wrangler.jsonc). It passes them through to GitHub Pages, unchanged, so every other
 * page, the AASA file and the site's CSS and scripts keep coming from the one site.
 *
 * On campingapp.nz (the route campingapp.nz/places/*) a fetch of the same request goes to the origin,
 * GitHub Pages, without running the Worker again. On the workers.dev test address it fetches the same path
 * from campingapp.nz.
 */
const SITE = "https://campingapp.nz";

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = url.hostname === "campingapp.nz" || url.hostname === "www.campingapp.nz" ? request.url : `${SITE}${url.pathname}${url.search}`;
    return fetch(target, { method: request.method, headers: request.headers, body: request.body, redirect: "manual" });
  },
};
