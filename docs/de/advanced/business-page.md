---
title: Website-Builder
---

# Website-Builder

Erstellen Sie Ihre Geschäftswebsite mit einem Drag-and-Drop-Editor. Legen Sie mehrere Seiten an, gestalten Sie sie mit Abschnitten und Blöcken, passen Sie Farben und Schriften an und veröffentlichen Sie, wenn Sie bereit sind.

## Übersicht

Der Website-Builder ersetzt das alte einseitige Unternehmensprofil. Sie erhalten einen vollständigen Website-Editor mit:

- **Mehrere Seiten**: Erstellen Sie so viele Seiten, wie Sie benötigen, jede mit eigenem Pfad und eigenen Abschnitten.
- **Domain-Wechsler**: Wenn Ihr Workspace mehrere eigene Domains hat (Pro-Tarif), können Sie über ein Dropdown in der oberen Leiste zwischen der Bearbeitung der Hauptwebsite und einer Domain-Variante wechseln. Jede Domain erhält ihre eigenen Seiten, Navigation, Design-Tokens und Veröffentlichungs-Snapshots.
- **Abschnittsblöcke**: Fügen Sie Hero-, Text-, Galerie-, Dienstleistungs-, Team-, Testimonial-, Kontaktformular- und benutzerdefinierte HTML-Abschnitte zu jeder Seite hinzu.
- **Design-Tokens**: Legen Sie Markenfarben, Schriften, Abstände, Eckenradius, Bewegungsstil, benutzerdefiniertes CSS und ein Site-Favicon fest. Änderungen gelten für die gesamte Site.
- **Navigations-Editor**: Ordnen Sie Header-Links per Drag-and-Drop, mit Dropdown-Gruppen und externen Links.
- **Veröffentlichungs-Snapshots**: Arbeiten Sie im Entwurf, sehen Sie sich Ihre Änderungen in der Vorschau an und veröffentlichen Sie dann. Unveröffentlichte Änderungen werden in der oberen Leiste angezeigt.
- **Responsive Vorschau**: Wechseln Sie während der Bearbeitung zwischen Desktop-, Tablet- und Mobilansicht.

Den Website-Builder finden Sie unter **Unternehmen > Ihre Website** (`/website`).

## Tabs

Der Website-Builder hat fünf Tabs (sechs, wenn Stil ausgeklappt ist):

- **Editor**: Erstellen Sie Seiten durch Hinzufügen und Anordnen von Abschnitten. Klicken Sie auf einen Abschnitt, um Inhalt, Layout, Stil oder Animation zu bearbeiten. Ziehen Sie Abschnitte zum Verschieben, Duplizieren oder Löschen.
- **Seiten**: Verwalten Sie Ihre Seiten: Erstellen Sie neue aus Vorlagen, legen Sie Pfade und Sichtbarkeit fest und sehen Sie, welche Seiten live, Entwurf oder geplant sind. Klicken Sie auf eine Seite, um sie im Editor zu öffnen. Die gesperrte Startseite kann nicht gelöscht werden.
- **Stil**: Passen Sie Ihre site-weiten Design-Tokens an: Farben (Marke, Akzent, Papier, Tinte), Schriften (Überschrift, Text, Mono aus der Schriftbibliothek), Navigationsleiste (Layout, Hintergrund, CTA-Stil), Skalierung (Radius, Dichte, maximale Breite, Abschnittsabstand), Bewegung, Schaltflächenstile und benutzerdefiniertes CSS. Sie können auch Head-Snippets für Analytics (Plausible, Umami, Matomo) oder Schrift-Preconnects hinzufügen. Klicken Sie auf die Stil-Überschrift, um die Registerkarte ein- oder auszuklappen.
- **Domain & SEO**: Konfigurieren Sie Ihre eigene Domain und SEO-Einstellungen. Der Inhalt hier bezieht sich auf die Domain, die im Domain-Wechsler in der oberen Leiste ausgewählt ist. Wenn die Hauptwebsite (angezeigt als Ihr Workspace-Name) ausgewählt ist, erscheint kein domain-spezifisches Panel. Siehe [Domains, Website und Posteingang](/de/features/domains-website-inbox) für die vollständige Domain-Verwaltung.
- **Integrationen**: Binden Sie Drittanbieterdienste in Ihre Website ein.

## Seiten erstellen

1. Gehen Sie zum Tab **Seiten**.
2. Klicken Sie auf **Neue Seite**.
3. Geben Sie einen Titel und einen Pfad ein (z. B. `/ueber-uns`).
4. Wählen Sie eine Vorlage oder beginnen Sie mit einer leeren Seite.
5. Die Seite öffnet sich im Editor, wo Sie Abschnitte hinzufügen und ausbauen können.

Jede Seite erhält einen eindeutigen Pfad. Die Startseite (`/`) wird standardmäßig erstellt und kann nicht gelöscht werden.

## Seiten mit Abschnitten aufbauen

Im **Editor**-Tab:

- Klicken Sie auf **Abschnitt hinzufügen**, um die verfügbaren Blocktypen zu sehen (Hero, Text, Galerie, Dienstleistungen, Team, Testimonials, Kontaktformular, Preise, Produkt, benutzerdefiniertes HTML und mehr).
- Wählen Sie einen Blocktyp aus, um ihn auf der Seite einzufügen.
- Klicken Sie auf einen Abschnitt, um das Inspektionspanel zu öffnen, in dem Sie Inhalt, Layout, Stil und Animation bearbeiten können.
- Ziehen Sie Abschnitte nach oben oder unten, um sie neu anzuordnen. Nutzen Sie die Duplizieren- und Löschen-Aktionen bei jedem Abschnitt.

Einige Abschnitte haben Systemvarianten, die nur auf der gesperrten Startseite verfügbar sind.

### Preismodelle mit Kauf-Buttons

Der Preise-Abschnitt zeigt Ihre Pakete oder Pläne. Jede Stufe kann optional einen Kauf-Button erhalten:

- Markieren Sie eine Stufe als **purchasable** und geben Sie den **Betrag in Cent** an (z. B. 4999 für EUR 49,99).
- Ein **Jetzt kaufen**-Button ersetzt den statischen CTA-Link. Besucher, die darauf klicken, werden über den MyCompanyDesk-Checkout zu Mollie oder Stripe Connect zur Zahlung weitergeleitet.
- Das Kauf-Button-Label ist standardmäßig "Jetzt kaufen", kann aber pro Stufe mit dem **buyLabel**-Feld angepasst werden.
- Preisstufen ohne Kauf-Button behalten das bestehende CTA-Link-Verhalten.

### Produktblock

Eine eigenständige Einzelprodukt-Kaufkarte, ideal wenn eine vollständige Preistabelle zu viel wäre:

- Ein Produktname, Beschreibung, optionales Bild, Preis und ein Kauf-Button.
- Dieselbe Checkout-Anbindung wie die Preisstufen-Kauf-Buttons, Ihr Besucher zahlt über Mollie oder Stripe Connect.
- Eine optionale Hinweiszeile unter dem Button für Versandinformationen, Hinweise oder AGB-Verweise.

Siehe [Verkäufe](/de/features/domains-website-inbox#verkaufe) für die Nachverfolgung von Zahlungen und Bestellungen.

## Ihre Site gestalten

Im **Stil**-Tab steuern Sie das Erscheinungsbild Ihrer gesamten Site:

- **Farben**: Wählen Sie Marken-, Akzent-, Papier-, Tinten-, Oberflächen- und gedämpfte Farben. Die Palette wird über CSS Custom Properties angewendet.
- **Typografie**: Wählen Sie Überschrift-, Text- und Mono-Schriften aus der integrierten Schriftbibliothek (Geist, Inter, DM Sans, DM Serif Display, Fraunces, Instrument Serif, Geist Mono).
- **Skalierung**: Legen Sie Eckenradius, Dichte (kompakt, luftig, großzügig), maximale Inhaltsbreite und vertikalen Abschnittsabstand fest.
- **Bewegung**: Aktivieren Sie reduzierte Bewegung oder wählen Sie einen Bewegungsstil (keine, dezent, verspielt).
- **Schaltflächen**: Passen Sie Schaltflächenradius, Innenabstand und Hover-Effekte an.
- **Navigationsleiste**: Legen Sie das Layout (Standard, zentriert, geteilt), den Hintergrundstil (durchgehend, transparent mit Blur, vollständig transparent) und das Aussehen der CTA-Schaltfläche (ausgefüllt, Umrandung, nur Text) fest. Die Navigationsleisteneinstellungen gelten für jede Seite.
- **Benutzerdefiniertes CSS**: Schreiben Sie Ihr eigenes CSS, das in die Site eingebunden wird. Nützlich für Feinanpassungen oder zum Überschreiben von Standardwerten.
- **Favicon**: Laden Sie ein Favicon für Ihre Site hoch. Es erscheint in Browser-Tabs und Lesezeichen. Wenn Sie kein Favicon festlegen, verwendet die Site Ihr helles Logo, dann Ihr Geschäftsprofilbild.
- **Head-Snippets**: Fügen Sie Analytics-Skripte (Plausible, Umami, Matomo) oder Schrift-Preconnects über die Snippet-Auswahl hinzu.

Änderungen im Stil-Tab werden automatisch gespeichert und gelten für alle Seiten.

## Veröffentlichen

Die obere Leiste zeigt an, wie viele unveröffentlichte Änderungen vorhanden sind. Wenn Sie bereit sind:

1. Klicken Sie in der oberen Leiste auf **Veröffentlichen**.
2. Ihre Site wird unter der öffentlichen URL veröffentlicht (Ihre eigene Domain, Workspace-Subdomain oder die Fallback-Portalroute).

Unveröffentlichte Änderungen werden pro Seite und pro Token erfasst. Die Veröffentlichen-Schaltfläche ist deaktiviert, wenn nichts zu veröffentlichen ist.

## Navigation

Der Navigations-Editor ermöglicht es Ihnen, die Header-Links Ihrer Site zu ordnen:

- Ziehen Sie Seiten, um die Navigation neu anzuordnen.
- Erstellen Sie Dropdown-Gruppen, um Seiten unter einem übergeordneten Label zu verschachteln.
- Fügen Sie externe Links hinzu, die aus Ihrer Site herausführen.
- Das Logo im Header ist anklickbar und führt immer zurück zur Startseite.
- Die Startseite steht immer an erster Stelle und ist gesperrt.

## Öffentliche URL

Ihre Website wird unter der am besten geeigneten URL bereitgestellt:

1. Ihre eigene Domain (z. B. `https://acme.de`), wenn verifiziert und aktiviert
2. Ihre Workspace-Subdomain (z. B. `https://acme.mycompanydesk.com`)
3. Die Fallback-Portalroute (`/portal/{slug}`)

Siehe [Domains, Website und Posteingang](/de/features/domains-website-inbox) für Domain-Einrichtung und -Verifizierung.

## Angebotsanfrageformular

Besucher können weiterhin Angebotsanfragen über den Kontaktformular-Abschnitt einreichen:

1. Sie geben ihren Namen, ihre E-Mail-Adresse und ihre Nachricht ein.
2. Die Anfrage wird eingereicht.
3. Sie erhalten eine Benachrichtigung.
4. Die Anfrage erscheint unter **Angebote > Anfragen**.

Angebotsanfragen sind auf 1 pro 15 Minuten pro IP-Adresse begrenzt.

## Anfragen verwalten

Siehe [Angebote - Angebotsanfragen](/de/features/quotes#angebotsanfragen) für Details zur Verwaltung eingehender Anfragen.

## Verwandt

- [Domains, Website und Posteingang](/de/features/domains-website-inbox): Eigene Domain einrichten, Verifizierung, SSL und E-Mail-Posteingang.
- [Unternehmenseinstellungen](/de/settings/company): Wo Ihre Unternehmensdaten, Ihr Branding und Ihre Adresse hinterlegt sind.
- [Angebote](/de/features/quotes): Verwalten von Angebotsanfragen, die über Ihre Website eingehen.