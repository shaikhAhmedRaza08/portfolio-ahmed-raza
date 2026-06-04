"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function NavDots() {
  const { active } = useActiveSection();

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-7 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-2.5 lg:flex"
    >
      {NAV_LINKS.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          aria-label={`Go to ${link}`}
          aria-current={active === link ? "true" : undefined}
          className="group relative flex items-center justify-center p-1"
        >
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full transition-all duration-300",
              active === link ? "scale-150 bg-accent-violet" : "bg-white/20 group-hover:bg-white/40",
            )}
          />
        </a>
      ))}
    </nav>
  );
}
