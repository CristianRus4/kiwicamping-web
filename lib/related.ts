import { linkedSlugs } from "@/lib/internal-links";
import type { Article } from "@/lib/site";

/**
 * The three related guides under an article.
 *
 * It used to be the first three guides sharing the category or the region, in source order, so
 * the same handful of early guides filled the strip everywhere. Now each candidate is scored on
 * what actually connects it to this guide:
 *
 *   3 per place both guides name · 2 for the same region · 1 for the same category
 *   + 2 when this guide's prose already links to it
 *
 * Hand-picked `related` slugs on the article come first. At least one of the three is from another
 * category, so a reader can step sideways (a rules guide to a cost guide) rather than only deeper.
 * Ties keep source order, so the result is stable from build to build.
 *
 * `pool` is the list the cards are drawn from (English, or a locale's localized articles); scoring
 * always uses the English source, so every edition shows the same three guides.
 */
export function relatedArticles<T extends { slug: string }>(article: Article, pool: readonly T[], source: readonly Article[], count = 3): T[] {
  const bySlug = new Map(pool.map((item) => [item.slug, item]));
  const linked = linkedSlugs(article.sections, article.slug);
  const places = new Set(article.places);
  const score = (candidate: Article) =>
    3 * candidate.places.filter((place) => places.has(place)).length
    + (candidate.region === article.region ? 2 : 0)
    + (candidate.category === article.category ? 1 : 0)
    + (linked.has(candidate.slug) ? 2 : 0);

  const curated = (article.related ?? []).filter((slug) => slug !== article.slug && bySlug.has(slug));
  const ranked = source
    .map((candidate, index) => ({ candidate, index, score: score(candidate) }))
    .filter(({ candidate }) => candidate.slug !== article.slug && bySlug.has(candidate.slug) && !curated.includes(candidate.slug))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map(({ candidate }) => candidate);

  const chosen = [...curated, ...ranked.map((candidate) => candidate.slug)].slice(0, count);
  const category = (slug: string) => source.find((item) => item.slug === slug)?.category;
  if (chosen.length === count && chosen.every((slug) => category(slug) === article.category)) {
    const sideways = ranked.find((candidate) => candidate.category !== article.category);
    // Replace the weakest scored pick, never a hand-picked one.
    const replaceAt = chosen.length - 1 >= curated.length ? chosen.length - 1 : -1;
    if (sideways && replaceAt >= 0) chosen[replaceAt] = sideways.slug;
  }
  return chosen.map((slug) => bySlug.get(slug)!);
}
