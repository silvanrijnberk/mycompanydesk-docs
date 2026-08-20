---
title: "Créer un devis"
description: "Pour créer un devis : allez dans Devis, ouvrez Créer un devis, choisissez un client et ajoutez des lignes avec quantité, prix et TVA."
last_verified: 2026-05-09
chatbot:
  triggers: ["create quote", "new quote", "make quote", "create proposal", "new proposal", "sales quote", "estimate", "offerte maken", "offerte aanmaken", "nieuwe offerte", "angebot erstellen", "neues angebot", "wie erstelle ich ein angebot", "devis creer", "comment creer un devis", "nouveau devis", "crear cotizacion", "crear presupuesto", "criar proposta", "nuovo preventivo"]
  actions:
    - { label: "Create quote", to: "/quotes/new" }
    - { label: "Open quotes", to: "/quotes" }
  follow_up: ["How do I preview the quote PDF?", "How do I send a quote by email?", "How do I convert a quote to an invoice?"]
---
Voici comment créer un devis :
1. Allez dans Devis et ouvrez « Créer un devis »
2. Sélectionnez un client et liez un projet si besoin
3. Ajoutez des lignes avec description, quantité, prix et TVA
4. Définissez dans la carte des détails la date du devis et « Valide jusqu'au »
5. Utilisez « Enregistrer comme brouillon » si le devis n'est pas encore prêt, ou « Finaliser » quand il est prêt
6. Après l'enregistrement, ouvrez la page détail du devis pour le prévisualiser ou l'envoyer

Astuce : un devis reste distinct d'une facture tant qu'il n'est pas converti.
