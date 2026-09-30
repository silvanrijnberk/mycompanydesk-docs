---
title: Configurer votre entreprise
description: "L'assistant de configuration remplit votre bloc expéditeur, vos coordonnées de paiement et votre statut TVA autour de votre première facture."
last_verified: 2026-09-30
---

# Configurer votre entreprise

Lors de votre première connexion, MyCompanyDesk vous guide à travers un court **assistant de configuration** sur `/setup`. L'assistant s'articule autour de votre première facture : il demande à qui vous facturez et remplit en parallèle le bloc expéditeur, les coordonnées de paiement et le statut de TVA, avec un aperçu en direct de la facture. Vous pouvez aussi faire rechercher votre entreprise dans le registre néerlandais (KVK). Rien n'est figé : chaque étape peut être passée et tout peut être modifié plus tard dans les paramètres.

## Où trouver l'assistant

- **Première connexion :** l'assistant s'ouvre automatiquement.
- **Plus tard :** ouvrez `/setup` directement, à tout moment, pour parcourir ou reparcourir l'assistant. Tant que la configuration a des bouts libres, le tableau de bord vous signale lui-même la prochaine étape en bas de la page, sous **À configurer**.
- **Passer :** chaque étape comporte un bouton **Passer pour l'instant**. Vos réponses sont conservées, vous reprenez plus tard là où vous étiez.

## Étape 1 : À qui vous facturez

L'assistant s'ouvre sur un aperçu en direct de la facture et demande le client. Commencez à taper le nom du client.

- Si le client existe déjà dans votre espace de travail, sélectionnez-le dans la liste.
- Pour créer un nouveau client en ligne, tapez le nom et cliquez sur **Créer un client**. Le formulaire en ligne demande le nom du client et l'adresse. La recherche KVK peut proposer des entreprises néerlandaises à partir du nom de l'entreprise ou du numéro KVK et remplir l'adresse automatiquement ; pour un client particulier, ajoutez-le en saisissant l'adresse à la main.
- L'e-mail du client est optionnel et n'est utilisé que lorsque vous envoyez la facture.

Seul le nom du client est requis pour continuer. Vous pourrez compléter le reste des coordonnées du client plus tard depuis la page client.

## Étape 2 : Les informations de votre entreprise (KVK)

Cette étape remplit le bloc expéditeur de votre facture. Si vous vous êtes inscrit via le site marketing et que vous avez sélectionné votre entreprise dans la recherche KVK, votre numéro KVK est déjà transmis à l'assistant et appliqué automatiquement dès que vous atteignez cette étape. MyCompanyDesk récupère alors votre profil de base KVK et préremplit vos informations : dénomination légale, noms commerciaux, forme juridique, adresse et activité. Seuls les champs vides sont remplis ; ce que vous avez déjà saisi reste intact.

L'aperçu sur le site marketing qui vous mène à l'assistant reconnaît désormais un plus large éventail de métiers. Il commence par votre nom d'entreprise. S'il est ambigu, il peut lire la description SBI/branche de votre profil de base KVK et, si nécessaire, faire appel à un classificateur IA léger pour choisir le métier le mieux adapté. Si aucun ne correspond, l'aperçu affiche une persona neutre pour indépendant au lieu d'un exemple générique de bricolage. La ville affichée provient de votre enregistrement KVK lorsqu'elle est disponible.

Aucun résultat, ou pas d'immatriculation KVK ?

- **Remplir manuellement :** saisissez vous-même le nom de l'entreprise, le numéro KVK, l'adresse, le code postal et la ville.
- **Pas d'immatriculation KVK :** passez complètement la recherche et complétez vos informations plus tard dans les paramètres.

## Étape 3 : Comment vous êtes payé

Cette étape comporte deux parties : votre statut de TVA et votre IBAN.

**Statut de TVA**

Si vous facturez de la TVA, sélectionnez **Oui, je facture la TVA** et saisissez votre numéro de TVA. Tant que le champ est vide, une indication rappelle qu'un numéro de TVA est requis pour continuer ; si vous ne l'avez pas encore, cliquez sur **Je ne connais pas mon numéro de TVA maintenant, je le renseignerai plus tard** pour passer cette étape. Si vous êtes exonéré (par exemple via le régime de franchise en base), sélectionnez **Non, je suis exonéré** à la place. Vous pourrez modifier cela plus tard dans les paramètres.

**IBAN**

L'assistant demande l'IBAN sur lequel les clients doivent payer. Vous pouvez saisir votre IBAN professionnel maintenant, ou cliquer sur **Je le renseignerai plus tard** pour passer cette étape. Tant que le champ est vide, une indication rappelle qu'un IBAN est requis avant de pouvoir envoyer des factures. Gardez à l'esprit qu'un client ne pourra pas facilement vous payer sans IBAN.

## Étape 4 : Terminer la configuration

La dernière étape confirme votre essai Pro de 60 jours, sans carte bancaire, et applique tous les réglages, puis vous emmène à votre tableau de bord. Rien ne tourne en tâche de fond : l'écran de fin nomme ce qui suit encore (sécuriser votre compte, et votre site web), et ces suggestions suivent plus tard sous **À configurer** sur le tableau de bord, quand ça arrange. MyCompanyDesk ne génère plus de site ici et ne choisit pas de prestations pour vous ; un site se construit à la première ouverture de la zone **Site Web**.

Cliquez sur **Terminer la configuration** et l'assistant applique vos informations d'entreprise, votre statut de TVA, votre IBAN et vos paramètres par défaut, puis vous emmène à votre tableau de bord.

## Le site web : construit dès que vous l'ouvrez, en ligne dès que vous publiez

MyCompanyDesk ne place pas de site web sous votre espace de travail sans que vous le demandiez. Inscrivez-vous et facturez sans jamais ouvrir la zone Site Web : rien d'inachevé n'y attend.

À la première ouverture de **Site Web**, un site standard est créé comme brouillon : une page d'accueil, des prestations, un à-propos et contact, plus les pages Déclaration de confidentialité et Conditions générales, avec vos données d'enregistrement aux endroits qui sont les leurs. Seul un texte auquel vous pouvez tenir se trouve sur les pages ; les blocs vides attendent que vous les écriviez, et l'assistant du site n'invente plus une histoire d'origine ni une réponse standard. Rien ne se met non plus en ligne de soi : publier reste votre moment, c'est seulement alors que votre adresse devient active. Votre sous-domaine d'espace de travail, la forme simple du nom de votre entreprise sous mycompanydesk.com, n'entre en vue qu'à la publication.

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

Consultez l'[aperçu des paramètres](/fr/settings/) pour la carte complète. Vous pouvez aussi relancer l'assistant depuis `/setup` quand vous voulez ; il complète les champs vides sans écraser ce que vous avez réglé vous-même.

## Prochaines étapes

Votre entreprise est configurée. Il est temps de [créer votre première facture](/fr/getting-started/first-invoice).
