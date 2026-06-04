import { Mail, Phone, Linkedin, Github, Icon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PERSONAL } from "@/lib/constants";
import { ContactLink } from "../ui/ContactLink";

const INFO = [
  { href: `mailto:${PERSONAL.email}`, icon: Mail, label: "Email", value: PERSONAL.email },
  { href: `tel:${PERSONAL.phone.replace(/\s/g, "")}`, icon: Phone, label: "Phone", value: PERSONAL.phone },
  { href: PERSONAL.linkedin, icon: Linkedin, label: "LinkedIn", value: 'ahmed-raza-shaikh' },
  { href: PERSONAL.github, icon: Github, label: "GitHub", value: 'ahmed-raza-shaikh' },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeader label="01 — About" title="Who I Am" />

      <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-[60px]">
        {/* Bio */}
        <div className="reveal space-y-5 leading-[1.85] text-[#e2e8f0]/55">
          <p>
            I&apos;m a full stack developer with 5+ years of experience building enterprise-grade
            applications across <span className="text-accent-violet-light">TPM</span> and{" "}
            <span className="text-accent-violet-light">FMCG</span> domains — from trade promotion
            platforms and financial dashboards to loan origination systems.
          </p>
          <p>
            My work spans the full stack: designing resilient Node.js, Python and .NET backends,
            crafting React + TypeScript interfaces, and automating data pipelines that replace
            brittle manual processes. I care about clean architecture, maintainable code and
            shipping software that holds up under real production load.
          </p>
          <p>
            I&apos;m currently open to freelance projects where I can bring that end-to-end
            experience to teams who need reliable, well-structured systems.
          </p>
        </div>

        {/* Info cards */}
        <div className="reveal grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 h-50">
          {INFO.map(({ href, icon: Icon, label, value }, index) => (
            <div key={index} className="grid gap-3">
              <ContactLink
                href={href}
                icon={<Icon className="h-4 w-4" aria-hidden />}
                label={label}
                value={value}
                key={index}
                external={label === "LinkedIn" || label === "GitHub"}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
