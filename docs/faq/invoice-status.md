---
title: "Factuurstatus"
description: "Factuurstatussen uitgelegd: een concept is nog niet verstuurd en vrij te bewerken, en je kunt het pas als betaald markeren als het definitief is."
last_verified: 2026-08-15
chatbot:
  triggers: ["invoice status", "invoice statuses", "what do invoice statuses mean", "draft sent paid", "invoice lifecycle", "factuurstatus", "factuur statussen", "rechnungsstatus", "statut facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I mark an invoice as paid?", "How do I send a reminder?", "How do I cancel an invoice?"]
---
Factuurstatussen uitgelegd:
• Concept - nog niet verstuurd, vrij te bewerken. Je kunt een concept pas als betaald markeren of er een betaling op registreren nadat je hem definitief hebt gemaakt; een betaling op een concept maakte eerder een nummerloze factuur met status Betaald, wat nu niet meer mag.
• Nog versturen - definitief gemaakt, nog niet verstuurd of betaald. Staat er al een betaling op (bijvoorbeeld een aanbetaling of deelbetaling), dan toont de lijst hem als Verzonden, omdat hij duidelijk de deur uit is.
• Verzonden - bezorgd bij de klant, wacht op betaling
• Te laat - vervaldatum verstreken, nog niet betaald
• Klant zegt: betaald - de klant heeft via het portaal aangegeven te hebben betaald; bevestig of weiger de betaling voordat de factuur op Betaald komt
• Betaald - betaling ontvangen en bevestigd. In een uitzonderingsgeval kan een factuur Betaald tonen terwijl er nog geen betaling is geregistreerd, bijvoorbeeld na een import of een oudere "markeer als betaald"-actie die geen betaalregel aanmaakte. De betaalkaart toont dan "Betaald, zonder geregistreerde betaling." en biedt met "Betaling registreren" de optie om de betaling alsnog vast te leggen.
• Geannuleerd - ongeldig, niet meer actief

Verwijderen kan alleen bij een concept zonder factuurnummer, en gaat in stappen: van actief naar Archief, dan naar Prullenbak, en pas daarna definitief weg. Je kunt het concept uit het Archief of de Prullenbak terughalen zolang het nog niet definitief verwijderd is. Een definitieve factuur kun je niet verwijderen. Annuleren werkt anders: met "Markeer als geannuleerd" zet je een definitieve, nog niet betaalde factuur op Geannuleerd, maar hij blijft in de lijst staan.

Tip: Gebruik de statusfilters om eerst Nog versturen en Te laat te zien.
