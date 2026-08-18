---
title: Portail client
---

# Portail client

Le portail client permet a vos clients de consulter et payer leurs factures en ligne via une interface securisee a votre image.

## Comment ca fonctionne

Lorsque vous envoyez une facture, un **lien de paiement** unique est genere. Lorsque votre client clique sur ce lien, il accede au portail client ou il peut :

1. **Consulter la facture** - Voir tous les details, lignes et totaux
2. **Telecharger le PDF** - Obtenir une copie de la facture
3. **Payer en ligne** - Effectuer le paiement via le portail
4. **Confirmer le paiement** - Attester d'un virement bancaire (non visible pour les avoirs, les factures annulées ou les factures d'origine entièrement créditées, car le client n'a dans aucun de ces cas rien à payer)

## Fonctionnalites du portail

### Liste des factures

Lorsqu'un client a plusieurs factures, le portail affiche egalement une liste avec chaque facture, avoir et leur statut actuel. Les cartes de resume "Ouvert" et "En retard" au-dessus du tableau additionnent le **solde restant par document**, pas le total brut. Ainsi, une facture de 1 000 € avec un paiement partiel de 400 € contribue a hauteur de 600 € au montant ouvert, et un avoir deja applique a sa facture source contribue a 0 € pour ne pas etre deduit deux fois. "En retard" se deduit de la date d'echeance : toute facture envoyee ou ouverte avec une date d'echeance anterieure a aujourd'hui y est comptee, pour que la carte reste a jour meme lorsque les factures ne portent plus que rarement le statut herite `overdue`.

### Vue de la facture

Le portail affiche une vue claire et personnalisee de la facture comprenant :

- Le logo et l'image de marque de votre entreprise
- Le numero et la date de la facture
- Les lignes avec descriptions et montants
- La ventilation de la TVA
- Le montant total dû
- Le montant déjà reçu, l'avoir appliqué et le solde restant (pour les factures partiellement payées ou créditées)
- La date d'échéance

### Paiement

Les clients peuvent payer directement via le portail. Si vous avez connecte Mollie ou Stripe, des boutons de paiement apparaissent sur la vue de la facture pour que votre client puisse payer en un clic. Les boutons de paiement et le montant total dû sont masqués pour les avoirs, les factures annulées et les factures d'origine entièrement créditées, car le client n'a dans aucun de ces cas d'argent à transférer. Pour les factures avec paiements partiels ou avoirs, le portail affiche le montant déjà reçu, l'avoir appliqué et le solde restant dû avant le paiement, de sorte que le montant sur le bouton de paiement corresponde au montant restant dû. Lorsqu un client suit un lien autopay (par exemple depuis un rappel de paiement), le portail fait defiler jusqu au bon bouton de paiement et le met en evidence avec une animation pulsante au lieu de rediriger automatiquement vers le processus de paiement. Ainsi, le client peut consulter la facture avant de payer. Lorsque le paiement est confirmé, le statut de la facture dans votre tableau de bord est automatiquement mis a jour a **Payee**. Le portail dit aussi au client la verite apres un retour Mollie ou iDEAL : si le prestataire de paiement n'a pas encore confirme le paiement, la page le dit au lieu de pretendre que le paiement est en cours de traitement, et le client peut reessayer ci-dessous.

#### Parametres de paiement Mollie

Une fois Mollie connecte, vous obtenez un interrupteur **Betaalknop op facturen** dans votre espace de travail sous **Argent → Paiements → Online betalingen**. Activez-le pour ajouter un bouton de paiement Mollie sur chaque facture envoyee. Desactivez-le et le bouton disparait sans deconnecter Mollie.

Sous l'interrupteur se trouve une section **Betaalmethoden** listant chaque methode de paiement activee dans votre tableau de bord Mollie (iDEAL, Bancontact, carte bancaire, et plus). Par defaut, les clients voient toutes les methodes. Cochez des methodes specifiques pour restreindre la selection, seules celles-ci apparaissent sur vos factures. Decochez tout pour revenir a "tout afficher."

Le bouton **Stuur testbetaling** vous permet de parcourir un checkout test gratuit de €1 via Mollie, pour confirmer que tout fonctionne avant que vos clients ne le voient. Aucun argent reel n'est transfere.

#### Parametres de paiement Stripe

Une fois Stripe connecte, vous obtenez un interrupteur **Betaalknop op facturen** dans votre espace de travail sous **Argent → Paiements → Online betalingen**. Activez-le pour ajouter un bouton de paiement Stripe sur chaque facture envoyee. Desactivez-le et le bouton disparait sans deconnecter Stripe. L'interrupteur n'est disponible qu'une fois l'onboarding Stripe (KYC) termine.

Sous l'interrupteur se trouve une section **Betaalmethoden** listant chaque methode de paiement prise en charge, croisee avec les capacites de votre compte Stripe (carte, iDEAL, Bancontact, prelevement SEPA, PayPal, Klarna et Link by Stripe). Par defaut, Stripe Checkout choisit automatiquement la bonne methode par client. Cochez des methodes specifiques pour restreindre ce que les clients voient, seules celles-ci apparaissent au checkout. Decochez tout pour revenir a la selection automatique.

Le bouton **Open Stripe Dashboard** vous redirige directement vers vos parametres de methodes de paiement Stripe, afin que vous puissiez verifier votre integration et tester les paiements directement dans Stripe.

### Image de marque

Le portail client utilise l'image de marque de votre entreprise :

- Logo de l'entreprise
- Couleur d'accentuation
- Informations de l'entreprise

Cela cree une experience professionnelle et coherente pour vos clients.

## Copie figée de la facture

La vue de la facture et le téléchargement du PDF sont rendus à partir d'un instantané pris lors de l'envoi. Cet instantané fige les informations de votre entreprise, les informations client, la langue du document et l'image de marque telles qu'elles étaient à l'envoi. Les clients voient donc la facture exactement comme elle a été envoyée, même si vous modifiez ensuite les paramètres de l'espace de travail ou la fiche client. Les brouillons n'ont pas encore d'instantané et ne sont pas consultables via le portail, car un lien de portail n'est généré que lors de l'envoi de la facture.

## Securite d'acces

Chaque lien du portail est :

- **Unique** - Genere par facture
- **Base sur un jeton** - Securise avec un jeton d'acces unique
- **Specifique a la facture** - N'affiche que la facture concernee

Les clients n'ont pas besoin d'un compte MyCompanyDesk pour consulter et payer leurs factures.

## Suivi des evenements client

MyCompanyDesk suit les interactions des clients avec le portail :

- Quand le client ouvre la facture
- Quand il telecharge le PDF
- Quand il initie un paiement
- Quand le paiement est confirme

Cela vous aide a comprendre l'engagement de vos clients et a effectuer des relances efficacement.

## Conseils

- Incluez une note personnelle dans votre e-mail de facture pour encourager l'utilisation du portail
- Le portail fonctionne sur tous les appareils - mobile, tablette et ordinateur
- Les confirmations de paiement sont envoyees a vous et au client
- Consultez l'historique des evenements client sur la page de detail de la facture pour voir les interactions avec le portail
