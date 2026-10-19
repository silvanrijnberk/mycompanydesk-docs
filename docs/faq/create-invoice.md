---
title: "Factuur maken"
description: "Zo maak je een factuur: ga naar Facturen en open Nieuwe factuur, kies een klant of voeg er een toe via de klantkiezer."
last_verified: 2026-10-19
chatbot:
  triggers: ["create invoice", "new invoice", "make invoice", "add invoice", "write invoice", "send invoice", "first invoice", "how to invoice", "maak factuur", "nieuwe factuur", "factuur maken", "factuur aanmaken", "hoe maak ik een factuur", "rechnung erstellen", "wie erstelle ich eine rechnung", "neue rechnung", "creer facture", "comment creer une facture"]
  actions:
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I add a customer first?", "How do I change the PDF style?", "How do I set payment terms?"]
---

Zo maak je een factuur:
1. Ga naar Facturen en open "Nieuwe factuur"
2. Kies een klant, of voeg er een toe met "Nieuwe klant toevoegen" onderaan de klantkiezer
3. Voeg regels toe met omschrijving, aantal, prijs en btw
4. Stel in de kaart met factuurdetails de factuurdatum en vervaldatum in. Heb je het werk op een andere dag gedaan dan de factuurdatum? Vul dan ook de leverdatum in, of de periode waarop het werk viel; op de pdf staat hij bij de datums. Slechts één dag? Vul alleen de leverdatum in
5. Gebruik "Concept opslaan" als de factuur nog niet klaar is, of "Definitief maken" wanneer die gereed is (MyCompanyDesk controleert eerst je btw-id en IBAN, je kunt ze meteen invullen als het nodig is)
6. Open na het opslaan de factuurdetailpagina om te bekijken of te versturen

Heeft de klant nog niet-gefactureerde uren of uitgaven, dan verschijnt er in het formulier een onderdeel waarmee je ze als factuurregels toevoegt.

Tip: Standaardinstellingen zoals betaaltermijn en offertegeldigheid staan onder Instellingen › "Facturen en offertes"; factuurnummering gaat automatisch, daar hoef je niets voor in te stellen. Zorg dat je btw-id en IBAN zijn ingevuld, dan rond je facturen zonder onderbreking af.
