---
title: "Add VAT number"
last_verified: 2026-05-09
chatbot:
  triggers:
    - "add vat number"
    - "set vat number"
    - "enter vat number"
    - "btw nummer"
    - "btw nummer invoeren"
    - "ust id eingeben"
    - "numero tva"
  actions:
    - { label: "Open company info", to: "/company?section=company" }
  follow_up:
    - "How do I set up my company settings?"
    - "How do I set VAT on an invoice?"
---

To add or change your company VAT number:
1. Go to Company → Company Info
2. Fill in the "VAT number" field there
3. Changes save automatically

Your VAT number is then available on generated documents. For customer VAT numbers, open the customer profile and set their VAT field there.
