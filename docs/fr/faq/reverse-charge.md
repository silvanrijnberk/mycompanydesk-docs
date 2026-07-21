---
title: "Autoliquidation"
last_verified: 2026-07-02
chatbot:
  triggers: ["reverse charge", "reverse charge invoice", "eu invoice", "intracommunautair", "intracommunity", "btw verlegd", "reverse charge rechnung", "autoliquidation", "intra-community"]
  actions:
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I add a customer VAT number?", "How does reverse charge affect my VAT return?", "How do I preview an invoice?"]
---

Pour créer une facture en autoliquidation (UE) :
1. Allez dans Factures → Nouvelle facture
2. Sélectionnez votre client de l'UE et vérifiez que son numéro de TVA figure sur sa fiche
3. Activez l'interrupteur "Autoliquidation de la TVA" sur le formulaire de facture ; MyCompanyDesk le propose automatiquement pour les clients professionnels de l'UE
4. La TVA de toutes les lignes passe automatiquement à 0 %, aucun changement manuel n'est nécessaire
5. Vérifiez la mention d'autoliquidation dans l'aperçu, puis envoyez la facture

Les factures en autoliquidation sont vérifiées avant l'envoi: le client doit avoir un numéro de TVA et la facture doit indiquer 0% (sources/vat-rates.yaml#countries.NL.zero) sur chaque ligne. Ces contrôles s'appliquent aussi lorsque vous finalisez ou envoyez des factures en groupe.

Astuce : l'interrupteur est toujours disponible sur le formulaire de facture ; vous n'avez rien à activer au préalable dans vos paramètres.

## Dépenses en autoliquidation

Quand vous recevez une facture en autoliquidation d'un fournisseur, MyCompanyDesk doit connaître l'origine du fournisseur pour ranger la TVA dans la bonne rubrique de la déclaration :

- Un fournisseur néerlandais avec un numéro KVK ou le pays NL va dans la rubrique 2a (autoliquidation nationale).
- Un fournisseur d'un autre pays de l'UE va dans la rubrique 4b (acquisition intracommunautaire).

Si le pays ou le numéro KVK manque, le contrôle avant dépôt sur la page TVA signale la dépense et bloque le dépôt tant que vous ne l'avez pas complété. Ouvrez la dépense, ajoutez le pays ou le numéro KVK manquant, puis relancez les contrôles.
