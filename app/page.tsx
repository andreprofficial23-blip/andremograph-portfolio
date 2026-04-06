"use client";

import React, { useMemo, useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Globe, Instagram, Twitter, X as CloseIcon, ChevronLeft, ChevronRight } from "lucide-react";

import { PanelKey, CategoryKey, Project, Language, DICT, CATEGORIES, PROJECTS, MENU_ITEMS_KEYS } from "./lib/config";
import { useLocalTime } from "./lib/hooks";
import { ProjectModal, ProjectCard, Dropdown, DiscordIcon } from "./components/ui";
import { ShowreelPanel, AboutPanel, ComingSoonPanel } from "./components/panels";

export default function PortfolioPage() {
  const [lang, setLang] = useState<Language>("en");
  const t = DICT[lang];

  const [panel, setPanel] = useState<PanelKey>("work");
  const [activeWork, setActiveWork] = useState<CategoryKey>("2d");
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  
  const mainAreaRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const localTime = useLocalTime();

  const currentProjectsList = panel === "work" ? PROJECTS : [];
  const currentCategories = panel === "work" ? CATEGORIES : [];
  
  const filtered = useMemo(() => currentProjectsList.filter((p) => p.category === activeWork), [currentProjectsList, activeWork]);
  
  const getCategoryEmoji = useCallback((key: string) => {
    return CATEGORIES.find(c => c.key === key)?.emoji || "✨";
  }, []);

  const globalIndex = currentProjectsList.findIndex(p => p.id === selectedProject?.id);
  const hasNext = globalIndex >= 0 && globalIndex < currentProjectsList.length - 1;
  const hasPrev = globalIndex > 0;

  const navigateProject = useCallback((direction: 1 | -1) => {
    const nextProj = currentProjectsList[globalIndex + direction];
    if (nextProj) {
      setSelectedProject(nextProj);
      if (panel === "work") setActiveWork(nextProj.category);
    }
  }, [globalIndex, currentProjectsList, panel]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || panel !== "work" || selectedProject || isMenuOpen || isLangOpen) return;
    let isThrottled = false;

    const handleWheel = (e: WheelEvent) => {
      const isVertical = Math.abs(e.deltaY) > Math.abs(e.deltaX);
      const hasHScroll = container.scrollWidth > container.clientWidth;
      const isAtEnd = hasHScroll ? Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth - 5 : true;
      const isAtStart = hasHScroll ? container.scrollLeft <= 5 : true;

      const isOverCards = container.contains(e.target as Node);

      if (isOverCards && isVertical && e.deltaY !== 0 && hasHScroll) {
        if ((e.deltaY > 0 && !isAtEnd) || (e.deltaY < 0 && !isAtStart)) {
          e.preventDefault(); container.scrollBy({ left: e.deltaY * 1.5, behavior: 'auto' }); return; 
        }
      }

      if (isThrottled) { e.preventDefault(); return; }

      const idx = currentCategories.findIndex((c) => c.key === activeWork);
      if (e.deltaY > 0 && isAtEnd && idx < currentCategories.length - 1) {
        e.preventDefault(); isThrottled = true;
        setActiveWork(currentCategories[idx + 1].key);
        setTimeout(() => { isThrottled = false; }, 800);
      } else if (e.deltaY < 0 && isAtStart && idx > 0) {
        e.preventDefault(); isThrottled = true;
        setActiveWork(currentCategories[idx - 1].key);
        setTimeout(() => { isThrottled = false; }, 800);
      }
    };
    mainAreaRef.current?.addEventListener("wheel", handleWheel, { passive: false });
    return () => mainAreaRef.current?.removeEventListener("wheel", handleWheel);
  }, [activeWork, currentCategories, panel, selectedProject, isMenuOpen, isLangOpen]);

  useEffect(() => { if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft = 0; }, [activeWork]);

  const currentPanelIndex = MENU_ITEMS_KEYS.findIndex((item) => item.id === panel);
  const prevPanelItem = currentPanelIndex > 0 ? MENU_ITEMS_KEYS[currentPanelIndex - 1] : MENU_ITEMS_KEYS[MENU_ITEMS_KEYS.length - 1];
  const nextPanelItem = currentPanelIndex < MENU_ITEMS_KEYS.length - 1 ? MENU_ITEMS_KEYS[currentPanelIndex + 1] : MENU_ITEMS_KEYS[0];

  return (
    <div className="min-h-screen bg-transparent text-white overflow-x-hidden flex flex-col font-sans selection:bg-[#C5A059]/30 relative">
      <div className="pointer-events-none fixed inset-0 z-0">
        <video className="absolute inset-0 h-full w-full object-cover bg-video will-change-transform" src="https://ur8aht2fq4pckutd.public.blob.vercel-storage.com/BG.mp4" autoPlay muted loop playsInline preload="auto" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050506]/90 via-[#050506]/70 to-[#050506]/90" />
        <div className="absolute inset-0 vignette" />
        <div className="absolute inset-0 noise-layer" />
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} allInCategory={filtered} onClose={() => setSelectedProject(null)} onNext={() => navigateProject(1)} onPrev={() => navigateProject(-1)} hasNext={hasNext} hasPrev={hasPrev} onSelectDot={setSelectedProject} lang={lang} />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="fixed top-0 w-full px-8 py-6 md:px-20 md:py-8 flex justify-between items-center z-[150] mix-blend-difference pointer-events-auto">
          <span className="text-[11px] tracking-[0.4em] uppercase font-bold text-white/90">andremograph</span>
          
          <div className="flex items-center gap-4 md:gap-5 relative">
            <div className="hidden md:flex flex-col items-end justify-center mr-2">
              <span className="text-[11px] tracking-[0.4em] uppercase font-bold text-white/90 leading-none mb-1">GMT-3 | {localTime}</span>
              <span className="text-[9px] text-[#C5A059] tracking-[0.3em] uppercase opacity-80 leading-none mt-1">{t.header_commissions}</span>
            </div>
            
            <div className="relative">
              <button onClick={() => { setIsLangOpen(!isLangOpen); setIsMenuOpen(false); }} className="flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] p-0 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors shrink-0">
                <div className="flex items-center justify-center gap-1">
                  <Globe size={12} className="text-[#C5A059]" />
                  <span className="text-[9px] font-bold leading-none mt-[1px]">{t.lang_name}</span>
                </div>
              </button>
              <AnimatePresence>{isLangOpen && <Dropdown type="lang" onClose={() => setIsLangOpen(false)} currentLang={lang} setLang={setLang} lang={lang} />}</AnimatePresence>
            </div>

            <div className="relative">
              <button onClick={() => { setIsMenuOpen(!isMenuOpen); setIsLangOpen(false); }} className="flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] p-0 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors shrink-0">
                {isMenuOpen ? <CloseIcon size={16} /> : <Menu size={16} />}
              </button>
              <AnimatePresence>{isMenuOpen && <Dropdown type="menu" onClose={() => setIsMenuOpen(false)} currentPanel={panel} setPanel={setPanel} lang={lang} />}</AnimatePresence>
            </div>
          </div>
        </header>

        <div className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-[100] flex items-center p-1.5 rounded-full border border-white/10 bg-[#050506]/80 backdrop-blur-xl shadow-2xl pointer-events-auto mix-blend-normal">
          <button 
            onClick={() => { setPanel(prevPanelItem.id); setSelectedProject(null); }} 
            className="group flex items-center justify-center gap-3 px-5 py-2.5 md:py-3 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            <ChevronLeft size={16} className="text-[#C5A059] group-hover:-translate-x-1 transition-transform" />
            <span className="hidden md:block text-[10px] tracking-[0.2em] uppercase font-bold text-white/60 group-hover:text-white transition-colors mt-[1px]">
              {(t as any)[prevPanelItem.dictKey]}
            </span>
          </button>

          <div className="w-[1px] h-5 bg-white/15 mx-1" />

          <button 
            onClick={() => { setPanel(nextPanelItem.id); setSelectedProject(null); }} 
            className="group flex items-center justify-center gap-3 px-5 py-2.5 md:py-3 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            <span className="hidden md:block text-[10px] tracking-[0.2em] uppercase font-bold text-white/60 group-hover:text-white transition-colors mt-[1px]">
              {(t as any)[nextPanelItem.dictKey]}
            </span>
            <ChevronRight size={16} className="text-[#C5A059] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <main className="flex-1 flex flex-col z-10 pt-32 px-8 md:px-20 pb-32 justify-center">
          <div ref={mainAreaRef} className="flex flex-col md:flex-row items-center gap-12 max-w-[1700px] mx-auto w-full min-h-[65vh]">
            <nav className="hidden md:flex flex-col gap-8 min-w-[260px] shrink-0 self-start mt-12">
              {panel === "work" && (
                <div className="flex flex-col gap-7">
                  {currentCategories.map((cat) => (
                    <button key={cat.key} onClick={() => { setActiveWork(cat.key); setSelectedProject(null); }} className="group flex flex-col text-left">
                      <div className="flex items-center gap-4">
                        <div className={`h-[2px] transition-all duration-500 ${activeWork === cat.key ? "w-10 bg-white" : "w-4 bg-white/10 group-hover:w-8"}`} />
                        <span className={`text-sm tracking-[0.2em] uppercase font-bold transition-colors duration-300 ${activeWork === cat.key ? "text-white" : "text-white/30 group-hover:text-white/60"}`}>
                          {(t as any)[cat.dictTitle]}
                        </span>
                      </div>
                      <motion.span initial={false} animate={{ height: activeWork === cat.key ? "auto" : 0, opacity: activeWork === cat.key ? 1 : 0 }} className="text-[9px] text-white/40 tracking-[0.2em] uppercase ml-14 overflow-hidden block">
                        <span className="block mt-2">{(t as any)[cat.dictDesc]}</span>
                      </motion.span>
                    </button>
                  ))}
                </div>
              )}
            </nav>

            <div className="flex-1 w-full relative flex flex-col justify-center h-full">
              {panel === "showreel" && <ShowreelPanel lang={lang} onNavigate={setPanel} />}
              {panel === "about"    && <AboutPanel lang={lang} onNavigate={setPanel} />}
              {panel === "pack"     && <ComingSoonPanel title={t.nav_pack.toUpperCase()} subtitleKey="pack_subtitle" lang={lang} onNavigate={setPanel} />}
              {panel === "course"   && <ComingSoonPanel title={t.nav_course.toUpperCase()} subtitleKey="course_subtitle" lang={lang} onNavigate={setPanel} />}

              {panel === "work" && (
                <div className="flex flex-col w-full">
                  <div className="mb-6 flex flex-col">
                    <p className="text-[10px] tracking-[0.4em] uppercase text-[#C5A059] font-bold mb-2">
                      {activeWork === "brawl" ? "Esports Background" : t.work_tag}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-white/90">{(t as any)[currentCategories.find((c) => c.key === activeWork)?.dictTitle || ""]}</h2>
                    <p className="text-sm text-white/40 mt-2">{filtered.length} {t.work_projects}</p>
                  </div>

                  <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto no-scrollbar py-6 snap-x snap-mandatory scroll-smooth">
                    <AnimatePresence mode="popLayout">
                      {filtered.map((p) => (
                        <motion.div key={p.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="snap-start h-full">
                          <ProjectCard p={p} onClick={setSelectedProject} lang={lang} getEmoji={getCategoryEmoji} />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-white/20 mt-4 font-bold text-center">{t.scroll_explore}</p>
                </div>
              )}
            </div>
          </div>
        </main>

        <footer className="pt-16 pb-12 px-8 md:px-20 border-t border-white/5 bg-[#050506]/90 backdrop-blur-md flex flex-col items-center justify-center mt-auto w-full z-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <a href="https://x.com/andremograph" target="_blank" rel="noreferrer" className="p-3 text-white/30 hover:text-[#C5A059] hover:bg-white/5 rounded-full transition-all duration-300 hover:scale-110">
              <Twitter size={18} />
            </a>
            <a href="https://www.instagram.com/andremograph/" target="_blank" rel="noreferrer" className="p-3 text-white/30 hover:text-[#C5A059] hover:bg-white/5 rounded-full transition-all duration-300 hover:scale-110">
              <Instagram size={18} />
            </a>
            <a href="https://discord.gg/cuxrZACd" target="_blank" rel="noreferrer" className="p-3 text-white/30 hover:text-[#C5A059] hover:bg-white/5 rounded-full transition-all duration-300 hover:scale-110">
              <DiscordIcon size={18} />
            </a>
          </div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/20 font-bold text-center m-0 p-0 leading-none">© {new Date().getFullYear()} ANDREMOGRAPH</p>
        </footer>
      </div>
    </div>
  );
}