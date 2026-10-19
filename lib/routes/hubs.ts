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
