---
title: Gestion de la TVA
---

<!-- TODO(source-missing): RichardTool 5407b44 added historical Dutch VAT rates 6% and 19% to the valid invoice/quote/contract/recurring-invoice/catalog rate set. sources/vat-rates.yaml#countries.NL does not yet list those rates, so do not document the full valid set until the source is updated. -->

# Gestion de la TVA

Suivez la TVA collectée et payée, préparez votre déclaration et gardez une longueur d'avance sur les échéances. MyCompanyDesk prend en charge des flux TVA spécifiques à chaque pays : pour les entreprises aux Pays-Bas, la page reflète le formulaire Aangifte du Belastingdienst ; pour les autres pays pris en charge, elle applique les règles et échéances locales. Les chiffres que vous voyez sont donc ceux que vous déposez.

## Structure de la page

La page TVA compte trois onglets : **Aperçu**, **Déclaration** et **Transactions**. L'onglet actif et la période active figurent dans l'URL : l'actualisation et le bouton retour conservent votre position.

À côté des onglets se trouve un sélecteur de période valable pour toute la page, qui suit la fréquence de déclaration de vos réglages fiscaux. Les déclarants trimestriels voient Q1 à Q4 plus année complète, les déclarants mensuels les douze mois plus année complète, et les déclarants annuels seulement l'option année complète. Le changer met à jour chaque carte de chaque onglet. La même fréquence détermine les libellés de période lors d'une correction manuelle. Le sélecteur d'année en haut de la page fait basculer l'ensemble vers une autre année.

L'onglet actif et la période active figurent tous deux dans l'URL, donc les liens du rappel d'échéance de TVA dans le panneau de notifications, de la puce d'échéance de l'agenda, de la notification push et de la carte de période TVA dans Dépenses ouvrent tous la période exacte mentionnée par le message, au lieu de revenir au trimestre en cours.

L'onglet actif et la période active figurent tous deux dans l'URL, donc les liens du rappel d'échéance de TVA dans le panneau de notifications, de la puce d'échéance de l'agenda, de la notification push et de la carte de période TVA dans Dépenses ouvrent tous la période exacte mentionnée par le message, au lieu de revenir au trimestre en cours.

## Carte principale

La carte principale résume la période choisie :

- **Solde** : TVA nette (collectée moins payée) avec la mention "te betalen" ou "terug te ontvangen". Le solde suit le sélecteur de période.
- **Anneau d'échéance** : un compte à rebours circulaire jusqu'à la prochaine échéance de dépôt, calculé selon le pays de votre espace de travail et la fréquence de déclaration. Rouge à 3 jours ou moins, orange jusqu'à 14 jours, vert sinon.

<!-- TODO(source-missing): RichardTool 8bd35ae1 a introduit des échéances de dépôt de TVA spécifiques par pays (NL, GB, DE et autres). Les règles exactes d'échéance par pays ne sont pas encore dans sources/. Ne listez pas de dates spécifiques par pays tant qu'un humain ne les a pas ajoutées à sources/. -->
- **Provision TVA (BTW-spaarpotje)** : une réserve suggérée égale au solde de la période plus une marge de 10 %, affichée quand vous devez de la TVA. Si un remboursement vous est dû, la tuile devient une tuile verte de remboursement.

Trois boutons figurent sous le solde : **Vers la déclaration** mène à l'onglet Déclaration, **Comment est-ce calculé ?** détaille le calcul du solde, et **Ouvrir Mijn Belastingdienst Zakelijk** ouvre le portail professionnel sur `mijn.belastingdienst.nl/mbo-portaal/` pour déposer la déclaration sans page intermédiaire.

Au-dessus de la carte, un bandeau vous avertit quand vos données sont incomplètes (factures en brouillon ou dépenses sans TVA), pour corriger avant de déclarer.

MyCompanyDesk vous envoie aussi un e-mail une fois par période de TVA à l'approche de l'échéance de déclaration. L'e-mail renvoie directement vers la page TVA et suit votre interrupteur d'échéances de TVA dans Paramètres → Notifications; vous pouvez le désactiver dans ce menu.

Si votre entreprise est une BV ou une NV néerlandaise, le même interrupteur d'échéances de TVA envoie aussi un rappel une fois par an avant l'échéance de déclaration de l'impôt sur les sociétés (vennootschapsbelasting). Le rappel apparaît dans le panneau de notifications et est envoyé par e-mail.

## Onglet Aperçu

### Bande des trimestres

Quatre cartes (Q1 à Q4) résumant par trimestre le chiffre d'affaires, la TVA collectée, la TVA payée et le solde, avec l'échéance de dépôt et un badge de verrouillage sur les trimestres déposés ou verrouillés. Cliquez sur une carte pour changer la période de toute la page. Les trimestres à venir restent vides jusqu'à ce qu'ils contiennent de vraies données ; ensuite, ils affichent comme les trimestres passés le solde et un badge d'état.

### Contrôles avant dépôt

Une liste de contrôles exécutée sur la période active. Chaque contrôle a un lien de correction qui mène directement aux enregistrements concernés :

- **Brouillons** : factures encore en brouillon qui ne compteront pas dans la déclaration.
- **TVA manquante** : dépenses sans montant de TVA.
- **Justificatifs manquants** : dépenses sans justificatif joint.
- **ICP en attente** : ventes B2B intra-UE à déclarer séparément sur l'ICP-opgaaf. Le montant et le compteur utilisent les mêmes règles de classification que l'ICP-opgaaf, afin de correspondre aux lignes qui apparaîtront réellement sur la déclaration.
- **Origine de l'autoliquidation** : dépenses en autoliquidation dont le pays ou le numéro KVK du fournisseur manque, si bien que la rubrique 2a/4a/4b ne peut pas être justifiée.
- **Écart de déductibilité** : dépenses dont la TVA déductible n'est pas égale à la TVA totale, parce que la catégorie n'est pas entièrement déductible ou que l'usage privé s'applique. Cela fait écho aux indicateurs de l'onglet Transactions.

Un badge dans l'en-tête indique le nombre de points bloquants, ou que tout est en ordre.

### Synthèse et totaux annuels

Sous les contrôles, vous voyez les chiffres clés de l'année (chiffre d'affaires, dépenses, bénéfice, TVA collectée et payée, une estimation de la charge fiscale et une réserve recommandée), plus un total annuel sur les trimestres en une ligne.

Tant que votre chiffre d'affaires reste dans la zone KOR, cet onglet affiche aussi un rappel qui pointe vers les réglages KOR (voir plus bas).

## Onglet Déclaration

### Feuille des rubriques

Un tableau qui reflète le formulaire de déclaration du Belastingdienst :

| Section | Codes |
|---|---|
| 1. Prestaties binnenland | 1a, 1b, 1c, 1d, 1e |
| 2. Verleggingsregelingen binnenland | 2a |
| 3. Prestaties naar of in het buitenland | 3a, 3b, 3c |
| 4. Prestaties vanuit het buitenland aan u verricht | 4a, 4b |
| 5. Voorbelasting en berekening totaal | 5a, 5b, 5c |

Chaque ligne montre le chiffre d'affaires (HT) et le montant de TVA. La barre du bas affiche le total à payer ou à récupérer. Les corrections hors formulaire apparaissent sur des lignes distinctes : une correction de réservation ordinaire est affichée comme **Correctie**, tandis qu'une réduction selon l'ancien régime KOR apparaît comme **Vermindering volgens de oude KOR**. Le récapitulatif CSV de TVA ajoute une ligne de correction correspondante lorsque ces montants sont non nuls, de sorte que le solde, la TVA collectée et la TVA payée concordent. La colonne Solde TVA de la vue annuelle utilise le même total de TVA nette que la feuille des rubriques, donc les lignes s'additionnent au même montant.

Lorsque vous ajoutez une correction manuelle, saisissez un montant positif et choisissez une direction (TVA à payer ou TVA à rembourser). Les montants négatifs sont rejetés et le formulaire affiche une erreur vous demandant de choisir la direction à la place ; la direction détermine si la correction augmente ou diminue le total de la période.

Le champ d'année d'imposition accepte les années entre 2000 et l'année civile en cours plus une. Les années au-delà sont rejetées avec un message en ligne, car une correction enregistrée pour une année future deviendrait impossible à retrouver sur la page TVA. Le champ "Année de référence" des corrections utilise la même plage ; une année de référence hors de la plage ou dans le futur est bloquée, afin que la correction pointe toujours vers une période accessible.

Une correction n'est comptabilisée dans une déclaration que si sa période correspond à la fréquence de déclaration de TVA de votre espace de travail. Par exemple, une correction enregistrée en T1 ne figure dans aucune déclaration mensuelle ou annuelle, et une correction enregistrée en M03 ne figure dans aucune déclaration trimestrielle. La carte des corrections affiche un badge d'avertissement orange et une explication lorsque la période d'une correction ne figure dans aucune déclaration, afin que vous puissiez la modifier avant de déclarer.

La rubrique 4a concerne les achats en autoliquidation auprès de fournisseurs hors UE (`import_reverse_charge`); la rubrique 4b concerne les achats en autoliquidation auprès de fournisseurs UE (`b2b_reverse_charge`). MyCompanyDesk déduit la bonne rubrique à partir du pays du fournisseur, pour que le total en 5a soit exact.

Lorsque vous enregistrez ou supprimez une correction, la feuille des rubriques, la carte principale, la bande des trimestres et la carte d'action de déclaration se mettent à jour immédiatement; il n'est pas nécessaire d'actualiser la page ou de changer de période. La carte d'usage privé du véhicule de société se rafraîchit également en direct quand sa correction est enregistrée.

### Exports pour votre comptable

Une carte de téléchargement à côté de la feuille propose des exports CSV : un export complet pour votre comptable, un récapitulatif de TVA du trimestre choisi et une vue annuelle.

Le nom du fichier ZIP inclut le nom de l'entreprise, la période et le profil d'export, et le fichier README à l'intérieur mentionne également l'entreprise. Ainsi, un comptable qui télécharge des exports pour plusieurs clients peut facilement différencier les fichiers.

<!-- TODO(source-missing): RichardTool 4ffca446 affiche dans l'application un rappel de déclaration nulle mentionnant une invitation de la Belastingdienst et une verzuimboete. sources/ ne contient aucune source pour l'obligation de déclaration nulle néerlandaise ou les verzuimboetes ; ne citez pas cette affirmation tant qu'un humain n'a pas vérifié la règle sur belastingdienst.nl. -->

### Rappel de déclaration nulle

Lorsque la période sélectionnée est terminée et que les rubriques 5a et 5b sont toutes deux nulles, une carte d'information apparaît dans l'onglet Déclaration pour rappeler qu'une déclaration nulle peut encore devoir être déposée lorsque votre administration fiscale vous y a invité. La carte ne s'affiche pas pour les périodes terminées avant la création de l'espace de travail, car MyCompanyDesk ne détient aucune donnée pour ces périodes.

### Cartes internationales

Quand vous avez de l'activité internationale, des cartes complémentaires apparaissent sous la feuille :

- **ICP-opgaaf** : ventes B2B intra-UE groupées par client. Obligatoire quand vous avez vendu à des clients assujettis à la TVA dans d'autres pays de l'UE. La carte suit le sélecteur de période de toute la page, donc une exportation trimestrielle ne liste que les clients UE de ce trimestre.
- **Ventilation OSS** : ventes B2C par pays pour le guichet unique (One Stop Shop).
- **TVA étrangère** : TVA étrangère qui vous a été facturée et qui peut être récupérable via la procédure de remboursement de l'UE.
- **Corrections** : corrections de TVA manuelles, chacune avec une infobulle indiquant où elle se situe sur la déclaration. Un prélèvement privé compte dans la rubrique 1d. Une suppletie est compensée avec les rubriques 5a ou 5b (en régime KOR, cela n'affecte pas la TVA déductible, donc la rubrique 5b reste nulle). Un ajustement générique n'a pas sa propre case ; il ne déplace que le montant à payer ou à rembourser affiché par MyCompanyDesk, pas une rubrique que vous recopiez.

<!-- TODO(source-missing): RichardTool e671fd80 affiche dans l'application un seuil Belastingdienst de 1 000 EUR pour les corrections suppletie (jusqu'à 1 000 EUR inclus dans la prochaine déclaration régulière; au-delà une suppletieaangifte formelle est requise). sources/ ne contient pas ce seuil; ne pas inventer la valeur ou la cible du lien tant qu'un humain n'a pas vérifié la règle en vigueur sur belastingdienst.nl. -->

Ces cartes restent masquées tant qu'il n'y a pas de données internationales réelles ; la plupart des espaces de travail ne les voient jamais.

### Alerte en cas d'écart avec la déclaration déposée

<!-- TODO(source-missing): RichardTool 28c9641 a ajouté une alerte en cas d'écart avec une déclaration déposée, qui utilise un seuil Belastingdienst pour choisir entre "intégrer à la prochaine déclaration régulière" et "suppletieaangifte formelle requise". sources/ ne contient pas ce seuil; ne pas inventer la valeur ou la cible du lien tant qu'un humain n'a pas vérifié la règle en vigueur sur belastingdienst.nl. -->

Pour la TVA néerlandaise, l'onglet **Déclaration** recalcule la déclaration à chaque ouverture à partir de vos données en direct, même après un dépôt. Si le calcul actuel ne correspond plus à ce que vous avez déposé, une bannière d'avertissement apparaît au-dessus de la feuille des rubriques. Elle compare les montants déposés et actuels pour les rubriques 5a, 5b et le total net en 5g, et montre l'écart pour chaque ligne.

La bannière indique la marche à suivre. Elle vous dit soit d'intégrer l'écart à votre prochaine déclaration régulière, soit de déposer une suppletieaangifte formelle, soit de constater que les rubriques ont changé alors que le montant à payer ou à rembourser est resté le même.

### Usage privé du véhicule de société

Lorsque vous déduisez la TVA sur un véhicule de société, vous devez corriger l'usage privé en fin d'année. MyCompanyDesk dispose d'un flux de correction de TVA dédié :

- Choisissez entre une correction forfaitaire basée sur le prix catalogue, ou une correction basée sur l'utilisation réelle avec un registre des déplacements complet.
- Le taux forfaitaire dépend de l'âge du véhicule ou de la manière dont il a été acheté sans déduction de TVA.

La correction est intégrée aux totaux de la période dans l'onglet **Déclaration**.

<!-- TODO(source-missing): Les taux forfaitaires néerlandais pour la correction de TVA sur l'usage privé d'un véhicule de société et le seuil d'âge ne sont pas encore dans sources/. Ne citez pas ces valeurs dans la documentation tant qu'un humain n'a pas vérifié les règles en vigueur sur belastingdienst.nl. -->

## Onglet Transactions

Une liste à plat de chaque facture et dépense alimentant la période choisie, utile pour vérifier des enregistrements avant de déposer. Des puces de filtre réduisent la liste : **Tout**, **Sans justificatif**, **Sans TVA**, **Autoliquidation** et **TVA étrangère**, chacune avec un compteur. Chaque ligne renvoie vers la facture ou la dépense concernée.

Les dépenses qui ne sont pas entièrement déductibles affichent un indicateur comme **TVA non déductible** ou **TVA partiellement déductible**. Survolez l'indicateur (ou mettez-le au focus) pour voir une infobulle indiquant combien de la TVA sur la dépense compte comme TVA déductible dans la rubrique 5b. Si vous relevez du KOR, l'infobulle explique qu'aucune TVA déductible n'est retenue, car la rubrique 5b est nulle pour toute la période; l'indicateur renvoie alors à la déclaration, pas à la dépense elle-même.

## Verrouillage des périodes

Une barre de synthèse en haut de la page TVA indique combien de périodes sont verrouillées ; dépliez-la pour les gérer.

- **Verrouillage automatique** : dès que l'échéance de dépôt d'une période est passée, MyCompanyDesk la verrouille automatiquement, pour que votre comptabilité reste conforme à la déclaration déposée.
- **Verrouillage manuel** : des puces de période vous permettent de verrouiller vous-même toute période écoulée de l'année choisie, par exemple juste après un dépôt anticipé. Verrouiller une période encore en cours déclenche d'abord un avertissement. Les périodes terminées avant la création de l'espace de travail ne peuvent pas être verrouillées, car MyCompanyDesk ne détient aucune donnée pour elles et n'a pas déposé de déclaration en votre nom.
- **Marquer comme déposée** : signalez une période verrouillée comme déposée dès que la déclaration est faite. Lorsque vous ouvrez un rappel d'échéance de TVA dans le panneau de notifications, l'action **Marquer comme déposée** utilise la période indiquée dans ce rappel plutôt que la date du jour, afin de mettre à jour le bon trimestre ou le bon mois. Elle ne résout en outre que les rappels pour cette période, et pas chaque rappel TVA en attente de l'espace de travail. Les trimestres déposés l'affichent aussi dans la bande des trimestres.
- **Annuler la marque déposée** : si vous avez marqué une période comme déposée par erreur, vous pouvez supprimer cette mention. MyCompanyDesk demande d'abord une confirmation, car cela supprime l'enregistrement indiquant que vous avez déposé pour cette période. La période reste verrouillée, la tâche de déclaration et l'échéance réapparaissent, et rien ne change auprès de l'administration fiscale. Votre déclaration soumise reste soumise.
- **Déverrouillage temporaire** : besoin de corriger quelque chose ? Déverrouillez une période temporairement (72 heures) ; elle se reverrouille d'elle-même, ou reverrouillez plus tôt à la main. Supprimer entièrement un verrou n'est possible que tant que l'échéance de dépôt n'est pas passée.

Le statut de déclaration est suivi par période exacte, pas par inclusion. Une année déclarée ne marque pas automatiquement les quatre trimestres comme déclarés, et un trimestre déclaré ne marque pas automatiquement les mois qu'il contient. Le verrouillage couvre toutefois toute la période, donc un verrou annuel protège chaque trimestre.

**Calendrier de dépôt et corrections.** Vous ne pouvez déclarer une période qu'une fois qu'elle est terminée. Si vous tentez de déclarer avant le dernier jour de la période, l'application affiche une erreur vous demandant d'attendre la fin de la période. Une période ne peut être marquée comme déposée qu'une seule fois ; si elle l'est déjà, vous ne pouvez plus la déclarer à nouveau depuis la page TVA. Corrigez une période déjà déposée en créant une correction ou suppletie dans une période ouverte. L'onglet Déclaration indique quelles périodes sont encore ouvertes et lesquelles sont déjà déposées.

Modifier une facture ou une dépense dans une période verrouillée est bloqué dans le formulaire : les champs financiers passent en lecture seule (les notes restent modifiables) et le formulaire propose un chemin de correction, comme une correction dans la période ouverte en cours ou une facture rectificative. La même protection s'applique lorsque vous rapprochez une transaction bancaire ou marquez une dépense comme payée : si la transaction tombe dans une période verrouillée, l'application bloque l'action et vous oriente vers une correction dans la période ouverte en cours.

Les tentatives simultanées de déclarer la même période sont sérialisées. Si deux déclarations se font concurrence, par exemple par un double clic ou deux onglets ouverts, la seconde est rejetée avec un message clair au lieu d'échouer sur une erreur de base de données.

## KOR

Le régime des petites entreprises (kleineondernemersregeling) se gère sous **Paramètres → TVA** : une carte suit votre chiffre d'affaires annuel par rapport au seuil de 20 000 EUR ([`sources/vat-rates.yaml#countries.NL.small_business_threshold_eur`](../../../sources/vat-rates.yaml)) avec une barre de progression, explique ce que l'adhésion implique pour vos factures et contient l'interrupteur d'adhésion. Vous restez éligible jusqu'à 20 000 EUR inclus par an ; seul un chiffre d'affaires supérieur met fin à l'éligibilité KOR. Tant que votre chiffre d'affaires ne dépasse pas 20 000 EUR, la page TVA affiche un rappel qui y mène.

Si vous dépassez 20 000 EUR pendant l'adhésion, une bannière d'avertissement apparaît en haut de l'éditeur de facture. Le titre indique que vous dépassez le seuil KOR, le corps explique que cette facture doit inclure la TVA et non pas 0 %, et le bouton renvoie vers **Paramètres → TVA** pour vous désinscrire auprès du Belastingdienst et désactiver la KOR.

## KIA et Box 3

La KIA (kleinschaligheidsinvesteringsaftrek) et la Box 3 relèvent de l'impôt sur le revenu et se trouvent sous **Rapports → Impôt sur le revenu**, pas sur la page TVA. La carte Box 3 n'apparaît que pour les espaces de travail utilisant le module immobilier.

## Assistant TVA

L'assistant intégré répond aux questions sur votre déclaration avec les chiffres de votre propre espace de travail, et ses réponses peuvent mener directement à l'onglet ou à l'enregistrement concerné.

## Conseils

- Réglez la période de la page sur celle que vous déclarez ; chaque carte et chaque chiffre suivent.
- Passez les contrôles en revue avant d'ouvrir l'onglet Déclaration ; une liste propre signifie généralement que la feuille des rubriques correspond au formulaire du Belastingdienst.
- Utilisez la provision comme objectif de mise de côté ; la marge de 10 % y est déjà incluse.
- L'anneau d'échéance suit la fréquence de déclaration et passe au rouge à trois jours. Prenez-le comme un signal ferme de déposer.
- La tuile TVA du tableau de bord utilise la même fréquence de déclaration que la page TVA, donc la prochaine échéance et la période affichées correspondent toujours à votre rythme réel de dépôt.
- Vous vendez en B2B dans l'UE ? Ouvrez la carte ICP-opgaaf avant de déposer ; c'est une déclaration séparée qu'on oublie facilement.
- Marquez une période comme déposée juste après le dépôt, puis laissez le verrouillage automatique la protéger.
- Ramener un montant de dépense à zéro efface immédiatement la TVA dérivée, pour qu'une dépense corrigée ne laisse pas de TVA périmée sur la déclaration.
