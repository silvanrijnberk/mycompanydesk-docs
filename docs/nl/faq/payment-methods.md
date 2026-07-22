---
title: "Betaalmethoden"
last_verified: 2026-07-02
chatbot:
  triggers:
    - "payment methods"
    - "add payment method"
    - "how to pay"
    - "bank transfer"
    - "payment options"
    - "betaalmethoden"
    - "betaalmethode toevoegen"
    - "zahlungsmethoden"
    - "modes de paiement"
    - "moyens de paiement"
  actions:
    - { label: "Open payment settings", to: "/settings/betalen" }
  follow_up:
    - "How do I add my bank details?"
    - "How do I change the PDF template?"
---

Om betaalmethoden op documenten te beheren:
1. Ga naar Instellingen en open "Betalen"
2. Vul je IBAN in om bankoverschrijving aan te bieden; een ingevulde IBAN schakelt die automatisch in en zet een betaal-QR-code op je facturen
3. Zet PayPal aan en vul je PayPal-e-mailadres in als je dat wilt aanbieden
4. Koppel Mollie of Stripe als je klanten online wilt laten betalen, bijvoorbeeld met iDEAL
5. Wijzigingen op deze pagina worden automatisch opgeslagen

De ingeschakelde methoden verschijnen onderaan je factuur.

## Online betaalverwerkers

Je kunt je eigen Mollie- of Stripe-account koppelen zodat klanten facturen direct online kunnen betalen. Het geld komt rechtstreeks op jouw rekening. MyCompanyDesk regelt alleen de koppeling.

Zo koppel je een verwerker:
1. Ga naar **Instellingen → Betalen**
2. Klik onder **Online betalingen** op **Verbind Mollie** of **Verbind Stripe**
3. Volg de OAuth-stappen om je account te autoriseren
4. Na het koppelen bevat elke verstuurde factuur een betaallink voor je klanten

Mollie ondersteunt iDEAL, Bancontact, creditcard en bankoverboeking, ideaal voor Nederlandse en Belgische klanten. Stripe Connect ondersteunt card, Apple Pay, Google Pay en SEPA-incasso, geschikt voor internationale klanten.

## Online-betalingstarief op het gratis plan

Op het gratis plan geldt een klein servicekostenbedrag voor online factuurbetalingen. Wanneer een klant een factuur online betaalt, wordt € 0,50 via je Mollie- of Stripe-account geïnd als application fee. Online betalingen op Starter en Pro zijn kosteloos. Het tarief staat naast **Online betalingen** op `/settings/betalen` zolang je werkruimte op het gratis plan zit.

Het precieze bedrag staat server-side ingesteld. De hint in de app toont op dit moment € 0,50, overeenkomstig `config.billing.freeTierSurchargeCents` in `apps/api/src/config/env.js`. Er kan ook een minimale factuurwaarde ingesteld worden via `config.billing.freeTierSurchargeMinInvoiceCents`; als die waarde wijzigt, moeten deze pagina en de hint in de app samen worden bijgewerkt.

Loskoppelen doe je met **Loskoppelen** op de betreffende kaart. Als er in de afgelopen 24 uur betalingen zijn geweest, krijg je een waarschuwing dat er mogelijk nog openstaande webhooks binnenkomen en dat je terugbetalingen voor die betalingen handmatig moet verwerken. Na het loskoppelen kunnen klanten niet meer via die verwerker betalen.

### Mollie-betalingsinstellingen

Zodra Mollie is gekoppeld, verschijnen een **Betaalknop op facturen**-schakelaar en **Betaalmethoden**-sectie op de Mollie-kaart. Met de schakelaar zet je de betaalknop op alle facturen aan of uit zonder Mollie te ontkoppelen. De methodenlijst, live uit je Mollie-dashboard, laat je kiezen welke betaalmethoden je klanten te zien krijgen. Met **Stuur testbetaling** loop je een gratis €1-testcheckout door Mollie om te bevestigen dat alles van begin tot eind werkt.

### Stripe-betalingsinstellingen

Zodra Stripe is gekoppeld en de onboarding (KYC) is afgerond, verschijnen een **Betaalknop op facturen**-schakelaar en **Betaalmethoden**-sectie op de Stripe-kaart. Met de schakelaar zet je de Stripe-betaalknop op alle facturen aan of uit zonder Stripe te ontkoppelen. De methodenlijst, afgestemd op de capabilities van je Stripe-account, laat je kiezen welke betaalmethoden klanten bij het afrekenen zien (card, iDEAL, Bancontact, SEPA-incasso, PayPal, Klarna, Link by Stripe). Haal alle vinkjes weg om terug te gaan naar automatische methodeselectie door Stripe Checkout. Met **Open Stripe Dashboard** word je doorgelinkt naar je Stripe-betaalmethode-instellingen om je integratie te verifieren en betalingen te testen.
