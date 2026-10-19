import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedArticle, LocalizedGuides, LocalizedHome, LocalizedInformationPage, LocalizedTools } from "@/components/localized-site";
import { GuideArticle } from "@/components/guide-article";
import { SITE_URL, getArticleByLegacyPath } from "@/lib/site";
import { getTranslation, localizedArticles, publishedLocales } from "@/lib/localized";
import { localeForSegment, ogOf } from "@/lib/locales";
import { alternatesFor, defaultOgLocale } from "@/lib/seo";
import { exportRoutes, findRoute } from "@/lib/routes";
import { smartBannerContent } from "@/lib/app-store";

export const dynamicParams = false;

// This root segment carries two kinds of page:
//   /de, /es, ...        the localised sites
//   /<name>.html         articles already published and ranking on campingapp.nz
// Next.js allows only one dynamic segment per level, so both live here rather than in sibling routes.
// Both come from the route manifest (lib/routes.ts), the same list the sitemap and exporter use.
export function generateStaticParams() {
  return exportRoutes().flatMap((route) => {
    if (route.locale !== "en") {
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
    title:legacy.title,
    description:legacy.description,
    alternates:{canonical:legacy.legacyPath,languages:alternatesFor(`guide:${legacy.slug}`)},
    openGraph:{type:"article",siteName:"KiwiCamping",locale:defaultOgLocale,title:legacy.title,description:legacy.description,url:`${SITE_URL}${legacy.legacyPath}`,images:[{url:legacy.image,alt:legacy.imageAlt}]},
    twitter:{card:"summary_large_image",title:legacy.title,description:legacy.description,images:[legacy.image]},
  };
  const entry=localeForSegment(segment);
  if(!entry)return{};
  const locale=entry.code;
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
  const image=article?article.image:"/images/kiwicamping-hero.webp";
  // An incomplete translation still builds and renders (in English), but it must not compete with
  // the English site for the same words until its translation is complete. The manifest decides.
  const route=findRoute(canonical);
  const indexable=route?.indexable??false;
  return {
    // The locale root already carries the brand; every other page gets it from the layout template.
    title: path.length ? title : { absolute: title },
    description,
    keywords:ui.metaKeywords.split(", "),
    alternates:{canonical,languages:indexable&&route?alternatesFor(route.key):undefined},
    openGraph:{
      type:article?"article":"website",
      siteName:"KiwiCamping",
      locale:ogOf(locale),
      alternateLocale:[defaultOgLocale,...publishedLocales.filter((code)=>code!==locale).map((code)=>ogOf(code))],
      title:article?article.title:ui.ogTitle,
      description:article?article.description:ui.ogDescription,
      url,
      images:[{url:image,alt:article?article.imageAlt:"KiwiCamping"}],
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
  const entry=localeForSegment(segment);
  if(!entry)notFound();
  const locale=entry.code;
  if(path.length===0)return <LocalizedHome locale={locale}/>;
  if(path.length===1&&path[0]==="guides")return <LocalizedGuides locale={locale}/>;
  if(path.length===2&&path[0]==="guides")return <LocalizedArticle locale={locale} slug={path[1]}/>;
  if(path.length===1&&path[0]==="tools")return <LocalizedTools locale={locale}/>;
  if(path.length===1&&["support","privacy","terms"].includes(path[0]))return <LocalizedInformationPage locale={locale} kind={path[0] as "support"|"privacy"|"terms"}/>;
  notFound();
}
