---
title: "Openstaand bedrag"
last_verified: 2026-07-02
chatbot:
  triggers: ["outstanding amount", "total unpaid", "money owed", "total outstanding", "how much owed", "openstaand bedrag", "totaal onbetaald", "offener betrag", "montant impaye", "somme due"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open client report", to: "/reports/clients?tab=outstanding" }
  follow_up: ["How do I send payment reminders?", "How do I view overdue invoices?", "How do I debug a wrong total?"]
---

Zo zie je het totale openstaande bedrag:
1. Ga naar Facturen en filter op Open, Verzonden of Te laat
2. Bekijk de totalen in de lijst of de KPI-kop
3. Voor rapportagedetail open je Rapporten → Klantenrapport en ga je naar het tabblad "Openstaand"

Tip: Kloppen de totalen niet? Controleer dan eerst de datumperiode en de statusfilters.
