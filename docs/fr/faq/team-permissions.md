---
title: Permissions équipe
description: "Les permissions par page définissent ce qu'un membre de l'équipe ou votre comptable peut faire : Lire, Écrire et Créer."
last_verified: 2026-10-13
chatbot:
  triggers: ["team permissions", "manage team permissions", "page permissions", "read write create", "permission settings", "access control", "granular permissions", "read only", "write access", "create access", "pagina rechten", "teamrechten", "lezen schrijven", "toegang instellen", "seitenberechtigungen", "teamberechtigungen", "lese schreibzugriff", "permissions page", "permissions de l'équipe", "droits accès"]
  actions:
    - { label: "Open access settings", to: "/settings/toegang" }
  follow_up: ["How do I invite a new team member?", "How do I manage accountant access?", "How do I revoke someone's'access?"]
---

Les permissions par page définissent ce qu'un membre de l'équipe ou votre comptable peut faire sur chaque page de l'application :

| Permission | Autorise |
|---|---|
| **Lire** | Voir la page et les éléments qu'elle contient |
| **Écrire** | Modifier les éléments existants |
| **Créer** | Ajouter de nouveaux éléments |

Pour configurer l'accès :

1. Pour un membre de l'équipe : allez dans Paramètres › **Personnes ayant accès**, ouvrez le menu sur la ligne de cette personne et choisissez **Gérer l'accès**. Pour votre comptable : allez dans Paramètres › **Votre comptable** et cliquez sur **Paginatoegang** (accès aux pages, affiché en néerlandais)
2. Activez ou désactivez Lire, Écrire et Créer pour chaque page
3. Cliquez sur **Enregistrer**

La même fenêtre propose aussi des raccourcis :

- **Accès complet** active Lire, Écrire et Créer pour toutes les pages.
- **Accès en lecture seule** active Lire et désactive Écrire et Créer pour toutes les pages.
- **Tout révoquer** désactive tout.

Lire doit être activé pour qu'Écrire ou Créer fonctionnent. Désactiver Lire désactive aussi Écrire et Créer pour cette page.

Les pages de la fenêtre sont Tableau de bord, Tâches, Boîte de réception, Factures, Dépenses, Clients, Projets, Objets / Actifs, Contrats, Documents, Newsletters, Rapports, Suivi du temps, Impôts (TVA) et Paramètres. Les paiements n'ont pas de ligne propre : ils relèvent de **Factures**. Les trajets derrière l'indemnité kilométrique se trouvent dans le Suivi du temps et demandent Lire sur cette page. Les itinéraires enregistrés et les suggestions de trajet d'une dépense de transport public s'ouvrent avec Lire sur Suivi du temps ou Dépenses.

Le même droit protège les endroits de l'application où vous créez une facture ou un devis ailleurs, comme l'action **Créer une facture** sur une ligne d'heures, dans un rendez-vous, parmi les clients à proximité ou sur une page de projet ou de contrat. Ils demandent le droit sur **Factures**, et sans ce droit l'action reste masquée au lieu d'aboutir à une erreur. Activer la facturation automatique demande Écrire sur Factures, tout comme lancer un mandat de prélèvement. Les listes soumises à Lire se comportent de la même façon : la liste des transactions de la page TVA ignore les lignes de factures et de dépenses pour lesquelles le membre n'a pas Lire, l'archive de documents n'affiche les reçus, factures et pièces jointes d'e-mails qu'aux membres ayant le droit correspondant, et les pièces protégées restent hors de l'archive pour le comptable.

Créer ne concerne que les nouveaux éléments. Un membre qui a Créer sans Écrire peut ajouter de nouveaux éléments, mais ne peut pas modifier les éléments existants, changer un statut, utiliser les actions groupées ni confirmer des reçus scannés en nouvelles dépenses.

Les pages sans Lire restent hors de portée du membre : la Comptabilité n'affiche que les onglets qu'il peut ouvrir, et un lien direct vers une page sans accès affiche une courte note indiquant qu'il n'a pas accès à cette partie de l'application. Le tableau de bord n'en dit rien, car chaque membre y arrive à la connexion.
