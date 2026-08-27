import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedArticle, LocalizedGuides, LocalizedHome, LocalizedInformationPage, LocalizedTools } from "@/components/localized-site";
import { GuideArticle } from "@/components/guide-article";
import { SITE_URL, getArticleByLegacyPath, legacyArticles , sitePath} from "@/lib/site";
import { getTranslation, isLocale, isTranslated, localeCodes, localizedArticles } from "@/lib/localized";
import { defaultOgLocale, ogLocale, seoLanguageTags } from "@/lib/seo";

export const dynamicParams = false;

// This root segment carries two kinds of page:
//   /de, /es, ...        the localised sites
//   /<name>.html         articles already published and ranking on campingapp.nz
// Next.js allows only one dynamic segment per level, so both live here rather than in sibling routes.
export function generateStaticParams() {
  return [
    ...localeCodes.flatMap((locale) => [
      { locale, path: [] }, { locale, path: ["guides"] }, { locale, path: ["tools"] }, { locale, path: ["support"] }, { locale, path: ["privacy"] }, { locale, path: ["terms"] },
      // Every guide is published in every locale. Ones this locale has not finished translating
      // are served whole in English rather than as a mixture, so none of them is missing.
      ...localizedArticles(locale).map((article) => ({ locale, path: ["guides", article.slug] })),
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
    openGraph:{type:"article",siteName:"KiwiCamping",locale:"en_NZ",title:legacy.title,description:legacy.description,url:`${SITE_URL}${legacy.legacyPath}`,images:[{url:legacy.image,alt:legacy.imageAlt}]},
    twitter:{card:"summary_large_image",title:legacy.title,description:legacy.description,images:[legacy.image]},
  };
  if(!isLocale(locale))return{};
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
  const suffix=path.length?`/${path.join("/")}`:"";
  const url=`${SITE_URL}/${locale}${suffix}`;
  const image=article?article.image:"/images/kiwicamping-hero.webp";
  // An untranslated locale still builds and renders, but it must not compete with the English
  // site for the same words until a translator has filled its file in.
  const indexable=isTranslated(locale);
  return {
    // The locale root already carries the brand; every other page gets it from the layout template.
    title: path.length ? title : { absolute: title },
    description,
    keywords:ui.metaKeywords.split(", "),
    alternates:{canonical:sitePath(`/${locale}${suffix}`),languages:indexable?seoLanguageTags(suffix):undefined},
    openGraph:{
      type:article?"article":"website",
      siteName:"KiwiCamping",
      locale:ogLocale[locale],
      alternateLocale:[defaultOgLocale,...localeCodes.filter((code)=>code!==locale).map((code)=>ogLocale[code])],
      title:article?article.title:ui.ogTitle,
      description:article?article.description:ui.ogDescription,
      url,
      images:[{url:image,alt:article?article.imageAlt:"KiwiCamping"}],
    },
    twitter:{card:"summary_large_image",title:article?article.title:ui.ogTitle,description:article?article.description:ui.ogDescription,images:[image]},
    robots:{index:indexable,follow:true,googleBot:{index:indexable,follow:true,"max-image-preview":"large","max-snippet":-1}},
  };
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
