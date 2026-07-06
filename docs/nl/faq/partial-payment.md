---
title: "Deelbetaling"
last_verified: 2026-05-09
chatbot:
  triggers: ["partial payment", "record partial payment", "half payment", "part payment", "deposit received", "gedeeltelijke betaling", "deelbetaling", "aanbetaling ontvangen", "teilzahlung", "paiement partiel", "acompte recu"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I mark an invoice as fully paid?", "How do I send a reminder for the remaining balance?", "How do I view all partially paid invoices?"]
---

Om een gedeeltelijke betaling op een factuur vast te leggen:
1. Open de factuur vanuit de lijst
2. Klik op "Betaling vastleggen" of de betalingsactie
3. Voer het ontvangen bedrag in (minder dan het totaal)
4. Sla op - de factuurstatus verandert naar Gedeeltelijk betaald
5. Herhaal wanneer er aanvullende betalingen binnenkomen

Tip: Het resterende saldo wordt automatisch bijgehouden en verschijnt op de factuurdetailpagina.
