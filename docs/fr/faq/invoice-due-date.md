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
