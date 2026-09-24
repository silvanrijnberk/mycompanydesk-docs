---
title: "Oude e-mails importeren"
description: "Zet je oude mail over van Hostinger of een andere provider naar je MyCompanyDesk-inbox, met mappen, verzonden mail en de oorspronkelijke datums."
last_verified: 2026-09-24
chatbot:
  triggers: ["oude e-mails importeren", "oude mail importeren", "mail overzetten", "mail verhuizen", "e-mail importeren", "hostinger mail", "postbus overzetten", "import email", "migrate email", "e-mails importieren", "importer mes e-mails"]
  actions:
    - { label: "Naar Adressen", to: "/inbox/settings" }
    - { label: "Naar Je website en domein", to: "/settings/domein" }
  follow_up: ["Hoe koppel ik mijn eigen domein?", "Welke nameservers moet ik bij Hostinger invullen?"]
---

# Oude e-mails importeren

Ja, je kunt je oude e-mails overzetten naar de inbox van MyCompanyDesk, bijvoorbeeld van Hostinger, TransIP, Gmail, Outlook of een andere provider. Dat kan op twee manieren. Voor beide heb je Office nodig, want de inbox op je eigen domein hoort bij Office.

## Je verhuist je domein en mail van Hostinger of een andere hoster

Gebruik dan de wizard **Ik kom van een andere hoster**. Die regelt alles in één keer: je domein koppelen, je postbussen aanmaken en je oude mail overzetten.

1. Ga naar **Instellingen** → **Je website en domein**.
2. Kies **Ik kom van een andere hoster**.
3. Vul je domeinnaam in en klik op **Beginnen**.
4. Vul elk e-mailadres in dat je bij je oude hoster had, met het wachtwoord van die postbus. Elk adres krijgt bij ons een eigen postbus.
5. Vink aan dat we je wachtwoord versleuteld mogen bewaren tot de verhuizing rond is, en klik op **Verbinden en overzetten**.

De wizard haalt je oude mail meteen op. Nadat je domein naar ons is overgezet, haalt hij nog een keer op wat er intussen binnenkwam, en 48 uur later een laatste keer. Daarna wissen we je wachtwoord, en uiterlijk na veertien dagen in elk geval. Zeg je pakket bij je oude hoster pas op als de wizard zegt dat het kan.

## Je hebt al een postbus bij ons en wilt alleen oude mail overzetten

1. Open **Inbox** en kies bovenin **Adressen**.
2. Ga naar de kaart **Bestaande postbus overzetten**.
3. Kies je **Vorige provider**. Voor Hostinger staat de server al goed (`imap.hostinger.com`, poort 993).
4. Kies bij **Postbus bij ons** in welke postbus de mail moet komen.
5. Vul het e-mailadres en het wachtwoord van je oude postbus in.
6. Klik op **Verbinding testen**, kies welke mappen mee moeten en klik op **Overzetten starten**.

Je ziet per map hoe ver het is. Als het klaar is, zie je hoeveel berichten er zijn overgezet en tot en met welke datum. Bij Gmail, Microsoft, iCloud en Yahoo heb je een app-wachtwoord van die provider nodig in plaats van je gewone wachtwoord.

## Wat komt er mee?

- **Mappen:** Postvak in, Verzonden, Archief en je eigen mappen staan standaard aan. Concepten, Ongewenst en Prullenbak kun je zelf aanvinken. De mappen worden gesprekken in je inbox, geen losse mappen.
- **Verzonden mail:** ja, die komt mee als uitgaande mail.
- **Datums:** elke mail houdt zijn oorspronkelijke datum.
- **Gelezen of ongelezen:** blijft zoals het was.
- **Bijlagen:** gaan mee. Alleen berichten groter dan 40 MB worden overgeslagen.
- **Dubbele berichten:** worden overgeslagen, dus je kunt het overzetten gerust nog een keer doen.

Overgezette mail geeft geen meldingen en telt niet mee voor je maandelijkse limiet.

## Let op: de bewaartermijn kan oude mail verwijderen

Elke postbus kan een **Bewaartermijn (dagen)** hebben. Gesprekken waarvan het laatste bericht ouder is dan die termijn, worden automatisch verwijderd. Omdat overgezette mail zijn oude datum houdt, verdwijnt oude mail dan al bij de volgende dagelijkse opschoning.

Standaard staat er geen bewaartermijn en blijft alles bewaard. Heb je er zelf een ingesteld, zet hem dan eerst leeg voordat je gaat importeren: klik op **Inbox** → **Adressen** bij de postbus op het potloodje en maak **Bewaartermijn (dagen)** leeg. Bij het overzetten waarschuwt MyCompanyDesk je ook als er een bewaartermijn aan staat.

## Zie ook

- [Eigen domein koppelen en nameservers](/faq/connect-domain)
- [Domeinen, website en inbox](/features/domains-website-inbox)
