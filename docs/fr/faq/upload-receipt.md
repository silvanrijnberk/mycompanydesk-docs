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

Pour ajouter ou remplacer un recu sur une depense :
1. Ouvrez une depense existante, ou enregistrez d abord une nouvelle depense.
2. Dans le panneau lateral, cliquez sur l icone trombone ; ou sur la page detail de la depense, utilisez l action **« Televerser le recu »**.
3. Selectionnez le fichier image ou PDF a joindre.
4. Attendez la fin du televersement et verifiez que le recu apparait sur la depense.

Remarque : les fichiers de reçus sont limités à 10 Mo. Si vous téléchargez un fichier plus grand via **Numériser un reçu**, la dépense est créée sans reçu et un avertissement s'affiche. Téléversez ensuite un fichier plus petit sur la page de détail de la dépense.

Astuce : si vous etes encore sur le formulaire de nouvelle depense, enregistrez-la d abord. Une fois la depense enregistree, vous pouvez ajouter ou remplacer le recu depuis le panneau lateral ou la page detail.
