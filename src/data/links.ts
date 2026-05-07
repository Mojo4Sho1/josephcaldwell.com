// External profile and contact links.
//
// Entries with an empty `url` are intentional placeholders — verified values
// must be supplied before the first public deploy (see `AGENTS.md` §23a).
// Do not invent URLs, handles, or contact details.

import type { ExternalLinkType } from "./types";

export interface ExternalLink {
  label: string;
  url: string;
  type: ExternalLinkType;
  priority: number;
  showInFooter: boolean;
  showOnContact: boolean;
}

export const externalLinks: ExternalLink[] = [
  {
    // TODO: confirm preferred public-facing email before first deploy.
    label: "Email",
    url: "",
    type: "email",
    priority: 1,
    showInFooter: false,
    showOnContact: true,
  },
  {
    // TODO: confirm GitHub handle before first deploy.
    label: "GitHub",
    url: "",
    type: "github",
    priority: 2,
    showInFooter: true,
    showOnContact: true,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/joseph-caldwell-374bb868/",
    type: "linkedin",
    priority: 3,
    showInFooter: true,
    showOnContact: true,
  },
  {
    // TODO: add Google Scholar profile URL when available.
    label: "Google Scholar",
    url: "",
    type: "google-scholar",
    priority: 4,
    showInFooter: false,
    showOnContact: true,
  },
  {
    // TODO: add ORCID identifier when available.
    label: "ORCID",
    url: "",
    type: "orcid",
    priority: 5,
    showInFooter: false,
    showOnContact: true,
  },
  {
    label: "Caldwell Consulting & Design",
    url: "https://caldwellcd.com",
    type: "business-site",
    priority: 6,
    showInFooter: true,
    showOnContact: true,
  },
];
