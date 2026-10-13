---
title: "Plusieurs devises"
description: "Votre comptabilité reste en euros. Factures, devis et rapports sont en EUR ; les reçus en devise étrangère sont convertis en montant en euros."
last_verified: 2026-10-13
chatbot:
  triggers: ["multi currency", "different currency", "foreign currency", "invoice in dollars", "invoice in pounds", "andere valuta", "vreemde valuta", "andere wahrung", "devise etrangere", "dollar invoice", "pound invoice"]
  actions:
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I set up my company settings?", "How do I change my language?"]
---

MyCompanyDesk garde votre comptabilité en euros. Les factures, les devis et les rapports sont tous en EUR. Il n'existe aucun réglage de devise ni de sélecteur de devise par document ; c'est un choix produit délibéré, pas une préférence manquante.

Les documents de dépense dans une autre devise sont pris en charge. Un reçu de l'étranger ou une facture fournisseur en dollars ou en livres est enregistré avec la devise d'origine et le montant du document, tandis que la dépense elle-même porte un montant en euros pour vos comptes : l'écran de scan demande le montant en euros pour lequel votre banque convertit le document, et un paiement qui apparaît sur un compte bancaire connecté règle la dépense au montant réellement débité par la banque. Voir Devise étrangère dans [Dépenses](/fr/features/expenses#devise-étrangère).

Si vous facturez un client à l'étranger, la facture reste en euros.

Astuce : convenez à l'avance avec vos clients étrangers d'une facturation en euros. Ils paient le montant en euros et la conversion éventuelle se fait de leur côté.
