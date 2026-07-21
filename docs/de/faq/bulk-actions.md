---
title: Bulk actions
last_verified: 2026-05-09
chatbot:
  triggers: ["bulk action", "bulk delete", "bulk send", "select multiple", "batch operation", "meerdere selecteren", "bulk verwijderen", "massenbearbeitung", "action en masse"]
  actions: []
  follow_up: ["How do I delete multiple invoices?", "How do I export selected items?"]
---
Um Massenaktionen durchzuführen:
1. Gehe zur Listenansicht (Rechnungen, Ausgaben oder Kunden)
2. Wähle mehrere Einträge über die Kontrollkästchen aus
3. Verwende das Massenaktionsmenü oben in der Liste
4. Wähle die Aktion (z. B. Löschen, Senden, Exportieren)
5. Bestätige die Massenaktion

## Prüfungen bei der Massenfreigabe

Wenn Sie Rechnungen massenhaft freigeben oder versenden, führt MyCompanyDesk dieselben MwSt.- und Statusprüfungen durch wie bei einer einzelnen Rechnung. Eine Reverse-Charge-Rechnung kann beispielsweise nicht freigegeben werden, wenn der Kunde keine USt-IdNr. hinterlegt hat, und eine Position mit 0% MwSt. (sources/vat-rates.yaml#countries.NL.zero) muss eine eindeutige Begründung haben (Reverse Charge oder ein anerkannter Nulltarif). Rechnungen, die eine Prüfung nicht bestehen, werden übersprungen; die Ergebnisübersicht zeigt Ihnen, um welche Rechnungen es sich handelt und warum.

Tipp: Verwende zuerst Filter, um die Liste einzugrenzen, und wähle dann alle sichtbaren Einträge für eine effiziente Stapelverarbeitung.
