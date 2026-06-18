export interface Project {
  title: string;
  stack: string[];
  /** Hex accent color used for borders, pills and the live button. */
  accent: string;
  /** Image URL/path — `null` shows the placeholder zone. */
  screenshot: string | null;
  /** `null` disables the Live Demo button. */
  liveUrl: string | null;
  /** `null` disables the GitHub button. */
  githubUrl: string | null;
  desc: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Trade Promotion Planning & Accrual Platform",
    stack: ["Node.js", "React", "PostgreSQL", "Python"],
    accent: "#8b5cf6",
    screenshot: "/screenshots/TPM.png",
    liveUrl: null,
    githubUrl: null,
    desc: "End-to-end TPM application covering promotion creation, budget allocation, multi-level approval workflow with trade spend accrual logic and ROI analytics dashboard.",
  },
  {
    title: "Wholesale & Distributor Data Automation",
    stack: ["Python", "Node.js", "SQLite", "React"],
    accent: "#06b6d4",
    screenshot: null,
    liveUrl: null,
    githubUrl: null,
    desc: "Automated data pipeline ingesting wholesale sales data, replacing manual Excel processes. Structured dashboard surfacing stock movement trends and replenishment signals.",
  },
  {
    title: "Retail Loan Origination & Credit Assessment",
    stack: ["C#", "ASP.NET Core", "React", "PostgreSQL"],
    accent: "#10b981",
    screenshot: "/screenshots/RLOCAS.png",
    liveUrl: null,
    githubUrl: null,
    desc: "Core loan processing API with multi-stage maker-checker approval workflow, CIBIL bureau XML ingestion, and React operations dashboards surfacing TAT SLA breaches.",
  },
  {
    title: "Portfolio & Mutual Fund Tracking Platform",
    stack: ["ASP.NET Core", "React", "Node.js", "PostgreSQL", "Python"],
    accent: "#f59e0b",
    screenshot: null,
    liveUrl: null,
    githubUrl: null,
    desc: "Backend with XIRR-based return calculations, automated daily NAV ingestion via Python cron jobs, Node.js microservice for brokerage webhook callbacks.",
  },
];
