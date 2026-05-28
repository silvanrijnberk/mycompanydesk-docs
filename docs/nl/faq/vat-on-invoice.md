---
title: VAT on invoice
last_verified: 2026-05-09
chatbot:
  triggers: ["vat on invoice", "add vat to invoice", "tax rate invoice", "change vat rate", "btw op factuur", "btw tarief", "mwst auf rechnung", "tva sur facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I change the default VAT rate?", "How do I prepare my VAT return?"]
---
Om BTW op een factuur in te stellen:
1. Bewerk of maak een factuur aan
2. Stel het BTW-tarief per regel in (bijv. 21%, 9%, 0%)
3. Het systeem berekent de BTW automatisch
4. BTW-totalen verschijnen in de factuursamenvatting

Nieuwe factuurregels beginnen met het standaard BTW-tarief uit je belastinginstellingen (Geldzaken → Belasting → Standaard BTW-tarief Facturen). Je past dit aan via werkruimte-instellingen → Financieel → Belasting. Voor klanten met verlegde BTW is het tarief altijd 0%.
