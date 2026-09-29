import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & Data Protection Policy | Sodavand Trading LLC",
  description:
    "Official Privacy Policy and Data Protection standards for Sodavand Trading LLC, outlining compliance with Amazon Selling Partner API (SP-API) data governance and security frameworks.",
};

export default function PrivacyPage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundColor: "var(--bg-primary)" }}>
      {/* Visual Accents */}
      <div className="ambient-grid" />
      
      {/* Header */}
      <header
        style={{
          borderBottom: "1px solid var(--border-subtle)",
          padding: "20px 0",
          backgroundColor: "rgba(7, 9, 14, 0.8)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                color: "#FFFFFF",
              }}
            >
              S
            </div>
            <span style={{ fontWeight: 800, fontSize: "1rem", letterSpacing: "0.04em" }}>
              SODAVAND TRADING LLC
            </span>
          </Link>
          <Link href="/" className="btn btn-secondary" style={{ padding: "6px 14px", fontSize: "0.85rem" }}>
            &larr; Back to Corporate Portal
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container" style={{ maxWidth: "860px", padding: "60px 24px 100px" }}>
        <div style={{ marginBottom: "30px" }}>
          <span className="badge badge-emerald" style={{ marginBottom: "12px" }}>
            Data Protection Governance
          </span>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "8px" }}>Privacy & Security Policy</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            Entity: <strong>Sodavand Trading LLC</strong> • Jurisdiction: United Arab Emirates • Effective Date: September 2026
          </p>
        </div>

        <div
          className="glass-panel"
          style={{
            padding: "40px",
            lineHeight: 1.8,
            color: "var(--text-secondary)",
            fontSize: "0.95rem",
          }}
        >
          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.3rem", color: "#F8FAFC", marginBottom: "10px" }}>
              1. Corporate Overview & Purpose
            </h2>
            <p>
              This Privacy Policy governs the data protection and privacy practices of <strong>Sodavand Trading LLC</strong> (&quot;Sodavand&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a commercial entity registered and operating in the United Arab Emirates (UAE). This document outlines our strict policies regarding data collection, transmission, processing, and security across our digital platforms, corporate domain (<strong>sodavand.net</strong>), internal enterprise resource planning (ERP) software, and connected marketplace interfaces.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.3rem", color: "#F8FAFC", marginBottom: "10px" }}>
              2. Amazon Selling Partner API (SP-API) & Developer Compliance
            </h2>
            <p style={{ marginBottom: "12px" }}>
              Sodavand Trading LLC develops and maintains internal business automation software designed to interact with Amazon Selling Partner APIs (SP-API) and Amazon Advertising APIs. Our systems are engineered in strict compliance with Amazon&apos;s <strong>Data Protection Policy (DPP)</strong> and <strong>Acceptable Use Policy (AUP)</strong>:
            </p>
            <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <li>
                <strong>Zero-PII Storage Policy:</strong> We do not store, aggregate, or harvest Personally Identifiable Information (PII) of Amazon customers. Any order fulfillment details accessed via SP-API are processed ephemerally solely for operational order logistics and immediately discarded.
              </li>
              <li>
                <strong>Permitted Use Only:</strong> Data retrieved from Amazon APIs is utilized exclusively for internal inventory forecasting, pricing optimization, advertising campaign efficiency, and accounting reconciliation for Sodavand&apos;s registered brand operations.
              </li>
              <li>
                <strong>No Commercialization of Data:</strong> We never sell, rent, monetize, transfer, or disclose Amazon marketplace data or seller metrics to any external third party.
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.3rem", color: "#F8FAFC", marginBottom: "10px" }}>
              3. Information Collected via sodavand.net
            </h2>
            <p>
              When navigating our corporate website, we collect only minimal server telemetries (such as standard HTTP request logs, IP addresses, and user-agent strings) required for cyber defense, DDoS mitigation, and system diagnostics. If you initiate direct contact with us via our official email (<strong>contact@sodavand.net</strong>), we process your name, email address, and inquiry text strictly for business communications and partnership evaluations.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.3rem", color: "#F8FAFC", marginBottom: "10px" }}>
              4. Technical & Organizational Security Standards
            </h2>
            <p style={{ marginBottom: "12px" }}>
              We implement comprehensive defense-in-depth security measures to protect internal data and API credentials against unauthorized access, destruction, or disclosure:
            </p>
            <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <li>
                <strong>Transit Encryption:</strong> Mandatory modern TLS 1.3 protocol with SHA-256 or better cipher suites across all public endpoints and API webhooks.
              </li>
              <li>
                <strong>Encryption at Rest:</strong> All application persistent storage and environment configuration secret keys are encrypted with industry-standard AES-256 encryption.
              </li>
              <li>
                <strong>Access Control:</strong> Strict Principle of Least Privilege (PoLP). API keys, OAuth 2.0 LWA tokens, and cloud infrastructure are isolated inside private Virtual Private Clouds (VPC) with IP-restricted role-based access.
              </li>
              <li>
                <strong>Incident Management:</strong> Continuous network monitoring and immutable audit logging to detect and mitigate potential anomalies or unauthorized access attempts.
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.3rem", color: "#F8FAFC", marginBottom: "10px" }}>
              5. Data Retention & Erasure
            </h2>
            <p>
              Data is retained strictly for the minimum duration required to satisfy operational, tax, or legal compliance under UAE commercial laws. Marketplace data required for financial reporting is held strictly in aggregated, anonymized ledger format with all transactional PII removed.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", color: "#F8FAFC", marginBottom: "10px" }}>
              6. Governance & Contact Inquiries
            </h2>
            <p style={{ marginBottom: "12px" }}>
              If you have inquiries, audit requests, or questions regarding our data protection frameworks, please direct all correspondence to our compliance office:
            </p>
            <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "16px 20px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-subtle)" }}>
              <div><strong>Entity:</strong> Sodavand Trading LLC</div>
              <div><strong>Jurisdiction:</strong> Dubai, United Arab Emirates</div>
              <div><strong>Official Email:</strong> <a href="mailto:contact@sodavand.net" style={{ color: "var(--accent-cyan)" }}>contact@sodavand.net</a></div>
              <div><strong>Corporate Domain:</strong> <a href="https://sodavand.net" style={{ color: "var(--accent-cyan)" }}>https://sodavand.net</a></div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--border-subtle)", padding: "30px 0", textAlign: "center", fontSize: "0.85rem", color: "var(--text-muted)" }}>
        <div className="container">
          © {new Date().getFullYear()} Sodavand Trading LLC. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
