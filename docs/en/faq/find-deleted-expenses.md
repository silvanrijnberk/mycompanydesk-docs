---
title: "Find deleted expenses"
description: "Deleted expenses are in Expenses > Trash. If you are already in the expense list, switch to the Trash view."
last_verified: 2026-08-16
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

Deleted expenses are in Expenses -> Trash. If you are already in the expense list, switch to the Trash view.

Keep in mind that deletion is staged: the first delete on an active expense archives it, so if an expense is not in the Trash, check the Archive view. Deleting an archived expense moves it to the Trash, and deleting it from the Trash removes it permanently.

Trashed expenses cannot be edited. If you need to change a trashed expense, restore it from Trash first.
