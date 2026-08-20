---
title: "Ausgabe aufteilen"
description: "Eine Ausgabe auf mehrere Kategorien aufteilen: Öffnen Sie die Ausgabe im Bearbeitungsmodus und weisen Sie jeder Position eine eigene Kategorie zu."
last_verified: 2026-05-09
chatbot:
  triggers: ["split expense", "divide expense", "expense between categories", "allocate expense", "expense allocation", "uitgave splitsen", "uitgave verdelen", "ausgabe aufteilen", "repartir depense"]
  actions:
    - { label: "Create expense", to: "/expenses/new" }
  follow_up: ["How do I categorize expenses?", "Which expenses are tax deductible?", "How do I upload a receipt?"]
---
So teilen Sie eine Ausgabe auf mehrere Kategorien auf:
1. Öffnen Sie die Ausgabe im Bearbeitungsmodus
2. Verwenden Sie, falls das Formular es unterstützt, Positionen zum Aufteilen des Betrags
3. Weisen Sie jeder Position eine andere Kategorie zu
4. Prüfen Sie, ob die Summe dem Belegbetrag entspricht
5. Speichern Sie

Wenn eine Aufteilung in einem Datensatz nicht verfügbar ist, legen Sie getrennte Ausgaben mit Verweis auf denselben Beleg an.
