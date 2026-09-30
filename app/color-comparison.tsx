"use client";

import Image from "next/image";
import { useState } from "react";
import type { ColorStudy } from "./color-studies";

export default function ColorComparison({ study }: { study: ColorStudy }) {
  const [position, setPosition] = useState(50);
  return <article className="color-study">
    <div className="color-compare">
      <Image src={study.afterImage} alt={study.title + ": depois do tratamento de cor"} fill sizes="(max-width: 900px) 100vw, 70vw" />
      <div className="color-before" style={{ clipPath: "inset(0 " + (100 - position) + "% 0 0)" }}><Image src={study.beforeImage} alt={study.title + ": imagem antes do tratamento"} fill sizes="(max-width: 900px) 100vw, 70vw" /></div>
      <span className="compare-label before-label">Antes</span><span className="compare-label after-label">Depois</span>
      <span className="compare-line" style={{ left: position + "%" }} aria-hidden="true"><span>↔</span></span>
    </div>
    <label className="compare-control">Compare o tratamento de cor<input type="range" min="0" max="100" value={position} onChange={event => setPosition(Number(event.target.value))} aria-label={"Comparar antes e depois: " + study.title} aria-valuetext={position + "% da imagem original"} /></label>
    <h3>{study.title}</h3><p>{study.description}</p>
  </article>;
}
