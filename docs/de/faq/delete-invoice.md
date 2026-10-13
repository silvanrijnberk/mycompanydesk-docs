---
title: "Rechnung löschen"
description: "Einen Rechnungsentwurf löschen Sie über Mehr und Löschen. Eine finalisierte Rechnung lässt sich nicht löschen, nur stornieren."
last_verified: 2026-08-15
chatbot:
  triggers:
    - "delete invoice"
    - "remove invoice"
    - "trash invoice"
    - "erase invoice"
    - "get rid of invoice"
    - "factuur verwijderen"
    - "factuur wissen"
    - "hoe verwijder ik een factuur"
    - "rechnung loschen"
    - "wie losche ich eine rechnung"
    - "supprimer facture"
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up:
    - "How do I cancel an invoice instead?"
    - "How do I find a specific invoice?"
    - "Can I undo a deleted invoice?"
---

So löschen Sie eine Rechnung:
1. Öffnen Sie den Rechnungsentwurf, den Sie löschen möchten
2. Klicken Sie oben auf „Mehr“ (auf dem Smartphone das Menü mit den drei Punkten)
3. Wählen Sie „Löschen“
4. Bestätigen Sie die Löschung

Löschen ist nur bei einem Entwurf möglich, der noch keine Rechnungsnummer hat. Auch dann geschieht es in Stufen: aktiv wird Archiv, archiviert wird Papierkorb. Endgültig entfernt ist der Entwurf erst, wenn Sie ihn im Papierkorb auswählen und „Endgültig löschen“ wählen oder auf „Papierkorb leeren“ klicken.

Eine finalisierte Rechnung (mit Rechnungsnummer) können Sie weder löschen noch archivieren: Sie muss in Ihrer Buchhaltung bleiben. Wenn Sie sie zurückziehen möchten, wählen Sie im selben Menü „Als storniert markieren“ (nicht bei einer bezahlten Rechnung) oder erstellen Sie eine Gutschrift.

Haben Sie versehentlich gelöscht? Öffnen Sie in der Rechnungsliste die Filter, wählen Sie unter Anzeigen die Ansicht Archiv oder Papierkorb, öffnen Sie die Rechnung und wählen Sie „Zu aktiv wiederherstellen“, bevor sie die letzte Stufe erreicht.
