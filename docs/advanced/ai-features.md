---
title: AI Features
last_verified: 2026-05-09
---

# AI Features

MyCompanyDesk uses AI in several places to speed up data entry, surface answers from your own books, and lower the cost of writing copy in four languages. This page lists every AI surface that ships in the product today and how it behaves.

Provider routing is intentional and changes per surface. Most surfaces follow a three-tier chain: Gemini (free quota) first, Ollama Cloud Pro second, local Ollama as last resort. Plan gating, where it applies, is enforced at the API layer through entitlements.

## Contextual guide (in-app chatbot)

The help icon in the app shell opens a chat panel that knows which page you are on, what records you are looking at, and what your workspace data looks like. It is built as a tool-using agent: instead of guessing at numbers, it asks for them.

- **Model.** Default chat model is `deepseek-v4-pro:cloud` on Ollama Cloud, with Gemini as the primary tier when the free quota is available. Both paths fall back to the next tier on rate-limit or outage; the swap is transparent to the conversation.
- **Streaming.** Replies stream over `POST /api/contextual-guide/stream` (Server-Sent Events). The web client renders incoming tokens as a typewriter effect so first tokens appear in well under a second.
- **FAQ short-circuit.** Before the model is called, the query is matched against the workspace FAQ corpus using SymSpell-corrected keyword search and a vector cosine fallback (Workers AI `bge-m3` primary, Gemini embeddings fallback). A confident match returns the curated FAQ answer with no LLM round-trip — fast and free.
- **Page context.** The current route, the visible entity, and a compact app-state summary are injected into the system prompt. The guide answers about what you are seeing, not in the abstract.
- **Conversation memory.** The last 6 turns are kept verbatim; older turns are summarised into a rolling memory.
- **Frustration handling.** A pre-classifier detects forbidden, casual, idle, and frustrated messages; those responses are answered without consuming the LLM tier.

### Data-query tool catalog

When the question needs a number, the model calls one of ten parameterised tools. Each tool is a hand-written, RLS-protected `SELECT` exposed to Gemini as a function declaration — the model picks the tool name and arguments, it cannot author SQL. Read-only by design.

| Tool | Returns |
|---|---|
| `revenue_summary` | Revenue, expenses, profit for a period |
| `top_customers` | Top customers by revenue or outstanding |
| `overdue_invoices` | List of currently overdue invoices |
| `vat_summary` | VAT collected, paid, and net for a period |
| `monthly_breakdown` | Per-month totals across the year |
| `expense_summary` | Expense totals grouped by category |
| `time_summary` | Time-registration totals per project |
| `invoice_list` | Invoices filtered by status/date/customer |
| `customer_aging` | Receivables aging buckets per customer |
| `tax_summary` | Country-aware tax position for the period |

Periods accept `this_month`, `last_month`, `this_quarter`, `this_year`, `last_year`. Results come back as small JSON payloads the model summarises in your language.

### VAT assistant (Dutch VAT page)

The NL VAT page has a dedicated assistant at `POST /api/vat-assistant/ask` that is **separate** from the general chatbot. It is pinned to `gpt-oss:120b-cloud` on Ollama Cloud Pro and receives the actual aangifte context for the selected period — KOR/KIA/OSS/ICP status, current quarter balance, treatment breakdown, and foreign-VAT refundables. It answers concretely about your numbers, not in the abstract, and always defers to the Belastingdienst for legal certainty.

Streaming is available via `askStream` for the same typewriter UX as the main chatbot.

## Vendor classifier (expenses)

When you enter an expense, the **vendor classifier** suggests the right category from your workspace's `expense_categories` table — not a fixed built-in list. It runs through Gemini Flash-Lite with a Dutch SME bookkeeping prompt that:

- Matches the vendor against existing category keys before creating new ones.
- Picks a `vat_treatment` (`standard` / `b2b_reverse_charge` / `foreign_vat_charged` / `import` / `kor`) based on the vendor's domain and country.
- Auto-flags potential investments (hardware/equipment over €450 ex-VAT) so depreciation kicks in.

The classifier is invoked from `expense-categories.service.classifyVendor(companyId, { vendor, domain })` and is wired to the expense form's category field.

## AI suggestions (with RLHF-lite feedback loop)

After an entity is created, the AI-suggestions service queues a low-priority LLM analysis and writes results into `ai_suggestions`. Surfaces include category fixes for expenses set to `other` and description-quality improvements for invoice line items, expenses, and customer notes.

The interesting bit is the **feedback loop**:

1. When you accept a suggestion, the input text is embedded (Workers AI `bge-m3` primary, Gemini fallback) and stored in `suggestion_examples` with the accepted value.
2. The next time the same task fires for your workspace, the new input is embedded and the top-K nearest neighbours are pulled in as few-shot examples.
3. The prompt picks up your house style automatically — "prior examples this user accepted" becomes part of the system message.

A FIFO cap of 50 examples per `(company_id, task)` keeps lookup at microseconds without `pgvector`. Embeddings are stamped with provider + dimension so a provider swap doesn't poison the lookup; mismatched rows are skipped, not crashed on.

## Industry detection

The local **E2B** model (Workers AI primary, Gemini Flash-Lite when `ai_processing_mode` is `google_only`) classifies your workspace's industry from invoice and expense history. It re-evaluates progressively:

| Workspace state | Behaviour |
|---|---|
| 0–2 entities | Skip — not enough signal |
| 3+ entities, no profile | First detection |
| Confidence < 0.6 and entity count doubled | Re-evaluate |
| Confidence ≥ 0.6 and doubled again | Re-evaluate |
| Confidence ≥ 0.8 | Stop |

The detected industry feeds back into the AI-suggestion prompts so categorisation matches how shops in your industry actually book things.

## Receipt scanner

Receipts and supplier invoices are extracted to structured expense data via `POST /api/receipt-scanner`.

- **Primary path.** PDFs and images go straight to Gemini multimodal as `inlineData`. No `tesseract.js`, no `unpdf`, no preprocessing — Gemini reads the document.
- **Fallback path.** When AI privacy mode is on, the file is over 15 MB, or Gemini is rate-limited, the scanner falls back to local Ollama: PDFs through `unpdf` for text, images through `tesseract.js`, parsing by Gemma 4 E2B.
- **Output.** Date, supplier, amount, line items, suggested category, VAT rate. Pre-LLM page filtering (keywords) keeps long PDFs cheap; a post-LLM exact-match filter is the safety net.

See [Receipt Scanning](/advanced/receipt-scanning) for the user-facing flow.

## Entity suggestions

The entity-suggestions service powers autocomplete-style inline hints on customer, project, and expense forms. It runs purely on database queries — no LLM — so it is instant and works offline. It complements the AI-suggestions service rather than competing with it: entity-suggestions is "remember what you typed last time", AI-suggestions is "what should this look like".

## Text check (typo correction)

Form fields run an in-process **SymSpell** typo correction on debounce as you type. It is wired into nine entity forms (invoices, quotes, expenses, customers, projects, contracts, objects, recurring entries, time entries).

- **Endpoint.** `POST /api/text-check` returns `{ corrected, hasCorrections, grammarAvailable: false }`.
- **Languages.** Dutch is the dictionary default; English, German, and French are supported.
- **No grammar.** Sentence-level grammar checking via LanguageTool was removed — keystroke-grade grammar was a continuous tax for marginal value. A button-triggered "Improve" action may return as a separate feature.

## Translation (Gemini Flash-Lite)

Runtime translation of short snippets goes through `translate.service` which wraps Gemini Flash-Lite. Three call sites use it today:

- **Chatbot.** Pre-processing translates non-English questions to English before the model call, then translates the reply back to the company language.
- **Support / feedback.** Inbound messages are normalised to English for the operations team.
- **AI suggestions.** Description prompts run in English, output is translated back.

Bulk locale-file sync (filling missing keys, re-translating drift across `nl/de/fr`) is **not** in this service — it lives in the Huisbot weekly cron which opens PRs against `development` autonomously. The in-app UI never blocks on translation drift.

## Plan gating

| Surface | Free | Pro | Business |
|---|---|---|---|
| Contextual guide | Limited messages, FAQ-only on overflow | Standard tier | Highest tier |
| AI suggestions | Off | On | On |
| Vendor classifier | Off | On | On |
| Receipt scanner | Off | On | On |
| Text check | On | On | On |
| Translation | On (UI strings only) | On | On |
| VAT assistant | Off | On (NL) | On (NL) |

Beta workspaces with `beta_override` bypass restrictions. See [Billing](/settings/billing) for the live plan matrix.

## Privacy

When `ai_processing_mode` is set to `local_only` on the workspace, every AI path that supports it (receipt scanner, AI suggestions, text check, vendor classifier, industry detection) routes through the local Ollama instance and never leaves the server. The contextual guide is cloud-only by design — it requires the chat-tier model and is disabled in `local_only` mode rather than degraded.
