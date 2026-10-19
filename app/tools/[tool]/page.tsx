import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolPage } from "@/components/tool-page";
import { SITE_URL } from "@/lib/site";
import { toolAlternates, toolBySlug, toolCopy, toolIds, toolPath, tools } from "@/lib/tools";

export const dynamicParams = false;

export function generateStaticParams() {
  return toolIds.map((id) => ({ tool: tools[id].slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ tool: string }> }): Promise<Metadata> {
  const id = toolBySlug((await params).tool);
  if (!id) return {};
  const { tool } = toolCopy("en", id);
  const url = toolPath("en", id);
  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    alternates: { canonical: url, languages: toolAlternates(id) },
    openGraph: { type: "website", siteName: "KiwiCamping", locale: "en_NZ", title: tool.metaTitle, description: tool.metaDescription, url: `${SITE_URL}${url}`, images: [{ url: "/images/kiwicamping-og.webp", width: 1200, height: 630, alt: "KiwiCamping" }] },
    twitter: { card: "summary_large_image", title: tool.metaTitle, description: tool.metaDescription, images: ["/images/kiwicamping-og.webp"] },
  };
}

export default async function ToolRoute({ params }: { params: Promise<{ tool: string }> }) {
  const id = toolBySlug((await params).tool);
  if (!id) notFound();
  return <ToolPage id={id} locale="en" />;
}
