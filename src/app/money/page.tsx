"use client";

import React, { useState } from "react";
import { SITE_DATA } from "@/data/siteData";

export default function MoneyPage() {
  const { financialAid } = SITE_DATA;
  const [rent, setRent] = useState<number>(450);
  const [housingType, setHousingType] = useState<"crous" | "private" | "coloc">("crous");
  const [isScholarship, setIsScholarship] = useState<boolean>(false);

  // Simplified calculation based on French CAF rules
  const calculateApl = () => {
    let base = 0;
    if (housingType === "crous") {
      base = Math.min(rent * 0.55, 195);
    } else if (housingType === "private") {
      base = Math.min(rent * 0.42, 215);
    } else {
      base = Math.min(rent * 0.38, 160);
    }
    if (isScholarship) {
      base = Math.min(base + 35, rent - 50);
    }
    return Math.round(base);
  };

  const estimatedApl = calculateApl();
  const netRent = Math.max(0, rent - estimatedApl);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
          Finances & Allocations
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Aides Financières, CAF (APL) & Budget
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Estimez votre allocation logement APL, découvrez les repas CROUS à 1 € et le budget moyen nécessaire pour vivre sereinement en France.
        </p>
      </div>

      {/* Interactive APL Calculator */}
      <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Simulateur d'aide au logement CAF (APL)
            </h2>
            <p className="text-xs text-slate-500">
              Estimation indicative pour un étudiant célibataire sans personnes à charge.
            </p>
          </div>
          <a
            href="https://www.caf.fr/allocataires/mes-services-en-ligne/estimer-vos-droits"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center gap-1"
          >
            <span>Simulateur complet CAF.fr</span>
            <span className="material-symbols-outlined text-[13px]">open_in_new</span>
          </a>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {/* Rent Slider */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-700 block">
              Loyer mensuel charges comprises : <strong className="text-blue-600">{rent} €</strong>
            </label>
            <input
              type="range"
              min={200}
              max={900}
              step={10}
              value={rent}
              onChange={(e) => setRent(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>

          {/* Housing Type */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700 block">
              Type de logement :
            </label>
            <select
              value={housingType}
              onChange={(e) => setHousingType(e.target.value as any)}
              className="w-full p-2 text-xs border border-slate-200 rounded-lg bg-slate-50 text-slate-800 focus:outline-hidden focus:border-blue-500"
            >
              <option value="crous">Résidence CROUS conventionnée</option>
              <option value="private">Studio / Appartement privé</option>
              <option value="coloc">Colocation</option>
            </select>
          </div>

          {/* Scholarship Toggle */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700 block">
              Statut boursier :
            </label>
            <button
              type="button"
              onClick={() => setIsScholarship(!isScholarship)}
              className={`w-full p-2 text-xs rounded-lg border font-medium text-left transition-colors flex items-center justify-between ${
                isScholarship
                  ? "bg-amber-50 border-amber-300 text-amber-900 font-semibold"
                  : "bg-slate-50 border-slate-200 text-slate-600"
              }`}
            >
              <span>{isScholarship ? "Boursier (échelon > 0)" : "Non-boursier"}</span>
              <span className="material-symbols-outlined text-[18px]">
                {isScholarship ? "check_circle" : "radio_button_unchecked"}
              </span>
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-lg bg-slate-50 text-center">
          <div>
            <span className="text-xs text-slate-500 block">Loyer brut</span>
            <span className="text-base font-bold text-slate-700">{rent} €</span>
          </div>
          <div>
            <span className="text-xs text-slate-500 block">APL CAF estimée</span>
            <span className="text-xl font-bold text-emerald-600">~{estimatedApl} €</span>
          </div>
          <div>
            <span className="text-xs text-slate-500 block">Loyer net restant</span>
            <span className="text-xl font-bold text-blue-700">{netRent} €</span>
          </div>
        </div>
      </div>

      {/* Key Financial Aids */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-slate-900">
          Les dispositifs d'aide financière en France
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {financialAid.aids.map((aid, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200 bg-white flex flex-col justify-between gap-3"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                  {aid.badge}
                </span>
                <h3 className="font-bold text-slate-900 text-sm mt-1">
                  {aid.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {aid.desc}
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  <strong>Éligibilité :</strong> {aid.who}
                </p>
              </div>

              <a
                href={aid.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center gap-1 pt-2 border-t border-slate-100"
              >
                <span>En savoir plus</span>
                <span className="material-symbols-outlined text-[12px]">open_in_new</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Budget Breakdown */}
      <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-4">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            Budget mensuel moyen d'un étudiant international
          </h2>
          <p className="text-xs text-slate-500">
            Estimation réaliste hors Paris (Nantes, Lyon, Lille, Toulouse, Bordeaux).
          </p>
        </div>

        <div className="divide-y divide-slate-100">
          {financialAid.monthlyBudgetAverage.map((item, idx) => (
            <div
              key={idx}
              className="py-2.5 flex items-center justify-between text-xs"
            >
              <span className="text-slate-700">{item.item}</span>
              <strong className="text-slate-900">{item.amount}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
