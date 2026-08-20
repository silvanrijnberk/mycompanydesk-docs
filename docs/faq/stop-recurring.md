---
title: "Terugkerende factuur stoppen"
last_verified: 2026-07-02
chatbot:
  triggers: ["stop recurring", "cancel recurring", "pause recurring", "disable recurring", "end recurring", "terugkerend stoppen", "terugkerend annuleren", "wiederkehrend stoppen", "arreter recurrent"]
  actions:
    - { label: "Open recurring invoices", to: "/recurring-invoices" }
    - { label: "Open recurring expenses", to: "/recurring-expenses" }
  follow_up: ["How do I edit a recurring item?", "How do I create a new recurring invoice?"]
---

Zo stop je een terugkerende factuur:
1. Ga naar Terugkerende facturen
2. Open de terugkerende factuur
3. Klik op "Pauzeren" op de detailpagina; dezelfde knop toont daarna "Activeren", zodat je later weer kunt starten
4. Zolang die gepauzeerd is, worden er geen nieuwe facturen aangemaakt

Er is geen einddatumveld; pauzeren is de manier om het schema te stoppen, en de eerder aangemaakte facturen blijven gewoon bewaard. Bulkacties zijn er niet in de lijst met terugkerende facturen, dus pauzeer elk item apart. Terugkerende uitgaven werken op dezelfde manier, met eigen knoppen Pauzeren en Activeren.

Tip: Pauzeren is veilig. Er wordt niets verwijderd en met één klik op "Activeren" loopt het schema weer door.

Als je pakket wijzigt van Office naar Desk, worden terugkerende facturen en uitgaven automatisch gepauzeerd. Eerder aangemaakte facturen en uitgaven blijven in je administratie, en de schema's worden hervat bij een latere upgrade.
