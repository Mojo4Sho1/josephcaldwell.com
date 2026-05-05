# Joseph Caldwell Personal Website

Personal academic and technical website for Joseph Caldwell.

This repository will contain the source code and content for a static website presenting Joseph’s work as a PhD candidate, AI systems researcher, teacher, research engineer, and systems-oriented builder focused on reliable AI systems for complex, evolving workflows.

The site is intended to be academic-first while supporting related work in agentic software engineering, coding-agent harness design, dashboards, applied AI systems, teaching, writing, and future business-adjacent projects.

---

## Site Purpose

The website should provide a public home for:

- Research interests and active research directions
- Agentic systems and coding-agent harness work
- Selected projects
- Dashboards and applied AI systems
- Teaching and mentoring experience
- Writing, posters, talks, technical reports, and publications
- Public CV
- Contact information and external links

The central identity of the site is:

> Joseph Caldwell is a researcher, teacher, and systems builder focused on reliable AI systems for complex, evolving workflows.

The site should not read like a generic portfolio, startup landing page, or consulting sales page.

---

## Planned Technical Stack

The planned stack is:

- Astro
- Markdown or MDX content
- TypeScript where useful
- Static site output
- GitHub Pages deployment through GitHub Actions
- Future portability to VPS hosting

The site should remain static-first, lightweight, modular, and easy to update.

---

## Planning Documents

Before scaffolding or modifying the site, read the planning documents in this repository:

- [`DESIGN_BRIEF.md`](./DESIGN_BRIEF.md) — project goals, audience, positioning, site map, visual direction, and non-goals
- [`CONTENT_MODEL.md`](./CONTENT_MODEL.md) — structured content types and reusable content fields
- [`AGENTS.md`](./AGENTS.md) — instructions for coding agents working in this repository

These documents define the intended direction of the site.

---

## Expected Site Structure

The version 1 site is expected to include:

```text
/
  Home

/research/
  Research overview and themes

/agentic-systems/
  Agentic software engineering and coding-agent harness design

/projects/
  Selected research, software, dashboard, agentic systems, and educational projects

/dashboards/
  Public dashboards, static demos, synthetic-data screenshots, and case studies

/teaching/
  Teaching and mentoring experience

/writing/
  Publications, preprints, posters, talks, technical reports, and selected notes

/cv/
  CV page with downloadable PDF

/about/
  Professional background and narrative

/contact/
  Contact information and external links
```

---

## Expected Repository Structure

The repository structure may evolve, but the intended structure is:

```text
src/
  components/
  layouts/
  pages/
  content/
  data/

public/
  cv/
  images/
  assets/

README.md
DESIGN_BRIEF.md
CONTENT_MODEL.md
AGENTS.md
NOTICE.md
LICENSE
```

`src/content/` is intended for Astro content collections (repeated content such as projects, research themes, dashboards, writing, teaching, and agentic systems entries). `src/data/` is intended for typed data files holding global or singleton configuration (site metadata, navigation, external links, CV metadata).

The project should favor reusable components, structured content, and clear separation between content and presentation.

---

## Local Development

The Astro site has not yet been initialized. There is no `package.json` in the repository yet, and dependencies have not been installed. The directory layout, planning documents, and `.nvmrc` are in place; Astro initialization is the next implementation step.

The repository pins its Node version through `.nvmrc`:

```bash
nvm use
```

If a different Node version manager is in use (e.g. `fnm`, `asdf`), it should respect `.nvmrc` similarly.

Expected commands after Astro is initialized:

```bash
npm install
npm run dev
npm run build
npm run preview
```

These commands should be updated once the project structure and package scripts are created.

---

## Deployment

Initial deployment target:

- GitHub Pages

Planned deployment approach:

- Static build output
- GitHub Actions workflow
- Public repository
- Custom domain support later

Future deployment target:

- VPS hosting
- Possible subdomains for dashboards or demos
- Possible reverse proxy setup

The site should remain portable and should not be designed in a way that locks it permanently to GitHub Pages.

---

## Content and Privacy Rules

Do not commit or publish:

- Private client data
- Private research data
- Credentials
- API keys
- Internal business records
- Non-public dashboard data
- Sensitive personal information
- Home address
- Private phone number
- Confidential project details
- Student information

For dashboards, case studies, and applied systems work, use:

- Synthetic data
- Sanitized screenshots
- Architecture diagrams
- Approved public data
- High-level summaries

Do not invent or exaggerate:

- Publications
- Awards
- Degrees
- Affiliations
- Research outcomes
- Project results
- Business clients
- Teaching roles
- Talks
- Collaborations
- Metrics
- Dates

Use clearly marked placeholders where information is incomplete.

---

## Licensing and Content Rights

The source code in this repository is licensed under the MIT License. See [`LICENSE`](./LICENSE).

Unless otherwise stated, written content, CV materials, images, biographical content, project descriptions, and other personal materials are copyright Joseph Caldwell and may not be reused without permission.

See [`NOTICE.md`](./NOTICE.md) for the distinction between the MIT-licensed source code and the non-code materials in this repository, and for the rules that govern reuse, attribution, and quotation of those materials.

---

## Current Status

This repository is in the planning and scaffolding stage.

Current planning files:

- `DESIGN_BRIEF.md`
- `CONTENT_MODEL.md`
- `AGENTS.md`
- `README.md`

The next major step is to scaffold the Astro static site according to the design brief and content model.