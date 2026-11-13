import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { SectionIntro, Service } from "@/content/types";
import { ServiceCard } from "./ServiceCard";

type ServicesSectionProps = {
  intro: SectionIntro;
  data: Service[];
};

export function ServicesSection({ intro, data }: ServicesSectionProps) {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-paper py-16 text-ink lg:py-24"
    >
      <Container>
        <Reveal className="mb-12">
          <SectionHeading
            id="services-title"
            eyebrow={intro.eyebrow}
            title={intro.title}
            lead={intro.lead}
          />
        </Reveal>
        <Stagger className="grid gap-6 md:grid-cols-2">
          {data.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
