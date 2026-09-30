"use client";

import { useState } from "react";
import ColorComparison from "./color-comparison";
import type { ColorStudy } from "./color-studies";

export default function ColorGallery({ studies }: { studies: ColorStudy[] }) {
  const [selected, setSelected] = useState(studies[0].id);
  const study = studies.find(item => item.id === selected) ?? studies[0];
  return <div className="color-gallery">
    <div className="color-picker" role="group" aria-label="Escolher projeto de color grading">
      {studies.map(item => <button key={item.id} type="button" aria-pressed={item.id === selected} onClick={() => setSelected(item.id)}>{item.title.split(" — ")[0]}</button>)}
    </div>
    <ColorComparison key={study.id} study={study} />
  </div>;
}
