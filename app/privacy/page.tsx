import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SUPPORT_EMAIL, SUPPORT_MAILTO } from "@/lib/site";
import { staticPages } from "@/lib/source-strings";
import { mainData } from "@/lib/analytics";

export const metadata: Metadata = { title: "Privacy policy", description: "How KiwiCamping handles app and website data.", alternates: { canonical: "/privacy/" } };

/** Rendered from the same English source the translations are made from, so the two never drift. */
export default function Privacy() {
  const page = staticPages.privacy;
  const last = page.sections.length - 1;
  return <><Header/><main className="legal-page" {...mainData({ kind: "legal", locale: "en" })}><p className="eyebrow">{page.effective}</p><h1>{page.title}</h1><p className="legal-lede">{page.lede}</p>
    {page.sections.map((section, index) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{index === last && <p><a href={SUPPORT_MAILTO}>{SUPPORT_EMAIL}</a></p>}</section>)}
  </main><Footer/></>;
}
