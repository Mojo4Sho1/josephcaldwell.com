// Homepage feature configuration.
//
// Feature entries promote items from content collections (or singletons like
// the CV) onto the homepage. Real featured content is intentionally deferred
// to Stage 6 — leave this list empty until verified content exists.

import type { FeatureType } from "./types";

export interface HomepageFeature {
  title: string;
  summary: string;
  featureType: FeatureType;
  targetSlug?: string;
  targetUrl?: string;
  priority: number;
}

export const homepageFeatures: HomepageFeature[] = [];
