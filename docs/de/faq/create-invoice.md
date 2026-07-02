---
title: "Rechnung erstellen"
last_verified: 2026-07-02
chatbot:
  triggers: ["create invoice", "new invoice", "make invoice", "add invoice", "write invoice", "send invoice", "first invoice", "how to invoice", "maak factuur", "nieuwe factuur", "factuur maken", "factuur aanmaken", "hoe maak ik een factuur", "rechnung erstellen", "wie erstelle ich eine rechnung", "neue rechnung", "creer facture", "comment creer une facture"]
  actions:
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I add a customer first?", "How do I change the PDF style?", "How do I set payment terms?"]
---

So erstellen Sie eine Rechnung:
1. Gehen Sie zu Rechnungen und öffnen Sie "Neue Rechnung"
2. Wählen Sie einen Kunden oder fügen Sie über die Kundenauswahl einen hinzu
3. Fügen Sie Positionen mit Beschreibung, Menge, Preis und MwSt. hinzu
4. Legen Sie in der Karte mit den Rechnungsdetails Rechnungsdatum und Fälligkeitsdatum fest
5. Nutzen Sie "Als Entwurf speichern", wenn die Rechnung noch nicht fertig ist, oder "Abschließen", wenn sie bereit ist (MyCompanyDesk prüft zuerst Ihre USt-IdNr. und IBAN, Sie können sie bei Bedarf direkt eintragen)
6. Öffnen Sie nach dem Speichern die Detailseite der Rechnung, um sie anzusehen oder zu senden

Hat der Kunde noch nicht abgerechnete Zeiteinträge, zieht das Formular sie als Positionen in die Rechnung und ergänzt fehlende Beschreibungen automatisch.

Tipp: Standardwerte wie Zahlungsfrist und Angebotsgültigkeit finden Sie unter Einstellungen → "Rechnungen und Angebote"; die Rechnungsnummerierung läuft automatisch, dort müssen Sie nichts einstellen. Hinterlegen Sie Ihre USt-IdNr. und IBAN, dann schließen Sie Rechnungen ohne Unterbrechung ab.
