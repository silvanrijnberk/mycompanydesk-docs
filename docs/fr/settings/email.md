---
title: Integration e-mail
---

# Integration e-mail

Configurez la maniere dont MyCompanyDesk envoie des e-mails a vos clients -- de la livraison des factures aux rappels de paiement.

## Methodes d'envoi d'e-mails

MyCompanyDesk prend en charge quatre manieres d'envoyer des e-mails. La methode d'envoi que vous avez choisie est toujours respectee pour les factures et rappels automatises. Si vous configurez une boite de reception sur votre domaine, elle ne remplace pas ce choix -- la boite de reception sert a recevoir et a repondre, tandis que votre methode d'envoi choisie gere les e-mails transactionnels sortants.

### 1. E-mail integre (par defaut)

Par defaut, les e-mails sont envoyes via le service de messagerie de MyCompanyDesk. Aucune configuration necessaire.

### 2. Integration Gmail

Envoyez des e-mails directement depuis votre compte Gmail :

1. Allez dans **Parametres > Communication > E-mail**
2. Cliquez sur **Connecter Gmail**
3. Autorisez MyCompanyDesk a envoyer en votre nom via Google OAuth
4. Les e-mails apparaissent desormais comme envoyes depuis votre adresse Gmail

**Avantages :**

- Les e-mails affichent votre adresse Gmail comme expediteur
- Les e-mails envoyes apparaissent dans votre dossier Gmail Envoyes
- Meilleure delivrabilite (reputation de votre propre domaine)

### 3. Integration Outlook / Microsoft

Envoyez depuis votre compte Outlook ou Microsoft 365 :

1. Allez dans **Parametres > Communication > E-mail**
2. Cliquez sur **Connecter Outlook**
3. Autorisez via Microsoft OAuth
4. Les e-mails sont envoyes depuis votre adresse Outlook

## Modeles d'e-mail

Personnalisez les e-mails envoyes avec vos factures et rappels.

### Modele d'e-mail de facture

L'e-mail par defaut envoye lors de la livraison d'une facture. Personnalisez :

- **Objet** -- L'objet de l'e-mail (prend en charge les variables comme le numero de facture)
- **Corps** -- Le contenu du message
- **Langue** -- Definissez des modeles par langue

### Modele d'e-mail de rappel

L'e-mail envoye lors du suivi des factures en retard. Personnalisez les memes champs que ci-dessus mais avec un ton plus urgent.

### Apercu

Avant l'envoi, vous pouvez previsualiser n'importe quel e-mail pour voir exactement ce que votre client recevra :

- Rendu HTML avec votre image de marque
- Apercu de la piece jointe PDF
- Inclusion du lien de paiement

## Variables

Les modeles d'e-mail prennent en charge les variables dynamiques :

| Variable | Description |
|---|---|
| `{invoice_number}` | Le numero de facture |
| `{customer_name}` | Le nom du client |
| `{amount}` | Le montant total de la facture |
| `{due_date}` | La date d'echeance du paiement |
| `{company_name}` | Le nom de votre entreprise |
| `{payment_link}` | Le lien vers le paiement en ligne |

## Notifications

Configurez les notifications par e-mail que vous recevez :

- **Facture payee** -- Recevez une notification lorsqu'un client paie
- **Demande de devis recue** -- Alerte pour les nouvelles demandes de devis
- **Activite de l'equipe** -- Mises a jour sur les actions des membres de l'equipe

Les preferences de notification peuvent etre definies dans votre [Profil](/fr/account/profile).

## Conseils

- Connectez Gmail ou Outlook pour la meilleure delivrabilite
- Testez toujours votre modele d'e-mail avant d'envoyer votre premiere facture
- Configurez des modeles specifiques par langue si vous servez des clients dans plusieurs langues
- Utilisez le modele de rappel pour des relances professionnelles sur les factures en retard
