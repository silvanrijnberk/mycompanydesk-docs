---
title: KI-Funktionen
description: "Jede KI-Funktion in MyCompanyDesk, was sie tut und welcher Anbieter sie betreibt. Die Standardkette ist EU-only: Gemini auf Vertex AI europe-west1."
---

# KI-Funktionen

MyCompanyDesk enthalt KI-gestutzte Funktionen, die Ihnen helfen, schneller und intelligenter zu arbeiten.

## Kontextbezogener Leitfaden

Das Assistenten-Symbol in der Topbar offnet ein Chat-Panel, das weiß, auf welcher Seite Sie sich befinden, welche Datensatze Sie betrachten und wie Ihre Workspace-Daten aussehen. Es ist als Tool-using Agent aufgebaut: Statt Zahlen zu erraten, fragt sie danach. Auf dem Desktop offnet sich das Panel als Drawer, der rechts an den Bildschirmrand angeheftet ist; auf Mobilgeraten offnet es sich als Bottom Sheet uber die Sparkles-Schaltflache im mobilen Header.

### Einen Menschen fragen (Vraag het Sil)

Unten im Gespräch steht der Block „Kommst du nicht weiter?“: die Menschen, die gerade Fragen beantworten, mit Name und Foto, daneben eine WhatsApp-Schaltfläche. Der Assistent bleibt der schnellste Weg für die meisten Fragen; ein Mensch ist so nie weit entfernt. Der Block erscheint nicht schon beim Öffnen eines Panels. Im kontextbezogenen Leitfaden kommt er nach der ersten fertigen Antwort. Der Finanzassistent von Office ist ein Chat über Ihre eigenen Zahlen und zum Erstellen von Angeboten und Rechnungen, kein Helpdesk: Dort erscheint der Block, sobald das Gespräch zu einer Hilfefrage wird (die Antwort kommt aus der FAQ oder dem Handbuch), der Assistent ins Stocken gerät oder Sie selbst nach einem Menschen fragen. Schreiben Sie zum Beispiel „Kundendienst“ oder „echte Person“, steht der Block sofort da.

Wählen Sie eine der Personen aus, öffnet sich ein kurzes Formular: Ihre Frage, plus ein standardmäßig angehaktes Ankreuzfeld, um Ihr Gespräch mit dem Assistenten mitzuschicken. Das Senden macht aus Ihrer Frage ein ganz normales Support-Ticket, und die Antwort kommt in der App und per E-Mail, mit dem Versprechen einer Antwort innerhalb eines Werktags, meist nach wenigen Stunden. Nach dem Senden führt ein Link zu Ihrer Frage als Ticket-Thread. Die WhatsApp-Schaltfläche öffnet einen Chat, in dem eine kurze Vorstellung schon steht: wer Sie sind, zu welcher Seite Ihre Frage gehört und was Sie fragen möchten.

### Chat-Limits

Die Chat-Nutzung hängt von Ihrem Tarif ab:

| Tarif | Chat-Nachrichten (monatlich) |
|---|---|
| Desk | 10 |
| Office | 1 000 |

KI-Limits gelten monatlich, nicht taglich. Sie werden am Ersten jedes Monats zuruckgesetzt.

### EU-KI-Gesetz-Offenlegung (Art. 50)

Der kontextbezogene Leitfaden fallt unter das EU-KI-Gesetz (Verordnung 2024/1689) als KI-System mit begrenztem Risiko (Artikel 50). Das bedeutet, wir mussen klarstellen, dass Sie mit einer KI sprechen. Der Leitfaden enthalt dafur zwei Elemente:

- **KI-Badge.** Eine kleine "KI"-Pille neben dem Assistentennamen in der Drawer-Header. Immer sichtbar, solange der Leitfaden geoffnet ist. Ein Tooltip auf dem Badge nennt den zugrunde liegenden Anbieter (Google Gemini).
- **Offenlegungstext.** Eine kurze Zeile unter der Begrussungsfrage im leeren Chat: "Sie sprechen mit einem KI-Assistenten. Antworten konnen Fehler enthalten; uberprufen Sie finanzielle oder steuerliche Schlussfolgerungen immer selbst."

Die Verpflichtung tritt im August 2026 in Kraft; die Offenlegungen wurden vor der Frist implementiert.

### Office-Erscheinungsbild

Office-Workspaces erhalten ein Premium-Assistenten-Design, das das generische Styling durch einen Violett-Akzent ersetzt. Ist Ihr Workspace im Office-Tarif, ändert sich das Assistenten-Panel visuell:

- Die „KI“-Pille wird zu einer violetten Pille, die den Office-Assistenten kennzeichnet.
- Panel-Rand, Avatar-Ring, Online-Punkt und Sende-Button wechseln zu Violett (`#a855f7`).
- Die Statuszeile zeigt eine Office-spezifische Begrüßung statt des generischen „Bereit zu helfen.“

Das Office-Erscheinungsbild ist rein kosmetisch. Die zugrunde liegende Modellauswahl, der Tool-Katalog und die EU-KI-Gesetz-Offenlegungen bleiben für alle Tarife identisch. Der Unterschied liegt im Limit: Office hat 1 000 Chat-Nachrichten pro Monat, Desk 10.

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
4. Klicken Sie auf **Übernehmen**, um ihn zu verwenden, oder auf **Ignorieren**, um ihn zu überspringen

Die Übernahme schreibt über denselben Pfad wie eine manuelle Bearbeitung. Eine Ausgabe im Papierkorb, eine gesperrte MwSt.-Periode oder eine archivierte/ungültige Kategorie blockiert die Übernahme mit denselben Fehlercodes, die Sie auch bei manueller Bearbeitung sehen. Bei erfolgreicher Übernahme schreibt MyCompanyDesk einen Audit-Log-Eintrag für die geänderten Felder, genau wie bei einer normalen Aktualisierung.

Endpoints, die auf einen bestimmten Vorschlag oder eine bestimmte Ausgabe wirken, validieren ihre Pfadparameter als UUID. Anfragen mit einer ungültigen `entityId` oder Vorschlags-`id` geben `400 VALIDATION_ERROR` zurück, bevor die Service-Ebene erreicht wird, damit ungültige URLs keine unerwarteten 500-Fehler auslösen.

Wenn Sie einen Vorschlag übernehmen, werden die zwischengespeicherten Finanzsummen, die vom geänderten Eintrag abhängen, sofort ungültig gemacht. USt., Berichte und das Dashboard aktualisieren sich direkt und zeigen die neue Kategorie, USt.-Behandlung oder Beschreibung.

::: info
Kategorie-Vorschläge funktionieren in jedem Tarif, mit einem Monatslimit: 10 in Desk und 2 000 in Office. Verbesserte Beschreibungen gehören zu Office. Aktivieren Sie KI-Vorschläge unter **Unternehmen > Funktionen**.
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
Textprüfung ist in allen Tarifen verfügbar, einschließlich Desk.
:::

## Kontozusammenfassungen

KI generiert regelmaassige Zusammenfassungen Ihrer Geschaftsaktivitat:

- **Taglich** -- Kurzer Uberblick uber die Transaktionen des Tages
- **Wochentlich** -- Wochenubersicht mit Trends
- **Monatlich** -- Umfassende monatliche Analyse

Zusammenfassungen werden in Ihrer bevorzugten Sprache generiert und sind über das Dashboard verfügbar.

## Dashboard-Briefing Insight (Office)

Der Dashboard-Briefing-Hero zeigt ein kurzes, persönliches KI-generiertes Briefing für Office-Workspaces. Der Server generiert das Briefing einmal pro Kalendertag und cached es für den Rest des Tages.

- **Stimme.** Das Briefing spricht in der ersten Person ("ich") und adressiert den Nutzer formell ("Sie"). Es öffnet mit der dringendsten Handlung, fügt höchstens ein oder zwei unterstützende Punkte hinzu und schließt mit einem konkreten nächsten Schritt (z.B. "senden Sie Atelier Norden heute eine Zahlungserinnerung"). Warm, selbstbewusst, prägnant -- der Ton einer klugen Assistenz, die das Geschäft kennt.
- **Modell.** Der Endpunkt `POST /api/dashboard/briefing-insight` läuft auf Vertex AI `europe-west1` (Gemini 2.5 Flash). Ollama Cloud wird für diesen Pfad nicht verwendet.
- **Input-Signale.** Der Client sendet eine vollständige Übersicht der Geschäftsdaten des Tages: Liquidität und Runway, Umsatz und Gewinn (MTD + YTD), überfällige Forderungen (Anzahl, Summe, größter Kunde), Ausgaben (bald fällig + überfällig), Entwurfsanzahl, Projektmargen, USt.-Position (Saldo, Frist, Checklistenfortschritt, Reserve), nicht abgerechnete Stunden, aktuelle Zahlungen und neue Kunden. Alle Beträge werden vor dem Erreichen des Modells auf ganze Euro gerundet.
- **Sprachen.** Das Modell generiert das Briefing in `nl/de/en/fr` basierend auf der Sprache des Benutzers. Der Client sendet den ISO-639-1-Code mit der Anfrage.
- **Tarif-Gating.** Der Endpunkt ist an das `ai_insights` Feature-Flag gebunden, das Office erfordert. Wenn ein Workspace nicht berechtigt ist, zeigt der Client nur den Standard-Lede an.
- **Fallback.** Bei einem Fehler (Modell nicht verfügbar, 403, Netzwerkfehler) verwendet der Client den bestehenden Standard-Lede. Dem Benutzer wird keine Fehlermeldung angezeigt.
- **Client UX.** Während das AI-Briefing lädt, zeigt der Hero den gecachten deterministischen Lede des Vortages. Sobald die AI-Version eintrifft, ersetzt ein Cross-Fade-Übergang (Opacity + Slide) diesen. Das AI-Briefing erscheint mit einem Sparkle-Symbol und primärer Textfarbe. Ein layout-getreuer Skeleton-Shimmer (`BriefingSkeleton`) hält die gesamte Dashboard-Form, bis die Kerndaten da sind, und löst sich dann in eine koordinierte, gestaffelte Eintrittsanimation auf. Nutzer mit reduced-motion erhalten keine Animationen.


## Antwort-Assistent im Posteingang (Office)

Der Posteingang kann die Antwort auf eine Kundenmail für Sie entwerfen. Der Endpunkt `POST /api/inbox/threads/:id/generate-reply` läuft über denselben LLM-Router wie die anderen KI-Flächen (Workload `inbox-generate-reply`) und kennt zwei Modi: `reply` entwirft eine vollständige Antwort von Grund auf (lenkbar über eine kurze Anweisung oder einen Chip wie „Bestätigen“), `rewrite` überarbeitet Ihren eigenen Entwurf, ohne Bedeutung oder Sprache zu verändern.

- **Modell.** Gemini auf Vertex AI `europe-west1` über die übliche Kette, wie bei den anderen Chat-Flächen.
- **Eingabe.** Der triagierte, gekürzte Konversationskontext: Mail, die wirklich angekommen ist, und Antworten, die wirklich versendet wurden. Entwürfe, fehlgeschlagene Sendeversuche und Bounces zählen nicht mit, damit ein generierter Entwurf oder eine Fehlermail nie wie eine gelesene Mail behandelt wird.
- **Ausgabe.** Nur reinen Text (der Editor verpackt ihn in HTML), in der Sprache der letzten eingehenden Nachricht, in der ersten Person Singular, signiert mit dem Namen des Inhabers. Unbekannte Details werden zu Platzhaltern wie `[datum]`, nicht zu Erfindungen.
- **Gating.** `ai_insights`, also nur Office; der Client blendet die gesamte Hilfestellung aus, wenn der Anspruch fehlt oder der Thread als verdächtig markiert ist.
- **Fehlerverhalten.** Jeder Modellfehler kehrt als `{ ok: false }` zurück, ohne zu werfen: Der Editor zeigt einen Toast an und bleibt unangetastet.

## Tarifberechtigungen

| Funktion | Desk | Office |
|---|---|---|
| Kontextbezogener Leitfaden | 10 Chat-Nachrichten pro Monat, danach nur FAQ | 1 000 Chat-Nachrichten pro Monat |
| KI-Vorschläge | An (10 pro Monat) | An (2 000 pro Monat) |
| Lieferantenklassifizierung | An | An |
| Belegscanning | An (3 pro Monat) | An (200 pro Monat) |
| Textprüfung | An | An |
| Übersetzung | An (nur UI) | An |
| Antwort-Assistent im Posteingang | Aus | An |
| Dashboard-Briefing Insight | Aus | An |

## Datenschutz

Alle Cloud-KI-Pfade laufen standardmaassig uber Vertex AI in `europe-west1` (EU). MyCompanyDesk hat eine Auftragsverarbeitungsvereinbarung mit Google Cloud fur die Vertex-AI-Nutzung. Ollama Cloud (ollama.com, US-gehostet) ist standardmaassig deaktiviert, da keine Auftragsverarbeitungsvereinbarung mit Ollama Inc. besteht. Sie konnen es pro Arbeitsbereich fur Workloads ohne personenbezogene Daten aktivieren, aber es ist fur alle Tarife deaktiviert.

Wenn Sie `ai_processing_mode` auf `local_only` setzen, bleiben Belegscanning, KI-Vorschlage, Textprufung, Lieferantenklassifizierung und Branchenerkennung vollstandig auf Ihrem eigenen Server. Der kontextbezogene Leitfaden funktioniert nur in der Cloud und ist im `local_only`-Modus deaktiviert.

## Tipps

- Aktivieren Sie KI-Vorschlage einmal und sie arbeiten automatisch im Hintergrund
- Belegscanning ist besonders nutzlich fur Papierbelege -- machen Sie einfach ein Foto
- Der kontextbezogene Leitfaden kann die meisten "Wie mache ich..."-Fragen zur App beantworten
