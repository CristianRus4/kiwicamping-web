/**
 * DOC closure alerts through the website, so the app needs no DOC key of its own (docs/places-cloudflare.md):
 *
 *   GET /api/alerts/campsites   https://api.doc.govt.nz/v2/campsites/alerts
 *   GET /api/alerts/huts        https://api.doc.govt.nz/v2/huts/alerts
 *   GET /api/alerts/tracks      https://api.doc.govt.nz/v1/tracks/alerts
 *
 * Each fetches DOC with the server's key (the Worker secret DOC_API_KEY, sent as x-api-key like the app does),
 * keeps the answer 6 hours in the data centre's cache, saves every good answer to alerts/<kind>.json in the LINKS
 * bucket, and serves that copy when DOC fails or has no key yet. DOC's JSON is returned byte for byte; the
 * X-Alerts-Fetched-At header says when it was fetched (for the app's "as of" line), and X-Alerts-Stale: 1 marks the
 * saved copy.
 */
export const ALERT_SOURCES = {
  campsites: "https://api.doc.govt.nz/v2/campsites/alerts",
  huts: "https://api.doc.govt.nz/v2/huts/alerts",
  tracks: "https://api.doc.govt.nz/v1/tracks/alerts",
};
export const FRESH_SECONDS = 6 * 60 * 60;
const TIMEOUT_MS = 15_000;

const reply = (body, status, headers = {}) =>
  new Response(body, { status, headers: { "content-type": "application/json; charset=utf-8", ...headers } });

/** DOC's answer as text if it is a 200 with JSON, else null. */
async function fromDoc(source, key, fetcher) {
  if (!key) return null;
  try {
    const response = await fetcher(source, { headers: { "x-api-key": key, accept: "application/json" }, signal: AbortSignal.timeout(TIMEOUT_MS) });
    if (!response.ok) return null;
    const text = await response.text();
    JSON.parse(text);
    return text;
  } catch {
    return null;
  }
}

/** Answers /api/alerts/<kind>. `fetcher` and `cache` are there for the tests. */
export async function alerts(request, env, ctx, site, kind, { fetcher = fetch, cache = globalThis.caches?.default } = {}) {
  if (request.method !== "GET" && request.method !== "HEAD") return reply(JSON.stringify({ error: "method not allowed" }), 405, { allow: "GET, HEAD" });
  const source = ALERT_SOURCES[kind];
  if (!source) return reply(JSON.stringify({ error: "not found" }), 404);
  const head = (response) => (request.method === "HEAD" ? new Response(null, response) : response);

  const cacheKey = new Request(`${site.url}/__alerts/${kind}`);
  const hit = await cache?.match(cacheKey);
  if (hit) return head(hit);

  const body = await fromDoc(source, env.DOC_API_KEY, fetcher);
  if (body !== null) {
    const fetchedAt = new Date().toISOString();
    const headers = { "cache-control": `public, max-age=${FRESH_SECONDS}`, "x-alerts-fetched-at": fetchedAt };
    const saving = Promise.all([
      cache?.put(cacheKey, reply(body, 200, headers)),
      env.LINKS?.put(`alerts/${kind}.json`, body, { httpMetadata: { contentType: "application/json" }, customMetadata: { fetchedAt } }),
    ]).catch(() => {});
    if (ctx) ctx.waitUntil(saving); else await saving;
    return head(reply(body, 200, headers));
  }

  const saved = await env.LINKS?.get(`alerts/${kind}.json`);
  if (saved) {
    return head(reply(saved.body, 200, { "cache-control": "public, max-age=600", "x-alerts-fetched-at": saved.customMetadata?.fetchedAt ?? "", "x-alerts-stale": "1" }));
  }
  return reply(JSON.stringify({ error: env.DOC_API_KEY ? "DOC is not answering; try again later" : "alerts are not set up yet" }), 503, { "retry-after": "600", "cache-control": "no-store" });
}
