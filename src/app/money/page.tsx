import React from "react";
import { SITE_DATA } from "@/data/siteData";

export default function MoneyPage() {
  const { financialAid } = SITE_DATA;
  const { crousFood, housingAidRules2026, otherAids } = financialAid;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
          Finances, Restauration & Aides Publiques (2026)
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Aides Financières, Bourses & Restauration
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Informations réglementaires officielles et à jour pour les étudiants en France : repas universitaires à partir de 1 €, règles 2026 des aides au logement et dispositifs d'urgence sociale.
        </p>
      </div>

      {/* 1. CROUS Food: Repas à 1 € pour tous depuis mai 2026 */}
      <section id="crous-food" className="p-6 rounded-xl border border-slate-200 bg-white space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div className="space-y-1">
            <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
              {crousFood.effectiveDate}
            </span>
            <h2 className="text-lg font-bold text-slate-900 mt-1">
              {crousFood.title}
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              {crousFood.subtitle}
            </p>
          </div>

          <a
            href={crousFood.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center gap-1 self-start sm:self-auto shrink-0"
          >
            <span>Portail Étudiant.gouv.fr</span>
            <span className="material-symbols-outlined text-[13px]">open_in_new</span>
          </a>
        </div>

        <p className="text-xs text-slate-700 leading-relaxed">
          {crousFood.desc}
        </p>

        <div className="p-3.5 rounded-lg bg-emerald-50/60 border border-emerald-100 space-y-2">
          <h3 className="text-xs font-bold text-emerald-900 uppercase tracking-wide">
            Comment en bénéficier :
          </h3>
          <ul className="text-xs text-emerald-950 space-y-1.5 list-disc list-inside">
            {crousFood.howItWorks.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="text-[11px] text-slate-400 italic pt-1 border-t border-slate-100">
          {crousFood.source}
        </div>
      </section>

      {/* 2. Housing Aid: 2026 Rules & Distinction APL / ALS / ALF */}
      <section id="housing-aid-rules" className="p-6 rounded-xl border border-slate-200 bg-white space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div className="space-y-1">
            <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
              {housingAidRules2026.effectiveDate}
            </span>
            <h2 className="text-lg font-bold text-slate-900 mt-1">
              {housingAidRules2026.title}
            </h2>
          </div>

          <a
            href={housingAidRules2026.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center gap-1 self-start sm:self-auto shrink-0"
          >
            <span>Fiche Service-Public.fr</span>
            <span className="material-symbols-outlined text-[13px]">open_in_new</span>
          </a>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          {housingAidRules2026.desc}
        </p>

        {/* Distinction APL / ALS / ALF */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
            Distinguer les 3 types d'aides au logement :
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {housingAidRules2026.distinction.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                <span className="font-bold text-slate-900 text-xs block">
                  {item.code}
                </span>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Rules for non-EU students since 1 July 2026 */}
        <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40 space-y-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
            <span className="material-symbols-outlined text-amber-700 text-[18px]">gavel</span>
            <span>Conditions d'éligibilité pour les étudiants internationaux non-UE</span>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed">
            {housingAidRules2026.internationalRules.intro}
          </p>

          <ul className="text-xs text-slate-800 space-y-1.5 list-disc list-inside bg-white p-3 rounded-lg border border-amber-100">
            {housingAidRules2026.internationalRules.eligibleCases.map((c, idx) => (
              <li key={idx} className="font-medium">
                {c}
              </li>
            ))}
          </ul>

          <p className="text-xs text-slate-600 italic">
            {housingAidRules2026.internationalRules.caution}
          </p>
        </div>

        <div className="text-[11px] text-slate-400 italic pt-1 border-t border-slate-100">
          {housingAidRules2026.source}
        </div>
      </section>

      {/* 3. Scholarships, Emergency Aid & Student Discounts */}
      <section className="space-y-4">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            Bourses, urgences sociales et réductions étudiantes
          </h2>
          <p className="text-xs text-slate-500">
            Les autres dispositifs légaux d'accompagnement financier en France.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherAids.map((aid, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200 bg-white flex flex-col justify-between gap-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                    {aid.badge}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm">
                  {aid.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {aid.desc}
                </p>
                <p className="text-xs text-slate-500 pt-1">
                  <strong>Utile pour :</strong> {aid.usefulFor}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <a
                  href={aid.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  <span>Accéder à la ressource officielle</span>
                  <span className="material-symbols-outlined text-[13px]">open_in_new</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
