---
title: "Objekte"
description: "Gebäude, Fahrzeuge, Maschinen und andere Objekte verwalten: Wert, Abschreibung, Miete, Kosten und WOZ. In Office, aktivierbar unter Module."
---

# Objekte

Behalten Sie im Blick, was Ihr Unternehmen besitzt, was es wert ist und was es einbringt: vermietete Gebäude und Garagen, Ihr Firmenwagen, Maschinen, Werkzeug und andere Vermögenswerte.

::: info
**Objekte** gehört zum Office-Abonnement. Sehen Sie es nicht in der Navigation, aktivieren Sie **Vermögenswerte & Objekte** unter **Einstellungen › Module**.
:::

## Übersicht

Die Seite **Objekte** zeigt alle Ihre Objekte, gruppiert nach Art (Gebäude, Fahrzeuge, Werkzeug und Maschinen, Einrichtung, Elektronik, Sonstiges). Oben stehen die Kennzahlen: **Aktueller Wert**, **Gesamter Mietwert**, was **Steht leer**, **Kosten dieses Jahr** und **Abschreibung dieses Jahr**.

## Typen

Beim Anlegen wählen Sie einen Typ: **Immobilie / Garage**, **Wohnung**, **Büro**, **Einzelhandel**, **Fahrzeug**, **Maschine**, **Ausrüstung**, **Möbel**, **Elektronik** oder **Sonstige**. Immobilien, Wohnungen, Büros und Ladenflächen erhalten eine Adresse und einen WOZ-Verlauf.

## Status

| Status | Bedeutung |
|---|---|
| **Aktiv** | In Gebrauch (Standard für ein neues Objekt) |
| **Verfügbar** | Bereit zur Vermietung oder Nutzung |
| **Belegt** | In Gebrauch oder vermietet |
| **Wartung** | Wegen Wartung vorübergehend nicht verfügbar |
| **Inaktiv** | Nicht in Gebrauch |
| **Verkauft** / **Entsorgt** | Nicht mehr Teil Ihres Unternehmens |

Ein Objekt mit laufendem Mietvertrag erscheint in der Liste als **Vermietet**.

## Objekt hinzufügen

1. Öffnen Sie **Objekte** und klicken Sie auf **Objekt hinzufügen**
2. Geben Sie den **Namen** ein (zum Beispiel „Garage Utrecht, Box 12“) und wählen Sie den **Typ**
3. Klicken Sie auf **Speichern**

::: tip Weitere Angaben
Nur der Name ist Pflicht. Den Rest füllen Sie bei Bedarf in den einklappbaren Abschnitten aus: **Adresse / Standort** (bei Gebäuden), **Details** (Referenz, Beschreibung, Standardmiete), **Wert** (Kaufdatum, Kaufpreis, aktueller Wert, Verkaufsdatum, Erlös und USt-Regime) und **Status**. Das USt-Regime beginnt mit **Mit USt**; bei einer **Wohnung** (Wohnraum) beginnt es mit **Ohne USt**. Ihre eigene Wahl im Formular gilt immer, und bestehende Objekte behalten, was für sie gespeichert ist.
:::

## Die Objektseite

Die Seite eines Objekts zeigt:

- Oben den **Gesamtumsatz** und den Status, mit der Anzahl aktiver Verträge
- Die Kerndaten: Adresse (mit Kartenlink), Standardmiete, aktueller Mieter und die Anschaffung
- **Verlauf**: Verträge, Rechnungen, Wartung und Dokumente in einer Zeitleiste
- **WOZ-Verlauf** (bei Gebäuden)
- **Anlagegut**: Anschaffungswert, Abschreibung und Buchwert, sobald eine als Investition gebuchte Anschaffung mit dem Objekt verknüpft ist
- **Kilometererfassung** (bei Fahrzeugen mit Fahrten)
- **Finanzübersicht**: **Gesamtumsatz**, **Gesamtkosten**, **Netto-Cashflow** und eine Aufteilung **Pro Jahr**
- **Aufgaben**, zum Beispiel ein fehlender WOZ-Wert für Box 3

### Umsatz und Rechnungen

Der **Gesamtumsatz** zählt alle bezahlten Rechnungen, die mit dem Objekt verknüpft sind, ohne MwSt.:

- Rechnungen aus einem Vertrag, der an diesem Objekt hängt
- Rechnungen, die direkt mit dem Objekt verknüpft sind, etwa Servicekosten, Einzelrechnungen und Verkaufsrechnungen

Der Box-3-Bericht zählt nur erhaltene Miete und richtet sich nach dem Datum des Geldeingangs. Die beiden Beträge können daher abweichen; die Seite erklärt das ebenfalls.

### Verlauf

Der **Verlauf** fasst Verträge, Rechnungen, Wartung und Dokumente in einer chronologischen Liste zusammen. Über **Hinzufügen** wählen Sie **Wartung erfassen** (Datum, Beschreibung, Kategorie, Kosten, durchgeführt von) oder **Dokument hinzufügen**. Wartung und Dokumente löschen Sie hier; einen Vertrag oder eine Rechnung verwalten Sie auf der jeweiligen Seite.

Ein Vertrag, der noch auf eine Unterschrift wartet, zeigt seinen Signierstatus: **Nicht gesendet**, **Ausstehend**, **Teilweise signiert**, **Abgelaufen** oder **Beendet**. Ist der Vertrag signiert, sehen Sie wieder, ob er aktiv ist. Ältere Verträge, die nie für die digitale Signatur eingerichtet wurden, zeigen keinen Signierstatus.

### WOZ-Verlauf (Gebäude)

Bei Immobilien, Wohnungen, Büros und Ladenflächen führt die Seite die WOZ-Werte pro Jahr. Box 3 verwendet den WOZ-Wert, der am 1. Januar des jeweiligen Jahres galt (der Stichtag).

- Fügen Sie einen Wert mit Jahr und dem von der Gemeinde festgesetzten WOZ-Wert hinzu.
- Hat das Objekt eine gültige niederländische Adresse und ist der Verlauf noch leer, ruft MyCompanyDesk die Werte selbst aus dem Kadaster ab. Mit **Aktualisieren** holen Sie jederzeit die neuesten Daten; diese Werte tragen das Label **Kadaster**.
- Hat das Kadaster keine Daten für die Adresse (etwa bei einem Neubau), erscheint ein Hinweis und Sie tragen die Werte selbst ein.

Liegt ein WOZ-Verlauf aus dem Kadaster vor, zeigt die Karte zusätzlich einen **Geschätzten aktuellen Wert**: den letzten WOZ-Wert, fortgeschrieben mit dem Hauspreisindex des CBS für die Region des Objekts.

### Anlagegut und Bodemwaarde

Ist eine Anschaffung, die Sie als Investition abschreiben, mit dem Objekt verknüpft (verknüpfen Sie die Ausgabe über das Feld **Vermögenswert** im Ausgabenformular), zeigt der Block **Anlagegut**:

- **Anschaffungswert**: was Sie dafür bezahlt haben
- **In der Bilanz**: der aktivierte geschäftliche Anteil, nach einem etwaigen nicht abziehbaren USt-Anteil und Privatnutzung
- **Bisher abgeschrieben** und **Abschreibung dieses Jahr**
- **Buchwert**: was noch in der Bilanz steht
- Den Abschreibungsplan pro Kalenderjahr

Bei Gebäuden steht zusätzlich die **Bodemwaarde**: die gesetzliche Untergrenze auf Basis des WOZ-Werts, unter die der Buchwert eines Gebäudes nicht sinken darf. MyCompanyDesk ändert den Plan nicht stillschweigend. Liegt die Abschreibung unter der Untergrenze, sehen Sie **Zu weit abgeschrieben**; steht der Buchwert genau auf der Untergrenze, erhalten Sie einen Hinweis. Sie beheben das, indem Sie den Restwert der Anschaffung auf die Bodemwaarde setzen. Hat das Objekt genau eine Anschaffung, öffnet der Link **Öffnen Sie die Anschaffung, um den Restwert anzupassen** sie direkt. Fahrzeuge, Maschinen und andere Objekte, die keine Gebäude sind, haben keine Bodemwaarde.

### Verkauft oder veräußert

Verkaufen, entsorgen oder entnehmen Sie ein Objekt, tragen Sie das im Abschnitt **Wert** des Formulars ein:

- **Verkaufsdatum**: das Datum, an dem das Objekt Ihr Unternehmen verlassen hat.
- **Erlös (exkl. MwSt.)**: der erhaltene Betrag. Lassen Sie das Feld leer, wenn Sie ihn noch nicht kennen; tragen Sie 0 ein, wenn Sie das Objekt ohne Erlös entsorgt haben.

Sobald das Verkaufsdatum gespeichert ist, zeigt der Block **Anlagegut** einen Teil **Verkauft oder veräußert** mit dem Datum, dem **Buchwert beim Verkauf**, dem **Erlös** und dem **Buchgewinn** oder **Buchverlust**. Ohne Erlös sehen Sie nur den abgeschriebenen Buchwert, mit dem Hinweis, dass sich Gewinn oder Verlust erst bestimmen lassen, wenn der Erlös bekannt ist.

Der Block warnt auch, wenn der Abschreibungsplan noch Beträge nach dem Verkaufsdatum vorsieht. Diese landen weiter in Ihrer Gewinn- und Verlustrechnung, bis Sie die Abschreibungsdauer der Anschaffung anpassen.

## Mit Verträgen, Rechnungen und Ausgaben verknüpfen

- **Verträge**: Erstellen Sie einen Mietvertrag für ein Objekt, mit Mieter (Kunde) und Konditionen.
- **Rechnungen**: Verknüpfen Sie eine Rechnung im Rechnungsformular direkt mit einem Objekt, oder lassen Sie sie aus einem Mietvertrag entstehen. Beides zählt zum Gesamtumsatz.
- **Wiederkehrende Rechnungen**: Verknüpfen Sie eine wiederkehrende Rechnung mit einem Objekt für die automatische Mietabrechnung.
- **Ausgaben**: Verknüpfen Sie Kosten über das Feld **Vermögenswert** mit einem Objekt; sie zählen dann zu dessen Kosten.

## Filtern

Filtern Sie die Liste nach:

- **Art**: die Gruppe (zum Beispiel Gebäude oder Fahrzeuge)
- **Typ**: der Objekttyp
- **Status**: ein Status, oder **Leer (mit Miete)** für Objekte mit Mietpreis, die derzeit nicht vermietet sind
- **Suchen** nach Name oder Beschreibung

Mit **Ansicht** wechseln Sie zwischen aktiven, archivierten und gelöschten Objekten.

## Massenaktionen

- **Archivieren** und **Löschen** (in den Papierkorb) in der aktiven Liste
- **Wiederherstellen (aktiv)** und **In Papierkorb verschieben** im Archiv
- **Wiederherstellen (Archiv)** und **Endgültig löschen** im Papierkorb

Ein Objekt mit aktiven Verträgen lässt sich nicht löschen.

## Tipps

- Nutzen Sie den Filter **Leer (mit Miete)**, um schnell zu sehen, was Sie vermieten können
- Verknüpfen Sie jede Mietrechnung und jeden Kostenposten mit dem passenden Objekt, damit Umsatz, Kosten und Netto-Cashflow pro Objekt stimmen
- Nutzen Sie wiederkehrende Rechnungen oder Verträge für die automatische Mietabrechnung
- Tragen Sie den WOZ-Wert zum 1. Januar für Ihre Box-3-Erklärung ein
