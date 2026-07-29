---
title: Objecten & bezittingen
last_verified: 2026-07-27
---

# Objecten & bezittingen

MyCompanyDesk houdt al je zakelijke bezittingen op één plek: vastgoed, voertuigen, machines, inventaris en overige activa. Per object volg je eigendom, waarde, huuropbrengsten, gekoppelde contracten en gerelateerde facturen.

## Een object aanmaken

1. Ga naar **Instellingen** > **Objecten**.
2. Klik op **Nieuw object** en kies een type:
   - **Vastgoed** - gebouwen en grond
   - **Voertuig** - auto's, bestelbusjes, vrachtwagens en dergelijke
   - **Machine / installatie** - bedrijfsmiddelen
   - **Inventaris** - kantoor- of winkelinrichting
   - **Overig** - elk ander bezit
3. Vul de verplichte velden in: minimaal een naam, optioneel een omschrijving, aanschafdatum/waarde en status.
4. Sla op.

Het object is nu beschikbaar om te koppelen aan contracten, facturen, uitgaven en urenregels.

## Objectdetailpagina

De detailpagina toont alle informatie over een object in één oogopslag:

- Objectinformatie en type
- Huidige status
- **Totale omzet**: werkelijke betaalde facturomzet voor dit object, inclusief huur, servicekosten, eenmalige kosten en verkoopfacturen die eraan zijn gekoppeld
- **Actieve contracten**: aantal momenteel actieve contracten gekoppeld aan dit object (alleen zichtbaar als het object contracten heeft of vastgoed is)
- **WOZ-historie** (voor Vastgoed) - jaarlijkse WOZ-waarden voor de berekening van box 3
- **Objectoverzicht** (voor vastgoedobjecten met een geregistreerde WOZ-waarde) - geactiveerde waarde, opgebouwde afschrijving, huidige boekwaarde en de wettelijke bodemwaarde van het gebouw
- Gekoppelde contracten en huurhistorie (alleen zichtbaar als relevant)
- **Facturen**: elke factuur die meetelt voor de totale omzet, met status en bedrag exclusief BTW (alleen zichtbaar als het object facturen heeft of vastgoed is)
- **Kilometeradministratie** (voor voertuigen met ritten) - de gereden ritten in dit voertuig, totaal aantal kilometers, per jaar en recente ritten

De pagina verbergt kaarten die niet bij het objecttype horen. Standaardhuur, WOZ-historie en een leeg adresveld verschijnen alleen bij vastgoed of als het object die gegevens daadwerkelijk heeft. Contracten- en facturenkaarten blijven verborgen voor voertuigen, machines en andere niet-vastgoedobjecten totdat er gegevens zijn, zodat de pagina gericht blijft op het object dat je bekijkt.

### Toegewezen facturen

Elke factuurregel die aan het object is toegewezen, staat hier. Zo zie je in één keer welke werkelijke betaalde omzet het object heeft gegenereerd.

Het totaal telt alleen betaalde facturen, geen concept- of openstaande facturen. Daardoor blijft het omzetbedrag gelijk aan wat er werkelijk is binnengekomen.

### Contractsamenvatting

Bovenaan de pagina zie je een samenvatting van de actieve contracten voor dit object:

- Aantal actieve contracten
- Huidige maandelijkse huur
- Volgende indexatiedatum
- Einddatum van het contract dat het snelst afloopt

Dit geeft een snel financieel overzicht zonder elk contract apart te openen.

### WOZ-historie en bodemwaarde

Voor **Vastgoed**-objecten kun je de jaarlijkse WOZ-waarde vastleggen. Deze waarde wordt gebruikt voor de berekening van box 3 (vermogensbelasting) in je administratie.

De pagina toont ook de **bodemwaarde**. Voor gebouwen mag de belastingwaarde niet lager zijn dan deze vloer. MyCompanyDesk gebruikt de WOZ-waarde, de bodemwaarde en de aanschafdatum om de juiste waarde voor de belastingaangifte te bepalen.

Dit geldt alleen voor gebouwen. Voertuigen, machines, inventaris en andere bezittingen hebben geen bodemwaarde.

### Kilometeradministratie (voertuigen)

Voertuigen die voor zakelijke ritten worden gebruikt, krijgen zodra ze minstens één gekoppelde rit hebben een kaart **Kilometeradministratie**. Dit is de ritadministratie die de Belastingdienst verwacht voor een zakelijk voertuig: het toont de ritten die met dit voertuig zijn gereden, niet de exploitatiekosten van het voertuig zelf.

De kaart toont:

- **Totaal gereden** in dit voertuig
- **Gereden in {jaar}**, als het voertuig dit kalenderjaar is gebruikt
- **Aantal ritten**
- **Laatste rit**
- Een **per jaar**-overzicht van kilometers en ritten
- De meest recente ritten, met vertrek, bestemming, datum en klant

Eerst worden alleen de meest recente ritten getoond. Zijn er meer? Dan verschijnt een knop **oudere ritten tonen**, zodat de lijst nooit stilletjes wordt afgekapt.

Een rit wordt gekoppeld aan het voertuig zodra je bij het invoeren van de reis dit voertuig selecteert als voertuig van de zaak. Die rit krijgt geen aparte kilometervergoeding, want de werkelijke kosten (brandstof, onderhoud en afschrijving) worden via uitgaven op de bezitting bijgehouden.

### Objectoverzicht en bodemwaarde

Het objectoverzicht geeft het financiële beeld van een vastgoedobject in het grootboek:

- Geactiveerde waarde
- Opgebouwde afschrijving
- Huidige boekwaarde
- Wettelijke bodemwaarde

Deze cijfers zijn nodig voor de jaarlijkse balans en belastingaangifte.

Dit onderdeel verschijnt alleen voor **Vastgoed**-objecten met een geregistreerde WOZ-waarde. Voertuigen, machines, inventaris en andere bezittingen hebben geen bodemwaarde en tonen dit overzicht daarom niet.

### Verwijdering / verkoop

Als een bezitting wordt verkocht of afgevoerd, kun je de verwijdering vastleggen:

1. Open het object.
2. Kies **Verwijderen / Verkocht** in het verwijdering-onderdeel.
3. Voer de verwijderingsdatum en verkoopopbrengst in.
4. Sla op.

MyCompanyDesk berekent dan de boekwinst of -verlies en verwerkt dit in de financiële administratie.

### Contractondertekeningsstatus

Voor elk actief contract zie je of het digitaal ondertekeningsproces is voltooid. De objectpagina toont:

- Contractpartijen
- Start- en einddatums
- Ondertekeningsstatus
- Maandelijkse huur

Klik op een contract om het volledige detail te openen.

### Objecten koppelen

Objecten kun je koppelen aan:

- **Contracten** - huur- en leasecontracten
- **Facturen** - huur, servicekosten en verkoop
- **Uitgaven** - onderhoud en exploitatiekosten
- **Urenregels** - reizen en werk aan of met het object

Open het betreffende document en selecteer het object in de objectkiezer. De koppeling wordt aan beide kanten bewaard, zodat je vanaf het object naar het document kunt navigeren en terug.

## Objecttypen en hun velden

| Type | Typische velden |
|------|-----------------|
| Vastgoed | Adres, WOZ-waarde, bodemwaarde, huurgegevens, aanschafwaarde |
| Voertuig | Kenteken, aanschafwaarde, standaardhuur, status, kilometeradministratie |
| Machine / installatie | Omschrijving, aanschafwaarde, status, afschrijving |
| Inventaris | Omschrijving, aanschafwaarde, status |
| Overig | Omschrijving, aanschafwaarde, status |

Elk type heeft alleen de velden die voor dat soort bezitting relevant zijn. Zo is er voor een voertuig geen WOZ-waarde en voor een machine geen kenteken.

## Waar vind je objecten

- **Instellingen** > **Objecten** - overzicht van alle objecten en bezittingen
- **Menu** > **Objecten** - snelle toegang als dit menu-item voor jouw rol is ingeschakeld
- Gekoppeld vanuit contracten, facturen, uitgaven en urenregels

## Gerelateerd

- [Contracten](/nl/features/contracts)
- [Facturen](/nl/features/invoices)
- [Uitgaven](/nl/features/expenses)
- [Urenregistratie](/nl/features/time-registration)
