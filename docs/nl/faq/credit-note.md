---
title: Credit note
last_verified: 2026-05-09
chatbot:
  triggers: ["credit note", "create credit note", "issue credit", "credit invoice", "creditnota", "creditnota aanmaken", "gutschrift erstellen", "note de credit", "avoir"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I cancel an invoice instead?", "How does a credit note affect my VAT?", "How do I find the original invoice?"]
---

Om een creditnota aan te maken:
1. Open de originele factuur die je wilt crediteren
2. Klik op de knop "Creditnota / correctie aanmaken" op de detailpagina
3. Het systeem vult automatisch een negatieve factuur in met verwijzing naar het origineel
4. Pas bedragen aan als het een gedeeltelijke creditering is
5. Sla op en verstuur naar de klant

De app maakt een apart negatief record aan dat aan de originele factuur is gekoppeld, zodat je beide items later kunt terugzien.
