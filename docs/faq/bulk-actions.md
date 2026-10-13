---
title: "Bulkacties"
description: "Om bulkacties uit te voeren: ga naar de lijstweergave (Facturen, Uitgaven of Klanten), selecteer meerdere items met de selectievakjes."
last_verified: 2026-05-09
chatbot:
  triggers: ["bulk action", "bulk delete", "bulk send", "select multiple", "batch operation", "meerdere selecteren", "bulk verwijderen", "massenbearbeitung", "action en masse"]
  actions: []
  follow_up: ["How do I delete multiple invoices?", "How do I export selected items?"]
---
Om bulkacties uit te voeren:
1. Ga naar de lijstweergave (bijvoorbeeld Facturen, Offertes, Uitgaven of Klanten)
2. Selecteer items: op desktop verschijnt het selectievakje als je met de muis over een rij gaat. Je kunt ook in het menu van een rij kiezen voor "Meerdere selecteren"; daarna staan alle vakjes klaar
3. Onderaan het scherm verschijnt een balk met het aantal geselecteerde items, "Alles selecteren" en de beschikbare acties
4. Kies de actie, bijvoorbeeld "Markeer als betaald", "Markeer als verzonden", "Markeer als geannuleerd", "Archiveren" of "Verwijderen" (welke acties er zijn, hangt af van de lijst en van wat je selecteert)
5. Bevestig de actie als daarom wordt gevraagd

## Controles bij concepten in bulk als verzonden markeren

Markeer je conceptfacturen in bulk als verzonden, dan krijgen ze een factuurnummer en voert MyCompanyDesk dezelfde controles uit als bij één factuur. Je btw-id, IBAN en bedrijfsadres moeten ingevuld zijn, een factuur met verlegde btw kan niet worden afgerond als de klant geen btw-nummer heeft, en een regel met 0% btw (sources/vat-rates.yaml#countries.NL.zero) moet een duidelijke grondslag hebben (verlegde btw of een goedgekeurde nultariefreden). Haalt één factuur een controle niet, dan gaat de hele actie niet door; de melding noemt de factuur, zodat je die eerst kunt aanpassen.

## Uitgaven bulksgewijs archiveren

Als je meerdere onbetaalde uitgaven tegelijk archiveert, vallen hun openstaande betaalherinneringen stil. De bulkbalk toont eerst een bevestiging zodra een van de geselecteerde uitgaven onbetaald is én een vervaldatum heeft, zodat je weet hoeveel van de geselecteerde uitgaven hun herinnering kwijtraken. Zolang de uitgaven gearchiveerd zijn, blijft de herinnering uit. Zet je een gearchiveerde uitgave later terug, dan maakt de dagelijkse sweep de herinnering opnieuw aan, maar pas de volgende nacht op zijn vroegst.

Tip: Gebruik eerst filters om de lijst te beperken en selecteer vervolgens alle zichtbare items voor efficiënte batchverwerking.
