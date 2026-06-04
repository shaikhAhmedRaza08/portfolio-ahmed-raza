/**
 * Smoothly scroll to a section by its id (case-insensitive).
 * Native CSS `scroll-behavior: smooth` handles anchor clicks, so this is only
 * needed for programmatic scrolling (e.g. from a button handler).
 */
export function scrollToSection(id: string) {
  if (typeof document === "undefined") return;
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
}
