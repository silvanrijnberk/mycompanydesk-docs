---
title: AI Features
last_verified: 2026-07-02
---

# AI Features

MyCompanyDesk uses AI in several places to speed up data entry, surface answers from your own books, and help you write better copy. This page lists every AI feature in the product and what it does for you.

## In-app assistant

The help icon in the app opens a chat panel that knows which page you are on and what you are looking at, so it answers about your situation instead of in the abstract.

The assistant can look up real numbers from your own workspace when you ask for them:

- Revenue, expenses, and profit for a period, including per-month breakdowns
- Outstanding and overdue invoices, and which customers owe you the most
- Expense totals per category and time registration per project
- Your VAT position: collected, paid, and net per period
- The Dutch VAT return, filled in per section, plus checks that flag anything blocking a filing (draft invoices, missing receipts)
- KOR and KIA trackers: how close you are to the small-business scheme threshold and what your investment deduction looks like
- Intra-EU sales for the ICP declaration and per-country EU sales

It also answers "how do I" questions using the built-in help content, and one question can combine both: ask "how do I file my Q2 VAT and what is my balance" and you get the steps and the number in one reply. Replies stream in live, so you see the answer forming instead of waiting.

The assistant is read-only by design: it can look up your data, but it never creates, changes, or deletes anything.

A small "AI" badge next to the assistant name reminds you that you are talking to an AI, and the empty chat shows a short disclosure: answers may contain errors, so always verify financial or tax conclusions yourself. On the Pro plan the assistant panel gets a violet Pro accent; the capabilities and disclosures are the same on every plan.

## Inbox assistance

When your business inbox receives email, AI triages each conversation for you:

- **Thread summary**: A short summary of what the conversation is about, in your workspace language.
- **Suggested actions**: Concrete next steps, like "send the quote" or "confirm the appointment".
- **Label suggestions**: Proposed labels you can accept with one click. AI proposes, you decide; nothing is labeled automatically.
- **Spam detection**: Clearly unwanted mail is moved to spam automatically. When the system is unsure, the thread stays in your inbox with a subtle hint and a one-tap "mark as spam" shortcut; ambiguous mail is never auto-routed.

You can regenerate the summary and suggestions for any thread on demand.

## Website text assistance

The [site builder](/advanced/business-page) includes three writing tools:

- **Tone rewrite**: Every text field in the section inspector offers four one-click rewrites: shorter, calmer, sharper, or friendlier. The rewrite keeps your language and never invents new information.
- **Vul met AI**: Fill all of a section's text in one click, based on your company profile. Repeat clicks cycle through cached variants for free.
- **Regenereer met AI**: Regenerate your site's starting copy (tagline, about text, and service drafts) on demand, for any workspace. You review and edit everything before it is applied.

See [Site Builder](/advanced/business-page#ai-writing-help) for details.

## Receipt scanner

Upload a photo or PDF of a receipt or supplier invoice and the scanner extracts the date, supplier, amount, line items, VAT rate, and a suggested category, ready to save as an expense. Long documents are handled efficiently, and scans count toward your monthly AI cap. See [Receipt Scanning](/advanced/receipt-scanning) for the full flow.

## Expense category suggestions

When you enter an expense, the vendor is matched to the right category from your own category list, not a fixed built-in one. The suggestion also picks the correct VAT treatment based on the vendor's country and flags potential investments (equipment over EUR 450 excluding VAT) so depreciation is handled correctly.

## Smart suggestions

After you create an invoice, expense, or customer note, a background check suggests improvements: a better category for expenses filed under "other", or a clearer description for invoice lines. Suggestions learn from you: when you accept one, similar future suggestions follow your style automatically. Nothing is changed until you accept.

The platform also detects your industry from your invoice and expense history, so suggestions match how businesses like yours actually book things.

## Instant form suggestions

Customer, project, and expense forms offer inline autocomplete based on what you entered before. This runs entirely on your own data with no AI involved, so it is instant and always available.

## Text check

Form fields correct typos as you type, across nine entity forms (invoices, quotes, expenses, customers, projects, contracts, objects, recurring entries, and time entries). Dutch is the default; English, German, and French are also supported.

## Dashboard briefing

The dashboard opens with a short, personal briefing written for your day: the most urgent action first, one or two supporting points, and a concrete suggested next step. It is generated once per day in your own language and refreshed the next day. If the briefing cannot be generated, the dashboard quietly falls back to its standard summary; you never see an error.

## Monthly usage caps

AI usage is capped per calendar month, not per day, so batching 40 receipt scans on a Friday afternoon is fine.

| Metric | Free | Starter | Pro |
|---|---|---|---|
| AI chat messages | 10 | 100 | 1 000 |
| AI receipt scans | 3 | 30 | 200 |
| AI suggestions | 10 | 200 | 2 000 |

## Privacy

Cloud AI processing runs on EU-based infrastructure. On the Pro plan you can additionally enable privacy mode, which keeps supported AI features (receipt scanning, suggestions, text check, category suggestions) on MyCompanyDesk's own servers so documents never leave the platform. The in-app assistant needs cloud processing and is unavailable while privacy mode is on, rather than silently degraded.
