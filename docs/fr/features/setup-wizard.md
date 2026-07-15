---
title: Assistant de configuration
last_verified: 2026-07-15
---

# Assistant de configuration

L'assistant de configuration sur `/setup` rend un nouvel espace de travail opérationnel en quelques minutes. Il s'articule autour de votre première facture : il demande à qui vous facturez, récupère vos informations d'entreprise dans le registre du commerce néerlandais (KVK), remplit vos coordonnées de paiement et le statut de TVA, et affiche un aperçu en direct de la facture. C'est la porte d'entrée des nouveaux utilisateurs, et il reste disponible ensuite.

Si vous cherchez le guide de base, commencez par [Configurer votre entreprise](/fr/getting-started/company-setup). Cette page est la référence de chaque étape et de chaque option.

## Quand l'assistant apparaît

- **Première connexion :** les nouveaux comptes arrivent automatiquement dans l'assistant.
- **Bannière du tableau de bord :** tant que la configuration n'est pas terminée, une bannière en haut du tableau de bord propose de la finir. La bannière se masque avec la croix ; ce masquage vaut par navigateur, et `/setup` reste accessible directement.
- **À tout moment :** rendez-vous sur `/setup` pour lancer ou relancer l'assistant.

L'assistant ne vous bloque nulle part. **Passer pour l'instant** vous ramène au tableau de bord sans terminer ; rien n'est perdu, car chaque réponse est enregistrée immédiatement. Revenez plus tard et vous reprenez exactement où vous vous étiez arrêté.

## Les étapes

L'assistant affiche une barre de progression avec jusqu'à quatre étapes :

1. **Client :** à qui vous facturez
2. **KVK :** les informations de votre entreprise
3. **Paiement :** votre IBAN et statut de TVA
4. **Finalisation :** confirmation de l'essai et prochaines étapes optionnelles

**Continuer** avance dès qu'une étape a ce qu'il lui faut ; **Terminer la configuration** sur la dernière étape applique tout.

## Étape : Client

L'assistant s'ouvre sur un aperçu en direct de la facture et demande le client. Commencez à taper le nom du client.

- Si le client existe déjà dans votre espace de travail, sélectionnez-le dans la liste.
- Pour créer un nouveau client en ligne, tapez le nom et cliquez sur **Créer un client**. Le formulaire en ligne demande le nom du client et l'adresse. La recherche KVK peut proposer des entreprises néerlandaises et remplir l'adresse automatiquement ; pour un client particulier, ajoutez-le en saisissant l'adresse à la main.
- L'e-mail du client est optionnel et n'est utilisé que lorsque vous envoyez la facture.

Seul le nom du client est requis pour continuer. Vous pourrez compléter le reste des coordonnées du client plus tard depuis la page client.

## Étape : KVK

Deux chemins :

1. **Rechercher :** tapez le nom de votre entreprise (deux caractères ou plus) et choisissez-la parmi les suggestions en direct. MyCompanyDesk récupère alors votre profil de base KVK et préremplit vos informations : dénomination légale, noms commerciaux, forme juridique, adresse et activité. Seuls les champs vides sont remplis ; ce que vous avez saisi à la main est conservé.
2. **Remplir manuellement :** un court formulaire pour le nom de l'entreprise, le numéro KVK, l'adresse, le code postal et la ville. Utile quand votre entreprise est trop récente pour apparaître dans les résultats, ou quand votre nom commercial ne correspond pas à votre recherche. Vos saisies sont enregistrées immédiatement dans vos informations d'entreprise. Un lien permet de revenir à la recherche à tout moment.

**Pas d'immatriculation KVK :** continuez sans informations d'entreprise et complétez-les plus tard dans les paramètres, sous **Données de l'entreprise**.

Quand une recherche ne donne rien, l'assistant le dit et propose de passer à la saisie manuelle, avec le nom déjà tapé prérempli.

## Étape : Paiement

L'assistant demande l'IBAN sur lequel les clients doivent payer. Vous pouvez saisir votre IBAN professionnel maintenant, ou cliquer sur **Ajouter mon IBAN plus tard** pour passer cette étape. Gardez à l'esprit qu'un client ne pourra pas facilement vous payer sans IBAN.

Si vous attendez toujours votre numéro de TVA auprès de l'administration fiscale, ou relevez du régime de franchise en base (KOR), vous pouvez quand même continuer et ajouter votre numéro de TVA plus tard.

## Étape : Finalisation

La dernière étape confirme votre essai :

- **Votre essai :** chaque nouvel espace de travail démarre avec 60 jours de Pro, gratuits, sans carte bancaire.

**Terminer la configuration** applique vos informations d'entreprise, votre statut de TVA, votre IBAN et vos paramètres par défaut. L'écran de fin propose aussi des prochaines étapes optionnelles, comme créer un site web. La création d'un site web est optionnelle : rien n'est créé tant que vous ne le choisissez pas sur l'écran de fin ou dans la checklist du tableau de bord.

## Passer, reprendre et relancer

- **Passer :** vous ramène à tout moment au tableau de bord. La bannière du tableau de bord garde un chemin de retour jusqu'à ce que la configuration soit terminée.
- **Reprendre :** les réponses sont enregistrées à chaque modification. Fermer l'onglet en cours de route ne coûte rien ; à la visite suivante, vous reprenez sur la même étape.
- **Relancer :** après la finalisation, `/setup` relance le parcours depuis la première étape, avec vos réponses conservées. L'assistant complète les champs vides au lieu d'écraser : une liste de prestations que vous avez construite, un logo importé ou des réglages choisis à la main ne sont pas remplacés.

## Modifier sans l'assistant

Chaque champ touché par l'assistant a sa place dans les **paramètres** :

- **Données de l'entreprise :** nom, numéro KVK, adresse, numéro de TVA
- **Logo et couleur :** logo et couleur de marque
- **Mise en page des factures :** l'apparence de vos PDF
- **Votre site et domaine :** domaine et site web
- **Modules :** activer ou désactiver des parties de l'application

Consultez l'[aperçu des paramètres](/fr/settings/) pour la carte complète.
