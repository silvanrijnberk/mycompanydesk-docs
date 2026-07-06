---
title: "Verwijderde klanten vinden"
last_verified: 2026-05-09
chatbot:
  triggers: ["where are deleted customers", "where can i find deleted customers", "where do i find deleted customers", "customer trash", "trashed customers", "deleted customers", "verwijderde klanten", "klanten prullenbak", "geloschte kunden", "geloeschte kunden", "geloeschten kunden", "kunden papierkorb", "clients supprimes", "mes clients supprimes", "corbeille clients"]
  actions:
    - { label: "Open customers", to: "/customers?status=trash" }
  follow_up: ["Where do I find archived customers?", "How do I search customers?", "How do I restore a customer?"]
---

Verwijderde klanten vind je onder Klanten -> Prullenbak. Sta je al in de klantenlijst, schakel dan over naar de weergave Prullenbak.

Houd er rekening mee dat verwijderen in stappen gaat: de eerste keer verwijderen archiveert een actieve klant, dus als een klant niet in de Prullenbak staat, kijk dan eerst in de weergave Archief.
