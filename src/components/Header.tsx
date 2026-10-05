"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SITE_DATA } from "@/data/siteData";
import { SearchModal } from "./SearchModal";

interface HeaderProps {
  onToggleMobile?: () => void;
}

export function Header({ onToggleMobile }: HeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(SITE_DATA.info.cities[0]);
  const [emergencyOpen, setEmergencyOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 lg:left-64 right-0 h-14 bg-white/95 backdrop-blur-xs border-b border-slate-200 z-40 px-4 sm:px-6 flex items-center justify-between gap-3">
        {/* Left Side: Mobile Menu Button + Search */}
        <div className="flex items-center gap-3 flex-1 max-w-md">
          <button
            type="button"
            onClick={onToggleMobile}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 lg:hidden"
            aria-label="Ouvrir le menu"
          >
            <span className="material-symbols-outlined text-[22px]">menu</span>
          </button>

          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="flex-1 flex items-center justify-between gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-left hover:border-blue-400 transition-colors text-xs text-slate-500 cursor-text"
          >
            <div className="flex items-center gap-2 truncate">
              <span className="material-symbols-outlined text-slate-400 text-[18px]">search</span>
              <span className="truncate">Rechercher démarches, CROUS, CAF, tri...</span>
            </div>
            <kbd className="hidden sm:inline px-1.5 py-0.5 rounded bg-slate-200 text-slate-600 text-[10px] font-semibold">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Right Side: City Selector, Emergency Pill, Guide Link */}
        <div className="flex items-center gap-2">
          {/* City Selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setCityOpen(!cityOpen)}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <span className="text-blue-600">📍</span>
              <span className="hidden sm:inline">{selectedCity.name}</span>
              <span className="sm:hidden">Nantes</span>
              <span className="material-symbols-outlined text-slate-400 text-[14px]">
                expand_more
              </span>
            </button>

            {cityOpen && (
              <div
                className="absolute right-0 mt-1 w-60 bg-white rounded-xl shadow-lg border border-slate-200 p-1.5 z-50"
                onClick={() => setCityOpen(false)}
              >
                <div className="px-2 py-1 text-[10px] uppercase font-bold text-slate-400 border-b border-slate-100 mb-1">
                  Changer de ville
                </div>
                {SITE_DATA.info.cities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => setSelectedCity(city)}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors flex items-center justify-between ${
                      selectedCity.id === city.id
                        ? "bg-blue-50 text-blue-700 font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{city.name}</span>
                    {selectedCity.id === city.id && (
                      <span className="material-symbols-outlined text-[14px]">check</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Emergency Pill */}
          <button
            type="button"
            onClick={() => setEmergencyOpen(true)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 transition-colors text-xs font-bold border border-red-200"
            title="Numéros d'urgence"
          >
            <span className="material-symbols-outlined text-[15px]">call</span>
            <span className="hidden md:inline">Urgence 112 / 15</span>
            <span className="md:hidden">112</span>
          </button>

          {/* Procedures Quick CTA */}
          <Link
            href="/procedures"
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-xs font-semibold shadow-xs transition-colors"
          >
            <span>Démarches</span>
          </Link>
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Emergency Modal */}
      {emergencyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-5 max-w-sm w-full space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-800">Numéros d'urgence gratuits</h3>
              <button
                onClick={() => setEmergencyOpen(false)}
                className="text-slate-400 hover:text-slate-700 text-xs"
              >
                Fermer
              </button>
            </div>
            <div className="space-y-2">
              {SITE_DATA.info.emergencyContacts.map((c) => (
                <div
                  key={c.number}
                  className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs"
                >
                  <div>
                    <strong className="text-slate-800 block">{c.number} — {c.label}</strong>
                    <span className="text-[11px] text-slate-500">{c.desc}</span>
                  </div>
                  <a
                    href={`tel:${c.number}`}
                    className="px-2.5 py-1 rounded bg-slate-200 text-slate-800 font-bold text-[11px] hover:bg-slate-300"
                  >
                    Appeler
                  </a>
                </div>
              ))}
            </div>
            <button
              onClick={() => setEmergencyOpen(false)}
              className="w-full py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}
