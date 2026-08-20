---
title: "Ajouter un reçu"
description: "Pour ajouter ou remplacer un reçu : ouvrez la dépense, puis cliquez sur l'icône trombone dans le panneau latéral ou utilisez l'action dédiée."
last_verified: 2026-08-15
chatbot:
  triggers: ["upload receipt", "attach receipt", "add receipt", "receipt photo", "scan receipt", "expense receipt", "bon uploaden", "bon toevoegen", "beleg hochladen", "telecharger recu"]
  actions:
    - { label: "Open expenses", to: "/expenses" }
  follow_up: ["How do I create an expense?", "How do I categorize an expense?"]
---

Pour ajouter ou remplacer un reçu sur une dépense :
1. Ouvrez une dépense existante, ou enregistrez d'abord une nouvelle dépense.
2. Dans le panneau latéral, cliquez sur l'icône trombone ; ou sur la page détail de la dépense, utilisez l'action **« Téléverser le reçu »**.
3. Sélectionnez le fichier image ou PDF à joindre.
4. Attendez la fin du téléversement et vérifiez que le reçu apparaît sur la dépense.

Remarque : les fichiers de reçus sont limités à 10 Mo. Si vous téléchargez un fichier plus grand via **Numériser un reçu**, la dépense est créée sans reçu et un avertissement s'affiche. Téléversez ensuite un fichier plus petit sur la page de détail de la dépense.

Astuce : si vous êtes encore sur le formulaire de nouvelle dépense, enregistrez-la d'abord. Une fois la dépense enregistrée, vous pouvez ajouter ou remplacer le reçu depuis le panneau latéral ou la page détail.
