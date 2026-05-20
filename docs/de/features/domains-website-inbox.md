---
title: Domains, Website und Posteingang
last_verified: 2026-05-09
---

# Domains, Website und Posteingang

> **Status: Pre-Launch.** Alle drei Features auf dieser Seite werden zusammen als Bundle ausgerollt. Sie werden durch die `custom_domains`- und `public_business_page`-Feature-Flags gesteuert und befinden sich noch in der Einführung in die öffentlichen Tarife. Das hier beschriebene Verhalten entspricht der Codebasis vom 2026-05-09; falls ein Bildschirm in Ihrem Workspace anders aussieht, wurde das Bundle dort noch nicht aktiviert.

Eigene Domains, die gehostete Unternehmenswebsite und der gemeinsame E-Mail-Posteingang bilden ein Produkt. Der Grund: Sie teilen sich den Zustand. Dieselbe `domains`-Zeile, die beweist, dass Sie `acme.de` kontrollieren, macht `acme.de` auch zur URL Ihrer Website und sorgt dafür, dass `info@acme.de` E-Mails empfangen kann. Es gibt einen Onboarding-Ablauf, einen Einstellungsbaum und einen Ort in der App, um all das zu verwalten.

## Der gebündelte Wert

Fügen Sie eine Domain hinzu und Sie erhalten drei Dinge:

- **Eine eigene Adresse.** Ihr Unternehmen ist unter `acme.de` erreichbar statt unter `acme.mycompanydesk.com`.
- **Eine Live-Website.** Die gehostete Unternehmensseite wird automatisch auf der verifizierten Domain veröffentlicht.
- **Einen funktionierenden Posteingang.** `info@acme.de`, plus `support@`, `sales@` und ein reiner Sende-Alias `noreply@`, fangen E-Mails auf und versenden Antworten.

Sie können den gebündelten Ablauf über den [Einrichtungsassistenten](/de/getting-started/company-setup) (`/setup`, der Schritt "Ihre Webadresse") starten, oder schrittweise unter `Unternehmen › Ihre eigene .com-Adresse` und dem Posteingang.

## Ein Onboarding-Ablauf

Der Assistentenschritt unter `/setup` ist der empfohlene Einstiegspunkt. Er führt über `apply.service.js → activateSubdomain | addDomain → quickEnableInbox` alle Schritte auf einmal aus, sodass der Benutzer ein paar Fragen beantwortet und die Plattform alles darunter verdrahtet.

### Schritt 1 -- Domain hinzufügen

Zwei Wege im Assistenten, beide in der `domains`-Tabelle gespeichert:

- **Kostenlose Workspace-Subdomain** -- `ihr-slug.mycompanydesk.com` (oder `.nl` für NL-Workspaces). Keine DNS-Arbeit; der Slug wird als Cloudflare Pages Custom Domain registriert und die Website ist innerhalb von Sekunden live. Dies ist der Standard für neue Workspaces.
- **Ihre eigene Domain** -- geben Sie `acme.de` ein. Zwei Setup-Modi werden unterstützt:
  - **Nameserver-Modus** (empfohlen) -- es wird eine Cloudflare-Zone für die Domain erstellt. Sie ändern die Nameserver Ihres Registrars auf die beiden `*.ns.cloudflare.com`-Hostnamen, die der Assistent anzeigt. Cloudflare wird zum autoritativen DNS für die Domain, was E-Mail, SSL und DNS-Record-Verwaltung innerhalb von MyCompanyDesk ermöglicht.
  - **CNAME-Modus** -- nur für Subdomains (z. B. `portal.acme.de`). Sie fügen einen CNAME-Record hinzu, der auf `mycompanydesk-app.pages.dev` zeigt. Keine Nameserver-Änderung. E-Mail-Routing ist in diesem Modus nicht verfügbar.

Das Hinzufügen einer eigenen Domain deaktiviert automatisch die Workspace-Subdomain -- es gibt eine kanonische Website pro Unternehmen, niemals zwei.

### Schritt 2 -- Verifizierung

Die Verifizierung erfolgt sowohl auf Abruf als auch per Polling. Die Detailseite zeigt eine **Verifizieren**-Schaltfläche (`POST /api/domains/:id/verify`), und ein Hintergrundjob prüft jede ausstehende Domain in Intervallen erneut.

- **Nameserver-Modus** wird verifiziert, sobald Cloudflare die Zone als `active` meldet. Der Status wechselt `pending_nameservers → pending_verification → active`. Der Benutzer wird über die In-App-Benachrichtigungsglocke informiert.
- **CNAME-Modus** wird verifiziert, indem der CNAME aufgelöst und geprüft wird, ob er auf das Pages-Ziel zeigt. Status wechselt `pending_cname → active`.

### Schritt 3 -- SSL

SSL wird automatisch von Cloudflare bereitgestellt, sobald die Zone aktiv ist. Der Standardmodus ist **Full (strict)**; Sie können ihn unter `Domain-Detail › SSL` ändern (`off / flexible / full / strict`). Das Zertifikatsstatusfeld im SSL-Panel spiegelt das Verifizierungsergebnis von Cloudflare wider.

### Schritt 4 -- Website geht live

Die gehostete Unternehmensseite (siehe [Website-Builder](/de/advanced/business-page)) wird automatisch unter der Domain-Root veröffentlicht, sobald die Zone aktiv ist. Der `getBusinessPageUrl`-Resolver des Assistenten gibt zurück, in Prioritätsreihenfolge:

1. Eine eigene Domain mit `business_page_enabled = true` → `https://acme.de`
2. Eine eigene Domain mit `portal_subdomain_enabled = true` → `https://portal.acme.de`
3. Die Workspace-Subdomain → `https://acme.mycompanydesk.com`
4. Die Fallback-Portalroute (`/portal/<slug>`), wenn nichts anderes konfiguriert ist.

### Schritt 5 -- Posteingang empfängt E-Mails

Für Nameserver-Modus eigene Domains führt der Assistent `quickEnableInbox` nach der Verifizierung aus. Dieser Aufruf ist idempotent und führt Folgendes aus:

- Richtet die Sende-Subdomain (`mail.acme.de`) ein und schreibt die DKIM- und SPF-DNS-Records.
- Setzt eine Cloudflare Email Routing Catch-All-Regel auf der Zone, die auf den `inbox-inbound` Worker zeigt.
- Prüft die Apex-MX-Records. Sind diese leer oder zeigen bereits auf Cloudflare, installiert der Assistent die Cloudflare-MX. Ist ein Drittanbieter (Google Workspace, Microsoft 365) bereits vorhanden, verweigert der Assistent das Überschreiben und zeigt eine `conflict`-Warnung an, damit Sie entscheiden können.
- Erstellt `info@acme.de` als das standardmäßige gemeinsame Postfach.
- Richtet `support@` und `sales@` als bidirektionale Aliase von `info@` ein, und `noreply@` als reinen Sende-Alias (erlaubt in From, verworfen bei eingehend).
- Erstellt optional ein persönliches Postfach (`silvan@acme.de`), wenn Sie das Kästchen im Assistenten angekreuzt haben.

## Referenz pro Feature

### Eigene Domains

Die Benutzeroberfläche befindet sich unter **Unternehmen > Ihre eigene .com-Adresse** -- die Leaf-Seite ist `/workspace/organization/company/address`, gemountet von `apps/web/pages/workspace/organization/company/address.vue` und rendert die `SettingsDomains`-Komponente. Die beiden älteren Pfade `/workspace/organization/domains` und `/workspace/communication/domains` leiten hierher um.

Die Seite ist in zwei Bereiche unterteilt:

- **Ausstehende Domains**: Domains, die noch verifiziert werden müssen, erscheinen immer ganz oben, unabhängig vom Domain-Wechsler in der oberen Leiste. So können Sie die Verifizierungsanweisungen für neu hinzugefügte Domains erreichen, bevor diese aktiv werden.
- **Aktives Domain-Panel**: DNS, SSL, Weiterleitungen, Analytics, Sicherheit und SEO-Tabs beziehen sich auf die Domain, die im Domain-Wechsler in der oberen Leiste ausgewählt ist (erreichbar über den Website-Builder unter `/website`). Wenn die Hauptwebsite (angezeigt als Ihr Workspace-Name) ausgewählt ist, wird das Domain-Panel vollständig ausgeblendet. Ein Domain-Wechsel setzt den aktiven Tab auf Routing zurück.

Die Seite zeigt standardmassig eine bereinigte Ansicht mit den am haufigsten benotigten Registerkarten. Sechs Power-User-Registerkarten sind ausgeblendet, bis Sie den **Erweiterten Modus** in `/me/preferences` aktivieren. Diese Registerkarten sind: DNS, SSL, Weiterleitungen, Analytics, Schnelleinstellungen und Sicherheit. Siehe [Einstellungsubersicht](/de/settings#account-settings-me) zum Aktivieren des erweiterten Modus.

Was Sie auf der Seite tun konnen:

- **Domain kaufen oder beanspruchen** über die Domain-Kaufkarte. Geben Sie einen Domainnamen ein, prüfen Sie die Verfügbarkeit über OpenProvider, und kaufen Sie die Domain oder beanspruchen Sie sie kostenlos, wenn Sie als Founding Member berechtigt sind.
- **Domain hinzufügen** (Nameserver- oder CNAME-Modus) über eine eigene Karte, die immer sichtbar ist.
- **Verifizieren** einer ausstehenden Domain.
- **DNS-Records verwalten** für die ausgewählte Domain -- A, AAAA, CNAME, MX, TXT, SRV, CAA, NS. CRUD erfolgt über Cloudflare via API.
- **SSL** für die ausgewählte Domain -- Zertifikatsstatus anzeigen, SSL-Modus ändern.
- **URL-Weiterleitungen** für die ausgewählte Domain -- drei kostenlose Cloudflare Page Rules pro Zone. Quellmuster + Ziel + 301/302.
- **E-Mail-Sicherheit** für die ausgewählte Domain -- SPF/DMARC/DKIM-Prüfung mit einer Ein-Klick-"Fix"-Option, die sichere Standardwerte schreibt (`v=spf1 ~all`, `v=DMARC1; p=quarantine; …`).
- **Schnelleinstellungen** für die ausgewählte Domain -- Cloudflare Development Mode ein/aus, "Under Attack"-Sicherheitsstufe ein/aus, Cache leeren.
- **Analytics** für die ausgewählte Domain -- die letzten 30 Tage mit Anfragen, Bandbreite, Bedrohungen, Besuchern, Seitenaufrufen. Der aktuelle Cloudflare Analytics-Endpunkt ist abgekündigt; die Seite zeigt einen leeren `unavailable`-Zustand, bis die GraphQL-Migration erfolgt.
- **Entfernen** der ausgewählten Domain -- Soft-Delete der Zeile (`status = 'removed'`) und Abbau der Cloudflare-Zone (oder der Pages-Domain im CNAME-Modus).

#### `domains`-Tabelle -- der gemeinsame Zustand

Wichtige Spalten, die die App liest:

| Spalte | Zweck |
|---|---|
| `domain_name` | Der Hostname, z. B. `acme.de`. |
| `setup_mode` | `nameserver` (vollständige Delegation) oder `cname` (einzelne Subdomain). |
| `status` | `pending_nameservers`, `pending_verification`, `pending_cname`, `active`, `failed`, `removed`. |
| `cloudflare_zone_id` | Gesetzt im Nameserver-Modus. Steuert DNS, SSL, Weiterleitungen, Analytics, E-Mail-Routing. |
| `nameserver_1`, `nameserver_2` | Werden dem Benutzer während der Nameserver-Einrichtung angezeigt. |
| `cname_hostname`, `cname_target` | Gesetzt im CNAME-Modus. |
| `email_routing_enabled` | `true`, sobald die Cloudflare Email Routing-Zone aktiviert ist. |
| `inbox_enabled`, `inbox_subdomain_tag`, `inbox_dkim_ready` | Von `quickEnableInbox` gesetzt. Die E-Mail-Sende-Subdomain (`mail.acme.de` standardmäßig) und der DKIM-Bereitstellungsstatus. |
| `business_page_enabled`, `portal_subdomain_enabled` | Bestimmen, welcher Hostname die öffentliche Website bedient. |
| `verified_at` | Wird bei erfolgreicher Verifizierung gesetzt.
| `registrar` | Der Registrar-Dienst, derzeit `openprovider` für Domains, die über den Domain-Kaufflow erworben wurden.
| `registrar_domain_id` | Die registrar-interne Kennung für gekaufte Domains.
| `purchase_price_period` | Abrechnungszeitraum für gekaufte Domains (`yearly`).
| `purchase_intent_id` | Verweist auf die `domain_purchase_intents`-Zeile für bezahlte Käufe.
| `founder_claim_id` | Verweist auf die `founder_domain_claims`-Zeile für Founder-Gratis-Claims.
| `transferred_out_at` | Wird gesetzt, wenn beim wöchentlichen Sync erkannt wird, dass eine Domain aus dem MCD-Registrar-Konto übertragen wurde.

#### Verlängerungszyklus

Die Domain-Verlängerung folgt drei Pfaden, je nachdem, wie die Domain erworben wurde:

1. **Kostenlose gebündelte Verlängerung** (Founder-Stufe oder auf Pro umgestellte Trial-Stufe): MCD übernimmt die Wholesale-Verlängerungskosten. Die Domain verlängert sich automatisch, solange der Workspace auf Pro bleibt. Keine Zahlungsmethode erforderlich.
2. **Kostenpflichtige automatische Verlängerung** (bezahlter Kauf oder Trial-Stufe ohne Pro): Wird jährlich über die hinterlegte Karte abgerechnet. Funktioniert wie jede andere Abonnementverlängerung.
3. **Manuelle Verlängerung**: Wenn ein Trial-Workspace aus Pro herausfällt UND keine Karte hinterlegt hat, überspringt der automatische Verlängerungspfad ihn. Der Benutzer sieht eine Benachrichtigung und kann eine einmalige Zahlung über `POST /api/domains/renew/:domainId` auslösen, die eine Stripe Embedded Checkout-Sitzung für die Verlängerung erstellt. Dies ist der einzige Weg, eine Domain ohne aktives Abonnement oder hinterlegte Karte aktiv zu halten.

#### Übertragungsfolgen

Die Übertragung einer über MyCompanyDesk registrierten Domain zu einem anderen Registrar hat dauerhafte Konsequenzen, die durch den wöchentlichen OpenProvider-Statusabgleich durchgesetzt werden:

- **Founder-Domains**: Der Founder-Claim wird gelöscht und das interne lebenslange Pro-Abonnement des Workspace wird gekündigt. Der Workspace wird zu einem normalen zahlenden Kunden. Dies ist unumkehrbar. Der Founder-Status kann nicht erneut beansprucht werden.
- **Trial- / Pro-gebündelte Domains**: Der gebündelte Gratis-Status geht verloren. Der Workspace kann nie wieder eine andere Gratis-Domain beanspruchen (bereits über die Retained-Claims-Liste durchgesetzt).
- **Bezahlte Domains**: Kein Vorteilsentzug. Die Domain wechselt einfach zu `status = 'transferred_out'`.

Das Claim-Modal warnt vor diesen Konsequenzen, bevor ein Gratis-Domain-Claim eingereicht wird, und verlangt eine ausdrückliche Bestätigung des Benutzers. Widerrufsdetails werden in der `domain_perk_revocations`-Audit-Tabelle für Support-Zwecke festgehalten.

#### Domain kaufen oder beanspruchen

Die Domain-Kaufkarte (`DomainPurchaseCard.vue`, `domain-purchase.service.ts`) ist die erste Karte auf der Domains-Einstellungsseite. Sie erscheint, wenn der Workspace noch keine aktive eigene Domain hat. Die Karte erlaubt es, eine Domain auszuwählen und über zwei Wege zu erwerben, die beide ein eigenes Zwei-Schritte-Kaufmodal öffnen (`DomainClaimModal.vue`). Schritt 1 sammelt die Registrantdaten (die vom Registrar für WHOIS benötigten Angaben). Schritt 2 bearbeitet die Zahlung oder Einreichung:

- **Kaufen** -- Bezahlter Kauf über OpenProvider. Der Benutzer gibt einen Domainnamen ein, die Karte ruft `GET /api/domain-purchase/quote` auf, um Verfügbarkeit und Preisgestaltung zu prüfen, und öffnet dann das Kaufmodal. Nach Erfassung der Registrantdaten ruft das Modal `POST /api/domain-purchase/checkout-session` auf, um eine Stripe-Zahlungssitzung zu erstellen, und lädt Stripe Embedded Checkout für die Zahlung. Nach Abschluss registriert `POST /api/domain-purchase/finalize` die Domain bei OpenProvider und legt die `domains`-Zeile im Nameserver-Modus an, verbunden mit Cloudflare.
- **Gratis-Claim** -- Berechtigte Workspaces in einer Pro-Testphase (einschließlich neuer Founding Members ab dem 20. Mai 2026) konnen eine `.nl`-Domain fur das erste Jahr kostenlos beanspruchen. Die Karte ruft `GET /api/domain-purchase/founder/eligibility` auf, um den Claim-Tier des Workspace (`trial` fur Trial-Mitglieder, `founder` fur grandfathered ursprungliche Founding Members) und den Gate-Status zu prufen. Das Modal sammelt die Registrantdaten und ruft beim Absenden `POST /api/domain-purchase/founder/claim` auf. Die Plattform tragt die Registrierungsgebühr fur das erste Jahr.

Founder-Claims haben jetzt zwei Stufen fur die Verlangerung, bestimmt durch den Founding-Member-Grant-Typ:

- **Founder-Stufe** (nur grandfathered) -- Workspaces mit dem ursprunglichen Grant-Typ `free_for_life` (vor dem 20. Mai 2026 geclaimed) erhalten lebenslange kostenlose Domain-Verlangerung. Keine Zahlungsmethode erforderlich. Die Verlangerung erfolgt automatisch uber die Plattform, wobei MCD die Wholesale-Kosten tragt. Neue Founding Members ab dem 20. Mai 2026 erhalten diese Stufe NICHT; sie claimen unter der Trial-Stufe wie jeder andere Trial-Workspace.
- **Trial-Stufe** -- Workspaces in einer Testphase (einschließlich neuer Founding Members mit Grant-Typ `trial_plus_discount`). Das erste Jahr ist kostenlos. Am Ende des Gratis-Jahres muss der Workspace auf einem kostenpflichtigen Pro-Tarif sein; die Domain verlangert sich dann als Teil des Pro-Abonnements, bezahlt vom Workspace. Wenn der Workspace nach dem Gratis-Jahr kein Pro mehr zahlt, verfallt die Domain und muss manuell verlangert werden. Wahrend des Trial-Jahres kann der Benutzer optional eine Karte uber Stripe SetupIntent im Modal fur die zukunftige automatische Verlangerung hinterlegen.
- **Paid-Stufe** -- Standard-Domains zum vollen Preis gekauft. Die Verlangerung wird jahrlich uber die hinterlegte Zahlungsmethode abgerechnet. Schlagt die Zahlung fehl, wird eine Benachrichtigung zur manuellen Verlangerung gesendet.

Der Berechtigungs-Endpunkt (`GET /api/domain-purchase/founder/eligibility`) liefert ein `tier`-Feld (`founder` | `trial` | `paid` | `free`) und `founderSlotsRemaining` neben den bestehenden Gates. Die Begrenzung auf 50 Platze gilt nur fur Founder-Claims (grandfathered Kohorte); Trial-Claims zahlen nicht zum Founder-Kontingent.

Die Founder-Berechtigung wird durch server-seitig in `founder-domain-claim.service.js` geprüfte harte Bedingungen bestimmt:

- **Founding-Member-Status** -- der Workspace muss das Founding-Member-Flag haben (Grant-Typ bestimmt die Stufe: `free_for_life` mappt auf `founder`, `trial_plus_discount` mappt auf `trial`).
- **Gratis-Domain-Plätze** fur Founder-Claims auf 50 begrenzt bei grandfathered Founding Members (`free_for_life`). Trial-Claims zahlen nicht dazu.
- **KVK erforderlich** -- der Workspace muss eine KVK-Nummer verknüpft haben.
- **Domain muss `.nl` sein** -- das Gratisprogramm gilt nur für die NL-Endung.
- **Domain muss mit dem KVK-Namen übereinstimmen** -- die Domain muss dem registrierten Firmennamen oder einem Handelsnamen entsprechen.
- **KVK darf nicht auf der Retained-Claims-Liste stehen** -- eine Gratis-Domain pro KVK-Nummer. Eine KVK, die bereits eine Gratis-Domain beansprucht (und dann übertragen) hat, ist dauerhaft gesperrt.

Kontoalter und Website-Inhalt sind keine harten Bedingungen. Sie würden legitime Onboarding-Tag-Claims blockieren, was dem "Ihr Unternehmen an einem Tag gründen, Domain inklusive"-Versprechen widerspricht. Stattdessen fließen beide als weiche Signale in den Gemini-Abuse-Score ein: ein brandneues Konto mit einer Template-Website erzielt einen niedrigen Score und landet in der manuellen Prüfung; ein echtes Unternehmen mit echtem Inhalt wird unabhängig vom Alter automatisch genehmigt. Die Eligibility-Antwort enthält einen `softSignals`-Block (`ageDays`, `sitePublished`, `paragraphCount`), sodass die UI einen Hinweis anzeigen kann, ohne den Claim zu blockieren.

Wenn eine Bedingung nicht erfüllt ist, listet die Karte die verbleibenden Anforderungen auf, damit der Benutzer sieht, was noch zum Freischalten der Gratis-Claim fehlt.

Die unterstützten TLDs für den Kauf sind `.nl`, `.eu`, `.com`, `.net` und `.org`. Andere TLDs zeigen eine Meldung, dass sie noch nicht unterstützt werden, mit dem Hinweis, die Domain woanders zu kaufen und über den bestehenden BYO-Pfad hinzuzufügen.

Neue Datenbanktabellen, die mit diesem Feature eingeführt wurden:

- `domain_purchase_intents` -- verfolgt bezahlte Kaufabsichten mit Stripe PaymentIntent-IDs, Registrantdaten und Kaufstatus.
- `founder_domain_claims` -- verfolgt Founder-Gratis-Claims mit Berechtigungs-Snapshots, Abuse-Scoring und Claim-Status.
- `domain_registrar_columns`-Migration fügt registrar-bezogene Spalten zur bestehenden `domains`-Tabelle hinzu.

### Gehostete Website

Der Website-Builder befindet sich unter **Unternehmen > Ihre Website** (`/website`). Es ist ein vollständiger Mehrseiten-Editor mit Abschnitten, Blöcken, Design-Tokens und Veröffentlichungs-Snapshots. Wenn Ihr Workspace mehrere aktive eigene Domains hat (Pro-Tarif), können Sie über einen Domain-Wechsler in der oberen Leiste eine Domain-Variante der Website bearbeiten. Jede Domain erhält ihre eigenen Seiten, Navigation, Design-Tokens und Veröffentlichungs-Snapshots. Ein Domain-Wechsel setzt den aktiven Tab zurück. Die öffentliche Website wird auf Ihrer eigenen Domain (oder Workspace-Subdomain / Fallback-Portalroute) bereitgestellt, sobald sie veröffentlicht wurde.

Was der Editor anzeigt:

- **Domain-Wechsler** (obere Leiste) -- Wenn mehr als eine aktive Domain vorhanden ist, können Sie über ein Dropdown auswählen, welche Website-Variante Sie bearbeiten möchten. Die Hauptwebsite-Option zeigt Ihren Workspace-Namen. Domains ohne Variante zeigen einen "eigene Variante erstellen"-Hinweis und klonen die Hauptwebsite bei der ersten Auswahl.
- **Editor-Tab** -- Erstellen Sie Seiten durch Hinzufügen und Anordnen von Abschnitten (Hero, Text, Galerie, Dienstleistungen, Team, Testimonials, Kontaktformular, Preise, Produkt, benutzerdefiniertes HTML). Überprüfen und bearbeiten Sie Abschnittsinhalte, Layout, Stil und Animation. Preisstufen können optional einen Kauf-Button erhalten, der zum Mollie- oder Stripe Connect-Checkout weiterleitet. Jede Stufe hat einen konfigurierbaren Mehrwertsteuersatz (21%, 9% oder 0%), wobei der dem Kunden angezeigte Preis der Endpreis inklusive Mehrwertsteuer ist. Der Produktblock ist eine eigenständige Kaufkarte mit derselben Zahlungsanbindung.
- **Seiten-Tab** -- Seiten erstellen, umbenennen, löschen und nach Status filtern (live, Entwurf, geplant). Wählen Sie eine Vorlage beim Erstellen einer neuen Seite.
- **Stil-Tab** -- Design-Tokens für Farben, Schriften, Skalierung, Bewegung, Schaltflächen, benutzerdefiniertes CSS und Head-Snippets (Analytics, Schrift-Preconnects).
- **Domain & SEO-Tab** -- Verwaltung eigener Domains. Siehe den Abschnitt eigene Domains oben.
- **Integrationen-Tab** -- Verbinden Sie Zahlungsanbieter (Mollie, Stripe Connect) mit Inline-Setup-Karten sowie Drittanbieterdienste wie Mailchimp, Plausible und Trustpilot. Dieselbe Zahlungsverbindung steuert die Bezahl-Buttons auf Rechnungen; siehe [Geld-Einstellungen](/de/workspace/financial/money/payments) fur die vollstandige Konfiguration.
- **Navigations-Editor** -- Ordnen Sie Header-Links per Drag-and-Drop, mit Dropdown-Gruppen und externen Links.
- **Veröffentlichen-Schaltfläche** -- Zeigt die Anzahl unveröffentlichter Änderungen an. Veröffentlicht einen Snapshot mit einem Klick.
- **Responsive Vorschau** -- Wechseln Sie zwischen Desktop-, Tablet- und Mobilansicht im Editor.

Die öffentliche Website wird unter der am besten geeigneten URL des Unternehmens bereitgestellt: eigene Domain-Root → Workspace-Subdomain → Fallback `/portal/<slug>`-Route.

Siehe [Website-Builder](/de/advanced/business-page) für die vollständige Editor-Anleitung.

### E-Mail-Posteingang

Der Posteingang ist eine Top-Level-Oberfläche unter `/inbox` (`apps/web/pages/inbox/index.vue`). Das Backend befindet sich in `apps/api/src/modules/inbox/*` und schreibt in separate Tabellen (`company_email_domains`, `company_mailboxes`, `email_threads`, `email_messages`, `email_attachments`, `email_events`).

Funktionen:

- **Threading** -- eingehende E-Mails werden in Threads gruppiert, basierend auf RFC 822 `Message-ID` / `In-Reply-To` / `References`. Jeder Thread enthält `last_message_preview`, `participants`, Status (`open / snoozed / closed / spam / deleted`) und Labels. Lange Threads klappen die mittleren Nachrichten hinter einer "{n} ältere Nachrichten anzeigen"-Pille ein, sodass die älteste Nachricht und die neuesten zwei sichtbar bleiben (Gmail/Outlook-Konvention). Klicken Sie auf die Pille, um alles zu erweitern.
- **Antworten** -- Inline-Antwortfeld im Thread. Intelligentes `From` wählt die Adresse aus, an die die ursprüngliche E-Mail gesendet wurde, sodass ein Kunde, der an `support@acme.de` geschrieben hat, eine Antwort von `support@` erhält, nicht von `info@`.
- **Allen antworten** -- Antwort mit einem Klick an alle Teilnehmer des Threads. Die Schaltfläche erscheint neben Antworten im Thread-Header und schließt alle Empfänger der ursprünglichen Nachricht ein.
- **Weiterleiten** -- leiten Sie den gesamten Thread an einen anderen Empfänger weiter. Öffnet ein Verfassen-Drawer, in dem der ursprüngliche Nachrichtentext und die Anhänge vor dem Senden bearbeitet werden können. Der Header der weitergeleiteten Nachricht zeigt den ursprünglichen Absender, das Datum und den Betreff.
- **CC und BCC** -- CC- und BCC-Felder stehen sowohl beim Verfassen als auch beim Antworten über einen "Cc/Bcc hinzufügen"-Toggle zur Verfügung. Adressen akzeptieren kommagetrennte Listen oder Einfügen aus der Zwischenablage. Die Felder bleiben ausgeblendet, bis sie benötigt werden, entsprechend dem üblichen Posteingangsmuster, bei dem die meisten Nachrichten sie nicht brauchen.
- **Entwürfe** -- speichern Sie teilweise geschriebene Nachrichten und kommen Sie später darauf zurück. Entwürfe werden serverseitig gespeichert und bleiben über Browser-Sitzungen hinweg erhalten. Jeder Entwurf hat einen Betreff, eine Empfängerliste und einen Nachrichtentext. Entwürfe ohne Betreff zeigen "(kein Betreff)", und Entwürfe ohne Empfänger zeigen "(kein Empfänger)". Ein Antwort-Entwurf wird mit einem "Antwort"-Chip in der Thread-Liste markiert, sodass Sie auf einen Blick sehen, bei welchem Thread Sie mitten in der Antwort waren.
- **Verfassen** -- Drawer-Formular mit einer einzigen Identitätsauswahl, die Postfach und Absenderadresse in einem Bedienelement festlegt, Kundenauswahl (oder freies `An`), Betreff, Nachricht, CC/BCC-Felder, Anhänge. Warnung vor zurückgewiesenen Empfängern wird vor dem Senden angezeigt.
- **Send-From-Aliase** -- `info@`, `support@`, `sales@` sind bidirektionale Aliase desselben Postfachs. `noreply@` ist reiner Sende-Alias -- als From wählbar, aber eingehende E-Mails daran werden bei der Aufnahme verworfen.
- **Anhänge** -- Hochladen vor dem Senden (sowohl Verfassen als auch Antworten). Anhänge eingehender E-Mails sind aus der Nachricht herunterladbar; signierte Download-URLs verfallen nach kurzer TTL.
- **Alias-Hinweis** -- wenn eine eingehende Nachricht an eine Adresse eingeht, die noch kein deklarierter Alias ist, zeigt der Thread einen sanften Hinweis mit einer "Als Alias hinzufügen"-Aktion.
- **Verknüpfung** -- Threads können mit einem Kunden, Projekt oder einer Rechnung zur Querverweisung verknüpft werden.
- **Catch-All-Fallback** -- E-Mails an jeden lokalen Teil der Domain fallen auf das Standardpostfach durch (`is_default = true`, eines pro Domain). Das bedeutet, Tippfehler und nicht deklarierte Aliase verschwinden nicht stillschweigend.
- **Audit-Log** -- ausgehende Sendungen, Postfachänderungen und Thread-Statusänderungen werden in einer Audit-Tabelle für den Workspace aufgezeichnet. Derzeit nur API (noch keine UI) -- für Support-Mitarbeiter zur Fehlerbehebung zugänglich.
- **HTML-E-Mail-Darstellung** -- HTML-E-Mails werden mit ihrem ursprünglichen Styling in einem sandboxed iframe dargestellt. Der Renderer entfernt Skripte, Formulare und Event-Handler während der Bereinigung und blockiert externe Bilder standardmäßig, um Ihre Privatsphäre zu schützen. Ein Hinweisfeld erscheint, wenn Bilder blockiert sind, mit einem einzigen Klick auf "Bilder anzeigen", um die Nachricht mit Bildern neu darzustellen. Wenn kein HTML-Body vorhanden ist, wird der Klartext-Teil als Fallback angezeigt.
- **Stern-Markierung**: Markieren Sie wichtige Threads mit einem Stern für schnellen Zugriff. Ein Stern-Symbol erscheint neben dem Status-Punkt bei markierten Threads in der Thread-Liste. Die Werkzeugleiste hat eine Stern-Schaltfläche, die den Status für den geöffneten Thread umschaltet. Eine "Markiert"-Ansicht in der linken Seitenleiste neben Offen, Zurückgestellt, Geschlossen, Spam und Papierkorb filtert auf markierte Threads, gestützt durch einen partiellen Datenbank-Index für sofortige Ergebnisse.
- **Soft-Delete** -- Threads können in den Papierkorb verschoben werden, anstatt dauerhaft gelöscht zu werden. Eine Löschen-Schaltfläche (Papierkorb-Symbol) erscheint in der Werkzeugleiste für nicht gelöschte Threads. Nach dem Löschen ändert sich die Schaltfläche in eine Wiederherstellen-Aktion, die den Thread zurück auf `open` setzt. Der Papierkorb-Filter erscheint in der linken Seitenleiste neben Offen, Zurückgestellt, Geschlossen und Spam, sodass Sie gelöschte Threads überprüfen können, bevor sie endgültig bereinigt werden.
- **Volltextsuche**: eine Suchleiste über der Thread-Liste ermöglicht die Suche in allen Posteingangsnachrichten nach Betreff, Nachrichtentext, Snippet und Absender. Die Suche verwendet die Postgres-Volltextsuche mit gewichteter Feldrangfolge, sodass Betreff-Treffer vor Nachrichtentext-Treffern erscheinen. Ergebnisse werden pro Thread gruppiert, wobei das Snippet der am besten passenden Nachricht als Vorschauzeile angezeigt wird. Unterstützt Phrasen in Anführungszeichen, `OR` und `-` Ausschlüsse. Eine 250-ms-Verzögerung hält die Oberfläche reaktionsschnell, und der Ladeindikator gibt Echtzeit-Feedback.

#### Entwürfe

Der Entwürfe-Tab befindet sich neben der Hauptthread-Liste. Entwürfe werden serverseitig gespeichert, sodass sie Browser-Neustarts überstehen und geräteübergreifend verfügbar sind. Wenn Sie eine neue Nachricht oder Antwort beginnen und das Verfassen-Drawer ohne Senden schließen, wird der Inhalt automatisch als Entwurf gespeichert. Sie können auch explizit mit der Schaltfläche "Entwurf speichern" speichern. Ein Entwurf-Chip zeigt "Antwort", wenn der Entwurf aus einem Thread gestartet wurde, oder "Neu" bei einer neuen Nachricht. Das Bearbeiten eines Entwurfs öffnet das Verfassen-Drawer mit dem gespeicherten Inhalt. Das Löschen eines Entwurfs erfordert einen Bestätigungsschritt.

Der Posteingang verwendet Ihre eigene Domain erst, nachdem `quickEnableInbox` erfolgreich ausgeführt wurde und die Apex-MX-Records auf Cloudflare zeigen. Bis dahin kann der Workspace weiterhin E-Mails über den Standardzustellpfad senden, der unter [E-Mail-Integration](/de/settings/email) beschrieben ist, aber keine E-Mails empfangen.

### Verkäufe

Wenn Sie Kauf-Buttons zu Preisstufen oder einem Produktblock auf Ihrer öffentlichen Website hinzufügen, erstellt jede abgeschlossene Zahlung einen Verkaufsdatensatz. Verfolgen Sie diese unter **Geld > Verkäufe** (`/workspace/financial/money/sales`).

Was das Verkaufsprotokoll zeigt:

- Eine chronologisch sortierte Liste aller über Ihre Website getätigten Käufe.
- Den Zahlungsdienstleister (Mollie oder Stripe Connect) und den Zahlungsstatus (`paid`, `pending`, `failed`, `expired`, `refunded`).
- Den ursprünglichen Abschnitt (welche Preisstufe oder welcher Produktblock gekauft wurde).
- Kunden-E-Mail, gezahlter Betrag und Währung.

Verkaufsdatensätze werden vom öffentlichen Checkout-Endpunkt (`POST /public/sites/:slug/checkout`) erstellt, der den Abschnitt validiert, eine Zahlung über den verbundenen Dienstleister anlegt und den Käufer zur gehosteten Checkout-Seite weiterleitet.

Bezahlte Verkäufe zeigen ein Aktionsmenü (drei Punkte) mit zwei Optionen:

- **Rechnung neu erstellen.** Erstellt die verknüpfte Rechnung neu, falls sie verloren gegangen oder beim Kauf nicht generiert wurde. Auch sicher ausführbar, wenn die Rechnung bereits existiert.
- **Rückerstattung.** Überweist den vollen Betrag über den ursprünglichen Zahlungsdienstleister (Mollie oder Stripe) an den Kunden zurück. Eine Gutschrift wird automatisch gegen die verknüpfte Rechnung für Ihre Buchhaltung erstellt. Nur für bezahlte Verkäufe verfügbar.

### Ablauf nach dem Kauf

Wenn eine Zahlung abgeschlossen ist, führt die Plattform automatisch die folgenden Schritte aus. Alles läuft fire-and-forget: Fehler werden protokolliert und haben keinen Einfluss auf den Zahlungsstatus, den der Käufer sieht.

1. **Rechnung erstellt.** Eine Rechnung wird aus dem Verkauf erstellt, mit Produktname, Preis und der E-Mail des Käufers. Der Preis, den Sie im Editor festlegen, ist der endgültige Kundenpreis inklusive Mehrwertsteuer. Die Rechnungsposition teilt diesen in einen Netto-Betrag und den Mehrwertsteuersatz auf, den Sie in der Preisstufe oder dem Produktblock konfiguriert haben (Standard 21%). Wenn die E-Mail mit einem bestehenden Kunden in Ihrem Workspace übereinstimmt, wird die Rechnung diesem Kunden zugeordnet. Andernfalls wird ein minimaler Kundendatensatz erstellt. Die Rechnung wird sofort finalisiert (Status `sent`), da die Zahlung bereits eingegangen ist.
2. **Zahlung verbucht.** Ein Zahlungsdatensatz wird auf der Rechnung über den Standard-Zahlungsservice erstellt. Die Zahlungsmethode wird auf den Dienstleister (Mollie oder Stripe) gesetzt und die Referenz enthält die Prozessor-Session-ID für Audit-Trails.
3. **Kundenbestätigung.** Der Käufer erhält eine Bestätigungs-E-Mail mit Produktname, Betrag und Zahlungsmethode. Wenn eine Rechnung erstellt wurde, enthält die E-Mail einen gesicherten Portal-Link zum Anzeigen und Herunterladen des Rechnungs-PDFs.
4. **Inhaber benachrichtigt.** Sie erhalten eine In-App-Benachrichtigung und eine E-Mail-Zusammenfassung des Verkaufs: Produkt, Betrag, Kunden-E-Mail und einen direkten Link zur Rechnung.

Die Checkout-Erfolg- und Checkout-Abgebrochen-Seiten zeigen dem Käufer einen gebrandeten Ergebnisbildschirm, der die Design-Tokens (Farben) Ihrer Website verwendet, damit die Seite markenkonform bleibt.

## Sichtbarkeit des Posteingang-Tabs

Der Posteingang-Tab erscheint nur dann in der Seitenleiste und der unteren Navigationsleiste, wenn der Workspace eine Posteingang-fähige Domain konfiguriert hat. Zugriff auf Tarifebene allein reicht nicht aus -- der Workspace muss den Onboarding-Ablauf abgeschlossen und den Posteingang auf mindestens einer Domain aktiviert haben. So wird verhindert, dass der Tab bei Benutzern erscheint, die zwar über ihren Tarif Zugriff auf den Posteingang haben, ihre E-Mails aber woanders lesen und nie einen leeren zweiten Posteingang sehen wollen.

Bei kostenlosen Tarifen ohne Posteingang bleibt der Tab als Upgrade-Hinweis sichtbar. Bei kostenpflichtigen Tarifen erscheint der Tab jedoch automatisch, sobald eine Domain über den Einrichtungsassistenten eingerichtet und der Posteingang bereit ist.

## E-Mails senden vs. E-Mails empfangen

Dieses Bundle ist die **Empfangsseite**. Ausgehende E-Mails -- Rechnungsversand, Erinnerungen, Angebotsversand -- werden von der breiteren E-Mail-Pipeline abgewickelt, die unter [E-Mail-Integration](/de/settings/email) beschrieben ist. Der Posteingang dient dem Empfang von Kunden-E-Mails und dem Verfassen von Antworten; er routet Ihre automatisierten Rechnungssendungen nicht. Die Rechnungszustellung folgt immer Ihrer gewählten Versandmethode unter [E-Mail-Integration](/de/settings/email) (Gmail, Outlook oder der integrierte Versender). Die DKIM-Signierung der Posteingangs-Domain wird für ausgehende Antworten verwendet, die Sie im Posteingang verfassen, nicht für automatisierte Transaktions-E-Mails.

## Grenzen und Fallstricke

- **Eine Website pro Unternehmen.** Das Hinzufügen einer eigenen Domain deaktiviert die Workspace-Subdomain. Das Entfernen der Domain stellt den Slug nicht automatisch wieder her -- aktivieren Sie ihn manuell, wenn Sie zurückfallen möchten.
- **CNAME-Modus hat keine E-Mail.** E-Mail-Routing erfordert eine vollständige Cloudflare-Zone, die nur der Nameserver-Modus bietet.
- **Der Assistent verweigert das Überschreiben eines bestehenden Drittanbieter-MX.** Wenn Ihr Apex bereits auf Google Workspace oder Microsoft 365 zeigt, gibt `quickEnableInbox` `apexMx.status = 'conflict'` zurück und Sie müssen wählen: MX zu Cloudflare migrieren oder bei Ihrem bestehenden Anbieter bleiben und den gebündelten Posteingang überspringen.
- **Reservierte Subdomains.** `app`, `admin`, `api`, `www`, `mail`, `support`, `portal`, `dashboard` und eine Handvoll anderer sind auf Workspace-Slug-Ebene gesperrt.
- **Pre-Launch.** Das Bundle wird durch `custom_domains` und `public_business_page` feature-gesteuert. Workspaces ohne diese Flags sehen die Upgrade-Aufforderung anstelle des Editors.

## Verwandt

- [Einrichtungsassistent](/de/getting-started/company-setup) -- die magische Einführung, die den gebündelten Ablauf antreibt.
- [E-Mail-Integration](/de/settings/email) -- ausgehende E-Mails, Send-From-Identitätsauswahl, Zustellverfolgung.
- [Website-Builder](/de/advanced/business-page) -- die vollständige Editor-Anleitung.
- [Unternehmenseinstellungen](/de/settings/company) -- das Dach, das Über / Aussehen / Website / Adresse enthält.
- [Abrechnung & Tarife](/de/settings/billing) -- Feature-Flags, die das Bundle steuern.
