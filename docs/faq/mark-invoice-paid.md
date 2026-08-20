---
title: "Factuur als betaald markeren"
description: "Zo markeer je een factuur als betaald: open de factuur vanuit de lijst."
last_verified: 2026-07-02
chatbot:
  triggers: ["mark invoice paid", "invoice paid", "mark as paid", "record payment", "received payment", "payment received", "factuur betaald", "betaald markeren", "factuur als betaald", "rechnung als bezahlt", "marquer payee"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I record a partial payment?", "How do I send a payment reminder?", "How do I view overdue invoices?"]
---

Zo markeer je een factuur als betaald:
1. Open de factuur vanuit de lijst
2. Klik op "Markeer als betaald" in de kop van de factuur; met één klik springt de status op Betaald en wordt er een betaalregel voor het volledige bedrag aangemaakt
3. Wil je de betaaldatum, betaalmethode of een kenmerk vastleggen? Gebruik dan "Betaling registreren" in de sectie Betaling

Let op: een conceptfactuur moet eerst definitief worden gemaakt voordat je hem als betaald kunt markeren of een betaling kunt registreren. Een betaling op een concept maakte eerder een factuur met status Betaald zonder nummer, wat nu niet meer mag. Om een betaling op een concept vast te leggen, verstuur of maak de factuur eerst definitief zodat hij een nummer krijgt, en registreer dan de betaling.

Als een oudere factuur wel Betaald toont, maar de betaalkaart meldt dat er geen betaling is geregistreerd, dan is hij waarschijnlijk via een import of een ouder pad als betaald gemarkeerd zonder dat er een betaalregel werd aangemaakt. Gebruik "Eerste betaling registreren" om de betaling alsnog vast te leggen en de melding op te heffen.
