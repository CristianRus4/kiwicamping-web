import { sitemapIndexXml } from "@/lib/sitemap";

/** The sitemap index robots.txt points at; see lib/sitemap.ts. */
export function GET() {
  return new Response(sitemapIndexXml(), { headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public, max-age=3600" } });
}
