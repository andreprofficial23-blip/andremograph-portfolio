import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://andremograph.com"),
  title: "Andremograph — Motion Designer e Editor",
  description: "Edição de vídeo e motion design com personalidade. Conheça os trabalhos de André para marcas, casamentos e conteúdo digital. Orçamento pelo WhatsApp.",
  alternates: { canonical: "/" },

  icons: {
    icon: [{ url: "/brand/mark-02-32.png", sizes: "32x32", type: "image/png" }, { url: "/brand/mark-02-192.png", sizes: "192x192", type: "image/png" }],
    shortcut: "/favicon.ico",
    apple: "/brand/mark-02-192.png",
  },

  openGraph: {
    title: "Andremograph — Motion Designer e Editor",
    description: "Vídeos que dão vontade de ver. Edição e motion design por André. Conheça os projetos e converse pelo WhatsApp.",
    url: "https://andremograph.com",
    siteName: "ANDREMOGRAPH",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/brand/share-logo-02.jpg", width: 1200, height: 630, alt: "Marca Andremograph — A e M em dourado" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Andremograph — Motion Designer e Editor",
    description: "Vídeos que dão vontade de ver. Edição e motion design por André. Conheça os projetos e converse pelo WhatsApp.",
    creator: "@andremograph",
    images: ["/brand/share-logo-02.jpg"],
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
