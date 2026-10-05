import React from "react";
import { SITE_DATA, HousingPlatform } from "@/data/siteData";

export default function HousingPage() {
  const { housing } = SITE_DATA;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
          Guide d'orientation locative
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Où chercher un logement étudiant en France ?
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          {housing.description}
        </p>
      </div>

      {/* Official Where-to-Search Platforms Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900">
            Les plateformes officielles et reconnues
          </h2>
          <span className="text-xs text-slate-400">
            {housing.platforms.length} services certifiés
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {housing.platforms.map((platform: HousingPlatform) => (
            <div
              key={platform.id}
              className="p-5 rounded-xl border border-slate-200 bg-white flex flex-col justify-between gap-4"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {platform.name}
                    </h3>
                    <span className="text-xs text-slate-500">
                      Géré par {platform.operator}
                    </span>
                  </div>
                  {platform.badge && (
                    <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded shrink-0">
                      {platform.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {platform.description}
                </p>

                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                  <span className="font-semibold text-slate-700 block mb-0.5">
                    Pourquoi l'utiliser :
                  </span>
                  <span className="text-slate-600">
                    {platform.usefulFor}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-blue-600 text-white font-medium text-xs text-center hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <span>Accéder au site officiel</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practical Anti-Scam Guidance */}
      <section className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
          <span className="material-symbols-outlined text-amber-600 text-[18px]">gph</span>
          <span>Règles de vigilance pour éviter les arnaques au logement</span>
        </h3>
        <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
          {housing.tips.map((tip, idx) => (
            <li key={idx} className="leading-relaxed">
              {tip}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
