---
title: "Boekhouder toegang geven"
last_verified: 2026-08-03
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

## Je boekhouder nodigt jou uit

Als je boekhouder MyCompanyDesk gebruikt, kan hij of zij je uitnodigen vanuit het boekhoudersportaal. Je ontvangt dan een e-mail met een link naar `/register?uitnodiging=TOKEN`.

1. Klik op de link in de e-mail
2. De registratiepagina toont het kantoor dat je heeft uitgenodigd en vult het e-mailadres waarnaar de uitnodiging is gestuurd alvast in
3. Maak je account aan met e-mail en wachtwoord. Jij blijft eigenaar van je werkruimte en gegevens
4. Na registratie krijgt je boekhouder automatisch toegang zodat hij of zij je aangifte kan controleren

Je kunt die toegang later altijd weer intrekken via Instellingen → "Toegang en boekhouder". De uitnodigingslink is 30 dagen geldig en je boekhouder kan hem opnieuw sturen of intrekken.

## Wat je boekhouder ziet

Als je boekhouder toegang heeft, ziet hij of zij in het boekhoudersportaal een triage-overzicht met één rij per klant. Het overzicht sorteert op urgentie, zodat je boekhouder in één oogopslag ziet wie er aandacht nodig heeft.

- Klanten met een komende of gemiste BTW-aangiftetermijn komen bovenaan.
- Openstaande facturen en ontbrekende bonnen worden per klant geteld.
- Klanten die op schema liggen, krijgen het label "Loopt goed".

Je boekhouder klikt op een klant om direct die werkruimte te openen met de rechten die jij hebt ingesteld. De boekhouder ziet alleen de pagina's die jij toegankelijk hebt gemaakt en kan vanuit hetzelfde scherm klanten uitnodigen of beheren.
