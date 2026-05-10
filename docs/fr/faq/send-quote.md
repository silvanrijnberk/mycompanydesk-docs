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
Pour envoyer un devis par e-mail :
1. Ouvrez la page detail du devis
2. Cliquez sur « Envoyer »
3. Verifiez l apercu et le destinataire
4. Confirmez l envoi

Astuce : Verifiez l e-mail client en cas d echec.
