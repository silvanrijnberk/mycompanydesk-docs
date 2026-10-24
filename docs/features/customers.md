---
title: Klanten
description: "Beheer je klantendatabase, met segmenttegels, zoeken en filters, en elke factuur, offerte en elk project gekoppeld aan een klantrecord."
---

# Klanten

Beheer je volledige klantendatabase. Elke factuur, offerte en elk project is gekoppeld aan een klantrecord.

## Overzicht

De klantenpagina toont al je klanten met belangrijke informatie in een oogopslag. Gebruik zoek- en filterfuncties om snel klanten te vinden. Klik je een klant aan, dan open je de detailpagina van die klant.

## Segmenten in de klantenlijst

Bovenaan de klantenpagina toont een rij tegels een snel overzicht van je klantenbestand. De getallen zijn onafhankelijk van de zoek- en datumfilters op de lijst, zodat een tegel altijd het hele klantenbestand weergeeft.

- **Klanten met achterstallige facturen**: hoeveel klanten je op dit moment nog moeten betalen. Klik op de tegel om de pagina met achterstallige facturen te openen.
- **Stil geworden**: actieve klanten die eerder wel een factuur hebben gehad, maar in de afgelopen maanden geen factuur meer hebben ontvangen. Klik op de tegel om de lijst te filteren op stil geworden klanten. De standaardperiode is zes maanden; de tegel noemt de periode die de werkruimte gebruikt (bijvoorbeeld "geen factuur in 6 maanden").
- **Mogelijke klanten**: actieve klanten die nog nooit een factuur hebben ontvangen. Klik op de tegel om de lijst te filteren op mogelijke klanten.
- **Totaal klanten**: het vaste aantal actieve klanten. Klik op de tegel om de filters van de lijst te wissen.

Met het statusfilter boven de lijst schakel je ook tussen Alle statussen, Actief, Mogelijke klanten, Stil geworden, Gearchiveerd en Prullenbak.

## Een klant aanmaken

1. Ga naar **Klanten › Nieuwe klant**
2. Vul de klantgegevens in:
   - **Naam**: Bedrijfs- of persoonsnaam (verplicht)
   - **E-mail**: Contacte-mail voor het versturen van facturen
   - **Telefoon**: Contacttelefoonnummer
   - **Adres**: Straat, postcode, plaats, land
   - **Btw-nummer**: btw-registratie van de klant (voor B2B)
   - **Klantnummer**: Automatisch gegenereerd of aangepast
3. Klik op **Opslaan**

::: tip
Je kunt ook klanten inline aanmaken bij het maken van een factuur of offerte. Je hoeft niet weg te navigeren.
:::

### KVK-autofill

Bij het aanmaken van een Nederlandse klant kan MyCompanyDesk bedrijfsgegevens automatisch invullen vanuit het KVK-register. Er zijn twee manieren om gegevens op te zoeken:

- **Zoeken op naam**: Begin de bedrijfsnaam te typen in het **Naam**-veld. Er verschijnt een dropdown met overeenkomende KVK-vermeldingen, inclusief plaats en KVK-nummer. Kies een vermelding om de naam en het KVK-nummer automatisch in te vullen.
- **KVK-nummer opzoeken**: Voer een 8-cijferig KVK-nummer in bij het **Kamer van Koophandel**-veld. Bij het verlaten van het veld zoekt MyCompanyDesk het nummer op en vult lege velden in (naam, adres, postcode, plaats, land).

Bij een geslaagde opzoeking verschijnt een geverifieerd-badge naast het KVK-nummerveld. Als het nummer niet wordt gevonden, krijg je een foutmelding te zien. Beide opzoekingen zijn alleen beschikbaar voor Nederlandse klanten.

Lukt het opzoeken niet, dan vul je de gegevens gewoon zelf in.

### Bedrijfslogo's uit het KVK-register

Voor Nederlandse klanten met een geregistreerd logo haalt MyCompanyDesk het logo op uit het KVK-register en toont het naast de bedrijfsnaam in de klantenlijst, de klantdetailpagina en de KVK-zoeksuggesties wanneer je een klant aanmaakt. Is er geen logo beschikbaar, of is het logo nog aan het laden, dan valt de app terug op een monogram zodat de rijhoogte niet verspringt.

Het logo is alleen voor weergave; het vervangt niet je eigen werkruimtelogo op facturen of documenten.

## Klantdetailpagina

De klantdetailpagina toont:

- **Contactgegevens**: Alle opgeslagen gegevens
- **Factuurgeschiedenis**: Elke factuur die naar deze klant is gestuurd
- **Uitgavengeschiedenis**: Uitgaven gekoppeld aan deze klant
- **Contracten** - Actieve en inactieve contracten, met ondertekeningsstatus-badges en een pdf-voorbeeldicoon wanneer e-signing is ingeschakeld
- **Documenten**: afspraken die voor deze klant zijn opgeslagen, zoals algemene voorwaarden, NDA's en verwerkersovereenkomsten. Als de klant een contract heeft maar geen verwerkersovereenkomst, verschijnt er een hint met een link om er een op te stellen.
- **Projecten**: Actieve en voltooide projecten
- **Statistieken**: Totale omzet, openstaand saldo, gemiddelde betaaltijd

### Ontbrekende verwerkersovereenkomst

Als een klant een contract heeft maar geen verwerkersovereenkomst in Documenten, toont de documentenkaart op de klantdetailpagina een hint en een link **Verwerkersovereenkomst opstellen**. Dit wijst je op een compliance-tekort op de plek waar je er waarschijnlijk iets aan doet. De hint verschijnt alleen als het onderdeel Contracten aan staat (Office) en de documentenkaart verder leeg zou zijn.

### E-mailgezondheidsbanner

Er verschijnt een waarschuwingsbanner bovenaan de klantdetailpagina wanneer het e-mailadres van de klant recent is gebounced (permanent onbestelbaar) of een spamklacht heeft gegenereerd. De banner blijft stil wanneer het adres gezond is.

- **Bounce**, toont een rode banner met de datum van de laatste mislukte verzending en de afwijsreden van de e-mailprovider. Als er geen specifieke reden is opgegeven, wordt er een algemene melding getoond.
- **Klacht**, toont een gele banner die waarschuwt dat de klant je e-mail als spam heeft gemarkeerd. Het bericht raadt af om nog meer mail naar dat adres te sturen zonder eerst contact op te nemen.

Deze informatie komt van provider-events en de bezorgstatus van uitgaande berichten, zodat je bezorgproblemen ziet voordat je de volgende factuur of offerte verstuurt.

## Een aparte betaler voor een klant

Sommige klanten betalen hun facturen niet zelf: een ouder, werkgever of verzekeraar doet dat. In het klantformulier maak je die keuze bij **Wie betaalt?**: **Betaalt zelf** of **Iemand anders betaalt**, met een andere klant (een bestaande of een nieuwe) als betaler. Vanaf dat moment gaan facturen, offertes, herinneringen, tekenverzoeken, strippenkaartberichten en het klantportaal naar de betaler, terwijl het document de naam van de echte klant noemt. Op de klantpagina zie je de band in beide richtingen, als **Betaald door** en **Betaalt voor**. Het adres van de betaler is het adres dat compleet moet zijn bij het definitief maken van een factuur, btw verlegd kijkt naar het btw-nummer van de betaler, de auditfile noemt de betaler als debiteur, en de bank herkent betalingen die van de betaler komen. In het klantportaal ziet de betaler alleen de facturen die aan hem gingen, en een reviewverzoek na een betaalde factuur gaat ook naar de betaler.

## Een klant koppelen aan een eigen bedrijf

Als je meer dan een bedrijf hebt, kan op de klantdetailpagina een kaart **Eigen bedrijf** verschijnen. Daarmee geef je aan dat deze klant een van je eigen bedrijven is, zodat zijn positie wordt meegenomen in de onderlinge posities op Werkruimtes.

- De kaart verschijnt alleen als je minstens twee eigen bedrijven hebt en de klant niet in de werkruimte staat die je nu bekijkt. Een bedrijf kan niet zijn eigen tegenpartij zijn.
- Kies een van je eigen bedrijven in het dropdownmenu, of kies **Geen van mijn eigen bedrijven** om een koppeling te verwijderen.
- De koppeling wordt automatisch gemaakt als het btw-nummer van de klant overeenkomt met een van je andere werkruimtes. De kaart toont dan een melding zodat je ziet dat het automatisch is gebeurd en het kunt corrigeren als het niet klopt.
- Een handmatige koppeling wint altijd van een automatische. De automatische koppeling overschrijft nooit een koppeling die je zelf hebt gezet.

## Strippenkaarten

Een strippenkaart (ook: rittenkaart of lespakket) laat een klant vooraf betalen voor een aantal keer. Maak er een via een item in je aanbod: zet daar **Strippenkaart** aan en vul de naam in, voor hoeveel keer hij geldt en wat je per keer rekent, voor welke diensten hij telt (leeg laten en hij geldt voor elke afspraak), hoe lang hij geldig blijft, en of je klant een herinnering krijgt als er nog één keer op de kaart staat. Eén btw-tarief geldt voor de hele kaart: diensten met een ander btw-tarief kunnen niet op dezelfde kaart, en met de KOR of vrijgesteld aan gaat hij zonder btw de deur uit.

Verkopen doe je vanaf de klantpagina met **Strippenkaart verkopen**, in één blad: de kaart komt uit je aanbod met zijn prijs, aan te passen voor deze klant, je zegt of de klant al betaald heeft (contant, Tikkie of bank; niets staat vooraf ingevuld), en MyCompanyDesk maakt op hetzelfde moment de definitieve factuur voor je administratie, met de kaart gekoppeld aan die factuurregel. Een factuur die je de gewone weg maakt doet hetzelfde: maak je er één definitief met een strippenkaartregel erin, dan ontstaat de kaart mee.

De klant ziet zijn kaarten in het klantportaal en via een deellink waarvoor niets hoeft in te loggen: hoeveel er nog op de kaart staat en de geschiedenis van de verkoop en elke streep. De stand of een herinnering stuur je zelf, via WhatsApp of e-mail, en de link kan je intrekken en vervangen als hij zijn werk gedaan heeft. Wil een klant eruit? Met **Geld terug** betaal je de ongebruikte keren terug via een creditnota, of je zet de kaart met **Stoppen** stil; je administratie werkt dat zelf bij en een gestopte kaart kan niet meer afstrepen.

Afstrepen gebeurt ook waar het werk zit. Rond je een afspraak af voor een klant met een kaart, dan biedt de app **Streep 1 af** (de streep zet de afspraak op Afgerond) naast **Niet gekomen**, met terugdraaien als chip in hetzelfde blad. In een groepsles vink je bij **Wie was er?** iemand aan en dan streep je meteen één keer af van diens kaart; een vinkje weg halen draait het terug. Wie voor die les al betaald heeft, staat op de lijst met de melding dat er niet hoeft te worden afgestreept. Het dashboard houdt de kaarten die bijna op of helemaal op zijn bij elkaar bij, met de herinnering één tik weg.

## Zelf om een review vragen

De knop **Vraag om een review** staat op een klant, op een betaalde factuur en bij een afgeronde afspraak. Het blad laat eerst zien wat er verstuurd wordt: een mail die je kunt bijwerken, of een WhatsApp-tekst die bij bevestiging WhatsApp opent. Waar je klant terechtkomt bepaalt je **reviewlink**, in te stellen in het blad en onder **Instellingen › Beoordelingen vragen**. Daar kies je ook waar de reviews komen (je Google-profiel, Trustpilot of je eigen link) en zet je automatische verzoeken aan: na een afgeronde afspraak en na een volledig betaalde factuur, één verzoek per klus, nooit een herinnering. In het logboek staat wat verstuurd is, wat er doorgeklikt is en waar een verzoek overgeslagen is.

## Acties

- **Bewerken**: werk de gegevens van de klant bij
- **Maak factuur**: begin een nieuwe factuur met deze klant al ingevuld
- **Offerte aanmaken**: begin een nieuwe offerte voor deze klant
- **Nieuwe werkbon**: begin een werkbon voor deze klant (als het onderdeel Werkbonnen aan staat)
- **Samenvoegen met…**: voeg een dubbele klant samen met deze klant
- **Archiveren**: verplaats naar het archief (kan later worden hersteld)

:::caution
Het archiveren van een klant met een actieve terugkerende factuur of lopende contracten vraagt eerst om een bevestiging. De waarschuwing zegt eerlijk wat archiveren doet: zolang een klant gearchiveerd is, maakt MyCompanyDesk geen terugkerende facturen meer aan en worden contracten niet meer gefactureerd, en overgeslagen periodes worden later niet alsnog gefactureerd. Eindig eerst de terugkerende factuur of het contract als die facturering moet doorlopen.
:::

Een mogelijke klant (prospect), dus een klant voor wie nog nooit een factuur is gemaakt, heeft geen knop **Maak factuur**, ook niet in het menu met meer acties, en de server weigert een factuur voor hem sowieso. De klantpagina biedt zo'n klant de knop **Converteren naar klant**; zodra de status actief is, verschijnen alle factuuracties.

- **Verwijderen**: verplaats de klant naar de prullenbak

## Bulkacties

Selecteer meerdere klanten voor:

- **Toevoegen aan favorieten**: zet klanten bovenaan als favoriet
- **Archiveren**: archiveer klanten in één keer
- **Verwijderen**: verplaats klanten naar de prullenbak

In het archief kies je **Herstellen naar actief** of **Naar prullenbak**; in de prullenbak **Herstellen naar archief** of **Permanent verwijderen**.

## Klanten importeren

Importeer je bestaande klantendatabase vanuit CSV:

1. Klik op de klantenpagina op **Importeren** (of ga naar **Instellingen › Overstappen** en kies **Klanten importeren**)
2. Controleer dat **Klanten** als gegevenstype gekozen is
3. Upload je CSV-bestand
4. Koppel je CSV-kolommen aan MyCompanyDesk-velden (naam, e-mail, adres, etc.)
5. Bekijk het voorbeeld
6. Bevestig om te importeren

## Klanten exporteren

Download je klantenlijst als CSV-bestand via **Instellingen › Gegevens downloaden** (op elk abonnement).

## Weggebleven klanten

Het tabblad **Weggebleven** in het klantenrapport **Wie zijn mijn klanten?** onder [Rapportages](/features/reports) (Office) toont klanten die eerder kochten maar dit jaar nog geen factuur hebben gekregen. De weergave toont het aantal, wat ze eerder samen besteedden en de datum van hun laatste factuur, met links om elke klant direct te bellen of te mailen. Het staat in Rapportages omdat oude klanten terugwinnen campagnewerk is, geen item dat past in een op urgentie gesorteerde feed.

De standaard klantenlijst segmenteert ook zelf inactieve klanten; het tabblad Weggebleven voegt de campagne-achtige herinnering toe zonder die filter te vervangen.

## Tips

- Houd e-mailadressen van klanten actueel: ze worden gebruikt om facturen te versturen
- Gebruik de zoekbalk voor directe fuzzy-matching over alle klantvelden
- Zet je belangrijkste klanten als favoriet, dan vind je ze snel terug

