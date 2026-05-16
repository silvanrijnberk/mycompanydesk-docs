---
title: Flux bancaire
---

# Flux bancaire

Connectez vos comptes bancaires à MyCompanyDesk pour l'importation automatique des transactions, le rapprochement et des alertes en temps réel. Le flux bancaire maintient votre comptabilité à jour sans saisie manuelle.

## Connecter un compte bancaire

1. Allez dans **Espace de travail** → **Finances** → **Comptes bancaires**.
2. Cliquez sur **Connecter une banque** et choisissez votre établissement dans la liste.
3. Suivez les étapes d'autorisation dans la fenêtre contextuelle.
4. Une fois connecté, MyCompanyDesk récupère les transactions des 90 derniers jours et maintient le flux à jour avec des synchronisations automatiques périodiques.

Vous pouvez connecter plusieurs comptes de différentes banques. Chaque compte apparaît comme une connexion distincte avec son propre rythme de synchronisation et sa propre liste de transactions.

## Synchronisation des transactions

MyCompanyDesk synchronise les transactions de vos comptes connectés selon un calendrier automatique. Vous pouvez également déclencher une synchronisation manuelle à tout moment depuis la page des comptes bancaires. Les nouvelles transactions sont automatiquement rapprochées avec vos clients, factures et dépenses existants à l'aide de règles fournisseur et du rapprochement par IA. Les transactions rapprochées alimentent directement votre comptabilité ; les transactions non rapprochées apparaissent dans le flux bancaire pour examen manuel.

### Conversion automatique en dépenses

Lorsqu'une transaction bancaire est catégorisée (par une règle fournisseur, une catégorie par défaut ou le classificateur IA), MyCompanyDesk crée automatiquement une dépense provisoire dans votre comptabilité. La dépense est remplie avec :

- Le nom de la contrepartie comme fournisseur.
- Le montant absolu comme coût brut.
- Le taux de TVA par défaut de la catégorie (ou le taux suggéré par l'IA lorsqu'il est disponible).
- La clé de catégorie correspondant aux vraies catégories de dépenses de votre espace de travail.
- La date comptable de la transaction comme date de dépense.

La transaction est ensuite marquée comme rapprochée afin de ne pas créer de doublon lors de la prochaine synchronisation. La nouvelle dépense apparaît immédiatement dans votre liste de dépenses et alimente vos rapports et récapitulatifs de TVA.

La conversion s'effectue en deux passages : d'abord après l'application des règles fournisseur et des catégories par défaut (synchrone, pendant la synchronisation) ; ensuite après que le classificateur IA a terminé (asynchrone). Dans les deux cas, la dépense créée utilise les catégories de dépenses réelles de votre espace de travail et leurs traitements de TVA par défaut, afin que les montants restent cohérents avec vos saisies manuelles.

Seules les transactions sortantes (montant inférieur à zéro) sont converties en dépenses. Les paiements entrants ne sont pas transformés en dépenses. Si votre espace de travail n'a pas encore de catégories de dépenses configurées, cette étape est sautée et les transactions attendent un examen manuel.

### Examiner les dépenses importées automatiquement

Lorsque des dépenses provisoires sont créées à partir de transactions bancaires, elles atterrissent d'abord dans la boîte de réception d'examen. Allez dans **Espace de travail** → **Finances** → **Comptes bancaires** et ouvrez l'onglet **Examiner**. Vous verrez une liste de dépenses provisoires, chacune affichant le fournisseur, le montant, la suggestion de catégorie et la source de cette suggestion (règle fournisseur, catégorie par défaut, suggestion IA ou flux bancaire).

Pour chaque dépense, vous pouvez :

- **Confirmer**: La dépense est directement comptabilisée. Elle apparaît dans votre liste de dépenses actives et alimente les rapports et récapitulatifs de TVA.
- **Modifier**: Ouvrez le formulaire de dépense pour ajuster la catégorie, le traitement de TVA, la description ou le montant avant de comptabiliser.
- **Rejeter**: Le brouillon est abandonné. La transaction retourne dans la file d'attente non rapprochée du flux bancaire.

L'étape d'examen garantit que vous gardez le contrôle : aucune dépense n'entre dans votre comptabilité sans que quelqu'un ne l'ait vérifiée. Les dépenses confirmées affichent brièvement une notification avec le nom du fournisseur ; les dépenses rejetées montrent le rejet. Si une action échoue, un message apparaît et vous pouvez réessayer.

Chaque fiche de dépense affiche une étiquette de source pour que vous sachiez pourquoi MyCompanyDesk a fait cette suggestion particulière. Les sources possibles sont `vendor_rule`, `workspace_default`, `ai_flag` et `feed`, le même pipeline de catégorisation décrit ci-dessus.

### Échecs de synchronisation

Si une synchronisation échoue (par exemple parce que l'autorisation bancaire a expiré ou que la connexion a été interrompue), MyCompanyDesk vous envoie un e-mail et une notification in-app avec le nom de la connexion et un lien pour résoudre le problème. Vous pouvez également activer les notifications push pour les erreurs de synchronisation dans les préférences de notification.

## Notifications

Le flux bancaire prend en charge quatre préférences de notification, configurables par espace de travail depuis la page des comptes bancaires :

| Préférence | Effet |
|---|---|
| **Alertes d'erreur de synchronisation** | E-mail et notification in-app lorsqu'une connexion bancaire ne peut pas se synchroniser. |
| **Alertes de transactions importantes** | Notification push et in-app lorsqu'une transaction dépasse un seuil que vous définissez (par exemple 5 000 €). |
| **Résumé hebdomadaire** | Un e-mail le lundi matin récapitulant les transactions importées de la semaine, les éléments non rapprochés et les trois principaux fournisseurs catégorisés automatiquement. |
| **Demandes de justificatifs** | Un balayage quotidien automatique qui envoie un e-mail à vos fournisseurs pour demander les justificatifs manquants sur les transactions sortantes non rapprochées. |

Toutes les notifications fonctionnent en mode best-effort : elles ne bloquent ni n'interrompent jamais une synchronisation. Vous pouvez activer ou désactiver chaque notification indépendamment.

### Seuil de transactions importantes

Définissez un montant en euros dans les paramètres des comptes bancaires. Toute transaction entrante ou sortante dont le montant absolu atteint ou dépasse ce seuil déclenche une notification push et une alerte in-app. C'est utile pour repérer rapidement les paiements importants ou les débits imprévus.

### Résumé hebdomadaire

Chaque lundi à 08h00 (heure locale de l'espace de travail), MyCompanyDesk vous envoie un court e-mail récapitulant l'activité du flux bancaire des sept derniers jours :

- Nombre de nouvelles transactions importées.
- Nombre de transactions sortantes non rapprochées en attente de justificatif.
- Les trois principaux fournisseurs catégorisés automatiquement.

S'il n'y a pas eu d'activité cette semaine-là, le résumé n'est pas envoyé. Le résumé respecte le paramètre de notification de votre espace de travail et n'est envoyé que si `notify_weekly_summary` est activé.

### Demandes de justificatifs aux fournisseurs

Lorsque cette option est activée, MyCompanyDesk effectue un balayage quotidien à 06h00 heure locale. Pour chaque espace de travail avec `ask_receipt_email` activé, le système recherche les transactions sortantes non rapprochées des 30 derniers jours dont la contrepartie correspond à un client ayant une adresse e-mail enregistrée. Il envoie à chaque fournisseur un e-mail regroupé listant toutes les transactions pour lesquelles un justificatif est nécessaire, puis marque ces transactions afin que le même fournisseur ne soit pas sollicité à nouveau.

## Gérer les règles fournisseur

Les règles fournisseur vous permettent d'apprendre à MyCompanyDesk comment catégoriser les transactions récurrentes :

- Créez une règle à partir de n'importe quelle transaction en cliquant sur **Créer une règle** dans le flux bancaire.
- Les règles correspondent sur le nom de la contrepartie, la description ou les motifs de montant.
- Les transactions rapprochées sont automatiquement liées au bon client, à la bonne facture ou dépense.
- Le résumé hebdomadaire met en avant vos règles les plus performantes.

Les règles que vous créez sont propres à l'espace de travail et s'appliquent à tous les comptes bancaires connectés.

## Dépannage

**Ma connexion bancaire affiche une erreur.** Ouvrez la page des paramètres des comptes bancaires. Si votre banque nécessite une nouvelle autorisation, vous verrez une invite pour vous reconnecter. Les notifications d'erreur de synchronisation contiennent également un lien direct.

**Une transaction n'a pas été rapprochée.** Consultez la transaction dans le flux bancaire sous le filtre « non rapproché ». Vous pouvez la rapprocher manuellement, créer un nouveau client ou une nouvelle dépense à partir de celle-ci, ou créer une règle fournisseur pour qu'elle soit automatiquement rapprochée à l'avenir.

**Je ne reçois pas de notifications.** Vérifiez les interrupteurs de notification sur la page des paramètres des comptes bancaires. Pour les notifications push, assurez-vous que les notifications push sont activées dans votre profil de compte. Pour le résumé hebdomadaire, vérifiez que `notify_weekly_summary` est activé et qu'il y a bien eu une activité bancaire cette semaine-là.
