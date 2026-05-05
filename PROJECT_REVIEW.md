# PROJECT_REVIEW.md

# Joseph Caldwell Personal Academic Website — Planning Review

This document reviews the existing planning files (`DESIGN_BRIEF.md`, `CONTENT_MODEL.md`, `AGENTS.md`, `README.md`) prior to Astro scaffolding. It captures strengths, inconsistencies, missing decisions, implementation risks, recommended refinements, open questions for Joseph, and items to defer.

The planning files themselves were not modified. Recommendations that would require edits to those files are recorded here for review instead.

---

## 1. Summary of the Current Plan

The repository currently contains four planning files plus `LICENSE` and `.gitignore` (GitHub's Node template). The plan is for a static, content-driven Astro site presenting Joseph Caldwell as a PhD candidate, AI systems researcher, teacher, and systems-oriented builder. The unifying theme across all pages is *reliable AI systems for complex, evolving workflows*.

Key decisions already locked in:

- **Stack:** Astro, static output, Markdown/MDX content, TypeScript where useful.
- **Hosting:** GitHub Pages via GitHub Actions, with future portability to a VPS.
- **Identity:** Academic-first, with agentic software engineering presented as a serious systems-design direction (not casual prompting). Caldwell Consulting & Design may be linked but the personal site stays academic-first.
- **Site map (v1):** Home, Research, Agentic Systems, Projects, Dashboards, Teaching, Writing, CV, About, Contact.
- **Content model:** A rich set of content types (research themes, projects, agentic systems entries, dashboards, writing, teaching, talks, external links, CV asset, homepage feature) with shared field conventions and recommended status/visibility vocabularies.
- **Constraints:** No backend, no DB, no auth, no CMS, no analytics by default, no invented credentials, no private data exposure.

---

## 2. Strengths

- **Clear, repeatedly reinforced identity statement.** All three planning docs converge on the same one-line positioning, which makes it hard to drift during implementation.
- **Strong content-integrity discipline.** Explicit rules against inventing publications, awards, dates, and clients are stated in multiple places, and acceptable vs. unacceptable placeholder examples are given.
- **Privacy boundaries are explicit.** Especially for dashboards (synthetic data, sanitized screenshots, case studies) and for CV content (no home address, no private phone).
- **Content model is well-typed.** The shared field conventions (`title`, `slug`, `summary`, `status`, `visibility`, `featured`, `links`) make it straightforward to implement Astro content collection schemas with `zod`.
- **Static-first technical direction.** Avoiding backend/DB/auth/CMS keeps the site portable between GitHub Pages and a future VPS, which directly supports the stated portability goal.
- **Agentic-systems framing is serious and specific.** The design themes list (structured context management, tool orchestration, test-driven repair, failure-aware feedback loops, etc.) gives the Agentic Systems page real substance to organize content around, not just marketing language.
- **Business-site boundary is clearly drawn.** Acceptable and unacceptable phrasings are spelled out, which prevents drift toward sales copy.

---

## 3. Potential Inconsistencies

These are minor and do not block scaffolding, but should be reconciled before content goes live.

1. **Navigation list omits About.** `CONTENT_MODEL.md` §21 lists v1 navigation as Home / Research / Agentic Systems / Projects / Dashboards / Teaching / Writing / CV / Contact — no About. But `DESIGN_BRIEF.md` §6 and `AGENTS.md` §11 list `/about/` as a v1 page, and §7.9 of the brief specifies its content. Recommendation: include About in the main nav, or explicitly demote it to footer-only in `CONTENT_MODEL.md`.
2. **Repository structure references differ.** `README.md` and `DESIGN_BRIEF.md` §11 list the expected structure without `src/data/`, while `AGENTS.md` §4 and `CONTENT_MODEL.md` §15 include `src/data/`. The task itself instructs scaffolding `src/data/`, so the README and brief should be brought into alignment in a later pass.
3. **Status vocabularies overlap.** `CONTENT_MODEL.md` §3.2 includes `draft`, but the project-specific list in §5.4 omits `draft`; §19 lifecycle reintroduces `draft`. Worth picking one canonical list per content type.
4. **`status` vs `visibility` overlap.** `status: "private"` and `visibility: "private"` both exist. They mean different things (lifecycle vs. exposure) but the overlap in name will confuse content authors. Recommend keeping `status: private` only for projects that are deliberately not shipped, and using `visibility` to control public exposure.
5. **Talks content type vs. site map.** `CONTENT_MODEL.md` §14 recommends a `src/content/talks/` collection from day one, but `DESIGN_BRIEF.md` §6 lists `/talks/` as a *future* page. Talks can still live in `/writing/` initially via the Writing Item type (`type: talk`), so a separate `talks` collection isn't strictly needed for v1.
6. **MDX vs. Markdown.** Multiple docs say "Markdown or MDX" without picking. This is fine as a stance but the Astro scaffold has to choose at install time.
7. **`NOTICE.md` is referenced but not present.** `README.md` §"Licensing and Content Rights" mentions a possible future `NOTICE.md`. Not blocking, just a reminder.

---

## 4. Missing Decisions

Decisions that need to be made before or during Astro scaffolding:

1. **Content authoring approach.** Astro content collections (`src/content/`) with `zod` schemas, or simple typed data files (`src/data/`)? The content model leaves both open. Recommendation: **content collections + zod** for projects, research themes, dashboards, writing, agentic-systems entries, and teaching; **data files** for site config, navigation, external links, and CV metadata. This gives schema validation where there are many entries and simplicity where there's one config object.
2. **MDX or Markdown only.** Recommendation: enable MDX so we can embed components (e.g. diagrams, link cards) inside writing entries when needed, but author most content in plain Markdown.
3. **CSS strategy.** Vanilla CSS / CSS modules / Tailwind / something else. Recommendation: vanilla CSS with CSS custom properties and a small reset, scoped via Astro's component-level styles. This matches the "minimal dependencies, content-focused" stance and avoids a Tailwind upgrade cycle.
4. **Typography.** System font stack vs. self-hosted academic-friendly webfont (e.g. Inter, Source Serif). Recommendation: system stack for v1 to keep performance high; revisit if visual identity calls for custom typography.
5. **Color and accent.** Single muted accent color, neutral background, dark text. Specifics deferred (see §8).
6. **Dark mode.** Recommendation: defer to post-v1.
7. **Deployment target identity.** Will the site live at `josephcaldwell.com` (custom domain), `josephcaldwell.github.io` (user site), or `<user>.github.io/<repo>` (project site)? This determines Astro's `site` and `base` config, which affects every internal link from day one.
8. **GitHub repository name.** Tied to the above. If it's `josephcaldwell.github.io` we get root-path deployment for free; if it's `josephcaldwell.com` (this repo's directory name) we'll be on a project path until the custom domain is wired up.
9. **CV PDF source.** Is the PDF authored externally (LaTeX, Word) and dropped into `public/cv/`, or generated from a source file in this repo? Either is fine, but the workflow should be explicit.
10. **404 page.** Astro supports `src/pages/404.astro`. Recommendation: include in v1.
11. **`sitemap.xml` and `robots.txt`.** Recommendation: add the official `@astrojs/sitemap` integration and a basic `public/robots.txt` in v1.
12. **RSS for `/writing/`.** Recommendation: defer until there are at least a handful of writing entries.
13. **Open Graph / social preview image.** Recommendation: a single static OG image at `public/og-default.png` for v1; per-page overrides later.
14. **Favicon.** Recommendation: a simple SVG favicon in v1.
15. **Image pipeline.** Astro's built-in `<Image />` is fine; no extra service needed for v1.
16. **Recommended `NOTICE.md`.** If content rights matter (and the README hints they do), draft this in v1 alongside `LICENSE`.

---

## 5. Implementation Risks

1. **GitHub Pages base path.** The single biggest footgun. If the repo is deployed as a project page (`/josephcaldwell.com/`), every internal link, asset reference, and CV path must respect the base. Easiest mitigation: use Astro's `base` config and only ever link via `import.meta.env.BASE_URL` or Astro's path helpers — never raw `/cv/...` strings. Alternatively, deploy from a `josephcaldwell.github.io` user repo and skip this entirely.
2. **Custom-domain transition.** Moving from `*.github.io/repo` to `josephcaldwell.com` later changes the base path back to `/`. Doing this mid-life requires updating Astro config, the CNAME file, and possibly cached deploy artifacts.
3. **Astro content collection type generation.** Schema changes require `astro sync` to refresh generated types. Not a bug, just a workflow gotcha worth documenting in the README's local-dev section.
4. **CV PDF in git history.** Repeatedly updating the CV PDF in-place will bloat git history. Acceptable for a personal site; just be aware. Git LFS is overkill here.
5. **Privacy slips during scaffolding.** Placeholder content can quietly carry over into production. Mitigation: every placeholder uses a clearly fake identifier (`Placeholder ...`) and we add a pre-deploy review checklist before the first publish.
6. **VPS portability claim.** Compatible with Astro's static output, but is broken by anything requiring a server adapter (e.g. server endpoints, on-demand rendering, view transitions in non-static mode). Mitigation: pin `output: "static"` and treat any deviation as a deliberate decision.
7. **Accessibility regressions in card components.** Card UIs often use whole-card click targets that break keyboard navigation. Mitigation: use semantic `<a>` anchors with descriptive link text, not click-handlers on `<div>`.
8. **Agentic-systems content drift.** It's the most distinctive page; also the easiest one to drift toward marketing tone. Mitigation: keep the design-themes vocabulary as a literal field on agentic-systems entries so the language stays consistent.
9. **Dependency creep.** Each integration (`@astrojs/mdx`, `@astrojs/sitemap`, etc.) is small individually but adds up. Mitigation: enumerate dependencies in the implementation plan and require each addition to be justified.

---

## 6. Recommended Refinements

In priority order:

1. **Add About to navigation in `CONTENT_MODEL.md` §21**, or explicitly note it goes to the footer.
2. **Add `src/data/` to the expected repository structure** in `README.md` and `DESIGN_BRIEF.md` §11.
3. **Pick content collections + zod** as the primary approach for repeated content types; document this once in the content model.
4. **Pick MDX-enabled** so writing entries can embed components when useful.
5. **Pick vanilla CSS** with CSS custom properties for v1.
6. **Add a v1 deliverables checklist** that includes `404.astro`, `sitemap`, `robots.txt`, OG default image, and favicon — these are easy to forget and hard to retrofit.
7. **Add a deploy-readiness checklist** to `AGENTS.md` covering: no placeholder remnants in featured content, CV PDF privacy review, external links resolved, basic Lighthouse pass.
8. **Reconcile status vocabularies** so each content type has a single canonical list.
9. **Defer the `/talks/` collection** until the writing collection grows enough to need a split.

These refinements are recorded here rather than applied directly, per task constraints.

---

## 7. Questions for Joseph Before Full Implementation

These are the answers most likely to change the scaffolding:

1. **Deployment target.** Custom domain `josephcaldwell.com` from day one, or `<user>.github.io/<repo>` first and custom domain later?
2. **Repository name on GitHub.** Confirms the base path question.
3. **Should About appear in the main nav, or move to the footer?**
4. **Content authoring approach.** OK to commit to Astro content collections with zod schemas, or prefer typed `src/data/` files?
5. **MDX support.** Enable it now, or keep to plain Markdown until we hit a need?
6. **CSS approach.** Vanilla CSS / CSS modules / Tailwind / other?
7. **CV PDF.** Will the PDF be dropped into `public/cv/` from an external source (LaTeX, Word), or generated from a source file in this repo?
8. **Public contact details.** Which email, GitHub handle, LinkedIn URL, ORCID, Google Scholar, and Caldwell Consulting & Design URL should appear on `/contact/`? Placeholders are fine for scaffolding, but real values are needed before the first publish.
9. **External profiles to link from the CV page** beyond the standard set?
10. **Featured homepage content.** Which 3–6 items should be promoted on the home page initially? OK to scaffold with placeholders if not ready.
11. **Dark mode.** v1 or post-v1?
12. **RSS for `/writing/`.** v1 or post-v1?

A short answer to questions 1–7 unblocks all of Stages 1–3 in the implementation plan.

---

## 8. Suggested Decisions to Defer Until After Astro Scaffolding

Defer these — they're easier to decide once the scaffold exists and we can see the shape of things:

- **Final color palette and accent color.** Pick once a real layout is on screen.
- **Typography choice.** Test system stack first; revisit only if it visibly underdelivers.
- **Specific featured homepage content.** Easier once content collections have real entries.
- **Footer layout and contents.**
- **Whether the navigation needs a secondary menu** (only matters if it visibly crowds).
- **Image optimization tuning.** Astro defaults are fine until proven otherwise.
- **Dark mode implementation details.**
- **RSS feed.**
- **Lab page (`/lab/`), `/now/`, `/uses/`** and other future pages.
- **Custom-domain DNS and CNAME file.** Schedule once a deployment exists to point at.
- **VPS migration specifics** (reverse proxy, subdomains for dashboards).
- **Search.** Almost certainly never needed for a site this size, but explicitly defer.
- **Analytics.** Stay opted out by default.

---

## 9. Recommended Next Step

Once Joseph answers the unblocking questions in §7 (especially deployment target, repo name, content-authoring approach, and MDX/CSS choices), proceed with **Stage 1 — Astro initialization** in `IMPLEMENTATION_PLAN.md`.
