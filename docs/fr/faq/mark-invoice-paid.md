---
title: "Marquer une facture comme payée"
description: "Pour marquer une facture comme payée : ouvrez la facture depuis la liste."
last_verified: 2026-07-02
chatbot:
  triggers: ["mark invoice paid", "invoice paid", "mark as paid", "record payment", "received payment", "payment received", "factuur betaald", "betaald markeren", "factuur als betaald", "rechnung als bezahlt", "marquer payee"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I record a partial payment?", "How do I send a payment reminder?", "How do I view overdue invoices?"]
---

Pour marquer une facture comme payée :
1. Ouvrez la facture depuis la liste
2. Cliquez sur "Marquer comme payée" dans l'en-tête de la facture ; un seul clic et le statut passe à Payée, et une écriture de paiement est créée pour le montant total
3. Vous voulez enregistrer la date, le mode de paiement ou une référence ? Utilisez plutôt "Enregistrer un paiement" dans la section Paiement

Remarque : une facture en brouillon doit d'abord être finalisée avant de pouvoir être marquée comme payée ou avant qu'un paiement puisse être enregistré. Auparavant, un paiement sur un brouillon créait une facture sans numéro avec le statut Payée, ce qui n'est plus autorisé. Pour enregistrer un paiement sur un brouillon, envoyez ou finalisez d'abord la facture pour qu'elle reçoive un numéro, puis enregistrez le paiement.

Si une facture plus ancienne s'affiche comme Payée, mais que le bloc de paiement indique qu'aucun paiement n'est enregistré, elle a probablement été marquée comme payée via une importation ou un ancien parcours sans qu'une écriture de paiement soit créée. Utilisez "Enregistrer le premier paiement" pour ajouter le paiement et faire disparaître le message.
