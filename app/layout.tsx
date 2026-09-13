import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neal Sharma | Software, Data & Finance",
  description:
    "Portfolio of Neal Sharma — software engineering, data analysis, fintech, and financial analysis.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
