import React from "react";
import { SITE_DATA } from "@/data/siteData";

export default function BloodDonationPage() {
  const { bloodDonation } = SITE_DATA;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
          Solidarité Civique (EFS)
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Don du Sang Étudiant & Collectes Campus
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          En France, le don de sang est un acte civique, volontaire, bénévole et anonyme. 45 minutes de votre temps permettent de soigner jusqu'à 3 personnes.
        </p>
      </div>

      {/* 3 Key Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {bloodDonation.whyDonate.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl border border-slate-200 bg-white text-center space-y-1"
          >
            <span className="text-2xl font-bold text-red-600 block">
              {item.stat}
            </span>
            <p className="text-xs text-slate-600 font-medium">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* 4 Steps */}
      <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-base font-bold text-slate-900">
          Comment se déroule un don ? (4 étapes)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {bloodDonation.steps.map((st) => (
            <div
              key={st.step}
              className="p-3.5 rounded-lg border border-slate-100 bg-slate-50 space-y-1.5"
            >
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-red-600 text-white text-xs font-bold flex items-center justify-center">
                  {st.step}
                </span>
                <h3 className="font-semibold text-slate-800 text-xs">
                  {st.title}
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Donation Drives */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Lieux de collecte & permanences
            </h2>
            <p className="text-xs text-slate-500">
              Maison du don fixe et collectes mobiles universitaires.
            </p>
          </div>
          <a
            href={bloodDonation.efsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center gap-1"
          >
            <span>Prendre rendez-vous sur dondesang.efs.sante.fr</span>
            <span className="material-symbols-outlined text-[13px]">open_in_new</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {bloodDonation.drives.map((drive, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200 bg-white flex flex-col justify-between gap-3"
            >
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded">
                  Collecte Officielle
                </span>
                <h3 className="font-bold text-slate-900 text-sm">
                  {drive.title}
                </h3>
                <p className="text-xs text-slate-500">
                  📍 {drive.address}
                </p>
                <p className="text-xs text-slate-700 pt-1">
                  <strong>Date :</strong> {drive.date}
                </p>
                <p className="text-xs text-slate-700">
                  <strong>Horaires :</strong> {drive.hours}
                </p>
              </div>

              <a
                href={bloodDonation.efsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-red-600 hover:underline inline-flex items-center gap-1 pt-2 border-t border-slate-100"
              >
                <span>Vérifier les créneaux</span>
                <span className="material-symbols-outlined text-[12px]">open_in_new</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Conditions Checklist */}
      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
          Conditions préalables au don
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-emerald-600">check</span>
            <span>Avoir entre 18 et 70 ans</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-emerald-600">check</span>
            <span>Peser au moins 50 kg</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-emerald-600">check</span>
            <span>Bien s'hydrater et ne pas être à jeun</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-emerald-600">check</span>
            <span>Présenter une pièce d'identité</span>
          </div>
        </div>
      </div>
    </div>
  );
}
