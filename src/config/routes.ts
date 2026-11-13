/**
 * Single source for navigation and the sitemap.
 * Nav items point to home anchors today. When a section becomes its own page,
 * change its `href` here (e.g. "/#services" -> "/services") and add it to `pages`.
 */

export type NavItem = {
  label: string;
  href: string;
};

export type PageRoute = {
  path: string;
  /** ISO date of the last meaningful content change. */
  lastModified: string;
  changeFrequency?: "weekly" | "monthly" | "yearly";
  priority?: number;
};

export const mainNav: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Partnering", href: "/#partnering" },
  { label: "Contact", href: "/#contact" },
];

/** Footer "Company" column: same anchors minus Contact (it has its own column). */
export const footerNav: NavItem[] = mainNav.filter(
  (item) => item.href !== "/#contact",
);

export const primaryCta: NavItem = {
  label: "Launch with us",
  href: "/#contact",
};

/** Real pages only (never #anchors). Used by sitemap.ts. */
export const pages: PageRoute[] = [
  {
    path: "/",
    lastModified: "2026-11-13",
    changeFrequency: "monthly",
    priority: 1,
  },
];
