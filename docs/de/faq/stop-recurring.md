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

So stoppst oder pausierst du ein wiederkehrendes Element:
1. Gehe zu Wiederkehrende Rechnungen (oder Ausgaben)
2. Öffne das wiederkehrende Element
3. Klicke auf „Bearbeiten" und setze ein Enddatum oder deaktiviere
4. Speichere - es werden keine weiteren Elemente generiert
