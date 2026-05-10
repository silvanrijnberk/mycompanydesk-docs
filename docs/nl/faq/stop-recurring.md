---
title: "Stop recurring"
last_verified: 2026-05-09
chatbot:
  triggers: ["stop recurring", "cancel recurring", "pause recurring", "disable recurring", "end recurring", "terugkerend stoppen", "terugkerend annuleren", "wiederkehrend stoppen", "arreter recurrent"]
  actions:
    - { label: "Open recurring invoices", to: "/recurring-invoices" }
    - { label: "Open recurring expenses", to: "/recurring-expenses" }
  follow_up: ["How do I edit a recurring item?", "How do I create a new recurring invoice?"]
---

Om een terugkerend item te stoppen of te pauzeren:
1. Ga naar Terugkerende facturen (of Uitgaven)
2. Open het terugkerende item
3. Klik op "Bewerken" en stel een einddatum in, of schakel uit/verwijder
4. Sla op - er worden geen verdere items meer gegenereerd
