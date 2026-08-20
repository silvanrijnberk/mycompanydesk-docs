---
title: "Dupliquer une dépense"
description: "Pour dupliquer une dépense : ouvrez la dépense payée à copier. La duplication n'est disponible que pour les dépenses payées ; une dépense impayée affiche."
last_verified: 2026-08-16
chatbot:
  triggers: ["duplicate expense", "copy expense", "clone expense", "reuse expense", "uitgave kopieren", "uitgave dupliceren", "ausgabe kopieren", "dupliquer depense"]
  actions:
    - { label: "Open expenses", to: "/expenses" }
  follow_up: ["How do I set up recurring expenses?", "How do I edit an expense?"]
---

Pour dupliquer une dépense :
1. Ouvrez la dépense payée à copier. La duplication n'est disponible que pour les dépenses payées ; une dépense impayée affiche « Marquer comme payé » à la place
2. Cliquez sur « Dupliquer » dans l'en-tête, ou utilisez la carte « Actions » dans la barre latérale
3. Une nouvelle copie impayée est créée avec les mêmes données, datée d'aujourd'hui. La copie conserve le même fournisseur, la même catégorie, le même traitement de TVA, le même projet, le même client, l'objet et le statut d'investissement. Si l'original est un investissement, la copie est également créée comme investissement avec la même durée d'utilité et la même valeur résiduelle
4. Ajustez le montant ou d'autres détails si nécessaire

Astuce : pratique pour les dépenses récurrentes qui varient légèrement à chaque fois.
