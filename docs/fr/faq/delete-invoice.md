---
title: "Delete an invoice"
last_verified: 2026-05-09
chatbot:
  triggers:
    - "delete invoice"
    - "remove invoice"
    - "trash invoice"
    - "erase invoice"
    - "get rid of invoice"
    - "factuur verwijderen"
    - "factuur wissen"
    - "hoe verwijder ik een factuur"
    - "rechnung loschen"
    - "wie losche ich eine rechnung"
    - "supprimer facture"
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up:
    - "How do I cancel an invoice instead?"
    - "How do I find a specific invoice?"
    - "Can I undo a deleted invoice?"
---

Pour supprimer une facture :
1. Ouvrez la facture a supprimer
2. Dans la barre laterale, faites defiler jusqu'a la section « Zone de danger »
3. Cliquez sur « Supprimer »
4. Confirmez la suppression

Seuls les brouillons peuvent etre supprimes. Pour les factures envoyees ou payees, utilisez Annuler afin que l'enregistrement reste visible dans la liste.
