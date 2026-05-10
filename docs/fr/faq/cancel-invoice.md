---
title: Cancel an invoice
last_verified: 2026-05-09
chatbot:
  triggers: ["cancel invoice", "void invoice", "annul invoice", "reverse invoice", "credit note", "undo invoice", "factuur annuleren", "factuur ongedaan", "hoe annuleer ik een factuur", "rechnung stornieren", "wie storniere ich eine rechnung", "annuler facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I create a credit note?", "How do I delete a draft invoice?", "How do I view cancelled invoices?"]
---

Pour annuler une facture envoyee :
1. Ouvrez la facture depuis la liste
2. Dans la barre laterale, faites defiler jusqu'a la section « Zone de danger »
3. Cliquez sur « Annuler »
4. Le statut passe a Annulee

Si la facture est deja entierement ou partiellement payee, ouvrez la facture d'origine et utilisez l'action de creation d'avoir.
