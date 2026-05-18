---
title: KI-Funktionen
---

# KI-Funktionen

MyCompanyDesk enthält KI-gestützte Funktionen, die Ihnen helfen, schneller und intelligenter zu arbeiten.

## Kontextbezogener Leitfaden

Der In-App-Assistent hilft Ihnen bei der Navigation durch MyCompanyDesk:

- Klicken Sie auf das **Hilfe-Symbol** auf einer beliebigen Seite für kontextbezogene Hilfe
- Stellen Sie Fragen zu Funktionen, Workflows oder Einstellungen
- Erhalten Sie Schritt-für-Schritt-Anleitungen für häufige Aufgaben
- Verfügbar in allen vier unterstützten Sprachen

Der Leitfaden erkennt, auf welcher Seite Sie sich befinden, und liefert relevante Vorschläge.

### Chat-Limits

Die Chat-Nutzung hängt von Ihrem Tarif ab:

| Tarif | Chat-Nachrichten |
|---|---|
| Free | Begrenzt |
| Pro | Großzügiges Kontingent |
| Business | Höchstes Kontingent |

### EU-KI-Verordnung Offenlegung (Art. 50)

Der kontextbezogene Leitfaden fällt unter die EU-KI-Verordnung (Verordnung 2024/1689) als KI-System mit begrenztem Risiko (Artikel 50). Das bedeutet, wir müssen transparent machen, dass Sie mit einer KI sprechen. Zwei Mechanismen sorgen dafür:

- **KI-Badge.** Ein kleiner "KI"-Pill neben dem Assistentennamen. Immer sichtbar, solange der Leitfaden geöffnet ist. Ein Tooltip auf dem Badge nennt den zugrunde liegenden Anbieter (Google Gemini).
- **Offenlegungstext.** Eine kurze Zeile unter der Begrüßungsfrage im leeren Chat: "Sie sprechen mit einem KI-Assistenten. Antworten können Fehler enthalten; überprüfen Sie finanzielle oder steuerliche Schlussfolgerungen stets selbst."

Die Verpflichtung gilt ab August 2026; die Offenlegungen wurden vor der Frist eingebaut.

## KI-Vorschläge

Intelligente Empfehlungen, die Ihnen helfen, Ihre Datensätze zu kategorisieren und zu beschreiben:

### Ausgabenkategorisierung

Wenn Sie eine Ausgabe erstellen, analysiert die KI die Beschreibung und schlägt die passendste Kategorie vor. Dies spart Zeit und sorgt für konsistente Kategorisierung.

### Beschreibungsverbesserungen

Die KI kann klarere, professionellere Beschreibungen vorschlagen für:

- Rechnungspositionen
- Ausgabenbeschreibungen
- Kundennotizen

### So funktioniert es

1. Erstellen oder bearbeiten Sie einen Datensatz
2. Achten Sie auf den KI-Vorschlagsindikator
3. Überprüfen Sie den Vorschlag
4. Klicken Sie auf **Übernehmen**, um ihn zu verwenden, oder **Verwerfen**, um ihn zu überspringen

::: info
KI-Vorschläge erfordern den **Pro**-Tarif oder höher. Aktivieren Sie sie unter **Unternehmen > Funktionen**.
:::

## Belegscanner

KI-gestützte OCR extrahiert Daten aus Belegbildern und PDFs:

- **Datum** — Wann der Kauf getätigt wurde
- **Betrag** — Gesamtkosten
- **Lieferant** — An wen Sie gezahlt haben
- **Beschreibung** — Was gekauft wurde

Siehe [Belegscanner](/de/advanced/receipt-scanning) für detaillierte Anleitungen.

## Textprüfung

Grammatik- und Rechtschreibprüfung für Ihre Dokumente:

- Rechnungsbeschreibungen vor dem Versand prüfen
- Angebotsinhalt verifizieren
- Tippfehler in kundenseitigen Texten korrigieren

Unterstützt Englisch, Niederländisch, Deutsch und Französisch.

::: info
Textprüfung erfordert den **Pro**-Tarif oder höher.
:::

## Kontozusammenfassungen

Die KI erstellt regelmäßige Zusammenfassungen Ihrer Geschäftsaktivitäten:

- **Täglich** — Kurzer Überblick über die Tagesgeschäfte
- **Wöchentlich** — Wochenrückblick mit Trends
- **Monatlich** — Umfassende monatliche Analyse

Zusammenfassungen werden in Ihrer bevorzugten Sprache erstellt und sind über das Dashboard verfügbar.

## Datenschutz

Alle cloudbasierten KI-Funktionen laufen standardmäßig auf Vertex AI in `europe-west1` (EU). MyCompanyDesk hat einen Auftragsverarbeitungsvertrag (AVV) mit Google Cloud für Vertex AI. Ollama Cloud (ollama.com, US-gehostet) ist standardmäßig deaktiviert, da kein AVV und keine Standardvertragsklauseln mit Ollama Inc. bestehen. Sie können es pro Workspace für Workloads ohne personenbezogene Daten aktivieren, es ist jedoch für alle Tarife standardmäßig ausgeschaltet.

Wenn Sie `ai_processing_mode` auf `local_only` setzen, bleiben Belegscanner, KI-Vorschläge, Textprüfung, Lieferantenklassifizierung und Branchenerkennung vollständig auf Ihrem eigenen Server. Der kontextbezogene Leitfaden funktioniert nur cloudbasiert und ist im `local_only`-Modus deaktiviert.

## Tipps

- Aktivieren Sie KI-Vorschläge einmal und sie arbeiten automatisch im Hintergrund
- Belegscanner ist besonders nützlich für Papierbelege — machen Sie einfach ein Foto
- Der kontextbezogene Leitfaden kann die meisten „Wie mache ich..."-Fragen zur App beantworten
