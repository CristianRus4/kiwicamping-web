import assert from "node:assert/strict";
import { test } from "node:test";
import { ALERT_SOURCES, FRESH_SECONDS, alerts } from "../places-worker/src/alerts.js";

const SITE = { url: "https://campingapp.nz" };
class FakeCache {
  constructor() { this.store = new Map(); }
  async match(request) { const hit = this.store.get(request.url); return hit ? hit.clone() : undefined; }
  async put(request, response) { this.store.set(request.url, response.clone()); }
}
class FakeBucket {
  constructor() { this.objects = new Map(); }
  async get(key) { const o = this.objects.get(key); return o ? { body: o.body, customMetadata: o.meta } : null; }
  async put(key, body, options = {}) { this.objects.set(key, { body: String(body), meta: options.customMetadata ?? {} }); }
}
const DOC_JSON = '[{"assetId":1,"name":"Camp","alerts":[{"heading":"Closed","detail":"Slip"}]}]';
const get = (kind, method = "GET") => new Request(`https://campingapp.nz/api/alerts/${kind}`, { method });

test("fetches DOC with the server key, returns its JSON unchanged and keeps it 6 hours", async () => {
  const cache = new FakeCache(), env = { DOC_API_KEY: "server-key", LINKS: new FakeBucket() };
  const calls = [];
  const fetcher = async (url, init) => { calls.push([url, init.headers["x-api-key"]]); return new Response(DOC_JSON, { status: 200 }); };
  const first = await alerts(get("campsites"), env, null, SITE, "campsites", { fetcher, cache });
  assert.equal(first.status, 200);
  assert.equal(await first.text(), DOC_JSON);
  assert.equal(first.headers.get("cache-control"), `public, max-age=${FRESH_SECONDS}`);
  assert.ok(first.headers.get("x-alerts-fetched-at"));
  assert.deepEqual(calls, [[ALERT_SOURCES.campsites, "server-key"]]);
  assert.equal(env.LINKS.objects.get("alerts/campsites.json").body, DOC_JSON);
  // The second request comes from the cache: DOC isn't asked again.
  const second = await alerts(get("campsites"), env, null, SITE, "campsites", { fetcher, cache });
  assert.equal(await second.text(), DOC_JSON);
  assert.equal(calls.length, 1);
});

test("serves the last good answer when DOC fails, and says so", async () => {
  const env = { DOC_API_KEY: "server-key", LINKS: new FakeBucket() };
  await env.LINKS.put("alerts/huts.json", DOC_JSON, { customMetadata: { fetchedAt: "2026-11-16T00:00:00.000Z" } });
  for (const fetcher of [async () => new Response("down", { status: 503 }), async () => new Response("not json", { status: 200 }), async () => { throw new Error("timeout"); }]) {
    const response = await alerts(get("huts"), env, null, SITE, "huts", { fetcher, cache: new FakeCache() });
    assert.equal(response.status, 200);
    assert.equal(await response.text(), DOC_JSON);
    assert.equal(response.headers.get("x-alerts-stale"), "1");
    assert.equal(response.headers.get("x-alerts-fetched-at"), "2026-11-16T00:00:00.000Z");
  }
});

test("without a key or a saved copy it answers 503; unknown kinds 404; only GET and HEAD", async () => {
  const env = { LINKS: new FakeBucket() };
  let asked = false;
  const fetcher = async () => { asked = true; return new Response(DOC_JSON); };
  const none = await alerts(get("tracks"), env, null, SITE, "tracks", { fetcher, cache: new FakeCache() });
  assert.equal(none.status, 503);
  assert.equal(asked, false);
  assert.equal((await alerts(get("rivers"), env, null, SITE, "rivers", { fetcher, cache: new FakeCache() })).status, 404);
  assert.equal((await alerts(get("tracks", "POST"), env, null, SITE, "tracks", { fetcher, cache: new FakeCache() })).status, 405);
  const head = await alerts(get("tracks", "HEAD"), { DOC_API_KEY: "k", LINKS: new FakeBucket() }, null, SITE, "tracks", { fetcher, cache: new FakeCache() });
  assert.equal(head.status, 200);
  assert.equal(await head.text(), "");
});
