import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Котики любят Асю ♥",
  description: "Очень серьёзное кошачье признание в любви для Аси.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
