---
title: "Rechnungen suchen"
description: "Eine bestimmte Rechnung finden: Gehen Sie zu Rechnungen, suchen Sie nach Rechnungsnummer, Kundenname oder Betrag und filtern Sie nach Status."
last_verified: 2026-05-09
chatbot:
  triggers: ["search invoices", "find invoice", "filter invoices", "sort invoices", "search invoice", "look up invoice", "factuur zoeken", "facturen filteren", "rechnung suchen", "chercher facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I filter by status?", "How do I find a customer?"]
---

Um eine bestimmte Rechnung zu suchen:
1. Gehen Sie zu Rechnungen
2. Verwenden Sie die Suchleiste, um Rechnungsnummer, Kundenname oder Betrag einzugeben
3. Verwenden Sie Filter für den Status (Entwurf, Gesendet, Bezahlt, Überfällig)
4. Klicken Sie auf die Rechnung, um sie zu öffnen

Tipp: Kombinieren Sie die Suche mit Statusfiltern für die schnellsten Ergebnisse.
