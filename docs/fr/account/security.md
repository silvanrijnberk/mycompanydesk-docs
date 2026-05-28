---
title: Securite
---

# Securite

Protegez votre compte avec une authentification forte et surveillez les acces.

## Mot de passe

Utilisez un mot de passe fort et unique pour votre compte MyCompanyDesk. Changez-le depuis **Profil > Mot de passe**.

### Exigences du mot de passe

- Au moins 8 caracteres
- Un melange de lettres, chiffres et symboles est recommande

## Authentification a deux facteurs

Ajoutez une couche de securite supplementaire a votre compte :

1. Allez dans **Profil > Securite**
2. Cliquez sur **Activer l'authentification a deux facteurs**
3. Scannez le QR code avec votre application d'authentification (Google Authenticator, Authy, etc.)
4. Entrez le code de verification pour confirmer
5. Enregistrez vos **codes de recuperation** dans un endroit securise

Avec l'authentification a deux facteurs activee, vous aurez besoin de votre mot de passe et d'un code de votre application d'authentification pour vous connecter.

### Desactiver l'authentification a deux facteurs

1. Allez dans **Profil > Securite**
2. Cliquez sur **Desactiver l'authentification a deux facteurs**
3. Entrez votre mot de passe pour confirmer

## Connexion sans mot de passe (lien magique)

Vous pouvez vous connecter sans mot de passe grace a un lien a usage unique envoye par e-mail :

1. Allez sur la page de connexion
2. Cliquez sur **Envoyez-moi un lien de connexion**
3. Saisissez votre adresse e-mail
4. Consultez votre messagerie et cliquez sur le lien

Le lien est valable 15 minutes et ne peut etre utilise qu'une seule fois. Pour des raisons de securite, demander un nouveau lien invalide tous les liens en attente.

::: tip
Lorsque vous verifiez votre e-mail apres l'inscription, vous etes automatiquement connecte. Aucune etape de connexion supplementaire n'est necessaire.
:::

## Gestion des sessions

Consultez et gerez vos sessions actives :

- Voyez tous les appareils et navigateurs ou vous etes connecte
- Consultez l'heure de la derniere activite pour chaque session
- **Revoquez** les sessions que vous ne reconnaissez pas

::: warning
Si vous voyez une session que vous ne reconnaissez pas, revoquez-la immediatement et changez votre mot de passe.
:::

## Passkeys

Les passkeys vous permettent de vous connecter avec la biometrie ou une cle de securite au lieu d'un mot de passe. Allez dans **Profil > Securite** pour les gerer.

- Enregistrez plusieurs passkeys (Face ID, Touch ID, Windows Hello, cles physiques)
- Nommez chaque passkey pour pouvoir revoquer des appareils individuellement
- Une fois un passkey enregistre, la connexion propose par defaut le bouton passkey

::: info
Dans les espaces de travail ou les passkeys sont gerees par un administrateur, les membres non-administrateurs voient une carte d'information au lieu du panneau de gestion. Demandez a votre administrateur de configurer une passkey pour vous, ou de vous accorder les droits d'administration pour que vous puissiez les configurer vous-meme.
:::

## Connexion sociale

Si vous utilisez Google ou Microsoft pour vous connecter :

- Votre authentification est geree par le fournisseur
- MyCompanyDesk ne voit ni ne stocke jamais votre mot de passe Google/Microsoft
- Vous pouvez deconnecter la connexion sociale depuis **Profil > Applications connectees**

## Protection des donnees

MyCompanyDesk prend la securite des donnees au serieux :

- Toutes les donnees sont transmises via HTTPS
- Les mots de passe sont haches avec bcrypt
- Les connexions a la base de donnees sont chiffrees
- Des sauvegardes regulieres assurent la securite des donnees
- Traitement des donnees conforme au RGPD

## Suppression du compte

Si vous devez supprimer votre compte :

1. Allez dans **Profil > Donnees**
2. Cliquez sur **Supprimer le compte**
3. Entrez votre mot de passe pour confirmer
4. Toutes vos donnees sont definitivement supprimees

::: warning
La suppression du compte est irreversible. Exportez vos donnees au prealable si vous avez besoin d'une sauvegarde.
:::
