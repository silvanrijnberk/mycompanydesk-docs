---
title: Verträge
description: "Verwalten Sie Dienstleistungs- und Mietverträge, lassen Sie sie online unterschreiben und planmäßig Rechnungen erzeugen (Office)."
---

# Verträge

Verwalten Sie laufende Vereinbarungen mit Kunden, etwa Dienstleistungs- und Mietverträge, mit einem festen Abrechnungsplan.

## Überblick

Ein Vertrag hält eine laufende Vereinbarung mit einem Kunden fest, zum Beispiel einen monatlichen Reinigungsauftrag, einen Mietvertrag oder ein Wartungsabonnement. Ein Vertrag kann nach einem festen Plan selbst Rechnungen erzeugen.

::: info
Verträge gehören zu Office und sind ein Modul, das Sie selbst einschalten. Sehen Sie **Verträge** nicht in der Navigation, schalten Sie es unter **Einstellungen › Module** ein (die Zeile **Verträge**).
:::

## Einen Vertrag erstellen

1. Öffnen Sie **Verträge** und klicken Sie auf **Erstellen**
2. Füllen Sie aus:
   - **Gegenstand**: Dienstleistung, Vermietung oder Zusammenarbeit
   - **Kunde**: der Kunde, mit dem Sie die Vereinbarung treffen
   - **Vertragsname**: ein klarer Name (zum Beispiel „Monatliche Reinigung“)
   - **Wie wurde der Preis vereinbart?**: siehe [Preisbasis](#preisbasis) unten
   - **Betrag (netto)** und **MwSt.-Satz**
   - **Wiederholung**: wöchentlich, monatlich, vierteljährlich oder jährlich
   - **Startdatum**, bei Bedarf ein **Enddatum**, und das Datum der **Ersten Rechnung**
   - **Welchen Zeitraum deckt die Rechnung ab?**: siehe [Rechnungszeitraum](#rechnungszeitraum)
3. Klicken Sie auf **Speichern**

::: tip Mehr Optionen
Das Formular hält optionale Angaben ordentlich verstaut: Unter **Mehr Optionen** finden Sie weitere Felder, etwa einen Servicezuschlag mit eigenem Betrag und Steuersatz. Für den Vertrag selbst brauchen Sie sie nicht, aber Sie klappen sie auf, wenn Sie sie brauchen.
:::

## Preisbasis

Jeder Vertrag beantwortet die Frage **Wie wurde der Preis vereinbart?**:

- **Fester Betrag**: jede Periode derselbe Betrag, etwa Miete oder eine feste Monatsgebühr.
- **Stundensatz**: Sie rechnen die Stunden ab, die auf Projekten zu diesem Vertrag erfasst werden.
- **Tagessatz**: Sie rechnen die gearbeiteten Tage auf Projekten zu diesem Vertrag ab.
- **Fester Projektpreis**: ein vereinbarter Gesamtbetrag für den ganzen Auftrag, der einmal abgerechnet wird.

Bei Stunden- und Tagessatz zeigt die Vertragsseite die Karte **Arbeit unter diesem Vertrag** mit vereinbarten, abgerechneten und erfassten Summen sowie den verknüpften Projekten. Ein Tag zählt als 8 Stunden.

Ein fester Projektpreis wiederholt sich nicht: Der Vertrag erzeugt eine Rechnung und endet dann.

## Vertragsstatus

| Status | Bedeutung |
| --- | --- |
| **Aktiv** | Läuft und erzeugt Rechnungen |
| **Pausiert** | Erzeugt keine Rechnungen, bis Sie ihn wieder aktivieren |
| **Abgelaufen** | Das Enddatum ist vorbei und die letzte Periode ist abgerechnet |
| **Beendet** | Sie haben die Vereinbarung mit **Vertrag beenden** beendet |

Rechnungen, die ein Vertrag erzeugt, entstehen immer im Arbeitsbereich, zu dem der Vertrag gehört.

## Einen Vertrag pausieren, auslaufen lassen oder beenden

Einen laufenden Vertrag stoppen Sie auf mehrere Arten:

- **Pausieren**: Der Vertrag bleibt bestehen, erzeugt aber keine Rechnungen mehr. Mit **Aktivieren** schalten Sie ihn jederzeit wieder ein. Perioden, die ganz in die Pause fielen, werden nicht nachträglich abgerechnet.
- **Ein Enddatum setzen**: Der Vertrag läuft bis zu diesem Datum und wird danach automatisch **Abgelaufen**. Für eine Periode, die nach dem Enddatum endet, entsteht keine Rechnung.
- **Vertrag beenden**: beendet die Vereinbarung endgültig. Einen beendeten Vertrag können Sie kein zweites Mal beenden.

Bearbeiten Sie einen aktiven Vertrag und fügen ein Enddatum hinzu, warnt die App, dass die Rechnungen danach aufhören. Entfernen Sie das Enddatum, bevor es erreicht ist, rechnet der Vertrag normal weiter ab.

## Enddatum

Ein **Enddatum** legen Sie beim Erstellen oder Bearbeiten eines Vertrags fest. Bleibt es leer, läuft der Vertrag unbefristet.

Ist ein Enddatum gesetzt:

- zeigt die Vertragsseite dieses Enddatum, oder **Unbefristet**, wenn keines gesetzt ist
- entsteht keine Rechnung für eine Periode, die nach dem Enddatum endet
- zeigen die Vertragsliste und der Vertrag die Markierung **Läuft bald ab**, wenn das Enddatum innerhalb von 30 Tagen liegt, und mit **Enddatum verlängern** verschieben Sie es
- wechselt der Status automatisch auf **Abgelaufen**, sobald das Enddatum vorbei und die letzte Periode abgerechnet ist

## Automatisch abrechnen

Ein aktiver Vertrag mit Wiederholung erzeugt in jeder Periode von selbst eine Rechnung. Das System:

1. erstellt eine Rechnung auf Grundlage der Vertragsbedingungen
2. setzt den richtigen Kunden, den Betrag und die Beschreibung ein
3. nutzt dieselbe automatische Rechnungsnummerierung

Auf dem Vertrag beantwortet die Karte **Automatisch abrechnen** die Frage **Was passiert mit der Rechnung?**:

- **Entwurf**: Die Rechnung bleibt als Entwurf bestehen. Sie prüfen und versenden sie selbst.
- **Senden**: Die Rechnung wird automatisch an den Kunden gemailt.
- **Einziehen**: Die Rechnung wird automatisch über das gespeicherte Zahlungsmandat eingezogen (siehe [Automatischer Einzug](#automatischer-einzug)).

Nur ein Mietvertrag erzeugt Rechnungen, die als Mietrechnung markiert sind. Verträge für Dienstleistung und Zusammenarbeit erzeugen normale Rechnungen. Das bestimmt die Markierung auf der Rechnung, die E-Mail-Vorlage beim Versand und ob der Umsatz einem verknüpften Objekt zugerechnet wird.

Arbeitet ein Vertrag mit Stundensatz, Tagessatz oder festem Projektpreis, bekommen Sie außerdem eine Warnung, wenn das Budget des Vertrags überschritten wird oder erfasste Stunden keinen Preis bekommen können, weil kein Satz hinterlegt ist.

### Benachrichtigungen bei Versand und automatischer Abrechnung

Kann eine erzeugte Rechnung nicht an den Kunden gemailt werden, legt die App die Benachrichtigung **Rechnung ist nicht beim Kunden angekommen** an. Das passiert, wenn der Kunde keine E-Mail-Adresse hat, Ihre Absenderadresse nicht eingerichtet ist, die Adresse nach einem Bounce oder einer Spam-Meldung gesperrt ist oder der Versand aus einem anderen Grund scheitert. Die Benachrichtigung öffnet die Rechnung, damit Sie die Ursache beheben und erneut senden.

Ist Ihr Arbeitsbereich nicht mehr auf Office (etwa nach dem Ende der Testphase), legt die App die Benachrichtigung **Automatisches Fakturieren pausiert** an, sobald Vertragsrechnungen bereitstehen, die nicht versendet werden. Sie nennt, wie viele Vertragsrechnungen warten und seit wann, und verweist auf die Abonnementseite.

## Rechnungszeitraum

Bei **Welchen Zeitraum deckt die Rechnung ab?** wählen Sie, welche Periode eine Vertragsrechnung abrechnet, gerechnet ab dem Rechnungsdatum:

- **Den des Rechnungsdatums**: die Periode, in die das Rechnungsdatum fällt (Vorgabe)
- **Den vorherigen (nachträglich)**: die Periode vor dem Rechnungsdatum
- **Den nächsten (im Voraus)**: die Periode nach dem Rechnungsdatum

Das Formular zeigt ein Beispiel der Zeile, wie sie auf der Rechnung erscheint. Rechnet ein Vertrag nachträglich ab, entsteht nie eine Rechnung für eine Periode vor dem Startdatum, und die Periode, in die das Enddatum fällt, bekommt danach trotzdem noch ihre Rechnung.

## Automatischer Einzug

Bei einem wiederkehrenden Vertrag können Sie den Betrag automatisch über das Zahlungsmandat des Kunden einziehen, statt einen Zahlungslink zu mailen. Dafür brauchen Sie einen verbundenen Zahlungsanbieter (Mollie oder Stripe, unter **Einstellungen › Zahlung**) und ein gültiges Mandat des Kunden.

### Automatischen Einzug einrichten

Klicken Sie auf der Vertragsseite auf **Automatischen Einzug einrichten** und lassen Sie den Kunden das Mandat bestätigen. Ist das Mandat gültig, wählen Sie **Einziehen** bei **Automatisch abrechnen**. Das System zieht danach jede erzeugte Rechnung von selbst ein.

### Fehlgeschlagener Einzug

Schlägt eine Abbuchung fehl oder ist das Mandat nicht mehr gültig, bekommen Sie die Benachrichtigung **Automatische Lastschrift fehlgeschlagen**. Sie führt direkt zum Vertrag, damit Sie das Mandat neu einrichten oder mit dem Kunden Kontakt aufnehmen.

## Preisanpassung

Wiederkehrende Verträge passen Sie an die Inflation oder eine vereinbarte jährliche Erhöhung an. Wählen Sie auf der Vertragsliste **Preise erhöhen** im Menü oben und sehen Sie, was eine prozentuale Erhöhung bei den infrage kommenden Verträgen bewirkt. Infrage kommt ein Vertrag erst, wenn er mindestens ein Jahr läuft oder seine letzte Erhöhung ein Jahr zurückliegt.

Die Vorschau zeigt pro Vertrag:

- den aktuellen Satz oder Betrag pro Periode
- den neuen Satz oder Betrag nach der Erhöhung
- das Datum der letzten Anpassung

Sie wenden die Erhöhung pro Vertrag an, nie für alle auf einmal, damit Sie Kunden auslassen können, mit denen Sie noch nicht gesprochen haben. Danach gelten die neuen Bedingungen im Vertrag, und folgende Rechnungen zeigen den neuen Betrag.

::: tip Erst abstimmen
Besprechen Sie eine Preiserhöhung zuerst mit Ihrem Kunden. Die Vorschau ändert nichts, bis Sie bei einem Vertrag auf **Anwenden** klicken.
:::

### Automatische jährliche Erhöhung

Ein Vertrag, der laut Vereinbarung jedes Jahr erhöht wird, kann diese Erhöhung selbst ausführen. Öffnen Sie den Vertrag und richten Sie die **Jährliche Erhöhung** ein:

- **Erhöhen um**: **VPI (CBS)**, den niederländischen Verbraucherpreisindex, oder einen **Festen Prozentsatz**, den Sie selbst wählen.
- **Jedes Jahr zum**: Tag und Monat, an dem die Erhöhung jedes Jahr wirksam wird.
- **Kunden per E-Mail informieren**: Der Kunde oder Mieter bekommt vorab eine E-Mail von Ihrer eigenen Adresse; Sie wählen, wie viele Monate im Voraus.

Die Bedingung der App: Es funktioniert bei einem laufenden Vertrag mit festem Betrag pro Periode. Jedes Jahr, etwa eine Woche bevor die Ankündigung hinausgeht, bekommen Sie eine Benachrichtigung mit der geplanten Erhöhung, und mit **Dieses Jahr überspringen** lassen Sie dieses Jahr mit einem Klick aus. Tun Sie nichts, laufen beide Schritte von selbst: Zuerst bekommt der Kunde die Ankündigung, und erst nachdem diese E-Mail hinaus ist, ändert sich der Preis. Rechnungen für Perioden vor dem Stichtag behalten den alten Preis; Perioden ab dem Stichtag nutzen den neuen. Lässt sich die Ankündigung nicht vor dem Stichtag versenden, findet die Erhöhung nicht statt, und eine Benachrichtigung sagt Ihnen, warum.

Eine manuelle Erhöhung mit Stichtag in der Zukunft, angewendet über **Preise erhöhen** auf der Vertragsliste, folgt demselben Ablauf, aber ohne Ankündigungs-E-Mail.

## Mit Objekten verknüpfen

Verträge verknüpfen Sie mit [Objekten](/de/features/objects) für die Verwaltung von Vermietungen:

- einen Vertrag einer Immobilie, einem Fahrzeug oder einem Gerät zuordnen
- sehen, welche Objekte vermietet sind und an wen
- den Vertragsverlauf pro Objekt ansehen

## Mit Projekten verknüpfen

Verträge verknüpfen Sie auch mit [Projekten](/de/features/projects). Wählen Sie beim Erstellen oder Bearbeiten eines Projekts den Vertrag im Feld **Vertrag**. Stunden, die Sie auf diesem Projekt erfassen, kommen dann auf die Rechnung des Vertrags. Archivierte Verträge stehen ebenfalls in der Liste, mit **(archiviert)** hinter dem Namen, damit Sie eine bestehende Verknüpfung behalten oder bei Bedarf eine ältere Vereinbarung wählen.

Praktisch bei Vereinbarungen nach Stunden- oder Tagessatz: Der Vertrag legt die Preisbasis fest, die verknüpften Projekte liefern die Stunden.

Sie lösen ein Projekt jederzeit wieder; Stunden, die schon auf einer Rechnung stehen, bleiben dort.

## Die Vertragsliste

Über der Liste stehen die Reiter **Alle**, **Wartet auf Unterschrift**, **Entwurf** und **Laufend**. Oben sehen Sie den **Monatlichen Umsatz** Ihrer wiederkehrenden Verträge, die Arbeit **Auf Stundenbasis**, die noch nicht abgerechnet ist, und die **Nächste Rechnung**. Mit dem Filterbereich grenzen Sie die Liste nach Status (aktiv, pausiert, abgelaufen), Wiederholung und Signaturstatus ein.

## Sammelaktionen

- **Archivieren**: Verträge ins Archiv verschieben
- **Löschen**: Verträge in den Papierkorb verschieben

Im Archiv wählen Sie **Wiederherstellen (aktiv)** oder **In Papierkorb verschieben**; im Papierkorb **Wiederherstellen (Archiv)** oder **Endgültig löschen**.

## Unterschreiben

Verträge lassen Sie digital unterschreiben. Sie fügen Parteien im Vertragsformular hinzu und versenden den Vertrag mit **Zur Unterzeichnung senden**; jede Partei bekommt einen Unterschriftslink per E-Mail.

Ist ein Vertrag unterschrieben, zeigt die Vertragsseite eine Signaturkarte mit:

- dem Status jeder Partei (eingeladen, angesehen, unterschrieben oder abgelaufen)
- einer Schaltfläche **Ansehen**, die eine Vorschau des unterschriebenen Dokuments öffnet
- einer Download-Schaltfläche, um das PDF zu speichern

Die Vorschauseite hat eine Leiste zum Drucken und Herunterladen und zeigt den unterschriebenen Vertrag direkt im Browser. Das unterschriebene PDF und das Prüf-PDF enthalten beide den vollständigen Vertragstext, jede heruntergeladene Kopie steht also für sich.

### Ihr Branding auf der Unterschriftsseite

Öffnet jemand einen Vertrag zum Unterschreiben, trägt die Unterschriftsseite das Branding des Absenders:

- Das Logo des Absenders steht oben auf der Seite
- Die Seite nutzt die Akzentfarbe des Absenders
- Text und Schaltflächen passen sich automatisch an, damit sie auf dieser Farbe lesbar bleiben

So wirkt die Unterschriftsseite, als käme sie von dem Unternehmen, das eingeladen hat, und nicht wie eine allgemeine Seite eines Drittanbieters.

### Signaturstatus in der Vertragsliste

Die Vertragsliste hat eine Spalte **Signatur** mit dem Status jedes Vertrags, der digital unterschrieben wird. Die Status erscheinen als farbige Markierungen: **Nicht gesendet**, **Ausstehend**, **Teilweise signiert** und **Signiert**.

Mit dem Signaturfilter im Filterbereich grenzen Sie die Liste nach Signaturstatus ein oder zeigen nur Verträge ohne digitale Unterschrift (**Keine E-Signatur**). Verträge ohne Unterschriftsparteien, etwa ältere Verträge, zeigen einen Strich in der Spalte Signatur und fallen unter diesen Filter.

### SMS-Verifizierung

Pro Partei schalten Sie **SMS-Verifizierung erforderlich** ein. Diese Person muss dann einen Code per SMS bestätigen, bevor die Unterschrift gültig ist; die Telefonnummer gibt sie beim Unterschreiben ein.

- **Code senden**: Nach Eingabe der Mobilnummer bekommt die unterschreibende Person einen 6-stelligen Code
- **Code prüfen**: Sie gibt den Code ein und weist so nach, dass die Nummer ihr gehört
- **Verifiziert-Markierung**: Danach erscheint eine Markierung mit den letzten vier Ziffern der Nummer

Bei einem falschen Code kann sie einen neuen anfordern. Die SMS-Bestätigung steht auf dem unterschriebenen PDF.

## Versionen von Vorlagen

Vertragsvorlagen finden Sie unter **Vertragsvorlagen**, die Sie über das Menü oben in der Vertragsliste öffnen. Einer Vorlage können Sie Versionen geben, um festzuhalten, wie sich der Text verändert hat.

### Eine Version veröffentlichen

1. Öffnen Sie **Vertragsvorlagen**
2. Suchen Sie Ihre Vorlage und klicken Sie auf **Versionen**
3. Füllen Sie bei **Aktuellen Entwurf als neue Version veröffentlichen** aus:
   - **Bezeichnung**: ein kurzer Name für die Version (zum Beispiel „v2“). Bleibt das Feld leer, vergibt die App selbst die nächste Nummer.
   - **Änderungsnotiz**: kurz, was sich in dieser Version geändert hat
4. Klicken Sie auf **Veröffentlichen**

### Den Versionsverlauf ansehen

Der Versionsverlauf einer Vorlage zeigt:

- die Bezeichnung der Version (zum Beispiel „v1“, „v2“)
- die Änderungsnotiz und das Veröffentlichungsdatum
- die Markierung **Aktuell** bei der zuletzt veröffentlichten Version
- die Markierung **Archiviert** bei allen früheren Versionen

### Was Versionen mit Verträgen machen

Eine Version ist ein Name und eine Notiz zum aktuellen Text, keine eigene Kopie: Neue Verträge nutzen immer den neuesten Vorlagentext, auch wenn Sie nach dem Veröffentlichen weiter bearbeiten. Bereits erstellte Verträge behalten ihren eigenen, festgehaltenen Text und ändern sich nie mit der Vorlage. Sie können Vorlagen also bedenkenlos überarbeiten, ohne bestehende Verträge zu berühren.

## Tipps

- Nutzen Sie Verträge neben [wiederkehrenden Rechnungen](/de/features/recurring-invoices) für verschiedene Arten der Abrechnung
- Verknüpfen Sie Verträge mit Objekten für eine vollständige Vermietungsverwaltung
- Setzen Sie ein Enddatum, dann sehen Sie rechtzeitig, dass ein Vertrag ausläuft; nach dem Enddatum läuft er von selbst ab
- Pausieren Sie einen Vertrag, statt ein Enddatum zu setzen, wenn Sie später weiter abrechnen möchten
- Filtern Sie nach Signaturstatus, um zu sehen, welche Verträge noch eine Unterschrift brauchen
- Fügen Sie beim Erstellen eines Vertrags Unterschriftsparteien hinzu, um digital unterschreiben zu lassen
