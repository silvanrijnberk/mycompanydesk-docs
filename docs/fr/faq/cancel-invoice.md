---
title: "Annuler une facture"
last_verified: 2026-07-02
chatbot:
  triggers: ["cancel invoice", "void invoice", "annul invoice", "reverse invoice", "credit note", "undo invoice", "factuur annuleren", "factuur ongedaan", "hoe annuleer ik een factuur", "rechnung stornieren", "wie storniere ich eine rechnung", "annuler facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I create a credit note?", "How do I delete a draft invoice?", "How do I view cancelled invoices?"]
---

Pour annuler une facture envoyée :
1. Ouvrez la facture depuis votre liste de factures
2. Dans la barre latérale, faites défiler jusqu'à la section "Zone de danger"
3. Cliquez sur "Marquer comme annulée"
4. Le statut de la facture passe à Annulée

Si la facture est déjà payée, en tout ou en partie, ouvrez la facture d'origine et utilisez plutôt "Créer un avoir / une correction".

Astuce : l'annulation conserve le numéro de facture dans votre comptabilité ; la suppression n'est possible que tant qu'un document est encore un brouillon sans numéro.
