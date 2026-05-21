---
title: Create an invoice
last_verified: 2026-05-09
chatbot:
  triggers: ["create invoice", "new invoice", "make invoice", "add invoice", "write invoice", "send invoice", "first invoice", "how to invoice", "maak factuur", "nieuwe factuur", "factuur maken", "factuur aanmaken", "hoe maak ik een factuur", "rechnung erstellen", "wie erstelle ich eine rechnung", "neue rechnung", "creer facture", "comment creer une facture"]
  actions:
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I add a customer first?", "How do I change the PDF style?", "How do I set payment terms?"]
---

Here's how to create an invoice:
1. Go to Invoices and open "New Invoice"
2. Select a customer or add one from the customer picker
3. Add the line items with description, quantity, price, and VAT
4. In the Invoice Details card, set the invoice date and due date
5. Use "Save as Draft" if it is not ready yet, or "Finalize" when the invoice is ready (MyCompanyDesk checks your BTW-id and IBAN first — you can fill them in on the spot if needed)
6. After saving, open the invoice detail page to preview or send it

Tip: Company defaults like numbering, payment terms, and PDF settings live under Company. Make sure your BTW-id and IBAN are filled in under Company so you can finalize without interruption.
