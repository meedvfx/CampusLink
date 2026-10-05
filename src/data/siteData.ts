// ==============================================================================
// CAMPUSLINK FRANCE — CENTRALIZED SITE DATA
// All editable content for the website is defined here.
// Edit this file to update texts, categories, procedures, listings, and links.
// ==============================================================================

export interface NavItem {
  label: string;
  href: string;
  icon: string;
  badge?: string;
}

export interface Procedure {
  id: string;
  stage: string;
  title: string;
  description: string;
  category: "legal" | "health" | "housing" | "financial" | "academic";
  deadline?: string;
  what: string;
  when: string;
  where: string;
  officialOrg: string;
  officialUrl: string;
  requiredDocuments: string[];
  steps: string[];
  tip: string;
}

export interface HousingListing {
  id: string;
  title: string;
  type: "crous" | "private" | "coloc";
  typeLabel: string;
  price: number;
  estimatedCaf: number;
  netPrice: number;
  location: string;
  campusDistance: string;
  transport: string;
  amenities: string[];
  image: string;
  verifiedBy: string;
  url: string;
}

export interface MapPoint {
  id: string;
  name: string;
  category: "crous" | "admin" | "health" | "transport" | "eco" | "blood" | "study";
  categoryLabel: string;
  distance: string;
  walkTime: string;
  address: string;
  hours: string;
  tip: string;
  url: string;
  coords: { x: number; y: number };
}

export interface WasteItem {
  name: string;
  keywords: string[];
  category: string;
  destination: string;
  action: string;
  points: number;
}

export interface OfficialResource {
  id: string;
  name: string;
  acronym: string;
  category: string;
  description: string;
  services: string[];
  url: string;
}

export interface VolunteeringMission {
  id: string;
  title: string;
  category: string;
  organization: string;
  location: string;
  commitment: string;
  description: string;
  url: string;
}

export interface CommunityEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  organizer: string;
  price: string;
  description: string;
}

export const SITE_DATA = {
  // General Site Information
  info: {
    name: "CampusLink France",
    tagline: "Helping international students build their life in France.",
    subTagline: "Le guide public et indépendant pour réussir votre vie étudiante en France.",
    description:
      "Toutes les informations pratiques et fiables sur le logement, les démarches administratives (VLS-TS, CPAM, CAF), la santé, les aides financières, les jobs étudiants et la vie quotidienne — réunies au même endroit.",
    currentSession: "Session Universitaire 2024 / 2025",
    cities: [
      { id: "nantes", name: "Nantes Métropole", hub: "Lombarderie, Tertre, Chantrerie" },
      { id: "paris", name: "Paris & Île-de-France", hub: "Sorbonne, Saclay, Cité U" },
      { id: "lyon", name: "Lyon Métropole", hub: "La Doua, Lyon 1/2/3" },
      { id: "toulouse", name: "Toulouse Métropole", hub: "Paul Sabatier, Capitole" },
      { id: "lille", name: "Lille Métropole", hub: "Cité Scientifique, Pont de Bois" },
      { id: "bordeaux", name: "Bordeaux Métropole", hub: "Talence, Victoire" },
    ],
    emergencyContacts: [
      { number: "112", label: "Urgence Européenne", desc: "Tout type d'urgence (secours multilingues 24/7)" },
      { number: "15", label: "SAMU Médical", desc: "Détresse vitale, malaise, accident grave" },
      { number: "17", label: "Police Secours", desc: "Danger immédiat, agression, vol" },
      { number: "3114", label: "Prévention Suicide", desc: "Écoute psychologique gratuite 24/7" },
    ],
  },

  // Main Navigation Links
  navigation: [
    { label: "Accueil", href: "/", icon: "home" },
    { label: "Démarches", href: "/procedures", icon: "assignment" },
    { label: "Logement", href: "/housing", icon: "home_work" },
    { label: "Santé", href: "/health", icon: "medical_services" },
    { label: "Bourses & CAF", href: "/money", icon: "account_balance_wallet" },
    { label: "Jobs (964h)", href: "/jobs", icon: "work" },
    { label: "Carte", href: "/explore-map", icon: "map" },
    { label: "Éco & Impact", href: "/eco-impact", icon: "eco" },
    { label: "Don du Sang", href: "/blood-donation", icon: "bloodtype" },
    { label: "Bénévolat", href: "/volunteering", icon: "volunteer_activism" },
    { label: "Communauté", href: "/community", icon: "groups" },
    { label: "Annuaire", href: "/resources", icon: "verified" },
  ] as NavItem[],

  // Home Quick Modules
  quickModules: [
    { label: "Démarches & Séjour", desc: "VLS-TS, CPAM, CVEC, Titres", href: "/procedures", icon: "assignment", color: "text-blue-600 bg-blue-50" },
    { label: "Logement & Visale", desc: "CROUS, privé, garant d'État", href: "/housing", icon: "home_work", color: "text-blue-600 bg-blue-50" },
    { label: "Santé & Ameli", desc: "Sécu 100% gratuite, CSS, SSE", href: "/health", icon: "medical_services", color: "text-emerald-700 bg-emerald-50" },
    { label: "CAF & Allocations", desc: "Simulateur APL, repas 1€", href: "/money", icon: "account_balance_wallet", color: "text-amber-700 bg-amber-50" },
    { label: "Jobs Étudiants", desc: "Quota légal 964h, CV, SMIC", href: "/jobs", icon: "work", color: "text-slate-700 bg-slate-100" },
    { label: "Carte des Services", desc: "Resto U, démarches, transports", href: "/explore-map", icon: "map", color: "text-blue-600 bg-blue-50" },
    { label: "Éco & Recyclage", desc: "Tri des déchets, DEEE, défis", href: "/eco-impact", icon: "eco", color: "text-emerald-700 bg-emerald-50" },
    { label: "Don du Sang EFS", desc: "Collectes campus, Maison du Don", href: "/blood-donation", icon: "bloodtype", color: "text-red-600 bg-red-50" },
  ],

  // 6 Essential Milestones for the Roadmap
  roadmap: [
    { step: "1", title: "CVEC & Inscription", desc: "Règlement ou exonération de 103 € pour finaliser l'inscription administrative.", url: "https://cvec.etudiant.gouv.fr", org: "cvec.etudiant.gouv.fr" },
    { step: "2", title: "Bail & Caution Visale", desc: "Garantie locative gratuite de l'État sans garant physique en France.", url: "https://www.visale.fr", org: "visale.fr" },
    { step: "3", title: "CPAM / Ameli Sécurité Sociale", desc: "Affiliation gratuite dès réception du certificat de scolarité (J+30).", url: "https://etudiant-etranger.ameli.fr", org: "etudiant-etranger.ameli.fr" },
    { step: "4", title: "Aide au Logement (CAF APL)", desc: "Dépôt du dossier dès l'entrée dans les lieux pour toucher ~180 € / mois.", url: "https://www.caf.fr", org: "caf.fr" },
    { step: "5", title: "Validation Visa VLS-TS", desc: "À effectuer obligatoirement en ligne sur l'ANEF dans les 3 mois.", url: "https://administration-etrangers-en-france.interieur.gouv.fr", org: "ANEF (Intérieur)" },
    { step: "6", title: "Forfait Transports", desc: "Tarif étudiant -26 ans pour les réseaux de bus, tramway et vélos métropolitains.", url: "https://naolib.fr", org: "Réseau de transports" },
  ],

  // Priority Alerts on Homepage
  alerts: [
    {
      title: "Attestation de Loyer CAF APL",
      desc: "Faites remplir l'attestation de loyer par votre résidence CROUS ou bailleur pour débloquer votre allocation logement.",
      badge: "Action Prioritaire",
      actionText: "Guide CAF APL",
      href: "/procedures#caf-apl",
      externalUrl: "https://www.caf.fr",
    },
    {
      title: "Bilan de Santé Préventif Gratuit",
      desc: "Consultation médicale 100% gratuite au Service de Santé Étudiante (SSE) de votre université : check-up, vue et vaccins.",
      badge: "Santé Campus",
      actionText: "Guide Santé",
      href: "/health",
      externalUrl: "https://sante.univ-nantes.fr",
    },
  ],

  // Comprehensive Procedures
  procedures: [
    {
      id: "ameli-cpam",
      stage: "Premier Mois (J+30)",
      title: "Affiliation Sécurité Sociale (CPAM / Ameli)",
      description: "Inscription gratuite à l'Assurance Maladie française pour la prise en charge de vos soins, obtention du NIR et de la Carte Vitale.",
      category: "health",
      deadline: "Dans les 30 jours après l'arrivée",
      what: "Couverture santé à 100% gratuite et délivrance de votre numéro de Sécurité Sociale.",
      when: "Dès l'obtention du certificat de scolarité définitif de l'université.",
      where: "Portail officiel : etudiant-etranger.ameli.fr",
      officialOrg: "Assurance Maladie (Ameli)",
      officialUrl: "https://etudiant-etranger.ameli.fr",
      requiredDocuments: [
        "Passeport avec visa VLS-TS ou titre de séjour",
        "Certificat de scolarité de l'année en cours",
        "Relevé d'Identité Bancaire (RIB) français",
        "Acte de naissance traduit avec filiation",
      ],
      steps: [
        "Créez votre dossier sur etudiant-etranger.ameli.fr",
        "Téléversez vos 4 pièces justificatives en format PDF",
        "Téléchargez immédiatement votre Attestation de Droits provisoire",
        "Commandez votre Carte Vitale dès attribution du NIR définitif",
      ],
      tip: "Votre Attestation de Droits téléchargée sur le site ameli vous confère les mêmes remboursements qu'une Carte Vitale physique chez les médecins et pharmaciens.",
    },
    {
      id: "vlsts-anef",
      stage: "Premier Mois (J+30)",
      title: "Validation du Visa VLS-TS sur l'ANEF",
      description: "Validation obligatoire de votre visa long séjour valant titre de séjour auprès du Ministère de l'Intérieur sous 90 jours.",
      category: "legal",
      deadline: "Sous 3 mois après entrée en France",
      what: "Enregistrement légal de votre séjour en France, équivalent à un titre de séjour étudiant.",
      when: "Dès votre arrivée sur le territoire français et obligatoirement avant 90 jours.",
      where: "Plateforme ANEF (administration-etrangers-en-france.interieur.gouv.fr)",
      officialOrg: "Ministère de l'Intérieur (ANEF)",
      officialUrl: "https://administration-etrangers-en-france.interieur.gouv.fr",
      requiredDocuments: [
        "Numéro de visa et date de délivrance",
        "Date d'entrée en France (tampon passeport ou billet)",
        "Adresse postale de résidence en France",
        "Timbre fiscal électronique de 75 €",
      ],
      steps: [
        "Accédez à l'ANEF et connectez-vous",
        "Renseignez les dates de votre visa et adresse",
        "Réglez le timbre fiscal de 75 € par carte bancaire",
        "Téléchargez l'Attestation de Validation de visa",
      ],
      tip: "Sans cette validation sous 90 jours, vous seriez en séjour irrégulier et perdriez le droit aux aides CAF et à la Sécurité Sociale.",
    },
    {
      id: "caf-apl",
      stage: "Premier Mois (J+30)",
      title: "Demande d'Aide au Logement (APL / CAF)",
      description: "Allocation mensuelle versée par la CAF pour réduire le coût de votre loyer chaque mois.",
      category: "financial",
      deadline: "Dès emménagement (non rétroactif)",
      what: "Aide financière de 100 € à 215 € / mois versée directement à vous ou au bailleur.",
      when: "Dès la signature du bail et la remise des clés du logement.",
      where: "Site officiel : caf.fr",
      officialOrg: "Caisse d'Allocations Familiales (CAF)",
      officialUrl: "https://www.caf.fr",
      requiredDocuments: [
        "Bail de location signé",
        "Attestation de loyer signée par le propriétaire ou le CROUS",
        "RIB bancaire français",
        "Visa validé ANEF ou titre de séjour",
      ],
      steps: [
        "Effectuez une simulation sur caf.fr",
        "Remplissez le dossier de demande d'aide au logement en ligne",
        "Téléversez l'attestation de loyer remplie par votre bailleur",
        "L'allocation est versée chaque mois dès le mois suivant la demande",
      ],
      tip: "La CAF ne verse pas d'aide pour le premier mois d'emménagement et n'est jamais rétroactive : déposez votre dossier dès le mois de votre emménagement.",
    },
    {
      id: "cvec-contribution",
      stage: "Avant l'Arrivée",
      title: "Contribution de Vie Étudiante et de Campus (CVEC)",
      description: "Paiement de 103 € ou attestation d'exonération obligatoire pour s'inscrire dans l'enseignement supérieur.",
      category: "academic",
      deadline: "Avant l'inscription administrative",
      what: "Contribution annuelle finançant les activités sociales, culturelles, de santé et sportives sur les campus.",
      when: "Préalablement à votre inscription à l'université ou en grande école.",
      where: "Site officiel : cvec.etudiant.gouv.fr",
      officialOrg: "Les CROUS",
      officialUrl: "https://cvec.etudiant.gouv.fr",
      requiredDocuments: [
        "Identifiant National Étudiant (INE) si déjà attribué",
        "Carte bancaire pour paiement ou justificatif de bourse pour exonération",
      ],
      steps: [
        "Créez un compte sur MesServices.etudiant.gouv.fr",
        "Réglez les 103 € ou demandez l'exonération boursier",
        "Téléchargez l'attestation CVEC munie d'un QR code",
        "Fournissez l'attestation lors de l'inscription à l'université",
      ],
      tip: "Les boursiers du gouvernement français (Campus France) ou du CROUS sont exonérés mais doivent quand même générer leur attestation d'exonération.",
    },
    {
      id: "garantie-visale",
      stage: "Avant l'Arrivée",
      title: "Garantie Visale (Action Logement)",
      description: "Caution locative 100% gratuite accordée par l'État aux étudiants jusqu'à 30 ans, sans nécessiter de garant en France.",
      category: "housing",
      deadline: "Avant la signature du bail",
      what: "Visa certifié garantissant les loyers impayés pour rassurer propriétaires et résidences.",
      when: "Dès que vous préparez votre recherche de logement.",
      where: "Site officiel : visale.fr",
      officialOrg: "Action Logement",
      officialUrl: "https://www.visale.fr",
      requiredDocuments: [
        "Passeport en cours de validité",
        "Visa VLS-TS ou justificatif d'admission universitaire",
      ],
      steps: [
        "Créez votre compte sur visale.fr",
        "Déposez vos justificatifs en ligne (validation sous 48h)",
        "Téléchargez votre visa certifié Visale",
        "Transmettez le visa à votre propriétaire ou résidence CROUS",
      ],
      tip: "Visale est acceptée par 100% des CROUS et la quasi-totalité des résidences étudiantes privées. Ne payez jamais d'organisme payant pour une caution.",
    },
    {
      id: "titre-renouvellement",
      stage: "Renouvellement",
      title: "Renouvellement du Titre de Séjour Étudiant",
      description: "Démarche annuelle à anticiper entre 2 et 4 mois avant l'expiration de votre titre de séjour actuel.",
      category: "legal",
      deadline: "2 à 4 mois avant expiration",
      what: "Délivrance d'une nouvelle carte de séjour étudiant pour poursuivre vos études.",
      when: "Strictement entre 4 et 2 mois avant l'échéance de votre titre.",
      where: "Portail ANEF (administration-etrangers-en-france.interieur.gouv.fr)",
      officialOrg: "Ministère de l'Intérieur / Préfectures",
      officialUrl: "https://administration-etrangers-en-france.interieur.gouv.fr",
      requiredDocuments: [
        "Titre de séjour en cours",
        "Relevés de notes de l'année et attestation d'assiduité",
        "Inscription pour l'année universitaire suivante",
        "Justificatif de ressources financières (min. 615 € / mois)",
        "Justificatif de domicile récent (< 6 mois)",
      ],
      steps: [
        "Rassemblez tous vos bulletins de notes et relevés bancaires",
        "Déposez votre demande de renouvellement sur l'ANEF",
        "Téléchargez l'Attestation de Prolongation (ADP) pour maintenir vos droits",
        "Retirez votre carte en préfecture sur convocation",
      ],
      tip: "Ne déposez pas à moins de 2 mois de l'expiration : une taxe de retard de 180 € vous serait automatiquement facturée par la préfecture.",
    },
  ] as Procedure[],

  // Housing Listings & Guide
  housing: {
    averageRent: 480,
    keyGuides: [
      { title: "Résidences CROUS", desc: "Solution la plus économique (200€ à 380€/mois tout compris), charges et wifi inclus, éligible APL.", url: "https://trouverunlogement.lescrous.fr" },
      { title: "Garantie Visale", desc: "Caution locative 100% gratuite de l'État pour tous les étudiants de moins de 30 ans sur visale.fr.", url: "https://www.visale.fr" },
      { title: "DossierFacile", desc: "Service public gratuit qui labellise vos pièces justificatives avec un filigrane de sécurité anti-fraude.", url: "https://www.dossierfacile.logement.gouv.fr" },
    ],
    tips: [
      "Ne versez JAMAIS d'argent avant d'avoir signé un bail officiel ou obtenu une quittance officielle.",
      "Méfiez-vous des annonces trop alléchantes demandant un virement Western Union, PCS ou Transcash.",
      "Utilisez DossierFacile pour filigraner vos fiches de paie et pièces d'identité afin d'éviter l'usurpation.",
    ],
    listings: [
      {
        id: "crous-launay",
        title: "Studio T1 — Résidence CROUS Launay-Violet",
        type: "crous",
        typeLabel: "CROUS Officiel",
        price: 264,
        estimatedCaf: 175,
        netPrice: 89,
        location: "Nantes — Proche Faculté des Sciences",
        campusDistance: "600m du Campus Lombarderie",
        transport: "Tram 2 • 8 min",
        amenities: ["Wifi inclus", "Chauffage & Eau inclus", "Laverie", "Local vélos"],
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=700&q=80",
        verifiedBy: "CROUS & Nantes Université",
        url: "https://trouverunlogement.lescrous.fr",
      },
      {
        id: "residence-privee",
        title: "Studio Équipé — Résidence Étudiante Île de Nantes",
        type: "private",
        typeLabel: "Résidence Privée",
        price: 495,
        estimatedCaf: 195,
        netPrice: 300,
        location: "Nantes — Boulevard Vincent Gâche",
        campusDistance: "1.2 km du Pôle Universitaire Île de Nantes",
        transport: "Tram 2/3 • 3 min",
        amenities: ["Coworking", "Salle de sport", "Kitchenette vitrocéramique", "Fibre"],
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=700&q=80",
        verifiedBy: "Résidence Partenaire Étudiante",
        url: "https://www.campuslink-france.fr",
      },
      {
        id: "coloc-tertre",
        title: "Chambre en Colocation — Maison Campus Tertre",
        type: "coloc",
        typeLabel: "Colocation 3 Étudiants",
        price: 380,
        estimatedCaf: 140,
        netPrice: 240,
        location: "Nantes — Avenue du Recteur Schmitt",
        campusDistance: "400m du Campus Tertre Droit/Lettres",
        transport: "Tram 2 Facultés • 4 min",
        amenities: ["Grand jardin", "Salon meublé", "Bail individuel sans solidarité"],
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=80",
        verifiedBy: "Bailleur certifié DossierFacile",
        url: "https://www.campuslink-france.fr",
      },
    ] as HousingListing[],
  },

  // Health Information & Reimbursement Simulator
  health: {
    pillars: [
      { title: "Sécu Ameli (100% Gratuite)", desc: "Affiliation obligatoire et gratuite sur etudiant-etranger.ameli.fr pour obtenir votre numéro NIR et Carte Vitale.", tag: "Base 70%" },
      { title: "Complémentaire CSS", desc: "La Complémentaire Santé Solidaire prend en charge les 30% restants gratuitement selon vos ressources.", tag: "Zéro Reste" },
      { title: "Médecin Traitant", desc: "À déclarer lors de votre première consultation pour éviter la pénalité de remboursement de l'Assurance Maladie.", tag: "Indispensable" },
      { title: "Service Santé Campus (SSE)", desc: "Consultations médicales, dépistages et soutien psychologique gratuits sur votre campus universitaire.", tag: "Sur Campus" },
    ],
    mentalHealth: [
      { name: "Santé Psy Étudiant", desc: "Jusqu'à 8 séances gratuites chez un psychologue partenaire sans avance de frais.", url: "https://santepsy.etudiant.gouv.fr" },
      { name: "Numéro National 3114", desc: "Ligne d'écoute et de prévention de la détresse psychologique, gratuite et 24/7.", url: "tel:3114" },
      { name: "BAPU Universitaire", desc: "Bureaux d'Aide Psychologique Universitaires entièrement pris en charge.", url: "https://www.etudiant.gouv.fr" },
    ],
  },

  // Financial Aid, APL & Budget
  financialAid: {
    aids: [
      {
        title: "APL — Aide Personnalisée au Logement (CAF)",
        badge: "Jusqu'à 220 € / mois",
        desc: "Versée chaque mois par la CAF directement sur votre compte bancaire français pour alléger votre loyer.",
        who: "Tous les étudiants locataires en résidence ou logement privé.",
        url: "https://www.caf.fr",
      },
      {
        title: "Repas CROUS à 1 € ou 3,30 €",
        badge: "Restauration Sociale",
        desc: "Repas complet équilibré (entrée + plat chaud + dessert) au Resto U avec le compte Izly.",
        who: "1 € pour étudiants boursiers ou en situation précaire, 3,30 € pour tous.",
        url: "https://www.etudiant.gouv.fr/fr/les-repas-au-crous-1854",
      },
      {
        title: "Aide d'Urgence Ponctuelle CROUS (FNAU)",
        badge: "Urgence Sociale",
        desc: "Soutien financier accordé par les assistantes sociales du CROUS en cas d'accident de parcours ou difficulté imprévue.",
        who: "Accessible sur rendez-vous avec une assistante sociale universitaire.",
        url: "https://www.etudiant.gouv.fr/fr/aides-specifiques-sociales-1779",
      },
      {
        title: "Compte Bancaire Français Gratuit",
        badge: "Obligatoire CAF",
        desc: "Indispensable pour percevoir les remboursements de Sécu et les aides CAF. Droit au compte garanti par la Banque de France.",
        who: "Tout étudiant muni d'un passeport, visa et attestation d'hébergement.",
        url: "https://www.banque-france.fr/fr/a-votre-service/particuliers/droit-au-compte",
      },
    ],
    monthlyBudgetAverage: [
      { item: "Loyer moyen (net après APL)", amount: "250 € - 380 €" },
      { item: "Alimentation (Resto U + courses)", amount: "150 € - 200 €" },
      { item: "Transports en commun (tarif étudiant)", amount: "25 € - 38 €" },
      { item: "Téléphone & Internet", amount: "15 € - 25 €" },
      { item: "Assurance logement & mutuelle", amount: "10 € - 25 €" },
    ],
  },

  jobs: {
    annualQuota: 964,
    smicNet: 9.22,
    rules: [
      { title: "Droit au travail automatique", desc: "Le visa étudiant VLS-TS ou titre de séjour vous autorise à travailler sans demande préalable d'autorisation de travail." },
      { title: "Plafond annuel de 964 heures", desc: "Équivalent à 60% de la durée légale du travail (environ 18 à 20h/semaine durant l'année scolaire, temps plein en été)." },
      { title: "Stages en entreprise exclus du quota", desc: "Les stages obligatoires intégrés à votre cursus ne comptent PAS dans les 964h et sont rémunérés dès 2 mois consécutifs." },
      { title: "Salaire minimum au SMIC", desc: "Tout employeur doit vous rémunérer au moins au SMIC horaire légal (11,65 € brut/h, soit environ 9,22 € net/h)." },
    ],
    cvTips: [
      "Format strict sur 1 seule page, clair et sans fioritures.",
      "Mentionnez : 'Titre de séjour étudiant — Autorisation de travail 60% (964h/an)'.",
      "Précisez vos disponibilités réelles compatibles avec vos cours universitaires.",
    ],
    platforms: [
      { name: "Jobaviz (CROUS)", desc: "Centrale officielle des offres de jobs étudiants du réseau des CROUS.", url: "https://www.jobaviz.fr" },
      { name: "1jeune1solution", desc: "Plateforme du gouvernement pour l'emploi et l'alternance des jeunes.", url: "https://www.1jeune1solution.gouv.fr" },
      { name: "France Travail", desc: "Service public de l'emploi en France.", url: "https://www.francetravail.fr" },
    ],
  },

  // Interactive Map Points
  mapPoints: [
    {
      id: "crous-1",
      name: "Resto U Lombarderie (CROUS)",
      category: "crous",
      categoryLabel: "🍽️ Resto U CROUS",
      distance: "350 m",
      walkTime: "4 min à pied",
      address: "2 Rue de la Houssinière, Nantes",
      hours: "11h30 - 14h00",
      tip: "Repas complet étudiant à 3,30 € et 1,00 € pour les boursiers.",
      url: "https://www.crous-nantes.fr/restauration",
      coords: { x: 38, y: 32 },
    },
    {
      id: "admin-1",
      name: "CPAM de Loire-Atlantique",
      category: "admin",
      categoryLabel: "🏛️ Assurance Maladie",
      distance: "2.1 km",
      walkTime: "Busway 4 • 12 min",
      address: "9 Rue Gaëtan Rondeau, Nantes",
      hours: "8h30 - 17h00",
      tip: "Accueil étudiant, activation NIR et borne Carte Vitale 24/7.",
      url: "https://www.ameli.fr",
      coords: { x: 62, y: 68 },
    },
    {
      id: "health-1",
      name: "Pôle Santé SSE Lombarderie",
      category: "health",
      categoryLabel: "🩺 Santé Campus",
      distance: "180 m",
      walkTime: "2 min à pied",
      address: "Bâtiment 18, Campus Sciences",
      hours: "8h30 - 17h30",
      tip: "Consultations médicales gratuites, check-up de rentrée sans avance de frais.",
      url: "https://sante.univ-nantes.fr",
      coords: { x: 36, y: 35 },
    },
    {
      id: "blood-1",
      name: "Maison du Don — EFS Nantes",
      category: "blood",
      categoryLabel: "🩸 Don du Sang",
      distance: "1.2 km",
      walkTime: "Tram 2 • 8 min",
      address: "34 Boulevard Jean Monnet, Nantes",
      hours: "8h00 - 18h30",
      tip: "Collecte permanente sur rendez-vous avec collation offerte.",
      url: "https://dondesang.efs.sante.fr",
      coords: { x: 52, y: 64 },
    },
    {
      id: "eco-1",
      name: "Compost & Tri Campus",
      category: "eco",
      categoryLabel: "♻️ Tri & Compost",
      distance: "60 m",
      walkTime: "1 min à pied",
      address: "Derrière la BU Sciences",
      hours: "Accès libre 24/7",
      tip: "Composteur étudiant pour épluchures et déchets organiques.",
      url: "#",
      coords: { x: 40, y: 30 },
    },
    {
      id: "study-1",
      name: "Bibliothèque Universitaire Sciences",
      category: "study",
      categoryLabel: "📚 BU & Études",
      distance: "150 m",
      walkTime: "2 min à pied",
      address: "Bâtiment 20, Campus Sciences",
      hours: "8h30 - 20h00",
      tip: "Prêt gratuit de PC portables et salles insonorisées.",
      url: "https://bu.univ-nantes.fr",
      coords: { x: 39, y: 34 },
    },
  ] as MapPoint[],

  // Eco & Waste Sorting Items
  wasteItems: [
    {
      name: "Ordinateur ou batterie lithium",
      keywords: ["ordinateur", "laptop", "pc", "batterie", "lithium"],
      category: "DEEE",
      destination: "Bac DEEE en magasin ou déchèterie",
      action: "Ne JAMAIS jeter dans la poubelle normale (danger incendie). Pensez au Repair Café !",
      points: 35,
    },
    {
      name: "Cartons d'emballage et colis",
      keywords: ["carton", "colis", "papier", "boite"],
      category: "Recyclable",
      destination: "Bac Jaune de tri sélectif",
      action: "Pliez et aplatissez le carton avant de le déposer.",
      points: 15,
    },
    {
      name: "Épluchures et restes de repas",
      keywords: ["nourriture", "epluchures", "repas", "compost"],
      category: "Compost",
      destination: "Composteur du campus ou bio-seau",
      action: "Transformez vos déchets organiques en terreau fertile.",
      points: 20,
    },
    {
      name: "Bouteilles et bocaux en verre",
      keywords: ["bouteille", "verre", "pot", "bocal"],
      category: "Verre",
      destination: "Colonne verte d'apport volontaire",
      action: "Le verre se recycle à l'infini sans perte de matière.",
      points: 15,
    },
    {
      name: "Vêtements usagés et manteaux",
      keywords: ["vetement", "habit", "manteau", "textile"],
      category: "Textile",
      destination: "Conteneur Le Relais ou friperie solidaire",
      action: "Donnez une seconde vie aux vêtements en bon état.",
      points: 25,
    },
  ] as WasteItem[],

  // Blood Donation Information
  bloodDonation: {
    efsUrl: "https://dondesang.efs.sante.fr",
    whyDonate: [
      { stat: "10 000", label: "Dons nécessaires par jour en France" },
      { stat: "1 don", label: "Permet de soigner jusqu'à 3 personnes" },
      { stat: "45 min", label: "Durée totale avec collation conviviale offerte" },
    ],
    steps: [
      { step: "1", title: "Accueil & Formulaire", desc: "Questionnaire confidentiel sur votre mode de vie et santé récente." },
      { step: "2", title: "Entretien Médical", desc: "Entretien rapide avec un soignant pour valider que le don se fait en toute sécurité." },
      { step: "3", title: "Le Prélèvement (10 min)", desc: "Prélèvement confortablement installé dans un fauteuil ergonomique." },
      { step: "4", title: "Collation Offerte", desc: "Temps de repos de 15 minutes avec sandwichs, crêpes et boissons fraîches." },
    ],
    drives: [
      { title: "Maison du Don Permanente EFS CHU", address: "34 Boulevard Jean Monnet, Nantes", date: "Toute l'année (Lun-Sam)", hours: "8h00 - 18h30" },
      { title: "Collecte Mobile Campus Lombarderie", address: "Hall Bâtiment 1 Sciences Jean Perrin", date: "Mardi 12 Novembre 2024", hours: "10h30 - 16h00" },
      { title: "Collecte Étudiante Campus Tertre", address: "Pôle Étudiant Tertre Droit/Lettres", date: "Jeudi 21 Novembre 2024", hours: "11h00 - 16h30" },
    ],
  },

  // Volunteering Opportunities
  volunteering: [
    {
      id: "v-1",
      title: "Distribution de colis alimentaires pour étudiants",
      category: "Aide Alimentaire",
      organization: "Secours Populaire Français",
      location: "Nantes Nord & Campus",
      commitment: "2h / semaine",
      description: "Aidez au tri et à la distribution de paniers de fruits, légumes et produits d'hygiène aux étudiants.",
      url: "https://www.secourspopulaire.fr",
    },
    {
      id: "v-2",
      title: "Mentorat solidaire & aide aux devoirs pour enfants",
      category: "Éducation & Jeunesse",
      organization: "AFEV Nantes",
      location: "Quartiers prioritaires de Nantes",
      commitment: "2h / semaine (crédits ECTS)",
      description: "Accompagnez un jeune dans son parcours scolaire et culturel. Reconnu et valorisé par l'université.",
      url: "https://afev.org",
    },
    {
      id: "v-3",
      title: "Nettoyage citoyen des berges de l'Erdre",
      category: "Environnement",
      organization: "Collectif Zéro Déchet Nantes",
      location: "Bords de l'Erdre, Nantes",
      commitment: "1 samedi par mois (ponctuel)",
      description: "Rejoignez une équipe d'étudiants pour préserver les espaces naturels et la biodiversité urbaine.",
      url: "https://www.campuslink-france.fr",
    },
  ] as VolunteeringMission[],

  // Community Groups & Events
  community: {
    groups: [
      {
        name: "ESN Nantes Autour du Monde (Erasmus Student Network)",
        category: "Association Internationale",
        desc: "Accueil des étudiants internationaux : Buddy System (parrainage), soirées interculturelles, excursions régionales à petit prix.",
        url: "https://nantes.esnfrance.org",
      },
      {
        name: "Café Polyglotte & Tandems Linguistiques",
        category: "Échanges Linguistiques",
        desc: "Rencontres informelles gratuites pour pratiquer le français, l'anglais, l'espagnol ou l'arabe avec des locuteurs natifs.",
        url: "https://www.campuslink-france.fr",
      },
      {
        name: "Guichet Unique International (Welcome Desk)",
        category: "Accueil Institutionnel",
        desc: "Service d'accueil officiel de l'Université regroupant préfecture, CPAM, CAF et transports pour vous guider.",
        url: "https://www.univ-nantes.fr/welcome-desk",
      },
    ],
    events: [
      {
        id: "ev-1",
        title: "Café des Langues & Soirée d'Accueil",
        date: "Mercredi 30 Octobre • 19h30",
        location: "Centre-Ville de Nantes",
        organizer: "ESN Nantes",
        price: "Gratuit",
        description: "Rencontrez des étudiants du monde entier et pratiquez le français dans une ambiance détendue.",
      },
      {
        id: "ev-2",
        title: "Atelier Cuisine du Monde & Repas Partagé",
        date: "Samedi 9 Novembre • 11h30",
        location: "Maison de Quartier",
        organizer: "Collectif Solidaire Étudiant",
        price: "Entrée libre",
        description: "Cuisinez ensemble un buffet international à partir de recettes traditionnelles de chacun.",
      },
    ] as CommunityEvent[],
  },

  // Directory of Official Governmental Resources
  officialResources: [
    {
      id: "campus-france",
      name: "Campus France",
      acronym: "CF",
      category: "Études & Accueil",
      description: "Agence nationale pour l'accueil et la mobilité internationale des étudiants en France.",
      services: ["Procédures Études en France (EEF)", "Bourses du gouvernement", "Fiches d'accueil des villes"],
      url: "https://www.campusfrance.org",
    },
    {
      id: "anef",
      name: "ANEF (Administration Numérique des Étrangers)",
      acronym: "ANEF",
      category: "Séjour & Visas",
      description: "Portail officiel du Ministère de l'Intérieur pour les visas, titres de séjour et prolongations.",
      services: ["Validation visa VLS-TS", "Renouvellement titre de séjour", "Attestation de prolongation (ADP)"],
      url: "https://administration-etrangers-en-france.interieur.gouv.fr",
    },
    {
      id: "crous",
      name: "Les CROUS & Étudiant.gouv.fr",
      acronym: "CROUS",
      category: "Logement & Resto U",
      description: "Gestion des résidences universitaires, restauration étudiante (repas 1€ et 3,30€) et CVEC.",
      services: ["Logement CROUS", "Paiement de la CVEC", "Restauration Izly", "Aides d'urgence FNAU"],
      url: "https://www.etudiant.gouv.fr",
    },
    {
      id: "ameli",
      name: "Assurance Maladie (Ameli)",
      acronym: "CPAM",
      category: "Santé & Sécu",
      description: "Organisme de Sécurité Sociale prenant en charge vos soins médicaux à 100% gratuitement.",
      services: ["Affiliation gratuite étudiant étranger", "Délivrance numéro NIR", "Carte Vitale", "CSS"],
      url: "https://etudiant-etranger.ameli.fr",
    },
    {
      id: "caf",
      name: "Caisse d'Allocations Familiales",
      acronym: "CAF",
      category: "Aides au Logement",
      description: "Verse l'Aide Personnalisée au Logement (APL) pour alléger chaque mois votre loyer.",
      services: ["Simulateur APL", "Dépôt de dossier en ligne", "Versement mensuel des aides"],
      url: "https://www.caf.fr",
    },
    {
      id: "visale",
      name: "Action Logement (Visale)",
      acronym: "VISALE",
      category: "Garantie Locative",
      description: "Caution locative 100% gratuite garantie par l'État pour tous les étudiants jusqu'à 30 ans.",
      services: ["Garantie gratuite 36 mois", "Délivrance en 48h", "Accepté par 100% des CROUS"],
      url: "https://www.visale.fr",
    },
    {
      id: "service-public",
      name: "Service-Public.fr",
      acronym: "SP",
      category: "Portail Officiel",
      description: "Le site officiel de l'administration française recensant l'intégralité des lois et droits.",
      services: ["Fiches droits des étudiants étrangers", "Modèles de courriers", "Timbres fiscaux"],
      url: "https://www.service-public.fr",
    },
    {
      id: "france-visas",
      name: "France-Visas",
      acronym: "FV",
      category: "Visas & Entrée",
      description: "Portail officiel des demandes de visas pour la France et suivi consulaire.",
      services: ["Demande de visa étudiant", "Simulateur des justificatifs", "Prise de rendez-vous"],
      url: "https://france-visas.gouv.fr",
    },
    {
      id: "efs",
      name: "Établissement Français du Sang",
      acronym: "EFS",
      category: "Santé & Solidarité",
      description: "Opérateur public de la transfusion sanguine en France.",
      services: ["Trouver une collecte", "Auto-évaluation médicale", "Rendez-vous de don"],
      url: "https://dondesang.efs.sante.fr",
    },
    {
      id: "france-travail",
      name: "France Travail (Pôle Emploi)",
      acronym: "FT",
      category: "Emploi & Stages",
      description: "Service public pour la recherche d'emplois étudiants compatibles avec les études.",
      services: ["Offres jobs étudiants", "Plateforme 1jeune1solution", "Guides CV et entretiens"],
      url: "https://www.francetravail.fr",
    },
    {
      id: "ademe",
      name: "ADEME (Transition Écologique)",
      acronym: "ADEME",
      category: "Écologie & Déchets",
      description: "Agence publique de l'environnement, éditrice des guides officiels du tri sélectif.",
      services: ["Guide 'Que faire de mes déchets ?'", "Carte de la réparation", "Éco-gestes du quotidien"],
      url: "https://agirpourlatransition.ademe.fr",
    },
  ] as OfficialResource[],
};
