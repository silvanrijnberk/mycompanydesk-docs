---
title: "TVA sur une facture"
description: "Pour définir la TVA sur une facture : modifiez ou créez une facture."
last_verified: 2026-10-19
chatbot:
  triggers: ["vat on invoice", "add vat to invoice", "tax rate invoice", "change vat rate", "btw op factuur", "btw tarief", "mwst auf rechnung", "tva sur facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open VAT settings", to: "/settings/btw" }
  follow_up: ["How do I change the default VAT rate?", "How do I prepare my VAT return?"]
---

Pour définir la TVA sur une facture :
1. Modifiez ou créez une facture
<!-- TODO(source-missing): The app also accepts the historical Dutch rates 6% and 19% on invoices and catalog items. sources/vat-rates.yaml#countries.NL currently only lists 0%, 9% and 21%, so this line must stay unchanged until the source is updated. -->
2. Choisissez le taux de TVA pour chaque ligne (par ex. 21 %, 9 %, 0 %)
3. Le système calcule la TVA automatiquement
4. Les totaux de TVA apparaissent dans le récapitulatif de la facture

Les nouvelles lignes de facture reçoivent par défaut votre taux de TVA standard. Pour modifier ce taux par défaut, allez dans Paramètres › "TVA" et ajustez-le. Le taux est toujours de 0 % quand la facture utilise l'interrupteur d'autoliquidation.

MyCompanyDesk accepte les taux néerlandais actuels de 0%, 9% et 21% (sources/vat-rates.yaml#countries.NL.zero/reduced/standard).

La facture porte-t-elle de la TVA ? L'application attend aussi votre numéro de TVA avant de la laisser partir : la loi l'exige sur une facture avec TVA, et votre client en a besoin pour récupérer cette TVA. Saisissez-le dans les détails de votre entreprise, ou retirez la TVA des lignes si la facture ne doit vraiment pas en porter.

Astuce : vous facturez un client professionnel dans l'UE ? Utilisez l'interrupteur "Autoliquidation de la TVA" plutôt que de choisir 0 % vous-même.
