---
title: Split an expense
last_verified: 2026-05-09
chatbot:
  triggers: ["split expense", "divide expense", "expense between categories", "allocate expense", "expense allocation", "uitgave splitsen", "uitgave verdelen", "ausgabe aufteilen", "repartir depense"]
  actions:
    - { label: "Create expense", to: "/expenses/new" }
  follow_up: ["How do I categorize expenses?", "Which expenses are tax deductible?", "How do I upload a receipt?"]
---
Om een uitgave over meerdere categorieën te verdelen:
1. Open de uitgave in bewerkingsmodus
2. Gebruik, als het formulier dat ondersteunt, regelitems om het bedrag te splitsen
3. Wijs verschillende categorieën toe aan elke regel
4. Controleer of het totaal overeenkomt met het bonbedrag
5. Sla op

Als splitsen in één record niet beschikbaar is, maak dan aparte uitgaven aan met een verwijzing naar dezelfde bon.
