---
title: "Gelöschte Kunden finden"
last_verified: 2026-05-09
chatbot:
  triggers: ["where are deleted customers", "where can i find deleted customers", "where do i find deleted customers", "customer trash", "trashed customers", "deleted customers", "verwijderde klanten", "klanten prullenbak", "geloschte kunden", "geloeschte kunden", "geloeschten kunden", "kunden papierkorb", "clients supprimes", "mes clients supprimes", "corbeille clients"]
  actions:
    - { label: "Open customers", to: "/customers?status=trash" }
  follow_up: ["Where do I find archived customers?", "How do I search customers?", "How do I restore a customer?"]
---

Gelöschte Kunden finden Sie unter Kunden -> Papierkorb. Wenn Sie bereits in der Kundenliste sind, wechseln Sie zur Ansicht Papierkorb.

Beachten Sie, dass das Löschen mehrstufig ist: Der erste Löschvorgang bei einem aktiven Kunden archiviert ihn. Wenn ein Kunde also nicht im Papierkorb ist, prüfen Sie zuerst die Ansicht Archiv.
