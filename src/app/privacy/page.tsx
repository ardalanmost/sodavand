import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & Data Protection Policy | Sodavand Trading LLC",
  description:
    "Official Privacy Policy and Data Protection standards for Sodavand Trading LLC (Sharjah Media City Shams, UAE), outlining compliance with Amazon Selling Partner API (SP-API) data governance and security frameworks.",
};

export default function PrivacyPage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundColor: "var(--bg)" }}>
      {/* Header */}
      <header
        style={{
          borderBottom: "1px solid var(--border)",
          padding: "18px 0",
          backgroundColor: "rgba(9, 13, 22, 0.9)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/">
            <Logo size={32} showText={true} />
          </Link>
          <Link href="/" className="btn btn-ghost" style={{ padding: "6px 14px", fontSize: "0.85rem" }}>
            &larr; Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container" style={{ maxWidth: "840px", padding: "60px 24px 90px" }}>
        <div style={{ marginBottom: "30px" }}>
          <span className="tag" style={{ marginBottom: "12px" }}>
            Data Protection Governance
          </span>
          <h1 style={{ fontSize: "2.3rem", marginBottom: "8px" }}>Privacy & Security Policy</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            Entity: <strong>Sodavand Trading LLC</strong> • Registration: <strong>Sharjah Media City (Shams), UAE</strong> • Last Updated: September 2026
          </p>
        </div>

        <div
          className="card"
          style={{
            lineHeight: 1.8,
            color: "var(--text-body)",
            fontSize: "0.95rem",
            padding: "40px",
          }}
        >
          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.25rem", color: "var(--text-main)", marginBottom: "10px" }}>
              1. Corporate Overview & Purpose
            </h2>
            <p>
              This Privacy Policy outlines the data governance and security standards of <strong>Sodavand Trading LLC</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a commercial company incorporated in <strong>Sharjah Media City (Shams), Sharjah, United Arab Emirates</strong>. This policy applies to our corporate domain (<strong>sodavand.net</strong>), our retail operations under <strong>Sodavand Store</strong>, and our internal software applications.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.25rem", color: "var(--text-main)", marginBottom: "10px" }}>
              2. Amazon Selling Partner API (SP-API) & Developer Compliance
            </h2>
            <p style={{ marginBottom: "12px" }}>
              Sodavand Trading LLC builds and utilizes software tools integrated with Amazon Selling Partner APIs (SP-API) to manage our marketplace storefronts. In strict compliance with Amazon&apos;s <strong>Data Protection Policy (DPP)</strong> and <strong>Acceptable Use Policy (AUP)</strong>:
            </p>
            <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px", color: "var(--text-muted)" }}>
              <li>
                <strong>Zero-PII Storage:</strong> We do not store, aggregate, or harvest Personally Identifiable Information (PII) of Amazon customers. Any operational order data is processed ephemerally and discarded immediately after fulfillment verification.
              </li>
              <li>
                <strong>Internal Operations Only:</strong> Data accessed via Amazon APIs is used solely for inventory management, catalog updates, repricing automation, and financial reporting for Sodavand Store.
              </li>
              <li>
                <strong>Zero Resale or Disclosure:</strong> We never sell, rent, monetize, transfer, or disclose marketplace or customer data to third parties.
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.25rem", color: "var(--text-main)", marginBottom: "10px" }}>
              3. Information Collected via sodavand.net
            </h2>
            <p>
              When browsing <strong>sodavand.net</strong>, we collect standard server access logs solely for security, DDoS protection, and operational monitoring. If you contact us via email, we process your contact details solely to respond to your business inquiry.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.25rem", color: "var(--text-main)", marginBottom: "10px" }}>
              4. Security Measures
            </h2>
            <p style={{ marginBottom: "12px" }}>
              We enforce industry-standard security safeguards to ensure data integrity:
            </p>
            <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px", color: "var(--text-muted)" }}>
              <li><strong>Encryption in Transit:</strong> Strict HTTPS and TLS 1.3 encryption across all public and internal endpoints.</li>
              <li><strong>Encryption at Rest:</strong> AES-256 encryption applied to all persistent storage and secure credential management.</li>
              <li><strong>Access Controls:</strong> Role-based access control (RBAC) ensuring only authorized internal systems have access to operational APIs.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: "1.25rem", color: "var(--text-main)", marginBottom: "10px" }}>
              5. Corporate Contact & Inquiries
            </h2>
            <p style={{ marginBottom: "14px" }}>
              For questions regarding our privacy practices or data governance, please contact our compliance desk:
            </p>
            <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "16px 20px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border)" }}>
              <div><strong>Entity:</strong> Sodavand Trading LLC</div>
              <div><strong>Registration:</strong> Sharjah Media City (Shams), Sharjah, United Arab Emirates</div>
              <div><strong>Email:</strong> <a href="mailto:contact@sodavand.net" style={{ color: "var(--accent)" }}>contact@sodavand.net</a></div>
              <div><strong>Website:</strong> <a href="https://sodavand.net" style={{ color: "var(--accent)" }}>https://sodavand.net</a></div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "26px 0", textAlign: "center", fontSize: "0.85rem", color: "var(--text-muted)" }}>
        <div className="container">
          © {new Date().getFullYear()} Sodavand Trading LLC. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
