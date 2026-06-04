import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PERSONAL, STATS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="max-w-content mx-auto flex min-h-screen flex-col justify-center px-6 pb-20 pt-[120px] sm:px-8">
      {/* Available badge */}
      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent-violet/25 bg-accent-violet/[0.12] px-4 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
        <span className="text-[13px] font-medium text-accent-violet-light">
          Available for freelance work
        </span>
      </span>

      <p className="mb-3 mt-6 uppercase tracking-[3px] text-[#e2e8f0]/50">
        {PERSONAL.role}
      </p>

      <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-[1.05] tracking-[-2px]">
        <span className="text-white">{PERSONAL.firstName} </span>
        <span className="gradient-text">{PERSONAL.lastName}</span>
      </h1>

      <p className="mt-6 max-w-[580px] text-lg leading-[1.7] text-[#e2e8f0]/55">
        {PERSONAL.tagline}
      </p>

      {/* CTAs */}
      <div className="mt-8 flex flex-wrap gap-4">
        <Button href="#projects" variant="primary">
          View My Work
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Button>
        <Button href="#contact" variant="secondary">
          <Mail className="h-4 w-4" aria-hidden />
          Get in Touch
        </Button>
      </div>

      {/* Stats */}
      <dl className="mt-8 flex flex-wrap gap-10 border-t border-white/[0.07] pt-8">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <dt className="sr-only">{stat.label}</dt>
            <dd className="text-[26px] font-bold text-white">{stat.value}</dd>
            <dd className="mt-0.5 text-[12px] text-[#e2e8f0]/40">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
