import type { SectionIntro, Service } from "./types";

export const servicesIntro: SectionIntro = {
  eyebrow: "What we do",
  title: "Partner Advisor Services",
  lead: "Four services that take an enterprise opportunity from the first conversation to a signed deal and successful delivery.",
};

export const services: Service[] = [
  {
    slug: "business-development",
    title: "Business Development",
    icon: "trending-up",
    summary:
      "The strategic process of identifying, cultivating, and securing new growth opportunities for enterprises.",
    details:
      "This includes market research, opportunity assessment, partnership formation, and the creation of actionable plans to drive revenue expansion and market penetration. The team leverages deep industry intelligence and strategic customer engagement to build scalable business models and optimize sales and marketing strategies.",
    tags: [
      "Market research",
      "Opportunity assessment",
      "Partnership formation",
    ],
  },
  {
    slug: "mergers-and-acquisitions",
    title: "Merger & Acquisitions",
    icon: "git-merge",
    summary:
      "Proactively identifying, sourcing, screening, and initiating discussions with acquisition targets to drive inorganic growth for private equity firms, corporate buyers, and investors.",
    details:
      "This encompasses market research to discover targets aligned with strategic fit, financial performance and expansion potential. Engaging decision-makers involves qualifying leads through initial assessments of cultural/operational synergies, risk profiles, and integration feasibility, advancing to exploratory talks, non-disclosure agreements, letters of intent, or advisory mandates.",
    tags: ["Target sourcing", "Synergy assessment", "NDAs & LOIs"],
  },
  {
    slug: "solutioning-and-architecting",
    title: "Solutioning & Architecting",
    icon: "layers",
    summary:
      "Designing tailored, process-driven solutions that transform business challenges into scalable, efficient systems.",
    details:
      "This approach focuses on simplifying complexity by mapping workflows, identifying inefficiencies, and collaboratively building robust architectures that align with strategic goals. The methodology goes beyond advice, emphasizing practical implementation and impact by structuring customer engagements and revenue opportunity frameworks with clarity, consistency, and collaboration.",
    tags: ["Workflow mapping", "Solution architecture", "Revenue frameworks"],
  },
  {
    slug: "project-fulfillment",
    title: "Project Fulfillment",
    icon: "circle-check",
    summary:
      "A comprehensive service that ensures the successful execution and delivery of business initiatives, turning strategic plans into tangible results.",
    details:
      "This includes negotiating key terms and facilitating agreements to advance deals to closure, as well as monitoring and managing ongoing client or deal relationships for business growth and long-term value.",
    tags: ["Deal negotiation", "Closure", "Account management"],
  },
];
