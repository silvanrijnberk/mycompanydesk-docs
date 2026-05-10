---
title: Reverse charge
last_verified: 2026-05-09
chatbot:
  triggers: ["reverse charge", "reverse charge invoice", "eu invoice", "intracommunautair", "intracommunity", "btw verlegd", "reverse charge rechnung", "autoliquidation", "intra-community"]
  actions:
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I add a customer VAT number?", "How does reverse charge affect my VAT return?", "How do I set VAT to 0% on line items?"]
---
Om een factuur met verlegde BTW aan te maken:
1. Ga naar Facturen → Nieuwe factuur
2. Selecteer je EU-klant en controleer of het BTW-nummer op het klantrecord is ingevuld
3. Voeg regels toe met 0% BTW
4. Bekijk de preview om te controleren welke BTW-velden en notitie op het document staan
5. Sla op en verstuur
