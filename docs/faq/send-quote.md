---
title: Send quote
last_verified: 2026-05-09
chatbot:
  triggers: ["send quote", "email quote", "send proposal", "deliver quote", "quote email", "offerte versturen", "devis envoyer", "angebot senden", "enviar cotizacion", "enviar proposta", "inviare preventivo"]
  actions:
    - { label: "Open quotes", to: "/quotes" }
    - { label: "Open customers", to: "/customers" }
  follow_up: ["How do I preview before sending?", "How do I fix a failed send?", "How do I update the customer email?"]
---
To send a quote by email:
1. Open the quote detail page
2. Click "Send"
3. Review the email preview and recipient address
4. Confirm send

Tip: If delivery fails, verify the customer email in their profile and resend.
