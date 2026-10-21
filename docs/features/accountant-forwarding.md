---
title: Doorsturen naar boekhouder
description: "Stuur facturen en uitgaven automatisch door naar het pakket van je boekhouder, zoals Exact, SnelStart, Twinfield of Yuki, in plaats van stuk voor stuk."
last_verified: 2026-10-21
---

# Doorsturen naar boekhouder

Als je boekhouder in een eigen pakket werkt, zoals Exact, SnelStart, Twinfield of Yuki, kun je MyCompanyDesk facturen en uitgaven automatisch laten doorsturen. Zo hoef je niet meer per stuk te mailen.

## Waar vind je het

Ga naar **Instellingen › Je boekhouder** (`/settings/boekhouder`). Onder de contactlijst staat een kaart **Automatisch doorsturen**.

Automatisch doorsturen zit in **Office**. Op Desk zie je op die plek een knop om over te stappen. Een los stuk met de hand naar je boekhouder sturen (zie hieronder) kan op elk abonnement, en boekhouder-toegang is ook op elk abonnement gratis.

## Wat je kunt instellen

Elk werkruimtelid kan de instellingen bekijken; alleen team-admins kunnen ze wijzigen.

| Instelling | Opties |
|---|---|
| **Boekhouder** | Kies een bestaand boekhoudercontact, of geen |
| **Verkoopfacturen** | Niet doorsturen, Zodra ik ze verstuur, of Zodra ze betaald zijn |
| **Uitgaven** | Niet doorsturen, of Zodra ik ze toevoeg |
| **Hoe vaak** | Direct, Dagelijks, Wekelijks op maandag, Maandelijks of Per kwartaal |
| **Alleen uitgaven met bon** | Houd uitgaven zonder bon tegen |
| **Bonnetjes meesturen als bijlage** | Bonnen als bijlage meesturen; een gefotografeerde bon gaat als A4-PDF mee |
| **Factuur-PDF meesturen** | De factuur-PDF bijvoegen |
| **Offertes ook meesturen** | Ook geaccepteerde offertes doorsturen |
| **Automatisch doorsturen** | Hoofdschakelaar |

De standaardcadans voor de meeste kantoren is wekelijks op maandag, omdat één gebundelde mail makkelijker te verwerken is dan een los bericht per record.

### Aftrekbaarheid in de export

Het bestand `uitgaven.csv` in de doorgestuurde export eindigt met een kolom waarin het aftrekspercentage van de categorie staat. Dat vervangt de oudere kolom "Aftrekbaar" met ja/nee: het percentage geeft de boekhouder precies aan welk deel van de btw aftrekbaar is, en op dezelfde regel staat nog steeds het aftrekbare btw-bedrag zodat de detailregel overeenkomt met het btw-overzicht.

De bijgevoegde `leesmij.txt` legt uit dat dit percentage maar een deel van het verschil verklaart tussen de btw op de bon en het bedrag dat in de aangifte wordt teruggevraagd. Andere factoren, zoals verlegde btw, buitenlandse btw of privégebruik, kunnen het aftrekbare bedrag ook beïnvloeden. Wil de boekhouder een regel controleren, dan kan hij die in de app openen om de btw-behandeling te zien.

### Bonplicht

Als **Alleen uitgaven met bon** aan staat, worden uitgaven zonder bon niet doorgestuurd. Ze blijven in de werkruimte staan en het aantal wordt vermeld in de doorstuurmail, zodat je weet wat er nog ontbreekt. Je boekhouder heeft de bon nodig om de btw terug te vragen, dus met deze schakelaar verlaat geen onvolledige administratie de werkruimte.

### Bonnen als PDF

Bonnen reizen als PDF mee, bij automatisch doorsturen en bij een handmatige verzending. Een bon die al een PDF is, gaat ongewijzigd mee. Een gefotografeerde bon wordt omgezet naar één A4-pagina, met leverancier, datum, bedrag en uitgavenummer in een grijze regel onderaan, onder een leesbare bestandsnaam zoals Bon_Janssen_2026-10-21_nr41.pdf. Dat is dezelfde PDF als de knop **Bon downloaden** bij een uitgave geeft. Lukt de omzetting van een foto niet, dan gaat het origineel mee.

## Rechten om instellingen te wijzigen

Alleen team-admins kunnen de keuzelijsten, selectievakjes en de hoofdschakelaar aanpassen. Niet-admins zien de huidige instellingen maar kunnen geen wijzigingen opslaan.

## Wat wordt doorgestuurd

Alleen records die klaar zijn voor een boekhouder verlaten de werkruimte:

- Niet verborgen voor de boekhouder.
- Niet in afwachting van controle (bank- of inboxposten die je nog niet hebt bevestigd).
- Niet in de prullenbak of gearchiveerd.
- Facturen moeten verstuurd zijn; conceptfacturen worden niet doorgestuurd.
- Als de bonplicht aan staat, moeten uitgaven een bon hebben.

Het doorsturen onthoudt tot welk moment alles is afgeleverd en neemt daarna alles mee wat erbij komt, dus een stuk wordt nooit gemist, ook niet als er later een nieuwe manier van betalen bijkomt.

## Afleverlog en activiteit

De pagina **Je boekhouder** houdt onder **Laatst verstuurd** een afleverlog bij met wat is doorgestuurd en wanneer. Daarnaast registreert het een activiteitsoverzicht van de gekoppelde boekhouder: wat deze heeft bekeken of gewijzigd in de werkruimte. Beide logs zijn zichtbaar voor eigenaars en team-admins; de boekhouder ziet het afleverlog maar kan het niet wissen.

## Handmatig doorsturen vanuit een record

Je kunt ook een losse factuur, uitgave of offerte direct vanaf de detailpagina naar je boekhouder sturen, op elk abonnement. Zoek de knop **Versturen naar boekhouder** bij de e-mailacties. Dit legt een handmatige aflevering vast in hetzelfde log, zodat je het naast automatisch doorsturen ziet. Mislukt een handmatige verzending, dan wordt dat ook gelogd, zodat je hetzelfde stuk niet per ongeluk twee keer verstuurt. Heeft de uitgave een bon, dan reist die als PDF mee: dezelfde omzetting als het automatisch doorsturen gebruikt.

## Verzonden-items

Handmatige verzendingen en andere werkruimte-e-mails verschijnen in het overzicht **Verzonden** in je inbox. Ze staan gegroepeerd onder de boekhouder-categorie, zodat je in een oogopslag ziet welke stukken de werkruimte al hebben verlaten.

## Gerelateerd

- [Mensen met toegang en je boekhouder](/settings/team) voor het uitnodigen van je boekhouder en het kiezen van een contact (in de app: **Instellingen › Je boekhouder**)
- [Facturen](/features/invoices) voor het versturen en beheren van verkoopfacturen
- [Uitgaven](/features/expenses) voor het toevoegen van bonnen en uitgaven
- [Offertes](/features/quotes) voor het maken en omzetten van offertes
