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
  title: "ANDREMOGRAPH",
  description:
    "Motion design e direção visual com foco em atmosfera, ritmo e presença visual.",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "ANDREMOGRAPH",
    description:
      "Motion design e direção visual com foco em atmosfera, ritmo e presença visual.",
    url: "https://andremograph-portfolio.vercel.app",
    siteName: "ANDREMOGRAPH",
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ANDREMOGRAPH",
    description:
      "Motion design e direção visual com foco em atmosfera, ritmo e presença visual.",
    creator: "@andremograph",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}