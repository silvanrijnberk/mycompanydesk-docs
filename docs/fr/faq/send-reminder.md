---
title: Send reminder
last_verified: 2026-05-09
chatbot:
  triggers: ["send reminder", "payment reminder", "remind customer", "follow up", "chase payment", "herinnering sturen", "betaalherinnering", "aanmaning", "zahlungserinnerung", "relance", "rappel paiement"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I set up automatic reminders?", "How do I view overdue invoices?", "How do I mark an invoice as paid?"]
---

Pour envoyer un rappel pour une facture impayee :
1. Ouvrez la facture
2. Utilisez l action « Envoyer un rappel »
3. Verifiez le message puis envoyez-le

Vous pouvez aussi modifier le modele de rappel dans Parametres → E-mails.
