import type { Metadata, Viewport } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { siteConfig } from "@/config/site";
import { jsonLd, organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

// Both are variable fonts: one file each covers every weight MASTER.md uses.
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

// Staging/preview builds set SITE_NOINDEX=true in the host's env. Never hard-code noindex.
const noindex = process.env.SITE_NOINDEX === "true";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  ...(noindex && { robots: { index: false, follow: false } }),
};

export const viewport: Viewport = {
  themeColor: "#0d0e2b", // = --color-navy-950 (viewport metadata can't read CSS variables)
  colorScheme: "light",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} ${jakarta.variable}`}>
      <body>
        {/* Without JS, scroll reveals never run: show their content instead of leaving it at opacity 0. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <SkipLink />
        <MotionProvider>
          <Header />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
        </MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd([organizationSchema(), websiteSchema()]),
          }}
        />
      </body>
    </html>
  );
}
