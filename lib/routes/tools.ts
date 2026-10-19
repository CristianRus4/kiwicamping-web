import { localeCodes } from "@/lib/localized";
import { isToolIndexable, toolIds, toolPath } from "@/lib/tools";

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
