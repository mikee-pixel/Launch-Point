import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type BuildMetadataInput = {
  /** Page title without the brand suffix. Omit on the home page to use the default title. */
  title?: string;
  /** 140 to 160 characters. */
  description?: string;
  /** Absolute path, e.g. "/" or "/services/business-development". */
  path: string;
  /** 1200x630 social image path. Defaults to the generated root OG image. */
  image?: { url: string; alt: string };
  type?: "website" | "article";
};

const defaultImage = {
  url: "/opengraph-image",
  alt: `${siteConfig.name}, business origination and partner advisory`,
};

/** The only way pages build metadata (CLAUDE.md). */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path,
  image = defaultImage,
  type = "website",
}: BuildMetadataInput): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const images = [{ url: image.url, width: 1200, height: 630, alt: image.alt }];

  return {
    // `absolute` keeps the layout template from appending the brand twice.
    title: title ? { absolute: fullTitle } : { absolute: siteConfig.title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: images.map((i) => i.url),
    },
  };
}
