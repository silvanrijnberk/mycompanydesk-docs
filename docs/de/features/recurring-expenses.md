---
title: Wiederkehrende Ausgaben
description: "Automatisieren Sie feste Kosten wie Miete, Abos, Versicherungen und Nebenkosten mit Vorlagen, die planmäßig Ausgaben anlegen."
---

# Wiederkehrende Ausgaben

Automatisieren Sie die Erfassung regelmäßiger Geschäftskosten wie Miete, Abonnements und Nebenkosten.

## Übersicht

Wiederkehrende Ausgaben funktionieren wie wiederkehrende Rechnungen, aber für Kosten. Richten Sie eine Vorlage ein und lassen Sie MyCompanyDesk automatisch Ausgabendatensätze erstellen.

Häufige Anwendungsfälle:

- Büromiete
- Software-Abonnements
- Versicherungsprämien
- Nebenkostenabrechnungen
- Leasingzahlungen

## Wiederkehrende Ausgabe erstellen

1. Öffnen Sie **Wiederkehrend**, Reiter **Ausgaben**, und klicken Sie auf **Wiederkehrende Ausgabe hinzufügen**
2. Füllen Sie die Vorlage aus:
   - **Name**: wofür die Ausgabe ist
   - **Lieferant**: der Name des Lieferanten. Beim Tippen schlägt das Feld Lieferanten vor, die Sie schon verwendet haben, und Unternehmen aus dem niederländischen Handelsregister (KVK)
   - **Kategorie**: die Ausgabenkategorie
   - **Beschreibung** und bei Bedarf ein **Projekt**
   - Unter **Zeitplan**: die **Frequenz** (wöchentlich, monatlich, vierteljährlich oder jährlich) und das **Startdatum**
   - Unter **Ausgabendetails**: den **Betrag exkl. MwSt.**, den **MwSt.-Satz**, ob die Steuer abzugsfähig ist (**USt abzugsfähig**) und die **MwSt.-Behandlung**, also wie die Ausgabe in Ihre Umsatzsteuererklärung eingeht
3. Klicken Sie auf **Speichern**

::: tip Ausgabendetails
Bei einer neuen wiederkehrenden Ausgabe ist der Block **Ausgabendetails** zugeklappt; klappen Sie ihn auf, um Beträge und Steuer einzutragen. Bearbeiten Sie eine bestehende wiederkehrende Ausgabe, ist er sofort offen.
:::

### Lieferantenidentität

Wählen Sie im Feld **Lieferant** ein Unternehmen unter **Aus dem Handelsregister (KVK)**, speichert die Vorlage auch die KVK-Nummer und das Land dieses Lieferanten, und neben dem Namen erscheint die Markierung **KVK**. Das hat zwei Auswirkungen:

- **Lieferantenvorschläge** greifen auf die hinterlegte Identität zurück, sodass Sie denselben Lieferanten nicht jeden Monat erneut auswählen müssen.
- **Generierte Ausgaben** übernehmen dieselbe Lieferantenidentität wie die Vorlage. Dadurch werden die Umkehr der Steuerschuld und die Einfuhrumsatzsteuer (etwa bei Lieferanten innerhalb oder außerhalb der EU) genauso automatisch angewendet wie bei manuell erfassten Ausgaben.

Ändern Sie den Lieferantennamen später und passt er nicht mehr zum gewählten KVK-Unternehmen, werden KVK-Nummer und Land geleert. Mit **KVK-Verknüpfung aufheben** lösen Sie die Verknüpfung auch selbst. So bleiben keine veralteten Identitätsdaten stehen.

## Häufigkeitsoptionen

| Häufigkeit | Beschreibung |
|---|---|
| **Wöchentlich** | Alle 7 Tage |
| **Monatlich** | Am gleichen Tag jeden Monat |
| **Vierteljährlich** | Alle 3 Monate |
| **Jährlich** | Einmal pro Jahr |

## Wiederkehrende Ausgaben verwalten

### Pausieren / Fortsetzen

Schalten Sie die automatische Generierung ein oder aus. Pausieren stoppt die Erstellung neuer Ausgaben; Fortsetzen setzt ab dem nächsten geplanten Datum fort.

### Bearbeiten

Änderungen an der Vorlage betreffen nur zukünftige Ausgaben. Bestehende Ausgaben werden nicht geändert.

### Löschen

Entfernen Sie die Vorlage. Bereits generierte Ausgaben bleiben in Ihren Unterlagen.

## Generierte Ausgaben

Jede generierte Ausgabe:

- Entspricht dem Betrag, der Kategorie und den USt.-Einstellungen der Vorlage
- Übernimmt die Lieferantenidentität der Vorlage (Name, Land und KVK-Nummer), sofern diese Felder ausgefüllt sind
- Wird auf das geplante Vorkommensdatum datiert
- Kann nach der Erstellung unabhängig bearbeitet werden

## Quellenlink

Wurde eine Ausgabe aus einer wiederkehrenden Vorlage erstellt, zeigt die Ausgabendetailseite einen Banner **Automatisch erstellt aus wiederkehrender Ausgabe**. Solange die Vorlage noch existiert, führt der Link zurück zu ihr, sodass Sie mit einem Klick von der Ausgabe zur Vorlage springen. Wurde die Vorlage inzwischen gelöscht, erscheint nur noch Text statt eines toten Links.

## Was passiert, wenn sich mein Tarif ändert?

Wiederkehrende Ausgaben sind Teil des Office-Tarifs. Bei einem Upgrade von Desk auf Office startet die automatische Erstellung am nächsten Fälligkeitsdatum. Bei einer Herunterstufung von Office auf Desk wird die Erstellung automatisch pausiert. Die Vorlage und bereits erstellte Ausgaben bleiben in Ihrem Arbeitsbereich, und beim späteren Upgrade wird der Zeitplan fortgesetzt.

## Tipps

- Überprüfen Sie Ihre wiederkehrenden Ausgaben regelmäßig, um gekündigte Abonnements zu erkennen
- Verknüpfen Sie wiederkehrende Ausgaben mit Projekten für eine genaue Projektkostenkalkulation
- Verwenden Sie Kategorien konsequent für aussagekräftige Berichte
