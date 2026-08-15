---
title: Invoice status
last_verified: 2026-08-15
chatbot:
  triggers: ["invoice status", "invoice statuses", "what do invoice statuses mean", "draft sent paid", "invoice lifecycle", "factuurstatus", "factuur statussen", "rechnungsstatus", "statut facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I mark an invoice as paid?", "How do I send a reminder?", "How do I cancel an invoice?"]
---
Statuts de facture expliqués :
• Brouillon - pas encore envoyée, modifiable librement
• Envoyée - livrée au client, en attente de paiement
• En retard - date d'échéance dépassée, pas encore payée
• Vérification requise - le client a indiqué dans le portail qu'il a payé ; confirmez ou refusez le paiement avant que la facture passe à Payée
• Payée - paiement reçu et confirmé
• Annulée - annulée, plus active

La suppression se fait par paliers : actif devient Archivé, archivé devient Corbeille, et corbeille devient une suppression définitive. Vous pouvez restaurer la facture depuis l'archive ou la corbeille tant qu'elle n'est pas définitivement supprimée. L'annulation est différente : elle marque une facture envoyée ou payée comme Annulée, mais elle reste visible dans la liste.

Astuce : utilisez les filtres de statut pour afficher d'abord Ouvert et En retard.
