---
title: "Montant impayé"
description: "Pour voir le total impayé : allez dans Factures et regardez l'onglet En attente de paiement, ou ouvrez Rapports, Clients."
last_verified: 2026-10-13
chatbot:
  triggers: ["outstanding amount", "total unpaid", "money owed", "total outstanding", "how much owed", "openstaand bedrag", "totaal onbetaald", "offener betrag", "montant impaye", "somme due"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open client report", to: "/reports/clients?tab=outstanding" }
  follow_up: ["How do I send payment reminders?", "How do I view overdue invoices?", "How do I debug a wrong total?"]
---

Pour voir le total des montants impayés :
1. Allez dans Factures
2. L'onglet **En attente de paiement** indique combien de factures sont chez vos clients et pour quel montant total. Si certaines sont en retard, il indique aussi combien. L'onglet **À envoyer** montre ce que vous n'avez pas encore envoyé. Sur téléphone, les tuiles **En attente** et **En retard** se trouvent en haut
3. Pour le détail par client, ouvrez Rapports › Clients et passez à l'onglet « En souffrance » (Office)

Astuce : si les totaux semblent incorrects, vérifiez d'abord la période et le statut sous **Filtres**.
