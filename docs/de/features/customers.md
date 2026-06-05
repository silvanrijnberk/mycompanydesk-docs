---
title: Kunden
last_verified: 2026-06-05
---

# Kunden

Verwalten Sie Ihre vollständige Kundendatenbank. Jede Rechnung, jedes Angebot und jedes Projekt ist mit einem Kundendatensatz verknüpft.

## Übersicht

Die Kundenseite listet alle Ihre Kunden mit den wichtigsten Informationen auf einen Blick auf. Verwenden Sie Suche und Filter, um Kunden schnell zu finden.

## Kunden erstellen

1. Gehen Sie zu **Kunden > Neuer Kunde**
2. Füllen Sie die Kundendetails aus:
   - **Name** — Firmen- oder Personenname (erforderlich)
   - **E-Mail** — Kontakt-E-Mail für den Rechnungsversand
   - **Telefon** — Kontakttelefonnummer
   - **Adresse** — Straße, Postleitzahl, Stadt, Land
   - **USt.-Nummer** — USt.-Registrierung des Kunden (für B2B)
   - **Kundennummer** — Automatisch generiert oder benutzerdefiniert
3. Klicken Sie auf **Speichern**

::: tip
Sie können Kunden auch direkt beim Erstellen einer Rechnung oder eines Angebots anlegen — ohne die Seite verlassen zu müssen.
:::

### KVK-Autofill

Beim Anlegen niederländischer Kunden kann MyCompanyDesk Unternehmensdaten automatisch aus dem KVK-Register (Kamer van Koophandel) übernehmen. Zwei Suchmethoden stehen zur Verfügung:

- **Namenssuche**: Beginnen Sie mit der Eingabe des Firmennamens im **Name**-Feld. Ein Dropdown zeigt passende KVK-Einträge mit Stadt und KVK-Nummer an. Wählen Sie einen Eintrag aus, um Name und KVK-Nummer automatisch zu übernehmen.
- **Handelsregisternummer-Suche**: Geben Sie eine 8-stellige KVK-Nummer im Feld **Handelsregister** ein. Beim Verlassen des Feldes sucht MyCompanyDesk die Nummer und füllt leere Felder (Name, Adresse, Postleitzahl, Stadt, Land) automatisch aus.

Bei erfolgreicher Suche erscheint ein Verifiziert-Badge neben dem Handelsregisterfeld. Wird die Nummer nicht gefunden, erscheint eine Fehlermeldung. Beide Suchfunktionen sind nur für niederländische Kunden verfügbar.

Jeder Arbeitsbereich hat 100 kostenlose KVK-Abrufe pro Tag (zwischengespeicherte Ergebnisse zählen nicht mit). Bei 20 oder weniger verbleibenden Abrufen zeigt der Hinweis am KVK-Feld einen Zähler, wie viele noch übrig sind. Wird das Tageslimit erreicht, erscheint eine entsprechende Meldung. Sie können die Daten dann manuell eingeben oder es morgen erneut versuchen.

### USt.-Nummern-Validierung

Wenn Sie eine USt.-Nummer im Kundenformular eingeben, validiert MyCompanyDesk diese in zwei Schritten:

- **Formatprüfung** (automatisch): Beim Verlassen des USt.-Nummernfeldes prüft das Formular, ob die Nummer dem erwarteten Format für das Land entspricht (z.B. `NL123456789B01` für die Niederlande). Bei ungültigem Format erscheint ein dezenter Inline-Hinweis. Dies verhindert nicht das Speichern — es dient nur zur Information.
- **VIES-Prüfung** (manuell): Für korrekt formatierte EU-USt.-Nummern erscheint eine Schaltfläche **Über VIES prüfen**. Klicken Sie darauf, um eine Live-Prüfung gegen das EU-VIES-Register durchzuführen. Das Ergebnis zeigt, ob die Nummer registriert und aktiv ist oder nicht gefunden wurde. Auch dies ist nicht blockierend — Sie können den Kunden unabhängig vom VIES-Ergebnis speichern.

Die Validierung von USt.-Nummern hilft zu verhindern, dass fehlerhafte oder inaktive Nummern in Reverse-Charge-Rechnungen gelangen.

## Kundendetailseite

Die Kundendetailseite zeigt:

- **Kontaktinformationen** — Alle gespeicherten Daten
- **Rechnungsverlauf** — Jede an diesen Kunden gesendete Rechnung
- **Ausgabenverlauf** — Mit diesem Kunden verknüpfte Ausgaben
- **Verträge** - Aktive und inaktive Verträge, mit Signaturstatus-Badges und einem PDF-Vorschau-Icon, wenn E-Signing aktiviert ist
- **Projekte** — Aktive und abgeschlossene Projekte
- **Statistiken** — Gesamtumsatz, ausstehender Saldo, durchschnittliche Zahlungsdauer

### E-Mail-Zustellbarkeitsbanner

Ein Warnbanner erscheint oben auf der Kundendetailseite, wenn die E-Mail-Adresse des Kunden kürzlich gebounct (dauerhaft unzustellbar) ist oder eine Spam-Beschwerde ausgelöst hat. Das Banner bleibt still, wenn die Adresse in Ordnung ist.

- **Bounce**, zeigt ein rotes Banner mit dem Datum der letzten fehlgeschlagenen Zustellung und dem Ablehnungsgrund des E-Mail-Anbieters. Wurde kein spezifischer Grund mitgeteilt, erscheint ein allgemeiner Hinweis.
- **Beschwerde**, zeigt ein gelbes Banner, das davor warnt, dass der Kunde Ihre E-Mail als Spam markiert hat. Die Nachricht rät davon ab, weitere E-Mails an diese Adresse zu senden, ohne vorher Kontakt aufzunehmen.

Diese Informationen stammen von Provider-Ereignissen und dem Zustellstatus ausgehender Nachrichten und helfen Ihnen, Zustellprobleme zu erkennen, bevor Sie die nächste Rechnung oder das nächste Angebot versenden.

## Aktionen

- **Bearbeiten** — Kundeninformationen aktualisieren
- **Rechnung erstellen** — Eine neue Rechnung mit diesem Kunden vorausgefüllt starten
- **Angebot erstellen** — Ein neues Angebot für diesen Kunden starten
- **Archivieren** — Ins Archiv verschieben (kann später wiederhergestellt werden)
- **Löschen** — Kunden dauerhaft entfernen

## Massenaktionen

Wählen Sie mehrere Kunden für:

- **Archivieren** — Inaktive Kunden in großem Umfang archivieren
- **Wiederherstellen** — Archivierte Kunden zurückholen
- **Löschen** — Mehrere Kunden entfernen

## Schnellansicht

Am Desktop klicken Sie auf einen Kunden in der Liste, um das **Schnellansicht**-Seitenpanel zu öffnen. Dies zeigt wichtige Details und Aktionen, ohne die Liste zu verlassen:

- Zusammenfassung der Kundeninformationen
- Neueste Rechnungen
- Bearbeiten-Schaltfläche zum Öffnen der vollständigen Bearbeitungsseite

## Kunden importieren

Importieren Sie Ihre bestehende Kundendatenbank aus CSV:

1. Gehen Sie zu **Profil > Import**
2. Wählen Sie **Kunden** als Datentyp
3. Laden Sie Ihre CSV-Datei hoch
4. Ordnen Sie Ihre CSV-Spalten den MyCompanyDesk-Feldern zu (Name, E-Mail, Adresse usw.)
5. Überprüfen Sie die Vorschau
6. Bestätigen Sie den Import

## Kunden exportieren

Exportieren Sie Ihre Kundenliste als CSV von der Kundenseite (Pro-Tarif und höher).

## Tipps

- Halten Sie Kunden-E-Mails aktuell — sie werden für den Rechnungsversand verwendet
- Verwenden Sie die Suchleiste für sofortigen unscharfen Abgleich über alle Kundenfelder
- Setzen Sie Ihre wichtigsten Kunden als Favoriten für schnellen Zugriff
- Weisen Sie USt.-Nummern zu, um Reverse-Charge bei B2B-Rechnungen zu ermöglichen
