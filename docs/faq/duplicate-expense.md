---
title: "Uitgave dupliceren"
description: "Om een uitgave te dupliceren: open de betaalde uitgave die je wilt kopiëren. Dupliceren kan alleen bij betaalde uitgaven."
last_verified: 2026-08-16
chatbot:
  triggers: ["duplicate expense", "copy expense", "clone expense", "reuse expense", "uitgave kopieren", "uitgave dupliceren", "ausgabe kopieren", "dupliquer depense"]
  actions:
    - { label: "Open expenses", to: "/expenses" }
  follow_up: ["How do I set up recurring expenses?", "How do I edit an expense?"]
---

Om een uitgave te dupliceren:
1. Open de betaalde uitgave die je wilt kopiëren. Dupliceren is alleen beschikbaar bij betaalde uitgaven; bij een onbetaalde uitgave zie je in plaats daarvan "Markeer als betaald"
2. Klik op "Dupliceren" in de kop, of gebruik de kaart "Acties" in de zijbalk
3. Er wordt een nieuwe onbetaalde kopie aangemaakt met dezelfde gegevens, met de datum van vandaag. De kopie behoudt dezelfde leverancier, categorie, BTW-behandeling, project, klant, object en investeringsstatus. Als het origineel een investering is, wordt de kopie ook als investering aangemaakt met dezelfde gebruiksduur en restwaarde
4. Pas het bedrag of andere details aan waar nodig

Tip: Handig voor terugkerende uitgaven die telkens net iets anders zijn.
