---
title: Facturation électronique Peppol
description: "Envoyez factures et avoirs en facture électronique structurée via Peppol, directement dans la comptabilité de votre client, et recevez-les de même."
last_verified: 2026-10-13
---

# Facturation électronique Peppol

Envoyez des factures et des avoirs sous forme de factures électroniques structurées via le réseau Peppol. Votre client les reçoit directement dans son logiciel de comptabilité, sans dépendre uniquement des PDF ou des e-mails.

## Vue d'ensemble

La facturation électronique Peppol vous permet d'envoyer des factures et des avoirs comme factures électroniques structurées via le réseau Peppol, et de recevoir des factures d'achat de vos fournisseurs de la même manière. Quand vous envoyez une facture, vous choisissez par facture de la livrer par e-mail ou en tant que facture électronique via Peppol. La facture reste le même document dans MyCompanyDesk; seul le canal de livraison change.

L'envoi est utile lorsque votre client demande des factures électroniques. La réception place les factures fournisseurs directement dans vos dépenses comme brouillons pré-remplis, prêts à être vérifiés.

Si le fournisseur utilise également MyCompanyDesk, vous pouvez recevoir sa facture structurée directement sans passer par Peppol. Voir [Recevoir des factures d'autres utilisateurs MyCompanyDesk](/fr/features/invoices#recevoir-des-factures-d-autres-utilisateurs-mycompanydesk).

## Disponibilité

La facturation électronique Peppol est disponible avec le plan Office. Sur Desk, les paramètres de facturation affichent un bouton pour changer d'abonnement à la place des paramètres Peppol.

## Avant de pouvoir envoyer

Avant votre premier envoi Peppol, MyCompanyDesk a besoin des informations de votre entreprise. Celles-ci servent à vous enregistrer sur le réseau Peppol via le point d'accès connecté :

- Nom de l'entreprise
- Numéro d'immatriculation au registre du commerce
- Numéro de TVA
- IBAN
- Adresse de l'entreprise (rue, code postal, ville)

S'il manque une valeur, la page des paramètres de facturation vous demande de la compléter avant de pouvoir activer la facturation électronique. Les champs existants de votre profil d'entreprise sont réutilisés, vous n'avez donc pas à les saisir deux fois.

Lorsque vous activez la facturation électronique, vous consentez à l'enregistrement de votre numéro d'immatriculation, de votre numéro de TVA et de votre adresse professionnelle auprès du point d'accès Peppol. MyCompanyDesk se connecte au réseau via un point d'accès Recommand. Peppol exige en outre une vérification d'identité unique par une personne habilitée à signer pour l'entreprise : le bouton **Vérifiez votre identité** ouvre cette vérification dans un nouvel onglet. Tant qu'elle n'est pas terminée, vous ne pouvez pas encore envoyer ni recevoir de factures électroniques.

## Envoyer une facture électronique

1. Créez une facture ou un avoir comme d'habitude
2. Ouvrez la page de détail
3. Cliquez sur **Envoyer**
4. Choisissez **Facture électronique (Peppol)** comme mode de livraison
5. Vérifiez l'aperçu
6. Cliquez sur **Envoyer la facture électronique via Peppol**

La facture est livrée numériquement dans le système comptable de votre client. Une livraison réussie est confirmée dans MyCompanyDesk; si la livraison échoue, vous voyez un message d'erreur et pouvez réessayer ou envoyer par e-mail à la place.

L'e-mail et Peppol ne s'excluent pas mutuellement. Vous pouvez envoyer par e-mail aujourd'hui et en facture électronique demain, en choisissant par facture ce qui convient au client.

## Renvoyer une facture électronique

Un envoi Peppol est une véritable facture électronique juridiquement contraignante sur le réseau, pas seulement une copie d'un e-mail. Par conséquent, envoyer deux fois la même facture crée deux factures électroniques distinctes. MyCompanyDesk bloque un second envoi Peppol accidentel : si la facture a déjà été envoyée ou livrée via Peppol, cliquer à nouveau sur **Envoyer la facture électronique via Peppol** affiche une fenêtre de confirmation au lieu d'envoyer immédiatement.

La fenêtre indique quand la facture a été envoyée pour la première fois et demande de confirmer que vous voulez vraiment envoyer une seconde facture électronique. Si vous confirmez, une nouvelle facture électronique Peppol est expédiée. Si vous annulez, rien n'est envoyé et la livraison Peppol existante reste inchangée.

Si vous voulez seulement envoyer un rappel ou un PDF à jour, utilisez plutôt l'e-mail. Les renvois par e-mail ne créent pas de factures électroniques Peppol en double.

## Recevoir des factures électroniques

Lorsque la réception est activée, vos fournisseurs peuvent vous envoyer des factures électroniques via Peppol. MyCompanyDesk transforme chaque facture électronique entrante en brouillon de dépense pré-rempli avec le fournisseur, le montant, la TVA et la date. Le brouillon apparaît dans vos dépenses pour vérification; vous pouvez l'examiner, le modifier et le comptabiliser comme n'importe quelle autre dépense.

### Disponibilité

La réception fait partie de la facturation électronique Peppol et est disponible avec le plan Office. Vous devez déjà avoir activé l'envoi de factures électroniques avant de pouvoir activer la réception.

### Avant de pouvoir recevoir

Assurez-vous que votre profil d'entreprise contient les mêmes informations que pour l'envoi :

- Nom de l'entreprise
- Numéro d'immatriculation au registre du commerce
- Numéro de TVA
- IBAN
- Adresse de l'entreprise (rue, code postal, ville)

Quand vous activez la réception, votre numéro d'immatriculation et votre numéro de TVA sont enregistrés comme récepteur Peppol. Une entreprise ne peut recevoir que via un seul logiciel de comptabilité à la fois, car le même numéro d'immatriculation et numéro de TVA ne peuvent pas être enregistrés chez plusieurs fournisseurs.

### Activer la réception

1. Ouvrez **Paramètres › Factures et devis** (`/settings/facturen`)
2. Dans la section Peppol, cliquez sur **Activer la réception**
3. Confirmez que votre numéro d'immatriculation et votre numéro de TVA peuvent être enregistrés comme récepteur sur le réseau Peppol

Dès lors, les factures électroniques entrantes arrivent automatiquement comme brouillons de dépenses. Aucune importation manuelle n'est nécessaire.

### Devises prises en charge

MyCompanyDesk n'accepte que les factures électroniques Peppol entrantes en euros (EUR). Les factures électroniques reçues dans une autre devise sont rejetées.

### Vérifier les factures électroniques reçues

Chaque facture électronique atterrit comme brouillon sous **Dépenses**. Le brouillon est pré-rempli avec le fournisseur, la description, le montant, la TVA et la date de facture provenant de la facture électronique entrante. Lorsque le fournisseur a appliqué la TVA d'autoliquidation, MyCompanyDesk la classe comme autoliquidation et maintient le taux de TVA à 0 % afin qu'elle se place dans la bonne rubrique de votre déclaration TVA. Vérifiez les informations, joignez un reçu si nécessaire et enregistrez-le comme dépense régulière.

### Désactiver la réception

Ouvrez **Paramètres › Factures et devis**, allez à la section Peppol et cliquez sur **Désactiver la réception**. Vous ne recevrez plus de nouvelles factures électroniques via Peppol, mais les brouillons et dépenses comptabilisées existants restent inchangés. Vous pouvez réactiver la réception à tout moment.

## Désactiver la facturation électronique Peppol

Si vous ne souhaitez plus envoyer ou recevoir de factures électroniques via MyCompanyDesk, vous pouvez désactiver entièrement la facturation électronique Peppol. Cela supprime l'enregistrement de votre entreprise sur le réseau Peppol et libère vos identifiants pour les utiliser ailleurs. Les factures déjà envoyées et les dépenses déjà comptabilisées restent inchangées.

Pour désactiver la facturation électronique Peppol :

1. Ouvrez **Paramètres › Factures et devis** (`/settings/facturen`)
2. Dans la section Peppol, cliquez sur **Désactiver la facturation électronique**
3. Confirmez que vous voulez désinscrire votre entreprise du réseau Peppol

Après confirmation, l'envoi et la réception s'arrêtent immédiatement. Si vous souhaitez réutiliser Peppol plus tard, vous pouvez réactiver la facturation électronique depuis la même page. Comme votre enregistrement précédent aura été supprimé, vous devrez refaire la vérification d'identité.

## Types de documents pris en charge

- **Facture**: document de facturation standard
- **Avoir**: ajustement pour remboursements ou corrections

## Ce dont votre client a besoin

Votre client doit être joignable sur le réseau Peppol. En pratique, cela signifie que son logiciel de comptabilité est connecté à Peppol et qu'il vous a communiqué son identifiant de récepteur Peppol. MyCompanyDesk valide le récepteur avant l'envoi; si le client n'est pas joignable, l'envoi échoue et vous pouvez revenir à l'e-mail.

## Dépannage

**L'option Peppol n'apparaît pas.** Vérifiez que votre workspace est sur le plan Office et que la facturation électronique est activée dans les paramètres de facturation. Vérifiez aussi que votre profil d'entreprise contient tous les champs requis.

**L'envoi a échoué.** Un échec d'envoi Peppol signifie généralement que le récepteur n'était pas joignable sur le réseau, ou qu'un champ obligatoire de la facture manquait. Résolvez le problème et réessayez, ou envoyez par e-mail pour poursuivre le workflow.

**J'ai activé la facturation électronique mais je veux la désactiver.** Ouvrez les paramètres de facturation et cliquez sur **Désactiver la facturation électronique**. Votre enregistrement Peppol est alors supprimé et l'envoi ainsi que la réception s'arrêtent. Les factures existantes et les dépenses comptabilisées restent inchangées. Si vous la réactivez plus tard, vous devrez refaire la vérification d'identité.

**La réception ne s'active pas à cause d'un conflit.** Votre numéro d'immatriculation ou numéro de TVA est déjà enregistré comme récepteur Peppol chez un autre logiciel de comptabilité ou fournisseur. Désactivez d'abord la réception là-bas, puis activez-la dans MyCompanyDesk. D'ici là, vous pouvez toujours envoyer des factures électroniques depuis MyCompanyDesk.

**La réception ne peut pas s'activer : détails de l'entreprise manquants.** Si la réception Peppol ne peut pas être activée parce que votre profil d'entreprise ne contient pas de numéro d'immatriculation ou de numéro de TVA, MyCompanyDesk renvoie une erreur 422 explicite. Ajoutez le numéro manquant dans votre profil d'entreprise, puis réactivez la réception.

**Une facture électronique reçue est incorrecte.** Ouvrez le brouillon de dépense, corrigez le fournisseur, le montant, la TVA ou la description, puis enregistrez-le. Les données originales de la facture électronique restent dans les notes de la dépense pour référence.

**J'ai désactivé la réception mais des brouillons apparaissent encore.** Les brouillons déjà arrivés avant la désactivation restent dans vos dépenses; la désactivation ne bloque que l'arrivée de nouvelles factures électroniques.

## Voir aussi

- [Factures](/fr/features/invoices): créer et envoyer des factures
- [Abonnement et paiements](/fr/settings/billing): quels abonnements incluent la facturation électronique Peppol
