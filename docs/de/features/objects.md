---
title: "Objekte & Vermögenswerte"
---

# Objekte & Vermögenswerte

Verfolgen Sie Mietobjekte, Fahrzeuge, Ausstattung und andere Geschäftsvermögenswerte mit vollständigem Lebenszyklus-Management.

::: info
Das Objektmodul (Vastgoed) ist ein Altmodul. Es wird für Arbeitsbereiche, die es bereits nutzen, weiterhin vollständig unterstützt, kann in neuen Arbeitsbereichen aber nicht mehr eingeschaltet werden. Wenn Ihr Arbeitsbereich es hat, finden Sie den Schalter unter **Einstellungen > Onderdelen**.
:::

## Übersicht

Das Objektmodul ist für Unternehmen konzipiert, die physische Vermögenswerte verwalten, insbesondere Vermietungsunternehmen, Immobilienverwalter und Geräteverleihdienste. Jedes Objekt repräsentiert einen Vermögenswert, den Sie besitzen oder verwalten.

## Objekttypen

| Typ | Anwendungsfall |
|---|---|
| **Immobilie / Garage** | Häuser, Garagen, Lagerboxen |
| **Wohnung** | Mietwohnungen |
| **Büro** | Büroflächen |
| **Einzelhandel** | Läden und Gewerbeflächen |
| **Fahrzeug** | PKW, LKW, Transporter, Baufahrzeuge |
| **Maschine** | Industrieausrüstung, Generatoren |
| **Ausstattung** | Werkzeuge und Geräte |
| **Möbel** | Möbel, die Sie vermieten |
| **Elektronik** | Computer, AV-Ausrüstung |
| **Sonstiges** | Jeder andere Vermögenswerttyp |

## Objektstatus

| Status | Beschreibung |
|---|---|
| **Aktiv** | In Nutzung |
| **Verfügbar** | Bereit zur Vermietung oder Nutzung |
| **Belegt** | Derzeit an einen Kunden vermietet oder von ihm genutzt |
| **Wartung** | Vorübergehend außer Betrieb |
| **Inaktiv** | Nicht verfügbar |
| **Verkauft** | Nicht mehr in Ihrem Besitz; bleibt für die Unterlagen erhalten |
| **Ausgemustert** | Abgeschrieben oder verschrottet |

Die Liste bietet außerdem einen **Vermietet**-Filter, der alles anzeigt, was derzeit belegt ist.

## Objekt erstellen

1. Gehen Sie zu **Objekte > Neues Objekt**
2. Füllen Sie aus:
   - **Name**: Eine eindeutige Bezeichnung (z. B. „Wohnung 3B" oder „Bagger CAT 320")
   - **Typ**: Einer der zehn oben genannten Typen
   - **Status**: Wo das Objekt in seinem Lebenszyklus steht
   - **Referenz**: Ihre eigene Referenz oder Ihr eigener Code
   - **Standardmietpreis**: Die Standardmiete, pro Woche, Monat oder Jahr, mit oder ohne USt.
   - **Beschreibung** und **Adresse**: Details zum Vermögenswert
3. Klicken Sie auf **Speichern**

## Objektdetailseite

Die Detailseite zeigt:

- Vermögenswertinformationen und Typ
- Aktueller Status
- **Gesamtumsatz**: Umsatz aus bezahlten Rechnungen für dieses Objekt
- **Aktive Verträge**: Anzahl der derzeit aktiven Verträge zu diesem Objekt
- **WOZ-Verlauf** (bei Immobilien): jährliche WOZ-Werte, die für die Box-3-Berechnung verwendet werden
- Verknüpfte Verträge
- Mietverlauf
- Zugehörige Rechnungen

### Vertragszusammenfassung

Oberhalb der Vertragsliste gibt eine Zusammenfassungszeile einen schnellen Überblick über den Vertragszustand des Objekts:

- **Verträge gesamt**: mit diesem Objekt verknüpft
- **Signierte Verträge**: wie viele vollständig unterzeichnet sind
- **Monatlich aktiv**: kombinierter monatlicher Wert aller aktiven Verträge, normalisiert aus Verträgen mit unterschiedlicher Frequenz (wöchentlich, vierteljährlich, jährlich)

### WOZ-Verlauf (Immobilienobjekte)

Bei Objekten des Typs **Immobilie** enthält die Detailseite einen Abschnitt zum WOZ-Verlauf. WOZ-Werte (Waardering Onroerende Zaken) sind die von der Gemeinde festgesetzten Immobilienwerte, die in der niederländischen Box-3-Steuerberechnung verwendet werden.

- **Sehen** Sie jährliche WOZ-Werte pro Jahr ein.
- **Fügen Sie** neue Werte hinzu, indem Sie das Jahr und den von der Gemeinde festgesetzten WOZ-Wert eingeben.
- Box 3 verwendet den WOZ-Wert mit Stichtag 1. Januar. Geben Sie den Wert ein, der zu Beginn des Steuerjahres gilt.
- Wurden noch keine Werte eingetragen, zeigt der Abschnitt einen leeren Zustand mit der Aufforderung, den ersten hinzuzufügen.

#### Kadaster-Anbindung

Wenn Sie ein Immobilienobjekt mit einer gültigen niederländischen Adresse anlegen, kann MyCompanyDesk die WOZ-Historie direkt aus dem Kadaster importieren. Das spart manuelle Eingaben und liefert Ihnen dieselben Werte, die die Gemeinde hinterlegt hat.

- **Automatischer Abruf**: ist die WOZ-Historie noch leer, ruft das System beim Öffnen der Detailseite die verfügbaren Werte aus dem Kadaster ab.
- **Manuelles Aktualisieren**: klicken Sie auf **Aktualisieren**, um jederzeit die neuesten Kadaster-Daten abzurufen. Importierte Werte erhalten eine "Kadaster"-Quellenkennzeichnung.
- **Fehlende Daten**: wenn das Kadaster für die Adresse keine Daten hat (zum Beispiel bei einem Neubau), erscheint ein Hinweis und Sie können die Werte manuell eingeben.

#### Geschätzter aktueller Wert

Bei Immobilien, für die eine WOZ-Historie aus dem Kadaster abgerufen wurde, projiziert MyCompanyDesk einen geschätzten aktuellen Marktwert. Diese Projektion nimmt das jüngste WOZ-Stichtagsdatum und wendet den CBS-PBK-Preisindex für die COROP-Region der Immobilie an. So erhalten Sie einen Wert, der die aktuelle Marktentwicklung widerspiegelt.

### Signierstatus der Verträge

Jede Vertragszeile auf der Objektdetailseite zeigt eine Signierstatus-Badge neben der Aktiv/Pausiert-Badge. Die Farbgebung folgt der gleichen Zuordnung wie auf der Vertragsdetailseite:

- **Signiert** (grün): alle Parteien haben unterzeichnet
- **Teilweise signiert** (blau): einige Parteien haben unterzeichnet, andere noch nicht
- **Gesendet** (gelb): die Signiereinladung wurde versendet, noch keine Unterschriften
- **Abgelaufen** oder **Beendet** (rot): die Signieranfrage ist nicht mehr gültig

Vollständig signierte Verträge zeigen ein kleines Augensymbol, das eine Inline-Vorschau des unterschriebenen Dokuments öffnet. So können Sie den abgeschlossenen Vertrag lesen, ohne die Objektseite zu verlassen.

Altverträge, die vor der Einführung der E-Signing-Funktion angelegt wurden, zeigen keine Signier-Badge. Das System erkennt Altverträge auf dieselbe Weise wie auf der Vertragsdetailseite: Ein Vertrag benötigt Signierparteien, eine Vorlage oder Signierinhalte, damit eine Badge angezeigt wird.

## Objekte mit Verträgen und Rechnungen verknüpfen

Objekte lassen sich mit anderen MyCompanyDesk-Funktionen integrieren:

- **Verträge**: Erstellen Sie einen Mietvertrag für ein Objekt mit Angabe des Mieters (Kunden) und der Bedingungen
- **Rechnungen**: Rechnungen können als Mietrechnungen gekennzeichnet und mit Objekten verknüpft werden
- **Wiederkehrende Rechnungen**: Richten Sie automatische monatliche Mietabrechnungen pro Objekt ein

## Filtern

Filtern Sie Ihre Objekte nach:

- **Typ**: Einer der zehn Objekttypen
- **Status**: Verfügbar, Vermietet, Wartung, Aktiv, Verkauft, Ausgemustert oder Inaktiv
- **Zeitraum** und **Suche**: Nach Name oder Beschreibung finden
- **Ansicht**: Wechseln Sie zwischen Aktiv, Archiv und Papierkorb

## Massenaktionen

Wählen Sie mehrere Objekte aus, um sie auf einmal zu **archivieren** oder zu **löschen**. Die Archivansicht bietet Wiederherstellen nach Aktiv oder Verschieben in den Papierkorb; die Papierkorbansicht bietet Wiederherstellen ins Archiv oder endgültiges Löschen.

## Tipps

- Verwenden Sie den Statusfilter, um schnell zu sehen, welche Vermögenswerte zur Vermietung verfügbar sind
- Verknüpfen Sie jede Mietrechnung mit ihrem Objekt für eine vollständige finanzielle Nachverfolgung pro Vermögenswert
- Richten Sie Verträge mit Wiederholung für automatische Mietabrechnung ein
- Prüfen Sie die Objektkennzahlen oben auf der Seite für einen Verfügbarkeitsüberblick
