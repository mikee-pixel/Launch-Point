import type { NavItem } from "@/config/routes";

/** Icon keys; sections map them to lucide-react components. Keeps content free of JSX. */
export type IconName =
  | "trending-up"
  | "git-merge"
  | "layers"
  | "circle-check"
  | "users"
  | "network"
  | "clock"
  | "mail"
  | "smartphone";

/** Heading split so one word can carry the accent colour. */
export type AccentTitle = {
  before: string;
  accent: string;
  after: string;
};

export type SectionIntro = {
  eyebrow: string;
  title: string;
  lead?: string;
};

export type HeroContent = {
  /** Lowercase focus areas shown above the h1 and around the orbit. */
  domains: string[];
  title: AccentTitle;
  lead: string;
  primaryCta: NavItem;
  secondaryCta: NavItem;
  /** Accessible description of the orbit graphic. */
  orbitLabel: string;
  orbitNodes: string[];
  pedigree: { label: string; companies: string[] };
};

export type Stat = {
  value: string;
  /** Optional accent suffix, e.g. "+". */
  suffix?: string;
  label: string;
};

export type AboutContent = SectionIntro & {
  paragraphs: string[];
  stats: Stat[];
};

export type Service = {
  /** Future route: /services/[slug]. */
  slug: string;
  title: string;
  icon: IconName;
  summary: string;
  details: string;
  tags: string[];
};

export type ExperienceItem = {
  title: string;
  period: string;
};

export type Leader = {
  slug: string;
  name: string;
  initials: string;
  tagline: string;
  role: string;
  summary: string;
  bio: string;
  experience: ExperienceItem[];
  /** Omitted until confirmed; the LinkedIn button only renders when present. */
  linkedin?: string;
  /** Path under /public/images/team once the client supplies photos. */
  photo?: string;
};

export type Pillar = {
  icon: IconName;
  title: string;
  paragraphs: string[];
};

export type PartneringContent = SectionIntro & {
  pillars: Pillar[];
};

export type ContactMethod = {
  icon: IconName;
  label: string;
  value: string;
  href: string;
};

export type ContactContent = {
  eyebrow: string;
  title: AccentTitle;
  lead: string;
  methods: ContactMethod[];
};
