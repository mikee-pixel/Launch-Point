import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PartneringContent } from "@/content/types";

type PartneringSectionProps = {
  data: PartneringContent;
};

export function PartneringSection({ data }: PartneringSectionProps) {
  return (
    <section
      id="partnering"
      aria-labelledby="partnering-title"
      className="bg-card py-16 text-ink lg:py-24"
    >
      <Container>
        <Reveal className="mb-12">
          <SectionHeading
            id="partnering-title"
            eyebrow={data.eyebrow}
            title={data.title}
            lead={data.lead}
          />
        </Reveal>
        <Stagger className="grid border-t border-line lg:grid-cols-3">
          {data.pillars.map((pillar) => (
            <StaggerItem
              as="article"
              key={pillar.title}
              className="grid content-start gap-4 border-b border-line py-8 lg:border-b-0 lg:border-l lg:px-8 lg:pb-0 lg:first:border-l-0 lg:first:pl-0"
            >
              <Icon
                name={pillar.icon}
                strokeWidth={1.5}
                className="size-7 text-violet-ink"
              />
              <h3 className="text-xl font-bold">{pillar.title}</h3>
              {pillar.paragraphs.map((paragraph, i) => (
                <p
                  key={paragraph}
                  className={
                    i === 0
                      ? "text-[0.9375rem] text-ink"
                      : "text-[0.9375rem] text-ink-muted"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
