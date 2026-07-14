---
title: Cookies en analytics
last_verified: 2026-07-14
---

# Cookies en analytics

Op deze pagina lees je hoe MyCompanyDesk omgaat met cookies, lokale opslag en analytics. Het geldt zowel voor de publieke marketingwebsite (mycompanydesk.nl / mycompanydesk.com) als voor de webapp.

## Marketingwebsite

De marketingwebsite toont een cookietoestemmingsbanner bij je eerste bezoek. Die banner vraagt of we analytics-opslag mogen plaatsen. Je kunt je keuze later altijd aanpassen via de banner.

Als je akkoord gaat, slaat de site een anonieme analytics-id op in de `localStorage` van je browser onder de sleutel `mcd_phid`. Deze id wordt alleen gebruikt om te begrijpen hoe bezoekers door de site navigeren. Hij is niet gekoppeld aan je account of e-mailadres.

Als je weigert, of als je browser een Do Not Track (DNT)-signaal stuurt, wordt er geen analytics-id opgeslagen. De banner kan nog steeds verschijnen, omdat hij ook niet-analytics-cookies behandelt.

## Van marketingwebsite naar app

Als je vanuit de marketingwebsite naar de app klikt, kan de marketingwebsite een kortstondige `phid`-parameter toevoegen. De app verwijdert deze parameter meteen na het laden en houdt hem niet in de URL. Hij wordt alleen gebruikt om hetzelfde anonieme bezoek te koppelen aan de appsessie, zodat we kunnen zien of de site mensen helpt zich aan te melden.

De parameter wordt alleen vertrouwd als je daadwerkelijk vanaf onze eigen marketingwebsite komt. Vervalselde of doorgestuurde links worden genegeerd.

## Binnen de app

De app toont **geen** cookiebanner. In plaats daarvan is hij zo ingericht dat er geen analytics-cookies of cross-session tracking voor anonieme bezoekers ontstaat:

- Analytics-state staat in `sessionStorage`, niet in cookies. Het overleeft herladen binnen hetzelfde tabblad, maar wordt verwijderd zodra je het tabblad sluit.
- De app respecteert het Do Not Track-signaal van je browser.
- Er worden geen sessie-opnames gemaakt.
- Zodra je inlogt, identificeert de app je op basis van je echte gebruikers-id, zodat latere gebeurtenissen aan hetzelfde account gekoppeld worden.

Dit betekent dat anonieme paginaweergaven in de app niet over meerdere bezoeken aan elkaar worden gekoppeld. De funnel van aanmelding naar betalende gebruiker wordt vooral gemeten met server-side events gekoppeld aan je gebruikers-id, niet aan browseropslag.

## Wat we niet doen

- We verkopen of delen geen analytics-gegevens met derden voor advertenties.
- We volgen je niet over niet-gerelateerde websites heen.
- We gebruiken analytics-gegevens niet om individuele advertentieprofielen op te bouwen.

## Je keuzes

- Gebruik de cookiebanner op de marketingwebsite om analytics-opslag toe te staan of te weigeren.
- Schakel Do Not Track in in je browser om opslag van analytics-ids te voorkomen.
- Wis de cookies en lokale opslag voor mycompanydesk.nl / mycompanydesk.com in je browser om opgeslagen ids te verwijderen.

Voor vragen kun je contact opnemen met [support@mycompanydesk.com](mailto:support@mycompanydesk.com).
