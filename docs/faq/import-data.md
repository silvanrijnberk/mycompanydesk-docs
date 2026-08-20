---
title: "Gegevens importeren"
description: "MyCompanyDesk kan klanten, facturen en uitgaven importeren uit een CSV-bestand. Andere gegevenstypes kun je niet importeren."
last_verified: 2026-08-15
chatbot:
  triggers:
    - "import data"
    - "import csv"
    - "import customers"
    - "import invoices"
    - "bulk import"
    - "upload data"
    - "data importeren"
    - "gegevens importeren"
    - "daten importieren"
    - "importer donnees"
  actions:
    - { label: "Open import page", to: "/profile/import" }
  follow_up:
    - "How do I export my data?"
    - "How do I add customers manually?"
---

MyCompanyDesk kan klanten, facturen en uitgaven importeren uit een CSV-bestand. Andere gegevenstypes kun je niet importeren.

De importpagina staat op `/profile/import`. Er is geen menu-ingang voor, dus open de pagina via de knop hierboven of door het adres direct in te voeren. Daarna:

1. Kies het gegevenstype: klanten, facturen of uitgaven
2. Upload je CSV-bestand
3. Koppel de kolommen van je bestand aan de juiste velden en bevestig de preview

Er is geen CSV-sjabloon om te downloaden; de import werkt met de kolommen van je eigen bestand en laat je die tijdens het uploaden koppelen.

Voor uitgaven worden CSV-bestanden in Nederlandse notatie herkend. Bedragen als 100,50 of 1.234,56 en datums in dd-mm-jjjj-volgorde worden als dag-maand-jaar gelezen. Dat werkt net zoals de bedragsvelden in de web-app, dus typen en importeren volgen dezelfde regels.

Is er een kolom met BTW-bedrag, dan leidt MyCompanyDesk daar het BTW-tarief uit af. Ontbreken zowel BTW-bedrag als tarief, dan blijft het tarief op 0 staan in plaats van op het standaardtarief te vallen. De uitgave komt dan in de controle "BTW ontbreekt" voor de aangifte.

Tip: begin met een kleine testimport om de koppeling te controleren voordat je grotere datasets importeert.
