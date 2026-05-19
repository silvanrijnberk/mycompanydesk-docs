---
title: Dashboard
---

# Dashboard

Das Dashboard ist Ihre Startseite in MyCompanyDesk. Es bietet Ihnen einen Überblick über Ihre Geschäftsfinanzen, Warnungen und Schnellaktionen auf einen Blick.

## Dashboard-Profile

MyCompanyDesk bietet rollenbasierte Dashboard-Profile, die die angezeigten Kennzahlen und Karten an Ihre Bedürfnisse anpassen:

| Profil | Fokus |
|---|---|
| **Inhaber / Geschäftsführer** | Cashflow, Rentabilität, Überblick auf hoher Ebene |
| **Buchhalter / Steuerberater** | USt., Compliance, Prüfpfade, Periodensperren |
| **Debitorenbuchhaltung (Rechnungsstellung)** | Rechnungskennzahlen, ausstehende Zahlungen |
| **Kreditorenbuchhaltung (Einkauf)** | Ausgabenverfolgung, Lieferantenverwaltung |
| **Freiberufler** | Vereinfachte Rechnungsstellung und Einnahmenverfolgung |
| **USt.-Compliance** | USt.-Berechnungen, Fristen, Meldungen |
| **Projektbasiert** | Projektrentabilität, Zeiterfassung |
| **Wachstum / Betrieb** | Umsatztrends, Kundenakquise |

### Profil wechseln

1. Öffnen Sie das Dashboard
2. Klicken Sie auf die Profilauswahl oben
3. Wählen Sie das Profil, das am besten zu Ihrer Rolle passt

Jedes Profil zeigt unterschiedliche Kennzahlenkarten, Warnungen und Schnellaktionen, die für die jeweilige Rolle relevant sind.

## Dashboard-Bereiche

### Warnungen

Kritische Punkte, die Ihre Aufmerksamkeit erfordern:

- Überfällige Rechnungen
- Bevorstehende USt.-Fristen
- Auslaufende Verträge
- Warnungen bei niedrigem Cashflow
- Aus Bankimport zu prüfende Ausgaben

### Wichtige Kennzahlen

Übersichtskarten mit Ihren wichtigsten Zahlen:

- Gesamtumsatz (aktuelle Periode)
- Ausstehende Rechnungen
- Gesamtausgaben
- Nettogewinn/-verlust
- Offene Angebote

### Periodenauswahl

Wechseln Sie zwischen verschiedenen Zeiträumen, um Ihre Kennzahlen anzuzeigen:

- Diese Woche / Monat / Quartal / Jahr
- Benutzerdefinierter Datumsbereich
- Vergleich mit vorherigen Perioden

### Schnellaktionen

Verknüpfungen zu Ihren häufigsten Aufgaben:

- Neue Rechnung erstellen
- Ausgabe hinzufügen
- Zeiteintrag erfassen
- Berichte anzeigen

### Letzte Aktivitäten

Ein Feed der neuesten Ereignisse in Ihrem Arbeitsbereich:

- Rechnungen gesendet und bezahlt
- Ausgaben hinzugefügt
- Kunden erstellt
- Aktionen von Teammitgliedern

## Onboarding-Karte

Solange der Einrichtungsassistent unter `/setup` noch Felder zu füllen hat, steht ein `FinishSetupBanner` oben auf dem Dashboard mit einer Zählung der ausstehenden Felder und einem **Weiter**-Button. Die Karte hat jetzt eine Schließen-Schaltfläche (X-Symbol), die die Karte pro Browser über localStorage ausblendet, sodass sie über Seitenneuladungen hinweg ausgeblendet bleibt, bis der Assistent abgeschlossen ist. Die alte Onboarding-Karte wurde entfernt; diese Karte ersetzt sie. Der Assistent ist nicht blockierend: neue Anmeldungen landen direkt auf `/dashboard` und werden nicht zwangsumgeleitet.

## Pro-Willkommensbanner

Arbeitsbereiche mit Pro-Abonnement sehen ein dezentes Willkommens-Pill über dem Dashboard-Raster. Drei Stufen werden unterschieden, damit eine Testphase nicht wie ein bezahltes Abo aussieht:

- **Founding Member** — "Willkommen zurück, {name}. Ihr Founding-Member Pro ist dauerhaft aktiv." Kronen-Icon in feierlichem Gold.
- **Testphase** — "Willkommen zurück, {name}. Pro-Testphase läuft noch {days} Tage." Kronen-Icon in warmem Bernstein, wirkt vorläufig.
- **Bezahltes Pro** — "Willkommen zurück, {name}. Ihr Pro-Arbeitsbereich ist bereit." Kronen-Icon in Violett.

Jede Stufe zeigt den passenden Text und Stil. Das Pill steht nicht in Konkurrenz zum Setup-Banner oder den Dashboard-Bereichen darunter.
