---
title: "Numérotation des devis"
last_verified: 2026-07-02
chatbot:
  triggers:
    - "quote number"
    - "quote numbering"
    - "change quote number"
    - "quote format"
    - "offerte nummer"
    - "offertenummer"
    - "angebotsnummer"
    - "numerotation devis"
    - "numero cotizacion"
    - "numero proposta"
    - "numero preventivo"
  actions:
    - { label: "Open quotes", to: "/quotes" }
  follow_up:
    - "How do I set quote validity?"
    - "How do I edit a quote number safely?"
    - "How do I create a new quote?"
---

Les numéros de devis sont attribués automatiquement :
1. Créez un devis ; MyCompanyDesk lui attribue le numéro suivant de votre série
2. Il n'y a aucun format de numérotation à configurer, la série reste ordonnée d'elle-même
3. Besoin d'un numéro précis sur un brouillon ? Ouvrez le devis dans le formulaire et cliquez sur "Définir un numéro personnalisé" dans la barre latérale

Astuce : une fois le devis envoyé, il est verrouillé, y compris son numéro. Définissez donc un numéro personnalisé tant que le document est encore un brouillon.
