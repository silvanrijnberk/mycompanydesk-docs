---
title: Create expense
last_verified: 2026-05-09
chatbot:
  triggers: ["create expense", "new expense", "add expense", "log expense", "record expense", "track expense", "uitgave toevoegen", "nieuwe uitgave", "uitgave aanmaken", "ausgabe hinzufugen", "wie erstelle ich eine ausgabe", "ajouter depense", "comment creer une depense"]
  actions:
    - { label: "Create expense", to: "/expenses/new" }
  follow_up: ["How do I upload a receipt?", "How do I categorize expenses?", "How do I mark an expense as paid?"]
---

So fuegst du eine Ausgabe hinzu:
1. Gehe zu Ausgaben und oeffne „Neue Ausgabe"
2. Gib Lieferant, Kategorie, Beschreibung, Betrag und Datum ein
3. Speichere die Ausgabe, damit der Datensatz angelegt wird
4. Oeffne danach die gespeicherte Ausgabe, wenn du „Beleg hochladen" nutzen willst

Tipp: Der Beleg-Upload befindet sich auf der Detailseite, nachdem die Ausgabe gespeichert wurde.
