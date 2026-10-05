import React from "react";
import Link from "next/link";
import { SITE_DATA } from "@/data/siteData";

export default function HomePage() {
  const { info, alerts, roadmap, quickModules, officialResources } = SITE_DATA;

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 max-w-6xl mx-auto space-y-10">
      {/* 1. Clean Hero */}
      <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold">
            <span>📍 {info.cities[0].name}</span>
            <span>•</span>
            <span>{info.currentSession}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {info.name}
          </h1>

          <p className="text-base text-blue-700 font-medium">
            {info.tagline}
          </p>

          <p className="text-sm text-slate-600 leading-relaxed">
            {info.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/procedures"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors"
            >
              <span>Guide des démarches</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>

            <Link
              href="/housing"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors"
            >
              <span>Où chercher un logement</span>
            </Link>

            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-600 font-medium text-sm hover:text-slate-900 transition-colors ml-auto"
            >
              <span>Portails officiels</span>
              <span className="material-symbols-outlined text-[14px]">open_in_new</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Priority 2026 Alerts */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Informations réglementaires prioritaires (2026)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className="p-5 rounded-xl border border-slate-200 bg-white flex flex-col justify-between gap-3"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                    {alert.badge}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">
                  {alert.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {alert.desc}
                </p>
                {alert.source && (
                  <p className="text-[11px] text-slate-400 italic pt-1">
                    {alert.source}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                <Link
                  href={alert.href}
                  className="font-medium text-blue-600 hover:underline flex items-center gap-1"
                >
                  <span>{alert.actionText}</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
                {alert.externalUrl && (
                  <a
                    href={alert.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-600 flex items-center gap-1"
                  >
                    <span>Lien officiel</span>
                    <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Arrival Roadmap (6 steps) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Feuille de route : Les 6 étapes clés
            </h2>
            <p className="text-xs text-slate-500">
              L'ordre chronologique recommandé dès votre arrivée sur le territoire français.
            </p>
          </div>
          <Link
            href="/procedures"
            className="text-xs font-medium text-blue-600 hover:underline"
          >
            Toutes les démarches →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {roadmap.map((step) => (
            <div
              key={step.step}
              className="p-4 rounded-xl border border-slate-200 bg-white flex flex-col justify-between gap-3"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                  <h3 className="font-semibold text-slate-800 text-sm">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400 truncate">{step.org}</span>
                <a
                  href={step.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium inline-flex items-center gap-0.5"
                >
                  <span>Accéder</span>
                  <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Quick Access Modules */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Tous les modules d'aide
          </h2>
          <p className="text-xs text-slate-500">
            Guides pratiques complets sans publicité ni intermédiaire.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {quickModules.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:bg-slate-50/50 transition-colors group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                </div>
                <h3 className="font-semibold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                  {item.label}
                </h3>
                <p className="text-xs text-slate-500 leading-snug">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Official Resources Directory */}
      <section className="p-6 rounded-xl border border-slate-200 bg-white space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-sm font-bold text-slate-900">
              Portails & organismes officiels partenaires
            </h2>
            <p className="text-xs text-slate-500">
              Accès direct aux sites de l'État et des institutions étudiantes françaises.
            </p>
          </div>
          <Link
            href="/resources"
            className="text-xs font-semibold text-blue-600 hover:underline"
          >
            Consulter l'annuaire complet →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {officialResources.slice(0, 6).map((org) => (
            <a
              key={org.id}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-300 transition-colors text-center"
            >
              <span className="block font-bold text-slate-800 text-xs truncate">
                {org.acronym}
              </span>
              <span className="text-[11px] text-slate-500 truncate block mt-0.5">
                {org.category}
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
