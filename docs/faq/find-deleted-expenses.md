---
title: "Find deleted expenses"
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

Deleted expenses are in Expenses -> Trash. If you are already in the expense list, switch to the Trash view. Archived expenses are in Archive.
