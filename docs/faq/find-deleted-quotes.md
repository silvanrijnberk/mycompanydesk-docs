---
title: Find Deleted Quotes
last_verified: 2026-05-09
chatbot:
  triggers: ["where are deleted quotes", "where can i find deleted quotes", "where do i find deleted quotes", "quote trash", "trashed quotes", "deleted quotes", "verwijderde offertes", "offertes prullenbak", "geloschte angebote", "geloeschte angebote", "geloeschten angebote", "angebote papierkorb", "devis supprimes", "mes devis supprimes", "corbeille devis"]
  actions:
    - { label: "Open quotes", to: "/quotes?view=trash" }
  follow_up: ["Where do I find archived quotes?", "How do I search quotes?", "How do I convert a quote to an invoice?"]
---

Deleted quotes are in Quotes -> Trash. If you are already in the quote list, switch to the Trash view. Archived quotes are in Archive.
