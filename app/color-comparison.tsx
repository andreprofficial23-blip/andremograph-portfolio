"use client";
import Image from "next/image";
import { useState } from "react";
import type { ColorStudy } from "./color-studies";

export default function ColorComparison({ study }: { study: ColorStudy }) {
  const [position, setPosition] = useState(50);
  return <article className="color-study color-study-combined">
    <div className="color-study-media">
      <div className="color-study-pair">
        <p className="eyebrow">01 / Do bruto à edição final</p>
        <div className="color-compare" style={{ aspectRatio: "9/16" }}>
          <Image src={study.afterImage} alt={study.title + ": edição final"} fill sizes="(max-width: 600px) 85vw, 340px" quality={90} />
          <div className="color-before" style={{ clipPath: "inset(0 " + (100 - position) + "% 0 0)" }}><Image src={study.beforeImage} alt={study.title + ": imagem original"} fill sizes="(max-width: 600px) 85vw, 340px" quality={90} /></div>
          <span className="compare-label before-label">Antes</span><span className="compare-label after-label">Depois</span>
          <span className="compare-line" style={{ left: position + "%" }} aria-hidden="true"><span>↔</span></span>
        </div>
        <label className="compare-control">Deslize para comparar<input type="range" min="0" max="100" value={position} onChange={event => setPosition(Number(event.target.value))} aria-label={"Comparar antes e depois: " + study.title} aria-valuetext={position + "% da imagem original"} /></label>
      </div>
      <div className="color-study-pair">
        <p className="eyebrow">02 / A abertura em movimento</p>
        <video className="color-preview" src={study.video} poster={study.poster} controls playsInline preload="none" aria-label={"Assistir abertura de " + study.title} />
        <p className="color-media-note">12 segundos · Edição, cor e motion</p>
      </div>
    </div>
    <h3>{study.title}</h3><p>{study.description}</p>
    <p className="color-credit">Captação de terceiros. Pós-produção por André. A imagem final também inclui os elementos da edição.</p>
  </article>;
}
