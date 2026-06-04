"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, type NavLink } from "@/lib/constants";

/**
 * Tracks the currently visible section and whether the page has scrolled
 * past the navbar threshold. Uses the document scroll (Next.js App Router
 * does not use a scroll container) with a passive, rAF-throttled listener.
 */
export function useActiveSection() {
  const [active, setActive] = useState<NavLink>(NAV_LINKS[0]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      setScrolled(window.scrollY > 40);

      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].toLowerCase());
        if (el && el.getBoundingClientRect().top < 200) {
          setActive(NAV_LINKS[i]);
          break;
        }
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        update();
        frame = 0;
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return { active, scrolled };
}
