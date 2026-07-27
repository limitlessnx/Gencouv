import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gencouv | Automated Trading Technology",
  description: "Copy trading, expert advisors, indicators and institutional-grade trading tools.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
