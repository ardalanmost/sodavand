import React from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Navigation() {
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
        {/* Brand Logo with Persian Seen glyph */}
        <Link href="/">
          <Logo size={38} showText={true} />
        </Link>

        {/* Clean English Navigation */}
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
