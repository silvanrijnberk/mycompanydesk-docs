---
title: "Supprimer une facture"
description: "Pour supprimer une facture : ouvrez la facture à supprimer, dans la barre latérale, faites défiler jusqu'à la section Zone de danger, cliquez sur."
last_verified: 2026-08-15
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
1. Ouvrez la facture à supprimer
2. Dans la barre latérale, faites défiler jusqu'à la section « Zone de danger »
3. Cliquez sur « Supprimer »
4. Confirmez la suppression

Seuls les brouillons peuvent être supprimés définitivement en une seule étape. Pour les factures envoyées ou payées, chaque action de suppression descend d'un palier : actif devient Archivé, archivé devient Corbeille, et corbeille devient une suppression définitive. Utilisez Annuler si vous voulez garder l'enregistrement dans la liste des factures.

Vous avez supprimé par erreur ? Consultez l'archive ou la corbeille et restaurez la facture avant qu'elle n'atteigne le dernier palier.
