/* eslint-disable @next/next/no-img-element -- ImageResponse renders plain <img>, next/image doesn't apply here */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name}, business origination and partner advisory`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export const dynamic = "force-static";

// ImageResponse can't read CSS variables; these mirror the MASTER.md tokens.
const brand = {
  navy950: "#0d0e2b",
  onDarkMuted: "#b9b8d9",
  orchid: "#c56ae4",
  gradient: "linear-gradient(90deg, #054aae, #6559c9 50%, #c56ae4)",
};

const logo = await readFile(
  join(process.cwd(), "public/images/brand/launchpoint-logo-white.png"),
  "base64",
);
const logoSrc = `data:image/png;base64,${logo}`;

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 96px",
        background: brand.navy950,
        backgroundImage: `radial-gradient(circle at 85% 20%, rgba(44,64,180,.55), transparent 55%)`,
        color: "#ffffff",
      }}
    >
      <img src={logoSrc} width={494} height={142} alt="" />
      <div
        style={{
          display: "flex",
          fontSize: 64,
          fontWeight: 800,
          marginTop: 40,
          lineHeight: 1.1,
        }}
      >
        A business&nbsp;<span style={{ color: brand.orchid }}>origination</span>
        &nbsp;company
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 28,
          color: brand.onDarkMuted,
          marginTop: 24,
        }}
      >
        AI · Cloud · Data · Cybersecurity · IoT · Network · Managed Services
      </div>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 8,
          backgroundImage: brand.gradient,
        }}
      />
    </div>,
    size,
  );
}
