---
title: "Kunden löschen"
description: "So löschen Sie einen Kunden: Öffnen Sie den Kunden, wählen Sie im Menü Mehr oben Löschen und bestätigen Sie. Gelöscht wird über Archiv und Papierkorb."
last_verified: 2026-10-03
chatbot:
  triggers: ["delete customer", "remove customer", "trash customer", "klant verwijderen", "klant wissen", "kunde loschen", "supprimer client"]
  actions:
    - { label: "Open customers", to: "/customers" }
  follow_up: ["How do I archive a customer instead?", "How do I edit customer details?"]
---

So löschen Sie einen Kunden:
1. Gehen Sie zu Kunden und suchen Sie den Kunden
2. Öffnen Sie das Profil
3. Öffnen Sie das Menü „Mehr“ im Kopf der Seite (auf dem Smartphone das ⋯-Menü)
4. Klicken Sie auf „Löschen“
5. Bestätigen Sie die Löschung

Das Löschen erfolgt in Stufen: Das Löschen eines aktiven Kunden archiviert ihn zunächst, erneutes Löschen verschiebt ihn in den Papierkorb, und das Löschen aus dem Papierkorb ist endgültig. Bis zu diesem letzten Schritt können Sie den Kunden jederzeit aus der Ansicht Archiv oder Papierkorb wiederherstellen.

Archivieren und in den Papierkorb verschieben geht immer. Der endgültige Schritt ist blockiert, solange für diesen Kunden noch etwas läuft: aktive Verträge, aktive wiederkehrende Rechnungen, eine aktive wiederkehrende Zeiterfassung, offene Angebote, offene Rechnungen oder Rechnungsentwürfe, noch nicht abgerechnete Stunden und noch nicht abgerechnete Arbeitsaufträge. Die Meldung sagt Ihnen, was noch offen ist. Stunden, die erst in der Zukunft geplant sind, blockieren das Löschen nicht.

Wenn Sie unter Einstellungen › „Daten löschen“ **Alle Kunden löschen** wählen, warnt die Bestätigung, dass laufende Verträge und wiederkehrende Rechnungen dadurch beendet werden.
