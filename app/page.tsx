"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Film, User, Play, Zap, Cpu, Globe, Palette } from "lucide-react";
import { DICT, Language, PanelKey } from "../lib/config";

async function fileExists(url: string) {
  try {
    const res = await fetch(url, { method: "HEAD", cache: "no-store" });
    return res.ok;
  } catch {
    return false;
  }
}

function MotionCTA({ onClick, children, variant = "primary" }: any) {
  const baseClass = variant === "primary"
    ? "border border-white/20 bg-white/5 text-white hover:bg-[#C5A059] hover:text-black"
    : "border border-white/10 text-white/70 hover:bg-white/5";

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -2 }}
      className={`px-6 py-3 rounded-full text-[10px] tracking-widest uppercase font-bold transition-all ${baseClass}`}
    >
      {children}
    </motion.button>
  );
}

export function ShowreelPanel({ lang, onNavigate }: { lang: Language; onNavigate: (p: PanelKey) => void }) {
  const t = DICT[lang];
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-8">{t.nav_showreel}</h2>
      <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black/40 relative group">
        <video src="/videos/showreel.mp4" autoPlay muted loop className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" />
        <div className="absolute inset-0 flex items-center justify-center">
           <Play fill="#C5A059" size={40} className="text-[#C5A059]" />
        </div>
      </div>
    </div>
  );
}

export function AboutPanel({ lang }: { lang: Language; onNavigate: (p: PanelKey) => void }) {
  const t = DICT[lang];
  return (
    <div className="w-full">
      <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-bold">{t.nav_about}</span>
      <h2 className="text-4xl md:text-6xl font-light tracking-tighter mt-4">Frame RIOT</h2>
    </div>
  );
}

export function ComingSoonPanel({ title, subtitleKey, lang }: any) {
  const t = DICT[lang as Language];
  return (
    <div className="text-center py-20">
      <h2 className="text-5xl font-light tracking-tighter uppercase">{title}</h2>
      <p className="text-[#C5A059] text-[10px] tracking-widest uppercase mt-4">{t.coming_soon}</p>
    </div>
  );
}