---
title: Klantportaal
---

# Klantportaal

Het klantportaal stelt je klanten in staat om facturen te bekijken en online te betalen via een beveiligde, huisstijl-conforme interface.

## Hoe het werkt

Wanneer je een factuur verstuurt, wordt een unieke **betaallink** gegenereerd. Wanneer je klant op deze link klikt, wordt deze naar het klantportaal gebracht waar ze kunnen:

1. **De factuur bekijken** — Alle details, regelitems en totalen zien
2. **De PDF downloaden** — Een kopie van de factuur krijgen
3. **Online betalen** — De betaling voltooien via het portaal
4. **Betaling bevestigen** — Een bankoverschrijving bevestigen

## Portaalfuncties

### Factuurweergave

Het portaal toont een overzichtelijke, huisstijl-conforme weergave van de factuur inclusief:

- Je bedrijfslogo en huisstijl
- Factuurnummer en datum
- Regelitems met omschrijvingen en bedragen
- BTW-specificatie
- Totaal verschuldigd bedrag
- Vervaldatum

### Betaling

Klanten kunnen direct via het portaal betalen. Als je Mollie of Stripe hebt gekoppeld, verschijnen er betaalknoppen op de factuurweergave zodat je klant met één klik kan betalen. Als een klant een autopay-link volgt (bijvoorbeeld vanuit een betaalherinnering), scrolt het portaal naar de juiste betaalknop en markeert deze met een pulserende animatie in plaats van automatisch door te verwijzen naar het betaalproces. Zo kan de klant de factuur eerst bekijken voordat deze betaalt. Wanneer de betaling is bevestigd, wordt de factuurstatus in je dashboard automatisch bijgewerkt naar **Betaald**.

#### Mollie-betalingsinstellingen

Zodra Mollie is gekoppeld, krijg je een **Betaalknop op facturen**-schakelaar in je werkruimte onder **Geld → Betalingen → Online betalingen**. Zet hem aan om een Mollie-betaalknop op elke uitgaande factuur te tonen. Zet hem uit en de knop verdwijnt zonder Mollie te ontkoppelen.

Onder de schakelaar staat een **Betaalmethoden**-sectie die elke betaalmethode toont die in je Mollie-dashboard actief is (iDEAL, Bancontact, creditcard, en meer). Standaard zien klanten alle methoden. Vink specifieke methoden aan om de selectie te beperken, alleen die verschijnen op je facturen. Haal alle vinkjes weg om terug te gaan naar "alles tonen."

Met de **Stuur testbetaling**-knop loop je een gratis €1-testcheckout door Mollie, zodat je zeker weet dat alles werkt voordat je klanten het zien. Er gaat geen echt geld over de toonbank.

#### Stripe-betalingsinstellingen

Zodra Stripe is gekoppeld, krijg je een **Betaalknop op facturen**-schakelaar in je werkruimte onder **Geld → Betalingen → Online betalingen**. Zet hem aan om een Stripe-betaalknop op elke uitgaande factuur te tonen. Zet hem uit en de knop verdwijnt zonder Stripe te ontkoppelen. De schakelaar is pas beschikbaar nadat de Stripe-onboarding (KYC) is afgerond.

Onder de schakelaar staat een **Betaalmethoden**-sectie die elke ondersteunde betaalmethode toont, afgestemd op de capabilities van je Stripe-account (card, iDEAL, Bancontact, SEPA Direct Debit, PayPal, Klarna en Link by Stripe). Standaard kiest Stripe Checkout automatisch de juiste methode per klant. Vink specifieke methoden aan om te beperken wat klanten zien, alleen die verschijnen bij het afrekenen. Haal alle vinkjes weg om terug te gaan naar automatische selectie.

Met de **Open Stripe Dashboard**-knop word je doorgelinkt naar je Stripe-betaalmethode-instellingen, zodat je je integratie kunt verifieren en betalingen rechtstreeks in Stripe kunt testen.

### Huisstijl

Het klantportaal gebruikt je bedrijfshuisstijl:

- Bedrijfslogo
- Accentkleur
- Bedrijfsinformatie

Dit creëert een professionele, consistente ervaring voor je klanten.

## Toegangsbeveiliging

Elke portaallink is:

- **Uniek** — Gegenereerd per factuur
- **Tokengebaseerd** — Beveiligd met een uniek toegangstoken
- **Factuurspecifiek** — Toont alleen de specifieke factuur

Klanten hebben geen MyCompanyDesk-account nodig om facturen te bekijken en te betalen.

## Klantgebeurtenissen bijhouden

MyCompanyDesk houdt klantinteracties met het portaal bij:

- Wanneer de klant de factuur opent
- Wanneer ze de PDF downloaden
- Wanneer ze een betaling initieren
- Wanneer de betaling is bevestigd

Dit helpt je om klantbetrokkenheid te begrijpen en effectief op te volgen.

## Tips

- Voeg een persoonlijke notitie toe aan je factuur-e-mail om portaalgebruik aan te moedigen
- Het portaal werkt op alle apparaten — mobiel, tablet en desktop
- Betalingsbevestigingen worden naar zowel jou als de klant gestuurd
- Bekijk de klantgebeurtenisgeschiedenis op de factuurdetailpagina om portaalinteracties te zien
