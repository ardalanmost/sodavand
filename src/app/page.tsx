import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Visual Accents */}
      <div className="ambient-grid" />
      <div className="hero-glow" />

      {/* Corporate Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          backgroundColor: "rgba(7, 9, 14, 0.8)",
          borderBottom: "1px solid var(--border-subtle)",
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
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: "1.2rem",
                color: "#FFFFFF",
                boxShadow: "0 0 20px rgba(14, 165, 233, 0.4)",
              }}
            >
              S
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "1.15rem", letterSpacing: "0.04em" }}>
                SODAVAND
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "var(--accent-cyan)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Trading LLC • Dubai, UAE
              </div>
            </div>
          </Link>

          {/* Nav Links */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              fontSize: "0.9rem",
              fontWeight: 500,
              color: "var(--text-secondary)",
            }}
          >
            <a href="#solutions" style={{ transition: "var(--transition-fast)" }}>
              Solutions
            </a>
            <a href="#technology" style={{ transition: "var(--transition-fast)" }}>
              Technology & ERP
            </a>
            <a href="#security" style={{ transition: "var(--transition-fast)" }}>
              Security & SP-API
            </a>
            <a href="#brands" style={{ transition: "var(--transition-fast)" }}>
              Portfolio Brands
            </a>
            <a href="#about" style={{ transition: "var(--transition-fast)" }}>
              About
            </a>
            <Link
              href="/privacy"
              style={{ color: "var(--text-primary)", fontWeight: 600 }}
            >
              Privacy Policy
            </Link>
          </nav>

          {/* Action CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.8rem",
                color: "var(--accent-emerald)",
                background: "rgba(16, 185, 129, 0.08)",
                padding: "6px 12px",
                borderRadius: "var(--radius-full)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
              }}
            >
              <span className="pulse-indicator" />
              <span>SP-API Integrated</span>
            </div>
            <a href="#contact" className="btn btn-primary" style={{ padding: "8px 18px", fontSize: "0.85rem" }}>
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ paddingTop: "80px", paddingBottom: "70px", position: "relative" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "960px" }}>
          <div style={{ marginBottom: "20px" }}>
            <span className="badge badge-cyan">
              Commercial Entity • Registered in the United Arab Emirates
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              lineHeight: 1.15,
              marginBottom: "24px",
              background: "linear-gradient(180deg, #FFFFFF 20%, #94A3B8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Next-Generation E-Commerce Technology, Algorithmic Trading & Cloud Marketplace Intelligence
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              marginBottom: "36px",
              maxWidth: "800px",
              margin: "0 auto 36px",
            }}
          >
            <strong>Sodavand Trading LLC</strong> bridges advanced software engineering and algorithmic automation with high-velocity marketplace operations. We build proprietary ERP platforms, connect real-time Amazon Selling Partner APIs, and operate scalable consumer brands across Amazon.ae and GCC marketplaces.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "50px",
            }}
          >
            <a href="#solutions" className="btn btn-primary">
              Explore Enterprise Solutions &darr;
            </a>
            <Link href="/privacy" className="btn btn-secondary">
              Security & Privacy Policy &rarr;
            </Link>
          </div>

          {/* Quick Metrics Strip */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
              marginTop: "20px",
            }}
          >
            <div className="glass-panel" style={{ padding: "20px" }}>
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--accent-cyan)" }}>
                100%
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "4px" }}>
                Cloud-Native Automation
              </div>
            </div>
            <div className="glass-panel" style={{ padding: "20px" }}>
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#38BDF8" }}>
                SP-API & Ads
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "4px" }}>
                Amazon Developer Architecture
              </div>
            </div>
            <div className="glass-panel" style={{ padding: "20px" }}>
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#818CF8" }}>
                Zero-PII
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "4px" }}>
                Strict Data Isolation & Security
              </div>
            </div>
            <div className="glass-panel" style={{ padding: "20px" }}>
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--accent-emerald)" }}>
                Dubai, UAE
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "4px" }}>
                Commercial Headquarters
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simulated Live Enterprise Terminal */}
      <section style={{ padding: "40px 0 80px" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="terminal-dot dot-red" />
              <span className="terminal-dot dot-yellow" />
              <span className="terminal-dot dot-green" />
              <span className="terminal-title">SODAVAND INTELLIGENCE ENGINE — v2.4 (LIVE MARKETPLACE STREAM)</span>
              <span style={{ marginLeft: "auto", fontSize: "0.75rem", color: "var(--accent-emerald)" }}>
                ● STREAM ACTIVE
              </span>
            </div>
            <div style={{ padding: "24px" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "16px",
                  marginBottom: "24px",
                  paddingBottom: "20px",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Amazon SP-API Status
                  </div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--accent-emerald)", marginTop: "4px" }}>
                    Connected & Verified
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Ads Algorithmic ROAS
                  </div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#38BDF8", marginTop: "4px" }}>
                    7.80x (Top Performers)
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Settlement Discrepancy
                  </div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#F8FAFC", marginTop: "4px" }}>
                    0.00 AED (Reconciled)
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    FBA Stock Runway
                  </div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#34D399", marginTop: "4px" }}>
                    Optimal (Air & Sea Sync)
                  </div>
                </div>
              </div>

              {/* Terminal Logs */}
              <div style={{ fontSize: "0.82rem", lineHeight: 1.8, color: "#CBD5E1" }}>
                <p>
                  <span style={{ color: "var(--accent-cyan)" }}>[SP-API::Orders]</span> Real-time order fulfillment & shipment tracking synchronized via Amazon Selling Partner API.
                </p>
                <p>
                  <span style={{ color: "var(--accent-emerald)" }}>[ADS-API::Optimizer]</span> Deterministic bidirectional lookback matrix evaluated. Bleeder targets throttled; winning targets stabilized.
                </p>
                <p>
                  <span style={{ color: "#F59E0B" }}>[INVENTORY::Forecast]</span> Automated replenishment threshold calculated for UAE fulfillment centers (DXB3 / DWC2).
                </p>
                <p>
                  <span style={{ color: "#818CF8" }}>[SECURITY::DPP]</span> Zero-PII compliance active. OAuth 2.0 LWA session secured with TLS 1.3 encryption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Enterprise Solutions */}
      <section id="solutions" style={{ padding: "80px 0", borderTop: "1px solid var(--border-subtle)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 60px" }}>
            <span className="badge badge-cyan" style={{ marginBottom: "12px" }}>
              Core Capabilities
            </span>
            <h2 style={{ fontSize: "2.3rem", marginBottom: "16px" }}>
              Engineering High-Velocity Digital Commerce
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
              We develop custom software, proprietary data engines, and commercial infrastructure that empower end-to-end marketplace excellence.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {/* Card 1 */}
            <div className="glass-panel" style={{ padding: "36px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(14, 165, 233, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-cyan)",
                  fontSize: "1.4rem",
                  marginBottom: "20px",
                }}
              >
                ⚙️
              </div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "12px" }}>
                Proprietary E-Commerce ERP
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Custom cloud software connecting multi-warehouse inventory, automated repricing, and financial settlement reconciliations through official Amazon Selling Partner APIs (SP-API).
              </p>
            </div>

            {/* Card 2 */}
            <div className="glass-panel" style={{ padding: "36px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(99, 102, 241, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#818CF8",
                  fontSize: "1.4rem",
                  marginBottom: "20px",
                }}
              >
                📊
              </div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "12px" }}>
                Marketplace Data & Web Analytics
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Algorithmic competitor intelligence, Search Frequency Rank (SFR) tracking, price elasticity modeling, and predictive demand analytics tailored for UAE and GCC consumers.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glass-panel" style={{ padding: "36px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(16, 185, 129, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-emerald)",
                  fontSize: "1.4rem",
                  marginBottom: "20px",
                }}
              >
                🎯
              </div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "12px" }}>
                Algorithmic Advertising Intelligence
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Automated Amazon PPC campaign management employing causal lookback matrices, automated negative harvesting, and deterministic bid slashing to maximize net margin.
              </p>
            </div>

            {/* Card 4 */}
            <div className="glass-panel" style={{ padding: "36px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(245, 158, 11, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#F59E0B",
                  fontSize: "1.4rem",
                  marginBottom: "20px",
                }}
              >
                🚢
              </div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "12px" }}>
                Brand Incubation & GCC Retail
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Full-lifecycle consumer brand launching, international manufacturing sourcing, compliant UAE import/export, and Prime-eligible FBA distribution across the Middle East.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Amazon Developer Compliance */}
      <section id="security" style={{ padding: "80px 0", backgroundColor: "rgba(14, 19, 31, 0.4)", borderTop: "1px solid var(--border-subtle)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto 60px" }}>
            <span className="badge badge-emerald" style={{ marginBottom: "12px" }}>
              Data Protection & Compliance
            </span>
            <h2 style={{ fontSize: "2.3rem", marginBottom: "16px" }}>
              Enterprise Security & Amazon Developer Standards
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
              Our technology infrastructure is engineered from the ground up to exceed Amazon&apos;s Data Protection Policy (DPP) and Acceptable Use Policy (AUP).
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            <div className="glass-panel" style={{ padding: "30px" }}>
              <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#F8FAFC", marginBottom: "10px" }}>
                🔒 Zero-PII Storage Policy
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                Buyer personally identifiable information is never stored or aggregated. Internal software processes non-PII catalog, pricing, inventory, and settlement data exclusively.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: "30px" }}>
              <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#F8FAFC", marginBottom: "10px" }}>
                🛡️ End-to-End Encryption
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                Strict TLS 1.3 cipher suites enforced in transit. All database volumes utilize AES-256 encryption at rest inside private Virtual Private Clouds (VPC).
              </p>
            </div>

            <div className="glass-panel" style={{ padding: "30px" }}>
              <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#F8FAFC", marginBottom: "10px" }}>
                🔑 Least-Privilege IAM Roles
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                Granular, role-based access control (RBAC). Our Amazon SP-API applications request only specific, non-restricted scopes required for operational logistics and analytics.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: "30px" }}>
              <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#F8FAFC", marginBottom: "10px" }}>
                📜 Immutable Audit Trails
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                Every API call, automated bid adjustment, and inventory query is logged with cryptographic timestamps to ensure complete transparency and operational accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Brands */}
      <section id="brands" style={{ padding: "80px 0", borderTop: "1px solid var(--border-subtle)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 50px" }}>
            <span className="badge badge-cyan" style={{ marginBottom: "12px" }}>
              Brand Management
            </span>
            <h2 style={{ fontSize: "2.3rem", marginBottom: "16px" }}>
              Brands Incubated by Sodavand
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
              We apply our software engineering, supply chain rigor, and analytics to build market-leading consumer products.
            </p>
          </div>

          <div
            className="glass-panel"
            style={{
              padding: "40px",
              maxWidth: "880px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "30px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ maxWidth: "540px" }}>
              <div style={{ display: "inline-block", padding: "4px 10px", background: "rgba(255, 153, 0, 0.15)", color: "#FF9900", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "12px" }}>
                Amazon.ae Verified Brand
              </div>
              <h3 style={{ fontSize: "1.6rem", marginBottom: "10px" }}>
                MAVoLo — Home & Kitchenware
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "20px" }}>
                Our flagship lifestyle brand offering Japanese-inspired minimalist bento lunch boxes and 1g-precision digital kitchen scales. Ranked among top-tier kitchen essentials on Amazon.ae with Prime delivery across the UAE.
              </p>
              <div style={{ display: "flex", gap: "12px" }}>
                <span className="badge badge-cyan">Leakproof Bento Series</span>
                <span className="badge badge-cyan">Precision Kitchen Scales</span>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "8px" }}>
                Marketplace Channel
              </div>
              <div style={{ fontWeight: 700, fontSize: "1.1rem", color: "#F8FAFC" }}>
                Amazon.ae Prime
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--accent-emerald)", marginTop: "4px" }}>
                ● Active Catalog
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Entity */}
      <section id="about" style={{ padding: "80px 0", borderTop: "1px solid var(--border-subtle)" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="badge badge-cyan" style={{ marginBottom: "12px" }}>
              Corporate Entity
            </span>
            <h2 style={{ fontSize: "2.3rem", marginBottom: "16px" }}>
              About Sodavand Trading LLC
            </h2>
          </div>

          <div className="glass-panel" style={{ padding: "40px", lineHeight: 1.8, color: "var(--text-secondary)", fontSize: "1rem" }}>
            <p style={{ marginBottom: "16px" }}>
              <strong>Sodavand Trading LLC</strong> is a legally established commercial entity registered in the United Arab Emirates. We operate at the cutting edge of digital retail, software engineering, and international supply chains.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Our organization combines proprietary cloud software development with high-frequency marketplace commerce. We design custom automated pipelines for inventory forecasting, competitive pricing, and multi-campaign PPC bidding algorithms tailored specifically for regional dynamics in Dubai, Abu Dhabi, and the wider GCC region.
            </p>
            <p>
              As an authorized developer and marketplace merchant, we strictly adhere to Amazon&apos;s Acceptable Use Policy and Data Protection Policy, ensuring high reliability, data security, and long-term customer trust.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: "80px 0", borderTop: "1px solid var(--border-subtle)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="badge badge-cyan" style={{ marginBottom: "12px" }}>
            Contact & Inquiries
          </span>
          <h2 style={{ fontSize: "2.3rem", marginBottom: "16px" }}>
            Get in Touch With Sodavand Trading LLC
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", marginBottom: "40px" }}>
            For corporate inquiries, developer access, or commercial distribution partnerships:
          </p>

          <div
            className="glass-panel"
            style={{
              padding: "40px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
              textAlign: "left",
            }}
          >
            <div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                Official Corporate Email
              </div>
              <a
                href="mailto:contact@sodavand.net"
                style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--accent-cyan)", display: "block", marginTop: "6px" }}
              >
                contact@sodavand.net
              </a>
            </div>

            <div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                Commercial Jurisdiction
              </div>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#F8FAFC", marginTop: "6px" }}>
                Dubai, United Arab Emirates
              </div>
            </div>

            <div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                Compliance & Legal
              </div>
              <Link
                href="/privacy"
                style={{ fontSize: "1rem", fontWeight: 600, color: "var(--accent-emerald)", display: "block", marginTop: "6px" }}
              >
                View Privacy Policy &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--border-subtle)",
          padding: "40px 0",
          backgroundColor: "#05070B",
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
            gap: "20px",
          }}
        >
          <div>
            <div style={{ fontWeight: 800, color: "#F8FAFC", fontSize: "1rem", letterSpacing: "0.05em" }}>
              SODAVAND TRADING LLC
            </div>
            <div style={{ marginTop: "4px" }}>
              © {new Date().getFullYear()} Sodavand Trading LLC. All rights reserved.
            </div>
          </div>

          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="/privacy" style={{ color: "var(--text-secondary)", transition: "var(--transition-fast)" }}>
              Privacy Policy
            </Link>
            <a href="#security" style={{ color: "var(--text-secondary)", transition: "var(--transition-fast)" }}>
              Data Protection & DPP
            </a>
            <a href="#contact" style={{ color: "var(--text-secondary)", transition: "var(--transition-fast)" }}>
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
