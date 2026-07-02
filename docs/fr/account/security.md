---
title: Sécurité
last_verified: 2026-07-02
---

# Sécurité

Protégez votre compte avec une authentification forte. Tout ce qui suit se trouve dans l'espace Paramètres : ouvrez **Paramètres** et choisissez **Connexion**, sauf indication contraire.

## Mot de passe

Utilisez un mot de passe fort et unique pour votre compte MyCompanyDesk. Changez-le via **Paramètres > Connexion**.

### Exigences du mot de passe

- Au moins 8 caractères
- Un mélange de lettres, chiffres et symboles est recommandé

## Authentification à deux facteurs

Ajoutez une couche de sécurité supplémentaire à votre compte :

1. Allez dans **Paramètres > Connexion**
2. Lancez la configuration de la vérification en deux étapes
3. Scannez le code QR avec votre application d'authentification (Google Authenticator, 1Password, Authy et similaires)
4. Saisissez le code de vérification pour confirmer
5. Conservez vos **codes de secours** en lieu sûr

Avec la 2FA activée, vous avez besoin de votre mot de passe et d'un code de votre application d'authentification pour vous connecter.

### Se connecter avec la 2FA

Après avoir saisi votre mot de passe, l'écran de connexion demande le code à 6 chiffres de votre application d'authentification. Plus d'accès à l'application ? Saisissez l'un de vos codes de secours dans le même champ.

Lorsque vous vous connectez avec votre mot de passe et un code, vous pouvez cocher **mémoriser cet appareil pendant 30 jours** : cet appareil sautera alors l'étape du code pendant un mois.

### Second facteur perdu ?

Si vous n'avez plus votre application d'authentification ni votre passkey, utilisez le lien de récupération sur l'écran du code :

1. Saisissez votre adresse e-mail; nous envoyons un lien de confirmation.
2. L'ouverture du lien démarre un délai de sécurité de 24 heures.
3. Après ce délai, connectez-vous avec votre seul mot de passe. Vos passkeys, votre application d'authentification et vos codes de secours sont effacés automatiquement, pour que vous puissiez les reconfigurer.

Ce délai existe pour qu'un attaquant qui ne connaît que votre mot de passe ne puisse pas retirer instantanément la protection de votre compte.

### Désactiver la 2FA

1. Allez dans **Paramètres > Connexion**
2. Choisissez de désactiver la vérification en deux étapes
3. Confirmez avec un code actuel de votre application d'authentification, un code de secours ou votre mot de passe

## Connexion sans mot de passe (lien magique)

Vous pouvez vous connecter sans mot de passe grâce à un lien à usage unique envoyé par e-mail :

1. Allez sur la page de connexion
2. Cliquez sur **M'envoyer un lien de connexion**
3. Saisissez votre adresse e-mail
4. Ouvrez votre boîte de réception et cliquez sur le lien

Le lien est valable 15 minutes et ne peut être utilisé qu'une seule fois. Par sécurité, demander un nouveau lien invalide les liens précédents.

::: tip
Si vous confirmez votre adresse e-mail après votre inscription, vous êtes connecté automatiquement. Aucune étape de connexion supplémentaire n'est nécessaire.
:::

## Passkeys

Les passkeys vous permettent de vous connecter avec la biométrie ou une clé de sécurité au lieu d'un mot de passe. Elles sont disponibles pour chaque utilisateur : gérez vos propres passkeys via **Paramètres > Connexion**.

- Enregistrez plusieurs passkeys (Face ID, Touch ID, Windows Hello, clés matérielles)
- Nommez chaque passkey pour pouvoir révoquer les appareils individuellement
- Sur l'écran de connexion, une fois votre adresse e-mail saisie, un bouton de connexion par passkey apparaît si votre compte en possède une

## Sessions

La carte des sessions dans **Paramètres > Connexion** propose une seule action : **Se déconnecter**, qui met fin à votre session actuelle. Il n'y a pas de liste des autres appareils ni de révocation par session. Si vous soupçonnez que quelqu'un d'autre a accès à votre compte, changez votre mot de passe.

## Connexion via Google ou Microsoft

Si vous vous connectez avec Google ou Microsoft :

- L'authentification est gérée par le fournisseur
- MyCompanyDesk ne voit ni ne stocke jamais votre mot de passe Google ou Microsoft
- Vous pouvez aussi définir un mot de passe via **Paramètres > Connexion** pour activer en plus la connexion par e-mail

## Protection des données

MyCompanyDesk prend la sécurité des données au sérieux :

- Toutes les données transitent par HTTPS
- Les mots de passe sont stockés hachés, jamais en clair
- Traitement des données conforme au RGPD
- Des sauvegardes régulières protègent vos données

## Résilier le compte

Si vous souhaitez arrêter d'utiliser MyCompanyDesk, allez dans **Paramètres > Résilier le compte**. Cette ligne n'est visible que pour les administrateurs. Lisez la page attentivement : elle explique ce qu'il advient de votre abonnement et de vos données avant que vous ne confirmiez.

::: warning
Résilier votre compte est une décision importante. Téléchargez d'abord une copie de vos documents via **Paramètres > Télécharger les données**; le fisc néerlandais exige que vous puissiez présenter votre administration pendant 7 ans.
:::
