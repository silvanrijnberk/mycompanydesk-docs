---
title: Kundenportal
---

# Kundenportal

Das Kundenportal ermöglicht es Ihren Kunden, Rechnungen online über eine sichere, gebrandete Oberfläche einzusehen und zu bezahlen.

## So funktioniert es

Wenn Sie eine Rechnung versenden, wird ein eindeutiger **Zahlungslink** generiert. Wenn Ihr Kunde auf diesen Link klickt, wird er zum Kundenportal weitergeleitet, wo er:

1. **Die Rechnung ansehen** kann — Alle Details, Positionen und Gesamtbeträge einsehen
2. **Das PDF herunterladen** kann — Eine Kopie der Rechnung erhalten
3. **Online bezahlen** kann — Die Zahlung direkt über das Portal abschließen
4. **Zahlung bestätigen** kann — Eine Banküberweisung bestätigen

## Portal-Funktionen

### Rechnungsansicht

Das Portal zeigt eine übersichtliche, gebrandete Ansicht der Rechnung, einschließlich:

- Ihr Firmenlogo und Branding
- Rechnungsnummer und Datum
- Positionen mit Beschreibungen und Beträgen
- USt.-Aufschlüsselung
- Fälliger Gesamtbetrag
- Fälligkeitsdatum

### Zahlung

Kunden können direkt über das Portal bezahlen. Wenn Sie Mollie oder Stripe verbunden haben, erscheinen Zahlungsschaltflächen auf der Rechnungsansicht, sodass Ihr Kunde mit einem Klick bezahlen kann. Wenn die Zahlung bestätigt wird, aktualisiert sich der Rechnungsstatus in Ihrem Dashboard automatisch auf **Bezahlt**.

#### Mollie-Zahlungseinstellungen

Sobald Mollie verbunden ist, erhalten Sie einen **Betaalknop op facturen**-Schalter in Ihrem Arbeitsbereich unter **Geld → Zahlungen → Online betalingen**. Aktivieren Sie ihn, um eine Mollie-Zahlungsschaltfläche auf jeder ausgehenden Rechnung anzuzeigen. Deaktivieren Sie ihn, und die Schaltfläche verschwindet, ohne Mollie zu trennen.

Unter dem Schalter befindet sich ein **Betaalmethoden**-Bereich, der jede in Ihrem Mollie-Dashboard aktivierte Zahlungsmethode auflistet (iDEAL, Bancontact, Kreditkarte und mehr). Standardmäßig sehen Kunden alle Methoden. Aktivieren Sie bestimmte Methoden, um die Auswahl einzugrenzen, nur diese erscheinen auf Ihren Rechnungen. Entfernen Sie alle Häkchen, um zu "alle anzeigen" zurückzukehren.

Mit der Schaltfläche **Stuur testbetaling** können Sie einen kostenlosen €1-Test-Checkout über Mollie durchlaufen, um sicherzustellen, dass alles funktioniert, bevor Ihre Kunden es sehen. Es fließt kein echtes Geld.

### Branding

Das Kundenportal verwendet Ihr Unternehmensbranding:

- Firmenlogo
- Akzentfarbe
- Unternehmensinformationen

Dies schafft ein professionelles, konsistentes Erlebnis für Ihre Kunden.

## Zugangssicherheit

Jeder Portal-Link ist:

- **Eindeutig** — Pro Rechnung generiert
- **Token-basiert** — Mit einem einzigartigen Zugangstoken gesichert
- **Rechnungsspezifisch** — Zeigt nur die spezifische Rechnung

Kunden benötigen kein MyCompanyDesk-Konto, um Rechnungen einzusehen und zu bezahlen.

## Kundenereignis-Tracking

MyCompanyDesk verfolgt Kundeninteraktionen mit dem Portal:

- Wann der Kunde die Rechnung öffnet
- Wann er das PDF herunterlädt
- Wann er die Zahlung einleitet
- Wann die Zahlung bestätigt wird

Dies hilft Ihnen, das Kundenengagement zu verstehen und effektiv nachzufassen.

## Tipps

- Fügen Sie Ihrer Rechnungs-E-Mail eine persönliche Notiz hinzu, um die Portal-Nutzung zu fördern
- Das Portal funktioniert auf allen Geräten — Mobiltelefon, Tablet und Desktop
- Zahlungsbestätigungen werden sowohl an Sie als auch an den Kunden gesendet
- Prüfen Sie den Kundenereignisverlauf auf der Rechnungsdetailseite, um Portal-Interaktionen einzusehen
