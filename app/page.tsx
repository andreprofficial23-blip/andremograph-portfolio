"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ArrowUpRight, Instagram, Mail, X, Play } from "lucide-react";

// --- CONFIGURAÇÃO ---
type CategoryKey = "ui" | "vfx" | "3d" | "2d" | "brawl";
type Language = "en" | "pt";

interface Project {
  id: string; 
  title: string; 
  category: CategoryKey; 
  year: string;
  youtubeId: string;
}

const DICT = {
  en: {
    header_title: "andremograph",
    hero_title: "Motion Designer",
    hero_subtitle: "Visual Strategist",
    hero_desc: "Translating technical precision into high-fidelity visual experiences.",
    section_work: "Selected Works",
    btn_view: "Explore",
    lang_name: "EN"
  },
  pt: {
    header_title: "andremograph",
    hero_title: "Motion Designer",
    hero_subtitle: "Estrategista Visual",
    hero_desc: "Traduzindo precisão técnica em experiências visuais de alta fidelidade.",
    section_work: "Trabalhos Selecionados",
    btn_view: "Explorar",
    lang_name: "PT"
  }
};

const PROJECTS: Project[] = [
  { id: "synthetic-intelligence", title: "Synthetic Intelligence", category: "2d", year: "2026", youtubeId: "JeLV_HljZas" },
  { id: "currency-dynamics", title: "Currency Dynamics", category: "2d", year: "2026", youtubeId: "O4nTVAfoxKI" },
  { id: "executive-narrative", title: "Executive Narrative", category: "2d", year: "2025", youtubeId: "O4nTVAfoxKI" },
  { id: "live-capture-01", title: "Live Capture 01", category: "2d", year: "2025", youtubeId: "R9NMq-6s_Lc" },
  { id: "audio-interface", title: "Audio Interface", category: "ui", year: "2025", youtubeId: "oK1p72YO2pw" },
  { id: "os-environment", title: "OS Environment", category: "ui", year: "2026", youtubeId: "ISM8v6E5Yso" },
  { id: "brand-kinetic", title: "Brand Kinetic", category: "2d", year: "2025", youtubeId: "qRmB9WaKbpk" },
  { id: "abstract-geometry", title: "Abstract Geometry", category: "2d", year: "2025", youtubeId: "M0OcyKCJhYs" },
  { id: "visual-storytelling", title: "Visual Storytelling", category: "2d", year: "2025", youtubeId: "q7jkRt0XXPY" },
  { id: "esports-dynamics-01", title: "Esports Dynamics 01", category: "brawl", year: "2026", youtubeId: "LK1cKH1xJvY" },
  { id: "esports-dynamics-02", title: "Esports Dynamics 02", category: "brawl", year: "2026", youtubeId: "u98UHtQWVNA" },
  { id: "esports-dynamics-03", title: "Esports Dynamics 03", category: "brawl", year: "2025", youtubeId: "xpYasagUJAs" },
  { id: "world-finals-comp", title: "World Finals Comp", category: "brawl", year: "2026", youtubeId: "LO9EnykVlBg" },
  { id: "tactical-intro", title: "Tactical Introduction", category: "brawl", year: "2025", youtubeId: "lzO4j1rb2So" },
  { id: "digital-workflow", title: "Digital Workflow", category: "brawl", year: "2025", youtubeId: "3KPQzNRwH9Q" },
  { id: "ranked-overview", title: "Ranked Overview", category: "brawl", year: "2025", youtubeId: "AKuQB0DLdoY" },
];

// --- COMPONENTES ---
function ProjectCard({ p, onClick, lang }: { p: Project; onClick: (p: Project) => void; lang: Language }) {
  const t = DICT[lang];
  return (
    <div className="group cursor-pointer w-full mb-12" onClick={() => onClick(p)}>
      <div className="relative aspect-video rounded-xl overflow-hidden bg-[#0A0A0B] border border-white/5 transition-all duration-500 group-hover:border-[#C5A059]/30">
        <img 
          src={`/thumbnails/${p.id}.jpg`} 
          alt={p.title} 
          className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#C5A059] group-hover:border-[#C5A059] transition-all duration-300">
                <Play size={16} className="text-white group-hover:text-black transition-colors ml-1" />
            </div>
        </div>
        <div className="absolute bottom-4 left-4">
             <span className="text-[8px] tracking-[0.3em] uppercase text-[#C5A059] font-bold">{p.category}</span>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <h3 className="text-lg font-light tracking-tight text-white/90 group-hover:text-white transition-colors">{p.title}</h3>
        <span className="text-[10px] text-white/20 font-medium tracking-widest uppercase">{p.year}</span>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose} />
      <button onClick={onClose} className="absolute top-8 right-8 text-white/30 hover:text-white z-[210] transition-colors">
        <X size={28} />
      </button>
      <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden bg-black z-10 shadow-2xl border border-white/5">
        <iframe
          src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>
  );
}

// --- PÁGINA PRINCIPAL ---
export default function PortfolioPage() {
  const [lang, setLang] = useState<Language>("en");
  const t = DICT[lang];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#050506] text-white selection:bg-[#C5A059]/30 font-sans antialiased overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 w-full px-6 md:px-12 py-8 flex justify-between items-center z-[100]">
        <span className="text-[10px] tracking-[0.5em] uppercase font-black text-white">{t.header_title}</span>
        <div className="flex items-center gap-6">
           <button onClick={() => setLang(lang === "en" ? "pt" : "en")} className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors">
             {t.lang_name}
           </button>
           <div className="h-4 w-[1px] bg-white/10" />
           <a href="mailto:hello@andremograph.com" className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/40 hover:text-[#C5A059] transition-colors">
             Contact
           </a>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto">
        {/* HERO */}
        <section className="h-[85vh] flex flex-col justify-center px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-[#C5A059] text-[9px] tracking-[0.5em] uppercase font-bold mb-8">Based in Brazil</p>
            <h1 className="text-5xl md:text-8xl font-medium tracking-tighter leading-[0.9] mb-6">
              {t.hero_title} <br />
              <span className="text-white/20 italic font-serif font-light">{t.hero_subtitle}</span>
            </h1>
            <p className="max-w-sm text-white/40 text-xs md:text-sm font-light leading-relaxed tracking-wide">
              {t.hero_desc}
            </p>
          </motion.div>
        </section>

        {/* PROJECTS GRID - REFINADO */}
        <section className="px-6 md:px-12 pb-32">
          <div className="mb-20 flex items-center gap-4">
            <span className="text-[9px] tracking-[0.4em] uppercase font-bold text-white/20">{t.section_work}</span>
            <div className="h-[1px] flex-1 bg-white/5" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (idx % 3) * 0.1 }}
              >
                <ProjectCard p={project} onClick={setSelectedProject} lang={lang} />
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}