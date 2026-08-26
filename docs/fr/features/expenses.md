---
title: Dépenses
description: "Suivez vos dépenses, scannez vos reçus, gérez des catégories avec leur propre TVA et laissez les amortissements se dérouler automatiquement."
last_verified: 2026-08-21
---

# Dépenses

Suivez toutes vos dépenses professionnelles, numérisez des reçus avec l'IA et catégorisez les coûts pour une comptabilité précise et la déclaration de TVA.

## Vue d'ensemble

La page des dépenses répertorie toutes vos dépenses enregistrées. Les onglets de statut de paiement dans la barre supérieure permettent de basculer rapidement entre :

- **Toutes** : toutes les dépenses enregistrées
- **Impayées** : dépenses non encore payées
- **Payées** : dépenses déjà payées

Les dépenses encore en attente de confirmation — les brouillons du flux bancaire ou de la boîte de réception qui ne sont pas encore comptabilisés — affichent un badge d'avertissement au lieu de payé/non payé, sont teintées avec une bordure pointillée pour ne pas ressembler à des dépenses confirmées, et ne peuvent pas être sélectionnées pour les actions en masse tant qu'elles ne sont pas comptabilisées.

Vous pouvez toujours filtrer par catégorie, projet, plage de dates ou statut. Cliquez sur une dépense pour ouvrir la page de détail; cliquez sur **Nouvelle** pour en ajouter une manuellement, ou **Numériser un reçu** pour en extraire une à partir d'une image ou d'un PDF.

## Créer une dépense

### Saisie manuelle

1. Allez dans **Dépenses > Nouvelle dépense**
2. Remplissez :
   - **Description** -- L'objet de la dépense
   - **Montant** -- Coût total (TTC ou HT)
   - **Date** -- Date de la dépense
   - **Catégorie** -- Sélectionnez parmi les catégories prédéfinies. Si vous avez défini une catégorie de dépense par défaut dans les paramètres de l'espace de travail, elle est déjà pré-remplie ici.
   - **Taux de TVA** -- Pre-rempli avec le taux de TVA par defaut pour les depenses de votre espace de travail (configurable dans les parametres de l'espace de travail). Vous pouvez toujours le modifier par depense.
   - **Mode de paiement** -- Pre-rempli avec le mode de paiement par defaut pour les depenses de votre espace de travail, s'il est defini.
3. Joignez optionnellement une image ou un PDF de **reçu**
4. Liez optionnellement à un **projet** ou un **client**
5. Cliquez sur **Enregistrer**

### Ajout rapide

Utilisez le tiroir d'ajout rapide pour une saisie rapide de dépenses :

1. Cliquez sur le bouton d'ajout rapide dans la liste des dépenses
2. Entrez le montant et la description
3. Sélectionnez une catégorie rapide
4. Enregistrez

### A partir d'un modele

Lors de la creation d'une nouvelle depense, cliquez sur **Demarrer a partir du modele** (affiche uniquement si vous avez des modeles de depense enregistres). Choisissez un modele et le formulaire se remplit directement avec le fournisseur, la categorie, le montant et les autres donnees enregistrees. Ajustez selon vos besoins, puis cliquez sur **Enregistrer**.

### Depuis les transactions bancaires

Lorsque votre [flux bancaire](/fr/features/bank) est connecté, les transactions sortantes catégorisées sont automatiquement converties en dépenses provisoires. Chaque dépense reçoit la contrepartie comme fournisseur, le montant absolu comme brut, le taux de TVA et le traitement par défaut de la catégorie, et la date comptable de la transaction. Les dépenses provisoires apparaissent d'abord dans la boîte de réception d'examen du flux bancaire, où vous pouvez les confirmer, les modifier ou les rejeter avant qu'elles n'entrent dans votre comptabilité. Voir [examiner les dépenses importées automatiquement](/fr/features/bank#examiner-les-depenses-importees-automatiquement) pour le workflow complet.

### Numérisation de reçus

Laissez l'IA extraire automatiquement les détails de vos reçus :

1. Allez dans **Dépenses > Numériser un reçu**
2. Téléchargez une image de reçu (JPEG, PNG, WebP) ou un PDF
3. Choisissez le mode d'extraction :
   - **Simple** -- Une dépense à partir du reçu
   - **Multiple** -- Plusieurs lignes à partir d'un seul reçu
4. Vérifiez les données extraites (date, montant, fournisseur, description)
5. Confirmez pour créer la ou les dépenses

::: info
La numerisation de recus necessite le plan **Pro** ou superieur. Le taux de TVA d'une nouvelle depense commence par votre reglage d'espace de travail par defaut.
:::

Si un e-mail transféré ou un scan crée une dépense mais que le reçu ne peut pas être joint (par exemple un type de fichier non pris en charge ou un fichier trop volumineux), la dépense est quand même créée et un message indique que la pièce jointe est manquante. Ajoutez ensuite le reçu manuellement sur la page de détail de la dépense.

### Périodes de TVA verrouillées

Si un message de la boîte de réception est converti en une dépense dont la date tombe dans une période de TVA déjà déclarée, l'enregistrement automatique est refusé pour protéger la déclaration déposée. Au lieu de supprimer silencieusement la facture, MyCompanyDesk crée une notification `inbox_expense_period_locked` qui indique le fournisseur et la date de la facture, et précise que la période de TVA est verrouillée. La notification renvoie vers la liste de la boîte de réception, afin que vous puissiez y retrouver la facture transmise. Vous avez ensuite les deux mêmes options que pour les autres cas de période verrouillée : enregistrer la dépense manuellement avec une date dans la période ouverte en cours, ou déposer une déclaration complémentaire pour la période verrouillée.

Le tiroir de saisie rapide affiche le meme indicateur de periode de TVA a cote du champ de date avant l'enregistrement, afin qu'une periode verrouillee ou en tolerance soit visible avant que le serveur refuse l'ecriture.

## Logos fournisseurs

Lorsqu'un fournisseur a un logo connu, MyCompanyDesk l'affiche à côté du nom du fournisseur dans la liste des dépenses et dans l'autocomplétion fournisseur lorsque vous créez ou modifiez une dépense. Le logo provient du registre KVK pour les entreprises néerlandaises ou d'une liste organisée de marques courantes. Si aucun logo n'est disponible, l'application affiche un monogramme.

## Catégories de dépenses

MyCompanyDesk propose des catégories prédéfinies avec des icônes pour une sélection rapide :

- Fournitures de bureau
- Déplacements et transports
- Restauration et boissons
- Logiciels et abonnements
- Équipement
- Services professionnels
- Marketing et publicité
- Assurance
- Loyer et charges
- Et bien d'autres...

Les catégories aident à organiser vos dépenses et sont utilisées dans les rapports pour les ventilations de coûts.

## Gestion de la TVA

Chaque dépense peut avoir son propre taux de TVA. Options courantes :

- **21 %** -- Taux normal
- **9 %** -- Taux réduit
- **0 %** -- Taux zéro ou exonéré

Le montant de TVA est calculé automatiquement et inclus dans vos [rapports de TVA](/fr/features/vat).

### Traitement de la TVA

Dans des cas particuliers, vous définissez le traitement de la TVA de la dépense :

- **Standard**: TVA nationale.
- **Autoliquidation (UE)**: vous déclarez vous-même la TVA sur un achat B2B intra-UE, rubrique 4b.
- **Autoliquidation (hors UE)**: un fournisseur hors UE facture 0 % de TVA (sources/vat-rates.yaml#countries.NL.zero), vous la déclarez vous-même en rubrique 4a. Utilisez cela par exemple pour un fournisseur américain comme Anthropic ou OpenAI.
- **Exonéré**: la livraison est exonérée de TVA.
- **TVA étrangère facturée**: TVA étrangère éventuellement récupérable via la procédure de remboursement de l'UE.

Le traitement est normalement hérité de la catégorie. Vous pouvez le remplacer par dépense.

### Montant de TVA manuel

Habituellement, MyCompanyDesk calcule le montant de TVA à partir du taux et du montant net. Si cela ne correspond pas au document du fournisseur, par exemple un avoir avec un montant net de EUR 0 et uniquement de la TVA, vous pouvez saisir le montant de TVA manuellement. Le taux ne pilote plus le montant; le formulaire utilise votre saisie.

### Corrections en période verrouillée

Si une dépense se trouve dans une période de TVA verrouillée, le formulaire bloque les modifications des champs financiers et propose un chemin de correction. Le message d'erreur est transmis via le code `PERIOD_LOCKED`, de sorte qu'une explication en français s'affiche au lieu du texte brut du backend. La correction est créée dans une période ultérieure ouverte et renvoie vers la dépense d'origine verrouillée, afin de conserver la traçabilité.

Le contrôle compare les valeurs effectivement destinées à être écrites, et non seulement les champs visibles dans le formulaire. Cela inclut les lignes à plusieurs taux (`lines`), les indicateurs d'investissement et les entrées d'amortissement telles que durée d'utilité, valeur résiduelle et pourcentage d'usage privé. Toute modification financièrement significative dans une période déclarée est refusée ; les ajustements non financiers, comme les notes, le statut de paiement ou les pièces jointes, restent possibles.

## Investissements et amortissement

Les catégories avec `auto_flag_investment = true` (généralement équipement et autres immobilisations) transforment automatiquement une dépense en investissement :

- La dépense est marquée `is_investment = true`.
- Un plan d'amortissement mensuel est généré à partir de `useful_life_months` de la catégorie (60 mois par défaut si non renseigné).
- Le plan utilise l'amortissement linéaire avec un pro rata journalier pour le premier et le dernier mois civil, conformément aux directives fiscales.
- Les lignes sont stockées dans `expense_depreciation_lines` et alimentent les rapports.

La base amortissable correspond au coût capitalisé que la comptabilité enregistre au débit du compte d'immobilisation (`apps/api/src/modules/ledger/posting-engine.js`), et non au montant brut hors TVA. Cela intègre donc la TVA déductible partiellement non récupérable (pour les catégories avec un taux de déduction inférieur à 100 %) et la part professionnelle après application du pourcentage d'usage privé, de sorte que le plan d'amortissement, le registre d'immobilisations et le calcul KIA reposent tous sur le même montant.

La modification de la catégorie, de la date, du montant, du traitement de TVA, du pourcentage d'usage privé, de la durée d'utilité ou de la valeur résiduelle sur une dépense existante déclenche un recalcul. Si une ligne d'amortissement existante tombe déjà dans une période de TVA verrouillée, le recalcul est refusé pour que la déclaration déposée ne soit pas modifiée silencieusement. Le basculement d'une dépense investissement vers une catégorie non investissement supprime les lignes d'amortissement.

Un investissement dont la propre date se trouve encore dans une période ouverte peut tout de même rencontrer un plan verrouillé si ses lignes d'amortissement s'étendent dans une période de TVA verrouillée ultérieure. Dans ce cas, le formulaire affiche le code `DEPRECIATION_SCHEDULE_LOCKED` au lieu de `PERIOD_LOCKED`. Utilisez l'action **Déverrouiller temporairement** pour cette période sur la [page TVA](/fr/features/vat) et réessayez la modification.

## Lier les dépenses

Liez les dépenses à :

- **Projets** -- Suivez précisément les coûts par projet
- **Clients** -- Associez les coûts à des clients spécifiques, par exemple pour les refacturer ultérieurement
- **Fournisseurs** -- Enregistrez à qui vous avez payé

## Actions groupées

Sélectionnez plusieurs dépenses pour :

- **Catégoriser** -- Changer la catégorie en masse
- **Archiver** -- Déplacer vers les archives. Lorsque vous archivez plusieurs dépenses non payées avec une date d'échéance en une fois, les rappels de paiement ouverts correspondants sont suspendus. La barre d'actions en masse affiche d'abord une confirmation dès qu'une dépense sélectionnée est non payée et a une date d'échéance, pour que vous sachiez combien des dépenses sélectionnées perdent leur rappel. Le rappel reste suspendu tant que les dépenses sont archivées. Si vous restaurez ultérieurement une dépense archivée, le passage quotidien recrée le rappel, mais au plus tôt la nuit suivante.
- **Supprimer** -- Supprimer définitivement
- **Exporter** -- Télécharger au format CSV
- **Marquer comme payé** -- Marque les dépenses sélectionnées comme payées. Si vous marquez un brouillon bancaire ou un brouillon de la boîte de réception comme payé, le statut "À vérifier" est enlevé en même temps, de sorte que la ligne apparaisse dans vos rapports, votre déclaration de TVA et votre export comptable au lieu de rester cachée. Cela ne se produit que lorsque vous passez le statut à payé, pas lorsque vous revenez à non payé.

Si une action groupée est refusée parce qu'une ou plusieurs lignes sélectionnées tombent dans une période de TVA verrouillée, le message d'erreur nomme la période exacte et explique la prochaine étape. Une période déjà déposée et verrouillée ne peut être rouverte que par une déclaration supplétive. Un verrouillage nu (la date limite de dépôt est passée mais aucune déclaration n'a été déposée) peut être déverrouillé temporairement depuis la page TVA. Retirez les lignes situées dans cette période de votre sélection, ou utilisez la route de correction appropriée, puis réessayez.

## Indemnité kilométrique

Si vous utilisez une voiture privée pour des déplacements professionnels, vous pouvez regrouper ces trajets en une seule dépense avec une indemnité kilométrique.

1. Allez dans **Dépenses** et ouvrez l'indemnité kilométrique.
2. Choisissez la période à comptabiliser.
3. Sélectionnez les trajets à inclure.
4. Cliquez sur **Comptabiliser comme dépense**.

La dépense est créée avec une ligne pour le total des kilomètres professionnels.

<!-- TODO(source-missing): Le taux d'indemnité kilométrique néerlandais au kilomètre n'est pas encore dans sources/. Ne citez pas le taux dans la documentation tant qu'un humain n'a pas vérifié le montant actuel sur belastingdienst.nl. -->

Si votre espace de travail utilise un véhicule de société, les frais réels de voiture sont déjà comptabilisés comme dépense ; une indemnité kilométrique séparée n'est alors pas nécessaire.

Les billets de train et autres frais de voiture peuvent aussi être enregistrés comme une dépense classique dans **Dépenses > Nouveau** avec le fournisseur, le montant, la date et la catégorie.

## Dépenses récurrentes

Pour les coûts réguliers (loyer, abonnements, etc.), configurez des [dépenses récurrentes](/fr/features/recurring-expenses) pour automatiser la création.

## Import

Importez des dépenses depuis un fichier CSV :

1. Allez dans **Profil > Import**
2. Sélectionnez **Dépenses** comme type de données
3. Téléchargez votre fichier CSV
4. Faites correspondre les colonnes aux champs
5. Vérifiez et confirmez

## Notifications d'interruption de cycle

MyCompanyDesk surveille les fournisseurs qui envoient habituellement une facture chaque mois mais qui se sont tus. Si un fournisseur a eu des depenses sur trois mois distincts, puis plus aucune depense confirmee pendant environ 50 jours, il cree une notification vous demandant si une facture manque.

La verification ne porte que sur les depenses confirmees. Les depenses provisoires ou celles en attente de confirmation ne comptent pas comme "nous avons vu une facture", donc une importation non confirmee n'arrete pas la notification. L'objectif est d'attraper une facture recurrente manquante avant qu'elle ne fausse vos comptes.

## Piste d'audit

La creation d'une depense ecrit desormais une entree de piste d'audit pour chaque chemin de creation, pas seulement pour le formulaire web manuel. Cela concerne les recus scannes depuis l'application, les brouillons issus du flux bancaire, les imports CSV, les depenses recurrentes, les brouillons de la boite de reception et des e-mails transferes, les factures electroniques Peppol et les trajets. L'entree indique le fournisseur et la date, ou le numero de depense s'il est deja attribue, pour retrouver l'origine de chaque depense dans l'historique.

En ouvrant la notification, vous pouvez enregistrer la depense manquante ou la rejeter si ce silence etait prevu.

## Conseils

- Definissez votre taux de TVA, votre categorie de depense et votre mode de paiement par defaut dans **Parametres de l'espace de travail** pour que le formulaire ne commence pas toujours avec des champs vides. Un reglage a 0 % pour la TVA fonctionne correctement; le formulaire le traite comme un choix intentionnel.
- Activez les [suggestions IA](/fr/advanced/ai-features) pour des recommandations automatiques de catégories
- Joignez toujours les reçus -- ils sont essentiels pour les contrôles fiscaux
- Utilisez les projets pour suivre le ratio dépenses/revenus
- Consultez le [rapport de dépenses](/fr/features/reports) pour les ventilations de coûts
