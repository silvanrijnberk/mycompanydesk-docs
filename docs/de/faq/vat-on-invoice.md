---
title: VAT on invoice
last_verified: 2026-05-09
chatbot:
  triggers: ["vat on invoice", "add vat to invoice", "tax rate invoice", "change vat rate", "btw op factuur", "btw tarief", "mwst auf rechnung", "tva sur facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I change the default VAT rate?", "How do I prepare my VAT return?"]
---
So setzen Sie die Mehrwertsteuer auf eine Rechnung:
1. Bearbeiten oder erstellen Sie eine Rechnung
2. Legen Sie den MwSt.-Satz pro Position fest (z.B. 19%, 7%, 0%)
3. Das System berechnet die MwSt. automatisch
4. Die MwSt.-Summen erscheinen in der Rechnungsübersicht

Neue Rechnungspositionen übernehmen den Standard-MwSt.-Satz aus Ihren Steuereinstellungen (Finanzen → Steuern → Standard-MwSt.-Satz Rechnungen). Sie ändern dies unter Arbeitsbereich-Einstellungen → Finanzen → Steuern. Bei Kunden mit Reverse-Charge beträgt der Satz immer 0%.
