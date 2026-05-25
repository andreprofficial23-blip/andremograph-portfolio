"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Mail, X, Play, ArrowDownRight } from "lucide-react";

interface Video {
  id: string;
  title: string;
  type: "Longo" | "Curto";
  youtubeId: string;
}

const VIDEOS: Video[] = [
  // Longos
  { id: "v1", title: "Vídeo 1", type: "Longo", youtubeId: "LO9EnykVlBg" },
  { id: "v2", title: "Vídeo 2", type: "Longo", youtubeId: "ISM8v6E5Yso" },
  { id: "v3", title: "Vídeo 3", type: "Longo", youtubeId: "oK1p72YO2pw" },
  { id: "v4", title: "Vídeo 4", type: "Longo", youtubeId: "M0OcyKCJhYs" },
  { id: "v5", title: "Vídeo 5", type: "Longo", youtubeId: "q7jkRt0XXPY" },
  // Curtos
  { id: "v6", title: "Vídeo 6", type: "Curto", youtubeId: "xpYasagUJAs" },
  { id: "v7", title: "Vídeo 7", type: "Curto", youtubeId: "u98UHtQWVNA" },
  { id: "v8", title: "Vídeo 8", type: "Curto", youtubeId: "n2OiJBRhzOU" },
  { id: "v9", title: "Vídeo 9", type: "Curto", youtubeId: "LK1cKH6xJvY" },
  { id: "v10", title: "Vídeo 10", type: "Curto", youtubeId: "O4nTVAfoxKI" },
  { id: "v11", title: "Vídeo 11", type: "Curto", youtubeId: "AKuQB0DLdoY" },
  { id: "v12", title: "Vídeo 12", type: "Curto", youtubeId: "JeLV_HljZas" },
  { id: "v13", title: "Vídeo 13", type: "Curto", youtubeId: "3KPQzNRwH9Q" }
];

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Video | null>(null);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    const youtubeId = target.getAttribute("data-youtube-id");
    if (youtubeId) {
      target.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; background-color: #050506; color: #ffffff; overflow-x: hidden; scroll-behavior: smooth; }
      `}</style>

      <div className="min-h-screen relative selection:bg-[#C5A059]/30 antialiased font-light flex flex-col items-center">
        
        {/* NAVEGAÇÃO */}
        <nav className="fixed top-0 w-full px-8 py-8 flex justify-between items-center z-[100] mix-blend-difference">
          <span className="text-[11px] uppercase tracking-[0.4em] font-bold">@andremograph</span>
          <a href="#contact" className="text-[10px] uppercase tracking-widest font-medium text-white/50 hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        <main className="w-full max-w-[1200px] mx-auto px-6">
          
          {/* SEÇÃO 1: SOBRE MIM (APRESENTAÇÃO) */}
          <section className="min-h-screen flex flex-col justify-center pt-20 pb-10">
            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
              
              {/* Foto de Perfil com Glow */}
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="relative w-48 h-48 md:w-72 md:h-72 flex-shrink-0"
              >
                <div className="absolute inset-0 bg-[#C5A059]/20 blur-[50px] rounded-full" />
                <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-white/5">
                   <img 
                     src="/perfil.jpg" 
                     alt="André" 
                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                     onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"; }}
                   />
                </div>
              </motion.div>

              {/* Textos */}
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex flex-col items-center md:items-start text-center md:text-left"
              >
                <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">Maceió, AL</span>
                <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-6">
                  Motion Designer <br />
                  <span className="text-white/40 italic font-serif">& Video Editor.</span>
                </h1>
                <p className="max-w-lg text-white/50 text-base md:text-lg leading-relaxed mb-8">
                  Focado em traduzir conceitos complexos em experiências visuais de alta fidelidade para o mercado internacional. Opero com alta performance para garantir que cada frame tenha precisão e propósito.
                </p>
                
                {/* Ferramentas / Skills */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  {["After Effects", "Premiere Pro", "DaVinci Resolve", "Blender", "Color Grading"].map((skill) => (
                    <span key={skill} className="px-4 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-widest text-white/40">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
            >
              <span className="text-[8px] uppercase tracking-[0.3em]">Explore</span>
              <ArrowDownRight size={16} className="animate-bounce" />
            </motion.div>
          </section>

          {/* SEÇÃO 2: PORTFÓLIO DE VÍDEOS */}
          <section className="py-32 w-full">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-20">
               <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Selected Works</h2>
               <div className="w-12 h-[1px] bg-[#C5A059] mt-6"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
              {VIDEOS.map((p, idx) => (
                <motion.div 
                  key={p.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(p)}
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-[#0A0A0B] border border-white/5 mb-5 transition-all duration-500 group-hover:border-[#C5A059]/40 group-hover:shadow-[0_10px_40px_rgba(197,160,89,0.1)]">
                    <img 
                      src={`https://img.youtube.com/vi/${p.youtubeId}/maxresdefault.jpg`} 
                      data-youtube-id={p.youtubeId}
                      onError={handleImageError}
                      alt={p.title} 
                      className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                       <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 transform scale-75 group-hover:scale-100 transition-all duration-500">
                           <Play size={20} fill="white" className="ml-1" />
                       </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start px-2">
                    <div>
                      <h3 className="text-lg font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">{p.title}</h3>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#C5A059] mt-1 block">{p.type}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* SEÇÃO 3: CONTATO (DIRETO AO PONTO) */}
          <section id="contact" className="py-40 w-full border-t border-white/10 flex flex-col items-center text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] font-bold mb-8 block">Next Steps</span>
              <h2 className="text-5xl md:text-8xl font-medium tracking-tighter leading-none mb-12">
                Let's <br /> <span className="italic font-serif text-white/40">Work.</span>
              </h2>
              
              <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-12">
                <a href="mailto:hello@andremograph.com" className="px-8 py-4 bg-white text-black rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#C5A059] transition-colors">
                  hello@andremograph.com
                </a>
                <a href="https://instagram.com/andremograph" target="_blank" className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full text-xs uppercase tracking-widest font-bold hover:border-[#C5A059] hover:text-[#C5A059] transition-colors">
                  Instagram
                </a>
              </div>
            </motion.div>
          </section>
          
        </main>

        {/* MODAL DE VÍDEO DO YOUTUBE (ANTI-BLOQUEIO) */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
            >
              <div className="absolute inset-0 bg-[#050506]/95 backdrop-blur-2xl" onClick={() => setSelectedProject(null)} />
              <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 text-white/50 hover:text-white z-[210] transition-colors">
                <X size={32} />
              </button>
              
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black z-10 shadow-2xl"
              >
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selectedProject.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  rel="noopener noreferrer"
                ></iframe>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
