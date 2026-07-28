import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gencouv | Broker-Connected Copy Trading",
  description: "Copy systematic trading strategies while your capital remains in your own broker account.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
