---
title: "Actions groupées"
description: "Pour effectuer des actions en masse : accédez à la vue en liste (Factures, Dépenses ou Clients)."
last_verified: 2026-05-09
chatbot:
  triggers: ["bulk action", "bulk delete", "bulk send", "select multiple", "batch operation", "meerdere selecteren", "bulk verwijderen", "massenbearbeitung", "action en masse"]
  actions: []
  follow_up: ["How do I delete multiple invoices?", "How do I export selected items?"]
---
Pour effectuer des actions en masse :
1. Accédez à la vue en liste (par exemple Factures, Devis, Dépenses ou Clients)
2. Sélectionnez des éléments : sur ordinateur, la case à cocher apparaît quand vous survolez une ligne. Vous pouvez aussi choisir « Sélectionner plusieurs » dans le menu d'une ligne ; toutes les cases s'affichent alors
3. Une barre apparaît en bas de l'écran avec le nombre d'éléments sélectionnés, « Tout sélectionner » et les actions disponibles
4. Choisissez l'action, par exemple « Marquer comme payé », « Marquer comme envoyée », « Marquer comme annulée », « Archiver » ou « Supprimer » (les actions proposées dépendent de la liste et de votre sélection)
5. Confirmez l'action si on vous le demande

## Vérifications quand vous marquez des brouillons comme envoyés en groupe

Quand vous marquez des factures brouillons comme envoyées en groupe, elles reçoivent un numéro de facture et MyCompanyDesk applique les mêmes contrôles que pour une seule facture. Votre numéro de TVA, votre IBAN et l'adresse de votre entreprise doivent être renseignés, une facture en autoliquidation ne peut pas être finalisée si le client n'a pas de numéro de TVA, et une ligne à 0% de TVA (sources/vat-rates.yaml#countries.NL.zero) doit avoir un fondement clair (autoliquidation ou un motif de taux zéro approuvé). Si une seule facture échoue à un contrôle, toute l'action est annulée ; le message indique la facture concernée pour que vous puissiez la corriger d'abord.

## Archiver des dépenses en groupe

Lorsque vous archivez plusieurs dépenses non payées en une fois, les rappels de paiement ouverts correspondants sont suspendus. La barre d'actions en masse affiche d'abord une confirmation dès qu'une dépense sélectionnée est non payée et a une date d'échéance, pour que vous sachiez combien des dépenses sélectionnées perdent leur rappel. Le rappel reste suspendu tant que les dépenses sont archivées. Si vous restaurez ultérieurement une dépense archivée, le passage quotidien recrée le rappel, mais au plus tôt la nuit suivante.

Astuce : Utilisez d'abord les filtres pour affiner la liste, puis sélectionnez tous les éléments visibles pour un traitement par lot efficace.
