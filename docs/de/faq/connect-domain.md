---
title: "Eigene Domain verbinden und Nameserver"
description: "Domain von Hostinger oder anderswo verbinden: wo die zwei Nameserver stehen, welche Reihenfolge Ihre Mail schützt und wann Sie einen Auth-Code brauchen."
last_verified: 2026-09-24
chatbot:
  triggers: ["nameservers", "nameserver", "domein koppelen", "eigen domein", "hostinger", "dns", "verhuiscode", "domein verhuizen", "domein aansluiten", "connect domain", "name servers", "domain verbinden", "connecter mon domaine", "eigene domain", "domain verknüpfen", "nameserver ändern", "auth-code", "domain umziehen", "domain übertragen"]
  actions:
    - { label: "Zu Ihre Website und Domain", to: "/settings/domein" }
  follow_up: ["Kann ich meine alten E-Mails importieren?", "Wie veröffentliche ich meine Website?"]
---

# Eigene Domain verbinden und Nameserver

Mit Office verbinden Sie Ihren eigenen Domainnamen, etwa `ihrefirma.de`, mit MyCompanyDesk. Ihre Website und Ihre geschäftliche Mail laufen dann auf dieser Domain. Die Domain kann bei Ihrem bisherigen Anbieter bleiben, zum Beispiel bei Hostinger: Sie ändern dort nur die Nameserver.

## Wo verbinde ich meine Domain?

Gehen Sie zu **Einstellungen** → **Ihre Website und Domain**. Von **Website** → **Domain & E-Mail** gelangen Sie über **Verwalten** ebenfalls dorthin. Dort wählen Sie, wie Sie beginnen möchten:

- **Ich komme von einem anderen Anbieter:** Sie haben heute Mail und vielleicht eine Website bei Hostinger oder einem anderen Hoster. Dieser Assistent verbindet Ihre Domain, legt Ihre Postfächer an und übernimmt Ihre alte Mail. Das ist die beste Wahl, wenn Ihre Mail mit umzieht.
- **Ich habe bereits eine Domain:** Sie haben eine Domain, aber noch keine Mail, die mit umziehen muss. Wählen Sie danach **MyCompanyDesk alles überlassen** (empfohlen) und klicken Sie auf **Weiter**.
- **Domain zu uns umziehen:** Auch die Registrierung Ihrer Domain kommt zu MyCompanyDesk. Dafür brauchen Sie einen Auth-Code.
- **Ihre erste .nl-Domain ist kostenlos** oder **Freie Domain suchen:** wenn Sie noch keine Domain haben.

## Welche Nameserver trage ich ein?

Nachdem Sie Ihre Domain hinzugefügt haben, zeigt MyCompanyDesk zwei Nameserver an, im Schritt **Tragen Sie diese Daten bei Ihrem Domain-Anbieter ein**. Sie enden auf `ns.cloudflare.com` und sind für jede Domain anders. Übernehmen Sie also genau die beiden, die bei Ihrer Domain stehen. Sie finden sie auch später in der Karte **Ausstehende Domains** unter **Einstellungen** → **Ihre Website und Domain**.

Im Assistenten **Ich komme von einem anderen Anbieter** sehen Sie die Nameserver, wenn Sie im Umzugsschritt **Ich möchte meine Domain nicht umziehen** wählen.

## Nameserver bei Hostinger ändern

1. Melden Sie sich bei Hostinger (hPanel) an und öffnen Sie **Domains**.
2. Wählen Sie Ihre Domain und gehen Sie zu **DNS / Nameserver**.
3. Wählen Sie **Nameserver ändern** und danach eigene (benutzerdefinierte) Nameserver.
4. Ersetzen Sie die Nameserver durch die beiden von MyCompanyDesk und speichern Sie.

Die Menünamen bei Hostinger können leicht abweichen.

Bei anderen Anbietern heißt die Einstellung meist ebenfalls „Nameserver“ oder „DNS-Server“. Suchen Sie die Einstellung für die Nameserver und ersetzen Sie die Einträge durch die beiden Adressen.

MyCompanyDesk prüft danach selbst, ob es geklappt hat. Mit **Jetzt prüfen** sehen Sie sofort nach. Meist dauert es weniger als eine Stunde, manchmal bis zu einem Tag. Sobald Ihre Domain **Aktiv** ist, erhalten Sie eine Nachricht.

## In welcher Reihenfolge, damit meine Mail weiter funktioniert?

Ändern Sie die Nameserver erst, wenn Ihre Mail bei uns bereitsteht. Sonst kommt keine Mail mehr an, bis Sie die E-Mail bei uns einschalten.

1. Verbinden Sie Ihre Domain. Muss Mail mit umziehen, nutzen Sie den Assistenten **Ich komme von einem anderen Anbieter**: Er legt Ihre Postfächer gleich an und übernimmt Ihre alte Mail.
2. Verbinden Sie Ihre Domain über **Ich habe bereits eine Domain**, klicken Sie zuerst in der Karte **E-Mail** auf **E-Mail aktivieren** und legen Sie Ihre Postfächer an. Sie sehen dann den Hinweis, dass Ihr Postfach bereitsteht und Mail auf dieser Domain funktioniert, sobald Ihre Nameserver auf uns zeigen.
3. Soll auch Ihre Website auf die Domain, veröffentlichen Sie sie bei MyCompanyDesk (siehe [Website veröffentlichen und online stellen](/de/faq/publish-website)) und schalten Sie sie auf Ihrer Domain frei über **Website** → **Domain & E-Mail** → **Website auf dieser Domain live schalten**.
4. Ändern Sie erst jetzt die Nameserver bei Ihrem Anbieter.

Sobald Ihre Domain aktiv ist, richtet MyCompanyDesk die Mail-Einstellungen (etwa die MX-Einträge) automatisch richtig ein. Kündigen Sie Ihr Paket beim alten Hoster erst, wenn Ihre gesamte Mail übernommen ist.

Achtung: Einstellungen, die Sie bei Ihrem alten Hoster hatten, etwa eine Website dort oder andere DNS-Einträge, übernehmen wir nicht. Liegt Ihre Website noch bei Ihrem alten Hoster, ist sie nach dem Ändern der Nameserver über Ihre Domain nicht mehr erreichbar. Richten Sie Ihre Website deshalb bei MyCompanyDesk ein, bevor Sie die Nameserver ändern.

## Brauche ich einen Auth-Code?

Nein, nicht für Ihre Mail oder Ihre Website. Die Nameserver zu ändern genügt. Den Auth-Code (auch Autorisierungscode oder EPP-Code) brauchen Sie nur, wenn Sie auch die Registrierung Ihrer Domain zu MyCompanyDesk umziehen möchten, damit Sie die Domain nicht mehr bei Ihrem alten Anbieter bezahlen. Bei Hostinger heißt dieser Code „Authorization code“ und steht unter **Domains** → **Verwalten**. Schalten Sie auf demselben Bildschirm auch die Transfersperre (Transfer Lock) aus. Der Umzug einer `.nl`-Domain ist kostenlos.

## Siehe auch

- [Alte E-Mails importieren](/de/faq/import-old-mail)
- [Website veröffentlichen und online stellen](/de/faq/publish-website)
- [Domains, Website und Posteingang](/de/features/domains-website-inbox)
