export type ColorStudy = {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  aspectRatio?: string;
};

// Real source frames paired with the corresponding final edit.
export const colorStudies: ColorStudy[] = [{
  id: "alice",
  title: "Alice — presença e naturalidade",
  description: "Tons de pele naturais, contraste equilibrado e cores que dão presença à imagem sem perder a delicadeza da luz.",
  beforeImage: "/color/alice-before.jpg",
  afterImage: "/color/alice-after.jpg",
  aspectRatio: "9/16",
}, {
  id: "daiane",
  title: "Daiane — uma imagem com mais força",
  description: "Luz, contraste e tons de pele para uma presença mais marcante. O frame final também inclui os textos da edição.",
  beforeImage: "/color/daiane-before.jpg",
  afterImage: "/color/daiane-after.jpg",
  aspectRatio: "9/16",
}, {
  id: "bruna",
  title: "Bruna — luz que acolhe",
  description: "Uma atmosfera suave, com calor nos tons e profundidade nas sombras. Compare o bruto com a imagem final, incluindo a legenda da edição.",
  beforeImage: "/color/bruna-before.jpg",
  afterImage: "/color/bruna-after.jpg",
  aspectRatio: "9/16",
}, {
  id: "marcia-andreia",
  title: "Márcia Andréia — do bruto à imagem final",
  description: "Contraste, luz e tons de pele em uma cena de consultório. Compare o frame original com a edição final, que também inclui a legenda do vídeo.",
  beforeImage: "/color/marcia-before.jpg",
  afterImage: "/color/marcia-after.jpg",
  aspectRatio: "9/16",
}];
