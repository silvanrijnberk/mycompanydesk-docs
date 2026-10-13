---
title: "Trouver les dépenses supprimées"
description: "Les dépenses supprimées se trouvent dans Dépenses : cliquez sur Filtres et choisissez la vue Corbeille sous Afficher."
last_verified: 2026-08-16
chatbot:
  triggers:
    - "where are deleted expenses"
    - "where can i find deleted expenses"
    - "where do i find deleted expenses"
    - "expense trash"
    - "trashed expenses"
    - "deleted expenses"
    - "verwijderde uitgaven"
    - "uitgaven prullenbak"
    - "geloschte ausgaben"
    - "geloeschte ausgaben"
    - "geloeschten ausgaben"
    - "ausgaben papierkorb"
    - "depenses supprimees"
    - "mes depenses supprimees"
    - "corbeille depenses"
  actions:
    - { label: "Open expenses", to: "/expenses?view=trash" }
  follow_up:
    - "Where do I find archived expenses?"
    - "How do I search expenses?"
    - "How do I restore an expense?"
---

Les dépenses supprimées se trouvent dans Dépenses : cliquez sur Filtres au-dessus de la liste et choisissez la vue Corbeille sous Afficher. Sur votre téléphone, utilisez le bouton de filtre en haut.

Gardez à l'esprit que la suppression se fait par étapes : la première suppression d'une dépense active l'archive. Donc si une dépense n'est pas dans la Corbeille, regardez la vue Archives. Supprimer une dépense archivée la déplace vers la Corbeille, et la supprimer depuis la Corbeille la retire définitivement.

Les dépenses dans la corbeille ne peuvent pas être modifiées. Si vous devez modifier une dépense supprimée, restaurez-la depuis la Corbeille d'abord.
