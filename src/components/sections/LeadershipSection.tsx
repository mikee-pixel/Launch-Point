import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Leader, SectionIntro } from "@/content/types";
import { LeaderCard } from "./LeaderCard";

type LeadershipSectionProps = {
  intro: SectionIntro;
  data: Leader[];
};

export function LeadershipSection({ intro, data }: LeadershipSectionProps) {
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-title"
      className="relative overflow-hidden bg-navy-950 py-16 text-on-dark tone-dark lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[30%] -left-[15%] aspect-square w-[60%] bg-glow-soft"
      />
      <Container className="relative">
        <Reveal className="mb-12">
          <SectionHeading
            id="leadership-title"
            eyebrow={intro.eyebrow}
            title={intro.title}
            lead={intro.lead}
            tone="dark"
          />
        </Reveal>
        <Stagger className="grid gap-8 lg:grid-cols-3 lg:gap-6">
          {data.map((leader) => (
            <StaggerItem key={leader.slug} className="h-full">
              <LeaderCard leader={leader} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
