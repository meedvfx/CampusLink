"use client";

import React, { useState } from "react";
import { SITE_DATA, OfficialResource } from "@/data/siteData";

export default function ResourcesPage() {
  const { officialResources } = SITE_DATA;
  const [selectedCat, setSelectedCat] = useState<string>("all");
  const [search, setSearch] = useState<string>("");

  const categories = [
    { id: "all", label: "Tous les portails" },
    { id: "Séjour & Visas", label: "Séjour & Visas" },
    { id: "Logement & Resto U", label: "Logement & CROUS" },
    { id: "Santé & Sécu", label: "Santé" },
    { id: "Aides au Logement", label: "CAF" },
    { id: "Emploi & Stages", label: "Emploi" },
  ];

  const filtered = officialResources.filter((res: OfficialResource) => {
    const matchesCat = selectedCat === "all" || res.category === selectedCat;
    const matchesSearch =
      res.name.toLowerCase().includes(search.toLowerCase()) ||
      res.description.toLowerCase().includes(search.toLowerCase()) ||
      res.acronym.toLowerCase().includes(search.toLowerCase()) ||
      res.services.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
          Institutions de la République Française
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Annuaire des Portails Officiels de l'État
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Accédez directement aux sites officiels des ministères et organismes publics français. Zéro intermédiaire commercial ni frais cachés.
        </p>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCat(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedCat === cat.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative min-w-[220px]">
          <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">
            search
          </span>
          <input
            type="text"
            placeholder="Rechercher par nom, ANEF, CAF..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500"
          />
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((res: OfficialResource) => (
          <div
            key={res.id}
            className="p-5 rounded-xl border border-slate-200 bg-white flex flex-col justify-between gap-4"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-blue-700 bg-blue-50 px-2 py-0.5 rounded text-xs">
                  {res.acronym}
                </span>
                <span className="text-[11px] text-slate-500">
                  {res.category}
                </span>
              </div>

              <h2 className="font-bold text-slate-900 text-sm">
                {res.name}
              </h2>

              <p className="text-xs text-slate-600 leading-relaxed">
                {res.description}
              </p>

              <div className="pt-2 border-t border-slate-100">
                <span className="text-[11px] font-semibold text-slate-700 block mb-1">
                  Services clés :
                </span>
                <ul className="text-[11px] text-slate-500 space-y-0.5 list-disc list-inside">
                  {res.services.map((svc, idx) => (
                    <li key={idx} className="truncate">
                      {svc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center gap-1 pt-2 border-t border-slate-100"
            >
              <span>Accéder au portail officiel</span>
              <span className="material-symbols-outlined text-[13px]">open_in_new</span>
            </a>
          </div>
        ))}
      </div>

      {/* Anti-Scam Verification Notice */}
      <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 space-y-1.5 text-xs text-amber-900">
        <div className="flex items-center gap-1.5 font-bold">
          <span className="material-symbols-outlined text-[16px] text-amber-700">security</span>
          <span>Rappel de sécurité anti-fraude</span>
        </div>
        <p className="leading-relaxed text-amber-800">
          Les services de l'État français utilisent exclusivement le domaine <strong>.gouv.fr</strong>. Aucune démarche d'affiliation à la Sécurité Sociale (Ameli), de demande d'APL (CAF) ou de caution Visale n'est payante. Ne payez jamais d'intermédiaire privé pour ces démarches gratuites.
        </p>
      </div>
    </div>
  );
}
