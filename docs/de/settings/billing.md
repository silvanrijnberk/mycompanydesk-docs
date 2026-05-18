---
title: "Abrechnung & Tarife"
---

# Abrechnung & Tarife

Verwalten Sie Ihr MyCompanyDesk-Abonnement, sehen Sie Ihre Nutzung ein und fuhren Sie ein Upgrade Ihres Tarifs durch.

## Founding Members

MyCompanyDesk bietet ein Founding-Members-Programm fur die ersten 100 Arbeitsbereiche, die sich wahrend der Startphase anmelden. Ein Founding Member erhalt den Pro-Tarif lebenslang kostenlos, ohne Ablaufdatum und ohne Zahlungsmethode.

### So funktioniert es

- Das Programm ist auf **100 Platze** uber alle Arbeitsbereiche hinweg begrenzt.
- Nach dem Claim ist Ihr Arbeitsbereich dauerhaft auf Pro upgegradet. Das Abonnement zeigt ein "Founding Member"-Badge im Abrechnungsbereich.
- Jeder Arbeitsbereich kann nur einen Platz beanspruchen. Von derselben IP-Adresse darf ebenfalls nur ein Platz geclaimt werden (Missbrauchspravention).
- Das Claimen ist endgultig. Es gibt keine Testphase oder Verlangerung; der Pro-Tarif bleibt unbegrenzt aktiv.

### Einen Platz claimen

Sie konnen auf zwei Arten einen Founding-Member-Platz beanspruchen:

**Uber die Abrechnungsseite.** Wenn noch Platze verfugbar sind, zeigt die Abrechnungsseite eine Founding-Member-Claim-Karte. Klicken Sie auf **Platz claimen**, um Ihren Platz zu reservieren. Das Upgrade wird sofort wirksam.

**Uber die Landingpage.** Der CTA auf der Landingpage verlinkt auf das Registrierungsformular mit einer Founding-Member-Absicht. Wenn Sie sich uber diesen Weg anmelden:

1. Das Registrierungsformular merkt sich Ihre Absicht im lokalen Speicher.
2. Nach der E-Mail-Bestatigung und Anmeldung wird Ihr Platz automatisch im Hintergrund geclaimt.
3. Ein Bestatigungstoast zeigt an, ob der Claim erfolgreich war. Wenn die Platze voll waren, bevor Sie die Registrierung abgeschlossen haben, erhalten Sie trotzdem eine 60-tagige Pro-Testphase.

Einmal geclaimt ist der Claim endgultig und der Arbeitsbereich behalt Pro lebenslang kostenlos. Wenn der automatische Claim fehlschlagt (Platze voll, IP bereits von einem anderen Arbeitsbereich verwendet oder Netzwerkfehler), wird der Claim nicht erneut versucht. Sie konnen weiterhin auf der Abrechnungsseite nachsehen und manuell claimen, falls noch Platze vorhanden sind.

Founding-Member-Arbeitsbereiche sind in jeder Hinsicht normale Pro-Kunden: dieselben Funktionen, dieselben Limits. Der einzige Unterschied ist die Abonnement-Quelle ("intern") und das Badge in der Abrechnung.

## Tarife

MyCompanyDesk hat zwei kostenpflichtige Tarife plus einen Gratis-Status, der nur fur abgelaufene, gekundigte oder testphasen-abgelaufene Arbeitsbereiche existiert. Gratis wird bei der Anmeldung nicht angeboten; neue Kunden erhalten eine 60-tagige Pro-Testphase. Tarifdefinitionen befinden sich in `apps/api/src/modules/billing/plans.config.js`.

| Tarif | Monatlich | Jahrlich | Beschreibung |
|---|---|---|---|
| **Starter** | 10,00 EUR | 100,00 EUR | Fur Freiberufler, die Rechnungen, Ausgaben und eine offentliche Unternehmensseite benotigen |
| **Pro** | 25,00 EUR | 250,00 EUR | Das Komplettpaket: alles an, Inbox, Multi-Domain, API und erweiterbar mit zusatzlichen Nutzern |

Pro ist der hervorgehobene (empfohlene) Tarif in der Auswahl. Der Gratis-Status (`plan_key: "free"`) existiert als Landing-Zone fur Downgrade-Pfade und historische Konten, ist aber auf der Preisseite und im Anmeldeprozess ausgeblendet.

### Was jeder Tarif enthalt

Funktionen mit Nutzungslimits (monatliche Limits):

| Metrik | Gratis | Starter | Pro |
|---|---|---|---|
| Erstellte Rechnungen | 5 | unbegrenzt | unbegrenzt |
| Erstellte Ausgaben | 10 | unbegrenzt | unbegrenzt |
| Erstellte Angebote | 3 | unbegrenzt | unbegrenzt |
| Speicher | 100 MB | 2 GB | unbegrenzt |
| Teammitglieder | 1 | 1 | 1 (erweiterbar mit Sitz-Add-ons) |
| Eigene Domains | 0 | 0 | 5 |
| KI-Chat-Nachrichten (monatlich) | 10 | 100 | 1 000 |
| KI-Belegscans (monatlich) | 3 | 50 | 500 |
| KI-Vorschlage (monatlich) | 10 | 200 | 2 000 |
| Inbox-Postfacher | 0 | 0 | unbegrenzt |
| Inbox gesendet pro Monat | 0 | 0 | 15 000 |
| Inbox empfangen pro Monat | 0 | 0 | 20 000 |

Hinweis: KI-Limits gelten monatlich, nicht taglich. Sie werden am Ersten jedes Kalendermonats zuruckgesetzt.

Boolsche Funktionen pro Tarif:

| Funktion | Gratis | Starter | Pro |
|---|---|---|---|
| `invoices`, `expenses`, `quotes`, `attachments` | ja | ja | ja |
| `exports_pdf` | ja | ja | ja |
| `exports_excel` | nein | ja | ja |
| `custom_branding` | nein | ja | ja |
| `recurring_invoices`, `recurring_expenses` | nein | ja | ja |
| `receipt_scanning`, `language_tools` | nein | ja | ja |
| `time_registration`, `assistant_chat` | nein | ja | ja |
| `description_enrichment` | nein | ja | ja |
| `ai_insights` | nein | ja | ja |
| `public_business_page` | nein | ja | ja |
| `company_subdomain`, `style_presets` | nein | ja | ja |
| `contracts`, `properties`, `projects` | nein | nein | ja |
| `team_members`, `advanced_reports` | nein | nein | ja |
| `custom_domains`, `custom_domain_routing` | nein | nein | ja |
| `custom_domain_full_website` | nein | nein | ja |
| `inbox`, `privacy_mode`, `newsletter` | nein | nein | ja |
| `api_access`, `webhooks`, `priority_support` | nein | nein | ja |
| `advanced_permissions` | nein | nein | ja |
| `bank_connections` | nein | nein | ja |
| `e2b_realtime_classification` | nein | ja | ja |

Die vollstandige Funktionsliste befindet sich in `FEATURE_KEYS` in `plans.config.js`.

### Sitz-Add-ons

Pro ist ein Einzelnutzer-Produkt. Zusatzliche Nutzer werden uber die Tabelle `workspace_seat_addons` erworben (Stripe mengenbasierte Add-on, separat pro Sitz abgerechnet). Das `team_members`-Feature-Flag steuert, ob Team-Funktionalitat verfugbar ist; die effektive Sitzanzahl stammt aus dem Add-on-Datensatz.

## Stripe-Portal

Die Schaltflache **Abonnement verwalten** (sichtbar, wenn der Arbeitsbereich eine aktive Periode oder einen Nicht-Gratis-Tarif hat) ruft `POST /api/billing/portal` auf und gibt eine einmalige Stripe-Customer-Portal-URL zuruck. Uber das Portal konnen Sie:

- Zahlungsmethode aktualisieren
- Rechnungen und Belege herunterladen
- Rechnungsadresse andern
- Abonnement kundigen

Die Kundigung wird am Ende des aktuellen Zahlungszeitraums wirksam; der Zugriff bleibt bis dahin erhalten.

## Checkout-Ablauf

1. Klicken Sie auf **Upgrade** auf einer Tarifkachel
2. Das Frontend ruft `POST /api/billing/checkout` auf und erhalt eine Stripe-Checkout-URL
3. Stripe leitet mit `?checkout=success` oder `?checkout=canceled` zuruck
4. Die Seite zeigt ein Erfolgs- oder Abbruch-Banner; der Berechtigungscache wird entwertet und gesperrte UI wird sofort entsperrt

Bei einem Upgrade auf Pro erhalt das Erfolgsbanner den violetten Pro-Akzent und ein Kronen-Symbol ("Willkommen bei Pro") anstelle der standardmassig grunen Bestatigung. Die gleiche Pro-Gestaltung finden Sie an weiteren Stellen in der App: ein violetter Ring um Ihren Avatar, ein Kronen-Symbol im Plan-Badge und "Pro-Feature"-Pills auf Pro-geschutzten Einstellungsseiten wie API-Schlussel und Inbox.

## Kontextbezogener Upgrade-Banner

Wenn Sie von einer gesperrten Funktion auf die Abrechnungsseite gelangen (die Feature-Flag-Middleware leitet mit `?upgrade=<feature>` weiter), zeigt die Seite einen Banner mit "Sie sind wegen X hier -- das schaltet es frei" anstelle eines generischen Tarif-Pitches.

## Verwandte Themen

- [Unternehmenseinstellungen](/de/settings/company) -- `public_business_page` und `custom_domains` werden hier gesteuert
- [E-Mail](/de/settings/email) -- `inbox` erfordert Pro
- [Team](/de/settings/team) -- `team_members` erfordert Pro
