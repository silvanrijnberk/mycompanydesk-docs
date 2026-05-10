---
title: Credit Note
last_verified: 2026-05-09
chatbot:
  triggers: ["credit note", "create credit note", "issue credit", "credit invoice", "creditnota", "creditnota aanmaken", "gutschrift erstellen", "note de credit", "avoir"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I cancel an invoice instead?", "How does a credit note affect my VAT?", "How do I find the original invoice?"]
---

Um eine Gutschrift zu erstellen:
1. Oeffne die Originalrechnung, die du gutschreiben moechtest
2. Klicke auf der Detailseite auf die Schaltflaeche „Gutschrift / Korrektur erstellen"
3. Das System fuellt automatisch eine negative Rechnung mit Verweis auf das Original aus
4. Passe die Betraege an, wenn es sich um eine Teilgutschrift handelt
5. Speichere und sende sie an den Kunden

Die App erstellt einen separaten negativen Datensatz, der mit der Originalrechnung verknuepft ist, damit du beide Eintraege spaeter wiedersehen kannst.
