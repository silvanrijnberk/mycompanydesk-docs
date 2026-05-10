---
title: Quote Validity
last_verified: 2026-05-09
chatbot:
  triggers: ["quote validity", "valid until quote", "quote expiry", "quote expiration", "how long quote valid", "quote valid days", "geldigheid offerte", "offerte geldig", "angebotsgultigkeit", "devis validite", "validez devis", "validez cotizacion", "validade proposta"]
  actions:
    - { label: "Open company setup", to: "/company?section=invoicing" }
    - { label: "Open Branding & Documents", to: "/company?section=brandingDocuments" }
  follow_up: ["Where do I change numbering format?", "How do I edit valid-until per quote?", "How do I preview the final PDF?"]
---

Quote validity can be configured in two places:
1. Go to Company → Invoicing and set "Quote validity" for the default period
2. Go to Company → Branding & Documents if you also need to align the document rendering setting "Quote validity (days)"
3. Changes in both sections save automatically

Tip: Keep both settings aligned so your quote valid-until behavior matches what customers see in PDFs.
