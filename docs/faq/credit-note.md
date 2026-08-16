---
title: Credit note
last_verified: 2026-08-16
chatbot:
  triggers: ["credit note", "create credit note", "issue credit", "credit invoice", "creditnota", "creditnota aanmaken", "gutschrift erstellen", "note de credit", "avoir"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I cancel an invoice instead?", "How does a credit note affect my VAT?", "How do I find the original invoice?"]
---

To create a credit note:
1. Open the original invoice you want to credit
2. Click "Create credit note / correction" on the detail page
3. MyCompanyDesk creates a complete, finalized credit note in one step: every line from the original is negated and the credit note gets the next number in your sequence
4. Send the credit note to the customer

You cannot adjust the amounts during creation; sent documents are locked, so the credit note always mirrors the original exactly. For a partial correction, create the full credit note first and then issue a new invoice for the correct amount.

A credit note returns money to the customer, so it has no payment due date of its own. In the customer portal the due-date row and the past-invoices table hide the deadline for credit notes. The Confirm payment button is also hidden, because a credit note pays the customer instead of asking the customer to pay. When the original invoice has been fully credited, the portal hides the payment buttons on that invoice too, labels the payment summary as Credited, and shows the credit note amount as part of the balance breakdown.

In the outstanding report, the credit note's amount is netted against the original invoice it corrects, so the customer's balance reflects what is actually still owed.

In the back office, the credit note detail page shows whether the credit amount is still open or already settled, so you can see at a glance whether you still need to refund or offset it.

When you send a credit note by email, it uses a dedicated credit-note template. The subject line names it as a credit note, the body states the credited amount as a positive number, and it does not ask for payment or show a due date. The PDF itself uses Credit note to, Credit note details, and Credit note No. in place of the invoice labels, so a credit note is never mislabeled as an invoice. While the credit note is still a draft, the suggested action card only offers to send it; once sent, no reminder or collection actions appear, because a credit note pays the customer rather than asking for money.

Tip: Because you create the credit note from the original invoice, the two documents match exactly and your records stay consistent.
