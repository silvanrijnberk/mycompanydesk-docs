---
title: "Déclaration de TVA"
description: "Pour consulter vos chiffres de TVA : ouvrez TVA, sélectionnez la période et consultez les totaux calculés et les factures ou dépenses liées."
last_verified: 2026-05-09
chatbot:
  triggers: ["vat return", "vat filing", "file vat", "prepare vat", "vat report", "btw aangifte", "btw indienen", "btw berekening", "mwst meldung", "declaration tva"]
  actions:
    - { label: "Open VAT", to: "/vat" }
    - { label: "Open reports", to: "/reports" }
  follow_up: ["How do I add my VAT number?", "How do I view financial reports?", "How do I export data for my accountant?"]
---

Pour consulter les chiffres de TVA dans l'application :
1. Ouvrez TVA
2. Sélectionnez la période à vérifier
3. Consultez les totaux de TVA calculés et ouvrez les factures ou dépenses liées si vous devez contrôler les enregistrements source
4. Utilisez l'option d'export si vous avez besoin des chiffres affichés en dehors de l'application

L'application affiche les calculs de TVA pour vos données enregistrées, mais elle ne dépose ni ne transmet la déclaration à votre place.
