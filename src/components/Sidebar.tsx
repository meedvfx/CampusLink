"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { SITE_DATA } from "@/data/siteData";

interface SidebarProps {
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export function Sidebar({ mobileOpen = false, onCloseMobile }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Rail */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-white z-50 flex flex-col justify-between border-r border-slate-200 overflow-y-auto transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col">
          {/* Header & Logo */}
          <div className="p-4 flex items-center justify-between border-b border-slate-100">
            <Link
              href="/"
              onClick={onCloseMobile}
              className="flex items-center gap-2 group"
            >
              <Logo />
            </Link>
            {onCloseMobile && (
              <button
                type="button"
                onClick={onCloseMobile}
                className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 lg:hidden"
                aria-label="Fermer le menu"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col px-3 py-3 gap-0.5">
            {SITE_DATA.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onCloseMobile}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-700 font-semibold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`material-symbols-outlined text-[18px] ${
                        isActive ? "text-blue-600" : "text-slate-400"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>

                  {item.badge && (
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-semibold ${
                        isActive
                          ? "bg-blue-100 text-blue-700"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Minimal Footer Info */}
        <div className="p-3 m-3 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-600">
          <div className="flex items-center gap-1.5 font-semibold text-slate-800 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Guide 100% Libre</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-normal">
            Ressource d'information civique sans compte ni publicité.
          </p>
          <div className="mt-2 pt-2 border-t border-slate-200 flex items-center justify-between text-[11px]">
            <Link
              href="/resources"
              onClick={onCloseMobile}
              className="text-blue-600 font-medium hover:underline flex items-center gap-1"
            >
              <span>Portails officiels</span>
              <span className="material-symbols-outlined text-[12px]">open_in_new</span>
            </Link>
            <span className="text-slate-400 font-semibold">FR</span>
          </div>
        </div>
      </aside>
    </>
  );
}
