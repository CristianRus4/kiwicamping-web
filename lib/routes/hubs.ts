import type { ExportRoute } from "@/lib/routes";
import { builtHubs, hubGate, hubIndexIndexable, hubKinds, hubsDataAsOf } from "@/lib/hubs";

/**
 * The data hubs for the route manifest (lib/routes.ts): one index per hub kind, then every built hub.
 * English only for now. A hub below the quality gate is still exported for visitors (its URL exists
 * when the data grows) but is noindex, so it stays out of the sitemap, hreflang and the index listings
 * (lib/hubs.ts).
 */
export const hubIndexPageKey = (kind: string) => `hubs:${kind}`;
export const hubPageKey = (id: string) => `hub:${id}`;

export function hubRoutes(): ExportRoute[] {
  return [
    ...hubKinds.map((kind) => ({ path: `/${kind}/`, locale: "en" as const, kind: "hub" as const, indexable: hubIndexIndexable(kind), pageKey: hubIndexPageKey(kind), lastmod: hubsDataAsOf })),
    ...builtHubs.map((hub) => ({ path: hub.path, locale: "en" as const, kind: "hub" as const, indexable: hubGate(hub).indexable, pageKey: hubPageKey(hub.id), lastmod: hub.asOf })),
  ];
}
