---
title: "Créer une dépense"
description: "Pour ajouter une dépense : allez dans Dépenses, cliquez sur Ajouter, puis scannez un reçu ou saisissez vous-même fournisseur, catégorie, montant et date."
last_verified: 2026-05-09
chatbot:
  triggers: ["create expense", "new expense", "add expense", "log expense", "record expense", "track expense", "uitgave toevoegen", "nieuwe uitgave", "uitgave aanmaken", "ausgabe hinzufugen", "wie erstelle ich eine ausgabe", "ajouter depense", "comment creer une depense"]
  actions:
    - { label: "Create expense", to: "/expenses/new" }
  follow_up: ["How do I upload a receipt?", "How do I categorize expenses?", "How do I mark an expense as paid?"]
---

Voici comment ajouter une dépense :
1. Allez dans Dépenses et cliquez sur « Ajouter »
2. Vous avez un reçu ? Cliquez sur « Scanner un reçu » ou téléversez une photo ou un PDF. MyCompanyDesk lit le fournisseur, le montant et la date et joint aussitôt le reçu à la dépense. Vérifiez ensuite les informations remplies
3. Pas de reçu sous la main ? Saisissez les informations vous-même. La date, le fournisseur, la catégorie et le montant sont obligatoires ; une dépense de 0,00 € ne peut pas être enregistrée
4. Enregistrez la dépense

Besoin de plus de champs, comme une date d'échéance, un client, un projet ou des notes ? Choisissez « Besoin de plus de champs ? » dans le panneau pour ouvrir le formulaire complet. Un reçu obtenu plus tard s'ajoute sur la page de la dépense avec « Téléverser le reçu ».

La lecture automatique des reçus utilise des scans IA : 3 par mois avec Desk, 200 avec Office. Une fois vos scans épuisés, le reçu est tout de même enregistré et vous saisissez les informations vous-même.
