import React from "react";

interface LogoProps {
  size?: number;
  showText?: boolean;
  textColor?: string;
}

export default function Logo({
  size = 38,
  showText = true,
  textColor = "#FFFFFF",
}: LogoProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      {/* Official Sodavand Logo: Persian Letter «س» (Seen) in High-Tech Cyber Ribbon */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          flexShrink: 0,
          filter: "drop-shadow(0 2px 10px rgba(56, 189, 248, 0.35))",
        }}
      >
        <defs>
          <linearGradient id="sodavandSeenGrad" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
        </defs>

        {/* Base Plate */}
        <rect
          width="48"
          height="48"
          rx="12"
          fill="#0F1626"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="1.5"
        />

        {/* The 3 Connected Dental Waves of «س» (Souda: Trade & E-Commerce Flow) */}
        <path
          d="M 36 17 C 36 21.5 32.5 24 29.5 24 C 26.5 24 24.5 21 24.5 17 C 24.5 21 22.5 24 19.5 24 C 16.5 24 13 21 13 17"
          stroke="url(#sodavandSeenGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* The Sweeping Basin / Loop of «س» (Vand: Connection & Stability) */}
        <path
          d="M 13 17 L 13 25 C 13 32 18.5 36.5 25.5 36.5 C 31 36.5 35.5 33 36 28"
          stroke="url(#sodavandSeenGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Three Radiant Digital Nodes on the Teeth */}
        <circle cx="36" cy="13.5" r="2" fill="#38BDF8" />
        <circle cx="24.5" cy="13.5" r="2" fill="#60A5FA" />
        <circle cx="13" cy="13.5" r="2" fill="#818CF8" />
      </svg>

      {showText && (
        <div>
          <div
            style={{
              fontWeight: 800,
              fontSize: "1.05rem",
              color: textColor,
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
