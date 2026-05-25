"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ArrowDownRight } from "lucide-react";

interface Video {
  id: string;
  title: string;
  type: "Longo" | "Curto";
  youtubeId: string;
}

const VIDEOS: Video[] = [
  {
    id: "v1",
    title: "Live Capture 01",
    type: "Longo",
    youtubeId: "LO9EnykVlBg"
  },
  {
    id: "v2",
    title: "OS Environment",
    type: "Longo",
    youtubeId: "oK1p72YO2pw"
  },

  // GRID SECUNDÁRIO

  {
    id: "v3",
    title: "World Finals Comp",
    type: "Longo",
    youtubeId: "M0OcyKCJhYs"
  },
  {
    id: "v4",
    title: "Currency Dynamics",
    type: "Curto",
    youtubeId: "q7jkRt0XXPY"
  },
  {
    id: "v5",
    title: "Project One",
    type: "Curto",
    youtubeId: "xpYasagUJAs"
  },
  {
    id: "v6",
    title: "Project Two",
    type: "Curto",
    youtubeId: "u98UHtQWVNA"
  },
  {
    id: "v7",
    title: "Project Three",
    type: "Curto",
    youtubeId: "n2OiJBRhzOU"
  },
  {
    id: "v8",
    title: "Project Four",
    type: "Curto",
    youtubeId: "LK1cKH6xJvY"
  },
  {
    id: "v9",
    title: "Project Five",
    type: "Curto",
    youtubeId: "AKuQB0DLdoY"
  },
  {
    id: "v10",
    title: "Project Six",
    type: "Curto",
    youtubeId: "JeLV_HljZas"
  }
];

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Video | null>(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: "Inter", sans-serif;
          background-color: #050506;
          color: #ffffff;
          overflow-x: hidden;
        }
      `}</style>

      <div className="min-h-screen relative antialiased font-light flex flex-col items-center selection:bg-[#C5A059]/30">

        {/* BACKGROUND GLOW */}

        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#C5A059]/10 blur-[180px] rounded-full opacity-40" />
        </div>

        {/* NAVBAR */}

        <nav className="fixed top-0 w-full px-6 md:px-10 py-6 flex justify-between items-center z-[100] mix-blend-difference">
          <span className="text-[11px] uppercase tracking-[0.25em] font-bold">
            @andremograph
          </span>

          <a
            href="#contact"
            className="text-[10px] uppercase tracking-[0.25em] text-white/50 hover:text-white transition-colors"
          >
            Contact
          </a>
        </nav>

        <main className="w-full max-w-[1300px] px-6">

          {/* HERO */}

          <section className="min-h-screen flex items-center py-32">
            <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-20 items-center w-full">

              {/* FOTO */}

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative mx-auto lg:mx-0"
              >
                <div className="absolute inset-0 bg-[#C5A059]/20 blur-[70px] rounded-full scale-110" />

                <div className="relative w-64 h-64 md:w-[360px] md:h-[360px] rounded-full overflow-hidden border border-white/10 bg-white/5">
                  <img
                    src="/perfil.jpg"
                    alt="André Motion Designer"
                    className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop";
                    }}
                  />
                </div>
              </motion.div>

              {/* TEXTO */}

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center lg:text-left"
              >
                <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.35em] font-bold mb-8 block">
                  Maceió, Brazil
                </span>

                <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[0.95] mb-8">
                  Motion Designer
                  <br />
                  <span className="italic font-serif text-white/40">
                    & Video Editor.
                  </span>
                </h1>

                <p className="max-w-2xl text-white/50 text-base md:text-lg leading-relaxed mb-10">
                  Especializado em motion graphics cinematográficos,
                  storytelling visual e experiências digitais de alta fidelidade
                  para marcas, creators e projetos globais.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {[
                    "After Effects",
                    "Premiere Pro",
                    "DaVinci",
                    "Blender",
                    "Color Grading",
                    "VFX"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-[0.25em] text-white/40 backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* SCROLL */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
              <span className="text-[9px] uppercase tracking-[0.35em]">
                Explore
              </span>

              <ArrowDownRight
                size={16}
                className="animate-bounce"
              />
            </motion.div>
          </section>

          {/* WORKS */}

          <section className="py-24">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
                Selected Works
              </h2>

              <div className="w-14 h-[1px] bg-[#C5A059] mt-6"></div>
            </motion.div>

            {/* HERO PROJECTS */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
              {VIDEOS.slice(0, 2).map((p, idx) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.1
                  }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(p)}
                >
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0B]">

                    <img
                      src={`https://img.youtube.com/vi/${p.youtubeId}/maxresdefault.jpg`}
                      alt={p.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = `https://img.youtube.com/vi/${p.youtubeId}/hqdefault.jpg`;
                      }}
                      className="w-full h-full object-cover grayscale-[15%] opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="w-20 h-20 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                        <Play
                          size={28}
                          fill="white"
                          className="ml-1"
                        />
                      </div>
                    </div>

                    <div className="absolute bottom-8 left-8">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] block mb-3">
                        Featured Project
                      </span>

                      <h3 className="text-3xl font-medium tracking-tight">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* GRID SECUNDÁRIO */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {VIDEOS.slice(2).map((p, idx) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.05
                  }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(p)}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 bg-[#0A0A0B]">

                    <img
                      src={`https://img.youtube.com/vi/${p.youtubeId}/hqdefault.jpg`}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale-[20%] opacity-75 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-lg border border-white/20 flex items-center justify-center">
                        <Play
                          size={20}
                          fill="white"
                          className="ml-1"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 px-1">
                    <h3 className="text-xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">
                      {p.title}
                    </h3>

                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] mt-2 block">
                      {p.type}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CONTACT */}

          <section
            id="contact"
            className="py-40 mt-20 border-t border-white/10 text-center"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.35em] font-bold mb-8 block">
                Next Step
              </span>

              <h2 className="text-6xl md:text-8xl font-medium tracking-tighter leading-none mb-12">
                Let's
                <br />
                <span className="italic font-serif text-white/40">
                  Work.
                </span>
              </h2>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6">

                <a
                  href="mailto:hello@andremograph.com"
                  className="px-8 py-4 rounded-full bg-white text-black text-xs uppercase tracking-[0.25em] font-bold hover:bg-[#C5A059] transition-colors"
                >
                  hello@andremograph.com
                </a>

                <a
                  href="https://instagram.com/andremograph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full border border-white/20 text-white text-xs uppercase tracking-[0.25em] font-bold hover:border-[#C5A059] hover:text-[#C5A059] transition-colors"
                >
                  Instagram
                </a>
              </div>
            </motion.div>
          </section>
        </main>

        {/* MODAL */}

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
            >
              <div
                className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
                onClick={() => setSelectedProject(null)}
              />

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-[210] text-white/50 hover:text-white transition-colors"
                aria-label="Close video modal"
              >
                <X size={34} />
              </button>

              <motion.div
                initial={{
                  scale: 0.95,
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: 0
                }}
                exit={{
                  scale: 0.95,
                  opacity: 0,
                  y: 20
                }}
                transition={{ duration: 0.35 }}
                className="relative w-full max-w-7xl aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black z-10 shadow-2xl"
              >
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selectedProject.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={selectedProject.title}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}