import { Film, Briefcase, Package, GraduationCap, User } from "lucide-react";

export type CategoryKey = "ui" | "vfx" | "3d" | "scene" | "2d" | "color" | "brawl";
export type PanelKey = "showreel" | "work" | "about" | "pack" | "course";
export type Language = "en" | "pt" | "es" | "fr";

export interface Project {
  id: string; 
  title: string; 
  subtitle: string; 
  category: CategoryKey; 
  year: string; 
}

export const DICT = {
  en: {
    lang_name: "EN",
    nav_showreel: "Showreel", nav_work: "Work", nav_pack: "My Pack", nav_course: "Course", nav_about: "About Me",
    header_commissions: "Open to commissions", work_tag: "Selected Work", work_projects: "projects — click to open", scroll_explore: "← scroll to explore →",
    modal_prev: "Prev", modal_next: "Next", modal_view: "View Project", modal_waiting: "WAITING FOR FILE",
    cat_ui: "UI Animation", cat_ui_desc: "Apps & Technology", cat_vfx: "VFX", cat_vfx_desc: "Cinematic Effects", cat_3d: "3D Motion", cat_3d_desc: "3D & Product", cat_scene: "Scene Comp", cat_scene_desc: "Scene Compositing", 
    cat_2d: "Motion Graphics", cat_2d_desc: "Social & Typography", 
    cat_color: "Color Grading", cat_color_desc: "Professional Finish", cat_brawl: "Brawl Stars", cat_brawl_desc: "Esports & Gaming Edits",
    about_tag: "Profile", about_title_1: "Editor &", about_title_2: "Motion Designer.", about_subtitle_1: "Translating technical precision into", about_subtitle_2: "high-fidelity visual experiences.", about_body: "Forged in high-stakes competitive environments, my approach is driven by a relentless attention to detail and a results-first mindset.", about_core: "Core Expertise", about_arsenal: "Technical Arsenal", about_trusted: "Trusted By / Global Partners",
    coming_dev: "Development in progress", coming_soon: "COMING SOON", pack_subtitle: "Digital Assets", course_subtitle: "Premium Course",
    btn_see_work: "Explore Projects", btn_back_work: "Back to Portfolio", btn_watch_edits: "Watch Edits",
    btn_see_more_projects: "See More Projects", btn_waiting_showreel_status: "WAITING FOR FILE", btn_selected_reel: "Selected Reel", btn_my_visuals: "My Visuals",
  },
  pt: {
    lang_name: "PT",
    nav_showreel: "Showreel", nav_work: "Trabalhos", nav_pack: "Meu Pack", nav_course: "Curso", nav_about: "Sobre Mim",
    header_commissions: "Disponível para projetos", work_tag: "Trabalhos Selecionados", work_projects: "projetos — clique para abrir", scroll_explore: "← arraste para explorar →",
    modal_prev: "Anterior", modal_next: "Próximo", modal_view: "Ver Projeto", modal_waiting: "AGUARDANDO ARQUIVO",
    cat_ui: "Animação de UI", cat_ui_desc: "Apps & Tecnologia", cat_vfx: "VFX", cat_vfx_desc: "Efeitos Cinematográficos", cat_3d: "Motion 3D", cat_3d_desc: "3D & Produtos", cat_scene: "Composição", cat_scene_desc: "Montagem de Cenas", 
    cat_2d: "Motion Graphics", cat_2d_desc: "Social & Tipografia", 
    cat_color: "Color Grading", cat_color_desc: "Acabamento Profissional", cat_brawl: "Brawl Stars", cat_brawl_desc: "Esports & Gaming Edits",
    about_tag: "Perfil", about_title_1: "Editor &", about_title_2: "Motion Designer.", about_subtitle_1: "Traduzindo precisão técnica em", about_subtitle_2: "experiências visuais de alta fidelidade.", about_body: "Forjado em ambientes competitivos de alto nível, minha abordagem é guiada por uma atenção implacável aos detalhes e foco em resultados.", about_core: "Especialidades", about_arsenal: "Arsenal Técnico", about_trusted: "Parceiros Globais",
    coming_dev: "Desenvolvimento em andamento", coming_soon: "EM BREVE", pack_subtitle: "Ativos Digitais", course_subtitle: "Curso Premium",
    btn_see_work: "Explorar Projetos", btn_back_work: "Voltar ao Portfólio", btn_watch_edits: "Ver Edições",
    btn_see_more_projects: "Explorar Projetos", btn_waiting_showreel_status: "AGUARDANDO ARQUIVO", btn_selected_reel: "Selected Reel", btn_my_visuals: "My Visuals",
  },
  es: {
    lang_name: "ES",
    nav_showreel: "Showreel", nav_work: "Proyectos", nav_pack: "Mi Pack", nav_course: "Curso", nav_about: "Sobre Mí",
    header_commissions: "Disponible para proyectos", work_tag: "Trabajos Seleccionados", work_projects: "proyectos — clic para abrir", scroll_explore: "← desliza para explorar →",
    modal_prev: "Anterior", modal_next: "Siguiente", modal_view: "Ver Proyecto", modal_waiting: "ESPERANDO ARCHIVO",
    cat_ui: "Animación UI", cat_ui_desc: "Apps y Tecnología", cat_vfx: "VFX", cat_vfx_desc: "Efectos Cinematográficos", cat_3d: "Motion 3D", cat_3d_desc: "3D y Productos", cat_scene: "Composición", cat_scene_desc: "Montaje de Escenas", 
    cat_2d: "Motion Graphics", cat_2d_desc: "Social y Tipografía", 
    cat_color: "Color Grading", cat_color_desc: "Acabado Profesional", cat_brawl: "Brawl Stars", cat_brawl_desc: "Esports & Gaming Edits",
    about_tag: "Perfil", about_title_1: "Editor &", about_title_2: "Motion Designer.", about_subtitle_1: "Traduciendo precisión técnica en", about_subtitle_2: "experiencias visuales de alta fidelidad.", about_body: "Forjado en entornos competitivos de alto nivel, mi enfoque está impulsado por una atención implacable a los detalles.", about_core: "Especialidades", about_arsenal: "Arsenal Técnico", about_trusted: "Socios Globales",
    coming_dev: "Desarrollo em progresso", coming_soon: "PRÓXIMAMENTE", pack_subtitle: "Activos Digitales", course_subtitle: "Curso Premium",
    btn_see_work: "Explorar Proyectos", btn_back_work: "Volver al Portafolio", btn_watch_edits: "Ver Ediciones",
    btn_see_more_projects: "Explorar Proyectos", btn_waiting_showreel_status: "ESPERANDO ARCHIVO", btn_selected_reel: "Selected Reel", btn_my_visuals: "My Visuals",
  },
  fr: {
    lang_name: "FR",
    nav_showreel: "Showreel", nav_work: "Travaux", nav_pack: "Mon Pack", nav_course: "Cours", nav_about: "À Propos",
    header_commissions: "Ouvert aux projets", work_tag: "Travaux Sélectionnés", work_projects: "projets — cliquez pour ouvrir", scroll_explore: "← glissez pour explorer →",
    modal_prev: "Précédent", modal_next: "Suivant", modal_view: "Voir le Projet", modal_waiting: "EN ATTENTE DE FICHIER",
    cat_ui: "Animation UI", cat_ui_desc: "Apps & Technologie", cat_vfx: "VFX", cat_vfx_desc: "Effets Cinématographiques", cat_3d: "Motion 3D", cat_3d_desc: "3D & Produits", cat_scene: "Composition", cat_scene_desc: "Montage de Scènes", 
    cat_2d: "Motion Graphics", cat_2d_desc: "Social & Typographie", 
    cat_color: "Color Grading", cat_color_desc: "Finition Professionnelle", cat_brawl: "Brawl Stars", cat_brawl_desc: "Esports & Gaming Edits",
    about_tag: "Profil", about_title_1: "Monteur &", about_title_2: "Motion Designer.", about_subtitle_1: "Traduire la précision technique en", about_subtitle_2: "expériences visuelles haute fidélité.", about_body: "Forgé dans des environnements compétitifs, mon approche est motivée par uma atenção implacable aux détails.", about_core: "Expertise", about_arsenal: "Arsenal Technique", about_trusted: "Partenaires Mondiaux",
    coming_dev: "Développement en cours", coming_soon: "BIENTÔT DISPONIBLE", pack_subtitle: "Actifs Numériques", course_subtitle: "Cours Premium",
    btn_see_work: "Explorer les Projets", btn_back_work: "Retour au Portfolio", btn_watch_edits: "Voir les Éditions",
    btn_see_more_projects: "Explorer les Projets", btn_waiting_showreel_status: "EN ATTENTE DE FICHIER", btn_selected_reel: "Selected Reel", btn_my_visuals: "My Visuals",
  }
} as const;

export type TranslationSchema = typeof DICT.en;
export type DictKey = keyof typeof DICT.en;

export interface CategoryData {
  key: CategoryKey;
  emoji: string;
  dictTitle: DictKey;
  dictDesc: DictKey;
}

export const CATEGORIES: CategoryData[] = [
  { key: "2d", emoji: "✏️", dictTitle: "cat_2d", dictDesc: "cat_2d_desc" },
  { key: "ui", emoji: "🎯", dictTitle: "cat_ui", dictDesc: "cat_ui_desc" },
  { key: "brawl", emoji: "🎮", dictTitle: "cat_brawl", dictDesc: "cat_brawl_desc" },
  { key: "vfx", emoji: "🎬", dictTitle: "cat_vfx", dictDesc: "cat_vfx_desc" },
  { key: "3d", emoji: "🧊", dictTitle: "cat_3d", dictDesc: "cat_3d_desc" },
  { key: "scene", emoji: "🎞️", dictTitle: "cat_scene", dictDesc: "cat_scene_desc" },
  { key: "color", emoji: "🎨", dictTitle: "cat_color", dictDesc: "cat_color_desc" },
];

export const MENU_ITEMS_KEYS = [
  { id: "showreel" as PanelKey, dictKey: "nav_showreel" as DictKey, icon: Film },
  { id: "work" as PanelKey, dictKey: "nav_work" as DictKey, icon: Briefcase },
  { id: "pack" as PanelKey, dictKey: "nav_pack" as DictKey, icon: Package },
  { id: "course" as PanelKey, dictKey: "nav_course" as DictKey, icon: GraduationCap },
  { id: "about" as PanelKey, dictKey: "nav_about" as DictKey, icon: User },
];

export const PROJECTS: Project[] = [
  { id: "2d-typography", title: "Motion 01", subtitle: "", category: "2d", year: "2025" },
  { id: "2d-motion-logo", title: "Motion 02", subtitle: "", category: "2d", year: "2025" },
  { id: "2d-jornada-ceo", title: "Motion 03", subtitle: "", category: "2d", year: "2025" },
  { id: "2d-ai-doping", title: "Motion 04", subtitle: "", category: "2d", year: "2026" },
  { id: "2d-1", title: "Motion 05", subtitle: "", category: "2d", year: "2025" },
  { id: "ui-spotify", title: "UI 01", subtitle: "", category: "ui", year: "2025" },
  { id: "ui-system-update", title: "UI 02", subtitle: "", category: "ui", year: "2026" },
  { id: "ui-1", title: "UI 03", subtitle: "", category: "ui", year: "2025" },
  { id: "ui-2", title: "UI 04", subtitle: "", category: "ui", year: "2025" },
  { id: "vfx-1", title: "VFX 01", subtitle: "", category: "vfx", year: "2025" },
  { id: "vfx-2", title: "VFX 02", subtitle: "", category: "vfx", year: "2025" },
  { id: "3d-1", title: "3D 01", subtitle: "", category: "3d", year: "2025" },
  { id: "3d-2", title: "3D 02", subtitle: "", category: "3d", year: "2025" },
  { id: "scene-1", title: "Scene 01", subtitle: "", category: "scene", year: "2025" },
  { id: "scene-2", title: "Scene 02", subtitle: "", category: "scene", year: "2025" },
  { id: "color-1", title: "Color 01", subtitle: "", category: "color", year: "2025" },
  { id: "color-2", title: "Color 02", subtitle: "", category: "color", year: "2025" },
  { id: "brawl-guia", title: "Esports 01", subtitle: "", category: "brawl", year: "2025" },
  { id: "brawl-lele", title: "Esports 02", subtitle: "", category: "brawl", year: "2025" },
  { id: "brawl-mundial-p2", title: "Esports 03", subtitle: "", category: "brawl", year: "2026" },
  { id: "brawl-s1", title: "Esports 04", subtitle: "", category: "brawl", year: "2025" },
  { id: "brawl-v1", title: "Esports 05", subtitle: "", category: "brawl", year: "2025" },
  { id: "brawl-v2", title: "Esports 06", subtitle: "", category: "brawl", year: "2025" },
  { id: "brawl-guia-02", title: "Esports 07", subtitle: "", category: "brawl", year: "2026" },
  { id: "2d-dolar", title: "Motion 06", subtitle: "", category: "2d", year: "2026" },
];