---
title: Bankfeed
---

# Bankfeed

Verbinden Sie Ihre Bankkonten mit MyCompanyDesk für automatische Transaktionsimporte, Zuordnung und Echtzeit-Benachrichtigungen. Der Bankfeed hält Ihre Buchhaltung aktuell, ohne dass Sie manuell eingreifen müssen.

## Ein Bankkonto verbinden

1. Gehen Sie zu **Einstellungen** und dann zu **Bankkonten**.
2. Klicken Sie auf **Bank verbinden** und wählen Sie Ihr Institut aus der Liste.
3. Schließen Sie die Autorisierung im Popup-Fenster ab.
4. Nach der Verbindung ruft MyCompanyDesk Transaktionen der letzten 90 Tage ab und hält den Feed durch regelmäßige automatische Synchronisationen aktuell.

Sie können mehrere Konten von verschiedenen Banken verbinden. Jedes Konto erscheint als eigene Verbindung mit eigenem Sync-Rhythmus und eigener Transaktionsliste.

## Transaktionen synchronisieren

MyCompanyDesk synchronisiert Transaktionen Ihrer verbundenen Konten automatisch nach einem festen Zeitplan. Sie können jederzeit auch eine manuelle Synchronisation über die Bankkonten-Seite auslösen. Neue Transaktionen werden mithilfe von Lieferantenregeln und KI-Zuordnung automatisch Ihren bestehenden Kunden, Rechnungen und Ausgaben zugeordnet. Zugeordnete Transaktionen fließen direkt in Ihre Buchhaltung ein; nicht zugeordnete erscheinen im Bankfeed zur manuellen Prüfung.

### Synchronisationsfehler

Schlägt eine Synchronisation fehl (zum Beispiel weil die Bank-Autorisierung abgelaufen oder die Verbindung unterbrochen ist), sendet MyCompanyDesk Ihnen eine E-Mail und eine In-App-Benachrichtigung mit dem Namen der Verbindung und einem Link zur Behebung. Sie können Push-Benachrichtigungen für Sync-Fehler auch unter den Benachrichtigungseinstellungen aktivieren.

## Benachrichtigungen

Der Bankfeed unterstützt vier Benachrichtigungseinstellungen, die Sie pro Workspace auf der Bankkonten-Seite konfigurieren können:

| Einstellung | Was sie bewirkt |
|---|---|
| **Sync-Fehler-Benachrichtigungen** | E-Mail und In-App-Benachrichtigung, wenn eine Bankverbindung nicht synchronisiert werden kann. |
| **Großbetrag-Benachrichtigungen** | Push- und In-App-Benachrichtigung, wenn eine Transaktion einen von Ihnen festgelegten Schwellenwert überschreitet (z. B. 5.000 €). |
| **Wöchentliche Zusammenfassung** | Eine E-Mail am Montagmorgen mit einer Übersicht der importierten Transaktionen, nicht zugeordneten Posten und den drei am häufigsten automatisch kategorisierten Lieferanten. |
| **Beleganfragen** | Ein täglicher automatischer Durchlauf, der Ihre Lieferanten per E-Mail um fehlende Belege für nicht zugeordnete ausgehende Transaktionen bittet. |

Alle Benachrichtigungen sind best-effort: Sie blockieren oder unterbrechen niemals eine Synchronisation. Sie können jede Benachrichtigung einzeln ein- oder ausschalten.

### Schwellenwert für Großbeträge

Legen Sie einen Euro-Betrag in den Bankkonten-Einstellungen fest. Jede eingehende oder ausgehende Transaktion, deren absoluter Betrag diesen Schwellenwert erreicht oder überschreitet, löst eine Push-Benachrichtigung und eine In-App-Warnung aus. Das ist hilfreich, um große Zahlungen oder unerwartete Abbuchungen schnell zu erkennen.

### Wöchentliche Zusammenfassung

Jeden Montag um 08:00 Uhr (lokale Workspace-Zeit) sendet MyCompanyDesk Ihnen eine kurze E-Mail mit der Bankfeed-Aktivität der letzten sieben Tage:

- Anzahl neu importierter Transaktionen.
- Anzahl nicht zugeordneter ausgehender Transaktionen, die noch auf einen Beleg warten.
- Die drei am häufigsten automatisch kategorisierten Lieferanten.

Gab es in dieser Woche keine Aktivität, wird die Zusammenfassung übersprungen. Die Zusammenfassung folgt Ihrer Workspace-Benachrichtigungseinstellung und wird nur gesendet, wenn `notify_weekly_summary` aktiviert ist.

### Beleganfragen an Lieferanten

Wenn diese Option aktiviert ist, führt MyCompanyDesk täglich um 06:00 Uhr Ortszeit einen Durchlauf durch. Für jeden Workspace mit eingeschaltetem `ask_receipt_email` sucht das System nach nicht zugeordneten ausgehenden Transaktionen der letzten 30 Tage, deren Gegenpartei mit einem Kunden mit hinterlegter E-Mail-Adresse übereinstimmt. Es sendet jedem Lieferanten eine zusammengefasste E-Mail mit allen Transaktionen, zu denen ein Beleg fehlt, und markiert diese Transaktionen, damit derselbe Lieferant nicht erneut angefragt wird.

## Lieferantenregeln verwalten

Mit Lieferantenregeln bringen Sie MyCompanyDesk bei, wie wiederkehrende Transaktionen kategorisiert werden sollen:

- Erstellen Sie eine Regel aus einer beliebigen Transaktion, indem Sie im Bankfeed auf **Regel erstellen** klicken.
- Regeln gleichen nach Gegenpartei, Beschreibung oder Betragsmustern ab.
- Zugeordnete Transaktionen werden automatisch mit dem richtigen Kunden, der richtigen Rechnung oder Ausgabe verknüpft.
- Die wöchentliche Zusammenfassung zeigt Ihre leistungsfähigsten Regeln.

Die von Ihnen erstellten Regeln gelten workspace-weit und für alle verbundenen Bankkonten.

## Fehlerbehebung

**Meine Bankverbindung zeigt einen Fehler an.** Öffnen Sie die Bankkonten-Einstellungen. Wenn Ihre Bank eine erneute Autorisierung verlangt, sehen Sie eine Aufforderung zur erneuten Verbindung. Sync-Fehler-Benachrichtigungen enthalten ebenfalls einen direkten Link dorthin.

**Eine Transaktion wurde nicht zugeordnet.** Prüfen Sie die Transaktion im Bankfeed unter dem Filter "Nicht zugeordnet". Sie können sie manuell zuordnen, einen neuen Kunden oder eine neue Ausgabe daraus erstellen oder eine Lieferantenregel anlegen, damit sie künftig automatisch zugeordnet wird.

**Ich erhalte keine Benachrichtigungen.** Überprüfen Sie die Benachrichtigungsschalter auf der Bankkonten-Einstellungsseite. Für Push-Benachrichtigungen stellen Sie sicher, dass Push in Ihrem Kontoprofil aktiviert ist. Für die wöchentliche Zusammenfassung muss `notify_weekly_summary` aktiviert sein und in dieser Woche tatsächlich Bankaktivität stattgefunden haben.
