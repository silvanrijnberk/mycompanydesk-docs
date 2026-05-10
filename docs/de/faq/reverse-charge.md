---
title: Reverse charge
last_verified: 2026-05-09
chatbot:
  triggers: ["reverse charge", "reverse charge invoice", "eu invoice", "intracommunautair", "intracommunity", "btw verlegd", "reverse charge rechnung", "autoliquidation", "intra-community"]
  actions:
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I add a customer VAT number?", "How does reverse charge affect my VAT return?", "How do I set VAT to 0% on line items?"]
---
So erstellst du eine Reverse-Charge-Rechnung:
1. Gehe zu Rechnungen → Neue Rechnung
2. Waehle deinen EU-Kunden und pruefe, ob die USt-IdNr. im Kundendatensatz eingetragen ist
3. Fuege Positionen mit 0 % MwSt hinzu
4. Oeffne die Vorschau, um die angezeigten MwSt-Felder und den Hinweis auf dem Dokument zu pruefen
5. Speichere und sende
