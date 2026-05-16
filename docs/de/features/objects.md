---
title: "Objekte & Vermögenswerte"
---

# Objekte & Vermögenswerte

Verfolgen Sie Mietobjekte, Fahrzeuge, Ausstattung und andere Geschäftsvermögenswerte mit vollständigem Lebenszyklus-Management.

::: info
Das Objektmodul ist optional. Aktivieren Sie es unter **Unternehmen > Funktionen**, wenn Sie es nicht in der Navigation sehen.
:::

## Übersicht

Das Objektmodul ist für Unternehmen konzipiert, die physische Vermögenswerte verwalten — insbesondere Vermietungsunternehmen, Immobilienverwalter und Geräteverleihdienste. Jedes Objekt repräsentiert einen Vermögenswert, den Sie besitzen oder verwalten.

## Objekttypen

| Typ | Anwendungsfall |
|---|---|
| **Immobilie** | Mietwohnungen, Büros, Gewerbeflächen |
| **Fahrzeug** | PKW, LKW, Transporter, Baufahrzeuge |
| **Maschine** | Industrieausrüstung, Werkzeuge, Generatoren |
| **Sonstiges** | Jeder andere Vermögenswerttyp |

## Objektstatus

| Status | Beschreibung |
|---|---|
| **Verfügbar** | Bereit zur Vermietung oder Nutzung |
| **Vermietet** | Derzeit an einen Kunden vermietet |
| **Inaktiv** | Nicht verfügbar (Wartung, ausgemustert) |

## Objekt erstellen

1. Gehen Sie zu **Objekte > Neues Objekt**
2. Füllen Sie aus:
   - **Name** — Eine eindeutige Bezeichnung (z. B. „Wohnung 3B" oder „Bagger CAT 320")
   - **Typ** — Immobilie, Fahrzeug, Maschine oder Sonstiges
   - **Status** — Verfügbar, Vermietet oder Inaktiv
   - **Beschreibung** — Details zum Vermögenswert
3. Klicken Sie auf **Speichern**

## Objektdetailseite

Die Detailseite zeigt:

- Vermögenswertinformationen und Typ
- Aktueller Status
- **WOZ-Verlauf** (bei Immobilien) — jährliche WOZ-Werte, die für die Box-3-Berechnung verwendet werden
- Verknüpfte Verträge
- Mietverlauf
- Zugehörige Rechnungen

### Vertragszusammenfassung

Oberhalb der Vertragsliste gibt eine Zusammenfassungszeile einen schnellen Überblick über den Vertragszustand des Objekts:

- **Verträge gesamt** — mit diesem Objekt verknüpft
- **Signierte Verträge** — wie viele vollständig unterzeichnet sind
- **Monatlich aktiv** — kombinierter monatlicher Wert aller aktiven Verträge, normalisiert aus Verträgen mit unterschiedlicher Frequenz (wöchentlich, vierteljährlich, jährlich)

### WOZ-Verlauf (Immobilienobjekte)

Bei Objekten des Typs **Immobilie** enthält die Detailseite einen Abschnitt zum WOZ-Verlauf. WOZ-Werte (Waardering Onroerende Zaken) sind die von der Gemeinde festgesetzten Immobilienwerte, die in der niederländischen Box-3-Steuerberechnung verwendet werden.

- **Sehen** Sie jährliche WOZ-Werte pro Jahr ein.
- **Fügen Sie** neue Werte hinzu, indem Sie das Jahr und den von der Gemeinde festgesetzten WOZ-Wert eingeben.
- Box 3 verwendet den WOZ-Wert mit Stichtag 1. Januar. Geben Sie den Wert ein, der zu Beginn des Steuerjahres gilt.
- Wurden noch keine Werte eingetragen, zeigt der Abschnitt einen leeren Zustand mit der Aufforderung, den ersten hinzuzufügen.

### Signierstatus der Verträge

Jede Vertragszeile auf der Objektdetailseite zeigt nun eine Signierstatus-Badge neben der Aktiv/Pausiert-Badge. Die Farbgebung folgt der gleichen Zuordnung wie auf der Vertragsdetailseite:

- **Signiert** (grün) — alle Parteien haben unterzeichnet
- **Teilweise signiert** (blau) — einige Parteien haben unterzeichnet, andere noch nicht
- **Gesendet** (gelb) — die Signiereinladung wurde versendet, noch keine Unterschriften
- **Abgelaufen** oder **Beendet** (rot) — die Signieranfrage ist nicht mehr gültig

Vollständig signierte Verträge zeigen ein kleines Augensymbol, das eine Inline-Vorschau des unterschriebenen Dokuments öffnet. So können Sie den abgeschlossenen Vertrag lesen, ohne die Objektseite zu verlassen.

Altverträge, die vor der Einführung der E-Signing-Funktion angelegt wurden, zeigen keine Signier-Badge. Das System erkennt Altverträge auf dieselbe Weise wie auf der Vertragsdetailseite: Ein Vertrag benötigt Signierparteien, eine Vorlage oder Signierinhalte, damit eine Badge angezeigt wird.

## Objekte mit Verträgen und Rechnungen verknüpfen

Objekte lassen sich mit anderen MyCompanyDesk-Funktionen integrieren:

- **Verträge** — Erstellen Sie einen Mietvertrag für ein Objekt mit Angabe des Mieters (Kunden) und der Bedingungen
- **Rechnungen** — Rechnungen können als Mietrechnungen gekennzeichnet und mit Objekten verknüpft werden
- **Wiederkehrende Rechnungen** — Richten Sie automatische monatliche Mietabrechnungen pro Objekt ein

## Filtern

Filtern Sie Ihre Objekte nach:

- **Typ** — Immobilie, Fahrzeug, Maschine, Sonstiges
- **Status** — Verfügbar, Vermietet, Inaktiv
- **Suche** — Nach Name oder Beschreibung finden

## Massenaktionen

- **Status ändern** — Verfügbarkeit in großem Umfang aktualisieren
- **Archivieren** — Ins Archiv verschieben
- **Löschen** — Objekte entfernen

## Tipps

- Verwenden Sie den Statusfilter, um schnell zu sehen, welche Vermögenswerte zur Vermietung verfügbar sind
- Verknüpfen Sie jede Mietrechnung mit ihrem Objekt für eine vollständige finanzielle Nachverfolgung pro Vermögenswert
- Richten Sie Verträge mit Wiederholung für automatische Mietabrechnung ein
- Prüfen Sie die Objektkennzahlen oben auf der Seite für einen Verfügbarkeitsüberblick
