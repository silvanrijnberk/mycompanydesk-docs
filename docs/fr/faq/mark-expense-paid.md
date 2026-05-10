---
title: "Mark an expense as paid"
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
2. Cliquez sur le statut ou « Marquer comme payée »
3. Entrez optionnellement la date de paiement
4. Enregistrez - le statut passe à Payée
