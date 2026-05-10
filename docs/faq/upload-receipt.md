---
title: "Upload receipt"
last_verified: 2026-05-09
chatbot:
  triggers: ["upload receipt", "attach receipt", "add receipt", "receipt photo", "scan receipt", "expense receipt", "bon uploaden", "bon toevoegen", "beleg hochladen", "telecharger recu"]
  actions:
    - { label: "Open expenses", to: "/expenses" }
  follow_up: ["How do I create an expense?", "How do I categorize an expense?"]
---

To upload a receipt to an expense:
1. Open an existing expense, or save a new expense first
2. On the expense detail page, use the "Upload Receipt" action
3. Select the image or PDF file you want to attach
4. Wait for the upload to finish and confirm it appears on the expense

Tip: If you are still on the new-expense form, save the expense first because receipt upload lives on the detail page.
