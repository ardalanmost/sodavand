import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sodavand.net"),
  title: "Sodavand Trading LLC | E-Commerce Operations & Software Development",
  description:
    "Sodavand Trading LLC is a licensed commercial entity in Sharjah Media City (Shams), UAE, operating Sodavand Store digital retail and developing custom software solutions and Amazon SP-API integrations.",
  keywords: [
    "Sodavand Trading LLC",
    "Sodavand Store",
    "Sharjah Media City Shams",
    "Amazon SP-API developer UAE",
    "E-commerce UAE",
    "Software development Sharjah",
  ],
  openGraph: {
    title: "Sodavand Trading LLC | E-Commerce & Software Development",
    description:
      "Operating digital retail through Sodavand Store and building modern software solutions in Sharjah Media City (Shams), UAE.",
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
