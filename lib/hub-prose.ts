/**
 * Hand-written prose for each data hub, keyed by hub id (see lib/data/hubs.json).
 *
 * Written from that hub's own data record. scripts/audit-hubs.mjs fails the build if a paragraph
 * names a number or a proper noun that is not in the hub's record or in the `sources` it cites, so
 * any council, park or rule named here needs its official page listed in `sources`.
 *
 * A hub without at least 250 words here is built but noindex (lib/hubs.ts).
 */
export type HubProse = {
  paragraphs: string[];
  /** Official pages the prose relies on beyond the DOC data: council bylaws, DOC pages. */
  sources?: { label: string; url: string }[];
};

export const hubProse: Record<string, HubProse> = {};
