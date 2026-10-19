import { localeCodes, type LocaleCode } from "@/lib/localized";
import { isToolIndexable, isToolTranslated, toolIds, toolPath, tools } from "@/lib/tools";

/**
 * Routes the tools feature adds, in the shape the route manifest (lib/routes.ts) registers:
 * the five calculator pages in English and in every locale. /tools/ and /<locale>/tools/ already
 * exist and are not repeated here.
 *
 * A locale's tool page is built for visitors in every language, but it is indexable only once the
 * locale is live and that tool's `tools` strings are translated (lib/tools.ts).
 */
export type RouteEntry = { path: string; locale: string; kind: string; indexable: boolean };

export const toolRoutes: RouteEntry[] = [
  ...toolIds.map((id) => ({ path: toolPath("en", id), locale: "en", kind: "tool", indexable: true })),
  ...localeCodes.flatMap((locale) => toolIds.map((id) => ({ path: toolPath(locale, id), locale, kind: "tool", indexable: isToolIndexable(locale, id) }))),
];

/**
 * Whether the static export writes these pages yet. Until the route manifest feeds the exporter,
 * nothing may link to them: the exporter fails on a link to a page it did not write. Flip this
 * when tools.ts is registered in lib/routes.ts.
 */
export const TOOL_PAGES_EXPORTED = false;

/**
 * The same pages as `PageEntry`s for the route manifest (lib/routes.ts, foundation M2): register
 * `toolPages` in its feature list. Every locale has an edition; it is complete once that tool's
 * `tools` strings are translated.
 */
export function toolPages() {
  return toolIds.map((id) => ({
    key: `tool:${tools[id].slug}`,
    kind: "tool" as const,
    english: toolPath("en", id),
    localized: (locale: string) => toolPath(locale as LocaleCode, id),
    complete: (locale: string) => isToolTranslated(locale as LocaleCode, id),
  }));
}
