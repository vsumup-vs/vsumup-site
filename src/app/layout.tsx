import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/components/navigation";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "vsumup | Engineering Operational Maturity",
    template: "%s | vsumup",
  },
  description:
    "From multi-tenant initiative management to HIPAA-compliant health engines, vsumup architects secure, AI-powered digital infrastructure for the modern enterprise.",
  keywords: [
    "vsumup",
    "enterprise software",
    "multi-tenant SaaS",
    "HIPAA",
    "health tech",
    "AI workflows",
    "EHR",
    "RPM",
  ],
  authors: [{ name: "vsumup" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "vsumup",
    title: "vsumup | Engineering Operational Maturity",
    description:
      "From multi-tenant initiative management to HIPAA-compliant health engines, vsumup architects secure, AI-powered digital infrastructure.",
  },
  twitter: {
    card: "summary_large_image",
    title: "vsumup | Engineering Operational Maturity",
    description:
      "Multi-tenant SaaS, HIPAA health tech, and AI-powered software architecture.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased text-slate-900`}>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
