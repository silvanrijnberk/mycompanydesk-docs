---
title: Klanten
---

# Klanten

Beheer je volledige klantendatabase. Elke factuur, offerte en elk project is gekoppeld aan een klantrecord.

## Overzicht

De klantenpagina toont al je klanten met belangrijke informatie in een oogopslag. De lijst is gesorteerd op naam, met je favorieten bovenaan. Zoeken vindt klanten op naam, klantnummer, e-mailadres of plaats. Met de statustabs wissel je tussen Alle statussen, Actief, Prospects, Archief en Prullenbak, en met een datumbereikfilter perk je de lijst verder in.

## Een klant aanmaken

1. Ga naar **Klanten** en klik op **Nieuwe klant**
2. Vul de klantgegevens in:
   - **Naam**: bedrijfs- of persoonsnaam (verplicht)
   - **E-mail**: contacte-mail voor het versturen van facturen
   - **Telefoon**: contacttelefoonnummer
   - **Adres**: straat, postcode, plaats, land
   - **BTW-nummer**: BTW-registratie van de klant (voor B2B)
   - **Klantnummer**: automatisch gegenereerd of aangepast
3. Klik op **Opslaan**

::: tip
Klantkiezers door de hele app (facturen, offertes, urenregistratie en meer) bevatten een link **Nieuwe klant toevoegen** die de nieuwe-klantpagina opent, zodat je tussendoor een ontbrekende klant kunt toevoegen.
:::

### KVK-autofill

Bij het aanmaken van een Nederlandse klant kan MyCompanyDesk bedrijfsgegevens automatisch invullen vanuit het KVK-register. Er zijn twee manieren om gegevens op te zoeken:

- **Zoeken op naam**: Begin de bedrijfsnaam te typen in het **Naam**-veld. Er verschijnt een dropdown met overeenkomende KVK-vermeldingen, inclusief plaats en KVK-nummer. Kies een vermelding om de naam en het KVK-nummer automatisch in te vullen.
- **KVK-nummer opzoeken**: Voer een 8-cijferig KVK-nummer in bij het **Kamer van Koophandel**-veld. Bij het verlaten van het veld zoekt MyCompanyDesk het nummer op en vult lege velden in (naam, adres, postcode, plaats, land).

Bij een geslaagde opzoeking verschijnt een geverifieerd-badge naast het KVK-nummerveld. Als het nummer niet wordt gevonden, krijg je een foutmelding te zien. Beide opzoekingen zijn alleen beschikbaar voor Nederlandse klanten.

## Prospects

Een prospect is een potentiële klant zonder klantnummer. Je kunt offertes maken voor prospects, maar geen facturen. Markeer een klant als prospect met de **Prospect**-schakelaar op het klantformulier; prospects krijgen een eigen **Prospects**-tab op de klantenpagina en een badge op hun kaart. Wordt een prospect een echte klant, open dan de detailpagina en gebruik **Converteren naar klant**: je kent een klantnummer toe en het record wordt een gewone klant.

## Klantdetailpagina

De klantdetailpagina toont:

- **Contactgegevens**: e-mail, telefoon en adres
- **Bedrijfsgegevens**: BTW-nummer, KVK-nummer, IBAN en betalingstermijn
- **Facturatiegegevens**: uurtarief, betalingstermijn en of automatische facturatie van geregistreerde uren actief is
- **Overzicht**: totaal gefactureerd, aantal facturen en datum laatste factuur
- **Recente facturen**: de laatste facturen voor deze klant, met een link naar de volledige lijst
- **Recente urenregistraties**: de laatst geregistreerde uren voor deze klant
- **Contracten**: actieve en inactieve contracten, met ondertekeningsstatus-badges en een pdf-voorbeeldicoon wanneer e-signing is ingeschakeld
- **Notities**: vrije notities over deze klant
- **Acties**: bewerken, factuur aanmaken, offerte aanmaken, archiveren en verwijderen

### E-mailgezondheidsbanner

Er verschijnt een waarschuwingsbanner bovenaan de klantdetailpagina wanneer het e-mailadres van de klant recent is gebounced (permanent onbestelbaar) of een spamklacht heeft gegenereerd. De banner blijft stil wanneer het adres gezond is.

- **Bounce**: toont een rode banner met de datum van de laatste mislukte verzending en de afwijsreden van de e-mailprovider. Als er geen specifieke reden is opgegeven, wordt er een algemene melding getoond.
- **Klacht**: toont een gele banner die waarschuwt dat de klant je e-mail als spam heeft gemarkeerd. Het bericht raadt af om nog meer mail naar dat adres te sturen zonder eerst contact op te nemen.

Deze informatie komt van provider-events en de bezorgstatus van uitgaande berichten, zodat je bezorgproblemen ziet voordat je de volgende factuur of offerte verstuurt.

## Favorieten

Met favorieten heb je je belangrijkste klanten altijd binnen handbereik:

- **Geef een klant een ster** op de kaart in de lijst, in het snelle-weergavepaneel of op de detailpagina. Een gele ster markeert favorieten.
- **In bulk toevoegen of verwijderen**: selecteer meerdere klanten en gebruik de bulkacties **Toevoegen aan favorieten** of **Verwijderen uit favorieten**.
- **Altijd bovenaan**: favorieten staan altijd bovenaan de klantenlijst en bovenaan elke klantkiezer in de app (facturen, offertes, urenregistratie), gemarkeerd met een ster.

## Acties

- **Bewerken**: klantinformatie bijwerken
- **Factuur aanmaken**: start een nieuwe factuur vooraf ingevuld met deze klant
- **Offerte aanmaken**: start een nieuwe offerte voor deze klant
- **Archiveren**: verplaats naar archief (kan later worden hersteld)
- **Verwijderen**: getrapt verwijderen, zie hieronder

### Een klant verwijderen

Verwijderen gaat in stappen, zodat je nooit per ongeluk gegevens kwijtraakt. Een actieve klant verwijderen archiveert de klant eerst. Een gearchiveerde klant verwijderen verplaatst de klant naar de prullenbak. Verwijderen vanuit de prullenbak is permanent. Je kunt op elk moment herstellen vanuit het archief of de prullenbak, en de hele prullenbak in een keer legen via de Prullenbak-tab.

## Bulkacties

Selecteer meerdere klanten voor:

- **Toevoegen aan / verwijderen uit favorieten**: de selectie als favoriet markeren of de markering weghalen
- **Archiveren**: actieve klanten in bulk archiveren
- **Herstellen**: gearchiveerde of weggegooide klanten terughalen
- **Naar prullenbak**: gearchiveerde klanten naar de prullenbak verplaatsen
- **Verwijderen**: de geselecteerde klanten permanent verwijderen

## Snelle weergave

Op desktop kun je op een klant in de lijst klikken om het **snelle weergave** schuifpaneel te openen. Dit toont belangrijke details en acties zonder de lijst te verlaten:

- Financieel overzicht: totaal gefactureerd, aantal facturen en openstaand bedrag
- Contactgegevens, adres, klantnummer, BTW-nummer, uurtarief, betalingstermijn en datum laatste factuur
- Snelle acties: factuur aanmaken, offerte aanmaken, e-mail sturen en favoriet aan of uit
- Een **Bewerken**-knop die de volledige bewerkpagina opent

## Klanten importeren

Importeer je bestaande klantendatabase vanuit CSV:

1. Ga naar **Profiel > Importeren**
2. Selecteer **Klanten** als gegevenstype
3. Upload je CSV-bestand
4. Koppel je CSV-kolommen aan MyCompanyDesk-velden (naam, e-mail, adres, etc.)
5. Bekijk het voorbeeld
6. Bevestig om te importeren

## Klanten exporteren

Exporteer je klantenlijst als CSV via **Instellingen > Gegevens downloaden** (beschikbaar vanaf het Starter-abonnement). Op dezelfde pagina kun je ook een volledige back-up van al je gegevens maken.

## Tips

- Houd e-mailadressen van klanten up-to-date; ze worden gebruikt voor factuurverzending
- Zoeken werkt op naam, klantnummer, e-mailadres en plaats
- Geef je belangrijkste klanten een ster als favoriet voor snelle toegang
- Vul BTW-nummers in om verlegde BTW op B2B-facturen in te schakelen
