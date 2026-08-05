---
title: "Quote numbering"
last_verified: 2026-08-05
chatbot:
  triggers:
    - "quote number"
    - "quote numbering"
    - "change quote number"
    - "quote format"
    - "offerte nummer"
    - "offertenummer"
    - "angebotsnummer"
    - "numerotation devis"
    - "numero cotizacion"
    - "numero proposta"
    - "numero preventivo"
  actions:
    - { label: "Open quotes", to: "/quotes" }
  follow_up:
    - "How do I set quote validity?"
    - "How do I edit a quote number safely?"
    - "How do I create a new quote?"
---

Quote numbers are assigned automatically:
1. Create a quote; MyCompanyDesk gives it the next number in your sequence
2. There is no numbering format to configure, the sequence stays neat and sequential on its own
3. Need a specific number on a draft? Open the quote in the form and click "Set custom number" in the sidebar

## Manual numbering mode

By default MyCompanyDesk numbers quotes automatically. If your workspace uses manual numbering, the app does not assign a number until you send or mark the quote as sent.

When that happens, a dialog opens so you can enter the quote number. MyCompanyDesk suggests the next number in your sequence, but you can type any number you like. The number is required and must be unique.

To switch between automatic and manual numbering, go to **Settings > Numbering**.

Tip: Once a quote has been sent it is locked, including its number, so set a custom number while the document is still a draft.
