---
title: Dépenses
description: "Suivez vos dépenses, scannez vos reçus, gérez des catégories avec leur propre TVA et laissez les amortissements se dérouler automatiquement."
last_verified: 2026-10-21
---

# Dépenses

Suivez toutes vos dépenses professionnelles, numérisez des reçus avec l'IA et catégorisez les coûts pour une comptabilité précise et la déclaration de TVA.

## Vue d'ensemble

La page des dépenses répertorie toutes vos dépenses enregistrées. Les onglets au-dessus de la liste permettent de basculer rapidement entre :

- **Tous** : toutes les dépenses enregistrées
- **À payer** : dépenses non encore payées
- **Payé** : dépenses déjà payées
- **À confirmer** : visible uniquement lorsque quelque chose attend, comme des lignes bancaires et des brouillons qui ne sont pas encore comptabilisés

Les dépenses encore en attente de confirmation (brouillons issus de la connexion bancaire ou de la boîte de réception, pas encore comptabilisés) affichent **À confirmer** au lieu de payé ou non payé. Elles ne comptent encore nulle part et ne peuvent pas être sélectionnées pour les actions groupées tant qu'elles ne sont pas comptabilisées.

Vous pouvez toujours filtrer par catégorie, statut, facturé ou non et période, et sous **Afficher** vous basculez entre **Actif**, **Archives** et **Corbeille**. Cliquez sur une dépense pour ouvrir la page de détail. Cliquez sur **Ajouter** pour en enregistrer une : vous y numérisez un reçu ou saisissez vous-même les données.

## Créer une dépense

L'écran **Nouvelle dépense** peut lier un nouveau reçu au chantier immédiatement : choisissez un projet ou un client (facultatif) et, avec un client, activez **À refacturer** pour placer les coûts sur la facture de ce client ; choisi seul, le projet donne le client. Investissements et frais répercutés n'ont pas ce commutateur. Le lien voyage avec le reçu : un reçu poursuivi sur l'écran de scan les conserve.

### Saisie manuelle

1. Allez dans **Dépenses**, cliquez sur **Ajouter** et choisissez en bas **Besoin de plus de champs ?** pour ouvrir le formulaire complet
2. Remplissez :
   - **Fournisseur** : à qui vous avez payé
   - **Description** : l'objet de la dépense
   - **Montant** : coût total (TTC ou HT)
   - **Date** : date de la dépense
   - **Catégorie** : sélectionnez parmi les catégories de votre espace de travail. Si vous avez défini une catégorie de dépense par défaut sous **Paramètres › Dépenses**, elle est déjà pré-remplie ici.
   - **Taux de TVA** : pré-rempli avec le taux de TVA par défaut pour les dépenses de votre espace de travail (configurable sous **Paramètres › Dépenses**). Vous pouvez toujours le modifier par dépense.
   - **Mode de paiement** : pré-rempli avec le mode de paiement par défaut pour les dépenses de votre espace de travail, s'il est défini.
3. Joignez optionnellement une image ou un PDF de **reçu**
4. Liez optionnellement à un **projet** ou un **client**
5. Cliquez sur **Enregistrer**

### Ajout rapide

Pour la plupart des dépenses, le panneau latéral suffit :

1. Cliquez sur **Ajouter** dans la liste des dépenses
2. Choisissez **Scanner un reçu** ou téléversez une photo ou un PDF, ou saisissez vous-même les données
3. Vérifiez le fournisseur, le montant, la date, la catégorie et la TVA
4. Enregistrez

### À partir d'un modèle

Lors de la création d'une nouvelle dépense, cliquez sur **À partir d'un modèle** (affiché uniquement si vous avez des modèles de dépense enregistrés). Choisissez un modèle et le formulaire se remplit directement avec le fournisseur, la catégorie, le montant et les autres données enregistrées. Ajustez selon vos besoins, puis cliquez sur **Enregistrer**.

### Depuis les transactions bancaires

Lorsque votre [compte bancaire](/fr/features/bank) est connecté (Office), les transactions sortantes catégorisées sont automatiquement converties en dépenses provisoires. Chaque dépense reçoit la contrepartie comme fournisseur, le montant absolu comme brut, le taux de TVA et le traitement par défaut de la catégorie, et la date comptable de la transaction. Les dépenses provisoires apparaissent d'abord sous **À confirmer** sur la page des dépenses, où vous pouvez les confirmer, les modifier ou les rejeter avant qu'elles n'entrent dans votre comptabilité. Voir [de la transaction à la dépense](/fr/features/bank#de-la-transaction-a-la-depense) pour le workflow complet.

### Numérisation de reçus

Laissez l'IA extraire automatiquement les détails de vos reçus :

1. Allez dans **Dépenses** et cliquez sur **Ajouter**. Avec **Scanner un reçu**, le panneau latéral lit le reçu immédiatement. Pour répartir un reçu sur plusieurs lignes, ouvrez le formulaire complet et déposez le reçu sur **Commencez par un reçu** : vous arrivez alors sur l'écran de numérisation
2. Téléversez une image de reçu (JPEG, PNG, WebP) ou un PDF
3. Choisissez si besoin, sur l'écran de numérisation, sous **Paramètres avancés** › **Mode d'extraction** :
   - **Total unique** : une dépense à partir du reçu
   - **Plusieurs postes** : plusieurs lignes à partir d'un seul reçu
4. Vérifiez les données extraites (date, montant, fournisseur, description)
5. Confirmez pour créer la ou les dépenses

Qu'une dépense existe déjà dans vos livres pour un reçu numérisé, le plus souvent l'écriture bancaire du même paiement, la carte de vérification porte le bouton **Joindre le justificatif ici** (pour une dépense qui n'a pas encore de reçu) : le reçu s'attache à la dépense existante au lieu d'en saisir une deuxième, et la ligne sort de la vérification. Les montants répétés sur un même reçu sont signalés et restent des coûts séparés. Voir [Numérisation de reçus](/fr/advanced/receipt-scanning) pour le détail.

::: info
La numérisation de reçus est disponible sur tous les plans, y compris Desk. Le nombre de scans par mois dépend de votre plan : 3 sur Desk et 200 sur Office. Le taux de TVA d'une nouvelle dépense commence par votre réglage d'espace de travail par défaut.
:::

Si un e-mail transféré ou un scan crée une dépense mais que le reçu ne peut pas être joint (par exemple un type de fichier non pris en charge ou un fichier trop volumineux), la dépense est quand même créée et un message indique que la pièce jointe est manquante. Ajoutez ensuite le reçu manuellement sur la page de détail de la dépense.

### Votre reçu en PDF

Le bouton **Télécharger le reçu** de la page de détail d'une dépense vous remet le reçu en PDF. Un reçu déjà au format PDF revient tel quel. Un reçu photographié devient une page A4 : la photo est redressée et légèrement nettoyée, et une ligne grise au pied reprend fournisseur, date, montant et numéro de dépense, pour qu'une impression ou un fichier dans l'archive du comptable reste rattaché à son écriture. Le fichier porte un nom lisible plutôt qu'un code de stockage, par exemple Bon_Boulangerie_Martin_2026-10-21_nr41.pdf. Si une photo ne peut pas être convertie, c'est l'image d'origine qui se télécharge. Votre reçu enregistré reste tel qu'il est arrivé : le PDF est généré au moment du téléchargement ou de l'envoi.

### Périodes de TVA verrouillées

Si un message de la boîte de réception est converti en une dépense dont la date tombe dans une période de TVA déjà déclarée, l'enregistrement automatique est refusé pour protéger la déclaration déposée. Au lieu de supprimer silencieusement la facture, MyCompanyDesk crée une notification qui indique le fournisseur et la date de la facture, et précise que la période de TVA est verrouillée. La notification renvoie vers la liste de la boîte de réception, afin que vous puissiez y retrouver la facture transmise. Vous avez ensuite les deux mêmes options que pour les autres cas de période verrouillée : enregistrer la dépense manuellement avec une date dans la période ouverte en cours, ou déposer une déclaration complémentaire pour la période verrouillée.

Le panneau latéral de **Ajouter** affiche le même indicateur de période de TVA à côté du champ de date avant l'enregistrement, afin qu'une période verrouillée ou en tolérance soit visible avant que le serveur refuse l'écriture.

## Logos fournisseurs

Lorsqu'un fournisseur a un logo connu, MyCompanyDesk l'affiche à côté du nom du fournisseur dans la liste des dépenses et dans l'autocomplétion fournisseur lorsque vous créez ou modifiez une dépense. Le logo provient du registre KVK pour les entreprises néerlandaises ou d'une liste organisée de marques courantes. Si aucun logo n'est disponible, l'application affiche un monogramme.

## Catégories de dépenses

Les catégories appartiennent à votre espace de travail. Chaque espace commence avec six catégories standard qui suivent les postes de charges de la déclaration d'impôt néerlandaise : frais généraux, frais de bureau, voiture et déplacements, téléphone et internet, frais de représentation, et achats et matériel. **Lancer l'assistant de configuration magique** ajoute une sélection adaptée à votre secteur.

Chaque catégorie porte son propre **Traitement TVA**, une part déductible, le choix d'amortir ou non les achats comme investissement par défaut, et une durée d'utilisation. Vous gérez les catégories sous **Paramètres › Catégories de dépenses**. Les catégories standard peuvent être modifiées et archivées, mais pas supprimées. Une catégorie personnelle ne peut pas être supprimée tant que des dépenses ou des dépenses récurrentes l'utilisent ; archivez-la alors. Les catégories aident à organiser vos dépenses et sont utilisées dans les rapports pour les ventilations de coûts.

## Gestion de la TVA

Chaque dépense peut avoir son propre taux de TVA. Options courantes :

- **21 %** : taux normal
- **9 %** : taux réduit
- **0 %** : taux zéro ou exonéré

Le montant de TVA est calculé automatiquement et inclus dans vos [rapports de TVA](/fr/features/vat).

### Traitement de la TVA

Dans des cas particuliers, vous définissez le traitement de la TVA de la dépense :

- **Standard**: TVA nationale.
- **TVA autoliquidée vers moi (national)**: un fournisseur néerlandais vous transfère la TVA, par exemple un sous-traitant dans la construction. Cela va en rubrique 2a.
- **Autoliquidation (UE)**: vous déclarez vous-même la TVA sur un achat B2B intra-UE, rubrique 4b.
- **Autoliquidation (hors UE)**: un fournisseur hors UE facture 0 % de TVA (sources/vat-rates.yaml#countries.NL.zero), vous la déclarez vous-même en rubrique 4a. Utilisez cela par exemple pour un fournisseur américain comme Anthropic ou OpenAI.
- **Exonéré**: la livraison est exonérée de TVA.
- **TVA étrangère facturée**: TVA étrangère éventuellement récupérable via la procédure de remboursement de l'UE.

Le traitement est normalement hérité de la catégorie. Vous pouvez le remplacer par dépense.

Une catégorie peut aussi limiter ce que la déclaration récupère. Une catégorie avec un pourcentage de déduction inférieur à 100 % (pensez à une catégorie repas ou cadeaux) laisse une part de la TVA, ou la totalité, hors déclaration, même quand l'interrupteur « TVA déductible » est activé. Quand la dépense récupérerait sinon de la TVA, le formulaire prévient sous l'interrupteur et nomme la catégorie et la part récupérée ; interrupteur coupé, TVA étrangère ou exonérée, TVA absente du document ou KOR, il n'y a rien à récupérer et l'avertissement n'apparaît pas. La carte Comptabilisation de la page de détail montre le même avertissement sous forme d'étiquette.

### Montant de TVA manuel

Habituellement, MyCompanyDesk calcule le montant de TVA à partir du taux et du montant net. Si cela ne correspond pas au document du fournisseur, par exemple un avoir avec un montant net de EUR 0 et uniquement de la TVA, vous pouvez saisir le montant de TVA manuellement. Le taux ne pilote plus le montant; le formulaire utilise votre saisie.

### Corrections en période verrouillée

Si une dépense se trouve dans une période de TVA verrouillée, le formulaire bloque les modifications des champs financiers et propose un chemin de correction : **Créer une correction dans la période courante**. La correction est créée dans une période ultérieure ouverte et renvoie vers la dépense d'origine verrouillée, afin de conserver la traçabilité.

Le contrôle compare les valeurs effectivement destinées à être écrites, et non seulement les champs visibles dans le formulaire. Cela inclut les dépenses avec des lignes à plusieurs taux de TVA, l'interrupteur d'investissement et les entrées d'amortissement telles que durée d'utilité, valeur résiduelle et pourcentage d'usage privé. Toute modification financièrement significative dans une période déclarée est refusée ; les ajustements non financiers, comme les notes, le statut de paiement ou les pièces jointes, restent possibles.

## Investissements et amortissement

Activez **Investissement (amortir)** sur une dépense, ou réglez sa catégorie pour traiter les achats comme investissement, et la dépense devient un investissement :

- Un plan d'amortissement mensuel est généré sur la durée indiquée dans **Amortir sur (années)**, par défaut la durée d'utilisation de la catégorie (60 mois si non renseignée).
- Le plan utilise l'amortissement linéaire avec un pro rata journalier pour le premier et le dernier mois civil, conformément aux directives fiscales.
- L'amortissement alimente vos rapports.

La base amortissable correspond à la valeur que la comptabilité immobilise, et non au montant brut hors TVA. Cela intègre donc la TVA déductible partiellement non récupérable (pour les catégories avec un taux de déduction inférieur à 100 %) et la part professionnelle après application du pourcentage d'usage privé, de sorte que le plan d'amortissement, le registre d'immobilisations et le calcul KIA reposent tous sur le même montant.

La modification de la catégorie, de la date, du montant, du traitement de TVA, du pourcentage d'usage privé, de la durée d'utilité ou de la valeur résiduelle sur une dépense existante déclenche un recalcul. Si une ligne d'amortissement existante tombe déjà dans une période de TVA verrouillée, le recalcul est refusé pour que la déclaration déposée ne soit pas modifiée silencieusement. Le basculement d'une dépense investissement vers une catégorie non investissement supprime les lignes d'amortissement.

Un investissement dont la propre date se trouve encore dans une période ouverte peut tout de même rencontrer un plan verrouillé si ses lignes d'amortissement s'étendent dans une période de TVA verrouillée ultérieure. Dans ce cas, le formulaire indique que l'amortissement s'étend dans une période de TVA verrouillée. Utilisez l'action **Déverrouiller temporairement** pour cette période sur la [page TVA](/fr/features/vat) et réessayez la modification.

## Lier les dépenses

Liez les dépenses à :

- **Projets** : suivez précisément les coûts par projet
- **Clients** : associez les coûts à des clients spécifiques, par exemple pour les refacturer ultérieurement
- **Fournisseurs** : enregistrez à qui vous avez payé

## Refacturation et changements de prix de revient

Une dépense liée à un client peut être refacturée sur une facture. À cet effet, la dépense elle-même a un interrupteur **Refacturer au client** : les dépenses refacturées vont sur la prochaine facture du client et affichent **Déjà sur une facture** dès qu'elles sont sur une. La [facturation automatique du temps](/fr/features/time-registration#facturation-automatique-du-temps) n'inclut que les dépenses qui portent cet interrupteur.

Le détail de la dépense affiche une ligne **Facture liée** dès qu'elle a été ajoutée à une facture, et un badge **Coût modifié après facturation** si le prix de revient de la dépense a été modifié après l'envoi de la facture. Ce badge signifie que le montant de la facture ne correspond plus à la dépense sous-jacente ; ouvrez la facture ou modifiez la dépense pour les réaligner.

## Actions groupées

Sélectionnez plusieurs dépenses pour un travail de groupe. Pendant une sélection, une colonne de cases à cocher apparaît dans la liste ; hors sélection, pas de cases, et sur une liste vide il n'y a pas du tout de bouton de sélection. Votre tri sur la liste est retenu et survit à un rechargement.

- **Archiver** : Déplacer vers les archives. Lorsque vous archivez plusieurs dépenses non payées avec une date d'échéance en une fois, les rappels de paiement ouverts correspondants sont suspendus. La barre d'actions en masse affiche d'abord une confirmation dès qu'une dépense sélectionnée est non payée et a une date d'échéance, pour que vous sachiez combien des dépenses sélectionnées perdent leur rappel. Le rappel reste suspendu tant que les dépenses sont archivées. Si vous restaurez ultérieurement une dépense archivée, le passage quotidien recrée le rappel, mais au plus tôt la nuit suivante.
- **Supprimer** : déplacer vers la corbeille, où vous pouvez encore restaurer la dépense. Dans **Archives**, vous choisissez **Restaurer vers actif** ou **Mettre à la corbeille** ; dans **Corbeille**, **Restaurer vers archives** ou **Supprimer définitivement**.
- **Marquer comme payé** : Marque les dépenses sélectionnées comme payées. Si vous marquez un brouillon bancaire ou un brouillon de la boîte de réception comme payé, le statut "À vérifier" est enlevé en même temps, de sorte que la ligne apparaisse dans vos rapports, votre déclaration de TVA et votre export comptable au lieu de rester cachée. Cela ne se produit que lorsque vous passez le statut à payé, pas lorsque vous revenez à non payé.

Si une action groupée est refusée parce qu'une ou plusieurs lignes sélectionnées tombent dans une période de TVA verrouillée, le message d'erreur nomme la période exacte et explique la prochaine étape. Une période déjà déposée et verrouillée ne peut être rouverte que par une déclaration supplétive. Un verrouillage nu (la date limite de dépôt est passée mais aucune déclaration n'a été déposée) peut être déverrouillé temporairement depuis la page TVA. Retirez les lignes situées dans cette période de votre sélection, ou utilisez la route de correction appropriée, puis réessayez.

## Indemnité kilométrique

Si vous utilisez une voiture privée pour des déplacements professionnels, vous pouvez regrouper ces trajets en une seule dépense avec une indemnité kilométrique. Les trajets viennent de l'enregistrement du temps et de l'écran des trajets ci-dessous, donc la comptabilisation demande l'accès à ces pages ; sans accès, le parcours explique ce qu'il faut demander à votre administrateur.

1. Allez dans **Dépenses › Kilomètres** et cliquez sur **Comptabiliser**. Vous arrivez sur **Enregistrer l'indemnité kilométrique**.
2. Choisissez la période à comptabiliser.
3. Sélectionnez les trajets à inclure.
4. Cliquez sur **Comptabiliser comme dépense**.

La dépense est créée avec une ligne pour le total des kilomètres professionnels.

L'indemnité est de 0,25 € par kilomètre professionnel pour les trajets de 2026 et de 0,23 € pour les trajets jusqu'en 2025 inclus ([`sources/nl-mileage.yaml#ib_entrepreneur.per_km_eur`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-mileage.yaml)). Chaque trajet est valorisé au taux de sa propre année : une période à cheval sur le 1er janvier combine donc les deux taux. L'indemnité ne porte pas de TVA, et le carburant, l'assurance, les péages et le stationnement y sont déjà inclus : vous ne les déduisez pas en plus séparément ([`sources/nl-mileage.yaml#ib_entrepreneur.conditions`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-mileage.yaml)).

Si votre espace de travail utilise un véhicule de société, les frais réels de voiture sont déjà comptabilisés comme dépense ; une indemnité kilométrique séparée n'est alors pas nécessaire.

Les billets de train et autres frais de voiture peuvent aussi être enregistrés comme une dépense classique dans **Dépenses › Ajouter** avec le fournisseur, le montant, la date et la catégorie.

## Trajets

L'écran **Trajets** sous Dépenses garde vos kilomètres de l'année, avec ou sans heures. Un trajet porte une date, un point de départ et une destination, le nombre de kilomètres en simple, professionnel ou privé, un client optionnel et une note. Ajouter des heures n'est plus nécessaire : chaque entrée kilométrique (celle de **Dépenses**, dans le panel de recherche et dans les réglages de déplacement) ouvre directement le formulaire de trajet.

Le départ et l'arrivée ne sont plus obligatoires non plus : sous **Nouveau**, **Noter des kilomètres** ouvre le formulaire de trajet sans itinéraire, pour qu'une date, une distance et une note suffisent les jours chargés. Pour l'itinéraire plus tard, **Indiquer départ et arrivée** sur le trajet l'ajoute.

Un itinéraire, c'est plus qu'un départ et une arrivée. Le formulaire de trajet prend des **arrêts** intermédiaires : des adresses en route, et **Retour au départ** planifie le retour en les suivant, sans compter les kilomètres deux fois. Les trajets vers vos rendez-vous, vos bons d'intervention et vos heures chez un client apparaissent d'eux-mêmes, de la maison en passant par vos adresses et retour ; rien à confirmer. Un trajet que vous avez modifié vous-même reste tel que vous l'avez saisi quand le rendez-vous bouge plus tard ; un trajet que vous avez laissé tel quel suit.

Un trajet peut se facturer lui-même. **Facturer à un client** porte le trajet entier sur un client, à un montant fixe ou au kilomètre (le tarif se retient par client), dès maintenant comme facture brouillon ou mis de côté pour la prochaine facture mensuelle de ce client. Un trajet qui attend encore une facture porte la mention **À facturer**, et dès que ses frais siègent sur une facture ou un bon d'intervention, le trajet se ferme : retirez-les là-bas avant de le changer.

Chez les clients s'ajoutent les **Frais de déplacement** : un montant fixe par visite, un prix au kilomètre, ou rien. Vous les réglez par client, ou pour tous vos clients d'un coup avec un seul choix. Sur un trajet du jour qui passe par plusieurs clients, chaque visite devient sa propre ligne de facture, répartie à parts égales par visite ou selon la distance ; la fiche du trajet montre l'itinéraire et cette répartition sur vos clients. **Noter du travail** note les heures, les kilomètres et les frais de déplacement d'un client dans un seul écran, et ce que l'écran rassemble part sur la prochaine facture de ce client.

En ajoutant un trajet, le formulaire demande **Avec quel véhicule roulez-vous ?**. Choisissez la voiture personnelle, et chaque kilomètre professionnel rapporte un montant fixe d'indemnité kilométrique, à comptabiliser comme frais. Choisissez la voiture ou l'utilitaire de l'entreprise, et le carburant, l'entretien et l'assurance sont déjà comptabilisés comme dépenses ; aucune indemnité n'apparaît et vos trajets restent là pour votre propre suivi. Tant que la question reste sans réponse, l'indemnité reste hors de vue. Dans un espace avec une équipe, l'administrateur répond à la question pour tout le monde.

L'écran regroupe les trajets par mois et totalise chaque mois : kilomètres professionnels, kilomètres privés et l'indemnité kilométrique qui en découle. Les trajets pas encore comptabilisés en frais montrent ce total avec le lien **Comptabiliser** vers l'indemnité kilométrique ci-dessus. Un trajet lié à une heure saisie porte la mention **Avec heures** ; un trajet déjà comptabilisé l'affiche aussi. Modifier un trajet comptabilisé commence par supprimer la dépense qui en est née.

## Devise étrangère

La comptabilité reste en euros. Quand le document derrière une dépense est dans une autre devise, cette devise et le montant du document sont enregistrés à côté du montant en euros, tandis que les rapports, la déclaration de TVA et le Grand livre continuent de lire des euros.

Comment le montant en euros se forme :

- **Scan dans une autre devise** : l'écran de scan demande le montant en euros, celui pour lequel votre banque convertit le document. Tant qu'il n'est pas saisi, la carte affiche le montant du document dans sa propre devise, jamais un montant en euros inventé. Seul le montant en euros arrive dans vos comptes.
- **Facture transmise (boîte de réception)** : une facture en devise étrangère qui se comptabilise seule part d'une conversion au taux de référence de la Banque centrale européenne du jour, marquée comme montant provisoire. Les week-ends et jours fériés n'ont pas de taux propre et reprennent le taux du jour ouvré précédent. Sans aucun taux disponible, rien n'est deviné : une seule notification renvoie vers l'écran de scan pour saisir vous-même le montant en euros.
- **La banque l'emporte** : dès que le paiement apparaît sur un compte bancaire connecté, le réel débit remplace la conversion provisoire. Le montant en euros devient ce que la banque a facturé, surcharge de l'émetteur de carte incluse, et aucune seconde dépense ne s'ajoute à côté. Une dépense dans une période de TVA verrouillée n'est jamais modifiée discrètement : le lien reste en place et une note sur la dépense indique ce que la banque a débité, la différence relevant d'une déclaration suivante.

Dans la liste, une dépense en devise étrangère affiche le montant en euros converti ; la page de détail garde la devise d'origine, le montant d'origine et la date du taux utilisé.

## Dépenses récurrentes

Pour les coûts réguliers (loyer, abonnements, etc.), configurez avec Office des [dépenses récurrentes](/fr/features/recurring-expenses) pour automatiser la création. Le bouton **Dépenses récurrentes** de la page des dépenses y mène.

## Import

Importez des dépenses depuis un fichier CSV :

1. Allez dans **Paramètres › Migration** et cliquez sur **Importer des factures** ; vous arrivez sur **Importer des données CSV**
2. Sélectionnez **Dépenses** comme type de données
3. Téléchargez votre fichier CSV
4. Faites correspondre les colonnes aux champs
5. Vérifiez et confirmez

## Notifications d'interruption de cycle

MyCompanyDesk surveille les fournisseurs qui envoient habituellement une facture chaque mois mais qui se sont tus. Si un fournisseur a eu des dépenses sur trois mois distincts, puis plus aucune dépense confirmée pendant environ 50 jours, il crée une notification vous demandant si une facture manque.

La vérification ne porte que sur les dépenses confirmées. Les dépenses provisoires ou celles en attente de confirmation ne comptent pas comme « nous avons vu une facture », donc une importation non confirmée n'arrête pas la notification. L'objectif est d'attraper une facture récurrente manquante avant qu'elle ne fausse vos comptes.

En ouvrant la notification, vous pouvez enregistrer la dépense manquante ou la rejeter si ce silence était prévu.

## Piste d'audit

La création d'une dépense écrit désormais une entrée de piste d'audit pour chaque chemin de création, pas seulement pour le formulaire web manuel. Cela concerne les reçus scannés depuis l'application, les brouillons issus de la connexion bancaire, les imports CSV, les dépenses récurrentes, les brouillons de la boîte de réception et des e-mails transférés, les factures électroniques Peppol et les trajets. L'entrée indique le fournisseur et la date, ou le numéro de dépense s'il est déjà attribué, pour retrouver l'origine de chaque dépense dans l'historique.

## Conseils

- Définissez votre taux de TVA, votre catégorie de dépense et votre mode de paiement par défaut sous **Paramètres › Dépenses** pour que le formulaire ne commence pas toujours avec des champs vides. Un réglage à 0 % pour la TVA fonctionne correctement ; le formulaire le traite comme un choix intentionnel.
- Activez les [suggestions IA](/fr/advanced/ai-features) pour des recommandations automatiques de catégories
- Joignez toujours les reçus : ils sont essentiels pour les contrôles fiscaux
- Utilisez les projets pour suivre le ratio dépenses/revenus
- Consultez le [rapport de dépenses](/fr/features/reports) pour les ventilations de coûts
