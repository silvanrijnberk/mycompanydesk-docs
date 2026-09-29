---
title: Klantportaal
description: "Je klanten krijgen hun eigen portaalpagina bij je bedrijf: facturen, offertes, contracten, afspraken en berichten bij elkaar, met online betalen."
---

# Klantportaal

Het klantportaal is de pagina van je klant bij jouw bedrijf. Elke factuur, offerte en overeenkomst die je verstuurt bevat een link naar het portaal, en het volledige portaal opent met een e-maillink. Hier staat alles bij elkaar: documenten, afspraken en berichten, in een beveiligde omgeving in je huisstijl.

## Hoe het werkt

Wanneer je een factuur verstuurt, wordt een unieke **betaallink** gegenereerd. Je klant die op de link klikt, komt bij de factuur in zijn portaal uit en kan daar:

1. **De factuur bekijken** - Alle details, regelitems en totalen zien
2. **De PDF downloaden** - Een kopie van de factuur krijgen
3. **Online betalen** - De betaling voltooien via het portaal via de knop **Nu betalen**
4. **Betaling bevestigen**: Een bankoverschrijving bevestigen (niet zichtbaar voor creditnota's, ingetrokken facturen of originele facturen die volledig zijn gecrediteerd, omdat de klant in geen van deze gevallen nog iets hoeft te betalen)

Portaallinks openen in de browser van je klant. Zit de MyCompanyDesk-app op zijn telefoon, dan opent een tik op de factuurlink alsnog de browser, niet de app.

### Twee manieren om binnen te komen

Een factuurlink bewijst alleen dat iemand die mail heeft ontvangen. Hij toont **de facturen van die klant** en die ene factuur, en verder niets waarmee je als de klant optreedt: offertes ondertekenen, afspraken regelen en berichten sturen vragen het volledige portaal. Dat opent met een inloglink die naar het e-mailadres van de klant gaat (zie hieronder), en is zo verbonden aan het adres op jouw klantkaart.

## Inloggen met een e-maillink

Op het portaal vraagt het toegangsscherm om het e-mailadres van de klant en stuurt daarna een nieuwe inloglink. Die link werkt één keer en blijft een uur geldig. Hij gaat alleen naar het e-mailadres dat het bedrijf voor deze klant op de klantkaart heeft staan, en het scherm zegt niet of een adres bekend is, zodat niemand er kan achterhalen wie jouw klanten zijn.

Na het openen van de link blijft die browser ingelogd voor deze klant bij jouw bedrijf. **Uitloggen** beëindigt die sessies in die browser. Het portaal laat altijd je bedrijfsnaam en huisstijl zien, en het contactblok toont je publieke zakelijke e-mailadres, zodat klanten de juiste mailbox vinden, zelfs als hun eerste factuur naar een privéadres ging.

## Portaalfuncties

### Overzicht

Het overzicht is de thuispagina van het portaal: je huisstijl, een begroeting en een korte **Te doen**-lijst met wat de klant nog moet doen (een factuur betalen, een document tekenen, een nieuw bericht lezen). Daaronder staan de kaartjes **openstaand** en **betaald** en de facturen van de klant.

### Facturenlijst

Als een klant meerdere facturen heeft, toont het portaal ook een lijst met elke factuur, creditnota en de huidige status. De kaartjes "Openstaand" en "Achterstallig" boven de tabel tellen het **restant per document** op, niet het bruto totaal. Een factuur van € 1.000 met een deelbetaling van € 400 telt dus € 600 mee in het openstaande bedrag, en een creditnota die al is verrekend met zijn bronfactuur telt € 0 mee zodat hij niet twee keer wordt afgetrokken. "Achterstallig" wordt afgeleid uit de vervaldatum: elke verzonden of openstaande factuur met een vervaldatum vóór vandaag telt daarin mee, zodat het kaartje altijd actueel blijft, ook al hebben facturen zelden nog de legacy-status `overdue`.

Conceptfacturen verschijnen nooit in de portaallijst. Een portaal-link wordt alleen aangemaakt wanneer een factuur wordt verstuurd, dus onverstuurde concepten hebben geen klantzijde link en zijn niet via het portaal te bekijken.

### Factuurweergave

Het portaal toont een overzichtelijke, huisstijl-conforme weergave van de factuur inclusief:

- Je bedrijfslogo en huisstijl
- Factuurnummer en datum
- Regelitems met omschrijvingen en bedragen
- BTW-specificatie
- Totaal verschuldigd bedrag
- Al ontvangen bedrag, toegepaste creditnota en het restant (voor gedeeltelijk betaalde of gecrediteerde facturen)
- Vervaldatum

### Betaling

Klanten kunnen direct via het portaal betalen. Als je Mollie of Stripe hebt gekoppeld, verschijnen er betaalknoppen op de factuurweergave zodat je klant met één klik kan betalen. Betaalknoppen en het totaal verschuldigde bedrag worden verborgen voor creditnota's, ingetrokken facturen en originele facturen die volledig zijn gecrediteerd, omdat de klant in geen van deze gevallen nog geld hoeft over te maken. Voor facturen met deelsbetalingen of creditnota's toont het portaal het al ontvangen bedrag, de toegepaste credit en het openstaande restant voordat de klant betaalt, zodat het bedrag op de betaalknop overeenkomt met het resterende openstaande bedrag. Wanneer de betaling is bevestigd, wordt de factuurstatus in je dashboard automatisch bijgewerkt naar **Betaald**. Het portaal vertelt de klant ook na een Mollie- of iDEAL-retour eerlijk wat er aan de hand is: als de betaalprovider de betaling nog niet heeft bevestigd, zegt de pagina dat in plaats van voor te wijzen dat de betaling in behandeling is, en de klant kan het daarna opnieuw proberen.

Heb je Mollie of Stripe gekoppeld, dan begint de factuurmail en de herinneringsmail met een **Betaal nu**-knop, met **Bekijk factuur** ernaast voor wie eerst wil kijken. De knop opent het portaal met een direct-betaalvlag, waarna de betaling meteen start en de klant naar de betaalpagina wordt doorgestuurd. Aan dat ontwerp hangen drie garanties:

- **De betaling start alleen in een echte browser.** De portaalpagina begint de betaling op het moment dat de klant zijn maillink opent. Linkscanners die mail van tevoren openen (zoals zakelijke mailfilters) maken dus nooit op eigen initiatief een betaling aan, en alle controles (al betaald, ingetrokken, creditnota, "ik heb betaald" in afwachting) blijven op de betalingsaanvraag zelf staan.
- **Een achtergrondtab betaalt niet zomaar.** Is de mail eerder in een achtergrondtab geopend, dan begint de betaling pas als de klant de portaalpagina daadwerkelijk bekijkt.
- **Betaalde facturen vragen niet om geld.** Een factuur die al betaald of ingetrokken is, of waarvan een betaling nog op bevestiging wacht, krijgt geen Betaal nu-knop; die mail opent het portaal zonder.

De scan-en-betaal-QR op de factuur-PDF gebruikt dezelfde vaste link en blijft dus werken, anders dan eenmalige checkout-url's die in de mail verlopen.

#### Mollie-betalingsinstellingen

Zodra Mollie is gekoppeld, krijg je een **Betaalknop op facturen**-schakelaar in je werkruimte onder **Geld → Betalingen → Online betalingen**. Zet hem aan om een Mollie-betaalknop met het label **Nu betalen** op elke uitgaande factuur te tonen. Zet hem uit en de knop verdwijnt zonder Mollie te ontkoppelen.

Onder de schakelaar staat een **Betaalmethoden**-sectie die elke betaalmethode toont die in je Mollie-dashboard actief is (iDEAL, Bancontact, creditcard, en meer). Standaard zien klanten alle methoden. Vink specifieke methoden aan om de selectie te beperken, alleen die verschijnen op je facturen. Haal alle vinkjes weg om terug te gaan naar "alles tonen."

Met de **Stuur testbetaling**-knop loop je een gratis €1-testcheckout door Mollie, zodat je zeker weet dat alles werkt voordat je klanten het zien. Er gaat geen echt geld over de toonbank.

#### Stripe-betalingsinstellingen

Zodra Stripe is gekoppeld, krijg je een **Betaalknop op facturen**-schakelaar in je werkruimte onder **Geld → Betalingen → Online betalingen**. Zet hem aan om een Stripe-betaalknop met het label **Nu betalen** op elke uitgaande factuur te tonen. Zet hem uit en de knop verdwijnt zonder Stripe te ontkoppelen. De schakelaar is pas beschikbaar nadat de Stripe-onboarding (KYC) is afgerond.

Onder de schakelaar staat een **Betaalmethoden**-sectie die elke ondersteunde betaalmethode toont, afgestemd op de capabilities van je Stripe-account (card, iDEAL, Bancontact, SEPA Direct Debit, PayPal, Klarna en Link by Stripe). Standaard kiest Stripe Checkout automatisch de juiste methode per klant. Vink specifieke methoden aan om te beperken wat klanten zien, alleen die verschijnen bij het afrekenen. Haal alle vinkjes weg om terug te gaan naar automatische selectie.

Met de **Open Stripe Dashboard**-knop word je doorgelinkt naar je Stripe-betaalmethode-instellingen, zodat je je integratie kunt verifieren en betalingen rechtstreeks in Stripe kunt testen.

### Offertes en contracten

Het tabblad **Offertes en contracten** laat zien wat deze klant van je heeft gekregen: offertes, contracten en andere te ondertekenen documenten. Documenten die op een handtekening wachten staan bovenaan, met de actie **Bekijken en tekenen**; een offerte staat in beeld tot uiterlijk zijn geldigheidsdatum en statuses volgen de gang van het document (ontvangen, geaccepteerd, afgewezen, verlopen, getekend). Tekenen loopt via een beveiligde tekenpagina, en vraagt om een sms-code wanneer jij dat per document verplicht stelt.

### Afspraken

Het portaal toont de komende en eerdere afspraken van deze klant, ook de plekken die hij voor een groepsafspraak (workshop, les, rondleiding) heeft gereserveerd; zie [Online afspraken](/features/site-bookings). Afspraken kunnen in de agenda van de klant zelf worden gezet, en verzetten of annuleren gaat via dezelfde pagina als die in de bevestigingsmail staat. Afspraken die niet met het e-mailadres van deze klant zijn geboekt blijven voor hem onzichtbaar.

### Berichten

De berichten-tab is een directe lijn met je inbox. De klant schrijft een vraag of opmerking, die komt binnen in je inbox in de app, en jouw antwoord belandt zowel in het portaal als in de mail van de klant. Klanten zonder e-mailadres bij hun gegevens krijgen een hint om je te bellen of te mailen.

### Huisstijl

Het klantportaal gebruikt je bedrijfshuisstijl:

- Bedrijfslogo
- Accentkleur
- Bedrijfsinformatie

Dit creëert een professionele, consistente ervaring voor je klanten.

## Bevroren factuurkopie

De factuurweergave en PDF-download worden weergegeven op basis van een momentopname die bij het versturen wordt gemaakt. Die momentopname bevriest je bedrijfsgegevens, klantgegevens, documenttaal en huisstijl zoals die op dat moment waren. Klanten zien de factuur daarom precies zoals hij verstuurd is, ook als je later instellingen of het klantrecord wijzigt. Conceptfacturen hebben nog geen momentopname en zijn niet via het portaal te bekijken, omdat een portaal-link pas wordt aangemaakt bij het versturen.

## Toegangsbeveiliging

Elke portaallink is:

- **Uniek** - Gegenereerd per factuur
- **Tokengebaseerd** - Beveiligd met een uniek toegangstoken
- **Factuurspecifiek** - Toont alleen de specifieke factuur

Klanten hebben geen MyCompanyDesk-account nodig om facturen te bekijken en te betalen. Elke portaalsessie wordt door de server vastgepind op één klant bij één bedrijf, dus een sessie geopend bij het ene bedrijf toont nooit documenten van het andere, en portaalpagina's worden altijd zonder caching verstuurd zodat persoonsgegevens nooit in gedeelde caches belanden.

## Klantgebeurtenissen bijhouden

MyCompanyDesk houdt klantinteracties met het portaal bij:

- Wanneer de klant de factuur opent
- Wanneer ze de PDF downloaden
- Wanneer ze een betaling initiëren
- Wanneer de betaling is bevestigd

Dit helpt je om klantbetrokkenheid te begrijpen en effectief op te volgen.

## Tips

- Voeg een persoonlijke notitie toe aan je factuur-e-mail om portaalgebruik aan te moedigen
- Het portaal werkt op alle apparaten - mobiel, tablet en desktop
- Betalingsbevestigingen worden naar zowel jou als de klant gestuurd
- Bekijk de klantgebeurtenisgeschiedenis op de factuurdetailpagina om portaalinteracties te zien