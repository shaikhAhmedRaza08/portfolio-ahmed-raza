import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactLink } from "@/components/ui/ContactLink";
import { ContactForm } from "@/components/ui/ContactForm";
import { PERSONAL } from "@/lib/constants";


const INFO = [
  { href: `mailto:${PERSONAL.email}`, icon: Mail, label: "Email", value: PERSONAL.email },
  { href: `tel:${PERSONAL.phone.replace(/\s/g, "")}`, icon: Phone, label: "Phone", value: PERSONAL.phone },
  { href: PERSONAL.linkedin, icon: Linkedin, label: "LinkedIn", value: 'ahmed-raza-shaikh' },
  { href: PERSONAL.github, icon: Github, label: "GitHub", value: 'ahmed-raza-shaikh' },
];

export function Contact() {
  return (
    <Section id="contact" innerClassName="max-w-content mx-auto px-6 sm:px-8 py-20 sm:py-[100px] sm:pb-[120px]">
      <SectionHeader label="05 — Contact" title="Let's Work Together" />

      <div className="mt-12 grid items-start gap-12 md:grid-cols-2 md:items-center md:gap-15">
        {/* Left: intro + links */}
        <div className="reveal">
          <p className="mb-6 max-w-115 leading-[1.85] text-[#e2e8f0]/65">
            Have a project in mind or just want to say hello? I&apos;m currently available for
            freelance work — drop me a message and I&apos;ll get back to you.
          </p>

          <div className="grid gap-3">
            {INFO.map(({ href, icon: Icon, label, value }, index) => (
              <ContactLink
                key={index}
                href={href}
                icon={<Icon className="h-4 w-4" aria-hidden />}
                label={label}
                value={value}
                external={label === "LinkedIn" || label === "GitHub"}
              />
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="reveal">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
