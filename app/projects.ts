export type Project = {
  id: string;
  title: string;
  category: "Edição" | "Motion" | "Casamentos" | "Gaming";
  subtitle: string;
  description: string;
  coverTitle: string;
  coverLabel: string;
  video: string;
  poster: string;
  format?: "portrait" | "vertical";
  posterAspectRatio?: string;
  note?: string;
};

const primary: Project[] = [
  { id: "jose-otavio", title: "Sanvit — uma nova fase", category: "Edição", subtitle: "José Otávio · Filmmaker e publicitário", description: "José Otávio apresenta a Sanvit em um vídeo que aproxima a marca de quem está assistindo. Minha edição combina sua fala com títulos em movimento e um ritmo leve para deixar a mensagem clara, do começo ao fim.", coverTitle: "Uma nova fase.", coverLabel: "SANVIT / JOSÉ OTÁVIO", video: "/videos-web/jose-otavio.mp4", poster: "/thumbnails/jose-otavio-hq.jpg" },
  { id: "adapta", title: "Adapta — Doping de trabalho", category: "Edição", subtitle: "Inteligência artificial, explicada de outro jeito", description: "Assim como cada comprimido tem uma função, a IA também muda de papel conforme o que você precisa fazer. Uma edição que usa essa comparação, exemplos visuais e motion para tornar a ideia fácil de entender — e interessante de assistir.", coverTitle: "IA com propósito.", coverLabel: "ADAPTA / DOPING DE TRABALHO", video: "/videos-web/adapta.mp4", poster: "/thumbnails/adapta-hq.jpg", format: "portrait" },
];

const archive: Project[] = [
  { id: "oceannus-d2c-summit", title: "Oceanus — D2C Summit", category: "Edição", subtitle: "Um encontro, muitas conexões", description: "Pessoas, conversas e ideias que dão vida ao D2C Summit. Uma edição para a Oceanus que costura depoimentos e momentos do evento, com ritmo, títulos em movimento e um tratamento de cor que une toda a história.", coverTitle: "Ideias que conectam.", coverLabel: "OCEANUS / D2C SUMMIT", video: "/videos-web/oceannus-d2c-summit-v2.mp4", poster: "/thumbnails/oceannus-d2c-summit-motion.png" },
  { id: "sao-paulo", title: "São Paulo, em outro ritmo", category: "Edição", subtitle: "David · Filme urbano", description: "Um passeio por São Paulo, entre pontos da cidade e pequenos momentos do caminho. Uma edição de atmosfera urbana, com cortes e música que dão outro ritmo à viagem.", coverTitle: "São Paulo.", coverLabel: "UM OUTRO RITMO", video: "/videos-web/sao-paulo.mp4", poster: "/thumbnails/sao-paulo-hq.jpg", format: "vertical" },
  { id: "edilane-marcos", title: "Edilane & Marcos", category: "Casamentos", subtitle: "Os detalhes antes do sim", description: "Sorrisos, preparativos e a expectativa de um dia importante. Um teaser de casamento que encontra emoção nos pequenos gestos e reúne esses momentos em uma lembrança para rever.", coverTitle: "Antes do sim.", coverLabel: "EDILANE & MARCOS", video: "/videos-web/edilane-marcos.mp4", poster: "/thumbnails/edilane-marcos-hq.jpg" },
  { id: "lupulo", title: "Um dia para guardar", category: "Casamentos", subtitle: "Lúpulo · Teaser de casamento", description: "Da preparação à celebração, um teaser feito de encontros, abraços e emoção. A edição acompanha o clima de cada momento para contar esse dia com delicadeza.", coverTitle: "Para guardar.", coverLabel: "LÚPULO / WEDDING FILM", video: "/videos-web/lupulo.mp4", poster: "/thumbnails/lupulo-hq.jpg" },
  { id: "color-motion", title: "Por dentro do motion", category: "Motion", subtitle: "Prévia de anúncio · Curso de color grading", description: "Motion criado para um anúncio de curso de color grading no Premiere Pro. A gravação mostra a peça na timeline, com tipografia, interfaces animadas e transições que transformam o conteúdo técnico em uma apresentação visual.", note: "Esta é uma gravação de tela do projeto. A exportação final ainda não está disponível.", coverTitle: "Por dentro do motion.", coverLabel: "COLOR GRADING / PRÉVIA DE ANÚNCIO", video: "/videos-web/color-motion.mp4", poster: "/thumbnails/color-motion-hq.jpg" },
  { id: "2d-typography", title: "Palavras que se movem", category: "Motion", subtitle: "Tipografia animada", description: "Um estudo de tipografia em movimento. Escala, profundidade e transições dão ritmo às palavras e fazem o texto participar da cena.", coverTitle: "Texto com presença.", coverLabel: "TIPOGRAFIA / MOTION", video: "/videos-web/2d-typography.mp4", poster: "/thumbnails/2d-typography-selected.png", posterAspectRatio: "16/9" },
  { id: "2d-motion-logo", title: "Uma marca ganha vida", category: "Motion", subtitle: "Animação de logo", description: "Um estudo de animação de logo, explorando a construção das letras e a entrada da marca. Uma assinatura em movimento para abrir ou encerrar uma peça.", coverTitle: "Marca em movimento.", coverLabel: "LOGO / MOTION", video: "/videos-web/2d-motion-logo.mp4", poster: "/thumbnails/2d-motion-logo-hq.jpg" },
  { id: "ui-spotify", title: "Dê play no movimento", category: "Motion", subtitle: "Estudo de interface · Spotify", description: "Um estudo inspirado na interface do Spotify. Música, capas e elementos de tela se conectam em uma sequência de animações e transições.", coverTitle: "Dê play.", coverLabel: "SPOTIFY / INTERFACE", video: "/videos-web/ui-spotify.mp4", poster: "/thumbnails/ui-spotify-selected.png", posterAspectRatio: "16/9" },
  { id: "ui-system-update", title: "Um novo jeito de entrar", category: "Motion", subtitle: "Animação de interface", description: "Uma sequência de interface em movimento, com janelas, cores e transições que transformam uma atualização de sistema em uma pequena experiência visual.", coverTitle: "System update.", coverLabel: "INTERFACE / MOTION", video: "/videos-web/ui-system-update.mp4", poster: "/thumbnails/ui-system-update-selected.png", posterAspectRatio: "668/591" },
  { id: "brawl-mundial-p2", title: "O ritmo da competição", category: "Gaming", subtitle: "Brawl Stars · Mundial", description: "Uma edição sobre o cenário competitivo de Brawl Stars, com imagens de campeonato e títulos animados que dão energia à narrativa.", coverTitle: "Em jogo.", coverLabel: "BRAWL STARS / MUNDIAL", video: "/videos-web/brawl-mundial-p2.mp4", poster: "/thumbnails/brawl-mundial-p2-selected.png", posterAspectRatio: "16/9" },
  { id: "brawl-guia", title: "Gameplay com direção", category: "Gaming", subtitle: "Brawl Stars · Guia visual", description: "Gameplay, explicações e elementos gráficos em uma edição vertical. O ritmo e os destaques visuais ajudam a acompanhar o conteúdo sem perder a energia do jogo.", coverTitle: "Além do gameplay.", coverLabel: "BRAWL STARS / GUIA", video: "/videos-web/brawl-guia.mp4", poster: "/thumbnails/brawl-guia-hq.jpg", format: "vertical" },
];

export const instagram = "https://www.instagram.com/andremograph/";
export const whatsapp = "https://wa.me/5582991748333";
export function projectContact(project?: Project) {
  const message = project ? "Olá, André! Vi o projeto “" + project.title + "” no seu portfólio e queria conversar sobre um vídeo." : "Olá, André! Vi seu portfólio e queria conversar sobre um projeto.";
  return whatsapp + "?text=" + encodeURIComponent(message);
}

export const featured: Project[] = [...primary, ...["color-motion", "sao-paulo"].map(id => archive.find(p => p.id === id)!)];
export const moreProjects = archive.filter(p => !["color-motion", "sao-paulo"].includes(p.id));

