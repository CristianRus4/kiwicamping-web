import { englishLocale, htmlLang, routedLocaleForSegment } from "@/lib/locales";

/** The wrapper carries the edition's language. Legacy .html routes share this segment and are English. */
export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}) {
  const {locale}=await params;
  const code=routedLocaleForSegment(locale);
  return <div lang={code ? htmlLang(code) : englishLocale.htmlLang}>{children}</div>;
}
