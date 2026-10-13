---
title: AI Features
description: "Every AI feature in MyCompanyDesk, what it does, what Desk and Office include, and how Google Gemini keeps your data in the EU."
last_verified: 2026-10-13
---

# AI Features

MyCompanyDesk uses AI in a few places to make your work faster: an assistant that thinks along, receipts that fill themselves in, and suggestions for categories and invoice lines. This page lists every AI feature, what it does and which plan it belongs to.

All AI features run on Google Gemini through Google Cloud's Vertex AI, in EU data centres. There is no second AI provider.

## Assistant

The assistant icon at the top opens a chat panel. On desktop it slides in from the right, on your phone it opens from the bottom. Which assistant you get depends on your plan:

- **Desk: Desky.** A guide to the app. Desky knows which page you are on and helps with questions like "where do I find..." and "how do I...".
- **Office: Financial Assistant.** An assistant that works with your own figures. Ask what is still outstanding, where your VAT stands or which customer brings in the most, and have it set up a quote or invoice for you. You check it yourself before you save it.

### Message limit

| Plan | Assistant messages per month |
|---|---|
| Desk | 10 |
| Office | 1,000 |

Once the limit is reached on Desk, you still get answers from the frequently asked questions. AI limits are monthly, not daily, and reset on the first of the month.

### Ask a human

At the bottom of the conversation the **Stuck?** block can appear: the people who currently answer questions, with name and photo, next to a WhatsApp button. In Desky it shows up after the first complete answer. The Office Financial Assistant is a chat about your own figures, not a helpdesk: there the block appears once the conversation turns into a help question, the assistant gets stuck, or you ask for a person yourself. Type something like "customer service" or "a real human" and the block comes up straight away.

Click someone (**Ask** followed by their name) and a short form opens: your question, plus the checkbox **Include my conversation with the assistant**, ticked by default. Sending turns your question into a support ticket. The answer arrives in the app and by email, within one working day and usually within a few hours. The WhatsApp button opens a chat with a short introduction already filled in: who you are, which page your question is about, and the question itself.

### You are talking to AI

The assistant always shows that you are talking to AI, as the EU AI Act (article 50) requires. A label sits next to its name, and an empty conversation shows the line "Answers are indicative and may contain mistakes." Always check financial and tax conclusions yourself.

## AI suggestions

The **AI Suggestions** switch in **Settings › Modules** lets AI help with your bookkeeping. This switch belongs to Office and is off by default.

- **Category and VAT on expenses.** When you type a description or supplier, MyCompanyDesk suggests a category and VAT rate.
- **Improve.** On an expense, the **Improve** button suggests a clearer description and better field values. You see the current and the proposed value side by side and choose **Apply** or **Dismiss** per field.
- **Draft lines.** In a quote or invoice, describe in plain words what you will do or have done. **Draft lines** fills in the lines and prices for you, based on your own offering, earlier invoices or your hourly rate. You then adjust them as usual.

Applying works exactly like editing by hand. An expense in the trash, a locked VAT period or an archived category blocks the change, just as with a manual edit, and the change is recorded in the audit log. VAT, reports and the dashboard show the new value straight away.

When a quote request comes in through your website, AI prepares a draft quote for it, with lines and estimated prices. This also works on Desk, without the switch. The draft quote has no number and is not sent: you review it.

All these suggestions count towards the monthly limit: 10 AI suggestions on Desk and 2,000 on Office.

## Receipt scanning

Take a photo of a receipt or upload a PDF, and the date, amount, supplier, VAT rate and description are filled in for you. Receipt scanning is part of every plan: 3 scans per month on Desk, 200 on Office.

See [Receipt Scanning](/en/advanced/receipt-scanning) for the steps.

## Typo check

The **Typo & Grammar Check** (a switch in **Settings › Modules**) checks the text fields in your forms for typos as you type, in Dutch, English, German and French. It does not check grammar. This check runs on MyCompanyDesk's own servers, without an AI provider, and belongs to Office.

## Dashboard briefing (Office)

On Office, the top of your dashboard shows a short briefing, written by AI from your own figures: what matters most right now, one or two supporting points and a concrete next step, such as "send Atelier Norden a reminder today". The briefing is created once a day, in your own language. Amounts are rounded to whole euros before they reach the model. If it cannot be created, you see the regular dashboard summary. The figures themselves are available on every plan; only the AI text belongs to Office.

On Office you also get a short AI commentary with your reports and in the monthly overview email you receive at the start of each month.

## Inbox reply help (Office)

In the inbox, AI can draft the reply to a customer email for you. You can have it write a new reply, optionally with a short instruction, or polish your own draft without changing its meaning or language.

- The reply is written in the language of the last incoming email, in the first person, signed with your name.
- Only mail that actually arrived and replies that were actually sent are taken into account. Drafts and failed sends are not.
- When the AI does not know a detail, it leaves a placeholder such as `[date]` instead of making something up.
- Nothing is sent automatically. You read and edit the reply yourself first.
- For an email flagged as suspicious, reply help is not available.

## What each plan includes

| Feature | Desk | Office |
|---|---|---|
| Assistant | Desky, the app guide: 10 messages per month | Financial Assistant with your own figures: 1,000 messages per month |
| AI suggestions (category, VAT, Improve, Draft lines) | No | Yes |
| Draft quote for a quote request through your website | Yes | Yes |
| Receipt scanning | 3 per month | 200 per month |
| Typo check | No | Yes |
| Dashboard briefing and AI commentary on reports | No | Yes |
| Inbox reply help | No | Yes |

Monthly limits at a glance:

| Monthly limit | Desk | Office |
|---|---|---|
| Assistant messages | 10 | 1,000 |
| Receipt scans | 3 | 200 |
| AI suggestions | 10 | 2,000 |

## Privacy and data protection

All AI features run on Google Gemini through Vertex AI, in Google Cloud EU regions. MyCompanyDesk has a data processing agreement with Google Cloud for this. There is no second AI provider and no fallback outside the EU: if an AI request fails, you get a message or fill it in yourself.

## Tips

- Turn on AI suggestions once and they work along automatically.
- Receipt scanning is especially handy for paper receipts: just take a photo.
- Desky answers most "how do I..." questions about the app.
