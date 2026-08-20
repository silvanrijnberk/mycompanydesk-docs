---
title: "Rechnung per E-Mail senden"
description: "Rechnung per E-Mail senden: Öffnen Sie die gespeicherte Rechnung, klicken Sie auf Senden, prüfen Sie die Nachricht an die Kunden-E-Mail und senden Sie."
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

So senden Sie eine Rechnung per E-Mail:
1. Öffnen Sie die Rechnung (muss zuerst gespeichert sein)
2. Klicken Sie auf „Senden“ oder den E-Mail-Button
3. Das System verwendet die E-Mail-Adresse des Kunden
4. Sie können die Nachricht in der Vorschau ansehen und anpassen
5. Klicken Sie auf „Senden“ zum Zustellen
