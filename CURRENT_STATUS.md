# CURRENT_STATUS.md

# Joseph Caldwell Personal Website — Current Status

This is the living handoff document for the project. It is intended to be skimmable after time away. Update it after any meaningful project change. See `AGENTS.md` §26 for the update rule.

## 1. Project Stage
- Current stage: Stage 2 — Base Layout and Global Styling (not started)
- Stage status: Stage 1 (Astro Initialization) is complete and reviewed. Stage 2 has intentionally not been started.
- Last meaningful change: Stage 1 review and creation of this status document.

## 2. Last Updated
- Date: 2026-05-05
- Updated by: Stage 1 review pass (review-only, no Stage 2 work)
- Related commit: most recent on `main` is `9b2b8b6 Initialize Astro scaffold`; this review will be its own commit when Joseph chooses to commit it.
- Notes: Working tree was clean before this review began.

## 3. Current Repo State
- Astro 6 scaffold initialized at the repo root.
- Static output is configured (`output: "static"`).
- MDX integration is installed and registered (`@astrojs/mdx`).
- `astro.config.mjs` sets `site: "https://mojo4sho1.github.io"` and `base: "/josephcaldwell.com"` for GitHub Pages project-site deployment.
- `tsconfig.json` extends `astro/tsconfigs/strict`.
- `.nvmrc` pins Node 22.
- `src/` contains placeholder directories (`components/`, `layouts/`, `pages/`, `content/`, `data/`, `styles/`) with `.gitkeep` markers; only `src/pages/index.astro`, `src/styles/global.css`, and `src/env.d.ts` carry real content.
- `public/` has placeholder subdirectories `cv/`, `images/`, `assets/` with `.gitkeep` files.
- `.github/workflows/` exists with a `.gitkeep` only — no deployment workflow yet.
- Planning files preserved: `DESIGN_BRIEF.md`, `CONTENT_MODEL.md`, `IMPLEMENTATION_PLAN.md`, `PROJECT_REVIEW.md`, `AGENTS.md`, `NOTICE.md`, `LICENSE`, `README.md`.
- `.gitignore` already covers `node_modules/`, `dist/`, `.astro/`, `.env*`, and `.DS_Store`.

## 4. Completed Work
- Stage 0 — Repository Planning and Scaffolding (planning documents in place).
- Stage 1 — Astro Initialization:
  - Minimal Astro scaffold with MDX support and static output.
  - Strict TypeScript configuration.
  - Placeholder homepage at `src/pages/index.astro` (single `<h1>` plus a one-line note; no design system).
  - Minimal `src/styles/global.css` (a small set of CSS custom properties and a couple of base rules; not a full design system).
  - `base` path configured for GitHub Pages project-site deployment.
  - Local-development commands in `README.md` and `AGENTS.md` are accurate.

## 5. Active Technical Decisions
Preserve these unless explicitly revisited:
- Astro static-first; no SSR, no backend, no database, no auth.
- MDX is enabled but plain Markdown is the default authoring format.
- Vanilla CSS with CSS custom properties. No Tailwind. No CSS-in-JS.
- System font stack for version 1.
- No dark mode for version 1.
- No RSS feed for version 1.
- Talks live under Writing (`type: "talk"`) — no separate `/talks/` page.
- Initial deployment target is GitHub Pages as a project site at `https://<github-username>.github.io/josephcaldwell.com/`.
- Astro `base` is `/josephcaldwell.com` and must remain so until a custom-domain deployment is configured. Avoid raw root-relative links — use Astro's path helpers so links keep working under the base path.
- Do not commit `node_modules/`, `dist/`, or `.astro/`.
- Astro content collections with `zod` schemas are the planned mechanism for repeated content (Stage 3).
- Typed files under `src/data/` are the planned mechanism for global/singleton config.
- Plan-of-record dependencies through Stage 9: Astro, `@astrojs/mdx`, `@astrojs/sitemap` (when added), TypeScript, and `zod` (via Astro). Anything else needs written justification before adding.

## 6. Validation Status
All run with `ASTRO_TELEMETRY_DISABLED=1` due to a sandbox restriction on telemetry preference writes. Astro version 6.2.2.
- `npm install` — passed (per Codex Stage 1 report; lockfile present).
- `npm run build` — passed in this review (1 page built, ~540 ms; no warnings).
- `npm run dev -- --host 127.0.0.1` — passed in this review (server ready, served at `http://127.0.0.1:4321/josephcaldwell.com`); stopped immediately after readiness.
- `npm run preview -- --host 127.0.0.1` — passed in this review (server ready at the same path); stopped immediately after readiness.

## 7. Known Issues, Risks, or Blockers
- None blocking Stage 2.
- Watch items:
  - `astro.config.mjs` currently sets `site: "https://mojo4sho1.github.io"`. This is the right value for the initial GitHub Pages project-site deploy, but it must be revisited when the custom domain is configured (both `site` and `base` will change). Tracked for Stage 10/11.
  - GitHub Pages deployment workflow has not been created (deferred to Stage 10 by design).
  - First `npm run build` of a session will re-optimize Vite dependencies; this is expected, not a problem.

## 8. Next Recommended Step
Begin Stage 2 — Base Layout and Global Styling, as defined in `IMPLEMENTATION_PLAN.md`:
- `src/layouts/BaseLayout.astro`, `src/components/SiteHeader.astro`, `src/components/SiteFooter.astro`, `src/components/SkipLink.astro`.
- `src/styles/global.css` (expanded) and `src/styles/tokens.css`.
- `src/data/navigation.ts` and `src/data/site.ts`.

Two blocking decisions called out in `IMPLEMENTATION_PLAN.md` §Stage 2 must be resolved before or during that stage:
- Whether About lives in main nav or footer.
- Final confirmation of vanilla CSS + custom properties (already the recommendation; flag only if Joseph wants to revisit).

## 9. Do Not Do Yet
Explicitly deferred from this stage:
- Base layout, header, footer, navigation, skip-link.
- Any additional pages (Research, Agentic Systems, Projects, Dashboards, Teaching, Writing, CV, About, Contact).
- Reusable card components or any non-trivial component work.
- Astro content collections, `zod` schemas, or any `src/content/<collection>/` entries.
- Real project, publication, talk, teaching, dashboard, or CV content.
- GitHub Actions deployment workflow, sitemap integration, `robots.txt`, favicon, Open Graph image.
- Dark mode, RSS, analytics, CMS, backend routes, server endpoints, authentication, database, conda environment.
- Adding dependencies beyond the plan-of-record set unless a validation failure proves one is missing.
- Redesigning the placeholder homepage.

## 10. Handoff Notes for Future Agents
- Read `IMPLEMENTATION_PLAN.md` for the staged roadmap and `PROJECT_REVIEW.md` for outstanding decisions before changing direction.
- Run `nvm use` (Node 22) before `npm install` if you switch shells; the repo pins Node via `.nvmrc`.
- If the Astro CLI complains about telemetry, run with `ASTRO_TELEMETRY_DISABLED=1` rather than trying to mutate global telemetry preferences.
- The site is served under `/josephcaldwell.com/` locally and in CI. Always go through Astro's path helpers (e.g. `import.meta.env.BASE_URL`, `<a href={`${import.meta.env.BASE_URL}/research/`}>`); do not hand-write `/research/`-style links.
- Keep changes small and stage-scoped. Do not jump ahead in `IMPLEMENTATION_PLAN.md`.
- Do not invent content. Use clearly marked placeholders (see `AGENTS.md` §6 and §20).
- Update this file (`CURRENT_STATUS.md`) after any meaningful project change. The trigger list lives in `AGENTS.md` §26.
