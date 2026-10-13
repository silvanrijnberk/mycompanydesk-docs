---
title: "Massenaktionen"
description: "Massenaktionen ausführen: Wählen Sie in der Listenansicht von Rechnungen, Ausgaben oder Kunden mehrere Einträge aus, die Aktionsleiste erscheint unten."
last_verified: 2026-05-09
chatbot:
  triggers: ["bulk action", "bulk delete", "bulk send", "select multiple", "batch operation", "meerdere selecteren", "bulk verwijderen", "massenbearbeitung", "action en masse"]
  actions: []
  follow_up: ["How do I delete multiple invoices?", "How do I export selected items?"]
---
Um Massenaktionen durchzuführen:
1. Gehen Sie zur Listenansicht (zum Beispiel Rechnungen, Angebote, Ausgaben oder Kunden)
2. Wählen Sie Einträge aus: Am Desktop erscheint das Kontrollkästchen, wenn Sie mit der Maus über eine Zeile fahren. Sie können auch im Menü einer Zeile „Mehrere auswählen“ wählen; danach stehen alle Kästchen bereit
3. Unten auf dem Bildschirm erscheint eine Leiste mit der Anzahl ausgewählter Einträge, „Alle auswählen“ und den verfügbaren Aktionen
4. Wählen Sie die Aktion, zum Beispiel „Als bezahlt markieren“, „Als versendet markieren“, „Als storniert markieren“, „Archivieren“ oder „Löschen“ (welche Aktionen es gibt, hängt von der Liste und Ihrer Auswahl ab)
5. Bestätigen Sie die Aktion, wenn Sie danach gefragt werden

## Prüfungen, wenn Sie Entwürfe gesammelt als versendet markieren

Markieren Sie Rechnungsentwürfe gesammelt als versendet, erhalten sie eine Rechnungsnummer, und MyCompanyDesk führt dieselben Prüfungen durch wie bei einer einzelnen Rechnung. Ihre USt-IdNr., IBAN und Firmenadresse müssen hinterlegt sein, eine Reverse-Charge-Rechnung kann nicht abgeschlossen werden, wenn der Kunde keine USt-IdNr. hat, und eine Position mit 0% MwSt. (sources/vat-rates.yaml#countries.NL.zero) braucht eine eindeutige Grundlage (Reverse Charge oder ein anerkannter Nullsatz-Grund). Besteht eine Rechnung eine Prüfung nicht, wird die gesamte Aktion nicht ausgeführt; die Meldung nennt die Rechnung, damit Sie sie zuerst korrigieren können.

## Ausgaben massenhaft archivieren

Wenn Sie mehrere unbezahlte Ausgaben auf einmal archivieren, werden deren offene Zahlungserinnerungen pausiert. Die Massenaktionsleiste zeigt vorher eine Bestätigung, sobald eine ausgewählte Ausgabe unbezahlt ist und ein Fälligkeitsdatum hat, damit Sie wissen, wie viele der ausgewählten Ausgaben ihre Erinnerung verlieren. Solange die Ausgaben archiviert sind, bleibt die Erinnerung aus. Stellen Sie eine archivierte Ausgabe später wieder her, wird die Erinnerung beim nächsten täglichen Lauf neu angelegt, aber frühestens in der folgenden Nacht.

Tipp: Verwenden Sie zuerst Filter, um die Liste einzugrenzen, und wählen Sie dann alle sichtbaren Einträge für eine effiziente Stapelverarbeitung.
