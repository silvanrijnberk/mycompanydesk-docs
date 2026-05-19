---
title: Dashboard
---

# Dashboard

Das Dashboard unter `/dashboard` ist Ihre Startseite. Es zeigt ein festes Briefing-Layout, das Ihre Aufmerksamkeit erfordernde Punkte, wichtige Finanzkennzahlen und aktuelle Aktivitäten in einer einzigen scrollbaren Ansicht zusammenführt.

## Aufbau

Das Dashboard ist eine einzelne Seite (`BriefingDashboard`), die aus festen redaktionellen Blocken aufgebaut ist. Es gibt keine individuelle Anpassung pro Benutzer. Jeder im Arbeitsbereich sieht dieselbe Struktur, gespeist aus denselben Live-Daten.

Die Seite besteht aus:
- Einem **Hero**-Panel mit Begruung, Lede-Zusammenfassung und Periodenkontext
- Einer **Pulse**-Zeile mit vier KPIs: Liquiditat/Runway, Umsatz (Monat + Jahr), Forderungen + DSO und USt.-Saldo + Frist
- Einem **Briefing-Feed**, aufgeteilt in drei Tabs: **Jetzt** (erfordert Aufmerksamkeit), **Diese Woche** (steht bevor) und **Gute Nachrichten** (Bestatigungen)
- Einem **Cash-Diagramm** uber ein 12-Monats-Fenster mit Ist + Prognose
- Einer **Wochenkarte**, **Projektmargen**-Liste, **Top-Kunden**-Liste, **Aktivitats-Feed** und einem **USt.-Ring**
- Einem **Setup-Banner**, der stehen bleibt, bis der Assistent unter `/setup` abgeschlossen ist

## Hero

Oben wird eine tageszeitabhangige Begruung angezeigt. Der Lede-Text fasst die aktuelle Situation zusammen: ob heute etwas Aufmerksamkeit erfordert, der grote uberfallige Posten, die Anzahl der Entwurfe und die Cash-Position.

Die Hero zeigt auch die Periodenbezeichnung (Standard ist Monat).

## Pulse-Zeile

Die vier Zellen der Pulse-Zeile ersetzen die alten Geldkacheln und den KPI-Header. Jede Zelle zeigt eine fokussierte Kennzahl mit Kontext:

| Zelle | Was sie zeigt |
|---|---|
| **Liquiditat** | Aktueller Saldo (tatsachlich bei aktiver Bankverbindung, sonst geschatzt), plus Runway in Wochen |
| **Umsatz** | Umsatz dieses Monats mit Prozent gegenuber Vormonat, plus Jahr-bis-Datum |
| **Forderungen** | Gesamtsumme ausstehend, Anzahl uberfallig, und durchschnittliche Zahlungsfrist |
| **USt.** | Saldo (Ruckerstattung oder Zahlung), Frist und Steuerreserve |

## Briefing-Feed

Der Feed ist die Hauptflache fur Aufmerksamkeit erfordernde Elemente. Er setzt echte Signale aus Arbeitsbereichsdaten zu einer strukturierten Liste mit drei Tab-Ansichten zusammen:

- **Jetzt.** Elemente, die heute Handlung erfordern: uberfallige Rechnungen, uberfallige Ausgaben, offene Belege, versandbereite Entwurfsrechnungen und USt.-Checklisteneintrage.
- **Diese Woche.** Elemente, die diese Woche fallig sind: fallige Rechnungen, zu zahlende Ausgaben und USt.-Fristen.
- **Gute Nachrichten.** Bestatigungen: kurzlich bezahlte Rechnungen, Umsatzwachstum und neue Kunden diesen Monat.

Jedes Feed-Element zeigt die Entitat, den Betrag und kontextuelle Details. Der Feed offnet sich uber eine Tableiste, die oben an der Liste verankert ist.

## Rechte Spalte und untere Zeile

| Karte | Inhalt |
|---|---|
| **Cash (12 Monate)** | Ein Liniendiagramm mit der tatsachlichen Cash-Position bis heute und einer Prognose bis zum Monatsende. Erfordert ausreichend Historie, um die Projektion zu erstellen. |
| **Wochenkarte** | Diese Woche erfasste Stunden. |
| **Projektmargen** | Alle Projekte mit Umsatz, sortiert nach Margenprozentsatz, farbcodiert grun/orange/rot. |
| **Top-Kunden** | Top-Kunden nach Umsatz dieses Jahr, mit Prozentsatz vom Gesamtumsatz. |
| **Letzte Aktivitaten** | Ereignisse: Rechnung erstellt, Rechnung bezahlt, Ausgabe hinzugefugt. |
| **USt.-Ring** | Aktueller USt.-Voranmeldungszeitraum, Checklistenfortschritt und Anzahl offener Belege. Verlinkt zur USt.-Voranmeldung. |

## Setup-Banner

Solange der Einrichtungsassistent unter `/setup` noch Felder zu fullen hat, steht ein `FinishSetupBanner` oben auf dem Dashboard mit einer Zahlung der ausstehenden Felder und einem **Weiter**-Button. Der Banner hat eine Schlieen-Schaltflache (X-Symbol), die den Banner pro Browser uber localStorage ausblendet, sodass er uber Seitenneuladungen hinweg ausgeblendet bleibt, bis der Assistent abgeschlossen ist. Der Assistent ist nicht blockierend: neue Anmeldungen landen direkt auf `/dashboard` und werden nicht zwangsumgeleitet.
