---
title: Einrichtungsassistent
last_verified: 2026-05-19
---

# Einrichtungsassistent

Ein magisches Setup in fünf Schritten unter `/setup`, das Ihre Unternehmensidentitat erfasst, optional Ihre Registrierung vom Handelsregister oder einem EU-Register abruft, eine Webadresse auswahlt, Markenvorschlage generiert und alles mit einem Klick anwendet. Der Assistent ist die Eingangstur fur Erstbenutzer und bleibt danach fur Anpassungen verfugbar.

Wenn Sie hier die grundlegende Einfuhrung suchen, beginnen Sie bei [Unternehmen einrichten](/de/getting-started/company-setup). Diese Seite ist die ausfuhrliche Referenz: jeder Schritt, jede Option, jede Konsequenz.

## Wann der Assistent angeboten wird

Der Assistent ist auf zwei Wegen erreichbar:

- **Direkt:** Navigieren Sie jederzeit zu `/setup`.
- **Dashboard-Banner:** Solange das Onboarding nicht abgeschlossen ist, erscheint ein schließbares "Setup abschließen"-Banner oben auf `/dashboard`. Es zeigt eine Zählung der ausstehenden Felder (oder einen generischen "Profil vervollständigen"-Text, wenn die Zählung null ist) und eine Schaltfläche zurück zum Assistenten. Eine Schließen-Schaltfläche (X-Symbol) blendet das Banner pro Browser über localStorage aus, sodass es über Seitenneuladungen hinweg ausgeblendet bleibt, bis der Assistent abgeschlossen ist.

Der Assistent ist nicht blockierend: Die alte erzwungene Weiterleitung zu `/setup` bei der Anmeldung (die `ONBOARDING_MANDATORY`-Sperre) wurde entfernt. Neue Anmeldungen landen direkt auf `/dashboard` und sehen stattdessen das schließbare Banner.

## Seitenaufbau

Der Assistent ist eine einzelne Seite (`/setup`) mit fünf Schritten in einer Schrittleiste. Jeder Schritt schreibt seine Antworten bei jeder Änderung in eine JSONB-Spalte (`companies.onboarding_state`), sodass der Assistent vollstandig fortsetzbar ist: Schliessen Sie den Tab mitten im Schritt und der nachste Besuch bringt Sie zum selben Schritt mit denselben ausgefullten Antworten.

Drei Schaltflachen sitzen unten auf jedem Schritt:

- **Zuruck** — zum vorherigen Schritt (bei Schritt 1 ausgeblendet).
- **Jetzt uberspringen** — verlasst den Assistenten, ohne das Onboarding als abgeschlossen zu markieren. Das Dashboard-Banner bleibt sichtbar, damit der Benutzer zuruckkehren kann.
- **Weiter** / **Abschliessen** — pro Schritt durch die unten stehenden Antworten gesteuert.

Es gibt kein "Speichern und Beenden" — das Speichern erfolgt automatisch. **Jetzt uberspringen** ist ein sauberer Ausstieg, kein Verwerfen.

## Schritt 1 — Unternehmen

Erfasst die zwei Antworten, von denen jeder spatere Schritt abhangt.

| Feld | Gespeichert als | Erforderlich | Hinweise |
|---|---|:---:|---|
| Unternehmensname | `answers.businessName` | ja | Wird als `display_name` und `company_name` bei Abschluss verwendet (der rechtliche Name aus dem Registerschritt gewinnt fur `company_name`, wenn beide vorhanden sind). Befullt auch den Subdomain-Slug-Vorschlag in Schritt 3. |
| Was Sie tun | `answers.what` | ja | Freitext, 1–2 Satze. Wird zusammen mit Land und Branche an den Vorschlagsgenerator (Gemini) des magischen Schritts gesendet. |

**Weiter ist deaktiviert**, bis beide Felder nicht-leere, bereinigte Werte haben.

## Schritt 2 — Register

Wählt ein Land und sucht das Unternehmen entweder im offiziellen Register des Landes, füllt die Angaben von Hand aus, oder überspringt den Schritt.

### Drei Wege

1. **Suche** — Typeahead nach Firmennamen, Treffer auswählen und das Basisprofil vom Backend abrufen lassen (EUR 0,02 pro Abruf für NL). Das Suchfeld wird nur angezeigt, wenn die kostenpflichtige KVK-API (`KVK_API_KEY`) auf dem API-Container konfiguriert ist. Fehlt der Schlüssel, wird die Suche übersprungen und der Assistent startet standardmäßig mit manueller Eingabe (Weg 2).
2. **Manuell** — Firmennamen, Handelsregisternummer (optional), Adresse, Postleitzahl und Ort selbst eingeben. Die Daten werden direkt über `PUT /company-settings/company` in die Unternehmenszeile geschrieben und `answers.kvk` wird mit `manual: true` markiert. Die manuelle Eingabe ist der Standard, wenn KVK_API_KEY nicht gesetzt ist, und existiert auch für zwei zusätzliche Szenarien selbst wenn die Suche verfügbar ist: (a) neue Unternehmen, die noch nicht im kostenlosen OpenKVK-Datensatz enthalten sind, und (b) Unternehmen, deren Handelsname nicht mit der Sucheingabe des Benutzers übereinstimmt.
3. **Überspringen** — "Kein Handelsregistereintrag?" speichert `answers.kvk = null`. Der Assistent fährt fort; Unternehmensdaten können später in den Einstellungen ergänzt werden.

Der Wechsel zwischen Suche und manueller Eingabe erfolgt mit einem Klick (wenn die Suche verfügbar ist): Eine "Manuell ausfüllen"-Schaltfläche erscheint unter den Suchergebnissen, und ein "Zurück zur KVK-Suche"-Link sitzt oben im manuellen Formular. Wenn `KVK_API_KEY` fehlt, ist die Zurück-zur-Suche-Schaltfläche vollständig ausgeblendet und der Benutzer beginnt und bleibt auf manueller Eingabe.

### Landoptionen

| Code | Angezeigtes Register | Suche aktiv |
|---|---|:---:|
| `NL` | KvK | ja |
| `FR` | SIRENE | ja |
| `GB` | Companies House | ja |
| `DE` | Handelsregister | nein — manuelle Eingabe |
| `OTHER` | (kein Register) | nein — manuelle Eingabe |

`NL` ist die Voreinstellung. Das Land bestimmt mehrere Dinge beim Abschluss: Zeitzone (`Europe/Amsterdam` / `Europe/Berlin` / `Europe/Paris` / `Europe/London`), `pdf_language` (`nl` / `de` / `fr` / `en`) und das Registerlabel in `footer_text` (`KvK 12345678`, `Handelsregister …`, `SIRENE …`, `CRN …`).

### Suchmodus

Für unterstützte Länder sucht der Benutzer nach dem Firmennamen. Das Backend ruft die entsprechende öffentliche API auf und liefert einen der folgenden Rückgabewerte:

- **ok** — `legalName`, `address`, `postalCode`, `city`, `sector` befullt und unter `answers.registry` gespeichert.
- **not-configured** — Anbieter in dieser Umgebung noch nicht angeschlossen; der Benutzer wird aufgefordert, zur manuellen Eingabe zu wechseln.
- **not-found** — Nummer nicht gefunden; Benutzer kann erneut versuchen oder manuell wechseln.
- **invalid** — Nummernformat abgelehnt.
- **error** — Anbieterfehler; manuelle Eingabe bleibt eine Option.

<!-- TODO(source-missing): KvK Basisprofiel API pricing (EUR 0.02/call) and subscription (EUR 6.40/month) from developers.kvk.nl/nl/pricing -->
#### KvK Basisprofiel (nur NL)

Fur NL-Workspaces ist die KvK-Suche ein zweistufiger Prozess:

1. **Typeahead** — der Benutzer sucht nach Unternehmensnamen. Der `zoeken`-Endpunkt (kostenlos) gibt ubereinstimmende Eintrage zuruck. Dies ist der Autocomplete-Schritt, der die bestehenden `ok`- / `not-found`-Antworten antreibt. Wenn die Suche null Treffer liefert, zeigt die UI ein Inline-Panel fur leere Ergebnisse an (Titel, Erklarung und ein "Manuell eintragen"-Button, der das manuelle Formular mit dem bereits eingegebenen Text vorausfullt). Dies kommt haufig vor, da die kostenlose OpenKVK-Stufe viele junge Unternehmen nicht erfasst.
2. **Basisprofiel** — sobald ein Treffer ausgewahlt ist, ruft der Assistent den KvK-Basisprofiel-Detailendpunkt auf. Dies ist ein kostenpflichtiger Aufruf (EUR 0,02, 24h zwischengespeichert pro KVK-Nummer). Er gibt das vollstandige Profil zuruck: `legalName`, `statutaireNaam` (satzungsmassiger Name), `tradeNames` (alle registrierten Handelsnamen, sortiert), `rsin`, `legalForm`, `dateFounded`, Besuchs- und Postadressen, SBI-Codes mit Primarflag, `employeeCount` und `indNonMailing` (Keine-Post-Flag).

Es gibt zwei unabhängige Feature-Flags für NL-KVK-Abfragen:

- `KVK_API_KEY` (Env-Var auf dem API-Container): Wenn dieser fehlt, wird das Suchfeld gar nicht angezeigt und der Assistent startet in diesem Schritt standardmäßig mit manueller Eingabe. Die kostenlose OpenKVK-Stufe allein ist zu lückenhaft (~2% Trefferquote, verpasst fast jede Neuanmeldung). Das Flag schaltet automatisch um, sobald der Schlüssel gesetzt ist.
- `KVK_BASISPROFIEL_ENABLED`: Wenn deaktiviert (oder wenn `KVK_API_KEY` fehlt), verwendet der Assistent nur das kostenlose `zoeken`-Ergebnis (dieselben `ok`-Felder wie oben). Wenn aktiviert und `KVK_API_KEY` vorhanden ist, reichern die Basisprofiel-Daten die `answers.registry`-Payload an und der Überprüfungsschritt zeigt jedes Feld, das in die Unternehmenszeile geschrieben wird.

### Manueller Modus

Benutzer fullt `chosen` (seine Registrierungsnummer) aus, und optional `legalName`, `address`, `sector`. Alle vier Felder sind in diesem Modus optional.

### Überspringen-Modus

Ein "Noch nicht registriert"-Schalter speichert `answers.registry = null`. **Weiter ist in diesem Schritt immer erlaubt**, unabhangig vom Modus — Registerdaten sind Bequemlichkeit, keine Hürde.

## Schritt 3 — Domain

Wahlen Sie die Webadresse, die Kunden auf der offentlichen Unternehmensseite und (wo zutreffend) bei eingehenden E-Mails sehen.

### Zwei Wege

**Subdomain (Standard):** der Benutzer wahlt einen Slug; der Assistent verknupft ihn mit `<slug>.mycompanydesk.nl` fur `NL`-Workspaces und `<slug>.mycompanydesk.com` uberall sonst. Der Slug ist aus `businessName` vorbefullt (Kleinbuchstaben, ASCII, max. 32 Zeichen). Beim Abschluss wird die Subdomain uber die Cloudflare-API bereitgestellt und die Unternehmenswebsite ist sofort erreichbar.

**Eigene Domain:** der Benutzer gibt eine Domain ein, die er bereits besitzt. Beim Abschluss fuhrt der Assistent Folgendes aus:

1. Fugt die Domain zur Domainliste des Workspace hinzu (keine Aktion, wenn sie bereits hinzugefugt wurde).
2. Aktiviert automatisch den Posteingang darauf: erstellt `info@<domain>` als Standard-Postfach plus `support@`, `sales@` und `noreply@`-Aliase.
3. Erstellt optional ein personliches Postfach (siehe unten).

Wenn die Domain noch nicht auf die Nameserver von MCD zeigt, leitet der Abschluss zu `/workspace/organization/company/address` weiter, sodass der Benutzer sofort die DNS-Anweisungen und eine **Überprufen**-Schaltflache sieht. Andernfalls geht es zum Dashboard.

### Personliche Postfach-Umschaltung

Wenn **Eigene Domain** ausgewahlt ist, bietet eine Checkbox eine personliche Adresse an (z. B. `silvan@<domain>`). Der Standard-Lokalteil ist der Vorname des Benutzers, klein geschrieben und ASCII-bereinigt. Das Postfach wird mit `type: 'personal'` erstellt, sodass es eine eigene Thread-Liste erhalt, getrennt vom gemeinsamen `info@`-Postfach.

Bei einem erneuten Durchlauf entfernt das Deaktivieren der Checkbox alle vorhandenen `type: 'personal'`-Postfacher fur diese Domain. Gemeinsame und benutzerdefinierte Postfacher bleiben unberuhrt.

### Zuruckwechseln von einer eigenen Domain zu einer Subdomain

Wenn der Workspace bereits eine eigene Website-Domain hat, zeigt der Assistent eine Warnung, bevor der Benutzer zum Subdomain-Pfad wechseln kann — `activateSubdomain` verweigert bei Unternehmen mit noch angehangter eigener Domain, und der Fehler wurde sonst erst beim Abschluss sichtbar.

## Schritt 4 — Magie

Generiert Markenvorschlage aus den bisher erfassten Antworten. Felder:

- **Markenfarbe** — Hex. Wenn der Benutzer in diesem Schritt ein Logo hochladt, wird die dominante nicht-weisse Farbe aus dem Raster extrahiert (via `sharp`) und verwendet; das uberschreibt den Gemini-Vorschlag, und ein Flag (`brandColorFromLogo`) verhindert, dass eine spatere Neugenerierung ihn uberschreibt. Nur-SVG-Logos und uberwiegend weisse Eingaben fallen auf die Gemini-Palette zuruck.
- **Tagline** — kurze Hero-Zeile fur die offentliche Unternehmensseite.
- **Über-Text** — Absatz fur die Unternehmensseite.
- **Dienstleistungen** — Liste von bis zu 8 Dienstleistungsnamen. Jede wird beim Abschluss in `company_services` eingefugt, aber **nur wenn das Unternehmen noch keine Dienstleistungen hat** — der Assistent uberschreibt niemals eine bestehende Dienstleistungsliste.
- **E-Mail-Ton** — `formal` / `friendly` / `casual`. Wird auf den E-Mail-Stil abgebildet: `formal → classic`, `friendly` und `casual → modern`.
- **E-Mail-Vorlagen** — nach Vorlagentyp (`invoice_default`, `reminder_default` usw.), jeweils mit `subject` + `body`. Beim Abschluss uber das E-Mail-Vorlagen-Repository gespeichert.

Der Benutzer kann jeden Vorschlag vor dem Fortfahren inline bearbeiten. **Weiter ist deaktiviert**, bis Vorschlage existieren (mindestens einmal auf **Vorschlage generieren** klicken).

### Logo-Upload

Durch Klicken auf die Upload-Kachel kann der Benutzer ein Bild bis zu 4 MB auswahlen. Die Datei wird als base64 data URI an `/onboarding/upload-logo` gesendet, die:

1. Es uber den kanonischen Unternehmenslogo-Pfad speichert.
2. Die dominante nicht-weisse Farbe zuruckgibt, die automatisch auf den Markenfarbvorschlag angewendet wird.
3. `answers.logoUploaded = true` setzt, damit sich der Überprüfungstext anpasst ("wir verwenden Ihr Logo" statt "wir erstellen ein Initialenlogo aus Ihrem Unternehmensnamen") und der Anwendungsschritt den Initialengenerator uberspringt.

Wenn der Benutzer bereits ein Logo hatte, wird es als bestehende Vorschau ("Sie haben bereits ein Logo") statt einer leeren Upload-CTA angezeigt.

## Schritt 5 — Überprufung

Schreibgeschutzter Diff jedes Feldes, das der Assistent andern wurde. Zwei Abschnitte:

- **Änderungen** — `aktuell → neu` Zeilen. Enthalt ein Farbfeld fur `brandColor`. Nur Felder, die der Assistent geschrieben hat und die von der aktuellen Unternehmenszeile abweichen, erscheinen hier.
- **Bereits gesetzt** — Felder, die der Assistent erfasst hat, aber bereits mit der Unternehmenszeile ubereinstimmen.

Angezeigte Felder: Unternehmensname, Land, Registrierungsnummer, rechtlicher Name, Adresse, Markenfarbe, Tagline, Über-Text, Domain-Übersicht (`info@<aufgeloste-domain>` wird als Vorschau angezeigt, wenn eine Domain gesetzt ist).

Die **Abschliessen**-Schaltflache in der Fusszeile ruft `/onboarding/complete` auf. Die aktuelle Sprache wird weitergeleitet, damit Standardtext (z. B. Zahlungsanweisungen) lokalisiert ist.

## Was Abschliessen tatsachlich anwendet

`apply.service.js` durchlauft die Antworten und schreibt sie in die echte Unternehmenszeile. Zwei Semantiken, bewusst getrennt:

**Immer uberschreiben**, wenn die Assistent-Antwort ein nicht-leerer String ist und vom aktuellen Wert abweicht:

- `display_name`, `company_name`
- `country`
- `chamber`, `address`, `postal_code`, `city`
- `brand_color`, `description`, `business_page_hero_tagline`

**Nur leere Felder fullen** (niemals eine bestehende manuelle Wahl uberschreiben, damit erneute Durchlaufe Benutzer nicht uberraschen):

- `second_accent_color` (von Markenfarbe abgeleitet, wenn leer)
- `email_style` (vom E-Mail-Ton)
- `timezone` (Landesstandard)
- `pdf_language` (Landesstandard)
- `footer_text` (Stil `Handelsname - Handelsregister 12345678`)
- `payment_options_enabled` (`bank_transfer`)
- `payment_default_method` (`bank_transfer`)
- `payment_instructions` (lokalisierter Standardtext)
- `email_footer_show_website`, `email_footer_show_support_email`, `email_footer_show_business_page` (Booleans)

Nebeneffekte jenseits von Spaltenschreibvorgangen:

- **Initialenlogo** wird aus Unternehmensname + Markenfarbe generiert, aber nur wenn `logo_path` und `logo_svg` beide leer sind. Vollstandig ubersprungen, wenn der Benutzer im Magie-Schritt ein echtes Logo hochgeladen hat.
- **Dienstleistungen** — bis zu 8 Einfugungen in `company_services`, nur wenn das Unternehmen noch keine hat.
- **E-Mail-Vorlagen** — pro Typ uber das Vorlagen-Repository gespeichert.
- **Website-Site-Seed** — beim ersten Abschluss, der null Seiten im Workspace findet, erstellt `apply.service.js` eine Standard-Site mit einer Entwurfs-Startseite (`/`, Vorlage "home", `is_home: true`) und fullt die Design-Tokens mit der im Assistenten erfassten Markenfarbe. Wiederholte Ausfuhrungen uberspringen die Erstellung, wenn bereits eine Seite existiert, sodass der Assistent niemals manuelle Bearbeitungen uberschreibt.
- **Domain** — `activateSubdomain` fur den Subdomain-Pfad, oder `addDomain` + `quickEnableInbox` (+ optionales personliches Postfach) fur den eigenen-Domain-Pfad.

Wenn die Domainbereitstellung fehlschlagt, wird der Rest des Abschlusses trotzdem angewendet — der Fehler erscheint auf dem Abschlussbildschirm mit einem spezifischen Fehlercode (`subdomain_failed`, `domain_failed`, `inbox_enable_failed`, `personal_mailbox_failed`, `personal_mailbox_remove_failed`, `personal_mailbox_list_failed`), ubersetzt in eine benutzerlesbare Zeile.

## Abschlussbildschirm

Ein grünes Bestatigungspanel, das 4,2 Sekunden (oder 0,9 Sekunden, wenn nichts bereitgestellt wurde) angezeigt wird, bevor es weiterleitet. Es listet jeden vom Assistenten eingerichteten Punkt in einer Übersichtskartenliste auf:

- **Kategorien** — die fur den Workspace angelegten System-Ausgabenkategorien (z. B. "Buro, Reisen, Software").
- **Dienstleistungen** — Anzahl der zur Unternehmensseite hinzugefugten Dienstleistungen.
- **Logo** — Bestatigung, wenn ein Initialenlogo generiert wurde.
- **E-Mail-Vorlagen** — Anzahl der in der Markenstimme des Workspace gespeicherten Vorlagen.
- **Website** — Bestatigung, dass eine Standard-Site mit Startseite, Navigation und Markenfarbe bereitsteht. Nur sichtbar, wenn die Site gerade neu angelegt wurde.
- **Domain** — die fertige URL fur Subdomains oder die hinzugefugte Domain fur eigene-Domain-Konfigurationen.

Zwei Schaltflachen erscheinen unter der Übersicht:

- **Zum Dashboard** — bringt den Benutzer sofort zu `/dashboard`, den automatischen Weiterleitungstimer uberspringend.
- **Website-Baukasten offnen** — nur sichtbar, wenn eine Site angelegt wurde. Bringt den Benutzer direkt zu `/website`, damit er mit der Bearbeitung seiner Startseite beginnen kann.

Danach landet der Benutzer auf `/dashboard` (Standardpfad), `/website` (wenn er auf die Website-Baukasten-CTA geklickt hat) oder `/workspace/organization/company/address` (wenn eine eigene Domain auf DNS-Überprufung wartet).

## Erneutes Durchlaufen des Assistenten

Der Assistent ist vollstandig wiederholbar. Ruckkehrende Benutzer landen auf Schritt 1 mit sichtbaren aktuellen Antworten. Nichts zwingt sie durch jeden Schritt — sie konnen ein Feld in einem Schritt bearbeiten und auf Abschliessen klicken.

Der Diff des Überprüfungsschritts ist das Sicherheitsnetz: Er zeigt dem Benutzer jede bevorstehende Überschreibung. Sinnvolle Standardfelder (Zeitzone, pdf_language, Zahlungsstandards, Footer-Text) sind nicht im Diff enthalten, da Abschliessen dort nur leere Felder fullt — sie stillschweigend zu andern wurde Benutzer uberraschen, die sie bewusst gesetzt haben.

Um einzelne Einstellungen ohne den Assistenten zu uberprufen, gehen Sie zu:

- `/workspace/organization/company/about` — Name, Registrierung, Adresse, USt.
- `/workspace/organization/company/look` — Markenfarbe, Logo.
- `/workspace/organization/company/website` — Tagline, Über-Text, Dienstleistungen.
- `/workspace/organization/company/address` — eigene Domain + DNS.
- `/workspace/email` — Posteingang, Postfacher, Vorlagen.

Siehe [Einstellungsübersicht](/de/settings/) fur die vollstandige Karte.

## Randfalle

- **Einen Schritt uberspringen.** Weiter ist pro Schritt durch die mindestens erforderlichen Antworten gesteuert. Der Registerschritt hat keine Hürde; Domain erfordert einen gewahlten Pfad mit nicht-leerem Wert; Magie erfordert, dass Generieren ausgefuhrt wurde; Unternehmen und Überprufung haben ihre eigenen Hürden.
- **Schliessen mitten im Schritt.** Jede Antwort wird bei Änderung gespeichert, sodass der nachste Besuch dort fortgesetzt wird, wo der Benutzer aufgehort hat. Der Schrittindex wird ebenfalls gespeichert (`answers` und `currentStep` leben in derselben JSONB-Spalte).
- **Meinungsanderung im Domain-Schritt.** Wechsel von `eigene` zu `subdomain` nach Eingabe einer Domain uberschreibt `answers.domain` auf `null`, bis der Benutzer einen Slug wahlt. Wechsel zu einer Subdomain, wenn bereits eine eigene Domain angehangt ist, zeigt eine Vorabwarnung.
- **Logo-Extraktion fehlgeschlagen.** Überwiegend weisse Logos und Nur-SVG-Eingaben, die `sharp` nicht rastern kann, geben `color: null` zuruck. Der Gemini-Markenfarbvorschlag wird dann verwendet.
- **Domain bereits bei eigene-Domain-Abschluss hinzugefugt.** Ein 409 von `addDomain` fallt auf die bestehende Zeile zuruck, sodass der Posteingang-Aktivierungsschritt trotzdem ausgefuhrt wird.
- **Personliches Postfach existiert bereits.** Ein 409 von `createMailbox` wird als Erfolg behandelt.
