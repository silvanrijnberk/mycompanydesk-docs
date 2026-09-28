---
title: "Statut du devis"
description: "Les statuts d'un devis : brouillon : encore modifiable, pas encore envoyé au client, envoyée : remis au client, acceptée : le client a accepté le devis."
last_verified: 2026-09-28
chatbot:
  triggers: ["quote status", "quote statuses", "quote lifecycle", "draft open sent canceled", "offerte status", "angebotsstatus", "statut devis", "estado cotizacion", "status proposta"]
  actions:
    - { label: "Open quotes", to: "/quotes" }
  follow_up: ["How do I mark a quote as finalized?", "How do I mark as sent?", "How do I convert to invoice?"]
---

Les statuts d'un devis :
• Brouillon : encore modifiable, pas encore envoyé au client
• Envoyée : remis au client
• Acceptée : le client a accepté le devis
• Refusée : le client a décliné le devis
• Expiré : la date de validité est dépassée ; ce statut s'affiche automatiquement

Sur la page de détail du devis, l'étape actuelle s'affiche sous forme de carte de cycle de vie : Brouillon → Envoyée, puis Acceptée ou Refusée comme branche de décision. Les devis expirés et annulés s'affichent comme résultats terminaux en fin de parcours.

Quand vous convertissez un devis accepté en facture, le devis reste Acceptée et reçoit le marqueur "Converti en facture".

Sur la page de signature, le client reçoit une explication claire dès qu'un devis ne peut plus être signé : un devis dont la date de validité est dépassée invite le client à demander un nouveau devis ; un devis déjà transformé en facture ou en contrat indique qu'il n'y a plus rien à faire ; et un devis déjà accepté ne peut plus être refusé. Dans ce dernier cas, la page invite le client à vous contacter s'il a changé d'avis.

Astuce : utilisez les filtres de la liste des devis pour vérifier d'abord les brouillons et les devis expirés.
