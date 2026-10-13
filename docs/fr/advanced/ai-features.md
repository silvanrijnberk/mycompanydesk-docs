---
title: Fonctionnalités IA
description: "Toutes les fonctions IA de MyCompanyDesk, ce qu'elles font, ce qu'incluent Desk et Office, et comment Google Gemini garde vos données dans l'UE."
---

# Fonctionnalités IA

MyCompanyDesk utilise l'IA à quelques endroits pour vous faire gagner du temps : un assistant qui réfléchit avec vous, des reçus qui se remplissent tout seuls et des suggestions de catégories et de lignes de facture. Cette page présente chaque fonction IA, ce qu'elle fait et l'offre à laquelle elle appartient.

Toutes les fonctions IA tournent sur Google Gemini via Vertex AI de Google Cloud, dans des centres de données situés dans l'UE. Il n'y a pas de second fournisseur d'IA.

## Assistant

L'icône de l'assistant, en haut de l'écran, ouvre un panneau de discussion. Sur ordinateur, il glisse depuis la droite ; sur téléphone, il s'ouvre par le bas. L'assistant dont vous disposez dépend de votre offre :

- **Desk : Desky.** Un guide de l'application. Desky sait sur quelle page vous êtes et vous aide pour des questions comme « où trouver… » et « comment faire… ».
- **Office : Assistant Financier.** Un assistant qui travaille avec vos propres chiffres. Demandez par exemple ce qui reste à encaisser, où en est votre TVA ou quel client rapporte le plus, et faites-lui préparer un devis ou une facture. Vous le vérifiez vous-même avant de l'enregistrer.

### Limite de messages

| Offre | Messages à l'assistant par mois |
|---|---|
| Desk | 10 |
| Office | 1 000 |

Une fois la limite atteinte avec Desk, vous recevez encore des réponses tirées des questions fréquentes. Les limites IA sont mensuelles, pas quotidiennes, et repartent à zéro le premier du mois.

### Demander à un humain

En bas de la conversation, le bloc **Vous êtes bloqué ?** peut apparaître : les personnes qui répondent en ce moment aux questions, avec leur nom et leur photo, à côté d'un bouton WhatsApp. Dans Desky, il apparaît après la première réponse complète. L'Assistant Financier d'Office est une discussion sur vos propres chiffres, pas un service d'assistance : le bloc y apparaît dès que la conversation devient une demande d'aide, que l'assistant se bloque ou que vous demandez vous-même à parler à quelqu'un. Tapez par exemple « service client » ou « une vraie personne », et le bloc s'affiche aussitôt.

Cliquez sur une personne (**Demander à** suivi de son nom) et un court formulaire s'ouvre : votre question, plus la case **Joindre ma conversation avec l'assistant**, déjà cochée. L'envoi transforme votre question en ticket d'assistance. La réponse arrive dans l'application et par e-mail, sous un jour ouvré et le plus souvent en quelques heures. Le bouton WhatsApp ouvre une discussion où une courte présentation est déjà prête : qui vous êtes, la page concernée et la question elle-même.

### Vous parlez à une IA

L'assistant indique toujours que vous parlez à une IA, comme l'exige le règlement européen sur l'IA (article 50). Une étiquette figure à côté de son nom, et une conversation vide affiche la phrase « Les réponses sont indicatives et peuvent contenir des erreurs. » Vérifiez donc toujours vous-même les conclusions financières et fiscales.

## Suggestions IA

L'interrupteur **Suggestions IA**, dans **Paramètres › Modules**, permet à l'IA de vous aider dans votre comptabilité. Cet interrupteur fait partie d'Office et est désactivé par défaut.

- **Catégorie et TVA des dépenses.** Quand vous saisissez une description ou un fournisseur, MyCompanyDesk propose une catégorie et un taux de TVA.
- **Améliorer.** Sur une dépense, le bouton **Améliorer** propose une description plus claire et de meilleures valeurs de champ. Vous voyez la valeur actuelle et la valeur proposée côte à côte, et choisissez **Appliquer** ou **Ignorer** pour chaque champ.
- **Créer les lignes.** Dans un devis ou une facture, décrivez avec vos mots ce que vous allez faire ou avez fait. **Créer les lignes** remplit les lignes et les prix pour vous, à partir de votre propre offre, de vos factures précédentes ou de votre taux horaire. Vous les ajustez ensuite comme d'habitude.

Appliquer fonctionne exactement comme une modification manuelle. Une dépense dans la corbeille, une période de TVA verrouillée ou une catégorie archivée bloque la modification, comme pour une saisie manuelle, et la modification est consignée dans le journal. La TVA, les rapports et le tableau de bord affichent immédiatement la nouvelle valeur.

Quand une demande de devis arrive via votre site web, l'IA prépare déjà un brouillon de devis, avec des lignes et des prix estimés. Cela fonctionne aussi avec Desk, sans l'interrupteur. Le brouillon n'a pas de numéro et n'est pas envoyé : c'est vous qui le relisez.

Toutes ces suggestions comptent dans la limite mensuelle : 10 suggestions IA avec Desk et 2 000 avec Office.

## Numérisation des reçus

Prenez un reçu en photo ou téléversez un PDF : la date, le montant, le fournisseur, le taux de TVA et la description sont remplis pour vous. La numérisation des reçus est incluse dans toutes les offres : 3 scans par mois avec Desk, 200 avec Office.

Consultez [Numérisation de reçus](/fr/advanced/receipt-scanning) pour les étapes.

## Correction des fautes de frappe

La **Vérification orthographique et grammaticale** (un interrupteur dans **Paramètres › Modules**) contrôle les champs de texte de vos formulaires pendant la saisie et repère les fautes de frappe, en néerlandais, anglais, allemand et français. Elle ne vérifie pas la grammaire. Ce contrôle tourne sur les propres serveurs de MyCompanyDesk, sans fournisseur d'IA, et fait partie d'Office.

## Synthèse du tableau de bord (Office)

Avec Office, le haut de votre tableau de bord affiche une courte synthèse, rédigée par l'IA à partir de vos propres chiffres : ce qui compte le plus maintenant, un ou deux points complémentaires et une prochaine étape concrète, comme « envoie aujourd'hui une relance à Atelier Norden ». La synthèse est créée une fois par jour, dans votre langue. Les montants sont arrondis à l'euro près avant d'être transmis au modèle. Si la création échoue, vous voyez le résumé habituel du tableau de bord. Les chiffres eux-mêmes sont disponibles dans toutes les offres ; seul le texte IA fait partie d'Office.

Avec Office, vous recevez aussi un court commentaire IA dans vos rapports et dans le récapitulatif mensuel envoyé par e-mail au début de chaque mois.

## Aide à la réponse dans la boîte de réception (Office)

Dans la boîte de réception, l'IA peut rédiger pour vous la réponse à l'e-mail d'un client. Vous pouvez lui faire écrire une nouvelle réponse, éventuellement avec une courte consigne, ou lui faire peaufiner votre propre brouillon sans en changer le sens ni la langue.

- La réponse est rédigée dans la langue du dernier e-mail reçu, à la première personne, et signée de votre nom.
- Seuls les e-mails réellement reçus et les réponses réellement envoyées sont pris en compte. Les brouillons et les envois échoués ne le sont pas.
- Quand l'IA ignore un détail, elle laisse un espace réservé comme `[date]` au lieu d'inventer.
- Rien n'est envoyé automatiquement. Vous relisez et modifiez d'abord la réponse vous-même.
- Pour un e-mail signalé comme suspect, l'aide à la réponse n'est pas disponible.

## Ce que comprend chaque offre

| Fonction | Desk | Office |
|---|---|---|
| Assistant | Desky, le guide de l'application : 10 messages par mois | Assistant Financier avec vos propres chiffres : 1 000 messages par mois |
| Suggestions IA (catégorie, TVA, Améliorer, Créer les lignes) | Non | Oui |
| Brouillon de devis pour une demande reçue via votre site web | Oui | Oui |
| Numérisation des reçus | 3 par mois | 200 par mois |
| Correction des fautes de frappe | Non | Oui |
| Synthèse du tableau de bord et commentaire IA des rapports | Non | Oui |
| Aide à la réponse dans la boîte de réception | Non | Oui |

Les limites mensuelles en un coup d'œil :

| Limite par mois | Desk | Office |
|---|---|---|
| Messages à l'assistant | 10 | 1 000 |
| Scans de reçus | 3 | 200 |
| Suggestions IA | 10 | 2 000 |

## Confidentialité et protection des données

Toutes les fonctions IA tournent sur Google Gemini via Vertex AI, dans des régions européennes de Google Cloud. MyCompanyDesk a signé pour cela un accord de traitement des données avec Google Cloud. Il n'y a ni second fournisseur d'IA ni solution de repli hors de l'UE : si une requête IA échoue, vous recevez un message ou vous remplissez les informations vous-même.

## Conseils

- Activez les suggestions IA une fois, elles travaillent ensuite automatiquement avec vous.
- La numérisation des reçus est particulièrement pratique pour les reçus papier : prenez simplement une photo.
- Desky répond à la plupart des questions « comment faire… » sur l'application.
