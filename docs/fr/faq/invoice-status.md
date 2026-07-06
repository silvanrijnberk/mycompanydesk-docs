---
title: "Statut de la facture"
last_verified: 2026-05-09
chatbot:
  triggers: ["invoice status", "invoice statuses", "what do invoice statuses mean", "draft sent paid", "invoice lifecycle", "factuurstatus", "factuur statussen", "rechnungsstatus", "statut facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I mark an invoice as paid?", "How do I send a reminder?", "How do I cancel an invoice?"]
---
Statuts de facture expliqués :
• Brouillon - pas encore envoyée, modifiable librement
• Envoyée - livrée au client, en attente de paiement
• Payée - paiement reçu et confirmé
• En retard - date d'échéance dépassée, pas encore payée
• Annulée - annulée, plus active
