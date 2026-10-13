---
title: "Numéro de facture"
description: "Les numéros de facture sont attribués automatiquement : MyCompanyDesk numérote vos factures à la suite, comme l'exige le fisc néerlandais."
last_verified: 2026-08-05
chatbot:
  triggers: ["invoice number", "change invoice number", "invoice numbering", "set invoice number", "numbering format", "factuurnummer", "factuurnummering", "rechnungsnummer", "numero facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Reset invoice numbering", to: "/settings/gegevens-wissen" }
  follow_up: ["How do I set up my company settings?", "How do I change the PDF style?", "How do I create my first invoice?"]
---

Les numéros de facture sont attribués automatiquement :
1. Créez une facture et finalisez-la ; MyCompanyDesk lui attribue alors le numéro suivant de la série, comme l'exige l'administration fiscale
2. Vous venez d'un autre logiciel ? Dans Paramètres › « Factures et devis », section « Numérotation », définissez un « Préfixe » et votre « Prochain numéro de facture ». Ce numéro peut seulement avancer, jamais reculer
3. Besoin d'un numéro précis sur un brouillon ? Ouvrez la facture dans le formulaire et cliquez sur « Définir un numéro personnalisé » dans la barre latérale. Le numéro doit être unique
4. Vous voulez supprimer un prochain numéro que vous aviez défini vous-même ? Allez dans Paramètres › « Effacer les données » et choisissez « Réinitialiser la numérotation des factures ». Les nouvelles factures reprennent alors automatiquement après le numéro le plus élevé de l'année

Astuce : les brouillons n'ont pas encore de numéro définitif. Supprimez vos brouillons de test avant de les finaliser, votre série reste ainsi sans trous.
