---
title: Create quote
last_verified: 2026-05-09
chatbot:
  triggers: ["create quote", "new quote", "make quote", "create proposal", "new proposal", "sales quote", "estimate", "offerte maken", "offerte aanmaken", "nieuwe offerte", "angebot erstellen", "neues angebot", "wie erstelle ich ein angebot", "devis creer", "comment creer un devis", "nouveau devis", "crear cotizacion", "crear presupuesto", "criar proposta", "nuovo preventivo"]
  actions:
    - { label: "Create quote", to: "/quotes/new" }
    - { label: "Open quotes", to: "/quotes" }
  follow_up: ["How do I preview the quote PDF?", "How do I send a quote by email?", "How do I convert a quote to an invoice?"]
---
Here's how to create a quote:
1. Go to Quotes and open "Create quote"
2. Select a customer and, if useful, link a project
3. Add the quote lines with description, quantity, price, and VAT
4. In the Quote Details card, set the quote date and "Valid until" date
5. Use "Save as Draft" if you still need to review it, or "Finalize" when the quote is ready
6. After saving, open the quote detail page to preview or send it

Tip: Quotes stay separate from invoices until you convert one.
