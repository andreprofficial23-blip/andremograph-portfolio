"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, ChevronLeft, ChevronRight, Globe } from "lucide-react";
import { Project, Language, PanelKey, DICT, CATEGORIES, MENU_ITEMS_KEYS, CategoryData } from "../lib/config";
import { useClickOutside } from "../lib/hooks";

export const DiscordIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 127.14 96.36" fill="currentColor">
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69c-6.18,0-11.23-5.65-11.23-12.59S36.2,40.51,42.45,40.51,53.7,46.2,53.67,53.1,48.63,65.69,42.45,65.69Zm42.24,0c-6.18,0-11.23-5.65-11.23-12.59s5-12.59,11.23-12.59S96,46.2,95.92,53.1,90.87,65.69,84.69,65.69Z" />
  </svg>
);

export const ProjectCard = React.memo(function ProjectCard({ p, onClick, lang, getEmoji }: { p: Project; onClick: (p: Project) => void; lang: Language; getEmoji: (k: string) => string }) {
  const t = DICT[lang];
  const catObj = CATEGORIES.find((c: CategoryData) => c.key === p.category);
  const translatedCat = catObj ? (t as any)[catObj.dictTitle] : p.category;

  return (
    <motion.div className="relative shrink-0 w-[280px] md:w-[320px] cursor-pointer group flex flex-col h-full" whileHover={{ y: -6 }} transition={{ duration: 0.3 }} onClick={() => onClick(p)}>
      <div className="pointer-events-none absolute -inset-4 -z-10"><div className="absolute inset-0 rounded-[20px] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40 glow-strong" /></div>
      <div className="flex flex-col bg-black/40 backdrop-blur-xl rounded-[16px] border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-[#C5A059]/40 h-full">
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#0a0a0c] flex items-center justify-center">
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-[#050506]">
            <div className="absolute -inset-24 flex flex-wrap gap-6 justify-center items-center opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 -rotate-12 scale-125" style={{ maskImage: 'radial-gradient(circle at center, transparent 35%, black 90%)' }}>
              {Array.from({ length: 72 }).map((_, i) => (<span key={i} className="text-2xl filter grayscale">{getEmoji(p.category)}</span>))}
            </div>
          </div>
          <video src={`/videos/${p.id}.mp4`} poster={`/thumbnails/${p.id}.jpg`} autoPlay muted loop playsInline className="w-full h-full object-contain opacity-60 group-hover:opacity-90 transition-opacity duration-700 scale-105 group-hover:scale-100 transition-transform duration-700 relative z-10" />
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
            <span className="text-[9px] tracking-[0.3em] uppercase text-[#C5A059] font-bold bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#C5A059]/20">{translatedCat}</span>
            <span className="text-[10px] text-white/40 tracking-widest font-medium">{p.year}</span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30 backdrop-blur-[2px]">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-16 h-16 rounded-full border border-[#C5A059]/60" />
              <div className="flex items-center gap-2 bg-[#C5A059] text-black text-[9px] tracking-[0.25em] uppercase font-bold px-4 py-2 rounded-full relative z-10 shadow-lg">
                {t.modal_view} <ArrowUpRight size={12} strokeWidth={2.5} />
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 py-4 bg-[#111113]/80 border-t border-white/5 relative z-20 flex-1 flex flex-col justify-center">
          <h3 className="text-sm font-semibold text-white/90 tracking-tight leading-snug mb-1">{p.title}</h3>
          <p className="text-[11px] text-white/40 leading-relaxed truncate">{p.subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
});

export function Dropdown({ onClose, currentPanel, setPanel, currentLang, setLang, lang, type }: any) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, onClose);
  const t = DICT[lang as Language];
  const langs = [{ code: "en", label: "English" }, { code: "pt", label: "Português" }, { code: "es", label: "Español" }, { code: "fr", label: "Français" }];

  return (
    <motion.div ref={dropdownRef} initial={{ opacity: 0, scale: 0.95, y: -10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: -10 }} transition={{ duration: 0.25 }} className={`absolute top-14 right-0 z-[160] bg-[#0d0d0f]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-2.5 flex flex-col gap-1.5 overflow-hidden ${type === "menu" ? "w-[240px]" : "w-[160px]"}`}>
      {type === "menu" && setPanel && MENU_ITEMS_KEYS.map((item) => (
        <button key={item.id} onClick={() => { setPanel(item.id); onClose(); }} className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left text-[11px] tracking-[0.2em] uppercase font-bold transition-all duration-300 group ${currentPanel === item.id ? "bg-[#C5A059]/10 text-white border border-[#C5A059]/20" : "bg-transparent text-white/40 border border-transparent hover:bg-white/5 hover:text-white/80"}`}>
          <item.icon size={16} className={currentPanel === item.id ? "text-[#C5A059]" : "text-white/20 group-hover:text-white/50"} />{(t as any)[item.dictKey]}
        </button>
      ))}
      {type === "lang" && setLang && langs.map((l) => (
        <button key={l.code} onClick={() => { setLang(l.code); onClose(); }} className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left text-[11px] tracking-[0.2em] uppercase font-bold transition-all duration-300 group ${currentLang === l.code ? "bg-[#C5A059]/10 text-white border border-[#C5A059]/20" : "bg-transparent text-white/40 border border-transparent hover:bg-white/5 hover:text-white/80"}`}>
          <Globe size={16} className={currentLang === l.code ? "text-[#C5A059]" : "text-white/20 group-hover:text-white/50"} />{l.label}
        </button>
      ))}
    </motion.div>
  );
}

export function ProjectModal({ project, allInCategory, onClose, onNext, onPrev, hasNext, hasPrev, onSelectDot, lang }: any) {
  const t = DICT[lang as Language];
  const currentIndex = allInCategory.findIndex((p: Project) => p.id === project.id);
  const catObj = CATEGORIES.find((c: CategoryData) => c.key === project.category);
  
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); if (e.key === "ArrowLeft" && hasPrev) onPrev(); if (e.key === "ArrowRight" && hasNext) onNext(); };
    window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  return (
    <motion.div className="fixed inset-0 z-[200] flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <div className="absolute inset-0 bg-[#050506]/90 backdrop-blur-xl" onClick={onClose} />
      <AnimatePresence mode="wait">
        <motion.div key={project.id} className="relative z-10 w-full max-w-5xl mx-4 md:mx-8 grid md:grid-cols-[1fr_380px] gap-0 rounded-[24px] overflow-hidden border border-white/10" initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97, y: -10 }} transition={{ duration: 0.35 }}>
          <div className="absolute inset-0 z-0 pointer-events-none rounded-[24px] border border-white/20 blur-[1px]" />
          <div className="relative bg-[#050506] aspect-video md:aspect-auto md:h-[580px] flex items-center justify-center overflow-hidden">
            <video src={`/videos/${project.id}.mp4`} poster={`/thumbnails/${project.id}.jpg`} controls playsInline className="w-full h-full object-contain z-10 relative" />
          </div>
          <div className="relative bg-black/50 backdrop-blur-lg border-l border-white/5 p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A059] font-bold">{catObj ? (t as any)[catObj.dictTitle] : project.category}</span>
                <span className="text-[10px] text-white/25 tracking-widest">{project.year}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light tracking-tighter text-white/90 leading-tight mb-3">{project.title}</h2>
              <p className="text-sm text-[#C5A059]/60 mb-6">{project.subtitle}</p>
            </div>
            <div>
              <div className="flex items-center justify-between mt-6 border-t border-white/5 pt-6">
                <button onClick={onPrev} disabled={!hasPrev} className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-bold text-white/20 hover:text-white/60 disabled:opacity-20 transition-all"><ChevronLeft size={14} /> {t.modal_prev}</button>
                <div className="flex gap-1.5">{allInCategory.map((p: Project, i: number) => (<button key={p.id} onClick={() => onSelectDot(p)} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-[#C5A059] w-4" : "bg-white/15"}`} />))}</div>
                <button onClick={onNext} disabled={!hasNext} className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-bold text-white/20 hover:text-white/60 disabled:opacity-20 transition-all">{t.modal_next} <ChevronRight size={14} /></button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}