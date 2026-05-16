import { defineConfig } from 'vitepress'

const sharedHead = [
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ['meta', { name: 'theme-color', content: '#4f6ef7' }],
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:title', content: 'MyCompanyDesk Docs' }],
  ['meta', { property: 'og:description', content: 'Learn how to use MyCompanyDesk to manage invoices, expenses, customers, and more.' }],
]

function sidebarEN() {
  return [
    {
      text: 'Getting Started',
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/getting-started/introduction' },
        { text: 'Create Your Account', link: '/getting-started/create-account' },
        { text: 'Set Up Your Company', link: '/getting-started/company-setup' },
        { text: 'Your First Invoice', link: '/getting-started/first-invoice' },
      ],
    },
    {
      text: 'Features',
      collapsed: false,
      items: [
        { text: 'Dashboard', link: '/features/dashboard' },
        { text: 'Bank Feed', link: '/features/bank' },
        { text: 'Setup Wizard', link: '/features/setup-wizard' },
        { text: 'Invoices', link: '/features/invoices' },
        { text: 'Quotes', link: '/features/quotes' },
        { text: 'Expenses', link: '/features/expenses' },
        { text: 'Customers', link: '/features/customers' },
        { text: 'Projects', link: '/features/projects' },
        { text: 'Contracts', link: '/features/contracts' },
        { text: 'Objects & Assets', link: '/features/objects' },
        { text: 'Recurring Invoices', link: '/features/recurring-invoices' },
        { text: 'Recurring Expenses', link: '/features/recurring-expenses' },
        { text: 'Time Registration', link: '/features/time-registration' },
        { text: 'Reports', link: '/features/reports' },
        { text: 'VAT Management', link: '/features/vat' },
        { text: 'Domains, Website & Inbox', link: '/features/domains-website-inbox' },
      ],
    },
    {
      text: 'Settings',
      collapsed: false,
      items: [
        { text: 'Settings overview', link: '/settings/' },
        { text: 'Company Settings', link: '/settings/company' },
        { text: 'Email Integration', link: '/settings/email' },
        { text: 'PDF Customization', link: '/settings/pdf' },
        { text: 'Team Management', link: '/settings/team' },
        { text: 'Billing & Plans', link: '/settings/billing' },
      ],
    },
    {
      text: 'Account',
      collapsed: true,
      items: [
        { text: 'Profile', link: '/account/profile' },
        { text: 'Security', link: '/account/security' },
        { text: 'Data Import & Export', link: '/account/data' },
      ],
    },
    {
      text: 'FAQ',
      collapsed: true,
      items: [
        { text: 'All FAQ entries', link: '/faq/' },
      ],
    },
    {
      text: 'Advanced',
      collapsed: true,
      items: [
        { text: 'Customer Portal', link: '/advanced/customer-portal' },
        { text: 'Business Page', link: '/advanced/business-page' },
        { text: 'AI Features', link: '/advanced/ai-features' },
        { text: 'Receipt Scanning', link: '/advanced/receipt-scanning' },
        { text: 'API Integration', link: '/advanced/api' },
        { text: 'Keyboard Shortcuts', link: '/advanced/keyboard-shortcuts' },
      ],
    },
  ]
}

function sidebarNL() {
  return [
    {
      text: 'Aan de slag',
      collapsed: false,
      items: [
        { text: 'Introductie', link: '/nl/getting-started/introduction' },
        { text: 'Account aanmaken', link: '/nl/getting-started/create-account' },
        { text: 'Bedrijf instellen', link: '/nl/getting-started/company-setup' },
        { text: 'Je eerste factuur', link: '/nl/getting-started/first-invoice' },
      ],
    },
    {
      text: 'Functies',
      collapsed: false,
      items: [
        { text: 'Dashboard', link: '/nl/features/dashboard' },
        { text: 'Bankfeed', link: '/nl/features/bank' },
        { text: 'Facturen', link: '/nl/features/invoices' },
        { text: 'Offertes', link: '/nl/features/quotes' },
        { text: 'Uitgaven', link: '/nl/features/expenses' },
        { text: 'Klanten', link: '/nl/features/customers' },
        { text: 'Projecten', link: '/nl/features/projects' },
        { text: 'Contracten', link: '/nl/features/contracts' },
        { text: 'Objecten & Assets', link: '/nl/features/objects' },
        { text: 'Terugkerende facturen', link: '/nl/features/recurring-invoices' },
        { text: 'Terugkerende uitgaven', link: '/nl/features/recurring-expenses' },
        { text: 'Tijdregistratie', link: '/nl/features/time-registration' },
        { text: 'Rapporten', link: '/nl/features/reports' },
        { text: 'BTW-beheer', link: '/nl/features/vat' },
        { text: 'Domeinen, website & inbox', link: '/nl/features/domains-website-inbox' },
      ],
    },
    {
      text: 'Instellingen',
      collapsed: false,
      items: [
        { text: 'Bedrijfsinstellingen', link: '/nl/settings/company' },
        { text: 'E-mailintegratie', link: '/nl/settings/email' },
        { text: 'PDF-aanpassing', link: '/nl/settings/pdf' },
        { text: 'Teambeheer', link: '/nl/settings/team' },
        { text: 'Abonnement & Plannen', link: '/nl/settings/billing' },
      ],
    },
    {
      text: 'Account',
      collapsed: true,
      items: [
        { text: 'Profiel', link: '/nl/account/profile' },
        { text: 'Beveiliging', link: '/nl/account/security' },
        { text: 'Gegevens importeren & exporteren', link: '/nl/account/data' },
      ],
    },
    {
      text: 'Veelgestelde vragen',
      collapsed: true,
      items: [
        { text: 'Alle FAQ-onderwerpen', link: '/nl/faq/' },
      ],
    },
    {
      text: 'Geavanceerd',
      collapsed: true,
      items: [
        { text: 'Klantenportaal', link: '/nl/advanced/customer-portal' },
        { text: 'Bedrijfspagina', link: '/nl/advanced/business-page' },
        { text: 'AI-functies', link: '/nl/advanced/ai-features' },
        { text: 'Bonnen scannen', link: '/nl/advanced/receipt-scanning' },
        { text: 'API-integratie', link: '/nl/advanced/api' },
        { text: 'Sneltoetsen', link: '/nl/advanced/keyboard-shortcuts' },
      ],
    },
  ]
}

function sidebarDE() {
  return [
    {
      text: 'Erste Schritte',
      collapsed: false,
      items: [
        { text: 'Einführung', link: '/de/getting-started/introduction' },
        { text: 'Konto erstellen', link: '/de/getting-started/create-account' },
        { text: 'Unternehmen einrichten', link: '/de/getting-started/company-setup' },
        { text: 'Ihre erste Rechnung', link: '/de/getting-started/first-invoice' },
      ],
    },
    {
      text: 'Funktionen',
      collapsed: false,
      items: [
        { text: 'Dashboard', link: '/de/features/dashboard' },
        { text: 'Bankfeed', link: '/de/features/bank' },
        { text: 'Rechnungen', link: '/de/features/invoices' },
        { text: 'Angebote', link: '/de/features/quotes' },
        { text: 'Ausgaben', link: '/de/features/expenses' },
        { text: 'Kunden', link: '/de/features/customers' },
        { text: 'Projekte', link: '/de/features/projects' },
        { text: 'Verträge', link: '/de/features/contracts' },
        { text: 'Objekte & Anlagen', link: '/de/features/objects' },
        { text: 'Wiederkehrende Rechnungen', link: '/de/features/recurring-invoices' },
        { text: 'Wiederkehrende Ausgaben', link: '/de/features/recurring-expenses' },
        { text: 'Zeiterfassung', link: '/de/features/time-registration' },
        { text: 'Berichte', link: '/de/features/reports' },
        { text: 'USt.-Verwaltung', link: '/de/features/vat' },
        { text: 'Domains, Website & Posteingang', link: '/de/features/domains-website-inbox' },
      ],
    },
    {
      text: 'Einstellungen',
      collapsed: false,
      items: [
        { text: 'Unternehmenseinstellungen', link: '/de/settings/company' },
        { text: 'E-Mail-Integration', link: '/de/settings/email' },
        { text: 'PDF-Anpassung', link: '/de/settings/pdf' },
        { text: 'Teamverwaltung', link: '/de/settings/team' },
        { text: 'Abonnement & Pläne', link: '/de/settings/billing' },
      ],
    },
    {
      text: 'Konto',
      collapsed: true,
      items: [
        { text: 'Profil', link: '/de/account/profile' },
        { text: 'Sicherheit', link: '/de/account/security' },
        { text: 'Datenimport & -export', link: '/de/account/data' },
      ],
    },
    {
      text: 'FAQ',
      collapsed: true,
      items: [
        { text: 'Alle FAQ-Einträge', link: '/de/faq/' },
      ],
    },
    {
      text: 'Erweitert',
      collapsed: true,
      items: [
        { text: 'Kundenportal', link: '/de/advanced/customer-portal' },
        { text: 'Unternehmensseite', link: '/de/advanced/business-page' },
        { text: 'KI-Funktionen', link: '/de/advanced/ai-features' },
        { text: 'Belegerfassung', link: '/de/advanced/receipt-scanning' },
        { text: 'API-Integration', link: '/de/advanced/api' },
        { text: 'Tastenkürzel', link: '/de/advanced/keyboard-shortcuts' },
      ],
    },
  ]
}

function sidebarFR() {
  return [
    {
      text: 'Premiers pas',
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/fr/getting-started/introduction' },
        { text: 'Créer votre compte', link: '/fr/getting-started/create-account' },
        { text: 'Configurer votre entreprise', link: '/fr/getting-started/company-setup' },
        { text: 'Votre première facture', link: '/fr/getting-started/first-invoice' },
      ],
    },
    {
      text: 'Fonctionnalités',
      collapsed: false,
      items: [
        { text: 'Tableau de bord', link: '/fr/features/dashboard' },
        { text: 'Flux bancaire', link: '/fr/features/bank' },
        { text: 'Factures', link: '/fr/features/invoices' },
        { text: 'Devis', link: '/fr/features/quotes' },
        { text: 'Dépenses', link: '/fr/features/expenses' },
        { text: 'Clients', link: '/fr/features/customers' },
        { text: 'Projets', link: '/fr/features/projects' },
        { text: 'Contrats', link: '/fr/features/contracts' },
        { text: 'Objets & Actifs', link: '/fr/features/objects' },
        { text: 'Factures récurrentes', link: '/fr/features/recurring-invoices' },
        { text: 'Dépenses récurrentes', link: '/fr/features/recurring-expenses' },
        { text: 'Suivi du temps', link: '/fr/features/time-registration' },
        { text: 'Rapports', link: '/fr/features/reports' },
        { text: 'Gestion de la TVA', link: '/fr/features/vat' },
        { text: 'Domaines, site web et boîte de réception', link: '/fr/features/domains-website-inbox' },
      ],
    },
    {
      text: 'Paramètres',
      collapsed: false,
      items: [
        { text: "Paramètres de l'entreprise", link: '/fr/settings/company' },
        { text: 'Intégration e-mail', link: '/fr/settings/email' },
        { text: 'Personnalisation PDF', link: '/fr/settings/pdf' },
        { text: "Gestion de l'équipe", link: '/fr/settings/team' },
        { text: 'Abonnement & Forfaits', link: '/fr/settings/billing' },
      ],
    },
    {
      text: 'Compte',
      collapsed: true,
      items: [
        { text: 'Profil', link: '/fr/account/profile' },
        { text: 'Sécurité', link: '/fr/account/security' },
        { text: 'Import & Export de données', link: '/fr/account/data' },
      ],
    },
    {
      text: 'FAQ',
      collapsed: true,
      items: [
        { text: 'Toutes les FAQ', link: '/fr/faq/' },
      ],
    },
    {
      text: 'Avancé',
      collapsed: true,
      items: [
        { text: 'Portail client', link: '/fr/advanced/customer-portal' },
        { text: "Page d'entreprise", link: '/fr/advanced/business-page' },
        { text: 'Fonctions IA', link: '/fr/advanced/ai-features' },
        { text: 'Numérisation de reçus', link: '/fr/advanced/receipt-scanning' },
        { text: 'Intégration API', link: '/fr/advanced/api' },
        { text: 'Raccourcis clavier', link: '/fr/advanced/keyboard-shortcuts' },
      ],
    },
  ]
}

export default defineConfig({
  title: 'MyCompanyDesk',
  description: 'Documentation for MyCompanyDesk — the all-in-one accounting platform for freelancers and small businesses.',
  cleanUrls: true,
  head: sharedHead,
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/getting-started/introduction' },
          { text: 'Features', link: '/features/dashboard' },
          { text: 'Settings', link: '/settings/company' },
          { text: 'App', link: 'https://app.mycompanydesk.com' },
        ],
        sidebar: sidebarEN(),
      },
    },
    nl: {
      label: 'Nederlands',
      lang: 'nl',
      themeConfig: {
        nav: [
          { text: 'Handleiding', link: '/nl/getting-started/introduction' },
          { text: 'Functies', link: '/nl/features/dashboard' },
          { text: 'Instellingen', link: '/nl/settings/company' },
          { text: 'App', link: 'https://app.mycompanydesk.com' },
        ],
        sidebar: sidebarNL(),
        outlineTitle: 'Op deze pagina',
        lastUpdatedText: 'Laatst bijgewerkt',
        docFooter: { prev: 'Vorige', next: 'Volgende' },
        editLink: {
          pattern: 'https://github.com/silvanrijnberk/mycompanydesk-docs/edit/main/docs/:path',
          text: 'Bewerk deze pagina',
        },
      },
    },
    de: {
      label: 'Deutsch',
      lang: 'de',
      themeConfig: {
        nav: [
          { text: 'Anleitung', link: '/de/getting-started/introduction' },
          { text: 'Funktionen', link: '/de/features/dashboard' },
          { text: 'Einstellungen', link: '/de/settings/company' },
          { text: 'App', link: 'https://app.mycompanydesk.com' },
        ],
        sidebar: sidebarDE(),
        outlineTitle: 'Auf dieser Seite',
        lastUpdatedText: 'Zuletzt aktualisiert',
        docFooter: { prev: 'Zurück', next: 'Weiter' },
        editLink: {
          pattern: 'https://github.com/silvanrijnberk/mycompanydesk-docs/edit/main/docs/:path',
          text: 'Diese Seite bearbeiten',
        },
      },
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/fr/getting-started/introduction' },
          { text: 'Fonctionnalités', link: '/fr/features/dashboard' },
          { text: 'Paramètres', link: '/fr/settings/company' },
          { text: 'App', link: 'https://app.mycompanydesk.com' },
        ],
        sidebar: sidebarFR(),
        outlineTitle: 'Sur cette page',
        lastUpdatedText: 'Dernière mise à jour',
        docFooter: { prev: 'Précédent', next: 'Suivant' },
        editLink: {
          pattern: 'https://github.com/silvanrijnberk/mycompanydesk-docs/edit/main/docs/:path',
          text: 'Modifier cette page',
        },
      },
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'MyCompanyDesk Docs',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/silvanrijnberk/RichardTool' },
    ],
    search: {
      provider: 'local',
    },
    footer: {
      message: 'MyCompanyDesk — Accounting made simple.',
      copyright: 'Copyright © 2024-present MyCompanyDesk',
    },
    editLink: {
      pattern: 'https://github.com/silvanrijnberk/mycompanydesk-docs/edit/main/docs/:path',
      text: 'Edit this page',
    },
  },
})
