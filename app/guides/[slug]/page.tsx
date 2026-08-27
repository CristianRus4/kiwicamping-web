import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/guide-article";
import { SITE_URL, getArticle, guideArticles } from "@/lib/site";
import { seoLanguageTags } from "@/lib/seo";

// Articles with a legacyPath are served at their existing campingapp.nz URL instead, so they are
// deliberately absent here — one page, one live URL.
export function generateStaticParams() {
  return guideArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getArticle(slug);
  if (!item || item.legacyPath) return {};
  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: `/guides/${item.slug}/`, languages: seoLanguageTags(`/guides/${item.slug}`) },
    openGraph: {
      type: "article",
      siteName: "KiwiCamping",
      locale: "en_NZ",
      title: item.title,
      description: item.description,
      url: `${SITE_URL}/guides/${item.slug}`,
      images: [{ url: item.image, alt: item.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: item.title, description: item.description, images: [item.image] },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getArticle(slug);
  if (!item || item.legacyPath) notFound();
  return <GuideArticle item={item} />;
}
