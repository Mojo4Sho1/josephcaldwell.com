// Shared types used by both content collections and `src/data/` files.
// Keep these in sync with the enums in `src/content.config.ts`.

export type Visibility =
  | "public"
  | "private"
  | "internal"
  | "sanitized"
  | "synthetic-demo";

export type ExternalLinkType =
  | "email"
  | "github"
  | "linkedin"
  | "google-scholar"
  | "orcid"
  | "business-site"
  | "cv"
  | "institutional-profile";

export type FeatureType =
  | "research-theme"
  | "project"
  | "agentic-system"
  | "dashboard"
  | "writing"
  | "cv"
  | "external-link";
