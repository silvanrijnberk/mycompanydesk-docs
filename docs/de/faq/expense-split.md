---
title: Split an expense
last_verified: 2026-05-09
chatbot:
  triggers: ["split expense", "divide expense", "expense between categories", "allocate expense", "expense allocation", "uitgave splitsen", "uitgave verdelen", "ausgabe aufteilen", "repartir depense"]
  actions:
    - { label: "Create expense", to: "/expenses/new" }
  follow_up: ["How do I categorize expenses?", "Which expenses are tax deductible?", "How do I upload a receipt?"]
---
So teilst du eine Ausgabe auf mehrere Kategorien auf:
1. Oeffne die Ausgabe im Bearbeitungsmodus
2. Verwende, falls das Formular es unterstuetzt, Positionen zum Aufteilen des Betrags
3. Weise jeder Position eine andere Kategorie zu
4. Pruefe, ob die Summe dem Belegbetrag entspricht
5. Speichere

Wenn eine Aufteilung in einem Datensatz nicht verfuegbar ist, lege getrennte Ausgaben mit Verweis auf denselben Beleg an.
