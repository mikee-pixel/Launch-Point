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
        {/* Auto-fit: columns follow the leader count and container width (1 on mobile,
            2+ when there's room); empty tracks collapse so cards always fill the row. */}
        <Stagger className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-8 md:gap-6">
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
