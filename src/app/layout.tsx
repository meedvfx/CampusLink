import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/AppShell";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "CampusLink France — Le guide de référence des étudiants internationaux",
  description:
    "Plateforme publique pour les étudiants internationaux en France. Formalités administratives (VLS-TS, CPAM, CAF), recherche de logement, santé, jobs étudiants, carte interactive et initiatives écologiques.",
  keywords: [
    "étudiants internationaux France",
    "visa VLS-TS validation",
    "CPAM Ameli étudiant étranger",
    "CAF APL simulateur",
    "logement CROUS Nantes",
    "garantie Visale",
    "jobs étudiants 964h",
    "vie étudiante France",
  ],
  authors: [{ name: "CampusLink France Team" }],
  openGraph: {
    title: "CampusLink France — Le guide de référence des étudiants internationaux",
    description:
      "Toutes les informations pratiques sur le logement, les démarches administratives, la santé, les aides financières, les transports et l'écologie — réunies au même endroit.",
    type: "website",
    locale: "fr_FR",
    siteName: "CampusLink France",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={plusJakartaSans.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-surface font-sans text-on-surface antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
