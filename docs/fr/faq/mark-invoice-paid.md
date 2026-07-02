---
title: "Marquer une facture comme payée"
last_verified: 2026-07-02
chatbot:
  triggers: ["mark invoice paid", "invoice paid", "mark as paid", "record payment", "received payment", "payment received", "factuur betaald", "betaald markeren", "factuur als betaald", "rechnung als bezahlt", "marquer payee"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I record a partial payment?", "How do I send a payment reminder?", "How do I view overdue invoices?"]
---

Pour marquer une facture comme payée :
1. Ouvrez la facture depuis la liste
2. Cliquez sur "Marquer comme payée" dans l'en-tête de la facture ; un seul clic et le statut passe à Payée
3. Vous voulez enregistrer la date, le mode de paiement ou une référence ? Utilisez plutôt "Enregistrer un paiement" dans la section Paiement

Astuce : si le statut ne change pas, actualisez la liste et vérifiez sur la page de détail que le paiement a bien été enregistré.
