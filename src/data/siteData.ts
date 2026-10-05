// ==============================================================================
// CAMPUSLINK FRANCE — CENTRALIZED SITE DATA (2026)
// Single Source of Truth for all editable content.
// Pure frontend, no backend, no database, no marketplace.
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
  sourceNote?: string;
}

export interface HousingPlatform {
  id: string;
  name: string;
  operator: string;
  description: string;
  usefulFor: string;
  url: string;
  badge?: string;
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
    tagline: "Le guide public et indépendant pour les étudiants internationaux en France.",
    subTagline: "Informations officielles, démarches, logement, santé et vie quotidienne.",
    description:
      "Toutes les informations pratiques et fiables pour réussir votre séjour d'études en France : formalités de séjour, recherche de logement, système de santé gratuit, aides financières actualisées et vie étudiante.",
    currentSession: "Session 2026",
    cities: [
      { id: "nantes", name: "Nantes Métropole", hub: "Lombarderie, Tertre, Chantrerie" },
      { id: "paris", name: "Paris & Île-de-France", hub: "Sorbonne, Saclay, Cité U" },
      { id: "lyon", name: "Lyon Métropole", hub: "La Doua, Lyon 1/2/3" },
      { id: "toulouse", name: "Toulouse Métropole", hub: "Paul Sabatier, Capitole" },
      { id: "lille", name: "Lille Métropole", hub: "Cité Scientifique, Pont de Bois" },
      { id: "bordeaux", name: "Bordeaux Métropole", hub: "Talence, Victoire" },
    ],
    emergencyContacts: [
      { number: "112", label: "Urgence Européenne", desc: "Tout type d'urgence 24/7 (secours multilingues)" },
      { number: "15", label: "SAMU Médical", desc: "Urgence médicale vitale" },
      { number: "17", label: "Police Secours", desc: "Danger immédiat ou agression" },
      { number: "3114", label: "Prévention Suicide", desc: "Écoute et soutien psychologique gratuit 24/7" },
    ],
  },

  // Navigation Links (11 Clean Sections - NO Map)
  navigation: [
    { label: "Accueil", href: "/", icon: "home" },
    { label: "Démarches", href: "/procedures", icon: "assignment" },
    { label: "Logement", href: "/housing", icon: "home_work" },
    { label: "Santé", href: "/health", icon: "medical_services" },
    { label: "Bourses & Aides", href: "/money", icon: "account_balance_wallet" },
    { label: "Jobs (964h)", href: "/jobs", icon: "work" },
    { label: "Éco & Impact", href: "/eco-impact", icon: "eco" },
    { label: "Don du Sang", href: "/blood-donation", icon: "bloodtype" },
    { label: "Bénévolat", href: "/volunteering", icon: "volunteer_activism" },
    { label: "Communauté", href: "/community", icon: "groups" },
    { label: "Annuaire", href: "/resources", icon: "verified" },
  ] as NavItem[],

  // Quick Modules on Homepage (Clean and focused)
  quickModules: [
    { label: "Démarches & Séjour", desc: "Validation VLS-TS, CPAM, CVEC, titres", href: "/procedures", icon: "assignment" },
    { label: "Où chercher un logement", desc: "CROUS, Lokaviz, Visale, DossierFacile", href: "/housing", icon: "home_work" },
    { label: "Santé & Ameli", desc: "Sécu 100% gratuite, médecin traitant, CSS", href: "/health", icon: "medical_services" },
    { label: "Aides & Repas 1 €", desc: "Règles 2026, repas CROUS dès 1 €, bourses", href: "/money", icon: "account_balance_wallet" },
    { label: "Jobs Étudiants", desc: "Quota légal de 964h/an, SMIC, contrat", href: "/jobs", icon: "work" },
    { label: "Guide du Tri & Déchets", desc: "Où jeter ses déchets, bacs de recyclage", href: "/eco-impact", icon: "eco" },
    { label: "Don du Sang (EFS)", desc: "Acte solidaire, étapes et collectes", href: "/blood-donation", icon: "bloodtype" },
    { label: "Annuaire Officiel", desc: "Portails certifiés de l'État français", href: "/resources", icon: "verified" },
  ],

  // 6 Roadmap Milestones for Arrival
  roadmap: [
    {
      step: "1",
      title: "CVEC & Inscription administrative",
      desc: "Règlement ou exonération de la CVEC (Contribution Vie Étudiante et de Campus) indispensable pour obtenir votre certificat de scolarité.",
      url: "https://cvec.etudiant.gouv.fr",
      org: "cvec.etudiant.gouv.fr",
    },
    {
      step: "2",
      title: "Garantie Visale (Caution locative)",
      desc: "Obtenez votre visa certifié Visale gratuit auprès d'Action Logement avant de signer votre contrat de bail.",
      url: "https://www.visale.fr",
      org: "visale.fr",
    },
    {
      step: "3",
      title: "Affiliation gratuite à l'Assurance Maladie",
      desc: "Inscrivez-vous dès votre certificat de scolarité obtenu sur etudiant-etranger.ameli.fr pour obtenir votre numéro de Sécurité Sociale.",
      url: "https://etudiant-etranger.ameli.fr",
      org: "etudiant-etranger.ameli.fr",
    },
    {
      step: "4",
      title: "Validation en ligne du Visa VLS-TS",
      desc: "À réaliser obligatoirement sur l'ANEF dans les 3 mois suivant votre arrivée en France pour donner valeur de titre de séjour à votre visa.",
      url: "https://administration-etrangers-en-france.interieur.gouv.fr",
      org: "ANEF (Ministère de l'Intérieur)",
    },
    {
      step: "5",
      title: "Activation du compte Izly (Repas CROUS dès 1 €)",
      desc: "Activez votre compte Izly pour bénéficier des repas universitaires CROUS à 1 €.",
      url: "https://help.izly.fr",
      org: "izly.fr / Les CROUS",
    },
    {
      step: "6",
      title: "Abonnement Transports & Droit au compte",
      desc: "Souscrivez au forfait étudiant de votre réseau urbain (-26 ans) et finalisez l'ouverture de votre compte bancaire français.",
      url: "https://www.service-public.fr",
      org: "Service-Public.fr",
    },
  ],

  // Priority Alerts on Homepage
  alerts: [
    {
      title: "Repas CROUS dès 1 € pour tous les étudiants",
      desc: "Depuis le 4 mai 2026, le repas à 1 € en restaurant universitaire CROUS est accessible à l'ensemble des étudiants munis d'un compte Izly actif.",
      badge: "Restauration 2026",
      actionText: "Consulter la fiche",
      href: "/money#crous-food",
      externalUrl: "https://www.etudiant.gouv.fr",
      source: "Source : Étudiant.gouv / Service-Public",
    },
    {
      title: "Règles 2026 pour les aides au logement (CAF)",
      desc: "Pour les étudiants internationaux non-UE avec titre de séjour, l'accès aux aides au logement dépend de votre situation (boursier, activité professionnelle ou apprentissage).",
      badge: "Réglementation CAF 2026",
      actionText: "Détails & Éligibilité",
      href: "/money#housing-aid-rules",
      externalUrl: "https://www.service-public.fr",
      source: "Source : Service-Public.fr (en vigueur depuis le 1er juillet 2026)",
    },
  ],

  // Procedures Data (Official French administrative tasks)
  procedures: [
    {
      id: "vlsts-anef",
      stage: "Dès l'arrivée (Sous 3 mois)",
      title: "Validation en ligne du Visa Long Séjour (VLS-TS)",
      description:
        "Formalité impérative pour donner à votre visa la pleine valeur d'un titre de séjour régulier. À effectuer dans les 3 mois suivant le passage de frontière.",
      category: "legal",
      deadline: "3 mois après l'arrivée",
      what: "Enregistrement légal du droit de séjour et paiement de la taxe de séjour (taxe de chancellerie de 50 € en timbre fiscal électronique).",
      when: "Dès l'installation dans votre logement stable.",
      where: "Portail officiel de l'ANEF (Administration Numérique des Étrangers en France).",
      officialOrg: "Ministère de l'Intérieur",
      officialUrl: "https://administration-etrangers-en-france.interieur.gouv.fr",
      requiredDocuments: [
        "Passeport avec vignette du visa VLS-TS et cachet d'entrée",
        "Adresse de résidence stable en France",
        "Carte bancaire pour paiement du timbre fiscal (50 €)",
        "Date d'arrivée en France",
      ],
      steps: [
        "Accédez au téléservice ANEF 'Je valide mon VLS-TS'",
        "Renseignez le numéro de visa et votre état civil",
        "Réglez la taxe fiscale par carte bancaire",
        "Téléchargez immédiatement la confirmation de validation (attestation de régularité)",
      ],
      tip: "Conservez précieusement l'attestation PDF de validation ANEF : elle est exigée par la CPAM, la CAF et les employeurs.",
      sourceNote: "Source : Service-Public.fr / Ministère de l'Intérieur",
    },
    {
      id: "ameli-cpam",
      stage: "Dès l'inscription universitaire",
      title: "Affiliation gratuite à la Sécurité Sociale (CPAM / Ameli)",
      description:
        "L'Assurance Maladie française est 100% gratuite pour les étudiants internationaux. Elle prend en charge en moyenne 70% de vos frais médicaux.",
      category: "health",
      deadline: "Dès réception du certificat de scolarité",
      what: "Attribution d'un numéro d'immatriculation de Sécurité Sociale (NIR) et délivrance de l'attestation de droits puis de la Carte Vitale.",
      when: "Aussitôt votre certificat de scolarité remis par votre établissement.",
      where: "Plateforme dédiée etudiant-etranger.ameli.fr",
      officialOrg: "Caisse Nationale de l'Assurance Maladie (CNAM)",
      officialUrl: "https://etudiant-etranger.ameli.fr",
      requiredDocuments: [
        "Certificat de scolarité de l'année universitaire en cours",
        "Passeport en cours de validité",
        "Titre de séjour ou visa VLS-TS validé",
        "Extrait d'acte de naissance avec traduction assermentée",
        "Relevé d'Identité Bancaire (RIB) d'un compte français",
      ],
      steps: [
        "Créez votre dossier sur etudiant-etranger.ameli.fr",
        "Téléversez l'ensemble des pièces requises",
        "Téléchargez votre attestation provisoire d'affiliation",
        "Dès attribution du numéro définitif, créez votre compte sur ameli.fr et commandez votre Carte Vitale",
      ],
      tip: "Déclarez un médecin traitant dès votre première consultation pour être remboursé au taux plein de 70% sans pénalité.",
      sourceNote: "Source : ameli.fr / Assurance Maladie",
    },
    {
      id: "caf-housing-aid",
      stage: "Après signature du bail",
      title: "Demande d'Aide au Logement (CAF : APL, ALS, ALF)",
      description:
        "Aide financière mensuelle versée par la Caisse d'Allocations Familiales pour alléger le montant du loyer.",
      category: "housing",
      deadline: "Dès le premier mois d'emménagement",
      what: "Prise en charge partielle du loyer. La CAF distingue 3 aides : l'APL (logements conventionnés, dont CROUS), l'ALS (logements non conventionnés du parc privé) et l'ALF (étudiants avec charge familiale).",
      when: "Dès l'entrée dans le logement et la signature du bail.",
      where: "Site officiel caf.fr (section 'Faire une demande de prestation')",
      officialOrg: "Caisse d'Allocations Familiales (CAF)",
      officialUrl: "https://www.caf.fr",
      requiredDocuments: [
        "Attestation de loyer complétée et signée par le bailleur",
        "Contrat de bail locatif à votre nom",
        "Relevé d'Identité Bancaire (RIB) à votre nom",
        "Titre de séjour ou visa VLS-TS validé",
        "Justificatifs de votre situation (bourse, contrat de travail, contrat d'apprentissage)",
      ],
      steps: [
        "Faites remplir l'attestation de loyer par votre résidence ou propriétaire",
        "Déposez la demande sur votre espace caf.fr",
        "Renseignez avec exactitude vos ressources et votre statut",
        "Suivez l'état du dossier sur l'application mobile CAF",
      ],
      tip: "Réglementation 2026 : pour les étudiants internationaux non-UE avec titre de séjour, l'attribution dépend de votre situation personnelle (boursier, salarié ou apprenti).",
      sourceNote: "Source : Service-Public.fr (dispositions en vigueur depuis le 1er juillet 2026)",
    },
    {
      id: "cvec-contribution",
      stage: "Avant l'inscription universitaire",
      title: "Contribution Vie Étudiante et de Campus (CVEC)",
      description:
        "Cotisation légale obligatoire préalable à toute inscription dans l'enseignement supérieur en France (financement des services de santé, culture et sport du campus).",
      category: "academic",
      deadline: "Avant l'inscription définitive",
      what: "Attestation d'acquittement ou attestation d'exonération nécessaire pour finaliser votre inscription auprès de votre université.",
      when: "Avant de finaliser votre inscription administrative.",
      where: "Portail officiel cvec.etudiant.gouv.fr",
      officialOrg: "Les CROUS / Ministère de l'Enseignement Supérieur",
      officialUrl: "https://cvec.etudiant.gouv.fr",
      requiredDocuments: [
        "Attestation d'admission dans l'établissement d'enseignement supérieur",
        "Passeport",
        "Attestation de bourse du gouvernement si vous êtes boursier (pour exonération)",
      ],
      steps: [
        "Créez un compte sur cvec.etudiant.gouv.fr",
        "Déclarez votre établissement et votre statut",
        "Réglez par carte bancaire ou téléchargez l'attestation d'exonération",
        "Fournissez l'attestation comportant le QR code à la scolarité",
      ],
      tip: "Les étudiants boursiers du gouvernement français ou de leur université sont exonérés mais doivent impérativement télécharger l'attestation d'exonération.",
      sourceNote: "Source : cvec.etudiant.gouv.fr",
    },
    {
      id: "titre-sejour-renouvellement",
      stage: "Fin de première année (4 à 2 mois avant)",
      title: "Renouvellement du Titre de Séjour Étudiant",
      description:
        "Démarche annuelle obligatoire sur l'ANEF pour continuer vos études en France à la fin de validité de votre visa ou titre actuel.",
      category: "legal",
      deadline: "Strictement entre 4 et 2 mois avant expiration",
      what: "Délivrance d'une nouvelle carte de séjour pluriannuelle ou d'un an.",
      when: "Au moins 2 mois avant l'échéance de votre titre (pour éviter une taxe de retard de 180 €).",
      where: "Portail ANEF (administration-etrangers-en-france.interieur.gouv.fr)",
      officialOrg: "Ministère de l'Intérieur / Préfectures",
      officialUrl: "https://administration-etrangers-en-france.interieur.gouv.fr",
      requiredDocuments: [
        "Titre de séjour ou VLS-TS arrivant à échéance",
        "Relevés de notes de l'année écoulée et attestation d'assiduité",
        "Attestation d'inscription pour l'année universitaire suivante",
        "Justificatifs de ressources financières suffisantes (minimum 615 € / mois)",
        "Justificatif de domicile récent (< 6 mois)",
      ],
      steps: [
        "Rassemblez tous vos bulletins de notes et relevés bancaires",
        "Déposez votre demande de renouvellement sur l'ANEF",
        "Téléchargez l'Attestation de Prolongation (ADP) pour maintenir vos droits sociaux",
        "Retirez votre nouvelle carte en préfecture sur convocation",
      ],
      tip: "Le sérieux et la progression de vos études sont vérifiés par la préfecture lors du renouvellement.",
      sourceNote: "Source : Service-Public.fr / ANEF",
    },
  ] as Procedure[],

  // Housing — Where to search (NO marketplace, NO fake listings)
  housing: {
    title: "Où chercher un logement étudiant ?",
    description:
      "Voici les plateformes officielles et reconnues que vous devez utiliser pour chercher et sécuriser votre hébergement en France. Nous ne proposons pas d'annonces directes : référez-vous exclusivement aux portails officiels ci-dessous.",
    platforms: [
      {
        id: "crous-logement",
        name: "CROUS — Trouver un logement",
        operator: "Réseau des CROUS",
        description:
          "La plateforme publique officielle des résidences universitaires CROUS : chambres, studios et T1 équipés avec charges et internet inclus, à tarif social.",
        usefulFor: "Logements universitaires prioritaires aux étudiants, loyers modérés.",
        url: "https://trouverunlogement.lescrous.fr",
        badge: "Public & Social",
      },
      {
        id: "lokaviz",
        name: "Lokaviz",
        operator: "Centrale du logement étudiant CROUS",
        description:
          "Plateforme officielle du CROUS recensant des logements chez des propriétaires privés. Les offres sont contrôlées et labellisées 'Logement Étudiant' sans frais d'agence.",
        usefulFor: "Offres du parc privé vérifiées par les équipes du CROUS, sans frais de dossier.",
        url: "https://www.lokaviz.fr",
        badge: "Label CROUS",
      },
      {
        id: "mon-logement-etudiant",
        name: "Mon Logement Étudiant",
        operator: "Ministère de l'Enseignement Supérieur",
        description:
          "Portail gouvernemental regroupant les solutions de logement adaptées aux étudiants selon les villes universitaires.",
        usefulFor: "Orientation vers les résidences étudiantes publiques et privées conventionnées.",
        url: "https://www.etudiant.gouv.fr/fr/trouver-un-logement-1144",
        badge: "Portail d'État",
      },
      {
        id: "visale",
        name: "Garantie Visale",
        operator: "Action Logement",
        description:
          "Dispositif public de caution locative 100% gratuit. L'État français se porte garant pour vous auprès du bailleur privé ou du CROUS, sans avoir besoin d'un garant physique en France.",
        usefulFor: "Indispensable pour tous les étudiants internationaux de moins de 30 ans.",
        url: "https://www.visale.fr",
        badge: "Caution Gratuite",
      },
      {
        id: "dossierfacile",
        name: "DossierFacile",
        operator: "Ministère de la Transition Écologique et de la Cohésion des Territoires",
        description:
          "Service public gratuit qui vérifie vos pièces justificatives et les protège avec un filigrane de sécurité anti-fraude avant l'envoi aux propriétaires.",
        usefulFor: "Créer un dossier de location numérique certifié conforme et sécurisé.",
        url: "https://www.dossierfacile.logement.gouv.fr",
        badge: "Sécurité Anti-Fraude",
      },
      {
        id: "action-logement",
        name: "Action Logement (Avance Loca-Pass)",
        operator: "Action Logement",
        description:
          "Organisme paritaire proposant l'Avance Loca-Pass : un prêt à taux zéro pour financer le dépôt de garantie exigé à l'entrée dans le logement.",
        usefulFor: "Financer la caution (dépôt de garantie) sans intérêt bancaire.",
        url: "https://www.actionlogement.fr",
        badge: "Financement",
      },
    ] as HousingPlatform[],
    tips: [
      "Ne versez JAMAIS d'argent (caution, frais de réservation) avant la signature du contrat de bail officiel.",
      "Méfiez-vous des annonces exigeant un paiement par mandat cash, coupons Transcash, PCS ou Western Union : ce sont des escroqueries systématiques.",
      "Protégez systématiquement vos documents d'identité et bulletins avec DossierFacile avant de les transmettre.",
      "L'assurance habitation est légalement obligatoire dès le premier jour de la remise des clés.",
    ],
  },

  // Health Information
  health: {
    pillars: [
      {
        title: "Sécurité Sociale (100% Gratuite)",
        desc: "Affiliation obligatoire et gratuite sur etudiant-etranger.ameli.fr pour obtenir votre numéro NIR et votre Carte Vitale.",
        tag: "Prise en charge de base (~70%)",
      },
      {
        title: "Complémentaire Santé Solidaire (CSS)",
        desc: "Aide publique de l'Assurance Maladie prenant en charge les frais de santé restants gratuitement ou pour moins d'1 € par jour.",
        tag: "Prise en charge intégrale",
      },
      {
        title: "Médecin Traitant Déclaré",
        desc: "Déclarez un médecin traitant lors de votre première consultation pour être remboursé au taux plein et respecter le parcours de soins coordonnés.",
        tag: "Démarche indispensable",
      },
      {
        title: "Service de Santé Étudiante (SSE)",
        desc: "Centre médical présent sur chaque campus universitaire proposant consultations de généralistes, soins infirmiers et dépistages gratuits sans avance de frais.",
        tag: "Sur campus",
      },
    ],
    mentalHealth: [
      {
        name: "Santé Psy Étudiant",
        desc: "Dispositif gouvernemental offrant jusqu'à 8 séances gratuites chez un psychologue partenaire sans avance de frais.",
        url: "https://santepsy.etudiant.gouv.fr",
      },
      {
        name: "Numéro National 3114",
        desc: "Ligne d'écoute et de prévention de la détresse psychologique, gratuite, anonyme et accessible 24/7.",
        url: "tel:3114",
      },
      {
        name: "BAPU (Bureaux d'Aide Psychologique Universitaires)",
        desc: "Consultations de psychologues et psychiatres entièrement prises en charge par l'Assurance Maladie.",
        url: "https://www.etudiant.gouv.fr",
      },
    ],
  },

  // Financial Aid & Money (Accurate 2026 Information — NO fake calculators)
  financialAid: {
    crousFood: {
      title: "Repas CROUS à partir de 1 €",
      subtitle: "Restauration universitaire sociale et solidaire",
      effectiveDate: "En vigueur depuis le 4 mai 2026",
      desc: "Le repas complet équilibré (entrée + plat chaud + dessert) au tarif d'1 € est accessible à tous les étudiants dans l'ensemble des restaurants universitaires du réseau des CROUS.",
      howItWorks: [
        "Tarif de 1 € applicable dans tous les Resto U et cafétérias CROUS de France.",
        "Le compte de paiement dématérialisé Izly doit être activé pour bénéficier automatiquement de ce tarif.",
        "Le paiement s'effectue directement avec votre carte étudiante ou l'application mobile Izly.",
      ],
      officialUrl: "https://www.etudiant.gouv.fr/fr/les-repas-au-crous-1854",
      source: "Source officielle : Étudiant.gouv.fr / Service-Public.fr",
    },
    housingAidRules2026: {
      title: "Aides au logement de la CAF (APL, ALS, ALF)",
      effectiveDate: "Réglementation applicable depuis le 1er juillet 2026",
      desc: "La Caisse d'Allocations Familiales (CAF) propose des aides pour réduire le montant de votre loyer mensuel. Ne confondez pas les dispositifs :",
      distinction: [
        {
          code: "APL (Aide Personnalisée au Logement)",
          detail: "Attribuée pour les logements ayant fait l'objet d'une convention entre le propriétaire et l'État (la quasi-totalité des résidences universitaires CROUS et logements sociaux).",
        },
        {
          code: "ALS (Allocation de Logement Sociale)",
          detail: "Attribuée pour les logements qui ne sont pas conventionnés (la majorité des studios, appartements et colocations du parc privé).",
        },
        {
          code: "ALF (Allocation de Logement Familiale)",
          detail: "Attribuée aux étudiants ayant des personnes à charge ou des responsabilités familiales.",
        },
      ],
      internationalRules: {
        intro:
          "Pour les étudiants internationaux non ressortissants de l'Union Européenne titulaires d'un titre de séjour étudiant, l'éligibilité aux aides au logement dépend de votre situation personnelle :",
        eligibleCases: [
          "Étudiant bénéficiaire d'une bourse d'études sur critères sociaux de l'enseignement supérieur français.",
          "Étudiant exerçant une activité professionnelle salariée en France (respectant le quota légal).",
          "Étudiant engagé dans un contrat d'apprentissage ou un contrat de professionnalisation.",
        ],
        caution:
          "L'aide n'est pas automatique : chaque situation est instruite individuellement par votre caisse d'allocations familiales (CAF) sur présentation des pièces justificatives correspondantes.",
      },
      officialUrl: "https://www.service-public.fr/particuliers/vosdroits/N20360",
      source: "Source officielle : Service-Public.fr / CAF (Réglementation en vigueur depuis le 1er juillet 2026)",
    },
    otherAids: [
      {
        title: "Aide d'Urgence Ponctuelle CROUS (FNAU)",
        desc: "Soutien financier exceptionnel accordé en cas de rupture familiale, difficulté imprévue ou urgence matérielle, après évaluation par une assistante sociale universitaire.",
        usefulFor: "Secours financier ponctuel en cours d'année universitaire.",
        url: "https://www.etudiant.gouv.fr/fr/aides-specifiques-sociales-1779",
        badge: "Accompagnement Social",
      },
      {
        title: "Bourses du Gouvernement Français (Campus France)",
        desc: "Programmes de bourses d'excellence (France Excellence Eiffel, bourses d'ambassade, bourses de mobilité doctorale et de master).",
        usefulFor: "Financement des études et indemnité mensuelle.",
        url: "https://www.campusfrance.org/fr/bourses-etudiants-etrangers",
        badge: "Bourses d'Excellence",
      },
      {
        title: "Tarifs Réduits Transports & Culture (-26 ans)",
        desc: "Abonnements transports en commun à tarif jeune dans toutes les métropoles françaises, accès gratuit aux collections permanentes des musées et monuments nationaux pour les moins de 26 ans résidents en UE.",
        usefulFor: "Mobilité quotidienne et activités culturelles.",
        url: "https://www.service-public.fr",
        badge: "Avantages Jeunes",
      },
      {
        title: "Droit au Compte Bancaire (Banque de France)",
        desc: "Toute personne résidant régulièrement en France a légalement droit à un compte bancaire. En cas de refus d'une banque, la Banque de France désigne d'office un établissement bancaire qui est obligé de vous ouvrir un compte gratuit.",
        usefulFor: "Percevoir vos remboursements de santé et vos salaires.",
        url: "https://www.banque-france.fr/fr/a-votre-service/particuliers/droit-au-compte",
        badge: "Droit Garanti",
      },
    ],
  },

  // Student Jobs & Legal Work Quota (964 hours)
  jobs: {
    annualQuota: 964,
    smicNet: 9.22,
    rules: [
      {
        title: "Droit au travail automatique",
        desc: "Le visa étudiant VLS-TS ou titre de séjour vous autorise légalement à travailler sans formalité administrative préalable auprès de la préfecture.",
      },
      {
        title: "Plafond annuel strict de 964 heures",
        desc: "Ce plafond correspond à 60% de la durée légale du travail annuel en France. Il permet de concilier études et activité rémunérée (environ 18 à 20 heures par semaine durant les périodes de cours, ou temps plein durant les vacances).",
      },
      {
        title: "Les stages obligatoires ne comptent pas dans le quota",
        desc: "Les stages en entreprise prévus dans votre cursus universitaire font l'objet d'une convention de stage tripartite et ne sont pas décomptés de vos 964 heures. Une gratification minimale obligatoire s'applique dès 2 mois de stage.",
      },
      {
        title: "Rémunération obligatoire au SMIC horaire",
        desc: "Tout employeur en France est tenu de vous verser au minimum le Salaire Minimum Interprofessionnel de Croissance (SMIC légal en vigueur).",
      },
    ],
    cvTips: [
      "Limitez votre CV à une seule page claire, synthétique et sans fioritures.",
      "Précisez explicitement en haut de page : 'Titre de séjour étudiant — Autorisation de travail 60% (964h/an)'.",
      "Indiquez clairement vos disponibilités hebdomadaires compatibles avec votre emploi du temps universitaire.",
    ],
    platforms: [
      {
        name: "Jobaviz (CROUS)",
        desc: "La centrale officielle des offres d'emploi étudiant compatibles avec le rythme des études, gérée par le réseau des CROUS.",
        url: "https://www.jobaviz.fr",
      },
      {
        name: "1jeune1solution",
        desc: "Plateforme du gouvernement français pour l'emploi, l'alternance et les jobs saisonniers pour les jeunes.",
        url: "https://www.1jeune1solution.gouv.fr",
      },
      {
        name: "France Travail (Pôle Emploi)",
        desc: "Service public de l'emploi en France recensant les offres à temps partiel et les missions d'intérim.",
        url: "https://www.francetravail.fr",
      },
    ],
  },

  // Eco & Waste Sorting Items
  wasteItems: [
    {
      name: "Ordinateur portable ou batterie lithium",
      keywords: ["ordinateur", "laptop", "pc", "batterie", "lithium"],
      category: "DEEE",
      destination: "Bac DEEE en magasin ou déchèterie municipale",
      action: "Ne JAMAIS jeter aux ordures normales (risque majeur d'incendie). Rapportez-le dans les bacs de collecte des magasins d'électronique.",
      points: 35,
    },
    {
      name: "Cartons d'emballage et colis postaux",
      keywords: ["carton", "colis", "papier", "boite"],
      category: "Recyclable",
      destination: "Bac Jaune de tri sélectif",
      action: "Pliez et aplatissez le carton avant de le déposer.",
      points: 15,
    },
    {
      name: "Épluchures de légumes et marc de café",
      keywords: ["nourriture", "epluchures", "repas", "compost"],
      category: "Compost",
      destination: "Composteur collectif du campus ou bio-seau",
      action: "Déposez les restes organiques dans les points de compostage partagés.",
      points: 20,
    },
    {
      name: "Bouteilles et bocaux en verre",
      keywords: ["bouteille", "verre", "pot", "bocal"],
      category: "Verre",
      destination: "Colonne verte d'apport volontaire",
      action: "Le verre se recycle à l'infini : retirez simplement le bouchon ou couvercle.",
      points: 15,
    },
    {
      name: "Vêtements usagés et textiles",
      keywords: ["vetement", "habit", "manteau", "textile"],
      category: "Textile",
      destination: "Conteneur textile (Le Relais) ou friperie solidaire",
      action: "Mettez vos vêtements dans un sac fermé pour qu'ils soient réutilisés ou recyclés.",
      points: 25,
    },
  ] as WasteItem[],

  // Blood Donation Information
  bloodDonation: {
    efsUrl: "https://dondesang.efs.sante.fr",
    whyDonate: [
      { stat: "10 000", label: "Dons nécessaires chaque jour en France" },
      { stat: "1 don", label: "Permet de soigner jusqu'à 3 personnes malades ou blessées" },
      { stat: "45 min", label: "Durée globale (entretien, prélèvement et collation conviviale)" },
    ],
    steps: [
      { step: "1", title: "Accueil & Formulaire", desc: "Questionnaire confidentiel sur votre santé récente et vos voyages." },
      { step: "2", title: "Entretien Pré-Don", desc: "Entretien médical avec un soignant pour confirmer que le don s'effectue en totale sécurité." },
      { step: "3", title: "Prélèvement (10 min)", desc: "Prélèvement confortablement allongé dans un fauteuil ergonomique." },
      { step: "4", title: "Collation Offerte", desc: "Temps de repos obligatoire de 15 minutes avec encas et boissons fraîches offerts." },
    ],
    drives: [
      { title: "Maison du Don Permanente EFS CHU", address: "34 Boulevard Jean Monnet, Nantes", date: "Toute l'année (Lun-Sam)", hours: "8h00 - 18h30" },
      { title: "Collecte Mobile Campus Lombarderie", address: "Hall Bâtiment 1 Sciences Jean Perrin", date: "Permanences régulières", hours: "10h30 - 16h00" },
      { title: "Collecte Étudiante Campus Tertre", address: "Pôle Étudiant Tertre Droit/Lettres", date: "Permanences régulières", hours: "11h00 - 16h30" },
    ],
  },

  // Volunteering Opportunities
  volunteering: [
    {
      id: "v-1",
      title: "Distribution de paniers alimentaires pour étudiants",
      category: "Aide Alimentaire",
      organization: "Secours Populaire Français",
      location: "Campus universitaires",
      commitment: "2h / semaine",
      description: "Participez au tri et à la distribution de denrées alimentaires et produits de première nécessité pour les étudiants.",
      url: "https://www.secourspopulaire.fr",
    },
    {
      id: "v-2",
      title: "Mentorat solidaire & soutien scolaire",
      category: "Éducation & Jeunesse",
      organization: "AFEV",
      location: "Quartiers universitaires",
      commitment: "2h / semaine (valorisé en ECTS)",
      description: "Accompagnez un jeune dans son parcours scolaire. Engagement citoyen reconnu par votre université.",
      url: "https://afev.org",
    },
    {
      id: "v-3",
      title: "Actions citoyennes écologiques et zéro déchet",
      category: "Environnement",
      organization: "Collectif Zéro Déchet",
      location: "Parcs et berges universitaires",
      commitment: "Ponctuel (week-ends)",
      description: "Rejoignez une équipe d'étudiants pour préserver les espaces naturels et sensibiliser à la transition écologique.",
      url: "https://www.campuslink-france.fr",
    },
  ] as VolunteeringMission[],

  // Community Groups & Events
  community: {
    groups: [
      {
        name: "ESN (Erasmus Student Network)",
        category: "Association d'Accueil International",
        desc: "Accueil des étudiants internationaux : parrainage individuel (Buddy System), soirées interculturelles et visites à tarifs préférentiels.",
        url: "https://nantes.esnfrance.org",
      },
      {
        name: "Cafés des Langues & Tandems Linguistiques",
        category: "Échanges Linguistiques",
        desc: "Rencontres hebdomadaires gratuites pour pratiquer le français et d'autres langues avec des locuteurs natifs dans une ambiance informelle.",
        url: "https://www.campuslink-france.fr",
      },
      {
        name: "Guichet Unique International (Welcome Desk)",
        category: "Accueil Universitaire Officiel",
        desc: "Point d'accueil des universités regroupant préfecture, CPAM, CAF et réseaux de transports en début d'année pour vous accompagner.",
        url: "https://www.etudiant.gouv.fr",
      },
    ],
    events: [
      {
        id: "ev-1",
        title: "Café des Langues & Soirée d'Accueil",
        date: "Tous les mercredis • 19h30",
        location: "Centre-Ville & Campus",
        organizer: "ESN / Associations Étudiantes",
        price: "Gratuit",
        description: "Rencontrez des étudiants du monde entier et échangez en français dans une atmosphère bienveillante.",
      },
      {
        id: "ev-2",
        title: "Atelier Cuisine du Monde & Repas Solidaire",
        date: "Samedis (mensuel) • 11h30",
        location: "Maison de Quartier",
        organizer: "Collectif Solidaire Étudiant",
        price: "Entrée libre",
        description: "Partagez et cuisinez ensemble des recettes traditionnelles de différents pays.",
      },
    ] as CommunityEvent[],
  },

  // Directory of Official French Governmental Resources
  officialResources: [
    {
      id: "campus-france",
      name: "Campus France",
      acronym: "CF",
      category: "Études & Accueil",
      description: "Agence nationale pour la promotion de l'enseignement supérieur français et l'accueil des étudiants internationaux.",
      services: ["Dossier Études en France (EEF)", "Bourses de mobilité", "Fiches pratiques des villes"],
      url: "https://www.campusfrance.org",
    },
    {
      id: "anef",
      name: "ANEF (Administration Numérique des Étrangers en France)",
      acronym: "ANEF",
      category: "Séjour & Visas",
      description: "Portail officiel du Ministère de l'Intérieur pour les démarches de séjour en France.",
      services: ["Validation visa VLS-TS", "Renouvellement titre étudiant", "Attestation de prolongation (ADP)"],
      url: "https://administration-etrangers-en-france.interieur.gouv.fr",
    },
    {
      id: "etudiant-gouv",
      name: "Portail Étudiant.gouv.fr & Les CROUS",
      acronym: "CROUS",
      category: "Vie Étudiante & Resto U",
      description: "Gestion des résidences universitaires, restauration sociale (repas dès 1 €) et CVEC.",
      services: ["Repas dès 1 € avec Izly", "Résidences universitaires", "Attestation CVEC", "Aides d'urgence FNAU"],
      url: "https://www.etudiant.gouv.fr",
    },
    {
      id: "ameli",
      name: "Assurance Maladie (Ameli)",
      acronym: "CPAM",
      category: "Santé Publique",
      description: "Organisme de Sécurité Sociale garantissant l'accès universel et gratuit aux soins médicaux.",
      services: ["Affiliation gratuite étudiant étranger", "Délivrance numéro NIR", "Carte Vitale", "CSS"],
      url: "https://etudiant-etranger.ameli.fr",
    },
    {
      id: "caf",
      name: "Caisse d'Allocations Familiales (CAF)",
      acronym: "CAF",
      category: "Aides au Logement",
      description: "Organisme public versant les aides au logement (APL, ALS, ALF).",
      services: ["Dossier aide au logement", "Suivi des versements mensuels", "Attestation de droits"],
      url: "https://www.caf.fr",
    },
    {
      id: "visale",
      name: "Garantie Visale (Action Logement)",
      acronym: "VISALE",
      category: "Caution Locative",
      description: "Garantie locative gratuite de l'État pour tous les étudiants jusqu'à 30 ans sans garant en France.",
      services: ["Caution 100% gratuite", "Acceptée par les résidences CROUS et bailleurs privés"],
      url: "https://www.visale.fr",
    },
    {
      id: "service-public",
      name: "Service-Public.fr",
      acronym: "SP",
      category: "Portail Officiel de l'État",
      description: "Le site officiel de l'administration française recensant l'intégralité des réglementations et droits civiques.",
      services: ["Fiches réglementaires à jour", "Droits au travail 964h", "Modèles de documents"],
      url: "https://www.service-public.fr",
    },
    {
      id: "dossierfacile",
      name: "DossierFacile",
      acronym: "DF",
      category: "Logement Sécurisé",
      description: "Service public gratuit labellisant et filigranant vos pièces de dossier locatif contre la fraude.",
      services: ["Dossier certifié conforme", "Filigrane de sécurité anti-usurpation"],
      url: "https://www.dossierfacile.logement.gouv.fr",
    },
    {
      id: "efs",
      name: "Établissement Français du Sang",
      acronym: "EFS",
      category: "Santé Civique",
      description: "Opérateur public de la transfusion sanguine en France.",
      services: ["Trouver une collecte", "Prise de rendez-vous en ligne", "Auto-évaluation médicale"],
      url: "https://dondesang.efs.sante.fr",
    },
    {
      id: "france-travail",
      name: "France Travail (Pôle Emploi)",
      acronym: "FT",
      category: "Emploi & Alternance",
      description: "Service public de l'emploi pour trouver des missions compatibles avec les études.",
      services: ["Offres de jobs étudiants", "Dispositif 1jeune1solution", "Guides légaux du contrat"],
      url: "https://www.francetravail.fr",
    },
    {
      id: "ademe",
      name: "ADEME (Transition Écologique)",
      acronym: "ADEME",
      category: "Écologie & Déchets",
      description: "Agence publique éditrice des guides officiels du tri sélectif et du recyclage.",
      services: ["Outil 'Que faire de mes déchets ?'", "Carte de la réparation et du réemploi"],
      url: "https://agirpourlatransition.ademe.fr",
    },
  ] as OfficialResource[],
};
