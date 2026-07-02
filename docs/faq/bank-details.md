---
title: "Bank details"
last_verified: 2026-05-09
chatbot:
  triggers: ["bank details", "add bank account", "bank information", "where do i add my bank details", "iban", "payment details", "bankgegevens", "waar voeg ik mijn bankgegevens toe", "bankrekening toevoegen", "bankdaten", "wo trage ich meine bankdaten ein", "coordonnees bancaires", "ou ajouter mes coordonnees bancaires"]
  actions:
    - { label: "Open payment settings", to: "/settings/betalen" }
  follow_up: ["How do I add payment methods to invoices?", "How do I set up my company settings?"]
---

To add or update bank details:
1. Go to Settings and open "Betalen"
2. Enter your IBAN and the name on the account in the bank account card
3. Changes save automatically

Filling in an IBAN automatically enables bank transfer on your invoices, and a payment QR code is added to your invoices so customers can scan and pay the exact amount. There is no BIC field; it is not needed.
