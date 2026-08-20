---
title: "Export to PDF"
last_verified: 2026-07-02
chatbot:
  triggers:
    - "export pdf"
    - "download pdf"
    - "print invoice"
    - "pdf invoice"
    - "generate pdf"
    - "pdf export"
    - "pdf downloaden"
    - "factuur afdrukken"
    - "factuur downloaden"
    - "rechnung herunterladen"
    - "telecharger pdf"
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open logo and colour", to: "/settings/uiterlijk" }
    - { label: "Open invoice design", to: "/settings/factuurontwerp" }
  follow_up:
    - "How do I change the PDF style?"
    - "How do I send an invoice by email?"
---

To export or download a PDF:
1. Open the invoice from the list
2. Click the PDF preview or download button
3. The PDF uses your logo, colour, and layout from Settings → "Logo en kleur" and Settings → "Factuurontwerp"

Tip: Set your logo and brand colour at Settings → "Logo en kleur", and pick the layout, colours, and font of your invoices at Settings → "Factuurontwerp".
