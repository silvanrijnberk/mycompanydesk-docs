---
title: Dashboard
---

# Dashboard

Het dashboard op `/dashboard` is je startpagina. Het toont een vaste briefingindeling die je aandachtspunten, belangrijke financiele indicatoren en recente activiteit samenbrengt in een enkele, scrollbare weergave.

## Opbouw

Het dashboard is een enkele pagina (`BriefingDashboard`) opgebouwd uit vaste redactionele blokken. Er is geen aanpassing per gebruiker mogelijk. Iedereen in de werkruimte ziet dezelfde structuur, gevoed vanuit dezelfde live data.

De pagina bestaat uit:
- Een **hero**-paneel met begroeting, lede-samenvatting en periodecontext
- Een **pulse**-rij van vier KPI's: liquiditeit/runway, omzet (maand + jaar), debiteuren + DSO, en btw-saldo + deadline
- Een **briefingfeed** verdeeld over drie tabs: **Nu** (vraagt om aandacht), **Deze week** (komt eraan), en **Goed nieuws** (bevestigingen)
- Een **cash-grafiek** over een venster van 12 maanden met werkelijk + prognose
- Een **weekkaart**, **projectmarges**-lijst, **top klanten**-lijst, **activiteitenfeed** en een **btw-ring**
- Een **setup-banner** die blijft staan totdat de wizard op `/setup` is voltooid

## Hero

Bovenaan staat een begroeting op basis van het tijdstip. De lede-tekst vat de huidige situatie samen: of er vandaag iets actie vereist, het grootste achterstallige item, het aantal concepten en de cashpositie.

Pro-werkruimtes zien ook een AI-geschreven lede-zin boven de standaard lede. De AI-zin wordt eenmaal per kalenderdag gegenereerd en de rest van de dag gecached. Hij gebruikt dezelfde live signalen (liquiditeit, achterstallige items, recente betalingen, btw-positie, omzetgroei) en is beschikbaar in alle vier ondersteunde talen. Bij Pro verschijnt de AI-lede met een sparkle-icoon en de primaire tekstkleur van de hero. Als het AI-model niet beschikbaar is of de werkruimte geen recht heeft, wordt alleen de standaard lede getoond.

De hero toont ook het periodelabel (standaard maand).

## Pulse-rij

De vier cellen in de pulse-rij vervangen de oude geldtegels en KPI-headline. Elke cel toont een gerichte waarde met context:

| Cel | Wat het toont |
|---|---|
| **Liquiditeit** | Huidig saldo (werkelijk bij actieve bankkoppeling, anders geschat), plus runway in weken |
| **Omzet** | Omzet deze maand met percentage ten opzichte van vorige maand, plus jaar-tot-datum |
| **Debiteuren** | Totaal openstaand, aantal te laat, en gemiddelde betaaltermijn |
| **BTW** | Saldo (terug te vorderen of te betalen), deadline en belastingreserve |

## Briefingfeed

De feed is de belangrijkste aandachtsplek. Hij stelt echte signalen uit werkruimtedata samen tot een gestructureerde lijst met drie tabweergaven:

- **Nu.** Zaken die vandaag actie vereisen: te late facturen, te late rekeningen, open bonnen, conceptfacturen die klaarstaan, en btw-checklistitems.
- **Deze week.** Zaken die deze week verlopen: te vervallen facturen, te betalen rekeningen en btw-deadlines.
- **Goed nieuws.** Bevestigingen: recent betaalde facturen, omzetgroei en nieuwe klanten deze maand.

Elk feeditem toont de entiteit, het bedrag en contextuele details. De feed opent vanuit een tabbalk die bovenaan de lijst vastzit.

## Rechterkolom en onderste rij

| Kaart | Inhoud |
|---|---|
| **Cash (12 maanden)** | Een lijngrafiek met de werkelijke cashpositie tot vandaag en een prognose tot einde maand. Vereist voldoende historie om de projectie te kunnen maken. |
| **Weekkaart** | Uren gelogd deze week. |
| **Projectmarges** | Alle projecten met omzet, gesorteerd op margepercentage, kleurgecodeerd groen/oranje/rood. |
| **Top klanten** | Top klanten op omzet dit jaar, met percentage van totaal. |
| **Recente activiteit** | Gebeurtenissen: factuur aangemaakt, factuur betaald, uitgave toegevoegd. |
| **BTW-ring** | Huidige btw-aangifteperiode, checklistvoortgang en aantal open bonnen. Linkt naar de btw-aangifte. |

## Setup-banner

Zolang de setup-wizard op `/setup` nog velden te vullen heeft, staat er een `FinishSetupBanner` bovenaan het dashboard met een teller van openstaande velden en een **Verder**-knop. De banner heeft een sluitknop (X-icoon) die de banner per browser verbergt via localStorage, zodat deze over herlaadbeurten verborgen blijft totdat de wizard is voltooid. De wizard is niet-blokkerend: nieuwe aanmeldingen komen direct op `/dashboard` en worden niet geforceerd doorgestuurd.
