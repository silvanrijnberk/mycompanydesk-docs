---
title: "Uitgave verwijderen"
last_verified: 2026-08-16
chatbot:
  triggers: ["delete expense", "remove expense", "trash expense", "erase expense", "uitgave verwijderen", "uitgave wissen", "hoe verwijder ik een uitgave", "ausgabe loschen", "wie losche ich eine ausgabe", "supprimer depense"]
  actions:
    - { label: "Open expenses", to: "/expenses" }
  follow_up: ["How do I edit an expense instead?", "How do I export my expense data?"]
---

Om een uitgave te verwijderen:
1. Open de uitgave vanuit je uitgavenlijst
2. Scroll in de zijbalk naar de sectie "Gevarenzone"
3. Klik op "Verwijderen"
4. Bevestig de verwijdering

Verwijderen gaat in stappen. Een actieve uitgave verwijderen archiveert deze eerst, nog een keer verwijderen vanuit het Archief verplaatst de uitgave naar de Prullenbak, en verwijderen vanuit de Prullenbak is definitief. Tot die laatste stap kun je de uitgave altijd terugzetten vanuit de weergave Archief of Prullenbak. Let op: uitgaven selecteren in de lijst en daar de bulkactie Verwijderen gebruiken verwijdert ze meteen definitief.

Een uitgave in de Prullenbak kun je niet bewerken. Wil je toch iets wijzigen, zet hem dan eerst terug.

Als je een onbetaalde uitgave met een vervaldatum archiveert, krijg je daar geen betaalherinnering meer voor zolang hij in het archief staat. Je kunt de uitgave later nog uit het Archief terugzetten. Gebeurt dat, dan maakt de dagelijkse sweep de herinnering opnieuw aan, maar pas de volgende nacht op zijn vroegst.
