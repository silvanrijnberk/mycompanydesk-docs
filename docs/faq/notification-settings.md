---
title: "Meldingsinstellingen"
description: "Beheer je meldingsonderwerpen onder Instellingen > Meldingen. Op desktop opent het belletje een compacte popover; op mobiel een volledig sheet. Een eigen Meldingen-pagina op /meldingen geeft de lijst ruimte voor het twee-paneel detailoverzicht en toetsenbordtriage."
last_verified: 2026-08-21
chatbot:
  triggers:
    - "notifications"
    - "notification settings"
    - "email notifications"
    - "alerts"
    - "meldingen"
    - "notificatie instellingen"
    - "benachrichtigungen"
    - "parametres notification"
  actions: []
  follow_up:
    - "How do I send payment reminders?"
    - "How do I change my email?"
---

Om je meldingsinstellingen te beheren:

1. Ga naar Instellingen → "Meldingen"
2. Zet de meldingsonderwerpen aan of uit. De categorieën zijn:
   - **Aandacht voor facturen**: te late facturen, facturen die bijna vervallen, concepten die blijven liggen, mislukte incasso's, facturen die niet bij de klant zijn aangekomen, stilgevallen automatische contractfacturatie en uren zonder tarief.
   - **Geld binnenkomt**: betalingen, bevestigde betalingen en opvallende banktransacties.
   - **Deadline in aantocht**: BTW, inkomstenbelasting, vennootschapsbelasting, de KOR-grens, en aflopende contracten of projecten. Je krijgt ze ruim van tevoren, zodat je nooit te laat bent. Deze categorie bevat ook automatische boekingen die niet konden worden gemaakt omdat de datum valt in een BTW-periode die al is aangegeven en vergrendeld, zoals een doorgestuurde inboxfactuur of een banktransactie. De melding noemt de leverancier en factuurdatum en wijst je naar de inbox of bankfeed, zodat je het in de huidige periode kunt boeken of een suppletieaangifte kunt indienen.
   - **Nieuwe kansen**: offerteaanvragen, ondertekende offertes en verkopen via je website.
   - **Nieuw bericht in je inbox**: een seintje op je telefoon zodra een klant of leverancier mailt.
   - **Uitgave vervalt**: aankomende vervaldatums van uitgaven die je hebt aangemaakt, zoals geplande huur of nutskosten, zodat je ze op tijd kunt betalen of vastleggen.
   - **Leveranciersregel geleerd**: een in-app melding wanneer MyCompanyDesk vanuit je bevestigde concepten een nieuwe vaste-leveranciersregel voor de bankfeed heeft geleerd.
   - **Tips en nieuws van MyCompanyDesk**: hooguit één mailtje per maand.
   Echt belangrijke berichten over je account sturen we altijd; die kun je niet uitzetten.
3. Op dezelfde pagina zet je ook pushmeldingen aan voor het apparaat dat je gebruikt
4. Heb je de browservraag weggeklikt? Klik dan op het belletje voor meldingen bovenaan de app, kies **Meer opties** (drie stippen) en tik op **Aanzetten** om pushmeldingen later alsnog in te schakelen
5. Wijzigingen worden automatisch opgeslagen

## De meldingslijst

Meldingen zijn ingedeeld in drie groepen, zodat de lijst als een tijdlijn leest: **Vandaag**, **Gisteren** en **Eerder**.

Als je de lijst opent, worden alle meldingen daarin als gezien gemarkeerd: het getal op de bel springt terug naar nul, maar elke rij houdt zijn eigen ongelezen stipje tot je hem opent.

Als er op een dag meerdere vergelijkbare informatieve updates binnenkomen, bijvoorbeeld release notes of producttips, vouwen ze in tot de nieuwste. Een knop toont hoeveel er nog meer zijn; klik om de groep uit te vouwen, klik nogmaals om hem in te klappen.

Op een telefoon of tablet kun je een rij swipen om snel iets te doen: naar links om af te wijzen, naar rechts om te snoozen. De rij laat zien wat er gebeurt als je loslaat. Op elke rij staan ook knoppen voor Afwijzen en Snooze.

Je kunt door de lijst bewegen met het toetsenbord: pijltjestoetsen verplaatsen de selectie, Enter of Spatie opent de geselecteerde melding, en Esc sluit de popover of het sheet. De popover of het sheet staat boven andere zwevende UI, zodat de focus erbinnen blijft zolang het open is.

Als de lijst voor de eerste keer laadt, zie je grijze placeholderrijen die eruitzien als echte meldingen, in plaats van een spinner, zodat de lay-out niet verschuift zodra de echte rijen binnenkomen. Als je een rij afwijst of snoozt, schuiven de rijen eronder omhoog in plaats van meteen te verspringen. Een ingeklapte groep vouwt soepel uit.

## De meldingspopover en het sheet

Op desktop opent een klik op het belletje een compacte popover eronder met dezelfde meldingslijst. Op een telefoon of tablet opent het belletje een volledig sheet. Beide zijn bedoeld als een snelle blik: klik op een rij om de popover of het sheet te sluiten en het onderliggende record direct te openen.

Een link onderaan, **Alle meldingen bekijken**, opent de eigen **Meldingen**-pagina op `/meldingen`. Die pagina geeft de lijst genoeg ruimte om op brede schermen het detailpaneel naast de lijst te tonen, met dezelfde toetsenbordtriage: pijltjestoetsen om te lopen, Enter of Spatie om te openen, en `E` om de geselecteerde melding af te handelen.

Zolang de popover of het sheet open is, worden inkomende binnenkomst-popups onderdrukt; die hervatten nadat je hem sluit.

## Een melding snoozen

Je kunt een actiemelding tijdelijk uitstellen zonder hem als gelezen te markeren. Klik op het belletje om de lijst te openen en kies bij de melding die je wilt uitstellen voor **Snooze**. Je kunt snoozen tot:

- **1 uur** vanaf nu
- **Morgen** om 09:00
- **Volgende week** om 09:00

Na de volgende keer ophalen verdwijnt de melding uit de ongelezen lijst, maar de regel blijft nog even zichtbaar met een knop om het ongedaan te maken. Release notes en tips kun je niet snoozen; die lees je of markeer je als gelezen.

## Niet storen

Open de meldingslijst en tik in de kop op **Meer opties** (drie stippen) om **Niet storen** in te stellen voor pushmeldingen. Je kunt kiezen uit:

- **Uit**
- **1 uur**
- **Tot morgen** om 09:00

Als Niet storen actief is, worden pushmeldingen tegengehouden, maar de meldingen verschijnen nog wel in de app en je e-mails blijven gewoon doorkomen. Een chip in de kop van het paneel toont aan dat Niet storen aan staat en tot hoe laat.

## Het detailpaneel

Het detailpaneel staat op de eigen **Meldingen**-pagina (`/meldingen`), waar de lade de breedte heeft om de lijst en het paneel naast elkaar te tonen. Het maakt geen deel uit van de compacte bel-popover of het sheet op kleinere schermen. Klik op een melding op de pagina om het paneel met de volledige context te openen. Bij een te late factuur zie je het totaal, het openstaande bedrag, de betaalstatus en de factuurdatum. Bij een BTW-deadline zie je de periode en vervaldatum. Bij opgetelde meldingen zie je in het paneel de afzonderlijke facturen, offertes of records waar de samenvatting voor staat.

Het paneel wacht tot het bijbehorende record is geladen voordat het wisselt. Tot die tijd blijft de vorige melding zichtbaar en staan de knoppen op inactief, zodat er niets onder je cursor verschuift. Zodra het record klaar is, fade het paneel in één keer over naar de nieuwe melding.

De acties voor die melding worden gerangschikt zodat de belangrijkste actie als eerste staat en als hoofdactie wordt gemarkeerd. De rest blijft op dezelfde rij staan. Passen er meer acties dan het paneel ruimte heeft, dan verhuizen de overige acties achter de knop **Acties tonen** (drie stippen). Tik daarop om de rest te zien zonder de lade te sluiten.

Welke acties beschikbaar zijn, hangt af van de melding:

- **Markeer als betaald**: boekt een handmatige betaling voor het resterende bedrag en rondt de factuurmelding af.
- **Markeer als ingediend**: markeert de BTW-periode als ingediend; alleen zichtbaar bij BTW-deadlines.
- **Verstuur herinnering**: stuurt een betalingsherinnering voor de factuur, zichtbaar bij te late facturen.
- **Openen**: opent het bijbehorende record, zoals de factuur, offerte of het contract.
- **Snooze** (of **Later**): stelt de melding tijdelijk uit zonder hem als gelezen te markeren.
- **Afwijzen** (of het **X**-icoon): verwijdert de melding uit je eigen lijst met ongelezen meldingen. Op een telefoon staat hetzelfde sluiticoon rechtsboven in de detail-overlay, zodat het niet over het bedrag heen valt.

Release notes en tips hebben geen detailpaneel, omdat er geen onderliggend record is waar je op kunt acteren.

Pushmeldingen werken in je browser en in de Android-app. Op Android zie je het app-icoon, de kleur van de meldingscategorie en, als het kan, de avatar van de afzender.

Mis je een melding? Controleer dan zowel de meldingsschakelaar als het e-mailadres van je account.
