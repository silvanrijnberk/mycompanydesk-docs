---
title: Bankfeed
description: "Koppel je bankrekening zodat transacties binnenstromen. Regels maken van uitgaande betalingen concept-uitgaven, die jij bevestigt voordat ze boeken."
---

# Bankfeed

Koppel je bankrekening aan MyCompanyDesk en je transacties stromen automatisch binnen. Regels en slimme categorisering maken van uitgaande betalingen concept-uitgaven, en jij bevestigt elk concept voordat het in je boekhouding belandt.

De bankkoppeling zit in **Office** en je koppelt maximaal 3 bankrekeningen. Op Desk zie je in plaats van de koppelpagina een knop om over te stappen.

## Waar vind je het

De bankfeed zit in het Uitgaven-gedeelte en in de instellingen:

- **Koppelingen en instellingen**: **Instellingen › Bankrekening koppelen** (`/settings/bankkoppeling`), ook bereikbaar via de knop **Instellingen** op de pagina Uitgaven. Daar koppel je banken, en beheer je de feedinstellingen, regels en meldingen.
- **Bankwachtrij**: bovenaan de uitgavenpagina staat het blok **Uit je bank** met de rijen die nog moeten worden beoordeeld.
- **Transactiefeed**: het tabblad **Transacties** naast Uitgaven in de bovenbalk opent de lijst met geïmporteerde banktransacties.

## Een bankrekening koppelen

1. Ga naar **Instellingen › Bankrekening koppelen**.
2. Klik in het bankgedeelte op **Koppel je eerste bank**, of kies je bank direct wanneer er een bankkiezer staat.
3. Bevestig de koppeling in de app of website van je eigen bank. Dit is een beveiligde PSD2-stroom: MyCompanyDesk kan alleen de transacties lezen die jij toestaat en kan nooit geld overmaken.
4. Daarna kom je terug in MyCompanyDesk. De eerste sync haalt transacties van de afgelopen 90 dagen op; daarna blijft de feed automatisch actueel.

Je kunt maximaal 3 bankrekeningen koppelen, ook van verschillende banken. Elke rekening staat als eigen rij met het actuele saldo en het moment van de laatste sync. Met **Nog een bank koppelen** voeg je er meer toe. De banktoestemming verloopt periodiek volgens de PSD2-regels (meestal elke 90 dagen); je krijgt vooraf een seintje.

Per rekening kun je:

- **Auto-import** aan- of uitzetten, zodat jij bepaalt welke rekeningen je uitgaven voeden.
- Een **import-vanaf-datum** instellen. Deze datum bepaalt vanaf wanneer transacties in je werkelijke takenlijst verschijnen. Transacties van vóór die datum halen we nog steeds op (voor koppelen, afletteren en saldo), maar ze vragen geen actie van je. Laat je het veld leeg, dan komt elke geïmporteerde transactie in de lijst.
- Op elk moment een **handmatige sync** starten.
- De rekening ontkoppelen.

## Hoe vaak synchroniseren

Hoe vaak MyCompanyDesk nieuwe transacties ophaalt is één instelling voor je hele werkruimte: **Elke 4 uur** of **Dagelijks om 06:00**. Realtime ophalen bestaat niet: een PSD2-koppeling haalt transacties periodiek op. Met **Nu synchroniseren** haal je meteen alles op, en de handmatige sync per rekening werkt daar altijd bovenop.

## Van transactie naar uitgave

Voordat een transactie wordt gecategoriseerd, worden uitgaande regels vergeleken met uitgaven die al in je boekhouding staan. Is de match eenduidig, dan koppelt MyCompanyDesk de bankregel automatisch aan die bestaande uitgave. De vergelijking kijkt naar bedrag, datum en de naam van de tegenpartij/leverancier; pas bij een sterke match op al deze signalen koppelt het systeem zonder eerst te vragen. Er wordt niets nieuws aangemaakt; het legt alleen vast welke betaling de kosten heeft vereffend.

Na de koppelronde doorlopen nieuwe transacties je regels en de slimme categorisering:

1. Eerst worden je eigen regels gecontroleerd. Een transactie die matcht krijgt de categorie van de regel.
2. Transacties zonder regelmatch krijgen een categoriesuggestie van de slimme categorisering, of vallen terug op je standaardcategorie als je die hebt ingesteld.
3. Een gecategoriseerde uitgaande transactie wordt een **concept-uitgave**: de tegenpartij wordt de leverancier, en het bedrag, de datum en de gebruikelijke btw-behandeling van de categorie worden ingevuld.
4. Het concept belandt in de controlelijst, dus er wordt niets geboekt zonder dat jij het ziet.

Transacties uit de eerste import, die ongeveer de afgelopen 90 dagen ophaalt, worden nooit automatisch bevestigd. Ze komen altijd op de controlelijst, ook als de categorisering zeker is. Dat geldt alleen voor de achterstand van voor de koppeling; nieuwe transacties daarna volgen de normale controle-regels. Met de import-vanaf-datum per rekening bepaal je vanaf welk moment die achterstand in je takenlijst verschijnt; alles wat ervoor ligt blijft beschikbaar voor koppelen en afletteren, maar vraagt geen review.

Alleen uitgaande transacties worden uitgaven; inkomende betalingen worden nooit omgezet in uitgaven. Uitgaven die uit banktransacties zijn ontstaan tonen een klein bankicoon in de uitgavenlijst, met een tooltip en een label voor screenreaders die de gekoppelde bank noemen. De banklogo's zelf worden niet meer getoond, zodat de lijst leesbaar blijft als er veel bankrijen tussen andere uitgaven staan. Concepten die als mailfactuur binnenkwamen dragen in plaats daarvan een klein mailicoon, met "Uit je mail" als tooltip.

## De bankwachtrij

De bankwachtrij staat als blok bovenaan de uitgavenlijst. Hij toont alles wat nog geboekt moet worden: review-rijen die de feed heeft voorbereid, uitgavekandidaten uit de bankfeed, uitgaveconcepten die de inbox maakt van doorgestuurde facturen, en concepten die van ontvangen e-facturen zijn aangemaakt. De balk boven de rijen zegt wat er nu wacht: "Uit je bank · nog niet geboekt" zolang elke rij uit de bank komt, "Uit je mail · nog niet geboekt" zolang elke rij per e-mail is binnengekomen, en "Nog niet geboekt" zodra de inhoud zich mengt. Elke rij toont de leverancier, datum, het bedrag, de voorgestelde categorie en waar die suggestie vandaan komt (een van je regels, je standaardcategorie, een slimme suggestie of de bankfeed). Niets hiervan telt mee totdat je het boekt.

De wachtrij is gecached binnen je sessie. Als je terugkeert naar Uitgaven, staan de rijen er meteen in het eerste frame en ververst de achtergrond ze op hun plek. Zo schuift de lijst eronder niet meer weg terwijl je al aan het lezen bent. De cache hoort bij je huidige werkruimte: bij een werkruimtewissel wordt hij opnieuw opgebouwd.

::: info
De wachtrij laadt maximaal 100 review-rijen en 100 uitgavekandidaten per ophaalronde. Heeft de server meer rijen, dan geeft de wachtrij dat aan en haalt hij na een actie automatisch de volgende batch op. Op die manier komt niets meer vast te zitten achter een volle pagina.
:::

Per rij kun je:

- **Boeken**: de uitgave boeken met de gekozen categorie. Hij verschijnt in je uitgavenlijst en telt mee in rapportages en btw.
- **Categorie kiezen**: een andere categorie kiezen voordat je boekt.
- **Negeren**: de rij uit de wachtrij halen. Je vindt hem terug onder **Genegeerd** op het tabblad Transacties.

Met **Boek alles** en **Negeer alles** handel je de hele wachtrij in één keer af; Negeer alles vraagt eerst om bevestiging en is meteen terug te draaien.

Als de categoriechip die je hebt gekozen sinds het laden van de pagina is gearchiveerd, wordt de actie Boeken geweigerd met de fout `EXPENSE_CATEGORY_UNKNOWN` in plaats van stilzwijgend een andere categorie te kiezen. Ververs de pagina om de huidige categorielijst te laden en kies opnieuw.

### Achterstand in één keer afschrijven

Wanneer je een bank koppelt, haalt de eerste import transacties op van vóór je MyCompanyDesk gebruikte. Veel van die oudere regels komen uit een periode die al is ingediend, dus er valt niets meer over te beslissen. Zodra de wachtrij een blok verouderde regels ziet, biedt hij **Bijwerken tot daar** aan.

Als je op de knop klikt, worden alle wachtrijregels vóór de voorgestelde datum afgesloten, ook regels die nu niet in beeld staan. Er wordt niets verwijderd: de transacties verhuizen naar **Genegeerd**, en je kunt de actie in één klik terugdraaien. Vanaf dat moment vraagt MyCompanyDesk alleen nog naar transacties vanaf de voorgestelde datum.

Het aanbod verschijnt alleen zolang er verouderde regels staan. Zodra ze zijn opgeruimd, verdwijnt de banner vanzelf.

## Feedinstellingen

Op dezelfde instellingenpagina bepaal je hoe de feed zich gedraagt:

- **Auto-import naar Uitgaven**: het automatisch aanmaken van concept-uitgaven aan- of uitzetten voor de hele werkruimte.
- **Slim categoriseren**: laat MyCompanyDesk een categorie voorstellen voor transacties zonder regel.
- **Negeer eigen overboekingen**: overboekingen tussen je eigen gekoppelde rekeningen overslaan.
- **Vraag bonnetje op via e-mail**: een dagelijkse ronde mailt leveranciers één gebundeld verzoek voor bonnetjes die nog missen. Elke leverancier wordt per transactie maar één keer gevraagd. Een teller bij de instelling toont hoeveel betalingen momenteel op een bonnetje wachten.
- **Minimumbedrag voor import**: transacties onder dit bedrag worden geen uitgaven.
- **Standaardcategorie bij geen match**: de categorie die geldt als niets anders matcht.
- **Boekingsdatum**: kies of uitgaven de transactiedatum, de valutadatum of de datum van het bonnetje gebruiken.

Slim categoriseren en het automatisch opvragen van ontbrekende bonnetjes staan ook samen onder **Instellingen › Automatisering**, in het blok **Uit je bank**.

## Regels

Met regels leer je MyCompanyDesk hoe terugkerende betalingen gecategoriseerd moeten worden. Klik op de instellingenpagina op **Regel toevoegen** en vul in:

1. Een naam voor de regel (meestal de leverancier).
2. Eén trefwoord.
3. De uitgavencategorie die erbij hoort.

Het trefwoord wordt vergeleken met de omschrijving en de naam van de tegenpartij; hoofdletters maken niet uit. Transacties die matchen krijgen de categorie van de regel en worden concept-uitgaven. Regels gelden voor alle gekoppelde rekeningen, elke regel toont hoe vaak hij heeft gematcht, en je kunt een regel altijd bewerken of verwijderen.

Een regel matcht op één trefwoord. Voorwaarden op bedrag worden niet ondersteund, en regels maak je op de instellingenpagina, niet vanuit de transactiefeed.

## Vaste leveranciers

Boek je een betaling aan een leverancier uit je bank, dan onthoudt MyCompanyDesk die leverancier met de categorie die je koos. Vanaf dan boeken uitgaven van die leverancier automatisch, ook zijn e-facturen. Op dat moment krijg je de melding **Vaste leverancier geleerd**, zodat dit nooit ongemerkt gebeurt.


Een betaling die als privé is aangemerkt, of een overboeking naar je eigen rekening, leert geen regel. Hoeveel vaste leveranciers er automatisch boeken, zie je bij **Instellingen › Automatisering**. De regels zelf zie, wijzig en verwijder je in het blok **Leverancier → categorie regels** op de pagina Bankrekening koppelen.

## De transactiefeed

Open het tabblad **Transacties** naast Uitgaven om alle geïmporteerde transacties te zien, met bovenaan een paar snelle cijfers (transacties deze maand, het aandeel dat automatisch is geboekt en hoeveel er nog aandacht nodig hebben). Drie tabbladen verdelen de feed:

- **Te verwerken**: transacties die nog nergens aan gekoppeld zijn.
- **Gekoppeld**: transacties gekoppeld aan een factuur of uitgave, met een link naar dat record.
- **Genegeerd**: transacties die je hebt genegeerd.

Terwijl je de tab met ongekoppelde regels doorwerkt, staan regels die niet meetellen voor te verwerken in ingeklapte groepen eronder: **Privérekening** voor regels van een gekoppelde privérekening (de groep verschijnt pas als je er één hebt gekoppeld), en **Ouder** voor regels van vóór de datum waarop de feed met de rekening meekijkt. Een regel die als privé is gemarkeerd, krijgt een notitie dat hij buiten de boekhouding blijft; een regel die nog niet beoordeeld is, zegt dat ook. De tellers voor te verwerken op deze pagina, in Boekhouding › Bank en in de dashboardtegels delen één definitie en tellen ook de afschrijvingen op je privérekening mee die een zakelijke uitgave kunnen zijn, zodat de totalen overal gelijk zijn.

Per openstaande transactie:

- **Koppelen** opent een venster waarin je de transactie koppelt aan een bestaande factuur of uitgave. Geld eruit stelt uitgaven voor en geld erin facturen, en je kunt wisselen en zoeken.
- **Negeren** verplaatst de transactie naar het tabblad Genegeerd.

Het merendeel van het koppelen blijft een handmatige stap. MyCompanyDesk koppelt wel automatisch een geïmporteerde bankregel aan een bestaande uitgave als de match eenduidig is. Klanten, facturen en alles wat onduidelijk is, hebben nog steeds jouw bevestiging nodig.

## Meldingen

Onderaan de pagina Bankrekening koppelen kun je drie bankmeldingen los van elkaar aanzetten:

- **E-mail bij sync-fout**: een e-mail en in-app melding wanneer een bankkoppeling niet kan synchroniseren, met een link om het op te lossen.
- **Wekelijks overzicht**: een e-mail op maandagochtend met de bankactiviteit van de afgelopen week. Deze wordt overgeslagen als er niets te melden was. Het wekelijkse overzicht staat standaard uit in elke werkruimte, zodat er op maandag maar één mail binnenkomt: staat het uit, dan verschijnen de bankregels die nog gekoppeld moeten worden in de maandagmail van **Nu doen**. Alleen werkruimtes bij wie de maandagmail al uit stond, houden het overzicht zoals het was, want er is dan geen andere mail die de bankregels zonder koppeling meeneemt. Zet het overzicht in deze lijst weer aan als je de aparte samenvatting terugwilt; de maandagmail laat die regels dan weer weg.
- **Melding bij groot bedrag**: een melding wanneer een transactie een door jou ingesteld bedrag bereikt of overschrijdt.

Daarnaast krijg je altijd deze meldingen, zonder schakelaar:

- **Vaste leverancier geleerd**: een in-app melding wanneer MyCompanyDesk een nieuwe vaste leverancier heeft geleerd vanuit een uitgave die je boekte.
- **Vergrendelde btw-periode**: een eenmalige melding wanneer de bankfeed probeert een uitgaande transactie te boeken in een btw-periode die al is aangegeven en vergrendeld. De regel wordt definitief overgeslagen zodat de sync niet eindeloos opnieuw probeert, en de melding legt uit wat je kunt doen: boek de uitgave handmatig met een datum in de huidige open periode, of dien een suppletie-aangifte in.

## Problemen oplossen

**Mijn bankkoppeling toont een fout.** Open **Instellingen › Bankrekening koppelen**. Als je bank een nieuwe autorisatie nodig heeft zie je dat op de rij van de koppeling; de sync-foutmelding linkt er ook naartoe.

**Een transactie is geen uitgave geworden.** Controleer of auto-import aanstaat, of het bedrag boven je minimumbedrag ligt en of het een uitgaande betaling is. Je kunt de transactie altijd handmatig koppelen op de Transacties-pagina.

**Een banktransactie valt in een vergrendelde btw-periode.** De bankfeed kan geen uitgaven automatisch boeken met een datum in een periode die al is aangegeven. Je krijgt een eenmalige melding "Banktransactie: btw-periode vergrendeld", de regel wordt gemarkeerd als definitief overgeslagen en de volgende sync probeert hem niet opnieuw. Om de kosten alsnog vast te leggen, boek je de uitgave handmatig met een datum in de huidige open periode, of vraag je je boekhouder of een suppletie-aangifte de juiste route is.

**Ik krijg geen meldingen.** Controleer de meldingsschakelaars onderaan de pagina Bankrekening koppelen.
