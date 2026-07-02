---
title: "Numéro de facture"
last_verified: 2026-07-02
chatbot:
  triggers: ["invoice number", "change invoice number", "invoice numbering", "set invoice number", "numbering format", "factuurnummer", "factuurnummering", "rechnungsnummer", "numero facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Reset invoice numbering", to: "/settings/opzeggen" }
  follow_up: ["How do I set up my company settings?", "How do I change the PDF style?", "How do I create my first invoice?"]
---

Les numéros de facture sont attribués automatiquement :
1. Créez une facture ; MyCompanyDesk la numérote de façon séquentielle, comme l'exige l'administration fiscale
2. Il n'y a aucun format de numérotation à configurer
3. Besoin d'un numéro précis sur un brouillon ? Ouvrez la facture dans le formulaire et cliquez sur "Définir un numéro personnalisé" dans la barre latérale
4. Pour faire repartir la série, allez dans Paramètres → "Résilier le compte" et utilisez "Réinitialiser la numérotation des factures"

Astuce : les brouillons n'ont pas encore de numéro définitif. Supprimez vos brouillons de test avant de les finaliser, votre série reste ainsi sans trous.
