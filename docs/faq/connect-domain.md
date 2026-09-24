---
title: "Eigen domein koppelen en nameservers"
description: "Eigen domein van Hostinger of elders koppelen: waar je de twee nameservers vindt, de juiste volgorde voor je mail en wanneer je een verhuiscode nodig hebt."
last_verified: 2026-09-24
chatbot:
  triggers: ["nameservers", "nameserver", "domein koppelen", "eigen domein", "hostinger", "dns", "verhuiscode", "domein verhuizen", "domein aansluiten", "connect domain", "name servers", "domain verbinden", "connecter mon domaine"]
  actions:
    - { label: "Naar Je website en domein", to: "/settings/domein" }
  follow_up: ["Kan ik mijn oude e-mails importeren?", "Hoe publiceer ik mijn website?"]
---

# Eigen domein koppelen en nameservers

Met Office koppel je je eigen domeinnaam, zoals `jouwbedrijf.nl`, aan MyCompanyDesk. Dan draaien je website en je zakelijke mail op dat domein. Je domein mag gewoon bij je huidige aanbieder blijven staan, zoals Hostinger: je hoeft alleen de nameservers te wijzigen.

## Waar koppel ik mijn domein?

Ga naar **Instellingen** → **Je website en domein**. Vanuit **Website** → **Domein & e-mail** kom je er ook, via **Beheer**. Je kiest daar hoe je wilt beginnen:

- **Ik kom van een andere hoster:** je hebt nu mail en misschien een website bij Hostinger of een andere hoster. Deze wizard koppelt je domein, maakt je postbussen aan en zet je oude mail over. Dit is de beste keuze als je mail meeverhuist.
- **Ik heb al een domein:** je hebt een domein, maar nog geen mail die mee moet. Kies daarna **Laat MyCompanyDesk alles regelen** (aanbevolen) en klik op **Volgende**.
- **Verhuis je domein naar ons:** ook de registratie van je domein komt naar MyCompanyDesk. Hiervoor heb je een verhuiscode nodig.
- **Je eerste .nl-domein is gratis** of **Zoek een vrije domeinnaam:** als je nog geen domein hebt.

## Welke nameservers vul ik in?

Na het toevoegen van je domein toont MyCompanyDesk twee nameservers, bij de stap **Zet deze gegevens bij je domein-aanbieder**. Ze eindigen op `ns.cloudflare.com` en zijn per domein anders, dus neem precies de twee over die bij jouw domein staan. Je vindt ze ook later terug in de kaart **Bezig met instellen** op **Instellingen** → **Je website en domein**.

In de wizard **Ik kom van een andere hoster** zie je de nameservers als je bij de verhuisstap kiest voor **Ik wil mijn domein niet verhuizen**.

## Nameservers wijzigen bij Hostinger

1. Log in bij Hostinger (hPanel) en open **Domeinen**.
2. Kies je domein en ga naar **DNS / Nameservers**.
3. Kies **Nameservers wijzigen** en daarna voor eigen (aangepaste) nameservers.
4. Vervang de nameservers door de twee van MyCompanyDesk en sla op.

De namen van de menu's bij Hostinger kunnen iets afwijken.

Bij andere aanbieders heet het vaak ook "Nameservers" of "DNS-servers". Zoek de instelling met de naam nameservers en vervang wat er staat door de twee adressen.

Daarna controleert MyCompanyDesk vanzelf of het gelukt is. Met **Controleer nu** kijk je direct. Het duurt meestal minder dan een uur, soms tot een dag. Zodra je domein **Actief** is, krijg je bericht.

## In welke volgorde, zodat je mail blijft werken?

Wijzig je nameservers pas als je mail bij ons klaarstaat. Anders komt er geen mail meer binnen tot je e-mail bij ons aanzet.

1. Koppel je domein. Gebruik bij mail die mee moet de wizard **Ik kom van een andere hoster**: die maakt je postbussen meteen aan en zet je oude mail over.
2. Koppel je je domein via **Ik heb al een domein**, zet dan eerst in de kaart **E-mail** op **Zet e-mail aan** en maak je postbussen aan. Je ziet "Je postbus staat klaar. Mail op dit domein gaat werken zodra je nameservers naar ons wijzen."
3. Moet je website ook op het domein komen, publiceer hem dan bij MyCompanyDesk (zie [Website publiceren en online zetten](/faq/publish-website)) en zet hem aan op je domein via **Website** → **Domein & e-mail** → **Zet je website live op dit domein**.
4. Wijzig nu pas de nameservers bij je aanbieder.

Zodra je domein actief is, zet MyCompanyDesk de mailinstellingen (zoals de MX-records) automatisch goed. Zeg je pakket bij je oude hoster pas op als al je mail is overgezet.

Let op: instellingen die je bij je oude hoster had, zoals een website daar of andere DNS-records, nemen we niet over. Staat je website nu nog bij je oude hoster, dan is die na het wijzigen van de nameservers niet meer bereikbaar via je domein. Zet daarom je website bij MyCompanyDesk klaar voordat je de nameservers wijzigt.

## Heb ik een verhuiscode nodig?

Nee, niet voor je mail of je website. Nameservers wijzigen is genoeg. De verhuiscode (ook wel autorisatiecode of EPP-code) heb je alleen nodig als je ook de registratie van je domein naar MyCompanyDesk wilt verhuizen, zodat je het domein niet meer bij je oude aanbieder betaalt. Bij Hostinger heet die code "Authorization code" en vind je hem onder **Domeinen** → **Beheren**. Zet op hetzelfde scherm ook de transfer lock uit. Een `.nl`-domein verhuizen is gratis.

## Zie ook

- [Oude e-mails importeren](/faq/import-old-mail)
- [Website publiceren en online zetten](/faq/publish-website)
- [Domeinen, website en inbox](/features/domains-website-inbox)
