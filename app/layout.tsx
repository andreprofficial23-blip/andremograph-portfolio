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
  title: "Andre | Motion Designer",
  description: "Motion Designer especializado em UI Animation, VFX, 3D Motion e Color Grading. Open to international commissions.",
  openGraph: {
    title: "Andre | Motion Designer",
    description: "High-fidelity motion for brands that demand excellence.",
    url: "https://seusite.com", // troque pela URL do GitHub Pages depois
    siteName: "Andre Motion",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andre | Motion Designer",
    description: "High-fidelity motion for brands that demand excellence.",
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