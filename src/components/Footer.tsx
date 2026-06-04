import { PERSONAL } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06] py-7 text-center text-[13px] text-[#e2e8f0]/25">
      © {year} {PERSONAL.name}. Built with Next.js &amp; Tailwind CSS.
    </footer>
  );
}
