export const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Contact"] as const;

export type NavLink = (typeof NAV_LINKS)[number];

export const PERSONAL = {
  name: "Ahmed Raza Shaikh",
  firstName: "Ahmed Raza",
  lastName: "Shaikh",
  role: "Full Stack Developer",
  email: "shaikhahmedraza9@gmail.com",
  phone: "+91 7666478757",
  github: "https://github.com/shaikhAhmedRaza08",
  linkedin: "https://www.linkedin.com/in/ahmed-raza-shaikh-88bbbb127",
  education: "B.E. Electronics & Telecommunication, University of Mumbai",
  location: "Mumbai, India",
  tagline:
    "5+ years building enterprise-grade applications — from trade promotion platforms and financial dashboards to loan origination systems and automated data pipelines.",
} as const;

export const STATS = [
  { value: "5+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "4", label: "Companies" },
] as const;

/** Canonical site URL — override via NEXT_PUBLIC_SITE_URL in production. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourdomain.com";
