---
title: Unternehmenseinstellungen
description: "Der Name auf Ihren Rechnungen, Adresse, Handelsregisternummer, Logo, Markenfarbe, Website und Öffnungszeiten, gebündelt in den Einstellungen."
last_verified: 2026-09-03
---

# Unternehmenseinstellungen

Alles, was bestimmt, wie Ihr Unternehmen nach außen wirkt: der Name auf Ihren Rechnungen, Ihr Logo und Ihre Markenfarbe, Ihre öffentliche Website und Ihre Öffnungszeiten.

## Wo Sie es finden

Öffnen Sie **Einstellungen** über das Menü oder gehen Sie zu `/settings`. Unternehmensthemen sind Zeilen in der Gruppe **Ihr Unternehmen** (in der App: "Je bedrijf"):

- **Unternehmensdaten** (Bedrijfsgegevens) unter `/settings/bedrijfsgegevens`: Firmendaten, Adresse, KVK-Nummer, USt.-Nummer, Öffnungszeiten
- **Logo und Farbe** (Logo en kleur) unter `/settings/uiterlijk`: Logo, Markenfarbe, Dokumentstil
- **Rechnungsdesign** (Factuurontwerp) unter `/settings/factuurontwerp`: das Designstudio für Ihre Rechnungen, beschrieben unter [PDF-Anpassung](/de/settings/pdf)

Alte Links zu den früheren Arbeitsbereich-Einstellungen leiten automatisch auf die neuen Seiten weiter.

## Unternehmensdaten (Bedrijfsgegevens)

Pfad: `/settings/bedrijfsgegevens`

Das Identitätsformular. Was jede Rechnung, jedes Angebot und jede E-Mail zeigt.

- **Firmenname**: erscheint auf jedem Dokument
- **Adresse**: Straße, Postleitzahl, Stadt, Land (mit Adress-Autovervollständigung)
- **Registrierung**: KVK-Nummer oder andere Registrierungsnummer. Die Schaltfläche **Aus KVK aktualisieren** ruft die aktuellsten Daten aus dem niederländischen Handelsregister ab und füllt leere Felder aus (Firmenname, Adresse, Postleitzahl, Stadt, Land). Bereits von Ihnen eingetragene Werte bleiben erhalten. Jeder Arbeitsbereich erhält 100 kostenlose KVK-Abrufe pro Tag (zwischengespeicherte Ergebnisse zählen nicht zum Limit). Bei 20 oder weniger verbleibenden Abrufen zeigt der Feldhinweis einen Zähler, wie viele noch übrig sind. Wenn die Tagesgrenze erreicht ist, können Sie die Daten manuell eingeben oder es morgen erneut versuchen.
- **USt.-Nummer**: Ihre Umsatzsteuernummer (z. B. `NL123456789B01`)
- **Kontakt**: öffentliche E-Mail-Adresse, Telefon, Support-E-Mail-Adresse, Zeitzone
- **Website + Social Media**: verwendet in der E-Mail-Signatur, auf Ihrer Unternehmensseite und in Fußzeilen

Änderungen werden automatisch gespeichert.

## Öffnungszeiten

Pfad: `/settings/bedrijfsgegevens#openingstijden`

Hier verwalten Sie eine zentrale Quelle für Ihre Öffnungszeiten. Dieselben Zeiten speisen Ihre Website und den Online-Terminblock, sodass Sie nie zwei Stellen synchron halten müssen.

**Wochenschema**

- Legen Sie pro Tag fest, ob Ihr Unternehmen **geöffnet** oder **geschlossen** ist.
- Für einen geöffneten Tag geben Sie einen oder zwei Zeiträume an, zum Beispiel `09:00 – 12:00` und `13:00 – 17:00`.
- Ein nicht konfigurierter Tag fällt für Website und Terminblock auf Bürozeiten (`09:00 – 17:00`) zurück.
- Sie können einen Tag auch auf **nach Vereinbarung** setzen, sodass er ohne feste Zeiten als geöffnet erscheint.

**Sonderöffnungszeiten**

- Fügen Sie einzelne Daten für Feiertage, Urlaub oder einmalige Änderungen hinzu.
- Pro Sonderdatum wählen Sie **geschlossen**, **nach Vereinbarung** oder einen **angepassten Zeitraum**.
- Der Online-Terminblock und Ihre Website berücksichtigen diese Ausnahmen.

Änderungen werden automatisch gespeichert. Siehe [Online-Termine](/de/features/site-bookings) für die Verwendung Ihrer Öffnungszeiten im Terminblock.

## Logo und Farbe (Logo en kleur)

Pfad: `/settings/uiterlijk`

Das Branding für Rechnungen, Angebote und ausgehende E-Mails, mit einer Live-Vorschau des Ergebnisses.

- **Logo hochladen**: wird auf jeder PDF und im E-Mail-Kopf verwendet
- **Markenfarbe**: eine Akzentfarbe für alle Ihre Dokumente und Ihre öffentliche Unternehmensseite
- **Stilvorlagen**: wählen Sie einen Dokumentstil, verfügbar ab Starter
- **PDF-Fußzeile**: der Fußzeilentext unten auf Ihren Dokumenten

Es gibt einen Stil und eine Markenfarbe für alle Dokumenttypen; eine zweite Akzentfarbe existiert nicht mehr. Für volle Kontrolle über Layout, Farben und Schriftart Ihrer Rechnungen und Angebote öffnen Sie die Zeile **Rechnungsdesign** (das Designstudio); siehe [PDF-Anpassung](/de/settings/pdf).

## Ihre Website

Ihre öffentliche Unternehmensseite verwalten Sie im eigenständigen Bereich **Website** in der Navigation, nicht unter Einstellungen. Es ist ein Dashboard mit sechs Tabs: Übersicht, Besucher, Auffindbarkeit, Verknüpfungen, Domain & E-Mail und Einstellungen. Der Site-Editor wird über **Website bearbeiten** geöffnet.

- Die Website ist ab dem Starter-Tarif verfügbar.
- Das Verbinden einer eigenen Domain, anstelle der Standard-Subdomain auf `mycompanydesk.com`, erfordert Pro. DNS-, SPF- und DKIM-Einträge werden für Sie verwaltet; sie liegen hinter einem Erweitert-Bereich, den die meisten Nutzer nie öffnen müssen.

## Verwandte Themen

- [PDF-Anpassung](/de/settings/pdf) für das Designstudio Rechnungsdesign
- [Tarif und Zahlungen](/de/settings/billing), um eine eigene Domain freizuschalten
- [E-Mail-Einrichtung](/de/settings/email), um von Ihrer eigenen Domain zu versenden
- Der Einrichtungsassistent unter `/setup` führt neue Arbeitsbereiche in einem Durchlauf durch diese Einstellungen
