import { siteConfig } from "@/config/site";

/** JSON-LD builders. Only describe what is visible on the page. */

const orgId = `${siteConfig.url}/#organization`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: new URL(siteConfig.schemaLogo, siteConfig.url).toString(),
    description: siteConfig.description,
    email: siteConfig.contact.email,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phoneHref.replace("tel:", ""),
        availableLanguage: ["en"],
      },
    ],
    ...(siteConfig.socials.length > 0 && { sameAs: siteConfig.socials }),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { "@id": orgId },
    inLanguage: "en",
  };
}

/** Serialize for <script type="application/ld+json">, escaping "<" so content can't close the tag. */
export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
