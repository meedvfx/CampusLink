"use client";

import React, { useState } from "react";
import { SITE_DATA } from "@/data/siteData";

export default function HealthPage() {
  const { health, info } = SITE_DATA;
  const [hasDoctor, setHasDoctor] = useState(true);
  const [hasCss, setHasCss] = useState(false);

  // Consultation tarif 26.50 €
  const totalCost = 26.5;
  const secuBase = hasDoctor ? 0.7 * 26.5 - 1 : 0.3 * 26.5 - 1; // 1€ participation forfaitaire légale
  const secuRefund = Math.max(0, Number(secuBase.toFixed(2)));
  const mutuelleRefund = hasCss
    ? Math.max(0, Number((totalCost - secuRefund - 1).toFixed(2)))
    : 0;
  const studentRemaining = Number(
    Math.max(0, totalCost - secuRefund - mutuelleRefund).toFixed(2)
  );

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
          Santé & Sécurité Sociale
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Santé, Sécu (Ameli) & Complémentaire
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          L'Assurance Maladie française est 100% gratuite pour tous les étudiants internationaux. Découvrez comment vous affilier, déclarer votre médecin traitant et bénéficier d'une prise en charge intégrale.
        </p>
      </div>

      {/* Emergency Strip */}
      <div className="p-4 rounded-xl border border-red-200 bg-red-50/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
          <strong className="text-red-900">Urgences médicales gratuites 24/7 :</strong>
          <span className="text-red-800">
            {info.emergencyContacts.map((c) => `${c.number} (${c.label})`).join(" • ")}
          </span>
        </div>
        <a
          href="https://etudiant-etranger.ameli.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-900 font-semibold hover:underline inline-flex items-center gap-1 self-start sm:self-auto shrink-0"
        >
          <span>Portail Ameli</span>
          <span className="material-symbols-outlined text-[13px]">open_in_new</span>
        </a>
      </div>

      {/* 4 Pillars of Health */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {health.pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl border border-slate-200 bg-white flex flex-col justify-between gap-2"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                {pillar.tag}
              </span>
              <h3 className="font-bold text-slate-900 text-sm mt-1">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Reimbursement Simulator */}
      <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-5">
        <div className="space-y-1">
          <h2 className="text-base font-bold text-slate-900">
            Simulateur de remboursement d'une consultation (Médecin généraliste)
          </h2>
          <p className="text-xs text-slate-500">
            Tarif conventionné secteur 1 : 26,50 €
          </p>
        </div>

        {/* Toggles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setHasDoctor(!hasDoctor)}
            className={`p-3 rounded-lg border text-left text-xs transition-colors flex items-center justify-between ${
              hasDoctor
                ? "bg-blue-50 border-blue-300 text-blue-900"
                : "bg-slate-50 border-slate-200 text-slate-600"
            }`}
          >
            <div>
              <span className="font-semibold block">Médecin traitant déclaré</span>
              <span className="text-[11px] opacity-80">
                {hasDoctor ? "Remboursement normal Sécu 70%" : "Pénalité hors parcours (30%)"}
              </span>
            </div>
            <span className="material-symbols-outlined text-[20px]">
              {hasDoctor ? "check_circle" : "cancel"}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setHasCss(!hasCss)}
            className={`p-3 rounded-lg border text-left text-xs transition-colors flex items-center justify-between ${
              hasCss
                ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                : "bg-slate-50 border-slate-200 text-slate-600"
            }`}
          >
            <div>
              <span className="font-semibold block">Complémentaire CSS / Mutuelle</span>
              <span className="text-[11px] opacity-80">
                {hasCss ? "Prend en charge le reste à payer" : "Sans mutuelle complémentaire"}
              </span>
            </div>
            <span className="material-symbols-outlined text-[20px]">
              {hasCss ? "check_circle" : "add_circle_outline"}
            </span>
          </button>
        </div>

        {/* Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-lg bg-slate-50 text-center">
          <div>
            <span className="text-xs text-slate-500 block">Remboursement Sécu</span>
            <span className="text-lg font-bold text-slate-800">{secuRefund} €</span>
          </div>
          <div>
            <span className="text-xs text-slate-500 block">Prise en charge Mutuelle / CSS</span>
            <span className="text-lg font-bold text-emerald-700">{mutuelleRefund} €</span>
          </div>
          <div>
            <span className="text-xs text-slate-500 block">Reste à votre charge</span>
            <span className={`text-lg font-bold ${studentRemaining === 0 ? "text-emerald-700" : "text-amber-700"}`}>
              {studentRemaining} €
            </span>
          </div>
        </div>
      </div>

      {/* Mental Health Support */}
      <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-4">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            Soutien psychologique & écoute bienveillante
          </h2>
          <p className="text-xs text-slate-500">
            Services 100% gratuits, confidentiels et sans avance de frais pour les étudiants.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {health.mentalHealth.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg border border-slate-100 bg-slate-50 flex flex-col justify-between gap-2"
            >
              <div>
                <h3 className="font-bold text-slate-800 text-xs">{item.name}</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center gap-1 mt-1"
              >
                <span>Accéder</span>
                <span className="material-symbols-outlined text-[12px]">open_in_new</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
