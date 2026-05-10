---
title: Credit note
last_verified: 2026-05-09
chatbot:
  triggers: ["credit note", "create credit note", "issue credit", "credit invoice", "creditnota", "creditnota aanmaken", "gutschrift erstellen", "note de credit", "avoir"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I cancel an invoice instead?", "How does a credit note affect my VAT?", "How do I find the original invoice?"]
---

To create a credit note:
1. Open the original invoice you want to credit
2. Click the "Create credit note / correction" button on the detail page
3. The system pre-fills a negative invoice referencing the original
4. Adjust amounts if it's a partial credit
5. Save and send to the customer

The app creates a separate negative record linked to the original invoice so you can review both items later.
