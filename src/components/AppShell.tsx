"use client";

import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      {/* Sidebar */}
      <Sidebar
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        {/* Header */}
        <Header onToggleMobile={() => setMobileOpen(!mobileOpen)} />

        {/* Page Content */}
        <main className="relative pt-14 flex-1 w-full bg-slate-50/50">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
