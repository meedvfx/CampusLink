"use client";

import React, { useState } from "react";
import { SITE_DATA, Procedure } from "@/data/siteData";

export default function ProceduresPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});

  const toggleDoc = (procId: string, docIndex: number) => {
    const key = `${procId}-${docIndex}`;
    setCheckedDocs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const categories = [
    { id: "all", label: "Toutes les démarches" },
    { id: "legal", label: "Séjour & Titres" },
    { id: "housing", label: "Logement & CAF" },
    { id: "health", label: "Santé & CPAM" },
    { id: "financial", label: "Aides & Bourses" },
  ];

  const filteredProcedures = SITE_DATA.procedures.filter((proc: Procedure) => {
    const matchesSearch =
      proc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proc.officialOrg.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || proc.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* Page Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
          Guide administratif
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Démarches & Formalités Officielles
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Toutes les étapes obligatoires classées par ordre chronologique pour sécuriser votre séjour en France, avec la liste exacte des pièces justificatives.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between pt-2">
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
        <div className="relative min-w-[240px]">
          <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">
            search
          </span>
          <input
            type="text"
            placeholder="Filtrer une démarche..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500"
          />
        </div>
      </div>

      {/* Procedures List */}
      <div className="space-y-4">
        {filteredProcedures.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-xl border border-slate-200 text-xs text-slate-500">
            Aucune démarche ne correspond à votre recherche.
          </div>
        ) : (
          filteredProcedures.map((proc: Procedure) => (
            <article
              key={proc.id}
              id={proc.id}
              className="p-5 sm:p-6 bg-white rounded-xl border border-slate-200 space-y-4"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                      {proc.stage}
                    </span>
                    {proc.deadline && (
                      <span className="text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                        Échéance : {proc.deadline}
                      </span>
                    )}
                  </div>
                  <h2 className="text-base font-bold text-slate-900">
                    {proc.title}
                  </h2>
                </div>

                <a
                  href={proc.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 self-start mt-1 sm:mt-0"
                >
                  <span>Portail {proc.officialOrg}</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed">
                {proc.description}
              </p>

              {/* What / When / Where Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-3 rounded-lg bg-slate-50 text-xs">
                <div>
                  <span className="font-semibold text-slate-700 block">Objectif :</span>
                  <span className="text-slate-600">{proc.what}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700 block">Délai :</span>
                  <span className="text-slate-600">{proc.when}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700 block">Plateforme :</span>
                  <span className="text-slate-600">{proc.where}</span>
                </div>
              </div>

              {/* Documents Required */}
              <div className="space-y-2">
                <h3 className="text-xs font-semibold text-slate-800">
                  Documents nécessaires ({proc.requiredDocuments.length}) :
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {proc.requiredDocuments.map((doc, idx) => {
                    const isChecked = checkedDocs[`${proc.id}-${idx}`] || false;
                    return (
                      <label
                        key={idx}
                        onClick={() => toggleDoc(proc.id, idx)}
                        className={`flex items-center gap-2 p-2 rounded-lg border text-xs cursor-pointer select-none transition-colors ${
                          isChecked
                            ? "bg-emerald-50 border-emerald-200 text-emerald-800 line-through"
                            : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="rounded text-blue-600 focus:ring-blue-500 w-3.5 h-3.5"
                        />
                        <span className="truncate">{doc}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Practical Tip */}
              {proc.tip && (
                <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-100 flex items-start gap-2 text-xs text-blue-900">
                  <span className="material-symbols-outlined text-[16px] text-blue-600 shrink-0 mt-0.5">
                    lightbulb
                  </span>
                  <div>
                    <span className="font-semibold">Conseil pratique : </span>
                    <span>{proc.tip}</span>
                  </div>
                </div>
              )}
            </article>
          ))
        )}
      </div>
    </div>
  );
}
