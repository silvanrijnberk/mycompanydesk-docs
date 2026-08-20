---
title: "Multi currency"
last_verified: 2026-07-02
chatbot:
  triggers: ["multi currency", "different currency", "foreign currency", "invoice in dollars", "invoice in pounds", "andere valuta", "vreemde valuta", "andere wahrung", "devise etrangere", "dollar invoice", "pound invoice"]
  actions:
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I set up my company settings?", "How do I change my language?"]
---

MyCompanyDesk works in euros only. All invoices, quotes, expenses, and reports are in EUR. There is no currency setting and no per-document currency picker; this is a deliberate product choice, not a missing preference.

If you bill a customer abroad, the invoice is still in euros.

Tip: Agree with foreign clients up front that you invoice in EUR. They pay the euro amount, and any conversion happens on their side.
