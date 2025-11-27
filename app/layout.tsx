import type { Metadata } from "next";
import { Funnel_Sans, Gowun_Dodum } from "next/font/google";
import "./globals.css";

const funnelSans = Funnel_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-funnel-sans'
});

const gowunDodum = Gowun_Dodum({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-gowun-dodum'
});

export const metadata: Metadata = {
  title: "Portfolio - David Karlsson",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${funnelSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}