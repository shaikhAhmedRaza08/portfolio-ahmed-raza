"use client";

import { useState } from "react";
import { Github, Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { NAV_LINKS, PERSONAL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { active, scrolled } = useActiveSection();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled && "border-b border-white/[0.06] bg-base/85 backdrop-blur-xl",
      )}
    >
      <nav className="max-w-content mx-auto flex h-16 items-center justify-between px-6 sm:px-8">
        {/* Logo */}
        <a
          href="#"
          className="text-[18px] font-bold tracking-[-0.5px] text-white"
          aria-label={`${PERSONAL.name} — home`}
        >
          {PERSONAL.firstName}
          <span className="text-accent-violet">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                aria-current={active === link ? "true" : undefined}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  active === link
                    ? "border-b border-accent-violet text-accent-violet"
                    : "text-[#e2e8f0]/60 hover:text-[#e2e8f0]",
                )}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.06] px-4 py-2 text-[13px] font-semibold text-[#e2e8f0] transition-colors hover:bg-white/[0.1]"
          >
            <Github className="h-4 w-4" aria-hidden />
            GitHub
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-accent-violet px-[18px] py-2 text-[13px] font-semibold text-white transition-colors hover:bg-accent-violet-dark"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#e2e8f0] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-white/[0.06] bg-base/95 backdrop-blur-xl md:hidden">
          <ul className="max-w-content mx-auto flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    active === link
                      ? "bg-accent-violet/10 text-accent-violet"
                      : "text-[#e2e8f0]/70 hover:bg-white/[0.04]",
                  )}
                >
                  {link}
                </a>
              </li>
            ))}
            <li className="mt-2 flex gap-3 px-3">
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.06] py-2.5 text-[13px] font-semibold text-[#e2e8f0]"
              >
                <Github className="h-4 w-4" aria-hidden />
                GitHub
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex flex-1 items-center justify-center rounded-lg bg-accent-violet py-2.5 text-[13px] font-semibold text-white"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
