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
    ? SITE_DATA.housing.listings.filter(
        (h) =>
          h.title.toLowerCase().includes(q) ||
          h.location.toLowerCase().includes(q)
      )
    : SITE_DATA.housing.listings.slice(0, 2);

  const matchingMap = q
    ? SITE_DATA.mapPoints.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.categoryLabel.toLowerCase().includes(q)
      )
    : SITE_DATA.mapPoints.slice(0, 2);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/40 backdrop-blur-xs">
      <div
        className="w-full max-w-xl bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col max-h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input */}
        <div className="flex items-center px-4 py-3 border-b border-slate-200 gap-2.5 bg-slate-50">
          <span className="material-symbols-outlined text-blue-600 text-[20px]">search</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            placeholder="Rechercher une démarche, logement, aide, tri..."
            className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery("")}
              className="text-xs text-slate-400 hover:text-slate-700 px-1"
            >
              Effacer
            </button>
          ) : (
            <kbd className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-500 text-[10px] font-semibold">
              ESC
            </kbd>
          )}
        </div>

        {/* Results */}
        <div className="overflow-y-auto p-4 space-y-4 flex-1">
          {matchingProcedures.length > 0 && (
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                Démarches
              </span>
              <div className="space-y-1">
                {matchingProcedures.map((proc) => (
                  <Link
                    key={proc.id}
                    href={`/procedures#${proc.id}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors"
                  >
                    <div className="truncate">
                      <span className="text-xs font-semibold text-slate-800 block truncate">
                        {proc.title}
                      </span>
                      <span className="text-[11px] text-slate-500 truncate block">
                        {proc.stage} • {proc.officialOrg}
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-slate-400 text-[14px]">
                      chevron_right
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {matchingHousing.length > 0 && (
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                Logement
              </span>
              <div className="space-y-1">
                {matchingHousing.map((h) => (
                  <Link
                    key={h.id}
                    href="/housing"
                    onClick={onClose}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors"
                  >
                    <div className="truncate">
                      <span className="text-xs font-semibold text-slate-800 block truncate">
                        {h.title}
                      </span>
                      <span className="text-[11px] text-slate-500 truncate block">
                        {h.price} €/mois • {h.location}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-blue-600">
                      Reste net: {h.netPrice} €
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {matchingMap.length > 0 && (
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                Lieux & Services
              </span>
              <div className="space-y-1">
                {matchingMap.map((m) => (
                  <Link
                    key={m.id}
                    href="/explore-map"
                    onClick={onClose}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors"
                  >
                    <div className="truncate">
                      <span className="text-xs font-semibold text-slate-800 block truncate">
                        {m.name}
                      </span>
                      <span className="text-[11px] text-slate-500 truncate block">
                        {m.distance} • {m.hours}
                      </span>
                    </div>
                    <span className="text-[11px] font-medium text-emerald-600">
                      {m.categoryLabel}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-[11px] text-slate-500">
          <span>CampusLink France — Répertoire public</span>
          <button onClick={onClose} className="text-blue-600 hover:underline">
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
