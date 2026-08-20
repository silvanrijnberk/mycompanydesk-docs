---
title: "Angebot in Rechnung umwandeln"
description: "Angebot in Rechnung umwandeln: Öffnen Sie die Angebotsdetailseite und klicken Sie auf Rechnung aus Angebot erstellen, ein Entwurf übernimmt die Daten."
last_verified: 2026-05-09
chatbot:
  triggers:
    - "convert quote to invoice"
    - "create invoice from quote"
    - "quote to invoice"
    - "accept quote invoice"
    - "offerte omzetten factuur"
    - "offerte naar factuur"
    - "angebot in rechnung"
    - "devis en facture"
    - "convertir cotizacion factura"
    - "converter proposta fatura"
    - "converti preventivo fattura"
  actions:
    - { label: "Open quotes", to: "/quotes" }
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up:
    - "Does conversion overwrite the quote?"
    - "How do I set invoice due date after conversion?"
    - "How do I send the invoice?"
---

So wandeln Sie ein Angebot in eine Rechnung um:
1. Öffnen Sie die Angebotsdetailseite
2. Klicken Sie auf „Rechnung aus Angebot erstellen“
3. Es wird ein neuer Rechnungsentwurf mit kopierten Daten erstellt
4. Prüfen Sie Fälligkeit und Zahlungsbedingungen
5. Speichern und senden Sie die Rechnung
