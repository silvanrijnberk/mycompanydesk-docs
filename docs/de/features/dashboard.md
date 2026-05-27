---
title: Dashboard
---

# Dashboard

Das Dashboard unter `/dashboard` ist Ihre Startseite. Es zeigt ein festes Briefing-Layout, das Ihre Aufmerksamkeit erfordernde Punkte, wichtige Finanzkennzahlen und aktuelle Aktivitaeten in einer einzigen scrollbaren Ansicht zusammenfuehrt.

## Aufbau

Das Dashboard ist eine einzelne Seite (`BriefingDashboard`), die aus festen redaktionellen Bloecken aufgebaut ist. Es gibt keine individuelle Anpassung pro Benutzer. Jeder im Arbeitsbereich sieht dieselbe Struktur, gespeist aus denselben Live-Daten.

### Willkommensbildschirm

Bei einem brandneuen Konto ohne Rechnungen oder Kunden zeigt das Dashboard einen **Willkommensbildschirm** (`BriefingWelcome`) anstelle des vollstaendigen Briefings. Er fuehrt den Benutzer zu drei ersten Aktionen: eine Rechnung erstellen, einen Kunden hinzufuegen oder eine Ausgabe erfassen. Unter den Aktionskarten befindet sich ein Link zur [Einfuehrung](/de/getting-started/introduction). Sobald mindestens eine Rechnung oder ein Kunde existiert, verschwindet der Willkommensbildschirm dauerhaft und das vollstaendige Dashboard uebernimmt.

### Skeleton und erster Ladevorgang

Waehrend Daten geladen werden, zeigt das Dashboard einen **Skeleton**-Platzhalter (`BriefingSkeleton`): einen Shimmer, der die exakte Form jeder Karte spiegelt. Sobald die Kerndaten verfuegbar sind (Metriken gecached und Liquiditaet aufgeloest), loest sich der Skeleton in einer koordinierten Fade-Up-Animation auf. Jeder Block auf oberster Ebene erscheint mit einer gestaffelten Verzoegerung, sodass das gesamte Dashboard in einer fliessenden Bewegung sichtbar wird. Ein Sicherheitsnetz von 2,5 Sekunden verhindert, dass der Benutzer bei langsamen Verbindungen am Skeleton haengen bleibt. Die Media Query `prefers-reduced-motion: reduce` deaktiviert alle Eintrittsanimationen.

Die Seite besteht aus:
- Einem **Hero**-Panel mit Begruessung, AI-Lede und Periodenkontext
- Einer **Pulse**-Zeile mit vier KPIs: Liquiditaet/Runway, Umsatz (Monat + Jahr), Forderungen + DSO und USt.-Saldo + Frist
- Einem **Briefing-Feed**, aufgeteilt in drei Tabs: **Jetzt** (erfordert Aufmerksamkeit), **Diese Woche** (steht bevor) und **Gute Nachrichten** (Bestaetigungen)
- Einem **Cash-Diagramm** ueber ein 12-Monats-Fenster mit Ist + Prognose
- Einer **Wochenkarte**, **Projektmargen**-Liste, **Top-Kunden**-Liste, **Aktivitaets-Feed** und einem **USt.-Ring**
- Einem **Setup-Banner**, der stehen bleibt, bis der Assistent unter `/setup` abgeschlossen ist

Waehrend Daten geladen werden, zeigt das Dashboard einen **Skeleton**-Platzhalter (`BriefingSkeleton`): einen Shimmer, der die exakte Form jeder Karte spiegelt. Sobald die Kerndaten verfuegbar sind (Metriken gecached und Liquiditaet aufgeloest), loest sich der Skeleton in einer koordinierten Fade-Up-Animation auf. Jeder Block auf oberster Ebene erscheint mit einer gestaffelten Verzoegerung, sodass das gesamte Dashboard in einer fliessenden Bewegung sichtbar wird. Ein Sicherheitsnetz von 2,5 Sekunden verhindert, dass der Benutzer bei langsamen Verbindungen am Skeleton haengen bleibt. Die Media Query `prefers-reduced-motion: reduce` deaktiviert alle Eintrittsanimationen.

## Hero

Oben wird eine tageszeitabhaengige Begruessung angezeigt. Der AI-Lede ist das Herzstueck des Hero-Bereichs: ein kurzes, persoenliches, KI-geschriebenes Briefing, das das gesamte Geschaeftsbild synthetisiert.

Das AI-Briefing spricht in der ersten Person ("ich") und adressiert den Nutzer formell ("Sie"). Es oeffnet mit der dringendsten Handlung fuer heute, dann hoechstens ein oder zwei unterstuetzende Punkte, wo sie Mehrwert bieten. Es schliesst mit einem konkreten naechsten Schritt in der App (z.B. "senden Sie Atelier Norden heute eine Zahlungserinnerung", "schliessen Sie Ihre USt. ab"). Das Modell greift auf einen vollstaendigen Satz von Live-Signalen zurueck: Liquiditaet und Runway, Umsatz und Gewinn (MTD + YTD), ueberfaellige Forderungen (Anzahl, Summe, groesster Kunde), Ausgaben (bald faellig + ueberfaellig), Entwurfsanzahl, Projektmargen, USt.-Position (Saldo, Frist, Checklistenfortschritt, Reserve), nicht abgerechnete Stunden, aktuelle Zahlungen und neue Kunden. Alle Betraege sind auf ganze Euro gerundet.

Solange das AI-Briefing noch laedt, zeigt der Hero den gecachten deterministischen Lede des Vortages. Der Cross-Fade zur AI-Version ist ein sanfter Opacity-and-Slide-Uebergang (`Transition` mit `mode="out-in"`). Das AI-Briefing erscheint mit einem Sparkle-Symbol und der primaeren Textfarbe.

Das AI-Briefing ist in allen vier unterstuetzten Sprachen verfuegbar. Es wird einmal pro Kalendertag pro Unternehmen auf Vertex AI `europe-west1` (Gemini 2.5 Flash) generiert und fuer den Rest des Tages gecached. Wenn das Modell nicht verfuegbar ist oder der Workspace keine Pro-Berechtigung hat, wird nur der deterministische Lede angezeigt und es findet kein Cross-Fade statt.

Der Hero zeigt auch die Periodenbezeichnung (Standard ist Monat).

## Pulse-Zeile

Die vier Zellen der Pulse-Zeile ersetzen die alten Geldkacheln und den KPI-Header. Jede Zelle zeigt eine fokussierte Kennzahl mit Kontext:

| Zelle | Was sie zeigt |
|---|---|
| **Liquiditaet** | Aktueller Saldo (tatsaechlich bei aktiver Bankverbindung, sonst geschaetzt), plus Runway in Wochen |
| **Umsatz** | Umsatz dieses Monats mit Prozent gegenueber Vormonat, plus Jahr-bis-Datum |
| **Forderungen** | Gesamtsumme ausstehend, Anzahl ueberfaellig, und durchschnittliche Zahlungsfrist |
| **USt.** | Saldo (Rueckerstattung oder Zahlung), Frist und Steuerreserve |

## Briefing-Feed

Der Feed ist die Hauptflaeche fuer Aufmerksamkeit erfordernde Elemente. Er setzt echte Signale aus Arbeitsbereichsdaten zu einer strukturierten Liste mit drei Tab-Ansichten zusammen:

- **Jetzt.** Elemente, die heute Handlung erfordern: ueberfaellige Rechnungen, ueberfaellige Ausgaben, offene Belege, versandbereite Entwurfsrechnungen und USt.-Checklisteneintraege.
- **Diese Woche.** Elemente, die diese Woche faellig sind: faellige Rechnungen, zu zahlende Ausgaben und USt.-Fristen.
- **Gute Nachrichten.** Bestaetigungen: kuerzlich bezahlte Rechnungen, Umsatzwachstum und neue Kunden diesen Monat.

Jedes Feed-Element zeigt die Entitaet, den Betrag und kontextuelle Details. Der Feed oeffnet sich ueber eine Tableiste, die oben an der Liste verankert ist.

## Rechte Spalte und untere Zeile

| Karte | Inhalt |
|---|---|
| **Cash (12 Monate)** | Ein Liniendiagramm mit der tatsaechlichen Cash-Position bis heute und einer Prognose bis zum Monatsende. Erfordert ausreichend Historie, um die Projektion zu erstellen. |
| **Wochenkarte** | Diese Woche erfasste Stunden. |
| **Projektmargen** | Alle Projekte mit Umsatz, sortiert nach Margenprozentsatz, farbcodiert gruen/orange/rot. |
| **Top-Kunden** | Top-Kunden nach Umsatz dieses Jahr, mit Prozentsatz vom Gesamtumsatz. |
| **Letzte Aktivitaeten** | Ereignisse: Rechnung erstellt, Rechnung bezahlt, Ausgabe hinzugefuegt. |
| **USt.-Ring** | Aktueller USt.-Voranmeldungszeitraum, Checklistenfortschritt und Anzahl offener Belege. Verlinkt zur USt.-Voranmeldung. |

## Setup-Banner

Solange der Einrichtungsassistent unter `/setup` noch Felder zu fuellen hat, steht ein `FinishSetupBanner` oben auf dem Dashboard mit einer Zaehlung der ausstehenden Felder und einem **Weiter**-Button. Der Banner hat eine Schliessen-Schaltflaeche (X-Symbol), die den Banner pro Browser ueber localStorage ausblendet, sodass er ueber Seitenneuladungen hinweg ausgeblendet bleibt, bis der Assistent abgeschlossen ist. Der Assistent ist nicht blockierend: neue Anmeldungen landen direkt auf `/dashboard` und werden nicht zwangsumgeleitet.
