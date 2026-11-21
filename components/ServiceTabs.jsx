"use client";
import { useState } from "react";

const SERVICES = [
  { id: "bilan", label: "Bilan du sourire", text: "Un examen complet, une radio panoramique et 3D si nécessaire, puis un plan de soins clair avant de commencer." },
  { id: "prevention", label: "Soins préventifs", text: "Détartrage, polissage, conseils d’hygiène et suivi régulier pour garder des dents saines." },
  { id: "esthetique", label: "Dentisterie esthétique", text: "Blanchiment, facettes et restaurations discrètes pour un sourire naturel." },
  { id: "restauratif", label: "Soins restaurateurs", text: "Caries, couronnes, bridges et traitements de racine, avec empreintes numériques." },
  { id: "implants", label: "Implants dentaires", text: "Remplacement des dents manquantes, planifié grâce à l’imagerie 3D du cabinet." },
];

export default function ServiceTabs() {
  const [active, setActive] = useState(SERVICES[0].id);
  const current = SERVICES.find((s) => s.id === active);
  return (
    <div className="tabs">
      <div className="tab-list" role="tablist" aria-label="Nos soins">
        {SERVICES.map((s) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={s.id === active}
            className={s.id === active ? "tab on" : "tab"}
            onClick={() => setActive(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>
      <p className="tab-panel" role="tabpanel">{current.text}</p>
    </div>
  );
}
