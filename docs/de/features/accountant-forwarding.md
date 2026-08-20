---
title: Weiterleitung an Steuerberater
description: "Senden Sie Rechnungen und Ausgaben automatisch an das Programm Ihres Steuerberaters, etwa Exact, SnelStart, Twinfield oder Yuki, statt einzeln."
last_verified: 2026-08-19
---

# Weiterleitung an Steuerberater

Wenn Ihr Steuerberater in einem eigenen Paket arbeitet, etwa Exact, SnelStart, Twinfield oder Yuki, können Sie MyCompanyDesk Rechnungen und Ausgaben automatisch an ihn übermitteln lassen. So müssen Sie Unterlagen nicht mehr einzeln per E-Mail verschicken.

## Wo Sie es finden

Gehen Sie zu **Einstellungen** > **Zugriff und Steuerberater** (`/settings/team`) und öffnen Sie den Bereich **Steuerberater**. Unter der Kontaktliste finden Sie die Karte **Automatische Weiterleitung**.

## Was Sie einstellen können

Die Karte liest aus und schreibt auf `/api/team/accountant-delivery`. Jedes Arbeitsbereichsmitglied kann die Einstellungen sehen; nur Team-Admins können sie ändern.

| Einstellung | Optionen |
|---|---|
| **Empfänger** | Bestehenden Steuerberater-Kontakt wählen, oder keinen |
| **Verkaufsrechnungen** | Aus, bei Versand, oder bei Bezahlung |
| **Ausgaben** | Aus, oder beim Anlegen |
| **Wie häufig** | Direkt, täglich, wöchentlich (Montag), monatlich oder vierteljährlich |
| **Nur Ausgaben mit Beleg** | Ausgaben ohne Beleg zurückhalten |
| **Belege mitschicken** | Belegbilder als Anhang mitschicken |
| **Rechnungs-PDF mitschicken** | Die Rechnungs-PDF beifügen |
| **Angebote mitschicken** | Auch akzeptierte Angebote weiterleiten |
| **Automatische Weiterleitung aktiv** | Hauptschalter |

Der Standardrhythmus für die meisten Büros ist wöchentlich am Montag, weil eine gebundelte E-Mail einfacher zu verarbeiten ist als einzelne Nachrichten pro Beleg.

### Abzugsfähigkeit im Export

Die Datei `uitgaven.csv` in der weitergeleiteten Exportdatei enthält am Ende eine Spalte mit dem Abzugsprozentsatz der Kategorie. Damit wird die ältere Spalte "Abzugsfähig" mit Ja/Nein ersetzt: der Prozentsatz zeigt dem Steuerberater genau, welcher Teil der MwSt. abzugsfähig ist, und in derselben Zeile steht weiterhin der abzugsfähige MwSt.-Betrag, sodass Zeilendetails und MwSt.-Zusammenfassung übereinstimmen.

Die beigefügte `leesmij.txt` erklärt, dass dieser Prozentsatz nur einen Teil der Differenz erklärt zwischen der MwSt. auf dem Beleg und dem in der Voranmeldung zurückgeforderten Betrag. Weitere Faktoren wie umgekehrte Steuerschuld (Reverse-Charge), ausländische MwSt. oder private Nutzung können den abzugsfähigen Betrag ebenfalls ändern. Möchte der Steuerberater eine Zeile prüfen, öffnet er die Ausgabe in der App und sieht dort die MwSt.-Behandlung.

### Belegpflicht

Wenn **Nur Ausgaben mit Beleg** aktiv ist, werden Ausgaben ohne Beleg nicht weitergeleitet. Sie bleiben im Arbeitsbereich, und die Anzahl wird in der Weiterleitungs-E-Mail ausgewiesen, damit Sie wissen, was noch fehlt. Ihr Steuerberater braucht den Beleg, um die USt. zurückzufordern, sodass mit diesem Schalter keine unvollständigen Unterlagen den Arbeitsbereich verlassen.

## Berechtigung zum Ändern der Einstellungen

Nur Team-Admins können die Auswahlboxen, Kontrollkästchen und den Hauptschalter bearbeiten. Nicht-Admins sehen die aktuellen Einstellungen, können aber keine Änderungen speichern.

## Was weitergeleitet wird

Nur Belege, die für einen Steuerberater bereit sind, verlassen den Arbeitsbereich:

- Nicht vor dem Steuerberater verborgen.
- Nicht in Prüfung (Bank- oder Posteingangsposten, die Sie noch nicht bestätigt haben).
- Nicht im Papierkorb oder archiviert.
- Rechnungen müssen versandt sein; Entwürfe werden nicht weitergeleitet.
- Wenn die Belegpflicht aktiv ist, müssen Ausgaben einen Beleg haben.

Die Engine arbeitet mit einem Wasserzeichen (`last_delivered_at`), nicht mit einzelnen Status-Hooks, sodass kein Beleg verpasst wird, weil später ein neuer Zahlungsweg hinzukommt.

## Zustellungsprotokoll und Aktivität

Die Seite **Zugang und Steuerberater** führt ein Zustellungsprotokoll, das zeigt, was wann weitergeleitet wurde. Außerdem wird eine Aktivitätsübersicht des verknüpften Steuerberaters erfasst: was er in Ihrem Arbeitsbereich angesehen oder geändert hat. Beide Protokolle sind für Eigentümer und Admins sichtbar; der Steuerberater sieht das Zustellungsprotokoll, kann es aber nicht löschen.

## Manuelle Weiterleitung aus einem Beleg

Sie können auch eine einzelne Rechnung, Ausgabe oder ein Angebot direkt von der Detailseite an Ihren Steuerberater übermitteln. Suchen Sie die Schaltfläche **An Steuerberater senden** neben den E-Mail-Aktionen. Damit wird eine manuelle Zustellung im selben Protokoll erfasst, sodass Sie sie neben der automatischen Weiterleitung sehen. Auch fehlgeschlagene manuelle Sendungen werden protokolliert, damit Sie denselben Beleg nicht versehentlich zweimal senden.

## Gesendete Elemente

Manuelle Sendungen und andere Arbeitsbereichs-E-Mails erscheinen im Posteingang unter **Gesendet**. Sie sind unter der Steuerberater-Kategorie gruppiert, sodass Sie auf einen Blick erkennen, welche Belege den Arbeitsbereich bereits verlassen haben.

## Verwandt

- [Zugriff und Steuerberater](/de/settings/team) für das Einladen Ihres Steuerberaters und die Auswahl eines Kontakts
- [Rechnungen](/de/features/invoices) für das Versenden und Verwalten von Verkaufsrechnungen
- [Ausgaben](/de/features/expenses) für das Hinzufügen von Belegen und Ausgaben
- [Angebote](/de/features/quotes) für das Erstellen und Umwandeln von Angeboten
