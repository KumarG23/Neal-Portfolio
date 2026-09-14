import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neal Sharma | Software, Data & Finance",
  description:
    "Neal Sharma builds practical software across data, financial systems, and production technology.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
