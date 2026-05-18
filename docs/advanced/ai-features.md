---
title: AI Features
last_verified: 2026-05-18
---

# AI Features

MyCompanyDesk uses AI in several places to speed up data entry, surface answers from your own books, and lower the cost of writing copy in four languages. This page lists every AI surface that ships in the product today and how it behaves.

Provider routing is intentional and changes per surface. The default chain is EU-only: Gemini (free quota) on Vertex AI `europe-west1` first, local Ollama as last resort. Ollama Cloud (US-hosted) is disabled by default because MyCompanyDesk does not have a signed Data Processing Agreement with Ollama Inc. It can be re-enabled for workloads that demonstrably carry no customer personal data, but the LLM router falls through to Vertex EU otherwise. Plan gating, where it applies, is enforced at the API layer through entitlements.

## Contextual guide (in-app chatbot)

The help icon in the app shell opens a chat panel that knows which page you are on, what records you are looking at, and what your workspace data looks like. It is built as a tool-using agent: instead of guessing at numbers, it asks for them.

- **Model.** Default chat model is Gemini on Vertex AI `europe-west1`, served over Cloudflare AI Gateway. When Ollama Cloud is explicitly enabled at the workspace level, `deepseek-v4-pro:cloud` takes over as the primary tier. Both paths fall back to the next tier on rate-limit or outage; the swap is transparent to the conversation.
- **Streaming.** Replies stream over `POST /api/contextual-guide/stream` (Server-Sent Events). The web client renders incoming tokens as a typewriter effect so first tokens appear in well under a second.
- **FAQ short-circuit.** Before the model is called, the query is matched against the workspace FAQ corpus using SymSpell-corrected keyword search and a vector cosine fallback (Workers AI `bge-m3` primary, Gemini embeddings fallback). A confident match returns the curated FAQ answer with no LLM round-trip -- fast and free.
- **Page context.** The current route, the visible entity, and a compact app-state summary are injected into the system prompt. The guide answers about what you are seeing, not in the abstract.
- **Conversation memory.** The last 6 turns are kept verbatim; older turns are summarised into a rolling memory.
- **Pre-filter, no router.** A small deterministic filter catches forbidden topics, casual messages, and empty input before the model is called. Beyond that there is **no DATA/FAQ/GENERAL classifier in front of the agent** -- the model sees the full tool catalog and picks tools itself, including a tool that searches the help knowledge base. One question can naturally use multiple tools (e.g. "how do I file my Q2 VAT and what's my saldo" calls `search_help` and `vat_aangifte_rubrieken` in the same loop).

### EU AI Act disclosure (art. 50)

The EU AI Act (Regulation 2024/1689) classifies the contextual guide as a limited-risk AI system under article 50. Limited-risk systems must transparently disclose to end users that they are interacting with AI. Two disclosure mechanisms ship in the guide:

- **AI badge.** A small "AI" pill sits next to the assistant name in the header. It is always visible while the guide is open, satisfying the continuous-disclosure requirement. A tooltip on the badge names the underlying provider (Google Gemini).
- **Intro disclosure text.** A short line appears under the welcome prompt in the empty chat state: "You are talking to an AI assistant. Answers may contain errors; always verify financial or tax conclusions yourself."

These disclosures also appear in Dutch, German, and French in their respective locale builds. The obligation takes effect in August 2026; the disclosures shipped ahead of the deadline.

### Pro visual skin

Pro-tier workspaces get a premium assistant skin that replaces the generic styling with the Pro violet accent. When the billing plan is Pro, the assistant panel changes visually:

- The "AI" pill becomes a violet "Pro" pill, signalling that the assistant runs on the highest-tier model with full app context.
- The panel border, avatar ring, online-dot, and send button shift to violet (`#a855f7`), matching the Pro ribbon in the app navigation.
- The status line reads "Your Pro assistant is ready" instead of the generic "Ready to help."

The Pro skin is purely cosmetic. The underlying model selector, tool catalog, and EU AI Act disclosures remain identical across tiers. Backed by `TIER_CHAT_CONFIG` which already gives Pro a heavier model variant and unlimited app context.

### Tool catalog

When the question needs a number, page-help, or a VAT-specific aggregate, the model calls one of approximately 18 parameterised tools. Each handler is a hand-written, RLS-protected `SELECT` (or a wrapper around an existing aggregate service) -- the model picks the tool name and arguments, it cannot author SQL. Read-only by design. The same catalog is exposed to Gemini (function declarations) and to Ollama Cloud (OpenAI-compatible `tools` array), so a fallback between providers keeps capabilities identical.

**Data tools** -- accept `period` of `this_month` / `last_month` / `this_quarter` / `this_year` / `last_year`:

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

**VAT tools** -- accept `year` plus `period` of `Q1`/`Q2`/`Q3`/`Q4`/`year`:

| Tool | Returns |
|---|---|
| `vat_aangifte_rubrieken` | Unified NL aangifte sheet (sections 1-5, codes 1a-5g) |
| `vat_pre_filing_checks` | Concrete blockers before filing (drafts, missing receipts, ICP pending) |
| `vat_kor_status` | KOR threshold tracker -- YTD revenue versus EUR 20 000 limit |
| `vat_kia_status` | KIA bracket tracker -- investments and deduction amount |
| `vat_icp_opgaaf` | Per-customer intra-EU B2B sales |
| `vat_oss_breakdown` | Per-country EU OSS B2C sales |
| `vat_foreign_refundables` | Foreign VAT refundables, EU procedure deadline |

**Help tool**:

| Tool | Returns |
|---|---|
| `search_help` | Best-matching FAQ entry (semantic-search wrapper). Used for "how do I X" questions. |

The chat defaults to Gemini on Vertex AI `europe-west1`. When a workspace explicitly enables Ollama Cloud, the chat is pinned to `deepseek-v4-pro:cloud` -- empirical bench showed deepseek lands a 2-tool plan + synthesis in approximately 3 seconds, faster than `qwen3-coder-next:cloud` and `gpt-oss:120b-cloud` on this workload. Gemini is the fallback path when Ollama Cloud is unavailable or disabled.

The standalone `/api/vat-assistant/*` route is **gone** as of May 2026 -- VAT questions go through the same unified contextual-guide endpoint and the `vat_*` tools above. There is no separate model or panel.

## Vendor classifier (expenses)

When you enter an expense, the **vendor classifier** suggests the right category from your workspace's `expense_categories` table -- not a fixed built-in list. It runs through Gemini Flash-Lite with a Dutch SME bookkeeping prompt that:

- Matches the vendor against existing category keys before creating new ones.
- Picks a `vat_treatment` (`standard` / `b2b_reverse_charge` / `foreign_vat_charged` / `import` / `kor`) based on the vendor's domain and country.
- Auto-flags potential investments (hardware/equipment over EUR 450 ex-VAT) so depreciation kicks in.

The classifier is invoked from `expense-categories.service.classifyVendor(companyId, { vendor, domain })` and is wired to the expense form's category field.

## AI suggestions (with RLHF-lite feedback loop)

After an entity is created, the AI-suggestions service queues a low-priority LLM analysis and writes results into `ai_suggestions`. Surfaces include category fixes for expenses set to `other` and description-quality improvements for invoice line items, expenses, and customer notes.

The interesting bit is the **feedback loop**:

1. When you accept a suggestion, the input text is embedded (Workers AI `bge-m3` primary, Gemini fallback) and stored in `suggestion_examples` with the accepted value.
2. The next time the same task fires for your workspace, the new input is embedded and the top-K nearest neighbours are pulled in as few-shot examples.
3. The prompt picks up your house style automatically -- "prior examples this user accepted" becomes part of the system message.

A FIFO cap of 50 examples per `(company_id, task)` keeps lookup at microseconds without `pgvector`. Embeddings are stamped with provider + dimension so a provider swap doesn't poison the lookup; mismatched rows are skipped, not crashed on.

## Industry detection

The local **E2B** model (Workers AI primary, Gemini Flash-Lite when `ai_processing_mode` is `google_only`) classifies your workspace's industry from invoice and expense history. It re-evaluates progressively:

| Workspace state | Behaviour |
|---|---|
| 0-2 entities | Skip -- not enough signal |
| 3+ entities, no profile | First detection |
| Confidence < 0.6 and entity count doubled | Re-evaluate |
| Confidence >= 0.6 and doubled again | Re-evaluate |
| Confidence >= 0.8 | Stop |

The detected industry feeds back into the AI-suggestion prompts so categorisation matches how shops in your industry actually book things.

## Receipt scanner

Receipts and supplier invoices are extracted to structured expense data via `POST /api/receipt-scanner`.

- **Primary path.** PDFs and images go straight to Gemini multimodal as `inlineData`. No `tesseract.js`, no `unpdf`, no preprocessing -- Gemini reads the document.
- **Fallback path.** When AI privacy mode is on, the file is over 15 MB, or Gemini is rate-limited, the scanner falls back to local Ollama: PDFs through `unpdf` for text, images through `tesseract.js`, parsing by Gemma 4 E2B.
- **Output.** Date, supplier, amount, line items, suggested category, VAT rate. Pre-LLM page filtering (keywords) keeps long PDFs cheap; a post-LLM exact-match filter is the safety net.

See [Receipt Scanning](/advanced/receipt-scanning) for the user-facing flow.

## Entity suggestions

The entity-suggestions service powers autocomplete-style inline hints on customer, project, and expense forms. It runs purely on database queries -- no LLM -- so it is instant and works offline. It complements the AI-suggestions service rather than competing with it: entity-suggestions is "remember what you typed last time", AI-suggestions is "what should this look like".

## Text check (typo correction)

Form fields run an in-process **SymSpell** typo correction on debounce as you type. It is wired into nine entity forms (invoices, quotes, expenses, customers, projects, contracts, objects, recurring entries, time entries).

- **Endpoint.** `POST /api/text-check` returns `{ corrected, hasCorrections, grammarAvailable: false }`.
- **Languages.** Dutch is the dictionary default; English, German, and French are supported.
- **No grammar.** Sentence-level grammar checking via LanguageTool was removed -- keystroke-grade grammar was a continuous tax for marginal value. A button-triggered "Improve" action may return as a separate feature.

## Translation (Gemini Flash-Lite)

Runtime translation of short snippets goes through `translate.service` which wraps Gemini Flash-Lite. Three call sites use it today:

- **Chatbot.** Pre-processing translates non-English questions to English before the model call, then translates the reply back to the company language.
- **Support / feedback.** Inbound messages are normalised to English for the operations team.
- **AI suggestions.** Description prompts run in English, output is translated back.

Bulk locale-file sync (filling missing keys, re-translating drift across `nl/de/fr`) is **not** in this service -- it lives in the Huisbot weekly cron which opens PRs against `development` autonomously. The in-app UI never blocks on translation drift.

## Plan gating

| Surface | Free | Starter | Pro |
|---|---|---|---|
| Contextual guide (incl. VAT tools) | Limited messages, FAQ-only on overflow | Standard tier | Highest tier |
| AI suggestions | Off | On | On |
| Vendor classifier | Off | On | On |
| Receipt scanner | Off | On | On |
| Text check | On | On | On |
| Translation | On (UI strings only) | On | On |

## AI usage caps (monthly)

AI caps are monthly, not daily. A bookkeeper who batches 40 receipts on a Friday does not blow through a daily quota that resets at midnight. Cap tracking uses `ai_usage.date` with the first-of-month date. Monthly caps:

| Metric | Free | Starter | Pro |
|---|---|---|---|
| AI chat messages | 10 | 100 | 1 000 |
| AI receipt scans | 3 | 50 | 500 |
| AI suggestions | 10 | 200 | 2 000 |

## Privacy

All cloud AI paths route through Vertex AI in `europe-west1` (EU) by default. MyCompanyDesk has a signed DPA with Google Cloud for Vertex AI usage. Ollama Cloud (ollama.com, US-hosted) is disabled by default because no DPA or Standard Contractual Clauses exist with Ollama Inc. Workspaces can enable it explicitly, but it is off by default for all plans.

When `ai_processing_mode` is set to `local_only` on the workspace, every AI path that supports it (receipt scanner, AI suggestions, text check, vendor classifier, industry detection) routes through the local Ollama instance and never leaves the server. The contextual guide is cloud-only by design -- it requires the chat-tier model and is disabled in `local_only` mode rather than degraded.
