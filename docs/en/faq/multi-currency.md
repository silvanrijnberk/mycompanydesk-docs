---
title: "Multi currency"
description: "MyCompanyDesk keeps your books in euros. Invoices, quotes and reports are in EUR; foreign-currency receipts convert to a euro amount."
last_verified: 2026-10-13
chatbot:
  triggers: ["multi currency", "different currency", "foreign currency", "invoice in dollars", "invoice in pounds", "andere valuta", "vreemde valuta", "andere wahrung", "devise etrangere", "dollar invoice", "pound invoice"]
  actions:
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I set up my company settings?", "How do I change my language?"]
---

MyCompanyDesk keeps your books in euros. Invoices, quotes and reports are all in EUR. There is no currency setting and no per-document currency picker; this is a deliberate product choice, not a missing preference.

Expense documents in another currency are supported. A receipt from abroad or a supplier invoice in dollars or pounds is recorded with the original currency and the amount on the document, while the expense itself carries a euro amount for your books: the scan screen asks for the euro amount the bank converts the document to, and a payment that shows up on a linked bank account settles the expense at the amount the bank actually charged. See Foreign currency expenses in [Expenses](/en/features/expenses#foreign-currency).

If you bill a customer abroad, the invoice is still in euros.

Tip: Agree with foreign clients up front that you invoice in EUR. They pay the euro amount, and any conversion happens on their side.
