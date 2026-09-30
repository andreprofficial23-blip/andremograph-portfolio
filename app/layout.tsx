import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://andremograph.com"),
  title: "Andremograph — Motion Designer e Editor",
  description: "Edição e motion design para histórias feitas para sentir. Conheça os trabalhos de André e converse sobre seu projeto.",
  alternates: { canonical: "/" },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },

  openGraph: {
    title: "Andremograph — Motion Designer e Editor",
    description: "Edição e motion design para histórias feitas para sentir. Conheça o portfólio de André.",
    url: "https://andremograph.com",
    siteName: "ANDREMOGRAPH",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/background/hero-poster.jpg", width: 1280, height: 720, alt: "Andremograph — Motion Designer e Editor" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Andremograph — Motion Designer e Editor",
    description: "Edição e motion design para histórias feitas para sentir. Conheça o portfólio de André.",
    creator: "@andremograph",
    images: ["/background/hero-poster.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
