---
title: "Mehrere Währungen"
description: "Ihre Buchhaltung rechnet in Euro. Rechnungen, Angebote und Berichte sind in EUR; Belege in einer Fremdwährung werden in einen Eurobetrag umgerechnet."
last_verified: 2026-10-13
chatbot:
  triggers: ["multi currency", "different currency", "foreign currency", "invoice in dollars", "invoice in pounds", "andere valuta", "vreemde valuta", "andere wahrung", "devise etrangere", "dollar invoice", "pound invoice"]
  actions:
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I set up my company settings?", "How do I change my language?"]
---

MyCompanyDesk hält Ihre Buchhaltung in Euro. Rechnungen, Angebote und Berichte sind alle in EUR. Es gibt keine Währungseinstellung und keine Währungsauswahl pro Dokument; das ist eine bewusste Produktentscheidung, keine fehlende Einstellung.

Ausgabedokumente in einer anderen Währung sind unterstützt. Ein Beleg aus dem Ausland oder eine Lieferantenrechnung in Dollar oder Pfund wird mit der ursprünglichen Währung und dem Betrag des Dokuments gespeichert, während die Ausgabe selbst einen Eurobetrag für Ihre Bücher mitführt: der Scanbildschirm fragt nach dem Eurobetrag, für den Ihre Bank das Dokument umrechnet, und eine Zahlung, die auf einem verbundenen Bankkonto auftaucht, rechnet die Ausgabe auf den Betrag ab, den die Bank tatsächlich abgebucht hat. Siehe Fremdwährung bei [Ausgaben](/de/features/expenses#fremdwahrung).

Wenn Sie einem Kunden im Ausland eine Rechnung stellen, bleibt die Rechnung trotzdem in Euro.

Tipp: Vereinbaren Sie mit ausländischen Kunden im Voraus, dass Sie in Euro fakturieren. Der Kunde zahlt den Eurobetrag, eine eventuelle Umrechnung erfolgt auf seiner Seite.
