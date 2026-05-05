# AGENTS.md

# Agent Instructions for Joseph Caldwell Personal Academic Website

## 1. Project Summary

This repository contains the source for Joseph Caldwell’s personal academic and technical website.

The site presents Joseph as a PhD candidate, AI systems researcher, teacher, research engineer, and systems-oriented builder focused on reliable AI systems for complex, evolving workflows.

The site should remain academic-first while also making room for agentic software engineering, coding-agent harness design, dashboards, applied AI systems, teaching, writing, and future business-adjacent work.

Before making substantial changes, read:

```text
DESIGN_BRIEF.md
CONTENT_MODEL.md
AGENTS.md
```

These files define the project intent, content structure, and working rules.

---

## 2. Core Site Identity

The site should consistently communicate:

> Joseph Caldwell is a researcher, teacher, and systems builder focused on reliable AI systems for complex, evolving workflows.

Important identity pillars:

- Graph learning
- Dynamic and heterogeneous graph representation learning
- Explainable AI
- Graph pruning
- Scalable AI systems
- High-performance computing
- Agentic software engineering
- Coding-agent harness design
- Dashboards and applied AI systems
- Teaching and mentorship

Do not present these as disconnected interests. The unifying theme is the design of reliable AI systems that reason over structured context, adapt to change, use tools, recover from failure, and support human workflows.

---

## 3. Preferred Technical Direction

Preferred stack:

- Astro
- Static site output
- Markdown or MDX content
- TypeScript where useful
- GitHub Pages deployment through GitHub Actions
- Future portability to VPS hosting

The site should be static-first, lightweight, modular, and easy to inspect.

### Accepted technical decisions for version 1

- **Astro content collections with `zod` schemas** are the preferred approach for repeated content (research themes, projects, agentic systems entries, dashboards, writing, teaching).
- **Typed data files under `src/data/`** are the preferred approach for global or singleton configuration (site metadata, navigation, external links, CV metadata).
- **MDX is enabled** during Astro setup so writing entries can embed components when useful, but **plain Markdown is the default authoring format**. Reach for MDX only when a component is needed.
- **Vanilla CSS with CSS custom properties** for styling. **No Tailwind** for version 1.
- **System font stack** for version 1.
- **No dark mode** for version 1.
- **No RSS feed** for version 1.
- **Talks live under Writing** for version 1 (`type: "talk"` on writing entries). No separate `/talks/` page or talks collection yet.
- **GitHub Pages base path:** the site may initially deploy as a project site at `https://<github-username>.github.io/josephcaldwell.com/` before moving to `https://josephcaldwell.com/`. Configure Astro's `base` accordingly and avoid raw root-relative paths in favor of Astro's path helpers.

Avoid:

- Backend services
- Databases
- Authentication
- CMS dependencies
- Heavy client-side JavaScript
- Complex state management
- Unnecessary build complexity
- Analytics by default
- Vendor lock-in

---

## 4. Expected Repository Structure

A likely structure is:

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
```

The exact structure may evolve, but the project should remain:

- Content-driven
- Modular
- Easy to update
- Easy for humans and agents to reason about
- Portable across hosting environments

Prefer reusable components over repeated hardcoded markup.

---

## 5. Development Workflow

When working in this repository:

1. Read the relevant planning documents first.
2. Make focused changes.
3. Avoid broad rewrites unless explicitly requested.
4. Preserve the academic-first positioning.
5. Keep content accurate and verifiable.
6. Do not invent accomplishments, publications, awards, affiliations, or project outcomes.
7. Do not add unnecessary dependencies.
8. Do not introduce private data.
9. Do not convert the site into a business landing page.
10. Keep the implementation simple unless a more complex design is clearly justified.

When asked to scaffold or modify the site, prefer small, reviewable steps.

---

## 6. Content Integrity Rules

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

Use placeholders where information is unknown.

Good placeholder:

```yaml
status: "draft"
summary: "Placeholder summary. Replace with verified project description."
```

Bad placeholder:

```yaml
venue: "NeurIPS 2026"
status: "accepted"
award: "Best Paper"
```

Never create realistic but fictional achievements.

---

## 7. Privacy and Safety Rules

Never expose:

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

For dashboards and case studies, use:

- Synthetic data
- Sanitized screenshots
- Architecture diagrams
- Approved public data
- High-level summaries

Do not include raw private data.

---

## 8. Writing Style

Use writing that is:

- Clear
- Precise
- Active voice
- Technically serious
- Confident but measured
- Academic but readable
- Specific rather than generic

Avoid:

- Hype-heavy AI language
- Startup-style sales copy
- Buzzword-heavy claims
- Self-deprecating framing
- Unsupported claims
- Overly casual language
- Generic portfolio language

Preferred phrasing:

> I view agentic software engineering as a systems design problem.

> I am interested in structured agent harnesses that support context management, tool use, feedback, and repair.

> My work focuses on reliable AI systems for complex, evolving workflows.

Avoid phrasing:

> I am ahead of my peers.

> I am not the best programmer.

> I use AI to code faster.

> I build revolutionary AI tools.

---

## 9. Agentic Systems Positioning

Agentic software engineering should be treated as a serious technical direction.

Core framing:

> Agentic software engineering is a systems design problem. The challenge is not simply prompting a model to write code, but designing the surrounding harness that lets agents inspect context, use tools, observe failures, update task state, and perform targeted repair.

Important themes:

- Structured context management
- Tool orchestration
- Test-driven repair
- Failure-aware feedback loops
- Local execution
- Project-specific memory
- Human review and control
- Multi-agent task decomposition
- Evaluation and reliability

Do not frame this work as casual prompting, “vibe coding,” or generic AI productivity.

---

## 10. Business-Site Boundary

Joseph also operates Caldwell Consulting & Design.

The personal site may link to the business site, but the personal site should not become a consulting sales page.

Acceptable framing:

> I also operate Caldwell Consulting & Design, where I explore practical applications of visualization, automation, dashboards, and local-first AI tools for small organizations.

Avoid:

> Hire me to transform your business with AI.

> Book a consultation today.

> We provide cutting-edge AI solutions.

The personal site should remain academic-first.

---

## 11. Page Expectations

Version 1 should support these pages:

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

Do not add additional top-level pages unless requested or clearly justified.

---

## 12. Component Expectations

Useful reusable components may include:

- Header
- Footer
- Page layout
- Section heading
- Project card
- Dashboard card
- Research theme card
- Writing item card
- Teaching entry card
- External link list
- CV download block
- Status badge
- Tag list

Prefer component reuse over repeated markup.

---

## 13. Content Model Expectations

Follow `CONTENT_MODEL.md` for structured content.

Important content types:

- Research theme
- Project
- Agentic systems entry
- Dashboard
- Writing item
- Teaching experience
- Talk or presentation
- External link
- CV asset
- Homepage feature

When practical, use structured content collections or typed data files.

If using Astro content collections, schema validation with `zod` is preferred.

---

## 14. Visual Design Direction

The visual design should feel:

- Modern academic
- Technical
- Calm
- Precise
- Readable
- Minimal but not sterile
- Systems-oriented
- Polished but not flashy

Avoid:

- Startup landing-page aesthetics
- Heavy gradients
- Excessive animations
- Dark cyberpunk AI styling
- Generic portfolio templates
- Corporate consulting look
- Dense text walls
- Unnecessary visual clutter

Content should remain the focus.

---

## 15. Accessibility Expectations

Follow basic accessibility practices:

- Use semantic HTML
- Use clear heading hierarchy
- Ensure sufficient color contrast
- Support keyboard navigation
- Use descriptive link text
- Add alt text for meaningful images
- Avoid text embedded in images
- Avoid unnecessary motion
- Ensure responsive layouts

---

## 16. SEO and Metadata Expectations

Each major page should have:

- Clear page title
- Page description
- Open Graph metadata where practical
- Canonical URL support when appropriate
- Descriptive headings
- Search-friendly summaries

Suggested homepage metadata direction:

> Joseph Caldwell is a PhD candidate and AI systems researcher working on graph learning, explainable AI, scalable systems, and agentic software engineering.

---

## 17. Performance Expectations

The site should be fast and lightweight.

Prefer:

- Static output
- Minimal JavaScript
- Optimized images
- No unnecessary client-side frameworks
- No heavy animation libraries
- Simple CSS
- Fast page loads
- Mobile-friendly layout

Do not sacrifice maintainability for novelty.

---

## 18. Dependency Rules

Before adding a dependency, consider whether it is necessary.

Acceptable dependencies may include:

- Astro packages
- TypeScript tooling
- Markdown or MDX support
- Small utility libraries when clearly useful

Avoid dependencies for simple layout, styling, or interactions that can be handled directly.

Do not add large UI frameworks, animation libraries, analytics tools, CMS integrations, or backend frameworks unless explicitly requested.

---

## 19. Git and Change Discipline

When making changes:

- Keep changes focused.
- Avoid unrelated formatting churn.
- Do not rewrite large files unnecessarily.
- Do not remove planning documents.
- Do not alter the site identity without explicit direction.
- Do not commit generated build artifacts.
- Do not commit environment files.
- Do not commit credentials.

Common files and directories that should not be committed:

```text
node_modules/
dist/
.astro/
.env
.env.*
.DS_Store
```

---

## 20. Placeholder Rules

Placeholder content is allowed during scaffolding, but it must be obvious.

Acceptable:

```text
Placeholder project description. Replace with verified content.
```

Not acceptable:

```text
Award-winning project presented at a major AI conference.
```

unless verified.

Use placeholders to preserve structure, not to imply accomplishments.

---

## 21. CV Rules

The site should support a public CV PDF.

The public CV should avoid:

- Home address
- Private phone number unless explicitly approved
- Sensitive personal information
- Confidential references
- Private project details

The CV page should include:

- Download link
- Last updated date
- Short academic profile
- Selected highlights, if verified

The PDF CV remains the source of truth.

---

## 22. Dashboard Rules

Dashboard entries may be:

- Live public dashboards
- Static exports
- Synthetic-data screenshots
- Sanitized case studies
- Private/internal references

For private dashboards, public presentation should use synthetic or sanitized materials.

Never expose raw private data.

Each dashboard should explain:

- What problem it solves
- Who it serves
- What data type it uses
- What tools were used
- Whether it is public, private, synthetic, or demo-only

---

## 23. Commands

Project commands should be documented once the site is scaffolded.

Expected commands may eventually include:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Do not assume these commands exist until the Astro project has been initialized.

Update this section after the scaffold is created.

---

## 23a. Deploy-Readiness Checklist

Before the first public deploy — and before any subsequent deploy that touches public content, the CV, or the deployment configuration — confirm each of the following:

- [ ] No unresolved placeholder content remains in featured or public-facing sections of the site.
- [ ] The CV PDF has been reviewed for privacy (no home address, no private phone number, no confidential references, no sensitive personal information).
- [ ] All public contact links (email, GitHub, LinkedIn, Google Scholar, ORCID, business site) are verified and resolve correctly.
- [ ] Internal links and asset references work under the configured Astro `base` path (project-site path or custom-domain root, whichever applies).
- [ ] No private data, credentials, API keys, or sensitive information have been committed.
- [ ] A basic accessibility review has been completed: heading hierarchy, color contrast, keyboard navigation, descriptive link text, alt text where meaningful.
- [ ] A basic performance check has been completed (e.g. Lighthouse on the home page).
- [ ] The production build (`npm run build`) succeeds without errors or schema-validation failures.

This checklist applies to humans and agents alike. Do not skip items because the previous deploy passed; content drift is the most common source of new problems.

---

## 24. Version 1 Target

Version 1 should produce a polished static scaffold, not a fully final website.

Version 1 should include:

- Shared layout
- Responsive navigation
- Home page
- Research page
- Agentic Systems page
- Projects page
- Dashboards page
- Teaching page
- Writing page
- CV page
- About page
- Contact page
- Reusable card components
- Placeholder CV path
- Basic metadata
- GitHub Pages deployment setup

Version 1 should not require all final content to be complete.

Accurate placeholders are better than invented content.

---

## 25. Final Working Principle

Every change should support this central identity:

> Joseph Caldwell is a researcher, teacher, and systems builder focused on reliable AI systems for complex, evolving workflows.

When in doubt, choose clarity, accuracy, maintainability, and academic credibility over novelty or visual flash.