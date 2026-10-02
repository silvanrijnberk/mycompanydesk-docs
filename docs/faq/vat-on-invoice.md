---
title: "Btw op een factuur"
description: "Zo stel je btw in op een factuur: bewerk of maak een factuur."
last_verified: 2026-07-02
chatbot:
  triggers: ["vat on invoice", "add vat to invoice", "tax rate invoice", "change vat rate", "btw op factuur", "btw tarief", "mwst auf rechnung", "tva sur facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open VAT settings", to: "/settings/btw" }
  follow_up: ["How do I change the default VAT rate?", "How do I prepare my VAT return?"]
---

Zo stel je btw in op een factuur:
1. Bewerk of maak een factuur
<!-- TODO(source-missing): RichardTool 5407b44 widened the valid Dutch invoice/catalog VAT-rate set to include historical rates 6% and 19%. sources/vat-rates.yaml#countries.NL currently only lists 0%, 9% and 21%, so this line must stay unchanged until the source is updated. -->
2. Kies per factuurregel het btw-tarief (bijv. 21%, 9%, 0%)
3. Het systeem berekent de btw automatisch
4. De btw-totalen verschijnen in de samenvatting van de factuur

Nieuwe factuurregels krijgen automatisch je standaard-btw-tarief. Wil je dat standaardtarief aanpassen, ga dan naar Instellingen → "Btw". Het tarief is altijd 0% wanneer de factuur de schakelaar btw verlegd gebruikt.

MyCompanyDesk accepteert de huidige Nederlandse tarieven 0%, 9% en 21% (sources/vat-rates.yaml#countries.NL.zero/reduced/standard).

Tip: Factureer je een zakelijke klant in de EU? Gebruik dan de schakelaar "Btw verlegd" in plaats van zelf 0% te kiezen.
