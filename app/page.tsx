"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Instagram, Mail, X, Play, ChevronDown } from "lucide-react";

// --- DADOS DOS PROJETOS ---
const PROJECTS = [
  { id: "synthetic-intelligence", title: "Synthetic Intelligence", category: "AI & Motion", year: "2026", youtubeId: "JeLV_HljZas" },
  { id: "currency-dynamics", title: "Currency Dynamics", category: "Visual Strategy", year: "2026", youtubeId: "O4nTVAfoxKI" },
  { id: "executive-narrative", title: "Executive Narrative", category: "Corporate Motion", year: "2025", youtubeId: "O4nTVAfoxKI" },
  { id: "live-capture-01", title: "Live Capture 01", category: "VFX / Events", year: "2025", youtubeId: "R9NMq-6s_Lc" },
  { id: "audio-interface", title: "Audio Interface", category: "UI Animation", year: "2025", youtubeId: "oK1p72YO2pw" },
  { id: "os-environment", title: "OS Environment", category: "System Design", year: "2026", youtubeId: "ISM8v6E5Yso" },
  { id: "esports-dynamics-01", title: "Esports Dynamics", category: "Gaming / VFX", year: "2026", youtubeId: "LK1cKH1xJvY" },
  { id: "world-finals", title: "World Finals Comp", category: "Esports", year: "2026", youtubeId: "LO9EnykVlBg" },
];

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="bg-[#050505] text-white selection:bg-[#C5A059]/30 font-sans antialiased overflow-x-hidden">
      
      {/* 1. NAVEGAÇÃO MINIMALISTA */}
      <nav className="fixed top-0 w-full px-8 md:px-16 py-10 flex justify-between items-center z-[100] mix-blend-difference">
        <span className="text-[10px] tracking-[0.6em] uppercase font-black tracking-widest">andremograph</span>
        <a href="mailto:hello@andremograph.com" className="text-[9px] font-bold tracking-[0.2em] uppercase opacity-40 hover:opacity-100 transition-opacity">
          Get in touch
        </a>
      </nav>

      {/* 2. HERO SECTION (APRESENTAÇÃO NO TOPO) */}
      <section className="h-screen flex flex-col justify-center px-8 md:px-24 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[#C5A059] text-[9px] tracking-[0.5em] uppercase font-bold mb-8 block">Visual Strategist & Motion Designer</span>
          <h1 className="text-[14vw] md:text-[9vw] font-medium leading-[0.8] tracking-tighter mb-10">
            Precision in <br />
            <span className="text-white/20 italic font-serif font-light">Every Frame.</span>
          </h1>
          <p className="max-w-md text-white/40 text-sm md:text-lg font-light leading-relaxed tracking-wide">
            Translating complex technical concepts into high-fidelity visual experiences for the global market.
          </p>
        </motion.div>
        
        <div className="absolute bottom-10 left-8 flex items-center gap-4 opacity-20">
            <div className="w-12 h-[1px] bg-white" />
            <span className="text-[8px] tracking-[0.3em] uppercase font-bold">Scroll to explore</span>
        </div>
      </section>

      {/* 3. WORK GRID (SEÇÃO DE VÍDEOS) */}
      <section className="px-8 md:px-24 py-32 border-t border-white/5">
        <div className="flex justify-between items-end mb-24">
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase">Selected Work</h2>
            <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">2025 — 2026</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
          {PROJECTS.map((p, idx) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (idx % 2) * 0.1 }}
              onClick={() => setSelectedProject(p)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#0A0A0B] border border-white/5">
                <img 
                  src={`/thumbnails/${p.id}.jpg`} 
                  alt={p.title} 
                  className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                        <Play size={20} fill="white" />
                    </div>
                </div>
              </div>
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <span className="text-[8px] tracking-[0.4em] uppercase text-[#C5A059] font-bold mb-2 block">{p.category}</span>
                  <h3 className="text-2xl font-light tracking-tight">{p.title}</h3>
                </div>
                <ArrowUpRight size={20} className="text-white/20 group-hover:text-[#C5A059] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. ABOUT SECTION (SOBRE MIM) */}
      <section className="bg-white text-black py-40 px-8 md:px-24">
        <div className="max-w-5xl mx-auto">
            <span className="text-black/30 text-[9px] tracking-[0.5em] uppercase font-bold block mb-12">The Philosophy</span>
            <h2 className="text-4xl md:text-7xl font-medium tracking-tighter leading-[0.95] mb-12">
                Focused on <span className="italic font-serif font-light">Deep Work</span> and high-performance execution to deliver world-class motion design.
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-lg md:text-xl font-light leading-relaxed text-black/60">
                <p>
                  Baseado em Maceió, opero como Diretor Criativo e Motion Designer para marcas e criadores que buscam elevar sua percepção de valor no mercado internacional.
                </p>
                <p>
                  Meu workflow é otimizado para escala e retenção, garantindo que cada frame tenha um propósito estratégico, seja em anúncios conceituais ou interfaces complexas.
                </p>
            </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION (CONTATOS) */}
      <footer className="py-40 px-8 md:px-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20">
            <h2 className="text-6xl md:text-9xl font-medium tracking-tighter leading-none">
                Let's <br /> Build.
            </h2>
            <div className="flex flex-col gap-10">
                <div>
                    <span className="text-[#C5A059] text-[9px] tracking-[0.5em] uppercase font-bold block mb-4">Email</span>
                    <a href="mailto:hello@andremograph.com" className="text-2xl md:text-4xl font-light hover:text-[#C5A059] transition-colors underline underline-offset-8">
                        hello@andremograph.com
                    </a>
                </div>
                <div>
                    <span className="text-[#C5A059] text-[9px] tracking-[0.5em] uppercase font-bold block mb-4">Social</span>
                    <a href="https://instagram.com/andremograph" target="_blank" className="text-2xl md:text-4xl font-light hover:text-[#C5A059] transition-colors underline underline-offset-8">
                        @andremograph
                    </a>
                </div>
            </div>
        </div>
        <div className="mt-40 pt-10 border-t border-white/5 flex justify-between text-[8px] tracking-[0.4em] uppercase text-white/20">
            <span>© 2026 andremograph</span>
            <span>Motion & Visual Strategy</span>
        </div>
      </footer>

      {/* MODAL DO VÍDEO */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
            <div className="absolute inset-0 bg-black/98 backdrop-blur-3xl" onClick={() => setSelectedProject(null)} />
            <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 text-white/40 hover:text-white z-[210]">
              <X size={32} />
            </button>
            <div className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black z-10">
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
  );
}