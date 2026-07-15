---
title: "Statut du devis"
last_verified: 2026-07-02
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

Astuce : utilisez les filtres de la liste des devis pour vérifier d'abord les brouillons et les devis expirés.
