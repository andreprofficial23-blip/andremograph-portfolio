"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Play, X } from "lucide-react";

// --- DADOS DOS PROJETOS ---
type Language = "en" | "pt";

// Dividimos em Destaques (Zigue-Zague) e Secundários (Grid)
const FEATURED_PROJECTS = [
  { id: "synthetic-intelligence", title: "Synthetic Intelligence", category: "2D Motion", desc: "A conceptual piece exploring the boundaries of synthetic creation and motion design.", year: "2026", youtubeId: "JeLV_HljZas" },
  { id: "currency-dynamics", title: "Currency Dynamics", category: "Visual Strategy", desc: "Dynamic financial storytelling through high-end corporate motion graphics.", year: "2026", youtubeId: "O4nTVAfoxKI" },
  { id: "executive-narrative", title: "Executive Narrative", category: "Motion Graphics", desc: "Elevating the standard of executive presentations with smooth, impactful visuals.", year: "2025", youtubeId: "O4nTVAfoxKI" },
];

const OTHER_PROJECTS = [
  { id: "live-capture-01", title: "Live Capture 01", category: "VFX / Events", year: "2025", youtubeId: "R9NMq-6s_Lc" },
  { id: "audio-interface", title: "Audio Interface", category: "UI Animation", year: "2025", youtubeId: "oK1p72YO2pw" },
  { id: "os-environment", title: "OS Environment", category: "UI/UX Motion", year: "2026", youtubeId: "ISM8v6E5Yso" },
  { id: "esports-dynamics-01", title: "Esports Dynamics 01", category: "Gaming/VFX", year: "2026", youtubeId: "LK1cKH1xJvY" },
  { id: "world-finals-comp", title: "World Finals Comp", category: "Esports", year: "2026", youtubeId: "LO9EnykVlBg" },
];

export default function PortfolioPage() {
  const [lang, setLang] = useState<Language>("en");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const isEn = lang === "en";

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; background-color: #05030A; color: #ffffff; overflow-x: hidden; }
      `}</style>

      <div className="min-h-screen relative selection:bg-[#C5A059]/30 antialiased font-light flex flex-col items-center">
        
        {/* BACKGROUND GLOWS */}
        <div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#C5A059]/10 rounded-full blur-[150px] pointer-events-none -z-10" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none -z-10" />

        {/* NAVEGAÇÃO CENTRALIZADA */}
        <nav className="fixed top-0 w-full max-w-[1200px] px-6 py-8 flex justify-center items-center z-[100] bg-[#05030A]/50 backdrop-blur-md">
          <div className="flex gap-12 text-[11px] uppercase tracking-widest font-medium text-white/60">
            <button onClick={() => setLang(isEn ? "pt" : "en")} className="hover:text-white transition-colors">{isEn ? "PT" : "EN"}</button>
            <span className="text-white font-bold tracking-[0.3em]">ANDREMOGRAPH</span>
            <a href="mailto:hello@andremograph.com" className="hover:text-white transition-colors">Contact</a>
          </div>
        </nav>

        <main className="w-full max-w-[1000px] mx-auto px-6 mt-32 flex flex-col items-center">
          
          {/* HERO CENTRALIZADO */}
          <section className="flex flex-col items-center text-center mt-20 mb-40">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C5A059] to-purple-900 mx-auto mb-8 shadow-[0_0_40px_rgba(197,160,89,0.3)] flex items-center justify-center">
                 <span className="font-bold text-lg">A.</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.2] mb-6">
                I'm a <span className="text-[#C5A059]">Motion Designer.</span><br />
                <span className="text-white/70">Video Editor & Strategist.</span>
              </h1>
              
              <p className="max-w-xl text-white/50 text-sm md:text-base leading-relaxed mx-auto">
                {isEn 
                  ? "A self-taught editor functioning in the industry, creating meaningful and delightful visual products that bridge the gap between user attention and business goals."
                  : "Um editor atuando na indústria, criando produtos visuais com significado que conectam a atenção do usuário aos objetivos de negócio."}
              </p>
            </motion.div>
          </section>

          {/* OUTROS PROJETOS (GRID DUPLO) */}
          <section className="w-full mb-40">
            <h2 className="text-center text-xl font-medium mb-12 text-white/90">
              {isEn ? "Work Experience" : "Experiência de Trabalho"}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {OTHER_PROJECTS.map((p, idx) => (
                <motion.div 
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group cursor-pointer bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex gap-4 items-center hover:bg-white/[0.06] hover:border-[#C5A059]/40 transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                  onClick={() => setSelectedProject(p)}
                >
                  <div className="w-24 h-16 rounded-lg overflow-hidden relative flex-shrink-0">
                    <img 
                      src={`https://img.youtube.com/vi/${p.youtubeId}/hqdefault.jpg`} 
                      alt={p.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors flex items-center justify-center">
                        <Play size={12} fill="white" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white/90 group-hover:text-[#C5A059] transition-colors">{p.title}</h3>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest">{p.category}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* DESTAQUES (LAYOUT ALTERNADO / ZIGUE-ZAGUE) */}
          <section className="w-full mb-40 flex flex-col gap-32">
            {FEATURED_PROJECTS.map((p, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={p.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
                >
                  <div className="w-full md:w-1/3 flex flex-col gap-4 text-center md:text-left">
                    <span className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.2em]">{isEn ? "Featured Project" : "Projeto Destaque"}</span>
                    <h3 className="text-3xl font-medium">{p.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {p.desc}
                    </p>
                    <button 
                      onClick={() => setSelectedProject(p)}
                      className="mt-4 flex items-center justify-center md:justify-start gap-2 text-xs font-medium uppercase tracking-widest hover:text-[#C5A059] transition-colors"
                    >
                      <Play size={14} /> {isEn ? "Watch Video" : "Ver Vídeo"}
                    </button>
                  </div>

                  <div 
                    className="w-full md:w-2/3 aspect-video relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-[0_0_50px_rgba(197,160,89,0.05)]"
                    onClick={() => setSelectedProject(p)}
                  >
                    <img 
                      src={`https://img.youtube.com/vi/${p.youtubeId}/maxresdefault.jpg`}
                      onError={(e) => { e.currentTarget.src = `https://img.youtube.com/vi/${p.youtubeId}/hqdefault.jpg`; }}
                      alt={p.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                       <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
                           <Play size={24} fill="white" className="ml-1" />
                       </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </section>

          {/* CONTATO */}
          <footer className="w-full py-20 border-t border-white/10 mb-10">
            <h4 className="text-lg font-medium mb-4">{isEn ? "Contact" : "Contato"}</h4>
            <p className="text-sm text-white/50 max-w-md mb-8 leading-relaxed">
              {isEn 
                ? "I'm currently looking to join a cross-functional team that values improving people's lives through accessible design, or have a project in mind? Let's connect."
                : "Atualmente buscando colaborar com equipes e marcas que valorizam impacto através do design. Tem um projeto em mente? Vamos conversar."}
            </p>
            <a href="mailto:hello@andremograph.com" className="text-[#C5A059] text-sm hover:underline underline-offset-4">
              hello@andremograph.com
            </a>
            
            <div className="flex gap-6 mt-8">
              <a href="https://instagram.com/andremograph" target="_blank" className="text-white/40 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </footer>
        </main>

        {/* MODAL DE VÍDEO DO YOUTUBE */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
              <div className="absolute inset-0 bg-[#05030A]/90 backdrop-blur-xl" onClick={() => setSelectedProject(null)} />
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