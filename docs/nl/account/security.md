---
title: Beveiliging
---

# Beveiliging

Bescherm je account met sterke authenticatie en monitor toegang.

## Wachtwoord

Gebruik een sterk, uniek wachtwoord voor je MyCompanyDesk-account. Wijzig het via **Profiel > Wachtwoord**.

### Wachtwoordvereisten

- Minimaal 8 tekens
- Mix van letters, cijfers en symbolen aanbevolen

## Tweefactorauthenticatie

Voeg een extra beveiligingslaag toe aan je account:

1. Ga naar **Profiel > Beveiliging**
2. Klik op **Tweefactorauthenticatie inschakelen**
3. Scan de QR-code met je authenticator-app (Google Authenticator, Authy, etc.)
4. Vul de verificatiecode in ter bevestiging
5. Sla je **herstelcodes** op op een veilige locatie

Met 2FA ingeschakeld heb je zowel je wachtwoord als een code van je authenticator-app nodig om in te loggen.

### 2FA uitschakelen

1. Ga naar **Profiel > Beveiliging**
2. Klik op **Tweefactorauthenticatie uitschakelen**
3. Vul je wachtwoord in ter bevestiging

## Wachtwoordloos inloggen (magic link)

Je kunt inloggen zonder wachtwoord via een eenmalige link die naar je e-mail wordt gestuurd:

1. Ga naar de inlogpagina
2. Klik op **Stuur me een inloglink**
3. Vul je e-mailadres in
4. Check je inbox en klik op de link

De link is 15 minuten geldig en kan eenmalig worden gebruikt. Voor de veiligheid maakt het aanvragen van een nieuwe link eventuele openstaande links ongeldig.

::: tip
Als je je e-mail verifieert na het aanmelden, word je automatisch ingelogd. Je hoeft dan niet nog een keer apart in te loggen.
:::

## Sessiebeheer

Bekijk en beheer je actieve sessies:

- Bekijk alle apparaten en browsers waar je bent ingelogd
- Bekijk de laatste activiteitstijd per sessie
- **Intrekken** van sessies die je niet herkent

::: warning
Als je een sessie ziet die je niet herkent, trek deze dan direct in en wijzig je wachtwoord.
:::

## Passkeys

Met passkeys kun je inloggen met biometrie of een security key in plaats van een wachtwoord. Ga naar **Profiel > Beveiliging** om ze te beheren.

- Registreer meerdere passkeys (Face ID, Touch ID, Windows Hello, hardware keys)
- Geef elke passkey een naam zodat je individuele apparaten kunt intrekken
- Zodra er een passkey is geregistreerd, verschijnt er standaard een passkey-knop bij het inloggen

::: info
In werkruimtes waar passkeys door een beheerder worden beheerd, zien niet-beheerders een informatiekaart in plaats van het beheerpaneel. Vraag je beheerder om een passkey voor je in te stellen, of om je beheerdersrechten te geven zodat je het zelf kunt doen.
:::

## Social login

Als je Google of Microsoft gebruikt om in te loggen:

- Je authenticatie wordt afgehandeld door de aanbieder
- MyCompanyDesk ziet of bewaart je Google/Microsoft-wachtwoord nooit
- Je kunt social login loskoppelen via **Profiel > Gekoppelde apps**

## Gegevensbescherming

MyCompanyDesk neemt gegevensbeveiliging serieus:

- Alle gegevens worden verstuurd via HTTPS
- Wachtwoorden worden gehasht met bcrypt
- Databaseverbindingen zijn versleuteld
- Regelmatige back-ups zorgen voor gegevensveiligheid
- AVG-conforme gegevensverwerking

## Account verwijderen

Als je je account moet verwijderen:

1. Ga naar **Profiel > Gegevens**
2. Klik op **Account verwijderen**
3. Vul je wachtwoord in ter bevestiging
4. Al je gegevens worden permanent verwijderd

::: warning
Accountverwijdering is onomkeerbaar. Exporteer je gegevens eerst als je een back-up nodig hebt.
:::
