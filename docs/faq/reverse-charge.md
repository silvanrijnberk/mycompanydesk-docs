---
title: Reverse charge
last_verified: 2026-07-02
chatbot:
  triggers: ["reverse charge", "reverse charge invoice", "eu invoice", "intracommunautair", "intracommunity", "btw verlegd", "reverse charge rechnung", "autoliquidation", "intra-community"]
  actions:
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I add a customer VAT number?", "How does reverse charge affect my VAT return?", "How do I preview an invoice?"]
---

To create a reverse charge (EU) invoice:
1. Go to Invoices → New Invoice
2. Select your EU customer and check that their VAT number is filled in on the customer record
3. Turn on the "VAT Reverse Charge (BTW verlegd)" toggle on the invoice form; MyCompanyDesk suggests it automatically for EU business customers
4. The VAT on all line items switches to 0% automatically, no manual changes needed
5. Preview the invoice to confirm the reverse charge note, then send it

Tip: The toggle is always available on the invoice form; you do not need to enable anything in your settings first.
