# CURRENT_STATUS.md

# Joseph Caldwell Personal Website — Current Status

This is the living handoff document for the project. It is intended to be skimmable after time away. Update it after any meaningful project change. See `AGENTS.md` §26 for the update rule.

## 1. Project Stage
- Current stage: Stage 3 — Content Model Implementation (complete)
- Stage status: Stage 3 complete and validated. Stage 4 has intentionally not been started.
- Last meaningful change: Defined Astro content collections with `zod` schemas in `src/content.config.ts`, stood up empty content directories for the v1 collections, added typed singleton data files (`cv.ts`, `links.ts`, `homepageFeatures.ts`, shared `types.ts`), and reconciled the `status` vs. `visibility` vocabulary in `CONTENT_MODEL.md` and `AGENTS.md`.

## 2. Last Updated
- Date: 2026-05-07
- Updated by: Stage 3 implementation pass.
- Related commit: not yet committed at the time of this update; previous commit on `main` is `c6bc5b9 Add project status handoff document`.
- Notes: Stage 2 changes are also still uncommitted on `main`; the working tree at the start of Stage 3 was the post–Stage 2 state.

## 3. Current Repo State
- Astro 6 scaffold initialized at the repo root with `output: "static"`, MDX integration, and strict TypeScript.
- `astro.config.mjs` still sets `site: "https://mojo4sho1.github.io"` and `base: "/josephcaldwell.com"` for GitHub Pages project-site deployment.
- Shared layout system from Stage 2 is unchanged: `BaseLayout`, `SiteHeader`, `SiteFooter`, `SkipLink`, `withBase()`, `tokens.css`, `global.css`, and the `BaseLayout`-wrapped placeholder homepage.
- Content model foundation (this stage):
  - `src/content.config.ts` — defines six collections (`researchThemes`, `projects`, `agenticSystems`, `dashboards`, `writing`, `teaching`) using the Astro 6 `glob` loader against `src/content/<collection>/`. Each collection has a `zod` schema with required `title`/`slug`/`summary`, narrowed per-type `status` enums, a shared `visibility` enum, and reusable `link`, `artifact`, and `screenshot` shapes.
  - `src/content/research-themes/`, `src/content/projects/`, `src/content/agentic-systems/`, `src/content/dashboards/`, `src/content/writing/`, `src/content/teaching/` — created and held open with `.gitkeep` markers. No content entries yet.
  - `src/data/types.ts` — shared `Visibility`, `ExternalLinkType`, `FeatureType` types used by the data files.
  - `src/data/cv.ts` — typed CV asset metadata pointing at `public/cv/Joseph_Caldwell_CV.pdf` (file not yet added; Stage 7 owns the PDF).
  - `src/data/links.ts` — external link list for email, GitHub, LinkedIn, Google Scholar, ORCID, and Caldwell Consulting & Design. LinkedIn and the business site use verified URLs; the rest are explicit empty-string TODO placeholders.
  - `src/data/homepageFeatures.ts` — typed feature shape with an intentionally empty `homepageFeatures` array; real featured content is deferred to Stage 6.
- Documentation reconciliation (this stage):
  - `CONTENT_MODEL.md` §3.2, §5.4, §7.3 (visibility), §14, §19 — `status` vs. `visibility` vocabulary made explicit, `status: "private"` removed everywhere, per-content-type status enums recorded, talks-under-writing for v1 reinforced.
  - `AGENTS.md` §13 — added the rule: use `visibility`, not `status`, to describe public/private/internal/sanitized/synthetic exposure.

## 4. Completed Work
- Stage 0 — Repository Planning and Scaffolding.
- Stage 1 — Astro Initialization (minimal Astro scaffold, MDX, static output, strict TS, project-site `base`).
- Stage 2 — Base Layout and Global Styling.
- Stage 3 — Content Model Implementation (this stage):
  - `src/content.config.ts` with six collections and `zod` schemas.
  - Empty `src/content/<collection>/` directories with `.gitkeep` markers.
  - `src/data/cv.ts`, `src/data/links.ts`, `src/data/homepageFeatures.ts`, `src/data/types.ts`.
  - `CONTENT_MODEL.md` and `AGENTS.md` minimal updates to reconcile `status` and `visibility`.

## 5. Active Technical Decisions
Preserve these unless explicitly revisited:
- Astro static-first; no SSR, no backend, no database, no auth.
- MDX is enabled but plain Markdown is the default authoring format.
- Vanilla CSS with CSS custom properties. No Tailwind. No CSS-in-JS.
- System font stack for version 1.
- No dark mode for version 1.
- No animation libraries; no JavaScript-driven nav menu (no hamburger).
- About lives in the **main navigation** for v1.
- Header is non-sticky for v1.
- All internal links go through `withBase()` from `src/utils/paths.ts`. Do not hand-write base-path-relative strings in components.
- Initial deployment target is GitHub Pages as a project site at `https://<github-username>.github.io/josephcaldwell.com/`. Astro `base` is `/josephcaldwell.com` and must remain so until a custom-domain deployment is configured.
- Talks live under Writing (`type: "talk"`) — no separate `/talks/` page or collection in v1.
- No RSS feed for v1.
- `status` describes lifecycle/maturity; `visibility` describes exposure/publication safety. `status: "private"` is not a valid value for any content type.
- Plan-of-record dependencies through Stage 9: Astro, `@astrojs/mdx`, `@astrojs/sitemap` (when added), TypeScript, and `zod` (via Astro). Stage 3 added no dependencies.

## 6. Validation Status
All run with `ASTRO_TELEMETRY_DISABLED=1`. Astro version 6.2.2.
- `npm run build` — passed (1 page built, ~1.2 s; six expected `[glob-loader] No files found …` warnings, one per empty content directory; schemas synced and types generated).
- `npm run dev -- --host 127.0.0.1` — passed. Server ready at `http://127.0.0.1:4321/josephcaldwell.com`. Stopped immediately after readiness.
- `npm run preview -- --host 127.0.0.1` — passed. Server ready at the same path. Stopped immediately after readiness.

The empty-collection warnings are expected for v1: directories are intentionally empty until Stage 6 adds verified content. They do not affect type generation or the build result.

## 7. Known Issues, Risks, or Blockers
- None blocking Stage 4.
- Watch items:
  - `astro.config.mjs` still uses `site: "https://mojo4sho1.github.io"`. Correct for the initial project-site deploy; both `site` and `base` must change when the custom domain is configured. Tracked for Stage 10/11.
  - `BaseLayout` does not yet emit a canonical URL or Open Graph metadata. Deferred to Stage 9.
  - Glob-loader warnings appear once per empty collection on every build until Stage 6 lands real entries; ignore until then.
  - Several entries in `src/data/links.ts` (email, GitHub, Google Scholar, ORCID) are empty-string placeholders marked with TODO comments. Verified values are required before the first public deploy (`AGENTS.md` §23a).

## 8. Next Recommended Step
Begin Stage 4 — Page Scaffolds, as defined in `IMPLEMENTATION_PLAN.md`:
- Create routable page scaffolds under `src/pages/` for every v1 page (Home, Research, Agentic Systems, Projects, Projects detail, Dashboards, Dashboards detail, Teaching, Writing, Writing detail, CV, About, Contact, 404).
- Each page wraps in `BaseLayout` and sets a unique title and meta description.
- Detail routes use `getStaticPaths()` against the corresponding content collections (returning empty lists is fine while collections are empty).
- Index pages should already filter on `visibility === "public"` so private placeholders never accidentally surface.

## 9. Do Not Do Yet
Explicitly deferred:
- Any v1 page beyond the placeholder homepage (Stage 4 owns these).
- Reusable card components (`ProjectCard`, `DashboardCard`, etc.) — Stage 5.
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
- Keep changes small and stage-scoped. Do not jump ahead in `IMPLEMENTATION_PLAN.md`.
- Update this file (`CURRENT_STATUS.md`) after any meaningful project change.
