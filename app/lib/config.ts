import { Film, Briefcase, Package, GraduationCap, User } from "lucide-react";

export type CategoryKey = "ui" | "vfx" | "3d" | "2d" | "brawl";
export type Language = "en" | "pt";

export interface Project {
  id: string; 
  title: string; 
  category: CategoryKey; 
  year: string;
  youtubeId: string;
}

export const DICT = {
  en: {
    header_title: "andremograph",
    hero_title: "Motion Designer &",
    hero_subtitle: "Visual Strategist",
    hero_desc: "Translating technical precision into high-fidelity visual experiences for global brands.",
    section_work: "Selected Works",
    section_about: "About Profile",
    section_contact: "Direct Contact",
    btn_view: "Explore",
    lang_name: "EN"
  },
  pt: {
    header_title: "andremograph",
    hero_title: "Motion Designer &",
    hero_subtitle: "Estrategista Visual",
    hero_desc: "Traduzindo precisão técnica em experiências visuais de alta fidelidade para marcas globais.",
    section_work: "Trabalhos Selecionados",
    section_about: "Perfil",
    section_contact: "Contato Direto",
    btn_view: "Explorar",
    lang_name: "PT"
  }
} as const;

export const PROJECTS: Project[] = [
  // HIGHLIGHTS
  { id: "synthetic-intelligence", title: "Synthetic Intelligence", category: "2d", year: "2026", youtubeId: "JeLV_HljZas" },
  { id: "currency-dynamics", title: "Currency Dynamics", category: "2d", year: "2026", youtubeId: "COLOQUE_O_ID_AQUI" },
  { id: "executive-narrative", title: "Executive Narrative", category: "2d", year: "2025", youtubeId: "O4nTVAfoxKI" },
  { id: "live-capture-01", title: "Live Capture 01", category: "2d", year: "2025", youtubeId: "R9NMq-6s_Lc" },

  // MOTION & UI
  { id: "audio-interface", title: "Audio Interface", category: "ui", year: "2025", youtubeId: "oK1p72YO2pw" },
  { id: "os-environment", title: "OS Environment", category: "ui", year: "2026", youtubeId: "ISM8v6E5Yso" },
  { id: "brand-kinetic", title: "Brand Kinetic", category: "2d", year: "2025", youtubeId: "qRmB9WaKbpk" },
  { id: "abstract-geometry", title: "Abstract Geometry", category: "2d", year: "2025", youtubeId: "M0OcyKCJhYs" },
  { id: "visual-storytelling", title: "Visual Storytelling", category: "2d", year: "2025", youtubeId: "q7jkRt0XXPY" },
  { id: "conceptual-ad", title: "Conceptual Ad", category: "2d", year: "2026", youtubeId: "COLOQUE_O_ID_AQUI" },
  { id: "complex-composition", title: "Complex Composition", category: "2d", year: "2026", youtubeId: "COLOQUE_O_ID_AQUI" },

  // ESPORTS DYNAMICS
  { id: "esports-dynamics-01", title: "Esports Dynamics 01", category: "brawl", year: "2026", youtubeId: "LK1cKH1xJvY" },
  { id: "esports-dynamics-02", title: "Esports Dynamics 02", category: "brawl", year: "2026", youtubeId: "u98UHtQWVNA" },
  { id: "esports-dynamics-03", title: "Esports Dynamics 03", category: "brawl", year: "2025", youtubeId: "xpYasagUJAs" },
  { id: "world-finals-comp", title: "World Finals Comp", category: "brawl", year: "2026", youtubeId: "LO9EnykVlBg" },
  { id: "tactical-intro", title: "Tactical Introduction", category: "brawl", year: "2025", youtubeId: "lzO4j1rb2So" },
  { id: "digital-workflow", title: "Digital Workflow", category: "brawl", year: "2025", youtubeId: "3KPQzNRwH9Q" },
  { id: "ranked-overview", title: "Ranked Overview", category: "brawl", year: "2025", youtubeId: "AKuQB0DLdoY" },
];