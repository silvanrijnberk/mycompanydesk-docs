---
title: KI-Funktionen
---

# KI-Funktionen

MyCompanyDesk enthalt KI-gestutzte Funktionen, die Ihnen helfen, schneller und intelligenter zu arbeiten.

## Kontextbezogener Leitfaden

Der In-App-Assistent hilft Ihnen bei der Navigation durch MyCompanyDesk:

- Klicken Sie auf das **Hilfe-Symbol** auf jeder Seite fur kontextbezogene Hilfe
- Stellen Sie Fragen zu Funktionen, Workflows oder Einstellungen
- Erhalten Sie Schritt-fur-Schritt-Anleitungen fur haufige Aufgaben
- Verfugbar in allen vier unterstutzten Sprachen

Der Leitfaden versteht, auf welcher Seite Sie sich befinden, und gibt relevante Vorschlage.

### Chat-Limits

Die Chat-Nutzung hangt von Ihrem Tarif ab:

| Tarif | Chat-Nachrichten (monatlich) |
|---|---|
| Gratis | 10 |
| Starter | 100 |
| Pro | 1 000 |

KI-Limits gelten monatlich, nicht taglich. Sie werden am Ersten jedes Monats zuruckgesetzt.

### EU-KI-Gesetz-Offenlegung (Art. 50)

Der kontextbezogene Leitfaden fallt unter das EU-KI-Gesetz (Verordnung 2024/1689) als KI-System mit begrenztem Risiko (Artikel 50). Das bedeutet, wir mussen klarstellen, dass Sie mit einer KI sprechen. Der Leitfaden enthalt dafur zwei Elemente:

- **KI-Badge.** Eine kleine "KI"-Pille neben dem Assistentennamen. Immer sichtbar, solange der Leitfaden geoffnet ist. Ein Tooltip auf dem Badge nennt den zugrunde liegenden Anbieter (Google Gemini).
- **Offenlegungstext.** Eine kurze Zeile unter der Begrussungsfrage im leeren Chat: "Sie sprechen mit einem KI-Assistenten. Antworten konnen Fehler enthalten; uberprufen Sie finanzielle oder steuerliche Schlussfolgerungen immer selbst."

Die Verpflichtung tritt im August 2026 in Kraft; die Offenlegungen wurden vor der Frist implementiert.

### Pro-Erscheinungsbild

Pro-Workspaces erhalten ein Premium-Assistenten-Design, das das generische Styling durch den Pro-Violett-Akzent ersetzt. Wenn der Abrechnungsplan Pro ist, andert sich das Assistenten-Panel visuell:

- Die "KI"-Pille wird zu einer violetten "Pro"-Pille, die signalisiert, dass der Assistent mit dem hochwertigsten Modell und vollem App-Kontext lauft.
- Panel-Rand, Avatar-Ring, Online-Punkt und Sende-Button wechseln zu Violett (`#a855f7`), passend zum Pro-Band in der App-Navigation.
- Die Statuszeile zeigt "Ihr Pro-Assistent steht bereit" statt des generischen "Bereit zu helfen."

Das Pro-Erscheinungsbild ist rein kosmetisch. Die zugrunde liegende Modellauswahl, der Tool-Katalog und die EU-KI-Gesetz-Offenlegungen bleiben fur alle Tarife identisch. `TIER_CHAT_CONFIG` gibt Pro bereits ein leistungsfahigeres Modell und unbegrenzten App-Kontext.

## KI-Vorschlage

Intelligente Empfehlungen, die Ihnen bei der Kategorisierung und Beschreibung Ihrer Eintrage helfen:

### Ausgabenkategorisierung

Wenn Sie eine Ausgabe erstellen, analysiert die KI die Beschreibung und schlagt die am besten geeignete Kategorie vor. Das spart Zeit und sorgt fur eine konsistente Kategorisierung.

### Beschreibungsverbesserungen

KI kann klarere, professionellere Beschreibungen vorschlagen fur:

- Rechnungspositionen
- Ausgabenbeschreibungen
- Kundennotizen

### So funktioniert es

1. Erstellen oder bearbeiten Sie einen Eintrag
2. Achten Sie auf die KI-Vorschlagsanzeige
3. Prufen Sie den Vorschlag
4. Klicken Sie auf **Ubernehmen**, um ihn zu verwenden, oder auf **Ignorieren**, um ihn zu uberspringen

::: info
KI-Vorschlage erfordern den **Starter**-Tarif oder hoher. Aktivieren Sie sie unter **Unternehmen > Funktionen**.
:::

## Belegscanning

KI-gestutztes OCR extrahiert Daten aus Belegbildern und PDFs:

- **Datum** -- Wann der Kauf getatigt wurde
- **Betrag** -- Gesamtkosten
- **Lieferant** -- An wen Sie gezahlt haben
- **Beschreibung** -- Was gekauft wurde

Siehe [Belegscanning](/de/advanced/receipt-scanning) fur detaillierte Anweisungen.

## Textprufung

Grammatik- und Rechtschreibprufung fur Ihre Dokumente:

- Prufen Sie Rechnungsbeschreibungen vor dem Versand
- Uberprufen Sie Angebotsinhalte
- Korrigieren Sie Tippfehler in kundenorientierten Texten

Unterstutzt Englisch, Niederlandisch, Deutsch und Franzosisch.

::: info
Textprufung ist in allen Tarifen verfugbar, einschliesslich Gratis.
:::

## Kontozusammenfassungen

KI generiert regelmaassige Zusammenfassungen Ihrer Geschaftsaktivitat:

- **Taglich** -- Kurzer Uberblick uber die Transaktionen des Tages
- **Wochentlich** -- Wochenubersicht mit Trends
- **Monatlich** -- Umfassende monatliche Analyse

Zusammenfassungen werden in Ihrer bevorzugten Sprache generiert und sind uber das Dashboard verfugbar.

## Tarifberechtigungen

| Funktion | Gratis | Starter | Pro |
|---|---|---|---|
| Kontextbezogener Leitfaden | Begrenzt, nur FAQ bei Uberlauf | Standard | Hochstes Limit |
| KI-Vorschlage | Aus | An | An |
| Lieferantenklassifizierung | Aus | An | An |
| Belegscanning | Aus | An | An |
| Textprufung | An | An | An |
| Ubersetzung | An (nur UI) | An | An |

## Datenschutz

Alle Cloud-KI-Pfade laufen standardmaassig uber Vertex AI in `europe-west1` (EU). MyCompanyDesk hat eine Auftragsverarbeitungsvereinbarung mit Google Cloud fur die Vertex-AI-Nutzung. Ollama Cloud (ollama.com, US-gehostet) ist standardmaassig deaktiviert, da keine Auftragsverarbeitungsvereinbarung mit Ollama Inc. besteht. Sie konnen es pro Arbeitsbereich fur Workloads ohne personenbezogene Daten aktivieren, aber es ist fur alle Tarife deaktiviert.

Wenn Sie `ai_processing_mode` auf `local_only` setzen, bleiben Belegscanning, KI-Vorschlage, Textprufung, Lieferantenklassifizierung und Branchenerkennung vollstandig auf Ihrem eigenen Server. Der kontextbezogene Leitfaden funktioniert nur in der Cloud und ist im `local_only`-Modus deaktiviert.

## Tipps

- Aktivieren Sie KI-Vorschlage einmal und sie arbeiten automatisch im Hintergrund
- Belegscanning ist besonders nutzlich fur Papierbelege -- machen Sie einfach ein Foto
- Der kontextbezogene Leitfaden kann die meisten "Wie mache ich..."-Fragen zur App beantworten
