---
title: "Bank details"
last_verified: 2026-05-09
chatbot:
  triggers: ["bank details", "add bank account", "bank information", "where do i add my bank details", "iban", "payment details", "bankgegevens", "waar voeg ik mijn bankgegevens toe", "bankrekening toevoegen", "bankdaten", "wo trage ich meine bankdaten ein", "coordonnees bancaires", "ou ajouter mes coordonnees bancaires"]
  actions:
    - { label: "Open payment options", to: "/company?section=paymentOptions" }
  follow_up: ["How do I add payment methods to invoices?", "How do I set up my company settings?"]
---

Pour ajouter ou mettre à jour vos coordonnées bancaires :
1. Allez dans Entreprise → Options de paiement
2. Activez le virement bancaire si nécessaire
3. Saisissez-y le titulaire du compte, l'IBAN et le BIC
4. Les modifications s'enregistrent automatiquement

Astuce : Configurez aussi les instructions de paiement et la méthode de paiement par défaut dans la même section.
