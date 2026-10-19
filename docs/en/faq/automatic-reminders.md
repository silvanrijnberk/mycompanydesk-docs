---
title: Automatic reminders
description: "Automatic payment reminders are part of Office. Turn them on under Settings › Invoices and quotes; manual reminders stay free."
last_verified: 2026-10-19
chatbot:
  triggers: ["automatic reminders", "auto reminder", "scheduled reminders", "reminder automation", "automatische herinnering", "herinneringen instellen", "automatische erinnerung", "rappels automatiques"]
  actions:
    - { label: "Open invoice settings", to: "/settings/facturen" }
  follow_up: ["How do I send a manual reminder?", "How do I view overdue invoices?", "How do I set payment terms?"]
---

Automatic payment reminders are part of Office. On Desk the same spot shows an upgrade button; sending a reminder by hand from the invoice stays free.

To set up automatic payment reminders:
1. Go to Settings › "Invoices and quotes"
2. Turn on the switch "Overdue? Automatically send a reminder"
3. Changes save automatically

When a sent invoice is three days past its due date, MyCompanyDesk automatically sends a friendly reminder, then repeats it every week. The reminder states the remaining outstanding amount, which is the invoice total minus payments already received. If a customer has paid a deposit or an instalment, the reminder asks for the rest, not the full amount. Was the invoice first sent after its due date, the first automatic reminder waits seven days past that first send; the customer had only just received it. Sending a copy again later does not hold the reminder back.

You choose how many reminders go out under Settings › "Invoices and quotes": once the chosen number has been sent, MyCompanyDesk stops and tells you, so the next step stays yours. Reminders you send yourself count toward the same number.

If your workspace has online payments enabled, the reminder email gives the customer the same payment options as the original invoice: a **Pay now** button, an **Already paid? Let us know** button, and a scan-and-pay QR code on the PDF.

Automatic reminders are not sent when:
- the invoice has been canceled
- the invoice is already paid
- the invoice is a credit note or refund note
- the invoice has been fully credited by a credit note
- nothing is left outstanding

The reminder emails use fixed system templates; the text cannot be edited.

Tip: Need to nudge a customer right now? You can also send a manual reminder from the invoice.

### After the reminders stop

Once the last allowed reminder has gone out, the invoice moves into the follow-up flow described in [Send reminder](/en/faq/send-reminder): a final reminder that the law prescribes, and after its term the option to charge collection costs.
