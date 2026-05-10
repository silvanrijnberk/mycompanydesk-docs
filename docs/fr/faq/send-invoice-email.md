---
title: "Send an invoice by email"
last_verified: 2026-05-09
chatbot:
  triggers:
    - "send invoice email"
    - "email invoice"
    - "send invoice to customer"
    - "mail invoice"
    - "deliver invoice"
    - "factuur versturen"
    - "factuur emailen"
    - "factuur mailen"
    - "rechnung senden"
    - "wie sende ich eine rechnung"
    - "envoyer facture"
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up:
    - "How do I customize the email template?"
    - "How do I preview the PDF first?"
    - "How do I change the customer email?"
---

Pour envoyer une facture par e-mail :
1. Ouvrez la facture (elle doit être enregistrée)
2. Cliquez sur « Envoyer » ou le bouton e-mail
3. Le système utilise l'adresse e-mail du client
4. Prévisualisez et personnalisez le message
5. Cliquez sur « Envoyer » pour livrer
