import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NR Medicare",
  description: "Pharmaceutical Excellence - Quality Healthcare Solutions. NR Medicare is committed to delivering high-quality, affordable medicines.",
  icons: {
    icon: '/logo-circle.png',
    shortcut: '/logo-circle.png',
    apple: '/logo-circle.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased custom-scrollbar`}
      >
        {children}
      </body>
    </html>
  );
}
