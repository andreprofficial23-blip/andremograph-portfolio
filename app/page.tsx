"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Instagram, Mail, X, Play, Globe, ChevronDown } from "lucide-react";

// --- DADOS E TIPAGEM ---
type Language = "en" | "pt";

const PROJECTS = [
  { id: "synthetic-intelligence", title: "Synthetic Intelligence", category: "2D Motion", year: "2026", youtubeId: "JeLV_HljZas" },
  { id: "currency-dynamics", title: "Currency Dynamics", category: "Visual Strategy", year: "2026", youtubeId: "O4nTVAfoxKI" },
  { id: "executive-narrative", title: "Executive Narrative", category: "Motion Graphics", year: "2025", youtubeId: "O4nTVAfoxKI" },
  { id: "live-capture-01", title: "Live Capture 01", category: "Event Motion", year: "2025", youtubeId: "R9NMq-6s_Lc" },
  { id: "audio-interface", title: "Audio Interface", category: "UI Animation", year: "2025", youtubeId: "oK1p72YO2pw" },
  { id: "os-environment", title: "OS Environment", category: "UI/UX Motion", year: "2026", youtubeId: "ISM8v6E5Yso" },
  { id: "esports-dynamics-01", title: "Esports Dynamics 01", category: "Gaming/VFX", year: "2026", youtubeId: "LK1cKH1xJvY" },
  { id: "esports-world-p2", title: "World Finals Comp", category: "Esports", year: "2026", youtubeId: "LO9EnykVlBg" },
];

const CONTENT = {
  en: {
    hero_role: "Motion Designer &",
    hero_specialty: "Visual Strategist",
    hero_desc: "Crafting high-fidelity visual experiences for the international market. Focused on technical precision and creative impact.",
    work_title: "Selected Works",
    about_title: "The Philosophy",
    about_text: "Based on Deep Work and high-performance execution, my workflow is designed to translate complex ideas into clean, sophisticated motion. I bridge the gap between technical direction and aesthetic excellence.",
    contact_title: "Let's build something extraordinary.",
    lang_btn: "PT",
  },
  pt: {
    hero_role: "Motion Designer &",
    hero_specialty: "Estrategista Visual",
    hero_desc: "Criando experiências visuais de alta fidelidade para o mercado internacional. Focado em precisão técnica e impacto criativo.",
    work_title: "Trabalhos Selecionados",
    about_title: "A Filosofia",
    about_text: "Baseado em Deep Work e execução de alta performance, meu workflow é desenhado para traduzir ideias complexas em motion limpo e sofisticado. Eu uno direção técnica com excelência estética.",
    contact_title: "Vamos construir algo extraordinário.",
    lang_btn: "EN",
  }
};

// --- COMPONENTES DE INTERAÇÃO ---
function ProjectCard({ p, onClick }: { p: any; onClick: any }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      onClick={() => onClick(p)}
      className="group cursor-pointer w-full"
    >
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0A0A0B] border border-white/5 shadow-2xl">
        <img 
          src={`/thumbnails/${p.id}.jpg`} 
          alt={p.title} 
          className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                <Play size={20} fill="white" className="ml-1" />
            </div>
        </div>
      </div>
      <div className="mt-6 flex justify-between items-start px-2">
        <div>
          <span className="text-[8px] tracking-[0.4em] uppercase text-[#C5A059] font-bold mb-2 block">{p.category}</span>
          <h3 className="text-2xl font-light tracking-tight text-white/90">{p.title}</h3>
        </div>
        <span className="text-[10px] text-white/20 font-bold mt-2">{p.year}</span>
      </div>
    </motion.div>
  );
}

// --- PÁGINA PRINCIPAL ---
export default function PortfolioPage() {
  const [lang, setLang] = useState<Language>("en");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const t = CONTENT[lang];

  return (
    <div className="bg-[#050506] text-white selection:bg-[#C5A059]/30 font-sans antialiased">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full px-8 py-8 flex justify-between items-center z-[100] mix-blend-difference">
        <span className="text-[11px] tracking-[0.5em] uppercase font-black">andremograph</span>
        <button 
          onClick={() => setLang(lang === "en" ? "pt" : "en")}
          className="text-[10px] font-bold tracking-widest border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all"
        >
          {t.lang_btn}
        </button>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="h-screen flex flex-col justify-center px-8 md:px-24 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <span className="text-[#C5A059] text-[10px] tracking-[0.5em] uppercase font-bold mb-8 block">Maceió, AL (GMT-3)</span>
          <h1 className="text-[14vw] md:text-[10vw] font-medium leading-[0.8] tracking-tighter mb-10">
            {t.hero_role} <br />
            <span className="text-white/20 italic font-serif font-light">{t.hero_specialty}</span>
          </h1>
          <p className="max-w-md text-white/40 text-sm md:text-lg font-light leading-relaxed">
            {t.hero_desc}
          </p>
        </motion.div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
            <ChevronDown size={24} />
        </div>
      </section>

      {/* 2. WORK SECTION */}
      <section className="px-8 md:px-24 py-32 border-t border-white/5">
        <div className="flex justify-between items-end mb-24">
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase">{t.work_title}</h2>
            <div className="hidden md:block h-[1px] flex-1 bg-white/5 mx-12 mb-4" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/30 font-bold">Scroll to explore</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} p={project} onClick={setSelectedProject} />
          ))}
        </div>
      </section>

      {/* 3. ABOUT SECTION (A FILOSOFIA) */}
      <section className="bg-white text-black py-40 px-8 md:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div>
                <span className="text-black/30 text-[10px] tracking-[0.5em] uppercase font-bold block mb-8">{t.about_title}</span>
                <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9] mb-10 italic font-serif">
                   Precision in <br /> Every Frame.
                </h2>
            </div>
            <p className="text-xl md:text-3xl font-light leading-snug tracking-tight text-black/70">
                {t.about_text}
            </p>
        </div>
      </section>

      {/* 4. CONTACT SECTION */}
      <footer className="py-40 px-8 md:px-24 text-center">
        <h2 className="text-5xl md:text-8xl font-light tracking-tighter mb-20 max-w-4xl mx-auto">
            {t.contact_title}
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <a href="mailto:hello@andremograph.com" className="group flex items-center gap-4 text-2xl md:text-4xl font-light hover:text-[#C5A059] transition-colors">
                <Mail className="text-[#C5A059]" /> hello@andremograph.com
            </a>
            <div className="h-[1px] w-20 bg-white/10 hidden md:block" />
            <a href="https://instagram.com/andremograph" target="_blank" className="group flex items-center gap-4 text-2xl md:text-4xl font-light hover:text-[#C5A059] transition-colors">
                <Instagram className="text-[#C5A059]" /> @andremograph
            </a>
        </div>
        
        <div className="mt-40 pt-10 border-t border-white/5 flex justify-between items-center text-[10px] tracking-[0.3em] uppercase text-white/20 font-bold">
            <span>© 2026 FRAME RIOT STUDIO</span>
            <span>Based in Maceió, AL</span>
        </div>
      </footer>

      {/* MODAL SYSTEM */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12"
          >
            <div className="absolute inset-0 bg-black/98 backdrop-blur-3xl" onClick={() => setSelectedProject(null)} />
            <button 
              onClick={() => setSelectedProject(null)} 
              className="absolute top-8 right-8 text-white/40 hover:text-white z-[210] transition-colors"
            >
              <X size={32} />
            </button>
            <div className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black z-10 shadow-[0_0_100px_rgba(197,160,89,0.1)]">
              <iframe
                src={`https://www.youtube.com/embed/${selectedProject.youtubeId}?autoplay=1&rel=0&modestbranding=1&controls=1&color=white`}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}