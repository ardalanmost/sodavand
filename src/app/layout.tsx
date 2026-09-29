import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sodavand.net"),
  title: "Sodavand Trading LLC | Enterprise E-Commerce & Cloud Software Solutions",
  description:
    "Sodavand Trading LLC is a licensed UAE commercial technology & trading firm specializing in automated e-commerce operations, proprietary ERP software, Amazon SP-API integrations, and algorithmic marketplace intelligence.",
  keywords: [
    "Sodavand Trading LLC",
    "Amazon SP-API developer UAE",
    "E-commerce ERP Dubai",
    "Algorithmic PPC Amazon.ae",
    "Marketplace data analytics UAE",
    "Cloud retail automation GCC",
  ],
  openGraph: {
    title: "Sodavand Trading LLC | Enterprise E-Commerce & Cloud Software Solutions",
    description:
      "Bridging enterprise software engineering with high-velocity marketplace commerce in the UAE and GCC.",
    url: "https://sodavand.net",
    siteName: "Sodavand Trading LLC",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
