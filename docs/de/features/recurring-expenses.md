---
title: Wiederkehrende Ausgaben
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

1. Gehen Sie zu **Wiederkehrende Ausgaben > Neu**
2. Füllen Sie die Vorlage aus:
   - **Beschreibung**: wofür die Ausgabe ist
   - **Lieferant**: freier Lieferantenname, mit Autocomplete für bereits verwendete Lieferanten
   - **Land** und **Handelsregisternummer (KVK)**: optionale Felder für die Lieferantenidentität; wenn ausgefüllt, werden sie in jede aus dieser Vorlage erstellte Ausgabe übernommen
   - **Betrag**: die wiederkehrenden Kosten
   - **Kategorie**: Ausgabenkategorie
   - **USt.-Satz**: anwendbare USt.
   - **USt.-Behandlung**: wie die Ausgabe in der USt.-Erklärung behandelt wird
   - **Häufigkeit**: wöchentlich, monatlich, vierteljährlich oder jährlich
3. Klicken Sie auf **Speichern**

::: tip Weitere Optionen
Im Formular für wiederkehrende Ausgaben bleiben optionale Angaben unter **Weitere Optionen** verborgen. Notizen und die Lieferantenidentität stehen dort standardmäßig; klappen Sie den Abschnitt aus, wenn Sie sie ergänzen möchten.
:::

### Lieferantenidentität

Wenn Sie Lieferantenname, Land und KVK-Nummer in einer wiederkehrenden Vorlage hinterlegen, hat das zwei Auswirkungen:

- **Lieferantenvorschläge** greifen auf die hinterlegte Identität zurück, sodass Sie denselben Lieferanten nicht jeden Monat erneut auswählen müssen.
- **Generierte Ausgaben** übernehmen dieselbe Lieferantenidentität wie die Vorlage. Dadurch wird die Regelung für innergemeinschaftliche Lieferungen oder nicht-EU-Lieferanten genauso automatisch angewendet wie bei manuell erfassten Ausgaben.

Wenn Sie den Lieferantennamen später ändern und er passt nicht mehr zum hinterlegten KVK-Eintrag, werden die Felder für KVK-Nummer und Land geleert. So verhindert das Formular, dass veraltete Identitätsdaten weiterhin bestehen.

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

Wurde eine Ausgabe aus einer wiederkehrenden Vorlage erstellt, zeigt die Ausgabendetailseite einen Banner **Automatisch erstellt aus wiederkehrender Ausgabe** mit einem Link zurück zu dieser Vorlage. So springen Sie mit einem Klick von einer einzelnen Ausgabe zu der Vorlage, die sie erzeugt hat.

## Was passiert, wenn sich mein Tarif ändert?

Wiederkehrende Ausgaben sind Teil des Office-Tarifs. Bei einem Upgrade von Desk auf Office startet die automatische Erstellung am nächsten Fälligkeitsdatum. Bei einer Herunterstufung von Office auf Desk wird die Erstellung automatisch pausiert. Die Vorlage und bereits erstellte Ausgaben bleiben in Ihrem Arbeitsbereich, und beim späteren Upgrade wird der Zeitplan fortgesetzt.

## Tipps

- Überprüfen Sie Ihre wiederkehrenden Ausgaben regelmäßig, um gekündigte Abonnements zu erkennen
- Verknüpfen Sie wiederkehrende Ausgaben mit Projekten für eine genaue Projektkostenkalkulation
- Verwenden Sie Kategorien konsequent für aussagekräftige Berichte
