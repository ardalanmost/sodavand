"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo, { LogoVariant } from "./Logo";

export default function Navigation() {
  const [activeVariant, setActiveVariant] = useState<LogoVariant>("persian-seen");

  return (
    <header
      style={{
        borderBottom: "1px solid var(--border)",
        backgroundColor: "rgba(9, 13, 22, 0.9)",
        position: "sticky",
        top: 0,
        zIndex: 40,
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Brand Logo with clickable variant toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Link href="/">
            <Logo size={38} showText={true} variant={activeVariant} />
          </Link>

          {/* Quick inline switcher pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(255, 255, 255, 0.05)",
              padding: "2px",
              borderRadius: "8px",
              border: "1px solid var(--border)",
              fontSize: "0.75rem",
              marginLeft: "8px",
            }}
          >
            <button
              onClick={() => setActiveVariant("persian-seen")}
              style={{
                background: activeVariant === "persian-seen" ? "var(--accent)" : "transparent",
                color: activeVariant === "persian-seen" ? "#090D16" : "var(--text-muted)",
                border: "none",
                borderRadius: "6px",
                padding: "3px 8px",
                fontWeight: 700,
                cursor: "pointer",
              }}
              title="لوگوی حرف سین فارسی"
            >
              سین «س»
            </button>
            <button
              onClick={() => setActiveVariant("latin-s")}
              style={{
                background: activeVariant === "latin-s" ? "var(--accent)" : "transparent",
                color: activeVariant === "latin-s" ? "#090D16" : "var(--text-muted)",
                border: "none",
                borderRadius: "6px",
                padding: "3px 8px",
                fontWeight: 700,
                cursor: "pointer",
              }}
              title="لوگوی لاتین S"
            >
              Latin S
            </button>
          </div>
        </div>

        {/* Links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "28px", fontSize: "0.9rem" }}>
          <a href="#what-we-do" style={{ color: "var(--text-body)" }}>
            What We Do
          </a>
          <a href="#compliance" style={{ color: "var(--text-body)" }}>
            Compliance & SP-API
          </a>
          <a href="#about" style={{ color: "var(--text-body)" }}>
            About
          </a>
          <Link href="/privacy" style={{ color: "var(--accent)", fontWeight: 500 }}>
            Privacy Policy
          </Link>
          <a href="#contact" className="btn btn-primary" style={{ padding: "8px 18px", fontSize: "0.85rem" }}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
