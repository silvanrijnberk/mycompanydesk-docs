---
title: Credit Note
last_verified: 2026-05-09
chatbot:
  triggers: ["credit note", "create credit note", "issue credit", "credit invoice", "creditnota", "creditnota aanmaken", "gutschrift erstellen", "note de credit", "avoir"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I cancel an invoice instead?", "How does a credit note affect my VAT?", "How do I find the original invoice?"]
---

Pour creer un avoir :
1. Ouvrez la facture originale que vous souhaitez crediter
2. Cliquez sur le bouton « Creer un avoir / correction » sur la page de detail
3. Le systeme pre-remplit une facture negative liee a l'originale
4. Ajustez les montants s'il s'agit d'un avoir partiel
5. Enregistrez et envoyez au client

L'application cree un enregistrement negatif distinct lie a la facture d'origine afin que vous puissiez retrouver les deux elements plus tard.
