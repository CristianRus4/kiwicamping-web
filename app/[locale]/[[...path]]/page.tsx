import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedArticle, LocalizedGuides, LocalizedHome, LocalizedInformationPage, LocalizedTools } from "@/components/localized-site";
import { GuideArticle } from "@/components/guide-article";
import { SITE_URL, getArticleByLegacyPath, guideArticles, legacyArticles } from "@/lib/site";
import { getTranslation, isLocale, localeCodes } from "@/lib/localized";

export const dynamicParams = false;

// This root segment carries two kinds of page:
//   /de, /es, ...        the localised sites
//   /<name>.html         articles already published and ranking on campingapp.nz
// Next.js allows only one dynamic segment per level, so both live here rather than in sibling routes.
export function generateStaticParams() {
  return [
    ...localeCodes.flatMap((locale) => [
      { locale, path: [] }, { locale, path: ["guides"] }, { locale, path: ["tools"] }, { locale, path: ["support"] }, { locale, path: ["privacy"] }, { locale, path: ["terms"] },
      ...guideArticles.map((article) => ({ locale, path: ["guides", article.slug] })),
    ]),
    ...legacyArticles.map((article) => ({ locale: article.legacyPath!.slice(1), path: [] as string[] })),
  ];
}

export async function generateMetadata({params}:{params:Promise<{locale:string;path?:string[]}>}):Promise<Metadata>{
  const {locale,path=[]}=await params;
  const legacy=getArticleByLegacyPath(`/${locale}`);
  if(legacy)return{
    title:legacy.title,
    description:legacy.description,
    alternates:{canonical:legacy.legacyPath},
    openGraph:{type:"article",title:legacy.title,description:legacy.description,url:`${SITE_URL}${legacy.legacyPath}`,images:[{url:legacy.image,alt:legacy.imageAlt}]},
  };
  if(!isLocale(locale))return{}; const translation=getTranslation(locale); const ui=translation.ui; const slug=path[0]==="guides"&&path[1]; const translatedArticles=translation.articles as Record<string,{title:string}>; const article=slug?translatedArticles[slug]:undefined;
  const title=article&&typeof article==="object"&&"title" in article?String(article.title):path[0]==="guides"?ui.guidesTitle:path[0]==="tools"?ui.toolsTitle:path[0]==="support"?ui.supportTitle:`KiwiCamping | ${ui.heroTitle}`;
  return {title,alternates:{canonical:`/${locale}/${path.join("/")}`},robots:{index:true,follow:true}};
}

export default async function LocalizedRoute({params}:{params:Promise<{locale:string;path?:string[]}>}){
  const {locale,path=[]}=await params;
  const legacy=getArticleByLegacyPath(`/${locale}`);
  if(legacy&&path.length===0)return <GuideArticle item={legacy}/>;
  if(!isLocale(locale))notFound();
  if(path.length===0)return <LocalizedHome locale={locale}/>;
  if(path.length===1&&path[0]==="guides")return <LocalizedGuides locale={locale}/>;
  if(path.length===2&&path[0]==="guides")return <LocalizedArticle locale={locale} slug={path[1]}/>;
  if(path.length===1&&path[0]==="tools")return <LocalizedTools locale={locale}/>;
  if(path.length===1&&["support","privacy","terms"].includes(path[0]))return <LocalizedInformationPage locale={locale} kind={path[0] as "support"|"privacy"|"terms"}/>;
  notFound();
}
