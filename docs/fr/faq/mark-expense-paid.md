---
title: "Marquer une dépense comme payée"
last_verified: 2026-05-09
chatbot:
  triggers:
    - "mark expense paid"
    - "expense paid"
    - "expense payment"
    - "pay expense"
    - "expense as paid"
    - "uitgave betaald"
    - "uitgave als betaald"
    - "ausgabe bezahlt"
    - "depense payee"
  actions:
    - { label: "Open expenses", to: "/expenses" }
  follow_up:
    - "How do I view all unpaid expenses?"
    - "How do I export expense data?"
---

Pour marquer une dépense comme payée :
1. Ouvrez la dépense depuis la liste
2. Cliquez sur « Marquer comme payé »
3. Le statut passe immédiatement à Payée

Ce simple clic suffit : aucune fenêtre de date de paiement ne s'affiche et il n'y a pas d'enregistrement séparé.
