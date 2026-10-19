import type { ExportRoute } from "@/lib/routes";
import { routedLocales } from "@/lib/locales";
import { isToolIndexable, toolIds, toolPageKey, toolPath } from "@/lib/tools";

/**
 * The five calculator pages for the route manifest (lib/routes.ts): English, plus every routed locale.
 * A locale's tool page is built for visitors in every language, but it is indexable only once the
 * locale is live and that tool's `tools` strings are translated (lib/tools.ts). /tools/ itself is a
 * core page (lib/routes/pages.ts) and is not listed here.
 */
export function toolRoutes(): ExportRoute[] {
  return (["en", ...routedLocales] as const).flatMap((locale) => toolIds.map((id) => ({
    path: toolPath(locale, id), locale, kind: "tool" as const, indexable: isToolIndexable(locale, id), pageKey: toolPageKey(id),
  })));
}
