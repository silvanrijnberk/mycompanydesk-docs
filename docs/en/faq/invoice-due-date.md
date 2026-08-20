---
title: Invoice due date
description: "To change the deadline for one invoice: open the invoice in edit mode, in the Invoice Details card, update the Due date field, save the invoice."
last_verified: 2026-07-02
chatbot:
  triggers: ["set due date", "change due date", "payment terms", "payment deadline", "when invoice due", "net 30", "net 14", "vervaldatum", "betaaltermijn", "zahlungsfrist", "echeance", "date d echeance", "conditions de paiement", "modifier conditions de paiement", "changer conditions de paiement", "comment modifier les conditions de paiement", "comment changer les conditions de paiement"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open invoice settings", to: "/settings/facturen" }
  follow_up: ["How do I set default payment terms?", "How do I send reminders?", "How do I view overdue invoices?"]
---

To change the deadline for one invoice:
1. Open the invoice in edit mode
2. In the Invoice Details card, update the "Due date" field
3. Save the invoice

If you want future invoices to start with a different deadline, update the customer's payment terms or the default at Settings → "Facturen en offertes" under "Hoeveel dagen krijgt een klant om te betalen?" (how many days does a customer get to pay?).

Tip: Automatic payment reminders follow the due date, so a correct deadline also means reminders go out at the right moment.

If a customer has no payment terms of their own, the workspace default at **Settings → Facturen en offertes** is used before falling back to the platform default (14 days). That order used to be skipped when selecting a customer, which could produce an earlier due date than intended.

Generated invoices from contracts and recurring invoices also receive a due date. They use the contract's or recurring invoice's own payment-term field when one is set; otherwise they fall back to the platform default, just like manually created invoices.
