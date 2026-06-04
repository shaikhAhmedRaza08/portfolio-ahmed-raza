export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  points: string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    title: "Data Analyst",
    company: "Bronze HQ Distribution and Trading FZE",
    period: "Oct 2025 – Present",
    points: [
      "Built Python-based automation scripts replacing manual Excel reporting",
      "Developed data extraction workflows for wholesale & distributor datasets",
      "Maintained scheduled reconciliation jobs cross-checking trade claims",
    ],
  },
  {
    title: "Software Engineer",
    company: "Devivers Digital Solutions",
    period: "Nov 2024 – Aug 2025",
    points: [
      "Extended Node.js backend services and resolved production issues",
      "Fixed API defects in approval/notification workflows",
      "Refactored modules and implemented role-based access controls",
    ],
  },
  {
    title: "Software Engineer",
    company: "Harjai Computers",
    period: "Mar 2023 – Oct 2024",
    points: [
      "Developed React + TypeScript features including KPI dashboards",
      "Contributed to Node.js backend modules for transactional data flows",
      "Provided production support reducing recurring defects",
    ],
  },
  {
    title: "Software Developer",
    company: "Teckraft Infosolutions",
    period: "Mar 2021 – Jul 2023",
    points: [
      "Built RESTful APIs and business logic modules using Node.js",
      "Delivered full-stack features with React + SQL Server",
      "Performed SQL query optimization improving application response times",
    ],
  },
];
