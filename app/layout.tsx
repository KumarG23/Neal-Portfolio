import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neal Sharma | AI-Enabled Analytics & Business Automation",
  description:
    "Neal Sharma works across operational analytics, SQL, enterprise integrations, business systems, and practical AI-driven automation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
