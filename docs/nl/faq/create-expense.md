---
title: Create expense
last_verified: 2026-05-09
chatbot:
  triggers: ["create expense", "new expense", "add expense", "log expense", "record expense", "track expense", "uitgave toevoegen", "nieuwe uitgave", "uitgave aanmaken", "ausgabe hinzufugen", "wie erstelle ich eine ausgabe", "ajouter depense", "comment creer une depense"]
  actions:
    - { label: "Create expense", to: "/expenses/new" }
  follow_up: ["How do I upload a receipt?", "How do I categorize expenses?", "How do I mark an expense as paid?"]
---

Zo voeg je een uitgave toe:
1. Ga naar Uitgaven en open "Nieuwe uitgave"
2. Vul leverancier, categorie, omschrijving, bedrag en datum in
3. Sla de uitgave op zodat het record wordt aangemaakt
4. Open daarna de opgeslagen uitgave als je "Bon uploaden" wilt gebruiken

Tip: Het uploaden van een bon gebeurt op de detailpagina nadat de uitgave is opgeslagen.
