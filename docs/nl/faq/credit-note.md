---
title: "Creditnota"
last_verified: 2026-08-16
chatbot:
  triggers: ["credit note", "create credit note", "issue credit", "credit invoice", "creditnota", "creditnota aanmaken", "gutschrift erstellen", "note de credit", "avoir"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I cancel an invoice instead?", "How does a credit note affect my VAT?", "How do I find the original invoice?"]
---

Zo maak je een creditnota:
1. Open de originele factuur die je wilt crediteren
2. Klik op "Creditnota / correctie maken" op de detailpagina
3. MyCompanyDesk maakt in één stap een complete, definitieve creditnota: elke regel van het origineel wordt negatief overgenomen en de creditnota krijgt het volgende nummer in je reeks
4. Verstuur de creditnota naar de klant

Geannuleerde facturen kun je niet crediteren. Wil je een al geannuleerde factuur alsnog corrigeren? Dupliceer de geannuleerde factuur en pas daar de wijzigingen aan.

Je kunt de bedragen tijdens het aanmaken niet aanpassen; verstuurde documenten zijn vergrendeld, dus de creditnota is altijd een exacte spiegel van het origineel. Wil je maar een deel corrigeren? Maak dan eerst de volledige creditnota en stuur daarna een nieuwe factuur met het juiste bedrag.

MyCompanyDesk voorkomt ook dat je meer crediteert dan het bedrag van de originele factuur. Je kunt meerdere deelcreditnota's op dezelfde factuur maken, maar zodra het totaal van de creditnota's het factuurbedrag bereikt, is er geen nieuwe creditnota meer mogelijk voor die factuur.

Een creditnota brengt geld terug naar de klant, dus heeft deze geen eigen vervaldatum. In het klantenportaal verbergt de vervaldatumrij en de tabel met eerdere facturen de deadline voor creditnota's. De knop Betaling bevestigen is ook verborgen, omdat een creditnota de klant betaalt in plaats van de klant te vragen te betalen. Wanneer de originele factuur volledig is gecrediteerd, verbergt het portaal ook de betaalknoppen op die factuur, toont het de betalingsstatus als Gecrediteerd en vermeldt het creditbedrag in de opbouw van het saldo.

In het openstaande-debiteurenoverzicht wordt het bedrag van de creditnota verrekend met de originele factuur waarnaar hij verwijst, zodat het saldo van de klant laat zien wat er écht nog openstaat.

In de backoffice toont de detailpagina van de creditnota of het creditbedrag nog openstaat of al is verrekend. Zo zie je in één oogopslag of je de klant nog moet terugbetalen of verrekenen.

Wanneer de originele factuur volledig is gecrediteerd, toont de detailpagina van de factuur niet langer de status volledig betaald. In plaats daarvan staat dat de factuur is gecrediteerd en dat er niets meer openstaat. Heeft de klant al betaald voordat de creditnota werd aangemaakt en is die betaling nu hoger dan het resterende bedrag, dan toont de pagina ook het terug te betalen bedrag dat je de klant verschuldigd bent.

Als je een creditnota per e-mail verstuurt, gebruikt hij een eigen sjabloon. Het onderwerp noemt hem als creditnota, de tekst vermeldt het gecrediteerde bedrag als positief bedrag en er wordt niet gevraagd om te betalen of een vervaldatum getoond. De PDF zelf gebruikt 'Creditfactuur aan', 'Creditfactuurgegevens' en 'Creditfactuurnr.' in plaats van de factuurvarianten, zodat een creditnota nooit per ongeluk als factuur wordt aangeduid. Zolang de creditnota nog een concept is, biedt de actiekaart alleen de optie om hem te versturen; na verzending verschijnen er geen herinnerings- of incassoacties, omdat een creditnota de klant betaalt in plaats van geld te vragen.

Tip: Doordat je de creditnota vanaf de originele factuur maakt, sluiten beide documenten precies op elkaar aan en blijft je administratie kloppend.
