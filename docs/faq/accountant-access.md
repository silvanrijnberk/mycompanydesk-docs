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
    - { label: "Open access settings", to: "/settings/team" }
  follow_up:
    - "How do I set page permissions?"
    - "How do I invite a team member?"
    - "How do I revoke access?"
    - "What happens when my accountant invites me?"
---

Er zijn twee manieren waarop boekhoudertoegang kan beginnen: jij nodigt je boekhouder uit vanuit je eigen werkruimte, of je boekhouder nodigt jou uit om een werkruimte aan te maken vanuit het boekhoudersportaal.

## Jij nodigt je boekhouder uit

1. Ga naar Instellingen → "Toegang en boekhouder"
2. Klik in het onderdeel Boekhouder op "Boekhouder toevoegen" en vul de contactgegevens in
3. Verstuur de uitnodiging wanneer je wilt dat je boekhouder een account aanmaakt
4. Open "Toegang beheren" om de paginarechten in te stellen

Boekhoudertoegang is gratis op elk abonnement; er is geen Pro of teamplek voor nodig. Veelvoorkomende statussen zijn alleen contact, uitgenodigd, actief en ingetrokken.

## Automatisch aanleveren

Nadat je boekhouder is gekoppeld, ga je naar **Instellingen → Toegang en boekhouder** en zet je automatisch doorsturen aan. MyCompanyDesk kan dan een export aan je boekhouder leveren met verkoopfacturen, uitgaven en geaccepteerde offertes in een formaat dat het pakket van je boekhouder inleest, zodat de cijfers niet handmatig hoeven te worden overgenomen. BTW-aangiftecijfers zitten niet in deze export; download die als CSV via **Belastingen → BTW-aangifte**. Je kiest zelf welke onderdelen worden meegestuurd en ziet in een log wat er is afgeleverd.

## Je boekhouder nodigt jou uit

Als je boekhouder MyCompanyDesk gebruikt, kan hij of zij je uitnodigen vanuit het boekhoudersportaal. Je ontvangt dan een e-mail met een link naar `/register?uitnodiging=TOKEN`.

1. Klik op de link in de e-mail
2. De registratiepagina toont het kantoor dat je heeft uitgenodigd en vult het e-mailadres waarnaar de uitnodiging is gestuurd alvast in
3. Maak je account aan met e-mail en wachtwoord. Jij blijft eigenaar van je werkruimte en gegevens
4. Na registratie krijgt je boekhouder automatisch toegang zodat hij of zij je aangifte kan controleren

Als de werkruimte waarvoor je wordt uitgenodigd al een eigen actief abonnement heeft, kan het kantoor de facturatie daarvan niet overnemen totdat dat abonnement is opgezegd. Je ziet een foutmelding als het kantoor kantoorfacturatie probeert in te stellen terwijl je eigen abonnement nog actief is.

Je kunt die toegang later altijd weer intrekken via Instellingen → "Toegang en boekhouder". De uitnodigingslink is 30 dagen geldig en je boekhouder kan hem opnieuw sturen of intrekken.

## Wat je boekhouder ziet

Als je boekhouder toegang heeft, ziet hij of zij in het boekhoudersportaal een triage-overzicht met één rij per administratie. Het overzicht sorteert op urgentie, zodat je boekhouder in één oogopslag ziet welke administratie aandacht nodig heeft.

- Administraties met een komende of gemiste BTW-aangiftetermijn komen bovenaan.
- Openstaande facturen en ontbrekende bonnen worden per administratie geteld.
- Administraties die op schema liggen, krijgen het label "Loopt goed".

Je boekhouder klikt op een administratie om direct die werkruimte te openen met de rechten die jij hebt ingesteld. De boekhouder ziet alleen de pagina's die jij toegankelijk hebt gemaakt en kan vanuit hetzelfde scherm administraties uitnodigen of beheren.

## Meerdere bedrijven beheren

Als je meer dan één bedrijf runt, of als je boekhouder meerdere administraties beheert, wissel je via de werkruimtekiezer in de linker zijbalk tussen administraties. Je kunt je eigen bedrijf toevoegen vanuit de kiezer; elke krijgt een eigen administratie met aparte btw, facturen en boekhouding.

Als je meer dan één administratie hebt, verschijnt in de linker navigatie ook **Werkruimtes** als directe link naar het triage-overzicht.

Boekhouders die door een klant zijn uitgenodigd, zien die beheerde werkruimtes naast hun eigen bedrijf. Zie [Rapporten](/features/reports) en [Dashboard](/features/dashboard) voor hoe werk over administraties heen wordt getoond.
