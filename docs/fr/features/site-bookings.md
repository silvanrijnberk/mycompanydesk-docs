---
title: Rendez-vous en ligne
description: Permettez aux clients de prendre rendez-vous directement via votre site avec Site Bookings.
last_verified: 2026-10-02
---

# Rendez-vous en ligne

**Site Bookings** ajoute un bloc à votre site web permettant aux visiteurs de prendre rendez-vous directement avec vous. Que ce soit pour une prise de contact, un rendez-vous de devis ou une visite de service : le client choisit un service, un créneau disponible et confirme sa demande. C'est vous qui décidez quels services sont proposés, quand vous êtes disponible et si chaque rendez-vous doit d'abord être approuvé.

## À qui cela s'adresse-t-il ?

- Les indépendants et les PME qui souhaitent que les clients réserver via leur site.
- Les entreprises qui veulent rendre leur agenda accessible en un clic.
- Toute personne souhaitant proposer des types de rendez-vous récurrents sous forme de services.

## De quoi avez-vous besoin ?

- Un site web créé avec le **Constructeur de site**.
- Un agenda MyCompanyDesk dans lequel les rendez-vous seront enregistrés.
- Au moins un service que vous souhaitez proposer comme rendez-vous réservable.

## Horaires disponibles et heures d'ouverture

Les horaires que les visiteurs peuvent réserver proviennent d'une source centrale : **Paramètres** > **Données de l'entreprise** > **Heures d'ouverture**.

- Réglez chaque jour comme ouvert ou fermé, et indiquez un ou deux créneaux par jour ouvert.
- Utilisez les **jours spéciaux** pour les fêtes, vacances ou changements ponctuels; ceux-ci influencent aussi l'affichage d'un jour dans le bloc de réservation.
- Le bloc de rendez-vous respecte automatiquement vos heures d'ouverture et votre calendrier connecté, pour éviter les doubles réservations ou les créneaux impossibles.

Voir [Paramètres de l'entreprise](/fr/settings/company) pour configurer vos heures d'ouverture.

## Ajouter le bloc rendez-vous à votre site

1. Ouvrez le **Constructeur de site** depuis l'application.
2. Modifiez la page sur laquelle vous souhaitez placer le bloc.
3. Recherchez le bloc **Rendez-vous** ou **Site Bookings** dans la bibliothèque de blocs.
4. Glissez-déposez le bloc à l'emplacement souhaité sur la page.
5. Cliquez sur le bloc pour ouvrir ses paramètres.

Une fois la page publiée, votre site affiche le formulaire de rendez-vous.

## Configurer les services et créneaux

Dans les paramètres du bloc, vous contrôlez comment les clients peuvent réserver :

- **Service** : donnez un nom au rendez-vous, par exemple « Prise de contact » ou « Visite d'installation ».
- **Prix (optionnel)** : indiquez un prix si le rendez-vous doit être payant.
- **Durée** : choisissez la durée du rendez-vous, par exemple 30 ou 60 minutes.
- **Réservation anticipée** : définissez jusqu'à quand à l'avance un client peut réserver.
- **Approbation requise** : activez cette option si vous souhaitez approuver chaque demande manuellement.
- **Bloquer l'agenda externe** : laissez l'outil vérifier votre agenda existant pour éviter les doubles réservations.

Les **créneaux disponibles** proviennent des heures d'ouverture centrales définies dans [Données de l'entreprise](/fr/settings/company). Le bloc masque les jours et créneaux qui n'y sont pas ouverts.

Dans l'éditeur, le bloc de rendez-vous présente les services de votre offre sous forme de puces, exactement comme sur votre site en ligne : le nom, la durée et le prix TTC tels que les visiteurs les voient, avec une seule ligne de TVA sous la rangée. Un clic sur une puce ne change dans l'éditeur que le service sur lequel l'agenda d'exemple est bâti ; aucune disponibilité n'y est chargée et rien n'est réservé.

:::tip
Liez le bloc à une **adresse e-mail** pour que les visiteurs reçoivent une confirmation automatique et que vous soyez informé de chaque nouvelle réservation.
:::

## Séances de groupe

Toute réservation n'est pas un client seul à une heure librement choisie. Une **séance de groupe** (un atelier, un cours, une visite guidée) a une heure fixe et un nombre de places, et plusieurs clients peuvent y participer en même temps. Vous les planifiez dans l'agenda sous **Groepsafspraken** (séances de groupe) :

- **Article du catalogue** : la séance tire son nom et, si vous en calculez un, son prix de l'article du catalogue que vous choisissez. Pas encore de catalogue ? Créez d'abord un service, par exemple pour votre atelier.
- **Une ou plusieurs dates** : planifiez plusieurs heures de départ d'un coup, chacune avec sa durée.
- **Places** : combien de personnes tiennent dans la séance (entre 1 et 500). **Max. par inscription** définit combien de personnes une même inscription peut amener (jusqu'à 50).
- **Inscriptions ouvertes jusqu'à** : jusqu'au début, un certain nombre d'heures avant ou une semaine avant. Jusque-là, les participants peuvent aussi se désinscrire eux-mêmes.
- **Lieu** : optionnel, par exemple votre studio.
- **Paiement** : payé intégralement en ligne à l'avance (une place n'est confirmée qu'une fois payée ; sans Mollie ni Stripe, les gens paient sur place) ou **sur place**, où une facture en brouillon attend chaque participant après la séance.

Les visiteurs s'inscrivent via le bloc **Groepsafspraken** sur votre site, pour une ou plusieurs personnes en une fois tant qu'il reste des places. Chaque inscription est tenue séparément par participant : les courriels de rappel, le lien d'annulation personnel, le paiement en ligne et une éventuelle facture fonctionnent par personne. Dans l'agenda, chaque séance porte sa barre de remplissage, pour voir d'un coup d'œil à quel point le groupe est plein, et une séance occupe votre propre agenda à côté de vos rendez-vous ; le même moment ne peut donc pas être pris deux fois.

Sur la page de la séance, vous trouvez les participants : écrivez-leur en une fois, ajoutez quelqu'un à la main, marquez une absence, ou annulez une seule personne (elle reçoit un e-mail et les places redeviennent libres). Vous pouvez aussi déplacer ou annuler la séance entière ; un avis de déplacement ne part qu'aux participants réellement joignables par e-mail. Une inscription non payée qui reste impayée devient **expirée** plutôt qu'annulée, et seule une inscription expirée récupère ses places si le paiement finit par arriver. Les inscriptions que vous ou le visiteur avez annulées ne reviennent pas, et l'argent repart. Les participants retrouvent leur séance, comme tout rendez-vous avec vous, dans leur portail client sous **Rendez-vous**.

## Réserver un rendez-vous depuis le portail

Les visiteurs voient sur votre site un aperçu des créneaux disponibles. Après avoir choisi un horaire, ils saisissent leurs coordonnées et confirment la demande. Selon vos paramètres :

- le rendez-vous devient immédiatement définitif, ou
- la demande arrive comme « à confirmer » et doit d'abord être approuvée par vous.

Le rendez-vous apparaît directement dans votre agenda MyCompanyDesk, avec le service choisi et les éventuelles remarques du client.

## Gérer les rendez-vous

Une fois un rendez-vous réservé, vous pouvez le gérer depuis l'agenda :

- **Modifier** : changez la date, l'heure ou le service via l'agenda.
- **Annuler** : supprimez le rendez-vous. Le client est automatiquement informé si les paramètres d'e-mail sont activés.
- **Replanifier** : proposez un autre créneau via le bloc rendez-vous ou l'agenda.

Un rendez-vous en ligne **confirmé** compte également comme heures travaillées dans **Agenda**, afin que vos rendez-vous apparaissent à côté de vos entrées de temps. Ces heures ne sont pas facturables via Agenda; le revenu du rendez-vous est facturé séparément depuis le rendez-vous lui-même.

Un client peut annuler en ligne tant que le rendez-vous n'a pas commencé. Un rendez-vous pour lequel une facture existe déjà ne peut plus être annulé en ligne : la page d'annulation le signale et invite le client à vous contacter.

## Acompte

Le bloc de rendez-vous peut demander un acompte aux visiteurs qui réservent. Activez **Acompte** dans les réglages du bloc et choisissez un montant fixe ou un pourcentage du prix du service. Un acompte exige un prestataire de paiement connecté (Mollie ou Stripe) ; sans lui, le bloc se contente de réserver sans acompte.

Tant que l'acompte n'est pas payé, la réservation reste en attente : l'application affiche **En attente de paiement** à la place du bouton Accepter, et l'acceptation est refusée tant que l'argent n'est pas arrivé. Vous pouvez quand même refuser la demande pendant ce temps ; sur une demande non payée, ce bouton figure seul. Quand vous refusez une demande, ou qu'une demande expire, l'acompte payé est remboursé tout seul. Un paiement qui arrive plus tard pour une demande entre-temps refusée, retirée ou expirée est remboursé de la même façon. Une annulation par le visiteur rembourse aussi le montant d'elle-même, tant qu'elle tombe dans la fenêtre de remboursement que vous réglez dans les paramètres du bloc. Par défaut, cette fenêtre va jusqu'à un jour avant le début ; vous pouvez l'élargir à tout votre horizon de réservation, pour que chaque annulation avant le début soit remboursée, ou la ramener à zéro : rien ne part alors automatiquement et vous remboursez vous-même avec le bouton **Rembourser l'acompte** du rendez-vous.

La replanification d'un rendez-vous ne rouvre jamais sa fenêtre de remboursement.

## Rappels et e-mails d'annulation

MyCompanyDesk peut envoyer automatiquement un e-mail de rappel avant le rendez-vous. Un e-mail d'annulation au client est également possible. Vous décidez si et quand ces e-mails sont envoyés dans les paramètres du bloc et dans les paramètres de l'entreprise. Si un rendez-vous déjà annoncé par un rappel est replanifié ensuite, le rappel pour la nouvelle heure de départ part une fois de plus.

## Questions fréquentes

**Pourquoi ne vois-je aucun créneau disponible ?**
Vérifiez que vous avez créé au moins un service, qu'il possède une durée, et que vos créneaux sont dans le futur. Une approbation activée peut aussi faire que les créneaux ne sont visibles qu'après votre confirmation de la demande.

**Puis-je proposer plusieurs services ?**
Oui. Vous pouvez afficher un ou plusieurs services par bloc de rendez-vous. Chaque service a son propre nom, sa propre durée et son propre prix.

**Un paiement est-il demandé lors de la réservation ?**
Uniquement si vous associez un prix au service. Sans prix, la réservation est gratuite et vous recevez simplement une réservation.

## Sujets connexes

- [Constructeur de site](/fr/advanced/business-page)
- [Suivi du temps](/fr/features/time-registration)
- [Clients](/fr/features/customers)
- [Domaines, site web et boîte de réception](/fr/features/domains-website-inbox)
