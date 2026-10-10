"use client";
import Image from "next/image";
import { useState, type PointerEvent, type KeyboardEvent } from "react";
import type { ColorStudy } from "./color-studies";
import { CaptureCredit } from "./collaboration";

export default function ColorComparison({ study }: { study: ColorStudy }) {
  const [position, setPosition] = useState(50);
  function updatePosition(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    setPosition(Math.round(Math.max(0, Math.min(100, (event.clientX - bounds.left) / bounds.width * 100))));
  }
  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const steps: Record<string, number> = { ArrowLeft: -5, ArrowDown: -5, ArrowRight: 5, ArrowUp: 5 };
    if (event.key in steps) { event.preventDefault(); setPosition(value => Math.max(0, Math.min(100, value + steps[event.key]))); }
    if (event.key === "Home" || event.key === "End") { event.preventDefault(); setPosition(event.key === "Home" ? 0 : 100); }
  }
  return <article className="color-study color-study-combined">
    <div className="color-study-media">
      <div className="color-study-pair">
        <p className="eyebrow">01 / Do bruto à edição final</p>
        <div className="color-compare" style={{ aspectRatio: "9/16" }} role="slider" tabIndex={0} aria-label={"Comparar antes e depois: " + study.title} aria-valuemin={0} aria-valuemax={100} aria-valuenow={position} aria-valuetext={position + "% da imagem original"} aria-orientation="horizontal" onKeyDown={onKeyDown}
          onPointerDown={event => { if (event.button !== 0) return; event.currentTarget.setPointerCapture(event.pointerId); event.currentTarget.focus({ preventScroll: true }); updatePosition(event); }}
          onPointerMove={event => { if (event.currentTarget.hasPointerCapture(event.pointerId)) updatePosition(event); }}
          onPointerUp={event => { if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); }}>
          <Image src={study.afterImage} alt={study.title + ": edição final"} fill sizes="(max-width: 600px) 85vw, 340px" quality={90} draggable={false} />
          <div className="color-before" style={{ clipPath: "inset(0 " + (100 - position) + "% 0 0)" }}><Image src={study.beforeImage} alt={study.title + ": imagem original"} fill sizes="(max-width: 600px) 85vw, 340px" quality={90} draggable={false} /></div>
          <span className="compare-label before-label">Antes</span><span className="compare-label after-label">Depois</span>
          <span className="compare-line" style={{ left: position + "%" }} aria-hidden="true"><span>↔</span></span>
        </div>
      </div>
      <div className="color-study-pair">
        <p className="eyebrow">02 / A abertura em movimento</p>
        <video className="color-preview" src={study.video} poster={study.poster} controls playsInline preload="none" aria-label={"Assistir abertura de " + study.title} />
        <p className="color-media-note">12 segundos · Edição, cor e motion</p>
      </div>
    </div>
    <h3>{study.title}</h3><p>{study.description}</p>
    <p className="color-credit">{study.capturedByJose ? <CaptureCredit /> : "Captação de terceiros."} Pós-produção por André. A imagem final também inclui os elementos da edição.</p>
  </article>;
}
