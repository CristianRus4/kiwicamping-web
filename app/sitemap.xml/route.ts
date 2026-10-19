import { sitemapIndex } from "@/lib/sitemaps";

export const dynamic = "force-static";

/** The sitemap index robots.txt points at; see lib/sitemaps.ts. */
export function GET() {
  return sitemapIndex();
}
