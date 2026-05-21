---
title: Create an invoice
last_verified: 2026-05-09
chatbot:
  triggers: ["create invoice", "new invoice", "make invoice", "add invoice", "write invoice", "send invoice", "first invoice", "how to invoice", "maak factuur", "nieuwe factuur", "factuur maken", "factuur aanmaken", "hoe maak ik een factuur", "rechnung erstellen", "wie erstelle ich eine rechnung", "neue rechnung", "creer facture", "comment creer une facture"]
  actions:
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I add a customer first?", "How do I change the PDF style?", "How do I set payment terms?"]
---

Zo maak je een factuur:
1. Ga naar Facturen en open "Nieuwe factuur"
2. Selecteer een klant of voeg er een toe via de klantkiezer
3. Voeg regels toe met omschrijving, aantal, prijs en BTW
4. Stel in de kaart met factuurdetails de factuurdatum en vervaldatum in
5. Gebruik "Opslaan als concept" als de factuur nog niet klaar is, of "Afronden" wanneer die gereed is (MyCompanyDesk controleert eerst je btw-id en IBAN, je kunt ze meteen invullen als het nodig is)
6. Open na het opslaan de factuurdetailpagina om te bekijken of te versturen

Tip: Instellingen zoals nummering, betaaltermijnen en PDF-standaarden staan onder Bedrijf. Zorg dat je btw-id en IBAN daar zijn ingevuld, dan rond je facturen zonder onderbreking af.
