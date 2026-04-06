"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Film, User } from "lucide-react";
import { DICT, Language, PanelKey } from "../lib/config";

async function fileExists(url: string) {
  try {
    const res = await fetch(url, { method: "HEAD", cache: "no-store" });
    return res.ok;
  } catch {
    return false;
  }
}

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

      <div className="showreel-shell">
        {ready === null ? (
          <div className="placeholder-panel">
            <div className="placeholder-pill">
              <span className="dot" /> {t.modal_waiting}
            </div>
          </div>
        ) : (
          <video
            src="/showreel/showreel.mp4"
            controls
            playsInline
            className="w-full h-[520px] object-contain rounded-[16px]"
          />
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
    <section className="w-full h-full flex flex-col justify-center pb-10 overflow-y-auto no-scrollbar">
      <div className="mb-16">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#C5A059] font-bold">
          {t.about_tag}
        </p>
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white/90 mt-2">
          {t.about_title_1}
          <br />
          {t.about_title_2}
        </h2>
      </div>

      <div className="grid md:grid-cols-[380px_1fr] gap-16 items-start">
        <div className="relative group shrink-0">
          <div className="absolute -inset-4 bg-gradient-to-b from-[#C5A059]/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />

          <div className="relative rounded-[20px] overflow-hidden border border-white/10 aspect-[3/4] bg-[#050506]">
            {ready === null || ready === false ? (
              <div className="placeholder-panel h-full">
                <div className="placeholder-pill">
                  <span className="dot" /> {t.modal_waiting}
                </div>
              </div>
            ) : (
              <img
                src="/about/me.jpg"
                alt="Andre"
                className="w-full h-full object-cover object-[80%_10%] grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
              />
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center pt-4 pb-24">
          <h3 className="text-2xl md:text-3xl font-light leading-snug text-white/90 mb-6 tracking-tight">
            {t.about_subtitle_1}{" "}
            <span className="text-[#C5A059]">{t.about_subtitle_2}</span>
          </h3>

          <p className="text-sm text-white/50 leading-relaxed mb-12 max-w-[55ch]">
            {t.about_body}
          </p>

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

      <div className="showreel-shell">
        <div className="placeholder-panel placeholder-cinematic flex items-center justify-center h-[520px] rounded-[16px]">
          <div className="text-center flex flex-col items-center">
            <div className="placeholder-pill border-[#C5A059]/30 bg-[#C5A059]/5 mb-10">
              <span className="dot" /> {t.coming_soon}
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
      </div>
    </section>
  );
}