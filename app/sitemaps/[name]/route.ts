import { sitemapFiles, sitemapXml } from "@/lib/sitemap";

export const dynamicParams = false;
export function generateStaticParams() {
  return sitemapFiles().map(({ name }) => ({ name: `${name}.xml` }));
}

/** One edition's sitemap, /sitemaps/<en|segment>.xml; see lib/sitemap.ts. */
export async function GET(_request: Request, { params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const xml = name.endsWith(".xml") ? sitemapXml(name.slice(0, -4)) : undefined;
  if (!xml) return new Response("Not found", { status: 404 });
  return new Response(xml, { headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public, max-age=3600" } });
}
