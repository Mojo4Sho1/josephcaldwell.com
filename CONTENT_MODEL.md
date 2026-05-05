# CONTENT_MODEL.md

# Joseph Caldwell Personal Academic Website — Content Model

## 1. Purpose

This document defines the reusable content structures for Joseph Caldwell’s personal academic and technical website.

The goal is to keep the site content-driven, consistent, and easy to update by humans or coding agents. Pages should avoid one-off hardcoded content where structured content would be more maintainable.

This content model supports:

- Research themes
- Projects
- Agentic systems work
- Dashboards
- Writing and publications
- Talks and presentations
- Teaching experience
- External links
- CV assets
- Contact information
- Featured homepage content

The site should use structured content wherever practical, especially for repeated items such as projects, dashboards, writing entries, and teaching roles.

---

## 2. General Content Rules

All content entries should follow these rules:

1. Do not invent information.
2. Use placeholders when details are unknown.
3. Keep descriptions concise, specific, and accurate.
4. Prefer active voice.
5. Avoid hype-heavy language.
6. Avoid self-deprecating language.
7. Clearly distinguish public, private, prototype, planned, and archived work.
8. Never expose private client data, private research data, credentials, or sensitive personal information.
9. Use synthetic data or sanitized descriptions for private dashboards and case studies.
10. Keep academic identity primary and business-adjacent work secondary.

---

## 3. Shared Field Conventions

Many content types should use a common set of fields.

## 3.1 Required Common Fields

```yaml
title: ""
slug: ""
summary: ""
```

### `title`

Human-readable title.

Example:

```yaml
title: "Dynamic Graph Autoencoder"
```

### `slug`

URL-safe identifier.

Example:

```yaml
slug: "dynamic-graph-autoencoder"
```

### `summary`

One- to two-sentence public summary.

Example:

```yaml
summary: "A research prototype exploring metadata-conditioned representation learning for dynamic and heterogeneous graph data."
```

---

## 3.2 Optional Common Fields

```yaml
status: ""
category: ""
date: ""
start_date: ""
end_date: ""
featured: false
visibility: ""
tags: []
technologies: []
links: []
notes: ""
```

### `status` and `visibility`

`status` and `visibility` describe different things and should not be conflated:

- `status` describes **lifecycle or maturity** — where a content item is in its development arc (planned, draft, active, prototype, published, archived).
- `visibility` describes **public/private exposure** — who is allowed to see the content (public, private, internal, sanitized, synthetic-demo).

A single item can combine these freely. For example, a project may be `status: "active"` and `visibility: "private"` at the same time. The historical value `status: "private"` is retained only for items that are deliberately not shipped (effectively shelved); for everything else, prefer setting `visibility: "private"` and leaving `status` to describe maturity.

### `status`

Recommended values:

```yaml
status: "active"
status: "prototype"
status: "published"
status: "archived"
status: "planned"
status: "private"
status: "draft"
```

### `category`

Category should be human-readable and page-specific.

Examples:

```yaml
category: "Research Project"
category: "Agentic Systems"
category: "Dashboard"
category: "Teaching"
category: "Technical Writing"
```

### `featured`

Whether the item should appear on the homepage or in a featured section.

Example:

```yaml
featured: true
```

### `visibility`

Recommended values:

```yaml
visibility: "public"
visibility: "private"
visibility: "internal"
visibility: "sanitized"
visibility: "synthetic-demo"
```

### `links`

Use a list of labeled links.

```yaml
links:
  - label: "GitHub"
    url: "https://github.com/example/repo"
  - label: "PDF"
    url: "/assets/example.pdf"
  - label: "Demo"
    url: "https://example.com"
```

Do not include broken or placeholder links unless clearly marked.

---

## 4. Research Theme

Research themes describe major intellectual areas.

## 4.1 Use Cases

Research themes may appear on:

- Home page
- Research page
- Project detail pages
- Writing pages

## 4.2 Fields

```yaml
title: ""
slug: ""
summary: ""
description: ""
status: ""
featured: false
related_projects: []
related_writing: []
tags: []
```

## 4.3 Field Notes

### `description`

Longer explanation of the theme.

### `related_projects`

List of project slugs.

```yaml
related_projects:
  - "dynamic-graph-autoencoder"
  - "graph-explanation-pruning"
```

### `related_writing`

List of writing item slugs.

```yaml
related_writing:
  - "graph-foundation-model-notes"
```

## 4.4 Example

```yaml
title: "Dynamic Graph Representation Learning"
slug: "dynamic-graph-representation-learning"
summary: "Learning representations for graphs whose nodes, edges, attributes, or structure change over time."
description: "This theme focuses on methods for representing evolving graph-structured data, including models that can adapt to new nodes, new edges, changing relationships, and temporal structure."
status: "active"
featured: true
related_projects:
  - "dynamic-graph-autoencoder"
related_writing: []
tags:
  - "graph-learning"
  - "dynamic-graphs"
  - "representation-learning"
```

---

## 5. Project

Projects represent selected research, software, dashboard, agentic systems, educational, or archived work.

## 5.1 Use Cases

Projects may appear on:

- Home page
- Projects page
- Research page
- Agentic Systems page
- Dashboards page
- Writing page

## 5.2 Fields

```yaml
title: ""
slug: ""
summary: ""
description: ""
category: ""
status: ""
role: ""
start_date: ""
end_date: ""
featured: false
visibility: ""
technologies: []
research_themes: []
links: []
artifacts: []
collaborators: []
privacy_notes: ""
```

## 5.3 Recommended Categories

```yaml
category: "Research Project"
category: "Agentic Systems Project"
category: "Dashboard / Visualization Project"
category: "Teaching / Educational Project"
category: "Software Project"
category: "Archived Project"
```

## 5.4 Recommended Status Values

```yaml
status: "active"
status: "prototype"
status: "published"
status: "archived"
status: "planned"
status: "private"
```

## 5.5 Field Notes

### `role`

Joseph’s role in the project.

Examples:

```yaml
role: "Lead researcher"
role: "Research assistant"
role: "Developer"
role: "Teaching assistant"
role: "Independent project"
```

### `artifacts`

Use for files or outputs associated with the project.

```yaml
artifacts:
  - type: "poster"
    label: "Conference Poster"
    url: "/assets/posters/example.pdf"
  - type: "code"
    label: "GitHub Repository"
    url: "https://github.com/example/repo"
```

### `privacy_notes`

Use when the project cannot be fully public.

Example:

```yaml
privacy_notes: "This project uses private data. Public descriptions use sanitized examples and synthetic-data screenshots."
```

## 5.6 Example

```yaml
title: "Custom Coding-Agent Harness"
slug: "custom-coding-agent-harness"
summary: "A private research-engineering project exploring structured agentic software development through context-aware planning, tool execution, error feedback, and iterative repair."
description: "This project investigates coding-agent harness design as a systems problem. The harness is intended to support structured context management, tool use, test execution, error-aware feedback, and targeted repair during software development workflows."
category: "Agentic Systems Project"
status: "active"
role: "Independent developer and system designer"
start_date: ""
end_date: ""
featured: true
visibility: "private"
technologies:
  - "Python"
  - "Local LLM tooling"
  - "Command-line tools"
  - "Version control"
research_themes:
  - "agentic-software-engineering"
links: []
artifacts: []
collaborators: []
privacy_notes: "The project is currently a private prototype. Public descriptions should focus on design goals and high-level architecture rather than implementation details."
```

---

## 6. Agentic Systems Entry

Agentic systems entries describe agent-related concepts, prototypes, harness modules, or design themes.

This content type is separate from general projects because agentic systems are a major identity pillar of the site.

## 6.1 Use Cases

Agentic systems entries may appear on:

- Agentic Systems page
- Projects page
- Home page
- Writing page

## 6.2 Fields

```yaml
title: ""
slug: ""
summary: ""
description: ""
system_type: ""
status: ""
featured: false
visibility: ""
design_themes: []
technologies: []
related_projects: []
links: []
privacy_notes: ""
```

## 6.3 Recommended System Types

```yaml
system_type: "Coding-Agent Harness"
system_type: "Context Management"
system_type: "Tool Orchestration"
system_type: "Failure Recovery"
system_type: "Local-First AI Tool"
system_type: "Multi-Agent Workflow"
system_type: "Evaluation / Reliability"
```

## 6.4 Recommended Design Themes

```yaml
design_themes:
  - "structured context management"
  - "tool orchestration"
  - "test-driven repair"
  - "failure-aware feedback loops"
  - "local execution"
  - "project-specific memory"
  - "human review and control"
  - "multi-agent task decomposition"
  - "evaluation and reliability"
```

## 6.5 Example

```yaml
title: "Failure-Aware Feedback Loops"
slug: "failure-aware-feedback-loops"
summary: "A design pattern for coding agents in which failed commands, tests, or environment checks are converted into structured feedback for targeted repair."
description: "Failure-aware feedback loops treat errors as structured observations rather than dead ends. In a coding-agent harness, failed commands, stack traces, test failures, and environment diagnostics can be summarized, routed back into the agent workflow, and used to guide the next repair attempt."
system_type: "Failure Recovery"
status: "active"
featured: true
visibility: "public"
design_themes:
  - "failure-aware feedback loops"
  - "test-driven repair"
  - "tool orchestration"
technologies: []
related_projects:
  - "custom-coding-agent-harness"
links: []
privacy_notes: ""
```

---

## 7. Dashboard

Dashboards represent public demos, static exports, screenshots, or private/sanitized case studies.

## 7.1 Use Cases

Dashboards may appear on:

- Dashboards page
- Projects page
- Home page
- Business-adjacent sections
- Case study sections

## 7.2 Fields

```yaml
title: ""
slug: ""
summary: ""
description: ""
audience: ""
problem_solved: ""
data_source_type: ""
demo_type: ""
status: ""
visibility: ""
featured: false
tools: []
links: []
screenshots: []
privacy_notes: ""
```

## 7.3 Recommended Demo Types

```yaml
demo_type: "live-public"
demo_type: "static-export"
demo_type: "synthetic-screenshot"
demo_type: "sanitized-case-study"
demo_type: "private"
demo_type: "planned"
```

## 7.4 Recommended Data Source Types

```yaml
data_source_type: "public data"
data_source_type: "synthetic data"
data_source_type: "sanitized private data"
data_source_type: "private client data"
data_source_type: "private research data"
data_source_type: "not applicable"
```

## 7.5 Screenshot Fields

```yaml
screenshots:
  - label: ""
    path: ""
    alt: ""
    caption: ""
```

## 7.6 Example

```yaml
title: "HPC Systems Dashboard"
slug: "hpc-systems-dashboard"
summary: "A dashboard concept for exploring system-level behavior, utilization patterns, and performance signals in high-performance computing environments."
description: "This dashboard presents selected views for understanding complex HPC system behavior. Public versions should use synthetic or approved public data only."
audience: "Researchers and technical stakeholders"
problem_solved: "Helps summarize and visualize complex system behavior across multiple operational signals."
data_source_type: "synthetic data"
demo_type: "synthetic-screenshot"
status: "prototype"
visibility: "synthetic-demo"
featured: true
tools:
  - "Python"
  - "Plotly"
  - "Dash"
links: []
screenshots:
  - label: "Synthetic Overview"
    path: "/images/dashboards/hpc-synthetic-overview.png"
    alt: "Synthetic dashboard showing high-level HPC utilization and performance indicators."
    caption: "Synthetic-data dashboard mockup."
privacy_notes: "Do not use private HPC data unless explicitly approved. Public examples should rely on synthetic data."
```

---

## 8. Writing Item

Writing items include publications, preprints, technical reports, posters, talks, essays, and selected notes.

## 8.1 Use Cases

Writing items may appear on:

- Writing page
- Research page
- Project pages
- Home page

## 8.2 Fields

```yaml
title: ""
slug: ""
summary: ""
abstract: ""
type: ""
status: ""
date: ""
authors: []
venue: ""
featured: false
links: []
citation: ""
related_projects: []
related_research_themes: []
```

## 8.3 Recommended Types

```yaml
type: "publication"
type: "preprint"
type: "technical-report"
type: "poster"
type: "talk"
type: "note"
type: "essay"
type: "project-writeup"
```

## 8.4 Recommended Status Values

```yaml
status: "published"
status: "accepted"
status: "submitted"
status: "in preparation"
status: "draft"
status: "presented"
status: "archived"
```

## 8.5 Field Notes

### `authors`

Use ordered author names.

```yaml
authors:
  - "Joseph Caldwell"
  - "Collaborator Name"
```

### `venue`

Use the conference, workshop, journal, class, reading group, event, or context.

Example:

```yaml
venue: "Workshop on Graph Learning"
```

Do not invent venues.

### `citation`

Optional formatted citation. Leave blank if unavailable.

## 8.6 Example

```yaml
title: "Notes on Agent Harness Design for Coding Workflows"
slug: "agent-harness-design-coding-workflows"
summary: "A technical note outlining design considerations for coding-agent harnesses, including context management, tool orchestration, and failure-aware feedback."
abstract: ""
type: "note"
status: "draft"
date: ""
authors:
  - "Joseph Caldwell"
venue: ""
featured: false
links: []
citation: ""
related_projects:
  - "custom-coding-agent-harness"
related_research_themes:
  - "agentic-software-engineering"
```

---

## 9. Teaching Experience

Teaching entries describe teaching assistant roles, mentoring, outreach, course support, or instructional materials.

## 9.1 Use Cases

Teaching entries may appear on:

- Teaching page
- About page
- CV page
- Home page

## 9.2 Fields

```yaml
title: ""
slug: ""
summary: ""
role: ""
institution: ""
course: ""
term: ""
start_date: ""
end_date: ""
description: ""
responsibilities: []
skills: []
links: []
featured: false
```

## 9.3 Recommended Roles

```yaml
role: "Teaching Assistant"
role: "Mentor"
role: "Instructor"
role: "Guest Lecturer"
role: "Workshop Facilitator"
role: "Outreach Volunteer"
```

## 9.4 Example

```yaml
title: "Teaching Assistant — Foundations of Computing"
slug: "ta-foundations-of-computing"
summary: "Teaching assistant experience supporting undergraduate students in foundational computer science topics."
role: "Teaching Assistant"
institution: "University of North Texas"
course: "CSCE 2100: Foundations of Computing"
term: ""
start_date: ""
end_date: ""
description: "Supported students in an undergraduate computer science course focused on foundational computing concepts."
responsibilities:
  - "Supported student learning"
  - "Assisted with course activities"
  - "Provided guidance on technical concepts"
skills:
  - "Teaching"
  - "Mentoring"
  - "Computer science education"
links: []
featured: true
```

---

## 10. Talk or Presentation

Talk entries describe conference talks, class talks, guest lectures, posters, seminars, or internal presentations.

## 10.1 Use Cases

Talks may appear on:

- Writing page
- Talks page, if added later
- Research page
- Teaching page
- Project pages

## 10.2 Fields

```yaml
title: ""
slug: ""
summary: ""
event: ""
date: ""
location: ""
type: ""
status: ""
links: []
related_projects: []
related_research_themes: []
featured: false
```

## 10.3 Recommended Types

```yaml
type: "conference-talk"
type: "poster"
type: "guest-lecture"
type: "class-presentation"
type: "seminar"
type: "workshop"
type: "internal-presentation"
```

## 10.4 Example

```yaml
title: "Graph Learning Research Overview"
slug: "graph-learning-research-overview"
summary: "A presentation introducing research directions in graph learning, explainability, and dynamic graph representation."
event: ""
date: ""
location: ""
type: "seminar"
status: "planned"
links: []
related_projects: []
related_research_themes:
  - "dynamic-graph-representation-learning"
  - "graph-explainability"
featured: false
```

---

## 11. External Link

External links represent public profiles, repositories, business websites, scholar profiles, and professional platforms.

## 11.1 Use Cases

External links may appear on:

- Home page
- Contact page
- Footer
- CV page
- About page

## 11.2 Fields

```yaml
label: ""
url: ""
type: ""
priority: 0
show_in_footer: false
show_on_contact: true
```

## 11.3 Recommended Types

```yaml
type: "email"
type: "github"
type: "linkedin"
type: "google-scholar"
type: "orcid"
type: "business-site"
type: "cv"
type: "institutional-profile"
```

## 11.4 Example

```yaml
label: "GitHub"
url: "https://github.com/USERNAME"
type: "github"
priority: 1
show_in_footer: true
show_on_contact: true
```

---

## 12. CV Asset

CV assets define the public CV file and related metadata.

## 12.1 Use Cases

CV assets may appear on:

- CV page
- Home page
- Header navigation
- Footer
- Contact page

## 12.2 Fields

```yaml
title: ""
file_path: ""
last_updated: ""
summary: ""
version_label: ""
visibility: ""
```

## 12.3 Example

```yaml
title: "Joseph Caldwell CV"
file_path: "/cv/Joseph_Caldwell_CV.pdf"
last_updated: ""
summary: "Academic CV for Joseph Caldwell."
version_label: "Public academic CV"
visibility: "public"
```

---

## 13. Homepage Feature

Homepage features define selected content promoted on the home page.

## 13.1 Use Cases

Homepage features may reference:

- Research themes
- Projects
- Agentic systems entries
- Dashboards
- Writing items
- CV

## 13.2 Fields

```yaml
title: ""
summary: ""
feature_type: ""
target_slug: ""
target_url: ""
priority: 0
```

## 13.3 Recommended Feature Types

```yaml
feature_type: "research-theme"
feature_type: "project"
feature_type: "agentic-system"
feature_type: "dashboard"
feature_type: "writing"
feature_type: "cv"
feature_type: "external-link"
```

## 13.4 Example

```yaml
title: "Agentic Systems"
summary: "Structured coding-agent harnesses, local-first AI tools, and failure-aware feedback loops."
feature_type: "agentic-system"
target_slug: "agentic-systems"
target_url: "/agentic-systems/"
priority: 2
```

---

## 14. Recommended Initial Content Collections

The preferred approach for repeated content types is **Astro content collections with `zod` schemas**. This gives schema validation at build time and clear types throughout the site.

Recommended collections for version 1:

```text
src/content/research-themes/
src/content/projects/
src/content/agentic-systems/
src/content/dashboards/
src/content/writing/
src/content/teaching/
```

For version 1, talks live inside the Writing collection using `type: "talk"` rather than a separate `src/content/talks/` collection. A standalone talks collection (and a `/talks/` page) may be added later if and when the writing collection grows enough to warrant a split.

---

## 15. Recommended Data Files for Global and Singleton Data

For global, singleton, or non-repeated configuration, the preferred approach is **simple typed data files** under `src/data/`. Content collections are overkill for items that exist as exactly one thing.

Recommended data files for version 1:

```text
src/data/site.ts          // site name, description, canonical URL, default OG image
src/data/navigation.ts    // primary nav, footer nav
src/data/links.ts         // external links (GitHub, LinkedIn, Scholar, ORCID, business site)
src/data/cv.ts            // CV asset metadata (file path, last updated, version label)
```

Other site-wide configuration may be added here as needed. Anything that has more than a handful of entries and benefits from schema validation should move into a content collection instead.

---

## 16. Content Validation Rules

When practical, content entries should be validated against a schema.

Validation should ensure:

- Required fields are present
- Slugs are unique
- Links are valid or clearly marked as placeholders
- Status values use approved labels
- Visibility values use approved labels
- Featured items have summaries
- Private items do not expose inappropriate details

If using Astro content collections, schema validation should be implemented with `zod`.

---

## 17. Placeholder Content Rules

Placeholder content is allowed during scaffolding.

Placeholder content must be clearly marked.

Acceptable placeholders:

```yaml
title: "Project Title Placeholder"
summary: "Placeholder summary. Replace with verified project description."
status: "draft"
visibility: "private"
```

Do not create realistic but fictional achievements.

Avoid placeholders such as:

```yaml
venue: "NeurIPS 2026"
status: "accepted"
award: "Best Paper"
```

unless they are verified.

---

## 18. Privacy Rules by Content Type

## 18.1 Projects

Private projects may be listed if described at a high level.

Do not include:

- Private repositories
- Sensitive design details
- Credentials
- Client identities without permission
- Unpublished confidential research details

## 18.2 Dashboards

Private dashboards should use:

- Synthetic data
- Sanitized screenshots
- Architecture diagrams
- Short case studies
- Publicly approved examples

Do not include raw private data.

## 18.3 Writing

Draft writing may be listed if appropriate, but do not imply publication, acceptance, or peer review unless verified.

## 18.4 Teaching

Teaching entries should avoid private student information.

## 18.5 CV

The public CV should omit private address, sensitive personal details, and confidential references.

---

## 19. Content Lifecycle

Content should move through clear stages.

Recommended lifecycle values:

```yaml
status: "planned"
status: "draft"
status: "active"
status: "prototype"
status: "published"
status: "archived"
```

Typical lifecycle:

```text
planned → draft → active/prototype → published → archived
```

Not all content types need every status.

---

## 20. Featured Content Rules

Featured content should be limited and intentional.

Homepage featured items should support the core identity:

- Research
- Agentic systems
- Selected projects
- Dashboards
- Teaching
- CV

Avoid featuring too many items at once.

Recommended homepage feature count:

```text
3 to 6 items
```

Each featured item should have:

- Clear title
- Short summary
- Link target
- Relevance to core identity

---

## 21. Navigation Rules

The main navigation should prioritize clarity.

Recommended version 1 navigation:

```text
Home
Research
Agentic Systems
Projects
Dashboards
Teaching
Writing
CV
About
Contact
```

If the navigation feels too crowded, lower-priority pages may move to the footer or a secondary menu. About is the most likely candidate to move to the footer if the main nav becomes too dense, but it should remain in the main nav for version 1.

The CV should remain easy to find.

---

## 22. URL Rules

URLs should be:

- Lowercase
- Descriptive
- Stable
- Hyphenated
- Free of dates unless dates are part of the content identity

Good examples:

```text
/research/
/agentic-systems/
/projects/custom-coding-agent-harness/
/dashboards/hpc-systems-dashboard/
/writing/agent-harness-design-coding-workflows/
```

Avoid:

```text
/page1/
/misc/
/cool-stuff/
/2026-random-update/
```

---

## 23. Cross-Linking Rules

Content should cross-link when useful.

Examples:

- A research theme links to related projects.
- A project links to related writing.
- A dashboard links to the project that produced it.
- An agentic systems entry links to the custom harness project.
- The CV page links to research, teaching, and writing.
- The contact page links to GitHub, LinkedIn, and business site.

Cross-linking should help visitors understand the structure of Joseph’s work.

---

## 24. Business-Adjacent Content Rules

Business-related content may appear when it supports Joseph’s technical identity.

Acceptable examples:

- Local-first AI tools
- Dashboards for small organizations
- Applied visualization systems
- Caldwell Consulting & Design link
- Technical case studies using synthetic or approved data

Avoid:

- Sales funnels
- Pricing
- Booking widgets
- Marketing-heavy copy
- Claims about clients without permission
- Primary navigation focused on services

The personal site should remain academic-first.

---

## 25. Initial Seed Content Suggestions

The first scaffold may include placeholder entries for:

```text
Research Themes:
- Dynamic Graph Representation Learning
- Graph Explainability and Pruning
- Scalable AI Systems
- Agentic Software Engineering

Projects:
- Dynamic Graph Autoencoder
- Graph Explanation and Pruning Experiments
- Custom Coding-Agent Harness
- HPC Systems Dashboard

Dashboards:
- HPC Systems Dashboard
- Research Visualization Dashboard
- Synthetic Small-Business Operations Dashboard

Writing:
- Notes on Agent Harness Design for Coding Workflows
- Dynamic Graph Learning Research Notes

Teaching:
- Teaching Assistant — Foundations of Computing
- AI4ALL Teaching or Mentoring Experience
```

These entries should be marked as draft or placeholder unless complete details are provided.

---

## 26. Implementation Guidance

The implementation should favor:

- Reusable components
- Structured data
- Markdown or MDX content
- Minimal hardcoded repeated content
- Clear types or schemas
- Simple file organization
- Easy editing by humans and agents

The content model should remain flexible. It should guide implementation without forcing unnecessary complexity.

---

## 27. Final Principle

The content model should help every page reinforce the same central identity:

> Joseph Caldwell is a researcher, teacher, and systems builder focused on reliable AI systems for complex, evolving workflows.

Every content item should either support that identity directly or provide useful context for understanding it.