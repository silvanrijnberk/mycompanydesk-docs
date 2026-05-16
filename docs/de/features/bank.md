---
title: Bankfeed
---

# Bankfeed

Verbinden Sie Ihre Bankkonten mit MyCompanyDesk für automatische Transaktionsimporte, Zuordnung und Echtzeit-Benachrichtigungen. Der Bankfeed hält Ihre Buchhaltung aktuell, ohne dass Sie manuell eingreifen müssen.

## Ein Bankkonto verbinden

1. Gehen Sie zu **Arbeitsbereich** → **Finanzen** → **Bankkonten**.
2. Klicken Sie auf **Bank verbinden** und wählen Sie Ihr Institut aus der Liste.
3. Schließen Sie die Autorisierung im Popup-Fenster ab.
4. Nach der Verbindung ruft MyCompanyDesk Transaktionen der letzten 90 Tage ab und hält den Feed durch regelmäßige automatische Synchronisationen aktuell.

Sie können mehrere Konten von verschiedenen Banken verbinden. Jedes Konto erscheint als eigene Verbindung mit eigenem Sync-Rhythmus und eigener Transaktionsliste.

## Transaktionen synchronisieren

MyCompanyDesk synchronisiert Transaktionen Ihrer verbundenen Konten automatisch nach einem festen Zeitplan. Sie können jederzeit auch eine manuelle Synchronisation über die Bankkonten-Seite auslösen. Neue Transaktionen werden mithilfe von Lieferantenregeln und KI-Zuordnung automatisch Ihren bestehenden Kunden, Rechnungen und Ausgaben zugeordnet. Zugeordnete Transaktionen fließen direkt in Ihre Buchhaltung ein; nicht zugeordnete erscheinen im Bankfeed zur manuellen Prüfung.

### Automatische Ausgabenerstellung

Wenn eine Banktransaktion kategorisiert ist (durch eine Lieferantenregel, eine Standardkategorie oder die KI-Klassifikation), erstellt MyCompanyDesk automatisch eine Ausgabe in Ihrer Buchhaltung. Die Ausgabe wird gefüllt mit:

- Dem Namen der Gegenpartei als Lieferant.
- Dem absoluten Betrag als Bruttokosten.
- Dem Standard-USt.-Satz der Kategorie (oder dem von der KI vorgeschlagenen Satz, falls verfügbar).
- Dem Kategorie-Schlüssel, der den tatsächlichen Ausgabenkategorien Ihres Workspaces entspricht.
- Dem Buchungsdatum der Transaktion als Ausgabendatum.

Die Transaktion wird danach als zugeordnet markiert, sodass sie bei der nächsten Synchronisation kein Duplikat erzeugt. Die neue Ausgabe erscheint sofort in Ihrer Ausgabenliste und fließt in Ihre Berichte und USt.-Übersichten ein.

Die Ausgabenerstellung erfolgt in zwei Durchläufen: zuerst nach Anwendung von Lieferantenregeln und Standardkategorien (synchron, während der Synchronisation); danach nach Abschluss der KI-Klassifikation (asynchron). In beiden Fällen verwendet die erstellte Ausgabe die tatsächlichen Ausgabenkategorien Ihres Workspaces und deren Standard-USt.-Behandlung, sodass die Zahlen mit Ihren manuellen Einträgen konsistent bleiben.

Nur ausgehende Transaktionen (Betrag unter null) werden in Ausgaben umgewandelt. Eingehende Zahlungen werden nicht als Ausgabe erstellt. Wenn Ihr Workspace noch keine Ausgabenkategorien konfiguriert hat, wird dieser Schritt übersprungen und Transaktionen bleiben zur manuellen Prüfung.

### Automatisch importierte Ausgaben prüfen

Wenn aus Banktransaktionen Entwurfsausgaben erstellt wurden, landen diese zunächst im Prüf-Posteingang. Gehen Sie zu **Arbeitsbereich** → **Finanzen** → **Bankkonten** und öffnen Sie den Tab **Prüfen**. Sie sehen eine Liste mit Entwurfsausgaben, jeweils mit Lieferant, Betrag, Kategorievorschlag und der Quelle dieses Vorschlags (Lieferantenregel, Standardkategorie, KI-Vorschlag oder Bankfeed).

Für jede Ausgabe können Sie:

- **Bestätigen**: Die Ausgabe wird direkt gebucht. Sie erscheint in Ihrer aktiven Ausgabenliste und fließt in Berichte und USt.-Übersichten ein.
- **Bearbeiten**: Öffnen Sie das Ausgabenformular, um Kategorie, USt.-Behandlung, Beschreibung oder Betrag vor dem Buchen anzupassen.
- **Ablehnen**: Der Entwurf wird verworfen. Die Transaktion kehrt in die nicht-zugeordnete Warteschlange im Bankfeed zurück.

Der Prüfschritt stellt sicher, dass Sie die Kontrolle behalten: Keine Ausgabe gelangt in Ihre Buchhaltung, ohne dass jemand sie geprüft hat. Bestätigte Ausgaben zeigen kurz eine Meldung mit dem Lieferantennamen; abgelehnte zeigen die Ablehnung. Schlägt eine Aktion fehl, erscheint eine Meldung und Sie können es erneut versuchen.

Jede Ausgabenkarte zeigt ein Quell-Label, damit Sie wissen, warum MyCompanyDesk diesen bestimmten Vorschlag gemacht hat. Die möglichen Quellen sind `vendor_rule`, `workspace_default`, `ai_flag` und `feed`, dieselbe Kategorisierungspipeline wie oben beschrieben.

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

**Eine Transaktion wurde nicht zugeordnet.** Prüfen Sie die Transaktion im Bankfeed unter dem Filter „Nicht zugeordnet". Sie können sie manuell zuordnen, einen neuen Kunden oder eine neue Ausgabe daraus erstellen oder eine Lieferantenregel anlegen, damit sie künftig automatisch zugeordnet wird.

**Ich erhalte keine Benachrichtigungen.** Überprüfen Sie die Benachrichtigungsschalter auf der Bankkonten-Einstellungsseite. Für Push-Benachrichtigungen stellen Sie sicher, dass Push in Ihrem Kontoprofil aktiviert ist. Für die wöchentliche Zusammenfassung muss `notify_weekly_summary` aktiviert sein und in dieser Woche tatsächlich Bankaktivität stattgefunden haben.
