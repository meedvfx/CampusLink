import React from "react";
import { SITE_DATA } from "@/data/siteData";

export default function CommunityPage() {
  const { community } = SITE_DATA;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
          Vie de campus & réseau
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Communauté, Associations & Tandems Linguistiques
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Trouvez des associations d'étudiants internationaux, rejoignez des tandems de langues gratuits et participez aux soirées d'accueil.
        </p>
      </div>

      {/* Buddy System Callout */}
      <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
            Parrainage International Gratuit
          </span>
          <h2 className="text-sm font-bold text-slate-900">
            Le Buddy System ESN
          </h2>
          <p className="text-xs text-slate-600 max-w-xl">
            Soyez mis en relation avec un étudiant local bénévole qui vous aidera dès la descente du train ou de l'avion et vous fera découvrir la ville.
          </p>
        </div>

        <a
          href="https://buddysystem.eu"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium text-xs hover:bg-blue-700 transition-colors inline-flex items-center gap-1.5 self-start sm:self-auto shrink-0"
        >
          <span>Rejoindre le Buddy System</span>
          <span className="material-symbols-outlined text-[14px]">open_in_new</span>
        </a>
      </div>

      {/* Upcoming Events */}
      <div className="space-y-4">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            Événements & sorties interculturelles
          </h2>
          <p className="text-xs text-slate-500">
            Moments d'échange informels et gratuits organisés par les associations étudiantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {community.events.map((ev) => (
            <div
              key={ev.id}
              className="p-5 rounded-xl border border-slate-200 bg-white space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-600">
                  {ev.date}
                </span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  {ev.price}
                </span>
              </div>

              <h3 className="font-bold text-slate-900 text-sm">
                {ev.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {ev.description}
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>📍 {ev.location}</span>
                <span>Organisé par {ev.organizer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Groups & Associations */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-slate-900">
          Associations clés pour étudiants internationaux
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {community.groups.map((grp, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200 bg-white flex flex-col justify-between gap-3"
            >
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  {grp.category}
                </span>
                <h3 className="font-bold text-slate-900 text-sm">
                  {grp.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {grp.desc}
                </p>
              </div>

              {grp.url && (
                <a
                  href={grp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center gap-1 pt-2 border-t border-slate-100"
                >
                  <span>Consulter le site</span>
                  <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
