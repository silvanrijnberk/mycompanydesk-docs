---
title: Uitgaven
---

# Uitgaven

Registreer je zakelijke uitgaven, scan bonnetjes en laat MyCompanyDesk de BTW-standaarden en de afschrijving van grotere aankopen regelen.

## Overzicht

De uitgavenpagina toont elke geregistreerde uitgave. Gebruik het zoekveld en het filtermenu om de lijst te verfijnen op categorie, factuurstatus (gefactureerd of niet gefactureerd) en periode, en wissel tussen de weergaven **Actief**, **Archief** en **Prullenbak**. De kaarten boven de lijst werken ook als snelfilter: klik op de kaart met onbetaalde uitgaven om alleen onbetaalde uitgaven te zien, of op de kaart zonder categorie om uitgaven te tonen die nog een categorie nodig hebben. Ook links vanaf de BTW-pagina en de facturenpagina kunnen de lijst voorgefilterd openen, bijvoorbeeld op uitgaven zonder bonnetje, zonder BTW-bedrag, of op kosten die je nog aan een klant kunt doorbelasten. Elk actief filter verschijnt als een chip die je met een klik weer weghaalt.

Uitgaven die via je [bankkoppeling](/features/bank) zijn binnengekomen dragen een klein bankicoon, zodat je ze altijd kunt onderscheiden van handmatige invoer.

Klik op een uitgave om de detailpagina te openen, of klik op **Nieuwe uitgave** om er handmatig een vast te leggen. Het tandwiel bovenaan opent de uitgaven-instellingen.

## Categorieën

MyCompanyDesk komt standaard met zes categorieën die direct aansluiten op de Nederlandse aangifte:

- **Algemene kosten**
- **Kantoorkosten**
- **Autokosten & reizen**
- **Telefoon & internet**
- **Representatiekosten**
- **Inkoop & materiaal**

Daarnaast kun je eigen categorieën toevoegen. Open het tandwiel op de uitgavenpagina, ga naar **Uitgavencategorieën** en start daar de categoriewizard: kies je branche en je krijgt een passende set voorgesteld, eventueel verfijnd met een korte omschrijving van je bedrijf.

Elke categorie heeft eigen standaardwaarden: een BTW-behandeling, een aftrekbaar percentage voor gedeeltelijk aftrekbare kosten, een voorgesteld BTW-tarief en optioneel een automatische investeringsmarkering met een standaard afschrijvingstermijn. Deze standaarden stromen het formulier in zodra je de categorie kiest. Je kunt categorieën altijd bewerken of archiveren; de zes standaardcategorieën kun je hernoemen maar niet verwijderen.

## Een uitgave aanmaken

### Handmatig invoeren

1. Ga naar **Uitgaven** en klik op **Nieuwe uitgave**.
2. Typ de naam van de **leverancier**. De suggesties tonen leveranciers die je eerder hebt gebruikt.
3. Kies een **categorie**. De BTW-behandeling, het voorgestelde BTW-tarief en het aftrekbare percentage worden voor je ingevuld. Heb je in de uitgaven-instellingen een standaardcategorie ingesteld, dan staat die al geselecteerd.
4. Vul de **omschrijving**, het **bedrag excl. BTW**, het **BTW-tarief** en de **datum** in. Het BTW-bedrag wordt automatisch berekend; je kunt ook het bedrag incl. BTW invoeren en de rest laten uitrekenen.
5. Pas eventueel de **BTW-behandeling** aan, koppel een **klant** of **project**, en voeg een **referentie**, **notities** of een andere **betaalmethode** toe.
6. Klik op **Opslaan**.

Het formulier heeft geen bonnetjesveld. Na het opslaan vraagt de detailpagina je om daar het bonnetje te uploaden, als afbeelding of PDF.

### Genereren vanaf de leverancier

Zodra je een leveranciersnaam hebt getypt, stelt de knop **Genereren** (het sterretjes-icoon rechtsboven) de overige velden voor je voor: omschrijving, categorie, BTW-behandeling, bedrag en datum. Controleer het resultaat voordat je opslaat; het is een voorzet, geen automatische piloot.

### Vanuit banktransacties

Met een gekoppelde [bankrekening](/features/bank) kunnen uitgaande transacties worden omgezet in uitgaven. Elke transactie draagt de tegenpartij als leverancier, het bedrag en de boekingsdatum, en jij beoordeelt ze voordat ze in je administratie terechtkomen. Zie [automatisch geïmporteerde uitgaven beoordelen](/features/bank#reviewing-auto-imported-expenses) voor de volledige werkwijze.

### Bonnetjes scannen

Voor bonnetjes als afbeelding of PDF:

1. Ga naar **Uitgaven > Bon scannen**.
2. Upload een JPEG-, PNG-, WebP- of PDF-bestand.
3. Controleer de herkende leverancier, datum, het bedrag, de BTW en de categorie.
4. Bevestig om de uitgave(n) aan te maken.

Onder de geavanceerde instellingen kies je tussen een totaalbedrag (één uitgave voor de hele bon) en losse regels (het document opsplitsen in aparte uitgaven), beperk je een PDF tot bepaalde pagina's en laat je het gescande bestand als bonnetje aan elke aangemaakte uitgave hangen.

Bonnetjes scannen is op elk abonnement beschikbaar, met een maandelijkse limiet per abonnement: 3 scans op Free, 30 op Starter en 200 op Pro.

## BTW-behandeling

Elke uitgave heeft een BTW-behandeling die bepaalt hoe hij op je BTW-aangifte terechtkomt:

| Behandeling | Betekenis |
|---|---|
| **Standaard** | De leverancier rekent Nederlandse BTW. Dit is de standaard. |
| **BTW verlegd** | De BTW is naar jou verlegd (verleggingsregeling), gebruikelijk bij zakelijke inkopen binnen de EU. De leverancier factureert 0% en jij geeft de BTW zelf aan. |
| **Vrijgesteld** | De aankoop is vrijgesteld van BTW: niets af te trekken. |
| **Buitenlandse BTW** | Een buitenlandse leverancier heeft lokale BTW gerekend. Deze is niet aftrekbaar via je Nederlandse aangifte. |

De behandeling wordt overgenomen van de categorie. Wijk er per uitgave van af als de werkelijkheid anders is, bijvoorbeeld een softwareaankoop bij een Amerikaanse leverancier die wel BTW rekende in plaats van de gebruikelijke verlegging.

## Investeringen en afschrijven

Grotere aankopen (een laptop, machines, meubilair) boek je meestal niet in één keer als kosten, maar schrijf je over meerdere jaren af. MyCompanyDesk regelt dit per uitgave:

- Het formulier heeft een schakelaar **Investering (afschrijven)**. Zet hem aan om de uitgave als investering te boeken.
- Vanaf 450 euro excl. BTW stelt het formulier dit zelf voor, in lijn met de grens van de Belastingdienst, met een knop **Als investering boeken**. Ook kunnen categorieën investeringen automatisch markeren.
- Kies de afschrijvingstermijn in het veld **Afschrijven over (jaar)**, van 1 tot 10 jaar. Dit gaat vóór de standaard van de categorie; heeft de categorie er geen, dan geldt 5 jaar.
- Een live voorbeeld toont ongeveer wat de maandelijkse afschrijving wordt.

De BTW trek je volledig af in het kwartaal van aankoop; alleen het bedrag exclusief BTW wordt over de gekozen termijn uitgesmeerd. De maandelijkse afschrijvingsregels stromen automatisch je rapportages in. Pas je later het bedrag, de datum of de termijn aan, dan wordt het schema opnieuw berekend.

## Koppelen

Koppel uitgaven aan:

- **Projecten** om projectkosten bij te houden.
- **Klanten** om inkopen aan een klant te verbinden, bijvoorbeeld kosten die je wilt doorbelasten.
- **Leveranciers** als vrije naam; eerder gebruikte leveranciers verschijnen in de suggesties.

## Bulkacties

Selecteer meerdere uitgaven om ze in één keer te verwerken. In de actieve lijst kies je uit **Markeer als betaald** (als alle geselecteerde uitgaven onbetaald zijn), **Archiveren** of **Verwijderen**. In het Archief kun je terugzetten naar actief of naar de prullenbak verplaatsen; in de Prullenbak kun je terugzetten naar het archief of definitief verwijderen.

## Terugkerende uitgaven

Voor voorspelbare kosten (huur, abonnementen, hosting) stel je [terugkerende uitgaven](/features/recurring-expenses) in die de boekingen op schema aanmaken.

## Importeren

Importeer historische uitgaven uit CSV via **Profiel > Importeren**. Koppel je kolommen aan de uitgavenvelden, bekijk het voorbeeld en bevestig.

## Tips

- Kies eerst de juiste categorie: de BTW-behandeling, het aftrekbare percentage en de investeringsmarkering volgen er allemaal uit.
- Stel je standaardcategorie en betaalmethode in via het tandwiel op de uitgavenpagina, en je gebruikelijke BTW-tarief onder **Instellingen > BTW**, zodat het formulier alvast ingevuld start.
- Merk je dat je de BTW-behandeling bij elke uitgave in een categorie overschrijft, pas dan de standaard van de categorie aan.
- Voeg altijd bonnetjes toe. De controles vooraf op de [BTW-pagina](/features/vat) wijzen je op ontbrekende bonnetjes voordat je aangifte doet.
