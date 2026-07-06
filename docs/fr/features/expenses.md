---
title: Dépenses
---

# Dépenses

Suivez vos dépenses professionnelles, numérisez vos reçus et laissez MyCompanyDesk gérer les valeurs de TVA par défaut et l'amortissement des achats plus importants.

## Vue d'ensemble

La page des dépenses répertorie chaque dépense enregistrée. Utilisez le champ de recherche et le menu de filtres pour affiner la liste par catégorie, statut de facturation (facturée ou non facturée) et plage de dates, et basculez entre les vues **Actives**, **Archive** et **Corbeille**. Les cartes au-dessus de la liste servent aussi de filtres rapides : cliquez sur la carte des dépenses impayées pour n'afficher que celles-ci, ou sur la carte des dépenses sans catégorie pour voir celles qui en attendent encore une. Des liens depuis la page TVA et la page des factures peuvent aussi ouvrir la liste préfiltrée, par exemple sur les dépenses sans reçu, sans montant de TVA, ou sur les coûts que vous pouvez encore facturer à un client. Chaque filtre appliqué apparaît sous forme de puce que vous retirez d'un clic.

Les dépenses arrivées par votre [flux bancaire](/fr/features/bank) portent une petite icône banque, pour toujours les distinguer des saisies manuelles.

Cliquez sur une dépense pour ouvrir sa page de détail, ou cliquez sur **Ajouter** pour en enregistrer une manuellement. La roue dentée en haut de la page ouvre les réglages des dépenses.

## Catégories

MyCompanyDesk est livré avec six catégories standard qui correspondent directement à la déclaration fiscale néerlandaise :

- **Algemene kosten**
- **Kantoorkosten**
- **Autokosten & reizen**
- **Telefoon & internet**
- **Representatiekosten**
- **Inkoop & materiaal**

Vous pouvez y ajouter vos propres catégories. Ouvrez la roue dentée sur la page des dépenses, allez dans **Catégories de dépenses** et lancez l'assistant de catégories : choisissez votre secteur et il vous propose un jeu adapté, affiné si vous le souhaitez par une courte description de votre activité.

Chaque catégorie porte ses propres valeurs par défaut : un traitement de TVA, un pourcentage déductible pour les coûts partiellement déductibles, un taux de TVA suggéré et, en option, un marquage automatique en investissement avec une durée d'amortissement par défaut. Ces valeurs remplissent le formulaire dès que vous choisissez la catégorie. Vous pouvez modifier ou archiver les catégories à tout moment ; les six catégories standard peuvent être renommées mais pas supprimées.

## Créer une dépense

### Saisie manuelle

1. Allez dans **Dépenses** et cliquez sur **Ajouter**.
2. Saisissez le nom du **fournisseur**. L'autocomplétion suggère les fournisseurs que vous avez déjà utilisés.
3. Choisissez une **catégorie**. Son traitement de TVA, son taux de TVA suggéré et son pourcentage déductible sont remplis pour vous. Si vous avez défini une catégorie par défaut dans les réglages des dépenses, elle est présélectionnée.
4. Renseignez la **description**, le **montant hors TVA**, le **taux de TVA** et la **date**. Le montant de TVA est calculé automatiquement ; vous pouvez aussi saisir le montant TTC et laisser le formulaire déduire le reste.
5. Ajustez si besoin le **traitement de TVA**, liez un **client** ou un **projet**, et ajoutez une **référence**, des **notes** ou un autre **mode de paiement**.
6. Cliquez sur **Enregistrer**.

Le formulaire n'a pas de champ pour le reçu. Après l'enregistrement, la page de détail vous invite à y téléverser le reçu, en image ou en PDF.

### Générer à partir du fournisseur

Une fois le nom du fournisseur saisi, le bouton **Générer** (icône étincelles, en haut à droite) suggère les champs restants : description, catégorie, traitement de TVA, montant et date. Vérifiez le résultat avant d'enregistrer ; c'est un coup de pouce, pas un pilote automatique.

### Depuis les transactions bancaires

Lorsque votre [flux bancaire](/fr/features/bank) est connecté, les transactions sortantes peuvent être transformées en dépenses. Chacune reprend la contrepartie comme fournisseur, le montant et la date comptable, et vous les vérifiez avant qu'elles n'entrent dans votre comptabilité. Voir [vérifier les dépenses importées automatiquement](/fr/features/bank#verifier-les-depenses-importees-automatiquement) pour le parcours complet.

### Numérisation de reçus

Pour les reçus en image ou en PDF :

1. Allez dans **Dépenses > Numériser un reçu**.
2. Téléversez un fichier JPEG, PNG, WebP ou PDF.
3. Vérifiez le fournisseur, la date, le montant, la TVA et la catégorie extraits.
4. Confirmez pour créer la ou les dépenses.

Sous les **réglages avancés**, vous pouvez choisir entre **Total unique** (une seule dépense pour tout le reçu) et **Plusieurs lignes** (découper le document en dépenses séparées), limiter un PDF à certaines pages, et joindre le fichier numérisé comme reçu à chaque dépense créée.

La numérisation de reçus est disponible sur tous les plans, avec un quota mensuel par plan : 3 numérisations sur Free, 30 sur Starter et 200 sur Pro.

## Traitement de TVA

Chaque dépense a un traitement de TVA qui détermine comment elle apparaît sur votre déclaration de TVA :

| Traitement | Signification |
|---|---|
| **Standard** | Le fournisseur facture la TVA néerlandaise. C'est le réglage par défaut. |
| **Autoliquidation** | La TVA est reportée sur vous (verleggingsregeling), typique des achats B2B au sein de l'UE. Le fournisseur facture à 0 % et vous déclarez la TVA vous-même. |
| **Exonéré** | L'achat est exonéré de TVA : rien à déduire. |
| **TVA étrangère facturée** | Un fournisseur étranger vous a facturé sa TVA locale. Elle n'est pas déductible sur votre déclaration néerlandaise. |

Le traitement est hérité de la catégorie. Modifiez-le sur la dépense elle-même quand la réalité diffère, par exemple un achat de logiciel auprès d'un fournisseur américain qui a facturé de la TVA au lieu d'appliquer l'autoliquidation habituelle.

## Investissements et amortissement

Les achats plus importants (un ordinateur portable, des machines, du mobilier) ne sont généralement pas comptabilisés en charge en une fois mais amortis sur plusieurs années. MyCompanyDesk gère cela par dépense :

- Le formulaire comporte un interrupteur **Investissement (amortir)**. Activez-le pour comptabiliser la dépense en investissement.
- À partir de 450 euros hors TVA, le formulaire vous le suggère de lui-même, avec un bouton **Comptabiliser en investissement** en un clic. Les catégories peuvent aussi marquer les investissements automatiquement.
- Choisissez la durée d'amortissement dans le champ **Amortir sur (années)**, de 1 à 10 ans. Ce choix prime sur la valeur par défaut de la catégorie ; si la catégorie n'en a pas, 5 ans est utilisé.
- Un aperçu en direct montre approximativement le montant de l'amortissement mensuel.

Vous récupérez la TVA en totalité dans le trimestre de l'achat ; seul le montant hors TVA est étalé sur la durée choisie. Les lignes d'amortissement mensuelles alimentent automatiquement vos rapports. Si vous modifiez plus tard le montant, la date ou la durée, l'échéancier est recalculé.

## Lier les dépenses

Liez les dépenses à :

- des **projets** pour suivre les coûts par projet ;
- des **clients** pour associer des achats à un client, par exemple des coûts que vous voulez refacturer ;
- des **fournisseurs** sous forme de nom libre ; les fournisseurs déjà utilisés ressortent dans l'autocomplétion.

## Actions groupées

Sélectionnez plusieurs dépenses pour les traiter en une fois. Dans la liste active, vous pouvez choisir **Marquer comme payées** (quand toutes les dépenses sélectionnées sont impayées), **Archiver** ou **Supprimer**. La vue Archive propose la restauration vers les actives ou le déplacement vers la corbeille ; la vue Corbeille propose la restauration vers l'archive ou la suppression définitive.

## Dépenses récurrentes

Pour les coûts prévisibles (loyer, abonnements, hébergement), configurez des [dépenses récurrentes](/fr/features/recurring-expenses) qui créent les enregistrements au rythme voulu.

## Import

Importez vos dépenses historiques depuis un CSV via **Profil > Import**. Faites correspondre vos colonnes aux champs de dépense, vérifiez l'aperçu et confirmez.

## Conseils

- Choisissez d'abord la bonne catégorie : le traitement de TVA, le pourcentage déductible et le marquage en investissement en découlent tous.
- Définissez votre catégorie et votre mode de paiement par défaut via la roue dentée sur la page des dépenses, et votre taux de TVA habituel sous **Réglages > BTW**, pour que le formulaire démarre prérempli.
- Si vous corrigez le traitement de TVA sur chaque dépense d'une catégorie, modifiez plutôt la valeur par défaut de la catégorie.
- Joignez toujours les reçus. Les contrôles préalables de la [page TVA](/fr/features/vat) signalent les reçus manquants avant votre déclaration.
