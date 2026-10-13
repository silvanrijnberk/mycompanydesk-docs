---
title: TVA
description: "Suivez la TVA collectée et payée, préparez votre déclaration et anticipez les échéances, selon le formulaire de la Belastingdienst."
last_verified: 2026-10-13
---

<!-- TODO(source-missing): The app also accepts the historical Dutch VAT rates 6% and 19% on invoices, quotes, contracts, recurring invoices and catalog items. sources/vat-rates.yaml#countries.NL does not yet list those rates, so do not document the full valid set until the source is updated. -->

# TVA

Suivez la TVA collectée et payée, préparez votre déclaration et gardez une longueur d'avance sur les échéances. MyCompanyDesk prend en charge des parcours de TVA propres à chaque pays : pour les entreprises néerlandaises, les pages TVA suivent le formulaire de déclaration de la Belastingdienst, et pour les autres pays pris en charge, ce sont les règles et échéances du pays qui s'appliquent. Les chiffres que vous voyez sont donc ceux que vous déclarez.

## Où la trouver

Ouvrez **Impôts** dans la barre latérale. La section commence par les onglets TVA : **Aperçu**, **Déclaration**, **Contrôle**, **Transactions**, **Corrections** et **Périodes**. Après un séparateur viennent les onglets de l'impôt sur le revenu : **Déclaration de bénéfice** et, s'il vous concerne, **Box 3**. Les onglets TVA sont gratuits sur tous les abonnements ; les onglets de l'impôt sur le revenu nécessitent Office. L'onglet actif et la période figurent dans l'URL, si bien qu'actualiser la page ou revenir en arrière vous ramène au même endroit.

Le sélecteur **Période** de la barre d'outils suit la fréquence de déclaration de vos réglages TVA. En déclaration trimestrielle, vous voyez Q1 à Q4 plus l'année entière ; en mensuelle, M01 à M12 plus l'année entière ; en annuelle, seulement l'année entière. Changer de période met à jour chaque carte de chaque onglet. La même fréquence détermine les périodes proposées pour une correction manuelle. Le sélecteur d'année à côté des onglets fait passer l'ensemble à une autre année, et le bouton **Exporter** de la barre d'outils regroupe les téléchargements CSV pour votre comptable.

Comme l'onglet et la période sont dans l'URL, les liens issus du rappel d'échéance TVA dans le panneau de notifications, de la puce d'échéance de l'agenda, de la notification push et de la carte de période TVA dans Dépenses ouvrent exactement la période concernée, au lieu du trimestre en cours. Les anciens liens vers la page TVA fonctionnent toujours et arrivent sur la même période.

## Réglages TVA

**Paramètres › TVA** regroupe les choix qui pilotent les pages TVA et de nombreuses valeurs par défaut des factures.

### Fréquence de déclaration

La question **À quelle fréquence déclarez-vous la TVA ?** détermine les périodes du sélecteur et les déclarations à déposer :

| Choix | Périodes affichées |
|---|---|
| **Chaque mois** | M01 à M12 plus l'année entière |
| **Tous les 3 mois** | Q1 à Q4 plus l'année entière |
| **Une fois par an** | Année entière uniquement |

Changer de fréquence ne réécrit pas les déclarations passées. Cela ne change que le regroupement des périodes à venir. Si le changement touche des périodes déjà déclarées, l'application les nomme et indique à partir de quelle période la nouvelle fréquence s'applique.

### Taux de TVA

**Quel taux de TVA utilisez-vous généralement ?** fixe le taux par défaut des nouvelles lignes de facture et des autres éléments taxables : 21 %, 9 % ou 0 % (sources/vat-rates.yaml#countries.NL.standard, reduced, zero). Vous pouvez toujours choisir un autre taux par facture ou par reçu.

### Suggestion de 9 % pour la nourriture et les boissons

Lorsque vous ajoutez un tout nouvel article à votre catalogue, MyCompanyDesk peut vous demander : « Vendez-vous de la nourriture ou des boissons ? C'est généralement 9 % de TVA. » La question n'apparaît que si votre espace de travail n'a jamais choisi lui-même de taux par défaut dans Paramètres › TVA, si le KOR et l'exonération sont tous deux désactivés, et si vos propres données (code KVK/SBI, votre réponse dans l'assistant de configuration ou la description de votre activité, jamais le nom de l'entreprise) désignent clairement l'alimentation ou la restauration. **Passer à 9 %** applique le taux réduit (sources/vat-rates.yaml#countries.NL.reduced) à ce seul article. Rien n'est présélectionné : ignorer la question ne change rien, elle n'apparaît jamais sur les articles existants, et les espaces sous KOR ou exonérés ne la voient pas.

### Taux de TVA par défaut pour les dépenses

**Et pour vos dépenses ?** définit le taux de TVA présélectionné lorsque vous ajoutez une nouvelle dépense. Vous pouvez toujours le modifier par dépense.

### Exonéré de TVA

L'interrupteur **Mes services sont exonérés de TVA (par exemple soins ou enseignement)** s'adresse aux entreprises dont les services sont exonérés par la loi. Lorsqu'il est activé, les nouvelles lignes de facture et de devis sont exonérées par défaut, et l'onglet Contrôle vous rappelle que la TVA sur les coûts liés à des activités exonérées n'est pas déductible. Ne confondez pas avec le KOR : les règles sont différentes.

### Régime des petites entreprises (KOR)

La carte KOR vous demande si vous participez à la **kleineondernemersregeling** néerlandaise et comporte l'interrupteur **Je participe au KOR**. Lorsqu'il est activé :

- vos factures ne portent pas de TVA et vous ne déposez pas de déclaration de TVA ;
- la TVA collectée n'apparaît pas comme due et la TVA déductible n'est pas déduite ;
- une jauge montre votre chiffre d'affaires de l'année à ce jour face au seuil.

La jauge a trois états :

- **Sous le seuil** : couleur de progression normale.
- **Proche du seuil** : à partir de 80 % du seuil, la ligne sous la jauge vous invite à surveiller votre chiffre d'affaires, pour anticiper le dépassement. Si vous participez, un avis orange indique aussi, à partir de 90 %, la marge qui vous reste.
- **Au-dessus du seuil** : dès que votre chiffre d'affaires de l'année dépasse 20 000 € hors TVA ([`sources/vat-rates.yaml#countries.NL.small_business_threshold_eur`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/vat-rates.yaml)), un avertissement rouge indique que le KOR ne s'applique plus. À partir de la facture qui a franchi le seuil, vous facturez à nouveau la TVA, sur le montant total de cette facture. Désinscrivez-vous sans attendre auprès de la Belastingdienst : vous ne pouvez alors plus participer au KOR pour le reste de l'année et l'année suivante ([`sources/vat-rates.yaml#countries.NL.small_business_on_exceed`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/vat-rates.yaml)).

Les paliers de 80 % et 90 % sont des choix de MyCompanyDesk pour vous prévenir à temps ; la Belastingdienst ne fixe que le seuil de 20 000 €.

<!-- TODO(source-missing): whether the KOR switch is offered to workspaces outside the Netherlands is not yet verified. -->

Si vous ne remplissez plus les conditions du KOR, désactivez l'interrupteur et vérifiez la déclaration suivante avec votre comptable. Pour en savoir plus sur le KOR, voir [plus bas](#kor).

## Onglet Aperçu

La carte du haut résume la période choisie :

- **Solde** : le même total net que la rubrique 5g de l'onglet Déclaration : TVA collectée et autoliquidée (rubriques 2a/4a/4b) moins la TVA déductible de la rubrique 5b, corrections manuelles comprises. La TVA due au titre du guichet unique OSS n'en fait pas partie, car elle relève d'une déclaration distincte. Le solde porte la mention « À payer » ou « À récupérer » et suit le sélecteur de période.
- **Anneau d'échéance** : un compte à rebours circulaire jusqu'à la prochaine échéance, calculé à partir du calendrier du pays de votre espace et de votre fréquence de déclaration. Rouge à 3 jours ou moins, orange jusqu'à 14 jours, vert sinon. Si une déclaration a été déposée mais pas encore payée, l'anneau reste sur cette période jusqu'à la date de paiement et affiche **Déclarée, reste à payer**, puis **À payer aujourd'hui** le jour même. Une période déposée et réglée, ou soldée par un remboursement, ne retient plus l'anneau et le compte à rebours passe à la déclaration suivante. Pour un espace néerlandais, l'échéance d'une déclaration mensuelle ou trimestrielle est le dernier jour du mois qui suit la période, et celle d'une déclaration annuelle tombe avant le 1er avril de l'année suivante (donc le 31 mars au plus tard). À cette date, la Belastingdienst doit avoir reçu à la fois la déclaration et le paiement ([`sources/nl-vat-filing.yaml#deadlines`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-filing.yaml)).

<!-- TODO(source-missing): The app also uses country-specific VAT filing deadlines for workspaces outside the Netherlands (GB, DE and others). Those rules are not in sources/ yet; do not list per-country due dates for them until a human adds them. -->
- **Réserve** : une somme à mettre de côté, soit la TVA encore à payer plus une marge de 10 %, affichée quand le solde est à payer. Si l'administration vous doit de l'argent, la tuile affiche le remboursement.

Deux boutons figurent sous le solde : **Vers la déclaration** ouvre l'onglet Déclaration, et **Comment est-ce calculé ?** détaille le calcul du solde.

Au-dessus de cette carte, un bandeau vous avertit lorsque vos données sont incomplètes (factures en brouillon ou dépenses sans TVA), pour que vous puissiez corriger avant de déclarer.

En dessous, les cartes de période de l'année indiquent pour chaque période le chiffre d'affaires, la TVA sortante et entrante et le solde, avec l'échéance. Une période déclarée affiche sa date de dépôt. Cliquez sur une carte pour changer la période de toute la page. Les périodes à venir restent vides tant qu'elles ne contiennent pas de données réelles.

Une carte annuelle clôt l'onglet : chiffre d'affaires, TVA due et TVA déductible sur l'année, plus une estimation de l'impôt sur le revenu (ou de l'impôt sur les sociétés pour une BV) de cette année, avec le lien **Voir le calcul**.

MyCompanyDesk vous envoie aussi un e-mail une fois par période de TVA à l'approche de l'échéance. L'e-mail renvoie directement vers les pages TVA et suit l'interrupteur **Quand votre déclaration de TVA approche** dans Paramètres › Notifications, où vous pouvez le désactiver.

Si votre entreprise est une BV ou une NV néerlandaise, le même interrupteur envoie aussi, une fois par an, un rappel avant l'échéance de la déclaration d'impôt sur les sociétés (vennootschapsbelasting). Le rappel apparaît dans le panneau de notifications et arrive par e-mail.

## Onglet Contrôle

Une liste de vérifications exécutée sur la période active avant le dépôt. Chaque vérification comporte un lien qui vous mène directement aux écritures concernées :

- **Brouillons** : factures encore en brouillon, qui ne comptent pas dans la déclaration.
- **TVA manquante** : dépenses sans montant de TVA.
- **Reçus manquants** : dépenses sans reçu joint.
- **ICP en attente** : ventes B2B intra-UE à déclarer séparément sur l'ICP-opgaaf. Le montant et le nombre suivent les mêmes règles que l'ICP-opgaaf elle-même et correspondent donc aux lignes réellement déclarées.
- **Origine de l'autoliquidation** : dépenses en autoliquidation dont le pays ou le numéro KVK du fournisseur manque, de sorte que les rubriques 2a/4a/4b ne peuvent pas être justifiées.
- **Écart de déductibilité** : dépenses dont la TVA déductible diffère de la TVA totale, par exemple parce que la catégorie n'est pas entièrement déductible ou qu'il y a un usage privé. Cela correspond aux indicateurs de l'onglet Transactions.

L'en-tête indique combien de points restent ouverts, ou que tout est en ordre pour la période. Les régimes comme le KOR, l'exonération et l'usage privé de la voiture n'apparaissent ici que s'ils vous concernent. Tant que votre chiffre d'affaires reste dans la zone du KOR, cet onglet affiche aussi une suggestion avec un lien vers les réglages du KOR. Une ligne en bas ouvre vos archives de l'année : reçus, factures et contrats au même endroit.

## Onglet Déclaration

### Tableau des rubriques

Un tableau qui reprend le formulaire de déclaration de la Belastingdienst :

| Section | Rubriques |
|---|---|
| 1. Prestaties binnenland | 1a, 1b, 1c, 1d, 1e |
| 2. Verleggingsregelingen binnenland | 2a |
| 3. Prestaties naar of in het buitenland | 3a, 3b, 3c |
| 4. Prestaties vanuit het buitenland aan u verricht | 4a, 4b |
| 5. Voorbelasting en berekening totaal | 5a, 5b, 5c |

Chaque ligne indique le montant (HT) et le montant de TVA. Les rubriques sans transaction sur la période sont regroupées en une seule ligne ; **Afficher toutes les rubriques** les déplie. La barre du bas affiche le total à payer ou à récupérer. Les corrections hors formulaire ont leurs propres lignes : une correction d'écriture générique apparaît comme **Correctie**, une réduction au titre de l'ancien KOR comme **Vermindering volgens de oude KOR**. Le récapitulatif CSV ajoute une ligne de corrections correspondante lorsqu'elles ne sont pas nulles, afin que solde, TVA collectée et TVA payée concordent. La colonne solde TVA de l'aperçu annuel utilise le même total net que le tableau des rubriques, si bien que ses lignes aboutissent au même chiffre.

La rubrique 4a regroupe les achats en autoliquidation auprès de fournisseurs hors UE ; la rubrique 4b ceux auprès de fournisseurs de l'UE. MyCompanyDesk déduit la bonne rubrique du pays du fournisseur afin que le total de la rubrique 5a reste exact.

### Dépôt

Un panneau à côté du tableau montre où en est la période (brouillon, déclarée, payée ou remboursement) et renvoie vers les onglets Contrôle, Transactions et Corrections, avec leurs compteurs. Une fois la période terminée, reportez les chiffres dans Mijn Belastingdienst Zakelijk : **Ouvrir Mijn Belastingdienst Zakelijk** ouvre le portail professionnel à l'adresse `mijn.belastingdienst.nl/mbo-portaal/` sans page de choix intermédiaire. Utilisez ensuite **Marquer comme déclarée** pour que MyCompanyDesk enregistre que vous avez déposé la déclaration. Après le dépôt, vous pouvez enregistrer la référence de paiement (betalingskenmerk) figurant sur votre confirmation.

### Exports pour votre comptable

Le bouton **Exporter** de la barre d'outils propose des exports CSV : un export comptable, un récapitulatif TVA du trimestre choisi et un aperçu annuel. Les factures en brouillon et annulées ne sont pas comptées, de sorte que les totaux correspondent à votre déclaration.

Le nom du fichier ZIP de l'export comptable contient le nom de l'entreprise, la période et le profil d'export, et le README qu'il contient nomme aussi l'entreprise. Un comptable qui télécharge des exports pour plusieurs clients distingue ainsi facilement les fichiers.

### Avertissement d'écart avec une déclaration déposée

Pour la TVA néerlandaise, l'onglet Déclaration continue de recalculer la déclaration à partir de vos écritures actuelles, même lorsque la période est marquée comme déclarée. Si le calcul ne correspond plus à ce que vous avez déposé, un bandeau d'avertissement apparaît au-dessus du tableau des rubriques. Il compare les montants déposés et actuels des rubriques 5a, 5b et du total net 5g, et indique l'écart pour chaque ligne.

Le bandeau vous dit aussi quoi faire, selon l'écart sur le total net (5g). Jusqu'à 1 000 € de TVA inclus, vous reportez l'écart dans votre prochaine déclaration ordinaire. Au-delà de 1 000 €, une déclaration rectificative formelle (suppletieaangifte) est obligatoire, et c'est seulement dans ce cas que le bandeau affiche le bouton **Créer une suppletie** ([`sources/nl-vat-corrections.yaml#suppletie.next_return_threshold_eur`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)). Si seules les rubriques ont bougé et que le montant à payer ou à récupérer est resté le même, le bandeau vous le signale et vous n'avez rien à comptabiliser.

### Cartes internationales

En cas d'activité internationale, des cartes complémentaires apparaissent sous le tableau :

- **ICP-opgaaf** : ventes B2B intra-UE regroupées par numéro de TVA du client, et non par fiche client. Le regroupement et l'affichage utilisent le numéro normalisé (sans espaces ni points), un client sans numéro de TVA reste regroupé sous sa propre fiche, et un client ayant deux numéros de TVA apparaît sur deux lignes. Obligatoire si vous avez vendu des biens ou des services à des clients assujettis dans d'autres pays de l'UE. La carte suit le sélecteur de période, un export trimestriel ne liste donc que les clients UE de ce trimestre.
- **OSS UE** : ventes B2C par pays pour le guichet unique (One Stop Shop).
- **TVA étrangère** : TVA étrangère qui vous a été facturée et qui peut être récupérable via la procédure de remboursement de l'UE. Cette carte ne liste que des fournisseurs d'États membres de l'UE ; les dépenses auprès de fournisseurs hors UE n'y figurent pas. Comme une demande de remboursement est adressée à un seul État membre, la carte vérifie le montant minimal de l'UE pays par pays : lorsque le montant récupérable d'un pays est inférieur à ce minimum, un avertissement nomme les pays concernés. Les dépenses sans pays fournisseur sont vérifiées ensemble, comme un seul groupe.

Ces cartes restent masquées tant qu'il n'y a pas de données internationales ; la plupart des espaces de travail ne les voient donc jamais.

## Onglet Corrections

On y trouve, par année, les écritures qui ne proviennent ni de factures ni de dépenses, avec le bouton **Ajouter une correction**. Chaque correction a un type, un sens, une année fiscale et une période, un montant de TVA et une note facultative ; la liste indique dans quelle déclaration elle est traitée :

- **Usage privé** (privé-onttrekking) compte dans la rubrique 1d.
- **Déclaration rectificative** (suppletie, correction d'une déclaration antérieure) s'impute sur la rubrique 5a ou 5b (sous le KOR, elle n'affecte pas la TVA déductible, la rubrique 5b reste donc à zéro).
- **Ajustement** n'a pas de case propre ; il ne fait que déplacer le total à payer ou à récupérer affiché par MyCompanyDesk, pas une rubrique que vous recopiez.

Saisissez un montant positif et choisissez un sens (**TVA due** ou **TVA à récupérer**). Les montants négatifs sont refusés et le formulaire vous demande alors de choisir le sens ; c'est lui qui détermine si la correction augmente ou diminue la TVA à payer.

L'année fiscale accepte les années de 2000 à l'année en cours plus un. Une année postérieure est refusée avec un message, car une correction enregistrée sur une année future deviendrait introuvable. L'année d'origine d'une déclaration rectificative utilise la même plage et doit être l'année fiscale de l'écriture d'origine.

Une correction n'est prise en compte dans une déclaration que si sa période correspond à votre fréquence de déclaration. Par exemple, une correction enregistrée en Q1 n'entre dans aucune déclaration mensuelle ou annuelle, et une correction en M03 dans aucune déclaration trimestrielle. Lorsque la période d'une correction n'apparaît dans aucune déclaration, la liste affiche un avertissement orange avec une explication, pour que vous puissiez modifier la période avant de déclarer.

Lorsque vous enregistrez ou supprimez une correction, le tableau des rubriques, la carte du haut et les cartes de période se mettent à jour immédiatement ; inutile d'actualiser ou de changer de période.

Pour une **Suppletie**, la liste indique aussi la voie que la Belastingdienst impose. Le seuil est de 1 000 € de TVA ([`sources/nl-vat-corrections.yaml#suppletie.next_return_threshold_eur`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)) : 1 000 € ou moins peut être repris dans votre prochaine déclaration ordinaire, plus de 1 000 € exige une déclaration rectificative formelle (suppletieaangifte). MyCompanyDesk raisonne par période corrigée et additionne toutes les suppleties de cette période : une ligne de 600 € et une de 700 € comptent ensemble pour 1 300 €. Vous avez déclaré trop peu de TVA ? Déposez alors la suppletie dans les 8 semaines suivant la découverte de l'erreur ([`sources/nl-vat-corrections.yaml#suppletie.deadline_after_discovery_weeks`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)). Vous pouvez corriger jusqu'à 5 ans après l'année concernée par la correction ([`sources/nl-vat-corrections.yaml#suppletie.correction_window_years`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)).

### Usage privé de la voiture

Si vous déduisez la TVA d'une voiture de société, vous devez corriger l'usage privé en fin d'année. Lorsque vous enregistrez des frais de voiture, l'onglet Corrections affiche une ligne suggérée **Usage privé de la voiture** ; **Calculer** ouvre la correction :

- Choisissez entre une correction forfaitaire basée sur le prix catalogue de la voiture et une correction selon l'usage réel, basée sur un registre de trajets complet (**Je tiens un registre complet des déplacements**).
- Le forfait est de 2,7 % du prix catalogue, TVA et BPM comprises ([`sources/nl-vat-corrections.yaml#private_car_use.standard_pct_of_catalogue_value`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)). Il passe à 1,5 % lorsque l'usage privé a lieu plus de 4 ans après l'année de mise en service de la voiture, ou lorsque la voiture a été achetée sans déduction de TVA, par exemple sous le régime de la marge ou auprès d'un particulier ([`sources/nl-vat-corrections.yaml#private_car_use.reduced_applies_when`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)). Une voiture mise en service en 2021 relève donc de 2,7 % jusqu'en 2025 inclus et de 1,5 % à partir de 2026. Pour le taux réduit, activez **Véhicule de plus de 5 ans ou acheté sans déduction de TVA**.

La ligne suggérée n'apparaît que dans la dernière période de l'année (Q4, M12 ou la déclaration annuelle), car la correction se fait dans la dernière déclaration de l'année ([`sources/nl-vat-corrections.yaml#private_car_use.declared_in`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)). La correction est intégrée aux totaux de la période dans l'onglet Déclaration.

## Onglet Transactions

La liste de toutes les factures et dépenses qui alimentent la période choisie, pratique pour vérifier par sondage avant le dépôt. Cherchez par numéro ou par client et affinez la liste avec les puces **Tout**, **Ventes**, **Achats**, **Sans reçu**, **Sans TVA** et **Autoliquidation**. Chaque ligne indique sa rubrique et renvoie vers la facture ou la dépense correspondante.

Les dépenses qui ne sont pas entièrement déductibles portent un indicateur comme **TVA non déductible** ou **TVA partiellement déductible**. Survolez l'indicateur (ou donnez-lui le focus) pour voir quelle part de la TVA de la dépense compte comme TVA déductible en rubrique 5b. Sous le KOR, l'infobulle explique qu'aucune TVA n'est déduite car la rubrique 5b est nulle pour toute la période ; l'indicateur concerne alors la période, et non la dépense.

## Onglet Périodes

L'onglet Périodes liste chaque période de l'année avec son statut, sa date de dépôt, sa référence de paiement et son solde. Le statut est **Déclarée**, **À déclarer** (la période est terminée mais l'échéance n'est pas encore passée), **En retard**, **Temporairement ouverte** (un verrou est levé pour une correction), **Verrouillée**, **En cours**, **À venir** ou **Non applicable** pour les périodes terminées avant la création de votre espace. Une période dont l'échéance est passée sans déclaration déposée apparaît **En retard**, même si ses écritures sont déjà verrouillées.

- **Verrouillage automatique** : dès que l'échéance d'une période est passée, MyCompanyDesk la verrouille automatiquement, pour que vos livres restent conformes à la déclaration déposée.
- **Verrouillage manuel** : **Verrouiller** permet de verrouiller vous-même toute période passée de l'année choisie, par exemple juste après un dépôt anticipé. Verrouiller une période encore en cours déclenche un avertissement supplémentaire. Les périodes terminées avant la création de l'espace ne peuvent pas être verrouillées, car MyCompanyDesk n'a aucune donnée les concernant.
- **Marquer comme déclarée** : marquez une période comme déclarée une fois la déclaration déposée. S'il existe une déclaration enregistrée pour une période non marquée, la liste le signale. Lorsque vous ouvrez un rappel d'échéance TVA dans le panneau de notifications, **Marquer comme déclarée** utilise la période nommée dans ce rappel et non la date du jour, afin de mettre à jour le bon trimestre ou le bon mois. Seuls les rappels de cette période sont clôturés, pas tous les rappels TVA en attente de l'espace.
- **Annuler le marquage** : si vous avez marqué une période comme déclarée par erreur, vous pouvez supprimer cet enregistrement. MyCompanyDesk demande d'abord une confirmation. La période reste verrouillée, la tâche et l'échéance de déclaration reviennent, et rien ne change auprès de l'administration fiscale : une déclaration déposée reste déposée.
- **Déverrouiller temporairement** : besoin de corriger quelque chose ? Déverrouillez une période pour 72 heures, après quoi elle se reverrouille d'elle-même, ou utilisez **Verrouiller à nouveau** quand vous avez terminé. Supprimer complètement un verrou n'est possible que tant que l'échéance n'est pas passée.

Le statut de déclaration est suivi par période exacte, et non par plage. Une déclaration annuelle déposée ne marque pas les quatre trimestres comme déclarés, et un trimestre déposé ne marque pas ses mois. Le verrouillage, lui, couvre toute la plage : un verrou annuel protège donc chaque trimestre.

**Moment du dépôt et corrections.** Vous ne pouvez marquer une période comme déclarée qu'une fois celle-ci terminée ; avant cela, le bouton indique à partir de quelle date c'est possible. Une période ne peut être marquée comme déclarée qu'une seule fois. Pour corriger une période déclarée, ajoutez une correction ou une déclaration rectificative dans une période ouverte.

**Périodes verrouillées et actions groupées.** Les actions groupées sur des dépenses ou des factures sont refusées si une ligne sélectionnée tombe dans une période de TVA verrouillée. Le message d'erreur nomme la période exacte (par exemple « 1 avr. 2026 au 30 juin 2026 ») et explique la marche à suivre. Si la période est déjà déclarée, la seule voie est une déclaration rectificative. S'il s'agit d'un simple verrou (échéance passée sans déclaration déposée), vous pouvez déverrouiller temporairement la période dans l'onglet Périodes, ou retirer de votre sélection les lignes de cette période et réessayer.

La modification d'une facture ou d'une dépense dans une période verrouillée est bloquée dans le formulaire : les champs financiers passent en lecture seule (les notes restent modifiables) et le formulaire propose une voie de correction, comme une correction dans la période ouverte en cours ou une facture d'avoir. La même protection s'applique lorsque vous confirmez un rapprochement bancaire ou marquez une dépense comme payée : si la transaction tombe dans une période verrouillée, l'action est bloquée et l'application vous invite à passer par une correction dans la période ouverte en cours.

Les tentatives de dépôt simultanées pour une même période sont traitées l'une après l'autre. Si deux envois se croisent, par exemple après un double clic ou depuis deux onglets ouverts, le second est refusé avec un message clair au lieu d'échouer.

## KOR

La kleineondernemersregeling se gère dans **Paramètres › TVA** : une carte compare votre chiffre d'affaires annuel au seuil de 20 000 € ([`sources/vat-rates.yaml#countries.NL.small_business_threshold_eur`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/vat-rates.yaml)) avec une barre de progression, explique ce que l'adhésion implique pour vos factures et contient l'interrupteur d'adhésion. Vous restez éligible jusqu'à 20 000 € de chiffre d'affaires annuel inclus ; seul le chiffre d'affaires au-delà met fin au KOR. Tant que votre chiffre d'affaires reste dans la zone du KOR, l'onglet Contrôle affiche une suggestion avec un lien vers ce réglage. Lorsque le KOR est activé, les autres réglages TVA (fréquence, taux par défaut, exonération) se replient derrière le bouton **Afficher les autres réglages TVA**, et le haut de la page indique « Vous participez à la KOR : vous ne facturez pas de TVA. »

Si vous dépassez 20 000 € tout en participant encore, un bandeau d'avertissement apparaît en haut de l'éditeur de facture. Il indique que vous êtes au-dessus du seuil du KOR, explique que la facture doit comporter de la TVA au lieu de 0 %, et son bouton ouvre **Paramètres › TVA** pour que vous puissiez vous désinscrire auprès de la Belastingdienst et désactiver le KOR.

Le KOR peut aussi être activé depuis le formulaire de facture. Une facture nouvelle ou en brouillon portant de la TVA, alors que l'entreprise n'a pas de numéro de TVA et n'est pas encore inscrite, affiche une suggestion KOR près des lignes. **Activer le KOR** demande d'abord une confirmation ; l'activation s'applique aux chiffres de TVA de toute l'année et aux déclarations encore ouvertes, et les factures et devis en brouillon passent également à 0 % de TVA. Vous avez déjà déposé vous-même une déclaration de TVA cette année ? La boîte de dialogue précise qu'une année déclarée nécessite une rectification avant que le KOR concorde à nouveau. La suggestion n'apparaît pas sur les devis, les avoirs ni les factures en autoliquidation, et disparaît dès que vous la fermez, qu'un numéro de TVA est enregistré ou que le KOR est activé.

Tant que le KOR est activé, les factures n'ont pas besoin de numéro de TVA : la vérification avant envoi demande un IBAN et ne bloque plus la facture pour un numéro de TVA manquant. L'assistant de configuration pose la question du KOR avec de vraies réponses : oui, non ou je ne sais pas. « Je ne sais pas » rappelle d'abord que seule votre propre inscription auprès de la Belastingdienst vous fait entrer dans le régime ; un faible chiffre d'affaires ne suffit pas, et le courrier de l'administration fiscale vous le confirme. Si vous répondez oui, le régime est activé et les factures sont établies sans TVA, avec une mention indiquant que vous participez au KOR.

### Documents et e-mails sous le KOR

Lorsque le KOR est activé, les lignes des documents comptent comme TVA à 0 %. Les PDF de factures, devis, avoirs et contrats affichent **Sous-total** et **Total** sans mention HT/TTC et sans ligne de TVA, les e-mails de facture omettent le récapitulatif HT/TTC sous les lignes, et les nouveaux articles du catalogue sont à 0 % de TVA par défaut. L'éditeur de lignes reste discret lui aussi : une ligne n'affiche ni taux de TVA ni mention « 0 % TVA » ou « HT », que ce soit dans la fenêtre de ligne, sur la carte de ligne mobile ou dans le détail du document. La page de signature affiche **Total** au lieu de **Total TTC** lorsque le devis ne comporte pas de TVA. La même formulation s'applique tant que l'interrupteur d'exonération distinct est activé, et les mentions de TVA dans les conditions publiées via votre site restent neutres, même après la désactivation du KOR.

## KIA et Box 3

La KIA (kleinschaligheidsinvesteringsaftrek) et la Box 3 relèvent de l'impôt sur le revenu. Vous les trouvez dans les onglets **Déclaration de bénéfice** et **Box 3** de la section **Impôts**, après les onglets TVA, et elles nécessitent Office. L'onglet **Box 3** n'apparaît que si le module Propriétés est activé et que votre entreprise n'est pas une BV.

## Questions de TVA à l'assistant

L'assistant intégré répond aux questions sur votre déclaration à partir des chiffres de votre propre espace, et ses réponses mènent directement à l'onglet ou à l'écriture concernés.

## Conseils

- Réglez la période sur celle que vous déclarez ; chaque carte et chaque indicateur suit.
- Parcourez l'onglet Contrôle avant d'ouvrir l'onglet Déclaration ; une liste sans anomalie signifie généralement que le tableau des rubriques correspond au formulaire de la Belastingdienst.
- Servez-vous de la réserve comme objectif d'épargne ; elle inclut déjà une marge de 10 %.
- L'anneau d'échéance suit votre fréquence de déclaration et passe au rouge à trois jours. Prenez-le comme un signal ferme pour déclarer.
- La tuile TVA du tableau de bord utilise la même fréquence que les pages TVA, l'échéance et la période affichées correspondent donc toujours à votre rythme réel de déclaration.
- Vous vendez en B2B dans l'UE ? Ouvrez la carte ICP-opgaaf avant de déclarer ; c'est une déclaration distincte, facile à oublier.
- Marquez une période comme déclarée juste après le dépôt, puis laissez le verrouillage automatique la protéger.
- Mettre le montant d'une dépense à zéro efface aussitôt la TVA qui en découle, si bien qu'une dépense corrigée ne laisse pas de TVA obsolète dans la déclaration.

## Voir aussi

- [Comment déposer une déclaration de TVA ?](/fr/faq/vat-return)
- [Factures](/fr/features/invoices)
- [Dépenses](/fr/features/expenses)
- [Paramètres de l'entreprise](/fr/settings/company)
