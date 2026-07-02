---
title: "Coordonnées bancaires"
last_verified: 2026-05-09
chatbot:
  triggers: ["bank details", "add bank account", "bank information", "where do i add my bank details", "iban", "payment details", "bankgegevens", "waar voeg ik mijn bankgegevens toe", "bankrekening toevoegen", "bankdaten", "wo trage ich meine bankdaten ein", "coordonnees bancaires", "ou ajouter mes coordonnees bancaires"]
  actions:
    - { label: "Open payment settings", to: "/settings/betalen" }
  follow_up: ["How do I add payment methods to invoices?", "How do I set up my company settings?"]
---

Pour ajouter ou mettre à jour vos coordonnées bancaires :
1. Allez dans Paramètres et ouvrez « Paiement »
2. Saisissez votre IBAN et le nom du titulaire dans la carte du compte bancaire
3. Les modifications s'enregistrent automatiquement

Dès qu'un IBAN est renseigné, le virement bancaire est activé automatiquement sur vos factures et un code QR de paiement est ajouté à vos factures, que vos clients peuvent scanner pour payer immédiatement le bon montant. Il n'y a pas de champ BIC ; il n'est pas nécessaire.
