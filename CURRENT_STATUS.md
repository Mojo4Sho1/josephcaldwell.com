# CURRENT_STATUS.md

# Joseph Caldwell Personal Website — Current Status

This is the living handoff document for the project. It is intended to be skimmable after time away. Update it after any meaningful project change. See `AGENTS.md` §26 for the update rule.

## 1. Project Stage
- Current stage: Stage 4 — Page Scaffolds (complete).
- Stage status: Stage 4 page scaffolds implemented, validated on Node 22, and committed. Stage 5 has intentionally not been started.
- Last meaningful change: Added routable scaffolds for every v1 page under `src/pages/`, including dynamic detail templates for projects, dashboards, and writing using Astro content collections, plus a 404 page and small style additions for scaffold/empty-state copy.

## 2. Last Updated
- Date: 2026-05-07
- Updated by: Stage 4 validation and checkpoint pass.
- Related commit: Stage 4 committed and pushed as `Add page scaffolds`. Previous checkpoint on `main` is `40904aa Add layout foundation and content model schemas`.
- Notes: Validation was re-run on Node 22 (per `.nvmrc`) before this commit. The prior Stage 4 implementation pass had run validation on Node 24; the Node 22 re-run produced equivalent results.

## 3. Current Repo State
- Astro 6 scaffold unchanged. `astro.config.mjs` still sets `site: "https://mojo4sho1.github.io"` and `base: "/josephcaldwell.com"`.
- Stage 2 + Stage 3 foundation unchanged: `BaseLayout`, `SiteHeader`, `SiteFooter`, `SkipLink`, `withBase()`, `tokens.css`, `global.css`, content collections, and typed singleton data files.
- Stage 4 additions:
  - `src/pages/index.astro` — minimal homepage updated to mention scaffold structure is in place; final hero copy and featured items deferred.
  - `src/pages/research.astro` — scaffold placeholder.
  - `src/pages/agentic-systems.astro` — scaffold placeholder.
  - `src/pages/projects/index.astro` — collection index using `getCollection("projects")`, filtered to `visibility ∈ {public, sanitized, synthetic-demo}`, with accessible empty state.
  - `src/pages/projects/[slug].astro` — `getStaticPaths()` against the projects collection with the same visibility filter; uses `entry.data.slug` for params.
  - `src/pages/dashboards/index.astro` — collection index, same filter and empty-state pattern.
  - `src/pages/dashboards/[slug].astro` — detail template, same filter.
  - `src/pages/teaching.astro` — scaffold placeholder.
  - `src/pages/writing/index.astro` — collection index, same filter and empty-state pattern.
  - `src/pages/writing/[slug].astro` — detail template, same filter.
  - `src/pages/cv.astro` — scaffolded CV page reading `src/data/cv.ts`. Uses `node:fs` at build time to detect whether `public/cv/Joseph_Caldwell_CV.pdf` exists; today the file is absent, so the page shows a clear scaffold notice. The PDF link uses `withBase()` so it survives the configured base path.
  - `src/pages/about.astro` — scaffold placeholder.
  - `src/pages/contact.astro` — renders verified non-empty entries from `src/data/links.ts` only; today this surfaces LinkedIn and Caldwell Consulting & Design (the only entries with verified URLs). Empty-string TODO links are intentionally omitted.
  - `src/pages/404.astro` — minimal 404 with a base-path-aware link back to Home.
  - `src/styles/global.css` — minimal additions for `.lede`, `.scaffold-notice`, `.empty-state`, and `.entry-list`. No new CSS framework or design system.
- All internal links go through `withBase()` from `src/utils/paths.ts`. No raw root-relative links were introduced in rendered markup.
- `.gitignore` now ignores `.claude/`. The local `.claude/` directory was removed from the working tree during Phase A.

## 4. Completed Work
- Stage 0 — Repository Planning and Scaffolding.
- Stage 1 — Astro Initialization.
- Stage 2 — Base Layout and Global Styling.
- Stage 3 — Content Model Implementation.
- Stage 4 — Page Scaffolds (this stage):
  - Routable scaffolds for every v1 page under `src/pages/`.
  - Dynamic detail routes for projects, dashboards, and writing using `getStaticPaths()` against the corresponding content collections, filtered to publicly renderable visibility.
  - Custom 404 page.
  - Minimal scaffold/empty-state styles in `global.css`.

## 5. Active Technical Decisions
Preserve these unless explicitly revisited:
- Astro static-first; no SSR, no backend, no database, no auth.
- MDX is enabled but plain Markdown is the default authoring format.
- Vanilla CSS with CSS custom properties. No Tailwind. No CSS-in-JS.
- System font stack for version 1.
- No dark mode for version 1.
- No animation libraries; no JavaScript-driven nav menu.
- About lives in the **main navigation** for v1.
- Header is non-sticky for v1.
- All internal links go through `withBase()` from `src/utils/paths.ts`. Do not hand-write base-path-relative strings in components.
- Initial deployment target is GitHub Pages as a project site at `https://<github-username>.github.io/josephcaldwell.com/`. Astro `base` is `/josephcaldwell.com` and must remain so until a custom-domain deployment is configured.
- Talks live under Writing (`type: "talk"`) — no separate `/talks/` page or collection in v1.
- No RSS feed for v1.
- `status` describes lifecycle/maturity; `visibility` describes exposure/publication safety. `status: "private"` is not a valid value for any content type.
- Public-renderable visibility set: `{public, sanitized, synthetic-demo}`. Index and detail routes filter on this set so private and internal entries never accidentally surface.
- Plan-of-record dependencies through Stage 9: Astro, `@astrojs/mdx`, `@astrojs/sitemap` (when added), TypeScript, and `zod` (via Astro). Stage 4 added no dependencies.

## 6. Validation Status
All run with `ASTRO_TELEMETRY_DISABLED=1` on Node 22.22.2 (npm 10.9.7). Astro version 6.2.2.
- `npm run build` — passed (11 pages built; six expected `[glob-loader] No files found …` warnings, one per empty content directory; three `The collection "<name>" does not exist or is empty` notices for dashboards/projects/writing during static-route generation, expected because those collections are intentionally empty until Stage 6).
- `npm run dev -- --host 127.0.0.1` — passed. Server ready at `http://127.0.0.1:4321/josephcaldwell.com`. Stopped immediately after readiness.
- `npm run preview -- --host 127.0.0.1` — passed. Server ready at the same path. Stopped immediately after readiness.

## 7. Known Issues, Risks, or Blockers
- None blocking Stage 5.
- Watch items:
  - `astro.config.mjs` still uses `site: "https://mojo4sho1.github.io"`. Both `site` and `base` must change when the custom domain is configured. Tracked for Stage 10/11.
  - `BaseLayout` does not yet emit a canonical URL or Open Graph metadata. Deferred to Stage 9.
  - Glob-loader warnings appear once per empty collection on every build until Stage 6 lands real entries; ignore until then.
  - Several entries in `src/data/links.ts` (email, GitHub, Google Scholar, ORCID) are empty-string placeholders marked with TODO comments. The contact page already filters those out, but verified values are required before the first public deploy (`AGENTS.md` §23a).
  - `public/cv/Joseph_Caldwell_CV.pdf` does not exist yet. The CV page detects this at build time and shows a scaffold notice instead of a broken download link. Stage 7 owns the PDF.
  - Node 22 is pinned in `.nvmrc`. Run `nvm use` (or `nvm use 22`) before installing, building, or validating; do not work on a different Node major version. See `AGENTS.md` §23.

## 8. Next Recommended Step
Begin Stage 5 — Reusable Components, as defined in `IMPLEMENTATION_PLAN.md`:
- Build the small set of presentational components called for in `AGENTS.md` §12 (`SectionHeading`, `ProjectCard`, `DashboardCard`, `ResearchThemeCard`, `WritingItemCard`, `TeachingEntryCard`, `AgenticSystemCard`, `ExternalLinkList`, `CVDownloadBlock`, `StatusBadge`, `TagList`).
- Each card accepts a typed prop matching its content collection schema; no `any` types.
- Replace the inline `entry-list` markup on the projects/dashboards/writing index pages with the new cards once they exist.
- Stage 5 must not introduce real content entries — that remains Stage 6.

## 9. Do Not Do Yet
Explicitly deferred:
- Reusable card components (`ProjectCard`, `DashboardCard`, etc.) — Stage 5.
- Final homepage hero, final page copy, featured cards — later stages.
- Real content entries in any collection — Stage 6.
- CV PDF in `public/cv/` — Stage 7.
- Dashboard demo wiring — Stage 8.
- Canonical URL, Open Graph, sitemap, `robots.txt`, favicon, default OG image — Stage 9.
- GitHub Actions deployment workflow — Stage 10.
- Custom domain / VPS portability work — Stage 11.
- Dark mode, RSS, analytics, CMS, backend routes, server endpoints, authentication, database, conda environment.
- Adding dependencies beyond the plan-of-record set.

## 10. Handoff Notes for Future Agents
- Read `IMPLEMENTATION_PLAN.md` for the staged roadmap and `PROJECT_REVIEW.md` for outstanding decisions before changing direction.
- Run `nvm use` (Node 22) before `npm install` if you switch shells.
- If the Astro CLI complains about telemetry, run with `ASTRO_TELEMETRY_DISABLED=1`.
- Schema changes in `src/content.config.ts` regenerate types on `astro dev`/`astro build`. If types look stale, run `npx astro sync`.
- The site is served under `/josephcaldwell.com/` locally and in CI. Always go through `withBase()` from `src/utils/paths.ts`; do not hand-write `/research/`-style links.
- Header and footer pull their links from `src/data/navigation.ts`. Do not duplicate nav items in components.
- Site metadata lives in `src/data/site.ts`; CV metadata in `src/data/cv.ts`; external profile links in `src/data/links.ts`; homepage promotion config in `src/data/homepageFeatures.ts`. Shared cross-file types live in `src/data/types.ts`.
- Use `visibility` (not `status`) for public/private exposure. `status: "private"` is invalid in every collection.
- Index and detail routes filter on `visibility ∈ {public, sanitized, synthetic-demo}`. Do not change that set without an explicit decision; private and internal entries must never surface by default.
- `.claude/` is ignored. Per-machine agent-harness state stays out of the repo.
- Keep changes small and stage-scoped. Do not jump ahead in `IMPLEMENTATION_PLAN.md`.
- Update this file (`CURRENT_STATUS.md`) after any meaningful project change.
