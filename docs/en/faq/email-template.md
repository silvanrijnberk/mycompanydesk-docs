---
title: Email templates
description: "Invoice, quote, reminder and credit note emails start from a standard text. Set your own text per type and language under Settings → Email."
last_verified: 2026-09-30
chatbot:
  triggers: ["email template", "customize email", "invoice email message", "email text", "change email message", "email sjabloon", "email aanpassen", "e-mail vorlage", "modele email", "personnaliser email"]
  actions:
    - { label: "Open email texts", to: "/settings/email/facturen" }
  follow_up: ["How do I send an invoice by email?", "How do I change the PDF style?"]
---

Invoice, quote, reminder, and credit note emails start from MyCompanyDesk's standard, well-tested texts, in your document language. There are no templates to set up or maintain, and you can leave it at that. Prefer your own wording? Set it once, and every next document of that kind starts from it.

Every type also has a choice of **style of the mail**: Formeel (the default text, in u-form), Kort, Persoonlijk, Compleet and Minimaal. The style decides which content the standard text carries, for instance whether the line-item table goes under the message (Compleet always does, even on a quote, the others follow the invoice-lines switch). Your own text always wins over a style, and the style choice applies to all languages.

Credit note emails use a dedicated template that names the document as a credit note, states the credited amount as a positive number, and does not ask for payment or include a due date.

## Your own standard text

You can set your own standard text in two places:

1. **Invoice and quote emails** under Settings → Email: pick the type of email (invoice, quote, reminder, or credit note) and the email language, write your subject and message, and save. Your text is marked **Your own text**, and **Back to standard text** brings the standard wording back after a confirmation.
2. **The send window**: write the subject and message the way you want them, and tick **Use this text from now on for invoices** (or for quotes, reminders, credit notes, or rent invoices). Once the email has gone out, your text is the starting point for every next document of that kind.

- The text is stored with placeholders: MyCompanyDesk fills in the name, number, amount, and dates fresh for every email.
- Your text applies per document type and per language. Other languages keep the standard text.
- The send window shows when your own text is active and offers **Back to the MyCompanyDesk standard text**. The switch takes effect when you send, and right after that you can reverse it with **Undo**.
- Only the workspace owner can set or reset the standard text. An accountant can adjust a single email but cannot change the default.

## The style of the mail

Under **Settings → Email → Factuur- and offertemails** you pick the style per type of mail. The five styles fill in the standard text for you:

- **Formeel**: the default text in the u-form, the way the mail already went out
- **Kort**: a few lines with the core, in je-form
- **Persoonlijk**: warm, in je-form, with a word of thanks for the collaboration
- **Compleet**: everything to pay or decide, always with the line-item table, even for a quote
- **Minimaal**: only the number, the total and the date

Choosing one styles the mail for every next send of that type, in every language. When you have an own text for that type, the page asks whether the style should replace it, and **Back to standard text** brings you, per type, back to the style you chose last. The switch in the send window that adds or removes the line-item table decides per send about the lines, as long as the table is allowed for that type; the Compleet style carries it always.

What you can change:
1. The sender: go to Settings → Email → Addresses and sending and choose your own domain (Office), Gmail, or Outlook
2. Your sign-off: fill in your support email, website, and social links under Settings → Company details; they appear under every email you send, and on your invoices and website. Your certifications and quality marks (STEK, VCA, CE and more) appear under it as well; under Settings → Email you choose per mail type whether they do
3. A single email: in the send window you can adjust the recipient, subject, and message before the email goes out

Tip: The details in your sign-off also appear on your invoices and website, so filling them in under Company details keeps every email complete.