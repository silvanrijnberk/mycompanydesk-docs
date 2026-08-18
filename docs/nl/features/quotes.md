---
title: Offertes
---

# Offertes

Verstuur professionele offertes naar potentiele klanten en zet ze om naar facturen wanneer ze geaccepteerd zijn.

## Overzicht

Het offertesgedeelte stelt je in staat om offertes te maken, versturen en bijhouden. Offertes volgen een vergelijkbare workflow als facturen, maar zijn vrijblijvende prijsopgaven.

## Een offerte aanmaken

1. Ga naar **Offertes > Nieuwe offerte**
2. Selecteer of maak een **klant** aan
3. Voeg **regelitems** toe met omschrijvingen, aantallen, prijzen en BTW-tarieven
4. Stel een **geldig tot**-datum in (hoe lang de offerte geldig is)
5. Voeg optionele **notities** toe
6. Klik op **Opslaan**

Het offerteformulier lijkt op het factuurformulier — als je weet hoe je een factuur maakt, weet je ook hoe je een offerte maakt.

## Een offerte versturen

1. Open de offertedetailpagina
2. Klik op **Versturen**
3. Bekijk het e-mailvoorbeeld
4. Klik op **Versturen** om het naar je klant te bezorgen

In de verzenddialoog vind je schakelaars voor de **Bekijkknop**, **Downloadknop** en **PDF-bijlage**. Standaard wordt de PDF meegestuurd, zodat de klant de offerte kan bekijken.

Voor een offerte moet er minstens één van deze schakelaars aan staan; anders kan de klant de offerte nergens openen en wordt de knop **Versturen** uitgeschakeld. Facturen vallen altijd terug op een klantenportaalknop, maar offertes niet.

Als je werkruimte algemene voorwaarden in Documenten heeft staan, toont de e-mailvoorbeelddialoog ook de schakelaar **Algemene voorwaarden meesturen**. Deze staat standaard aan voor offertes. Als je hem inschakelt, wordt de huidige voorwaarden-PDF bij de e-mail gevoegd en wordt de verzending vastgelegd als het terhandstellingsmoment op het voorwaardendocument.

## Klantactiviteit

Zodra een offerte per e-mail is verstuurd, toont de detailpagina een rij signalen die precies hetzelfde werken als bij facturen:

- **Verzonden**: de e-mail is uit je werkruimte verstuurd.
- **Geopend**: de klant heeft de e-mail geopend (gemeten via een pixel in de offerte-e-mail).
- **Bekeken**: de klant heeft de publieke offertepagina geopend.
- **Gedownload**: de klant heeft de offerte-PDF gedownload.

Een offerte toont nooit een **Betaald**-signaal, want offertes worden niet direct betaald; een ondertekende offerte staat in zijn eigen ondertekeningskaart.

De signalen blijven uit tot de offerte daadwerkelijk is gemaild. Daarvoor is de kaart verborgen, zodat de pagina niet onnodig volstaat.

Gebeurtenissen worden opgeslagen in dezelfde `invoice_customer_events`-log als factuuractiviteit, afgescheiden door een `entity_type`-kolom zodat offertes en facturen niet door elkaar lopen.

Bron: `apps/api/src/modules/invoices/customer-events.service.js` - `recordEvent`, `getEventsForQuote`; `apps/api/src/db/migrations/20270302000000_customer_events_entity_type.js` - `entity_type`-kolom; `apps/api/src/modules/quotes/quotes.routes.js` - `GET /:id/customer-events`.

## Offerte online laten ondertekenen

Je kunt een klant vragen een offerte online te ondertekenen in plaats van hem alleen als PDF te versturen. Open de offertedetailpagina en kies **Naar tekenen versturen** om een tekenverzoek naar de klant te sturen. De status van de offerte wijzigt in **Verzonden**, zodat je het proces kunt volgen.

Als de e-mail voor het tekenen niet kan worden afgeleverd door een probleem met je e-mailinstellingen, verschijnt er een foutmelding met de vraag je e-mailinstellingen te controleren en het opnieuw te proberen. Het tekenverzoek zelf wordt op de server aangemaakt, dus je kunt het opnieuw versturen zodra de e-mailinstellingen in orde zijn.

## Acties op de offertedetailpagina

De hoofdactie op de offertedetailpagina hangt af van de offertestatus:

- **Versturen** — Beschikbaar voor concept- en verzonden offertes, zodat de offerte de klant kan bereiken.
- **Omzetten naar factuur** — Beschikbaar zodra de klant de offerte heeft geaccepteerd; hiermee maak je in één klik een factuur.
- **Dupliceren / nieuwe versie maken** — Beschikbaar voor afgewezen of verlopen offertes, zodat je ze snel opnieuw kunt uitbrengen.

Extra acties zitten in het overflow-menu naast de hoofdactie:

- **PDF preview** — Bekijk de offerte-PDF op volledig scherm voordat je deze verstuurt.
- **PDF downloaden** — Download de offerte als een professioneel opgemaakt PDF-document met je bedrijfslogo, huisstijlkleuren en alle offertegegevens.
- **Offerte kopiëren** — Maak een kopie van de bestaande offerte.

## Documentvoorbeeld

Elke opgeslagen offerte heeft een live PDF-voorbeeld op de detailpagina, net als een factuur. Het voorbeeld toont de offerte precies zoals je klant hem ziet.

In de kop van het voorbeeld staan knoppen voor **PDF downloaden**, **Printen** en **Ontwerp aanpassen**. Klik op **Ontwerp aanpassen** om direct naar Factuurontwerp te gaan en de uitstraling van al je facturen, offertes en herinneringen aan te passen. Wanneer je klaar bent, kom je terug bij de offerte waar je vandaan kwam. Op mobiel staat dezelfde actie in het overflow-menu, zodat de kop van het voorbeeld overzichtelijk blijft.

## Offertestatussen

| Status | Beschrijving |
|---|---|
| **Concept** | Aangemaakt maar niet verstuurd |
| **Verzonden** | Bezorgd bij de klant |
| **Geaccepteerd** | Klant heeft de offerte geaccepteerd |
| **Afgewezen** | Klant heeft de offerte afgewezen |
| **Verlopen** | Voorbij de geldig-tot-datum |
| **Gefactureerd** | Omgezet naar een factuur |

## Omzetten naar factuur

Zodra een klant je offerte accepteert, zet je deze met een klik om naar een factuur:

1. Open de geaccepteerde offerte
2. Klik op **Omzetten naar factuur**
3. Bekijk de vooraf ingevulde factuur (alle regelitems worden overgenomen)
4. Pas indien nodig aan
5. Sla op en verstuur de factuur

## Offerteaanvragen

Klanten kunnen offerteaanvragen indienen via je [sitebouwer](/nl/advanced/business-page). Deze verschijnen in **Offertes > Aanvragen**.

### Aanvragen beheren

Elke aanvraag toont:

- Klantnaam en e-mailadres
- Gevraagde dienst of omschrijving
- Datum ingediend
- Status

### Aanvraagstatussen

| Status | Beschrijving |
|---|---|
| **Nieuw** | Zojuist ontvangen, nog niet bekeken |
| **Bekeken** | Je hebt de aanvraag gelezen |
| **Geoffreerd** | Je hebt een offerte verstuurd als reactie |
| **Gesloten** | Aanvraag afgehandeld (geaccepteerd of afgewezen) |

### Reageren op een aanvraag

1. Open de aanvraag
2. Klik op **Markeer als bekeken** na het lezen
3. Klik op **Offerte aanmaken** om een offerte te genereren voor deze klant
4. De offerte wordt vooraf ingevuld met de klantgegevens

### AI-conceptofferte bij een aanvraag

Als een klant een offerteaanvraag via je sitebouwer of contactformulier indient, kan MyCompanyDesk automatisch een conceptofferte opzetten. De AI leest de aanvraagtekst en je eigen catalogus en stelt regels voor die hij kan matchen.

- Gematchte catalogusitems behouden hun catalogusprijs, BTW-tarief en eenheid. De AI suggereert alleen hoeveelheden.
- Werk dat niet in de catalogus past, wordt een omschrijvingsregel met prijs 0, zodat je zelf een prijs kunt bepalen.
- Het concept wordt aangemaakt als offerte in status **Concept**. Hij wordt niet automatisch verstuurd en er wordt geen klantrecord aangemaakt op basis van het ongeverifieerde formulier.
- Je krijgt een melding zodra een concept klaar staat. Open de aanvraag, controleer de regels, koppel of maak de klant aan en verstuur hem wanneer je wilt.

Het is een best-effort concept, geen afgeronde offerte. Controleer altijd prijzen en omschrijvingen voordat je verstuurt.

## Bulkacties

- **Versturen** — Verstuur meerdere offertes tegelijk
- **Archiveren** — Verplaats offertes naar het archief
- **Verwijderen** — Verwijder offertes

## Tips

- Statistieken over offerteaanvragen (ontvangen, geoffreerd, gesloten) worden bovenaan de aanvragenpagina getoond
- Gebruik de snel-toevoegen-functie voor snelle offertecreatie

## Dashboard-context

Offertes die opvolging nodig hebben, verschijnen ook in het dashboardtabblad **Goed nieuws**:

- **Openstaande aanvragen**: hoeveel offerteaanvragen via de website op antwoord wachten, plus de oudste wachttijd.
- **Verlopende offertes**: hoeveel offertes deze week verlopen, en hoeveel al verlopen zijn zonder antwoord.

Offerteaanvragen via je sitebouwerformulier komen binnen via [Domeinen, website en inbox](/nl/features/domains-website-inbox).
