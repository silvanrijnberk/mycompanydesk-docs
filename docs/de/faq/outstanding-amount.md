---
title: "Offener Betrag"
last_verified: 2026-07-02
chatbot:
  triggers: ["outstanding amount", "total unpaid", "money owed", "total outstanding", "how much owed", "openstaand bedrag", "totaal onbetaald", "offener betrag", "montant impaye", "somme due"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open client report", to: "/reports/clients?tab=outstanding" }
  follow_up: ["How do I send payment reminders?", "How do I view overdue invoices?", "How do I debug a wrong total?"]
---

So sehen Sie den gesamten offenen Betrag:
1. Gehen Sie zu Rechnungen und filtern Sie nach Offen, Gesendet oder Überfällig
2. Prüfen Sie die Summen in der Liste bzw. im KPI-Kopf
3. Für Berichtsdetails öffnen Sie Berichte → Kundenbericht und wechseln zum Tab "Offene Posten"

Tipp: Wirken die Summen falsch, prüfen Sie zuerst Zeitraum und Statusfilter.
