"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ArrowDown, Instagram, Mail, ArrowUpRight, X } from "lucide-react";

// --- DADOS TÉCNICOS (DENTRO DO ARQUIVO PARA NÃO DAR ERRO DE CAMINHO) ---
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
    hero_title: "Motion Designer &",
    hero_subtitle: "Visual Strategist",
    hero_desc: "Translating technical precision into high-fidelity visual experiences for global brands.",
    section_work: "Selected Works",
    section_about: "Profile",
    section_contact: "Contact",
    btn_view: "Explore Experience",
    lang_name: "EN"
  },
  pt: {
    header_title: "andremograph",
    hero_title: "Motion Designer &",
    hero_subtitle: "Estrategista Visual",
    hero_desc: "Traduzindo precisão técnica em experiências visuais de alta fidelidade para marcas globais.",
    section_work: "Trabalhos Selecionados",
    section_about: "Perfil",
    section_contact: "Contato",
    btn_view: "Explorar Experiência",
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
    <div className="group cursor-pointer" onClick={() => onClick(p)}>
      <div className="relative aspect-video rounded-3xl overflow-hidden bg-white/5 border border-white/10 mb-8 transition-all duration-700 group-hover:border-[#C5A059]/30">
        <img 
          src={`/thumbnails/${p.id}.jpg`} 
          alt={p.title} 
          className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <div className="bg-[#C5A059] text-black px-8 py-4 rounded-full flex items-center gap-3 font-bold text-[10px] tracking-widest uppercase shadow-2xl">
            {t.btn_view} <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end px-4">
        <div>
          <span className="text-[9px] tracking-[0.4em] uppercase text-[#C5A059] font-bold block mb-2 opacity-50">{p.category}</span>
          <h3 className="text-3xl font-light tracking-tighter text-white/90">{p.title}</h3>
        </div>
        <span className="text-[10px] text-white/20 font-bold tracking-widest mb-1">{p.year}</span>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
      <div className="absolute inset-0 bg-[#050506]/98 backdrop-blur-2xl" onClick={onClose} />
      <button onClick={onClose} className="absolute top-10 right-10 text-white/30 hover:text-white z-[210]">
        <X size={32} />
      </button>
      <div className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden border border-white/5 bg-black z-10 shadow-2xl">
        <iframe
          src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1&color=white`}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          title={project.title}
        ></iframe>
      </div>
    </motion.div>
  );
}

export default function PortfolioPage() {
  const [lang, setLang] = useState<Language>("en");
  const t = DICT[lang];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#050506] text-white selection:bg-[#C5A059]/30 font-sans">
      <nav className="fixed top-0 w-full px-8 py-6 flex justify-between items-center z-[100] backdrop-blur-md">
        <span className="text-[11px] tracking-[0.5em] uppercase font-bold">{t.header_title}</span>
        <div className="flex items-center gap-8">
           <button onClick={() => setLang(lang === "en" ? "pt" : "en")} className="text-[10px] font-bold tracking-widest uppercase hover:text-[#C5A059] transition-colors">
             {t.lang_name}
           </button>
           <a href="mailto:hello@andremograph.com" className="bg-white text-black px-5 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-[#C5A059] transition-all">
             {t.section_contact}
           </a>
        </div>
      </nav>

      <main>
        <section className="h-screen flex flex-col justify-center px-8 md:px-24">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-bold mb-6">Maceió, AL (GMT-3)</p>
            <h1 className="text-5xl md:text-[130px] font-light leading-[0.85] tracking-tighter mb-8">
              {t.hero_title} <br />
              <span className="text-white/30 italic font-serif">{t.hero_subtitle}</span>
            </h1>
            <p className="max-w-md text-white/40 text-sm md:text-lg font-light leading-relaxed">
              {t.hero_desc}
            </p>
          </motion.div>
        </section>

        <section className="px-8 md:px-24 pb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx % 2 * 0.15 }}
              >
                <ProjectCard p={project} onClick={setSelectedProject} lang={lang} />
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="px-8 md:px-24 py-40 border-t border-white/5">
           <div className="grid md:grid-cols-2 gap-24">
              <div>
                <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-bold block mb-8">{t.section_about}</span>
                <p className="text-2xl md:text-4xl font-light leading-snug text-white/80 tracking-tight">
                  Creative Director & Motion Designer building clean, high-fidelity visual experiences for the global market.
                </p>
              </div>
              <div className="flex flex-col justify-end">
                <h3 className="text-6xl md:text-8xl font-light tracking-tighter mb-12">Let's build.</h3>
                <div className="flex flex-wrap gap-8">
                  <a href="#" className="group flex items-center gap-2 text-[11px] tracking-widest uppercase font-bold">
                    <Instagram size={14} className="group-hover:text-[#C5A059] transition-colors" /> Instagram
                  </a>
                  <a href="#" className="group flex items-center gap-2 text-[11px] tracking-widest uppercase font-bold text-[#C5A059]">
                    <Mail size={14} /> hello@andremograph.com
                  </a>
                </div>
              </div>
           </div>
        </footer>
      </main>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}