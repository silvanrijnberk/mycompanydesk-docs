---
title: Send reminder
description: "To follow up on unpaid invoices: open the overdue invoice, use the Send Reminder action, the system generates a professional reminder email."
last_verified: 2026-10-19
chatbot:
  triggers: ["send reminder", "payment reminder", "remind customer", "follow up", "chase payment", "herinnering sturen", "betaalherinnering", "aanmaning", "zahlungserinnerung", "relance", "rappel paiement"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I set up automatic reminders?", "How do I view overdue invoices?", "How do I mark an invoice as paid?"]
---

To follow up on unpaid invoices:
1. Open the overdue invoice
2. Use the "Send Reminder" action
3. The system generates a professional reminder email

The reminder states the remaining outstanding amount (invoice total minus payments already received). If the customer has paid a deposit or an instalment, the reminder asks for the rest, not the full invoice amount.

If your workspace has online payments enabled, the reminder email gives the customer the same payment options as the original invoice: a **Pay now** button, a **View invoice** button, the **Already paid? Let us know** button, and a scan-and-pay QR code on the PDF. This applies to both manual reminders and automatic reminders.

You cannot send a reminder when:
- the invoice is still a draft
- the invoice was never sent to your customer: a payment reminder is never the first mail a customer gets about an invoice, so MyCompanyDesk refuses it; send the invoice first. Once something has come in, or a send to the customer is recorded, reminders can go out again.
- the invoice has been canceled
- the invoice is already marked as paid
- the invoice is waiting for payment verification because the customer reported it as paid through the portal; reminders wait until you confirm the payment or set the report aside
- the invoice is a credit note or refund note
- the invoice has been fully credited by a credit note
- nothing is left outstanding (for example, the customer paid while the page was open)

A report from the portal has an end to it. If five working days pass and nothing has come in, MyCompanyDesk checks the facts: with a working bank connection on the invoice's account number, one that shows no incoming payment since around the invoice date, the invoice goes back to sent, the report is cleared, and your customer can pay or report again; a notification tells you about the set-back. In any other case, MyCompanyDesk asks you once whether the payment has come in, and leaves the invoice alone until you decide. You can also act yourself: the invoice page proposes **Confirm payment** when the money is there, and **Not received** to set the invoice back to sent, which lets reminders run again and lets your customer report or pay anew.

When an invoice becomes overdue, the invoice detail page shows a next step under **Suggested action**:

- **Send first reminder**: for overdue invoices that have not been reminded yet
- **Send reminder #2** (and onwards): for invoices that have already been reminded
- **Send an urgent reminder**: for invoices that are long overdue. The button opens the reminder dialog; the detail line also suggests calling the customer or offering a payment plan.
- **Create a credit note or correction**: if the customer disputes the invoice or the amounts have changed

Rather not keep track yourself? Turn on **Overdue? Automatically send a reminder** under Settings › **Invoices and quotes** (Office). Once an invoice is three days past its due date, MyCompanyDesk sends a friendly reminder by itself, then again every week up to the number of reminders you choose there. After the last one, the flow below takes over. If it stays quiet, give your customer a call.

## Paid late: the final reminder and collection costs

When your customer keeps not paying, the law prescribes what happens next, and MyCompanyDesk walks that path with you:

1. **Reminders run out.** After the number of reminders you set, sending stops automatically and you get a notification. Reminders never cost your customer money; only the step after the final reminder can.
2. **The final reminder.** You can send it yourself from the invoice, or MyCompanyDesk can send it automatically if you turn that on under the same setting. The text is fixed, because the law prescribes what it must say. What it names depends on the customer: for a private customer it shows the collection costs that may follow after a term; for a business it names the fixed amount and the statutory interest that are already due. Whether your customer counts as a business follows their record: a customer set as a business without a Chamber of Commerce or VAT number is treated as a private person.
3. **The waiting term.** After the final reminder your customer gets time to pay. The invoice page shows until when. If the email failed to deliver because the address does not work, you cannot charge costs yet: correct the address and email again, or send the letter by post and mark it as sent.
4. **Charging the costs.** Once the term has passed without payment, the invoice page offers to charge the costs. MyCompanyDesk makes a draft invoice for the collection costs (and, for a business, the interest), which you check and send. Multiple unpaid invoices of the same customer are grouped into one letter, as the law requires.

Every step sends you a notification, so you know where each late invoice stands. Settings › **Invoices and quotes** also lets you limit how many reminders are sent and whether the final reminder goes out automatically.

You can change the text of your reminder email under Settings › **Email** › **Invoice and quote emails**. The final reminder text is fixed by law and is not editable.
