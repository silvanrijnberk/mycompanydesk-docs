---
title: Dashboard
---

# Dashboard

Das Dashboard ist Ihre Startseite. Es zeigt ein Briefing, das Ihre Aufmerksamkeitspunkte, wichtige Finanzkennzahlen und die jüngste Aktivität in einer einzigen scrollbaren Ansicht zusammenführt.

## Aufbau

Das Dashboard hat eine feste Briefing-Anordnung: Es gibt keine Einstellungen, um einzelne Karten zu verschieben oder auszublenden, und jeder Benutzer im Arbeitsbereich sieht dieselbe Struktur, gespeist aus denselben Live-Daten. Der Inhalt passt sich aber Ihrer Situation an: Ein brandneues Konto sieht einen Willkommensbildschirm, die Projektmargenkarte erscheint nur, wenn die Projektfunktion für Ihren Arbeitsbereich aktiviert ist, und Erinnerungsbanner lassen sich pro Browser ausblenden.

### Willkommensbildschirm

Bei einem brandneuen Konto ohne Rechnungen oder Kunden zeigt das Dashboard einen Willkommensbildschirm anstelle des vollständigen Briefings. Er führt Sie zu drei ersten Kernaktionen: eine Rechnung erstellen, einen Kunden hinzufügen oder eine Ausgabe erfassen. Unter den Aktionskarten steht ein Link zur [Einführung](/de/getting-started/introduction). Sobald mindestens eine Rechnung oder ein Kunde existiert, verschwindet der Willkommensbildschirm dauerhaft und das vollständige Dashboard übernimmt.

### Erster Ladevorgang

Während Daten geladen werden, zeigt das Dashboard einen Platzhalter, der die endgültige Form jeder Karte spiegelt, sodass nichts verspringt. Sobald die Daten da sind, blendet sich das Dashboard ein.

Das Dashboard besteht aus:

- Einem **Hero**-Panel mit Begrüßung, dem KI-Briefing und Periodenkontext
- Einer **Pulse**-Zeile mit vier KPIs: Liquidität/Runway, Umsatz (Monat + seit Jahresbeginn), Forderungen + DSO und USt.-Saldo + Frist
- Einem **Briefing-Feed** mit vier Reitern: **Alle**, **Jetzt** (erfordert Aufmerksamkeit), **Diese Woche** (steht bevor) und **Gute Nachrichten** (Bestätigungen)
- Einem **Cash-Diagramm** über ein 12-Monats-Fenster mit Ist-Werten + Prognose
- Einer **Wochenkarte**, einer **Projektmargen**-Liste, einer **Top-Kunden**-Liste, einem **Aktivitäts-Feed** und einem **USt.-Ring**
- Einem **Setup-Banner**, der stehen bleibt, bis der Einrichtungsassistent abgeschlossen ist

## Hero

Oben auf der Seite empfängt Sie eine tageszeitabhängige Begrüßung. Das KI-Briefing ist das Herzstück des Heros: ein kurzes, persönliches, KI-geschriebenes Briefing, das das gesamte Bild Ihres Unternehmens zusammenfasst.

Das KI-Briefing spricht in der ersten Person und richtet sich direkt an Sie. Es beginnt mit der dringendsten Aktion für heute, gefolgt von höchstens ein oder zwei unterstützenden Punkten, wo sie Mehrwert bieten. Es schließt mit einem vorgeschlagenen nächsten Schritt in der App (zum Beispiel einem bestimmten Kunden eine Zahlungserinnerung senden oder Ihre USt.-Erklärung abschließen). Es stützt sich auf einen vollständigen Überblick über Live-Signale: Liquidität und Runway, Umsatz und Gewinn (Monat + seit Jahresbeginn), überfällige Forderungen (Anzahl, Summe, säumigster Kunde), Eingangsrechnungen (bald fällig + überfällig), Anzahl der Entwürfe, Projektmargen, USt.-Position (Saldo, Frist, Checklistenfortschritt, Rücklage), nicht abgerechnete Stunden, kürzliche Zahlungen und neue Kunden. Alle Beträge sind auf ganze Euro gerundet.

Während das KI-Briefing noch lädt, zeigt der Hero die zwischengespeicherte Standardzusammenfassung des Vortages und geht dann fließend zur KI-Version über. Das KI-Briefing erscheint mit einem Funkelsymbol.

Das KI-Briefing ist in jedem Tarif und in allen vier unterstützten Sprachen verfügbar. Es wird einmal pro Kalendertag pro Unternehmen generiert und für den Rest des Tages zwischengespeichert. Kann das Briefing nicht generiert werden, wird stattdessen die Standardzusammenfassung angezeigt.

Der Hero trägt außerdem die Periodenbezeichnung (Standard ist Monat).

## Pulse-Zeile

Die vier Zellen der Pulse-Zeile zeigen fokussierte Kennzahlen mit Kontext:

| Zelle | Was sie zeigt |
|---|---|
| **Liquidität** | Aktueller Saldo (tatsächlich bei aktiver Bankverbindung, sonst geschätzt), plus Runway in Wochen |
| **Umsatz** | Umsatz des laufenden Monats mit Prozent gegenüber dem Vormonat, plus Wert seit Jahresbeginn |
| **Forderungen** | Gesamtsumme ausstehend, Anzahl überfällig und durchschnittliche Außenstandsdauer |
| **USt.** | Saldo (Erstattung oder Zahlung), Fristdatum und Steuerrücklage |

## Briefing-Feed

Der Feed ist die wichtigste Aufmerksamkeitsfläche. Er setzt echte Signale aus den Daten Ihres Arbeitsbereichs zu einer strukturierten Liste mit vier Reiteransichten zusammen, beginnend mit **Alle** (alles zusammen):

- **Jetzt.** Punkte, die heute Handlung erfordern: überfällige Rechnungen, überfällige Eingangsrechnungen, offene Belege, versandbereite Rechnungsentwürfe und USt.-Checklistenpunkte.
- **Diese Woche.** Punkte, die in der kommenden Woche anstehen: fällige Rechnungen, zu zahlende Eingangsrechnungen und USt.-Fristen.
- **Gute Nachrichten.** Bestätigungen: kürzlich bezahlte Rechnungen, Umsatzwachstum und neue Kunden in diesem Monat.

Jedes Feed-Element zeigt den Datensatz, den Betrag und kontextuelle Details. Der Feed öffnet sich über eine Reiterleiste, die oben an der Liste verankert ist.

## Rechte Spalte und untere Zeile

| Karte | Inhalt |
|---|---|
| **Cash (12 Monate)** | Ein Liniendiagramm mit der tatsächlichen Cash-Position bis heute und einer Prognose bis zum Monatsende. Erfordert ausreichend Historie für die Projektion. |
| **Wochenkarte** | In dieser Woche erfasste Stunden. |
| **Projektmargen** | Alle Projekte mit Umsatz, sortiert nach Margenprozentsatz, farblich markiert in Grün/Orange/Rot. Sichtbar, wenn die Projektfunktion aktiviert ist. |
| **Top-Kunden** | Top-Kunden nach Umsatz in diesem Jahr, mit Prozentanteil am Gesamtumsatz. |
| **Letzte Aktivitäten** | Ereignisse: Rechnung erstellt, Rechnung bezahlt, Ausgabe hinzugefügt. |
| **USt.-Ring** | Aktueller USt.-Erklärungszeitraum, Checklistenfortschritt und Anzahl offener Belege. Verlinkt zur USt.-Erklärung. |

## Setup-Banner

Solange der Einrichtungsassistent noch Felder zu füllen hat, heftet sich ein Banner mit der Zahl der offenen Felder und einer Schaltfläche **Einrichtung fortsetzen** über das Dashboard. Er hat eine Schließen-Schaltfläche, die den Banner in Ihrem Browser ausblendet, bis der Assistent abgeschlossen ist, auch über Neuladen hinweg. Der Assistent ist nicht blockierend: Neue Anmeldungen landen direkt auf dem Dashboard und werden nicht hindurchgezwungen.
