---
title: Growth
last_verified: 2026-08-03
---

# Growth

The Growth page (`/groei`) is a dedicated place for work that drives the next assignment. It only shows signals that matter right now: website quote requests, quotes that are about to expire or have already expired, and customers who used to buy but have gone quiet.

## Why Growth is separate from the dashboard

The dashboard briefing is sorted by urgency. That works well for VAT deadlines and outstanding invoices, but it is the wrong place for slower campaign-style work such as winning back lapsed customers. That kind of task would always sit below today's admin emergencies and never get done. Growth keeps those tasks visible in their own space, without competing with what you genuinely have to finish today.

The two truly time-bound signals, a request waiting for an answer and a quote about to expire, also appear in the dashboard **Good news** tab, because those are today-actions. Both screens read the same data, so they can never contradict each other.

## What you see

Cards are only shown when there is something to do. A workspace without a website form, open quotes or lapsed customers gets a calm empty state instead of three zeros. The page therefore needs no industry-specific settings.

### Website quote requests

If you have connected a website form, new quote requests land here. The card shows:

- How many requests via your website are waiting.
- How long the oldest request has been waiting.
- A hint that whoever replies first usually wins the job.
- A link to **Quotes > Requests** so you can respond.

The same count and oldest waiting time are also shown in the dashboard briefing under **Good news**.

### Expiring and expired quotes

Sent quotes without an answer are grouped here. The card shows:

- How many quotes are waiting for an answer.
- How many have already expired.
- How many expire this week.
- A link to the quote list so you can follow up.

See [Quotes](/features/quotes) for creating, sending and converting quotes.

### Lapsed customers

Customers who bought before but have not had an invoice this year are listed here. The card shows:

- How many customers have lapsed.
- How much they spent together in the past.
- The date of their last invoice.
- A link to the customer list so you can reach out.

See [Customers](/features/customers) for filtering and managing your customer base.

## Access

Growth is in the left navigation under its own menu item. It is available to any workspace role that can view quotes and customers.

## Source references

- `apps/web/pages/groei.vue`
- `apps/web/locales/en.json` keys under `groei`, `nav.groei` and `dashboard.briefing.goodNews.openRequests/oldestWaiting/quotesExpired/quotesExpiring`
