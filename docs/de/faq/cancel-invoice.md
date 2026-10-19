---
title: "Rechnung stornieren"
description: "So stornieren Sie eine versendete Rechnung: Öffnen Sie die Rechnung, wählen Sie im Menü Mehr oben Als storniert markieren und bestätigen Sie."
last_verified: 2026-10-19
chatbot:
  triggers: ["cancel invoice", "void invoice", "annul invoice", "reverse invoice", "credit note", "undo invoice", "factuur annuleren", "factuur ongedaan", "hoe annuleer ik een factuur", "rechnung stornieren", "wie storniere ich eine rechnung", "annuler facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I create a credit note?", "How do I delete a draft invoice?", "How do I view cancelled invoices?"]
---

So stornieren Sie eine Rechnung, die noch nicht nach draußen gegangen ist (eine fertige Rechnung, die Sie nie versendet, bezahlt oder geteilt haben):
1. Öffnen Sie die Rechnung aus Ihrer Rechnungsliste
2. Öffnen Sie das Menü „Mehr“ im Kopf der Seite (auf dem Smartphone das ⋯-Menü)
3. Klicken Sie auf „Als storniert markieren“ und bestätigen Sie
4. Der Status der Rechnung wechselt zu Storniert

Stornieren geht nur, solange die Rechnung Ihren Rechner nicht verlassen hat: sie darf nicht versendet, bezahlt oder über eine heruntergeladene oder geteilte PDF beim Kunden gelandet sein. Eine solche Rechnung zählt zu Ihrem Umsatz und Ihrer Umsatzsteuererklärung, und die App lehnt es ab, sie zurückzuziehen. An dieser Stelle bietet die Seite „Gutschrift / Korrektur erstellen“ an; die Gutschrift macht die Rechnung sauber rückgängig und bekommt eine eigene Nummer. Siehe Gutschrift.

Auch zugehörige Benachrichtigungen für die Rechnung, wie überfällig, Termin oder Entwurf, werden aufgelöst, sodass die Aktion "Erinnerung senden" in der Glocke nicht mehr erscheint. Das gilt auch, wenn Sie mehrere Rechnungen auf einmal aus der Rechnungsliste stornieren.

Wurde auf die Rechnung bereits ein oder mehrere Zahlungseingänge gebucht, zeigt das Bestätigungsdialog den eingegangenen Betrag und warnt, dass Sie ihn dem Kunden noch erstatten müssen. Nach der Stornierung erscheint auf der Detailseite ein Hinweis, dass eine Erstattung offensteht.

Ist die Rechnung bereits vollständig bezahlt oder gibt es schon eine Gutschrift dazu, können Sie sie ebenfalls nicht stornieren. Öffnen Sie die Originalrechnung und nutzen Sie stattdessen „Gutschrift / Korrektur erstellen“.

Stornierte Rechnungen können nicht mit einer Gutschrift korrigiert werden. Wenn Sie dennoch eine Korrektur für eine bereits stornierte Rechnung ausstellen möchten, duplizieren Sie die stornierte Rechnung, nehmen Sie die Korrektur vor und senden Sie sie erneut.

Stornieren ist etwas anderes als Löschen: beim Stornieren wechselt der Status zu Storniert, die Rechnung bleibt aber in der Liste sichtbar; beim Löschen durchläuft sie die Stufen Archiviert und Papierkorb, bevor sie endgültig gelöscht ist. Endgültiges Löschen in einem Schritt ist nur möglich, solange ein Dokument noch ein Entwurf ohne Nummer ist.

Sobald eine Rechnung storniert ist, ist sie nicht mehr einziehbar. Die Rechnungsdetailseite und das Kundenportal zeigen keinen Restbetrag mehr an, auch wenn bereits gebuchte Zahlungen auf der Rechnung vorhanden sind. Bereits gebuchte Zahlungen bleiben im Zahlungsverlauf sichtbar.

## Heruntergeladen oder geteilt, aber nie gemailt

Versenden ist nicht der einzige Weg, auf dem eine Rechnung beim Kunden ankommt. Haben Sie die PDF heruntergeladen oder geteilt, gilt die Rechnung genauso als ausgehändigt: die Seite zeigt „Rechnung gesperrt: bereits beim Kunden“, die gesetzlich vorgeschriebenen Angaben werden schreibgeschützt und das Stornieren wird abgelehnt. Eine Gutschrift oder Korrektur ist der Weg zurück, genau wie bei einer versendeten Rechnung.

Tipp: Beim Stornieren bleibt die Rechnungsnummer in Ihren Unterlagen erhalten; löschen können Sie ein Dokument nur, solange es noch ein Entwurf ohne Nummer ist.
