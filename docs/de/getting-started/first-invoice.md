---
title: Ihre erste Rechnung
description: "Schritt für Schritt zur ersten Rechnung: von Ihren Unternehmensdaten über den Kunden bis zum Versand."
---

# Ihre erste Rechnung

Diese Anleitung führt Sie durch die Erstellung und den Versand Ihrer ersten Rechnung in MyCompanyDesk.

## Bevor Sie beginnen

Stellen Sie sicher, dass Sie:

- [Ihre Unternehmensinformationen eingerichtet](/de/getting-started/company-setup) haben (Name, Adresse, USt-IdNr., IBAN). Fehlen USt-IdNr. oder IBAN noch, fragt MyCompanyDesk danach, sobald Sie die Rechnung abschließen.
- Mindestens einen Kunden haben, dem Sie eine Rechnung stellen können (Sie können während des Prozesses einen erstellen)

## Rechnung erstellen

1. Gehen Sie in der Seitenleiste zu **Rechnungen**
2. Klicken Sie auf **Erstellen** (oder nutzen Sie auf dem Smartphone die **+**-Schaltfläche)
3. Füllen Sie die Rechnung aus

Auf Smartphone oder Tablet öffnet sich eine neue Rechnung in drei Schritten: **Kunde**, **Positionen** und **Prüfen**. Mit **Weiter** gelangen Sie zum nächsten Schritt. Auf einem großen Bildschirm steht alles auf einer Seite.

### Kunden auswählen

Beginnen Sie im Feld **Nach einem Kunden suchen...** mit der Eingabe des Kundennamens. Existiert der Kunde bereits, wählen Sie ihn aus der Liste. Wenn nicht, wählen Sie **Neuen Kunden hinzufügen**. Das Fenster **Neuer Kunde** fragt nach dem Kundentyp (**Privatperson** oder **Unternehmen**), dem Namen und der Adresse. Bei Unternehmen sucht die KVK-Abfrage die Daten heraus und füllt die Adresse automatisch aus; bei Privatkunden geben Sie die Adresse selbst ein. Die E-Mail ist optional. Klicken Sie auf **Hinzufügen**, und der Kunde steht auf der Rechnung.

### Positionen hinzufügen

Jede Position enthält:

- **Beschreibung**: wofür Sie abrechnen
- **Menge**: Anzahl der Einheiten
- **Preis**: Preis pro Einheit. Standardmäßig geben Sie Preise ohne MwSt. ein; schalten Sie **Preise inkl. MwSt.** ein, wenn Sie lieber den Betrag eingeben, den Ihr Kunde zahlt.
<!-- TODO(source-missing): The app also accepts the historical Dutch rates 6% and 19% on invoices and catalog items. sources/vat-rates.yaml#countries.NL currently only lists 0%, 9% and 21%, so this line must stay unchanged until the source is updated. -->
- **USt.-Satz**: Anwendbarer USt.-Prozentsatz (0 %, 9 %, 21 % usw.)

Klicken Sie auf **Position hinzufügen** für weitere Positionen, oder wählen Sie ein Produkt bzw. eine Leistung aus Ihrem Angebot. Der Gesamtbetrag wird automatisch inklusive MwSt. berechnet.

### Rechnungsdetails festlegen

- **Rechnungsnummer**: wird automatisch vorgeschlagen. Ihre feste Nummer erhält die Rechnung beim Abschließen.
- **Rechnungsdatum**: standardmäßig heute
- **Fälligkeitsdatum**: berechnet aus Ihrem Standard-Zahlungsziel (anpassbar)
- **Notizen**: optionale Notizen, die auf der Rechnung erscheinen

### Speichern

Sie haben zwei Schaltflächen:

- **Als Entwurf speichern**: speichert die Rechnung als **Entwurf**. Sie können noch alles ändern.
- **Abschließen**: gibt der Rechnung ihre Nummer und macht sie versandbereit. Danach lassen sich die Angaben nicht mehr ändern (Vorgabe der niederländischen Steuerbehörde).

## Rechnung prüfen

Klicken Sie im Rechnungsformular auf **Vorschau ansehen**, um zu sehen, wie das PDF aussieht. Prüfen Sie, ob alles stimmt: Unternehmensdaten, Kundeninformationen, Positionen und Summen. Auf der Rechnungsseite sehen Sie das Dokument ebenfalls und können es per **PDF herunterladen** speichern.

## Rechnung senden

Eine abgeschlossene Rechnung, die noch nicht verschickt ist, hat den Status **Noch zu versenden**. So versenden Sie sie:

1. Klicken Sie auf der Rechnungsseite auf **Senden**
2. Prüfen Sie im Fenster **E-Mail senden** die E-Mail an Ihren Kunden:
   - **An**: die E-Mail-Adresse Ihres Kunden
   - **Betreff** und **Nachricht** (anpassbar)
   - Unter **In E-Mail aufnehmen**: den **Ansicht-Button (Online-Link)**, den **Download-Button** und den **PDF-Anhang**. Über den Online-Link sieht und bezahlt Ihr Kunde die Rechnung.
3. Klicken Sie auf **E-Mail senden**

Der Rechnungsstatus wechselt zu **Gesendet**. Haben Sie die Rechnung selbst verschickt, etwa per WhatsApp? Klicken Sie dann auf **Als versendet markieren**.

::: tip
Ihre E-Mail-Texte passen Sie unter **Einstellungen › E-Mail** an. Sie können den Text auch im Versandfenster ändern und **Diesen Text künftig für Rechnungen verwenden** ankreuzen.
:::

## Zahlungen verfolgen

Nach dem Versand steht die Rechnung unter **Wartet auf Zahlung**, oder unter **Überfällig**, sobald das Fälligkeitsdatum überschritten ist. Wenn der Kunde bezahlt:

- Zahlt der Kunde online (iDEAL, einzurichten unter **Einstellungen › Bezahlung**), wird die Rechnung automatisch als bezahlt markiert
- Bei Banküberweisungen klicken Sie auf der Rechnung auf **Als bezahlt markieren**, um die Zahlung manuell zu erfassen

## Rechnungsstatus

| Status | Beschreibung |
|---|---|
| **Entwurf** | Erstellt, aber noch nicht abgeschlossen. Vollständig bearbeitbar. |
| **Noch zu versenden** | Endgültig, noch nicht versendet. |
| **Gesendet** | An den Kunden zugestellt. Wartet auf Zahlung. |
| **Überfällig** | Fälligkeitsdatum überschritten und noch nicht bezahlt. |
| **Überprüfung erforderlich** | Der Kunde gibt an, bezahlt zu haben. Prüfen Sie das und markieren Sie die Rechnung als bezahlt. |
| **Bezahlt** | Zahlung erhalten und bestätigt. |
| **Storniert** | Rechnung wurde storniert. Keine Zahlung erwartet. |

## Vorlagen verwenden

Sparen Sie Zeit mit Rechnungsvorlagen:

1. Erstellen Sie eine neue Rechnung mit Ihren häufigsten Positionen
2. Klicken Sie auf **Als Vorlage speichern**
3. Beim nächsten Mal wählen Sie bei einer neuen Rechnung **Aus Vorlage**, und alle Positionen sind vorausgefüllt

## Nächste Schritte

Herzlichen Glückwunsch zum Versand Ihrer ersten Rechnung! Entdecken Sie weitere Funktionen:

- [Ausgaben verfolgen](/de/features/expenses)
- [Angebote erstellen](/de/features/quotes) für potenzielle Aufträge
- [Wiederkehrende Rechnungen einrichten](/de/features/recurring-invoices) für regelmäßige Abrechnungen (Office)
- [Berichte anzeigen](/de/features/reports), um Ihre Finanzen zu verstehen
