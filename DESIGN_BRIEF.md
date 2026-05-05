# DESIGN_BRIEF.md

# Joseph Caldwell Personal Academic Website — Design Brief

## 1. Project Overview

This repository contains the source for Joseph Caldwell’s personal academic and technical website.

The site should present Joseph as a PhD candidate, AI systems researcher, teacher, research engineer, and systems-oriented builder. It should communicate a coherent professional identity centered on reliable AI systems for complex, evolving workflows.

The website should be academic-first, technically serious, and future-flexible. It should support Joseph’s current academic identity while leaving room for agentic systems, dashboards, applied AI projects, teaching, writing, and future business-adjacent work.

The site should not feel like a generic portfolio, startup landing page, or consulting sales page. It should feel like the public home of a researcher who builds systems.

---

## 2. Core Positioning

The central identity of the site is:

> Joseph Caldwell is a PhD candidate and AI systems researcher working on graph learning, explainability, scalable AI systems, and agentic software engineering.

A broader thematic statement:

> Joseph studies and builds reliable AI systems for complex, evolving workflows.

A more technical framing:

> Joseph is interested in the systems layer around AI: how models receive context, adapt to changing information, use tools, recover from failure, and support human decision-making.

The site should connect several interests under one coherent umbrella:

- Graph learning
- Dynamic and heterogeneous graph representation learning
- Explainable AI and graph pruning
- Scalable AI systems and high-performance computing
- Agentic software engineering
- Coding-agent harness design
- Dashboards and applied AI systems
- Teaching and mentorship

The site should avoid presenting these as disconnected interests. The unifying theme is reliable AI systems that reason over structured context, adapt to change, and support human workflows.

---

## 3. Primary Goals

The website should:

1. Establish Joseph’s academic and research identity.
2. Present his research interests and active areas of work clearly.
3. Provide a stable public home for his CV.
4. Showcase selected projects, dashboards, writing, and technical systems.
5. Communicate his interest in agentic software engineering as a serious systems-design direction.
6. Support future expansion into public demos, hosted dashboards, technical notes, and business-adjacent AI work.
7. Remain easy to update through version control and agent-assisted development.
8. Stay static-first, lightweight, portable, and maintainable.

---

## 4. Primary Audiences

The site should serve the following audiences, in this priority order:

1. Academic faculty, advisors, and collaborators
2. Research internship reviewers and fellowship committees
3. Technical peers and potential collaborators
4. Students, mentees, and teaching-related visitors
5. Future hiring or postdoctoral committees
6. Business-adjacent visitors who discover Joseph’s technical work

The personal site should be academic-first. Business-related material may appear, but it should not dominate the site or change the site into a services landing page.

---

## 5. Tone and Voice

The writing should be:

- Clear
- Precise
- Confident
- Technically serious
- Measured
- Academic but readable
- Active voice by default
- Specific rather than generic

Avoid:

- Hype-heavy AI language
- Startup-style sales copy
- Overstated claims
- Self-deprecating framing
- Generic portfolio language
- Buzzword-heavy descriptions
- Unsupported claims about accomplishments
- Invented publications, awards, affiliations, or credentials

Preferred phrasing examples:

> I view agentic software engineering as a systems design problem.

> I am interested in structured agent harnesses that support context management, tool use, feedback, and repair.

> My work focuses on reliable AI systems for complex, evolving workflows.

Avoid phrasing like:

> I am ahead of my peers.

> I am not the best programmer.

> I use AI to code faster.

> I build revolutionary AI tools.

---

## 6. Site Map

The version 1 site should include the following pages:

```text
/
  Home

/research/
  Research overview, themes, and active research directions

/agentic-systems/
  Agentic software engineering, coding-agent harnesses, and local-first AI systems

/projects/
  Selected research, software, agentic systems, dashboard, and educational projects

/dashboards/
  Public dashboards, static demos, screenshots, and synthetic-data case studies

/teaching/
  Teaching experience, mentoring, and educational work

/writing/
  Publications, preprints, posters, technical reports, talks, and selected notes

/cv/
  CV page with downloadable PDF

/about/
  Professional background and narrative

/contact/
  Contact information and external links
```

Future pages may include:

```text
/talks/
/notes/
/uses/
/now/
/lab/
```

These should not be required for version 1 unless explicitly requested.

---

## 7. Page-by-Page Requirements

## 7.1 Home Page

The home page should quickly answer:

- Who is Joseph?
- What does he study?
- What kind of systems does he build?
- Where should visitors go next?

The homepage should include:

- Name
- Short professional tagline
- Brief research identity paragraph
- Brief mention of agentic systems
- Primary navigation links
- Selected featured items
- CV link
- Contact link

Suggested homepage framing:

> Joseph Caldwell is a PhD candidate and AI systems researcher working on graph learning, explainability, scalable AI systems, and agentic software engineering. His work focuses on reliable AI systems for complex, evolving workflows.

Secondary sentence:

> He is also developing agentic software engineering systems, including coding-agent harnesses that support structured context, tool use, iterative feedback, and error recovery.

The homepage should not be overloaded. It should act as a clean entry point into the rest of the site.

---

## 7.2 Research Page

The research page should focus on Joseph’s formal academic identity.

It should include:

- Research overview
- Current research themes
- Active research projects
- Selected research artifacts
- Connection between research interests and broader systems thinking

Initial research themes may include:

- Graph neural networks
- Dynamic graph representation learning
- Heterogeneous graph learning
- Graph explainability
- Graph pruning
- Scalable AI systems
- AI for high-performance computing
- Scientific machine learning systems

The research page may include a bridge sentence connecting formal research to broader systems interests:

> Across these areas, I am interested in how AI systems represent context, adapt to changing information, and expose useful structure for human understanding.

Do not overemphasize consulting or business work on this page.

---

## 7.3 Agentic Systems Page

The Agentic Systems page should be one of the most distinctive pages on the site.

This page should present agentic software engineering as a serious technical and systems-design interest, not as casual prompting or “vibe coding.”

The page should include:

- Overview
- Agentic software engineering
- Why agent harnesses matter
- Design philosophy
- Current harness work
- Local-first AI tools
- Long-term direction

Core framing:

> I view agentic software engineering as a systems design problem. The challenge is not simply prompting a model to write code, but designing the surrounding harness that lets agents inspect context, use tools, observe failures, update task state, and perform targeted repair.

Key design themes:

- Structured context management
- Tool orchestration
- Test-driven repair
- Failure-aware feedback loops
- Local execution
- Project-specific memory
- Human review and control
- Multi-agent task decomposition
- Evaluation and reliability

The page may lightly mention future small-business applications:

> I am also interested in local-first AI systems for small organizations, especially tools that preserve privacy, reduce operational friction, and run on hardware controlled by the client.

This page should not become a sales page.

---

## 7.4 Projects Page

The projects page should showcase selected work in a structured, filterable, or card-based format.

Project categories may include:

- Research projects
- Agentic systems projects
- Dashboard and visualization projects
- Teaching and educational projects
- Archived projects

Each project should support the following fields:

- Title
- Slug
- Short summary
- Longer description
- Category
- Status
- Role
- Technologies
- Links
- Visibility
- Featured flag

Project statuses may include:

- Active
- Prototype
- Published
- Archived
- Private
- Planned

The page should not list every minor repository or class assignment. It should emphasize selected work that supports Joseph’s academic and technical identity.

---

## 7.5 Dashboards Page

The dashboards page should showcase interactive systems, reports, visualizations, and applied AI tools.

Dashboard entries may be public or private. The page should support four display modes:

1. Live public dashboard
2. Static exported dashboard
3. Screenshot with synthetic data
4. Case study without public access

Each dashboard should explain:

- What problem it solves
- Who it was built for
- What type of data it uses
- What tools or stack were used
- Whether it is live, static, private, or demo-only
- Any privacy or data limitations

Never expose:

- Private client data
- Private research data
- Credentials
- Internal operational details
- Sensitive personal information
- Proprietary information

For private dashboards, use synthetic data, sanitized screenshots, architecture diagrams, or short case studies.

---

## 7.6 Teaching Page

The teaching page should present Joseph’s teaching and mentoring experience.

It may include:

- Teaching assistant roles
- Courses supported
- Mentoring experience
- AI4ALL or outreach work
- Guest lectures
- Teaching philosophy summary
- Public teaching materials, if available

The teaching page should support Joseph’s long-term academic identity and interest in becoming a professor.

The tone should be warm, clear, and student-centered.

---

## 7.7 Writing Page

The writing page should be flexible enough to include:

- Publications
- Preprints
- Posters
- Technical reports
- Talks
- Selected notes
- Research essays
- Project writeups

Use “Writing” as the initial page title because it is broader and more flexible than “Publications.” The page may later be renamed or split into “Publications” and “Writing” when enough material exists.

Do not invent publications, venues, acceptance statuses, awards, or paper metadata.

For each writing item, support:

- Title
- Authors
- Venue or context
- Status
- Date
- Abstract or summary
- Links
- Citation, if available

---

## 7.8 CV Page

The CV page should provide:

- Downloadable PDF CV
- Last updated date
- Short academic profile
- Selected highlights
- Contact links

The PDF CV should be treated as the source of truth.

The public CV should not include:

- Home address
- Personal phone number unless explicitly desired
- Sensitive personal information
- Private references
- Unpublished confidential work

The CV page should make the PDF easy to find, but the site should not feel like a resume website.

---

## 7.9 About Page

The About page should tell Joseph’s professional story.

It should connect:

- Mechanical and energy engineering background
- Design-build construction experience
- Consulting and design background
- Transition into AI
- Graduate research
- Interest in graph learning, HPC, and AI systems
- Teaching and mentorship
- Agentic systems and research engineering

The page should make the background feel coherent.

A useful through-line:

> Joseph has repeatedly worked at the boundary between technical systems, physical systems, and human workflows.

The page should be professional, not overly personal.

---

## 7.10 Contact Page

The Contact page should include:

- Professional email
- GitHub
- LinkedIn
- Google Scholar, if available
- ORCID, if available
- CV link
- Business website link, if appropriate

The page may include a short collaboration statement:

> I am interested in collaborations related to graph learning, explainable AI, scalable AI systems, agentic software engineering, and AI tools for complex workflows.

---

## 8. Business-Site Relationship

Joseph also operates Caldwell Consulting & Design.

The personal site may link to the business site, but it should not read like a consulting landing page.

The personal site should frame business-adjacent work as applied systems work, not sales copy.

Acceptable phrasing:

> I also operate Caldwell Consulting & Design, where I explore practical applications of visualization, automation, dashboards, and local-first AI tools for small organizations.

Avoid:

> Hire me to transform your business with AI.

> We provide cutting-edge AI solutions.

> Book a consultation today.

The business site can carry client-facing service descriptions. The personal site should remain academic-first.

---

## 9. Visual Design Direction

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

- Heavy startup aesthetic
- Excessive gradients
- Overuse of animation
- Dark cyberpunk AI styling
- Generic portfolio templates
- Corporate consulting look
- Dense text walls
- Unnecessary visual clutter

Preferred visual elements:

- Strong typography
- Clean spacing
- Subtle accent color
- Card-based project previews
- Clear section hierarchy
- Responsive layouts
- Lightweight diagrams where useful
- Minimal animation only where it improves clarity

The site should look intentional and professionally designed, but content should remain the focus.

---

## 10. Technical Stack

The preferred stack is:

- Astro
- Markdown or MDX for content
- TypeScript where useful
- Static output
- GitHub Pages deployment through GitHub Actions
- Portable deployment to a future VPS

The site should be static-first.

Avoid:

- Backend services
- Databases
- Authentication
- CMS dependencies
- Server-rendered application architecture
- Analytics by default
- Unnecessary JavaScript
- Complex state management
- Over-engineered build systems

The site should be easy for humans and coding agents to inspect, update, and refactor.

---

## 11. Repository Expectations

The repository should support a clean structure such as:

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
```

`src/content/` holds Astro content collections (repeated content like projects, research themes, dashboards, writing, teaching, agentic systems entries). `src/data/` holds typed data files for global or singleton configuration (site metadata, navigation, external links, CV metadata).

The exact structure may evolve, but the project should remain content-driven and modular.

Reusable components should be preferred over repeated hardcoded markup.

Content should be separated from presentation wherever practical.

---

## 12. Deployment Target

Initial deployment target:

- GitHub Pages

Deployment approach:

- GitHub Actions
- Static build output
- Public repository
- Custom domain support later

Future deployment target:

- VPS hosting
- Possible reverse proxy
- Possible subdomains for dashboards or demos

The site should be portable. Do not design the site in a way that locks it permanently to GitHub Pages.

The site may initially deploy as a GitHub Pages **project site** at a path like `https://<github-username>.github.io/josephcaldwell.com/` before moving to the custom domain `https://josephcaldwell.com/`. The implementation should account for this base-path difference: configure Astro's `base` correctly, and avoid raw root-relative links (`/cv/...`, `/images/...`) in favor of Astro's path helpers (`import.meta.env.BASE_URL`, `Astro.url`, or the framework's link helpers) so that switching the deployment base from a project path to the domain root does not break internal links or asset references.

---

## 13. Accessibility Requirements

The site should follow basic accessibility best practices:

- Semantic HTML
- Clear heading hierarchy
- Sufficient color contrast
- Keyboard navigability
- Descriptive link text
- Alt text for meaningful images
- Avoid text embedded in images
- Avoid animation that impairs readability
- Responsive layout for mobile and desktop

The site should be readable and usable without relying on complex interactions.

---

## 14. SEO and Metadata Requirements

The site should include sensible metadata:

- Page titles
- Page descriptions
- Open Graph metadata
- Canonical URLs when appropriate
- Social preview image support, if practical
- Structured page descriptions for major pages

The site should help search engines understand Joseph’s academic and technical identity.

Suggested homepage metadata direction:

> Joseph Caldwell is a PhD candidate and AI systems researcher working on graph learning, explainable AI, scalable systems, and agentic software engineering.

---

## 15. Performance Requirements

The site should be fast and lightweight.

Performance expectations:

- Static output
- Minimal JavaScript
- Optimized images
- No unnecessary client-side frameworks
- No heavy animation libraries unless explicitly needed
- Fast page loads
- Mobile-friendly layout

The site should favor long-term maintainability over visual novelty.

---

## 16. Content Integrity Rules

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

Use placeholders where information is missing.

Clearly mark incomplete content as placeholder content.

Do not include private or sensitive material.

Do not include claims that Joseph has not verified.

---

## 17. Privacy and Safety Rules

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

For dashboards, use synthetic data, sanitized screenshots, or architecture-level explanations unless public data is explicitly approved.

---

## 18. Version 1 Scope

Version 1 should include:

- Static Astro site scaffold
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
- 404 page
- Reusable project card component
- Reusable dashboard card component
- Reusable research theme component
- Placeholder CV download path
- Basic metadata
- Favicon
- `robots.txt`
- Sitemap support (e.g. `@astrojs/sitemap`)
- A default Open Graph image where practical
- GitHub Pages deployment configuration

Version 1 should not require all final content to be complete.

A polished scaffold with accurate placeholders is better than a complete-looking site with invented or weak content.

---

## 19. Explicit Non-Goals

Do not build:

- A backend
- A database
- Authentication
- A CMS
- A client portal
- A full blog system unless explicitly requested
- A dashboard hosting platform
- A commercial landing page
- A complex animation-heavy site
- A generic portfolio template
- A site that depends on private data

Do not:

- Invent content
- Overstate agentic systems work
- Make the site primarily about consulting
- Hide the agentic systems work as a casual side interest
- Present private prototypes as completed public products
- Add unnecessary dependencies
- Optimize for trendiness over clarity

---

## 20. Future Extensibility

The site should support future additions such as:

- Public demos
- Hosted dashboards
- Technical notes
- Research writeups
- Talks and posters
- Publications
- Lab page
- Business-site cross-linking
- Project-specific subdomains
- Agentic systems architecture diagrams
- Synthetic-data case studies

Future dynamic systems should be hosted separately when necessary, likely on a VPS or project-specific subdomain.

The main personal site should remain mostly static.

---

## 21. Design Principle

The site should consistently communicate:

> Joseph Caldwell is a researcher, teacher, and systems builder focused on reliable AI systems for complex, evolving workflows.

Every design, content, and architecture decision should support that identity.