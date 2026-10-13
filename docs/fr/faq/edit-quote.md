---
title: "Modifier un devis"
description: "Pour modifier un devis : ouvrez-le depuis la liste, cliquez sur Modifier, mettez à jour le client, les lignes, les notes ou les dates, enregistrez."
last_verified: 2026-05-09
chatbot:
  triggers: ["edit quote", "change quote", "update quote", "modify quote", "correct quote", "offerte bewerken", "offerte wijzigen", "angebot bearbeiten", "devis modifier", "editar cotizacion", "editar proposta", "modificare preventivo"]
  actions:
    - { label: "Open quotes", to: "/quotes" }
  follow_up: ["How do I duplicate a quote?", "How do I preview the updated quote?", "How do I change quote validity?"]
---

Pour modifier un devis :
1. Ouvrez le devis depuis la liste
2. Cliquez sur « Modifier » (ou /quotes/{id}/edit)
3. Mettez à jour le client, les lignes, les notes ou les dates
4. Enregistrez

Pas de bouton « Modifier » ? Le devis a alors déjà été accepté, refusé ou a expiré, il a été converti en facture ou en contrat, il attend la signature de votre client ou il se trouve dans la corbeille. Dupliquez alors le devis et modifiez la copie.
