---
title: "Uitgave splitsen"
description: "Een uitgave heeft één categorie. Wil je een bon over categorieën of projecten verdelen, maak dan per deel een aparte uitgave."
last_verified: 2026-05-09
chatbot:
  triggers: ["split expense", "divide expense", "expense between categories", "allocate expense", "expense allocation", "uitgave splitsen", "uitgave verdelen", "ausgabe aufteilen", "repartir depense"]
  actions:
    - { label: "Create expense", to: "/expenses/new" }
  follow_up: ["How do I categorize expenses?", "Which expenses are tax deductible?", "How do I upload a receipt?"]
---
Een uitgave heeft één categorie en één project. Om een bon over meerdere categorieën of projecten te verdelen:
1. Maak voor elk deel een aparte uitgave aan
2. Geef elke uitgave de juiste categorie of het juiste project
3. Verwijs in elke uitgave naar dezelfde bon
4. Zet in de notities hoe je de bon hebt verdeeld, en controleer of de delen samen het bonbedrag zijn

Met dezelfde notities of bonverwijzing blijven de bij elkaar horende uitgaven makkelijk terug te vinden.
