---
title: "Plusieurs devises"
last_verified: 2026-07-02
chatbot:
  triggers: ["multi currency", "different currency", "foreign currency", "invoice in dollars", "invoice in pounds", "andere valuta", "vreemde valuta", "andere wahrung", "devise etrangere", "dollar invoice", "pound invoice"]
  actions:
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I set up my company settings?", "How do I change my language?"]
---

MyCompanyDesk fonctionne uniquement en euros. Toutes les factures, tous les devis, toutes les dépenses et tous les rapports sont en EUR. Il n'existe aucun réglage de devise ni de sélecteur de devise par document ; c'est un choix produit délibéré, pas une préférence manquante.

Si vous facturez un client à l'étranger, la facture reste en euros.

Astuce : convenez à l'avance avec vos clients étrangers d'une facturation en euros. Ils paient le montant en euros et la conversion éventuelle se fait de leur côté.
