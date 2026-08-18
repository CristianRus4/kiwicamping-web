import { notFound, redirect } from "next/navigation";
import { getArticle, articleHref } from "@/lib/site";

export default async function LegacyArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getArticle(slug);
  if (!item) notFound();
  redirect(articleHref(item));
}
