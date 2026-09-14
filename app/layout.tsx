import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neal Sharma | Fintech software",
  description:
    "Neal Sharma — software for money and messy production systems. Lexington, KY. Open to the right fintech role.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
