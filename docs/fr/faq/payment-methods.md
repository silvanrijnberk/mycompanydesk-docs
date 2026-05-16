---
title: "Payment methods"
last_verified: 2026-05-09
chatbot:
  triggers:
    - "payment methods"
    - "add payment method"
    - "how to pay"
    - "bank transfer"
    - "payment options"
    - "betaalmethoden"
    - "betaalmethode toevoegen"
    - "zahlungsmethoden"
    - "modes de paiement"
    - "moyens de paiement"
  actions:
    - { label: "Open payment options", to: "/company?section=paymentOptions" }
  follow_up:
    - "How do I add my bank details?"
    - "How do I change the PDF template?"
---

Pour gérer les méthodes de paiement sur les documents :
1. Accédez à Entreprise → Options de paiement
2. Activez les méthodes à utiliser
3. Définissez la méthode par défaut
4. Ajoutez les coordonnées et instructions de paiement
5. Les modifications de cette section sont enregistrées automatiquement

Les méthodes activées et les instructions apparaissent sur les modèles de document qui prennent ces champs en charge.

## Prestataires de paiement en ligne

Vous pouvez connecter votre propre compte Mollie ou Stripe pour que les clients puissent payer leurs factures directement en ligne. Les fonds sont verses directement sur votre compte. MyCompanyDesk ne gere que la connexion.

Pour connecter un prestataire :
1. Allez dans **Argent → Paiements** dans votre espace de travail
2. Sous **Online betalingen**, cliquez sur **Verbind Mollie** ou **Verbind Stripe**
3. Suivez le flux OAuth pour autoriser votre compte
4. Une fois connecté, chaque facture envoyée inclut un lien de paiement pour vos clients

Mollie prend en charge iDEAL, Bancontact, la carte bancaire et le virement, ideal pour les clients neerlandais et belges. Stripe Connect prend en charge la carte, Apple Pay, Google Pay et le prelevement SEPA, adapte aux clients internationaux.

Pour déconnecter, cliquez sur **Loskoppelen** sur la carte correspondante. Après la déconnexion, les clients ne peuvent plus payer via ce prestataire.
