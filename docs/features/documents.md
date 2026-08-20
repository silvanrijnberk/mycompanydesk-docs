---
title: Documenten
description: "Bewaar, volg en onderteken digitaal afspraken zonder prijs, zoals algemene voorwaarden, geheimhoudingsverklaringen en verwerkersovereenkomsten."
---

# Documenten

Bewaar, volg en onderteken digitaal afspraken zonder prijs — zoals algemene voorwaarden, geheimhoudingsverklaringen en verwerkersovereenkomsten.

## Overzicht

Documenten zijn voor papierwerk dat je met klanten of partners afsluit, maar dat geen factuur, offerte of terugkerend contract is. Veelvoorkomende toepassingen:

- **Algemene voorwaarden** — leg vast dat je klant ze heeft ontvangen vóór het sluiten van een overeenkomst.
- **Verwerkersovereenkomst** — leg GDPR/AVG-verwerkersafspraken vast.
- **Geheimhouding (NDA)** — leg een ondertekende geheimhoudingsverklaring vast.
- **Overig** — elk ander document dat je wilt bewaren, versturen en eventueel laten ondertekenen.

::: info
De documentenmodule is optioneel. Schakel hem in via **Bedrijf > Functies** als je hem niet in het menu ziet.
:::

## Een document maken

1. Ga naar **Documenten > Nieuw document**
2. Kies een soort: **Algemene voorwaarden**, **Verwerkersovereenkomst**, **Geheimhouding** of **Overig**
3. Vul in:
   - **Titel** — een beschrijvende naam
   - **Klant** — optioneel; koppel het document aan een klant
   - **Inhoud** — de tekst die de ondertekenaar te zien krijgt
4. Klik op **Opslaan**

Je kunt een document maken op basis van een sjabloon of helemaal zelf opstellen. Documenten die vanuit een sjabloon zijn gemaakt, renderen de sjabloontekst op het moment van aanmaken. Latere wijzigingen in de sjabloon hebben dus geen invloed op bestaande documenten.

## Voorwaarden ter hand stellen

MyCompanyDesk legt vast wanneer je algemene voorwaarden aan een klant hebt verstrekt.

### Zelf een datum vastleggen

Wil je zelf een datum vastleggen:

1. Open de detailpagina van het document
2. Klik op **Vastleggen als verstrekt**
3. Kies de datum waarop je de voorwaarden aan de klant gaf

Daarna toont de detailpagina een badge **Verstrekt** met de datum. Als het document aan een klant is gekoppeld, is dit ook zichtbaar in de documentenlijst.

### Meesturen met een offerte of factuur

Als je werkruimte algemene voorwaarden in Documenten heeft staan, toont de e-mailvoorbeelddialoog bij het versturen van een offerte of factuur de schakelaar **Algemene voorwaarden meesturen**. Bij offertes staat deze standaard aan, want het meesturen van voorwaarden met een offerte is het juridisch relevante moment voor terhandstelling. Bij facturen staat hij standaard uit.

Als de schakelaar aan staat, wordt de huidige voorwaarden-PDF bij de e-mail gevoegd. Zodra de e-mail succesvol is verstuurd, legt MyCompanyDesk die verzending vast als het terhandstellingsmoment op het voorwaardendocument. De detailpagina toont dan:

- de ontvanger en datum van de offerte- of factuurmail die de voorwaarden heeft bezorgd
- een link naar de offerte of factuur, zodat je de concrete verzending kunt openen

Als de voorwaarden al handmatig als verstrekt zijn gemarkeerd, blijft dat eerdere record bewaard. Latere verzendingen overschrijven het niet.

::: tip
Zo wordt een kale datum controleerbaar bewijs. In plaats van "we hebben de voorwaarden op deze dag verstrekt" verwijst het document naar de echte e-mail die ze heeft meegenomen.
:::

## Ontbrekende verwerkersovereenkomst op de klantpagina

Op de klantdetailpagina controleert MyCompanyDesk of een klant een contract heeft maar nog geen verwerkersovereenkomst in Documenten. Als dat tekort bestaat, verschijnt er een hint in de documentenkaart met de link **Verwerkersovereenkomst opstellen** die een nieuwe verwerkersovereenkomst voor die klant start.

De hint verschijnt alleen als de documenten- en contractenmodules aan staan en de documentenkaart verder leeg zou zijn. Het is een stille aanwijzing om een compliance-tekort op de plek waar je er iets aan doet te repareren.

## Ondertekenen

Documenten gebruiken dezelfde digitale ondertekenflow als contracten. Je voegt één of meer partijen toe via het documentformulier. Elke partij ontvangt een ondertekenlink per e-mail.

Als een document ondertekening ondersteunt, toont de detailpagina een ondertekenkaart met:

- De status van elke partij (concept, verstuurd, deels getekend, getekend, verlopen of beëindigd)
- Een knop **Bekijken** die een inline voorbeeld van het ondertekende document opent
- Een downloadknop om de PDF op te slaan

### Onderling ondertekenen

Documenten worden onderling ondertekend: de tegenpartij tekent eerst via een beveiligde link, daarna jij als eigenaar. Pas na beide handtekeningen wordt de status **Getekend**.

### Ondertekening in de documentenlijst

De documentenlijst toont een kolom **Ondertekening** met de status van elk document waarvoor digitale ondertekening is ingeschakeld. Statussen verschijnen als gekleurde badges: concept, verstuurd, deels getekend en getekend.

Boven de lijst staat een filter waarmee je kunt filteren op ondertekenstatus, of kunt zoeken naar documenten zonder digitale ondertekening.

### SMS-verificatie

Ondertekenlinks kunnen SMS-verificatie vereisen voordat een partij het document kan bekijken en ondertekenen. Als dit is ingeschakeld, moet de ondertekenaar een mobiel nummer opgeven en een 6-cijferige code bevestigen die per SMS wordt verstuurd.

- **Code versturen** — na het opgeven van een mobiel nummer ontvangt de ondertekenaar een code
- **Code verifiëren** — de ondertekenaar voert de 6-cijferige code in om toegang tot het nummer te bewijzen
- **Geverifieerd-badge** — daarna verschijnt een badge met de laatste vier cijfers van het nummer

Als een verkeerde code wordt ingevoerd, kan de ondertekenaar een nieuwe aanvragen. SMS-verificatie wordt per ondertekensessie ingesteld en geldt voor alle partijen.

### Getekende PDF en audit trail

Nadat het document volledig is ondertekend, ontvangen beide partijen een getekende PDF per e-mail. De PDF bevat de documenttekst plus een ondertekenpagina met een audit trail (IP-adres en tijdstip). Je kunt de PDF ook altijd downloaden vanaf de detailpagina.

## Documentstatussen

| Status | Omschrijving |
|---|---|
| **Concept** | Aangemaakt maar nog niet verstuurd |
| **Verstuurd** | Uitnodiging verstuurd naar één of meer partijen |
| **Deels getekend** | Minstens één partij heeft getekend; laatste tegenhandtekening ontbreekt nog |
| **Getekend** | Alle vereiste handtekeningen zijn vastgelegd |
| **Verlopen** | De ondertekenlink is verlopen voordat alle partijen tekenden |
| **Beëindigd** | Niet meer actief |

## Tips

- Koppel een document aan een klant zodat je het later snel terugvindt
- Leg vast wanneer je algemene voorwaarden hebt verstrekt — dit is belangrijk bij geschillen
- Voeg ondertekenpartijen toe bij het aanmaken van een document om digitale ondertekening in te schakelen
- Gebruik het ondertekenstatusfilter om te zien welke documenten nog een handtekening nodig hebben
