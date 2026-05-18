"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ArrowDown, Instagram, Mail } from "lucide-react";
import { PROJECTS, DICT, Language } from "./lib/config";
import { ProjectCard, ProjectModal } from "./components/ui";

export default function PortfolioPage() {
  const [lang, setLang] = useState<Language>("en");
  const t = DICT[lang];
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="min-h-screen bg-[#050506] text-white selection:bg-[#C5A059]/30">
      {/* NAVEGAÇÃO MINIMALISTA */}
      <nav className="fixed top-0 w-full px-8 py-6 flex justify-between items-center z-[100] backdrop-blur-sm">
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
        {/* HERO SECTION - FOCO EM TIPOGRAFIA */}
        <section className="h-screen flex flex-col justify-center px-8 md:px-24">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-bold mb-6">Maceió, AL (GMT-3)</p>
            <h1 className="text-6xl md:text-[140px] font-light leading-[0.85] tracking-tighter mb-8">
              {t.hero_title} <br />
              <span className="text-white/30 italic font-serif">{t.hero_subtitle}</span>
            </h1>
            <p className="max-w-md text-white/40 text-sm md:text-lg font-light leading-relaxed">
              {t.hero_desc}
            </p>
          </motion.div>
          
          <div className="absolute bottom-12 left-8 flex items-center gap-4 opacity-20">
            <div className="w-8 h-[1px] bg-white" />
            <span className="text-[9px] tracking-[0.3em] uppercase font-bold">Scroll to explore</span>
          </div>
        </section>

        {/* PROJETOS - GRID VERTICAL */}
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

        {/* FOOTER - SOBRE E CONTATO */}
        <footer className="px-8 md:px-24 py-40 border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.02]">
           <div className="grid md:grid-cols-2 gap-24">
              <div>
                <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-bold block mb-8">{t.section_about}</span>
                <p className="text-2xl md:text-4xl font-light leading-snug text-white/80 tracking-tight">
                  I'm a motion designer focused on building clean, intuitive visual stories that solve complex creative problems.
                </p>
              </div>
              <div className="flex flex-col justify-end">
                <h3 className="text-6xl md:text-8xl font-light tracking-tighter mb-12">Let's build.</h3>
                <div className="flex flex-wrap gap-8">
                  <a href="#" className="group flex items-center gap-2 text-[11px] tracking-widest uppercase font-bold">
                    <Instagram size={14} className="group-hover:text-[#C5A059] transition-colors" /> Instagram
                  </a>
                  <a href="#" className="group flex items-center gap-2 text-[11px] tracking-widest uppercase font-bold">
                    <Mail size={14} className="group-hover:text-[#C5A059] transition-colors" /> hello@andremograph.com
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