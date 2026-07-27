import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gencouv | Broker-Connected Copy Trading",
  description: "Copy trading, expert advisors, indicators and systematic trading tools with broker-controlled client funds.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
