---
title: Doorsturen naar boekhouder
last_verified: 2026-08-04
---

# Doorsturen naar boekhouder

Als je boekhouder in een eigen pakket werkt, zoals Exact, SnelStart, Twinfield of Yuki, kun je MyCompanyDesk facturen en uitgaven automatisch laten doorsturen. Zo hoef je niet meer per stuk te mailen.

## Waar vind je het

Ga naar **Instellingen** > **Toegang en boekhouder** (`/settings/team`) en open het onderdeel **Boekhouder**. Onder de contactlijst staat een kaart **Automatisch doorsturen**.

## Wat je kunt instellen

De kaart leest uit en schrijft naar `/api/team/accountant-delivery`. Elk werkruimtelid kan de instellingen bekijken; alleen team-admins kunnen ze wijzigen.

| Instelling | Opties |
|---|---|
| **Ontvanger** | Kies een bestaand boekhoudercontact, of geen |
| **Verkoopfacturen** | Uit, zodra verstuurd, of zodra betaald |
| **Uitgaven** | Uit, of zodra toegevoegd |
| **Hoe vaak** | Direct, dagelijks, wekelijks (maandag), maandelijks of per kwartaal |
| **Alleen uitgaven met bon** | Houd uitgaven zonder bon tegen |
| **Bonnetjes meesturen** | Bonafbeeldingen als bijlage meesturen |
| **Factuur-PDF meesturen** | De factuur-PDF bijvoegen |
| **Offertes ook meesturen** | Ook geaccepteerde offertes doorsturen |
| **Automatisch doorsturen staat aan** | Hoofdschakelaar |

De standaardcadans voor de meeste kantoren is wekelijks op maandag, omdat één gebundelde mail makkelijker te verwerken is dan een los bericht per record.

### Bonplicht

Als **Alleen uitgaven met bon** aan staat, worden uitgaven zonder bon niet doorgestuurd. Ze blijven in de werkruimte staan en het aantal wordt vermeld in de doorstuurmail, zodat je weet wat er nog ontbreekt. Je boekhouder heeft de bon nodig om de btw terug te vragen, dus met deze schakelaar verlaat geen onvolledige administratie de werkruimte.

## Rechten om instellingen te wijzigen

Alleen team-admins kunnen de keuzelijsten, selectievakjes en de hoofdschakelaar aanpassen. Niet-admins zien de huidige instellingen maar kunnen geen wijzigingen opslaan.

## Wat wordt doorgestuurd

Alleen records die klaar zijn voor een boekhouder verlaten de werkruimte:

- Niet verborgen voor de boekhouder.
- Niet in afwachting van controle (bank- of inboxposten die je nog niet hebt bevestigd).
- Niet in de prullenbak of gearchiveerd.
- Facturen moeten verstuurd zijn; conceptfacturen worden niet doorgestuurd.
- Als de bonplicht aan staat, moeten uitgaven een bon hebben.

De engine werkt op basis van een watermerk (`last_delivered_at`), niet op losse status-hooks, dus een record wordt nooit gemist omdat er later een nieuw betaalpad bijkomt.

## Afleverlog en activiteit

De pagina **Toegang en boekhouder** houdt een afleverlog bij met wat is doorgestuurd en wanneer. Daarnaast registreert het een activiteitsoverzicht van de gekoppelde boekhouder: wat deze heeft bekeken of gewijzigd in de werkruimte. Beide logs zijn zichtbaar voor eigenaars en team-admins; de boekhouder ziet het afleverlog maar kan het niet wissen.

## Gerelateerd

- [Toegang en boekhouder](/nl/settings/team) voor het uitnodigen van je boekhouder en het kiezen van een contact
- [Facturen](/nl/features/invoices) voor het versturen en beheren van verkoopfacturen
- [Uitgaven](/nl/features/expenses) voor het toevoegen van bonnen en uitgaven
