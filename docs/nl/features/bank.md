---
title: Bankfeed
---

# Bankfeed

Koppel je bankrekening aan MyCompanyDesk en je transacties stromen automatisch binnen. Regels en slimme categorisering maken van uitgaande betalingen concept-uitgaven, en jij bevestigt elk concept voordat het in je boekhouding belandt.

## Waar vind je het

De bankfeed zit in het Uitgaven-gedeelte:

- **Koppelingen en instellingen**: open **Uitgaven** en klik op het tandwiel in de paginakop. Daar koppel je banken, controleer je automatisch geïmporteerde uitgaven en beheer je regels en meldingen.
- **Transactiefeed**: de knop **Transacties** in de paginakop van Uitgaven opent de lijst met geïmporteerde banktransacties.

## Een bankrekening koppelen

1. Ga naar **Uitgaven** en klik op het tandwiel.
2. Klik in het bankgedeelte op **Koppel je eerste bank**, of kies je bank direct wanneer er een bankkiezer staat.
3. Bevestig de koppeling in de app of website van je eigen bank. Dit is een beveiligde PSD2-stroom: MyCompanyDesk kan alleen de transacties lezen die jij toestaat en kan nooit geld overmaken.
4. Daarna kom je terug in MyCompanyDesk. De eerste sync haalt transacties van de afgelopen 90 dagen op; daarna blijft de feed automatisch actueel.

Je kunt tot 10 rekeningen van verschillende banken koppelen. Elke rekening staat als eigen rij met het actuele saldo en het moment van de laatste sync. Met **Nog een bank koppelen** voeg je er meer toe. De banktoestemming verloopt periodiek volgens de PSD2-regels (meestal elke 90 dagen); je krijgt vooraf een seintje.

Per rekening kun je:

- **Auto-import** aan- of uitzetten, zodat jij bepaalt welke rekeningen je uitgaven voeden.
- Op elk moment een **handmatige sync** starten.
- De rekening ontkoppelen.

## Sync-frequentie

Hoe vaak MyCompanyDesk nieuwe transacties ophaalt is één instelling voor je hele werkruimte: **Realtime**, **Elke 4 uur** of **Dagelijks**. De handmatige sync per rekening werkt daar altijd bovenop.

## Van transactie naar uitgave

Nieuwe transacties gaan langs je regels en de slimme categorisering:

1. Eerst worden je eigen regels gecontroleerd. Een transactie die matcht krijgt de categorie van de regel.
2. Transacties zonder regelmatch krijgen een categoriesuggestie van de slimme categorisering, of vallen terug op je standaardcategorie als je die hebt ingesteld.
3. Een gecategoriseerde uitgaande transactie wordt een **concept-uitgave**: de tegenpartij wordt de leverancier, en het bedrag, de datum en de gebruikelijke BTW-behandeling van de categorie worden ingevuld.
4. Het concept belandt in de controlelijst, dus er wordt niets geboekt zonder dat jij het ziet.

Alleen uitgaande transacties worden uitgaven; inkomende betalingen worden nooit omgezet in uitgaven. Uitgaven die uit banktransacties zijn ontstaan tonen een klein bankicoon in de uitgavenlijst, zodat je altijd ziet waar een boeking vandaan komt.

## Automatisch geïmporteerde uitgaven controleren

De kaart **Automatisch geïmporteerde uitgaven om te controleren** staat bovenaan de uitgaven-instellingen zodra er concepten klaarstaan. Elke rij toont de leverancier, datum, het bedrag, de voorgestelde categorie en waar die suggestie vandaan komt (een van je regels, je standaardcategorie, een slimme suggestie of de bankfeed).

Per concept kun je:

- **Bevestigen**: de uitgave boeken zoals hij is. Hij verschijnt in je uitgavenlijst en telt mee in rapportages en BTW.
- **Bewerken**: de uitgave openen om categorie, BTW of bedrag aan te passen voordat je boekt.
- **Afwijzen**: het concept verwijderen. De transactie gaat terug naar de feed voor handmatige afhandeling.

## Feedinstellingen

Op dezelfde instellingenpagina bepaal je hoe de feed zich gedraagt:

- **Auto-import naar Uitgaven**: het automatisch aanmaken van concept-uitgaven aan- of uitzetten voor de hele werkruimte.
- **Slim categoriseren**: laat MyCompanyDesk een categorie voorstellen voor transacties zonder regel.
- **Negeer eigen overboekingen**: overboekingen tussen je eigen gekoppelde rekeningen overslaan.
- **Vraag bonnetje op via e-mail**: een dagelijkse ronde mailt leveranciers één gebundeld verzoek voor bonnetjes die nog missen. Elke leverancier wordt per transactie maar één keer gevraagd.
- **Minimumbedrag voor import**: transacties onder dit bedrag worden geen uitgaven.
- **Standaardcategorie**: de categorie die geldt als niets anders matcht.
- **Boekingsdatum**: kies of uitgaven de transactiedatum, de valutadatum of de bondatum gebruiken.

## Regels

Met regels leer je MyCompanyDesk hoe terugkerende betalingen gecategoriseerd moeten worden. Klik op de instellingenpagina op **Regel toevoegen** en vul in:

1. Een naam voor de regel (meestal de leverancier).
2. Eén trefwoord.
3. De uitgavencategorie die erbij hoort.

Het trefwoord wordt vergeleken met de omschrijving en de naam van de tegenpartij; hoofdletters maken niet uit. Transacties die matchen krijgen de categorie van de regel en worden concept-uitgaven. Regels gelden voor alle gekoppelde rekeningen, elke regel toont hoe vaak hij heeft gematcht, en je kunt een regel altijd bewerken of verwijderen.

Een regel matcht op één trefwoord. Voorwaarden op bedrag worden niet ondersteund, en regels maak je op de instellingenpagina, niet vanuit de transactiefeed.

## De transactiefeed

Open **Transacties** vanuit de paginakop van Uitgaven om alle geïmporteerde transacties te zien, met bovenaan een paar snelle cijfers (transacties deze maand, het aandeel dat automatisch is geboekt en hoeveel er nog aandacht nodig hebben). Drie tabbladen verdelen de feed:

- **Te koppelen**: transacties die nog nergens aan gekoppeld zijn.
- **Gekoppeld**: transacties gekoppeld aan een factuur of uitgave, met een link naar dat record.
- **Genegeerd**: transacties die je hebt genegeerd.

Per openstaande transactie:

- **Koppelen** opent een venster waarin je de transactie koppelt aan een bestaande factuur of uitgave. Geld eruit stelt uitgaven voor en geld erin facturen, en je kunt wisselen en zoeken.
- **Negeren** verplaatst de transactie naar het tabblad Genegeerd.

Koppelen is altijd een handmatige stap: MyCompanyDesk koppelt transacties niet automatisch aan klanten, facturen of bestaande uitgaven.

## Meldingen

Onderaan de instellingenpagina kun je drie bankmeldingen los van elkaar aanzetten:

- **E-mail bij sync-fout**: een e-mail en in-app melding wanneer een bankkoppeling niet kan synchroniseren, met een link om het op te lossen.
- **Wekelijks overzicht**: een e-mail op maandagochtend met de bankactiviteit van de afgelopen week. Deze wordt overgeslagen als er niets te melden was.
- **Push bij grote transactie**: een melding wanneer een transactie een door jou ingesteld bedrag bereikt of overschrijdt.

## Problemen oplossen

**Mijn bankkoppeling toont een fout.** Open de uitgaven-instellingen via het tandwiel op de Uitgaven-pagina. Als je bank een nieuwe autorisatie nodig heeft zie je dat op de rij van de koppeling; de sync-foutmelding linkt er ook naartoe.

**Een transactie is geen uitgave geworden.** Controleer of auto-import aanstaat, of het bedrag boven je minimumbedrag ligt en of het een uitgaande betaling is. Je kunt de transactie altijd handmatig koppelen op de Transacties-pagina.

**Ik krijg geen meldingen.** Controleer de meldingsschakelaars onderaan de uitgaven-instellingen.
