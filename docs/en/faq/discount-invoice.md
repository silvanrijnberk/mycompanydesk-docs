---
title: Apply a discount to an invoice
description: "Apply a discount to an invoice line: choose a percentage or a fixed amount, and the discount shows on the invoice PDF and in the emailed invoice."
last_verified: 2026-09-30
chatbot:
  triggers: ["discount", "add discount", "invoice discount", "percentage discount", "reduce price", "korting", "korting toevoegen", "rabatt", "rabatt gewahren", "remise", "reduction"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I set payment terms?", "How do I create a credit note?", "How do I preview the invoice PDF?"]
---

Every invoice line can carry its own discount:

1. Edit or create an invoice
2. Click the tag button on the line that should carry the discount
3. In the small panel that opens, choose the discount type: **percentage** or **fixed amount**
4. Enter the discount value and choose **Done**

The line now shows a chip with the discount (for example -10%), and the line total updates: the original amount is struck through, with the discounted amount underneath.

A percentage discount cannot be higher than 100%. The discount value cannot be negative. If you want to give the line away entirely, set the percentage discount to 100%.

## The discount on the invoice itself

The discount travels with the invoice, so your customer sees exactly what was deducted:

- On the invoice PDF, the discount gets a line of its own under the description, for example "Discount 20%: -€900.00", and the amount column shows the original amount struck through.
- The emailed invoice mentions the discount behind the line description, with the deducted amount.
- The totals block gains a **Total before discount** row and a **Discount** row above the subtotal.

Changing the discount later? Click the discount chip on the line. To remove it, open the same panel and choose **Remove discount**.

## Discount via a negative line item

You can also apply a discount manually: add a separate line item with a negative amount for the discount. The total reflects the reduced amount.

Tip: Clearly label the discount line (e.g. "Early payment discount -5%") so the customer understands the deduction.
