import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/guide-article";
import { SITE_URL, getArticle, sitePath } from "@/lib/site";
import { alternatesFor, articleOgImage, defaultOgLocale, guideTitle } from "@/lib/seo";
import { exportRoutes } from "@/lib/routes";
import { guidePageKey } from "@/lib/routes/guides";

// Articles with a legacyPath are served at their existing campingapp.nz URL instead, so the
// manifest never lists them under /guides/: one page, one live URL.
export function generateStaticParams() {
  return exportRoutes().filter((route) => route.locale === "en" && route.kind === "guide" && route.path.startsWith("/guides/")).map((route) => ({ slug: route.path.split("/")[2] }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getArticle(slug);
  if (!item || item.legacyPath) return {};
  return {
    title: guideTitle(item.title),
    description: item.description,
    alternates: { canonical: `/guides/${item.slug}/`, languages: alternatesFor(guidePageKey(item.slug)) },
    openGraph: {
      type: "article",
      siteName: "KiwiCamping",
      locale: defaultOgLocale,
      title: item.title,
      description: item.description,
      url: `${SITE_URL}${sitePath(`/guides/${item.slug}`)}`,
      images: [{ ...articleOgImage(item.slug), alt: item.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: item.title, description: item.description, images: [{ ...articleOgImage(item.slug), alt: item.imageAlt }] },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getArticle(slug);
  if (!item || item.legacyPath) notFound();
  return <GuideArticle item={item} />;
}
