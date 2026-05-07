export interface NavItem {
  label: string;
  href: string;
}

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research/" },
  { label: "Agentic Systems", href: "/agentic-systems/" },
  { label: "Projects", href: "/projects/" },
  { label: "Dashboards", href: "/dashboards/" },
  { label: "Teaching", href: "/teaching/" },
  { label: "Writing", href: "/writing/" },
  { label: "CV", href: "/cv/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];
