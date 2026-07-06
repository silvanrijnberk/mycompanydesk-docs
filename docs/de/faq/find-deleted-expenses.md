---
title: "Gelöschte Ausgaben finden"
last_verified: 2026-05-09
chatbot:
  triggers:
    - "where are deleted expenses"
    - "where can i find deleted expenses"
    - "where do i find deleted expenses"
    - "expense trash"
    - "trashed expenses"
    - "deleted expenses"
    - "verwijderde uitgaven"
    - "uitgaven prullenbak"
    - "geloschte ausgaben"
    - "geloeschte ausgaben"
    - "geloeschten ausgaben"
    - "ausgaben papierkorb"
    - "depenses supprimees"
    - "mes depenses supprimees"
    - "corbeille depenses"
  actions:
    - { label: "Open expenses", to: "/expenses?view=trash" }
  follow_up:
    - "Where do I find archived expenses?"
    - "How do I search expenses?"
    - "How do I restore an expense?"
---

Gelöschte Ausgaben finden Sie unter Ausgaben -> Papierkorb. Wenn Sie bereits in der Ausgabenliste sind, wechseln Sie zur Ansicht Papierkorb.

Beachten Sie, dass das Löschen mehrstufig ist: Der erste Löschvorgang bei einer aktiven Ausgabe archiviert sie. Wenn eine Ausgabe also nicht im Papierkorb ist, prüfen Sie die Ansicht Archiv. Das Löschen einer archivierten Ausgabe verschiebt sie in den Papierkorb, und das Löschen aus dem Papierkorb entfernt sie endgültig.
