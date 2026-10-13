---
title: "Fusionner des clients"
description: "Pour fusionner des clients en double : ouvrez le doublon, choisissez Fusionner avec dans le menu Plus, puis le client principal à conserver."
last_verified: 2026-09-26
chatbot:
  triggers: ["merge customers", "duplicate customer", "combine customers", "customer duplicate", "klanten samenvoegen", "dubbele klant", "kunden zusammenfuhren", "fusionner clients", "doublons clients"]
  actions:
    - { label: "Open customers", to: "/customers" }
  follow_up: ["How do I edit a customer?", "How do I find a customer?", "How do I delete a customer?"]
---
Pour fusionner des clients en double :
1. Allez dans Clients et ouvrez le doublon, c'est-à-dire le client qui doit disparaître
2. Ouvrez le menu « Plus » dans l'en-tête de la page (le menu ⋯ sur votre téléphone) et choisissez « Fusionner avec… »
3. Sous « Client principal », recherchez le client à conserver
4. Vous voyez combien de factures, devis et autres éléments seront transférés. Cliquez sur « Fusionner »

Les factures, devis, contrats, projets, heures (y compris récurrentes), dépenses, factures récurrentes, documents, bons d'intervention et notes internes passent au client principal. Le doublon est ensuite archivé. Seul un administrateur d'équipe peut fusionner des clients.

Un client archivé ne peut pas être le client principal d'une fusion. Restaurez d'abord le client archivé : tant qu'un client est archivé, ses factures récurrentes et ses contrats ne sont pas facturés, et la fusion arrêterait donc cette facturation en silence.
