---
title: Factures
description: "Créez des factures soignées, envoyez-les avec un lien de paiement et suivez chacune du brouillon jusqu'au paiement."
---

# Factures

Les factures sont au cœur de MyCompanyDesk. Vous créez des factures soignées, vous les envoyez à vos clients avec un lien de paiement et vous suivez le paiement jusqu'à ce que l'argent soit arrivé. Créer et envoyer des factures est illimité, dans tous les abonnements, Desk compris.

## Paramètres des factures et des devis

Sous **Paramètres › Factures et devis**, vous définissez les valeurs par défaut de chaque nouvelle facture et de chaque nouveau devis.

### Délai de paiement

Indiquez combien de jours un client a pour payer : **14 jours** (le choix de la plupart des gens), **30 jours**, **60 jours** ou un nombre de jours que vous saisissez vous-même (0 s'affiche **Immédiat**). Ce délai figure sur chaque nouvelle facture, mais vous pouvez le modifier facture par facture.

### Rappels

Activez **En retard ? Envoyer automatiquement un rappel** et MyCompanyDesk envoie un rappel aimable dès qu'une facture a dépassé son échéance de trois jours, puis chaque semaine jusqu'au paiement. Les rappels automatiques font partie d'Office. Envoyer vous-même un rappel depuis la facture fonctionne avec tous les abonnements.

### Validité des devis

Choisissez combien de temps un devis reste valable par défaut : **2 semaines**, **1 mois** ou **2 mois**. Chaque nouveau devis reçoit automatiquement une date de validité selon ce réglage, pour qu'aucun devis ne parte sans date d'expiration.

### Facturer automatiquement les devis signés

Lorsque **Signé ? Préparer automatiquement une facture brouillon** est activé, un devis signé devient de lui-même une facture brouillon. Vous la vérifiez et décidez vous-même quand l'envoyer. Cette automatisation fait partie d'Office.

### Joindre les conditions par défaut

Si vous gérez vos conditions générales dans Documents, chaque envoi peut les joindre en PDF. Sous **Conditions générales**, sur la même page de paramètres, vous choisissez séparément pour les devis et pour les factures si la case est cochée d'emblée dans la fenêtre d'envoi. Par défaut, les conditions partent avec les devis et pas avec les factures. La case elle-même reste modifiable à chaque envoi.

### Numérotation des factures

MyCompanyDesk numérote les factures automatiquement, dans l'ordre exigé par l'administration fiscale néerlandaise, sauf si vous définissez vous-même un préfixe ou un numéro de départ sous **Numérotation**.

| Champ | Ce qu'il fait |
|---|---|
| **Préfixe** | Texte placé devant l'année sur chaque nouvelle facture, par exemple `FAC-` ou `2026_`. Les factures déjà envoyées gardent leur numéro. |
| **Prochain numéro de facture** | Le numéro utilisé ensuite. Il ne peut qu'avancer, jamais reculer, car revenir en arrière créerait des doublons. |

Sous les champs, vous voyez à quoi ressemblera votre prochain numéro de facture. Les factures déjà envoyées ne changent jamais de numéro quand vous modifiez ces réglages.

### Langue de vos documents

Sous **Dans quelle langue créez-vous vos documents ?**, vous choisissez la langue de vos factures, de vos devis et des e-mails à vos clients. Le néerlandais est la langue par défaut. Les factures dans d'autres langues font partie d'Office. Une facture finalisée garde la langue dans laquelle elle a été créée.

### Facturation électronique Peppol

Un interrupteur sur la même page de paramètres active la [facturation électronique Peppol](/fr/features/peppol) (Office). Les données de votre entreprise sont alors enregistrées auprès du point d'accès Peppol et vous pouvez envoyer et recevoir des factures électroniques en plus de l'e-mail. La page Peppol détaille la vérification d'identité, la réception et les données manquantes.

## Vue d'ensemble

La page des factures range vos factures sous des onglets : **Tous** (« d'abord ce que vous devez faire »), **À envoyer** et **En attente de paiement**. Les onglets affichent des compteurs en direct, les onglets de paiement indiquent aussi leur montant total en euros, et l'onglet d'attente porte une alerte rouge avec le nombre de factures en retard.

Dans les listes, les factures sont regroupées selon leur état, pour que le travail qui vous attend arrive en haut et que le travail terminé descende :

- **En retard**, puis **À envoyer**, puis **En attente de paiement** : le travail qui est chez vous en ce moment
- **Payé en septembre** (les deux mois les plus récents avec des lignes), puis **Payées plus tôt** pour tout ce qui précède, replié jusqu'à ce que vous cliquiez sur Afficher
- **Payé** : payé sans mois attribuable
- **Annulé ou crédité** : l'archive du travail qui n'est plus actif

Chaque en-tête de groupe indique le nombre du groupe entier et, le cas échéant, le total du groupe. Repliez un groupe avec Masquer : ses lignes ne comptent plus pour la pagination, l'en-tête reste en place. Un mois daté dans le futur (presque toujours une faute de frappe dans la date) ne se replie jamais : il reste ouvert avec son propre en-tête pour que l'erreur reste visible.

À côté des dates, chaque ligne porte une colonne **État** qui dit la situation en mots simples : « Brouillon », « À envoyer », « échéance du 12 mai dépassée », « échéance dans 3 jours », « le client dit : payé ». Le filtre **Statut** du panneau de filtres limite toujours la liste à un seul statut, y compris brouillon, en retard, payé et annulé. Si vous vendez via votre site, un onglet **Ventes du site** apparaît à côté de **Factures**, avec sa propre liste de ces ventes.

## Créer une facture

### Le formulaire complet

1. Ouvrez **Factures** et cliquez sur **Créer**
2. Choisissez ou créez un **client**
3. Ajoutez des **lignes** avec description, quantité, prix unitaire et taux de TVA. Le taux par défaut des nouvelles lignes se règle sous **Paramètres › TVA**. Si l'autoliquidation est activée pour un client, la ligne passe automatiquement à 0 %.
4. Indiquez la **date de facture** et la **date d'échéance**
5. Ajoutez si besoin des **notes** ou des **remarques internes**
6. Cliquez sur **Enregistrer** pour créer un brouillon

Sur le téléphone, une nouvelle facture ouvre non pas un long formulaire mais un court parcours par étapes : d'abord le client, puis les lignes, puis une étape de vérification avant d'enregistrer et d'envoyer.

### À partir d'un modèle

Dans le formulaire de facture, cliquez sur **À partir d'un modèle** (ce bouton n'apparaît que si vous avez des modèles de facture). Choisissez un modèle et le formulaire se remplit sur place avec les lignes, le client et les autres données enregistrées. Ajustez ce qu'il faut, enregistrez et envoyez. Vous enregistrez une facture comme modèle avec **Enregistrer comme modèle** dans le menu des autres actions de la facture.

Un modèle conserve la ligne complète : description, quantité, unité, prix unitaire, taux de TVA, remise et exonération éventuelle de TVA. Il ne garde volontairement pas le lien vers un élément de votre offre, car cet élément peut être supprimé plus tard et le modèle ne fonctionnerait alors plus.

## Prix TTC

L'interrupteur **Montants TTC** du formulaire change ce que vous saisissez. Activé, le prix d'une ligne est ce que paie le client, TVA comprise, et la TVA est extraite du prix au lieu d'être ajoutée. L'interrupteur existe sur les factures, les devis et les factures récurrentes, chaque document retient son propre choix, et l'indication sous l'interrupteur précise comment vous travaillez.

- Le prix saisi reste en place : si vous changez ensuite le taux de TVA de la ligne, le montant TTC ne bouge pas et le montant HT s'ajuste en dessous.
- Une remise en euros sur une ligne se déduit de ce que paie le client. Une remise en pourcentage fonctionne comme sur toute autre ligne.
- Avec des prix TTC, le PDF et les pages de facture et de devis montrent ce que paie le client : le prix unitaire et le montant de la ligne apparaissent TTC (38,00 €, pas 31,40 €), le prix HT figure en petit sous le prix unitaire, et le bloc TVA indique la base de chaque taux (« TVA 21 % sur 35,54 € »). Les composants d'un forfait apparaissent aussi TTC, pour qu'ils s'additionnent jusqu'au prix du forfait. Les totaux du document ne changent pas, et la facture électronique porte les mêmes chiffres.
- Vous travaillez sans l'interrupteur alors que vos prix saisis sont TTC ? Pour un client particulier, le formulaire vous demande si les prix saisis sont TTC. Un clic bascule le document sans toucher à vos montants. Si vous commencez un nouveau document pour un client particulier, l'interrupteur s'active tout seul (les prix que l'application reprend de votre offre gardent le total de leur ligne), et sous l'interrupteur s'affiche alors « Client particulier : vous saisissez maintenant les prix TTC. », avec un bouton **Désactiver** qui rétablit les prix HT.

## Rattacher une facture à une propriété

Si le chiffre d'affaires concerne un bien loué, un véhicule ou une autre propriété, choisissez cette propriété dans le formulaire de facture. La facture apparaît alors sur la page de la propriété et compte dans son chiffre d'affaires total. Cela fonctionne pour les factures issues d'un contrat de location comme pour un rattachement direct, par exemple un décompte de charges, des frais ponctuels ou une facture de vente. Les [propriétés](/fr/features/objects) sont un module d'Office.

## La page de la facture

Chaque facture a sa propre page avec :

- les données du client
- les lignes avec sous-totaux
- le détail de la TVA
- le montant total
- le statut et l'historique
- le lien de paiement (une fois la facture envoyée)

## Aperçu du document

Chaque facture enregistrée a sur sa page un aperçu PDF en direct. Vous voyez la facture exactement comme votre client la verra : mise en page, lignes, totaux, image de marque et logo.

L'en-tête de l'aperçu contient les boutons **Télécharger PDF**, **Imprimer** et **Modifier le design**. **Modifier le design** vous mène directement à la mise en page des factures, où vous ajustez l'apparence de toutes vos factures, devis et rappels. Une fois terminé, vous revenez à la facture d'où vous veniez. Sur le téléphone, la même action se trouve dans le menu des autres actions, pour que l'en-tête de l'aperçu reste dégagé.

## Actions

Le bouton principal de la page de facture suit l'étape où en est la facture :

- **Finaliser** : sur un brouillon. La facture reçoit alors son numéro définitif.
- **Envoyer** : sur une facture finalisée qui n'est pas encore partie chez le client.
- **Marquer comme payée** : sur une facture envoyée qui attend son paiement, et quand le client signale avoir payé, pour que vous le confirmiez au lieu de renvoyer la facture.
- **Envoyer un rappel** : sur une facture en retard. **Marquer comme payée** passe alors dans le menu des autres actions.
- **Dupliquer** : sur une facture payée ou annulée, en bouton secondaire, pour la recréer rapidement.

Les autres actions se trouvent, selon le statut, dans le menu à côté du bouton principal : **Dupliquer**, **Répéter chaque mois** (transforme la facture en facture récurrente), renvoyer l'e-mail, **Envoyer un rappel**, **Envoyer au comptable**, **Enregistrer comme modèle** et annuler la facture. Sur le téléphone, l'aperçu, **Télécharger PDF** et **Modifier le design** s'y trouvent aussi.

### Envoyer

Envoyez la facture par e-mail à votre client. L'e-mail contient :

- un message que vous pouvez adapter (à partir de votre modèle d'e-mail)
- la facture en pièce jointe PDF
- un lien de paiement pour payer en ligne

Avant l'envoi, l'aperçu de l'e-mail montre le message exactement tel que votre client le recevra. Sous **Inclure dans l'email** se trouvent des interrupteurs pour le **Bouton afficher (lien en ligne)**, le **Bouton télécharger**, la **Pièce jointe PDF** et **Inclure les lignes de facture**. Ce que vous activez apparaît aussitôt dans l'aperçu : ce que vous voyez est ce que reçoit votre client. Vous retouchez le message à chaque fois ? Cochez dans la même fenêtre **Utiliser ce texte désormais pour les factures**, et chaque e-mail de facture suivant partira de cette version. Voir [Modèles d'e-mail](/fr/faq/email-template).

Si votre espace de travail contient des conditions générales dans Documents, l'aperçu de l'e-mail affiche aussi l'interrupteur **Joindre les conditions générales**. Son état de départ suit le réglage choisi pour ce type de document sous [Joindre les conditions par défaut](#joindre-les-conditions-par-defaut) (par défaut : activé pour les devis, désactivé pour les factures). Activé, le PDF des conditions en vigueur est joint à l'e-mail et l'envoi est enregistré comme moment de remise sur le document des conditions.

### Envoyer en facture électronique Peppol

Si votre espace de travail est sur Office et que la [facturation électronique Peppol](/fr/features/peppol) est activée, la fenêtre d'envoi propose aussi **Facture électronique (Peppol)**. La facture arrive alors directement dans le logiciel comptable de votre client au lieu de partir par e-mail. Vous choisissez le canal facture par facture.

### Télécharger PDF

Téléchargez la facture sous forme de PDF soigné, avec votre logo, vos couleurs et toutes les données de la facture.

Si une facture dépasse une page, le PDF la coupe proprement : les totaux restent avec les dernières lignes, sous une mention indiquant que la facture continue, et le bloc de paiement reçoit ensuite une page à lui. Aucune page de suite ne commence par un tableau vide ou une copie répétée des chiffres.

### Marquer comme payée

Confirmez vous-même un paiement quand le client paie par virement ou autrement, en dehors de l'application.

### Annuler

Annulez une facture qui ne doit plus être payée. Les factures annulées restent dans votre comptabilité, pour que tout reste vérifiable.

### Dupliquer

Créez une copie d'une facture existante, pratique pour facturer de nouveau le même client.

Une note de crédit ne peut pas être dupliquée. Le duplicata ne renverrait vers aucune facture et compterait quand même comme chiffre d'affaires négatif dans votre déclaration de TVA. Créez plutôt une nouvelle correction via **Créer une note de crédit** sur la facture à corriger.

### Envoyer un rappel

Envoyez un rappel de paiement pour une facture en retard. Cela fonctionne avec tous les abonnements ; seuls les rappels automatiques font partie d'Office. Si le paiement en ligne est activé, l'e-mail de rappel offre au client les mêmes moyens de paiement que la facture d'origine : un bouton pour voir et payer, un bouton pour confirmer le paiement et un QR code à scanner pour payer sur le PDF.

## Actions groupées

Sélectionnez plusieurs factures dans la liste pour les traiter en une fois. La colonne de cases à cocher n'apparaît que pendant une sélection ; une liste vide n'a pas de bouton de sélection.

- **Marquer comme payé** : enregistrer un paiement pour plusieurs factures à la fois
- **Marquer comme envoyée** : passer en envoyé des factures que vous avez remises en dehors de MyCompanyDesk. Seul le statut change et les factures reçoivent leur numéro définitif ; aucun e-mail ne part.
- **Marquer comme annulée** : annuler plusieurs factures à la fois
- **Archiver** : déplacer les factures dans l'archive
- **Supprimer** : déplacer les factures dans la corbeille

Dans l'archive et la corbeille, vous restaurez les factures, et depuis la corbeille vous les supprimez définitivement.

Supprimer définitivement une facture (seule, en groupe, en vidant la corbeille ou en supprimant tout) libère les dépenses qui y étaient liées. Elles reviennent dans les dépenses non facturées et peuvent aller sur une autre facture.

Passer des factures en envoyé par lot effectue les mêmes contrôles de TVA et de statut que la finalisation d'une seule facture. Les factures qui échouent à un contrôle sont ignorées, et l'écran de résultat explique pourquoi.

Si l'application refuse une action groupée parce qu'une ou plusieurs lignes sélectionnées tombent dans une période de TVA verrouillée, le message d'erreur nomme précisément cette période et dit quoi faire. Une période déposée et verrouillée ne se rouvre que par une déclaration rectificative (suppletie). Un simple verrouillage (le délai de dépôt est passé sans déclaration) peut être levé temporairement depuis la page TVA. Retirez de votre sélection les lignes de cette période, ou utilisez la voie de correction adaptée, puis réessayez.

## Liens de paiement

Quand vous envoyez une facture, MyCompanyDesk crée un lien de paiement unique. Votre client peut :

1. cliquer sur le lien dans l'e-mail
2. consulter la facture dans le **portail client**
3. payer directement en ligne via votre compte Mollie ou Stripe connecté

Avec Mollie ou Stripe connecté, l'e-mail commence par un bouton **Payer maintenant** qui mène directement à la page de paiement, avec **Voir la facture** à côté pour ceux qui veulent d'abord regarder. Le paiement ne démarre que dans le navigateur du client, les scanners de messagerie n'en créent donc pas. Plus de détails dans [le portail client](/fr/advanced/customer-portal#paiement).

Le paiement est enregistré automatiquement et la facture passe à **Payée**.

Si vous annulez une facture après l'avoir envoyée, le lien de paiement cesse de fonctionner. Un client qui clique sur le lien dans l'ancien e-mail ou le PDF voit que la facture est annulée et ne peut plus être payée en ligne.

## Paiement en ligne

Permettez à vos clients de payer vos factures en ligne en connectant votre propre compte Mollie ou Stripe :

1. Ouvrez **Paramètres › Paiement**
2. Sous **Permettre aux clients de payer par iDEAL**, connectez Mollie ou Stripe
3. Votre client voit les moyens de paiement actifs dans votre propre compte Mollie ou Stripe, comme iDEAL, la carte bancaire ou Bancontact

Une fois la connexion faite, chaque facture envoyée contient un lien de paiement. Vos clients paient via votre propre compte chez le prestataire de paiement et l'argent arrive directement chez vous. MyCompanyDesk ne gère pas votre argent et ne le retient pas.

Sur la même page, vous indiquez votre IBAN pour les virements (le QR code à scanner pour payer sur le PDF l'utilise) et, avec **Les clients peuvent aussi payer via PayPal**, l'adresse e-mail de votre compte PayPal.

## Origine du paiement

Quand une facture est entièrement payée, l'en-tête du bloc de paiement affiche une étiquette indiquant par quel prestataire l'argent est arrivé : « Payé via Mollie » ou « Payé via Stripe ». Avec plusieurs moyens de paiement, c'est le prestataire principal qui s'affiche. Vous voyez ainsi d'un coup d'œil où l'argent est arrivé, sans parcourir l'historique des paiements.

## Rembourser un paiement

Les paiements en ligne via Mollie ou Stripe se remboursent directement depuis MyCompanyDesk. Quand vous remboursez un paiement :

- le montant total retourne à votre client via le même prestataire de paiement
- Mollie ou Stripe traite le remboursement immédiatement
- le paiement est marqué comme remboursé dans votre comptabilité

Un remboursement partiel lancé directement chez Mollie ou Stripe (par exemple si vous n'y remboursez qu'une partie du montant) apparaît dans la liste des paiements avec la date du remboursement et le montant qui reste comptabilisé.

Les paiements hors application (virement, espèces) s'annulent sans remboursement par un prestataire : le paiement est marqué comme annulé. La facture reprend alors le statut qui correspond à son historique. Si la facture avait déjà été envoyée par e-mail au client, elle revient à **Envoyée** ; si elle n'avait jamais été envoyée, elle revient à **À envoyer**. L'historique d'envoi d'origine est conservé.

Pour rembourser un paiement :

1. Ouvrez la page de la facture
2. Repérez le paiement dans la liste des paiements
3. Cliquez sur **Rembourser** (uniquement pour les paiements Mollie et Stripe)
4. Indiquez éventuellement un motif
5. Confirmez le remboursement

## Types de documents

Les factures regroupent plusieurs types de documents :

- **Facture** : le document de facturation habituel
- **Note de crédit** : une correction, par exemple lors d'un remboursement
- **Rappel** : un rappel de paiement pour une facture en retard

## Filtrer et rechercher

Avec le panneau de filtres et le champ de recherche, vous affinez la liste :

- **Statut** : à envoyer, brouillon, en attente de paiement, en retard, vérification requise, payé ou annulé
- **Période** : filtre sur la date de facture
- **Vue** : factures actives, archive ou corbeille
- **Recherche** : par client, numéro ou référence
- **Liens directs** : les notifications et e-mails qui pointent directement vers une facture effacent à l'ouverture un filtre de dates actif, pour que la facture ne soit pas cachée par un filtre resté en place

Les factures d'un seul client s'ouvrent depuis la page de ce client.

## Âge des créances

Sur ordinateur, la carte **Âge des créances** s'affiche à côté de la liste. Elle répartit les factures ouvertes selon le nombre de jours écoulés depuis l'échéance : courant, 1 à 30, 31 à 60, 61 à 90 et plus de 90 jours de retard. Cliquez sur un groupe pour limiter la liste à celui-ci. Les montants correspondent à ce qui reste à encaisser : le total de la facture moins les paiements comptabilisés, en tenant compte des notes de crédit déjà émises sur la facture.

La carte ne voit que les factures chargées dans la liste actuelle. Ses totaux sont donc un instantané de cette page, pas un chiffre portant sur tout l'espace de travail. Une facture entièrement créditée ne compte plus comme de l'argent à recevoir, si bien que les totaux correspondent à ce que votre client voit dans le portail et à la page de la facture.

## Exporter

Téléchargez vos factures en fichier CSV pour Excel, Google Sheets ou votre logiciel comptable sous **Paramètres › Télécharger les données**. C'est possible avec tous les abonnements.

## Finaliser et envoyer

Quand vous finalisez ou envoyez une facture, MyCompanyDesk vérifie que votre numéro de TVA néerlandais (btw-id) et votre IBAN sont renseignés. Aux Pays-Bas, le btw-id doit figurer sur une facture valable, et l'IBAN indique aux clients où payer.

S'il manque l'un des deux, une fenêtre s'ouvre pour le saisir tout de suite. Après l'enregistrement, votre facture est finalisée automatiquement.

L'application bloque aussi la finalisation si les données de votre entreprise sont incomplètes (par exemple un nom ou une adresse manquants) ou si la facture n'a aucune ligne. Le message d'erreur indique précisément ce qui manque, pour que vous corrigiez avant que la facture parte chez le client.

Les quantités du PDF suivent la langue du reste du document : une facture en anglais utilise la notation anglaise des nombres, une facture en néerlandais la notation néerlandaise.

Si votre espace de travail numérote à la main, l'application vous demande aussi le numéro de facture lors de la finalisation ou de l'envoi. MyCompanyDesk propose le numéro suivant de votre série, mais vous pouvez saisir n'importe quel numéro. Le numéro est obligatoire et doit être unique.

Si vous attendez encore votre btw-id de l'administration fiscale néerlandaise, ou si vous relevez du régime des petites entreprises (KOR), vous pouvez le confirmer et continuer. Ajoutez votre btw-id plus tard, dès que vous l'avez.

Une fois finalisée, une facture ne peut pas être archivée ou supprimée en une étape, car son numéro est déjà utilisé. Passez par l'annulation ou une note de crédit pour une facture finalisée qui ne doit plus être payée.

<a id="receiving-invoices-from-other-mycompanydesk-users"></a>

## Recevoir des factures d'autres utilisateurs MyCompanyDesk

Quand un fournisseur qui utilise aussi MyCompanyDesk vous envoie une facture par e-mail, elle peut arriver directement dans vos dépenses sous forme de brouillon structuré. Les montants viennent de la facture elle-même : rien à scanner ni à recopier. Le brouillon est toujours à vérifier et n'est comptabilisé qu'après votre validation.

Cette fonction est désactivée par défaut. Activez-la sous **Paramètres › Automatisation**, à la rubrique **Factures d'autres utilisateurs MyCompanyDesk**. Au même endroit, vous la désactivez à tout moment.

Quand la fonction est active :

- chaque facture entrante apparaît comme dépense brouillon sous **Dépenses**, avec le nom du fournisseur et les totaux des lignes déjà remplis
- la description indique de quel espace de travail MyCompanyDesk elle vient et qu'elle est arrivée via MyCompanyDesk
- des règles pour fournisseurs de confiance peuvent préremplir la catégorie, mais le brouillon reste à vérifier, pour que rien ne soit comptabilisé tout seul
- la même facture ne devient jamais deux brouillons, même si l'expéditeur renvoie l'e-mail
- MyCompanyDesk accepte au plus dix brouillons du même expéditeur par période de 24 heures dans votre espace de travail, pour que votre liste à vérifier ne déborde pas

La seconde voie ne demande aucun réglage : le portail client propose sur la facture elle-même le bouton **Ajouter à ma comptabilité**, et ce clic vaut accord. MyCompanyDesk crée alors le brouillon dans l'espace de travail du destinataire, sans l'interrupteur ci-dessus ni la limite quotidienne, quelle que soit la boîte où la facture est arrivée. Les deux voies partagent le même contrôle des doublons, si bien qu'une facture déjà arrivée automatiquement n'est jamais comptabilisée deux fois. Le bouton lui-même est décrit dans [le portail client](/fr/advanced/customer-portal#la-facture-dans-votre-propre-comptabilite).

La fonction est gratuite des deux côtés. La voie automatique ne fonctionne que si le fournisseur envoie la facture à une boîte que MyCompanyDesk héberge pour vous. Vous préférez un réseau ? Vous pouvez aussi recevoir les factures de vos fournisseurs via la [facturation électronique Peppol](/fr/features/peppol).

## Conseils

- Configurez vos [modèles d'e-mail](/fr/settings/email) avant d'envoyer votre première facture
- Utilisez les [factures récurrentes](/fr/features/recurring-invoices) (Office) pour une facturation régulière
- Consultez les [rapports](/fr/features/reports) (Office) pour comprendre votre chiffre d'affaires
- Activez les [suggestions IA](/fr/advanced/ai-features) (Office) pour de meilleures descriptions
- Utilisez la [facturation électronique Peppol](/fr/features/peppol) (Office) quand votre client préfère une remise numérique
