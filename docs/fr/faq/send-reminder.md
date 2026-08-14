---
title: Send reminder
last_verified: 2026-08-14
chatbot:
  triggers: ["send reminder", "payment reminder", "remind customer", "follow up", "chase payment", "herinnering sturen", "betaalherinnering", "aanmaning", "zahlungserinnerung", "relance", "rappel paiement"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I set up automatic reminders?", "How do I view overdue invoices?", "How do I mark an invoice as paid?"]
---

Pour envoyer un rappel pour une facture impayee :
1. Ouvrez la facture
2. Utilisez l action « Envoyer un rappel »
3. Verifiez le message puis envoyez-le

Le rappel indique le montant restant dû (montant total de la facture moins les paiements déjà reçus). Si le client a déjà versé un acompte ou un paiement partiel, le rappel demande le solde, pas le montant total de la facture.

Vous ne pouvez pas envoyer de rappel lorsque :
- la facture est encore un brouillon
- la facture est annulée
- la facture est déjà marquée comme payée
- il s'agit d'un avoir ou d'une note de remboursement
- il ne reste plus rien à payer (par exemple, le client a payé pendant que la page était ouverte)

Vous pouvez aussi modifier le modele de rappel dans Parametres → E-mails.
