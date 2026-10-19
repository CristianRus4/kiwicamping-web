import { builtHubs, hubGate, hubKinds, hubIndexIndexable } from "@/lib/hubs";
import type { RouteEntry } from "@/lib/routes/tools";

/**
 * Routes the data hubs add, in the shape the route manifest (lib/routes.ts) registers: one index per
 * hub kind and every built hub. English only for now. Hubs below the quality gate are built but
 * noindex, and stay out of the sitemap and out of the index listings (lib/hubs.ts).
 */
export const hubRoutes: RouteEntry[] = [
  ...hubKinds.map((kind) => ({ path: `/${kind}/`, locale: "en", kind: "hub-index", indexable: hubIndexIndexable(kind) })),
  ...builtHubs.map((hub) => ({ path: hub.path, locale: "en", kind: "hub", indexable: hubGate(hub).indexable })),
];

/**
 * Whether the static export writes these pages yet. Until the route manifest feeds the exporter,
 * nothing outside the hubs may link to them. Flip this when hubs.ts is registered in lib/routes.ts.
 */
export const HUB_PAGES_EXPORTED = false;

/**
 * The same pages as `PageEntry`s for the route manifest (lib/routes.ts, foundation M2): register
 * `hubPages` in its feature list. English only, so no locale edition. `englishIndexable` carries the
 * quality gate: a hub below it is exported for visitors but must stay noindex and out of the sitemap,
 * which the manifest has to honour (it otherwise treats every English page as indexable).
 */
export function hubPages() {
  return [
    ...hubKinds.map((kind) => ({ key: `hubs:${kind}`, kind: "hub" as const, english: `/${kind}/`, localized: () => null, complete: () => false, englishIndexable: hubIndexIndexable(kind) })),
    ...builtHubs.map((hub) => ({ key: `hub:${hub.id}`, kind: "hub" as const, english: hub.path, localized: () => null, complete: () => false, englishIndexable: hubGate(hub).indexable, lastmod: () => hub.asOf })),
  ];
}
