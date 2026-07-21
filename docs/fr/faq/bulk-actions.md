---
title: Bulk actions
last_verified: 2026-05-09
chatbot:
  triggers: ["bulk action", "bulk delete", "bulk send", "select multiple", "batch operation", "meerdere selecteren", "bulk verwijderen", "massenbearbeitung", "action en masse"]
  actions: []
  follow_up: ["How do I delete multiple invoices?", "How do I export selected items?"]
---
Pour effectuer des actions en masse :
1. Accédez à la vue en liste (Factures, Dépenses ou Clients)
2. Sélectionnez plusieurs éléments à l'aide des cases à cocher
3. Utilisez le menu d'actions en masse en haut de la liste
4. Choisissez l'action (ex. : supprimer, envoyer, exporter)
5. Confirmez l'opération en masse

## Vérifications lors de la finalisation groupée

Lorsque vous finalisez ou envoyez des factures en groupe, MyCompanyDesk applique les mêmes contrôles de TVA et de statut que pour une seule facture. Par exemple, une facture en autoliquidation ne peut pas être finalisée si le client n'a pas de numéro de TVA, et une ligne à 0% de TVA (sources/vat-rates.yaml#countries.NL.zero) doit avoir un fondement clair (autoliquidation ou un motif de taux zéro approuvé). Les factures qui échouent à un contrôle sont ignorées; l'écran de résultats liste les factures concernées avec la raison pour que vous puissiez les corriger.

Astuce : Utilisez d'abord les filtres pour affiner la liste, puis sélectionnez tous les éléments visibles pour un traitement par lot efficace.
