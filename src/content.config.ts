// Astro content collections for josephcaldwell.com.
// See CONTENT_MODEL.md for the field-level reference and authoring rules.
//
// Vocabulary contract:
//   - `status` describes lifecycle / maturity.
//   - `visibility` describes exposure / publication safety.
// `status: "private"` is intentionally not a valid value anywhere — use the
// `visibility` field for public/private/internal/sanitized/synthetic-demo.

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const visibility = z.enum([
  "public",
  "private",
  "internal",
  "sanitized",
  "synthetic-demo",
]);

const link = z.object({
  label: z.string(),
  url: z.string(),
});

const artifact = z.object({
  type: z.string(),
  label: z.string(),
  url: z.string(),
});

const screenshot = z.object({
  label: z.string(),
  path: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
});

const baseFields = {
  title: z.string(),
  slug: z.string(),
  summary: z.string(),
  featured: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
};

const researchThemes = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/research-themes",
  }),
  schema: z.object({
    ...baseFields,
    description: z.string().optional(),
    status: z.enum(["planned", "active", "archived"]),
    relatedProjects: z.array(z.string()).optional(),
    relatedWriting: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: z.object({
    ...baseFields,
    description: z.string().optional(),
    category: z.string(),
    status: z.enum([
      "planned",
      "active",
      "prototype",
      "published",
      "archived",
    ]),
    visibility,
    role: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    technologies: z.array(z.string()).optional(),
    researchThemes: z.array(z.string()).optional(),
    links: z.array(link).optional(),
    artifacts: z.array(artifact).optional(),
    collaborators: z.array(z.string()).optional(),
    privacyNotes: z.string().optional(),
  }),
});

const agenticSystems = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/agentic-systems",
  }),
  schema: z.object({
    ...baseFields,
    description: z.string().optional(),
    systemType: z.string(),
    status: z.enum([
      "planned",
      "draft",
      "active",
      "prototype",
      "published",
      "archived",
    ]),
    visibility,
    designThemes: z.array(z.string()).optional(),
    technologies: z.array(z.string()).optional(),
    relatedProjects: z.array(z.string()).optional(),
    links: z.array(link).optional(),
    privacyNotes: z.string().optional(),
  }),
});

const dashboards = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/dashboards",
  }),
  schema: z.object({
    ...baseFields,
    description: z.string().optional(),
    audience: z.string().optional(),
    problemSolved: z.string().optional(),
    dataSourceType: z.enum([
      "public data",
      "synthetic data",
      "sanitized private data",
      "private client data",
      "private research data",
      "not applicable",
    ]),
    demoType: z.enum([
      "live-public",
      "static-export",
      "synthetic-screenshot",
      "sanitized-case-study",
      "private",
      "planned",
    ]),
    status: z.enum([
      "planned",
      "prototype",
      "active",
      "published",
      "archived",
    ]),
    visibility,
    tools: z.array(z.string()).optional(),
    links: z.array(link).optional(),
    screenshots: z.array(screenshot).optional(),
    privacyNotes: z.string().optional(),
  }),
});

const writing = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/writing",
  }),
  schema: z.object({
    ...baseFields,
    abstract: z.string().optional(),
    type: z.enum([
      "publication",
      "preprint",
      "technical-report",
      "poster",
      "talk",
      "note",
      "essay",
      "project-writeup",
    ]),
    status: z.enum([
      "planned",
      "draft",
      "submitted",
      "accepted",
      "published",
      "presented",
      "archived",
    ]),
    visibility,
    date: z.string().optional(),
    authors: z.array(z.string()).optional(),
    venue: z.string().optional(),
    links: z.array(link).optional(),
    citation: z.string().optional(),
    relatedProjects: z.array(z.string()).optional(),
    relatedResearchThemes: z.array(z.string()).optional(),
  }),
});

const teaching = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/teaching",
  }),
  schema: z.object({
    ...baseFields,
    role: z.string(),
    institution: z.string().optional(),
    course: z.string().optional(),
    term: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    description: z.string().optional(),
    responsibilities: z.array(z.string()).optional(),
    skills: z.array(z.string()).optional(),
    links: z.array(link).optional(),
    visibility: visibility.optional(),
  }),
});

export const collections = {
  researchThemes,
  projects,
  agenticSystems,
  dashboards,
  writing,
  teaching,
};
