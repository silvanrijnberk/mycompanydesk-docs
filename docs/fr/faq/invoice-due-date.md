---
title: Invoice due date
last_verified: 2026-05-09
chatbot:
  triggers: ["set due date", "change due date", "payment terms", "payment deadline", "when invoice due", "net 30", "net 14", "vervaldatum", "betaaltermijn", "zahlungsfrist", "echeance", "date d echeance", "conditions de paiement", "modifier conditions de paiement", "changer conditions de paiement", "comment modifier les conditions de paiement", "comment changer les conditions de paiement"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I set default payment terms?", "How do I send reminders?", "How do I view overdue invoices?"]
---
Pour modifier l echeance d une facture :
1. Ouvrez la facture en mode edition
2. Mettez a jour le champ « Date d echeance » dans la carte des details de facture
3. Enregistrez la facture

Si vous voulez que les nouvelles factures commencent avec une autre echeance par defaut, modifiez le delai de paiement du client ou les valeurs par defaut sous Entreprise → Facturation.
