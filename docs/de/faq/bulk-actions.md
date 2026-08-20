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
1. Gehen Sie zur Listenansicht (Rechnungen, Ausgaben oder Kunden)
2. Wählen Sie mehrere Einträge über die Kontrollkästchen aus
3. Die Aktionsleiste erscheint unten auf der Seite am Desktop und unten am Bildschirm auf Mobilgeräten
4. Wählen Sie die Aktion (z. B. Löschen, Senden, Exportieren)
5. Bestätigen Sie die Massenaktion

## Prüfungen bei der Massenfreigabe

Wenn Sie Rechnungen massenhaft freigeben oder versenden, führt MyCompanyDesk dieselben MwSt.- und Statusprüfungen durch wie bei einer einzelnen Rechnung. Eine Reverse-Charge-Rechnung kann beispielsweise nicht freigegeben werden, wenn der Kunde keine USt-IdNr. hinterlegt hat, und eine Position mit 0% MwSt. (sources/vat-rates.yaml#countries.NL.zero) muss eine eindeutige Begründung haben (Reverse Charge oder ein anerkannter Nulltarif). Rechnungen, die eine Prüfung nicht bestehen, werden übersprungen; die Ergebnisübersicht zeigt Ihnen, um welche Rechnungen es sich handelt und warum.

## Ausgaben massenhaft archivieren

Wenn Sie mehrere unbezahlte Ausgaben auf einmal archivieren, werden deren offene Zahlungserinnerungen pausiert. Die Massenaktionsleiste zeigt vorher eine Bestätigung, sobald eine ausgewählte Ausgabe unbezahlt ist und ein Fälligkeitsdatum hat, damit Sie wissen, wie viele der ausgewählten Ausgaben ihre Erinnerung verlieren. Solange die Ausgaben archiviert sind, bleibt die Erinnerung aus. Stellen Sie eine archivierte Ausgabe später wieder her, wird die Erinnerung beim nächsten täglichen Lauf neu angelegt, aber frühestens in der folgenden Nacht.

Tipp: Verwenden Sie zuerst Filter, um die Liste einzugrenzen, und wählen Sie dann alle sichtbaren Einträge für eine effiziente Stapelverarbeitung.
