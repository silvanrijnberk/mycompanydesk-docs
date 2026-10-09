---
title: "Paiement partiel"
description: "Pour enregistrer un paiement partiel sur une facture : ouvrez la facture depuis la liste, cliquez sur Enregistrer un paiement ou l'action de paiement."
last_verified: 2026-10-09
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

Un montant supérieur au restant dû est refusé : le formulaire prévient avec « Plus que le montant restant ({amount}) » avant l'enregistrement, au lieu d'afficher un nouveau solde jusqu'après le clic. La date de paiement ne peut pas se situer dans le futur ; le champ de date ne propose donc qu'« Aujourd'hui » en raccourci.

Astuce : Le solde restant est suivi automatiquement et apparaît sur la page de détail de la facture. Les factures partiellement payées reçoivent aussi leur propre suggestion de rappel pour demander le solde restant. Dans le portail client, les factures partiellement payées affichent également le montant déjà reçu et le solde restant avant que le client ne règle.
