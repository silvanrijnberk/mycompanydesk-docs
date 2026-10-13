---
title: Bonnen scannen
description: "Fotografeer een bon of upload een PDF en AI-gestuurde OCR vult de uitgave in. Per maand: 3 scans op Desk en 200 op Office."
---

# Bonnen scannen

Extraheer automatisch uitgavegegevens uit bonafbeeldingen en PDF-facturen met behulp van AI-gestuurde OCR.

::: info
Bonnen scannen is beschikbaar op elk abonnement, met een maandelijkse limiet op het aantal scans: 3 op Desk en 200 op Office. De limiet wordt gereset op de eerste van elke kalendermaand. Zijn je scans op, dan kun je de bon nog steeds toevoegen en de gegevens zelf invullen.
:::

## Overzicht

In plaats van elke uitgave handmatig in te voeren, maak je een foto van een bon of upload je een PDF en laat je MyCompanyDesk de details automatisch extraheren.

## Ondersteunde formaten

- **Afbeeldingen**: JPEG, PNG en WebP. Een HEIC-foto (de standaard op een iPhone) werkt niet; maak dan een schermafbeelding of stel je camera in op JPEG.
- **PDF**: PDF-facturen en bonnen, maximaal 15 MB per bestand. Is een PDF groter, splits hem dan in kleinere bestanden.
- **Maximale bestandsgrootte**: 50 MB. Een grote foto wordt voor het lezen automatisch verkleind.

Een creditfactuur of retourbon (negatief totaal) kun je gewoon scannen. Op de controlekaart staat zo'n regel als **Creditbon (terugbetaling)** met een negatief bedrag, zodat je hem ziet voordat je hem boekt. Alleen het automatisch boeken van bonnen uit je inbox slaat creditbonnen over; die scan je zelf.

::: tip Bestandsgrootte
De bon die aan de aangemaakte uitgave wordt gekoppeld mag maximaal 10 MB zijn. Scan je een groter bestand, dan wordt de uitgave wel aangemaakt, maar de bon wordt niet meegevoegd en er verschijnt een waarschuwing. Je kunt de bon daarna handmatig aan de uitgave toevoegen, of voor het scannen een kleiner bestand gebruiken.
:::

## Een bon scannen

De snelste weg loopt via het gewone uitgavenformulier:

1. Ga naar **Uitgaven** en klik op **Nieuwe uitgave**.
2. Kies **Scan een bon** om een foto te maken, of upload een bestand (foto of PDF).
3. Wacht een paar seconden. Leverancier, bedrag, btw en datum worden ingevuld.
4. Controleer de gegevens, pas aan wat niet klopt en sla de uitgave op.

Wil je meer regels uit één document halen of de scanner bijsturen, gebruik dan de pagina **Bon scannen**. Die opent als je in het volledige uitgavenformulier (**Open het volledige formulier**) een bestand kiest bij **Begin met een bon**, of als je op Office bij een bijlage in je inbox kiest voor **Bon inlezen en boeken**. De scan start dan meteen.

1. Wil je eerst iets instellen, klik dan na een scan op **Nieuwe scan** en open **Geavanceerde instellingen**. Kies bij **Wat wil je scannen?**:
   - **Eén totaal**: een uitgave voor het totaal van de bon (de standaard)
   - **Meerdere items**: een uitgave per regel op dezelfde bon
2. Upload je bonbestand (slepen en neerzetten of klik om te bladeren) en klik op **Nu scannen**. De scanner verwerkt een bestand per keer en is na enkele seconden klaar.
3. Controleer de gevonden gegevens:
   - Datum
   - Bedrag
   - Leveranciersnaam
   - Omschrijving / artikelen
4. Bewerk velden die correctie nodig hebben.
5. Klik op **1 uitgave toevoegen** (of bijvoorbeeld **3 uitgaven toevoegen** bij meerdere regels) om de uitgave(n) aan te maken.

## Extractiemodi

### Eén totaal

Het beste voor eenvoudige bonnen en de meeste facturen:

- Restaurantrekeningen
- Tankstationbonnen
- Aankopen van een enkel artikel

Extraheert: datum, totaalbedrag, leverancier, omschrijving.

### Meerdere items

Het beste als je de regels van een bon of factuur als losse uitgaven wilt boeken:

- Kantoorbenodigdhedenbestellingen met meerdere artikelen
- Leveranciersfacturen met regelitems
- Boodschappenlijsten

Extraheert: individuele regelitems met omschrijvingen en bedragen.

## Geavanceerde instellingen

De scanner heeft een paneel met geavanceerde opties:

- **Instructies**: vertel in maximaal 200 tekens waar de scanner op moet letten of wat hij moet negeren (bijv. "Alleen brandstofkosten, parkeren overslaan")
- **Wat wil je scannen?**: **Eén totaal** of **Meerdere items** (standaard: Eén totaal)
- **Type uitgave**: beperk de scan tot een uitgavencategorie, of laat **Elke categorie (automatisch)** staan
- **Filteren op exacte match**: trefwoorden; alleen regels waarvan de omschrijving of leverancier bij minimaal een trefwoord past, worden overgenomen
- **Prijsbereik (incl. btw)**: een minimum- en maximumbedrag; regels buiten het bereik worden overgeslagen
- **Bon toevoegen aan uitgaven**: of het originele bestand als bon aan elke aangemaakte uitgave wordt gekoppeld (standaard aan)

## Scanlimieten

Ontvangstbewijzen en facturen met te veel regelitems om in één keer te verwerken worden geweigerd met een melding dat het aantal regels te groot is. Zie je deze melding, splits het document dan op in kleinere delen (bijvoorbeeld één pagina of een kleinere groep regelitems per keer), of voer de uitgaven handmatig in.

## Tips voor het beste resultaat

- **Goede belichting**: Maak foto's bij goede lichtomstandigheden
- **Vlak oppervlak**: Leg de bon op een vlak oppervlak
- **Volledige bon**: Zorg dat de hele bon in beeld is
- **Leesbare tekst**: Zorg dat tekst leesbaar en niet wazig is
- **Een bon per scan**: Scan bonnen afzonderlijk voor de beste nauwkeurigheid

## Na het scannen

Na bevestiging wordt de uitgave aangemaakt met:

- Alle geextraheerde gegevens vooraf ingevuld
- De originele bon als bijlage
- Een voorgestelde categorie en btw-tarief; staat erbij dat ze gegokt zijn, controleer ze dan even

Als de scanner een leveranciersland herleidt (bijvoorbeeld een buitenlandse leverancier of een gematcht Nederlands KVK-nummer), toont de controlekaart ook een btw-behandeling-kiezer. De scanner stelt een default voor op basis van de leverancier en het bedrag, maar je kunt deze voor bevestiging nog wijzigen. Dit is relevant voor intra-EU reverse-charge-aankopen en importuitgaven van buiten de EU.

Je kunt de uitgave daarna bewerken zoals elke handmatig aangemaakte uitgave.

## Valuta en dubbele boekingen

De scanner herkent wanneer een document in een andere valuta is dan euro. In dat geval toont de controlekaart het originele bedrag met valuta en een apart veld waarin je het eurobedrag invult zoals je bank het heeft omgerekend. Pas als het eurobedrag is ingevuld, kunnen de regels in vreemde valuta worden bevestigd. Is het document in euro's, dan zie je de tekst "Dit is gewoon euro" en blijft het proces ongewijzigd.

Als de scanner denkt dat een bon al eerder is geboekt, toont hij een waarschuwing met datum, leverancier en bedrag van de bestaande uitgave. Je kunt die uitgave openen, of ervoor kiezen om de bon toch opnieuw te boeken als de melding niet klopt; opslaan vraagt dan nog een keer, met "Twee keer dezelfde uitgave?", voordat er geboekt wordt. De controle is geen harde blokkade; hij voorkomt alleen per ongeluk dubbel ingevoerde bonnen.

Staat er voor de gescande bon, of vlak daarbij, al een uitgave in je boeken, dan draagt de controlekaart de knop **Bon hieraan toevoegen** (zolang die uitgave nog geen bon heeft): de bon hangt dan als bewijsstuk aan de uitgave die er al staat, in plaats van een tweede te boeken, de rij verdwijnt uit de beoordeling, en bij de laatste rij land je direct op die uitgave. Een uitgave die al een bon heeft, krijgt er nooit een tweede overheen.

Regels op dezelfde bon blijven losse kosten: drie gelijke parkeerkaartjes op één bon boeken als drie kosten, en het dubbele bedrag wordt gevlagd in plaats van stilletjes overgeslagen. Zit de hele batch al in je boeken, dan zegt de bevestiging dat, in plaats van alles een tweede keer te boeken.

Let op: de scanner kan eigen verkoopfacturen herkennen en waarschuwen dat het document lijkt op een verkoopfactuur in plaats van een uitgave. Die waarschuwing blokkeert niet; je kunt nog steeds doorgaan als het om een retourzending of correctie gaat.

## Rechten

De bonscanner valt onder dezelfde paginarechten als de pagina Uitgaven. Een teamlid heeft **Lezen**-toegang tot Uitgaven nodig om de scanner te openen, en **Aanmaken**-toegang om een gescande bon te bevestigen als nieuwe uitgave. Leden zonder het recht Aanmaken zien de scanner wel, maar kunnen de bevestiging niet afronden. Dit geldt zowel bij uploaden vanaf de pagina Uitgaven als via een gedeelde fotoflow.

## Meerdere bonnen scannen

De uploader verwerkt een bestand per keer. Wil je meerdere bonnen verwerken, scan ze dan een voor een; elke scan telt een keer mee voor je maandelijkse limiet. Voor een bon of factuur met meerdere items kies je **Meerdere items** om met een scan meerdere uitgaven aan te maken.

## Tips

- Scan bonnen zodra je ze ontvangt, en laat ze niet opstapelen
- Controleer het geextraheerde bedrag zorgvuldig, vooral bij bonnen met meerdere valuta's
- Bewaar het originele bonbestand als bijlage voor belastingcontroledoeleinden
- Controleer bij bonnen in een vreemde valuta altijd of het eurobedrag overeenkomt met de omrekening van je bank
- Twijfel je aan een dubbele-boekingsmelding? Open de bestaande uitgave om zeker te zijn
