"use client";

import React, { useState } from "react";
import Logo, { LogoVariant } from "./Logo";

interface LogoSelectorProps {
  onSelectVariant?: (variant: LogoVariant) => void;
}

export default function LogoSelector() {
  const [selected, setSelected] = useState<LogoVariant>("persian-seen");

  return (
    <section style={{ padding: "40px 0 60px", borderBottom: "1px solid var(--border)" }}>
      <div className="container" style={{ maxWidth: "880px" }}>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <span className="tag" style={{ marginBottom: "10px" }}>
            Brand Identity Concepts
          </span>
          <h2 style={{ fontSize: "1.7rem", marginBottom: "8px" }}>
            طراحی نشان اختصاصی سوداوند (سودا + وند)
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
            روی هر طرح کلیک کنید تا پیش‌نمایش زنده آن را در ابعاد مختلف و سبک‌های گرافیکی مشاهده کنید:
          </p>
        </div>

        {/* 3 Interactive Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {/* Option A: Persian Seen */}
          <div
            onClick={() => setSelected("persian-seen")}
            className="card"
            style={{
              cursor: "pointer",
              textAlign: "center",
              borderColor: selected === "persian-seen" ? "var(--accent)" : "var(--border)",
              backgroundColor: selected === "persian-seen" ? "var(--bg-card-hover)" : "var(--bg-card)",
              boxShadow: selected === "persian-seen" ? "0 0 25px rgba(56, 189, 248, 0.2)" : "none",
              padding: "28px 20px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
              <Logo size={56} showText={false} variant="persian-seen" />
            </div>
            <div style={{ fontWeight: 700, fontSize: "1.1rem", color: "#FFFFFF", marginBottom: "6px" }}>
              ایده ۱: حرف «س» (سین)
            </div>
            <div style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 600, marginBottom: "10px" }}>
              ریشه فارسی سوداوند
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.6 }}>
              الهام‌گرفته از سه دندانه حرف «س» به صورت امواج متصل شبکه‌ای و کاسه نرم انتهایی، همراه با سه نود اتصال فناوری.
            </p>
            {selected === "persian-seen" && (
              <div style={{ marginTop: "14px", fontSize: "0.8rem", color: "#34D399", fontWeight: 700 }}>
                ● طرح فعال در هدر
              </div>
            )}
          </div>

          {/* Option B: Latin S */}
          <div
            onClick={() => setSelected("latin-s")}
            className="card"
            style={{
              cursor: "pointer",
              textAlign: "center",
              borderColor: selected === "latin-s" ? "var(--accent)" : "var(--border)",
              backgroundColor: selected === "latin-s" ? "var(--bg-card-hover)" : "var(--bg-card)",
              boxShadow: selected === "latin-s" ? "0 0 25px rgba(56, 189, 248, 0.2)" : "none",
              padding: "28px 20px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
              <Logo size={56} showText={false} variant="latin-s" />
            </div>
            <div style={{ fontWeight: 700, fontSize: "1.1rem", color: "#FFFFFF", marginBottom: "6px" }}>
              ایده ۲: حرف لاتین «S»
            </div>
            <div style={{ fontSize: "0.8rem", color: "#60A5FA", fontWeight: 600, marginBottom: "10px" }}>
              پیوند زنجیره‌ای (Nexus)
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.6 }}>
              قفل شدن دو حلقه مجزای تجارت (سودا) و نرم‌افزار (وند) که یک حرف S بین‌المللی و گره مرکزی پیوند را می‌سازند.
            </p>
            {selected === "latin-s" && (
              <div style={{ marginTop: "14px", fontSize: "0.8rem", color: "#34D399", fontWeight: 700 }}>
                ● طرح فعال در هدر
              </div>
            )}
          </div>

          {/* Option C: Hybrid */}
          <div
            onClick={() => setSelected("hybrid-nexus")}
            className="card"
            style={{
              cursor: "pointer",
              textAlign: "center",
              borderColor: selected === "hybrid-nexus" ? "var(--accent)" : "var(--border)",
              backgroundColor: selected === "hybrid-nexus" ? "var(--bg-card-hover)" : "var(--bg-card)",
              boxShadow: selected === "hybrid-nexus" ? "0 0 25px rgba(56, 189, 248, 0.2)" : "none",
              padding: "28px 20px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
              <Logo size={56} showText={false} variant="hybrid-nexus" />
            </div>
            <div style={{ fontWeight: 700, fontSize: "1.1rem", color: "#FFFFFF", marginBottom: "6px" }}>
              ایده ۳: ترکیب دوسویه «س / S»
            </div>
            <div style={{ fontSize: "0.8rem", color: "#818CF8", fontWeight: 600, marginBottom: "10px" }}>
              آمبیگرام دو زبانه
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.6 }}>
              حرکت مارپیچ پیوسته که از زاویه فارسی دندانه‌های «س» را تداعی می‌کند و در کل ساختار حرف لاتین «S» را دارد.
            </p>
            {selected === "hybrid-nexus" && (
              <div style={{ marginTop: "14px", fontSize: "0.8rem", color: "#34D399", fontWeight: 700 }}>
                ● طرح فعال در هدر
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
