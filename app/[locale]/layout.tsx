import { englishLocale, htmlLang, routedLocaleForSegment, textDirection } from "@/lib/locales";

/** The wrapper carries the edition's language and direction. Legacy .html routes share this segment and are English. */
export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}) {
  const {locale}=await params;
  const code=routedLocaleForSegment(locale);
  return <div lang={code ? htmlLang(code) : englishLocale.htmlLang} dir={code ? textDirection(code) : "ltr"}>{children}</div>;
}
