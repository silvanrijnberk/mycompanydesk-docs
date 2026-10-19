---
title: "Herinnering versturen"
description: "Om een herinnering te versturen voor een onbetaalde factuur: open de factuur, klik op Verstuur herinnering."
last_verified: 2026-10-19
chatbot:
  triggers: ["send reminder", "payment reminder", "remind customer", "follow up", "chase payment", "herinnering sturen", "betaalherinnering", "aanmaning", "zahlungserinnerung", "relance", "rappel paiement"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I set up automatic reminders?", "How do I view overdue invoices?", "How do I mark an invoice as paid?"]
---

Om een herinnering te versturen voor een onbetaalde factuur:
1. Open de factuur
2. Klik op "Verstuur herinnering"
3. Controleer het bericht en verstuur het

De herinnering vermeldt het resterende openstaande bedrag (factuurbedrag minus de al ontvangen betalingen). Heeft de klant een aanbetaling of termijnbetaling gedaan, dan vraagt de herinnering om het restant, niet om het volledige factuurbedrag.

Als je werkruimte online betalingen heeft ingeschakeld, biedt de herinneringsmail de klant dezelfde betaalopties als de originele factuur: een knop **Betaal nu**, een knop **Bekijk factuur**, de knop **Al betaald? Laat het weten** en een QR-code op de PDF om te scannen en te betalen. Dit geldt voor zowel handmatige als automatische herinneringen.

Je kunt geen herinnering versturen als:
- de factuur nog een concept is
- de factuur nog nooit naar je klant is verstuurd: een betalingsherinnering is nooit de eerste mail die je klant over een factuur krijgt, dus MyCompanyDesk weigert hem; verstuur eerst de factuur zelf. Is er al iets binnengekomen, of staat er een verzending naar de klant geregistreerd, dan kunnen herinneringen wel weer lopen.
- de factuur is geannuleerd
- de factuur al als betaald staat aangemerkt
- de klant via het portaal heeft aangegeven dat hij al betaald heeft en de factuur op 'Klant zegt: betaald' staat; herinneringen wachten tot je de betaling bevestigt of de melding terugzet
- het een creditnota of refundnota betreft
- de factuur volledig is gecrediteerd via een creditnota
- er niets meer openstaat (bijvoorbeeld omdat de klant betaalde terwijl de pagina openstond)

Een melding uit het portaal heeft ook een einde. Komt er vijf werkdagen na de melding niets binnen, dan controleert MyCompanyDesk de feiten: met een werkende bankkoppeling op het rekeningnummer van de factuur, die sinds rond de factuurdatum geen inkomende betaling toont, zet MyCompanyDesk de factuur terug op verzonden, haalt de melding weg en kan je klant opnieuw betalen of melden; een melding laat jou weten dat dit is gebeurd. In elk ander geval vraagt MyCompanyDesk je een keer of de betaling binnen is, en laat de factuur met rust tot jij beslist. Je kunt ook zelf handelen: op de factuur staat **Betaling bevestigen** als het geld er is, en **Niet binnengekomen** om de factuur terug te zetten naar verzonden, zodat herinneringen weer lopen en je klant opnieuw kan betalen of melden.

Wanneer een factuur te laat is, toont de factuurdetailpagina onder **Aanbevolen actie** een voorgestelde volgende stap:

- **Stuur 1e herinnering**: voor facturen die te laat zijn en nog niet zijn herinnerd
- **Stuur herinnering #2** (en verder): voor facturen die al eerder zijn herinnerd
- **Stuur een dringende herinnering**: voor facturen die al lang te laat zijn. De knop opent de herinneringsdialoog; de toelichting raadt ook aan om de klant te bellen of een betaalregeling voor te stellen.
- **Maak creditnota of correctie**: als de klant de factuur betwist of de bedragen zijn gewijzigd

Wil je dit niet zelf bijhouden? Zet dan onder Instellingen › **Facturen en offertes** de schakelaar **Te laat? Automatisch een herinnering sturen** aan (Office). Is een factuur drie dagen over de vervaldatum, dan stuurt MyCompanyDesk vanzelf een vriendelijke herinnering, en daarna elke week opnieuw, tot op het aantal herinneringen dat je daar kiest. Daarna neemt de flow hieronder het over. Blijft het stil, bel je klant dan even.

## Te laat betalen: de aanmaning en de incassokosten

Als je klant niet betaalt, schrijft de wet voor wat er dan mag gebeuren. MyCompanyDesk loopt dat pad met je mee:

1. **De herinneringen lopen op.** Na het aantal herinneringen dat je hebt ingesteld stopt het automatisch en krijg je een melding. Herinneringen kosten je klant nooit geld; dat kan pas na de aanmaning.
2. **De aanmaning.** Die kun je zelf versturen vanaf de factuur, of MyCompanyDesk stuurt hem automatisch als je dat in dezelfde instelling aanzet. De tekst staat vast, want de wet schrijft voor wat erin moet staan. Wat erin staat hangt af van de klant: een particuliere klant krijgt te zien welke incassokosten na een termijn volgen, een zakelijke klant krijgt het vaste bedrag en de wettelijke rente genoemd die al verschuldigd zijn. Of je klant als zakelijk telt volgt uit het klantenkaartje: een zakelijke klant zonder KvK-nummer en btw-nummer wordt behandeld als particulier.
3. **De wachttijd.** Na de aanmaning krijgt je klant tijd om te betalen. Op de factuurpagina staat tot wanneer. Is de mail niet aangekomen omdat het e-mailadres niet werkt, dan mag je nog geen kosten rekenen: zet eerst het adres goed en mail opnieuw, of verstuur de brief per post en markeer hem als verstuurd.
4. **De kosten rekenen.** Is de termijn voorbij zonder betaling, dan biedt de factuurpagina aan om de kosten te rekenen. MyCompanyDesk maakt een factuurconcept met de incassokosten (en bij een zakelijke klant de rente) die je controleert en verstuurt. Meerdere onbetaalde facturen van dezelfde klant gaan in één brief, zoals de wet voorschrijft.

Van elke stap krijg je een melding, zodat je weet waar elke late factuur staat. Onder Instellingen › **Facturen en offertes** stel je ook in hoeveel herinneringen eruit gaan en of de aanmaning automatisch verstuurd wordt.

De tekst van je herinneringsmail pas je aan onder Instellingen › **E-mail** › **Factuur- en offertemails**. De tekst van de aanmaning staat bij wet vast en is niet aan te passen.
