---
title: Facturation electronique Peppol
last_verified: 2026-08-15
---

# Facturation electronique Peppol

Envoyez des factures et des avoirs sous forme de factures electroniques structurees via le reseau Peppol. Votre client les recoit directement dans son logiciel de comptabilite, sans dependre uniquement des PDF ou des e-mails.

## Vue d'ensemble

La facturation electronique Peppol vous permet d'envoyer des factures et des avoirs comme factures electroniques structurees via le reseau Peppol, et de recevoir des factures d'achat de vos fournisseurs de la meme maniere. Quand vous envoyez une facture, vous choisissez par facture de la livrer par e-mail ou en tant que facture electronique via Peppol. La facture reste le meme document dans MyCompanyDesk; seul le canal de livraison change.

L'envoi est utile lorsque votre client demande des factures électroniques. La réception place les factures fournisseurs directement dans vos dépenses comme brouillons pré-remplis, prêts à être vérifiés.

Si le fournisseur utilise également MyCompanyDesk, vous pouvez recevoir sa facture structurée directement sans passer par Peppol. Voir [Recevoir des factures d'autres utilisateurs MyCompanyDesk](/fr/features/invoices#recevoir-des-factures-dautres-utilisateurs-mycompanydesk).

## Disponibilite

La facturation electronique Peppol est disponible avec le plan Pro. Les workspaces sur les plans Free ou Starter ne voient pas les options d'envoi et de reception de factures electroniques.

## Avant de pouvoir envoyer

Avant votre premier envoi Peppol, MyCompanyDesk a besoin des informations de votre entreprise. Celles-ci servent a vous enregistrer sur le reseau Peppol via le point d'acces connecte:

- Nom de l'entreprise
- Numero d'immatriculation au registre du commerce
- Numero de TVA
- IBAN
- Adresse de l'entreprise (rue, code postal, ville)

S'il manque une valeur, la page des parametres de facturation vous demande de la completer avant de pouvoir activer la facturation electronique. Les champs existants de votre profil d'entreprise sont reutilises, vous n'avez donc pas a les saisir deux fois.

Lorsque vous activez la facturation electronique, vous consentez a l'enregistrement de votre numero d'immatriculation, de votre numero de TVA et de votre adresse professionnelle aupres du point d'acces Peppol. MyCompanyDesk se connecte au reseau via un point d'acces Recommand.

## Envoyer une facture electronique

1. Creez une facture ou un avoir comme d'habitude
2. Ouvrez la page de detail
3. Cliquez sur **Envoyer**
4. Choisissez **Facture electronique (Peppol)** comme mode de livraison
5. Verifiez l'apercu
6. Cliquez sur **Envoyer la facture electronique via Peppol**

La facture est livree numeriquement dans le systeme comptable de votre client. Une livraison reussie est confirmee dans MyCompanyDesk; si la livraison echoue, vous voyez un message d'erreur et pouvez reessayer ou envoyer par e-mail a la place.

L'e-mail et Peppol ne s'excluent pas mutuellement. Vous pouvez envoyer par e-mail aujourd'hui et en facture electronique demain, en choisissant par facture ce qui convient au client.

## Renvoyer une facture electronique

Un envoi Peppol est une veritable facture electronique juridiquement contraignante sur le reseau, pas seulement une copie d'un e-mail. Par consequent, envoyer deux fois la meme facture cree deux factures electroniques distinctes. MyCompanyDesk bloque un second envoi Peppol accidentel : si la facture a deja ete envoyee ou livree via Peppol, cliquer a nouveau sur **Envoyer la facture electronique via Peppol** affiche une fenetre de confirmation au lieu d'envoyer immediatement.

La fenetre indique quand la facture a ete envoyee pour la premiere fois et demande de confirmer que vous voulez vraiment envoyer une seconde facture electronique. Si vous confirmez, une nouvelle facture electronique Peppol est expediee. Si vous annulez, rien n'est envoye et la livraison Peppol existante reste inchangee.

Si vous voulez seulement envoyer un rappel ou un PDF a jour, utilisez plutot l'e-mail. Les renvois par e-mail ne creent pas de factures electroniques Peppol en double.

## Recevoir des factures electroniques

Lorsque la reception est activee, vos fournisseurs peuvent vous envoyer des factures electroniques via Peppol. MyCompanyDesk transforme chaque facture electronique entrante en brouillon de depense pre-rempli avec le fournisseur, le montant, la TVA et la date. Le brouillon apparait dans vos depenses pour verification; vous pouvez l'examiner, le modifier et le comptabiliser comme n'importe quelle autre depense.

### Disponibilite

La reception fait partie de la facturation electronique Peppol et est disponible avec le plan Pro. Vous devez deja avoir active l'envoi de factures electroniques avant de pouvoir activer la reception.

### Avant de pouvoir recevoir

Assurez-vous que votre profil d'entreprise contient les memes informations que pour l'envoi:

- Nom de l'entreprise
- Numero d'immatriculation au registre du commerce
- Numero de TVA
- IBAN
- Adresse de l'entreprise (rue, code postal, ville)

Quand vous activez la reception, votre numero d'immatriculation et votre numero de TVA sont enregistres comme recepteur Peppol. Une entreprise ne peut recevoir que via un seul logiciel de comptabilite a la fois, car le meme numero d'immatriculation et numero de TVA ne peuvent pas etre enregistres chez plusieurs fournisseurs.

### Activer la reception

1. Ouvrez **Parametres > Factures** (`/settings/facturen`)
2. Dans la section Peppol, cliquez sur **Activer la reception**
3. Confirmez que votre numero d'immatriculation et votre numero de TVA peuvent etre enregistres comme recepteur sur le reseau Peppol

Des lors, les factures electroniques entrantes arrivent automatiquement comme brouillons de depenses. Aucune importation manuelle n'est necessaire.

### Devises prises en charge

MyCompanyDesk n'accepte que les factures electroniques Peppol entrantes en euros (EUR). Les factures electroniques reçues dans une autre devise sont rejetées.

### Verifier les factures electroniques recues

Chaque facture electronique atterrit comme brouillon sous **Depenses**. Le brouillon est pre-rempli avec le fournisseur, la description, le montant, la TVA et la date de facture provenant de la facture electronique entrante. Lorsque le fournisseur a applique la TVA d'autoliquidation, MyCompanyDesk la classe comme autoliquidation et maintient le taux de TVA a 0 % afin qu'elle se place dans la bonne rubrique de votre declaration TVA. Verifiez les informations, joignez un recu si necessaire et enregistrez-le comme depense reguliere.

### Desactiver la reception

Ouvrez **Parametres > Factures**, allez a la section Peppol et cliquez sur **Desactiver la reception**. Vous ne recevrez plus de nouvelles factures electroniques via Peppol, mais les brouillons et depenses comptabilisees existants restent inchanges. Vous pouvez reactiver la reception a tout moment.

## Desactiver la facturation electronique Peppol

Si vous ne souhaitez plus envoyer ou recevoir de factures electroniques via MyCompanyDesk, vous pouvez desactiver entierement la facturation electronique Peppol. Cela supprime l'enregistrement de votre entreprise sur le reseau Peppol et libere vos identifiants pour les utiliser ailleurs. Les factures deja envoyees et les depenses deja comptabilisees restent inchanges.

Pour desactiver la facturation electronique Peppol :

1. Ouvrez **Parametres > Factures** (`/settings/facturen`)
2. Dans la section Peppol, cliquez sur **Desactiver la facturation electronique**
3. Confirmez que vous voulez desinscrire votre entreprise du reseau Peppol

Apres confirmation, l'envoi et la reception s'arretent immediatement. Si vous souhaitez reutiliser Peppol plus tard, vous pouvez reactiver la facturation electronique depuis la meme page. Comme votre enregistrement precedent aura ete supprime, vous devrez refaire la verification d'identite.

## Types de documents pris en charge

- **Facture** — document de facturation standard
- **Avoir** — ajustement pour remboursements ou corrections

## Ce dont votre client a besoin

Votre client doit etre joignable sur le reseau Peppol. En pratique, cela signifie que son logiciel de comptabilite est connecte a Peppol et qu'il vous a communique son identifiant de recepteur Peppol. MyCompanyDesk valide le recepteur avant l'envoi; si le client n'est pas joignable, l'envoi echoue et vous pouvez revenir a l'e-mail.

## Depannage

**L'option Peppol n'apparait pas.** Verifiez que votre workspace est sur le plan Pro et que la facturation electronique est activee dans les parametres de facturation. Verifiez aussi que votre profil d'entreprise contient tous les champs requis.

**L'envoi a echoue.** Un echec d'envoi Peppol signifie generalement que le recepteur n'etait pas joignable sur le reseau, ou qu'un champ obligatoire de la facture manquait. Resolvez le probleme et reessayez, ou envoyez par e-mail pour poursuivre le workflow.

**J'ai active la facturation electronique mais je veux la desactiver.** Ouvrez les parametres de facturation et cliquez sur **Desactiver la facturation electronique**. Votre enregistrement Peppol est alors supprime et l'envoi ainsi que la reception s'arretent. Les factures existantes et les depenses comptabilisees restent inchanges. Si vous la reactivez plus tard, vous devrez refaire la verification d'identite.

**La reception ne s'active pas a cause d'un conflit.** Votre numero d'immatriculation ou numero de TVA est deja enregistre comme recepteur Peppol chez un autre logiciel de comptabilite ou fournisseur. Desactivez d'abord la reception la-bas, puis activez-la dans MyCompanyDesk. D'ici la, vous pouvez toujours envoyer des factures electroniques depuis MyCompanyDesk.

**Une facture electronique recue est incorrecte.** Ouvrez le brouillon de depense, corrigez le fournisseur, le montant, la TVA ou la description, puis enregistrez-le. Les donnees originales de la facture electronique restent dans les notes de la depense pour reference.

**J'ai desactive la reception mais des brouillons apparaissent encore.** Les brouillons deja arrives avant la desactivation restent dans vos depenses; la desactivation ne bloque que l'arrivee de nouvelles factures electroniques.

## Voir aussi

- [Factures](/fr/features/invoices) — creer et envoyer des factures
- [Parametres: abonnement et paiements](/fr/settings/billing) — quels abonnements incluent la facturation electronique Peppol
