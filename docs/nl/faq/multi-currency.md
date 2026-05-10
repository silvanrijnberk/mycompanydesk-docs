---
title: "Multi currency"
last_verified: 2026-05-09
chatbot:
  triggers: ["multi currency", "different currency", "foreign currency", "invoice in dollars", "invoice in pounds", "andere valuta", "vreemde valuta", "andere wahrung", "devise etrangere", "dollar invoice", "pound invoice"]
  actions:
    - { label: "Open profile preferences", to: "/profile?section=preferences" }
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I change my default currency?", "How do I set up my company settings?"]
---

Huidig gedrag voor valuta:
1. Stel je standaardvaluta in via Mijn account → Voorkeuren
2. Nieuwe documenten gebruiken die standaard waar dat wordt ondersteund
3. Bestaande facturen behouden de valuta waarmee ze zijn opgeslagen

Het huidige factuurformulier heeft geen aparte valutakeuze per factuur.
