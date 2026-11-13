import Link from "next/link";
import { footerNav } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { CopyrightYear } from "./CopyrightYear";
import { Logo } from "./Logo";

const headingClass =
  "mb-4 font-sans text-xs leading-none font-semibold tracking-[0.12em] text-on-dark uppercase";
const linkClass =
  "inline-block py-1.5 no-underline transition-colors duration-200 ease-brand hover:text-on-dark";

export function Footer() {
  const { contact } = siteConfig;

  return (
    <footer
      id="site-footer"
      className="border-t border-line-dark bg-navy-950 text-sm text-on-dark-muted tone-dark"
    >
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="mb-4">
              <Logo className="h-16" nudge={false} />
            </div>
            <p className="max-w-[40ch]">{siteConfig.shortDescription}</p>
          </div>

          <nav aria-labelledby="footer-company">
            <h2 id="footer-company" className={headingClass}>
              Company
            </h2>
            <ul className="grid gap-0.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div role="group" aria-labelledby="footer-contact">
            <h2 id="footer-contact" className={headingClass}>
              Contact
            </h2>
            <ul className="grid gap-0.5">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className={`${linkClass} [overflow-wrap:anywhere]`}
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.phoneHref} className={linkClass}>
                  {contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-2 border-t border-line-dark py-6 text-[0.8125rem]">
          <span>
            © <CopyrightYear /> {siteConfig.name}. All rights reserved.
          </span>
          <span>{siteConfig.credit}</span>
        </div>
      </Container>
    </footer>
  );
}
