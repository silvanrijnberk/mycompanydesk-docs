---
title: Website-Builder
description: "Bauen Sie eine mehrseitige Unternehmenswebsite im Drag-and-drop-Editor: Abschnitte und Blöcke, eigene Farben und Schriften, und veröffentlichen."
last_verified: 2026-10-11
---

# Website-Builder

Erstellen Sie Ihre Geschäftswebsite mit einem Drag-and-Drop-Editor. Legen Sie mehrere Seiten an, gestalten Sie sie mit Abschnitten und Blöcken, passen Sie Farben und Schriften an und veröffentlichen Sie, wenn Sie bereit sind.

## Übersicht

Der Website-Builder ersetzt das alte einseitige Unternehmensprofil. Jeder neue Workspace startet mit einer Standard-Site (Home, Diensten, Over mij und Kontakt, plus Datenschutzerklärung und AGB), damit Sie von Tag eins an eine echte mehrseitige Grundlage haben. Der Editor bietet Ihnen:

- **Mehrere Seiten**: Erstellen Sie so viele Seiten, wie Sie benötigen, jede mit eigenem Pfad und eigenen Abschnitten. Die Standardseiten sind bereit zum Bearbeiten, Löschen oder Ergänzen.
- **Abschnittsblöcke**: Fügen Sie Blöcke hinzu, etwa eine große Kopfzeile, Text, Galerie, Foto mit Text, Dienstleistungen, Team, Kundenstimmen und ein Kontaktformular. Speichern Sie Blöcke als wiederverwendbare Blöcke, um Ihre eigene Bibliothek aufzubauen.
- **Design-Tokens**: Legen Sie Markenfarben, Schriften, Abstände, Eckenradius, Bewegungsstil, benutzerdefiniertes CSS und ein Site-Favicon fest. Änderungen gelten für die gesamte Site.
- **Navigations-Editor**: Ordnen Sie Header-Links per Drag-and-Drop, mit Dropdown-Gruppen, externen Links und Inline-Navbar-Styling (Markenname, CTA-Button, Telefon, Anruf-Leiste, Sticky).
- **Veröffentlichungs-Snapshots**: Arbeiten Sie im Entwurf, sehen Sie sich Ihre Änderungen in der Vorschau an und veröffentlichen Sie dann. Unveröffentlichte Änderungen werden in der oberen Leiste angezeigt.
- **Responsive Vorschau**: Wechseln Sie während der Bearbeitung zwischen Desktop-, Tablet- und Mobilansicht. In der Desktopansicht können Sie auch eine echte Viewport-Breite wählen (1280, 1440 oder 1920 Pixel), damit die eigenen Media Queries der Site ehrlich reagieren statt simuliert zu werden.
- **Größenverstellbare Leisten**: Ziehen Sie den rechten Rand der linken Leiste und den linken Rand des rechten Inspektors, um beide breiter oder schmaler zu machen. Doppelklicken Sie auf einen Ziehgriff, um zur Standardbreite zurückzukehren. Die Breite wird pro Gerät in localStorage gespeichert.
- **Zoom und Einpassen**: Zoomen Sie die Arbeitsfläche von 25 % bis 200 %, oder klicken Sie auf den Zoomwert, um Einpassen, 50 %, 100 % oder 200 % zu wählen. Der Arbeitsbereich scrollt, wenn die skalierte Arbeitsfläche ihn überragt.
- **Tastenkürzel**: Rückgängig und Wiederholen, einen Block auswählen, verschieben, duplizieren oder löschen, Ein- und Auszoomen, Einpassen und Panels schließen. Die Übersicht mit allen Tastenkürzeln öffnen Sie mit ⌘/ oder mit der Schaltfläche "Sneltoetsen" (Tastenkürzel) unten in der Leiste.

Ihre Website finden Sie in der Seitenleiste unter **Kommunikation › Website** (`/website`). Der Editor wird von dort geöffnet.

Wenn Sie `/website` öffnen, landen Sie auf dem Tab **Übersicht**: Sie sehen Ihre Site, den Veröffentlichungsstatus und die Schaltfläche **Website bearbeiten**. Die weiteren Tabs sind **Besucher**, **Ergebnisse**, **Seiten**, **Auffindbarkeit**, **Verknüpfungen** und **Domain & E-Mail**. Der Editor selbst liegt unter `/website/editor` und wird bewusst über **Website bearbeiten** aufgerufen, anstatt beim Öffnen gleich den gesamten Bildschirm zu übernehmen. Auf dem Handy öffnet der Editor in einem leichten Bearbeitungsmodus für Texte, Fotos, Bewertungen und Kontaktdaten, ohne Ziehen und ohne Stileinstellungen.

## Website-Einrichtungsassistent

Bevor Sie überhaupt den Editor öffnen, kann der Website-Einrichtungsassistent Ihren ersten Entwurf für Sie erstellen. Bei der Anmeldung wird noch keine Site gebaut: Öffnen Sie **Website** zum ersten Mal, startet der Assistent von selbst. Wurde für ein älteres Konto bereits eine Site erstellt, die noch nicht live ist, sehen Sie stattdessen **We hebben je website alvast gemaakt** (Wir haben Ihre Website schon erstellt), mit der Wahl **Zet mijn site live** (Meine Site live schalten) oder **Eerst aanpassen** (Erst anpassen). Sie können ihn jederzeit im Editor über **Hele site** (ganze Site) › **Merk** (Marke) mit **Erneut einrichten** neu starten; bei einem Neustart beginnt er bei dem, was schon stimmt. Er durchläuft diese Schritte:

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

Derselbe Assistent kann eine bestehende Site auch komplett neu schreiben. Wenn Sie ihn über **Merk** neu starten, fragt er zuerst nach Bestätigung, denn Abschließen ersetzt Text, den Sie selbst bearbeitet haben. Die Site bleibt Entwurf, bis Sie selbst veröffentlichen.

## Aufbau des Editors

Oben im Editor steht eine Reihe von Tabs: zuerst **Hele site** (ganze Site), danach jede Seite Ihrer Site. Ziehen Sie einen Seiten-Tab, um die Reihenfolge zu ändern (die Startseite steht immer vorn), oder klicken Sie auf **+** (**Pagina toevoegen**, Seite hinzufügen) für eine neue Seite. Welchen Tab Sie wählen, bestimmt, was die Leiste links anbietet:

- **Eine Seite**: **Blokken** (Blöcke: die Blöcke dieser Seite, zum Hinzufügen, Verschieben, Duplizieren oder Löschen), **Stijl** (Stil: was nur diese Seite anders haben darf, etwa Hintergrund und Breite) und **Instellingen** (Einstellungen: Titel, Webadresse, Sichtbarkeit im Menü und wie die Seite in Google erscheint). Klicken Sie auf einen Block, um ihn im Inspektor rechts zu bearbeiten: Inhalt, Layout, Stil und Animation.
- **Hele site**: **Ontwerp** (Design: die Pakete-Galerie), **Kleuren** (Farben), **Merk** (Marke), **Letters** (Schriften), **Knoppen** (Schaltflächen), **Menubalk** (Menüleiste), **Ruimte** (Abstände), **Animatie** (Animation), **Elementen** (Elemente), **Navigatie** (Navigation), **Footer**, **Versies** (Versionen: frühere Veröffentlichungen und gespeicherte Versionen, mit einem Weg zurück) und ganz unten, separat, **Eigen CSS** (eigenes CSS).

Alle Ihre Seiten als Liste, mit Status, Google-Beschreibung und Besucherzahlen, sehen Sie außerhalb des Editors im Tab **Seiten** von Website. Domain, Auffindbarkeit in Google und Verknüpfungen mit Drittanbietern verwalten Sie ebenfalls dort, in den Tabs **Domain & E-Mail**, **Auffindbarkeit** und **Verknüpfungen**, nicht im Editor.

### Pakete-Galerie

Die Pakete-Galerie (`/website/pakketten`, und im Editor **Hele site** › **Ontwerp**) ist der schnellste Weg, mit einer kompletten, vorgestylten Site zu starten. Sie listet jedes genehmigte Site-Paket: eine fertige Vorlage mit Farben und Schriftpaarung für einen bestimmten Bereich.

So funktioniert es:

1. Öffnen Sie im Editor **Hele site** › **Ontwerp**, oder gehen Sie zu `/website/pakketten`.
2. Durchstöbern Sie die Karten. Jede Karte zeigt eine Vorschau des Pakets, mit Name, Bereich, Seitenanzahl und einer kurzen Beschreibung.
3. Klicken Sie auf **Bekijk voorbeeld** (Vorschau ansehen), um das Paket anzuschauen: auf `/website/pakketten` in einem neuen Tab, im Editor in Originalgröße neben Ihrer eigenen Site.
4. Wählen Sie, wie Sie das Paket verwenden:
   - **Aussehen übernehmen**: nur die Farben, Schriften und der Schaltflächenstil des Pakets. Ihre Seiten, Blöcke und Texte bleiben genau, wie sie sind.
   - **Dieses Design verwenden**: Ihre aktuelle Entwurfs-Site (Seiten, Blöcke und Stil) wird durch das Paket ersetzt. Danach erstellt MyCompanyDesk Fotos und Texte für Ihr Unternehmen; Beispielzahlen, Bewertungen und Projekte aus dem Design bleiben leer, bis Sie sie selbst ausfüllen. Ihr vorheriger Entwurf bleibt als Wiederherstellungspunkt erhalten, Sie können also jederzeit zurück.
5. In beiden Fällen holt eine Bestätigung zuerst Ihr Einverständnis ein, und es wird nur Ihr **Entwurf** angepasst. Es wird nichts automatisch veröffentlicht.
6. Sie prüfen das Ergebnis im Editor, passen Texte und Bilder an und veröffentlichen selbst.

Im Editor gelangen Sie nach dem Anwenden zurück zu **Blokken**, um direkt weiterzubearbeiten. Mit **Terug naar alle ontwerpen** (zurück zu allen Designs) kehren Sie aus einer Vorschau zur Galerie zurück.

Suchen Sie über das Suchfeld (**Zoek een ontwerp**, Design suchen) oder filtern Sie nach Stil. Die Anzahl der Designs daneben wird beim Filtern aktualisiert.

### Bedienung auf der Arbeitsfläche

Sie können Blöcke auch direkt auf der Arbeitsfläche bedienen. Bewegen Sie den Mauszeiger über einen Block, um seinen Namen und eine kleine Werkzeugleiste zu sehen. Mit den Pfeilen verschieben Sie den Block nach oben oder unten, mit der Plus-Schaltfläche ("Blok hier invoegen", Block hier einfügen) setzen Sie einen Block dazwischen, und dazu kommen die Aktionen **Dupliceren** (Duplizieren), **Kopieer naar pagina…** (Auf Seite kopieren), **Vergrendelen** (Sperren) und **Verwijderen** (Löschen). Einen gesperrten Block können Sie nur entsperren. Navigation und Footer zeigen ihren Namen beim Hover, aber bearbeiten Sie über **Hele site** › **Navigatie** und **Footer**.

Klicken Sie auf einen Block, um ihn ausgewählt zu halten; der Rahmen bleibt dann sichtbar, auch wenn Sie die Maus wegbewegen. Arbeitsfläche und Liste **Blokken** lesen aus derselben Reihenfolge, sodass Sie eine Änderung an einer Stelle sofort an der anderen sehen. In der Liste **Blokken** können Sie einen Block auch ausblenden, ohne ihn zu löschen.

Text tippen Sie auch direkt auf der Arbeitsfläche: Klicken Sie auf den Text, tippen Sie die Änderung und klicken Sie außerhalb, um zu speichern. Das Feld im Inspektor zieht sofort mit.

Überschriften, die der Assistent, ein Umschreiben oder ein neuer Block für Sie schreibt, kommen in Satzform zu Papier: So liest sich eine Überschrift wie ein Satz. Namen wie Ihr Firmen- oder Markenname behalten ihre eigenen Großbuchstaben.

### Adresse, Karte, Arbeitsgebiet und Parken auf der Kontaktseite

Die Kontaktseite zeigt, wo Sie arbeiten und wie Sie dorthin kommen. Der Block **Locaties** fällt auf Ihre Firmenadresse zurück, wenn Sie keine eigenen Standorte haben, und ein Kontaktblock lässt eine Adresse weg, die ein Locaties-Block auf derselben Seite schon zeigt. Eine neue Kontaktseite beginnt nicht mehr mit einem leeren Locaties-Block. Eine Karte (**Kaart tonen**) entsteht aus Ihrer Adresse, wenn Sie eine wollen, **Werkgebied** ist eine der Vorlagen bei **Blok toevoegen** (Block hinzufügen), wenn Sie zeigen wollen, wo Sie Ihre Kunden aufsuchen, und der Anfahrt-Abschnitt heißt **Bereikbaarheid en parkeren** (Anfahrt und Parken).

### Eine separate Adresse für Ihre Website

Für ein Unternehmen in den eigenen Wänden muss die Website diese Wohnadresse nicht zeigen. Unter **Einstellungen › Firmendaten** tragen Sie eine separate **Adresse für Ihre Website** ein: Footer, Kontaktblock, Adressdaten für Suchmaschinen und die rechtlichen Seiten zeigen dann diese Adresse. Ihre Rechnungen nutzen weiter die Geschäftsadresse. Der Einrichtungsassistent nennt in dem Schritt die Adresse, die sonst unten auf der Seite stünde. Bleibt das Feld leer, zeigt die Website wie bisher die Geschäftsadresse.

### Die Anrede auf Ihrer Site

Ihre Site spricht ihre Besucher in einer gewählten Anrede an: "Du (je)" (persönlich: „Ik help je graag.“) oder **Sie (u)** (höflich: „Ik help u graag.“, die niederländischen Muster der festen Texte). Die Wahl sitzt im ersten Schritt des Website-Assistenten und auf der Karte **Anrede auf Ihrer Website** unter **Einstellungen** › **Unternehmensdaten**; beide schreiben dieselbe Einstellung. Feste Texte der Site, wie Buttons, Formularzeilen und Dankmeldungen, folgen der Wahl sofort. Was Sie oder der Texter schon geschrieben haben, behält seine eigene Stimme; der Button auf dieser Karte, **Alle Texte auf informell (je) umstellen** beziehungsweise **Alle Texte auf förmlich (u) umstellen**, wandelt in einem Lauf alles um, was auf der Site steht, auch Ihren getippten Text, und ändert dabei nur die Anrede, nie den Inhalt. Das Ergebnis sagt, wie viele Texte angepasst wurden und welche stehen blieben (im Editor gehen Sie sie durch), und eine Veröffentlichung bringt sie live. Abschnitte, die Sie später hinzufügen, übernehmen die Anrede, die die Site schon hat, und auch die juristischen Seiten, die Datenschutzerklärung und die Bedingungen, erscheinen in der gewählten Form. Bei einem Ein-Personen-Unternehmen sprechen die festen Texte in der Ich-Form statt in der Wir-Form; der Assistent fragt dafür Ihren Vornamen und stellt Sie nie mit Ihrem Firmennamen vor.

## Seiten erstellen

1. Klicken Sie im Editor hinter den Seiten-Tabs auf **+** (**Pagina toevoegen**, Seite hinzufügen) oder im Tab **Seiten** von Website auf **Neue Seite**.
2. Geben Sie der Seite einen Namen und wählen Sie eine **Soort pagina** (Seitenart).
3. Die Seite öffnet sich im Editor, wo Sie Blöcke hinzufügen und ausbauen können. Die Webadresse passen Sie unter **Instellingen** (Einstellungen) der Seite an. Eine Seite, die Sie hier anlegen, kommt automatisch in Ihr Menü; die 404-Seite und Blogartikel nicht. Scheitert das, sagt es Ihnen der Editor, und Sie setzen die Seite selbst im Menüeditor.

### Standardseiten

Jeder neue Workspace wird mit diesen Seiten ausgeliefert:

| Seite | Pfad | Beschreibung |
|---|---|---|
| Home | `/` | Ihre Haupt-Landingpage. Kann nicht gelöscht werden. |
| Diensten | `/diensten` | Zeigen Sie, was Sie anbieten. Vorausgefüllt mit einem Dienstleistungsabschnitt. |
| Over mij | `/over-ons` | Erzählen Sie Besuchern, wer Sie sind. |
| Kontakt | `/contact` | Kontaktformular und Details. Aus dem Footer verlinkt. |
| Datenschutzerklärung | `/privacy` | Siehe Rechtliche Seiten weiter unten. |
| Allgemeine Geschäftsbedingungen | `/algemene-voorwaarden` | Siehe Rechtliche Seiten weiter unten. |

Diese Seiten werden automatisch mit der Navigationsleiste und dem Footer verknüpft. Sie können jede Seite bearbeiten oder löschen, außer der Home-Seite, die immer erforderlich ist. Die Navigation passt ihre Links an, wenn Sie Seiten hinzufügen oder entfernen.

### Seitenstatus: Live vs Entwurf

Seiten haben einen Status, der steuert, ob sie auf Ihrer veröffentlichten Site erscheinen:

- **Live**: Die Seite wird in den Veröffentlichungs-Snapshot aufgenommen. Besucher sehen sie nach der Veröffentlichung auf Ihrer öffentlichen Site.
- **Entwurf**: Die Seite ist in Bearbeitung. Sie bleibt für Besucher unsichtbar, auch nachdem Sie die Site veröffentlichen.

Eine neue Seite beginnt als **Live**, damit sie bei Ihrer nächsten Veröffentlichung mitgeht und ein Menülink nie auf eine fehlende Seite zeigt. Ein neuer Blogartikel beginnt als **Entwurf**. Die Startseite ist immer live. Sie schalten eine Seite mit dem Schalter **Concept** (Entwurf) / **Live** bei dieser Seite in **Seiten verwalten** um. Die Statusänderung wird sofort gespeichert und aktiviert die Veröffentlichen-Schaltfläche in der oberen Leiste.

Eine Site, deren Startseite auf Entwurf steht, zeigt bei der Veröffentlichung nichts an. Wenn Sie die Startseite in den Entwurf gesetzt haben, schalten Sie sie zurück auf Live und veröffentlichen Sie erneut, um die Site wiederherzustellen.

## Seiten mit Abschnitten aufbauen

Öffnen Sie eine Seite im Editor. In der Liste **Blokken** (Blöcke):

- Klicken Sie auf **Blok toevoegen** (Block hinzufügen), um die verfügbaren Blocktypen zu sehen (große Kopfzeile, Text, Galerie, Foto mit Text, Dienstleistungen, Team, Kundenstimmen, Kontaktformular, Preise, Produkt, Gütesiegel, Online-Buchung und mehr).
- Wählen Sie einen Blocktyp aus, um ihn auf der Seite einzufügen.
- Klicken Sie auf einen Abschnitt, um das Inspektionspanel zu öffnen, in dem Sie Inhalt, Layout, Stil und Animation bearbeiten können.
- Ziehen Sie Abschnitte nach oben oder unten, um sie neu anzuordnen. Nutzen Sie die Duplizieren- und Löschen-Aktionen bei jedem Abschnitt.

Einige Abschnitte haben Systemvarianten, die nur auf der gesperrten Startseite verfügbar sind.

## KI-Hilfswerkzeuge

Zwei KI-gestützte Werkzeuge helfen Ihnen, Ihre Seiten schneller zu texten und zu bebildern, direkt im Editor-Inspektor.

### Text umschreiben

Jedes Text- und Textarea-Feld im Abschnitts-Inspektor bekommt vier kleine Ton-Buttons darunter, sobald das Feld genug Inhalt hat (mehr als ein paar Wörter). Die Buttons senden Ihren aktuellen Text an den Server, der ein schlankes Gemini-Modell nutzt, um ihn in einem bestimmten Ton umzuschreiben:

- **Korter** (Kürzer): Kürzt den Text auf etwa die Hälfte, behält aber die Bedeutung.
- **Kalmer** (Ruhiger): Macht den Text ruhiger und beruhigender. Weniger Verkaufsfloskel, mehr Vertrauen.
- **Scherper** (Schärfer): Verschärft die Formulierung. Stärkere Verben, kein Zögern.
- **Vriendelijker** (Freundlicher): Mildert den Ton, wärmer und zugänglicher.

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

1. Öffnen Sie in der Liste **Blokken** das Menü **Meer acties** (Weitere Aktionen) eines Blocks und wählen Sie **Bewaar als blok** (Als Block speichern).
2. Geben Sie dem Block einen Namen (die Blockbezeichnung ist bereits als Vorschlag vorausgefüllt).
3. Der Block wird in Ihrer persönlichen Bibliothek für diesen Workspace gespeichert.

### Gespeicherten Block einfügen

1. Klicken Sie auf einer beliebigen Seite auf **Blok toevoegen**.
2. Ihre gespeicherten Blöcke erscheinen unter **Mijn blokken** (Meine Blöcke) ganz oben im Panel.
3. Klicken Sie auf einen gespeicherten Block, um ihn als neuen Abschnitt auf der aktuellen Seite einzufügen.

Das Einfügen eines gespeicherten Blocks kopiert dessen Vorlage in eine neue Abschnittszeile. Das Bearbeiten oder Löschen des eingefügten Abschnitts wirkt sich nicht auf den gespeicherten Block in Ihrer Bibliothek aus und umgekehrt.

### Ihre Bibliothek verwalten

- **Einen Block löschen** Sie aus der Bibliothek, indem Sie auf das x-Symbol neben dem Block klicken. Dies entfernt nur die gespeicherte Vorlage; bereits eingefügte Abschnitte bleiben erhalten.
- Der Header **Mijn blokken** wird ausgeblendet, wenn Ihre Bibliothek leer ist, sodass ein Erstbenutzer keine leere Kategorie sieht.

### Abschnitts-Layoutvarianten

Viele Blöcke unterstützen mehrere Layoutvarianten, darunter die große Kopfzeile, Dienstleistungen, Preise, Kundenstimmen, Team, FAQ, Zahlen und der Aufruf mit Schaltfläche. Wählen Sie eine aus dem **Stil**-Dropdown im Layout-Tab des Inspektionspanels, um das Erscheinungsbild des Abschnitts zu ändern. Die Standardvariante behält das vertraute Aussehen bei, sodass Abschnitte, die Sie vor dieser Funktion gebaut haben, unverändert bleiben.

#### Varianten der großen Kopfzeile

| Variante | Effekt |
|---|---|
| **Standaard (foto rechts)** (Standard, Foto rechts) | Standard. Foto rechts, Text links. Fällt auf zentrierten Text zurück, wenn kein Foto vorhanden ist. |
| **Foto links** | Spiegelung des Standards: Foto links, Text rechts. |
| **Portret (ronde foto links)** / **Portret (ronde foto rechts)** | Ein rundes Porträtfoto neben dem Text. |
| **Gecentreerd** (Zentriert) | Text zentriert, optionales Foto darunter. |
| **Foto als achtergrond** (Foto als Hintergrund) | Foto über die volle Breite als Hintergrund, mit hellem Text darüber. |
| **Minimaal (alleen tekst)** (Minimal, nur Text) | Nur Text in einer schmalen Spalte. Kein Foto. |
| **Redactioneel**, **Affiche**, **Omkaderd**, **Groot cijfer** | Typografische Varianten ohne Foto: eine große Überschrift mit Metaspalte, ein Statement zwischen Linien, ein Druckrahmen oder eine große Konturzahl. |

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
| **Spotlight (één quote)** (Einzelzitat) | Ein einzelnes großes Pull-Quote im Magazin-Stil, zentriert mit Serif-Typografie. Weitere Kundenstimmen erscheinen als kleine Namens-Chips unter dem Hauptzitat. |
| **Laufband** | Eine horizontal scrollende Zeile mit Zitat-Karten. Hover pausiert die Animation; die Reduced-Motion-Einstellung des Betriebssystems stoppt sie komplett. Die Spur läuft nahtlos mit zwei Kopien des Elementsatzes durch. |

### Foto met tekst (Foto mit Text)

Der Block **Foto met tekst** ist eine Zeile mit abwechselndem Bild und Text. Jede Zeile zeigt ein Bild auf der einen Seite und Text auf der anderen: eine Eyebrow, einen Titel, einen Untertitel, Aufzählungspunkte mit Häkchen und einen optionalen Call-to-Action-Link. Im Layout-Panel legen Sie fest, auf welcher Seite das Bild erscheint.

Wichtige Hinweise:

- **Bildseite**: Die Layout-Variante steht standardmäßig auf Bild-rechts. Stellen Sie im Layout-Panel auf Bild-links um, um die Zeile zu spiegeln.
- **Optionale Elemente**: Eyebrow, Untertitel, Aufzählungspunkte, CTA und Bild sind alle optional. Ein Spotlight nur mit Titel und Bild wird trotzdem sauber dargestellt.
- **Stapeln**: Setzen Sie mehrere Spotlight-Abschnitte untereinander, um eine klassische Liste von Funktionen untereinander aufzubauen.
- **Haftendes Bild**: Aktivieren Sie **Foto blijft staan als je scrolt** (Foto bleibt beim Scrollen stehen) im Inspektor, um das Bild zu fixieren, während der Text daneben scrollt. Nur auf dem Desktop und nur sinnvoll, wenn genug Text neben dem Bild steht. Auf Mobilgeräten wird das Bild normal gestapelt.

### Preismodelle mit Kauf-Buttons

Der Preise-Abschnitt zeigt Ihre Pakete oder Pläne. Jede Stufe kann optional einen Kauf-Button erhalten:

- Aktivieren Sie bei einer Preisstufe **Met koopknop** (Mit Kauf-Button) und tragen Sie **Prijs bij afrekenen (incl. btw)** (Preis beim Bezahlen, inkl. MwSt.) ein, den Betrag, den der Käufer wirklich zahlt (zum Beispiel 750,00). Halten Sie den Preistext auf der Karte gleich.
- Ein **Jetzt kaufen**-Button ersetzt den statischen CTA-Link. Besucher, die darauf klicken, werden über den MyCompanyDesk-Checkout zu Mollie oder Stripe Connect zur Zahlung weitergeleitet.
- Das Kauf-Button-Label ist standardmäßig "Jetzt kaufen", kann aber pro Preisstufe im Feld **Koop-knop tekst** (Text des Kauf-Buttons) angepasst werden.
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

Der Block **Gütesiegel** zeigt die Zertifikate und Gütesiegel Ihres Unternehmens (STEK, VCA, CE und mehr), genau so, wie Sie sie unter **Einstellungen** › **Unternehmensdaten** erfassen. Diese Liste verwalten Sie an genau dieser einen Stelle: der Block ist datengebunden, das Inspektionspanel hat keinen Artikeleditor, sondern nur die Darstellung.

- **Überschrift**: standardmäßig „Certificeringen en keurmerken“. Geben Sie eine eigene Überschrift ein oder lassen Sie das Feld leer für einen Block ohne Überschrift.
- **Stil**: weiße Kacheln (Standard) oder schlicht. **Größe**: klein, mittel oder groß.
- Ein Gütesiegel ist auch ohne Bild in Ordnung: Ein Zeichen, das nur aus einem Namen besteht, zeigt auf der Site und in der Textversion Ihrer E-Mails diesen Namen. Das Bild bleibt optional; setzen Sie eines, läuft es durch die übliche Beschnitt- und Umwandlungsroutine.
- Höchstens sechs Gütesiegel; Reihenfolge, Name und Link legen Sie unter **Einstellungen** › **Unternehmensdaten** fest. Wenn Sie das erste Gütesiegel hinzufügen, setzt MyCompanyDesk automatisch einen Gütesiegel-Block auf Ihre Startseite, als Entwurf: vor einer abschließenden Aufforderung, wenn diese der letzte Block ist, sonst unten vor der Fußzeile. Es wird nicht sofort veröffentlicht; das Publizieren übernehmen Sie. Gibt es auf Ihrer Website bereits einen Gütesiegel-Abschnitt, kommt kein zweiter dazu.
- Ist die Liste leer oder ist **Auf Ihrer Website anzeigen** unter **Einstellungen** › **Unternehmensdaten** aus, versteckt sich der Block auf der veröffentlichten Website. Der Editor weist auch darauf hin, wenn die Gütesiegel für die Website ausgeschaltet sind.
- Entfernen Sie ein Gütesiegel, bleibt die Datei erhalten und bereits gesendete E-Mail zeigt das Logo weiterhin; der Block versteckt sich erst, wenn die Liste vollständig leer ist.

### Dienstleistungen und Produkte aus Aanbod

Blöcke mit Dienstleistungen, Produkten oder Abonnements holen ihre Artikel aus Ihrem Aanbod. Eine Beschreibung, die Sie für eine Dienstleistung eintippen, ist ein einziger Text: Der Dienstleistungsblock auf Ihrer Startseite und die Dienstleistungsseite teilen ihn, darum landet eine Korrektur überall auf einmal. Ein Neuaufbau hat nie einen Entwurfstext einer Dienstleistungskarte live gezogen: Bis zur Veröffentlichung zeigen die Karten den Text, den sie schon hatten.

Der Preis folgt der im Aanbod hinterlegten Preismodus: ein fester Betrag, "ab" einem Betrag oder "Auf Anfrage", wenn kein Preis hinterlegt ist. Ein Preis von null ist ein echter Preis: Ein bewusst kostenloser Artikel zeigt auf der Site, in der Preisliste, in der Aanbod-Liste und im Buchungsblock „Kostenlos“ statt ohne Preis zu erscheinen; nur Artikel ganz ohne Preis zeigen "Auf Anfrage".

## Abschnitts-Animationen

Jeder Block hat im Inspektor einen Tab **Animatie** (Animation). Damit fügen Sie Bewegung hinzu, die beim Erscheinen des Blocks im Bild, beim Seitenaufruf oder beim Überfahren mit der Maus abgespielt wird.

### Animationsstil

Wählen Sie bei **Animatie-stijl** (Animationsstil), wie der Block erscheint:

| Stil | Effekt |
|---|---|
| **Geen** (Keine) | Keine Animation, der Block ist sofort da. |
| **Zacht omhoog** (Sanft nach oben, Standard) | Der Block erscheint und gleitet dabei ein Stück nach oben. |
| **Zacht in beeld** (Sanft einblenden) | Der Block blendet aus Transparenz ein. |
| **Schuif van rechts** (Von rechts hereinschieben) | Der Block erscheint und gleitet von der Seite ins Bild. |
| **Inzoomen** | Der Block wächst leicht auf seine eigene Größe. |
| **Uitvouwen (horizontaal)** (Ausklappen, horizontal) | Der Block klappt in der Breite auf. |
| **Na elkaar** (Nacheinander) | Die Teile des Blocks erscheinen kurz nacheinander, anstatt dass sich der Block selbst bewegt. |
| **Trap (paginakop)** (Treppe, Seitenkopf) | Die Teile des Seitenkopfs erscheinen treppenartig. |
| **Onthullen** (Enthüllen) | Der Block wird durch eine Maske enthüllt. |
| **Woord voor woord (titel in de paginakop)** (Wort für Wort, Titel im Seitenkopf) | Nur für die große Kopfzeile. Die Wörter des Titels erscheinen nacheinander; andere Blöcke erscheinen einfach. |

### Wann starten

- **Bij in beeld komen** (Beim Erscheinen im Bild, Standard): Die Animation wird abgespielt, wenn der Block ins Bild scrollt. Einmal animiert bleibt der Block sichtbar.
- **Direct bij laden** (Direkt beim Laden): Die Animation startet, sobald die Seite geladen ist.
- **Bij aanwijzen** (Beim Überfahren): Die Animation startet, wenn die Maus auf den Block kommt, und kehrt zurück, wenn die Maus weggeht.

### Einstellungen

- **Snelheid** (Geschwindigkeit): Wie lange die Animation dauert, von 200 bis 1600 Millisekunden. Standard 600 ms.
- **Vertraging** (Verzögerung): Wartezeit vor dem Animationsstart, von 0 bis 1200 Millisekunden. Standard 0 ms.
- **Soort beweging** (Art der Bewegung): Die Beschleunigungskurve. Auswahl: "Soepel" (Standard), "Vloeiend", **Gelijkmatig** und **Lineair**.
- **Onderdelen na elkaar** (Teile nacheinander): Nur bei Blöcken mit mehreren Elementen. Die Elemente des Blocks erscheinen kurz nacheinander statt gleichzeitig.

Wie Blöcke site-weit erscheinen, wählen Sie unter **Hele site** › **Animatie**: **Geen**, **Subtiel**, **Zacht**, **Zijwaarts**, **Onthullen** oder **Speels**.

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

Unter **Hele site** im Editor steuern Sie das Erscheinungsbild Ihrer gesamten Site. Jeder Teil hat in der Leiste eine eigene Schaltfläche:

- **Kleuren** (Farben): Oben wählen Sie die Textgröße für Ihre Besucher (**Normal**, **Groß** oder **Extra groß**). Darunter stehen die **Kleurthema's** (Farbthemen): fertige Farbschemata (unter anderem Editorial, Studio, Tech, Atelier, Bold, Calm, Mono und Vivid), die Sie mit einem Klick anwenden. Ihre Schriften, Blockstile, Texte, Fotos, Logo und Schaltflächen bleiben dabei erhalten; wählen Sie **Ook letters en vormen overnemen** (Auch Schriften und Formen übernehmen), wenn Sie auch die Schriften und Formen des Themas wollen. Danach stellen Sie sechs Farben einzeln ein, unter schlichten Namen: **Hoofdkleur** (Hauptfarbe), **Tweede kleur** (zweite Farbe), **Pagina-achtergrond** (die Seite hinter allem), **Blokken en kaarten** (Blöcke und Karten), **Tekst** (Text) und **Kleine tekst** (kleiner Text). Eine Lesbarkeitsprüfung warnt, wenn eine Kombination zu wenig Kontrast hat.
- **Donkere kleuren** (Dunkle Farben, unten bei Kleuren): Vier Optionen: **Uit** (aus: die Site bleibt hell), **Altijd donker** („immer dunkel“, Ihre gesamte Site ist für jeden Besucher dunkel), **Knop in menubalk** („Knopf in der Menüleiste“, Besucher sehen einen Sonne/Mond-Umschalter in der Menüleiste und können wechseln) und **Volgt het toestel** („Folgt dem Gerät“, die Site folgt der Einstellung des Geräts des Besuchers). Ist eine dunkle Version aktiv, wählen Sie ein fertiges dunkles Set oder stellen die dunklen Farben selbst ein; ein leeres Feld bekommt dieselbe Farbe wie bei Hell, und eine Haupt- oder zweite Farbe, die auf der dunklen Seite verschwände (Schwarz, Navy), bekommt automatisch eine aufgehellte Nachtversion. Oben bei Kleuren steht außerdem **Liever een donkere site?** (Lieber eine dunkle Site?), mit **Bekijk donkere ontwerpen** (springt zu den dunklen Designs in der Galerie) und **Maak mijn site donker** (Meine Site dunkel machen). Wählen Sie, während Ihre Site auf Altijd donker steht, ein Site-Paket, fragt die Site zuerst nach Bestätigung, denn das Paket schaltet Altijd donker aus, damit das Ergebnis so aussieht wie in der Vorschau.
- **Merk** (Marke): Ihr Logo für einen hellen und (optional) einen dunklen Hintergrund, Ihr Favicon und die Schaltfläche **Erneut einrichten** für den Assistenten. Wenn Sie kein Favicon festlegen, verwendet die Site Ihr helles Logo, dann Ihr Geschäftsprofilbild.
- **Letters** (Schriften): Wählen Sie Überschrift- und Textschriften aus der integrierten Schriftbibliothek (unter anderem Inter, Geist, DM Sans, Fraunces, Lora, Space Grotesk und DM Serif Display) oder eine fertige Schriftkombination. Alle Schriften werden von MyCompanyDesk selbst ausgeliefert, nicht von Google Fonts oder einem anderen Drittanbieter-CDN. Dieselben Schriftdateien werden im Editor und auf Ihrer veröffentlichten Site verwendet, sodass die Schrift überall gleich aussieht und die IP-Adressen Ihrer Besucher nicht an Dritte gehen.
- **Knoppen** (Schaltflächen): Eckenradius, der Standard-Schaltflächenstil, der Stil der Aufzählungszeichen, der Überschriftenstil (Größe, Großbuchstaben, Buchstabenabstand und Stärke der Überschriften), Farbverlauf auf Schaltflächen und der Kartenstil. Der Kartenstil steuert, wie Karten für Dienstleistungen, Bewertungen und Preise aussehen: **Vlak (geen rand)** (flach, kein Rand), **Met rand** (umrandet, Standard), **Met schaduw** (mit Schatten), **Zwevend (sterke schaduw)** (schwebend, starker Schatten), **Brut (harde rand, blokschaduw)** (harte Linie, Blockschatten), **Lijn (alleen contour)** (nur Kontur) oder **Glas (mooist op een foto)** (am schönsten auf einem Foto). Glas wirkt am besten über einem Foto, Farbverlauf oder dekorativen Streifen; auf einfachem Hintergrund fällt es auf eine sanft getönte Karte zurück.
- **Menubalk** (Menüleiste): Layout, Form und Hintergrund der Menüleiste, der Schaltflächenstil darin, die Logogröße, die Menülinks und ihr Effekt, und ob die Menüleiste beim Hinunterscrollen verschwindet. Hier steht auch der Inhalt der Menüleiste (Logo oder Markenname, die Schaltfläche oben rechts, Telefonnummer und WhatsApp-Nummer); siehe [Navigation](#navigation).
- **Ruimte** (Abstände): Dichte (**Compact**, **Ruim**, **Royaal**), maximale Seitenbreite, Abstand über und unter Blöcken, Farbwechsel zwischen Blöcken, Struktur im Hintergrund und der Farbton Ihrer Fotos.
- **Animatie** (Animation): Wie Blöcke site-weit erscheinen, während Besucher scrollen (**Geen**, **Subtiel**, **Zacht**, **Zijwaarts**, **Onthullen** oder **Speels**), und **Minder beweging voor wie dat instelt** (Weniger Bewegung für alle, die das einstellen) für Besucher, die in ihrem System weniger Animationen verlangen.
- **Elementen** (Elemente): Teile, die auf jeder Seite erscheinen: die **Leesbalk** (Lesebalken: ein schmaler Fortschrittsbalken oben oder unten, während Besucher scrollen), eine **Aankondigingsbalk** (Ankündigungsleiste), die **Zwevende contactknop** (schwebender Kontaktknopf: WhatsApp, Telefon oder E-Mail) und eine **Cookiemelding** (Cookie-Hinweis).
- **Eigen CSS** (eigenes CSS): Schreiben Sie Ihr eigenes CSS, das in die Site eingebunden wird. Nützlich für Feinanpassungen oder zum Überschreiben von Standardwerten. Diese Schaltfläche steht unten in der Leiste, getrennt vom Rest, weil ein Fehler darin die ganze Site trifft. Hier stehen auch die **Analytics-snippets** (Plausible Analytics und ein Preconnect für Schriften); andere Messdienste wie Umami, Matomo oder Google Analytics verbinden Sie im Tab **Verknüpfungen** von Website.

### Logo-Import

Wenn Sie bereits ein Logo auf Ihrer Website haben, können Sie es direkt in MyCompanyDesk importieren. Unter **Hele site** › **Merk** finden Sie **Heb je al een website? Haal je logo daarvandaan** (Haben Sie schon eine Website? Holen Sie Ihr Logo von dort): geben Sie die URL der Seite ein, auf der sich Ihr Logo befindet. MyCompanyDesk ruft die Seite ab, extrahiert das bestmögliche Logo und erstellt sowohl eine helle als auch eine dunkle Version für Ihre Site. Nach dem Import können Sie die beiden Versionen weiterhin einzeln ersetzen.

Änderungen unter **Hele site** werden automatisch gespeichert und gelten für alle Seiten.

## Veröffentlichen

Die obere Leiste zeigt einen Punkt an, solange unveröffentlichte Änderungen warten. Bei der Veröffentlichung werden nur Seiten mit dem Status Live in den Snapshot aufgenommen. Seiten im Entwurf bleiben auf der öffentlichen Site unsichtbar, auch nach der Veröffentlichung.

Bis Sie veröffentlichen, sendet Ihre öffentliche URL ein `noindex`-Robots-Tag. So bleibt die Workspace-Subdomain außerhalb der Suchmaschinen, während Sie noch aufbauen; die Subdomain selbst kommt erst bei Ihrer ersten Veröffentlichung in den Blick.

Wenn Sie bereit sind:

1. Klicken Sie in der oberen Leiste auf **Veröffentlichen**.
2. Ihre Site wird unter der öffentlichen URL veröffentlicht (Ihre eigene Domain, Ihre Adresse auf `mycompanydesk.site` oder die Fallback-Adresse in der App).

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

Die erste Veröffentlichung endet mit "Deine Website ist online": **Website ansehen** und **Link teilen**, mit einem Kopierknopf für die Adresse, die Sie an Kunden weitergeben.

Ein schneller Doppelklick kann nicht versehentlich veröffentlichen: Die Bestätigen-Schaltfläche in der Veröffentlichungswarnung ignoriert Klicks für einen Moment nach dem Öffnen, und ein zweiter Klick direkt nach dem ersten kann weder eine doppelte Veröffentlichung auslösen noch die Warnung überspringen.

## Navigation

Der Navigations-Editor (**Hele site** › **Navigatie**) ermöglicht es Ihnen, die Menüpunkte Ihrer Site zu ordnen:

- Ziehen Sie Seiten, um die Navigation neu anzuordnen.
- Erstellen Sie Dropdown-Gruppen, um Seiten unter einem übergeordneten Label zu verschachteln.
- Fügen Sie externe Links hinzu, die aus Ihrer Site herausführen.
- Das Logo im Header ist anklickbar und führt immer zurück zur Startseite.
- Die Startseite steht immer an erster Stelle und ist gesperrt.

Den Inhalt der Menüleiste selbst stellen Sie unter **Hele site** › **Menubalk** ein:

- **Logo** und **Merknaam** (Markenname): Wählen Sie, was die Menüleiste zeigt (**Automatisch**, **Alleen merknaam** oder **Logo + merknaam**). Automatisch zeigt Ihr Logo, sobald Sie eines hochladen, und sonst Ihren Markennamen.
- **Knop** (Schaltfläche): Der Text und das Ziel der Schaltfläche rechts in der Menüleiste, und der **Knopstijl** (Schaltflächenstil). Text und Ziel müssen ausgefüllt sein, damit die Schaltfläche erscheint.
- **Telefoonnummer (tel: link)**: Eine anklickbare Telefonnummer neben der Schaltfläche auf dem Desktop und im mobilen Menü. Leer lassen, um sie auszublenden.
- **Bel-label (mobiel)** (Anruf-Label, mobil): Der Text neben dem Telefonsymbol auf dem Handy (standardmäßig "Bel direct", wenn leer gelassen).
- **Belknop onderaan op mobiel** (Anrufknopf unten auf dem Handy): Eine feste Anruftaste unten auf dem Bildschirm auf mobilen Geräten, damit Besucher Sie mit einem Fingertipp anrufen, egal wo sie sich auf der Seite befinden. Die Anrufleiste kann neben dem Anrufknopf auch WhatsApp zeigen: Sie übernimmt die WhatsApp-Nummer, die der Rest Ihrer Site schon trägt (eine WhatsApp-Schaltfläche, ein Kontaktblock mit WhatsApp oder der schwebende Kontaktknopf), und eine **WhatsApp-nummer**, die Sie hier selbst eintragen, gewinnt. Auf dem Handy lässt der schwebende Kontaktknopf WhatsApp weg, sobald die Leiste es zeigt, damit WhatsApp nie doppelt auf einem Bildschirm steht.
- **Menubalk blijft in beeld bij scrollen** (Menüleiste bleibt beim Scrollen im Bild): Standardmäßig an. Die Menüleiste bleibt sichtbar, während der Besucher nach unten scrollt.

Diese Einstellungen gelten für jede Seite Ihrer Site und werden automatisch gespeichert. Die Gestaltung der Menüleiste (Layout, Hintergrund, Schaltflächenstil) steht an derselben Stelle, siehe [Ihre Site gestalten](#ihre-site-gestalten).

## Footer-Links

Die Footer-Bearbeitung finden Sie unter **Hele site** › **Footer**. Sie setzt den unteren Bereich jeder veröffentlichten Seite aus zwei Quellen zusammen: automatischen Blöcken, die aus Ihren Seiten und Unternehmensdaten generiert werden, und manuellen Linkspalten, die Sie selbst hinzufügen.

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

## Öffentliche URL

Ihre Website wird unter der am besten geeigneten URL bereitgestellt:

1. Ihre eigene Domain (z. B. `https://acme.de`), wenn verifiziert und aktiviert (Office)
2. Ihre kostenlose Adresse auf `mycompanydesk.site` (z. B. `https://acme.mycompanydesk.site`), die bei Ihrer ersten Veröffentlichung aus Ihrem Firmennamen erstellt wird
3. Die Fallback-Adresse in der App (`/sites/{slug}`), solange es noch keine kostenlose Adresse gibt

Siehe [Domains, Website und Posteingang](/de/features/domains-website-inbox) für Domain-Einrichtung und -Verifizierung.

## Kontaktformular

Der Kontaktformular-Block verfügt über einen aktiven Submit-Handler. Wenn ein Besucher die von Ihnen konfigurierten Felder ausfüllt (Name, E-Mail, Telefon, Unternehmen, Nachricht) und auf Senden klickt, erstellt die Plattform eine Anfrage und benachrichtigt Ihren Workspace. Das Formular zeigt nach Abschluss ein Erfolgsbanner und bei Fehlern eine Inline-Fehlermeldung an. Alle Eingabefelder werden während des Sendens deaktiviert, um Doppelabsendungen zu vermeiden.

Im Inspektor wählen Sie bei **Wat vraagt de klant?** (Was fragt der Kunde?) die Art der Anfrage des Blocks: **Offerte** (Angebot: eine Anfrage nach Arbeit), **Bericht** (Nachricht: eine einfache Frage oder eine Vorstellung), **Afspraak** (Termin: eine Anfrage nach einem Moment in Ihrem Kalender), oder "Terugbelverzoek" (Rückrufbitte: Name und Telefon, keine E-Mail nötig). **Volg je bedrijfsinstelling** (Unternehmenseinstellung folgen) folgt der unternehmensweiten Einstellung, die Sie unter **Website › Verknüpfungen** legen. Die Art entscheidet, wie Einreichungen in Ihrem Posteingang, in Benachrichtigungen und in Mails heißen. Die unternehmensweite Einstellung bestimmt auch, wie der Reiter mit Anfragen unter **Angebote** heißt, zum Beispiel **Angebotsanfragen** oder **Rückrufbitten**. Ein Rückrufformular tauscht das Pflichtfeld E-Mail gegen ein Pflichtfeld Telefon.

Auf Angebots- und Nachrichtenformularen lässt "Bezoekers kunnen foto's meesturen" (Besucher können Fotos mitschicken) einen Besucher bis zu 3 Fotos (je 10 MB, JPEG, PNG oder WebP) zur Anfrage geben. Siehe [Angebotsanfragen](/de/features/quotes#angebotsanfragen), was auf Ihrer Seite ankommt.

Was beim Absenden passiert:

1. Es werden nur die Felder gesendet, die der Block tatsächlich rendert. Ein ausgeblendetes Namensfeld führt also zu keinem Fehler.
2. Die Plattform erstellt eine Anfrage (Art mit der Einreichung mitgestempelt) unter dem Unternehmen, das mit dem Site-Slug verknüpft ist.
3. Sie erhalten eine Workspace-Benachrichtigung.
4. Die Anfrage erscheint unter **Angebote**, im Reiter mit Ihren Anfragen.
5. Der Besucher sieht eine anpassbare Erfolgsmeldung.

Kontaktformular-Einreichungen werden nur akzeptiert, wenn die Site veröffentlicht ist: Einreichungen an einen Entwurf oder einen unveröffentlichten Workspace werden abgelehnt. Sie sind auf 5 pro Minute pro IP-Adresse begrenzt und zusätzlich durch ein pro Unternehmen geltendes Missbrauchslimit abgesichert, sodass ein einzelner aktiver Besucher Ihr Benachrichtigungsbudget nicht ausschöpfen kann. Ein Cloudflare-Turnstile-Widget erscheint vor dem Absenden, wenn es in Ihrem Workspace konfiguriert ist, und blockiert automatisierte Bot-Einreichungen, ohne echte Besucher zu verlangsamen.

## Newsletter-Anmeldung

Der Newsletter-Block erfasst E-Mail-Anmeldungen von Ihrer veröffentlichten Website. Die Anmeldung läuft per Double-Opt-in: Nach dem Absenden erhält der Besucher eine Bestätigungs-E-Mail und muss auf den Link klicken, um das Abonnement zu aktivieren. Unterdrückte Adressen und bereits aktive Abonnenten werden aus Sicht des Formulars genauso behandelt wie neue Anmeldungen (keine Datenlecks).

Was beim Absenden passiert:

1. Die Plattform speichert die Anmeldung, mit Ihrer Website als Quelle.
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
- **Office**: Die Website ist immer sichtbar; auf einer eigenen Domain gibt es kein Badge. Eine eigene Domain verbinden ist nur mit Office möglich (höchstens 5 eigene Domains).
- **Design und Stil**: Die Pakete, Farbthemen und alle Stileinstellungen gibt es in jedem Tarif.
- **Ungewisser Zustand**: Wenn das System nicht feststellen kann, welchen Tarif Sie haben, bleibt die Website online, um ein versehentliches Abschalten zu vermeiden.

Diese Sperre gilt für alle öffentlichen Pfade: die Unternehmensseite, die Service-Detail-Route und die Seiten des Website-Builders. Die Prüfung erfolgt bei jeder Anfrage, vor jeder Caching-Schicht, damit sie auch dann korrekt ist, wenn sich Ihr Abonnement während einer Cache-Periode ändert.

## Verwandt

- [Domains, Website und Posteingang](/de/features/domains-website-inbox): Eigene Domain einrichten, Verifizierung, SSL und E-Mail-Posteingang.
- [Unternehmenseinstellungen](/de/settings/company): Wo Ihre Unternehmensdaten, Ihr Branding und Ihre Adresse hinterlegt sind.
- [Angebote](/de/features/quotes): Verwalten von Angebotsanfragen, die über Ihre Website eingehen.
- [Abonnement & Zahlungen](/de/settings/billing): Was in Desk und Office enthalten ist.