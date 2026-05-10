---
title: Quote status
last_verified: 2026-05-09
chatbot:
  triggers: ["quote status", "quote statuses", "quote lifecycle", "draft open sent canceled", "offerte status", "angebotsstatus", "statut devis", "estado cotizacion", "status proposta"]
  actions:
    - { label: "Open quotes", to: "/quotes" }
  follow_up: ["How do I mark a quote as finalized?", "How do I mark as sent?", "How do I convert to invoice?"]
---
Statuts de devis expliques :
• Brouillon - version modifiable
• Ouvert - finalise et pret a l envoi
• Envoye - transmis au client
• En retard - date de validite depassee
• Annule - annule
