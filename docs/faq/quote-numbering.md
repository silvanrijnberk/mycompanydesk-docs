---
title: "Quote numbering"
last_verified: 2026-05-09
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
    - { label: "Open company setup", to: "/company?section=invoicing" }
  follow_up:
    - "How do I set quote validity?"
    - "How do I edit a quote number safely?"
    - "How do I create a new quote?"
---

Quote numbering uses your company invoicing numbering settings:
1. Go to Company setup → Invoicing
2. Configure prefix, next number, and format
3. New quotes follow that sequence and format

Tip: Keep numbering sequential and unique for traceability.
