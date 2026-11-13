import { primaryCta } from "@/config/routes";
import { siteConfig } from "@/config/site";
import type {
  AboutContent,
  ContactContent,
  HeroContent,
  PartneringContent,
  SectionIntro,
} from "./types";

export const hero: HeroContent = {
  domains: [
    "ai",
    "cloud",
    "data",
    "cybersec",
    "iot",
    "network",
    "managed services",
  ],
  title: { before: "A business ", accent: "origination", after: " company" },
  lead: "Launch:Point is a premier business origination and partner advisory firm dedicated to unlocking and securing high-value revenue opportunities for enterprises.",
  primaryCta,
  secondaryCta: { label: "Explore services", href: "/#services" },
  orbitLabel:
    "Launch:Point at the centre of AI, Cloud, Data, Cybersecurity, IoT, Network and Managed Services",
  orbitNodes: [
    "AI",
    "Cybersec",
    "Cloud",
    "Managed Services",
    "IoT",
    "Data",
    "Network",
  ],
  pedigree: {
    label: "Our partner advisors have led teams at",
    companies: [
      "PLDT Enterprise",
      "ePLDT",
      "Oracle",
      "Cisco",
      "Microsoft",
      "Fortinet",
      "SAS Institute",
    ],
  },
};

export const about: AboutContent = {
  eyebrow: "Who we are",
  title: "About Launch:Point",
  paragraphs: [
    "We serve as your trusted partner in delivering deep industry insights, driving strategic customer engagements, accelerating market penetration, and executing end-to-end business development and fulfillment of tech based solutions like AI, Cloud, Cybersecurity, IoT and Managed Services.",
    "Guided by a seasoned team of expert partner advisors, Launch:Point crafts tailored strategies that establish strong foundations for sustainable, long-term business growth and competitive advantage.",
  ],
  // TODO: confirm figures with client before launch.
  stats: [
    { value: "35", suffix: "+", label: "Years in telecom and IT leadership" },
    {
      value: "4",
      label: "Partner advisor services, from origination to fulfillment",
    },
    { value: "7", label: "Technology domains, from AI to managed services" },
    { value: "3", label: "Senior partner advisors leading every engagement" },
  ],
};

export const leadershipIntro: SectionIntro = {
  eyebrow: "Leadership",
  title: "Driving Our Vision Forward",
  lead: "Seasoned partner advisors with decades of senior leadership across telecommunications, IT and business process outsourcing.",
};

export const partnering: PartneringContent = {
  eyebrow: "Why partner with us",
  title: "Partnering With Launch:Point",
  lead: "Relationships, resources and disciplined capacity: the three things that move enterprise deals to closure faster.",
  pillars: [
    {
      icon: "users",
      title: "Leverage on existing relationships",
      paragraphs: [
        "Strategically nurturing and expanding the value derived from current clients by deepening engagement and trust, through data-driven insights, regular personalized communication, and exceptional service that reinforces loyalty and satisfaction.",
        "Launch:Point helps businesses identify upsell and cross-sell opportunities, as well as gain referrals, by closely managing customer interactions in a holistic and organized manner.",
      ],
    },
    {
      icon: "network",
      title: "Broad network of sales and tech resources",
      paragraphs: [
        "Harnessing a broad ecosystem of skilled professionals, advanced tools, and strategic partnerships to accelerate business growth and solution delivery.",
        "This network provides access to specialized sales expertise, cutting-edge technical capabilities, and innovative market approaches that enhance market reach and competitive positioning.",
      ],
    },
    {
      icon: "clock",
      title: "Manage time and capacity",
      paragraphs: [
        "Optimizing how resources and schedules are allocated to maximize productivity and meet client commitments efficiently, with clarity and consistency that accelerate deal progression and closure.",
        "Timely delivery without compromising quality, with the flexibility to adapt to changing priorities. Through capacity planning, Launch:Point helps businesses unlock operational efficiency and sustainable growth.",
      ],
    },
  ],
};

export const contact: ContactContent = {
  eyebrow: "Get in touch",
  title: { before: "Launch ", accent: "with", after: " us" },
  lead: "Talk to a partner advisor about your next enterprise technology deal.",
  methods: [
    {
      icon: "mail",
      label: "Email",
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
    {
      icon: "smartphone",
      label: "Mobile",
      value: siteConfig.contact.phone,
      href: siteConfig.contact.phoneHref,
    },
  ],
};
