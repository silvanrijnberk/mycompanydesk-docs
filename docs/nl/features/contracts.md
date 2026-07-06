---
title: Contracten
---

# Contracten

Beheer terugkerende serviceovereenkomsten en huurcontracten met automatische facturatieschema's.

## Overzicht

Contracten vertegenwoordigen lopende overeenkomsten met klanten, zoals maandelijkse servicecontracten, huurovereenkomsten of onderhoudsplannen. Ze kunnen automatisch facturen genereren volgens een vast schema.

::: info
De contractenmodule is optioneel. Schakel deze in via **Instellingen > Onderdelen** als je hem niet in de navigatie ziet.
:::

## Een contract aanmaken

1. Ga naar **Contracten > Nieuw contract**
2. Vul in:
   - **Naam**: een beschrijvende titel (bijv. "Maandelijkse schoonmaakdienst")
   - **Klant**: de contractpartij
   - **Dienst en bedrag**: wat je levert en het terugkerende facturatiebedrag
   - **Herhaling**: hoe vaak je factureert (wekelijks, maandelijks, per kwartaal, jaarlijks)
   - **Startdatum**: wanneer het contract begint
3. Klik op **Opslaan**

Een contract heeft geen einddatumveld; het blijft factureren totdat je het pauzeert. In het formulier kies je ook wanneer de eerste factuur moet worden aangemaakt en of gegenereerde facturen automatisch worden verstuurd.

## Contractstatussen

| Status | Beschrijving |
|---|---|
| **Actief** | Momenteel van kracht, genereert facturen |
| **Gepauzeerd** | Staat stil, er worden geen facturen gegenereerd |

Aan het einde van zijn looptijd kan een contract ook de status **Beëindigd**, **Verlopen** of **Opgezegd** hebben.

## Automatische facturatie

Actieve contracten met een herhalingsschema genereren automatisch facturen bij elke facturatieperiode. Het systeem:

1. Maakt een conceptfactuur aan op basis van de contractvoorwaarden
2. Past de juiste klant, bedrag en omschrijving toe
3. Volgt je factuurnummeringsinstellingen

Je kunt gegenereerde facturen handmatig bekijken en versturen, of automatische verzending instellen.

## Koppelen aan objecten

Contracten kunnen worden gekoppeld aan [objecten/activa](/nl/features/objects) voor verhuurbeheer:

- Koppel een contract aan een pand, voertuig of apparaat
- Houd bij welke objecten momenteel verhuurd zijn en aan wie
- Bekijk de contractgeschiedenis per object

## Statistieken

De contractenlijstpagina toont samenvattende kaarten:

- **Actieve contracten**, met daarnaast het totale aantal
- **Maandelijkse omzet** uit actieve contracten, genormaliseerd over de verschillende facturatiefrequenties
- **Totaal contracten**
- **Volgende factuur**, de datum waarop de volgende contractfactuur wordt gegenereerd

Klik op een kaart om de lijst erop te filteren.

## Bulkacties

Selecteer meerdere contracten om ze in één keer te **archiveren** of te **verwijderen**. In de archiefweergave kun je herstellen of naar de prullenbak verplaatsen; in de prullenbakweergave kun je herstellen of definitief verwijderen.

## Ondertekenen

Contracten ondersteunen elektronisch ondertekenen. Je kunt partijen toevoegen via het contractformulier, en elke partij ontvangt een ondertekenlink per e-mail.

Wanneer een contract is ondertekend, toont de contractdetailpagina een ondertekenkaart met:

- De status van elke partij (uitgenodigd, bekeken, getekend of verlopen)
- Een **Bekijk**-knop die een inline voorbeeld van het ondertekende document opent
- Een downloadknop om de PDF op te slaan

De voorbeeldpagina bevat een werkbalk met print- en downloadacties, en toont het ondertekende contract direct in de browser. Zowel de ondertekende PDF als de beoordelings-PDF bevatten de volledige contracttekst, zodat elke gedownloade kopie op zichzelf staat.

### Ondertekenen op de contractenlijst

De contractenlijst heeft een **Tekenstatus**-kolom die de ondertekenstatus toont voor elk contract met e-handtekening. De statussen verschijnen als gekleurde badges: concept (neutraal), verstuurd (waarschuwing), deels getekend (info) en actief (succes).

Een ondertekenfilter boven de lijst laat je filteren op ondertekenstatus, of op contracten zonder e-handtekening ("Geen e-handtekening").

::: info Oude contracten
Contracten die zijn aangemaakt voordat de ondertekenfunctie werd toegevoegd, tonen geen ondertekenkaart op de detailpagina. Het systeem herkent oude contracten door te controleren of het contract ondertekenpartijen, een sjabloon of ondertekeninhoud heeft. Alleen contracten die na de introductie van elektronisch ondertekenen zijn aangemaakt of bijgewerkt, tonen de ondertekenkaart.

Oude contracten tonen een streepje in de Tekenstatus-kolom en vallen onder het filter "Geen e-handtekening".
:::

### SMS-verificatie

Ondertekenlinks kunnen SMS-verificatie vereisen voordat een partij het document kan bekijken en ondertekenen. Als dit is ingeschakeld, moet de ondertekenaar een mobiel nummer opgeven en een 6-cijferige code bevestigen die per SMS wordt verstuurd.

- **Verstuur code**: na het invoeren van het mobiele nummer tikt de ondertekenaar op de knop en ontvangt een code
- **Code bevestigen**: de ondertekenaar voert de 6-cijferige code in om toegang tot het nummer te bewijzen
- **Geverifieerd-badge**: na bevestiging verschijnt een "Geverifieerd"-badge met de laatste vier cijfers van het nummer

Als een verkeerde code wordt ingevoerd, kan de ondertekenaar een nieuwe aanvragen. Je zet SMS-verificatie per ondertekenaar aan bij het toevoegen van de partijen aan het contract, dus je kunt het voor de ene partij verplichten en voor de andere niet.

## Sjabloonversies

Contractsjablonen ondersteunen versiebeheer zodat je wijzigingen in de loop van de tijd kunt volgen. Elke versie is een bevroren momentopname van de sjablooninhoud op een bepaald moment, zodat je je sjablonen kunt blijven ontwikkelen zonder bestaande contracten te beïnvloeden.

### Een versie publiceren

1. Ga naar **Contracten > Sjablonen**
2. Zoek je sjabloon en klik op de **Versies**-knop
3. Vul in het versievenster in:
   - **Label**: een korte aanduiding voor de versie (bijv. "v2"). Laat je het veld leeg, dan kent het systeem automatisch een oplopend label toe.
   - **Wijzigingsnotitie**: een korte beschrijving van wat er in deze versie is gewijzigd
4. Klik op **Publiceren**

Het huidige concept wordt vastgelegd als een nieuwe versie. Bestaande contracten blijven aan de versie gekoppeld waarmee ze zijn aangemaakt, dus publiceren herschrijft nooit historische contracttekst.

### Versiegeschiedenis bekijken

De versiegeschiedenis van elk sjabloon toont:

- Het versielabel (bijv. "v1", "v2")
- De wijzigingsnotitie en publicatiedatum
- Een **Huidige**-badge op de laatst gepubliceerde versie
- Een **Gearchiveerd**-badge op alle eerdere versies

### Hoe versies contracten beïnvloeden

Wanneer een contract wordt aangemaakt vanuit een sjabloon, wordt het vastgezet op de versie die op dat moment actueel was. Als je later een nieuwe versie van het sjabloon publiceert, blijven bestaande contracten renderen vanaf hun vastgezette versie. Je kunt daardoor veilig sjablonen herzien zonder lopende contracten te wijzigen.

## Tips

- Gebruik contracten samen met [terugkerende facturen](/nl/features/recurring-invoices) voor verschillende facturatiescenario's
- Koppel contracten aan objecten voor volledig verhuurbeheer
- Gebruik het statusfilter om actieve en gepauzeerde contracten in één oogopslag te zien
- Filter op ondertekenstatus om contracten te vinden die nog ondertekend moeten worden
- Voeg ondertekenpartijen toe bij het aanmaken van een contract om elektronisch ondertekenen in te schakelen
