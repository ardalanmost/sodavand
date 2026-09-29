import React from "react";

interface LogoProps {
  size?: number;
  showText?: boolean;
}

export default function Logo({ size = 36, showText = true }: LogoProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      {/* Interlocking S-Nexus Vector Icon (Souda: Trade + Vand: Connection) */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, filter: "drop-shadow(0 2px 10px rgba(56, 189, 248, 0.3))" }}
      >
        <defs>
          <linearGradient id="sodavandGrad1" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
          <linearGradient id="sodavandGrad2" x1="44" y1="44" x2="12" y2="12" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>

        {/* Rounded square container */}
        <rect width="48" height="48" rx="12" fill="#111726" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" />

        {/* Interlocking Link 1: Upper Commerce Loop (Souda) */}
        <path
          d="M 33 16 C 33 11.5 29.5 8 25 8 L 19 8 C 14.5 8 11 11.5 11 16 C 11 20.5 14.5 24 19 24 L 29 24"
          stroke="url(#sodavandGrad1)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Interlocking Link 2: Lower Connected Loop (Vand) */}
        <path
          d="M 19 24 L 29 24 C 33.5 24 37 27.5 37 32 C 37 36.5 33.5 40 29 40 L 23 40 C 18.5 40 15 36.5 15 32"
          stroke="url(#sodavandGrad2)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Center Connection Node (The Nexus / Vand) */}
        <circle cx="24" cy="24" r="2.5" fill="#FFFFFF" />
      </svg>

      {showText && (
        <div>
          <div
            style={{
              fontWeight: 800,
              fontSize: "1.05rem",
              color: "#FFFFFF",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}
          >
            SODAVAND
          </div>
          <div
            style={{
              fontSize: "0.68rem",
              color: "var(--text-muted)",
              letterSpacing: "0.03em",
              marginTop: "2px",
            }}
          >
            TRADING LLC • SHAMS, SHARJAH
          </div>
        </div>
      )}
    </div>
  );
}
