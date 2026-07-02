---
title: "Moyens de paiement"
last_verified: 2026-07-02
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
    - { label: "Open payment settings", to: "/settings/betalen" }
  follow_up:
    - "How do I add my bank details?"
    - "How do I change the PDF template?"
---

Pour gérer les méthodes de paiement sur les documents :
1. Allez dans Paramètres et ouvrez « Paiement »
2. Saisissez votre IBAN pour proposer le virement bancaire ; un IBAN renseigné l'active automatiquement et ajoute un code QR de paiement à vos factures
3. Activez PayPal et saisissez l'adresse e-mail de votre compte PayPal si vous voulez le proposer
4. Connectez Mollie ou Stripe si vous voulez que vos clients paient en ligne, par exemple avec iDEAL
5. Les modifications de cette page sont enregistrées automatiquement

Les méthodes activées apparaissent en bas de vos factures.

## Prestataires de paiement en ligne

Vous pouvez connecter votre propre compte Mollie ou Stripe pour que les clients puissent payer leurs factures directement en ligne. Les fonds sont verses directement sur votre compte. MyCompanyDesk ne gere que la connexion.

Pour connecter un prestataire :
1. Allez dans **Paramètres → Paiement**
2. Sous **Online betalingen**, cliquez sur **Verbind Mollie** ou **Verbind Stripe**
3. Suivez le flux OAuth pour autoriser votre compte
4. Une fois connecté, chaque facture envoyée inclut un lien de paiement pour vos clients

Mollie prend en charge iDEAL, Bancontact, la carte bancaire et le virement, ideal pour les clients neerlandais et belges. Stripe Connect prend en charge la carte, Apple Pay, Google Pay et le prelevement SEPA, adapte aux clients internationaux.

Pour deconnecter, cliquez sur **Loskoppelen** sur la carte correspondante. Si des paiements ont eu lieu au cours des 24 dernieres heures, un avertissement vous rappelle que des webhooks en attente peuvent encore arriver et que les remboursements pour ces paiements doivent etre traites manuellement. Apres la deconnexion, les clients ne peuvent plus payer via ce prestataire.

### Parametres de paiement Mollie

Une fois Mollie connecte, un interrupteur **Betaalknop op facturen** et une section **Betaalmethoden** apparaissent sur la carte Mollie. L'interrupteur active ou desactive le bouton de paiement sur toutes les factures sans deconnecter Mollie. La liste des methodes, recuperee en direct de votre tableau de bord Mollie, vous permet de choisir les methodes de paiement que vos clients verront. Avec **Stuur testbetaling**, vous parcourez un checkout test gratuit de €1 via Mollie pour confirmer que tout fonctionne de bout en bout.

### Parametres de paiement Stripe

Une fois Stripe connecte et l'onboarding (KYC) termine, un interrupteur **Betaalknop op facturen** et une section **Betaalmethoden** apparaissent sur la carte Stripe. L'interrupteur active ou desactive le bouton de paiement Stripe sur toutes les factures sans deconnecter Stripe. La liste des methodes, croisee avec les capacites de votre compte Stripe, vous permet de choisir les methodes de paiement que vos clients verront au checkout (carte, iDEAL, Bancontact, prelevement SEPA, PayPal, Klarna, Link by Stripe). Decochez tout pour revenir a la selection automatique des methodes par Stripe Checkout. Avec **Open Stripe Dashboard**, vous etes redirige vers vos parametres de methodes de paiement Stripe pour verifier votre integration et tester les paiements.
