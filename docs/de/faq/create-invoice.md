---
title: "Rechnung erstellen"
description: "So erstellen Sie eine Rechnung: Gehen Sie zu Rechnungen, klicken Sie auf Erstellen und wählen Sie einen Kunden aus oder legen Sie einen neuen an."
last_verified: 2026-07-02
chatbot:
  triggers: ["create invoice", "new invoice", "make invoice", "add invoice", "write invoice", "send invoice", "first invoice", "how to invoice", "maak factuur", "nieuwe factuur", "factuur maken", "factuur aanmaken", "hoe maak ik een factuur", "rechnung erstellen", "wie erstelle ich eine rechnung", "neue rechnung", "creer facture", "comment creer une facture"]
  actions:
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I add a customer first?", "How do I change the PDF style?", "How do I set payment terms?"]
---

So erstellen Sie eine Rechnung:
1. Gehen Sie zu Rechnungen und klicken Sie auf „Erstellen“
2. Wählen Sie einen Kunden aus, oder legen Sie mit „Neuen Kunden hinzufügen“ unten in der Kundenauswahl einen an
3. Fügen Sie Positionen mit Beschreibung, Menge, Preis und MwSt. hinzu
4. Legen Sie in der Karte mit den Rechnungsdetails Rechnungsdatum und Fälligkeitsdatum fest
5. Nutzen Sie „Als Entwurf speichern“, wenn die Rechnung noch nicht fertig ist, oder „Abschließen“, wenn sie bereit ist (MyCompanyDesk prüft zuerst Ihre USt-IdNr. und IBAN, Sie können sie bei Bedarf direkt eintragen)
6. Öffnen Sie nach dem Speichern die Detailseite der Rechnung, um sie anzusehen oder zu senden

Hat der Kunde noch nicht abgerechnete Stunden oder Ausgaben, erscheint im Formular ein Bereich, über den Sie sie als Positionen hinzufügen.

Tipp: Standardwerte wie Zahlungsfrist und Angebotsgültigkeit finden Sie unter Einstellungen › „Rechnungen und Angebote“; die Rechnungsnummerierung läuft automatisch, dort müssen Sie nichts einstellen. Hinterlegen Sie Ihre USt-IdNr. und IBAN, dann schließen Sie Rechnungen ohne Unterbrechung ab.
