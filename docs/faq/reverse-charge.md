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

## Reverse-charge expenses

When you receive a reverse-charge invoice from a supplier, MyCompanyDesk needs to know the supplier's origin to put the VAT in the right aangifte rubriek:

- A Dutch supplier with a KVK number or country set to NL goes to rubriek 2a (domestic reverse charge).
- A supplier from another EU country goes to rubriek 4b (intra-EU acquisition).

If the supplier country or KVK number is missing, the pre-filing check on the VAT page flags the expense and blocks filing until you fix it. Open the expense, add the missing country or KVK number, then run the pre-filing checks again.
