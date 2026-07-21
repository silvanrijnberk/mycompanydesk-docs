---
title: "TVA sur une facture"
last_verified: 2026-07-02
chatbot:
  triggers: ["vat on invoice", "add vat to invoice", "tax rate invoice", "change vat rate", "btw op factuur", "btw tarief", "mwst auf rechnung", "tva sur facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open VAT settings", to: "/settings/btw" }
  follow_up: ["How do I change the default VAT rate?", "How do I prepare my VAT return?"]
---

Pour définir la TVA sur une facture :
1. Modifiez ou créez une facture
<!-- TODO(source-missing): RichardTool 5407b44 widened the valid Dutch invoice/catalog VAT-rate set to include historical rates 6% and 19%. sources/vat-rates.yaml#countries.NL currently only lists 0%, 9% and 21%, so this line must stay unchanged until the source is updated. -->
2. Choisissez le taux de TVA pour chaque ligne (par ex. 21 %, 9 %, 0 %)
3. Le système calcule la TVA automatiquement
4. Les totaux de TVA apparaissent dans le récapitulatif de la facture

Les nouvelles lignes de facture reçoivent par défaut votre taux de TVA standard. Pour modifier ce taux par défaut, allez dans Paramètres → "TVA" et ajustez-le. Le taux est toujours de 0 % quand la facture utilise l'interrupteur d'autoliquidation.

Astuce : vous facturez un client professionnel dans l'UE ? Utilisez l'interrupteur "Autoliquidation de la TVA" plutôt que de choisir 0 % vous-même.
