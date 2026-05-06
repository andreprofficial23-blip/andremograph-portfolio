"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Film, User, Play, Zap, Cpu, Globe, Palette } from "lucide-react";
import { DICT, Language, PanelKey } from "../lib/config";

// Função utilitária para verificar existência de arquivos no servidor
async function fileExists(url: string) {
  try {
    const res = await fetch(url, { method: "HEAD", cache: "no-store" });
    return res.ok;
  } catch {
    return false;
  }
}

// Componente de Botão Estilizado (CTA)
function MotionCTA({
  onClick,
  children,
  variant = "primary",
}: {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const baseClass =
    variant === "primary"
      ? "border border-white/20 bg-white/5 text-white hover:bg-[#C5A059] hover:text-black hover:border-[#C5A059]"
      : "border border-white/10 bg-transparent text-white/70 hover:bg-white/5 hover:text-white";

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={`relative overflow-hidden inline-flex items-center gap-3 px-6 py-3 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 ${baseClass}`}
    >
      <motion.div
        className="absolute inset-0 bg-[#C5A059]/10 blur-xl opacity-0"
        whileHover={{ opacity: variant === "primary" ? 1 : 0.35 }}
        transition={{ duration: 0.25 }}
      />
      <span className="relative z-10 flex items-center gap-3">{children}</span>
    </motion.button>
  );
}

// Navegação entre painéis
function PanelNavigation({
  onNavigate,
  primary,
  secondary,
}: {
  onNavigate: (p: PanelKey) => void;
  primary: { label: string; target: PanelKey; icon: React.ReactNode; };
  secondary?: { label: string; target: PanelKey; icon: React.ReactNode; };
}) {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <MotionCTA onClick={() => onNavigate(primary.target)}>
        {primary.label}
        {primary.icon}
      </MotionCTA>

      {secondary && (
        <MotionCTA variant="secondary" onClick={() => onNavigate(secondary.target)}>
          {secondary.label}
          {secondary.icon}
        </MotionCTA>
      )}
    </div>
  );
}

// Painel de espera caso o Showreel não exista
export function ShowreelWaitingPanel({
  lang,
  onNavigate,
}: {
  lang: Language;
  onNavigate: (p: PanelKey) => void;
}) {
  const t = DICT[lang];

  return (
    <section className="w-full h-full flex flex-col justify-center items-center text-center">
      <div className="mb-10 flex flex-col items-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 font-bold">
          {t.btn_selected_reel}
        </p>
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white/90 mt-1">
          {t.btn_my_visuals}
        </h2>
        <p className="text-[10px] tracking-[0.4em] uppercase text-white font-bold mt-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
          {t.btn_waiting_showreel_status}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4 justify-center">
        <MotionCTA onClick={() => onNavigate("work")}>
          {t.btn_see_more_projects}
          <Briefcase size={16} />
        </MotionCTA>

        <MotionCTA variant="secondary" onClick={() => onNavigate("about")}>
          {t.nav_about}
          <User size={16} />
        </MotionCTA>
      </div>
    </section>
  );
}

// Painel Principal do Showreel
export function ShowreelPanel({
  lang,
  onNavigate,
}: {
  lang: Language;
  onNavigate: (p: PanelKey) => void;
}) {
  const t = DICT[lang];
  const [ready, setReady] = useState<boolean | null>(null);

  useEffect(() => {
    fileExists("/showreel/showreel.mp4").then(setReady);
  }, []);

  if (ready === false) {
    return <ShowreelWaitingPanel lang={lang} onNavigate={onNavigate} />;
  }

  return (
    <section className="w-full h-full flex flex-col justify-center pb-24">
      <div className="mb-10">
        <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 font-bold">
          {t.btn_selected_reel}
        </p>
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white/90 mt-1">
          {t.btn_my_visuals}
        </h2>
      </div>

      <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-[#050506] group shadow-2xl">
        {ready === null ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
              <span className="text-[10px] tracking-widest text-white/50 uppercase font-bold">{t.modal_waiting}</span>
            </div>
          </div>
        ) : (
          <>
            <video
              src="/showreel/showreel.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20 backdrop-blur-sm flex items-center justify-center">
                <Play fill="#C5A059" size={24} className="ml-1" />
              </div>
            </div>
          </>
        )}
      </div>

      <PanelNavigation
        onNavigate={onNavigate}
        primary={{
          label: t.btn_see_work.toUpperCase(),
          target: "work",
          icon: <Briefcase size={16} />,
        }}
        secondary={{
          label: t.nav_about.toUpperCase(),
          target: "about",
          icon: <User size={16} />,
        }}
      />
    </section>
  );
}

// Painel Sobre (About)
export function AboutPanel({
  lang,
  onNavigate,
}: {
  lang: Language;
  onNavigate: (p: PanelKey) => void;
}) {
  const t = DICT[lang];
  const [ready, setReady] = useState<boolean | null>(null);

  useEffect(() => {
    fileExists("/about/me.jpg").then(setReady);
  }, []);

  return (
    <section className="w-full h-full flex flex-col justify-center py-10 overflow-y-auto no-scrollbar">
      <div className="mb-12">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#C5A059] font-bold">
          {t.about_tag}
        </p>
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white/90 mt-2">
          {t.about_title_1} <br />
          <span className="text-white/40 italic font-serif">{t.about_title_2}</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-[380px_1fr] gap-16 items-start">
        <div className="relative group shrink-0">
          <div className="absolute -inset-4 bg-gradient-to-b from-[#C5A059]/20 to-transparent opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700" />
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[3/4] bg-[#050506] shadow-2xl">
            {ready === null || ready === false ? (
              <div className="h-full flex items-center justify-center">
                 <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                  <span className="text-[10px] tracking-widest text-white/50 uppercase font-bold">{t.modal_waiting}</span>
                </div>
              </div>
            ) : (
              <img
                src="/about/me.jpg"
                alt="Andre Rodrigues"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-light leading-snug text-white/90 mb-6 tracking-tight">
            {t.about_subtitle_1}{" "}
            <span className="text-[#C5A059]">{t.about_subtitle_2}</span>
          </h3>

          <p className="text-sm text-white/50 leading-relaxed mb-10 max-w-[50ch]">
            {t.about_body}
          </p>

          <div className="grid grid-cols-2 gap-6 mb-12">
            {[
              { icon: Palette, label: "Motion Design" },
              { icon: Zap, label: "VFX" },
              { icon: Cpu, label: "Tech Direction" },
              { icon: Globe, label: "Strategy" }
            ].map((skill, i) => (
              <div key={i} className="flex items-center gap-3">
                <skill.icon size={14} className="text-[#C5A059]/60" />
                <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-white/40">{skill.label}</span>
              </div>
            ))}
          </div>

          <PanelNavigation
            onNavigate={onNavigate}
            primary={{
              label: t.btn_see_work.toUpperCase(),
              target: "work",
              icon: <ArrowUpRight size={16} />,
            }}
            secondary={{
              label: t.nav_showreel.toUpperCase(),
              target: "showreel",
              icon: <Film size={16} />,
            }}
          />
        </div>
      </div>
    </section>
  );
}

// Painel Coming Soon (Em Breve)
export function ComingSoonPanel({
  title,
  subtitleKey,
  lang,
  onNavigate,
}: any) {
  const t = DICT[lang as Language];

  return (
    <section className="w-full h-full flex flex-col justify-center">
      <div className="mb-10">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#C5A059] font-bold">
          {(t as any)[subtitleKey]}
        </p>
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white/90 mt-1">
          {title}
        </h2>
      </div>

      <div className="relative h-[480px] rounded-3xl overflow-hidden border border-white/5 bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center">
        <div className="text-center flex flex-col items-center">
          <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-[#C5A059]/20 mb-12">
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
            <span className="text-[10px] tracking-widest text-[#C5A059] uppercase font-bold">{t.coming_soon}</span>
          </div>

          <PanelNavigation
            onNavigate={onNavigate}
            primary={{
              label: t.btn_see_work.toUpperCase(),
              target: "work",
              icon: <Briefcase size={16} />,
            }}
            secondary={{
              label: t.nav_showreel.toUpperCase(),
              target: "showreel",
              icon: <Film size={16} />,
            }}
          />
        </div>
      </div>
    </section>
  );
}