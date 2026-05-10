---
title: Reverse charge
last_verified: 2026-05-09
chatbot:
  triggers: ["reverse charge", "reverse charge invoice", "eu invoice", "intracommunautair", "intracommunity", "btw verlegd", "reverse charge rechnung", "autoliquidation", "intra-community"]
  actions:
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I add a customer VAT number?", "How does reverse charge affect my VAT return?", "How do I set VAT to 0% on line items?"]
---
To create a reverse charge (EU) invoice:
1. Go to Invoices → New Invoice (or use the Reverse Charge option if available)
2. Select your EU customer and check that their VAT number is filled in on the customer record
3. Add line items with 0% VAT
4. Preview the invoice to confirm the note and VAT fields shown on the document
5. Save and send
