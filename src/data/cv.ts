// CV asset metadata. Render the file path through `withBase()` from
// `src/utils/paths.ts` so the link survives the configured Astro base path.
//
// The PDF itself is not committed yet; expected location is
// `public/cv/Joseph_Caldwell_CV.pdf`. Stage 7 owns the PDF.

import type { Visibility } from "./types";

export interface CVAsset {
  title: string;
  filePath: string;
  lastUpdated: string;
  summary: string;
  versionLabel: string;
  visibility: Visibility;
}

export const cv: CVAsset = {
  title: "Joseph Caldwell CV",
  filePath: "/cv/Joseph_Caldwell_CV.pdf",
  lastUpdated: "",
  summary: "Public academic CV for Joseph Caldwell.",
  versionLabel: "Public academic CV",
  visibility: "public",
};
