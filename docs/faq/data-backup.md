---
title: "Back-up van je gegevens"
last_verified: 2026-07-02
chatbot:
  triggers:
    - "backup data"
    - "data backup"
    - "export backup"
    - "save my data"
    - "download everything"
    - "gegevens backup"
    - "data opslaan"
    - "datensicherung"
    - "sauvegarde donnees"
    - "telecharger donnees"
  actions:
    - { label: "Open data download", to: "/settings/downloaden" }
  follow_up:
    - "How do I export data for my accountant?"
    - "How do I import data?"
---

Om een back-up van je gegevens te maken:
1. Ga naar Instellingen -> "Gegevens downloaden"
2. Download CSV-exports voor facturen, klanten en uitgaven, of de volledige back-up die daar beschikbaar is
3. Controleer of de gedownloade bestanden de gegevens bevatten die je nodig hebt

CSV-exports zijn beschikbaar vanaf het Starter-abonnement. Maak je regelmatig een back-up, kies dan een vast moment, bijvoorbeeld na het afsluiten van elk kwartaal.

:::tip
Voor supportmedewerkers van MyCompanyDesk bevat het adminpanel ook acties voor **Back-up maken** en **Gegevens downloaden** per werkruimte. De actie **Cache wissen** in het adminpanel maakt de gedeelde cache-service (en de module-eigen KPI-cache) leeg, en **Sessies ongeldig maken** verhoogt een globale drempel waardoor alle sessietokens die daarvoor zijn uitgegeven, worden geweigerd. Deze tools horen niet bij de klantinstellingen.
:::
