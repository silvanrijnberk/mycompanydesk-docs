---
title: "Paiement partiel"
last_verified: 2026-05-09
chatbot:
  triggers: ["partial payment", "record partial payment", "half payment", "part payment", "deposit received", "gedeeltelijke betaling", "deelbetaling", "aanbetaling ontvangen", "teilzahlung", "paiement partiel", "acompte recu"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I mark an invoice as fully paid?", "How do I send a reminder for the remaining balance?", "How do I view all partially paid invoices?"]
---

Pour enregistrer un paiement partiel sur une facture :
1. Ouvrez la facture depuis la liste
2. Cliquez sur « Enregistrer un paiement » ou l'action de paiement
3. Saisissez le montant reçu (inférieur au total)
4. Enregistrez - le statut de la facture passe à Partiellement payée
5. Répétez lorsque des paiements supplémentaires arrivent

Astuce : Le solde restant est suivi automatiquement et apparaît sur la page de détail de la facture.
