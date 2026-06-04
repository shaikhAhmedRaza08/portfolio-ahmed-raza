import { ImageResponse } from "next/og";
import { PERSONAL } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${PERSONAL.name} — ${PERSONAL.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0f",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(139,92,246,0.25) 0%, transparent 45%), radial-gradient(circle at 85% 85%, rgba(6,182,212,0.18) 0%, transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#a78bfa",
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          {PERSONAL.role}
        </div>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 800, letterSpacing: -2 }}>
          <span style={{ color: "#ffffff" }}>{PERSONAL.firstName}&nbsp;</span>
          <span style={{ color: "#8b5cf6" }}>{PERSONAL.lastName}</span>
        </div>
        <div style={{ marginTop: 28, maxWidth: 820, fontSize: 30, color: "rgba(226,232,240,0.6)" }}>
          5+ years building enterprise-grade applications. Available for freelance.
        </div>
      </div>
    ),
    { ...size },
  );
}
