"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { Project, DICT } from "../lib/config";

export function ProjectCard({ p, onClick, lang }: { p: Project; onClick: (p: Project) => void; lang: string }) {
  const t = (DICT as any)[lang];
  return (
    <div className="group cursor-pointer" onClick={() => onClick(p)}>
      <div className="relative aspect-video rounded-3xl overflow-hidden bg-white/5 border border-white/10 mb-8 transition-all duration-700 group-hover:border-[#C5A059]/30">
        <img 
          src={`/thumbnails/${p.id}.jpg`} 
          alt={p.title} 
          className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <div className="bg-[#C5A059] text-black px-8 py-4 rounded-full flex items-center gap-3 font-bold text-[10px] tracking-widest uppercase shadow-2xl">
             Explore Experience <ArrowUpRight size={16} />
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

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
      <div className="absolute inset-0 bg-[#050506]/98 backdrop-blur-2xl" onClick={onClose} />
      <button onClick={onClose} className="absolute top-10 right-10 text-white/30 hover:text-white z-[210] transition-colors">
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