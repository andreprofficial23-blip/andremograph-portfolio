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

  // Navegação Inteligente (Mouse e Touch)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || panel !== "work" || selectedProject || isMenuOpen || isLangOpen) return;
    let isThrottled = false;

    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth < 768) return; // Desativa scroll vertical p/ horizontal no mobile
      const isVertical = Math.abs(e.deltaY) > Math.abs(e.deltaX);
      const hasHScroll = container.scrollWidth > container.clientWidth;
      const isAtEnd = hasHScroll ? Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth - 5 : true;
      const isAtStart = hasHScroll ? container.scrollLeft <= 5 : true;

      if (isVertical && e.deltaY !== 0 && hasHScroll) {
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
    <div className="min-h-screen bg-[#050506] text-white overflow-x-hidden flex flex-col font-sans selection:bg-[#C5A059]/30 relative">
      {/* Background Video Fix */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <video className="absolute inset-0 h-full w-full object-cover opacity-40 md:opacity-100" src="/background/BG.mp4" autoPlay muted loop playsInline preload="auto" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050506] via-transparent to-[#050506]" />
        <div className="absolute inset-0 noise-layer opacity-20" />
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} allInCategory={filtered} onClose={() => setSelectedProject(null)} onNext={() => navigateProject(1)} onPrev={() => navigateProject(-1)} hasNext={hasNext} hasPrev={hasPrev} onSelectDot={setSelectedProject} lang={lang} />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header Responsivo */}
        <header className="fixed top-0 w-full px-6 py-5 md:px-20 md:py-8 flex justify-between items-center z-[150] backdrop-blur-sm md:backdrop-blur-none pointer-events-auto">
          <span className="text-[10px] md:text-[11px] tracking-[0.4em] uppercase font-bold text-white/90">andremograph</span>
          
          <div className="flex items-center gap-3 md:gap-5 relative">
            <div className="hidden lg:flex flex-col items-end justify-center mr-2">
              <span className="text-[11px] tracking-[0.4em] uppercase font-bold text-white/90 leading-none mb-1">GMT-3 | {localTime}</span>
              <span className="text-[9px] text-[#C5A059] tracking-[0.3em] uppercase opacity-80 leading-none mt-1">{t.header_commissions}</span>
            </div>
            
            <button onClick={() => { setIsLangOpen(!isLangOpen); setIsMenuOpen(false); }} className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
              <Globe size={12} className="text-[#C5A059]" />
              <span className="text-[9px] font-bold ml-1">{t.lang_name}</span>
            </button>
            <AnimatePresence>{isLangOpen && <Dropdown type="lang" onClose={() => setIsLangOpen(false)} currentLang={lang} setLang={setLang} lang={lang} />}</AnimatePresence>

            <button onClick={() => { setIsMenuOpen(!isMenuOpen); setIsLangOpen(false); }} className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
              {isMenuOpen ? <CloseIcon size={16} /> : <Menu size={16} />}
            </button>
            <AnimatePresence>{isMenuOpen && <Dropdown type="menu" onClose={() => setIsMenuOpen(false)} currentPanel={panel} setPanel={setPanel} lang={lang} />}</AnimatePresence>
          </div>
        </header>

        {/* Floating Dock (Ajustado p/ Mobile) */}
        <div className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-[100] flex items-center p-1 rounded-full border border-white/10 bg-[#050506]/90 backdrop-blur-xl shadow-2xl">
          <button onClick={() => setPanel(prevPanelItem.id)} className="p-3 md:px-5 md:py-3 rounded-full hover:bg-white/10 transition-all flex items-center gap-3">
            <ChevronLeft size={16} className="text-[#C5A059]" />
            <span className="hidden md:block text-[10px] tracking-[0.2em] uppercase font-bold text-white/60">{(t as any)[prevPanelItem.dictKey]}</span>
          </button>
          <div className="w-[1px] h-4 bg-white/10 mx-1" />
          <button onClick={() => setPanel(nextPanelItem.id)} className="p-3 md:px-5 md:py-3 rounded-full hover:bg-white/10 transition-all flex items-center gap-3">
            <span className="hidden md:block text-[10px] tracking-[0.2em] uppercase font-bold text-white/60">{(t as any)[nextPanelItem.dictKey]}</span>
            <ChevronRight size={16} className="text-[#C5A059]" />
          </button>
        </div>

        <main className="flex-1 flex flex-col z-10 pt-28 px-6 md:px-20 pb-40 justify-center">
          <div ref={mainAreaRef} className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-[1700px] mx-auto w-full min-h-[60vh]">
            
            {/* Sidebar (Agora aparece como menu horizontal no Mobile) */}
            <nav className="w-full md:w-auto md:min-w-[260px] flex md:flex-col gap-4 md:gap-8 overflow-x-auto no-scrollbar md:self-start mt-4 md:mt-12 sticky top-24 md:relative z-[90]">
              {panel === "work" && currentCategories.map((cat) => (
                <button key={cat.key} onClick={() => { setActiveWork(cat.key); setSelectedProject(null); }} className="shrink-0 flex flex-col text-left">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className={`h-[2px] transition-all duration-500 ${activeWork === cat.key ? "w-6 md:w-10 bg-[#C5A059]" : "w-2 md:w-4 bg-white/10"}`} />
                    <span className={`text-[10px] md:text-sm tracking-[0.2em] uppercase font-bold transition-all ${activeWork === cat.key ? "text-white scale-105" : "text-white/30"}`}>
                      {(t as any)[cat.dictTitle]}
                    </span>
                  </div>
                  <div className={`hidden md:block overflow-hidden transition-all duration-500 ${activeWork === cat.key ? "h-auto opacity-100" : "h-0 opacity-0"}`}>
                    <span className="text-[9px] text-white/40 tracking-[0.2em] uppercase ml-14 block mt-2">{(t as any)[cat.dictDesc]}</span>
                  </div>
                </button>
              ))}
            </nav>

            {/* Projetos & Modais */}
            <div className="flex-1 w-full relative flex flex-col justify-center h-full">
              {panel === "showreel" && <ShowreelPanel lang={lang} onNavigate={setPanel} />}
              {panel === "about"    && <AboutPanel lang={lang} onNavigate={setPanel} />}
              {panel === "pack"     && <ComingSoonPanel title={t.nav_pack.toUpperCase()} subtitleKey="pack_subtitle" lang={lang} onNavigate={setPanel} />}
              {panel === "course"   && <ComingSoonPanel title={t.nav_course.toUpperCase()} subtitleKey="course_subtitle" lang={lang} onNavigate={setPanel} />}

              {panel === "work" && (
                <div className="flex flex-col w-full mt-4">
                  <div className="mb-4 md:mb-6">
                    <p className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#C5A059] font-bold mb-1">{activeWork === "brawl" ? "Esports Background" : t.work_tag}</p>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tighter text-white/90">{(t as any)[currentCategories.find((c) => c.key === activeWork)?.dictTitle || ""]}</h2>
                    <p className="text-[11px] md:text-sm text-white/30 mt-1">{filtered.length} {t.work_projects}</p>
                  </div>

                  <div ref={scrollContainerRef} className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar py-4 snap-x snap-mandatory scroll-smooth pb-10">
                    <AnimatePresence mode="popLayout">
                      {filtered.map((p) => (
                        <motion.div key={p.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="snap-start h-full">
                          <ProjectCard p={p} onClick={setSelectedProject} lang={lang} getEmoji={getCategoryEmoji} />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                  <p className="text-[8px] md:text-[9px] tracking-[0.3em] uppercase text-white/20 mt-2 font-bold text-center">{t.scroll_explore}</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}