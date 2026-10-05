"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SITE_DATA } from "@/data/siteData";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  const matchingProcedures = q
    ? SITE_DATA.procedures.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.officialOrg.toLowerCase().includes(q)
      )
    : SITE_DATA.procedures.slice(0, 3);

  const matchingHousing = q
    ? SITE_DATA.housing.platforms.filter(
        (h) =>
          h.name.toLowerCase().includes(q) ||
          h.description.toLowerCase().includes(q) ||
          h.usefulFor.toLowerCase().includes(q)
      )
    : SITE_DATA.housing.platforms.slice(0, 3);

  const matchingResources = q
    ? SITE_DATA.officialResources.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.acronym.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q)
      )
    : SITE_DATA.officialResources.slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/40 backdrop-blur-xs">
      <div
        className="w-full max-w-xl bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-3 border-b border-slate-200 flex items-center gap-2">
          <span className="material-symbols-outlined text-slate-400 text-[20px]">search</span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher une démarche, logement, repas 1€, santé..."
            className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden bg-transparent"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 text-xs"
          >
            Esc
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-4 text-xs divide-y divide-slate-100">
          {/* Procedures */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-2">
              Démarches & Séjour
            </span>
            {matchingProcedures.map((proc) => (
              <Link
                key={proc.id}
                href={`/procedures#${proc.id}`}
                onClick={onClose}
                className="flex items-start justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <div>
                  <span className="font-semibold text-slate-800 group-hover:text-blue-600 block">
                    {proc.title}
                  </span>
                  <span className="text-[11px] text-slate-500 line-clamp-1">
                    {proc.description}
                  </span>
                </div>
                <span className="text-[10px] text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded font-medium shrink-0 ml-2">
                  {proc.stage}
                </span>
              </Link>
            ))}
          </div>

          {/* Housing Platforms */}
          <div className="space-y-1.5 pt-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-2">
              Où chercher un logement
            </span>
            {matchingHousing.map((h) => (
              <Link
                key={h.id}
                href="/housing"
                onClick={onClose}
                className="flex items-start justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <div>
                  <span className="font-semibold text-slate-800 group-hover:text-blue-600 block">
                    {h.name}
                  </span>
                  <span className="text-[11px] text-slate-500 line-clamp-1">
                    {h.usefulFor}
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 shrink-0 ml-2">
                  {h.badge}
                </span>
              </Link>
            ))}
          </div>

          {/* Official Resources */}
          <div className="space-y-1.5 pt-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-2">
              Portails Officiels
            </span>
            {matchingResources.map((res) => (
              <a
                key={res.id}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-start justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <div>
                  <span className="font-semibold text-slate-800 group-hover:text-blue-600 block">
                    {res.name} ({res.acronym})
                  </span>
                  <span className="text-[11px] text-slate-500 line-clamp-1">
                    {res.description}
                  </span>
                </div>
                <span className="material-symbols-outlined text-[14px] text-slate-400 shrink-0 ml-2">
                  open_in_new
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer shortcuts */}
        <div className="p-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-400 px-4">
          <span>Recherche instantanée dans le guide officiel</span>
          <span>Fermer avec Échap</span>
        </div>
      </div>
    </div>
  );
}
