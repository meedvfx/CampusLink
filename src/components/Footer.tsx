import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { SITE_DATA } from "@/data/siteData";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 mt-12 py-10 px-4 sm:px-6 lg:px-8 text-slate-700">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-slate-200">
          {/* Brand */}
          <div className="space-y-3">
            <Logo />
            <p className="text-xs text-slate-500 leading-relaxed">
              {SITE_DATA.info.tagline}
            </p>
            <p className="text-xs text-slate-400">
              Guide civique indépendant pour étudiants internationaux en France.
            </p>
          </div>

          {/* Démarches & Logement */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Démarches & Séjour
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/procedures#vlsts-anef" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Validation Visa VLS-TS
                </Link>
              </li>
              <li>
                <Link href="/procedures#ameli-cpam" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Sécurité Sociale (CPAM)
                </Link>
              </li>
              <li>
                <Link href="/procedures#caf-apl" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Aide au Logement (CAF)
                </Link>
              </li>
              <li>
                <Link href="/housing" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Logement & Visale
                </Link>
              </li>
            </ul>
          </div>

          {/* Vie Quotidienne */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Vie Étudiante
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/health" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Santé & Médecin Traitant
                </Link>
              </li>
              <li>
                <Link href="/money" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Simulateur APL & Bourses
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Jobs & Quota 964h
                </Link>
              </li>
              <li>
                <Link href="/explore-map" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Carte des Services Campus
                </Link>
              </li>
            </ul>
          </div>

          {/* Solidarité & Officiel */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Impact & Officiel
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/eco-impact" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Guide du Tri & Écologie
                </Link>
              </li>
              <li>
                <Link href="/blood-donation" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Don du Sang (EFS)
                </Link>
              </li>
              <li>
                <Link href="/volunteering" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Bénévolat Étudiant
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Annuaire des Portails de l'État
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Civic Note & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {SITE_DATA.info.name} — Ressource civique 100% libre et gratuite.
          </p>
          <div className="flex items-center gap-4">
            <span>Sans inscription</span>
            <span>•</span>
            <span>Zéro traqueur publicitaire</span>
            <span>•</span>
            <Link href="/resources" className="text-blue-600 hover:underline">
              Services officiels
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
