"use client";

import React, { useState } from "react";
import { SITE_DATA, HousingListing } from "@/data/siteData";

export default function HousingPage() {
  const { housing } = SITE_DATA;
  const [selectedType, setSelectedType] = useState<string>("all");
  const [maxBudget, setMaxBudget] = useState<number>(650);

  const filteredListings = housing.listings.filter((h: HousingListing) => {
    if (selectedType !== "all" && h.type !== selectedType) return false;
    if (h.price > maxBudget) return false;
    return true;
  });

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
          Logement & Visale
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Guide & Offres de Logement Étudiant
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Résidences universitaires CROUS, logements privés et colocations vérifiés, compatibles avec les aides APL de la CAF et la garantie d'État Visale.
        </p>
      </div>

      {/* 3 Essential Government Tools */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {housing.keyGuides.map((guide, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border border-slate-200 bg-white flex flex-col justify-between gap-3"
          >
            <div className="space-y-1">
              <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded inline-block">
                Dispositif Officiel
              </span>
              <h3 className="font-bold text-slate-900 text-sm">
                {guide.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {guide.desc}
              </p>
            </div>
            <a
              href={guide.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-blue-600 hover:underline inline-flex items-center gap-1 pt-2 border-t border-slate-100"
            >
              <span>Accéder au service</span>
              <span className="material-symbols-outlined text-[12px]">open_in_new</span>
            </a>
          </div>
        ))}
      </div>

      {/* Filter and Budget Controls */}
      <div className="p-4 rounded-xl border border-slate-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Type pills */}
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setSelectedType("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              selectedType === "all"
                ? "bg-blue-600 text-white"
                : "bg-slate-50 text-slate-700 hover:bg-slate-100"
            }`}
          >
            Tous les types
          </button>
          <button
            type="button"
            onClick={() => setSelectedType("crous")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              selectedType === "crous"
                ? "bg-blue-600 text-white"
                : "bg-slate-50 text-slate-700 hover:bg-slate-100"
            }`}
          >
            CROUS
          </button>
          <button
            type="button"
            onClick={() => setSelectedType("private")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              selectedType === "private"
                ? "bg-blue-600 text-white"
                : "bg-slate-50 text-slate-700 hover:bg-slate-100"
            }`}
          >
            Résidences privées
          </button>
          <button
            type="button"
            onClick={() => setSelectedType("coloc")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              selectedType === "coloc"
                ? "bg-blue-600 text-white"
                : "bg-slate-50 text-slate-700 hover:bg-slate-100"
            }`}
          >
            Colocation
          </button>
        </div>

        {/* Budget slider */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500 whitespace-nowrap">
            Budget max : <strong className="text-slate-800">{maxBudget} €</strong>
          </span>
          <input
            type="range"
            min={250}
            max={750}
            step={20}
            value={maxBudget}
            onChange={(e) => setMaxBudget(Number(e.target.value))}
            className="w-28 accent-blue-600"
          />
        </div>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredListings.map((listing: HousingListing) => (
          <div
            key={listing.id}
            className="p-5 rounded-xl border border-slate-200 bg-white flex flex-col justify-between gap-4"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                    {listing.typeLabel}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm mt-1">
                    {listing.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    📍 {listing.location} • {listing.transport}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-lg font-bold text-slate-900 block leading-none">
                    {listing.price} €
                  </span>
                  <span className="text-[11px] text-slate-400">/ mois</span>
                </div>
              </div>

              {/* Price Calculation details */}
              <div className="p-2.5 rounded-lg bg-slate-50 flex items-center justify-between text-xs">
                <span className="text-slate-600">
                  APL estimée : <strong>~{listing.estimatedCaf} €</strong>
                </span>
                <span className="text-blue-700 font-bold">
                  Reste à charge : {listing.netPrice} €
                </span>
              </div>

              {/* Amenities */}
              <div className="flex flex-wrap gap-1">
                {listing.amenities.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-[11px] text-slate-400">
                Vérifié par {listing.verifiedBy}
              </span>
              <a
                href={listing.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium inline-flex items-center gap-1"
              >
                <span>Voir le dossier</span>
                <span className="material-symbols-outlined text-[12px]">open_in_new</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Practical Tips */}
      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
          Conseils anti-arnaques pour étudiants internationaux
        </h4>
        <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
          {housing.tips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
