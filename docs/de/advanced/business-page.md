---
title: Website-Builder
description: "Bauen Sie eine mehrseitige Unternehmenswebsite im Drag-and-drop-Editor: Abschnitte und Blöcke, eigene Farben und Schriften, und veröffentlichen."
last_verified: 2026-10-11
---

# Website-Builder

Erstellen Sie Ihre Geschäftswebsite mit einem Drag-and-Drop-Editor. Legen Sie mehrere Seiten an, gestalten Sie sie mit Abschnitten und Blöcken, passen Sie Farben und Schriften an und veröffentlichen Sie, wenn Sie bereit sind.

## Übersicht

Der Website-Builder ersetzt das alte einseitige Unternehmensprofil. Jeder neue Workspace startet mit einer 4-seitigen Standard-Site (Home, Diensten, Über uns, Kontakt), damit Sie von Tag eins an eine echte mehrseitige Grundlage haben. Der Editor bietet Ihnen:

- **Mehrere Seiten**: Erstellen Sie so viele Seiten, wie Sie benötigen, jede mit eigenem Pfad und eigenen Abschnitten. Die vier Standardseiten sind bereit zum Bearbeiten, Löschen oder Ergänzen.
- **Domain-Wechsler**: Wenn Ihr Workspace mehrere eigene Domains hat (Office-Tarif), können Sie über ein Dropdown in der oberen Leiste zwischen der Bearbeitung der Hauptwebsite und einer Domain-Variante wechseln. Jede Domain erhält ihre eigenen Seiten, Navigation, Design-Tokens und Veröffentlichungs-Snapshots.
- **Abschnittsblöcke**: Fügen Sie Hero-, Text-, Galerie-, Spotlight-, Dienstleistungs-, Team-, Testimonial-, Kontaktformular- und benutzerdefinierte HTML-Abschnitte zu jeder Seite hinzu. Speichern Sie Abschnitte als wiederverwendbare Blöcke, um Ihre eigene Bibliothek aufzubauen.
- **Design-Tokens**: Legen Sie Markenfarben, Schriften, Abstände, Eckenradius, Bewegungsstil, benutzerdefiniertes CSS und ein Site-Favicon fest. Änderungen gelten für die gesamte Site.
- **Navigations-Editor**: Ordnen Sie Header-Links per Drag-and-Drop, mit Dropdown-Gruppen, externen Links und Inline-Navbar-Styling (Markenname, CTA-Button, Telefon, Anruf-Leiste, Sticky).
- **Veröffentlichungs-Snapshots**: Arbeiten Sie im Entwurf, sehen Sie sich Ihre Änderungen in der Vorschau an und veröffentlichen Sie dann. Unveröffentlichte Änderungen werden in der oberen Leiste angezeigt.
- **Responsive Vorschau**: Wechseln Sie während der Bearbeitung zwischen Desktop-, Tablet- und Mobilansicht. In der Desktopansicht können Sie auch eine echte Viewport-Breite wählen (1280, 1440 oder 1920 Pixel), damit die eigenen Media Queries der Site ehrlich reagieren statt simuliert zu werden.
- **Größenverstellbare Leisten**: Ziehen Sie den rechten Rand der linken Leiste und den linken Rand des rechten Inspektors, um beide breiter oder schmaler zu machen. Doppelklicken Sie auf einen Ziehgriff, um zur Standardbreite zurückzukehren. Die Breite wird pro Gerät in localStorage gespeichert.
- **Zoom und Einpassen**: Zoomen Sie die Arbeitsfläche von 25 % bis 200 %, oder klicken Sie auf den Zoomwert, um Einpassen, 50 %, 100 % oder 200 % zu wählen. Der Arbeitsbereich scrollt, wenn die skalierte Arbeitsfläche ihn überragt.
- **Tastenkürzel**: Rückgängig/Wiederherstellen, ausgewählten Abschnitt verschieben, Ein- und Auszoomen, Einpassen, Panels schließen und die Kurzübersicht über die in der unteren Leiste angezeigten Standardtasten öffnen.

Ihr Website-Dashboard finden Sie unter **Unternehmen > Ihre Website** (`/website`). Der Editor wird von dort geöffnet.

Wenn Sie `/website` öffnen, landen Sie auf dem Bereichsüberblick: er zeigt Ihre Live-Site, den Veröffentlichungsstatus und einen klaren Einstieg in den Editor. Der Editor selbst liegt unter `/website/editor` und wird bewusst über die Übersichtsseite aufgerufen, anstatt beim Öffnen gleich den gesamten Bildschirm zu übernehmen.

## KI-Schnellstart

Wenn Sie den Website-Builder zum ersten Mal in einem neuen Workspace öffnen, erscheint ein Schnellstart-Banner oben. Es liest Ihre Handelsregisterdaten (Firmenname, Branche, Stadt) und schlägt einen ersten Claim, einen Über-uns-Text und drei Dienstleistungen vor. Sie können alles direkt anpassen bevor Sie übernehmen, neu generieren wenn der erste Vorschlag nicht ganz passt, oder das Banner ausblenden. Keine Wizard-Fragen, keine Hürde vorab.

Was das Banner für Sie tut:

- **Generieren**: Klicken Sie auf **Vorschlag generieren**, um die KI Ihre KVK-Daten lesen und Text vorschlagen zu lassen. Was herauskommt, bleibt bei dem, was Sie gegeben haben: über die Über-mich-Seite wird keine erfundene Geschichte geschrieben.
- **Inline bearbeiten**: Passen Sie Claim, Über-uns-Text und Dienstleistungsnamen und -beschreibungen direkt im Banner an.
- **Übernehmen**: Klicken Sie auf **Übernehmen**, um den freigegebenen Text in Ihren Workspace zu schreiben. Ihre Unternehmensbeschreibung, der Hero-Claim und die Dienstleistungen werden in einem Schritt aktualisiert.
- **Neu generieren**: Nicht zufrieden? Klicken Sie auf **Neu generieren** für einen neuen Satz Vorschläge.
- **Ausblenden**: Das Banner merkt sich Ihre Entscheidung lokal. Es bleibt ausgeblendet, bis Sie Ihre Workspace-Daten zurücksetzen.

Das Banner verwendet das Gemini KI-Modell (Lite-Variante), sofern in Ihrem Workspace verfügbar. Wenn KI nicht konfiguriert ist, arbeitet das Banner trotzdem mit einem sinnvollen Fallback auf Basis Ihrer Branchenkennzahl und Ihres Firmennamens.

## Website-Einrichtungsassistent

Bevor Sie überhaupt den Editor öffnen, kann der Website-Einrichtungsassistent Ihren ersten Entwurf für Sie erstellen. Er öffnet sich automatisch beim ersten Besuch von `/website` in einem neuen Workspace und lässt sich später unter **Unternehmen > Ihre Website > Stil** mit **Erneut einrichten** neu starten; bei einem Neustart beginnt er bei dem, was schon stimmt. Er durchläuft diese Schritte:

1. **Was Sie tun** (aus Ihren KVK-Daten vorausgefüllt) - Ihre Arbeit, Dienstleistungen und Tonalität. Derselbe Schritt trägt Ihren echten Firmennamen (Pflicht, und gleich mit Ihren Unternehmensdaten gespeichert), Ihre Telefonnummer, Ihre WhatsApp-Nummer (ja, mit derselben Nummer wie Ihr Telefon, oder einer anderen), Ihre Instagram-Adresse (und auf Wunsch Facebook oder LinkedIn), die mit Ihren Unternehmensdaten gespeichert wird und ausgefüllt die Social-Links im Fuß einschaltet, Ihre Öffnungszeiten (mit Schnellwahlen für Werktage, das Wochenende oder jeden Tag, und die Zeiten je Tag einstellbar), die Adresse Ihrer Kontaktseite und die Adresse, unter der Kunden Ihnen schreiben dürfen; sie heißt **E-Mail-Adresse für Kunden**, und ein Häkchen entscheidet, ob Ihre Site sie zeigt. Ihre Anmelde-E-Mail-Adresse steht dort bereits drin, landet aber nur auf Ihrer Site, solange das Häkchen an bleibt; ändern Sie die Adresse, ziehen das Ihre Unternehmensdaten (und Ihre Rechnungen) nach.
2. **Was Sie wollen** - ob die Site vor allem Kunden gewinnen, Ihre Arbeit zeigen, vertrauenswürdig wirken oder online gefunden werden soll.
3. **Hell oder dunkel und Farbe** - der Assistent fragt, ob Ihre Site hell oder dunkel werden soll, und zeigt danach Farbsätze mit weichen Tönen, bei den dunklen Optionen ein echtes Dunkelblau, oder Ihre eigene Hex-Farbe. Die Vorschau des erzeugten Logos nimmt die gewählte Farbe sofort mit, deshalb steht der Farbschritt vor dem Logoschritt.
4. **Logo** - das KI-generierte Logo behalten, Ihr eigenes PNG/SVG hochladen, oder nur Ihren Firmennamen als Textlogo nutzen.
5. **Eigene Fotos** (optional) - fügen Sie bis zu sechs Fotos Ihrer eigenen Arbeit hinzu. Das erste steht oben auf Ihrer Startseite, die nächsten auf der Seite über Sie, und ab zwei Fotos baut die Site daraus auch eine Fotogalerie. Ohne eigene Fotos bekommt die Site Beispielfotos, die Sie später ersetzen.
6. **Webadresse** (nur wenn Ihr Workspace noch keine aktive Domain oder CNAME hat, die die Site bedient). Fügen Sie eine Domain hinzu oder verbinden Sie eine bestehende. Sie können diesen Schritt überspringen und später eine Adresse hinzufügen; eine Site, die bereits live ist, behält ihre Adresse.

Ihre Antworten werden als Site-Briefing gespeichert. Wenn Sie abschließen, schreibt die KI auf Basis des Briefings und Ihrer Workspace-Daten neuen Text für Ihren gesamten Entwurf, wendet Ihr gewähltes Logo und Ihre Markenfarbe an und lässt alles als Entwurf stehen. Es wird nichts automatisch veröffentlicht. Sie prüfen das Ergebnis im Editor und veröffentlichen es, sobald Sie zufrieden sind. Auf der Abschlusskarte passen Sie den Titel an, unter dem Ihre Site in Google erscheint, bevor Sie abschließen. Der Aufbau dauert rund eine halbe Minute; lassen Sie den Bildschirm offen, er sagt Ihnen auch, welcher Schritt gerade läuft.

Die Dienstleistungen der ersten Frage erhalten jeweils einen optionalen Preis mit der Wahl zwischen **inkl. MwSt.** und **zzgl. MwSt.**, und unter dem Feld sehen Sie genau, was Besucher damit sehen werden. Standardmäßig steht auf der Site, was der Kunde zahlt, darum wird ein als zzgl. MwSt. eingetippter Betrag mit dem MwSt.-Satz der Leistung umgerechnet; ein workspaceweiter Schalter an den Preisblöcken des Site-Builders, beschrieben bei den [Preismodellen mit Kauf-Buttons](#preismodelle-mit-kauf-buttons), kann die ganze Site auf Preise zzgl. MwSt. umschalten. Berechnet Ihr Workspace keine MwSt. (befreit oder KOR), heißt das Feld weiter Preis und der Hinweis erwähnt, dass die Preise keine MwSt. enthalten; tippen Sie alle Preise zzgl. MwSt., erscheinen sie auch so auf der Site. Jeder Preis erhält auf Wunsch eine Einheit (pro Stunde, pro Person), und die Zeile zeigt sofort, was Besucher sehen werden. Schalten Sie **ab** für einen Startpreis ein, oder lassen Sie das Feld leer: Ihre Site zeigt dann „Auf Anfrage“. Ein Preis, der bereits im Angebot steht, wird automatisch vorausgefüllt, und für jede Leistung stellen Sie auch ein, ob Kunden sie online buchen können.

Haben Sie in der Buchungsfrage **Kunden wählen selbst eine Zeit** gewählt, fragt die Liste der Dienstleistungen auch, wie lange jeder Termin dauert. Jede Dienstleistung startet mit einem Vorschlag in Minuten, abgeleitet aus dem Namen der Dienstleistung und aus dem, was Sie im Assistenten über Ihre Arbeit erzählt haben: für einen kurzen Schnitt schlägt der Assistent weniger Minuten vor als fürs Färben, und im Hundesalon fällt der Vorschlag länger aus. Jeden Vorschlag können Sie anpassen, und eine Dauer, die bereits im Angebot steht, wird automatisch eingetragen. Eine Dauer ist eine ganze Zahl von Minuten zwischen 5 und 480. Ohne Dauer ist eine Leistung nicht online buchbar: Lassen Sie das Feld leer, bleibt die Leistung auf Ihrer Site, aber der Terminblock bietet sie nicht mehr als wählbare Zeit an. Die Buchungsfrage selbst kennt jetzt fünf Antworten: Kunden wählen selbst eine Zeit, sie senden eine Anfrage, die Sie bestätigen, sie melden sich für einen festen Termin an (ein Workshop, ein Kurs oder eine geführte Wanderung), sie bitten Sie um ein Angebot (sie beschreiben ihren Auftrag, Fotos können mitkommen, und die Anfrage landet in Ihrem Posteingang), oder gebucht wird nicht online. Eine Anmeldung ist mit Ihrem ersten Termin aufgebaut, die Anmeldung schließt zwei Stunden vor Beginn, und Kunden zahlen vor Ort; lassen Sie das Datum weg, planen Sie die Termine später im Kalender unter **Gruppenterminen**. Hat Ihre Site bereits einen Terminblock, startet der Assistent im Modus dieses Blocks und richtet sich beim Abschließen nach Ihrer Wahl.

Sie können auch mitten im Assistenten aufhören: Klicken Sie auf **Später fertigstellen** oder laden Sie die Seite neu, und Ihre Antworten stehen bei der Rückkehr wieder da. Der Assistent bewahrt Ihre eigenen Änderungen auf diesem Gerät rund eine Woche auf und stellt etwas nur wieder her, solange der zugrunde liegende Wert unverändert ist; haben sich Ihre Firmendaten oder Dienstleistungen unterdessen geändert, aus den Einstellungen oder von einem anderen Gerät, gilt der aktuelle Wert.

Quelle: `apps/web/utils/siteWizardDraft.ts#SITE_WIZARD_DRAFT_TTL_MS`; `apps/web/utils/siteWizardDuration.ts#guessServiceDurationMin`.

Derselbe Assistent kann eine bestehende Site auch komplett neu schreiben. Wenn Sie ihn über den Stil-Tab neu starten, fragt er zuerst nach Bestätigung, denn Abschließen ersetzt Text, den Sie selbst bearbeitet haben. Die Site bleibt Entwurf, bis Sie selbst veröffentlichen.

## Tabs

Der Website-Builder hat drei Tabs: Editor, Seiten und Stil. Klicken Sie auf die Stil-Überschrift, um die Unter-Tabs (darunter Animation) ein- oder auszuklappen.

- **Editor**: Erstellen Sie Seiten durch Hinzufügen und Anordnen von Abschnitten. Klicken Sie auf einen Abschnitt, um Inhalt, Layout, Stil oder Animation zu bearbeiten. Ziehen Sie Abschnitte zum Verschieben, Duplizieren oder Löschen.
- **Seiten**: Verwalten Sie Ihre Seiten: Erstellen Sie neue aus Vorlagen, legen Sie Pfade und Sichtbarkeit fest und sehen Sie, welche Seiten live, Entwurf oder geplant sind. Klicken Sie auf eine Seite, um sie im Editor zu öffnen. Die gesperrte Startseite kann nicht gelöscht werden. Jede Seite zeigt ein Live/Entwurf-Symbol mit Schnellumschaltflächen: Klicken Sie auf das Globus-Icon, um eine Entwurfsseite live zu schalten, oder auf das Ausblenden-Icon, um eine Live-Seite zurück in den Entwurf zu setzen.
- **Stil**: Passen Sie Ihre site-weiten Design-Tokens an. Wählen Sie ein Ein-Klick-Preset (Editorial) und passen Sie dann Farben (Marke, Akzent, Papier, Tinte), Schriften (Überschrift, Text, Mono aus der Schriftbibliothek), Navigationsleiste (Layout, Hintergrund, CTA-Stil), Skalierung (Radius, Dichte, maximale Breite, Abschnittsabstand), Bewegung, Schaltflächenstile und benutzerdefiniertes CSS an. Sie können auch Head-Snippets für Analytics (Plausible, Umami, Matomo) oder Schrift-Preconnects hinzufügen. Klicken Sie auf die Stil-Überschrift, um die Registerkarte ein- oder auszuklappen.

Domain, SEO und Drittanbieter-Integrationen verwalten Sie über die `/website`-Startseite, nicht im Editor.

### Pakete-Galerie

Die Galerie **Pakete** (`Unternehmen > Ihre Website > Pakkete`) ist der schnellste Weg, mit einer kompletten, vorgestylten Site zu starten. Sie listet jedes genehmigte Site-Paket: eine fertige Vorlage mit Farbpaket und Schriftpaarung für einen bestimmten Bereich, dargestellt mit einer kleinen Farb-Swatch-Karte, die die eigene Palette des Pakets zeigt.

So funktioniert es:

1. Öffnen Sie **Unternehmen > Ihre Website** und klicken Sie oben auf **Pakkete**.
2. Durchstöbern Sie die Karten. Jede Karte zeigt einen echten Screenshot des Pakets, wenn einer erstellt wurde, sonst eine Farbswatch aus der eigenen Palette des Pakets. Name, Bereich, Seitenanzahl und kurze Beschreibung stehen unter dem Bild.
3. Klicken Sie auf **Vorschau ansehen**, um ein Live-Beispiel des Pakets in einem neuen Tab zu öffnen.
4. Klicken Sie auf **Dieses Paket verwenden**. Eine Bestätigung erklärt, dass Ihre aktuelle Entwurfs-Site (Seiten, Abschnitte und Stil) ersetzt wird.
5. Das Paket wird nur auf Ihren **Entwurf** angewendet. Es wird nichts automatisch veröffentlicht.
6. Der Editor öffnet sich, damit Sie das Ergebnis prüfen, Texte und Bilder anpassen und selbst veröffentlichen können.

Dieselbe Galerie finden Sie auch im Editor. Öffnen Sie die Leiste **Ontwerp**, um Pakete direkt auf der Arbeitsfläche zu durchstöbern. Klicken Sie auf einer Karte auf **Vorschau ansehen**, um die öffentliche Vorschau in Originalgröße neben Ihrer eigenen Site zu sehen, und auf **Zurück zu allen Designs**, um weiter zu vergleichen. Wenden Sie ein Paket im Editor an, wird Ihr Entwurf neu geladen und Sie gelangen zurück zur Leiste Abschnitte, um direkt weiterzubearbeiten.

Suchen Sie nach Bereich oder Stil über das Suchfeld. Die Anzahl daneben wird beim Filtern aktualisiert. Sind noch keine Pakete verfügbar, teilt Ihnen die Seite mit, dass sie hier erscheinen, sobald die ersten Designs freigegeben sind.

Quelle: `apps/web/pages/website/pakketten.vue`; `apps/web/components/site-builder/SiteEditorScreen.vue`; `apps/web/components/site-builder/SitePackageGallery.vue`; `apps/web/services/site-packages.service.ts`; `apps/api/src/modules/sites/packages.service.js`.

### Bespoke-Designs

Der Website-Builder bietet außerdem eine Reihe fertiger **Bespoke-Designs**, die die Standardstil-Presets durch eine kuratierte Vorlage, ein Farbpaket und einen Markenakzent ersetzen. Öffnen Sie das Panel **Bespoke-Designs** im Stil-Tab, um die Galerie zu durchsuchen. Jede Karte ist eine Live-Vorschau, die mit Ihren eigenen Workspace-Daten gefüllt ist (Dienstleistungen, Fotos, Bewertungen, Kontaktdaten), sodass Sie genau sehen, wie das Design aussieht, bevor Sie es anwenden.

Bei der Auswahl eines Designs werden drei Dinge gleichzeitig festgelegt:

- **Vorlage**: die Layoutfamilie und Abschnittsstruktur (zum Beispiel eine zentrierte Hero mit einem Review-Marquee oder eine geteilte Spotlight-Dienstleistungsseite).
- **Farbpaket**: eine kuratierte Palette-Variante für diese Vorlage. Die meisten Vorlagen bieten mehrere Pakete wie warm, kühl, neutral, kräftig oder gedämpft. Das Paket zu wechseln behält dieselbe Vorlage bei, ersetzt aber die CSS-Custom-Property-Tokens, sodass das Layout gleich bleibt, während die Stimmung wechselt.
- **Markenakzent**: eine optionale Überschreibung für die Akzentfarbe der Vorlage. Lassen Sie sie leer, um die Standardakzentfarbe des Pakets zu verwenden; geben Sie Ihre eigene Hex-Farbe ein, um Schaltflächen, Highlights und Abzeichen an Ihre Marke anzupassen. Sie können die Überschreibung jederzeit löschen, um wieder auf die Paket-Standardfarbe zurückzufallen.

Ihr Geschäftslogo wird automatisch verwendet, wenn Sie eines hochgeladen haben. Vorlagen, die ein Logo unterstützen, zeigen es in der Navigationsleiste oder im Hero an. Vorlagen, die ein Textwortzeichen erwarten, greifen auf Ihren Geschäftsnamen zurück, wenn kein Logo festgelegt ist, gesteuert durch eine bedingte Regel, damit das richtige Element erscheint.

Wenn Sie ein Design gefunden haben, klicken Sie auf **Dieses Design verwenden**. Die aktuelle Site wird sofort mit der neuen Vorlage, dem Paket und dem Akzent veröffentlicht, und Ihre öffentliche URL zeigt die Änderung sofort.

### Abschnitte auf einer Bespoke-Seite neu anordnen

Nachdem Sie ein Bespoke-Design angewendet haben, öffnen Sie eine Seite im Bespoke-Content-Editor. Das Panel **Abschnitte** listet alle Top-Level-Abschnitte dieser Seite. Ziehen Sie einen Abschnitt an eine neue Position, oder nutzen Sie die Auf- und Ab-Buttons. Schalten Sie die Sichtbarkeit aus, um einen Abschnitt auszublenden, ohne ihn zu löschen. Navigation, Hero und Footer bleiben gesperrt; sie lassen sich weder verschieben noch ausblenden.

### Bedienelemente direkt auf der Canvas-Vorschau

Sie können Abschnitte auch direkt auf der Live-Canvas-Vorschau neu anordnen, ausblenden und entfernen. Bewegen Sie den Mauszeiger über einen Top-Level-Abschnitt, um seinen Namen und eine kleine Toolbar zu sehen. Verwenden Sie die Pfeile, um den Abschnitt nach oben oder unten zu verschieben, das Augen-Symbol, um ihn auszublenden (oder wieder einzublenden), und das Papierkorb-Symbol, um einen selbst hinzugefügten Abschnitt zu entfernen. Gesperrte Elemente wie Navigation, Hero und Footer zeigen den Namen beim Hover, haben aber keine Aktionen zum Verschieben, Ausblenden oder Entfernen.

Klicken Sie auf einen Abschnitt, um ihn ausgewählt zu halten; der Rahmen bleibt dann sichtbar, auch wenn Sie die Maus wegbewegen, sodass Sie Positionen vergleichen können, während Sie scrollen oder Inhalte bearbeiten. Sowohl die Canvas als auch das Panel **Abschnitte** lesen aus derselben zugrunde liegenden Reihenfolge, sodass eine Änderung an einer Stelle sofort an der anderen Stelle übernommen wird.

### Fußzeileninhalt

Bespoke-Vorlagen mit einer minimalen Fußzeile erlauben es Ihnen jetzt, eigene Fußzeileninhalte hinzuzufügen, ohne das Design zu ändern. Öffnen Sie eine Seite im Bespoke-Content-Editor und scrollen Sie zum Panel **Fußzeile**.

Dort können Sie hinzufügen:

- **Rechtliche Zeile**: Ihre Handelsregister-/USt-Nummer oder anderes Kleingedrucktes, im Stil der Vorlage gerendert.
- **Link-Spalten**: betitelte Link-Spalten, nützlich für Seiten wie Kontakt, AGB oder Dienstleistungen.
- **Kontaktdaten**: schalten Sie ein, um E-Mail, Telefon und Adresse aus Ihren Unternehmensdaten anzuzeigen.
- **Social-Media-Links**: schalten Sie ein, um die in Ihren Unternehmensdaten gespeicherten Social-Media-Links anzuzeigen.

Das Design bestimmt weiterhin Farbe, Schrift und Abstände; Sie liefern nur den Inhalt. Links akzeptieren interne Pfade (`/contact`), externe HTTPS-URLs, E-Mail (`mailto:`) oder Telefon (`tel:`). Wenn eine Vorlage Ihre Kontaktdaten oder Social-Media-Links bereits in der Fußzeile zeigt, wird der entsprechende Schalter ausgeblendet, damit nichts doppelt erscheint.

### Links von Abschnitts-Buttons überschreiben

Einige Bespoke-Abschnitte enthalten klickbare Buttons oder Links, die normalerweise auf eine fest im Design verankerte Seite zeigen, etwa eine Kontaktseite, eine Buchungs-URL oder eine Telefonnummer. Der Bespoke-Content-Editor erlaubt es Ihnen pro Seite, das Ziel jedes anpassbaren Buttons zu überschreiben.

Öffnen Sie eine Seite im Bespoke-Content-Editor und wählen Sie den Abschnitt aus, dessen Button Sie ändern möchten. Im Panel **Abschnitte** zeigt jeder Abschnitt mit anpassbaren Buttons eine Liste **Buttons**. Wählen Sie den gewünschten Button aus und geben Sie das neue Ziel ein. Sie können auf eine andere Seite Ihrer Site, eine externe URL, eine E-Mail-Adresse (`mailto:`) oder eine Telefonnummer (`tel:`) verlinken. Links werden aus Sicherheitsgründen mit denselben erlaubten Schemes wie Navigationslinks geprüft. Lassen Sie die Überschreibung leer, behält der Button das ursprüngliche Ziel aus der Vorlage bei.

### Abschnitte hinzufügen und bearbeiten

Wenn Sie eine Bespoke-Seite im Editor öffnen, bietet das Panel **Abschnitte** nun den vollständigen Abschnittskatalog. Abschnitte, die zum Design selbst gehören, stehen oben und verwenden die eigene Markup der Vorlage sowie Ihre Workspace-Daten, damit sie nativ aussehen. Abschnitte aus dem breiteren Katalog werden auf derselben Palette und Typografie überbrückt, haben aber eigene Inhaltsfelder pro Abschnitt.

Klicken Sie auf **Abschnitt hinzufügen**, um den Picker zu öffnen, wählen Sie die gewünschte Art, und der Abschnitt wird mit sinnvollen Standardwerten auf die Seite platziert. Das Inspektionspanel rechts zeigt die Felder des gewählten Abschnitts, egal ob sie aus Ihren Workspace-Daten oder aus den eigenen Inhalts-Props des Abschnitts stammen. Hinzugefügte Abschnitte können genau wie die eigenen Abschnitte der Vorlage neu angeordnet, ausgeblendet oder entfernt werden.

### Adresse, Karte, Arbeitsgebiet und Parken auf der Kontaktseite

Die Kontaktseite zeigt, wo Sie arbeiten und wie Sie dorthin kommen. Der Block **Locaties** fällt auf Ihre Firmenadresse zurück, wenn Sie keine eigenen Standorte haben, und ein Kontaktblock lässt eine Adresse weg, die ein Locaties-Block auf derselben Seite schon zeigt. Eine neue Kontaktseite beginnt nicht mehr mit einem leeren Locaties-Block. Eine Karte (**Kaart tonen**) entsteht aus Ihrer Adresse, wenn Sie eine wollen, **Werkgebied** ist eine der Vorlagen bei Abschnitt hinzufügen, wenn Sie zeigen wollen, wo Sie Ihre Kunden aufsuchen, und der Anfahrt-Abschnitt heißt **Bereikbaarheid en parkeren** (Anfahrt und Parken).

### Seiten umbenennen

Vorlagenseiten haben eine feste Adresse und ein Menü-Label, das in der Markup der Vorlage verankert ist. Statt jeden Link von Hand zu ändern, können Sie im Panel **Seiten** das Menü-Label jeder Vorlagenseite umbenennen. Klicken Sie auf das Stift-Symbol neben einer Seite, geben Sie das neue Label ein, und jeder Link zu dieser Seite in Navigation und Footer wird automatisch aktualisiert. Die Adresse der Seite selbst ändert sich nicht, daher ist keine Weiterleitung nötig und bestehende Links funktionieren weiter.

Wenn Sie das Feld leeren oder den ursprünglichen Namen der Vorlage zurücktippen, wird die Umbenennung entfernt und das ursprüngliche Label erscheint wieder.

### Design-Text bearbeiten

Designs enthalten kleine Textstellen wie Untertitel, Bildunterschriften und kurze Überschriften, die nicht mit Ihren Workspace-Daten verknüpft sind. Im Bearbeitungsmodus sind diese Texte direkt auf der Canvas editierbar: klicken Sie den Text, tippen Sie die Änderung und drücken Sie Enter oder klicken Sie außerhalb, um zu speichern. Die Überschreibung wird pro Abschnitt und pro Seite gespeichert, und die öffentliche Site zeigt Ihre Version anstelle der ursprünglichen Worte des Designs.

Text innerhalb wiederholender Blöcke kann auf diese Weise nicht bearbeitet werden, da ein statischer Pfad jedes wiederholte Element verändern würde. Die Bearbeitung beschränkt sich außerdem auf Texte, die innerhalb eines Abschnitts liegen, damit es immer eine stabile Adresse für die Überschreibung gibt. Um eine Änderung rückgängig zu machen, löschen Sie den Inhalt oder tippen Sie den ursprünglichen Text des Designs zurück.

Überschriften, die der Assistent, ein Umschreiben oder ein frischer Abschnitt für Sie schreiben, kommen in Satzform zu Papier: So liest sich eine Überschrift wie ein Satz. Ganze Namen wie Ihr Firmen- oder Markenname behalten ihre eigenen Großbuchstaben.

### Die Anrede auf Ihrer Site

Ihre Site spricht ihre Besucher in einer gewählten Anrede an: **Je en jij** (persönlich: „Ik help je graag.“) oder **U** (höflich: „Ik help u graag.“, die niederländischen Muster der festen Texte). Die Wahl sitzt im ersten Schritt des Website-Assistenten und auf der Karte **Aanspreekvorm op je website** unter Einstellungen → Unternehmensdaten; beide schreiben dieselbe Einstellung. Feste Texte der Site, wie Buttons, Formularzeilen und Dankmeldungen, folgen der Wahl sofort. Was Sie oder der Texter schon geschrieben haben, behält seine eigene Stimme; der Button auf dieser Karte, **Zet alle teksten om naar je** beziehungsweise **Zet alle teksten om naar u**, wandelt in einem Lauf alles um, was auf der Site steht, auch Ihren getippten Text, und ändert dabei nur die Anrede, nie den Inhalt. Das Ergebnis sagt, wie viele Texte angepasst wurden und welche stehen blieben (im Editor gehen Sie sie durch), und eine Veröffentlichung bringt sie live. Abschnitte, die Sie später hinzufügen, übernehmen die Anrede, die die Site schon hat, und auch die juristischen Seiten, die Datenschutzerklärung und die Bedingungen, erscheinen in der gewählten Form. Bei einem Ein-Personen-Unternehmen sprechen die festen Texte in der Ich-Form statt in der Wir-Form; der Assistent fragt dafür Ihren Vornamen und stellt Sie nie mit Ihrem Firmennamen vor.

## Seiten erstellen

1. Gehen Sie zum Tab **Seiten**.
2. Klicken Sie auf **Neue Seite**.
3. Geben Sie einen Titel und einen Pfad ein (z. B. `/ueber-uns`).
4. Wählen Sie eine Vorlage oder beginnen Sie mit einer leeren Seite.
5. Die Seite öffnet sich im Editor, wo Sie Abschnitte hinzufügen und ausbauen können. Eine Seite, die Sie hier anlegen, kommt automatisch in Ihr Menü; die 404-Seite und Blogartikel nicht. Scheitert das, sagt es Ihnen der Editor, und Sie setzen die Seite selbst im Menüeditor.

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

- Klicken Sie auf **Abschnitt hinzufügen**, um die verfügbaren Blocktypen zu sehen (Hero, Text, Galerie, Spotlight, Dienstleistungen, Team, Testimonials, Kontaktformular, Preise, Produkt, Gütesiegel, benutzerdefiniertes HTML und mehr).
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
- Die Namensnennung wird automatisch gemäß den API-Richtlinien von Unsplash verfolgt und auf Ihrer veröffentlichten Website angezeigt. Der Hinweis "Fotos: `Fotograf` · Unsplash" in der Fußzeile nennt die Fotografen der Stockfotos, die ein Besucher tatsächlich sieht: Eine Karte, die Ihr eigenes Foto aus dem Angebot übernommen hat, zählt nicht mehr mit, dieselbe Person steht nur einmal darin, und ersetzte Fotos fallen aus der Zeile.

Der Alt-Text folgt Ihren eigenen Fotos: Bei einem Upload kommt er aus dem Dateinamen des Bildes (Ortsnamen ganz, höchstens 200 Zeichen) und bleibt hinterher austauschbar, bei einem Upload ebenso wie bei einem bereits platzierten Stockfoto.
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
- **Haftendes Bild**: Aktivieren Sie "Bild bleibt beim Scrollen stehen" im Spotlight-Inspector, um das Bild zu fixieren, während der Text daneben scrollt. Nur auf dem Desktop und nur sinnvoll, wenn genug Text neben dem Bild steht. Auf Mobilgeräten wird das Bild normal gestapelt.

### Preismodelle mit Kauf-Buttons

Der Preise-Abschnitt zeigt Ihre Pakete oder Pläne. Jede Stufe kann optional einen Kauf-Button erhalten:

- Markieren Sie eine Stufe als **purchasable** und geben Sie den **Betrag in Cent** an (z. B. 4999 für EUR 49,99).
- Ein **Jetzt kaufen**-Button ersetzt den statischen CTA-Link. Besucher, die darauf klicken, werden über den MyCompanyDesk-Checkout zu Mollie oder Stripe Connect zur Zahlung weitergeleitet.
- Das Kauf-Button-Label ist standardmäßig "Jetzt kaufen", kann aber pro Stufe mit dem **buyLabel**-Feld angepasst werden.
- Preisstufen ohne Kauf-Button behalten das bestehende CTA-Link-Verhalten.

Preisabschnitte können auch als Vergleichsmatrix dargestellt werden. Setzen Sie die Layoutvariante im Inspektionspanel auf **Vergleichstabelle**. Die Matrix zeigt jede Stufe als Spalte und alle Funktionen aller Stufen als Zeilen, mit Häkchen dort, wo eine Stufe die Funktion enthält. So sehen Sie auf einen Blick, wie die Tarife zueinander stehen. Siehe [Abschnitts-Layoutvarianten](#abschnitts-layoutvarianten) für alle Optionen.

Blöcke, die Katalogpreise zeigen, Dienstleistungen, Produkte, Abonnements oder Preisstufen, tragen **Prijzen op je website: inclusief / exclusief btw** im Inspektionspanel, gespeichert für den ganzen Workspace. Auf der Standardeinstellung, inklusive, zeigt Ihre Site, was der Kunde zahlt, und ein strukturierter Preis trägt sein eigenes kleines Label (inklusive MwSt., oder befreit, wenn Ihr Workspace keine MwSt. rechnet), damit der Betrag nie doppelt lesbar ist. Die Einstellung excl. schreibt den getippten Betrag ohne MwSt. mit dem Label **excl. btw**: auf Dienstleistungskarten, im Preisblock, in der Dienstleistungsauswahl des Terminblocks und bei Gruppenterminen. Kostenlos, Auf Anfrage und Ihr eigener Website-Text bleiben, wie sie sind, und was ein Besucher beim Bezahlen zahlt, über Anzahlung, Kauf-Button oder Online-Zahlung, bleibt inklusive MwSt. Das Speichern backt die veröffentlichte Site neu.

### Produktblock

Eine eigenständige Einzelprodukt-Kaufkarte, ideal wenn eine vollständige Preistabelle zu viel wäre:

- Ein Produktname, Beschreibung, optionales Bild, Preis und ein Kauf-Button.
- Dieselbe Checkout-Anbindung wie die Preisstufen-Kauf-Buttons, Ihr Besucher zahlt über Mollie oder Stripe Connect.
- Eine optionale Hinweiszeile unter dem Button für Versandinformationen, Hinweise oder AGB-Verweise.

Siehe [Verkäufe](/de/features/domains-website-inbox#verkaufe) für die Nachverfolgung von Zahlungen und Bestellungen.

### Gütesiegel-Block

Der Block **Gütesiegel** zeigt die Zertifikate und Gütesiegel Ihres Unternehmens (STEK, VCA, CE und mehr), genau so, wie Sie sie unter **Einstellungen → Unternehmensdaten** erfassen. Diese Liste verwalten Sie an genau dieser einen Stelle: der Block ist datengebunden, das Inspektionspanel hat keinen Artikeleditor, sondern nur die Darstellung.

- **Überschrift**: standardmäßig „Certificeringen en keurmerken“. Geben Sie eine eigene Überschrift ein oder lassen Sie das Feld leer für einen Block ohne Überschrift.
- **Stil**: weiße Kacheln (Standard) oder schlicht. **Größe**: klein, mittel oder groß.
- Ein Gütesiegel ist auch ohne Bild in Ordnung: Ein Zeichen, das nur aus einem Namen besteht, zeigt auf der Site und in der Textversion Ihrer E-Mails diesen Namen. Das Bild bleibt optional; setzen Sie eines, läuft es durch die übliche Beschnitt- und Umwandlungsroutine.
- Höchstens sechs Gütesiegel; Reihenfolge, Name und Link legen Sie unter Unternehmensdaten fest. Wenn Sie das erste Gütesiegel hinzufügen, setzt MyCompanyDesk automatisch einen Gütesiegel-Block auf Ihre Startseite, als Entwurf: vor einer abschließenden Aufforderung, wenn diese der letzte Block ist, sonst unten vor der Fußzeile. Es wird nicht sofort veröffentlicht; das Publizieren übernehmen Sie. Gibt es auf Ihrer Website bereits einen Gütesiegel-Abschnitt, kommt kein zweiter dazu.
- Ist die Liste leer oder ist **Auf Ihrer Website anzeigen** unter Unternehmensdaten aus, versteckt sich der Block auf der veröffentlichten Website. Der Editor weist auch darauf hin, wenn die Gütesiegel für die Website ausgeschaltet sind.
- Entfernen Sie ein Gütesiegel, bleibt die Datei erhalten und bereits gesendete E-Mail zeigt das Logo weiterhin; der Block versteckt sich erst, wenn die Liste vollständig leer ist.

Quelle: `packages/shared/src/site-blocks/registry.ts#keurmerken`; `apps/api/src/modules/companies/certifications.service.js`.

### Katalogabschnitte

Einige Bespoke-Vorlagen enthalten einen Live-Katalogabschnitt, der Artikel direkt aus Ihrem Aanbod-Katalog lädt. Wenn die aktuelle Seite strukturell über Dienstleistungen, Produkte oder Abonnements wiederholt, zeigt der Inhalts-Editor für jede verwendete Art ein **Katalog**-Panel an. Eine Beschreibung, die Sie für eine Dienstleistung eintippen, ist ein einziger Text: Der Dienstleistungsabschnitt auf Ihrer Startseite und die Dienstleistungsseite teilen ihn, darum landet eine Korrektur überall auf einmal. Ein Neuaufbau hat nie einen Entwurfstext einer Dienstleistungskarte live gezogen: Bis zur Veröffentlichung zeigen die Karten den Text, den sie schon hatten.

Das Panel liegt außerhalb des Vorlagenrahmens, sodass es die Gestaltung der Vorlage selbst nie stört. Hier steuern Sie nur die Präsentation des Katalogs auf dieser Website:

- **Überschrift und Einleitung**: legen Sie den Abschnittstitel und eine kurze Einleitung fest.
- **Reihenfolge**: ziehen Sie Artikel in die gewünschte Reihenfolge, oder nutzen Sie die Aufwärts- und Abwärts-Buttons. Die natürliche Reihenfolge aus Aanbod gilt für alles, was Sie nicht explizit neu sortieren.
- **Anzeigen oder ausblenden**: klicken Sie auf das Augen-Symbol, um einen Artikel in Aanbod zu behalten, aber auf dieser Website auszublenden.

Die Artikelinhalte selbst, Titel, Preis, Beschreibung und Bild, sind im Editor schreibgeschützt. Sie stammen aus dem Live-Aanbod und müssen dort bearbeitet werden. Der Preis folgt der im Aanbod hinterlegten Preismodus: ein fester Betrag, "ab" einem Betrag oder "Auf Anfrage", wenn kein Preis hinterlegt ist. Ein Preis von null ist ein echter Preis: Ein bewusst kostenloser Artikel zeigt auf der Site, in der Preisliste, in der Aanbod-Liste und im Buchungsblock „Kostenlos“ statt ohne Preis zu erscheinen; nur Artikel ganz ohne Preis zeigen "Auf Anfrage".

Falls es für diese Katalogart noch keine passenden Artikel gibt, zeigt das Panel einen Leerzustand mit einem Link, um in Aanbod einen Artikel hinzuzufügen.

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
| **Wort für Wort** | Nur für Hero-Abschnitte. Die Wörter des Titels erscheinen nacheinander; andere Abschnitte blenden normal ein. |

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
- **Farben**: Sechs Farbtokens unter schlichten Namen: **Hoofdkleur** (Hauptfarbe), **Tweede kleur** (zweite Farbe), **Pagina-achtergrond** (die Seite hinter allem), **Blokken en kaarten** (Blöcke und Karten), **Tekst** (Text) und **Kleine tekst** (kleiner Text). Die Palette wird über CSS Custom Properties angewendet.
- **Dunkelmodus**: Legen Sie fest, wie Ihre Site mit dunkler Darstellung umgeht. Vier Optionen: **Uit** (aus: kein Dunkelmodus, die Site bleibt im hellen Farbschema), **Altijd donker** („immer dunkel“, Ihre gesamte Site ist für jeden Besucher dunkel, egal was dessen Gerät eingestellt hat), **Knop in menubalk** („Knopf in der Menüleiste“, Besucher sehen einen Sonne/Mond-Umschalter in der Navigationsleiste und können das Thema wechseln, ihre Wahl wird lokal gespeichert) und **Volgt het toestel** („Folgt dem Gerät“, die Site übernimmt automatisch die Betriebssystem-Einstellung des Besuchers über einen Live-Media-Query-Listener). Schalten Sie „Altijd donker“ oder „Knop in menubalk“ ein, legt die Site selbst eine lesbare Nachtpalette an: nachtoptimierte Varianten jeder Farbe, und eine Haupt- oder zweite Farbe, die auf der dunklen Seite verschwände (Schwarz, Navy), bekommt automatisch eine aufhellte Nachtversion. Eine Nachtfarbe, die Sie selbst gesetzt haben, bleibt unangetastet, und ändern Sie später Ihre helle Haupt- oder zweite Farbe, geht die Nachtversion davon mit. Der Stil-Tab trägt zudem eine Karte, die direkt zu den dunklen Designs in der Galerie springt; und wählen Sie, während Ihre Site immer dunkel läuft, ein Site-Paket, fragt die Site zuerst, denn das Paket schaltet „Altijd donker“ aus, damit das Ergebnis so aussieht wie in der Vorschau.
- **Typografie**: Wählen Sie Überschrift-, Text- und Mono-Schriften aus der integrierten Schriftbibliothek (Geist, Inter, DM Sans, DM Serif Display, Fraunces, Instrument Serif, Geist Mono).
- **Selbst gehostete Schriften**: Alle Schriften werden von MyCompanyDesk selbst ausgeliefert, nicht von Google Fonts oder einem anderen Drittanbieter-CDN. Dieselben Schriftdateien werden in der Editor-Vorschau und auf Ihrer veröffentlichten Site verwendet, sodass die Schrift überall gleich aussieht und die IP-Adressen Ihrer Besucher in Ihrer eigenen Domain bleiben.
- **Skalierung**: Legen Sie Eckenradius, Dichte (kompakt, luftig, großzügig), maximale Inhaltsbreite, vertikalen Abschnittsabstand, die Textgröße für den Text, den Ihre Besucher lesen (**Normal**, **Groß** oder **Extra**), und Kartenstil fest. Der Kartenstil steuert, wie Inhaltskarten über die Abschnitte hinweg gerendert werden: **Flach** (kein Rand), **Umrandet** (Standard, dünne Linie), **Schattiert** (weicher Schatten), **Schwebend** (starker Schatten), **Brut** (harte Linie mit versetztem Schatten), **Linie** (nur Kontur, keine Füllung) oder **Glas** (durchscheinende, mattierte Karte mit Hintergrund-Blur). Glas wirkt am besten über einem Foto, Farbverlauf oder dekorativen Streifen; auf einfachem Hintergrund fällt es auf eine sanft getönte Karte zurück.
- **Bewegung**: Aktivieren Sie reduzierte Bewegung oder wählen Sie einen Bewegungsstil (Aus, Dezente Überblendung, Hereingleiten).
- **Schaltflächen**: Passen Sie Schaltflächenradius, Innenabstand und Hover-Effekte an.
- **Navigationsleiste**: Legen Sie das Layout (Standard, zentriert, geteilt), den Hintergrundstil (durchgehend, transparent mit Blur, vollständig transparent) und das Aussehen der CTA-Schaltfläche (ausgefüllt, Umrandung, nur Text) fest. Die Navigationsleisteneinstellungen gelten für jede Seite.
- **Telefon & Anrufleiste**: Fügen Sie eine anklickbare Telefonnummer zu Ihrer Navigationsleiste hinzu. Die Nummer erscheint neben der CTA-Schaltfläche auf dem Desktop und in der mobilen Navigationsleiste. Aktivieren Sie den **Mobile Anrufleiste**-Schalter, um eine feste Schaltfläche "Zum Anrufen tippen" am unteren Bildschirmrand auf mobilen Geräten anzuzeigen, damit Besucher Sie mit einem Fingertipp erreichen können, egal wo sie sich auf der Seite befinden. Das Telefonlabel lautet standardmäßig "Jetzt anrufen", wenn es leer gelassen wird. Die Anrufleiste kann neben dem Anrufknopf auch WhatsApp zeigen: Sie übernimmt die WhatsApp-Nummer, die der Rest Ihrer Site schon trägt, eine WhatsApp-Schaltfläche (Hero oder Abschlussblock), ein Kontaktblock mit WhatsApp oder der schwebende Kontaktknopf, und eine eigene Nummer in der Navigationsleiste selbst gewinnt. Auf dem Desktop bleibt WhatsApp über den schwebenden Kontaktknopf erreichbar; auf dem Handy lässt der Knopf WhatsApp weg, sobald die Leiste es zeigt, damit WhatsApp nie doppelt auf einem Bildschirm steht.
- **Benutzerdefiniertes CSS**: Schreiben Sie Ihr eigenes CSS, das in die Site eingebunden wird. Nützlich für Feinanpassungen oder zum Überschreiben von Standardwerten. Es sitzt unten im Stil-Tab, unter einem Streifen mit dem Titel **Voor gevorderden** (für Fortgeschrittene), der eine kurze Erklärung mitbringt.
- **Favicon**: Laden Sie ein Favicon für Ihre Site hoch. Es erscheint in Browser-Tabs und Lesezeichen. Wenn Sie kein Favicon festlegen, verwendet die Site Ihr helles Logo, dann Ihr Geschäftsprofilbild.
- **Head-Snippets**: Fügen Sie Analytics-Skripte (Plausible, Umami, Matomo) oder Schrift-Preconnects über die Snippet-Auswahl hinzu.

### Logo-Import

Wenn Sie bereits ein Logo auf Ihrer Website haben, können Sie es direkt in MyCompanyDesk importieren. Im **Stil**-Tab finden Sie die Logo-Import-Option: geben Sie die URL der Seite ein, auf der sich Ihr Logo befindet. MyCompanyDesk ruft die Seite ab, extrahiert das bestmögliche Logo und erstellt sowohl eine helle als auch eine dunkle Version für Ihre Site. Nach dem Import können Sie die beiden Versionen weiterhin einzeln in den Stil-Einstellungen ersetzen oder anpassen.

Änderungen im Stil-Tab werden automatisch gespeichert und gelten für alle Seiten.

## Veröffentlichen

Die obere Leiste zeigt einen Punkt an, solange unveröffentlichte Änderungen warten. Bei der Veröffentlichung werden nur Seiten mit dem Status Live in den Snapshot aufgenommen. Seiten im Entwurf bleiben auf der öffentlichen Site unsichtbar, auch nach der Veröffentlichung.

Bis Sie veröffentlichen, sendet Ihre öffentliche URL ein `noindex`-Robots-Tag. So bleibt die Workspace-Subdomain außerhalb der Suchmaschinen, während Sie noch aufbauen; die Subdomain selbst kommt erst bei Ihrer ersten Veröffentlichung in den Blick.

Wenn Sie bereit sind:

1. Klicken Sie in der oberen Leiste auf **Veröffentlichen**.
2. Ihre Site wird unter der öffentlichen URL veröffentlicht (Ihre eigene Domain, Workspace-Subdomain oder die Fallback-Portalroute).

Unveröffentlichte Änderungen werden pro Seite und pro Token erfasst. Die Veröffentlichen-Schaltfläche ist deaktiviert, wenn nichts zu veröffentlichen ist. Das Umschalten einer Seite zwischen Live und Entwurf wird sofort gespeichert und zählt als unveröffentlichte Änderung, sodass die Veröffentlichen-Schaltfläche beim Umschalten aufleuchtet.

Ganz gleich, ob Sie über die Übersicht, die Editor-Symbolleiste oder den Erste-Schritte-Bildschirm veröffentlichen: Sobald etwas auffällt, erscheint zuerst dieselbe Veröffentlichungswarnung, und sie listet jeden Punkt mit eigener Aktion auf:

- **Starttexte**, die auf Ihren Seiten noch unbehandelt sind.
- **FAQ-Blöcke** mit Fragen ohne Antwort, mit einem Link, der den Block zum Schreiben öffnet.
- **Preiskarten ohne Preis.** Ein Tarieven-Block ginge mit Karten ohne Betrag live, darum nennt die Warnung sie und verlinkt zum Block, um die Preise einzutragen.
- **Felder, die auf Ihren rechtlichen Seiten fehlen**, mit einem Link, der Ihre Firmendaten ausfüllt. Fehlt eine KVK-Nummer, dürfen Sie trotzdem veröffentlichen: Diese Zeile bleibt weg, und Sie ergänzen sie später an derselben Stelle. Im Dialog selbst steht eine Infoline über die KVK-Nummer, damit der Grund dieser Angabe auf den rechtlichen Seiten genau dort genannt ist, wo Sie veröffentlichen.
- **Ein Kontaktblock, über den niemand Sie erreicht** (weder Telefon noch E-Mail daran).
- **Ihre Anmelde-E-Mail-Adresse.** Die Site hält die Adresse, mit der Sie sich anmelden, von Ihren Seiten fern, bis Sie sagen, dass sie gezeigt werden darf. Die Warnung bietet an, diese Adresse auf Ihrer Site zu zeigen, oder einen Link, um eine andere öffentliche Adresse einzutragen; auch weglassen ist erlaubt. Ein bewusstes „keine E-Mail auf meiner Site“ zählt als Information, nicht als Warnung, und hält die Veröffentlichung nie auf. Wo die verborgene Adresse gestanden hätte, bleibt Ihre Telefonnummer und der Rest des Satzes stehen: Die Formulierung wird aufgeräumt, statt die Adresse zu drucken.

Nur zur Information: Hat der Site-Builder Beispielfotos (Stockfotos) stehen lassen, die Sie noch nicht ersetzt haben, trägt der Dialog eine Zeile mit dem ersten davon, mit einer Schaltfläche, die den Block öffnet, damit Sie ein eigenes Foto einsetzen. Diese Zeile öffnet die Warnung nie allein; sie steht auch neben dem Veröffentlichen-Knopf und in der Übersicht.

Bleibt nur Information übrig, wechselt der Dialog in den neutralen Stand „Bereit zum Veröffentlichen“ und fragt nur noch nach Bestätigung.

Die erste Veröffentlichung endet mit dem Moment „Ihre Website ist online“: **Ihre Site ansehen** und **Ihren Link teilen**, mit einem Kopierknopf für die Adresse, die Sie an Kunden weitergeben.

Ein schneller Doppelklick kann nicht versehentlich veröffentlichen: Die Bestätigen-Schaltfläche in der Veröffentlichungswarnung ignoriert Klicks für einen Moment nach dem Öffnen, und ein zweiter Klick direkt nach dem ersten kann weder eine doppelte Veröffentlichung auslösen noch die Warnung überspringen.

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
- **Lesefortschrittsbalken**: Zeigt einen schmalen Fortschrittsbalken oben auf jeder Seite an, während Besucher scrollen. Die Balkenfarbe entspricht Ihrer Markenfarbe und lässt sich im Stil-Tab ein- oder ausschalten.

Diese Einstellungen gelten für jede Seite Ihrer Site, genau wie im Stil-Tab. Änderungen werden automatisch mit einer kurzen Verzögerung nach dem Ende der Eingabe gespeichert. Für das visuelle Layout, den Hintergrundstil und die Button-Darstellung siehe den [Stil-Tab](#styling-ihrer-site).

## Footer-Links

Die Footer-Bearbeitung befindet sich im Tab **Footer** des Navigations-Editors. Sie setzt den unteren Bereich jeder veröffentlichten Seite aus zwei Quellen zusammen: automatischen Blöcken, die aus Ihren Seiten und Unternehmensdaten generiert werden, und manuellen Linkspalten, die Sie selbst hinzufügen.

### Automatische Footer-Blöcke

Drei Schalter steuern Inhalte, die automatisch für Sie erstellt werden:

- **Seitenlinks automatisch anzeigen** ("Seiten"): eine Sitemap-Spalte mit Links zu allen live, indexierbaren Seiten Ihrer Site. Standardmäßig für neue Sites aktiviert, weil es Suchmaschinen hilft, jede Seite zu finden, und verhindert, dass Seiten isoliert werden. Startseite, Blogposts, Entwürfe, passwortgeschützte Seiten und als "noindex" markierte oder aus der Sitemap ausgeblendete Seiten werden automatisch ausgeschlossen. Verbergen Sie eine einzelne Seite in dieser Spalte, indem Sie in den SEO-Einstellungen dieser Seite **In Sitemap anzeigen** deaktivieren.
- **Kontaktdaten anzeigen** ("Kontakt"): Ihre öffentliche E-Mail-Adresse, Telefonnummer und Adresse aus den Unternehmensdaten.
- **Social Links anzeigen** ("Social Media"): die in Ihren Unternehmensdaten gespeicherten Social-Media-Links. Für Instagram, Facebook und LinkedIn füllen Sie die Adresse direkt im Footer-Panel aus, mit einer Bestätigung, bevor die Unternehmensdaten aktualisiert werden.

Diese Blöcke erscheinen im Footer-Stil Ihrer Site unterhalb der manuellen Spalten. Wenn Ihr Design bereits Kontakt- oder Social-Media-Daten anzeigt, wird der passende Schalter ausgeblendet, damit nichts doppelt erscheint.

### Manuelle Linkspalten

Unter den automatischen Schaltern können Sie bis zu sechs kuratierte Footer-Spalten hinzufügen. Jede Spalte hat einen Titel und eine Liste von Links. Verwenden Sie sie für rechtliche Seiten, Produktkategorien oder externe Ressourcen. Links akzeptieren interne Pfade, externe HTTPS-URLs, E-Mail (`mailto:`) oder Telefon (`tel:`).

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
- Ist ein Wert in Ihren Unternehmensdaten leer, zeigt die veröffentlichte Site einen Hinweis in eckigen Klammern, zum Beispiel `[Firmenname]`, damit Sie erkennen, was noch fehlt. Das E-Mail-Token trägt Ihre öffentliche Adresse: Die Anmelde-E-Mail-Adresse ist erst öffentlich, sobald Sie sie auf Ihrer Website bestätigt haben (der Veröffentlichungsdialog fragt danach); bis dahin wird Text, der sich auf das Token stützte, auf der veröffentlichten Site aufgeräumt, Ihre Telefonnummer bleibt stehen, und kein Besucher sieht das Token selbst.
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

Der Kontaktformular-Block (`form` Abschnittstyp) verfügt über einen aktiven Submit-Handler. Wenn ein Besucher die von Ihnen konfigurierten Felder ausfüllt (Name, E-Mail, Telefon, Unternehmen, Nachricht) und auf Senden klickt, erstellt die Plattform eine Anfrage und benachrichtigt Ihren Workspace. Das Formular zeigt nach Abschluss ein Erfolgsbanner und bei Fehlern eine Inline-Fehlermeldung an. Alle Eingabefelder werden während des Sendens deaktiviert, um Doppelabsendungen zu vermeiden.

Im Inspektor wählen Sie die **Art der Anfrage** des Blocks: **Angebot** (eine Anfrage nach Arbeit), **Nachricht** (eine einfache Frage oder eine Vorstellung), **Termin** (eine Anfrage nach einem Moment in Ihrem Kalender), oder **Zurückrufen** (Name und Telefon, keine E-Mail nötig). Die leere Wahl folgt der unternehmensweiten Einstellung, die Sie unter **Website > Verbindungen** legen. Die Art entscheidet, wie Einreichungen in Ihrem Posteingang, in Benachrichtigungen und in Mails heißen, und jede Art bekommt ihren eigenen Reiter unter **Angebote > Anfragen**. Ein Rückrufformular tauscht das Pflichtfeld E-Mail gegen ein Pflichtfeld Telefon.

Auf Angebots- und Nachrichtenformularen lässt **Besucher können Fotos mitschicken** einen Besucher bis zu 3 Fotos (je 10 MB, JPEG, PNG oder WebP) zur Anfrage geben. Siehe [Angebotsanfragen](/de/features/quotes#angebotsanfragen), was auf Ihrer Seite ankommt.

Was beim Absenden passiert:

1. Es werden nur die Felder gesendet, die der Block tatsächlich rendert. Wird das Namensfeld ausgeblendet, bricht das Backend nicht ab.
2. Die Plattform erstellt eine Anfrage (Art mit der Einreichung mitgestempelt) unter dem Unternehmen, das mit dem Site-Slug verknüpft ist.
3. Sie erhalten eine Workspace-Benachrichtigung (derselbe Pfad wie die alte `/portal/quote-request` Route).
4. Die Anfrage erscheint unter **Angebote > Anfragen**.
5. Der Besucher sieht eine anpassbare Erfolgsmeldung.

Kontaktformular-Einreichungen werden nur akzeptiert, wenn die Site veröffentlicht ist: Einreichungen an einen Entwurf oder einen unveröffentlichten Workspace werden abgelehnt. Sie sind auf 5 pro Minute pro IP-Adresse begrenzt und zusätzlich durch ein pro Unternehmen geltendes Missbrauchslimit abgesichert, sodass ein einzelner aktiver Besucher Ihr Benachrichtigungsbudget nicht ausschöpfen kann. Ein Cloudflare-Turnstile-Widget erscheint vor dem Absenden, wenn es in Ihrem Workspace konfiguriert ist, und blockiert automatisierte Bot-Einreichungen, ohne echte Besucher zu verlangsamen.

## Newsletter-Anmeldung

Der Newsletter-Block (`newsletter` Abschnittstyp) erfasst E-Mail-Anmeldungen von Ihrer veröffentlichten Website. Das Backend verwendet einen Double-Opt-in-Ablauf: Nach dem Absenden erhält der Besucher eine Bestätigungs-E-Mail und muss auf den Link klicken, um das Abonnement zu aktivieren. Unterdrückte Adressen und bereits aktive Abonnenten werden aus Sicht des Formulars genauso behandelt wie neue Anmeldungen (keine Datenlecks).

Was beim Absenden passiert:

1. Die Plattform speichert das Abonnement mit `source: "site_form"`.
2. Wenn die Adresse nicht bereits aktiv und nicht unterdrückt ist, wird eine Double-Opt-in-E-Mail versendet.
3. Der Besucher sieht in jedem Fall ein Erfolgsbanner, sodass der Abonnementstatus privat bleibt.
4. Nach der Bestätigung erscheint der Abonnent in der Newsletter-Zielgruppe dieses Workspaces.

Newsletter-Einreichungen teilen dasselbe Rate-Limit wie das Kontaktformular: 5 pro Minute pro IP-Adresse. Der Turnstile-Bot-Schutz ist auch bei Newsletter-Formularen aktiv, wenn konfiguriert.

## Rechtliche Seiten

Der Website-Builder erstellt für jeden neuen Arbeitsbereich zwei Standard-Rechtsseiten: **Datenschutzerklärung** (`/privacy`) und **Allgemeine Geschäftsbedingungen** (`/algemene-voorwaarden`). Der Inhalt verwendet Platzhalter für Unternehmensdaten. Wenn die Seite für Besucher gerendert wird, werden diese Platzhalter durch die Werte aus Ihren **Unternehmenseinstellungen** ersetzt: Unternehmensname, Adresse, Postleitzahl, Stadt, Land, Registrierungsnummer, USt.-ID und öffentliche E-Mail.

Der Text beider Seiten ist nach Ihrem Gewerbe gewählt, AGB und Datenschutzerklärung. Die AGB-Seite kennt zwei Varianten. Unternehmen, die direkt an Verbraucher verkaufen, Termingewerbe und Shop- oder Gastronomiegewerbe wie eine Bäckerei erhalten verbraucherorientierte Bedingungen: Sie behandeln Bestellungen und Termine, das gesetzliche Widerrufsrecht für Verbraucher mit der gesetzlichen Ausnahme für maßgefertigte oder schnell verderbliche Waren, Zahlung, das Absagen von Terminen und Kursen, Haftung und Beschwerden, plus einen allgemeinen Hinweis zu Allergien. Auf Angebote basierende Gewerbe und B2B-Dienstleistungen behalten die bestehenden Handwerker-Bedingungen, die Angebote, Mehrarbeit und Abnahme behandeln. Beide Varianten nutzen dieselben Platzhalter.

Sie können die rechtlichen Seiten wie jede andere Seite im Editor bearbeiten. Der Editor behält die Platzhalter-Anker im Inhalt, sodass auch das bloße Öffnen und Speichern einer Seite dafür sorgt, dass zukünftige Änderungen an Ihren Unternehmensdaten automatisch übernommen werden.

Verbessert MyCompanyDesk die Standardtexte, werden auch bestehende Sites aufgefrischt. Sobald Sie Website öffnen, prüft die Plattform, ob Ihre Datenschutz- und AGB-Seiten noch, Wort für Wort, einem der Standardtexte entsprechen, die sie für Ihr Gewerbe erzeugt. Eine Seite, die Sie selbst bearbeitet haben, bleibt unangetastet. Trägt eine Seite noch den Standardtext, schreibt die Plattform sie in die Formulierung um, die Ihr Gewerbe braucht: War die Seite live, geht nur diese Seite erneut in den Veröffentlichungs-Snapshot, Ihre anderen Entwürfe bleiben unberührt und die Veröffentlichen-Leiste meldet das nicht als unveröffentlichte Änderung; steht eine Seite auf Entwurf, bleibt sie Entwurf und bringt den neuen Text mit der nächsten Veröffentlichung mit.

Die rechtlichen Seiten werden zum Zeitpunkt der Veröffentlichung gerendert, wie der Rest Ihrer Site. Sie teilen sich den gleichen Live/Entwurf-Status und die gleiche Sichtbarkeitsregel auf Grundlage des Abonnements.

## Anfragen verwalten

Siehe [Angebote - Angebotsanfragen](/de/features/quotes#angebotsanfragen) für Details zur Verwaltung eingehender Anfragen.

## Abonnement-Voraussetzung

Die öffentliche Website (Unternehmensseite und Website-Builder) ist in jedem Tarif verfügbar und bleibt online. Das MyCompanyDesk-Badge ist adressbasiert: es erscheint auf der Workspace-Subdomain und entfällt auf einer eigenen Domain (Office).

- **Desk**: Die Website ist unter Ihrer Adresse auf `mycompanydesk.site` sichtbar, mit einem kleinen MyCompanyDesk-Badge.
- **Office**: Die Website ist immer sichtbar; auf einer eigenen Domain gibt es kein Badge. Eine eigene Domain verbinden und zwischen Domains wechseln ist nur mit Office möglich.
- **Stilvorlagen**: Die Stilvorlagen im Tab „Stil“ gibt es in jedem Tarif.
- **Ungewisser Zustand**: Wenn das System nicht feststellen kann, welchen Tarif Sie haben, bleibt die Website online, um ein versehentliches Abschalten zu vermeiden.

Diese Sperre gilt für alle öffentlichen Pfade: die Unternehmensseite, die Service-Detail-Route und die Seiten des Website-Builders. Die Prüfung erfolgt bei jeder Anfrage, vor jeder Caching-Schicht, damit sie auch dann korrekt ist, wenn sich Ihr Abonnement während einer Cache-Periode ändert.

Quelle: `apps/api/src/modules/billing/entitlement.service.js` — `computePublicPageGate`, `getPublicPageVisibility`; `renderer.service.js` legt die Badge-Regel auf Basis der Adresse fest.

## Verwandt

- [Domains, Website und Posteingang](/de/features/domains-website-inbox): Eigene Domain einrichten, Verifizierung, SSL und E-Mail-Posteingang.
- [Unternehmenseinstellungen](/de/settings/company): Wo Ihre Unternehmensdaten, Ihr Branding und Ihre Adresse hinterlegt sind.
- [Angebote](/de/features/quotes): Verwalten von Angebotsanfragen, die über Ihre Website eingehen.
- [Abrechnung & Tarife](/de/settings/billing): Tarifmodelle und Feature-Flags.