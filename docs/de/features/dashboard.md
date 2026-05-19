---
title: Dashboard
---

# Dashboard

Das Dashboard ist Ihre Startseite in MyCompanyDesk. Es bietet Ihnen einen Uberblick uber Ihre Geschaftsfinanzen, Warnungen und Schnellaktionen auf einen Blick.

## Dashboard-Profile

MyCompanyDesk bietet rollenbasierte Dashboard-Profile, die die angezeigten Kennzahlen und Karten an Ihre Bedurfnisse anpassen:

| Profil | Fokus |
|---|---|
| **Inhaber / Geschaftsfuhrer** | Cashflow, Rentabilitat, Uberblick auf hoher Ebene |
| **Buchhalter / Steuerberater** | USt., Compliance, Prufpfade, Periodensperren |
| **Debitorenbuchhaltung (Rechnungsstellung)** | Rechnungskennzahlen, ausstehende Zahlungen |
| **Kreditorenbuchhaltung (Einkauf)** | Ausgabenverfolgung, Lieferantenverwaltung |
| **Freiberufler** | Vereinfachte Rechnungsstellung und Einnahmenverfolgung |
| **USt.-Compliance** | USt.-Berechnungen, Fristen, Meldungen |
| **Projektbasiert** | Projektrentabilitat, Zeiterfassung |
| **Wachstum / Betrieb** | Umsatztrends, Kundenakquise |

### Profil wechseln

1. Offnen Sie das Dashboard
2. Klicken Sie auf die Profilauswahl oben
3. Wahlen Sie das Profil, das am besten zu Ihrer Rolle passt

Jedes Profil zeigt unterschiedliche Kennzahlenkarten, Warnungen und Schnellaktionen, die fur die jeweilige Rolle relevant sind.

## Dashboard-Bereiche

### Warnungen

Kritische Punkte, die Ihre Aufmerksamkeit erfordern:

- Uberfallige Rechnungen
- Bevorstehende USt.-Fristen
- Auslaufende Vertrage
- Warnungen bei niedrigem Cashflow
- Aus Bankimport zu prufende Ausgaben

### Wichtige Kennzahlen

Ubersichtskarten mit Ihren wichtigsten Zahlen:

- Gesamtumsatz (aktuelle Periode)
- Ausstehende Rechnungen
- Gesamtausgaben
- Nettogewinn/-verlust
- Offene Angebote

### Periodenauswahl

Wechseln Sie zwischen verschiedenen Zeitraumen, um Ihre Kennzahlen anzuzeigen:

- Diese Woche / Monat / Quartal / Jahr
- Benutzerdefinierter Datumsbereich
- Vergleich mit vorherigen Perioden

### Schnellaktionen

Verknupfungen zu Ihren haufigsten Aufgaben:

- Neue Rechnung erstellen
- Ausgabe hinzufugen
- Zeiteintrag erfassen
- Berichte anzeigen

### Letzte Aktivitaten

Ein Feed der neuesten Ereignisse in Ihrem Arbeitsbereich:

- Rechnungen gesendet und bezahlt
- Ausgaben hinzugefugt
- Kunden erstellt
- Aktionen von Teammitgliedern

## Onboarding-Karte

Solange der Einrichtungsassistent unter `/setup` noch Felder zu fullen hat, steht ein `FinishSetupBanner` oben auf dem Dashboard mit einer Zahlung der ausstehenden Felder und einem **Weiter**-Button. Die Karte hat jetzt eine Schliessen-Schaltflache (X-Symbol), die die Karte pro Browser uber localStorage ausblendet, sodass sie uber Seitenneuladungen hinweg ausgeblendet bleibt, bis der Assistent abgeschlossen ist. Die alte Onboarding-Karte wurde entfernt; diese Karte ersetzt sie. Der Assistent ist nicht blockierend: neue Anmeldungen landen direkt auf `/dashboard` und werden nicht zwangsumgeleitet.

## Pro-Willkommensbanner

Arbeitsbereiche mit Pro-Abonnement sehen ein dezentes Willkommens-Pill uber dem Dashboard-Raster. Drei Stufen werden unterschieden, damit eine Testphase nicht wie ein bezahltes Abo aussieht:

- **Founding Member** -- "Willkommen zuruck, {name}. Ihr Founding-Member Pro ist dauerhaft aktiv." Kronen-Icon in feierlichem Gold.
- **Testphase** -- "Willkommen zuruck, {name}. Pro-Testphase lauft noch {days} Tage." Kronen-Icon in warmem Bernstein, wirkt vorlaufig.
- **Bezahltes Pro** -- "Willkommen zuruck, {name}. Ihr Pro-Arbeitsbereich ist bereit." Kronen-Icon in Violett.

Jede Stufe zeigt den passenden Text und Stil. Das Pill steht nicht in Konkurrenz zum Setup-Banner oder den Dashboard-Bereichen darunter.
