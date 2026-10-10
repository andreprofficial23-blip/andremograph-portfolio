export type ColorStudy = { id: string; title: string; description: string; video: string; poster: string; beforeImage: string; afterImage: string; capturedByJose?: boolean; };
// Opening excerpts from the final edits, including André's original motion work.
export const colorStudies: ColorStudy[] = [{
  id: "alice", title: "Alice — presença e naturalidade",
  capturedByJose: true,
  description: "Tons de pele naturais, contraste equilibrado e tipografia em movimento para dar presença à mensagem.",
  video: "/color/alice-direct.mp4", poster: "/color/alice-direct-poster.jpg", beforeImage: "/color/alice-verified-before.jpg", afterImage: "/color/alice-verified-after.jpg",
}, {
  id: "daiane", title: "Daiane — uma imagem com mais força",
  capturedByJose: true,
  description: "Uma imagem mais marcante, com luz, contraste e animações que acompanham a fala e destacam o que importa.",
  video: "/color/daiane-direct.mp4", poster: "/color/daiane-direct-poster.jpg", beforeImage: "/color/daiane-verified-before.jpg", afterImage: "/color/daiane-verified-after.jpg",
}, {
  id: "bruna", title: "Bruna — luz que acolhe",
  capturedByJose: true,
  description: "Cor, ritmo e textos animados em uma abertura que apresenta a história com delicadeza.",
  video: "/color/bruna-direct.mp4", poster: "/color/bruna-direct-poster.jpg", beforeImage: "/color/bruna-verified-before.jpg", afterImage: "/color/bruna-verified-after.jpg",
}];
