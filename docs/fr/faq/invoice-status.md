---
title: "Statut de facture"
description: "Statuts de facture expliqués : un brouillon reste modifiable et ne peut être marqué comme payé qu'après sa finalisation."
last_verified: 2026-08-15
chatbot:
  triggers: ["invoice status", "invoice statuses", "what do invoice statuses mean", "draft sent paid", "invoice lifecycle", "factuurstatus", "factuur statussen", "rechnungsstatus", "statut facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I mark an invoice as paid?", "How do I send a reminder?", "How do I cancel an invoice?"]
---
Statuts de facture expliqués :
• Brouillon - pas encore envoyée, modifiable librement. Un brouillon ne peut être marqué comme payé ou faire l'objet d'un paiement enregistré qu'après finalisation ; auparavant, un paiement sur un brouillon créait une facture sans numéro avec le statut Payée, ce qui n'est plus autorisé.
• À envoyer - finalisée, mais pas encore envoyée ni payée. Si un paiement est déjà enregistré sur elle (par exemple un acompte ou un paiement partiel), la liste l'affiche comme Envoyée, car elle est clairement partie.
• Envoyée - livrée au client, en attente de paiement
• En retard - date d'échéance dépassée, pas encore payée
• Vérification requise - le client a indiqué dans le portail qu'il a payé ; confirmez ou refusez le paiement avant que la facture passe à Payée
• Payée - paiement reçu et confirmé. Dans de rares cas, une facture peut s'afficher comme Payée alors qu'aucun paiement n'est encore enregistré, par exemple après une importation ou une ancienne action "marquer comme payée" n'ayant pas créé d'écriture de paiement. Le bloc de paiement affiche alors « Payée, sans paiement enregistré. » et propose « Enregistrer le paiement » pour l'ajouter.
• Annulée - annulée, plus active

Seul un brouillon sans numéro de facture peut être supprimé, et la suppression se fait par paliers : actif devient Archives, archivé devient Corbeille, et corbeille devient une suppression définitive. Vous pouvez restaurer le brouillon depuis les Archives ou la Corbeille tant qu'il n'est pas définitivement supprimé. Une facture finalisée ne peut pas être supprimée. L'annulation est différente : « Marquer comme annulée » passe une facture finalisée et non payée au statut Annulée, mais elle reste visible dans la liste.

Astuce : utilisez les filtres de statut pour afficher d'abord À envoyer et En retard.
