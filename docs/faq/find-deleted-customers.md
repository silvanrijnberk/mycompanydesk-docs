---
title: "Find deleted customers"
last_verified: 2026-05-09
chatbot:
  triggers: ["where are deleted customers", "where can i find deleted customers", "where do i find deleted customers", "customer trash", "trashed customers", "deleted customers", "verwijderde klanten", "klanten prullenbak", "geloschte kunden", "geloeschte kunden", "geloeschten kunden", "kunden papierkorb", "clients supprimes", "mes clients supprimes", "corbeille clients"]
  actions:
    - { label: "Open customers", to: "/customers?status=trash" }
  follow_up: ["Where do I find archived customers?", "How do I search customers?", "How do I restore a customer?"]
---

Deleted customers are in Customers -> Trash. If you are already in the customer list, switch to the Trash view.

Keep in mind that deletion is staged: the first delete on an active customer archives them, so if a customer is not in the Trash, check the Archive view first.
