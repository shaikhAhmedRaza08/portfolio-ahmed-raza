/**
 * Fixed decorative gradient blobs sitting behind all content.
 * Purely presentational — no interactivity, so it stays a Server Component.
 */
export function AmbientBg() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -left-[10%] -top-[10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.12)_0%,transparent_70%)]" />
      <div className="absolute -right-[5%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.08)_0%,transparent_70%)]" />
    </div>
  );
}
