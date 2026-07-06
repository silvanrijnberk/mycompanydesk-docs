---
title: "Verwijderde uitgaven vinden"
last_verified: 2026-05-09
chatbot:
  triggers:
    - "where are deleted expenses"
    - "where can i find deleted expenses"
    - "where do i find deleted expenses"
    - "expense trash"
    - "trashed expenses"
    - "deleted expenses"
    - "verwijderde uitgaven"
    - "uitgaven prullenbak"
    - "geloschte ausgaben"
    - "geloeschte ausgaben"
    - "geloeschten ausgaben"
    - "ausgaben papierkorb"
    - "depenses supprimees"
    - "mes depenses supprimees"
    - "corbeille depenses"
  actions:
    - { label: "Open expenses", to: "/expenses?view=trash" }
  follow_up:
    - "Where do I find archived expenses?"
    - "How do I search expenses?"
    - "How do I restore an expense?"
---

Verwijderde uitgaven vind je onder Uitgaven -> Prullenbak. Sta je al in de uitgavenlijst, schakel dan over naar de weergave Prullenbak.

Houd er rekening mee dat verwijderen in stappen gaat: de eerste keer verwijderen archiveert een actieve uitgave, dus als een uitgave niet in de Prullenbak staat, kijk dan in de weergave Archief. Een gearchiveerde uitgave verwijderen verplaatst deze naar de Prullenbak, en verwijderen vanuit de Prullenbak is definitief.
