---
title: Cookies en analytics
description: "Hoe MyCompanyDesk omgaat met cookies, lokale opslag, analytics en sessie-opnames, en hoe je je keuze wijzigt."
last_verified: 2026-10-19
---

# Cookies en analytics

Op deze pagina lees je hoe MyCompanyDesk omgaat met cookies, lokale opslag en analytics. Het geldt zowel voor de publieke marketingwebsite (mycompanydesk.nl / mycompanydesk.com) als voor de webapp.

## Marketingwebsite

De marketingwebsite toont een cookietoestemmingsbanner bij je eerste bezoek. Die banner vraagt of we analytics-opslag mogen plaatsen. Je keuze wordt in je browser bewaard. Wil je hem later wijzigen, wis dan de sitegegevens van de marketingwebsite in je browser; bij je volgende bezoek verschijnt de banner opnieuw.

Analytics met een id is opt-in. Zonder toestemming tellen we alleen anoniem hoe vaak een pagina bekeken wordt, via welke website of zoekmachine bezoekers binnenkomen en welke knop naar de app of de app-winkel wordt aangeklikt. Daarvoor slaan we niets op je apparaat op, gebruiken we geen id, maken we geen opnames en bewaren we je IP-adres niet. Bij "Alleen essentieel" blijft er dus niets van analytics op je apparaat achter.

Als je akkoord gaat, start de site analytics en slaat hij een anonieme analytics-id op in de `localStorage` van je browser onder de sleutel `mcd_phid`. Deze id wordt alleen gebruikt om te begrijpen hoe bezoekers door de site navigeren. Hij is niet gekoppeld aan je account of e-mailadres.

Daarnaast kunnen we, als je toestemming geeft, sessie-opnames maken van je bezoek aan de marketingwebsite. Die helpen ons zien waar de site beter kan. Alles wat je in invoervelden typt, wordt in die opnames gemaskeerd en is voor ons niet leesbaar. De gegevens zijn gepseudonimiseerd.

Weiger je (met **Alleen essentieel**, of door de banner met Escape te sluiten), dan loopt dat anonieme tellen gewoon door: er wordt geen analytics-id opgeslagen en er worden geen opnames gemaakt. Stuurt je browser een Do Not Track (DNT)-signaal, dan meten we helemaal niets, ook dat anonieme tellen niet. De banner kan nog steeds verschijnen, omdat hij ook niet-analytics-cookies behandelt.

## Van marketingwebsite naar app

Heb je toestemming gegeven en klik je vanuit de marketingwebsite naar de app, dan voegt de marketingwebsite een kortstondige `phid`-parameter toe. De app verwijdert deze parameter meteen na het laden en houdt hem niet in de URL. Hij wordt alleen gebruikt om hetzelfde anonieme bezoek te koppelen aan de appsessie, zodat we kunnen zien of de site mensen helpt zich aan te melden.

De parameter wordt alleen vertrouwd als je daadwerkelijk vanaf onze eigen marketingwebsite komt. Vervalste of doorgestuurde links worden genegeerd.

Daarnaast geeft een link naar de app of naar de app-winkel mee hoe je bij ons kwam: de website die je doorverwees (zonder het deel na het vraagteken), de pagina waarop je binnenkwam, eventuele campagnecodes en de taal van de pagina. Daar zit geen id in en er wordt niets op je apparaat opgeslagen, dus dit gebeurt ook zonder toestemming; stuurt je browser Do Not Track, dan niet. De app haalt ook deze parameter meteen uit de URL. Meld je je aan, dan bewaren we die herkomst bij je nieuwe account, zodat we zien welke kanalen nieuwe gebruikers opleveren.

## Binnen de app

De app toont **geen** cookiebanner. In plaats daarvan is hij zo ingericht dat er geen analytics-cookies of cross-session tracking voor anonieme bezoekers ontstaat:

- Analytics-state staat in `sessionStorage`, niet in cookies. Het overleeft herladen binnen hetzelfde tabblad, maar wordt verwijderd zodra je het tabblad sluit.
- De app respecteert het Do Not Track-signaal van je browser.
- Ben je ingelogd, dan stelt de app je één keer de vraag of hij mag bijhouden hoe je de app gebruikt: **Statistieken** (welke pagina's je bezoekt en op welke knoppen je klikt, gekoppeld aan je account) en **Schermopnames** (hoe je door de app beweegt, met alle tekst onleesbaar gemaakt). Je kiest allebei, alleen statistieken, of geen van beide. Je keuze wordt bij je account bewaard en geldt op al je apparaten; aanpassen kan altijd bij Instellingen › **Privacy**.
- Tot je antwoordt, wordt voor je account niets bijgehouden.
- Schermopnames gebeuren daarnaast alleen in de eerste 30 dagen van een nieuwe werkruimte, alleen met je uitdrukkelijke ja op schermopnames, en nooit terwijl een boekhouder in de administratie van een klant werkt, in de demo, of als je browser Do Not Track stuurt. Je inbox en je contractpagina's worden nooit opgenomen, ook niet met toestemming.
- Op websites die je met MyCompanyDesk publiceert en in het klantportaal draait geen analytics van ons.

Dit betekent dat anonieme paginaweergaven in de app niet over meerdere bezoeken aan elkaar worden gekoppeld. De funnel van aanmelding naar betalende gebruiker wordt vooral gemeten met server-side events gekoppeld aan je gebruikers-id, niet aan browseropslag.

## Wat we niet doen

- We verkopen of delen geen analytics-gegevens met derden voor advertenties.
- We volgen je niet over niet-gerelateerde websites heen.
- We gebruiken analytics-gegevens niet om individuele advertentieprofielen op te bouwen.

## Je keuzes

- Gebruik de cookiebanner op de marketingwebsite om analytics-opslag toe te staan of te weigeren.
- Schakel Do Not Track in in je browser om opslag van analytics-ids en sessie-opnames te voorkomen.
- Wis de cookies en lokale opslag voor mycompanydesk.nl / mycompanydesk.com in je browser om opgeslagen ids te verwijderen.

Voor vragen kun je contact opnemen met [support@mycompanydesk.nl](mailto:support@mycompanydesk.nl).
