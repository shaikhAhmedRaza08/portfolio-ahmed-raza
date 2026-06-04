import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactLink } from "@/components/ui/ContactLink";
import { ContactForm } from "@/components/ui/ContactForm";
import { PERSONAL } from "@/lib/constants";

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
            <ContactLink
              href={`mailto:${PERSONAL.email}`}
              icon={<Mail className="h-4 w-4" aria-hidden />}
              label="Email"
              value={PERSONAL.email}
            />
            <ContactLink
              href={`tel:${PERSONAL.phone.replace(/\s/g, "")}`}
              icon={<Phone className="h-4 w-4" aria-hidden />}
              label="Phone"
              value={PERSONAL.phone}
            />
            <ContactLink
              href={PERSONAL.github}
              icon={<Github className="h-4 w-4" aria-hidden />}
              label="GitHub"
              value="shaikhAhmedRaza08"
              external
            />
            <ContactLink
              href={PERSONAL.linkedin}
              icon={<Linkedin className="h-4 w-4" aria-hidden />}
              label="LinkedIn"
              value="ahmed-raza-shaikh"
              external
            />
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
