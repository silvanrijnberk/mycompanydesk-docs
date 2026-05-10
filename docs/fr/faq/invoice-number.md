---
title: "Invoice number"
last_verified: 2026-05-09
chatbot:
  triggers: ["invoice number", "change invoice number", "invoice numbering", "set invoice number", "numbering format", "factuurnummer", "factuurnummering", "rechnungsnummer", "numero facture"]
  actions:
    - { label: "Open company invoicing", to: "/company?section=invoicing" }
  follow_up: ["How do I set up my company settings?", "How do I change the invoice format?", "How do I create my first invoice?"]
---

La numerotation des factures est geree automatiquement :
• Chaque nouvelle facture finalisee recoit le numero suivant
• Le format suit les parametres de votre entreprise
• Vous pouvez voir ce format dans Parametres → Profil entreprise

Les brouillons peuvent generalement etre supprimes avant validation sans utiliser le numero suivant enregistre.
