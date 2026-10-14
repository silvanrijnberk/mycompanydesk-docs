---
title: Domains, Website und Posteingang
description: "Eigene Domains, die gehostete Unternehmenswebsite und das gemeinsame Postfach: was in Desk und Office enthalten ist und wie sie zusammenarbeiten."
last_verified: 2026-10-14
---

# Domains, Website und Posteingang

> **Für alle verfügbar.** Die Website unter einer kostenlosen mycompanydesk.site-Adresse und ein Posteingang zum Lesen und Antworten sind in Desk enthalten. Eigene Domains und der volle Posteingang sind in Office enthalten.

Eigene Domains, die gehostete Unternehmenswebsite und der gemeinsame E-Mail-Posteingang bilden ein Produkt. Der Grund: Sie teilen sich den Zustand. Dieselbe verbundene Domain, die beweist, dass Sie `acme.de` kontrollieren, macht `acme.de` auch zur URL Ihrer Website und sorgt dafür, dass `info@acme.de` E-Mails empfangen kann. Es gibt einen Onboarding-Ablauf, einen Einstellungsbaum und einen Ort in der App, um all das zu verwalten.

## Der gebündelte Wert

Fügen Sie eine Domain hinzu und Sie erhalten drei Dinge:

- **Eine eigene Adresse.** Ihr Unternehmen ist unter `acme.de` erreichbar statt unter `acme.mycompanydesk.site`.
- **Eine Live-Website.** Die gehostete Unternehmensseite wird automatisch auf der verifizierten Domain veröffentlicht.
- **Einen funktionierenden Posteingang.** `info@acme.de`, plus `support@`, `sales@` und ein reiner Sende-Alias `noreply@`, fangen E-Mails auf und versenden Antworten.

Sie können den gebündelten Ablauf über die Posteingang-Einrichtung (`/inbox/setup`) starten, die Ihre Domain verbindet und den Posteingang in einem Ablauf einschaltet, oder schrittweise unter **Einstellungen › Ihre Website und Domain** (`/settings/domein`). Wählen Sie im [Einrichtungsassistenten](/de/getting-started/company-setup) bei „Womit möchten Sie beginnen?“ die Option „Eine eigene Website“ oder „E-Mail mit eigener Domain“, leitet der Assistent Sie danach zu Ihrer Website oder zur Posteingang-Einrichtung weiter.

## Ein Onboarding-Ablauf

Die Posteingang-Einrichtung unter `/inbox/setup` ist der empfohlene Einstiegspunkt. Sie führt alle Schritte nacheinander aus, sodass der Benutzer ein paar Fragen beantwortet und die Plattform alles darunter verdrahtet.

### Schritt 1: Domain hinzufügen

Zwei Wege:

- **Kostenlose Workspace-Subdomain**: `ihr-slug.mycompanydesk.site`. Keine DNS-Arbeit; der Slug (die schlichte Form Ihres Firmennamens) wird als Cloudflare Pages Custom Domain registriert und die Website ist innerhalb von Sekunden live. Die Subdomain kommt in den Blick, sobald Sie die Website veröffentlichen, nicht früher. Diese Adresse gehört zu Desk: Die Website trägt ein kleines Label „Gemaakt met MyCompanyDesk“ und bleibt dauerhaft online. Auf einer eigenen Domain (Office) entfällt das Label.
- **Ihre eigene Domain**: geben Sie `acme.de` ein. Zwei Setup-Modi werden unterstützt:
  - **Nameserver-Modus** (empfohlen): es wird eine Cloudflare-Zone für die Domain erstellt. Sie ändern die Nameserver Ihres Registrars auf die beiden `*.ns.cloudflare.com`-Hostnamen, die der Assistent anzeigt. Cloudflare wird zum autoritativen DNS für die Domain, was E-Mail, SSL und DNS-Record-Verwaltung innerhalb von MyCompanyDesk ermöglicht.
  - **CNAME-Modus**: für eine Subdomain (z. B. `portal.acme.de`) oder um nur die Website Ihrer Hauptdomain zu verknüpfen, während E-Mail und alles andere bei Ihrem bisherigen Anbieter bleiben („Nur meine Website verknüpfen“). Sie fügen einen einzigen CNAME-Record bei Ihrem bisherigen Anbieter hinzu; bei einer Hauptdomain meistens `www.` plus Ihre Domain, denn die meisten Anbieter erlauben keinen CNAME-Record auf der nackten Domain. Steht der Record, zeigt `www.<Ihre Domain>` Ihre MyCompanyDesk-Website. E-Mail-Routing ist in diesem Modus nicht verfügbar; die Website auf der nackten Domain selbst zu hosten, braucht den Nameserver-Modus.

Das Hinzufügen einer eigenen Domain deaktiviert automatisch die Workspace-Subdomain: es gibt eine kanonische Website pro Unternehmen, niemals zwei.

### Schritt 2: Verifizierung

Die Verifizierung erfolgt sowohl auf Abruf als auch per Polling. Die Detailseite zeigt eine **Verifizieren**-Schaltfläche, und ein Hintergrundprozess prüft jede ausstehende Domain in Intervallen erneut.

- **Nameserver-Modus** wird verifiziert, sobald Cloudflare die Zone als aktiv meldet. Der Status wechselt von „wartet auf Nameserver“ über „wartet auf Verifizierung“ zu „aktiv“. Der Benutzer wird über die In-App-Benachrichtigungsglocke informiert.
- **CNAME-Modus** wird verifiziert, indem der CNAME aufgelöst und geprüft wird, ob er auf das Pages-Ziel zeigt. Der Status wechselt von „wartet auf CNAME-Eintrag“ zu „aktiv“.

Ein Nameserver-Domain, das 30 Tage auf Ihre Nameserver gewartet hat, ohne je verbunden zu werden, wird automatisch entfernt; der Name kommt damit wieder frei für einen anderen Arbeitsbereich. Domains mit einem Postfach darauf (importierte E-Mails mitgezählt), Domains, die wir selbst beim Registrar halten, und laufende Käufe oder Umzüge werden auf diese Weise nie entfernt.

### Schritt 3: SSL

SSL wird automatisch von Cloudflare bereitgestellt, sobald die Zone aktiv ist. Der Standardmodus ist **Full (strict)**; Sie können ihn unter `Domain-Detail › SSL` ändern (`off / flexible / full / strict`). Das Zertifikatsstatusfeld im SSL-Panel spiegelt das Verifizierungsergebnis von Cloudflare wider.

### Schritt 4: Website geht live

Die gehostete Unternehmensseite (siehe [Website-Builder](/de/advanced/business-page)) wird automatisch unter der Domain-Root veröffentlicht, sobald die Zone aktiv ist. Ihre Website erscheint unter der besten Adresse, die Sie haben, in dieser Reihenfolge:

1. Eine eigene Domain, auf der Ihre Website läuft → `https://acme.de`
2. Eine Subdomain Ihrer eigenen Domain für Ihre Website → `https://portal.acme.de`
3. Die Workspace-Subdomain → `https://acme.mycompanydesk.site`
4. Die Fallback-Portalroute (`/portal/<slug>`), wenn nichts anderes konfiguriert ist.

### Schritt 5: Posteingang empfängt E-Mails

Bei eigenen Domains im Nameserver-Modus schaltet der Assistent nach der Verifizierung den Posteingang ein. Dieser Schritt lässt sich gefahrlos wiederholen und erledigt Folgendes:

- Richtet den E-Mail-Versand auf der reinen Domain ein (standardmäßig `acme.de`) und schreibt die DKIM- und SPF-Einträge in Ihr DNS. Ein explizites Subdomain-Label provisioniert stattdessen `<label>.<domain>` (z. B. `mail.acme.de`).
- Setzt über Cloudflare Email Routing eine Catch-All-Regel, sodass alle E-Mails an die Domain in Ihrem Posteingang ankommen.
- Prüft die Apex-MX-Records. Sind diese leer oder zeigen bereits auf Cloudflare, installiert der Assistent die Cloudflare-MX. Ist ein Drittanbieter (Google Workspace, Microsoft 365) bereits vorhanden, verweigert der Assistent das Überschreiben und zeigt eine Warnung an, damit Sie selbst entscheiden können.
- Erstellt `info@acme.de` als das standardmäßige gemeinsame Postfach.
- Richtet `support@` und `sales@` als bidirektionale Aliase von `info@` ein, und `noreply@` als reinen Sende-Alias (erlaubt in From, verworfen bei eingehend).
- Wählen Sie im Adressschritt eine andere Adresse als `info@` (zum Beispiel `jan@acme.de`), wird dieses Postfach Ihr Standardpostfach.

Sie können den Posteingang auch einschalten, bevor die Verifizierung abgeschlossen ist. Cloudflare richtet keine E-Mail auf einer Zone ein, deren Nameserver noch nicht auf uns zeigen; Ihr Postfach wird dann trotzdem sofort angelegt, und die Schritte auf der Zone (Routing, Catch-all, Apex-MX) werden vorläufig zurückgestellt: Die App sagt Ihnen, dass Mail auf dieser Domain funktioniert, sobald Ihre Nameserver auf uns zeigen. Sobald das Domain aktiv wird, schließt die Plattform die Einrichtung automatisch ab.

## Referenz pro Feature

### Eigene Domains

Die Benutzeroberfläche befindet sich unter **Einstellungen › Ihre Website und Domain** (`/settings/domein`, Seitentitel „Ihre Domain“). Die älteren Pfade `/workspace/organization/company/address`, `/workspace/organization/domains` und `/workspace/communication/domains` leiten hierhin weiter.

Die Seite ist in zwei Bereiche unterteilt:

- **Ausstehende Domains**: Domains, die noch verifiziert werden müssen, erscheinen immer ganz oben. So können Sie die Verifizierungsanweisungen für neu hinzugefügte Domains erreichen, bevor diese aktiv werden.
- **Aktive Domains**: Jede aktive Domain bekommt eine eigene Karte mit eigenen Registerkarten, die sich ihre Auswahl getrennt merken. Eine Karte öffnet auf der Registerkarte **Routing**.

Die Seite zeigt standardmäßig eine aufgeräumte Ansicht. Fünf Power-User-Registerkarten sind ausgeblendet, bis Sie den **Erweiterten Modus** aktivieren: **DNS-Einträge**, **SSL / TLS**, **URL-Weiterleitungen**, **Analyse** und **Sicherheit**. Eine Domain im CNAME-Modus hat nur die Registerkarte Routing. Der erweiterte Modus ist ein Schalter pro Gerät auf der Seite **Darstellung** in den Einstellungen; siehe die [Übersicht der Einstellungen](/de/settings/).

Was Sie auf der Seite tun konnen:

- **Domain kaufen oder beanspruchen** über die Domain-Kaufkarte. Geben Sie einen Domainnamen ein, prüfen Sie die Verfügbarkeit über OpenProvider, und kaufen Sie die Domain oder beanspruchen Sie sie kostenlos, wenn Ihr Workspace für den kostenlosen `.nl`-Claim berechtigt ist.
- **Domain hinzufügen** (Nameserver- oder CNAME-Modus) über eine eigene Karte, die immer sichtbar ist.
- **Domain zu uns umziehen** (eingehender Transfer) mit dem Autorisierungscode Ihres aktuellen Anbieters, oder starten Sie den Migrationsassistenten, wenn Ihre E-Mail noch bei einem anderen Anbieter liegt.
- **Verifizieren** einer ausstehenden Domain.
- **DNS-Records verwalten** für die ausgewählte Domain: A, AAAA, CNAME, MX, TXT, SRV, CAA, NS. Änderungen gehen direkt an Cloudflare.
- **SSL** für die ausgewählte Domain: Zertifikatsstatus anzeigen, SSL-Modus ändern.
- **URL-Weiterleitungen** für die ausgewählte Domain: drei kostenlose Cloudflare Page Rules pro Zone. Quellmuster + Ziel + 301/302.
- **E-Mail-Sicherheit** für die ausgewählte Domain: SPF/DMARC/DKIM-Prüfung mit einer Ein-Klick-"Fix"-Option, die sichere Standardwerte schreibt (`v=spf1 ~all`, `v=DMARC1; p=quarantine; …`). Wenn Ihre Domain bereits einen eigenen SPF- oder DMARC-Record hat, bleibt dieser stehen, und die Prüfung akzeptiert jeden einzelnen Policy-Record dieser Art.
- **Analyse** für die ausgewählte Domain: die letzten 30 Tage mit Anfragen, Bandbreite, Bedrohungen, Besuchern, Seitenaufrufen. Liefert Cloudflare diese Zahlen nicht, zeigt die Registerkarte einen leeren Zustand statt einer Fehlermeldung.
- **Entfernen** der ausgewählten Domain: die Domain verschwindet aus Ihrem Arbeitsbereich, und die Cloudflare-Zone (im CNAME-Modus die Website-Verknüpfung) wird abgebaut. Lief Ihre Website über diese Domain, fällt die Website auf eine andere aktive Website-Domain oder auf die kostenlose mycompanydesk.site-Adresse zurück.
- **Inaktive Domains** in einer eigenen Karte: abgelaufene Domains, zu einem anderen Anbieter übertragene Domains und CNAME-Domains, die nie verbunden wurden, erscheinen dort mit Badge und kurzer Erklärung, jeweils mit einer Entfernen-Aktion; abgelaufene Domains bieten zusätzlich den Kontakt zum Support.

#### Verlängerungszyklus

Die Domain-Verlängerung folgt drei Pfaden, je nachdem, wie die Domain erworben wurde:

1. **Kostenlose Verlängerung mit Office** (eine kostenlos beanspruchte Domain in einem Arbeitsbereich, der zahlender Office-Kunde geworden ist): MyCompanyDesk zahlt die Verlängerung. Die Domain verlängert sich automatisch, solange der Workspace wirklich auf Office läuft; läuft das Abonnement auf das Periodenende aus und stoppt Office, bevor die Domain fällig ist, verlängern Sie die Domain danach selbst. Keine Zahlungsmethode erforderlich.
2. **Kostenpflichtige automatische Verlängerung** (eine gekaufte Domain oder eine kostenlos beanspruchte Domain in einem Arbeitsbereich ohne Office): Wird jährlich über die hinterlegte Karte abgerechnet. Funktioniert wie jede andere Abonnementverlängerung.
3. **Manuelle Verlängerung**: Fällt ein Arbeitsbereich mit kostenlos beanspruchter Domain aus Office heraus und ist keine Karte hinterlegt, verlängert sich die Domain nicht automatisch. Sie sehen eine Benachrichtigung und starten von dort eine einmalige Zahlung für die Verlängerung, in einem Stripe-Bezahlfenster innerhalb von MyCompanyDesk. Dies ist der einzige Weg, eine Domain ohne aktives Abonnement oder hinterlegte Karte aktiv zu halten.

#### Domain-Übernahme bei vorzeitigem Probezeit-Ende

Wenn ein Kunde während der Office-Testphase abspringt, ohne Office-Kunde zu werden, gibt es eine dritte Option für die kostenlose `.nl`-Domain: Übernahme für einmalig €15,00 inkl. MwSt. (einmalig). Im Übernahmefenster bezahlt der Kunde über Stripe und erhält damit das vollständige Eigentum. Nach der Zahlung wird der Domain-Inhaber von MyCompanyDesk auf den Kunden übertragen und der Auth-Code (EPP) wird angezeigt, sodass die Domain zu jedem Registrar umgezogen werden kann.

Der Preis von €15,00 wird bewusst inklusive niederländischer MwSt. angegeben, weil die Abbuchung im Moment des Abgangs ausgelöst wird. Der Betrag ist €12,40 zuzüglich 21% niederländischer MwSt., auf den Cent gerundet, sodass der Gesamtbetrag genau €15,00 ergibt.

Der Übernahmepreis ist ein Produktpreis, kein Übertragungsaufschlag. MyCompanyDesk berechnet niemals Gebühren für den Auth-Code selbst, sobald der Kunde registrierter Inhaber ist.

#### Übertragungsfolgen

Die Übertragung einer über MyCompanyDesk registrierten Domain zu einem anderen Registrar hat dauerhafte Konsequenzen, die bei der wöchentlichen Prüfung beim Registrar festgestellt werden:

- **Kostenlos beanspruchte Domains**: Der Gratis-Domain-Vorteil geht verloren. Der Arbeitsbereich kann nie wieder eine andere Gratis-Domain beanspruchen. Hinweis: Die Übernahme der Domain während der Testphase (siehe Übernahme-Abschnitt oben) ist keine Übertragung, sondern eine Inhaberübergabe, die dem Kunden Eigentum verschafft, bevor eine Übertragung stattfindet, sodass der Gratis-Domain-Vorteil für die Dauer der Testphase erhalten bleibt.
- **Gekaufte Domains**: Es entfällt kein Vorteil. Die Domain steht danach einfach als umgezogen.

Das Claim-Fenster warnt vor diesen Konsequenzen, bevor ein Gratis-Domain-Claim eingereicht wird, und verlangt eine ausdrückliche Bestätigung des Benutzers. Ein "So funktioniert Ihre Gratis-Domain"-Hinweis erklärt, dass die Domain während der Testphase auf MyCompanyDesk registriert ist, beim Wechsel zu Office kostenlos auf Ihren Namen übertragen wird und bei vorzeitigem Ausstieg für €15 übernommen werden kann. Ist der Arbeitsbereich bereits zahlender Office-Kunde, zeigt das Fenster seine eigenen Texte: die Domain kommt sofort auf Ihren Namen und verlängert jedes Jahr kostenlos, solange Sie Office haben; beenden Sie Office, verlängern Sie sie danach selbst. Was bei einem Umzug entfällt, halten wir fest, damit der Support es nachvollziehen kann.

#### Domain kaufen oder beanspruchen

Die Domain-Kaufkarte sitzt in der Domain-Auswahl auf der Seite Ihre Domain. Über die Karte wählen Sie eine Domain aus und sichern sie sich auf zwei Wegen, die beide ein Kauffenster in zwei Schritten öffnen. Schritt 1 erfasst die Registrantdaten (die Angaben, die der Registrar für WHOIS braucht). Schritt 2 erledigt Zahlung oder Claim:

- **Kaufen**: Bezahlter Kauf über OpenProvider. Sie geben einen Domainnamen ein, die Karte prüft Verfügbarkeit und Preis und öffnet dann das Kauffenster. Nachdem Sie die Registrantdaten eingegeben haben, bezahlen Sie im selben Fenster über Stripe. Nach Abschluss registriert MyCompanyDesk die Domain bei OpenProvider und verbindet sie im Nameserver-Modus mit Cloudflare.
- **Gratis-Claim**: Berechtigte Workspaces in einer Office-Testphase oder mit einem bezahlten Office-Abonnement können eine `.nl`-Domain für das erste Jahr kostenlos beanspruchen. Die Karte prüft, ob Ihr Arbeitsbereich die Bedingungen erfüllt. Das Fenster erfasst die Registrantdaten und reicht danach den Claim ein. MyCompanyDesk trägt die Registrierungsgebühr für das erste Jahr.

So verlängert sich die Domain nach dem ersten Jahr:

- **Kostenlos beansprucht**: Arbeitsbereiche in einer Office-Testphase. Das erste Jahr ist kostenlos. Am Ende des Gratis-Jahres muss der Workspace auf einem kostenpflichtigen Office-Tarif sein; die Domain verlängert sich dann als Teil des Office-Abonnements, bezahlt vom Workspace. Wenn der Workspace nach dem Gratis-Jahr kein Office mehr zahlt, verfällt die Domain und muss manuell verlängert werden. Während des Gratis-Jahres können Sie im Fenster eine Karte für die spätere automatische Verlängerung hinterlegen.
- **Gekauft**: Domains, die zum vollen Preis gekauft wurden. Die Verlängerung wird jährlich über die hinterlegte Zahlungsmethode abgerechnet. Schlägt die Zahlung fehl, erhalten Sie eine Benachrichtigung zur manuellen Verlängerung.

Die Berechtigung wird durch server-seitig geprüfte harte Bedingungen bestimmt:

- **Aktiver Office-Workspace**: der Workspace muss auf Office sein (Testphase oder bezahlt). Workspaces auf Desk können nicht claimen.
- **KVK erforderlich**: der Workspace muss eine KVK-Nummer verknüpft haben.
- **Domain muss `.nl` sein**: das Gratisprogramm gilt nur für die NL-Endung.
- **Domain muss mit dem KVK-Namen übereinstimmen**: die Domain muss dem registrierten Firmennamen oder einem Handelsnamen entsprechen.
- **Eine Gratis-Domain pro KVK-Nummer**: Eine KVK, die bereits eine Gratis-Domain beansprucht (und dann übertragen) hat, ist dauerhaft gesperrt.

Kontoalter und Website-Inhalt sind keine harten Bedingungen. Sie würden legitime Onboarding-Tag-Claims blockieren, was dem Versprechen „Ihr Unternehmen an einem Tag gründen, Domain inklusive“ widerspricht. Stattdessen fließen beide als weiche Signale in eine Risikobewertung ein, der die Prüfliste sortiert, und bei einem Claim entscheiden zuerst harte Fakten; der Score füllt nur die Grauzone auf. Ein Mensch prüft die Anmeldung zuerst (im Claim-Fenster steht, dass meist innerhalb eines Werktags eine Antwort kommt), wenn der Workspace bei der Anmeldung unter verschärfter Kontrolle steht, wenn sich das Konto außerhalb der Niederlande angemeldet hat, wenn die Anmeldung selbst aus dem Ausland kommt, wenn das Register das Unternehmen als gelöscht ausweist, wenn Rechtsform oder Belegschaft nicht ins Programmprofil passen (etwa eine NV oder eine Stiftung, oder ein Unternehmen mit mehr als einer Handvoll Beschäftigter), oder wenn die KVK-Nummer bereits bei einem anderen Kunden-Workspace liegt. Eine Anmeldung geht ohne Warten durch, wenn das Unternehmen ins Profil passt und die Person hinter dem Konto nachweislich dazugehört: der Name auf dem Konto steht im KVK-Namen eines Unternehmens, das in den letzten 180 Tagen ins Register eingetragen wurde, oder die verifizierte E-Mail-Domain des Kontos ist dieselbe, die die KVK als Website des Unternehmens führt, was auch für ältere Unternehmen gilt. Beide Wege brauchen ein normales Urteil der automatisierten Prüfung; steht sie nicht zur Verfügung, sieht ein Mensch nach. In allen übrigen Fällen entscheidet der Score: ein guter Score geht durch, ein niedrigerer geht an einen Menschen. Diese Regeln gelten für jeden Arbeitsbereich, in der Testphase oder zahlend. Score und Gründe bleiben intern: der Claim zeigt sie nie an. Die Karte kann aber einen Tipp anzeigen, etwa dass Ihre Website noch nicht veröffentlicht ist, ohne den Claim zu blockieren.

Wenn eine Bedingung nicht erfüllt ist, listet die Karte die verbleibenden Anforderungen auf, damit der Benutzer sieht, was noch zum Freischalten der Gratis-Claim fehlt.

Die unterstützten TLDs für den Kauf sind `.nl`, `.eu`, `.com`, `.net` und `.org`. Andere TLDs zeigen eine Meldung, dass sie noch nicht unterstützt werden, mit dem Hinweis, die Domain woanders zu kaufen und über **Ich habe bereits eine Domain** zu verbinden.

#### Domain zu uns umziehen (eingehender Transfer)

Ein bei einem anderen Registrar registriertes Domain ließ sich bisher nur verknüpfen: Die Registrierung selbst blieb beim alten Anbieter, deshalb kannten Verlängerung und der Abgang per Umzug das Domain nicht. Die Option **Auch meinen Domainnamen zu MyCompanyDesk umziehen** in der Domain-Auswahl bringt die Registrierung zu MyCompanyDesk. Sie brauchen den Autorisierungscode (den Umzugscode) Ihres aktuellen Anbieters, und die Registry verlangt eine Telefonnummer für die Anfrage.

Die Auswahl zeigt den Preis des Umzugs an, bevor Sie sich festlegen:

- **Ein `.nl`-Umzug ist kostenlos.** Die Registry berechnet nichts und ergänzt kein Jahr, Ihr aktuelles Ablaufdatum bleibt bestehen. Die Verlängerung läuft danach wie ein bezahlter Kauf: Sie erhalten zuerst eine Erinnerung und zahlen erst, wenn Sie selbst verlängern.
- **`.eu`, `.com`, `.net` und `.org` kosten den einmaligen Registrierungspreis**, und der Umzug ergänzt ein Jahr zum Domain.

Der Umzug wird bei der Registry mit Ihrem Autorisierungscode und unseren Nameservern beantragt, damit E-Mail und Website weiter auf MyCompanyDesk zeigen. Bei `.nl` ist das meist in wenigen Minuten erledigt; bei anderen Endungen kann es bis zu fünf Tage dauern. Die Seite Ihre Domain zeigt pro Umzug eine Statuskarte: beantragt, umgezogen (die Karte verschwindet, sobald die Zone aktiv ist) oder fehlgeschlagen mit dem Grund des Registrars und einem neuen Versuch mit neuem Code. Ein falscher Code oder eine noch aktive Transfersperre bei Ihrem aktuellen Anbieter kommt als Ablehnung zurück, die sagt, was zu tun ist.

Das Angebot lehnt mit benanntem Grund ab, wenn die Endung für den Umzug nicht unterstützt wird, wenn das Domain schon bei uns registriert ist (verbinden Sie es über die Option „Ich habe bereits eine Domain“), wenn das Domain an einen anderen Workspace gebunden ist, wenn dafür bereits ein Umzug läuft, oder wenn das Domain noch nicht im Nameserver-Modus mit seiner E-Mail bei uns verbunden ist. Diese letzte Ablehnung existiert, weil ein Umzug der Registrierung zuerst Ihre E-Mail lahmlegen würde; der Migrationsassistent unten verbindet zuerst das Domain und nimmt die E-Mail danach mit.

Ziehen Sie mit einem Domain um, das Sie bereits verknüpft hatten, wird Ihre bestehende Domain aktualisiert, und Einstellungen, E-Mail und Website bleiben, wie sie sind. Ein fehlgeschlagener Umzug wird zurückerstattet, und die Domain bleibt einfach verknüpft. Die Verlängerung behandelt umgezogene Domains wie bezahlte Käufe.

#### Von einem anderen Anbieter kommen (E-Mail-Migration)

Die Option **Ich wechsle von einem anderen Anbieter** wickelt den ganzen Umzug in einem Assistenten ab: Er verbindet Ihr Domain, richtet Ihre Postfächer ein, importiert die E-Mails aus Ihren alten Postfächern, überträgt die Registrierung zu uns, importiert, was während des Umzugs ankam, und endet mit dem Hinweis, dass Sie Ihr Paket beim alten Anbieter kündigen können. Sie brauchen das Passwort jedes alten Postfachs und, für den Umzug, den Umzugscode. Nameserver, MX-Einträge und Ports bleiben unsichtbar; nur der seltene Rückfallsschritt erwähnt sie.

Ihre Postfächer sind von Anfang an bereit. Auch während Ihr Domain noch beim alten Anbieter liegt, existieren alle Ihre Postfächer bereits und der Import Ihrer alten E-Mails kann direkt beginnen. Empfangen und Senden über diese Adressen schaltet die Plattform frei, sobald das Domain bei uns liegt; den Umzug selbst erledigt der Assistent später im selben Ablauf, und die Plattform schließt die Einrichtung der E-Mail automatisch ab, wenn das Domain aktiv ist. Während Sie auf die Nameserver warten, zeigt der Reiter **Adressen und Versand** unter Einstellungen › E-Mail den Status **Wartet auf Ihre Domain** an: Sobald die Nameserver umgestellt sind, geht Ihre E-Mail von selbst an, und Sie müssen dort nichts tun.

Der E-Mail-Schritt fragt nach jeder Adresse, die Sie beim alten Anbieter hatten, eine Zeile pro Adresse, und der Assistent legt nur für die Adressen Postfächer an, die Sie selbst nennen. Jede Adresse bekommt hier ein eigenes Postfach; die erste wird Ihr Standardpostfach. Eine Adresse, die nur an eine andere weitergeleitet hat, ohne eigenes Passwort, müssen Sie nicht eintragen: Diese E-Mails liegen schon in dem Postfach, an das sie gingen. Weitere Adressen dürfen das Passwort der ersten Adresse übernehmen oder bekommen ein eigenes. Die Adressen werden nacheinander übertragen: Während eine läuft, wartet der Rest in der Warteschlange, und jede Adresskarte zeigt, wo sie steht. Kündigen Sie Ihr Paket beim alten Anbieter erst, wenn jede Adresse fertig ist; der letzte Bildschirm zählt die übertragenen Adressen auf und, falls bei einer Adresse nicht alles ankam, weist Sie hin, sich vor jeder Kündigung bei uns zu melden. Nachrichten, die gar nicht übertragen werden konnten, etwa weil sie zu groß oder unlesbar sind, liegen nur noch beim alten Anbieter; der letzte Bildschirm sagt, wie viele es sind, damit Sie sie selbst sichern können, bevor Sie Ihren Vertrag dort kündigen.

Der Import ist ein dauerhafter Auftrag auf unserer Seite, keine Browseraktion. Der Auftrag wird serverseitig gespeichert, mit den Passwörtern Ihrer alten Postfächer verschlüsselt (AES-GCM), und nur mit Ihrer ausdrücklichen Zustimmung. Nach der Aktivierung des Domains holt ein Folgelauf nach, was inzwischen angekommen ist, 48 Stunden später räumt ein letzter Durchgang den Rest auf, und danach werden die gespeicherten Passwörter gelöscht. Vierzehn Tage sind die harte Frist: danach sind die Passwörter in jedem Fall weg. Ist der Import fertig, sagt eine In-App-Benachrichtigung, wie viele Nachrichten aus wie vielen Ordnern angekommen sind, bis zu welchem Datum, und dass Sie Ihr Paket beim alten Anbieter jetzt kündigen können. Der IMAP-Host wird aus Ihren aktuellen MX-Einträgen erraten, mit `imap.<domain>` und `mail.<domain>` als Rückfall; bekannte Anbieter wie Hostinger werden beim Namen erkannt, und wo ein Anbieter ein App-Passwort verlangt, sagt der Assistent das.

Zwei Sicherungen gehören zu demselben Ablauf. Beim Löschen eines Postfachs oder beim Deaktivieren des Posteingangs fragt die App erst nach einer Bestätigung und nennt, wie viele Nachrichten dabei verschwinden, eingeschlossen importierten Verlauf. Und das Umzugsangebot lehnt ab, solange Ihre E-Mail noch nicht umgezogen ist, aus dem Grund oben. Die Datenschutzzusage dahinter: Wir bewahren die Passwörter Ihrer alten Postfächer verschlüsselt auf, bis der Umzug abgeschlossen ist, höchstens vierzehn Tage, und löschen sie danach. Diese Zusage steht auch auf der [Datenschutzseite](https://mycompanydesk.nl/privacy).

### Gehostete Website

Ihr Website-Dashboard befindet sich unter **Kommunikation › Website** (`/website`). Es ist ein Dashboard mit sieben Tabs in der oberen Leiste: Übersicht, Besucher, Ergebnisse, Seiten, Auffindbarkeit, Verknüpfungen und Domain & E-Mail. Der Editor wird über **Website bearbeiten** geöffnet, wenn Sie Inhalt oder Design ändern möchten.

Was die Tabs abdecken:

- **Übersicht**-Tab: Vorschau Ihrer Website, ob diese live ist, und wie viele unveröffentlichte Änderungen ausstehen. Auf der Statuskarte setzen Sie die Website auch auf die Live-Version zurück.
- **Ergebnisse**-Tab: Was die Website gebracht hat, in einer Ansicht: Anfragen über das Kontaktformular, Termine über den Terminblock und Verkäufe über einen Produktblock, auch pro Seite.
- **Seiten**-Tab: Pro Seite, ob sie Besuche und Anfragen bringt und ob sie auffindbar ist; die Google-Texte jeder Seite passen Sie direkt hier an. Seiten hinzufügen oder entfernen erledigen Sie im Editor.
- **Besucher**-Tab: Sehen Sie, wo Besucher herkommen und wie sie sich durch die Website bewegen.
- **Auffindbarkeit**-Tab: SEO und Seiten-Metadaten, plus die Karte für Dienstseiten (siehe unten). Alte `/website/seo`-Links leiten hierhin weiter.
- **Verknüpfungen**-Tab: Zahlungsanbieter (Mollie, Stripe Connect) und Drittanbieterdienste wie Mailchimp, Plausible und Trustpilot. Alte `/website/integraties`-Links leiten hierhin weiter.
- **Domain & E-Mail**-Tab: Eigene Domain, DNS, SSL, Weiterleitungen und Posteingang-Einrichtung. Siehe den Abschnitt eigene Domains oben.

Alte Links auf den Tab Einstellungen landen auf Übersicht. Ihr Workspace hat eine Website, auch wenn Sie mehrere eigene Domains haben.

Die öffentliche Website wird unter der am besten geeigneten URL des Unternehmens bereitgestellt: eigene Domain-Root → Workspace-Subdomain → Fallback `/portal/<slug>`-Route.

Sie können die Website mit dem Block **Online boeken (afspraak plannen)** erweitern. Besucher können dann direkt über Ihre Website einen Termin buchen. Siehe [Online-Termine](/de/features/site-bookings).

#### Dienstseiten für die Auffindbarkeit

Auf dem Auffindbarkeit-Tab liegt eine Karte mit dem Titel „Meer pagina's waar mensen op zoeken“ (niederländisch für „Weitere Seiten, nach denen gesucht wird“; die App zeigt diese Karte unabhängig von der App-Sprache auf Niederländisch). Sie erscheint nur, wenn es etwas zu tun gibt: Dienstleistungen aus Ihrem Aanbod-Katalog ohne eigene Seite oder Entwurfsseiten, die auf Ihre Prüfung warten.

Öffnen Sie die Karte, dann sehen Sie die Vorschläge. Jeder Vorschlag ist eine Dienstleistung, die Sie wirklich anbieten, aus Ihrem Aanbod, mit der künftigen Adresse dabei: jede Seite bekommt ihren eigenen Platz unter `/diensten/`. Ein Vorschlag kann einen Grund aus der Google Search Console mitbringen: der Suchbegriff, der zur Dienstleistung passt, wie oft er gesucht wird und auf welchem Platz Sie dort stehen. Ein solcher Begriff stellt den Vorschlag nach vorn und wird im FAQ-Bereich der Seite beantwortet; eine Seite wird nie für einen bloßen Suchbegriff angelegt. Auch ein Begriff, zu dem keine Dienstleistung passt, bekommt keine Seite. Die Liste erklärt dann, warum nicht: Ein Begriff für Ihr ganzes Geschäft (das Gewerbe plus Ihr Ort) gehört zu Ihrer Startseite, eine Suche mit Ihrem Firmennamen bleibt außen vor, weil diese Besucher Sie schon gefunden haben, und eine Dienstleistung, die noch nicht in Ihrem Aanbod steht, kann eine Seite bekommen, sobald Sie sie dort ergänzen. Eine Dienstleistung, die schon eine Seite hat, unter ihrem eigenen Pfad oder unter einer Seite mit der Dienstleistung als Titel, wird nicht doppelt vorgeschlagen: zwei Seiten, die um denselben Begriff streiten, drücken sich gegenseitig in den Ergebnissen nach unten.

Reichen die vorhandenen Fakten nicht für eine echte Seite, stellt das Fenster Fragen, statt etwas zu erfinden: worum es bei der Dienstleistung geht, was sie ungefähr kostet und wie lange sie dauert. Ihre Antworten werden bei der Dienstleistung in Ihrem Aanbod gespeichert, solange diese Felder noch leer waren, damit sie beim nächsten Mal ebenfalls als Fakten zählen, und der geschriebene Text läuft durch dieselbe Faktenprüfung wie jeder andere KI-Text auf Ihrer Website.

Die Seiten werden einzeln geschrieben und kommen als Entwurf an. Von selbst geht nichts live: Sie prüfen die Entwürfe durch, markieren, welche veröffentlicht werden sollen, und veröffentlichen genau diese, ohne dass Ihre anderen unveröffentlichten Änderungen mitgehen. Veröffentlichte Seiten stehen nicht im Menü. Sie erscheinen in der Fußzeile unter einer eigenen Spalte **Diensten** (Leistungen) neben der Spalte Seiten sowie in Ihrer Sitemap, damit Google sie findet. Ist Ihre Website noch nicht live, sind die Seiten fertig und gehen online, sobald Sie die Website veröffentlichen.

Auch die Suchkarte ist daran gekoppelt. Unter einem Suchbegriff, der oft gesucht wird, während Sie weit hinten stehen, öffnet der Link dasselbe Fenster, sobald es Vorschläge gibt; andernfalls führt er weiterhin zur Seitenliste.

### Website vorübergehend offline schalten

Wenn Sie Ihre Website pausieren möchten, verwenden Sie den Schalter **Offline** im Tab **Übersicht**. Besucher und Suchmaschinen-Crawler erhalten solange eine 503-Seite mit einem `Retry-After`-Header. Das vorgeschlagene erneute Prüfintervall beginnt bei fünf Minuten und steigt auf bis zu einen Tag an, wenn die Website länger als einen Tag offline ist.

Nach drei Tagen Offline-Betrieb zeigt die Übersichtskarte einen Hinweis: Google behandelt eine längere Unterbrechung als entfernte Seite, und es kann Wochen dauern, bis die Sichtbarkeit in der Suche wiederhergestellt ist, sobald die Website zurückgeschaltet wird. Damit erkennen Sie, ob die Ausfallzeit noch beabsichtigt ist.

### Site-Pakete

`/website/pakketten` ist eine Galerie genehmigter, vorgestylter Site-Pakete. Sie können nach Branche oder Stil suchen. Wenn Sie ein Paket wählen, wird Ihre Entwurfs-Website ersetzt (Seiten, Abschnitte und Design-Tokens), aber niemals automatisch veröffentlicht; Sie prüfen das Ergebnis im Website-Builder und veröffentlichen es selbst, wenn Sie bereit sind. Ältere `/website/ontwerpen`-Links leiten hierhin weiter.

Siehe [Website-Builder](/de/advanced/business-page) für die vollständige Editor-Anleitung.

### E-Mail-Posteingang

Der Posteingang hat einen eigenen Platz in der App, unter `/inbox`.

Wenn eine weitergeleitete Lieferantenrechnung aus einem Anhang in einen Ausgabenentwurf umgewandelt wird, wird die Ausgabe erst nach Ihrer Bestätigung gebucht.

Bevor die Rechnung gebucht wird, sieht die Regel auch nach den Ausgaben, die schon in Ihren Büchern stehen: Eine Rechnung kann zu einer bestehenden Ausgabe gehören, statt eine zweite zu werden, auch bei Handausgaben und Zahlungen in Fremdwährung. Der Lieferantenname trägt den Abgleich, mit dem Betrag und einem versetzten Fenster darum, denn eine Zahlung folgt der Rechnung oft erst Wochen später, und ein monatlicher Lieferant hält seine Euro-Lastschrift und seine nächste Rechnung rund einen Monat auseinander. Eine Rechnung in Dollar, Pfund oder Franken kann wenige Tage neben der Euro-Lastschrift desselben Lieferanten liegen, ganz ohne Wechselkurs im System. Ohne Namensnachweis koppelt die Regel die Rechnung nur an eine Bankausgabe desselben Betrags, und nur, wenn genau ein Kandidat passt. Eine Ausgabe, die schon einen Beleg hat, bekommt nie einen zweiten darüber; so eine Rechnung bucht in „Zu prüfen“, mit einer Notiz, die auf die bestehende Ausgabe zeigt, denn eine Mahnung, die als andere Datei ankommt, ist nicht zu unterscheiden. Die Aufholrunde auf dem Rechnungen-Tab beurteilt Rechnungsmails auch nach einer Änderung der Triage erneut: Rechnungen, die die Triage damals übersah, kommen wieder an die Reihe, und eine Störung nimmt Threads nie endgültig aus dieser Aufholrunde. Das Triage-Modell liest auch die Dateinamen der Anhänge.

Fällt das Rechnungsdatum in eine bereits angegebene MwSt.-Periode, wird die automatische Buchung abgelehnt und statt der Rechnung stillschweigend zu verwerfen eine Benachrichtigung erstellt; die Benachrichtigung landet in der Posteingangsliste und nennt Lieferanten sowie Rechnungsdatum, sodass Sie die Ausgabe manuell in der aktuellen Periode buchen oder einen ergänzenden MwSt.-Voranmeldung einreichen können.

Funktionen:

- **Threading**: eingehende E-Mails werden in Threads gruppiert, basierend auf RFC 822 `Message-ID` / `In-Reply-To` / `References`. Jeder Thread zeigt eine Vorschau der letzten Nachricht, die Beteiligten, den Status und Labels. Bereits gelesene Nachrichten klappen auf eine Zeile zusammen (Absender, Vorschau, Uhrzeit); die neueste Nachricht und alles, was noch ungelesen war, bleiben offen (wie in Gmail). Klicken Sie auf eine eingeklappte Zeile, um sie zu öffnen, oder auf „Alle {n} Nachrichten ausklappen“, um alles zu zeigen.
- **Antworten**: Inline-Antwortfeld im Thread. Intelligentes `From` wählt die Adresse aus, an die die ursprüngliche E-Mail gesendet wurde, sodass ein Kunde, der an `support@acme.de` geschrieben hat, eine Antwort von `support@` erhält, nicht von `info@`.
- **Allen antworten**: Antwort mit einem Klick an alle Teilnehmer des Threads. Die Schaltfläche erscheint neben Antworten im Thread-Header und schließt alle Empfänger der ursprünglichen Nachricht ein.
- **Weiterleiten**: leiten Sie den gesamten Thread an einen anderen Empfänger weiter. Öffnet ein Verfassen-Drawer, in dem der ursprüngliche Nachrichtentext und die Anhänge vor dem Senden bearbeitet werden können. Der Header der weitergeleiteten Nachricht zeigt den ursprünglichen Absender, das Datum und den Betreff.
- **CC und BCC**: CC- und BCC-Felder stehen sowohl beim Verfassen als auch beim Antworten über einen "Cc/Bcc hinzufügen"-Toggle zur Verfügung. Adressen akzeptieren kommagetrennte Listen oder Einfügen aus der Zwischenablage. Die Felder bleiben ausgeblendet, bis sie benötigt werden, entsprechend dem üblichen Posteingangsmuster, bei dem die meisten Nachrichten sie nicht brauchen.
- **Entwürfe**: speichern Sie teilweise geschriebene Nachrichten und kommen Sie später darauf zurück. Entwürfe werden serverseitig gespeichert und bleiben über Browser-Sitzungen hinweg erhalten. Jeder Entwurf hat einen Betreff, eine Empfängerliste, einen Nachrichtentext und die hinzugefügten Anhänge. Entwürfe ohne Betreff zeigen "(kein Betreff)", und Entwürfe ohne Empfänger zeigen "(kein Empfänger)". In der Thread-Liste trägt ein Gespräch mit einem Antwort-Entwurf von Ihnen ein rotes „Entwurf“-Schild neben dem Namen, sodass Sie auf einen Blick sehen, bei welchem Thread Sie mitten in der Antwort waren; ein offener Klick setzt den Entwurf direkt wieder in das Antwortfeld.
- **Verfassen**: Drawer-Formular mit einer einzigen Identitätsauswahl, die Postfach und Absenderadresse in einem Bedienelement festlegt, Kundenauswahl (oder freies `An`), Betreff, Nachricht, CC/BCC-Felder, Anhänge. Warnung vor zurückgewiesenen Empfängern wird vor dem Senden angezeigt.
- **Standardabsender**: Das Absenderfeld einer neuen Nachricht steht auf Ihrem eigenen Standardpostfach, damit in einem Workspace mit mehreren Anmeldungen jeder die eigene Adresse als Absender vorgeschlagen bekommt. Ohne gespeicherte Wahl greift das Formular auf das erste persönliche Postfach des Workspace zurück, sonst auf das erste Postfach. Steht das Feld auf einem Postfach, das noch nicht Ihr Standard ist, legen Sie es mit einem Klick auf „Als meine Standardadresse festlegen“ fest, und der Hinweis unter dem Feld wechselt zu „Das ist Ihre Standardadresse für neue Nachrichten“. Die Vorgabe gilt nur für neue Nachrichten: eine Antwort geht immer vom Postfach des Gesprächs aus, und Rechnungen und Angebote behalten ihre feste Workspace-Absenderadresse.
- **Send-From-Aliase**: `info@`, `support@`, `sales@` sind bidirektionale Aliase desselben Postfachs. `noreply@` ist reiner Sende-Alias: als From wählbar, aber eingehende E-Mails daran werden bei der Aufnahme verworfen.
- **Absendername**: ausgehende E-Mails tragen einen Namen neben der Adresse: den Anzeigenamen des Postfachs, oder Ihren Firmennamen, wenn kein Anzeigename eingetragen ist. Postfächer ohne Anzeigenamen zeigen in der Postfachliste „Sendet als“ mit dem Firmennamen, und wenn Sie den Anzeigenamen löschen, sendet das Postfach wieder unter dem Firmennamen.
- **Postfachleiste** - liegen Ihre Postfächer auf mehr als einer Domain, gruppiert die Postfachliste in der linken Leiste sie unter einer Überschrift pro Domain. Jede Zeile zeigt nur den Teil vor dem @, und `info@` steht oben in ihrer Gruppe. Bei einer einzelnen Domain bleiben die Überschriften weg.
- **Anhänge**: Hochladen vor dem Senden (sowohl Verfassen als auch Antworten). Tippen Sie auf einen Anhang eingehender E-Mails, öffnet sich zuerst eine Vorschau: PDFs werden Seite für Seite angezeigt, Bilder und einfache Textdateien erscheinen direkt, und jede andere Dateiart erhält eine Dateikarte mit ihrer Größe. Ein langes PDF zeigt die ersten Seiten und verweist für den Rest auf den Download. **Herunterladen** und **Teilen** stehen neben der Vorschau als getrennte Schaltflächen, sodass das Ansehen einer Datei nie ein versehentlicher Download ist; auf Android landet eine gespeicherte Datei im Downloads-Ordner und Teilen öffnet den Systemdialog. Signierte Download-URLs verfallen nach kurzer TTL.
- **Alias-Hinweis**: wenn eine eingehende Nachricht an eine Adresse auf Ihrer eigenen Domain eingeht, die noch kein deklarierter Alias ist, zeigt der Thread einen sanften Hinweis mit einer „Als Alias hinzufügen“-Aktion. Adressen außerhalb Ihrer eigenen Domain werden nie als Alias angeboten.
- **Verknüpfung**: Threads können mit einem Kunden, Projekt oder einer Rechnung zur Querverweisung verknüpft werden.
- **Catch-All-Fallback**: E-Mails an jeden lokalen Teil der Domain fallen auf das Standardpostfach durch (eines pro Domain). Das bedeutet, Tippfehler und nicht deklarierte Aliase verschwinden nicht stillschweigend.
- **Aktivität**: Ausgehende Sendungen, Postfachänderungen und Statusänderungen von Gesprächen werden für den Workspace aufgezeichnet. Auf einem breiten Bildschirm zeigt das Seitenpanel neben dem Gespräch diesen Verlauf unter **Aktivität**.
- **HTML-E-Mail-Darstellung**: HTML-E-Mails werden mit ihrem ursprünglichen Styling in einem sandboxed iframe dargestellt. Der Renderer entfernt Skripte, Formulare und Event-Handler während der Bereinigung und blockiert externe Bilder standardmäßig, um Ihre Privatsphäre zu schützen. Ein Hinweisfeld erscheint, wenn Bilder blockiert sind, mit einem einzigen Klick auf "Bilder anzeigen", um die Nachricht mit Bildern neu darzustellen. Wenn kein HTML-Body vorhanden ist, wird der Klartext-Teil als Fallback angezeigt.
- **Stern-Markierung**: Markieren Sie wichtige Threads mit einem Stern für schnellen Zugriff. Ein Stern-Symbol erscheint neben dem Status-Punkt bei markierten Threads in der Thread-Liste. Die Werkzeugleiste hat eine Stern-Schaltfläche, die den Status für den geöffneten Thread umschaltet. Der Ordner „Markiert“ in der linken Leiste, neben Offen, Zurückgestellt, Gesendet, Entwürfe, Geschlossen, Spam und Papierkorb, filtert auf markierte Threads.
- **Gelesen von**: ist ein Thread für Sie noch als neu markiert und hat eine Kollegin oder ein Kollege ihn bereits geöffnet, nennt die Zeile diese Person: Gelesen von Anissa. Auf dem Handy sehen Sie ein Augensymbol mit dem Vornamen. Ehemalige Kollegen und die Buchhaltung werden nicht genannt.
- **Papierkorb statt Löschen**: Threads können in den Papierkorb verschoben werden, anstatt dauerhaft gelöscht zu werden. Eine Löschen-Schaltfläche (Papierkorb-Symbol) erscheint in der Werkzeugleiste für nicht gelöschte Threads. Nach dem Löschen ändert sich die Schaltfläche in eine Wiederherstellen-Aktion, die den Thread zurück in den Posteingang holt. Der Ordner Papierkorb steht in der linken Leiste, sodass Sie gelöschte Threads überprüfen können, bevor sie endgültig bereinigt werden.
- **Volltextsuche**: eine Suchleiste über der Thread-Liste ermöglicht die Suche in allen Posteingangsnachrichten nach Betreff, Nachrichtentext, Snippet und Absender. Die Suche gewichtet die Felder, sodass Betreff-Treffer vor Nachrichtentext-Treffern erscheinen. Ergebnisse werden pro Thread gruppiert, wobei das Snippet der am besten passenden Nachricht als Vorschauzeile angezeigt wird. Unterstützt Phrasen in Anführungszeichen, `OR` und `-` Ausschlüsse. Ein einzelnes Wort mit mindestens drei Zeichen wird zusätzlich in E-Mail-Adressen und Absendernamen gesucht, sodass Sie einen Thread auch dann wiederfinden, wenn Sie nur einen Teil einer Adresse eingeben, zum Beispiel die Domain. Suchen mit mehreren Wörtern oder einem `-`-Ausschluss berücksichtigen weiterhin nur ganze Wörter. Eine 250-ms-Verzögerung hält die Oberfläche reaktionsschnell, und der Ladeindikator gibt Echtzeit-Feedback.
- **Was der Absender möchte**: In der Office-Inbox zeigt die Zeile eines triagierten Threads eine kurze Zeile darüber, was die letzte Nachricht von Ihnen verlangt („Fordert ein Angebot an, will im Dezember fertig sein“), geschrieben von der KI-Triage, als die Mail eintraf. Die Zeile steht nur, solange der Absender das letzte Wort hat und die Triage danach lief; sobald Sie geantwortet haben oder neuere Mail eingegangen ist, die noch nicht triagiert wurde, fällt die Zeile auf die Anfangsworte der Nachricht zurück. Siehe [Posteingangsgruppen](#posteingangsgruppen-office) unten.
- **Interne Notizen**: eine private Notiz zum Thread, für Sie und Ihr Team. Die Notiz steht im Gespräch selbst an dem Punkt, an dem sie geschrieben wurde, gekennzeichnet als intern; der Kunde sieht sie nie. In einer Notiz können Sie eine Kollegin oder einen Kollegen @-erwähnen.
- **Absender als Kunden speichern**: Kommt ein Gespräch von einer Adresse, die zu keinem Ihrer Kunden passt, sagt der Absenderstreifen über der Nachricht „Noch nicht in deinen Kunden“ und bietet an, den Absender über „Als Kunde speichern“ mit einem Klick als Kunden zu speichern.
- **Antwort-Assistent (Office)**: siehe [Antwort-Assistent](#antwort-assistent) unten.

#### Posteingangsgruppen (Office)

In der Office-Inbox gliedert der Posteingang eingehende Mail danach, was sie von Ihnen verlangt. Über der Liste stehen drei Reiter:

- **Wartet auf dich**: Gespräche, in denen der Absender auf eine Antwort wartet. Liegt eine Nachricht schon einen vollen Tag zurück, zählt die Zeile die Wartetage. Post, die um keine Antwort bittet, bekommt keine Wartetage, egal wie lange sie liegt.
- **Rechnungen**: Lieferantenrechnungen, die die Triage erkannt hat. Die Liste öffnet das Gespräch direkt auf der Rechnungskarte; eine Aufholrunde gibt älteren Rechnungsmails eine weitere Chance, sobald die Triage sich geändert hat.
- **Sonstiges**: Newsletter und Systemmails, die Post, die Sie lesen, wenn Zeit übrig ist.

Ein Reiter ohne Post verschwindet. Die Anzahlen auf den Reitern gelten für den ganzen Workspace. Ist alles beantwortet, was auf Sie gewartet hat, zeigt die Liste statt Zeilen eine ruhige Meldung „Alles erledigt“. In der Desk-Inbox, die auf Lesen und Antworten begrenzt ist, bleibt die Liste ein Ordner.

Die Reiteraufteilung ist die Aufteilung des Posteingangs selbst: Labels und Markiert arbeiten wie immer, und die Gruppe Sonstiges übernimmt den Platz des früheren Ordners Werbung. Archivieren, Zurückstellen und Schließen nehmen ein Gespräch auch aus seiner Gruppe heraus, so wie es schon immer aus der offenen Liste verschwand.

#### Rechnungskarte im Leser

Für einen Thread, den die Triage als Rechnung erkennt, zeigt der Leser die Nachricht als Rechnungskarte:

- Sobald der Anhang als Ausgabe gebucht ist (automatisch nach der Triage oder über den Buchen-Knopf), zeigt die Karte Betrag inklusive MwSt., den MwSt.-Betrag und den Stand der Ausgabe direkt aus Ihren Büchern: wartet unter „Zu prüfen“ oder ist bereits gebucht. Der Knopf öffnet die Ausgabe.
- Bevor die Rechnung gebucht ist, zeigt die Karte nur, was der Mailtext selbst sagt, beschriftet mit „Betrag (aus der E-Mail)“, damit daraus nie ein gebuchter Betrag gelesen wird.
- Die Karte markiert überfällige Rechnungen: „bis 21. Oktober“ wird „überfällig seit 21. Oktober“, rot, sobald das Fälligkeitsdatum vergangen ist.

#### Antwort-Assistent

Office entwirft auf Wunsch die Antwort auf eine Kundenmail für Sie. Über dem Antwort-Editor steht eine Schaltfläche „Antwort entwerfen“. Sie öffnet ein Feld mit:

- **Richtungs-Chips**: Bestätigen, Freundlich ablehnen, Nach Infos fragen und Bedanken. Jeder Chip lässt die KI die ganze Antwort in diese Richtung schreiben.
- **Ihre eigene Anweisung**: Was möchten Sie antworten? (zum Beispiel den Termin für Dienstag bestätigen) Schreiben Sie es ins Feld und wählen Sie Generieren.
- **Meinen Text umschreiben**: haben Sie schon selbst etwas geschrieben, poliert die KI Ihren eigenen Entwurf statt Neues zu erfinden: Grammatik, Ton und Klarheit, ohne neue Fakten.

Während die KI schreibt, zeigt der Editor „Antwort wird geschrieben…“ und bleibt außer Reichweite. Der Schreibzustand gehört zum offenen Gespräch: öffnen Sie inzwischen einen anderen Thread, landet die Antwort nie im falschen Gespräch, und ist sie fertig, scrollt der Editor den Text ins Bild, statt einen Cursor hineinzusetzen. Der entworfene Text fällt als gewöhnlicher Text in den Editor und ist dann einfach Ihr Entwurf: Sie bearbeiten ihn, er wird automatisch als Entwurf gespeichert und zählt nie als gesendet. Auch eine fehlgeschlagene Sendung führt die KI nicht hinters Licht: sie liest Nachrichten, die wirklich angekommen oder wirklich gesendet wurden, nie Entwürfe und nie fehlgeschlagene Mail. Hatten Sie das letzte Wort im Thread (ein Angebot ging raus oder eine Antwort ist gesendet) und seither kommt nichts zurück, schreibt "Antwort entwerfen" eine kurze Folge-E-Mail: sie verweist auf das, was Sie gesendet haben, und lädt zur Reaktion ein, erfindet aber nie eine Kundenreaktion.

Der entworfene Antworttext behandelt, was die letzte Nachricht im Thread verlangt, in der Sprache dieser Nachricht, geschrieben als eine Person („ich“), signiert mit Ihrem Namen. Fakten, Preise oder Termine werden nicht erfunden: wo etwas nötig ist, das nicht dasteht, lässt der Text einen nackten Platzhalter wie [datum] zurück. Ist der Thread als verdächtig markiert, verschwindet die ganze Antwort-Hilfe aus dem Bild. Nach einer frischen Triage können über dem Antwortfeld Schnellantworten stehen: Antwortrichtungen mit einem Tipp („Ich komme gern vorbei“), die das Antwortfeld aufklappen und die Mail in dieser Richtung entwerfen. Das gilt, solange die Nachricht des Absenders die letzte ist.

#### Entwürfe

Der Ordner Entwürfe steht in der linken Leiste. Entwürfe werden serverseitig gespeichert, sodass sie Browser-Neustarts überstehen und geräteübergreifend verfügbar sind. Wenn Sie eine neue Nachricht oder Antwort beginnen und das Verfassen-Drawer ohne Senden schließen, wird der Inhalt automatisch als Entwurf gespeichert; eine eigene Speichern-Schaltfläche gibt es nicht. Ein Entwurf, der aus einem Thread gestartet wurde, trägt den Chip „Antwort“. Das Bearbeiten eines Entwurfs öffnet das Verfassen-Drawer mit dem gespeicherten Inhalt. Im Ordner Entwürfe fragt das Löschen zuerst nach einer Bestätigung.

Öffnen Sie ein Gespräch mit einem Antwort-Entwurf von Ihnen, steht der Entwurf im Antwortfeld, mit „Entwurf“ in der Kopfzeile und einem Papierkorb daneben. Wegwerfen löscht den Entwurf, setzt das Antwortfeld auf die leere Vorlage zurück und zeigt eine Meldung mit „Rückgängig machen“, damit ein einziger Tipp auf den Papierkorb nie eine geschriebene Antwort kostet: machen Sie rückgängig, während das Gespräch noch offen ist, steht Ihr Text (Anhänge eingeschlossen) wieder im Feld, sonst kehrt er als Entwurf zurück. Erst wenn die Zeit der Wegwerfmeldung vorüber ist, verschwindet der Entwurf auch vom Server. Scheitert das Wegwerfen, steht Ihr Text mit einer klaren Meldung wieder im Feld; ein Entwurf, der inzwischen gesendet oder auf einem anderen Gerät weggeworfen wurde, gilt als erledigt.

Der Posteingang verwendet Ihre eigene Domain erst, nachdem der Posteingang eingeschaltet ist und die MX-Einträge Ihrer Domain auf Cloudflare zeigen. Bis dahin kann der Workspace weiterhin E-Mails über den Standardzustellpfad senden, der unter [E-Mail-Integration](/de/settings/email) beschrieben ist, aber keine E-Mails empfangen.

#### Live-Polling

Der Posteingang aktualisiert sich automatisch, während der Tab geöffnet ist. Die Thread-Liste pollt alle 45 Sekunden auf neue E-Mails, und das Seitenleisten-Badge aktualisiert sich alle 60 Sekunden. Beides pausiert, wenn der Tab im Hintergrund ist, also kein unnötiger Netzwerkverkehr. Das Polling ist lautlos: Ladespinner blinken nicht bei Hintergrundaktualisierungen, und Polls werden während einer aktiven Suche komplett übersprungen, damit Ihre Ergebnisse stabil bleiben. Auf dem Telefon ziehen Sie die Liste nach unten, um sofort den neuesten Stand zu holen; solange diese Aktualisierung läuft, startet ein weiteres Ziehen keine zweite.

#### Als ungelesen markieren

Sie können einen geöffneten Thread über die Toolbar als ungelesen markieren. Anders als in früheren Versionen, in denen der Ungelesen-Status nur lokal gespeichert und bei einem Refetch verloren war, wird dieser nun serverseitig persistiert. Das Seitenleisten-Badge zählt ungelesene Nachrichten, nicht Threads mit ungelesenen Nachrichten, und wird entsprechend aktualisiert. Der Thread bleibt bei Seitenaktualisierungen, Browser-Neustarts und geräteübergreifend ungelesen, bis Sie ihn erneut öffnen.

Wird ein Thread aus der Liste nach Papierkorb, Spam, Geschlossen oder Zurückgestellt verschoben, während das Lesefenster geöffnet ist, schließt es sich automatisch. So bleibt die Detailansicht immer mit dem Ordner synchron, den Sie gerade betrachten, und Sie schreiben keine Antwort auf einen Thread, der den aktuellen Bereich bereits verlassen hat.

#### Spamfilter

Jede eingehende E-Mail läuft durch einen Spamfilter, bevor irgendetwas anderes damit passiert: eine große Menge Regeln zu Headern, Links und Inhalten, DNS-Sperrlisten, Phishing-Feeds und ein statistischer Filter, der aus den Schaltflächen Spam und Kein Spam lernt. Markieren Sie eine Nachricht als Spam, melden Sie ihren Text auch an einen Speicher, den alle Workspaces teilen: Text, den Sie gemeldet haben, zählt sofort für Ihren Posteingang; für andere Posteingänge erst, wenn zwei verschiedene Workspaces denselben Text gemeldet haben. Vom Filter als Spam eingestufte Mail erreicht Ihren Posteingang gar nicht erst: sie landet direkt im Ordner Spam, mit den Gründen dazu, und löst auch keine Benachrichtigung aus: kein Push und keine Zeile in der Benachrichtigungsliste. Mail, bei der der Filter unsicher ist, bleibt im Posteingang und trägt oben im Lesefenster einen roten Hinweis („Das könnte Spam sein.“) mit den Gründen darunter und der Schaltfläche Als Spam markieren daneben.

Die Gründe sind konkret: derselbe Text wurde bereits als Spam markiert, der Absender gibt sich als bekannter Name aus, mailt aber von einer anderen Domain, ein Link zeigt auf eine bekannte Phishing-Seite, die Antwortadresse steht auf einer Liste missbrauchter Adressen oder führt zu einer anderen Adresse als die des Absenders, jemand von außen nennt Ihre eigene Domain im Betreff, ein Link führt zu einem anonymen Hosting-Dienst statt zur Website des Absenders, die Domain des Absenders existiert erst seit Kurzem, die Domainendung wird vor allem für Spam genutzt, ein Link oder der sendende Server steht auf einer Spamliste, die E-Mail wurde nicht wirklich von der Domain gesendet, die als Absender angegeben ist, sie enthält verborgenen Text, oder sie ähnelt E-Mails, die zuvor schon als Spam markiert wurden. Die stärksten Gründe stehen oben.

Dazu ändern sich noch zwei Dinge. Bei einem als verdächtig eingestuften Thread bleibt die KI-Zusammenfassung verborgen, damit eine Phishing-Mail nie in unseren Worten wiedergegeben wird. Und wenn Sie einen Thread als Kein Spam markieren, kehrt er in Ihren Posteingang zurück und der Absender kommt auf die Vertrauensliste, damit die nächste Nachricht normal ankommt. Ihre eigenen Meldungen zu diesem Text nehmen Sie damit zurück.

Neben dem Filter läuft die KI-Einschätzung weiter, aber sie kann ein Urteil nur erhöhen, nie senken, und sie stuft nie selbst echte Mail als Spam ein. Der Filter selbst darf nie Mail kosten: ist er nicht erreichbar oder zu langsam, kommt die Nachricht genau so an wie zuvor.

#### Logo oder Foto beim Absender

Eingehende E-Mail zeigt das Gesicht des Absenders zu jeder Nachricht, in der Thread-Liste und im Lesefenster. MyCompanyDesk sucht an drei Stellen nach einem Logo oder Foto, in dieser Reihenfolge: das Logo, das die Domain des Absenders selbst über BIMI veröffentlicht (derselbe Mechanismus wie bei Gmail), das Gravatar-Foto, das zu der Adresse gehört, und das Icon der eigenen Website des Absenders. Bei kostenlosen Mail-Domains wie Gmail, Outlook und iCloud wird nur Gravatar abgefragt, damit nicht jeder Gmail-Absender dasselbe Gmail-Logo erhält.

Ein Logo erscheint nur bei einer Nachricht, die belegt, dass sie wirklich von dieser Domain stammt: Sie muss DMARC bestehen oder ein DKIM tragen, das mit der From-Domain übereinstimmt. Ein gefälschter Absender behält das neutrale Monogramm. Ein fehlendes Logo ist also der sichere Zustand, kein Mangel.

Suche und Abruf laufen vollständig auf unserem Server, nie in Ihrem Browser. Gravatar und die Website des Absenders erfahren dadurch nicht, wer welche E-Mail liest, und die Bilder werden anschließend neu verpackt und aus unserem eigenen Speicher ausgeliefert.

Ausgehende E-Mail zeigt das Foto der Person, die sie wirklich geschrieben hat: Ihres oder das eines Kollegen oder einer Kollegin aus der Mitgliederliste. Ältere ausgehende E-Mail ohne erfassten Verfasser zeigt in einem Ein-Personen-Workspace Ihr Foto und in einem Team das Monogramm.

#### Ihr Postfach in einer Mail-App verwenden

Sie verbinden ein MyCompanyDesk-Postfach mit einer gewöhnlichen Mail-App: **Einstellungen › E-Mail › Adressen und Versand**, öffnen Sie das Postfach und wählen Sie **Mail-App verbinden**. Das Fenster liefert alles, was die App verlangt: den eingehenden Server (IMAP), POP3 für Apps ohne IMAP, den ausgehenden Server (SMTP), den Benutzernamen (Ihre Postfachadresse) und ein App-Passwort.

Der Posteingang bleibt die Quelle der Wahrheit. Lesen, Senden, Ordner und Lesestatus bleiben mit Ihrem Posteingang in MyCompanyDesk synchron, in beide Richtungen: lesen Sie eine Nachricht in Ihrer Mail-App, gilt sie auch im Posteingang als gelesen, und E-Mail, die Sie aus der Mail-App senden, landet im richtigen Gespräch. Die Ordner stehen fest (Posteingang, Archiv, Gesendet, Entwürfe, Junk, Papierkorb) und erscheinen in Ihrer Mail-App unter den gewohnten Namen; Ordner anlegen oder umbenennen aus der Mail-App ist nicht möglich.

Das Fenster begleitet Sie pro Mail-App, mit einer Schritt-für-Schritt-Anleitung für Apple Mail, Outlook, die Gmail-App und Thunderbird. Für Apple-Geräte laden Sie ein Installationsprofil herunter, das die Servereinstellungen für Sie einträgt, und Thunderbird findet die Server von selbst. In der Gmail-App fügen Sie das Konto mit **Persönlich (IMAP)** hinzu; Gmail im Browser ruft keine anderen Konten ab, aber Sie verbinden ihn für das Senden.

Bei einer Domain, deren E-Mail bei MyCompanyDesk gehostet ist, trägt Outlook die Servereinstellungen von selbst ein: Namen wie `imap.` und `smtp.` unter Ihrer eigenen Domain werden zuerst probiert und verweisen dann auf unsere Server mit gültigem Zertifikat. Bietet Outlook die Einstellungen an, übernehmen Sie sie einfach. Trägt Ihre Domain diese Namen noch nicht, richten Sie das Konto von Hand ein: Die Outlook-Anleitung listet alle Felder auf, genau in der Reihenfolge, in der Outlook sie selbst zeigt, jeden mit Kopierschaltfläche, und sagt dazu, was hineingehört. Das Fenster **„Mail-App verbinden“** nennt weiterhin die gemeinsamen Namen (`imap.mycompanydesk.nl`); sie funktionieren für jedes Postfach, die Werte dort bleiben also eine sichere Rückfallposition. Eines verdient Ihre Aufmerksamkeit: Hat Outlook schon einen Servernamen eingetragen, prüfen Sie, ob ein Punkt dahinter steht, wie bei `imap.mycompanydesk.nl.`, und entfernen Sie diesen Punkt, sonst gelingt die Verbindung nicht.

Ein Passwort funktioniert, bis Sie es selbst widerrufen, also legen Sie eines pro Gerät an und widerrufen genau das Gerät, das sich falsch verhält; Widerrufen trennt die Verbindung zur Mail-App sofort. Ein Passwort besteht aus 16 Zeichen in vier Gruppen zu je vier, wie bei Apple und Google. Kopieren bleibt am einfachsten, aber Abtippen geht auch: Groß- und Kleinschreibung, Leerzeichen und Bindestriche spielen keine Rolle, für eingehend und ausgehend. Sie müssen es weder speichern noch sich merken. Fragt Ihre Mail-App später erneut nach einem Passwort, oder richten Sie ein anderes Gerät ein? Legen Sie dann einfach ein neues an und widerrufen Sie das alte. Ältere App-Passwörter, die lange Form, die mit mcd- begann, funktionieren unverändert weiter. Neben dem Passwort zeigt das Fenster einen QR-Code, den Sie mit der Kamera Ihres Telefons scannen, um das Passwort dort zu kopieren; der Code erscheint, wenn Sie das Passwort im Browser am Computer anlegen, nicht in der App auf dem Telefon selbst.

Gelingt die Anmeldung aus Ihrer Mail-App nicht, sagt das Fenster, woran es lag. Oben steht die zuletzt abgelehnte Anmeldung mit Tag und Uhrzeit und was zu tun ist, und bei jedem App-Passwort in der Liste steht die letzte Ablehnung mit einem kurzen Grund. Eine Ablehnung verschwindet, sobald die Anmeldung danach wieder gelingt. Die Gründe, die der Server melden kann: das Passwort wurde widerrufen (legen Sie unten ein neues Passwort an und tragen Sie es in Ihre Mail-App ein, für eingehend und ausgehend), im Passwort liegt ein Tippfehler (geben Sie es erneut in Ihrer Mail-App ein, oder legen Sie unten ein neues an), Ihre Mail-App verwendet Ihr altes Passwort oder Ihr MyCompanyDesk-Passwort statt eines App-Passworts, der Benutzername stimmt nicht (tragen Sie die vollständige Postfachadresse ein), Ihr Konto hat derzeit keinen Zugriff auf die Inbox, oder die Inbox ist für diese Domain ausgeschaltet.

Ob Lesen über IMAP und POP3 eingeschaltet ist, kann je nach Server unterschiedlich sein. Ist Lesen noch nicht verfügbar, sagt das Fenster das, und Senden können Sie trotzdem einrichten. POP3 holt nur den Posteingangsordner, darum ist IMAP die bessere Wahl, wenn Ihre App es unterstützt.

Etwas, das Sie bei POP3 wissen sollten: viele Apps löschen E-Mails vom Server, sobald sie sie abgeholt haben. Diese Unterhaltungen wandern dann hier in den Papierkorb und sind nach 30 Tagen weg. Nutzen Sie IMAP, wenn Ihre App es unterstützt, oder stellen Sie in Ihrer App ein, dass eine Kopie auf dem Server bleiben soll.

### Verkäufe

Wenn Sie Kauf-Buttons zu Preisstufen oder einem Produktblock auf Ihrer öffentlichen Website hinzufügen, erstellt jede abgeschlossene Zahlung einen Verkaufsdatensatz. Verfolgen Sie diese unter **Rechnungen › Website-Verkäufe** (`/invoices?view=website-sales`).

Was das Verkaufsprotokoll zeigt:

- Eine chronologisch sortierte Liste aller über Ihre Website getätigten Käufe.
- Den Zahlungsdienstleister (Mollie oder Stripe Connect) und den Zahlungsstatus (bezahlt, ausstehend, fehlgeschlagen, abgelaufen oder erstattet).
- Den ursprünglichen Abschnitt (welche Preisstufe oder welcher Produktblock gekauft wurde).
- Kunden-E-Mail, gezahlter Betrag und Währung.

Verkaufsdatensätze entstehen über den Checkout Ihrer öffentlichen Website, der den Abschnitt prüft, eine Zahlung über den verbundenen Dienstleister anlegt und den Käufer zur gehosteten Checkout-Seite weiterleitet.

Die Rechnung eines bezahlten Verkaufs hat einen Block **Bezahlt über Ihre Website** mit zwei Schaltflächen:

- **Rechnung neu erstellen.** Erstellt die verknüpfte Rechnung neu, falls sie verloren gegangen oder beim Kauf nicht generiert wurde. Auch sicher ausführbar, wenn die Rechnung bereits existiert.
- **Rückerstattung.** Überweist den vollen Betrag über den ursprünglichen Zahlungsdienstleister (Mollie oder Stripe) an den Kunden zurück. Eine Gutschrift wird automatisch gegen die verknüpfte Rechnung für Ihre Buchhaltung erstellt. Nur für bezahlte Verkäufe verfügbar.

### Ablauf nach dem Kauf

Wenn eine Zahlung abgeschlossen ist, führt die Plattform automatisch die folgenden Schritte aus. Alles läuft im Hintergrund: Fehler werden festgehalten und haben keinen Einfluss auf den Zahlungsstatus, den der Käufer sieht.

1. **Rechnung erstellt.** Eine Rechnung wird aus dem Verkauf erstellt, mit Produktname, Preis und der E-Mail des Käufers. Der Preis, den Sie im Editor festlegen, ist der endgültige Kundenpreis inklusive Mehrwertsteuer. Die Rechnungsposition teilt diesen in einen Netto-Betrag und den Mehrwertsteuersatz auf, den Sie in der Preisstufe oder dem Produktblock konfiguriert haben (Standard 21%). Wenn die E-Mail mit einem bestehenden Kunden in Ihrem Workspace übereinstimmt, wird die Rechnung diesem Kunden zugeordnet. Andernfalls wird ein minimaler Kundendatensatz erstellt. Die Rechnung wird sofort finalisiert (Status versendet), da die Zahlung bereits eingegangen ist.
2. **Zahlung verbucht.** Auf der Rechnung wird eine Zahlung verbucht. Die Zahlungsmethode ist der Dienstleister (Mollie oder Stripe), und die Referenz enthält dessen Zahlungsreferenz, sodass Sie die Zahlung immer wiederfinden.
3. **Kundenbestätigung.** Der Käufer erhält eine Bestätigungs-E-Mail mit Produktname, Betrag und Zahlungsmethode. Wenn eine Rechnung erstellt wurde, enthält die E-Mail einen gesicherten Portal-Link zum Anzeigen und Herunterladen des Rechnungs-PDFs.
4. **Inhaber benachrichtigt.** Sie erhalten eine In-App-Benachrichtigung und eine E-Mail-Zusammenfassung des Verkaufs: Produkt, Betrag, Kunden-E-Mail und einen direkten Link zur Rechnung.

Die Checkout-Erfolg- und Checkout-Abgebrochen-Seiten zeigen dem Käufer einen gebrandeten Ergebnisbildschirm, der die Design-Tokens (Farben) Ihrer Website verwendet, damit die Seite markenkonform bleibt.

## Sichtbarkeit des Posteingang-Tabs

Der Posteingang-Tab ist in der Seitenleiste und der unteren Navigationsleiste immer sichtbar. Auf Desk beschränkt sich der Posteingang auf das Lesen und Beantworten von Nachrichten; neue Nachrichten verfassen, eigene Postfächer und Domains gehören zu Office. Auf Office bleibt der Tab immer sichtbar, auch bevor eine Domain verbunden wurde, weil er der Einstieg in den Posteingang-Setup-Assistenten ist.

Für einen Workspace, der bereits eine Posteingang-fähige Domain eingerichtet hat, zeigt der Tab den echten Posteingang mit Ungelesen-Zählern und vollständigem Thread-Management. Für Office-Workspaces ohne Posteingang-Domain leitet ein Klick auf den Tab zu `/inbox/setup`, damit Sie Domain und Posteingang in einem Ablauf verbinden.

## E-Mails senden vs. E-Mails empfangen

Dieses Bundle ist die **Empfangsseite**. Ausgehende E-Mails (Rechnungsversand, Erinnerungen, Angebotsversand) werden von der breiteren E-Mail-Pipeline abgewickelt, die unter [E-Mail-Integration](/de/settings/email) beschrieben ist. Der Posteingang dient dem Empfang von Kunden-E-Mails und dem Verfassen von Antworten; er routet Ihre automatisierten Rechnungssendungen nicht. Die Rechnungszustellung folgt immer Ihrer gewählten Versandmethode unter [E-Mail-Integration](/de/settings/email) (Gmail, Outlook oder der integrierte Versender). Die DKIM-Signierung der Posteingangs-Domain wird für ausgehende Antworten verwendet, die Sie im Posteingang verfassen, nicht für automatisierte Transaktions-E-Mails.

## Grenzen und Fallstricke

- **Eine Website pro Unternehmen.** Das Hinzufügen einer eigenen Domain deaktiviert die Workspace-Subdomain. Sobald Sie die Domain entfernen, auf der Ihre Website läuft, fällt die Website von selbst zurück: auf eine andere aktive Website-Domain, wenn vorhanden, sonst auf die kostenlose mycompanydesk.site-Adresse.
- **Nur eine aktiver Posteingang pro Domain.** Die Plattform erlaubt nur einem Workspace gleichzeitig, auf einer Domain E-Mails zu empfangen. Wenn ein anderer Workspace bereits einen Posteingang auf `acme.de` aktiviert hat, wird Ihr Versuch, auf demselben Namen einen Posteingang zu aktivieren, blockiert. Websites und reine CNAME-Claims werden nicht blockiert; nur ein aktiver Posteingang ist exklusiv.
- **Sie können keine Zone beanspruchen, die ein anderer Workspace bereits hält.** Wenn Sie eine Domain im Nameserver-Modus hinzufügen, prüft die Plattform, ob die zugrundeliegende Cloudflare-Zone bereits für einen anderen Workspace live ist. Falls ja, wird das Hinzufügen mit einer klaren Fehlermeldung abgelehnt, damit Sie eine Domain nicht anhand fremder DNS-Einträge "verifizieren" können.
- **Das erneute Hinzufügen einer eigenen zuvor entfernten Domain funktioniert weiterhin.** Wenn Ihr Workspace eine Domain zuvor entfernt hat, kann die bestehende Zone für denselben Workspace wiederverwendet werden; die Prüfung blockiert nur, dass ein anderer Workspace sie übernimmt.
- **CNAME-Modus hat keine E-Mail.** E-Mail-Routing erfordert eine vollständige Cloudflare-Zone, die nur der Nameserver-Modus bietet.
- **Der Assistent verweigert das Überschreiben eines bestehenden Drittanbieter-MX.** Wenn Ihre Domain bereits auf Google Workspace oder Microsoft 365 zeigt, meldet der Assistent einen Konflikt und Sie müssen wählen: MX zu Cloudflare migrieren oder bei Ihrem bestehenden Anbieter bleiben und den gebündelten Posteingang überspringen.
- **Reservierte Subdomains.** `app`, `admin`, `api`, `www`, `mail`, `support`, `portal`, `dashboard` und eine Handvoll anderer sind auf Workspace-Slug-Ebene gesperrt.
- **Ihr Abo bestimmt, was Sie sehen.** Ist etwas nicht in Ihrem Abo enthalten, sehen Sie eine Upgrade-Schaltfläche anstelle des Editors.

## Verwandt

- [Einrichtungsassistent](/de/getting-started/company-setup): wählen Sie dort Website oder E-Mail, um mit diesem Ablauf zu beginnen.
- [E-Mail-Integration](/de/settings/email): ausgehende E-Mails, Send-From-Identitätsauswahl, Zustellverfolgung.
- [Website-Builder](/de/advanced/business-page): die vollständige Editor-Anleitung.
- [Unternehmenseinstellungen](/de/settings/company): Unternehmensdaten, Logo und Farbe.
- [Abonnement & Zahlungen](/de/settings/billing): was in Desk und Office enthalten ist.
