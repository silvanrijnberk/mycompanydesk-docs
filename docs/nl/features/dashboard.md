---
title: Dashboard
---

# Dashboard

Het dashboard is je startpagina. Het toont een briefing die je aandachtspunten, belangrijke financiële indicatoren en recente activiteit samenbrengt in een enkele, scrollbare weergave.

## Indeling

Het dashboard heeft een vaste briefingindeling: er zijn geen instellingen om losse kaarten te verplaatsen of te verbergen, en iedereen in de werkruimte ziet dezelfde structuur, gevoed vanuit dezelfde live data. De inhoud past zich wel aan jouw situatie aan: een gloednieuw account ziet een welkomstscherm, de projectmargekaart verschijnt alleen wanneer de projectenfunctie voor je werkruimte is ingeschakeld, en herinneringsbanners kun je per browser wegklikken.

### Welkomstscherm

Op een gloednieuw account zonder facturen of klanten toont het dashboard een welkomstscherm in plaats van de volledige briefing. Het leidt je naar drie eerste acties: een factuur maken, een klant toevoegen of een uitgave registreren. Onder de actiekaarten staat een link naar de [introductie](/nl/getting-started/introduction). Zodra er minstens een factuur of klant bestaat, verdwijnt het welkomstscherm permanent en neemt het volledige dashboard het over.

### Eerste laadbeurt

Terwijl data laadt, toont het dashboard een placeholder die de vorm van elke kaart spiegelt, zodat er niets verspringt. Zodra de data binnen is, komt het dashboard in beeld.

Het dashboard bestaat uit:

- Een **hero**-paneel met begroeting, de AI-briefing en periodecontext
- Een **pulse**-rij van vier KPI's: liquiditeit/runway, omzet (maand + jaar), debiteuren + DSO, en btw-saldo + deadline
- Een **briefingfeed** met vier tabs: **Alle**, **Nu** (vraagt om aandacht), **Deze week** (komt eraan) en **Goed nieuws** (bevestigingen)
- Een **cash-grafiek** over een venster van 12 maanden met werkelijk + prognose
- Een **weekkaart**, **projectmarges**-lijst, **top klanten**-lijst, **activiteitenfeed** en een **btw-ring**
- Een **setup-banner** die blijft staan totdat de setup-wizard is voltooid

## Hero

Bovenaan staat een begroeting op basis van het tijdstip. De AI-briefing is het middelpunt van de hero: een korte, persoonlijke, AI-geschreven briefing die het volledige zakelijke plaatje samenvat.

De AI-briefing spreekt in de eerste persoon en richt zich direct tot jou. Hij opent met de meest urgente actie voor vandaag, dan hooguit een of twee ondersteunende punten waar die waarde toevoegen. Hij sluit af met een concrete vervolgstap in de app (bijvoorbeeld een specifieke klant een herinnering sturen, of je btw-aangifte afronden). Hij put uit een volledige set live signalen: liquiditeit en runway, omzet en winst (maand + jaar), achterstallige debiteuren (aantal, totaal, slechtste klant), rekeningen (binnenkort + achterstallig), aantal concepten, projectmarges, btw-positie (saldo, deadline, checklistvoortgang, reserve), niet-gefactureerde uren, recente betalingen en nieuwe klanten. Alle bedragen zijn afgerond op hele euro's.

Terwijl de AI-briefing nog laadt, toont de hero de gecachte standaardsamenvatting van de vorige dag, waarna hij vloeiend overgaat naar de AI-versie. De AI-briefing verschijnt met een sparkle-icoon.

De AI-briefing is beschikbaar op elk abonnement en in alle vier ondersteunde talen. Hij wordt eenmaal per kalenderdag per bedrijf gegenereerd en de rest van de dag gecached. Kan de briefing niet worden gegenereerd, dan wordt de standaardsamenvatting getoond.

De hero toont ook het periodelabel (standaard maand).

## Pulse-rij

De vier cellen in de pulse-rij tonen gerichte waarden met context:

| Cel | Wat het toont |
|---|---|
| **Liquiditeit** | Huidig saldo (werkelijk bij actieve bankkoppeling, anders geschat), plus runway in weken |
| **Omzet** | Omzet deze maand met percentage ten opzichte van vorige maand, plus jaar-tot-datum |
| **Debiteuren** | Totaal openstaand, aantal te laat, en gemiddelde betaaltermijn |
| **BTW** | Saldo (terug te vorderen of te betalen), deadline en belastingreserve |

## Briefingfeed

De feed is de belangrijkste aandachtsplek. Hij stelt echte signalen uit werkruimtedata samen tot een gestructureerde lijst met vier tabweergaven, beginnend met **Alle** (alles samen):

- **Nu.** Zaken die vandaag actie vereisen: te late facturen, te late rekeningen, open bonnen, conceptfacturen die klaarstaan, en btw-checklistitems.
- **Deze week.** Zaken die deze week verlopen: te vervallen facturen, te betalen rekeningen en btw-deadlines.
- **Goed nieuws.** Bevestigingen: recent betaalde facturen, omzetgroei en nieuwe klanten deze maand.

Elk feeditem toont de entiteit, het bedrag en contextuele details. De feed opent vanuit een tabbalk die bovenaan de lijst vastzit.

## Rechterkolom en onderste rij

| Kaart | Inhoud |
|---|---|
| **Cash (12 maanden)** | Een lijngrafiek met de werkelijke cashpositie tot vandaag en een prognose tot einde maand. Vereist voldoende historie om de projectie te kunnen maken. |
| **Weekkaart** | Uren gelogd deze week. |
| **Projectmarges** | Alle projecten met omzet, gesorteerd op margepercentage, kleurgecodeerd groen/oranje/rood. Zichtbaar wanneer de projectenfunctie is ingeschakeld. |
| **Top klanten** | Top klanten op omzet dit jaar, met percentage van totaal. |
| **Recente activiteit** | Gebeurtenissen: factuur aangemaakt, factuur betaald, uitgave toegevoegd. |
| **BTW-ring** | Huidige btw-aangifteperiode, checklistvoortgang en aantal open bonnen. Linkt naar de btw-aangifte. |

## Setup-banner

Zolang de setup-wizard nog velden te vullen heeft, staat er een banner bovenaan het dashboard met een teller van openstaande velden en een knop om verder te gaan met de setup. De banner heeft een sluitknop die hem in jouw browser verbergt totdat de wizard is voltooid, ook na herladen. De wizard is niet-blokkerend: nieuwe aanmeldingen komen direct op het dashboard en worden niet geforceerd doorgestuurd.
