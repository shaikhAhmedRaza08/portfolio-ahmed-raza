import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { NavDots } from "@/components/NavDots";
import { AmbientBg } from "@/components/AmbientBg";
import { PERSONAL, SITE_URL } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${PERSONAL.name} — ${PERSONAL.role}`,
  description:
    "Full Stack Developer with 5+ years building enterprise-grade applications. Available for freelance work.",
  keywords: ["Full Stack Developer", "Node.js", "React", "Python", "Freelance"],
  authors: [{ name: PERSONAL.name }],
  creator: PERSONAL.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${PERSONAL.name} — ${PERSONAL.role}`,
    description: "5+ years building enterprise-grade apps. Available for freelance.",
    url: SITE_URL,
    siteName: PERSONAL.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL.name} — ${PERSONAL.role}`,
    description: "5+ years building enterprise-grade apps. Available for freelance.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <AmbientBg />
        <Navbar />
        <NavDots />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
