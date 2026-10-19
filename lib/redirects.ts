/**
 * Old or mistyped URLs that must keep working, mapped to the page that replaced them.
 *
 * GitHub Pages cannot send a 301, so scripts/export-github-pages.mjs writes each source as a static
 * stub: an immediate meta refresh to the target, a canonical pointing at the target, `noindex`, and
 * a plain link for anything that ignores the refresh. A stub is never in a sitemap or in hreflang,
 * and the export fails if a source is also a real page or a target is not one.
 *
 * Add a line here, never a hand-written HTML file.
 */
export const redirects: Readonly<Record<string, string>> = {
  // A mistyped slug that collected impressions; the guide itself has always been east-cape.
  "/de/guides/east-camp-road-trip/": "/de/guides/east-cape-road-trip/",
};
