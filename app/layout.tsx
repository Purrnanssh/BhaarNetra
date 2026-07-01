import type { Metadata } from "next";

import { TelemetryBackground } from "@/components/TelemetryBackground";
import "./globals.css";

const body = { variable: "font-body" };
const mono = { variable: "font-mono" };

export const metadata: Metadata = {
  metadataBase: new URL("https://bhaarnetra.in"),
  title: {
    default: "BhaarNetra — National Highway Asset Protection",
    template: "%s · BhaarNetra",
  },
  description:
    "BhaarNetra is a tiered, corridor-based overload detection and enforcement architecture for protecting India’s national highways.",
  keywords: [
    "BhaarNetra",
    "NHAI",
    "weigh in motion",
    "highway asset protection",
    "digital public infrastructure",
  ],
  openGraph: {
    title: "BhaarNetra",
    description:
      "Screen every truck. Prove every overload. Enforce automatically.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${mono.variable}`}>
        <TelemetryBackground />
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
