import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedArticle, LocalizedGuides, LocalizedHome, LocalizedInformationPage, LocalizedTools } from "@/components/localized-site";
import { GuideArticle } from "@/components/guide-article";
import { SITE_URL, getArticleByLegacyPath } from "@/lib/site";
import { getTranslation, localizedArticles } from "@/lib/localized";
import { routedLocaleForSegment } from "@/lib/locales";
import { alternatesFor, articleOgImage, defaultOgLocale, guideTitle, homeOgImage, ogAlternates, ogLocale } from "@/lib/seo";
import { exportRoutes, routeAt } from "@/lib/routes";
import { guidePageKey } from "@/lib/routes/guides";
import { smartBannerContent } from "@/lib/app-store";
import { ToolPage } from "@/components/tool-page";
import { toolBySlug, toolCopy } from "@/lib/tools";

export const dynamicParams = false;

// This root segment carries two kinds of page:
//   /de, /es, ...        the localised sites
//   /<name>.html         articles already published and ranking on campingapp.nz
// Next.js allows only one dynamic segment per level, so both live here rather than in sibling routes.
// Both come from the route manifest (lib/routes.ts), the same list the sitemap and exporter use.
export function generateStaticParams() {
  return exportRoutes().filter((route) => route.kind !== "crawler").flatMap((route) => {
    if (route.locale !== "en") {
      // Localised hubs have their own routes (app/[locale]/camping/, huts/, freedom-camping/).
      if (route.kind === "hub") return [];
      const [locale, ...path] = route.path.split("/").filter(Boolean);
      return [{ locale, path }];
    }
    return route.path.endsWith(".html") && route.path.split("/").length === 2 ? [{ locale: route.path.slice(1), path: [] as string[] }] : [];
  });
}

export async function generateMetadata({params}:{params:Promise<{locale:string;path?:string[]}>}):Promise<Metadata>{
  const {locale:segment,path=[]}=await params;
  const legacy=getArticleByLegacyPath(`/${segment}`);
  if(legacy)return{
    title:guideTitle(legacy.title),
    description:legacy.description,
    alternates:{canonical:legacy.legacyPath,languages:alternatesFor(guidePageKey(legacy.slug))},
    openGraph:{type:"article",siteName:"KiwiCamping",locale:defaultOgLocale,title:legacy.title,description:legacy.description,url:`${SITE_URL}${legacy.legacyPath}`,images:[{...articleOgImage(legacy.slug),alt:legacy.imageAlt}]},
    twitter:{card:"summary_large_image",title:legacy.title,description:legacy.description,images:[{...articleOgImage(legacy.slug),alt:legacy.imageAlt}]},
  };
  const locale=routedLocaleForSegment(segment);
  if(!locale)return{};
  const toolId=path[0]==="tools"&&path.length===2?toolBySlug(path[1]):undefined;
  if(toolId){
    const {tool}=toolCopy(locale,toolId);
    const canonical=`/${segment}/tools/${path[1]}/`;
    const route=routeAt(canonical);
    const indexable=route?.indexable??false;
    return{
      title:tool.metaTitle,
      description:tool.metaDescription,
      alternates:{canonical,languages:indexable&&route?alternatesFor(route.pageKey):undefined},
      openGraph:{type:"website",siteName:"KiwiCamping",locale:ogLocale(locale),alternateLocale:ogAlternates(locale),title:tool.metaTitle,description:tool.metaDescription,url:`${SITE_URL}${canonical}`,images:[{...homeOgImage,alt:"KiwiCamping"}]},
      robots:{index:indexable,follow:true,googleBot:{index:indexable,follow:true}},
      other:{"apple-itunes-app":smartBannerContent(locale)},
    };
  }
  const ui=getTranslation(locale);
  const slug=path[0]==="guides"?path[1]:undefined;
  const article=slug?localizedArticles(locale).find((item)=>item.slug===slug):undefined;
  const section=path[0];
  const title=article?article.title
    :section==="guides"?ui.metaGuidesTitle
    :section==="tools"?ui.metaToolsTitle
    :section==="support"?ui.metaSupportTitle
    :section==="privacy"?`${ui.privacy} | KiwiCamping`
    :section==="terms"?`${ui.terms} | KiwiCamping`
    :ui.metaTitle;
  const description=article?article.description
    :section==="guides"?ui.metaGuidesDescription
    :section==="tools"?ui.metaToolsDescription
    :section==="support"?ui.metaSupportDescription
    :ui.metaDescription;
  const canonical=`/${[segment,...path].join("/")}/`;
  const url=`${SITE_URL}${canonical}`;
  const image={...(article?articleOgImage(article.slug):homeOgImage),alt:article?article.imageAlt:"KiwiCamping"};
  // An incomplete translation still builds and renders (in English), but it must not compete with
  // the English site for the same words until its translation is complete. The manifest decides.
  const route=routeAt(canonical);
  const indexable=route?.indexable??false;
  return {
    // The locale root already carries the brand; every other page gets it from the layout template.
    title: !path.length ? { absolute: title } : article ? guideTitle(title) : title,
    description,
    keywords:ui.metaKeywords.split(", "),
    alternates:{canonical,languages:indexable&&route?alternatesFor(route.pageKey):undefined},
    openGraph:{
      type:article?"article":"website",
      siteName:"KiwiCamping",
      locale:ogLocale(locale),
      alternateLocale:ogAlternates(locale),
      title:article?article.title:ui.ogTitle,
      description:article?article.description:ui.ogDescription,
      url,
      images:[image],
    },
    twitter:{card:"summary_large_image",title:article?article.title:ui.ogTitle,description:article?article.description:ui.ogDescription,images:[image]},
    robots:{index:indexable,follow:true,googleBot:{index:indexable,follow:true,"max-image-preview":"large","max-snippet":-1}},
    other:{"apple-itunes-app":smartBannerContent(locale)},
  };
}

export default async function LocalizedRoute({params}:{params:Promise<{locale:string;path?:string[]}>}){
  const {locale:segment,path=[]}=await params;
  const legacy=getArticleByLegacyPath(`/${segment}`);
  if(legacy&&path.length===0)return <GuideArticle item={legacy}/>;
  const locale=routedLocaleForSegment(segment);
  if(!locale)notFound();
  if(path.length===0)return <LocalizedHome locale={locale}/>;
  if(path.length===1&&path[0]==="guides")return <LocalizedGuides locale={locale}/>;
  if(path.length===2&&path[0]==="guides")return <LocalizedArticle locale={locale} slug={path[1]}/>;
  if(path.length===1&&path[0]==="tools")return <LocalizedTools locale={locale}/>;
  const toolId=path.length===2&&path[0]==="tools"?toolBySlug(path[1]):undefined;
  if(toolId)return <ToolPage id={toolId} locale={locale}/>;
  if(path.length===1&&["support","privacy","terms"].includes(path[0]))return <LocalizedInformationPage locale={locale} kind={path[0] as "support"|"privacy"|"terms"}/>;
  notFound();
}
