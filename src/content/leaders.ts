import type { Leader } from "./types";

// TODO: client to supply LinkedIn profile URLs for each leader.
// Photos: the #DEE4F6 backdrop must be in the image file itself (see design-system/launchpoint/pages/home.md).
export const leaders: Leader[] = [
  {
    slug: "john-gonzales",
    name: "John Gonzales",
    initials: "JG",
    photo: "/images/team/john-gonzales.jpg",
    tagline: "Driving our vision forward",
    role: "Former CEO & President, PLDT Clark Telecom Inc.",
    summary:
      "A seasoned business leader with over 35 years of experience in the telecommunications and Information Technology industry, including 19 years in senior executive roles. Proven success in launching and transforming businesses to achieve revenue, profitability and operational excellence.",
    bio: "His ability to integrate technology with business strategy has enabled the successful rollout of cutting-edge services, contributing to the digital empowerment of enterprises. John's executive approach combines visionary strategy with hands-on execution, inspiring teams to exceed targets and deliver measurable results in dynamic environments.",
    experience: [
      {
        title: "CEO & President, PLDT Clark Telecom Inc.",
        period: "2024–2025",
      },
      {
        title:
          "FVP & Head, Partner & Alliance / Business Development / Product Development, PLDT Enterprise",
        period: "2024–2025",
      },
      { title: "Chief Commercial Officer, ePLDT", period: "2022–2023" },
      {
        title: "FVP & Head, Enterprise Digital Solutions, PLDT Enterprise",
        period: "2015–2021",
      },
      {
        title: "VP & Head, Customer Relations Management, PLDT Enterprise",
        period: "2013–2015",
      },
      { title: "Founder & CEO, Business Cloud Live", period: "2011–2013" },
      {
        title: "General Manager, Jebsen & Jessen Communications PH",
        period: "2009–2011",
      },
      {
        title: "General Manager, Teledata Communications Philippines",
        period: "2006–2008",
      },
      { title: "Territory Manager, Oracle Philippines", period: "2004–2006" },
    ],
  },
  // {
  //   slug: "mitch-locsin",
  //   name: "Mitch Locsin",
  //   initials: "ML",
  //   tagline: "Leading with purpose",
  //   role: "Chairman, Contact Center Association of the Philippines",
  //   summary:
  //     "A recognized and pioneering leader in the BPO industry, Mitch played a key role having served as a Senate Consultant for IT/BPO and Economic Affairs. He leads several industry associations and had been a driving force behind the Next Wave Cities program, successfully attracting foreign investments, expansion opportunities and exponentially growing the industry.",
  //   bio: "With strong expertise in sales and marketing, Mitch fueled PLDT's Enterprise and International revenue growth in technology-driven digital markets. He crafts and executes high-impact, precision-driven sales strategies that deliver results. Committed to operational excellence and business efficiency, he has built and led multi-channel sales teams that regularly exceed targets and achieve sustained year-over-year growth.",
  //   experience: [
  //     {
  //       title: "Chairman, Contact Center Association of the Philippines",
  //       period: "2023–present",
  //     },
  //     {
  //       title:
  //         "Member of the Board of Trustees, IT & Business Process Association of the Philippines",
  //       period: "2023–present",
  //     },
  //     {
  //       title: "FVP & Head, PLDT Enterprise and International Business Groups",
  //       period: "2023–2025",
  //     },
  //     {
  //       title:
  //         "FVP & Head, PLDT International Revenue Group, International and Carrier Business",
  //       period: "2019–2022",
  //     },
  //     {
  //       title: "FVP & Head, PLDT SME & Regional Enterprise",
  //       period: "2015–2019",
  //     },
  //     {
  //       title:
  //         "VP & Head, PLDT ALPHA CRM Outsourcing and Offshoring Industry and International Business",
  //       period: "2011–2015",
  //     },
  //   ],
  // },
  {
    slug: "louie-castaneda",
    name: "Louie Castaneda",
    initials: "LC",
    photo: "/images/team/louie-castaneda.jpg",
    tagline: "Create value. Achieve excellence.",
    role: "Former Sr. Director & Head of Apps Business, Oracle Philippines",
    summary:
      "A highly accomplished and seasoned IT industry leader with a remarkable track record for over 35 years. During his career, he has held country leadership positions across global organizations such as Cisco, Fortinet, Oracle, Microsoft, and SAS Institute.",
    bio: "With a solid foundation in sales, operational management and technical expertise spanning application systems, analytics, cybersecurity and network engineering, Louie has been a driving force in delivering cutting-edge IT and application management strategies and solutions that have significantly contributed to the growth and innovation of the organizations under his stewardship. His industry experience and strategic vision have firmly established him as a respected figure in the Philippine IT sector, a leader who consistently delivers impactful results and drives sustainable success.",
    experience: [
      {
        title: "Sr. Director and Head of Apps Business, Oracle Philippines",
        period: "2024–2025",
      },
      {
        title: "Managing Director, SAS Institute Philippines Inc.",
        period: "2022–2023",
      },
      {
        title: "Country Manager, Fortinet Philippines Inc.",
        period: "2018–2022",
      },
      {
        title: "SVP, Sales and Business Development, TIM Corp",
        period: "2017–2018",
      },
      {
        title: "Chief Executive Officer, CalibrIT Systems",
        period: "2016–2017",
      },
      {
        title: "Country Manager, Cisco Systems, Philippines Branch",
        period: "2014–2016",
      },
      {
        title: "Director, Microsoft Philippines Corporation",
        period: "2003–2009",
      },
    ],
  },
];
