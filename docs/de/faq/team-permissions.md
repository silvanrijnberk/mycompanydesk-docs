---
title: Teamberechtigungen
description: "Mit Seitenberechtigungen legen Sie pro Seite fest, was ein Teammitglied oder Ihr Buchhalter darf: Lesen, Schreiben und Erstellen."
last_verified: 2026-10-13
chatbot:
  triggers: ["team permissions", "manage team permissions", "page permissions", "read write create", "permission settings", "access control", "granular permissions", "read only", "write access", "create access", "pagina rechten", "teamrechten", "lezen schrijven", "toegang instellen", "seitenberechtigungen", "teamberechtigungen", "lese schreibzugriff", "permissions page", "permissions de l'equipe", "droits acces"]
  actions:
    - { label: "Open access settings", to: "/settings/toegang" }
  follow_up: ["How do I invite a new team member?", "How do I manage accountant access?", "How do I revoke someone's access?"]
---

Mit Seitenberechtigungen legen Sie pro Seite der App fest, was ein Teammitglied oder Ihr Buchhalter darf:

| Berechtigung | Erlaubt |
|---|---|
| **Lesen** | Die Seite und die Einträge darauf ansehen |
| **Schreiben** | Bestehende Einträge bearbeiten |
| **Erstellen** | Neue Einträge anlegen |

So richten Sie die Berechtigungen ein:

1. Für ein Teammitglied: Gehen Sie zu Einstellungen › **Personen mit Zugriff**, öffnen Sie das Menü in der Zeile dieser Person und wählen Sie **Zugang verwalten**. Für Ihren Buchhalter: Gehen Sie zu Einstellungen › **Ihr Buchhalter** und klicken Sie in der Zeile Ihres Buchhalters auf die Schaltfläche für den Seitenzugriff (sie ist auf Niederländisch beschriftet)
2. Schalten Sie Lesen, Schreiben und Erstellen pro Seite ein oder aus
3. Klicken Sie auf **Speichern**

Im selben Fenster finden Sie auch Schnellauswahlen:

- **Vollzugriff gewähren** schaltet Lesen, Schreiben und Erstellen für jede Seite ein.
- **Nur-Lesen-Zugriff** schaltet Lesen ein und Schreiben und Erstellen für jede Seite aus.
- **Alle widerrufen** schaltet alles aus.

Lesen muss aktiv sein, bevor Schreiben oder Erstellen funktionieren. Schalten Sie Lesen aus, werden Schreiben und Erstellen für diese Seite ebenfalls deaktiviert.

Die Seiten im Fenster sind Dashboard, Aufgaben, Posteingang, Rechnungen, Ausgaben, Kunden, Projekte, Objekte / Vermögenswerte, Verträge, Dokumente, Newsletter, Berichte, Zeiterfassung, Steuern (MwSt.) und Einstellungen. Zahlungen haben keine eigene Zeile: Sie gehören zu **Rechnungen**. Die Fahrten hinter der Kilometerpauschale liegen in der Zeiterfassung und verlangen Lesen auf dieser Seite. Gespeicherte Routen und die Fahrtvorschläge bei einer ÖPNV-Ausgabe öffnen sich mit Lesen auf Zeiterfassung oder Ausgaben.

Dasselbe Recht schützt die Stellen in der App, an denen Sie anderswo eine Rechnung oder ein Angebot erstellen, etwa die Aktion **Rechnung erstellen** bei einer Stundenzeile, in einem Termin, bei Kunden in der Nähe oder auf einer Projekt- oder Vertragsseite. Diese verlangen das Recht auf **Rechnungen**, und ohne dieses Recht bleibt die Aktion verborgen, statt in einer Fehlermeldung zu enden. Automatisches Fakturieren einschalten verlangt Schreiben auf Rechnungen, ebenso das Starten eines Lastschriftmandats. Listen, die von Lesen abhängen, verhalten sich genauso: Die Transaktionsliste auf der MwSt.-Seite überspringt Rechnungs- und Ausgabenzeilen, für die das Teammitglied kein Lesen hat, das Dokumentenarchiv zeigt Belege, Rechnungen und Mailanhänge nur denen, die das passende Recht haben, und abgeschirmte Unterlagen bleiben für den Buchhalter aus dem Archiv heraus.

Erstellen gilt nur für neue Einträge. Wer Erstellen, aber kein Schreiben hat, kann neue Einträge anlegen, aber keine bestehenden bearbeiten, keinen Status ändern, keine Massenaktionen nutzen und keine gescannten Belege als neue Ausgaben bestätigen.

Seiten ohne Lesen bleiben für das Teammitglied unerreichbar: Die Buchhaltung zeigt nur die Tabs, die das Mitglied öffnen darf, und ein direkter Link auf eine Seite ohne Zugriff zeigt einen kurzen Hinweis, dass das Mitglied auf diesen Teil der App keinen Zugriff hat. Das Dashboard schweigt dazu, weil jedes Mitglied nach der Anmeldung dort landet.
