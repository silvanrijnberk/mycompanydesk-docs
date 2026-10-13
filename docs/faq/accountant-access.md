---
title: "Boekhouder toegang geven"
description: "Boekhoudertoegang begint op twee manieren: jij nodigt je boekhouder uit vanuit je werkruimte, of je boekhouder nodigt jou uit vanuit het portaal."
last_verified: 2026-08-15
chatbot:
  triggers:
    - "accountant access"
    - "accountant permissions"
    - "add accountant"
    - "invite accountant"
    - "accountant toevoegen"
    - "boekhouder"
    - "buchhalter einladen"
    - "buchhalter zugang"
    - "comptable acces"
    - "ajouter comptable"
    - "accountant invite"
    - "revoke accountant"
    - "client invite"
    - "uitnodiging klant"
    - "klant uitnodigen"
  actions:
    - { label: "Open accountant settings", to: "/settings/boekhouder" }
  follow_up:
    - "How do I set page permissions?"
    - "How do I invite a team member?"
    - "How do I revoke access?"
    - "What happens when my accountant invites me?"
---

Er zijn twee manieren waarop boekhoudertoegang kan beginnen: jij nodigt je boekhouder uit vanuit je eigen werkruimte, of je boekhouder nodigt jou uit om een werkruimte aan te maken vanuit het boekhoudersportaal.

## Jij nodigt je boekhouder uit

1. Ga naar Instellingen › "Je boekhouder"
2. Vul bij "Boekhouder uitnodigen" het e-mailadres van je boekhouder in en klik op "Uitnodiging versturen". Je boekhouder krijgt een mail met een acceptatielink die 30 dagen geldig is
3. Zodra je boekhouder accepteert, staat hij of zij onder "Actieve boekhouders". Daar kun je de toegang ook weer intrekken
4. Wil je alleen een mailadres om stukken naar te sturen, zonder dat je boekhouder kan inloggen? Voeg dan een contactpersoon toe bij "Contactpersoon voor verzenden". Heeft een contactpersoon een account, dan stel je met de knop "Paginatoegang" in welke pagina's hij of zij mag zien

Boekhoudertoegang is gratis op elk abonnement; er is geen Office-abonnement of teamplek voor nodig. Onder "Wat je boekhouder heeft gedaan" zie je elke wijziging die een boekhouder in je administratie maakt.

## Automatisch aanleveren

Automatisch doorsturen zit in Office. Voeg eerst een contactpersoon toe bij Instellingen › "Je boekhouder" en zet daarna in het onderdeel "Automatisch doorsturen" de schakelaar aan. MyCompanyDesk mailt je boekhouder dan vanzelf je verkoopfacturen (zodra je ze verstuurt of zodra ze betaald zijn) en je uitgaven, met de factuur-PDF en bonnetjes als bijlage. Je kiest zelf hoe vaak dat gebeurt (direct, dagelijks, wekelijks, maandelijks of per kwartaal), of offertes ter informatie mee gaan en of alleen uitgaven met een bon worden meegestuurd. Onder "Laatst verstuurd" zie je wat er is afgeleverd. Btw-aangiftecijfers gaan niet mee; download die als CSV via **Belastingen › Btw-aangifte**.

## Je boekhouder nodigt jou uit

Als je boekhouder MyCompanyDesk gebruikt, kan hij of zij je uitnodigen vanuit het boekhoudersportaal. Je ontvangt dan een e-mail met een link naar `/register?uitnodiging=TOKEN`.

1. Klik op de link in de e-mail
2. De registratiepagina toont het kantoor dat je heeft uitgenodigd en vult het e-mailadres waarnaar de uitnodiging is gestuurd alvast in
3. Maak je account aan met e-mail en wachtwoord. Jij blijft eigenaar van je werkruimte en gegevens
4. Na registratie krijgt je boekhouder automatisch toegang zodat hij of zij je aangifte kan controleren

Als de werkruimte waarvoor je wordt uitgenodigd al een eigen actief abonnement heeft, kan het kantoor de facturatie daarvan niet overnemen totdat dat abonnement is opgezegd. Je ziet een foutmelding als het kantoor kantoorfacturatie probeert in te stellen terwijl je eigen abonnement nog actief is.

Je kunt die toegang later altijd weer intrekken via Instellingen › "Je boekhouder". De uitnodigingslink is 30 dagen geldig en je boekhouder kan hem opnieuw sturen of intrekken.

## Wat je boekhouder ziet

Als je boekhouder toegang heeft, ziet hij of zij in het boekhoudersportaal een triage-overzicht met één rij per administratie. Het overzicht sorteert op urgentie, zodat je boekhouder in één oogopslag ziet welke administratie aandacht nodig heeft.

- Administraties met een komende of gemiste btw-aangiftetermijn komen bovenaan.
- Openstaande facturen en ontbrekende bonnen worden per administratie geteld.
- Administraties die op schema liggen, krijgen het label "Loopt goed".

Je boekhouder klikt op een administratie om direct die werkruimte te openen met de rechten die jij hebt ingesteld. De boekhouder ziet alleen de pagina's die jij toegankelijk hebt gemaakt en kan vanuit hetzelfde scherm administraties uitnodigen of beheren.

## Meerdere bedrijven beheren

Als je meer dan één bedrijf runt, of als je boekhouder meerdere administraties beheert, wissel je via de werkruimtekiezer in de linker zijbalk tussen administraties. Je kunt een eigen bedrijf toevoegen vanuit de kiezer; elk bedrijf krijgt een eigen administratie met aparte btw, facturen en boekhouding. Op Desk heb je één eigen bedrijf. Meer eigen bedrijven (tot 10) kan met Office, voor € 5,99 per maand of € 59,90 per jaar per extra bedrijf (excl. btw).

Als je meer dan één administratie hebt, verschijnt in de linker navigatie ook **Werkruimtes** als directe link naar het triage-overzicht.

Boekhouders die door een klant zijn uitgenodigd, zien die beheerde werkruimtes naast hun eigen bedrijf. Zie [Rapporten](/features/reports) en [Dashboard](/features/dashboard) voor hoe werk over administraties heen wordt getoond.
