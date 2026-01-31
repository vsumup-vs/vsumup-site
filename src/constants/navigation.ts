export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Parent", href: "/" },
  { label: "Initiative", href: "/initiative" },
  { label: "Health", href: "/health" },
  { label: "AI Partner", href: "/meai" },
];

export const footerLinks = {
  ecosystem: [
    { label: "Initiative Manager", href: "/initiative" },
    { label: "vsumup Health", href: "/health" },
    { label: "Me@AI", href: "/meai" },
  ],
  caseStudies: [
    { label: "Initiative Manager", href: "/case-studies/initiative" },
    { label: "VitalEdge Health", href: "/case-studies/health" },
    { label: "Me@AI", href: "/case-studies/meai" },
  ],
  technical: [
    { label: "Contact Sales", href: "/contact" },
    { label: "Security Whitepaper", href: "/security" },
    { label: "API Specifications", href: "/api-docs" },
  ],
};
