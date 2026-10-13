---
title: "API-sleutels"
description: "Kun je API-sleutels of webhooks maken in MyCompanyDesk? Nee, er is geen publieke API. Zo haal je je gegevens er toch uit."
last_verified: 2026-10-13
chatbot:
  triggers: ["api key", "api keys", "api access", "integration", "api token", "connect api", "api instellen", "api schlussel", "cle api"]
  actions:
    - { label: "Open Gegevens downloaden", to: "/settings/downloaden" }
  follow_up: ["How do I set up my company settings?", "How do I manage team access?"]
---
MyCompanyDesk heeft geen publieke API en geen webhooks. Je kunt dus geen API-sleutels aanmaken.

Wil je je gegevens in een ander systeem gebruiken, dan kan dat op elk abonnement:
1. Ga naar **Instellingen › Gegevens downloaden** en download je facturen, klanten en uitgaven als CSV-bestand per onderdeel, of alles samen als JSON-back-up
2. Of geef je boekhouder gratis toegang onder **Instellingen › Je boekhouder**

Meer hierover lees je op [API-integratie](/advanced/api).
