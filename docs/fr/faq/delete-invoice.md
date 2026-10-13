---
title: "Supprimer une facture"
description: "Supprimez un brouillon de facture via Plus puis Supprimer. Une facture finalisée ne se supprime pas, elle se marque comme annulée."
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
1. Ouvrez le brouillon de facture à supprimer
2. Cliquez sur « Plus » en haut (sur votre téléphone, le menu aux trois points)
3. Choisissez « Supprimer »
4. Confirmez la suppression

Seul un brouillon qui n'a pas encore de numéro de facture peut être supprimé. Même dans ce cas, cela se fait par paliers : actif devient Archives, archivé devient Corbeille. Le brouillon n'est supprimé pour de bon que si vous le sélectionnez dans la Corbeille et choisissez « Supprimer définitivement », ou si vous cliquez sur « Vider la corbeille ».

Une facture finalisée (avec un numéro de facture) ne peut être ni supprimée ni archivée : elle doit rester dans votre comptabilité. Pour la retirer, choisissez « Marquer comme annulée » dans le même menu (impossible sur une facture payée), ou créez un avoir.

Vous avez supprimé par erreur ? Dans la liste des factures, ouvrez Filtres, choisissez la vue Archives ou Corbeille sous Afficher, ouvrez la facture et choisissez « Restaurer vers actif » avant qu'elle n'atteigne le dernier palier.
