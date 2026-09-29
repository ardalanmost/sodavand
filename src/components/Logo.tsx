import React from "react";

export type LogoVariant = "latin-s" | "persian-seen" | "hybrid-nexus";

interface LogoProps {
  size?: number;
  showText?: boolean;
  variant?: LogoVariant;
  textColor?: string;
}

export default function Logo({
  size = 38,
  showText = true,
  variant = "persian-seen",
  textColor = "#FFFFFF",
}: LogoProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          flexShrink: 0,
          filter: "drop-shadow(0 2px 12px rgba(56, 189, 248, 0.35))",
          transition: "transform 0.25s ease",
        }}
      >
        <defs>
          <linearGradient id="gradCyanBlue" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
          <linearGradient id="gradSeenAccent" x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#818CF8" />
          </linearGradient>
        </defs>

        {/* Squircle Background Base */}
        <rect
          width="48"
          height="48"
          rx="12"
          fill="#0F1626"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="1.5"
        />

        {variant === "persian-seen" && (
          /* ==============================================================
             Variant: Persian / Arabic Letter «س» (Seen) for SODAVAND (سوداوند)
             Three interconnected teeth (dandaneh) with a sweeping tech bowl
             ============================================================== */
          <g>
            {/* The 3 Waves/Teeth of «س» in fluid cyber ribbon */}
            <path
              d="M 36 17 C 36 21.5 32.5 24 29.5 24 C 26.5 24 24.5 21 24.5 17 C 24.5 21 22.5 24 19.5 24 C 16.5 24 13 21 13 17"
              stroke="url(#gradCyanBlue)"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* The sweeping deep tail / bowl (کاسه سین) looping elegantly */}
            <path
              d="M 13 17 L 13 25 C 13 32 18.5 36.5 25.5 36.5 C 31 36.5 35.5 33 36 28"
              stroke="url(#gradCyanBlue)"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Three radiant connection points on top of the 3 teeth */}
            <circle cx="36" cy="13.5" r="2" fill="#38BDF8" />
            <circle cx="24.5" cy="13.5" r="2" fill="#60A5FA" />
            <circle cx="13" cy="13.5" r="2" fill="#818CF8" />
          </g>
        )}

        {variant === "latin-s" && (
          /* ==============================================================
             Variant: Interlocking Latin 'S' (Souda + Vand Nexus)
             ============================================================== */
          <g>
            <path
              d="M 33 16 C 33 11.5 29.5 8 25 8 L 19 8 C 14.5 8 11 11.5 11 16 C 11 20.5 14.5 24 19 24 L 29 24"
              stroke="url(#gradCyanBlue)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 19 24 L 29 24 C 33.5 24 37 27.5 37 32 C 37 36.5 33.5 40 29 40 L 23 40 C 18.5 40 15 36.5 15 32"
              stroke="url(#gradCyanBlue)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="24" cy="24" r="2.5" fill="#FFFFFF" />
          </g>
        )}

        {variant === "hybrid-nexus" && (
          /* ==============================================================
             Variant: Hybrid Ambigram ('س' seen from right, 'S' from left)
             ============================================================== */
          <g>
            <path
              d="M 34 14 C 34 19 30 22 25 22 C 20 22 17 19 17 14 C 17 21 21 26 27 26 C 33 26 36 30 36 34 C 36 38 31 40 25 40 C 19 40 14 36 14 30"
              stroke="url(#gradCyanBlue)"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="25" cy="22" r="2.2" fill="#38BDF8" />
            <circle cx="34" cy="14" r="2.2" fill="#FFFFFF" />
          </g>
        )}
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
