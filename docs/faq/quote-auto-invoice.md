---
title: "Automatic draft invoice from a signed quote"
last_verified: 2026-08-06
chatbot:
  triggers:
    - "quote auto invoice"
    - "automatic invoice from quote"
    - "draft invoice quote signing"
    - "offerte automatisch factuur"
    - "automatisch conceptfactuur offerte"
    - "angebot automatisch rechnung"
    - "devis facture automatique"
  actions:
    - { label: "Open settings", to: "/settings/facturen" }
    - { label: "Open quotes", to: "/quotes" }
  follow_up:
    - "Where do I find the draft invoice?"
    - "Can I still edit the invoice after it is created?"
    - "What happens if the draft invoice cannot be created?"
---

# Automatic draft invoice from a signed quote

You can have MyCompanyDesk create a draft invoice automatically when a customer signs a quote online.

## How to turn it on

1. Go to **Settings → Invoices and quotes** (`/settings/facturen`).
2. Scroll to the **Quotes** section.
3. Turn on **Create a draft invoice when a quote is signed**.
4. Changes save automatically.

## What happens when a customer signs

- The signed quote keeps its normal status flow.
- MyCompanyDesk creates a new invoice in **draft** status with the same line items, totals, and customer as the signed quote.
- The draft appears in **Invoices → Drafts**.

## Before sending the draft

Review the draft as you would any other invoice. If your workspace uses manual numbering, the draft has no number yet — add one before you send it. You can edit line items, notes, and the due date as usual.

## If something goes wrong

If the draft invoice cannot be created — for example because invoice numbering is unavailable — you get a notification. You can then create the invoice yourself from the signed quote with **Convert to invoice**.

## Related

- [Quotes](/features/quotes)
- [Invoices](/features/invoices)
- [Quote numbering](/faq/quote-numbering)
