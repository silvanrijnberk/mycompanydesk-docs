---
title: "Upload receipt"
last_verified: 2026-05-09
chatbot:
  triggers: ["upload receipt", "attach receipt", "add receipt", "receipt photo", "scan receipt", "expense receipt", "bon uploaden", "bon toevoegen", "beleg hochladen", "telecharger recu"]
  actions:
    - { label: "Open expenses", to: "/expenses" }
  follow_up: ["How do I create an expense?", "How do I categorize an expense?"]
---

Pour televerser un recu sur une depense :
1. Ouvrez une depense existante, ou enregistrez d abord une nouvelle depense
2. Sur la page detail de la depense, utilisez l action « Televerser le recu »
3. Selectionnez le fichier image ou PDF a joindre
4. Attendez la fin du televersement et verifiez que le recu apparait sur la depense

Astuce : si vous etes encore sur le formulaire de nouvelle depense, enregistrez-la d abord car le televersement du recu se fait sur la page detail.
