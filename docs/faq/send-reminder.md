---
title: "Herinnering versturen"
description: "Om een herinnering te versturen voor een onbetaalde factuur: open de factuur, klik op Verstuur herinnering."
last_verified: 2026-10-13
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

Wil je dit niet zelf bijhouden? Zet dan onder Instellingen › **Facturen en offertes** de schakelaar **Te laat? Automatisch een herinnering sturen** aan (Office). Is een factuur drie dagen over de vervaldatum, dan stuurt MyCompanyDesk vanzelf een vriendelijke herinnering, en daarna elke week opnieuw tot er betaald is. Blijft het stil, bel je klant dan even.

De tekst van je herinneringsmail pas je aan onder Instellingen › **E-mail** › **Factuur- en offertemails**.
