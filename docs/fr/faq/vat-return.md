---
title: VAT Return
last_verified: 2026-05-09
chatbot:
  triggers: ["vat return", "vat filing", "file vat", "prepare vat", "vat report", "btw aangifte", "btw indienen", "btw berekening", "mwst meldung", "declaration tva"]
  actions:
    - { label: "Open VAT", to: "/vat" }
    - { label: "Open reports", to: "/reports" }
  follow_up: ["How do I add my VAT number?", "How do I view financial reports?", "How do I export data for my accountant?"]
---

Pour consulter les chiffres de TVA dans l application :
1. Ouvrez TVA
2. Selectionnez la periode a verifier
3. Consultez les totaux TVA calcules et ouvrez les factures ou depenses liees si vous devez controler les enregistrements source
4. Utilisez l option d export si vous avez besoin des chiffres affiches en dehors de l application

L application affiche les calculs de TVA pour vos donnees enregistrees, mais elle ne depose ni ne transmet la declaration a votre place.
