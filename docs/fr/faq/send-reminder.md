---
title: Send reminder
last_verified: 2026-08-16
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

Si votre espace de travail a activé les paiements en ligne, le courriel de rappel offre au client les mêmes options de paiement que la facture d'origine : un bouton **Voir \u0026 payer**, un bouton **Confirmer le paiement** et un QR-code sur le PDF pour scanner et payer. Cela vaut pour les rappels manuels et automatiques.

Vous ne pouvez pas envoyer de rappel lorsque :
- la facture est encore un brouillon
- la facture est annulée
- la facture est déjà marquée comme payée
- le client a indiqué dans le portail qu'il a déjà payé et que le statut est "Vérification requise"
- il s'agit d'un avoir ou d'une note de remboursement
- la facture a été entièrement créditée par un avoir
- il ne reste plus rien à payer (par exemple, le client a payé pendant que la page était ouverte)

Quand une facture est en retard, la page de detail propose la prochaine etape a suivre :

- **Envoyer un rappel** — pour les factures legerement en retard
- **Envoyer un rappel plus ferme** — pour les factures deja relancees une fois
- **Envoyer une relance urgente** — pour les factures de plus de quelques jours de retard. Le bouton ouvre la boite de dialogue du rappel; la ligne de detail suggere aussi d appeler le client ou de proposer un echeancier.
- **Creer un avoir ou une correction** — si le client conteste la facture ou si les montants ont change

Dans la plupart des cas, envoyez des rappels 1 jour avant l echeance (courtois), 3 jours apres (plus ferme) et 10 jours apres (dernier avis). Passez ensuite a un appel telephonique.

Vous pouvez aussi modifier le modele de rappel dans Parametres → E-mails.
