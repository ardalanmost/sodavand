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
            padding: "90px 0 60px",
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
                Licensed Commercial Entity • Sharjah Media City (Shams), UAE
              </span>
            </div>

            <h1
              className="gradient-text"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                lineHeight: 1.18,
                maxWidth: "920px",
                margin: "0 auto 24px",
                fontWeight: 800,
              }}
            >
              Intelligent E-Commerce Operations & Enterprise Software Development
            </h1>

            <p
              style={{
                fontSize: "clamp(1.05rem, 2vw, 1.22rem)",
                color: "var(--text-light)",
                lineHeight: 1.7,
                maxWidth: "800px",
                margin: "0 auto 36px",
              }}
            >
              <strong>Sodavand Trading LLC</strong> is an established commercial enterprise incorporated in the United Arab Emirates. We operate high-velocity retail channels through <strong>Sodavand Store</strong> across leading marketplaces like Amazon, powered by proprietary automation systems, inventory intelligence, and custom software architecture.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", marginBottom: "50px" }}>
              <a href="#operations" className="btn btn-primary">
                Corporate Operations &darr;
              </a>
              <a href="#portfolio" className="btn btn-ghost">
                Brand & Product Portfolio &rarr;
              </a>
            </div>

            {/* Quick Stats Strip */}
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
                <div className="stat-val" style={{ color: "var(--accent)" }}>100% Prime</div>
                <div className="stat-desc">FBA Fulfillment SLA Across UAE</div>
              </div>
              <div className="stat-box">
                <div className="stat-val" style={{ color: "#60A5FA" }}>Multi-Brand</div>
                <div className="stat-desc">Curated Consumer Goods Portfolio</div>
              </div>
              <div className="stat-box">
                <div className="stat-val" style={{ color: "#34D399" }}>Proprietary Tech</div>
                <div className="stat-desc">In-House Inventory & Pricing Engines</div>
              </div>
              <div className="stat-box">
                <div className="stat-val" style={{ color: "#A78BFA" }}>Shams Freezone</div>
                <div className="stat-desc">Sharjah Commercial Registration</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: E-Commerce Operations & Fulfillment (Sodavand Store) */}
        <section id="operations" style={{ padding: "80px 0", borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "48px",
                alignItems: "center",
              }}
            >
              {/* Left Column: Business Activities */}
              <div>
                <span className="tag" style={{ marginBottom: "16px" }}>
                  Retail & Marketplace Operations
                </span>
                <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", marginBottom: "18px", lineHeight: 1.25 }}>
                  High-Velocity Marketplace Retail via Sodavand Store
                </h2>
                <p style={{ color: "var(--text-body)", fontSize: "1.02rem", lineHeight: 1.75, marginBottom: "22px" }}>
                  Under our retail division, <strong>Sodavand Store</strong>, we manage direct-to-consumer and business-to-consumer sales on regional e-commerce marketplaces including <strong>Amazon.ae</strong>. We leverage advanced logistics infrastructures, ensuring fast next-day and same-day delivery to customers across the UAE.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "28px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(56, 189, 248, 0.15)",
                        color: "var(--accent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.85rem",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      ✓
                    </div>
                    <div>
                      <strong style={{ color: "var(--text-main)" }}>Fulfillment by Amazon (FBA):</strong> Strategic stock positioning across Amazon fulfillment centers in Dubai and Abu Dhabi for Prime dispatch.
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(56, 189, 248, 0.15)",
                        color: "var(--accent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.85rem",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      ✓
                    </div>
                    <div>
                      <strong style={{ color: "var(--text-main)" }}>Quality Sourcing & Compliance:</strong> Strict manufacturer vetting, international safety certifications, and robust packaging standards.
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(56, 189, 248, 0.15)",
                        color: "var(--accent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.85rem",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      ✓
                    </div>
                    <div>
                      <strong style={{ color: "var(--text-main)" }}>Customer Centricity:</strong> Outstanding customer service SLA, rapid response time, and hassle-free returns management.
                    </div>
                  </div>
                </div>

                <a href="#portfolio" className="btn btn-ghost">
                  Explore Active Brand Lines &rarr;
                </a>
              </div>

              {/* Right Column: Visual Showcase */}
              <div className="img-showcase" style={{ height: "420px", boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)" }}>
                <img
                  src="/images/logistics_fulfillment.jpg"
                  alt="Sodavand E-Commerce Logistics and Fulfillment Hub"
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#FFFFFF" }}>
                      Automated Supply Chain & Prime Warehousing
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                      Continuous restock tracking & regional GCC delivery
                    </div>
                  </div>
                  <span className="tag" style={{ fontSize: "0.72rem", padding: "3px 8px" }}>
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Active Brand & Product Portfolio (MAVoLo Showcase) */}
        <section id="portfolio" style={{ padding: "80px 0", borderBottom: "1px solid var(--border)", backgroundColor: "rgba(13, 19, 34, 0.4)" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 50px" }}>
              <span className="tag" style={{ marginBottom: "14px" }}>
                Brand Portfolio
              </span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", marginBottom: "16px" }}>
                Curated Consumer Products Under Sodavand Store
              </h2>
              <p style={{ color: "var(--text-body)", fontSize: "1.02rem", lineHeight: 1.7 }}>
                We actively own, develop, and distribute branded everyday consumer goods on digital storefronts, backed by high customer satisfaction ratings and Prime fulfillment.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "32px",
              }}
            >
              {/* Product 1: MAVoLo Bento Box */}
              <div className="card" style={{ display: "flex", flexDirection: "column" }}>
                <div
                  className="img-showcase"
                  style={{
                    height: "260px",
                    marginBottom: "22px",
                    backgroundColor: "#0B101D",
                  }}
                >
                  <img
                    src="/images/products/mavolo_bento.jpg"
                    alt="MAVoLo Bento Box by Sodavand Store"
                    style={{ width: "100%", height: "100%", objectFit: "contain", padding: "12px" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      background: "rgba(9, 13, 22, 0.8)",
                      backdropFilter: "blur(6px)",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    Amazon Prime
                  </div>
                </div>

                <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>
                    MAVoLo • Home & Kitchen
                  </div>
                  <h3 style={{ fontSize: "1.35rem", marginBottom: "10px", color: "var(--text-main)" }}>
                    MAVoLo All-in-One Bento Lunch Box
                  </h3>
                  <p style={{ color: "var(--text-body)", fontSize: "0.92rem", lineHeight: 1.65, marginBottom: "18px", flex: 1 }}>
                    Modern, leak-proof multi-compartment lunch containers featuring food-grade materials, airtight silicone gaskets, built-in utensil storage, and thermal microwave compatibility.
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", borderTop: "1px solid var(--border)", paddingTop: "14px" }}>
                    <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", background: "rgba(255, 255, 255, 0.04)", padding: "4px 10px", borderRadius: "6px" }}>
                      BPA-Free Food Grade
                    </span>
                    <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", background: "rgba(255, 255, 255, 0.04)", padding: "4px 10px", borderRadius: "6px" }}>
                      Silicone Airtight Seal
                    </span>
                    <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", background: "rgba(255, 255, 255, 0.04)", padding: "4px 10px", borderRadius: "6px" }}>
                      Dual Size Variations (850ml & 1100ml)
                    </span>
                  </div>
                </div>
              </div>

              {/* Product 2: MAVoLo Digital Kitchen Scale */}
              <div className="card" style={{ display: "flex", flexDirection: "column" }}>
                <div
                  className="img-showcase"
                  style={{
                    height: "260px",
                    marginBottom: "22px",
                    backgroundColor: "#0B101D",
                  }}
                >
                  <img
                    src="/images/products/mavolo_scale.jpg"
                    alt="MAVoLo Precision Digital Kitchen Scale"
                    style={{ width: "100%", height: "100%", objectFit: "contain", padding: "12px" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      background: "rgba(9, 13, 22, 0.8)",
                      backdropFilter: "blur(6px)",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    Amazon Prime
                  </div>
                </div>

                <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>
                    MAVoLo • Culinary Electronics
                  </div>
                  <h3 style={{ fontSize: "1.35rem", marginBottom: "10px", color: "var(--text-main)" }}>
                    MAVoLo Precision Digital Kitchen Scale
                  </h3>
                  <p style={{ color: "var(--text-body)", fontSize: "0.92rem", lineHeight: 1.65, marginBottom: "18px", flex: 1 }}>
                    Ultra-sensitive culinary weighing scale with precision strain-gauge sensors, multi-unit measurement conversion, tare subtraction functionality, and sleek easy-to-clean tempered surface.
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", borderTop: "1px solid var(--border)", paddingTop: "14px" }}>
                    <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", background: "rgba(255, 255, 255, 0.04)", padding: "4px 10px", borderRadius: "6px" }}>
                      0.1g Precision Sensor
                    </span>
                    <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", background: "rgba(255, 255, 255, 0.04)", padding: "4px 10px", borderRadius: "6px" }}>
                      Multi-Unit (g, oz, lb, ml)
                    </span>
                    <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", background: "rgba(255, 255, 255, 0.04)", padding: "4px 10px", borderRadius: "6px" }}>
                      Backlit LCD Display
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Proprietary Technology & Custom Software Development */}
        <section id="technology" style={{ padding: "80px 0", borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "48px",
                alignItems: "center",
              }}
            >
              {/* Left Column: Visual Showcase */}
              <div className="img-showcase" style={{ height: "420px", boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)" }}>
                <img
                  src="/images/platform_dashboard.jpg"
                  alt="Sodavand E-Commerce Analytics and Inventory Engine"
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#FFFFFF" }}>
                      Custom Operations & Intelligence Platform
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                      Real-time inventory synchronization & predictive restock tools
                    </div>
                  </div>
                  <span className="tag" style={{ fontSize: "0.72rem", padding: "3px 8px" }}>
                    Engineered In-House
                  </span>
                </div>
              </div>

              {/* Right Column: Software Development Capabilities */}
              <div>
                <span className="tag" style={{ marginBottom: "16px" }}>
                  Engineering & Software Systems
                </span>
                <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", marginBottom: "18px", lineHeight: 1.25 }}>
                  Proprietary Tools & Enterprise Automation Architecture
                </h2>
                <p style={{ color: "var(--text-body)", fontSize: "1.02rem", lineHeight: 1.75, marginBottom: "22px" }}>
                  In addition to physical retail distribution, Sodavand operates an engineering division dedicated to designing bespoke software tools, web applications, and automation pipelines. We eliminate operational bottlenecks through algorithmic automation.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "28px" }}>
                  <div className="card" style={{ padding: "18px 22px" }}>
                    <h4 style={{ fontSize: "1.05rem", color: "var(--accent)", marginBottom: "6px" }}>
                      ⚡ Automated Inventory & Restock Forecasting
                    </h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-body)", margin: 0 }}>
                      Predictive demand algorithms analyzing sales velocity, regional transit lead times, and seasonal spikes to ensure optimal warehouse stock levels without costly stockouts.
                    </p>
                  </div>

                  <div className="card" style={{ padding: "18px 22px" }}>
                    <h4 style={{ fontSize: "1.05rem", color: "#60A5FA", marginBottom: "6px" }}>
                      📊 Financial & Margin Analytics Engines
                    </h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-body)", margin: 0 }}>
                      Automated unit-economic modeling factoring in FBA fulfillment fees, marketplace commissions, logistics costs, and regional VAT for continuous profitability visibility.
                    </p>
                  </div>

                  <div className="card" style={{ padding: "18px 22px" }}>
                    <h4 style={{ fontSize: "1.05rem", color: "#34D399", marginBottom: "6px" }}>
                      🔒 Secure System Integrations
                    </h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-body)", margin: 0 }}>
                      Cloud-native APIs deployed in secure containerized environments adhering to modern encryption standards (TLS 1.3 in-transit and AES-256 at-rest).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Corporate Profile & Shams Freezone Registration */}
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
                  Corporate Entity Profile
                </span>
                <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", marginBottom: "18px", lineHeight: 1.25 }}>
                  About Sodavand Trading LLC
                </h2>
                <p style={{ color: "var(--text-body)", fontSize: "1.02rem", lineHeight: 1.75, marginBottom: "16px" }}>
                  The name <strong>Sodavand</strong> originates from the union of <em>Souda</em> (representing commerce, enterprise, and mercantile trade) and <em>Vand</em> (signifying enduring connection and alignment). We represent the nexus where commercial trade seamlessly harmonizes with software innovation.
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "24px" }}>
                  Incorporated under the commercial regulatory authority of <strong>Sharjah Media City (Shams)</strong> in the United Arab Emirates, Sodavand Trading LLC maintains active commercial licenses authorizing both digital e-commerce retail distribution and computer software development services.
                </p>

                <div
                  style={{
                    background: "rgba(17, 23, 38, 0.6)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-sm)",
                    padding: "20px 24px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                    gap: "16px",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                      Jurisdiction
                    </div>
                    <div style={{ color: "var(--text-main)", fontWeight: 600, fontSize: "0.95rem", marginTop: "3px" }}>
                      United Arab Emirates
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                      Licensing Authority
                    </div>
                    <div style={{ color: "var(--text-main)", fontWeight: 600, fontSize: "0.95rem", marginTop: "3px" }}>
                      Sharjah Media City (Shams)
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                      Primary Activities
                    </div>
                    <div style={{ color: "var(--text-main)", fontWeight: 600, fontSize: "0.95rem", marginTop: "3px" }}>
                      E-Commerce & Software
                    </div>
                  </div>
                </div>
              </div>

              {/* Corporate HQ Visual */}
              <div className="img-showcase" style={{ height: "400px", boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)" }}>
                <img
                  src="/images/corporate_hq.jpg"
                  alt="Sodavand Corporate Presence in UAE"
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
                    Executive Operations & Commercial Hub
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                    Sharjah Media City (Shams), UAE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Contact & Communications */}
        <section id="contact" style={{ padding: "80px 0 90px" }}>
          <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
            <span className="tag" style={{ marginBottom: "14px" }}>
              Communications & Inquiries
            </span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", marginBottom: "16px" }}>
              Connect with Sodavand Trading LLC
            </h2>
            <p style={{ color: "var(--text-body)", fontSize: "1.02rem", lineHeight: 1.7, marginBottom: "36px" }}>
              For supplier partnerships, wholesale distribution inquiries, software collaboration, or official corporate correspondence:
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
                  Monitored daily by executive management.
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
              <a href="#operations" style={{ color: "var(--text-body)" }}>
                Operations
              </a>
              <a href="#portfolio" style={{ color: "var(--text-body)" }}>
                Portfolio
              </a>
              <a href="#technology" style={{ color: "var(--text-body)" }}>
                Technology
              </a>
              <a href="#about" style={{ color: "var(--text-body)" }}>
                About Company
              </a>
              <Link href="/privacy" style={{ color: "var(--accent)" }}>
                Privacy Policy
              </Link>
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
