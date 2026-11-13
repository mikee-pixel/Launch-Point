import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import type { HeroContent } from "@/content/types";
import { OrbitGraphic } from "./OrbitGraphic";

type HeroSectionProps = {
  data: HeroContent;
};

/**
 * LCP section. Entrance is CSS (plays at first paint, no JS wait).
 * The h1 only lifts (transform), it is never hidden; secondary elements fade + lift.
 */
export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-navy-950 pt-16 pb-12 text-on-dark tone-dark lg:pt-24 lg:pb-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[20%] -right-[10%] aspect-square w-[70%] bg-glow"
      />
      <Container>
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <ul
              role="list"
              aria-label="Focus areas"
              className="flex animate-rise flex-wrap gap-x-2 gap-y-1.5 text-[0.8125rem] leading-[1.6] font-semibold tracking-[0.04em] text-on-dark-muted lowercase"
            >
              {data.domains.map((domain) => (
                <li
                  key={domain}
                  className="not-first:before:mr-2 not-first:before:text-orchid not-first:before:content-[':']"
                >
                  {domain}
                </li>
              ))}
            </ul>

            <h1
              id="hero-title"
              className="my-6 animate-lift text-[clamp(2.375rem,1.4rem+4.2vw,4.25rem)] font-extrabold tracking-[-0.02em] [animation-delay:80ms]"
            >
              {data.title.before}
              <span className="text-orchid">{data.title.accent}</span>
              {data.title.after}
            </h1>

            {/* Lift only: on small screens this paragraph can be the LCP element. */}
            <p className="mt-6 mb-8 max-w-[62ch] animate-lift text-lg text-on-dark-muted [animation-delay:160ms]">
              {data.lead}
            </p>

            <div className="flex animate-rise flex-wrap gap-4 [animation-delay:240ms]">
              <ButtonLink href={data.primaryCta.href} arrow>
                {data.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={data.secondaryCta.href} variant="ghost">
                {data.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>

          <OrbitGraphic
            label={data.orbitLabel}
            nodes={data.orbitNodes}
            className="animate-rise [animation-delay:160ms]"
          />
        </div>

        <div className="relative mt-16 grid animate-rise gap-4 border-t border-line-dark pt-8 [animation-delay:320ms] md:grid-cols-[220px_1fr] md:items-center">
          <p className="text-[0.8125rem] text-on-dark-muted">
            {data.pedigree.label}
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {data.pedigree.companies.map((company) => (
              <li
                key={company}
                className="font-display text-base leading-[1.4] font-bold tracking-[0.02em] text-white/78"
              >
                {company}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
