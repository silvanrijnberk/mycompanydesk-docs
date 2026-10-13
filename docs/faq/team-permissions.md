---
title: Teamrechten
description: "Met paginarechten bepaal je per pagina wat een teamlid of je boekhouder mag: Lezen, Schrijven en Aanmaken."
last_verified: 2026-10-13
chatbot:
  triggers: ["team permissions", "manage team permissions", "page permissions", "read write create", "permission settings", "access control", "granular permissions", "read only", "write access", "create access", "pagina rechten", "teamrechten", "lezen schrijven", "toegang instellen", "seitenberechtigungen", "teamberechtigungen", "lese schreibzugriff", "permissions page", "permissions de l'equipe", "droits acces"]
  actions:
    - { label: "Open access settings", to: "/settings/toegang" }
  follow_up: ["How do I invite a new team member?", "How do I manage accountant access?", "How do I revoke someone's access?"]
---

Met paginarechten bepaal je per pagina van de app wat een teamlid of je boekhouder mag:

| Recht | Mag |
|---|---|
| **Lezen** | De pagina en de gegevens erop bekijken |
| **Schrijven** | Bestaande gegevens bewerken |
| **Aanmaken** | Nieuwe gegevens toevoegen |

Zo stel je de rechten in:

1. Voor een teamlid: ga naar Instellingen › **Mensen met toegang**, open het menu bij die persoon en kies **Toegang beheren**. Voor je boekhouder: ga naar Instellingen › **Je boekhouder** en klik op **Paginatoegang**
2. Zet per pagina Lezen, Schrijven en Aanmaken aan of uit
3. Klik op **Opslaan**

In hetzelfde venster staan ook snelkoppelingen:

- **Volledige toegang** zet Lezen, Schrijven en Aanmaken aan voor elke pagina.
- **Alleen-lezen toegang** zet Lezen aan en Schrijven en Aanmaken uit voor elke pagina.
- **Alles intrekken** zet alles uit.

Lezen moet aan staan voordat Schrijven of Aanmaken werkt. Zet je Lezen uit, dan gaan Schrijven en Aanmaken voor die pagina ook uit.

De pagina's in het venster zijn Dashboard, Taken, Inbox, Facturen, Uitgaven, Klanten, Projecten, Bezittingen, Contracten, Documenten, Nieuwsbrief, Rapportages en boekhouding, Uren & agenda, Belastingen (btw) en Instellingen. Betalingen hebben geen eigen regel: die horen bij **Facturen**. De ritten achter de kilometervergoeding staan bij Uren & agenda en vragen Lezen op die pagina. Opgeslagen routes en de ritvoorstellen bij een ov-uitgave openen met Lezen op Uren & agenda of Uitgaven.

Hetzelfde recht beschermt de plekken elders in de app waar je een factuur of offerte maakt, zoals de actie **Factuur maken** bij een urenregel, in een afspraak, bij klanten in de buurt of op een project- of contractpagina. Die vragen het recht op **Facturen**, en zonder dat recht blijft de actie verborgen in plaats van op een foutmelding uit te komen. Automatisch factureren aanzetten vraagt Schrijven op Facturen, en een incassomachtiging starten ook. Lijsten die van Lezen afhangen werken hetzelfde: de transactielijst op de btw-pagina slaat factuur- en uitgaverijen over waarop het teamlid geen Lezen heeft, het documentarchief toont bonnen, facturen en mailbijlagen alleen aan wie het bijbehorende recht heeft, en afgeschermde stukken blijven voor de boekhouder buiten het archief.

Aanmaken geldt alleen voor nieuwe gegevens. Wie Aanmaken heeft maar geen Schrijven, kan nieuwe gegevens toevoegen, maar geen bestaande bewerken, geen status wijzigen, geen bulkacties gebruiken en geen gescande bonnen bevestigen als nieuwe uitgaven.

Pagina's zonder Lezen blijven buiten bereik: Boekhouding toont alleen de tabbladen die het teamlid mag openen, en een directe link naar een pagina zonder toegang toont een korte melding dat het teamlid geen toegang heeft tot dat deel van de app. Het dashboard zegt er niets over, omdat iedereen daar na het inloggen binnenkomt.
