---
title: "Créer un devis"
last_verified: 2026-05-09
chatbot:
  triggers: ["create quote", "new quote", "make quote", "create proposal", "new proposal", "sales quote", "estimate", "offerte maken", "offerte aanmaken", "nieuwe offerte", "angebot erstellen", "neues angebot", "wie erstelle ich ein angebot", "devis creer", "comment creer un devis", "nouveau devis", "crear cotizacion", "crear presupuesto", "criar proposta", "nuovo preventivo"]
  actions:
    - { label: "Create quote", to: "/quotes/new" }
    - { label: "Open quotes", to: "/quotes" }
  follow_up: ["How do I preview the quote PDF?", "How do I send a quote by email?", "How do I convert a quote to an invoice?"]
---
Voici comment creer un devis :
1. Allez dans Devis et ouvrez « Creer un devis »
2. Selectionnez un client et liez un projet si besoin
3. Ajoutez des lignes avec description, quantite, prix et TVA
4. Definissez dans la carte des details la date du devis et « Valide jusqu au »
5. Utilisez « Enregistrer comme brouillon » si le devis n est pas encore pret, ou « Finaliser » quand il est pret
6. Apres l enregistrement, ouvrez la page detail du devis pour le previsualiser ou l envoyer

Astuce : Un devis reste distinct d une facture tant qu il n est pas converti.
