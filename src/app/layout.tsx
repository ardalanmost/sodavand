import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sodavand.net"),
  title: "Sodavand Trading LLC | Commerce, Technology & AI Automation",
  description:
    "Sodavand Trading LLC is a licensed commercial entity in Sharjah Media City (Shams), UAE, operating consumer brands including MAVoLo and building modern software, business automations, and intelligent AI agents.",
  keywords: [
    "Sodavand Trading LLC",
    "Sodavand",
    "MAVoLo",
    "Sharjah Media City Shams",
    "E-commerce UAE",
    "Software development UAE",
    "AI agents UAE",
  ],
  openGraph: {
    title: "Sodavand Trading LLC | Commerce, Technology & AI Automation",
    description:
      "Consumer e-commerce brands and modern software, automations, and AI agents in Sharjah Media City (Shams), UAE.",
    url: "https://sodavand.net",
    siteName: "Sodavand Trading LLC",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon-192.png",
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
