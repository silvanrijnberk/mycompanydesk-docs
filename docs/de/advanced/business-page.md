---
title: Website-Builder
---

# Website-Builder

Erstellen Sie Ihre Geschäftswebsite mit einem Drag-and-Drop-Editor. Legen Sie mehrere Seiten an, gestalten Sie sie mit Abschnitten und Blöcken, passen Sie Farben und Schriften an und veröffentlichen Sie, wenn Sie bereit sind.

## Übersicht

Der Website-Builder ersetzt das alte einseitige Unternehmensprofil. Jeder neue Workspace startet mit einer 4-seitigen Standard-Site (Home, Diensten, Über uns, Kontakt), damit Sie von Tag eins an eine echte mehrseitige Grundlage haben. Der Editor bietet Ihnen:

- **Mehrere Seiten**: Erstellen Sie so viele Seiten, wie Sie benötigen, jede mit eigenem Pfad und eigenen Abschnitten. Die vier Standardseiten sind bereit zum Bearbeiten, Löschen oder Ergänzen.
- **Domain-Wechsler**: Wenn Ihr Workspace mehrere eigene Domains hat (Pro-Tarif), können Sie über ein Dropdown in der oberen Leiste zwischen der Bearbeitung der Hauptwebsite und einer Domain-Variante wechseln. Jede Domain erhält ihre eigenen Seiten, Navigation, Design-Tokens und Veröffentlichungs-Snapshots.
- **Abschnittsblöcke**: Fügen Sie Hero-, Text-, Galerie-, Spotlight-, Dienstleistungs-, Team-, Testimonial-, Kontaktformular- und benutzerdefinierte HTML-Abschnitte zu jeder Seite hinzu. Speichern Sie Abschnitte als wiederverwendbare Blöcke, um Ihre eigene Bibliothek aufzubauen.
- **Design-Tokens**: Legen Sie Markenfarben, Schriften, Abstände, Eckenradius, Bewegungsstil, benutzerdefiniertes CSS und ein Site-Favicon fest. Änderungen gelten für die gesamte Site.
- **Navigations-Editor**: Ordnen Sie Header-Links per Drag-and-Drop, mit Dropdown-Gruppen, externen Links und Inline-Navbar-Styling (Markenname, CTA-Button, Telefon, Anruf-Leiste, Sticky).
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

### Standardseiten

Jeder neue Workspace wird mit vier Seiten ausgeliefert:

| Seite | Pfad | Beschreibung |
|---|---|---|
| Home | `/` | Ihre Haupt-Landingpage. Kann nicht gelöscht werden. |
| Diensten | `/diensten` | Zeigen Sie, was Sie anbieten. Vorausgefüllt mit einem Dienstleistungsabschnitt. |
| Über uns | `/over-ons` | Erzählen Sie Besuchern, wer Sie sind. |
| Kontakt | `/contact` | Kontaktformular und Details. Aus dem Footer verlinkt. |

Diese Seiten werden automatisch mit der Navigationsleiste und dem Footer verknüpft. Sie können jede Seite bearbeiten oder löschen, außer der Home-Seite, die immer erforderlich ist. Die Navigation passt ihre Links an, wenn Sie Seiten hinzufügen oder entfernen.

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

## KI-Hilfswerkzeuge

Zwei KI-gestützte Werkzeuge helfen Ihnen, Ihre Seiten schneller zu texten und zu bebildern, direkt im Editor-Inspektor.

### Text umschreiben

Jedes Text- und Textarea-Feld im Abschnitts-Inspektor bekommt vier kleine Ton-Buttons darunter, sobald das Feld genug Inhalt hat (mehr als ein paar Wörter). Die Buttons senden Ihren aktuellen Text an den Server, der ein schlankes Gemini-Modell nutzt, um ihn in einem bestimmten Ton umzuschreiben:

- **Kürzer**: Kürzt den Text auf etwa die Hälfte, behält aber die Bedeutung.
- **Ruhiger**: Macht den Text ruhiger und beruhigender. Weniger Verkaufsfloskel, mehr Vertrauen.
- **Schärfer**: Verschärft die Formulierung. Stärkere Verben, kein Zögern.
- **Freundlicher**: Mildert den Ton, wärmer und zugänglicher.

Die Umschreibung bleibt immer in derselben Sprache wie das Original (meist Niederländisch). Das Modell schreibt nur um, es erfindet keine neuen Informationen. Der umgeschriebene Text ersetzt Ihren Feldinhalt direkt. Sie können einen anderen Ton-Button klicken, rückgängig machen oder weiter bearbeiten.

Das Textfeld ist auf 2000 Zeichen für den Umschreib-Aufruf begrenzt, damit das Modell schnell und vorhersehbar bleibt. Wenn der KI-Dienst vorübergehend nicht verfügbar ist, sehen Sie eine Fehlermeldung und Ihr ursprünglicher Text bleibt unberührt.

### Stockfoto-Suche

Wenn Sie das Bild-Upload-Feld in einem beliebigen Abschnittsblock öffnen (Hero, Spotlight, Team, Portfolio, Logos, Produkt), sehen Sie jetzt einen **Stockfoto**-Button neben den Upload- und URL-Buttons. Ein Klick öffnet ein Inline-Suchpanel, das mit Unsplash, der kostenlosen Stockfoto-Bibliothek, verbunden ist.

- Geben Sie einen Suchbegriff ein (z. B. "friseursalon", "kaffee", "holz") und drücken Sie Enter.
- Ergebnisse erscheinen in einem Raster. Klicken Sie auf ein Foto, um es als Abschnittsbild einzufügen.
- Die Suche läuft über den MyCompanyDesk-Server, sodass Ihr Unsplash-Zugriffsschlüssel niemals den Browser erreicht.
- Die Namensnennung wird automatisch gemäß den API-Richtlinien von Unsplash verfolgt und auf Ihrer veröffentlichten Website angezeigt. Sobald Ihre Website live geht, erscheint ein "Fotos: `Fotograf` · Unsplash"-Hinweis in der Fußzeile jeder Seite, die mindestens ein Stockfoto enthält, sodass Sie stets richtlinienkonform sind.
- Wenn Unsplash in Ihrem Workspace nicht konfiguriert ist, bleibt der Stockfoto-Button ausgeblendet, sodass Sie nie ein nicht funktionierendes Feature sehen.

## Gespeicherte Blöcke

Speichern Sie jeden Abschnitt als wiederverwendbaren Block und bauen Sie eine persönliche Bibliothek vorgestylter Bausteine auf. Gespeicherte Blöcke erscheinen ganz oben im Abschnitts-Hinzufügen-Panel, sodass Sie ein gespeichertes Layout auf jeder Seite einfügen können, ohne es neu aufbauen zu müssen.

### Abschnitt als Block speichern

1. Klicken Sie auf das Lesezeichen-Symbol in einer Abschnittszeile im Editor.
2. Geben Sie dem Block einen Namen (die Abschnittsbezeichnung oder der Typ ist bereits als Vorschlag vorausgefüllt).
3. Der Block wird in Ihrer persönlichen Bibliothek für diesen Workspace gespeichert.

### Gespeicherten Block einfügen

1. Klicken Sie auf **Abschnitt hinzufügen** auf einer beliebigen Seite.
2. Ihre gespeicherten Blöcke erscheinen unter **Meine Blöcke** ganz oben im Panel.
3. Klicken Sie auf einen gespeicherten Block, um ihn als neuen Abschnitt auf der aktuellen Seite einzufügen.

Das Einfügen eines gespeicherten Blocks kopiert dessen Vorlage in eine neue Abschnittszeile. Das Bearbeiten oder Löschen des eingefügten Abschnitts wirkt sich nicht auf den gespeicherten Block in Ihrer Bibliothek aus und umgekehrt.

### Ihre Bibliothek verwalten

- **Einen Block löschen** Sie aus der Bibliothek, indem Sie auf das x-Symbol neben dem Block klicken. Dies entfernt nur die gespeicherte Vorlage; bereits eingefügte Abschnitte bleiben erhalten.
- Der **Meine Blöcke**-Header wird ausgeblendet, wenn Ihre Bibliothek leer ist, sodass ein Erstbenutzer keine leere Kategorie sieht.

### Abschnitts-Layoutvarianten

Hero-, Dienstleistungs-, Preis- und Kundenstimmen-Abschnitte unterstützen mehrere Layoutvarianten. Wählen Sie eine aus dem **Stil**-Dropdown im Layout-Tab des Inspektionspanels, um das Erscheinungsbild des Abschnitts zu ändern. Die Standardvariante behält das vertraute Aussehen bei, sodass Abschnitte, die Sie vor dieser Funktion gebaut haben, unverändert bleiben.

#### Hero-Varianten

| Variante | Effekt |
|---|---|
| **Standard (geteilt rechts)** | Standard. Bild rechts, Text links. Fällt auf zentrierten Text zurück, wenn kein Bild vorhanden ist. |
| **Geteilt links** | Spiegelung des Standards: Bild links, Text rechts. Erfordert ein Bild. |
| **Zentriert** | Text zentriert, optionales Bild darunter in einem breiten 16:9-Rahmen. |
| **Banner** | Bild über die volle Breite als Hintergrund mit Verlauf-Overlay. Weißer Text auf dunkler Tönung, extra hoch für ausreichend Bildraum. Erfordert ein Bild. |
| **Minimal** | Nur Text in einer schmalen Spalte. Kein Bild. Sauber und ruhig, geeignet für dokumentationsartige Seiten. |

#### Dienstleistungs-Varianten

| Variante | Effekt |
|---|---|
| **Standard (Karten)** | Standard. Raster mit Karten in 2, 3 oder 4 Spalten. Icon, Titel und Beschreibung pro Element. |
| **Icon-Raster** | Kompakteres, icon-getriebenes Layout mit größeren Icons und weniger Karten-Chrome. Geeignet für 4 oder mehr kurze Elemente. |
| **Liste** | Vertikale Zeilen mit einem Icon links und Text rechts, getrennt durch dünne Linien. Gut für lange Leselisten. |
| **Akkordeon** | Vertikal gestapelte klickbare Zeilen. Beschreibung ausgeblendet, bis die Zeile geöffnet wird. Verwendet dieselbe Chevron-Animation wie der FAQ-Block. |

#### Preis-Varianten

| Variante | Effekt |
|---|---|
| **Standard (Karten)** | Standard. Tier-Karten nebeneinander mit Name, Preis, Funktionsliste und Kauf-Button oder CTA. |
| **Vergleichstabelle** | Feature-Matrix. Zeilen sind alle Funktionen aller Tiers zusammengeführt. Spalten sind die Tiers. Jede Zelle zeigt ein Häkchen oder einen Strich, damit Besucher schnell Spalten scannen und Tarife vergleichen können. Die hervorgehobene Tier-Spalte bleibt eingefärbt. |

#### Kundenstimmen-Varianten

| Variante | Effekt |
|---|---|
| **Standard (Raster)** | Standard. Karten in einem 2- bis 3-spaltigen Raster. Jede Karte zeigt das Zitat, den Namen und die optionale Rolle. |
| **Spotlight (Einzelzitat)** | Ein einzelnes großes Pull-Quote im Magazin-Stil, zentriert mit Serif-Typografie. Weitere Kundenstimmen erscheinen als kleine Namens-Chips unter dem Hauptzitat. |
| **Laufband** | Eine horizontal scrollende Zeile mit Zitat-Karten. Hover pausiert die Animation; die Reduced-Motion-Einstellung des Betriebssystems stoppt sie komplett. Die Spur läuft nahtlos mit zwei Kopien des Elementsatzes durch. |

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

Preisabschnitte können auch als Vergleichsmatrix dargestellt werden. Setzen Sie die Layoutvariante im Inspektionspanel auf **Vergleichstabelle**. Die Matrix zeigt jede Stufe als Spalte und alle Funktionen aller Stufen als Zeilen, mit Häkchen dort, wo eine Stufe die Funktion enthält. So sehen Sie auf einen Blick, wie die Tarife zueinander stehen. Siehe [Abschnitts-Layoutvarianten](#abschnitts-layoutvarianten) für alle Optionen.

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

## Abschnittstrenner

Jeder Abschnittsblock hat eine **Unterkante-Trenner**-Einstellung im Stil-Panel des Inspectors. Sie fügt eine SVG-Form an der Unterkante des Abschnitts hinzu, die in den nächsten Abschnitt überläuft und einen organischen visuellen Übergang statt eines harten Schnitts erzeugt. Der Trenner verwendet die Hintergrundfarbe des aktuellen Abschnitts und funktioniert daher am besten zwischen benachbarten Abschnitten mit unterschiedlichen einfarbigen Hintergründen.

### Trennertypen

| Typ | Effekt |
|---|---|
| **Welle** | Eine sanfte S-Kurve entlang der Unterkante. |
| **Bogen** | Eine konkave Wölbung: Der nächste Abschnitt ragt in der Mitte nach oben. |
| **Schräge** | Eine von links nach rechts ansteigende Diagonale. |
| **Keine** | Kein Trenner. Abschnitte treffen an einer geraden horizontalen Kante aufeinander (Standard). |

### Funktionsweise

- Der SVG-Trenner befindet sich vollständig unterhalb des Abschnitts im Raum des nächsten Abschnitts. Er überlappt den Inhalt des aktuellen Abschnitts nicht.
- Der gefüllte Teil des Pfads zeichnet den Hintergrund des aktuellen Abschnitts nach unten. Der transparente Bereich unter der Form lässt den nächsten Abschnitt durchscheinen.
- Der Trenner folgt automatisch der Hintergrundfarbe des Abschnitts, einschließlich benutzerdefinierter Hex-Werte und CSS-Variablen-Tokens.
- Trenner sind dekorativ (`aria-hidden="true"`) und beeinträchtigen weder die Tastatur- noch die Screenreader-Navigation.

## Ihre Site gestalten

Im **Stil**-Tab steuern Sie das Erscheinungsbild Ihrer gesamten Site:

- **Presets**: Ein-Klick-Startpunkte, die Farben, Schriften und Abstände auf einmal setzen. Acht Presets sind verfügbar: **Editorial** (Navy und Gold, Serif-Überschriften), **Studio** (warmes Cremeweiß mit Terrakotta), **Tech** (klares Slate mit Elektroblau), **Atelier** (Knochenweiß mit Tiefgrün), **Bold** (kontrastreiches Schwarz mit kräftigem Akzent), **Calm** (Salbeigrün und sanftes Weiß), **Mono** (architektonischer Minimalismus, keine Akzentfarbe) und **Vivid** (Kobalt und Koralle auf kühlem Weiß). Beim Anwenden eines Presets werden die Tokens mit Ihrem Workspace zusammengeführt, wobei Logo, benutzerdefiniertes CSS und Head-Snippets erhalten bleiben.
- **Farben**: Wählen Sie Marken-, Akzent-, Papier-, Tinten-, Oberflächen- und gedämpfte Farben. Die Palette wird über CSS Custom Properties angewendet.
- **Dunkelmodus**: Legen Sie fest, wie Ihre Site mit dunkler Darstellung umgeht. Drei Optionen: **Aus** (kein Dunkelmodus, die Site bleibt im hellen Farbschema), **Schaltfläche** (Besucher sehen einen Sonne/Mond-Umschalter in der Navigationsleiste und können das Thema wechseln, ihre Wahl wird lokal gespeichert), oder **System folgen** (die Site übernimmt automatisch die Betriebssystem-Einstellung des Besuchers über einen Live-Media-Query-Listener). Wenn der Dunkelmodus aktiviert ist, erscheint eine dunkle Farbpalette, in der Sie für jede Farbe eine nachtoptimierte Variante festlegen können. Lassen Sie die dunkle Palette leer, wendet die Site eine automatische Invertierung an, bei der Ihre Marken- und Akzentfarben erhalten bleiben.
- **Typografie**: Wählen Sie Überschrift-, Text- und Mono-Schriften aus der integrierten Schriftbibliothek (Geist, Inter, DM Sans, DM Serif Display, Fraunces, Instrument Serif, Geist Mono).
- **Skalierung**: Legen Sie Eckenradius, Dichte (kompakt, luftig, großzügig), maximale Inhaltsbreite und vertikalen Abschnittsabstand fest.
- **Bewegung**: Aktivieren Sie reduzierte Bewegung oder wählen Sie einen Bewegungsstil (Aus, Dezente Überblendung, Hereingleiten).
- **Schaltflächen**: Passen Sie Schaltflächenradius, Innenabstand und Hover-Effekte an.
- **Navigationsleiste**: Legen Sie das Layout (Standard, zentriert, geteilt), den Hintergrundstil (durchgehend, transparent mit Blur, vollständig transparent) und das Aussehen der CTA-Schaltfläche (ausgefüllt, Umrandung, nur Text) fest. Die Navigationsleisteneinstellungen gelten für jede Seite.
- **Telefon & Anrufleiste**: Fügen Sie eine anklickbare Telefonnummer zu Ihrer Navigationsleiste hinzu. Die Nummer erscheint neben der CTA-Schaltfläche auf dem Desktop und in der mobilen Navigationsleiste. Aktivieren Sie den **Mobile Anrufleiste**-Schalter, um eine feste Schaltfläche "Zum Anrufen tippen" am unteren Bildschirmrand auf mobilen Geräten anzuzeigen, damit Besucher Sie mit einem Fingertipp erreichen können, egal wo sie sich auf der Seite befinden. Das Telefonlabel lautet standardmäßig "Jetzt anrufen", wenn es leer gelassen wird.
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

Der Navigations-Editor ermöglicht es Ihnen, die Header-Links Ihrer Site zu ordnen und das Erscheinungsbild der Navigationsleiste auf Ihrer gesamten Site zu steuern:

- Ziehen Sie Seiten, um die Navigation neu anzuordnen.
- Erstellen Sie Dropdown-Gruppen, um Seiten unter einem übergeordneten Label zu verschachteln.
- Fügen Sie externe Links hinzu, die aus Ihrer Site herausführen.
- Das Logo im Header ist anklickbar und führt immer zurück zur Startseite.
- Die Startseite steht immer an erster Stelle und ist gesperrt.

Über dem Hauptmenü bietet ein **Navbar**-Panel direkten Zugriff auf die Header-Styling-Einstellungen, die zuvor nur im Stil-Tab verfügbar waren. Sie können Folgendes einstellen:

- **Markenname**: Text, der im Header angezeigt wird, wenn kein Logo-Bild hochgeladen ist (leer lassen, um das Logo aus dem Branding zu verwenden).
- **CTA-Button**: Die Beschriftung und der Ziellink für den Call-to-Action-Button oben rechts. Beide Felder müssen ausgefüllt sein, damit der Button erscheint.
- **Telefonnummer**: Ein klickbarer `tel:`-Link, der neben dem CTA-Button auf dem Desktop und in der mobilen Navigationsschublade erscheint. Leer lassen, um die Anruftaste auszublenden.
- **Anruf-Label**: Der Text neben dem Telefonsymbol auf mobilen Geräten (standardmäßig "Jetzt anrufen", wenn leer gelassen).
- **Mobile Anruf-Leiste**: Wenn aktiviert, bleibt eine feste Anruftaste unten auf dem Bildschirm auf mobilen Geräten.
- **Sticky-Navbar**: Wenn aktiviert (standardmäßig an), bleibt die Navigationsleiste beim Scrollen sichtbar.

Diese Einstellungen gelten für jede Seite Ihrer Site, genau wie im Stil-Tab. Änderungen werden automatisch mit einer kurzen Verzögerung nach dem Ende der Eingabe gespeichert. Für das visuelle Layout, den Hintergrundstil und die Button-Darstellung siehe den [Stil-Tab](#styling-ihrer-site).

## Firmendaten-Tokens

Textfelder im Website-Builder können Merge-Tokens enthalten, die Live-Firmendaten aus Ihren Workspace-Einstellungen beziehen. Beim Rendern der veröffentlichten Site wird jedes Token durch den aktuellen Wert aus **Unternehmensdaten** (`/settings/bedrijfsgegevens`) ersetzt. So pflegen Sie Firmenname, Adresse und Kontaktdaten an einer zentralen Stelle.

Verfügbare Tokens:

::: v-pre
| Token | Zeigt |
|---|---|
| `{{bedrijf.naam}}` | Firmenname |
| `{{bedrijf.adres}}` | Vollständige Adresse, zusammengesetzt aus Straße, Postleitzahl und Ort |
| `{{bedrijf.kvk}}` | Handelsregisternummer (KvK) |
| `{{bedrijf.btw}}` | USt-IdNr. |
| `{{bedrijf.email}}` | Öffentliche E-Mail-Adresse |
:::

So verwenden Sie sie:

- Klicken Sie in ein beliebiges Textfeld auf den Chip mit dem gewünschten Wert. Das Token wird an der Cursorposition eingefügt.
- Sie können ein Token auch manuell eingeben. Nur die fünf oben genannten Tokens werden unterstützt.
- Ist ein Wert in Ihren Unternehmensdaten leer, zeigt die veröffentlichte Site einen Hinweis in eckigen Klammern, zum Beispiel `[Firmenname]`, damit Sie erkennen, was noch fehlt.
- Tokens werden nach dem Veröffentlichungs-Snapshot aufgelöst, sodass spätere Änderungen an Ihren Unternehmensdaten direkt auf der Live-Site erscheinen, ohne erneut zu veröffentlichen.
- Rechtliche Seiten, die von der Plattform erzeugt werden, verwenden diese Tokens automatisch. Das Bearbeiten des umgebenden Texts bricht die Verknüpfung nicht.

Quelle: `packages/shared/src/site-blocks/company-tokens.ts#COMPANY_TOKENS`.

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

Kontaktformular-Einreichungen sind auf 5 pro Minute pro IP-Adresse begrenzt. Ein Cloudflare-Turnstile-Widget erscheint vor dem Absenden, wenn es in Ihrem Workspace konfiguriert ist, und blockiert automatisierte Bot-Einreichungen, ohne echte Besucher zu verlangsamen.

## Newsletter-Anmeldung

Der Newsletter-Block (`newsletter` Abschnittstyp) erfasst E-Mail-Anmeldungen von Ihrer veröffentlichten Website. Das Backend verwendet einen Double-Opt-in-Ablauf: Nach dem Absenden erhält der Besucher eine Bestätigungs-E-Mail und muss auf den Link klicken, um das Abonnement zu aktivieren. Unterdrückte Adressen und bereits aktive Abonnenten werden aus Sicht des Formulars genauso behandelt wie neue Anmeldungen (keine Datenlecks).

Was beim Absenden passiert:

1. Die Plattform speichert das Abonnement mit `source: "site_form"`.
2. Wenn die Adresse nicht bereits aktiv und nicht unterdrückt ist, wird eine Double-Opt-in-E-Mail versendet.
3. Der Besucher sieht in jedem Fall ein Erfolgsbanner, sodass der Abonnementstatus privat bleibt.
4. Nach der Bestätigung erscheint der Abonnent in der Newsletter-Zielgruppe dieses Workspaces.

Newsletter-Einreichungen teilen dasselbe Rate-Limit wie das Kontaktformular: 5 pro Minute pro IP-Adresse. Der Turnstile-Bot-Schutz ist auch bei Newsletter-Formularen aktiv, wenn konfiguriert.

## Rechtliche Seiten

Der Website-Builder erstellt für jeden neuen Arbeitsbereich zwei Standard-Rechtsseiten: **Datenschutzerklärung** (`/privacy`) und **Allgemeine Geschäftsbedingungen** (`/algemene-voorwaarden`). Der Inhalt verwendet Platzhalter für Unternehmensdaten. Wenn die Seite für Besucher gerendert wird, werden diese Platzhalter durch die Werte aus deinen **Unternehmenseinstellungen** ersetzt — Unternehmensname, Adresse, Postleitzahl, Stadt, Land, Registrierungsnummer, USt.-ID und öffentliche E-Mail.

Du kannst die rechtlichen Seiten wie jede andere Seite im Editor bearbeiten. Der Editor behält die Platzhalter-Anker im Inhalt, sodass auch das bloße Öffnen und Speichern einer Seite dafür sorgt, dass zukünftige Änderungen an deinen Unternehmensdaten automatisch übernommen werden.

Die rechtlichen Seiten werden zum Zeitpunkt der Veröffentlichung gerendert, wie der Rest deiner Site. Sie teilen sich den gleichen Live/Entwurf-Status und die gleiche Sichtbarkeitsregel auf Grundlage des Abonnements.

## Anfragen verwalten

Siehe [Angebote - Angebotsanfragen](/de/features/quotes#angebotsanfragen) für Details zur Verwaltung eingehender Anfragen.

## Abonnement-Voraussetzung

Die öffentliche Website (Unternehmensseite und Website-Builder) ist in jedem Tarif verfügbar und bleibt online. Das MyCompanyDesk-Badge ist adressbasiert: es erscheint auf der Workspace-Subdomain und entfällt auf einer eigenen Domain (Pro).

- **Gratis**: die Website ist auf der Workspace-Subdomain-Adresse mit einem kleinen MyCompanyDesk-Badge sichtbar.
- **Starter und Pro**: die Website ist immer sichtbar; kein Badge auf einer eigenen Domain, Badge auf der Workspace-Subdomain.
- **Ungewisser Zustand**: Wenn das System nicht feststellen kann, welchen Tarif Sie haben, bleibt die Website online, um ein versehentliches Abschalten zu vermeiden.

Diese Sperre gilt für alle öffentlichen Pfade: die Unternehmensseite, die Service-Detail-Route und die Seiten des Website-Builders. Die Prüfung erfolgt bei jeder Anfrage, vor jeder Caching-Schicht, damit sie auch dann korrekt ist, wenn sich Ihr Abonnement während einer Cache-Periode ändert.

Quelle: `apps/api/src/modules/billing/entitlement.service.js` — `computePublicPageGate`, `getPublicPageVisibility`; `renderer.service.js` legt die Badge-Regel auf Basis der Adresse fest.

## Verwandt

- [Domains, Website und Posteingang](/de/features/domains-website-inbox): Eigene Domain einrichten, Verifizierung, SSL und E-Mail-Posteingang.
- [Unternehmenseinstellungen](/de/settings/company): Wo Ihre Unternehmensdaten, Ihr Branding und Ihre Adresse hinterlegt sind.
- [Angebote](/de/features/quotes): Verwalten von Angebotsanfragen, die über Ihre Website eingehen.
- [Abrechnung & Tarife](/de/settings/billing): Tarifmodelle und Feature-Flags.