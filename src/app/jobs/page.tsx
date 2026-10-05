"use client";

import React, { useState } from "react";
import { SITE_DATA } from "@/data/siteData";

export default function JobsPage() {
  const { jobs } = SITE_DATA;
  const [weeklyHours, setWeeklyHours] = useState<number>(15);
  const [workedWeeks, setWorkedWeeks] = useState<number>(30);

  const totalHoursWorked = weeklyHours * workedWeeks;
  const maxQuota = jobs.annualQuota;
  const remainingHours = Math.max(0, maxQuota - totalHoursWorked);
  const quotaPercentage = Math.min(100, Math.round((totalHoursWorked / maxQuota) * 100));
  const estimatedNetEarnings = Math.round(totalHoursWorked * jobs.smicNet);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
          Droit du travail étudiant
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Jobs Étudiants, Stages & Quota 964h
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Le visa ou titre de séjour étudiant vous autorise légalement à travailler en France jusqu'à 964 heures par an sans autorisation spéciale.
        </p>
      </div>

      {/* Quota Simulator */}
      <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Simulateur de Quota Annuel Légal ({maxQuota} h)
            </h2>
            <p className="text-xs text-slate-500">
              Vérifiez que votre contrat respecte le plafond de 60% de la durée légale.
            </p>
          </div>
          <a
            href="https://www.service-public.fr/particuliers/vosdroits/F2713"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center gap-1"
          >
            <span>Loi Service-Public.fr</span>
            <span className="material-symbols-outlined text-[13px]">open_in_new</span>
          </a>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-700 block">
              Heures travaillées par semaine : <strong className="text-blue-600">{weeklyHours} h</strong>
            </label>
            <input
              type="range"
              min={5}
              max={35}
              step={1}
              value={weeklyHours}
              onChange={(e) => setWeeklyHours(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-700 block">
              Nombre de semaines travaillées dans l'année : <strong className="text-blue-600">{workedWeeks} sem</strong>
            </label>
            <input
              type="range"
              min={1}
              max={52}
              step={1}
              value={workedWeeks}
              onChange={(e) => setWorkedWeeks(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5 pt-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-600">
              Consommation du quota : <strong>{totalHoursWorked} h / {maxQuota} h ({quotaPercentage}%)</strong>
            </span>
            <span className={`font-semibold ${totalHoursWorked > maxQuota ? "text-red-600" : "text-emerald-700"}`}>
              {totalHoursWorked > maxQuota ? "Dépassement interdit !" : `Reste ${remainingHours} h autorisées`}
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
            <div
              className={`h-full transition-all ${
                totalHoursWorked > maxQuota ? "bg-red-500" : "bg-blue-600"
              }`}
              style={{ width: `${quotaPercentage}%` }}
            />
          </div>
        </div>

        {/* Earnings Estimate */}
        <div className="p-3 rounded-lg bg-slate-50 flex items-center justify-between text-xs">
          <span className="text-slate-600">
            Revenu net estimé (base SMIC net {jobs.smicNet} € / h) :
          </span>
          <strong className="text-slate-900 text-sm">{estimatedNetEarnings.toLocaleString()} € net</strong>
        </div>
      </div>

      {/* Rules */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-slate-900">
          Les 4 règles clés du travail étudiant
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {jobs.rules.map((rule, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5"
            >
              <h3 className="font-bold text-slate-900 text-xs">
                {rule.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {rule.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CV Tips & Official Platforms */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* CV Tips */}
        <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-3">
          <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wide">
            Conseils pour votre CV en France
          </h3>
          <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside">
            {jobs.cvTips.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </div>

        {/* Official Platforms */}
        <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-3">
          <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wide">
            Plateformes officielles d'offres
          </h3>
          <div className="space-y-2">
            {jobs.platforms.map((p, idx) => (
              <a
                key={idx}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-slate-100 bg-slate-50 hover:bg-slate-100 transition-colors flex items-center justify-between text-xs group"
              >
                <div>
                  <span className="font-semibold text-slate-800 block group-hover:text-blue-600">
                    {p.name}
                  </span>
                  <span className="text-[11px] text-slate-500">{p.desc}</span>
                </div>
                <span className="material-symbols-outlined text-[14px] text-slate-400">
                  open_in_new
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
