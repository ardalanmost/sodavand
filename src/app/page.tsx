import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

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
          {/* Logo */}
          <Link href="/">
            <Logo size={38} showText={true} />
          </Link>

          {/* Clean Simplified Navigation */}
          <nav style={{ display: "flex", alignItems: "center", gap: "28px", fontSize: "0.9rem" }}>
            <a href="#what-we-do" style={{ color: "var(--text-body)" }}>
              What We Do
            </a>
            <a href="#compliance" style={{ color: "var(--text-body)" }}>
              Compliance & Security
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

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <section style={{ padding: "85px 0 55px", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "780px" }}>
            <div style={{ marginBottom: "20px" }}>
              <span className="tag">
                Commercial Entity • Sharjah Media City (Shams), UAE
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)", lineHeight: 1.2, marginBottom: "20px" }}>
              E-Commerce Operations & Software Development
            </h1>

            <p style={{ fontSize: "1.15rem", color: "var(--text-body)", lineHeight: 1.7, marginBottom: "36px" }}>
              <strong>Sodavand Trading LLC</strong> is a commercial company registered in Sharjah Media City (Shams), UAE. We operate digital retail channels through <strong>Sodavand Store</strong> across marketplaces like Amazon, and we build <strong>custom software</strong>, web applications, and automation tools.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
              <a href="#what-we-do" className="btn btn-primary">
                Explore Our Activities &darr;
              </a>
              <Link href="/privacy" className="btn btn-ghost">
                Privacy Policy &rarr;
              </Link>
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
              <div className="card">
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(56, 189, 248, 0.12)",
                    color: "var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    marginBottom: "20px",
                  }}
                >
                  🛒
                </div>
                <h2 style={{ fontSize: "1.5rem", marginBottom: "8px" }}>Sodavand Store</h2>
                <div style={{ fontSize: "0.82rem", color: "var(--accent)", fontWeight: 600, letterSpacing: "0.05em", marginBottom: "16px" }}>
                  E-COMMERCE & DIGITAL RETAIL
                </div>
                <p style={{ color: "var(--text-body)", lineHeight: 1.7, marginBottom: "20px" }}>
                  Through <strong>Sodavand Store</strong>, we manage direct-to-consumer online retail operations across the UAE and GCC. We sell curated products on major digital marketplaces such as <strong>Amazon.ae</strong> with Prime fulfillment.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", color: "var(--text-muted)", fontSize: "0.9rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "var(--accent)" }}>✓</span> Active storefront on Amazon.ae & regional marketplaces
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "var(--accent)" }}>✓</span> Product sourcing & brand development
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "var(--accent)" }}>✓</span> Full Amazon FBA warehousing, Prime logistics, and customer support
                  </li>
                </ul>
              </div>

              {/* Pillar 2: Software Development */}
              <div className="card">
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(37, 99, 235, 0.15)",
                    color: "#60A5FA",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    marginBottom: "20px",
                  }}
                >
                  💻
                </div>
                <h2 style={{ fontSize: "1.5rem", marginBottom: "8px" }}>Software Development</h2>
                <div style={{ fontSize: "0.82rem", color: "#60A5FA", fontWeight: 600, letterSpacing: "0.05em", marginBottom: "16px" }}>
                  ENGINEERING, TOOLS & INTEGRATIONS
                </div>
                <p style={{ color: "var(--text-body)", lineHeight: 1.7, marginBottom: "20px" }}>
                  Alongside retail, we build <strong>custom software applications</strong>, web platforms, and internal automation tools designed to automate store operations, inventory management, and business intelligence.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", color: "var(--text-muted)", fontSize: "0.9rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "#60A5FA" }}>✓</span> Modern web application and platform development
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "#60A5FA" }}>✓</span> Amazon Selling Partner API (SP-API) & Ads API integration
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "#60A5FA" }}>✓</span> Automated inventory forecasting, pricing tools, and financial reporting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Amazon Developer & Privacy Compliance */}
        <section id="compliance" style={{ padding: "30px 0 70px" }}>
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
                  Our internal developer applications connect to Amazon APIs exclusively to manage Sodavand Store inventory, orders, and business reports. We strictly adhere to Amazon&apos;s Data Protection Policy with zero storage or resale of customer personal information.
                </p>
              </div>
              <Link href="/privacy" className="btn btn-ghost" style={{ whiteSpace: "nowrap" }}>
                Read Privacy Policy &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* About & Origin */}
        <section id="about" style={{ padding: "60px 0 70px", borderTop: "1px solid var(--border)" }}>
          <div className="container" style={{ maxWidth: "780px", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "14px" }}>About Sodavand Trading LLC</h2>
            <p style={{ color: "var(--text-body)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "20px" }}>
              The name <strong>Sodavand</strong> originates from the fusion of <em>Souda</em> (representing commerce, trade, and business enterprise) and <em>Vand</em> (signifying connection, affiliation, and unity). True to our name, we connect commercial retail with modern software engineering.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7 }}>
              Incorporated under the commercial regulations of <strong>Sharjah Media City (Shams)</strong> in the United Arab Emirates, Sodavand Trading LLC operates both as an independent digital merchant and as a technology developer.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ padding: "40px 0 90px" }}>
          <div className="container" style={{ maxWidth: "680px" }}>
            <div
              className="card"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "24px",
                textAlign: "left",
                padding: "32px",
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
                  Commercial Registration
                </div>
                <div style={{ color: "var(--text-main)", fontWeight: 600, fontSize: "1.05rem", marginTop: "4px" }}>
                  Sharjah Media City (Shams), UAE
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
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Logo size={24} showText={false} />
            <span>
              © {new Date().getFullYear()} <strong>Sodavand Trading LLC</strong>. All rights reserved.
            </span>
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
