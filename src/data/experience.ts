export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  points: string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    title: "Founder & Lead Developer",
    company: "Claritec",
    period: "Jun 2026 – Present",
    points: [
      "Founded and leading Claritec — a software development agency building web apps, mobile apps, automations, and e-commerce solutions for startups and businesses.",
      "Designed and built the agency website (claritec.in) on Next.js + Vercel.",
      "Set up full business infrastructure — domain, professional email, client contact system.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Paris Group",
    period: "Oct 2025 – Mar 2026",
    points: [
      "Replaced a manual Excel reporting process with Python tooling, which cut trade-spend report turnaround from 20% to 30% and gave the team one consistent output format instead of several.",
      "Built .NET Core Web APIs and ETL pipelines to pull in and clean wholesale and distributor data, giving the business clearer stock visibility and quicker replenishment calls. ",
      "Set up scheduled batch reconciliation jobs (.NET Core services plus SQL) that check trade claims against actual sales automatically, so finance spends less time chasing mismatches by hand. ",
      "Worked with commercial and supply-chain stakeholders to turn how their promotion workflows actually run into clean data models and API-driven processes.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Harjai Computers",
    period: "Aug 2023 – Aug 2025",
    points: [
      "Built React + TypeScript features for internal business apps — reusable form components, multi-step approval flows, and interactive dashboards — managing state with Redux Toolkit and the Context API. ",
      "Developed and maintained Node.js backend modules: REST endpoints, request validation, and the logic tying transactional flows to third-party API integrations.",
      "Worked across the stack to wire front-end components to backend services, handling things like error states, loading behavior, and edge cases in the API contract.",
      "Diagnosed and fixed production issues, tracing bugs through both the React and Node layers and refactoring the spots where defects kept recurring to make the core workflows more stable.",
    ],
  },
  {
    title: "Software Developer",
    company: "Teckraft Infosolutions",
    period: "Mar 2021 – Jul 2023",
    points: [
      "Designed and built RESTful APIs in Node.js, covering routing, business logic, and the data-access layer behind a range of operational features.",
      "Delivered full-stack features end to end, pairing React front ends with SQL Server and owning everything from the component to the query. ",
      "Profiled slow endpoints and reworked the queries and indexes behind them, bringing response times down by 20% on the heavier transactional tables.",
      "Contributed to code reviews and helped keep the API structure consistent as new modules were added.",
    ],
  },
];
