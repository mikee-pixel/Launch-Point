export const siteConfig = {
  name: "Launch:Point",
  legalName: "Launch:Point",
  // TODO: confirm canonical host (apex vs www) with client before launch.
  url: "https://launchpoint.ph",
  title: "Launch:Point | Business Origination & Partner Advisory",
  description:
    "Launch:Point is a business origination and partner advisory firm helping enterprises win and deliver AI, Cloud, Cybersecurity, IoT and Managed Services deals.",
  shortDescription:
    "A business origination and partner advisory firm for enterprise AI, Cloud, Data, Cybersecurity, IoT, Network and Managed Services deals.",
  locale: "en_PH",
  // TODO: ask the client for an SVG logo (rules: logos are SVG). PNG until then.
  logo: "/images/brand/launchpoint-logo-white.png",
  /** Visible on white (Google shows schema logos on light backgrounds). Square, ≥112px. */
  schemaLogo: "/images/brand/launchpoint-with-circle-bg-gradient.png",
  contact: {
    email: "partneradvisor@launchpoint.ph",
    phone: "+63 919 999 9701",
    phoneHref: "tel:+639199999701",
  },
  // TODO: add company LinkedIn / other profiles when the client provides them.
  socials: [] as string[],
  credit: "Powered and designed by Upstream Techies",
} as const;

export type SiteConfig = typeof siteConfig;
