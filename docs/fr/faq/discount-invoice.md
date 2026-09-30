---
title: "Remise sur une facture"
description: "Appliquez une remise sur une ligne de facture : pourcentage ou montant fixe, et la remise apparaît sur la facture et dans l'e-mail au client."
last_verified: 2026-09-30
chatbot:
  triggers: ["discount", "add discount", "invoice discount", "percentage discount", "reduce price", "korting", "korting toevoegen", "rabatt", "rabatt gewahren", "remise", "reduction"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I set payment terms?", "How do I create a credit note?", "How do I preview the invoice PDF?"]
---

Chaque ligne de facture peut porter sa propre remise :

1. Modifiez ou créez une facture
2. Cliquez sur l'icône d'étiquette de la ligne qui doit porter la remise
3. Dans le petit panneau qui s'ouvre, choisissez le type de remise : **pourcentage** ou **montant fixe**
4. Saisissez la valeur de la remise et choisissez **Terminé**

Un badge sur la ligne affiche ensuite la remise (par exemple -10 %), et le total de la ligne se met à jour : le montant d'origine apparaît barré, avec le montant réduit en dessous.

Une remise en pourcentage ne peut pas dépasser 100 %. La valeur de la remise ne peut pas être négative. Pour offrir la ligne entièrement, réglez le pourcentage sur 100 %.

## La remise sur la facture elle-même

La remise accompagne la facture, pour que votre client voie exactement ce qui a été déduit :

- Sur le PDF de la facture, la remise a sa propre ligne sous la description, par exemple « Remise 20%: -900,00 € », et dans la colonne des montants, le montant d'origine est barré.
- La facture envoyée par e-mail mentionne la remise derrière la description de la ligne, avec le montant déduit.
- Au-dessus du sous-total s'ajoutent dans le bloc des totaux une ligne **Total avant remise** et une ligne **Remise**.

Modifier la remise plus tard ? Cliquez sur le badge de la ligne. Pour la supprimer, ouvrez le même panneau et choisissez **Supprimer la remise**.

## Remise via une ligne négative

Vous pouvez aussi accorder une remise à la main : ajoutez une ligne séparée avec un montant négatif pour la remise. Le total reflète le montant réduit.

Astuce : libellez clairement la ligne de remise (par ex. "Remise pour paiement anticipé -5 %") pour que le client comprenne la déduction.
