---
title: Invoice status
last_verified: 2026-05-09
chatbot:
  triggers: ["invoice status", "invoice statuses", "what do invoice statuses mean", "draft sent paid", "invoice lifecycle", "factuurstatus", "factuur statussen", "rechnungsstatus", "statut facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I mark an invoice as paid?", "How do I send a reminder?", "How do I cancel an invoice?"]
---
Rechnungsstatus erklärt:
• Entwurf - noch nicht gesendet, frei bearbeitbar
• Gesendet - an den Kunden zugestellt, wartet auf Zahlung
• Bezahlt - Zahlung erhalten und bestätigt
• Überfällig - Fälligkeitsdatum überschritten, noch nicht bezahlt
• Storniert - ungültig, nicht mehr aktiv
