---
title: Bedrijfsinstellingen
last_verified: 2026-07-02
---

# Bedrijfsinstellingen

Alles wat bepaalt hoe je bedrijf er naar buiten toe uitziet: de naam op je facturen, je logo en huisstijlkleur, en je publieke website.

## Waar vind je het

Open **Instellingen** via het menu, of ga naar `/settings`. Bedrijfsonderwerpen zijn rijen in de groep **Je bedrijf**:

- **Bedrijfsgegevens** op `/settings/bedrijfsgegevens`: bedrijfsinformatie, adres, KVK-nummer, BTW-nummer
- **Logo en kleur** op `/settings/uiterlijk`: logo, huisstijlkleur, documentstijl
- **Factuurontwerp** op `/settings/factuurontwerp`: de ontwerpstudio voor je facturen, beschreven op [PDF-aanpassing](/nl/settings/pdf)

Oude links naar de vroegere werkruimte-instellingen verwijzen automatisch door naar de nieuwe plek.

## Bedrijfsgegevens

Pad: `/settings/bedrijfsgegevens`

Het identiteitsformulier. Wat elke factuur, offerte en e-mail toont.

- **Bedrijfsnaam**: verschijnt op elk document
- **Adres**: straat, postcode, plaats, land (met adresaanvulling)
- **Registratie**: KVK-nummer of ander registratienummer. De knop **Ophalen uit KVK** haalt de laatste gegevens uit het Handelsregister en vult lege velden in (bedrijfsnaam, adres, postcode, plaats, land). Velden die je zelf al hebt ingevuld blijven staan. Elke werkruimte heeft 100 gratis KVK-zoekopdrachten per dag (resultaten uit de cache tellen niet mee). Bij 20 of minder resterende zoekopdrachten toont de veldhint een teller met het aantal dat je nog over hebt. Is de daglimiet bereikt, dan kun je de gegevens handmatig invullen of het morgen opnieuw proberen.
- **BTW-nummer**: je BTW-id (bijv. `NL123456789B01`)
- **Contact**: publiek e-mailadres, telefoon, support-e-mailadres
- **Website + social media**: gebruikt in de e-mailhandtekening, op je bedrijfspagina en in footers

Wijzigingen worden automatisch opgeslagen.

## Logo en kleur

Pad: `/settings/uiterlijk`

De huisstijl voor facturen, offertes en uitgaande e-mail, met een livevoorbeeld van het resultaat.

- **Logo uploaden**: gebruikt op elke PDF en in de e-mailheader
- **Huisstijlkleur**: een accentkleur voor al je documenten en je publieke bedrijfspagina
- **Stijlen**: kies een documentstijl, beschikbaar vanaf Starter
- **PDF-voettekst**: de voettekst onderaan je documenten

Er is een stijl en een huisstijlkleur voor alle documenttypes; een tweede accentkleur bestaat niet meer. Wil je de opmaak, kleuren en het lettertype van je facturen en offertes helemaal zelf bepalen? Open dan de rij **Factuurontwerp** (de ontwerpstudio); zie [PDF-aanpassing](/nl/settings/pdf).

## Je website

Je publieke bedrijfspagina beheer je in het aparte onderdeel **Website** in de navigatie, niet onder Instellingen. Het heeft eigen pagina's: **Pagina's**, **Stijl**, **Domein & SEO** en **Koppelingen**.

- De website is beschikbaar vanaf het Starter-abonnement.
- Je eigen domein koppelen, in plaats van het standaard `mycompanydesk.com`-subdomein, vereist Pro. DNS-, SPF- en DKIM-records worden voor je beheerd; ze staan achter een geavanceerd-strookje dat de meeste gebruikers nooit hoeven te openen.

## Gerelateerd

- [PDF-aanpassing](/nl/settings/pdf) voor de ontwerpstudio Factuurontwerp
- [Abonnement en betalingen](/nl/settings/billing) om een eigen domein te ontgrendelen
- [E-mailinstellingen](/nl/settings/email) om vanaf je eigen domein te versturen
- De installatiewizard op `/setup` loopt met nieuwe werkruimtes in een keer door deze instellingen heen
