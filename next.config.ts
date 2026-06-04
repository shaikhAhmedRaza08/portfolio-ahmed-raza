import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * `standalone` produces a minimal, self-contained server bundle in
   * `.next/standalone`, which the Dockerfile copies for a tiny runtime image.
   * Vercel ignores this and uses its own build pipeline, so it is safe to keep on.
   */
  output: "standalone",

  reactStrictMode: true,

  // Strip console.* (except errors/warnings) from production bundles.
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    // Add real screenshot hosts here when project images go live, e.g.:
    // remotePatterns: [{ protocol: "https", hostname: "your-cdn.com" }],
    remotePatterns: [],
  },

  // Security headers applied to every route.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
