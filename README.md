# CampusLink France

Portail indépendant, moderne et léger conçu pour guider les étudiants internationaux dans leur installation et leur vie quotidienne en France (logement, formalités administratives, santé, aides financières, jobs et vie de campus).

## Features

- **Accueil & Synthèse** : Feuille de route chronologique en 6 étapes, alertes prioritaires 2026 et accès direct aux guides.
- **Démarches & Roadmap** : Guide complet des formalités obligatoires (VLS-TS, CPAM, CAF, CVEC, Titres de séjour) avec listes de pièces justificatives.
- **Logement (Où chercher)** : Répertoire des plateformes officielles (CROUS, Lokaviz, Mon Logement Étudiant, Visale, DossierFacile, Action Logement) et conseils anti-fraude.
- **Santé & Sécu (Ameli)** : Affiliation gratuite à l'Assurance Maladie, médecin traitant, CSS et numéros d'urgence 24/7.
- **Bourses & Aides (2026)** : Repas CROUS à partir de 1 € pour tous depuis mai 2026, règles CAF 2026 (distinction APL / ALS / ALF et conditions étudiants non-UE), aides d'urgence.
- **Jobs Étudiants (964h)** : Quota légal annuel de travail (60%), SMIC horaire, contrat et conseils pour le CV français.
- **Éco-Impact & Tri** : Moteur de tri immédiat "Où jeter ?" et guide des 4 filières de recyclage françaises.
- **Don du Sang (EFS)** : Sensibilisation civique, étapes du don et adresses des maisons de don et collectes mobiles.
- **Bénévolat Étudiant** : Annuaire des missions citoyennes et valorisation en crédits ECTS universitaires.
- **Communauté & Tandems** : Associations d'accueil international (ESN), Buddy System et cafés des langues.
- **Annuaire Officiel** : Répertoire certifié des 11 portails officiels de la République Française avec conseils anti-fraude.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**

## Data

Tout le contenu éditable du site est centralisé dans un seul fichier :

`src/data/siteData.ts`

Toutes les pages et composants lisent leurs données depuis ce fichier (navigation, démarches, plateformes de logement, santé, aides financières 2026, jobs, déchets, don du sang, bénévolat, associations, liens officiels). Modifier ce fichier met à jour l'ensemble du site.

## Development

Pour lancer le projet en local :

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Build

Pour générer le bundle de production statique et optimisé :

```bash
npm run build
```

## Deployment

Ce projet est 100% frontend (sans backend ni base de données) et s'adapte directement à un déploiement sur **Vercel** :

1. Poussez votre code sur un dépôt GitHub, GitLab ou Bitbucket.
2. Rendez-vous sur [vercel.com](https://vercel.com) et connectez votre compte.
3. Cliquez sur **"Add New Project"** puis importez le dépôt `CampusLink`.
4. Vercel détecte automatiquement Next.js.
5. Cliquez sur **"Deploy"**.

## Project Structure

```
CampusLink/
├── src/
│   ├── app/                    # Routes Next.js (App Router)
│   │   ├── blood-donation/     # Don du Sang (EFS)
│   │   ├── community/          # Communauté & Événements
│   │   ├── eco-impact/         # Tri & Écologie
│   │   ├── health/             # Santé & Ameli
│   │   ├── housing/            # Où chercher un logement
│   │   ├── jobs/               # Jobs & Quota 964h
│   │   ├── money/              # Bourses, Restauration 1€ & Aides
│   │   ├── procedures/         # Démarches & Séjour
│   │   ├── resources/          # Annuaire officiel de l'État
│   │   ├── volunteering/       # Bénévolat
│   │   ├── layout.tsx          # Layout racine
│   │   └── page.tsx            # Page d'accueil
│   ├── components/             # Composants d'interface épurés
│   │   ├── AppShell.tsx        # Conteneur responsive
│   │   ├── Footer.tsx          # Pied de page
│   │   ├── Header.tsx          # Barre supérieure & recherche
│   │   ├── Logo.tsx            # Logo CampusLink
│   │   ├── SearchModal.tsx     # Recherche globale (⌘K)
│   │   └── Sidebar.tsx         # Navigation latérale
│   └── data/
│       └── siteData.ts         # SOURCE UNIQUE DE DONNÉES ÉDITABLES
├── public/                     # Fichiers statiques
├── tailwind.config.ts          # Configuration des styles
├── tsconfig.json               # Configuration TypeScript
└── package.json                # Dépendances & scripts
```
