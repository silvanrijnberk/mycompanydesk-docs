---
title: "Date d'échéance d'une facture"
last_verified: 2026-07-02
chatbot:
  triggers: ["set due date", "change due date", "payment terms", "payment deadline", "when invoice due", "net 30", "net 14", "vervaldatum", "betaaltermijn", "zahlungsfrist", "echeance", "date d echeance", "conditions de paiement", "modifier conditions de paiement", "changer conditions de paiement", "comment modifier les conditions de paiement", "comment changer les conditions de paiement"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open invoice settings", to: "/settings/facturen" }
  follow_up: ["How do I set default payment terms?", "How do I send reminders?", "How do I view overdue invoices?"]
---

Pour modifier l'échéance d'une seule facture :
1. Ouvrez la facture en mode édition
2. Dans la carte des détails de la facture, mettez à jour le champ "Date d'échéance"
3. Enregistrez la facture

Pour que les prochaines factures démarrent avec un autre délai, ajustez les conditions de paiement du client ou la valeur par défaut dans Paramètres → "Factures et devis" sous "Combien de jours le client a-t-il pour payer ?".

Astuce : les rappels automatiques suivent la date d'échéance ; avec le bon délai, ils partent aussi au bon moment.

Si un client n'a pas de conditions de paiement propres, c'est d'abord la valeur par défaut de l'espace de travail dans **Paramètres → Factures et devis** qui s'applique, puis seulement la valeur par défaut de la plateforme (14 jours). Cet ordre était auparavant sauté lors de la sélection d'un client, ce qui pouvait donner une date d'échéance plus tôt que prévu.

Les factures générées à partir de contrats et de factures récurrentes reçoivent aussi une date d'échéance. Elles utilisent le délai de paiement propre au contrat ou à la facture récurrente s'il est renseigné ; sinon, elles retombent sur la valeur par défaut de la plateforme, comme les factures créées manuellement.
