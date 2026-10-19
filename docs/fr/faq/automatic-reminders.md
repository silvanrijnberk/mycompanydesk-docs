---
title: "Rappels automatiques"
description: "Les rappels de paiement automatiques font partie d'Office. Activez-les dans Paramètres › Factures et devis ; les rappels manuels restent gratuits."
last_verified: 2026-10-19
chatbot:
  triggers: ["automatic reminders", "auto reminder", "scheduled reminders", "reminder automation", "automatische herinnering", "herinneringen instellen", "automatische erinnerung", "rappels automatiques"]
  actions:
    - { label: "Open invoice settings", to: "/settings/facturen" }
  follow_up: ["How do I send a manual reminder?", "How do I view overdue invoices?", "How do I set payment terms?"]
---

Les rappels de paiement automatiques font partie d'Office. Avec Desk, le même emplacement affiche un bouton pour passer à Office ; envoyer un rappel à la main depuis la facture reste gratuit.

Pour configurer les rappels de paiement automatiques :
1. Allez dans Paramètres › « Factures et devis »
2. Activez l'interrupteur « En retard ? Envoyer automatiquement un rappel »
3. Les modifications sont enregistrées automatiquement

Quand une facture envoyée dépasse de trois jours sa date d'échéance, MyCompanyDesk envoie automatiquement un rappel courtois, puis le répète chaque semaine. Le rappel indique le montant restant dû : le montant total de la facture moins les paiements déjà reçus. Si un client a déjà versé un acompte ou un paiement partiel, le rappel demande le solde, pas la totalité. Si la facture a été envoyée pour la première fois après sa date d'échéance, le premier rappel automatique attend sept jours après cet envoi ; le client vient de la recevoir. Renvoyer par la suite une copie ne retient pas le rappel.

Vous décidez combien de rappels partent, dans Paramètres › « Factures et devis ». Une fois ce nombre envoyé, MyCompanyDesk s'arrête et vous prévient ; la suite vous appartient. Les rappels que vous envoyez vous-même comptent dans le même total.

Si votre espace de travail a activé les paiements en ligne, le courriel de rappel offre au client les mêmes options de paiement que la facture d'origine : un bouton **Payer maintenant**, un bouton **Déjà payé ? Signalez-le** et un QR-code sur le PDF pour scanner et payer.

Les rappels automatiques ne sont pas envoyés si :
- la facture est annulée
- la facture est déjà payée
- il s'agit d'un avoir ou d'une note de remboursement
- la facture a été entièrement créditée par un avoir
- il ne reste plus rien à payer

Les e-mails de rappel utilisent des modèles système fixes ; le texte ne peut pas être modifié.

Astuce : besoin de relancer un client tout de suite ? Vous pouvez aussi envoyer un rappel manuel depuis la facture.

### Quand les rappels s'arrêtent

Une fois le dernier rappel envoyé, le déroulé décrit dans Envoyer un rappel prend le relais : une relance finale, formulée comme la loi l'exige, puis, après son délai, la possibilité de facturer des frais de recouvrement.
