import Image from "next/image";
import rocket from "../../../public/images/brand/launchpoint-rocket.png";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconTile } from "@/components/ui/Icon";
import type { ContactContent } from "@/content/types";

type ContactSectionProps = {
  data: ContactContent;
};

/** Closing CTA. Direct email + phone (no form yet; see components.md when one is added). */
export function ContactSection({ data }: ContactSectionProps) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden bg-navy-950 py-16 text-on-dark tone-dark lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[40%] -right-[20%] aspect-square w-[70%] bg-glow-strong"
      />
      <Container className="relative">
        <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Image
              src={rocket}
              alt=""
              sizes="40px"
              className="mb-6 block h-22 w-auto"
            />
            <Eyebrow tone="dark">{data.eyebrow}</Eyebrow>
            <h2
              id="contact-title"
              className="mt-4 mb-6 text-[clamp(2.5rem,1.5rem+4vw,4.5rem)] font-extrabold tracking-[-0.02em]"
            >
              {data.title.before}
              <span className="text-orchid">{data.title.accent}</span>
              {data.title.after}
            </h2>
            <p className="max-w-[62ch] text-lg text-on-dark-muted">
              {data.lead}
            </p>
          </Reveal>

          <Stagger as="ul" className="grid gap-4">
            {data.methods.map((method) => (
              <StaggerItem
                as="li"
                key={method.label}
                className="flex items-center gap-4 rounded-md border border-line-dark bg-white/3 p-6"
              >
                <IconTile name={method.icon} className="bg-navy-800" />
                <div className="min-w-0">
                  <span className="block text-xs tracking-[0.12em] text-on-dark-muted uppercase">
                    {method.label}
                  </span>
                  <a
                    href={method.href}
                    className="inline-block py-1 text-[1.0625rem] leading-[1.4] font-semibold [overflow-wrap:anywhere] no-underline transition-colors duration-200 ease-brand hover:text-orchid"
                  >
                    {method.value}
                  </a>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
