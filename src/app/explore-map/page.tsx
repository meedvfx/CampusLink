"use client";

import React, { useState } from "react";
import { SITE_DATA, MapPoint } from "@/data/siteData";

export default function ExploreMapPage() {
  const { mapPoints } = SITE_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPoint, setSelectedPoint] = useState<MapPoint>(mapPoints[0]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "Tous les lieux" },
    { id: "crous", label: "Resto U CROUS" },
    { id: "admin", label: "Démarches & Mairie" },
    { id: "health", label: "Santé Campus" },
    { id: "transport", label: "Transports & Gares" },
    { id: "study", label: "BU & Bibliothèques" },
  ];

  const filteredPoints = mapPoints.filter((pt: MapPoint) => {
    const matchesCat = selectedCategory === "all" || pt.category === selectedCategory;
    const matchesQuery =
      pt.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pt.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
          Repérage territorial
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Carte des Services & Campus
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Localisez les restaurants universitaires, les guichets de préfecture, les centres de santé gratuits et les bibliothèques universitaires.
        </p>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedCategory === cat.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative min-w-[220px]">
          <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">
            search
          </span>
          <input
            type="text"
            placeholder="Rechercher un lieu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500"
          />
        </div>
      </div>

      {/* Interactive Map Visual + Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Interactive Schematic Campus Map */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs text-slate-500">
            <span className="font-semibold text-slate-700">Plan schématique du campus</span>
            <span>Cliquez sur un repère pour voir la fiche</span>
          </div>

          {/* SVG Visual Canvas */}
          <div className="relative w-full h-80 sm:h-96 bg-slate-50 rounded-lg border border-slate-200 my-3 overflow-hidden">
            {/* Grid Pattern */}
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#E2E8F0" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Tram Line Mockup */}
              <line x1="10%" y1="90%" x2="90%" y2="10%" stroke="#94A3B8" strokeWidth="3" strokeDasharray="6,4" />
              <text x="12%" y="92%" fill="#64748B" fontSize="10" fontWeight="bold">Ligne de Tramway</text>
            </svg>

            {/* Pins */}
            {filteredPoints.map((pt) => {
              const isSelected = selectedPoint.id === pt.id;
              return (
                <button
                  key={pt.id}
                  type="button"
                  onClick={() => setSelectedPoint(pt)}
                  style={{
                    left: `${pt.coords.x}%`,
                    top: `${pt.coords.y}%`,
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 transition-transform ${
                    isSelected ? "scale-125 z-20" : "scale-100 z-10 hover:scale-110"
                  }`}
                  title={pt.name}
                >
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full border-2 shadow-xs ${
                      isSelected
                        ? "bg-blue-600 border-white text-white"
                        : "bg-white border-blue-600 text-blue-600"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {pt.category === "crous" ? "restaurant" : pt.category === "health" ? "medical_services" : "place"}
                    </span>
                  </div>
                  {isSelected && (
                    <span className="absolute top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded font-medium shadow-md">
                      {pt.name}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
            <span>{filteredPoints.length} lieux affichés</span>
            <span>Échelle campus : distances à pied vérifiées</span>
          </div>
        </div>

        {/* Selected Point Detail Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div>
              <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                {selectedPoint.categoryLabel}
              </span>
              <h2 className="text-base font-bold text-slate-900 mt-2">
                {selectedPoint.name}
              </h2>
            </div>

            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[16px] text-slate-400 shrink-0">
                  location_on
                </span>
                <span>{selectedPoint.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[16px] text-slate-400 shrink-0">
                  schedule
                </span>
                <span>{selectedPoint.hours}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[16px] text-slate-400 shrink-0">
                  directions_walk
                </span>
                <span>{selectedPoint.walkTime} ({selectedPoint.distance})</span>
              </div>
            </div>

            {/* Tip */}
            {selectedPoint.tip && (
              <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-100 text-xs text-blue-900">
                <strong className="block font-semibold mb-0.5">Conseil pratique :</strong>
                <span>{selectedPoint.tip}</span>
              </div>
            )}
          </div>

          {selectedPoint.url && selectedPoint.url !== "#" && (
            <a
              href={selectedPoint.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-lg bg-blue-600 text-white font-medium text-xs text-center hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-1.5"
            >
              <span>Consulter le site officiel</span>
              <span className="material-symbols-outlined text-[14px]">open_in_new</span>
            </a>
          )}
        </div>
      </div>

      {/* Directory list of points */}
      <div className="space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Liste complète des points d'intérêt
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredPoints.map((pt) => (
            <div
              key={pt.id}
              onClick={() => setSelectedPoint(pt)}
              className={`p-3.5 rounded-xl border text-xs cursor-pointer transition-colors ${
                selectedPoint.id === pt.id
                  ? "bg-blue-50/50 border-blue-400"
                  : "bg-white border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="flex items-start justify-between gap-1">
                <h4 className="font-semibold text-slate-900 truncate">
                  {pt.name}
                </h4>
                <span className="text-[10px] text-slate-400 shrink-0">
                  {pt.distance}
                </span>
              </div>
              <p className="text-slate-500 text-[11px] truncate mt-0.5">
                {pt.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
