import React from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <section
          style={{
            padding: "90px 0 65px",
            position: "relative",
            overflow: "hidden",
            borderBottom: "1px solid var(--border)",
            background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56, 189, 248, 0.12), transparent)",
          }}
        >
          <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
            <div style={{ marginBottom: "22px", display: "inline-block" }}>
              <span className="tag">
                <span className="status-dot" />
                Commercial Entity • Sharjah Media City (Shams), UAE
              </span>
            </div>

            <h1
              className="gradient-text"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                lineHeight: 1.18,
                maxWidth: "900px",
                margin: "0 auto 24px",
                fontWeight: 800,
              }}
            >
              Commerce, Technology & Intelligent Automation
            </h1>

            <p
              style={{
                fontSize: "clamp(1.05rem, 2vw, 1.2rem)",
                color: "var(--text-light)",
                lineHeight: 1.75,
                maxWidth: "780px",
                margin: "0 auto 36px",
              }}
            >
              <strong>Sodavand Trading LLC</strong> is an independent commercial company based in the United Arab Emirates. We operate consumer e-commerce brands and develop modern software applications, business automations, and intelligent AI agents.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", marginBottom: "50px" }}>
              <a href="#about" className="btn btn-primary">
                About Our Company &darr;
              </a>
              <a href="#contact" className="btn btn-ghost">
                Contact Us &rarr;
              </a>
            </div>

            {/* Corporate Highlights Strip */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "18px",
                maxWidth: "960px",
                margin: "0 auto",
                textAlign: "left",
              }}
            >
              <div className="stat-box">
                <div className="stat-val" style={{ color: "var(--accent)" }}>Shams Freezone</div>
                <div className="stat-desc">Commercial License in Sharjah, UAE</div>
              </div>
              <div className="stat-box">
                <div className="stat-val" style={{ color: "#60A5FA" }}>Digital Retail</div>
                <div className="stat-desc">Consumer Brand Development</div>
              </div>
              <div className="stat-box">
                <div className="stat-val" style={{ color: "#34D399" }}>Software & Apps</div>
                <div className="stat-desc">Web Platforms & Mobile Tools</div>
              </div>
              <div className="stat-box">
                <div className="stat-val" style={{ color: "#A78BFA" }}>AI & Automation</div>
                <div className="stat-desc">Intelligent Workflows & Agents</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Who We Are & Where We Are (About Us) */}
        <section id="about" style={{ padding: "80px 0", borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "48px",
                alignItems: "center",
              }}
            >
              <div>
                <span className="tag" style={{ marginBottom: "16px" }}>
                  Corporate Entity
                </span>
                <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", marginBottom: "18px", lineHeight: 1.25 }}>
                  About Sodavand Trading LLC
                </h2>
                <p style={{ color: "var(--text-body)", fontSize: "1.02rem", lineHeight: 1.75, marginBottom: "16px" }}>
                  <strong>Sodavand Trading LLC</strong> is a commercial enterprise duly incorporated and licensed under the regulatory authority of <strong>Sharjah Media City (Shams)</strong> in the United Arab Emirates.
                </p>
                <p style={{ color: "var(--text-body)", fontSize: "1.02rem", lineHeight: 1.75, marginBottom: "20px" }}>
                  The name <strong>Sodavand</strong> is rooted in the fusion of <em>Souda</em> (representing commerce, enterprise, and trade) and <em>Vand</em> (signifying connection, unity, and affiliation). True to our name, our mission is to unite modern physical commerce with cutting-edge software and automation.
                </p>

                <div
                  style={{
                    background: "rgba(17, 23, 38, 0.6)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-sm)",
                    padding: "20px 24px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                    gap: "16px",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                      Country
                    </div>
                    <div style={{ color: "var(--text-main)", fontWeight: 600, fontSize: "0.95rem", marginTop: "3px" }}>
                      United Arab Emirates
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                      Jurisdiction
                    </div>
                    <div style={{ color: "var(--text-main)", fontWeight: 600, fontSize: "0.95rem", marginTop: "3px" }}>
                      Sharjah Media City (Shams)
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                      Scope of Activity
                    </div>
                    <div style={{ color: "var(--text-main)", fontWeight: 600, fontSize: "0.95rem", marginTop: "3px" }}>
                      E-Commerce & Software
                    </div>
                  </div>
                </div>
              </div>

              {/* Corporate Presence Visual */}
              <div className="img-showcase" style={{ height: "400px", boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)" }}>
                <img
                  src="/images/corporate_hq.jpg"
                  alt="Sodavand Trading LLC Corporate Office UAE"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    right: "16px",
                    background: "rgba(9, 13, 22, 0.85)",
                    backdropFilter: "blur(10px)",
                    padding: "12px 18px",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#FFFFFF" }}>
                    Executive Operations & Commercial Registration
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                    Sharjah Media City (Shams), Sharjah, UAE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: E-Commerce & Brand Management */}
        <section id="ecommerce" style={{ padding: "80px 0", borderBottom: "1px solid var(--border)", backgroundColor: "rgba(13, 19, 34, 0.3)" }}>
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "48px",
                alignItems: "center",
              }}
            >
              {/* Left: Operations Image */}
              <div className="img-showcase" style={{ height: "400px", boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)" }}>
                <img
                  src="/images/logistics_fulfillment.jpg"
                  alt="Sodavand E-Commerce Supply Chain and Distribution"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    right: "16px",
                    background: "rgba(9, 13, 22, 0.85)",
                    backdropFilter: "blur(10px)",
                    padding: "12px 18px",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#FFFFFF" }}>
                    Supply Chain & Product Distribution
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                    Managing direct consumer fulfillment across the UAE and region
                  </div>
                </div>
              </div>

              {/* Right: What we do in E-Commerce */}
              <div>
                <span className="tag" style={{ marginBottom: "16px" }}>
                  Retail & Digital Commerce
                </span>
                <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", marginBottom: "18px", lineHeight: 1.25 }}>
                  E-Commerce Brand Development & Retail Operations
                </h2>
                <p style={{ color: "var(--text-body)", fontSize: "1.02rem", lineHeight: 1.75, marginBottom: "18px" }}>
                  Our commercial arm specializes in product development, brand incubation, and digital retail distribution across the UAE and wider GCC market. We handle end-to-end commercial operations from international manufacturing and quality assurance to regional warehousing and fulfillment.
                </p>

                {/* Brand Highlight: MAVoLo */}
                <div
                  className="card"
                  style={{
                    padding: "24px",
                    marginBottom: "20px",
                    background: "rgba(17, 23, 38, 0.75)",
                    borderColor: "rgba(56, 189, 248, 0.2)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                    <div style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                      Current Flagship Brand
                    </div>
                    <span className="tag" style={{ fontSize: "0.72rem", padding: "2px 8px" }}>
                      Active Brand
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.25rem", color: "var(--text-main)", marginBottom: "8px" }}>
                    MAVoLo
                  </h3>
                  <p style={{ color: "var(--text-body)", fontSize: "0.92rem", lineHeight: 1.65, margin: 0 }}>
                    Our primary consumer brand focused on functional home, kitchen, and lifestyle everyday products. We design and curate durable, high-utility goods built with modern ergonomics and premium food-grade materials.
                  </p>
                </div>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", color: "var(--text-muted)", fontSize: "0.92rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "var(--accent)" }}>✓</span> Sourcing, supply chain management, and inventory distribution
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "var(--accent)" }}>✓</span> Brand identity, packaging standards, and product quality oversight
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "var(--accent)" }}>✓</span> Dedicated customer service and regional logistics fulfillment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Software, Automations & AI Agents */}
        <section id="software" style={{ padding: "80px 0", borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "48px",
                alignItems: "center",
              }}
            >
              {/* Left Column: Software Capabilities */}
              <div>
                <span className="tag" style={{ marginBottom: "16px" }}>
                  Engineering & Innovation
                </span>
                <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", marginBottom: "18px", lineHeight: 1.25 }}>
                  Software Development, Automations & AI Agents
                </h2>
                <p style={{ color: "var(--text-body)", fontSize: "1.02rem", lineHeight: 1.75, marginBottom: "24px" }}>
                  Alongside our commerce activities, Sodavand operates a technology arm focused on building modern applications, internal automation pipelines, and autonomous AI agents designed to streamline complex business workflows.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div className="card" style={{ padding: "20px 24px" }}>
                    <h4 style={{ fontSize: "1.08rem", color: "var(--accent)", marginBottom: "6px" }}>
                      📱 Web & Mobile Applications
                    </h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-body)", margin: 0 }}>
                      Designing and developing modern web platforms, administrative dashboards, and custom mobile applications tailored to business needs.
                    </p>
                  </div>

                  <div className="card" style={{ padding: "20px 24px" }}>
                    <h4 style={{ fontSize: "1.08rem", color: "#60A5FA", marginBottom: "6px" }}>
                      ⚡ Process Automations
                    </h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-body)", margin: 0 }}>
                      Automating recurring operational tasks, inventory forecasting, multi-channel synchronization, and real-time financial reporting.
                    </p>
                  </div>

                  <div className="card" style={{ padding: "20px 24px" }}>
                    <h4 style={{ fontSize: "1.08rem", color: "#34D399", marginBottom: "6px" }}>
                      🤖 Autonomous AI Agents
                    </h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-body)", margin: 0 }}>
                      Architecting intelligent agents that monitor data pipelines, process complex inputs, execute repetitive tasks, and assist in operational decision-making.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Software Visual */}
              <div className="img-showcase" style={{ height: "420px", boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)" }}>
                <img
                  src="/images/platform_dashboard.jpg"
                  alt="Sodavand Software Engineering and AI Systems"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    right: "16px",
                    background: "rgba(9, 13, 22, 0.85)",
                    backdropFilter: "blur(10px)",
                    padding: "12px 18px",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#FFFFFF" }}>
                    Custom Architecture & Intelligent Software
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                    Automated pipelines, intelligent agents & data platforms
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Contact & Corporate Inquiries */}
        <section id="contact" style={{ padding: "80px 0 90px" }}>
          <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
            <span className="tag" style={{ marginBottom: "14px" }}>
              Communications
            </span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", marginBottom: "16px" }}>
              Get in Touch
            </h2>
            <p style={{ color: "var(--text-body)", fontSize: "1.02rem", lineHeight: 1.7, marginBottom: "36px" }}>
              For business partnerships, supplier inquiries, software collaboration, or official corporate communications:
            </p>

            <div
              className="card"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "28px",
                textAlign: "left",
                padding: "36px",
              }}
            >
              <div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Official Corporate Email
                </div>
                <a
                  href="mailto:contact@sodavand.net"
                  style={{
                    color: "var(--accent)",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    display: "block",
                    marginTop: "6px",
                    wordBreak: "break-all",
                  }}
                >
                  contact@sodavand.net
                </a>
                <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "8px" }}>
                  Monitored daily for official inquiries.
                </p>
              </div>

              <div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Commercial Headquarters
                </div>
                <div style={{ color: "var(--text-main)", fontWeight: 700, fontSize: "1.05rem", marginTop: "6px" }}>
                  Sharjah Media City (Shams)
                </div>
                <div style={{ color: "var(--text-body)", fontSize: "0.88rem", marginTop: "4px" }}>
                  Al Messaned, Sharjah, United Arab Emirates
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Corporate Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          backgroundColor: "#060910",
          padding: "45px 0 35px",
          fontSize: "0.88rem",
          color: "var(--text-muted)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "24px",
              marginBottom: "30px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Logo size={34} showText={true} />
            </div>

            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", fontSize: "0.9rem" }}>
              <a href="#about" style={{ color: "var(--text-body)" }}>
                About Us
              </a>
              <a href="#ecommerce" style={{ color: "var(--text-body)" }}>
                E-Commerce
              </a>
              <a href="#software" style={{ color: "var(--text-body)" }}>
                Software & AI
              </a>
              <Link href="/privacy" style={{ color: "var(--accent)" }}>
                Privacy Policy
              </Link>
              <a href="#contact" style={{ color: "var(--text-body)" }}>
                Contact
              </a>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.05)",
              paddingTop: "24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
              fontSize: "0.8rem",
            }}
          >
            <div>
              © {new Date().getFullYear()} <strong>Sodavand Trading LLC</strong>. Incorporated in Sharjah Media City (Shams), UAE. All rights reserved.
            </div>
            <div>
              Corporate Domain: <span style={{ color: "var(--text-light)" }}>sodavand.net</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
