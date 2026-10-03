---
title: "Klant verwijderen"
description: "Om een klant te verwijderen: ga naar Klanten en zoek de klant, open het profiel, scroll in de zijbalk naar de sectie Gevarenzone, klik op Verwijderen."
last_verified: 2026-10-03
chatbot:
  triggers: ["delete customer", "remove customer", "trash customer", "klant verwijderen", "klant wissen", "kunde loschen", "supprimer client"]
  actions:
    - { label: "Open customers", to: "/customers" }
  follow_up: ["How do I archive a customer instead?", "How do I edit customer details?"]
---

Om een klant te verwijderen:
1. Ga naar Klanten en zoek de klant
2. Open het profiel
3. Scroll in de zijbalk naar de sectie "Gevarenzone"
4. Klik op "Verwijderen"
5. Bevestig de verwijdering

Gekoppelde facturen houden het verwijderen niet tegen. Het gaat in stappen: een actieve klant verwijderen archiveert deze eerst, nog een keer verwijderen verplaatst de klant naar de Prullenbak, en verwijderen vanuit de Prullenbak is definitief. Tot die laatste stap kun je de klant altijd terugzetten vanuit de weergave Archief of Prullenbak.

Twee dingen houden die definitieve stap wél tegen: een actieve terugkerende urenregistratie voor deze klant (zet die stop bij Uren voordat je verder gaat) en uren van deze klant die nog niet gefactureerd zijn (factureer ze eerst, of zet ze op niet-factureerbaar). Uren die pas in de toekomst gepland zijn, houden het verwijderen niet tegen.

Als je in de werkruimte-instellingen kiest voor **Alle klanten verwijderen**, waarschuwt de bevestiging dat lopende contracten en terugkerende facturen daardoor worden gestopt.
