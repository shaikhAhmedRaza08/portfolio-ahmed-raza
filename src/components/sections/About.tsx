import { GraduationCap, MapPin, Mail, Phone, BriefcaseBusiness, Globe  } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PERSONAL } from "@/lib/constants";

const INFO = [
  // { icon: MapPin, label: "Location", value: PERSONAL.location },
  // { icon: GraduationCap, label: "Education", value: PERSONAL.education },
  { icon: Mail, label: "Email", value: PERSONAL.email },
  { icon: Phone, label: "Phone", value: PERSONAL.phone },
  { icon: BriefcaseBusiness, label: "LinkedIn", value: PERSONAL.linkedin },
  { icon: Globe, label: "GitHub", value: PERSONAL.github },
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
          {INFO.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.03] px-[18px] py-3.5"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-violet/12 text-accent-violet-light">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="mb-0.5 block text-[11px] uppercase tracking-[1px] text-[#e2e8f0]/70">
                  {label}
                </span>
                <span className="block text-sm text-[#e2e8f0]">{value}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
