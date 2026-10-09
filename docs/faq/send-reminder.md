---
title: "Herinnering versturen"
description: "Om een herinnering te versturen voor een onbetaalde factuur: open de factuur, gebruik de actie Herinnering versturen."
last_verified: 2026-10-09
chatbot:
  triggers: ["send reminder", "payment reminder", "remind customer", "follow up", "chase payment", "herinnering sturen", "betaalherinnering", "aanmaning", "zahlungserinnerung", "relance", "rappel paiement"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I set up automatic reminders?", "How do I view overdue invoices?", "How do I mark an invoice as paid?"]
---

Om een herinnering te versturen voor een onbetaalde factuur:
1. Open de factuur
2. Gebruik de actie "Herinnering versturen"
3. Controleer het bericht en verstuur het

De herinnering vermeldt het resterende openstaande bedrag (factuurbedrag minus de al ontvangen betalingen). Heeft de klant een aanbetaling of termijnbetaling gedaan, dan vraagt de herinnering om het restant, niet om het volledige factuurbedrag.

Als je werkruimte online betalingen heeft ingeschakeld, biedt de herinneringsmail de klant dezelfde betaalopties als de originele factuur: een knop **Bekijk & betaal**, een knop **Betaling bevestigen** en een QR-code op de PDF om te scannen en te betalen. Dit geldt voor zowel handmatige als automatische herinneringen.

Je kunt geen herinnering versturen als:
- de factuur nog een concept is
- de factuur nog nooit naar je klant is verstuurd: een betalingsherinnering is nooit de eerste mail die je klant over een factuur krijgt, dus MyCompanyDesk weigert hem; verstuur eerst de factuur zelf. Is er al iets binnengekomen, of staat er een verzending naar de klant geregistreerd, dan kunnen herinneringen wel weer lopen.
- de factuur is geannuleerd
- de factuur al als betaald staat aangemerkt
- de klant via het portaal heeft aangegeven dat hij al betaald heeft en de factuur op 'Klant zegt: betaald' staat; herinneringen wachten tot je de betaling bevestigt of de melding terugzet
- het een creditnota of refundnota betreft
- de factuur volledig is gecrediteerd via een creditnota
- er niets meer openstaat (bijvoorbeeld omdat de klant betaalde terwijl de pagina openstond)

Een melding uit het portaal heeft ook een einde. Komt er vijf werkdagen na de melding niets binnen, dan controleert MyCompanyDesk de feiten (de wachttijd en de terugzetregel staan in `apps/api/src/modules/scheduler/scheduler.service.js#checkStalePaymentClaims`): met een werkende bankkoppeling op het rekeningnummer van de factuur, die sinds rond de factuurdatum geen inkomende betaling toont, zet MyCompanyDesk de factuur terug op verzonden, haalt de melding weg en kan je klant opnieuw betalen of melden; een melding laat jou weten dat dit is gebeurd. In elk ander geval vraagt MyCompanyDesk je een keer of de betaling binnen is, en laat de factuur met rust tot jij beslist. Je kunt ook zelf handelen: op de factuur staat **Betaling bevestigen** als het geld er is, en **Niet binnengekomen** om de factuur terug te zetten naar verzonden, zodat herinneringen weer lopen en je klant opnieuw kan betalen of melden.

Wanneer een factuur te laat is, toont de factuurdetailpagina een voorgestelde volgende stap:

- **Herinnering versturen** — voor facturen die net over de vervaldatum zitten
- **Strengere herinnering versturen** — voor facturen die al een keer zijn herinnerd
- **Dringende herinnering sturen** — voor facturen die meer dan een paar dagen te laat zijn. De knop opent de herinneringsdialoog; de detailregel adviseert ook om de klant te bellen of een betaalregeling voor te stellen.
- **Creditnota of correctie aanmaken** — als de klant de factuur betwist of de bedragen zijn gewijzigd

Voor de meeste gevallen stuur je herinneringen op 1 dag voor de vervaldatum (vriendelijk), 3 dagen erna (strenger) en 10 dagen erna (laatste waarschuwing). Bel daarna na.

Je kunt het herinneringssjabloon ook aanpassen via Instellingen → E-mails.
