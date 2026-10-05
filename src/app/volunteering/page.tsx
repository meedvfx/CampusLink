"use client";

import React, { useState } from "react";
import { SITE_DATA, VolunteeringMission } from "@/data/siteData";

export default function VolunteeringPage() {
  const { volunteering } = SITE_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Toutes les missions" },
    { id: "Aide Alimentaire", label: "Aide Alimentaire" },
    { id: "Éducation & Jeunesse", label: "Éducation" },
    { id: "Environnement", label: "Environnement" },
  ];

  const filtered = volunteering.filter((m: VolunteeringMission) => {
    return selectedCategory === "all" || m.category === selectedCategory;
  });

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
          Engagement Solidaire
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Missions de Bénévolat Étudiant
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Améliorez votre français, rencontrez des habitants et donnez du sens à vos études. Le bénévolat régulier permet également de valider des crédits ECTS universitaires.
        </p>
      </div>

      {/* Filter and Official CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedCategory === cat.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <a
          href="https://www.jeveuxaider.gouv.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center gap-1 self-start sm:self-auto"
        >
          <span>Portail JeVeuxAider.gouv.fr</span>
          <span className="material-symbols-outlined text-[13px]">open_in_new</span>
        </a>
      </div>

      {/* Missions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((mission: VolunteeringMission) => (
          <div
            key={mission.id}
            className="p-5 rounded-xl border border-slate-200 bg-white flex flex-col justify-between gap-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  {mission.category}
                </span>
                <span className="text-[11px] text-slate-500">
                  ⏱️ {mission.commitment}
                </span>
              </div>

              <h3 className="font-bold text-slate-900 text-sm">
                {mission.title}
              </h3>

              <p className="text-xs text-slate-500">
                🏢 {mission.organization} • 📍 {mission.location}
              </p>

              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                {mission.description}
              </p>
            </div>

            <a
              href={mission.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center gap-1 pt-2 border-t border-slate-100"
            >
              <span>Participer / Candidater</span>
              <span className="material-symbols-outlined text-[12px]">open_in_new</span>
            </a>
          </div>
        ))}
      </div>

      {/* ECTS Academic Validation Tip */}
      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
          Reconnaissance universitaire & Crédits ECTS
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed">
          En France, la loi sur l'engagement étudiant permet aux universités d'accorder des points bonus ou des crédits ECTS facultatifs aux étudiants investis dans une association ou une mission civique. Renseignez-vous auprès de votre scolarité.
        </p>
      </div>
    </div>
  );
}
