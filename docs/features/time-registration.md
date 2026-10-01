---
title: Uren & agenda
description: "Schrijf uren, plan je dagen en zet declarabele tijd om in facturen. Uren & agenda zet urenregistratie, je agenda en agendasuggesties op een plek."
last_verified: 2026-10-01
---

# Uren & agenda

Schrijf je uren, plan je dagen en zet declarabele tijd om in facturen. De pagina **Uren & agenda** in de zijbalk combineert urenregistratie met een agenda: je ziet het plan voor vandaag, geplande registraties naast gelogde uren en suggesties uit je gekoppelde agenda's, alles op een plek.

## De pagina in het kort

Wissel tussen vier weergaven met de kiezer bovenaan (veeg tussen periodes op mobiel):

- **Dag**: het plan en de gelogde uren van vandaag. Afhankelijk van je instellingen zie je een tijdlijn of een compacte lijst, met geplande registraties apart van gelogde. Afspraken uit gekoppelde agenda's verschijnen naast je registraties en zijn met een tik om te zetten naar een urenregistratie, en je krijgt suggesties op basis van je recente activiteit.
- **Week**: op desktop een planner van zeven dagen waarin gevulde blokken gelogde uren zijn en gearceerde blokken gepland; klik op een leeg vak om een registratie toe te voegen. Op mobiel een samenvatting per dag waar je op kunt tikken.
- **Maand**: totalen per dag; selecteer een dag om ernaartoe te springen.
- **Lijst**: een doorzoekbare tabel van alle registraties met filters voor factuurstatus, klant, project en reizen, plus totalen voor de huidige selectie.

Geplande registraties dragen het label **Gepland**; druk op **Bevestigen** zodra het werk echt is gedaan om ze om te zetten naar gelogde uren.

Wil je dit niet handmatig doen? Zet **Geplande tijd automatisch bevestigen** aan in de agenda-instellingen. Geplande registraties worden dan automatisch bevestigd zodra de geplande datum is verstreken, ook als je de agenda niet opent.

Totalen tellen alleen uren die echt gewerkt zijn. Geplande registraties voor latere dagen staan buiten de urentotalen op het dashboard (**Uren dit jaar**), in de rapportages (**Geregistreerde uren**) en onder **Werk & tijd**, totdat je ze bevestigt; het zijpaneel benoemt die grondslag. De urencriteriummeter voor de inkomstenbelasting rekent met een eigen grondslag, die onder de meter staat: alleen je eigen bevestigde uren plus reistijd, dus dat getal mag afwijken van de totalen hier.

## Uren schrijven

### Timer

Op mobiel bevat de dagweergave een timer: start hem als je begint met werken en stop hem om de verstreken tijd als registratie te loggen. Via de werkmodus-instelling maak je de timer je standaardmanier van werken (zie Instellingen hieronder).

### Handmatige registraties

1. Klik op **Uren toevoegen** (sneltoets A, of de + knop op mobiel)
2. De snelle invoerlade opent: kies de klant en eventueel een project, vul je uren in en pas waar nodig de omschrijving en het tarief aan
3. Voer tijd in als totaal aantal uren, of schakel naar een begin- en eindtijd
4. Sla de registratie op

### Standaard regelomschrijving

Wanneer je een urenregistratie toevoegt, wordt het omschrijvingsveld automatisch vooraf ingevuld vanuit je standaard regelomschrijvingen. Het systeem controleert in volgorde:

1. De standaard regelomschrijving van het project
2. De standaard regelomschrijving van de klant
3. De standaard regelomschrijving van de werkruimte

Je eigen invoer wordt nooit overschreven. Zodra je een eigen omschrijving typt, wordt de vooraf ingevulde waarde niet meer vervangen.

### Alleen-uren-modus

Log je liever alleen een totaal per dag? Zet dan **Alleen uren modus** aan in de agenda-instellingen. Dit verbergt de tijdlijn en de invoer voor begin- en eindtijd, zodat je alleen het totaal aantal uren per dag invult. Het tarief en het declarabel-veld blijven beschikbaar.

## Je uren factureren

Het tarief dat bij elke urenregistratie wordt getoond, is het **effectieve uurtarief** van die registratie. Heeft de registratie een eigen uurtarief, dan wordt dat gebruikt; anders valt het terug op het projecttarief, dan het klanttarief, en uiteindelijk op het standaard uurtarief van de werkruimte. De regelprijs op een factuur sluit dus altijd aan bij het daadwerkelijke tarief dat bij de registratie is opgeslagen.

### Een factuur maken vanaf de pagina Uren & agenda

Heb je niet-gefactureerde registraties, klik dan op **Factuur aanmaken**. Er opent een lade waarin je een klant kiest; je ziet alle niet-gefactureerde registraties van die klant met het totaal. Bevestig, en er wordt een conceptfactuur aangemaakt met een regel per registratie. Declarabele reistijd en reiskosten die aan die registraties zijn gekoppeld, komen er als aparte regels bij.

### Losse registraties kiezen op het factuurformulier

Wil je maar een deel van de registraties factureren? Maak of bewerk dan direct een factuur: het factuurformulier heeft een urensectie die de niet-gefactureerde registraties van de gekozen klant toont, zodat je precies kiest welke je meeneemt.

### Regelomschrijvingen op de factuur

Factuurregels worden automatisch omschreven: eerst de omschrijving van de registratie zelf, anders de projectnaam, anders de periode. Een omschrijvingssjabloon per klant (ingesteld op de klantpagina) gaat boven dit formaat.

### Automatisch uren factureren

Automatisch factureren regel je per project. Op een projectpagina kies je hoe de uren van dat project gefactureerd worden:

- **Handmatig** (de standaard): die maak je zelf aan vanuit de uren van het project.
- **Op vaste dag** (de standaard): je kiest het ritme op de projectpagina: elke week op een weekdag, of elke maand op een dag van de maand. De uren die tot en met de vorige factuurdag gelogd zijn, plus de doorbelaste uitgaven, gaan in één factuur naar de klant van het project. Een maand factureert op de gekozen dag, tot de 28e, of op de laatste dag van de maand, zodat korte maanden nooit overslaan; de regel staat in `packages/shared/src/logic/billing-schedule.ts#isValidBillingSchedule`.
- **Bij afronding**: markeer je het project als afgerond, dan gaat alles wat nog open staat mee naar een eindfactuur voor de klant.

Valt het project onder een contract dat zelf factureert, dan bepaalt dat contract en zegt de projectpagina dat ook; je geeft zo'n project geen eigen ritme.

Op de pagina van de klant bundelt de kaart **Automatisch factureren** alles: elk project van die klant met zijn keuze, een schakelaar voor uren zonder project, en hoe versturen werkt:

- **Klaarzetten**: de factuur wordt voor je aangemaakt, je krijgt een melding en je verstuurt hem zelf.
- **Automatisch versturen**: de factuur wordt aangemaakt, je krijgt een melding, en een dag later gaat hij vanzelf naar de klant. Die dag kun je hem nog tegenhouden; een tegengehouden factuur blijft gewoon klaar staan in de app.

Alles wat voor dezelfde klant op hetzelfde moment vervalt komt op één factuur, tenzij een project zijn eigen factuur wil. Uren zonder project sluiten zich aan bij die factuur wanneer de schakelaar op de klantenkaart aan staat; hun dag stel je daar in met dezelfde kieslijst als bij de projecten. De eerste automatische factuur verstuur je het beste zelf, zodat je een keer gezien hebt hoe hij eruitziet; de kaart zegt dat bij de eerste factuur ook.

Alles wat buiten de gewone rit valt houdt het automatische versturen tegen: een klant zonder e-mailadres, uren zonder tarief, een bedrag dat merkbaar boven de vorige maanden uitkomt, of een factuur die een langere periode beslaat omdat automatisch factureren een tijd stil stond. Die facturen worden alleen klaargezet, en de melding vertelt je waarom.

Uitgaven doen alleen mee wanneer de uitgave zelf op [doorbelasten bij de klant](/features/expenses#doorbelasting-en-kostprijswijzigingen) staat.

Bevat je abonnement automatisch urenfacturering niet, dan pauzeert het tot je abonnement het weer doet; de melding vertelt je dat. Automatische facturen gebruiken het standaard BTW-tarief van je werkruimte en respecteren je KOR- of vrijgesteld-instellingen, net als facturen die je handmatig aanmaakt.

## Bulkacties

Selecteer meerdere registraties in de lijstweergave (lang indrukken op mobiel) om ze in een keer te bewerken:

- **Markeer als factureerbaar** of **Markeer als niet factureerbaar**
- **Archiveren**
- Verwijderen

## Externe agenda koppelen

Koppel Google Agenda of Outlook Agenda om je agenda en je uren samen te brengen. Open de agenda-instellingen via **Instellingen** > **Uren & agenda** of via het tandwiel op de pagina Uren & agenda, en volg de agendalink. Je kunt ook direct naar de pagina met gekoppelde agenda's gaan. Daar kun je:

- **Google Agenda** of **Outlook Agenda** koppelen
- Synchronisatie per koppeling aanzetten met **Synchronisatie inschakelen**
- De **Synchronisatierichting** kiezen: **Naar agenda** (je gelogde uren verschijnen in je agenda), **Uit agenda** (je afspraken verschijnen op de pagina Uren & agenda, klaar om te loggen) of **Beide**
- Een alleen-lezen feed **Agenda abonnement (iCal)** aanzetten om je gelogde uren te volgen vanuit elke agenda-app

Afspraken uit een gekoppelde agenda verschijnen in de dag- en weekweergave; tik erop om er een urenregistratie van te maken.

## Online afspraken en uren

Afspraken die klanten via het **Site Bookings**-blok op je website boeken, worden na goedkeuring automatisch in je agenda gezet. Een bevestigde online afspraak telt tegelijk mee als gewerkte uren in Uren & agenda, zodat je ze niet apart hoeft te loggen. Deze uren zijn **niet factureerbaar** via Uren & agenda; de omzet van de afspraak factureer je vanuit de afspraak zelf. Zie [Online afspraken](/features/site-bookings) voor het instellen van je boekbare tijden.

## Instellingen

De agenda-instellingen vind je onder **Instellingen** > **Uren & agenda** of via het tandwiel op de pagina Uren & agenda. Hier stel je in:

- **Alleen uren modus**, **Geplande tijd automatisch bevestigen**, en ander invoergedrag
- De werkmodus: **Uren**, **Diensten** of **Timer**
- De werktijden die op de tijdlijn zichtbaar zijn
- Welke stappen de snelle invoer toont (project, notities, reizen)
- Het standaard uurtarief (teambeheerders)
- Reisstandaarden zoals adressen, voertuig en kilometertarief
- Gebruik je huidige locatie als startpunt voor een rit, als je apparaat dat toestaat
- Een link om een externe agenda te koppelen

## Tips

- Schrijf dagelijks je uren voor nauwkeurige administratie; met de suggesties log je terugkerend werk met een tik opnieuw
- Plan je week vooruit met geplande registraties en bevestig ze gaandeweg
- Controleer regelmatig je niet-gefactureerde uren, zodat er geen declarabele uren blijven liggen
- Koppel je agenda een keer en je afspraken worden automatisch logbare registraties
