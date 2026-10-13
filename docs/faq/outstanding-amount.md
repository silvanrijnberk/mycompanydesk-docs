---
title: "Openstaand bedrag"
description: "Zo zie je het totale openstaande bedrag: ga naar Facturen en kijk bij het tabblad Wacht op betaling, of open Rapportages, Klanten."
last_verified: 2026-10-13
chatbot:
  triggers: ["outstanding amount", "total unpaid", "money owed", "total outstanding", "how much owed", "openstaand bedrag", "totaal onbetaald", "offener betrag", "montant impaye", "somme due"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open client report", to: "/reports/clients?tab=outstanding" }
  follow_up: ["How do I send payment reminders?", "How do I view overdue invoices?", "How do I debug a wrong total?"]
---

Zo zie je het totale openstaande bedrag:
1. Ga naar Facturen
2. Het tabblad **Wacht op betaling** toont hoeveel facturen al bij je klanten liggen en voor welk totaalbedrag. Is er iets te laat, dan staat daar ook hoeveel. Het tabblad **Nog versturen** toont wat je nog niet hebt verstuurd. Op je telefoon zie je bovenaan de tegels **Openstaand** en **Te laat**
3. Voor detail per klant open je Rapportages › Klanten en ga je naar het tabblad "Openstaand" (Office)

Tip: Kloppen de totalen niet? Controleer dan eerst de periode en de status onder **Filters**.
