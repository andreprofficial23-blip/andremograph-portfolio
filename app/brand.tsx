import Image from "next/image";

export default function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Andremograph, voltar ao início">
      <Image className="brand-mark" src="/brand/andremograph-mark.svg" width={58} height={32} alt="" priority />
      <span className="brand-wordmark">ANDRÉ<span>MO</span>GRAPH<span className="brand-dot">.</span></span>
    </a>
  );
}
