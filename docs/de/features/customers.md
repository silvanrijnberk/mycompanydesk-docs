---
title: Kunden
---

# Kunden

Verwalten Sie Ihre vollständige Kundendatenbank. Jede Rechnung, jedes Angebot und jedes Projekt ist mit einem Kundendatensatz verknüpft.

## Übersicht

Die Kundenseite listet alle Ihre Kunden mit den wichtigsten Informationen auf einen Blick auf. Die Liste ist nach Namen sortiert, mit Ihren Favoriten ganz oben. Die Suche findet Kunden nach Name, Kundennummer, E-Mail-Adresse oder Stadt. Mit den Status-Tabs wechseln Sie zwischen Alle Status, Aktiv, Interessenten, Archiv und Papierkorb, und ein Datumsbereichsfilter grenzt die Liste weiter ein.

## Kunden erstellen

1. Gehen Sie zu **Kunden** und klicken Sie auf **Erstellen**
2. Füllen Sie die Kundendetails aus:
   - **Name**: Firmen- oder Personenname (erforderlich)
   - **E-Mail**: Kontakt-E-Mail für den Rechnungsversand
   - **Telefon**: Kontakttelefonnummer
   - **Adresse**: Straße, Postleitzahl, Stadt, Land
   - **USt.-Nummer**: USt.-Registrierung des Kunden (für B2B)
   - **Kundennummer**: automatisch generiert oder benutzerdefiniert
3. Klicken Sie auf **Speichern**

::: tip
Kundenauswahlfelder in der gesamten App (Rechnungen, Angebote, Zeiterfassung und mehr) enthalten einen Link **Neuen Kunden hinzufügen**, der die Neuer-Kunde-Seite öffnet, damit Sie einen fehlenden Kunden zwischendurch anlegen können.
:::

### KVK-Autofill

Beim Anlegen niederländischer Kunden kann MyCompanyDesk Unternehmensdaten automatisch aus dem KVK-Register (Kamer van Koophandel) übernehmen. Zwei Suchmethoden stehen zur Verfügung:

- **Namenssuche**: Beginnen Sie mit der Eingabe des Firmennamens im **Name**-Feld. Ein Dropdown zeigt passende KVK-Einträge mit Stadt und KVK-Nummer an. Wählen Sie einen Eintrag aus, um Name und KVK-Nummer automatisch zu übernehmen.
- **Handelsregisternummer-Suche**: Geben Sie eine 8-stellige KVK-Nummer im Feld **Handelsregister** ein. Beim Verlassen des Feldes sucht MyCompanyDesk die Nummer und füllt leere Felder (Name, Adresse, Postleitzahl, Stadt, Land) automatisch aus.

Bei erfolgreicher Suche erscheint ein Verifiziert-Badge neben dem Handelsregisterfeld. Wird die Nummer nicht gefunden, erscheint eine Fehlermeldung. Beide Suchfunktionen sind nur für niederländische Kunden verfügbar.

## Interessenten

Ein Interessent ist ein potenzieller Kunde ohne Kundennummer. Für Interessenten können Sie Angebote erstellen, aber keine Rechnungen. Markieren Sie einen Kunden mit dem **Prospekt**-Schalter im Kundenformular als Interessent; Interessenten erhalten einen eigenen Tab **Interessenten** auf der Kundenseite und ein Badge auf ihrer Karte. Wird aus einem Interessenten ein echter Kunde, öffnen Sie die Detailseite und verwenden Sie **Nach Kunden umrechnen**: Sie vergeben eine Kundennummer und der Datensatz wird ein regulärer Kunde.

## Kundendetailseite

Die Kundendetailseite zeigt:

- **Kontaktinformationen**: E-Mail, Telefon und Adresse
- **Unternehmensdaten**: USt.-Nummer, Handelsregisternummer, IBAN und Zahlungsziel
- **Abrechnungsinformationen**: Stundensatz, Zahlungsziel und ob die automatische Abrechnung erfasster Stunden aktiv ist
- **Zusammenfassung**: Gesamtsumme fakturiert, Anzahl Rechnungen und Datum der letzten Rechnung
- **Neueste Rechnungen**: die letzten Rechnungen für diesen Kunden, mit Link zur vollständigen Liste
- **Neueste Zeiterfassungen**: die zuletzt erfassten Stunden für diesen Kunden
- **Verträge**: aktive und inaktive Verträge, mit Signaturstatus-Badges und einem PDF-Vorschau-Icon, wenn E-Signing aktiviert ist
- **Notizen**: freie Notizen zu diesem Kunden
- **Aktionen**: bearbeiten, Rechnung erstellen, Angebot erstellen, archivieren und löschen

### E-Mail-Zustellbarkeitsbanner

Ein Warnbanner erscheint oben auf der Kundendetailseite, wenn die E-Mail-Adresse des Kunden kürzlich gebounct (dauerhaft unzustellbar) ist oder eine Spam-Beschwerde ausgelöst hat. Das Banner bleibt still, wenn die Adresse in Ordnung ist.

- **Bounce**: zeigt ein rotes Banner mit dem Datum der letzten fehlgeschlagenen Zustellung und dem Ablehnungsgrund des E-Mail-Anbieters. Wurde kein spezifischer Grund mitgeteilt, erscheint ein allgemeiner Hinweis.
- **Beschwerde**: zeigt ein gelbes Banner, das davor warnt, dass der Kunde Ihre E-Mail als Spam markiert hat. Die Nachricht rät davon ab, weitere E-Mails an diese Adresse zu senden, ohne vorher Kontakt aufzunehmen.

Diese Informationen stammen von Provider-Ereignissen und dem Zustellstatus ausgehender Nachrichten und helfen Ihnen, Zustellprobleme zu erkennen, bevor Sie die nächste Rechnung oder das nächste Angebot versenden.

## Favoriten

Mit Favoriten haben Sie Ihre wichtigsten Kunden immer griffbereit:

- **Markieren Sie einen Kunden mit einem Stern** auf der Karte in der Liste, im Schnellansichts-Panel oder auf der Detailseite. Ein gelber Stern kennzeichnet Favoriten.
- **In Masse hinzufügen oder entfernen**: Wählen Sie mehrere Kunden aus und nutzen Sie die Massenaktionen **Zu Favoriten hinzufügen** oder **Aus Favoriten entfernen**.
- **Immer oben**: Favoriten stehen immer ganz oben in der Kundenliste und in jedem Kundenauswahlfeld der App (Rechnungen, Angebote, Zeiterfassung), gekennzeichnet mit einem Stern.

## Aktionen

- **Bearbeiten**: Kundeninformationen aktualisieren
- **Rechnung erstellen**: eine neue Rechnung mit diesem Kunden vorausgefüllt starten
- **Angebot erstellen**: ein neues Angebot für diesen Kunden starten
- **Archivieren**: ins Archiv verschieben (kann später wiederhergestellt werden)
- **Löschen**: stufenweises Löschen, siehe unten

### Kunden löschen

Das Löschen erfolgt in Stufen, damit Sie nie versehentlich Daten verlieren. Das Löschen eines aktiven Kunden archiviert ihn zuerst. Das Löschen eines archivierten Kunden verschiebt ihn in den Papierkorb. Das Löschen aus dem Papierkorb entfernt den Kunden endgültig. Sie können jederzeit aus dem Archiv oder dem Papierkorb wiederherstellen und den gesamten Papierkorb über den Papierkorb-Tab auf einmal leeren.

## Massenaktionen

Wählen Sie mehrere Kunden für:

- **Zu Favoriten hinzufügen / Aus Favoriten entfernen**: die Auswahl als Favoriten markieren oder die Markierung entfernen
- **Archivieren**: aktive Kunden in Masse archivieren
- **Wiederherstellen**: archivierte oder in den Papierkorb verschobene Kunden zurückholen
- **In Papierkorb verschieben**: archivierte Kunden in den Papierkorb verschieben
- **Löschen**: die ausgewählten Kunden endgültig entfernen

## Schnellansicht

Am Desktop klicken Sie auf einen Kunden in der Liste, um das **Schnellansicht**-Seitenpanel zu öffnen. Dies zeigt wichtige Details und Aktionen, ohne die Liste zu verlassen:

- Finanzübersicht: Gesamtsumme fakturiert, Anzahl Rechnungen und ausstehender Betrag
- Kontaktdaten, Adresse, Kundennummer, USt.-Nummer, Stundensatz, Zahlungsziel und Datum der letzten Rechnung
- Schnellaktionen: Rechnung erstellen, Angebot erstellen, E-Mail senden und Favorit umschalten
- Eine **Bearbeiten**-Schaltfläche, die die vollständige Bearbeitungsseite öffnet

## Kunden importieren

Importieren Sie Ihre bestehende Kundendatenbank aus CSV:

1. Gehen Sie zu **Profil > Import**
2. Wählen Sie **Kunden** als Datentyp
3. Laden Sie Ihre CSV-Datei hoch
4. Ordnen Sie Ihre CSV-Spalten den MyCompanyDesk-Feldern zu (Name, E-Mail, Adresse usw.)
5. Überprüfen Sie die Vorschau
6. Bestätigen Sie den Import

## Kunden exportieren

Exportieren Sie Ihre Kundenliste als CSV über **Einstellungen > Daten herunterladen** (verfügbar ab dem Starter-Tarif). Auf derselben Seite können Sie auch ein vollständiges Backup all Ihrer Daten erstellen.

## Tipps

- Halten Sie Kunden-E-Mails aktuell; sie werden für den Rechnungsversand verwendet
- Die Suche findet Name, Kundennummer, E-Mail-Adresse und Stadt
- Markieren Sie Ihre wichtigsten Kunden als Favoriten für schnellen Zugriff
- Weisen Sie USt.-Nummern zu, um Reverse-Charge bei B2B-Rechnungen zu ermöglichen
