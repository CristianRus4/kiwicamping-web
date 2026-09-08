# KiwiCamping marketing and operations

## Public-message rules

Use direct, practical New Zealand English. Explain real decisions, conditions,
costs, and tradeoffs. Avoid superlatives, generic SEO filler, invented ratings,
unverified prices, guaranteed availability, and claims of complete offline maps
or exhaustive campsite coverage.

The homepage and App Store handoff should show one coherent workflow: find a
place, understand it, save it, and turn it into a road trip. App screenshots,
testimonials, coverage numbers, paywall implications, and feature copy must be
checked against the current KiwiCamping target—not an older app or website.

## Editorial operations

- Use official transport, conservation, council, emergency, land-manager, and
  operator sources for rules and changing conditions.
- Date volatile prices and derive currency tables from the documented NZD
  benchmark rather than manually editing conversions.
- Review rules and safety content at least every six months and sooner after a
  relevant legal, booking, road, or agency change.
- Keep each article useful and distinct; similarity checks are a floor, not a
  substitute for editorial judgment.
- Use only local licensed images documented in `IMAGE-SOURCES.md`; keep the
  expected filename when replacing an article image.
- Regenerate manifests/credits and rerun checks after asset changes.

## Claim-change checklist

1. Verify the capability or count in `Apps/Camping`, including whether it is
   free, premium, online-only, regional, or availability-dependent.
2. Find every duplicate in site copy, metadata, structured data, FAQ, guides,
   `llms.txt`, QR/App Store material, and translations.
3. Update the website brief or research record when the approved fact changes.
4. Run the full check and review the rendered English and affected locales.
5. Coordinate the web publish with the app release when a claim depends on an
   unreleased app version.

## Release gate

```bash
npm ci
npm run check
npm run build:pages
```

Then inspect `pages-dist` through a static server and verify:

- home, guides, an article in each category, tools, support, privacy, and terms;
- responsive layout, keyboard use, focus, heading order, contrast, and images;
- App Store ID `6746952595`, QR destination, canonical URL, sitemap, robots,
  alternate languages, Open Graph, and structured data;
- no internal notes, placeholders, broken sources, missing credits, or stale
  locale structure;
- representative locale pages and English-only road-trip behavior.

`docs/WEBSITE-BRIEF.md` currently records an explicit hold on publishing the
rebuild until the advertised app version is public and the owner approves.
Meanwhile, `.github/workflows/pages.yml` deploys every push to `main`. Treat
that combination as a hard branch-management rule: do not merge held content to
main until the release gate is cleared.

## Deployment and rollback

Pushing to `main` runs the GitHub Pages workflow with Node 22, installs locked
dependencies, builds `pages-dist`, and deploys the artifact to the custom domain.
Afterward, check the workflow, custom domain, certificate, a deep route, and
static assets.

Rollback by reverting the faulty commit and allowing Pages to redeploy the last
known-good source. For incorrect safety or legal content, remove or correct the
page immediately and then complete the broader editorial audit.

## Nexus

The docs workflow and Pages workflow are independent. Nexus receives the root
README and `docs/**/*.md` only after the files are committed and pushed. Verify
both checks when documentation accompanies a release.
