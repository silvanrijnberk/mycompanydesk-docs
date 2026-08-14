---
title: "Rappels automatiques"
last_verified: 2026-08-14
chatbot:
  triggers: ["automatic reminders", "auto reminder", "scheduled reminders", "reminder automation", "automatische herinnering", "herinneringen instellen", "automatische erinnerung", "rappels automatiques"]
  actions:
    - { label: "Open invoice settings", to: "/settings/facturen" }
  follow_up: ["How do I send a manual reminder?", "How do I view overdue invoices?", "How do I set payment terms?"]
---

Pour configurer les rappels de paiement automatiques :
1. Allez dans Paramètres → "Factures et devis"
2. Activez l'interrupteur "En retard ? Envoyer automatiquement un rappel"
3. Les modifications sont enregistrées automatiquement

Quand une facture dépasse de quelques jours sa date d'échéance, MyCompanyDesk envoie automatiquement un rappel courtois, puis le répète chaque semaine jusqu'au paiement. Le rappel indique le montant restant dû : le montant total de la facture moins les paiements déjà reçus. Si un client a déjà versé un acompte ou un paiement partiel, le rappel demande le solde, pas la totalité.

Les rappels automatiques ne sont pas envoyés si :
- la facture est annulée
- la facture est déjà payée
- il s'agit d'un avoir ou d'une note de remboursement
- il ne reste plus rien à payer

Les e-mails de rappel utilisent des modèles système fixes ; le texte ne peut pas être modifié.

Astuce : besoin de relancer un client tout de suite ? Vous pouvez aussi envoyer un rappel manuel depuis la facture.
