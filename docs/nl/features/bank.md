---
title: Bankfeed
---

# Bankfeed

Koppel je bankrekeningen aan MyCompanyDesk voor automatische transactie-import, matching en real-time meldingen. De bankfeed houdt je boekhouding actueel zonder handmatig invoerwerk.

## Een bankrekening koppelen

1. Ga naar **Werkruimte** → **Financieel** → **Bankrekeningen**.
2. Klik op **Bank koppelen** en kies je bank uit de lijst.
3. Doorloop de autorisatiestappen in het pop-upvenster.
4. Na het koppelen haalt MyCompanyDesk transacties op van de afgelopen 90 dagen en houdt de feed actueel met periodieke automatische syncs.

Je kunt meerdere rekeningen van verschillende banken koppelen. Elke rekening verschijnt als een aparte verbinding met een eigen sync-cadans en transactielijst.

## Transacties synchroniseren

MyCompanyDesk synchroniseert transacties van je gekoppelde rekeningen via een automatisch schema. Je kunt op elk moment ook handmatig synchroniseren via de bankrekeningenpagina. Nieuwe transacties worden automatisch gekoppeld aan je bestaande klanten, facturen en uitgaven met behulp van leveranciersregels en AI-matching. Gekoppelde transacties stromen direct je boekhouding in; niet-gekoppelde transacties verschijnen in de bankfeed voor handmatige beoordeling.

### Automatische uitgaven aanmaken

Wanneer een banktransactie gecategoriseerd is (door een leveranciersregel, een standaardcategorie of de AI-classificatie), maakt MyCompanyDesk automatisch een conceptuitgave aan in je boekhouding. De uitgave wordt gevuld met:

- De naam van de tegenpartij als leverancier.
- Het absolute bedrag als bruto kosten.
- Het standaard BTW-tarief van de categorie (of het door AI voorgestelde tarief als dat beschikbaar is).
- De categorie-sleutel die overeenkomt met de echte uitgavecategorieen in je workspace.
- De boekingsdatum van de transactie als uitgavedatum.

De transactie wordt daarna gemarkeerd als gekoppeld, zodat deze bij de volgende sync geen duplicaat oplevert. De nieuwe uitgave verschijnt meteen in je uitgavenlijst en telt mee in je rapportages en BTW-overzichten.

Het aanmaken van uitgaven gebeurt in twee rondes: eerst na het toepassen van leveranciersregels en standaardcategorieen (synchroon, tijdens de sync); daarna nadat de AI-classificatie is voltooid (asynchroon). In beide gevallen gebruikt de aangemaakte uitgave de echte uitgavecategorieen van je workspace en hun standaard BTW-behandeling, zodat de bedragen consistent blijven met je handmatige invoer.

Alleen uitgaande transacties (bedrag onder nul) worden omgezet naar uitgaven. Inkomende betalingen worden niet als uitgave aangemaakt. Als je workspace nog geen uitgavecategorieen heeft, wordt deze stap overgeslagen en blijven transacties wachten op handmatige beoordeling.

### Auto-importuitgaven beoordelen

Wanneer er conceptuitgaven zijn aangemaakt vanuit banktransacties, komen die eerst in de beoordelingsinbox. Ga naar **Werkruimte** → **Financieel** → **Bankrekeningen** en open het tabblad **Beoordelen**. Je ziet een lijst met conceptuitgaven, elk met de leverancier, het bedrag, de categoriesuggestie en de bron van die suggestie (leveranciersregel, standaardcategorie, AI-suggestie of bankfeed).

Voor elke uitgave kun je:

- **Bevestigen** — De uitgave wordt direct geboekt. Hij verschijnt in je actieve uitgavenlijst en telt mee in rapportages en BTW-overzichten.
- **Bewerken** — Open het uitgaveformulier om de categorie, BTW-behandeling, omschrijving of het bedrag aan te passen voordat je boekt.
- **Afwijzen** — Het concept verdwijnt. De transactie komt terug in de niet-gekoppelde wachtrij in de bankfeed voor handmatige afhandeling.

De beoordelingsstap zorgt dat jij de controle houdt: geen uitgave komt in je boekhouding zonder dat iemand hem heeft gecontroleerd. Bevestigde uitgaven tonen kort een melding met de leveranciersnaam; afgewezen uitgaven tonen de afwijzing. Als een actie mislukt, verschijnt er een melding en kun je het opnieuw proberen.

Elke uitgavekaart toont een bronlabel zodat je weet waarom MyCompanyDesk die specifieke suggestie heeft gedaan. De mogelijke bronnen zijn `vendor_rule`, `workspace_default`, `ai_flag` en `feed` — dezelfde categoriseringspijplijn als hierboven beschreven.

### Synchronisatiefouten

Als een sync mislukt (bijvoorbeeld omdat de autorisatie van je bank is verlopen of de verbinding is verbroken), stuurt MyCompanyDesk je een e-mail en een in-app melding met de naam van de verbinding en een link om het op te lossen. Je kunt ook pushmeldingen voor sync-fouten inschakelen onder de notificatievoorkeuren.

## Notificaties

De bankfeed ondersteunt vier notificatievoorkeuren, per workspace in te stellen via de bankrekeningenpagina:

| Voorkeur | Wat het doet |
|---|---|
| **Sync-foutmeldingen** | E-mail en in-app melding wanneer een bankverbinding niet kan synchroniseren. |
| **Grote-transactiemeldingen** | Push- en in-app melding wanneer een transactie een door jou ingestelde drempel overschrijdt (bijvoorbeeld €5.000). |
| **Wekelijkse samenvatting** | Een e-mail op maandagochtend met een overzicht van de geimporteerde transacties, niet-gekoppelde items en de top-3 van automatisch gecategoriseerde leveranciers. |
| **Bonverzoeken** | Een dagelijkse automatische sweep die je leveranciers mailt met het verzoek om ontbrekende bonnen voor niet-gekoppelde uitgaande transacties. |

Alle notificaties zijn best-effort: ze blokkeren of onderbreken nooit een sync. Je kunt elke notificatie afzonderlijk aan- of uitzetten.

### Drempel voor grote transacties

Stel een eurobedrag in bij de bankrekeninginstellingen. Elke inkomende of uitgaande transactie waarvan het absolute bedrag die drempel haalt of overschrijdt, genereert een pushmelding en een in-app alert. Handig om grote betalingen of onverwachte afschrijvingen snel te spotten.

### Wekelijkse samenvatting

Elke maandag om 08:00 (lokale tijd van je workspace) stuurt MyCompanyDesk je een korte e-mail met de bankfeed-activiteit van de afgelopen zeven dagen:

- Aantal nieuwe geimporteerde transacties.
- Aantal niet-gekoppelde uitgaande transacties die nog wachten op een bon.
- Top drie van automatisch gecategoriseerde leveranciers.

Als er die week geen activiteit was, wordt de samenvatting overgeslagen. De samenvatting volgt je workspace-notificatie-instelling en wordt alleen verzonden als `notify_weekly_summary` aan staat.

### Bonverzoeken naar leveranciers

Als deze optie aan staat, voert MyCompanyDesk dagelijks om 06:00 lokale tijd een sweep uit. Voor elke workspace met `ask_receipt_email` ingeschakeld zoekt het systeem naar niet-gekoppelde uitgaande transacties van de afgelopen 30 dagen waarvan de tegenpartij overeenkomt met een klant die een e-mailadres heeft. Het stuurt elke leverancier een gecombineerde e-mail met alle transacties waarvan een bon ontbreekt, en tagt die transacties zodat dezelfde leverancier niet opnieuw wordt gevraagd.

## Leveranciersregels beheren

Met leveranciersregels leer je MyCompanyDesk hoe terugkerende transacties gecategoriseerd moeten worden:

- Maak een regel vanaf elke transactie door in de bankfeed op **Regel aanmaken** te klikken.
- Regels matchen op naam van de tegenpartij, omschrijving of bedragspatronen.
- Gekoppelde transacties worden automatisch aan de juiste klant, factuur of uitgave verbonden.
- De wekelijkse samenvatting toont je best presterende regels.

Regels die je aanmaakt zijn workspace-gebonden en gelden voor alle gekoppelde bankrekeningen.

## Problemen oplossen

**Mijn bankverbinding geeft een foutmelding.** Open de pagina met bankrekeninginstellingen. Als je bank opnieuw autorisatie vereist, zie je een prompt om opnieuw te verbinden. Sync-foutmeldingen bevatten ook een directe link.

**Een transactie is niet gekoppeld.** Bekijk de transactie in de bankfeed onder het filter 'niet-gekoppeld'. Je kunt hem handmatig koppelen, er een nieuwe klant of uitgave van maken, of een leveranciersregel aanmaken zodat hij voortaan automatisch wordt gekoppeld.

**Ik krijg geen meldingen.** Controleer de notificatie-schakelaars op de bankrekeningeninstellingenpagina. Voor pushmeldingen moet je checken of push aan staat in je accountprofiel. Voor de wekelijkse samenvatting moet `notify_weekly_summary` aan staan en er moet daadwerkelijk bankactiviteit zijn geweest die week.
