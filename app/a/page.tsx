import type { Metadata } from "next";
import PortfolioPage from "../page";

// A short branded share link with its own preview URL.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Andremograph — Motion Designer e Editor",
    description: "Vídeos com ritmo. Marcas com presença. Conheça o portfólio de André.",
    url: "https://andremograph.com/a",
    siteName: "ANDREMOGRAPH",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/brand/share-logo-02.jpg", width: 1200, height: 630, alt: "Marca Andremograph — A e M em dourado" }],
  },
};

export default PortfolioPage;
