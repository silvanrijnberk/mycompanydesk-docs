---
title: Outstanding amount
last_verified: 2026-05-09
chatbot:
  triggers: ["outstanding amount", "total unpaid", "money owed", "total outstanding", "how much owed", "openstaand bedrag", "totaal onbetaald", "offener betrag", "montant impaye", "somme due"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open outstanding report", to: "/reports/outstanding" }
  follow_up: ["How do I send payment reminders?", "How do I view overdue invoices?", "How do I debug a wrong total?"]
---
So siehst du den gesamten offenen oder unbezahlten Betrag:
1. Gehe zu Rechnungen und filtere nach Offen, Gesendet oder Ueberfaellig
2. Pruefe die Summen in der Liste oder im KPI-Kopfbereich
3. Oeffne fuer mehr Details Berichte → Offen

Wenn Summen nicht stimmen, pruefe zuerst Datums- und Statusfilter.
