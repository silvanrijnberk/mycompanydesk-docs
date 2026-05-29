---
title: Profil
---

# Profil

Gerez vos parametres personnels de compte, vos preferences et vos notifications.

## Informations personnelles

Mettez a jour votre profil depuis la page **Profil** :

- **Nom** -- Votre nom d'affichage
- **E-mail** -- Votre adresse e-mail de connexion
- **Photo de profil** -- Telechargez une photo ou un avatar
- **Langue** -- L'interface de MyCompanyDesk est en neerlandais. Il n'y a pas de parametre de langue de l'interface. La langue des documents (factures, devis, e-mails) se definit par document via Entreprise → Facturation.

### Langue

L'interface de MyCompanyDesk est en neerlandais. Il n'y a pas de parametre de langue de l'interface. Les factures, devis et e-mails peuvent etre rediges en neerlandais, anglais, allemand ou francais via Entreprise → Facturation (langue PDF).

Vous ne gerez plus votre mot de passe via Profil mais via [Connexion securisee](/fr/account/security).

## Preferences de notification

Controlez quelles notifications vous recevez et comment :

### Notifications par e-mail

- **Facture payee** -- Lorsqu'un client paie une facture
- **Demande de devis recue** -- Lorsque quelqu'un demande un devis via votre page d'entreprise
- **Activite de l'equipe** -- Lorsque des membres de l'equipe effectuent des actions
- **Depense approuvee** -- Lorsqu'une depense est approuvee

### Resume par e-mail

Choisissez la frequence a laquelle vous recevez les e-mails de synthese :

- **Quotidien** -- Resume quotidien de l'activite
- **Hebdomadaire** -- Recapitulatif de la semaine
- **Mensuel** -- Vue d'ensemble mensuelle
- **Desactive** -- Pas d'e-mails de synthese

### Notifications push

Activez les notifications push du navigateur pour des alertes en temps reel lorsque l'application est ouverte.

### Notifications dans l'application

Notifications en temps reel dans l'interface MyCompanyDesk. Elles sont toujours actives et apparaissent dans la cloche de notification dans l'en-tete.

## Applications connectees

Consultez et gerez les connexions OAuth :

- **Google** -- Connecte pour la connexion et/ou l'envoi via Gmail
- **Microsoft** -- Connecte pour la connexion et/ou l'envoi via Outlook

Revoquez l'acces pour deconnecter une application de votre compte.

## Temps et deplacements

`/me/time-travel`

Valeurs par defaut personnelles pour les modules d'enregistrement du temps et de deplacements. La page a deux onglets :

- **Temps** (`/me/time-travel/time`) -- Remplacements personnels pour les valeurs par defaut d'enregistrement du temps.
- **Deplacements** (`/me/time-travel/travel`) -- Adresse du domicile, carte OV NS-Business, voiture par defaut, tarif kilometrique.

### Remplacements de temps

L'onglet Temps vous permet de remplacer les valeurs par defaut d'enregistrement du temps de l'espace de travail pour vos propres entrees. Chaque champ dispose d'un bouton d'effacement pour revenir a la valeur de l'espace de travail. Toutes les modifications sont enregistrees automatiquement.

| Parametre | Ce qu'il controle |
|---|---|
| **Taux horaire** | Votre taux par defaut pour les nouvelles entrees de temps |
| **Intervalle d'arrondi** | Arrondir la duree par pas de 15, 30 ou 60 minutes |
| **Projet obligatoire** | Bloquer l'enregistrement sans projet |
| **Description obligatoire** | Bloquer l'enregistrement sans description |
| **Description par defaut** | Pre-remplir le champ de description pour les nouvelles entrees |
| **Format de description facture** | Modele pour formater les lignes d'entrees de temps sur les factures |
| **Frais de service** | Ligne de frais fixes (description, montant, taux TVA) ajoutee automatiquement aux factures avec entrees de temps |
| **Debut / fin de journee** | Limites de la journee de travail dans la vue chronologique |
| **Pause** | Activer/desactiver l'affichage de la pause plus heure de debut et duree |

Lorsqu'une valeur personnelle est definie, elle a priorite sur la valeur par defaut de l'espace de travail. Voir [Enregistrement du temps > Remplacements personnels](/fr/features/time-registration#remplacements-personnels) pour les regles de cascade completes.
