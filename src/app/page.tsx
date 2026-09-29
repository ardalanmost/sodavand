import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navigation */}
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
          {/* Brand */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                backgroundColor: "var(--accent)",
                color: "#090D16",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: "1.1rem",
              }}
            >
              S
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "1.05rem", color: "var(--text-main)", letterSpacing: "-0.01em" }}>
                SODAVAND
              </div>
              <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                Trading LLC • Dubai, UAE
              </div>
            </div>
          </Link>

          {/* Links */}
          <nav style={{ display: "flex", alignItems: "center", gap: "28px", fontSize: "0.9rem" }}>
            <a href="#store">Sodavand Store</a>
            <a href="#development">Software Development</a>
            <Link href="/privacy" style={{ color: "var(--accent)" }}>
              Privacy Policy
            </Link>
            <a href="#contact" className="btn btn-primary" style={{ padding: "8px 16px" }}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main style={{ flex: 1 }}>
        <section style={{ padding: "90px 0 60px", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "780px" }}>
            <div style={{ marginBottom: "20px" }}>
              <span className="tag">Commercial Entity • Dubai, United Arab Emirates</span>
            </div>

            <h1 style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)", lineHeight: 1.2, marginBottom: "20px" }}>
              E-Commerce Operations & Software Development
            </h1>

            <p style={{ fontSize: "1.15rem", color: "var(--text-body)", lineHeight: 1.7, marginBottom: "36px" }}>
              <strong>Sodavand Trading LLC</strong> is a company registered in the UAE. We operate online retail through <strong>Sodavand Store</strong> across marketplaces like Amazon, and we develop <strong>custom software</strong>, web applications, and automation tools.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
              <a href="#store" className="btn btn-primary">
                Sodavand Store &darr;
              </a>
              <a href="#development" className="btn btn-ghost">
                Software Development &darr;
              </a>
            </div>
          </div>
        </section>

        {/* Two Core Pillars */}
        <section id="what-we-do" style={{ padding: "50px 0 80px" }}>
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "28px",
              }}
            >
              {/* Pillar 1: Sodavand Store */}
              <div id="store" className="card">
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(56, 189, 248, 0.12)",
                    color: "var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.3rem",
                    marginBottom: "20px",
                  }}
                >
                  🛒
                </div>
                <h2 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>Sodavand Store</h2>
                <div style={{ fontSize: "0.85rem", color: "var(--accent)", fontWeight: 600, marginBottom: "16px" }}>
                  E-COMMERCE & DIGITAL RETAIL
                </div>
                <p style={{ color: "var(--text-body)", lineHeight: 1.7, marginBottom: "20px" }}>
                  Through <strong>Sodavand Store</strong>, we manage end-to-end online retail operations in the UAE and GCC. We sell high-quality consumer products on major marketplaces such as <strong>Amazon.ae</strong> with Prime fulfillment.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", color: "var(--text-muted)", fontSize: "0.9rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "var(--accent)" }}>✓</span> Active storefront on Amazon.ae & regional marketplaces
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "var(--accent)" }}>✓</span> Brand development & sourcing (Home, Kitchen & Consumer Goods)
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "var(--accent)" }}>✓</span> Amazon FBA inventory, storage, and fast customer delivery
                  </li>
                </ul>
              </div>

              {/* Pillar 2: Software Development */}
              <div id="development" className="card">
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(37, 99, 235, 0.15)",
                    color: "#60A5FA",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.3rem",
                    marginBottom: "20px",
                  }}
                >
                  💻
                </div>
                <h2 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>Software Development</h2>
                <div style={{ fontSize: "0.85rem", color: "#60A5FA", fontWeight: 600, marginBottom: "16px" }}>
                  ENGINEERING, TOOLS & INTEGRATIONS
                </div>
                <p style={{ color: "var(--text-body)", lineHeight: 1.7, marginBottom: "20px" }}>
                  Alongside our store, we design and develop <strong>custom software applications</strong>, web platforms, and internal automation tools that streamline business operations and analytics.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", color: "var(--text-muted)", fontSize: "0.9rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "#60A5FA" }}>✓</span> Full-stack web application & website development
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "#60A5FA" }}>✓</span> Amazon Selling Partner API (SP-API) & Ads API integrations
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "#60A5FA" }}>✓</span> Custom inventory automation, pricing tools, and analytics dashboards
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Amazon Developer & Privacy Banner */}
        <section style={{ padding: "40px 0 70px" }}>
          <div className="container">
            <div
              className="card"
              style={{
                backgroundColor: "#0D1322",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "24px",
                flexWrap: "wrap",
                padding: "32px 40px",
              }}
            >
              <div style={{ maxWidth: "620px" }}>
                <div style={{ fontSize: "0.8rem", color: "#34D399", fontWeight: 700, textTransform: "uppercase", marginBottom: "6px" }}>
                  Developer & Data Standards
                </div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>
                  Amazon Selling Partner API Compliance
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                  Our internal developer applications connect to Amazon APIs solely to manage Sodavand Store inventory, orders, and business reports. We do not store or share customer personal information with any third party.
                </p>
              </div>
              <Link href="/privacy" className="btn btn-ghost" style={{ whiteSpace: "nowrap" }}>
                Read Privacy Policy &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* About & Contact */}
        <section id="contact" style={{ padding: "60px 0 90px", borderTop: "1px solid var(--border)" }}>
          <div className="container" style={{ maxWidth: "680px", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "12px" }}>About & Contact</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "32px" }}>
              <strong>Sodavand Trading LLC</strong> is registered in Dubai, United Arab Emirates. For business inquiries, software projects, or store partnerships, please contact us directly:
            </p>

            <div
              className="card"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
                textAlign: "left",
                padding: "28px",
              }}
            >
              <div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                  Official Email
                </div>
                <a
                  href="mailto:contact@sodavand.net"
                  style={{ color: "var(--accent)", fontWeight: 600, fontSize: "1.05rem", display: "block", marginTop: "4px" }}
                >
                  contact@sodavand.net
                </a>
              </div>
              <div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                  Location
                </div>
                <div style={{ color: "var(--text-main)", fontWeight: 600, fontSize: "1.05rem", marginTop: "4px" }}>
                  Dubai, United Arab Emirates
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "30px 0",
          fontSize: "0.85rem",
          color: "var(--text-muted)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            © {new Date().getFullYear()} <strong>Sodavand Trading LLC</strong>. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/privacy" style={{ color: "var(--text-body)" }}>
              Privacy Policy
            </Link>
            <a href="mailto:contact@sodavand.net" style={{ color: "var(--text-body)" }}>
              contact@sodavand.net
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
