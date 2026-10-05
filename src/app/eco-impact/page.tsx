"use client";

import React, { useState } from "react";
import { SITE_DATA, WasteItem } from "@/data/siteData";

export default function EcoImpactPage() {
  const { wasteItems } = SITE_DATA;
  const [wasteQuery, setWasteQuery] = useState("");
  const [activeWaste, setActiveWaste] = useState<WasteItem>(wasteItems[0]);

  const handleSearchWaste = (query: string) => {
    setWasteQuery(query);
    const found = wasteItems.find(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.some((k) => k.includes(query.toLowerCase()))
    );
    if (found) {
      setActiveWaste(found);
    }
  };

  const binsGuide = [
    {
      name: "Bac Jaune (Emballages & Papiers)",
      color: "bg-amber-100 text-amber-900 border-amber-300",
      content: "Bouteilles et flacons en plastique, briques, cartons, boîtes de conserve, canettes, tous les papiers.",
      rule: "En vrac, bien vidés, inutile de les laver.",
    },
    {
      name: "Bac Vert / Colonne (Verre)",
      color: "bg-emerald-100 text-emerald-900 border-emerald-300",
      content: "Bouteilles en verre, pots de confiture, bocaux de conserve.",
      rule: "Sans bouchon ni couvercle métallique.",
    },
    {
      name: "Compost / Bio-déchets",
      color: "bg-lime-100 text-lime-900 border-lime-300",
      content: "Épluchures de légumes et fruits, marc de café, coquilles d'œufs, sachets de thé.",
      rule: "Dans les bacs de compostage partagés du campus.",
    },
    {
      name: "Bac DEEE & Déchèterie (Appareils électriques)",
      color: "bg-blue-100 text-blue-900 border-blue-300",
      content: "Smartphones, ordinateurs, câbles, petits appareils électroménagers, piles et batteries.",
      rule: "Ne JAMAIS jeter aux ordures normales (bornes en magasin).",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
          Transition Écologique
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Guide du Tri Sélectif & Éco-Gestes Campus
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          En France, le tri sélectif est généralisé. Apprenez où jeter vos emballages, appareils électroniques (DEEE) et textiles pour limiter l'impact environnemental.
        </p>
      </div>

      {/* Interactive "Où jeter ?" Tool */}
      <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Où jeter ? Moteur de tri immédiat
            </h2>
            <p className="text-xs text-slate-500">
              Tapez le nom d'un objet pour savoir instantanément dans quelle poubelle le déposer.
            </p>
          </div>
          <a
            href="https://agirpourlatransition.ademe.fr/particuliers/maison/dechets/que-faire-dechets"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center gap-1"
          >
            <span>Guide ADEME officiel</span>
            <span className="material-symbols-outlined text-[13px]">open_in_new</span>
          </a>
        </div>

        {/* Search input + Quick chips */}
        <div className="space-y-3">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">
              search
            </span>
            <input
              type="text"
              placeholder="Ex: ordinateur, carton, bouteille, pile, vêtement..."
              value={wasteQuery}
              onChange={(e) => handleSearchWaste(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-slate-400 text-[11px] mr-1">Suggestions :</span>
            {wasteItems.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setWasteQuery(item.name);
                  setActiveWaste(item);
                }}
                className={`px-2.5 py-1 rounded-lg text-xs transition-colors ${
                  activeWaste.name === item.name
                    ? "bg-emerald-700 text-white font-medium"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Waste Display */}
        {activeWaste && (
          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-sm font-bold text-slate-900">
                {activeWaste.name}
              </span>
              <span className="text-xs font-semibold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                Filière : {activeWaste.category}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-lg border border-emerald-100">
                <span className="text-slate-500 block text-[11px]">Destination :</span>
                <strong className="text-slate-800 block mt-0.5">{activeWaste.destination}</strong>
              </div>
              <div className="p-3 bg-white rounded-lg border border-emerald-100">
                <span className="text-slate-500 block text-[11px]">Consigne à appliquer :</span>
                <span className="text-slate-700 block mt-0.5">{activeWaste.action}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bins Reference Guide */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-slate-900">
          Les 4 filières de tri en France
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {binsGuide.map((bin, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200 bg-white space-y-2"
            >
              <h3 className="font-bold text-slate-900 text-xs">
                {bin.name}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Ce qu'on y dépose :</strong> {bin.content}
              </p>
              <p className="text-[11px] text-slate-500 italic pt-1">
                Règle : {bin.rule}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
