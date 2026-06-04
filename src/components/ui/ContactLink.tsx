import type { ReactNode } from "react";

interface ContactLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
  external?: boolean;
}

export function ContactLink({ href, icon, label, value, external = false }: ContactLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-center gap-3.5 rounded-xl border border-white/[0.07] bg-white/[0.03] px-[18px] py-3.5 no-underline transition-colors duration-200 hover:border-accent-violet/40 hover:bg-white/[0.05]"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-violet/12 text-accent-violet-light">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[11px] uppercase tracking-[1px] text-[#e2e8f0]/35">
          {label}
        </span>
        <span className="block truncate text-sm text-[#e2e8f0]">{value}</span>
      </span>
    </a>
  );
}
