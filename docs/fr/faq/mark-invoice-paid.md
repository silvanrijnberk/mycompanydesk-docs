---
title: Mark invoice paid
last_verified: 2026-05-09
chatbot:
  triggers: ["mark invoice paid", "invoice paid", "mark as paid", "record payment", "received payment", "payment received", "factuur betaald", "betaald markeren", "factuur als betaald", "rechnung als bezahlt", "marquer payee"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I record a partial payment?", "How do I send a payment reminder?", "How do I view overdue invoices?"]
---
Pour marquer une facture comme payée :
1. Ouvrez la facture depuis la liste
2. Cliquez sur « Marquer comme payée » ou le bouton de statut
3. Entrez optionnellement la date et le mode de paiement
4. Enregistrez - le statut passe à Payée
