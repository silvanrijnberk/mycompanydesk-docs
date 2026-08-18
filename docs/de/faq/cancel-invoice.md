---
title: "Rechnung stornieren"
last_verified: 2026-08-14
chatbot:
  triggers: ["cancel invoice", "void invoice", "annul invoice", "reverse invoice", "credit note", "undo invoice", "factuur annuleren", "factuur ongedaan", "hoe annuleer ik een factuur", "rechnung stornieren", "wie storniere ich eine rechnung", "annuler facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I create a credit note?", "How do I delete a draft invoice?", "How do I view cancelled invoices?"]
---

So stornieren Sie eine versendete Rechnung:
1. Öffnen Sie die Rechnung aus Ihrer Rechnungsliste
2. Scrollen Sie in der Seitenleiste zum Bereich "Gefahrenzone"
3. Klicken Sie auf "Als storniert markieren"
4. Der Status der Rechnung wechselt zu Storniert

Auch zugehörige Benachrichtigungen für die Rechnung, wie überfällig, Termin oder Entwurf, werden aufgelöst, sodass die Aktion "Erinnerung senden" in der Glocke nicht mehr erscheint. Das gilt auch, wenn Sie mehrere Rechnungen auf einmal aus der Rechnungsliste stornieren.

Ist die Rechnung bereits ganz oder teilweise bezahlt, öffnen Sie die Originalrechnung und nutzen Sie stattdessen "Gutschrift / Korrektur erstellen".

Stornierte Rechnungen können nicht mit einer Gutschrift korrigiert werden. Wenn Sie dennoch eine Korrektur für eine bereits stornierte Rechnung ausstellen möchten, duplizieren Sie die stornierte Rechnung, nehmen Sie die Korrektur vor und senden Sie sie erneut.

Stornieren ist etwas anderes als Löschen: beim Stornieren wechselt der Status zu Storniert, die Rechnung bleibt aber in der Liste sichtbar; beim Löschen durchläuft sie die Stufen Archiviert und Papierkorb, bevor sie endgültig gelöscht ist. Endgültiges Löschen in einem Schritt ist nur möglich, solange ein Dokument noch ein Entwurf ohne Nummer ist.

Sobald eine Rechnung storniert ist, ist sie nicht mehr einziehbar. Die Rechnungsdetailseite, die Vorschau in der Rechnungsliste und das Kundenportal zeigen keinen Restbetrag mehr an, auch wenn bereits gebuchte Zahlungen auf der Rechnung vorhanden sind. Bereits gebuchte Zahlungen bleiben im Zahlungsverlauf sichtbar.

Tipp: Beim Stornieren bleibt die Rechnungsnummer in Ihren Unterlagen erhalten; löschen können Sie ein Dokument nur, solange es noch ein Entwurf ohne Nummer ist.
