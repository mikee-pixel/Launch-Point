import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { AboutContent } from "@/content/types";

type AboutSectionProps = {
  data: AboutContent;
};

export function AboutSection({ data }: AboutSectionProps) {
  const [first, ...rest] = data.paragraphs;

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-card py-16 text-ink lg:py-24"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <Reveal>
            <Eyebrow>{data.eyebrow}</Eyebrow>
            <h2
              id="about-title"
              className="mt-4 text-[clamp(1.75rem,1.2rem+2vw,2.75rem)] font-bold"
            >
              {data.title}
            </h2>
          </Reveal>
          <Reveal
            delay={0.08}
            className="grid max-w-[64ch] gap-4 text-[1.0625rem] text-ink-muted"
          >
            <p className="text-[1.1875rem] leading-[1.6] text-ink">{first}</p>
            {rest.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        </div>

        <Stagger
          as="ul"
          className="mt-16 grid grid-cols-2 border-t border-line md:grid-cols-4"
        >
          {data.stats.map((stat) => (
            <StaggerItem
              as="li"
              key={stat.label}
              className="grid gap-1 pt-6 pr-4"
            >
              <strong className="font-display text-[clamp(2rem,1.5rem+1.6vw,2.75rem)] leading-none font-bold text-ink tabular-nums">
                {stat.value}
                {stat.suffix && (
                  <span className="text-violet-ink">{stat.suffix}</span>
                )}
              </strong>
              <span className="max-w-[22ch] text-sm text-ink-muted">
                {stat.label}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
