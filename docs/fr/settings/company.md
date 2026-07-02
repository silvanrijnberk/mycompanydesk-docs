---
title: "Paramètres de l'entreprise"
last_verified: 2026-07-02
---

# Paramètres de l'entreprise

Tout ce qui détermine l'image de votre entreprise vers l'extérieur : le nom sur vos factures, votre logo et votre couleur de marque, ainsi que votre site web public.

## Où le trouver

Ouvrez **Paramètres** depuis le menu, ou allez sur `/settings`. Les sujets liés à l'entreprise sont des lignes du groupe **Votre entreprise** (dans l'application : « Je bedrijf ») :

- **Données de l'entreprise** (Bedrijfsgegevens) sur `/settings/bedrijfsgegevens` : informations de l'entreprise, adresse, numéro KVK, numéro de TVA
- **Logo et couleur** (Logo en kleur) sur `/settings/uiterlijk` : logo, couleur de marque, style des documents
- **Mise en page des factures** (Factuurontwerp) sur `/settings/factuurontwerp` : le studio de design de vos factures, décrit sur [Personnalisation PDF](/fr/settings/pdf)

Les anciens liens vers les précédents paramètres de l'espace de travail redirigent automatiquement vers les nouvelles pages.

## Données de l'entreprise (Bedrijfsgegevens)

Chemin : `/settings/bedrijfsgegevens`

Le formulaire d'identité. Ce que chaque facture, devis et e-mail affiche.

- **Nom de l'entreprise** : apparaît sur chaque document
- **Adresse** : rue, code postal, ville, pays (avec autocomplétion d'adresse)
- **Immatriculation** : numéro KVK ou autre numéro d'immatriculation. Le bouton **Mettre à jour depuis KVK** récupère les dernières données du registre du commerce néerlandais et remplit les champs vides (nom de l'entreprise, adresse, code postal, ville, pays). Les valeurs que vous avez déjà saisies restent inchangées. Chaque espace de travail dispose de 100 recherches KVK gratuites par jour (les résultats mis en cache ne comptent pas dans la limite). Lorsqu'il reste 20 recherches ou moins, l'indication du champ affiche un compteur du nombre restant. Si la limite quotidienne est atteinte, vous pouvez saisir les données manuellement ou réessayer demain.
- **Numéro de TVA** : votre identifiant TVA (par ex. `NL123456789B01`)
- **Contact** : adresse e-mail publique, téléphone, e-mail de support
- **Site web + réseaux sociaux** : utilisés dans la signature e-mail, sur votre page d'entreprise et dans les pieds de page

Les modifications sont enregistrées automatiquement.

## Logo et couleur (Logo en kleur)

Chemin : `/settings/uiterlijk`

L'identité visuelle de vos factures, devis et e-mails sortants, avec un aperçu en direct du résultat.

- **Téléversement du logo** : utilisé sur chaque PDF et dans l'en-tête des e-mails
- **Couleur de marque** : une couleur d'accent pour tous vos documents et votre page d'entreprise publique
- **Styles prédéfinis** : choisissez un style de document, disponible à partir de Starter
- **Pied de page PDF** : le texte de pied de page en bas de vos documents

Il y a un seul style et une seule couleur de marque pour tous les types de documents ; la deuxième couleur d'accent n'existe plus. Pour un contrôle complet de la mise en page, des couleurs et de la police de vos factures et devis, ouvrez la ligne **Mise en page des factures** (le studio de design) ; voir [Personnalisation PDF](/fr/settings/pdf).

## Votre site web

Votre page d'entreprise publique se gère dans la section **Site web** au niveau principal de la navigation, et non dans les Paramètres. Elle a ses propres pages : **Pages**, **Style**, **Domaine & SEO** et **Intégrations**.

- Le site web est disponible à partir du plan Starter.
- Connecter votre propre domaine, à la place du sous-domaine par défaut sur `mycompanydesk.com`, nécessite Pro. Les enregistrements DNS, SPF et DKIM sont gérés pour vous ; ils se trouvent derrière une section avancée que la plupart des utilisateurs n'ont jamais besoin d'ouvrir.

## Voir aussi

- [Personnalisation PDF](/fr/settings/pdf) pour le studio de design Mise en page des factures
- [Abonnement et paiements](/fr/settings/billing) pour débloquer un domaine personnalisé
- [Configuration e-mail](/fr/settings/email) pour envoyer depuis votre propre domaine
- L'assistant de configuration sur `/setup` guide les nouveaux espaces de travail à travers ces paramètres en une seule fois
