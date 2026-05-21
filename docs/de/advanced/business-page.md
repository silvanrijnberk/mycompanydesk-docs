---
title: Website-Builder
---

# Website-Builder

Erstellen Sie Ihre Geschäftswebsite mit einem Drag-and-Drop-Editor. Legen Sie mehrere Seiten an, gestalten Sie sie mit Abschnitten und Blöcken, passen Sie Farben und Schriften an und veröffentlichen Sie, wenn Sie bereit sind.

## Übersicht

Der Website-Builder ersetzt das alte einseitige Unternehmensprofil. Sie erhalten einen vollständigen Website-Editor mit:

- **Mehrere Seiten**: Erstellen Sie so viele Seiten, wie Sie benötigen, jede mit eigenem Pfad und eigenen Abschnitten.
- **Domain-Wechsler**: Wenn Ihr Workspace mehrere eigene Domains hat (Pro-Tarif), können Sie über ein Dropdown in der oberen Leiste zwischen der Bearbeitung der Hauptwebsite und einer Domain-Variante wechseln. Jede Domain erhält ihre eigenen Seiten, Navigation, Design-Tokens und Veröffentlichungs-Snapshots.
- **Abschnittsblöcke**: Fügen Sie Hero-, Text-, Galerie-, Spotlight-, Dienstleistungs-, Team-, Testimonial-, Kontaktformular- und benutzerdefinierte HTML-Abschnitte zu jeder Seite hinzu.
- **Design-Tokens**: Legen Sie Markenfarben, Schriften, Abstände, Eckenradius, Bewegungsstil, benutzerdefiniertes CSS und ein Site-Favicon fest. Änderungen gelten für die gesamte Site.
- **Navigations-Editor**: Ordnen Sie Header-Links per Drag-and-Drop, mit Dropdown-Gruppen und externen Links.
- **Veröffentlichungs-Snapshots**: Arbeiten Sie im Entwurf, sehen Sie sich Ihre Änderungen in der Vorschau an und veröffentlichen Sie dann. Unveröffentlichte Änderungen werden in der oberen Leiste angezeigt.
- **Responsive Vorschau**: Wechseln Sie während der Bearbeitung zwischen Desktop-, Tablet- und Mobilansicht.

Den Website-Builder finden Sie unter **Unternehmen > Ihre Website** (`/website`).

## KI-Schnellstart

Wenn Sie den Website-Builder zum ersten Mal in einem neuen Workspace öffnen, erscheint ein Schnellstart-Banner oben. Es liest Ihre Handelsregisterdaten (Firmenname, Branche, Stadt) und schlägt einen ersten Claim, einen Über-uns-Text und drei Dienstleistungen vor. Sie können alles direkt anpassen bevor Sie übernehmen, neu generieren wenn der erste Vorschlag nicht ganz passt, oder das Banner ausblenden. Keine Wizard-Fragen, keine Hürde vorab.

Was das Banner für Sie tut:

- **Generieren**: Klicken Sie auf **Vorschlag generieren**, um die KI Ihre KVK-Daten lesen und Text vorschlagen zu lassen.
- **Inline bearbeiten**: Passen Sie Claim, Über-uns-Text und Dienstleistungsnamen und -beschreibungen direkt im Banner an.
- **Übernehmen**: Klicken Sie auf **Übernehmen**, um den freigegebenen Text in Ihren Workspace zu schreiben. Ihre Unternehmensbeschreibung, der Hero-Claim und die Dienstleistungen werden in einem Schritt aktualisiert.
- **Neu generieren**: Nicht zufrieden? Klicken Sie auf **Neu generieren** für einen neuen Satz Vorschläge.
- **Ausblenden**: Das Banner merkt sich Ihre Entscheidung lokal. Es bleibt ausgeblendet, bis Sie Ihre Workspace-Daten zurücksetzen.

Das Banner verwendet das Gemini KI-Modell (Lite-Variante), sofern in Ihrem Workspace verfügbar. Wenn KI nicht konfiguriert ist, arbeitet das Banner trotzdem mit einem sinnvollen Fallback auf Basis Ihrer Branchenkennzahl und Ihres Firmennamens.

## Tabs

Der Website-Builder hat fünf Tabs (sechs, wenn Stil ausgeklappt ist):

- **Editor**: Erstellen Sie Seiten durch Hinzufügen und Anordnen von Abschnitten. Klicken Sie auf einen Abschnitt, um Inhalt, Layout, Stil oder Animation zu bearbeiten. Ziehen Sie Abschnitte zum Verschieben, Duplizieren oder Löschen.
- **Seiten**: Verwalten Sie Ihre Seiten: Erstellen Sie neue aus Vorlagen, legen Sie Pfade und Sichtbarkeit fest und sehen Sie, welche Seiten live, Entwurf oder geplant sind. Klicken Sie auf eine Seite, um sie im Editor zu öffnen. Die gesperrte Startseite kann nicht gelöscht werden. Jede Seite zeigt ein Live/Entwurf-Symbol mit Schnellumschaltflächen: Klicken Sie auf das Globus-Icon, um eine Entwurfsseite live zu schalten, oder auf das Ausblenden-Icon, um eine Live-Seite zurück in den Entwurf zu setzen.
- **Stil**: Passen Sie Ihre site-weiten Design-Tokens an. Wählen Sie ein Ein-Klick-Preset (Editorial) und passen Sie dann Farben (Marke, Akzent, Papier, Tinte), Schriften (Überschrift, Text, Mono aus der Schriftbibliothek), Navigationsleiste (Layout, Hintergrund, CTA-Stil), Skalierung (Radius, Dichte, maximale Breite, Abschnittsabstand), Bewegung, Schaltflächenstile und benutzerdefiniertes CSS an. Sie können auch Head-Snippets für Analytics (Plausible, Umami, Matomo) oder Schrift-Preconnects hinzufügen. Klicken Sie auf die Stil-Überschrift, um die Registerkarte ein- oder auszuklappen.
- **Domain & SEO**: Konfigurieren Sie Ihre eigene Domain und SEO-Einstellungen. Der Inhalt hier bezieht sich auf die Domain, die im Domain-Wechsler in der oberen Leiste ausgewählt ist. Wenn die Hauptwebsite (angezeigt als Ihr Workspace-Name) ausgewählt ist, erscheint kein domain-spezifisches Panel. Siehe [Domains, Website und Posteingang](/de/features/domains-website-inbox) für die vollständige Domain-Verwaltung.
- **Integrationen**: Binden Sie Drittanbieterdienste in Ihre Website ein.

## Seiten erstellen

1. Gehen Sie zum Tab **Seiten**.
2. Klicken Sie auf **Neue Seite**.
3. Geben Sie einen Titel und einen Pfad ein (z. B. `/ueber-uns`).
4. Wählen Sie eine Vorlage oder beginnen Sie mit einer leeren Seite.
5. Die Seite öffnet sich im Editor, wo Sie Abschnitte hinzufügen und ausbauen können.

Jede Seite erhält einen eindeutigen Pfad. Die Startseite (`/`) wird standardmäßig erstellt und kann nicht gelöscht werden.

### Seitenstatus: Live vs Entwurf

Seiten haben einen Status, der steuert, ob sie auf Ihrer veröffentlichten Site erscheinen:

- **Live**: Die Seite wird in den Veröffentlichungs-Snapshot aufgenommen. Besucher sehen sie nach der Veröffentlichung auf Ihrer öffentlichen Site.
- **Entwurf**: Die Seite ist in Bearbeitung. Sie bleibt für Besucher unsichtbar, auch nachdem Sie die Site veröffentlichen.

Die Startseite beginnt standardmäßig als **Live**. Jede andere neue Seite beginnt als **Entwurf**, damit sie nicht öffentlich wird, bevor Sie bereit sind. Sie können jede Seite mit den Schnellaktionen in der Seitentabelle zwischen Live und Entwurf umschalten. Die Statusänderung wird sofort gespeichert und aktiviert die Veröffentlichen-Schaltfläche in der oberen Leiste.

Eine Site, deren Startseite auf Entwurf steht, zeigt bei der Veröffentlichung nichts an. Wenn Sie die Startseite in den Entwurf gesetzt haben, schalten Sie sie zurück auf Live und veröffentlichen Sie erneut, um die Site wiederherzustellen.

## Seiten mit Abschnitten aufbauen

Im **Editor**-Tab:

- Klicken Sie auf **Abschnitt hinzufügen**, um die verfügbaren Blocktypen zu sehen (Hero, Text, Galerie, Spotlight, Dienstleistungen, Team, Testimonials, Kontaktformular, Preise, Produkt, benutzerdefiniertes HTML und mehr).
- Wählen Sie einen Blocktyp aus, um ihn auf der Seite einzufügen.
- Klicken Sie auf einen Abschnitt, um das Inspektionspanel zu öffnen, in dem Sie Inhalt, Layout, Stil und Animation bearbeiten können.
- Ziehen Sie Abschnitte nach oben oder unten, um sie neu anzuordnen. Nutzen Sie die Duplizieren- und Löschen-Aktionen bei jedem Abschnitt.

Einige Abschnitte haben Systemvarianten, die nur auf der gesperrten Startseite verfügbar sind.

### Spotlight

Der Spotlight-Block ist eine Zeile mit abwechselndem Bild und Text. Jede Zeile zeigt ein Bild auf der einen Seite und Text auf der anderen: eine Eyebrow, einen Titel, einen Untertitel, Aufzählungspunkte mit Häkchen und einen optionalen Call-to-Action-Link. Im Layout-Panel legen Sie fest, auf welcher Seite das Bild erscheint.

Wichtige Hinweise:

- **Bildseite**: Die Layout-Variante steht standardmäßig auf Bild-rechts. Stellen Sie im Layout-Panel auf Bild-links um, um die Zeile zu spiegeln.
- **Optionale Elemente**: Eyebrow, Untertitel, Aufzählungspunkte, CTA und Bild sind alle optional. Ein Spotlight nur mit Titel und Bild wird trotzdem sauber dargestellt.
- **Stapeln**: Setzen Sie mehrere Spotlight-Abschnitte untereinander, um das klassische Feature-Listen-Muster der MCD-Landingpage nachzubauen.

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

## Abschnitts-Animationen

Jeder Abschnittsblock hat ein **Animation**-Panel im Inspector. Damit fügen Sie Bewegung hinzu, die beim Erscheinen im Viewport, beim Seitenaufruf oder bei Hover abgespielt wird.

### Animationstypen

| Typ | Effekt |
|---|---|
| **Fade up** | Der Abschnitt blendet ein und gleitet 1rem nach oben. |
| **Fade in** | Der Abschnitt blendet aus Transparenz ein. |
| **Slide right** | Der Abschnitt blendet ein und gleitet 2rem nach rechts. |
| **Reveal** | Der Abschnitt wird von rechts nach links durch eine Clip-Maske enthüllt. |
| **Stagger** | Kindelemente erscheinen nacheinander in 80ms-Schritten, anstatt dass der Abschnitt selbst sich bewegt. |

### Auslöser

Wie die Animation startet:

- **In-view** (Standard): Die Animation wird ausgelöst, wenn der Abschnitt in den Viewport scrollt. Nutzt die IntersectionObserver des Browsers. Einmal animiert bleibt der Abschnitt sichtbar.
- **Load**: Die Animation startet sofort beim Laden der Seite.
- **Hover**: Die Animation startet bei mouseenter und kehrt bei mouseleave zurück.

### Einstellungen

- **Duration**: Dauer der Animation in Millisekunden, Standard: 700ms.
- **Delay**: Wartezeit vor Animationsstart in Millisekunden, Standard: 0ms.
- **Easing**: Die Beschleunigungskurve. Auswahl: **ease-out** (Standard), **linear** und **spring**.
- **Stagger children**: Wenn aktiviert, bleibt der Abschnitt selbst in Ruhe und seine direkten Kindelemente animieren nacheinander. Diese Option funktioniert zusätzlich zu jedem Animationstyp (fade-up + stagger children, fade-in + stagger children, etc.). Die Abschnittsanimation wird unterdrückt, sodass nur die Kinder die Bewegung tragen.

### Bewegungsreduktion

Besucher, die `prefers-reduced-motion: reduce` auf Betriebssystemebene aktiviert haben, sehen jeden Abschnitt sofort im Endzustand. Es werden keine Animationen abgespielt. Auf Workspace-Ebene können Motion-Tokens die Bewegung auch pro Site deaktivieren. Wenn Bewegungsreduktion aktiv ist, erhält der Abschnitt nie die versteckte Startklasse, sodass das vom Server gerenderte HTML bereits vor der JavaScript-Ausführung zugänglich ist.

## Ihre Site gestalten

Im **Stil**-Tab steuern Sie das Erscheinungsbild Ihrer gesamten Site:

- **Presets**: Ein-Klick-Startpunkte, die Farben, Schriften und Abstände auf einmal setzen. Das Editorial-Preset bringt eine Navy-mit-Gold-Palette mit Serif-Überschriften und Mono-Eyebrows mit, die MyCompanyDesk-Hausstil widerspiegelt. Beim Anwenden eines Presets werden die Tokens mit Ihrem Workspace zusammengeführt, wobei Logo, benutzerdefiniertes CSS und Head-Snippets erhalten bleiben.
- **Farben**: Wählen Sie Marken-, Akzent-, Papier-, Tinten-, Oberflächen- und gedämpfte Farben. Die Palette wird über CSS Custom Properties angewendet.
- **Dunkelmodus**: Legen Sie fest, wie Ihre Site mit dunkler Darstellung umgeht. Drei Optionen: **Aus** (kein Dunkelmodus, die Site bleibt im hellen Farbschema), **Schaltfläche** (Besucher sehen einen Sonne/Mond-Umschalter in der Navigationsleiste und können das Thema wechseln, ihre Wahl wird lokal gespeichert), oder **System folgen** (die Site übernimmt automatisch die Betriebssystem-Einstellung des Besuchers über einen Live-Media-Query-Listener). Wenn der Dunkelmodus aktiviert ist, erscheint eine dunkle Farbpalette, in der Sie für jede Farbe eine nachtoptimierte Variante festlegen können. Lassen Sie die dunkle Palette leer, wendet die Site eine automatische Invertierung an, bei der Ihre Marken- und Akzentfarben erhalten bleiben.
- **Typografie**: Wählen Sie Überschrift-, Text- und Mono-Schriften aus der integrierten Schriftbibliothek (Geist, Inter, DM Sans, DM Serif Display, Fraunces, Instrument Serif, Geist Mono).
- **Skalierung**: Legen Sie Eckenradius, Dichte (kompakt, luftig, großzügig), maximale Inhaltsbreite und vertikalen Abschnittsabstand fest.
- **Bewegung**: Aktivieren Sie reduzierte Bewegung oder wählen Sie einen Bewegungsstil (Aus, Dezente Überblendung, Hereingleiten).
- **Schaltflächen**: Passen Sie Schaltflächenradius, Innenabstand und Hover-Effekte an.
- **Navigationsleiste**: Legen Sie das Layout (Standard, zentriert, geteilt), den Hintergrundstil (durchgehend, transparent mit Blur, vollständig transparent) und das Aussehen der CTA-Schaltfläche (ausgefüllt, Umrandung, nur Text) fest. Die Navigationsleisteneinstellungen gelten für jede Seite.
- **Benutzerdefiniertes CSS**: Schreiben Sie Ihr eigenes CSS, das in die Site eingebunden wird. Nützlich für Feinanpassungen oder zum Überschreiben von Standardwerten.
- **Favicon**: Laden Sie ein Favicon für Ihre Site hoch. Es erscheint in Browser-Tabs und Lesezeichen. Wenn Sie kein Favicon festlegen, verwendet die Site Ihr helles Logo, dann Ihr Geschäftsprofilbild.
- **Head-Snippets**: Fügen Sie Analytics-Skripte (Plausible, Umami, Matomo) oder Schrift-Preconnects über die Snippet-Auswahl hinzu.

Änderungen im Stil-Tab werden automatisch gespeichert und gelten für alle Seiten.

## Veröffentlichen

Die obere Leiste zeigt an, wie viele unveröffentlichte Änderungen vorhanden sind. Bei der Veröffentlichung werden nur Seiten mit dem Status Live in den Snapshot aufgenommen. Seiten im Entwurf bleiben auf der öffentlichen Site unsichtbar, auch nach der Veröffentlichung.

Wenn Sie bereit sind:

1. Klicken Sie in der oberen Leiste auf **Veröffentlichen**.
2. Ihre Site wird unter der öffentlichen URL veröffentlicht (Ihre eigene Domain, Workspace-Subdomain oder die Fallback-Portalroute).

Unveröffentlichte Änderungen werden pro Seite und pro Token erfasst. Die Veröffentlichen-Schaltfläche ist deaktiviert, wenn nichts zu veröffentlichen ist. Das Umschalten einer Seite zwischen Live und Entwurf wird sofort gespeichert und zählt als unveröffentlichte Änderung, sodass die Veröffentlichen-Schaltfläche beim Umschalten aufleuchtet.

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

## Kontaktformular

Der Kontaktformular-Block (`form` Abschnittstyp) verfügt über einen aktiven Submit-Handler. Wenn ein Besucher die von Ihnen konfigurierten Felder ausfüllt (Name, E-Mail, Telefon, Unternehmen, Nachricht) und auf Senden klickt, erstellt die Plattform eine Angebotsanfrage und benachrichtigt Ihren Workspace. Das Formular zeigt nach Abschluss ein Erfolgsbanner und bei Fehlern eine Inline-Fehlermeldung an. Alle Eingabefelder werden während des Sendens deaktiviert, um Doppelabsendungen zu vermeiden.

Was beim Absenden passiert:

1. Es werden nur die Felder gesendet, die der Block tatsächlich rendert. Wird das Namensfeld ausgeblendet, bricht das Backend nicht ab.
2. Die Plattform erstellt eine Angebotsanfrage unter dem Unternehmen, das mit dem Site-Slug verknüpft ist.
3. Sie erhalten eine Workspace-Benachrichtigung (derselbe Pfad wie die alte `/portal/quote-request` Route).
4. Die Anfrage erscheint unter **Angebote > Anfragen**.
5. Der Besucher sieht eine anpassbare Erfolgsmeldung.

Kontaktformular-Einreichungen sind auf 5 pro Minute pro IP-Adresse begrenzt.

## Newsletter-Anmeldung

Der Newsletter-Block (`newsletter` Abschnittstyp) erfasst E-Mail-Anmeldungen von Ihrer veröffentlichten Website. Das Backend verwendet einen Double-Opt-in-Ablauf: Nach dem Absenden erhält der Besucher eine Bestätigungs-E-Mail und muss auf den Link klicken, um das Abonnement zu aktivieren. Unterdrückte Adressen und bereits aktive Abonnenten werden aus Sicht des Formulars genauso behandelt wie neue Anmeldungen (keine Datenlecks).

Was beim Absenden passiert:

1. Die Plattform speichert das Abonnement mit `source: "site_form"`.
2. Wenn die Adresse nicht bereits aktiv und nicht unterdrückt ist, wird eine Double-Opt-in-E-Mail versendet.
3. Der Besucher sieht in jedem Fall ein Erfolgsbanner, sodass der Abonnementstatus privat bleibt.
4. Nach der Bestätigung erscheint der Abonnent in der Newsletter-Zielgruppe dieses Workspaces.

Newsletter-Einreichungen teilen dasselbe Rate-Limit wie das Kontaktformular: 5 pro Minute pro IP-Adresse.

## Anfragen verwalten

Siehe [Angebote - Angebotsanfragen](/de/features/quotes#angebotsanfragen) für Details zur Verwaltung eingehender Anfragen.

## Abonnement-Voraussetzung

Die öffentliche Website (Unternehmensseite und Website-Builder) ist eine kostenpflichtige Funktion. Die Website ist sichtbar, solange Ihr Arbeitsbereich einen Starter- oder Pro-Tarif hat. Wenn ein Arbeitsbereich auf Gratis zurückfällt, bleibt die Website noch 7 Tage lang online und geht dann offline.

- **Bezahlt oder in Testphase**: Die Website ist immer sichtbar.
- **Auf Gratis zurückgefallen**: Die Website bleibt noch 7 Tage sichtbar, nachdem Ihr Zugang endet (basierend auf Testende, Kündigungsdatum oder Ende des Zahlungszeitraums, je nachdem welches am nächsten liegt). Nach dem Schonfenster liefert die Website einen 404-Fehler.
- **Ungewisser Zustand**: Wenn das System nicht feststellen kann, wann Ihr bezahlter Zugang geendet hat, bleibt die Website online, um ein versehentliches Abschalten zu vermeiden.

Diese Sperre gilt für alle öffentlichen Pfade: die Unternehmensseite, die Service-Detail-Route und die Seiten des Website-Builders. Die Prüfung erfolgt bei jeder Anfrage, vor jeder Caching-Schicht, damit sie auch dann korrekt ist, wenn sich Ihr Abonnement während einer Cache-Periode ändert.

Quelle: `apps/api/src/modules/billing/entitlement.service.js` — `PUBLIC_PAGE_GRACE_DAYS`, `computePublicPageGate`, `getPublicPageVisibility`.

## Verwandt

- [Domains, Website und Posteingang](/de/features/domains-website-inbox): Eigene Domain einrichten, Verifizierung, SSL und E-Mail-Posteingang.
- [Unternehmenseinstellungen](/de/settings/company): Wo Ihre Unternehmensdaten, Ihr Branding und Ihre Adresse hinterlegt sind.
- [Angebote](/de/features/quotes): Verwalten von Angebotsanfragen, die über Ihre Website eingehen.
- [Abrechnung & Tarife](/de/settings/billing): Tarifmodelle und Feature-Flags.