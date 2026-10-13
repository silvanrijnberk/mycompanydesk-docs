---
title: "Supprimer une dépense"
description: "Pour supprimer une dépense : ouvrez-la, cliquez sur Plus en haut et choisissez Supprimer. Elle passe d'abord par les Archives et la Corbeille."
last_verified: 2026-08-16
chatbot:
  triggers: ["delete expense", "remove expense", "trash expense", "erase expense", "uitgave verwijderen", "uitgave wissen", "hoe verwijder ik een uitgave", "ausgabe loschen", "wie losche ich eine ausgabe", "supprimer depense"]
  actions:
    - { label: "Open expenses", to: "/expenses" }
  follow_up: ["How do I edit an expense instead?", "How do I export my expense data?"]
---

Pour supprimer une dépense :
1. Ouvrez la dépense depuis votre liste de dépenses
2. Cliquez sur « Plus » en haut (sur votre téléphone, le menu aux trois points)
3. Choisissez « Supprimer »
4. Confirmez la suppression

La suppression se fait par étapes. Supprimer une dépense active l'archive d'abord, la supprimer à nouveau depuis les Archives la déplace vers la Corbeille. Elle n'est supprimée pour de bon que si vous la sélectionnez dans la Corbeille et choisissez « Supprimer définitivement », ou si vous cliquez sur « Vider la corbeille ». Jusqu'à cette dernière étape, vous pouvez toujours restaurer la dépense depuis la vue Archives ou Corbeille (via Filtres, sous Afficher). Si vous sélectionnez des dépenses dans la liste et choisissez Supprimer, elles passent toutes dans la Corbeille, où vous pouvez encore les restaurer.

Si la dépense tombe dans une période de TVA déjà verrouillée, vous ne pouvez ni l'archiver ni la supprimer. Créez plutôt une correction.

Les dépenses dans la Corbeille ne peuvent pas être modifiées. Restaurez la dépense d'abord si vous devez la modifier.

Si vous archivez une dépense non payée avec une date d'échéance, le rappel de paiement ouvert est annulé et n'est pas envoyé tant qu'elle reste dans les archives. Vous pouvez toujours restaurer la dépense depuis les Archives. Si vous le faites, le passage quotidien recrée le rappel, mais au plus tôt la nuit suivante.
