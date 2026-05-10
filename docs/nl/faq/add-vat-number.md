---
title: "Add VAT number"
last_verified: 2026-05-09
chatbot:
  triggers:
    - "add vat number"
    - "set vat number"
    - "enter vat number"
    - "btw nummer"
    - "btw nummer invoeren"
    - "ust id eingeben"
    - "numero tva"
  actions:
    - { label: "Open company info", to: "/company?section=company" }
  follow_up:
    - "How do I set up my company settings?"
    - "How do I set VAT on an invoice?"
---

Om je BTW-nummer toe te voegen of te wijzigen:
1. Ga naar Bedrijf → Bedrijfsgegevens
2. Zoek daar het veld "BTW-nummer"
3. Wijzigingen worden automatisch opgeslagen

Je BTW-nummer wordt daarna gebruikt op gegenereerde documenten. Voor klant-BTW-nummers open je het klantprofiel en vul je daar het BTW-veld in.
