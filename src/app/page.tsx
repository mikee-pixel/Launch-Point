import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { PartneringSection } from "@/components/sections/PartneringSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import {
  about,
  contact,
  hero,
  leadershipIntro,
  partnering,
} from "@/content/home";
import { leaders } from "@/content/leaders";
import { services, servicesIntro } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <HeroSection data={hero} />
      <AboutSection data={about} />
      <ServicesSection intro={servicesIntro} data={services} />
      <LeadershipSection intro={leadershipIntro} data={leaders} />
      <PartneringSection data={partnering} />
      <ContactSection data={contact} />
    </>
  );
}
