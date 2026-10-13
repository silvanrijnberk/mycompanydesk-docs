---
title: "Offener Betrag"
description: "So sehen Sie den gesamten offenen Betrag: Öffnen Sie Rechnungen und den Tab Wartet auf Zahlung, oder Berichte, Kunden."
last_verified: 2026-10-13
chatbot:
  triggers: ["outstanding amount", "total unpaid", "money owed", "total outstanding", "how much owed", "openstaand bedrag", "totaal onbetaald", "offener betrag", "montant impaye", "somme due"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open client report", to: "/reports/clients?tab=outstanding" }
  follow_up: ["How do I send payment reminders?", "How do I view overdue invoices?", "How do I debug a wrong total?"]
---

So sehen Sie den gesamten offenen Betrag:
1. Gehen Sie zu Rechnungen
2. Der Tab **Wartet auf Zahlung** zeigt, wie viele Rechnungen bei Ihren Kunden liegen und mit welchem Gesamtbetrag. Ist etwas überfällig, steht dort auch, wie viele. Der Tab **Noch zu versenden** zeigt, was Sie noch nicht verschickt haben. Auf dem Telefon sehen Sie oben die Kacheln **Offen** und **Überfällig**
3. Für Details je Kunde öffnen Sie Berichte › Kunden und wechseln zum Tab „Offene Posten“ (Office)

Tipp: Wirken die Summen falsch, prüfen Sie zuerst Zeitraum und Status unter **Filter**.
