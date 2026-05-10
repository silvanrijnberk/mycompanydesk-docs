---
title: Invoice status
last_verified: 2026-05-09
chatbot:
  triggers: ["invoice status", "invoice statuses", "what do invoice statuses mean", "draft sent paid", "invoice lifecycle", "factuurstatus", "factuur statussen", "rechnungsstatus", "statut facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I mark an invoice as paid?", "How do I send a reminder?", "How do I cancel an invoice?"]
---
Factuurstatussen uitgelegd:
• Concept - nog niet verstuurd, vrij te bewerken
• Verstuurd - bezorgd bij de klant, wacht op betaling
• Betaald - betaling ontvangen en bevestigd
• Achterstallig - vervaldatum verstreken, nog niet betaald
• Geannuleerd - ongeldig, niet meer actief
