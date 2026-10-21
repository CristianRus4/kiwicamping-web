import type { ExportRoute } from "@/lib/routes";
import { builtHubs, hubGate, hubIndexIndexable, hubKinds, hubsDataAsOf } from "@/lib/hubs";
import { isLocalizedHubIndexable, isLocalizedIndexIndexable, localizedHubPath, localizedHubs, localizedIndexPath } from "@/lib/hubs-localized";
import { routedLocales } from "@/lib/locales";

/**
 * The data hubs for the route manifest (lib/routes.ts): one index per hub kind, then every built hub,
 * in English; then, for every routed locale, the indexes and every hub whose English page is
 * indexable. A hub below the quality gate is still exported for visitors (its URL exists when the data
 * grows) but is noindex, so it stays out of the sitemap, hreflang and the index listings (lib/hubs.ts).
 * Every localised hub is noindex until the switch in lib/hubs-localized.ts is on and its translation
 * is complete.
 */
export const hubIndexPageKey = (kind: string) => `hubs:${kind}`;
export const hubPageKey = (id: string) => `hub:${id}`;

export function hubRoutes(): ExportRoute[] {
  return [
    ...hubKinds.map((kind) => ({ path: `/${kind}/`, locale: "en" as const, kind: "hub" as const, indexable: hubIndexIndexable(kind), pageKey: hubIndexPageKey(kind), lastmod: hubsDataAsOf })),
    ...builtHubs.map((hub) => ({ path: hub.path, locale: "en" as const, kind: "hub" as const, indexable: hubGate(hub).indexable, pageKey: hubPageKey(hub.id), lastmod: hub.asOf })),
    ...routedLocales.flatMap((locale) => [
      ...hubKinds.map((kind) => ({ path: localizedIndexPath(kind, locale), locale, kind: "hub" as const, indexable: isLocalizedIndexIndexable(kind, locale), pageKey: hubIndexPageKey(kind), lastmod: hubsDataAsOf })),
      ...localizedHubs.map((hub) => ({ path: localizedHubPath(hub, locale), locale, kind: "hub" as const, indexable: isLocalizedHubIndexable(hub, locale), pageKey: hubPageKey(hub.id), lastmod: hub.asOf })),
    ]),
  ];
}
