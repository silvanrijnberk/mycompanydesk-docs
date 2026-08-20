---
title: Toegang en boekhouder
last_verified: 2026-08-04
---

# Toegang en boekhouder

Geef een partner, medewerker of je boekhouder toegang tot je administratie. Iedereen krijgt een eigen login. In de app zijn deze instellingen opgesplitst in twee pagina's: **Mensen met toegang** en **Je boekhouder**.

## Waar vind je het

Open **Instellingen** via het menu en kies een van beide:

- **Mensen met toegang** om teamgenoten uit te nodigen en paginarechten in te stellen.
- **Je boekhouder** om je boekhouder uit te nodigen.

Je kunt ook direct naar `/settings/toegang` of `/settings/boekhouder`. De oude app-route `/settings/team` verwijst door naar `/settings/toegang`. Deze docs-pagina beschrijft beide app-pagina's.

De twee pagina's zijn:

- **Mensen met toegang**: nodig teamgenoten uit en bepaal wat ze kunnen zien en doen. Deze pagina vereist het Pro-abonnement; op Free en Starter zie je een upgrade-melding. Op Pro zit er geen limiet op het aantal mensen dat je uitnodigt.
- **Je boekhouder**: nodig je boekhouder uit en beheer diens toegang. Deze pagina is gratis op elk abonnement.

## Wat staat er op de pagina

### Naam van de werkruimte

Een kaart met een enkel veld. De naam van de werkruimte verschijnt in de navigatie, op uitnodigingen en in het werkruimtemenu in de zijbalk. Alleen teamadmins kunnen de naam wijzigen. Wijzigingen worden automatisch opgeslagen.

### Huidige leden

Een lijst van iedereen die kan inloggen. Elke rij toont:

- Avatar met initialen en een aanwezigheidsstip (groen online, grijs inactief, verborgen als je geen admin bent)
- Naam en e-mailadres
- Rolbadge of rolkiezer (alleen admin)
- Een instellingenicoon dat het paneel **Toegang beheren** opent
- Laatste activiteit ("2 minuten geleden actief", "Gisteren voor het laatst gezien"), alleen admin

Is de lijst leeg, dan toont de kaart de solostand: je werkt alleen, je werkruimte werkt volledig, en je voegt teamgenoten toe wanneer je er klaar voor bent.

### Iemand toegang geven

Admins typen een e-mailadres en versturen de uitnodiging. In de app heet de knop **Iemand toegang geven**. De genodigde ontvangt een e-mail met een link; wie nog geen MyCompanyDesk-account heeft, maakt er tijdens het accepteren een aan. Openstaande uitnodigingen staan in een aparte kaart met verzendtijd en een badge.

Ben je geen admin, dan zie je in plaats daarvan een infomelding: alleen teamadmins kunnen nieuwe leden uitnodigen.

### Boekhouder

Een aparte lijst voor externe boekhouders, gratis op elk abonnement. Je boekhouder kan je cijfers zien en je aangifte controleren zonder een Pro-teamplek in te nemen. Elke rij toont een status:

| Badge | Betekenis |
|---|---|
| **Alleen contact** | In je adresboek, geen toegang tot de app |
| **Uitgenodigd** | Uitnodigingsmail verstuurd, nog niet geaccepteerd |
| **Geactiveerd** | Heeft een account en kan inloggen |
| **Ingetrokken** | Toegang verwijderd (kan later hersteld worden) |

Adminacties per rij: **Boekhouder uitnodigen**, het paneel **Toegang beheren** en **Verwijderen**.

## Automatisch aanleveren aan je boekhouder

Zodra een boekhouder is gekoppeld, kun je MyCompanyDesk automatisch records laten aanleveren. De export bundelt verkoopfacturen, uitgaven en geaccepteerde offertes in een formaat dat het pakket van je boekhouder kan inlezen, zodat de cijfers niet overgetypt hoeven te worden. BTW-aangiftecijfers zitten niet in deze export; download die als CSV via **Belastingen → BTW-aangifte**.

Open de rij van de boekhouder in **Instellingen → Je boekhouder**, kies **Automatisch doorsturen**, selecteer de onderdelen die je wilt meesturen (bijvoorbeeld verkoopfacturen, uitgaven en geaccepteerde offertes), het moment van afleveren en het formaat. Een afleverlog toont wat wanneer is verstuurd.

### Activiteitsoverzicht van de boekhouder

MyCompanyDesk houdt voor elke gekoppelde boekhouder een activiteitsoverzicht bij. Daarin staat wat de boekhouder heeft bekeken of gewijzigd in je werkruimte, zodat je altijd kunt teruglezen wat er is gebeurd. Het overzicht vind je in dezelfde boekhouderrij, naast het afleverlog.

<!-- TODO(source-missing): bevestig het abonnement dat automatisch doorsturen ontgrendelt en de ondersteunde exportformaten/profielen -->

## Rollen

| Rol | Beschrijving |
|---|---|
| **Admin** | Volledige toegang. Kan leden uitnodigen en verwijderen, rollen wijzigen, het abonnement beheren, bedrijfsinstellingen aanpassen en domeinen en DNS beheren. |
| **Lid** | Toegang tot wat de admin toekent in het paneel Toegang beheren. |
| **Boekhouder** | Een apart type contact. Krijgt toegang via de boekhouderflow in plaats van de ledenuitnodiging. |

Rollen wissel je direct op de ledenrij via een menu (alleen admin). Je eigen rol kun je niet wijzigen.

## Rechten

Het paneel **Toegang beheren** opent een rechtentabel per pagina. Elke rij is een onderdeel van de app: Dashboard, Facturen, Uitgaven, Klanten, Projecten, Objecten, Contracten, Offertes, Verhuur, Rapportages, Urenregistratie, Belastingen (btw) en Instellingen.

Per pagina zijn er drie losse schakelaars:

- **Lezen**: ziet de pagina en de gegevens erop
- **Schrijven**: kan bestaande gegevens bewerken
- **Aanmaken**: kan nieuwe gegevens toevoegen

Het paneel heeft ook een melding **Toegang ingetrokken** voor accounts die zijn geblokkeerd (met de herstelknop zet je ze weer aan).

## Inlogbeveiliging

De inlogbeveiliging van elk lid staat op het eigen account, onder **Instellingen** en dan **Inloggen**, niet op deze pagina:

- **Passkeys**: leden kunnen een of meer passkeys registreren; daarna is de passkeyknop de standaard manier van inloggen in plaats van het wachtwoordveld.
- **Tweestapsverificatie**: staat die aan, dan vraagt het inloggen na het wachtwoord om een 6-cijferige code uit een authenticator-app.

Admins kunnen de passkeys of tweestapsverificatie van een ander lid niet beheren; dat zijn persoonlijke gegevens. Wie buitengesloten is, gebruikt de herstelfunctie op het inlogscherm om ze te resetten.

## Wisselen tussen werkruimtes

Open het werkruimtemenu in de zijbalkkop om tussen werkruimtes te springen, je abonnement te bekijken of een nieuwe aan te maken.

Als je toegang hebt tot meer dan één werkruimte, linkt het menu ook naar het overzicht **Werkruimtes** op `/werkruimtes`. Daar zie je alle werkruimtes die jij bezit of beheert als boekhouder, met deadlines en openstaande zaken per werkruimte, en je opent de juiste werkruimte in één klik.

## Abonnementen in het kort

| Mogelijkheid | Free | Starter | Pro |
|---|---|---|---|
| Alleen de eigenaar | ja | ja | ja |
| Teamleden uitnodigen | nee | nee | ja (onbeperkt) |
| Boekhoudertoegang | ja | ja | ja |

## Gerelateerd

- [Abonnement en betalingen](/settings/billing) om teamleden te ontgrendelen
- [Account en beveiliging](/account/security) voor passkeys en tweestapsverificatie
