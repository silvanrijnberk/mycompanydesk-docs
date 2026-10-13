---
title: Configurer votre entreprise
description: "L'assistant de configuration remplit vos données d'entreprise, votre statut TVA et votre IBAN pour votre première facture, avec aperçu en direct."
last_verified: 2026-10-13
---

# Configurer votre entreprise

Lors de votre première connexion, MyCompanyDesk vous guide à travers un court **assistant de configuration** sur `/setup` (**Configurons votre entreprise**). L'assistant s'articule autour de votre première facture : il remplit le bloc expéditeur, votre statut de TVA et votre IBAN, avec un aperçu en direct de la facture à côté. Vous recherchez les données de votre entreprise dans le registre du commerce néerlandais (KVK). Rien n'est figé : chaque étape peut être passée et tout peut être modifié plus tard dans les paramètres.

## Où trouver l'assistant

- **Première connexion :** l'assistant s'ouvre automatiquement.
- **Plus tard :** tant que vous n'avez pas terminé l'assistant, ouvrez `/setup` directement et vous reprenez là où vous étiez. Le tableau de bord vous indique ce qui reste à faire sous **À configurer**. Une fois l'assistant terminé, `/setup` vous renvoie au tableau de bord ; vous modifiez alors vos données dans les paramètres.
- **Passer :** chaque étape comporte un bouton **Passer pour l'instant**. Vos réponses sont conservées.
- **Vous venez surtout pour votre site ?** La première étape affiche la question **Vous venez surtout pour votre site web ?** avec le lien **Créer d'abord mon site web**, qui vous mène directement à l'assistant du site.

L'assistant compte trois étapes : **SIRENE**, **Début** et **TVA et IBAN**.

## Étape 1 : Les données de votre entreprise (KVK)

Cette étape remplit le bloc expéditeur de votre facture. Saisissez le nom ou le numéro KVK de votre entreprise dans le champ **Nom de l'entreprise ou numéro KVK** et choisissez votre entreprise dans la liste. MyCompanyDesk récupère alors votre Basisprofiel KVK et préremplit les données de votre entreprise : raison sociale, noms commerciaux, forme juridique, adresse et activité. Seuls les champs vides sont remplis ; ce que vous aviez déjà saisi reste tel quel.

Si vous vous êtes inscrit via le site de MyCompanyDesk et y avez déjà recherché votre entreprise, l'assistant reprend ce numéro KVK et l'applique automatiquement dès que vous arrivez à cette étape.

L'aperçu que vous y avez vu déduit d'abord votre métier du nom de votre entreprise. Si ce n'est pas clair, il lit l'activité (code SBI) de votre Basisprofiel KVK et, au besoin, laisse une IA choisir le métier le plus proche. Si rien ne correspond, il affiche un exemple neutre. La ville provient de votre enregistrement KVK lorsqu'elle est disponible.

Aucun résultat, ou pas d'inscription au KVK ?

- **Remplir manuellement** : saisissez vous-même le nom de l'entreprise, le numéro KVK (facultatif), l'adresse, le code postal et la ville, puis cliquez sur **Enregistrer et continuer**.
- **Je n'ai pas de numéro SIRENE** : passez la recherche et complétez vos données plus tard dans les paramètres.

## Étape 2 : Par quoi voulez-vous commencer ?

Choisissez ce dont vous avez besoin en premier :

- **Envoyer des factures et des devis** : vous passez à la dernière étape, TVA et IBAN.
- **Votre propre site web** : l'assistant se termine par **Vers votre site web** et vous mène à l'assistant du site.
- **E-mail sur votre propre domaine** : l'assistant se termine par **Vers votre e-mail** et vous mène à la configuration de votre e-mail.

Ce choix détermine seulement par où vous commencez. Rien n'est activé ni désactivé ; tout le reste reste disponible.

## Étape 3 : TVA et IBAN

Cette étape (**Comment êtes-vous payé ?**) comporte deux parties : votre statut de TVA et votre IBAN. Les deux doivent être renseignés avant de continuer ; si le bouton est grisé, la raison s'affiche juste à côté.

**Statut de TVA**

Choisissez l'une des trois options :

- **Oui, je facture la TVA** : saisissez votre numéro de TVA. Si vous ne l'avez pas sous la main, cliquez sur **Je ne connais pas mon numéro de TVA maintenant, je le renseignerai plus tard**.
- **Non, je participe à la KOR** : vous vous êtes inscrit auprès de l'administration fiscale néerlandaise au régime des petites entreprises. Vos factures sont établies sans TVA et mentionnent votre participation à la KOR.
- **Non, je suis exonéré** : pour les professions exonérées de TVA, comme les soins dispensés par un professionnel de santé enregistré.

Un doute ? Cliquez sur **Quel choix me correspond ?** pour une courte explication. Vous pourrez modifier ce choix plus tard dans les paramètres.

**IBAN**

L'assistant demande l'IBAN sur lequel vos clients vous paient. Votre IBAN figure sur vos factures, avec un code QR qui permet aux clients de payer directement. Saisissez votre IBAN maintenant, ou cliquez sur **Je le renseignerai plus tard**.

Si vous passez votre numéro de TVA ou votre IBAN, MyCompanyDesk vous le redemande lors de l'envoi de votre première facture.

## Terminer

Cliquez sur **Terminer la configuration**. L'assistant applique vos données d'entreprise, votre statut de TVA, votre IBAN et les réglages par défaut, puis affiche **Vous êtes prêt à facturer**. De là, cliquez sur **Créez votre première facture**, ou choisissez **Pas encore de client ou de mission ? Jetez d'abord un œil à votre tableau de bord**. La sécurisation de votre compte et votre site web vous seront suggérées plus tard, sous **À configurer** sur le tableau de bord.

## Le site web : construit dès que vous l'ouvrez, en ligne dès que vous publiez

MyCompanyDesk ne place pas de site web sous votre espace de travail sans que vous le demandiez. Inscrivez-vous et facturez sans jamais ouvrir la zone Site web : rien d'inachevé n'y attend.

À la première ouverture de **Site web**, un court assistant vous lance : ce que vous faites, ce que le site doit avant tout apporter, vos couleurs, votre logo et, si vous le souhaitez, vos propres photos. Votre site est ensuite créé comme brouillon, avec vos données d'enregistrement aux bons endroits. Rien ne se met en ligne de soi-même : publier reste votre moment. Ce n'est qu'à la première publication que votre site reçoit son adresse, la forme simple du nom de votre entreprise sous mycompanydesk.site.

## Modifier plus tard

Tout ce que l'assistant règle se modifie dans les **paramètres** :

| Je veux modifier... | Ouvrir |
|---|---|
| Nom, adresse, numéro KVK ou de TVA | **Données de l'entreprise** |
| Logo et couleur de marque | **Logo et couleur** |
| Comment les clients vous paient : IBAN, iDEAL, PayPal | **Paiement** |
| Délai de paiement, relances, validité des devis | **Factures et devis** |
| L'apparence de vos PDF de factures | **Mise en page des factures** |
| Votre site web et domaine | **Votre site et domaine** |

Consultez l'[aperçu des paramètres](/fr/settings/) pour la carte complète.

## Prochaines étapes

Votre entreprise est configurée. Il est temps de [créer votre première facture](/fr/getting-started/first-invoice).
