---
title: Weiterleitung an Steuerberater
last_verified: 2026-08-15
---

# Weiterleitung an Steuerberater

Wenn Ihr Steuerberater in einem eigenen Paket arbeitet, etwa Exact, SnelStart, Twinfield oder Yuki, koennen Sie MyCompanyDesk Rechnungen und Ausgaben automatisch an ihn uebermitteln lassen. So muessen Sie Unterlagen nicht mehr einzeln per E-Mail verschicken.

## Wo Sie es finden

Gehen Sie zu **Einstellungen** > **Zugriff und Steuerberater** (`/settings/team`) und oeffnen Sie den Bereich **Steuerberater**. Unter der Kontaktliste finden Sie die Karte **Automatische Weiterleitung**.

## Was Sie einstellen koennen

Die Karte liest aus und schreibt auf `/api/team/accountant-delivery`. Jedes Arbeitsbereichsmitglied kann die Einstellungen sehen; nur Team-Admins koennen sie aendern.

| Einstellung | Optionen |
|---|---|
| **Empfaenger** | Bestehenden Steuerberater-Kontakt waehlen, oder keinen |
| **Verkaufsrechnungen** | Aus, bei Versand, oder bei Bezahlung |
| **Ausgaben** | Aus, oder beim Anlegen |
| **Wie haeufig** | Direkt, taeglich, woechentlich (Montag), monatlich oder vierteljaehrlich |
| **Nur Ausgaben mit Beleg** | Ausgaben ohne Beleg zurueckhalten |
| **Belege mitschicken** | Belegbilder als Anhang mitschicken |
| **Rechnungs-PDF mitschicken** | Die Rechnungs-PDF beifuegen |
| **Angebote mitschicken** | Auch akzeptierte Angebote weiterleiten |
| **Automatische Weiterleitung aktiv** | Hauptschalter |

Der Standardrhythmus fuer die meisten Bueros ist woechentlich am Montag, weil eine gebundelte E-Mail einfacher zu verarbeiten ist als einzelne Nachrichten pro Beleg.

### Abzugsfaehigkeit im Export

Die Ausgabendetails in der weitergeleiteten Exportdatei enthalten den Kategorienamen und die tatsaechliche Abzugsfaehigkeit, die die MwSt.-Voranmeldung anwendet: den Abzugsprozentsatz der Kategorie und den abzugsfaehigen MwSt.-Betrag. Dies ersetzt die aeltere Spalte "Abzugsfaehig" mit Ja/Nein, sodass Zeilendetails und MwSt.-Zusammenfassung im selben Export uebereinstimmen.

### Belegpflicht

Wenn **Nur Ausgaben mit Beleg** aktiv ist, werden Ausgaben ohne Beleg nicht weitergeleitet. Sie bleiben im Arbeitsbereich, und die Anzahl wird in der Weiterleitungs-E-Mail ausgewiesen, damit Sie wissen, was noch fehlt. Ihr Steuerberater braucht den Beleg, um die USt. zurueckzufordern, sodass mit diesem Schalter keine unvollstaendigen Unterlagen den Arbeitsbereich verlassen.

## Berechtigung zum Aendern der Einstellungen

Nur Team-Admins koennen die Auswahlboxen, Kontrollkaestchen und den Hauptschalter bearbeiten. Nicht-Admins sehen die aktuellen Einstellungen, koennen aber keine Aenderungen speichern.

## Was weitergeleitet wird

Nur Belege, die fuer einen Steuerberater bereit sind, verlassen den Arbeitsbereich:

- Nicht vor dem Steuerberater verborgen.
- Nicht in Pruefung (Bank- oder Posteingangsposten, die Sie noch nicht bestaetigt haben).
- Nicht im Papierkorb oder archiviert.
- Rechnungen muessen versandt sein; Entwuerfe werden nicht weitergeleitet.
- Wenn die Belegpflicht aktiv ist, muessen Ausgaben einen Beleg haben.

Die Engine arbeitet mit einem Wasserzeichen (`last_delivered_at`), nicht mit einzelnen Status-Hooks, sodass kein Beleg verpasst wird, weil spaeter ein neuer Zahlungsweg hinzukommt.

## Zustellungsprotokoll und Aktivitaet

Die Seite **Zugang und Steuerberater** fuehrt ein Zustellungsprotokoll, das zeigt, was wann weitergeleitet wurde. Ausserdem wird eine Aktivitaetsuebersicht des verknuepften Steuerberaters erfasst: was er in Ihrem Arbeitsbereich angesehen oder geaendert hat. Beide Protokolle sind fuer Eigentuemer und Admins sichtbar; der Steuerberater sieht das Zustellungsprotokoll, kann es aber nicht loeschen.

## Manuelle Weiterleitung aus einem Beleg

Sie koennen auch eine einzelne Rechnung, Ausgabe oder ein Angebot direkt von der Detailseite an Ihren Steuerberater uebermitteln. Suchen Sie die Schaltflaeche **An Steuerberater senden** neben den E-Mail-Aktionen. Damit wird eine manuelle Zustellung im selben Protokoll erfasst, sodass Sie sie neben der automatischen Weiterleitung sehen. Auch fehlgeschlagene manuelle Sendungen werden protokolliert, damit Sie denselben Beleg nicht versehentlich zweimal senden.

## Gesendete Elemente

Manuelle Sendungen und andere Arbeitsbereichs-E-Mails erscheinen im Posteingang unter **Gesendet**. Sie sind unter der Steuerberater-Kategorie gruppiert, sodass Sie auf einen Blick erkennen, welche Belege den Arbeitsbereich bereits verlassen haben.

## Verwandt

- [Zugriff und Steuerberater](/de/settings/team) fuer das Einladen Ihres Steuerberaters und die Auswahl eines Kontakts
- [Rechnungen](/de/features/invoices) fuer das Versenden und Verwalten von Verkaufsrechnungen
- [Ausgaben](/de/features/expenses) fuer das Hinzufuegen von Belegen und Ausgaben
- [Angebote](/de/features/quotes) fuer das Erstellen und Umwandeln von Angeboten
