import Link from "next/link";
import { mainNav, primaryCta } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

/**
 * Sticky translucent header. The blur sits on ::before, not the header itself:
 * backdrop-filter on an ancestor would trap the mobile drawer's position:fixed.
 */
export function Header() {
  return (
    <header
      className={
        "sticky top-[env(safe-area-inset-top)] z-50 border-b border-line-dark text-on-dark tone-dark " +
        "before:absolute before:inset-0 before:-z-10 before:bg-navy-950/88 before:backdrop-blur-md before:content-[''] " +
        "after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-brand-gradient after:opacity-50 after:content-['']"
      }
    >
      <Container className="flex min-h-18 items-center justify-between gap-6">
        {/* Eager, not `preload`: LCP is the hero h1 (text). React still emits a preload hint
            for eager images, so this small logo is the page's single image preload. */}
        <Logo className="h-12 md:h-14" eager />

        <nav aria-label="Main" className="hidden gap-8 min-[960px]:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 text-[0.9375rem] font-medium text-on-dark-muted no-underline transition-colors duration-200 ease-brand hover:text-on-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <ButtonLink
          href={primaryCta.href}
          arrow
          className="hidden min-[960px]:inline-flex"
        >
          {primaryCta.label}
        </ButtonLink>

        <MobileNav
          items={mainNav}
          cta={primaryCta}
          contact={siteConfig.contact}
        />
      </Container>
    </header>
  );
}
