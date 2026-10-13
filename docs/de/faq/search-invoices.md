---
title: "Rechnungen suchen"
description: "Eine bestimmte Rechnung finden: Gehen Sie zu Rechnungen, suchen Sie nach Kundenname, Rechnungsnummer oder Referenz und filtern Sie nach Status."
last_verified: 2026-10-13
chatbot:
  triggers: ["search invoices", "find invoice", "filter invoices", "sort invoices", "search invoice", "look up invoice", "factuur zoeken", "facturen filteren", "rechnung suchen", "chercher facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I filter by status?", "How do I find a customer?"]
---

Um eine bestimmte Rechnung zu suchen:
1. Gehen Sie zu Rechnungen
2. Geben Sie in der Suchleiste den Kundennamen, die Rechnungsnummer oder eine Referenz ein
3. Wählen Sie unter **Filter** einen Status: Noch zu versenden, Entwurf, Wartet auf Zahlung, Überfällig, Überprüfung erforderlich, Bezahlt oder Storniert. Die Tabs **Alle**, **Noch zu versenden** und **Wartet auf Zahlung** dienen als Schnellfilter
4. Klicken Sie auf die Rechnung, um sie zu öffnen

Tipp: Kombinieren Sie die Suche mit einem Statusfilter für die schnellsten Ergebnisse.
