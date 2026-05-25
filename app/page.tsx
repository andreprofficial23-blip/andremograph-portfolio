"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Instagram, Mail, X } from "lucide-react";

// --- DADOS ---
type Language = "en" | "pt";

const PROJECTS = [
  { id: "synthetic-intelligence", title: "Synthetic Intelligence", category: "2D Motion", year: "2026", youtubeId: "JeLV_HljZas" },
  { id: "currency-dynamics", title: "Currency Dynamics", category: "Visual Strategy", year: "2026", youtubeId: "O4nTVAfoxKI" },
  { id: "executive-narrative", title: "Executive Narrative", category: "Motion Graphics", year: "2025", youtubeId: "O4nTVAfoxKI" },
  { id: "live-capture-01", title: "Live Capture 01", category: "VFX / Events", year: "2025", youtubeId: "R9NMq-6s_Lc" },
  { id: "audio-interface", title: "Audio Interface", category: "UI Animation", year: "2025", youtubeId: "oK1p72YO2pw" },
  { id: "os-environment", title: "OS Environment", category: "UI/UX Motion", year: "2026", youtubeId: "ISM8v6E5Yso" },
  { id: "esports-dynamics-01", title: "Esports Dynamics 01", category: "Gaming/VFX", year: "2026", youtubeId: "LK1cKH1xJvY" },
  { id: "world-finals-comp", title: "World Finals Comp", category: "Esports", year: "2026", youtubeId: "LO9EnykVlBg" },
];

const DICT = {
  en: {
    lang_name: "EN",
    header_title: "@andremograph",
    hero_title: "Motion Designer",
    hero_subtitle: "& Video Editor",
    hero_desc: "Translating technical precision into high-fidelity visual experiences for global brands.",
    section_work: "Selected Works",
    btn_view: "Explore Experience",
  },
  pt: {
    lang_name: "PT",
    header_title: "@andremograph",
    hero_title: "Motion Designer",
    hero_subtitle: "& Video Editor",
    hero_desc: "Traduzindo precisão técnica em experiências visuais de alta fidelidade para marcas globais.",
    section_work: "Trabalhos Selecionados",
    btn_view: "Explorar Projeto",
  }
};

// --- PÁGINA PRINCIPAL ---
export default function PortfolioPage() {
  const [lang, setLang] = useState<Language>("en");
  const t = DICT[lang];
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <>
      {/* IMPORTANDO FONTE PREMIUM (INTER) PARA GARANTIR A ESTÉTICA */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        body { font-family: 'Inter', sans-serif; background-color: #050506; color: #ffffff; }
      `}</style>

      <div className="min-h-screen selection:bg-[#C5A059]/30 antialiased font-light">
        
        {/* NAVEGAÇÃO LIMPA */}
        <nav className="fixed top-0 w-full px-6 md:px-16 py-8 flex justify-between items-center z-[100] bg-[#050506]/80 backdrop-blur-md border-b border-white/5">
          <span className="text-xs tracking-[0.2em] uppercase font-medium">{t.header_title}</span>
          <div className="flex items-center gap-6">
             <button onClick={() => setLang(lang === "en" ? "pt" : "en")} className="text-[11px] font-medium tracking-widest uppercase text-white/50 hover:text-[#C5A059] transition-colors">
               {t.lang_name}
             </button>
             <a href="mailto:hello@andremograph.com" className="text-[11px] font-medium tracking-widest uppercase bg-white text-black px-6 py-2.5 rounded-full hover:bg-[#C5A059] transition-all">
               Contact
             </a>
          </div>
        </nav>

        <main className="max-w-[1200px] mx-auto px-6 md:px-12">
          
          {/* HERO SECTION - TAMANHO ELEGANTE */}
          <section className="h-[80vh] flex flex-col justify-center pt-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-[#C5A059] text-[11px] tracking-[0.3em] uppercase font-medium mb-6">Maceió, AL (GMT-3)</p>
              <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.1] mb-6">
                {t.hero_title} <br />
                <span className="text-white/40">{t.hero_subtitle}</span>
              </h1>
              <p className="max-w-lg text-white/50 text-base md:text-lg leading-relaxed">
                {t.hero_desc}
              </p>
            </motion.div>
          </section>

          {/* GRID DE PROJETOS - PROPORÇÃO CORRETA E THUMBNAILS DO YOUTUBE */}
          <section className="pb-32">
            <div className="mb-16 flex items-center gap-4">
               <h2 className="text-sm tracking-[0.2em] uppercase font-medium text-white/40">{t.section_work}</h2>
               <div className="h-[1px] flex-1 bg-white/10"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {PROJECTS.map((p, idx) => (
                <motion.div 
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (idx % 2) * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(p)}
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10 mb-5 transition-all duration-500 group-hover:border-[#C5A059]/40">
                    <img 
                      src={`https://img.youtube.com/vi/${p.youtubeId}/maxresdefault.jpg`} 
                      onError={(e) => { e.currentTarget.src = `https://img.youtube.com/vi/${p.youtubeId}/hqdefault.jpg`; }}
                      alt={p.title} 
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                    
                    {/* Botão Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-[#C5A059] text-black px-6 py-3 rounded-full flex items-center gap-2 font-medium text-[11px] tracking-widest uppercase shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        {t.btn_view} <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Textos do Card */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium tracking-tight text-white/90 group-hover:text-[#C5A059] transition-colors">{p.title}</h3>
                      <span className="text-[11px] tracking-[0.2em] uppercase text-white/40 mt-1 block">{p.category}</span>
                    </div>
                    <span className="text-[11px] text-white/30 font-medium tracking-widest">{p.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* FOOTER CLEAN */}
          <footer className="py-24 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
               <h3 className="text-3xl font-light tracking-tight mb-2">Frame RIOT Studio</h3>
               <p className="text-sm text-white/40">Focused on scaling visual value.</p>
            </div>
            <div className="flex gap-8">
              <a href="https://instagram.com/andremograph" target="_blank" className="text-sm text-white/50 hover:text-[#C5A059] transition-colors flex items-center gap-2">
                <Instagram size={16} /> Instagram
              </a>
              <a href="mailto:hello@andremograph.com" className="text-sm text-white/50 hover:text-[#C5A059] transition-colors flex items-center gap-2">
                <Mail size={16} /> Contact
              </a>
            </div>
          </footer>
        </main>

        {/* MODAL DE VÍDEO DO YOUTUBE */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
              <div className="absolute inset-0 bg-[#050506]/95 backdrop-blur-xl" onClick={() => setSelectedProject(null)} />
              <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 text-white/50 hover:text-white z-[210] transition-colors">
                <X size={28} />
              </button>
              <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black z-10 shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedProject.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}