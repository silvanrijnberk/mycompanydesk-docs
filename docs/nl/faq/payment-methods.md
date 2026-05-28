---
title: "Payment methods"
last_verified: 2026-05-09
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
    - { label: "Open payment options", to: "/company?section=paymentOptions" }
  follow_up:
    - "How do I add my bank details?"
    - "How do I change the PDF template?"
---

Om betaalmethoden op documenten te beheren:
1. Ga naar Bedrijf → Betaalopties
2. Zet de methoden aan die je wilt gebruiken
3. Kies de standaardmethode
4. Voeg rekeninggegevens en betaalinstructies toe
5. Wijzigingen in deze sectie worden automatisch opgeslagen

De ingeschakelde methoden en instructies verschijnen op documenttemplates die deze velden ondersteunen.

## Online betaalverwerkers

Je kunt je eigen Mollie- of Stripe-account koppelen zodat klanten facturen direct online kunnen betalen. Het geld komt rechtstreeks op jouw rekening. MyCompanyDesk regelt alleen de koppeling.

Zo koppel je een verwerker:
1. Ga naar **Geld → Betalingen** in je werkruimte
2. Klik onder **Online betalingen** op **Verbind Mollie** of **Verbind Stripe**
3. Volg de OAuth-stappen om je account te autoriseren
4. Na het koppelen bevat elke verstuurde factuur een betaallink voor je klanten

Mollie ondersteunt iDEAL, Bancontact, creditcard en bankoverboeking, ideaal voor Nederlandse en Belgische klanten. Stripe Connect ondersteunt card, Apple Pay, Google Pay en SEPA-incasso, geschikt voor internationale klanten.

Loskoppelen doe je met **Loskoppelen** op de betreffende kaart. Na het loskoppelen kunnen klanten niet meer via die verwerker betalen.

### Mollie-betalingsinstellingen

Zodra Mollie is gekoppeld, verschijnen een **Betaalknop op facturen**-schakelaar en **Betaalmethoden**-sectie op de Mollie-kaart. Met de schakelaar zet je de betaalknop op alle facturen aan of uit zonder Mollie te ontkoppelen. De methodenlijst, live uit je Mollie-dashboard, laat je kiezen welke betaalmethoden je klanten te zien krijgen. Met **Stuur testbetaling** loop je een gratis €1-testcheckout door Mollie om te bevestigen dat alles van begin tot eind werkt.

### Stripe-betalingsinstellingen

Zodra Stripe is gekoppeld en de onboarding (KYC) is afgerond, verschijnen een **Betaalknop op facturen**-schakelaar en **Betaalmethoden**-sectie op de Stripe-kaart. Met de schakelaar zet je de Stripe-betaalknop op alle facturen aan of uit zonder Stripe te ontkoppelen. De methodenlijst, afgestemd op de capabilities van je Stripe-account, laat je kiezen welke betaalmethoden klanten bij het afrekenen zien (card, iDEAL, Bancontact, SEPA-incasso, PayPal, Klarna, Link by Stripe). Haal alle vinkjes weg om terug te gaan naar automatische methodeselectie door Stripe Checkout. Met **Open Stripe Dashboard** word je doorgelinkt naar je Stripe-betaalmethode-instellingen om je integratie te verifieren en betalingen te testen.
