import React from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--border)",
        backgroundColor: "rgba(9, 13, 22, 0.92)",
        position: "sticky",
        top: 0,
        zIndex: 40,
        backdropFilter: "blur(14px)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "76px",
        }}
      >
        {/* Brand Logo with Persian Seen glyph */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Logo size={40} showText={true} />
        </Link>

        {/* Clean Professional Navigation */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            fontSize: "0.9rem",
          }}
        >
          <a href="#about" className="nav-link">
            About Us
          </a>
          <a href="#ecommerce" className="nav-link">
            E-Commerce
          </a>
          <a href="#software" className="nav-link">
            Software & AI
          </a>
          <Link href="/privacy" className="nav-link" style={{ color: "var(--text-muted)" }}>
            Privacy Policy
          </Link>
          <a href="#contact" className="btn btn-primary" style={{ padding: "8px 18px", fontSize: "0.85rem" }}>
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
