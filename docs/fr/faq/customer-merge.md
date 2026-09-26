---
title: "Fusionner des clients"
description: "Pour fusionner des fiches clients en double : accédez à Clients, identifiez les doublons, ouvrez l'un des doublons."
last_verified: 2026-09-26
chatbot:
  triggers: ["merge customers", "duplicate customer", "combine customers", "customer duplicate", "klanten samenvoegen", "dubbele klant", "kunden zusammenfuhren", "fusionner clients", "doublons clients"]
  actions:
    - { label: "Open customers", to: "/customers" }
  follow_up: ["How do I edit a customer?", "How do I find a customer?", "How do I delete a customer?"]
---
Pour fusionner des fiches clients en double :
1. Accédez à Clients
2. Identifiez les doublons
3. Ouvrez l'un des doublons
4. Utilisez l'option de fusion ou de combinaison si disponible
5. Sélectionnez la fiche à conserver comme principale
6. Confirmez - toutes les factures et l'historique sont consolidés

Remarque : Si aucune option de fusion n'est disponible, transférez manuellement les factures puis supprimez le doublon.

Un client archivé ne peut pas être la fiche principale d'une fusion. Restaurez d'abord le client archivé : tant qu'un client est archivé, ses factures récurrentes et ses contrats ne sont pas facturés, et la fusion arrêterait donc cette facturation en silence.
