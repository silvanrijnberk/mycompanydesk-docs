---
title: "Ausgabe löschen"
description: "So löschen Sie eine Ausgabe: öffnen Sie sie, klicken Sie oben auf Mehr und wählen Sie Löschen. Das geht über Archiv und Papierkorb."
last_verified: 2026-08-16
chatbot:
  triggers: ["delete expense", "remove expense", "trash expense", "erase expense", "uitgave verwijderen", "uitgave wissen", "hoe verwijder ik een uitgave", "ausgabe loschen", "wie losche ich eine ausgabe", "supprimer depense"]
  actions:
    - { label: "Open expenses", to: "/expenses" }
  follow_up: ["How do I edit an expense instead?", "How do I export my expense data?"]
---

So löschen Sie eine Ausgabe:
1. Öffnen Sie die Ausgabe aus Ihrer Ausgabenliste
2. Klicken Sie oben auf „Mehr“ (auf dem Smartphone das Menü mit den drei Punkten)
3. Wählen Sie „Löschen“
4. Bestätigen Sie die Löschung

Das Löschen erfolgt in Stufen. Das Löschen einer aktiven Ausgabe archiviert sie zunächst, erneutes Löschen aus dem Archiv verschiebt sie in den Papierkorb. Endgültig entfernt ist sie erst, wenn Sie sie im Papierkorb auswählen und „Endgültig löschen“ wählen oder auf „Papierkorb leeren“ klicken. Bis zu diesem letzten Schritt können Sie die Ausgabe jederzeit aus der Ansicht Archiv oder Papierkorb wiederherstellen (über Filter, bei Anzeigen). Wenn Sie Ausgaben in der Liste auswählen und dort Löschen wählen, landen sie gemeinsam im Papierkorb und lassen sich dort noch wiederherstellen.

Liegt die Ausgabe in einem bereits gesperrten MwSt.-Zeitraum, können Sie sie weder archivieren noch löschen. Erstellen Sie dann eine Korrektur.

Ausgaben im Papierkorb können nicht bearbeitet werden. Stellen Sie die Ausgabe zuerst wieder her, wenn Sie etwas ändern müssen.

Wenn Sie eine unbezahlte Ausgabe mit Fälligkeitsdatum archivieren, wird die offene Zahlungserinnerung zurückgezogen und nicht versendet, solange sie im Archiv liegt. Sie können die Ausgabe später aus dem Archiv wiederherstellen. Dann wird die Erinnerung beim nächsten täglichen Lauf neu angelegt, aber frühestens in der folgenden Nacht.
