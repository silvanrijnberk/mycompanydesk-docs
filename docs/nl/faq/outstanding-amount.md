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
Om het totale openstaande of onbetaalde bedrag te bekijken:
1. Ga naar Facturen en filter op Open, Verzonden of Achterstallig
2. Controleer de totalen in de lijst of KPI-kop
3. Open voor meer detail Rapporten → Openstaand

Als totalen niet kloppen, controleer dan eerst de datumfilter en statusfilters.
