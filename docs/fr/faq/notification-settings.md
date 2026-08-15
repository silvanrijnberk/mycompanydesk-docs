---
title: "Paramètres de notification"
last_verified: 2026-08-15
chatbot:
  triggers:
    - "notifications"
    - "notification settings"
    - "email notifications"
    - "alerts"
    - "meldingen"
    - "notificatie instellingen"
    - "benachrichtigungen"
    - "parametres notification"
  actions: []
  follow_up:
    - "How do I send payment reminders?"
    - "How do I change my email?"
---

Pour gérer vos paramètres de notification :

1. Allez dans Paramètres → « Notifications »
2. Activez ou désactivez les sujets de notification. Les catégories sont :
   - **Factures qui méritent votre attention** : factures en retard, factures proches de l'échéance, brouillons laissés en suspens, prélèvements échoués et heures sans tarif.
   - **Argent entrant** : paiements, paiements confirmés et transactions bancaires inhabituelles.
   - **Échéances à venir** : TVA, impôt sur le revenu, impôt sur les sociétés, seuil micro-entreprise, et contrats ou projets qui arrivent à expiration. Vous les recevez bien à l'avance pour ne jamais être en retard. Cette catégorie comprend également les enregistrements automatiques qui n'ont pas pu être effectués parce que la date tombe dans une période de TVA déjà déclarée et verrouillée, par exemple une facture transférée depuis la boîte de réception ou une transaction bancaire. La notification indique le fournisseur et la date de la facture, et vous renvoie vers la boîte de réception ou le flux bancaire pour que vous puissiez enregistrer la dépense dans la période en cours ou déposer une déclaration complémentaire.
   - **Nouvelles opportunités** : demandes de devis, devis signés et ventes via votre site web.
   - **Nouveau message dans votre boîte de réception** : une alerte sur votre téléphone dès qu'un client ou fournisseur vous écrit.
   - **Dépense à échéance** : échéances à venir des dépenses que vous avez créées, comme un loyer ou des charges planifiés, pour que vous puissiez les payer ou les enregistrer à temps.
   - **Règle fournisseur apprise** : une alerte dans l'application quand MyCompanyDesk a appris une nouvelle règle de fournisseur de confiance pour le flux bancaire à partir de vos brouillons confirmés.
   - **Conseils et actualités de MyCompanyDesk** : au maximum un e-mail par mois.
   Les messages vraiment importants concernant votre compte sont toujours envoyés; vous ne pouvez pas les désactiver.
3. Sur la même page, vous pouvez aussi activer les notifications push pour l'appareil que vous utilisez
4. Si vous avez fermé la demande du navigateur, cliquez sur la cloche de notifications en haut de l'application et choisissez **Activer** pour activer les notifications push plus tard
5. Les modifications sont enregistrées automatiquement

## La liste de notifications

Les notifications sont regroupées par jour pour que la liste se lise comme une chronologie : Aujourd'hui, Hier, le jour de la semaine dans les sept derniers jours, et la date pour les entrées plus anciennes.

Si plusieurs mises à jour informatives similaires arrivent le même jour, par exemple des notes de version ou des astuces produit, elles se replient derrière la plus récente. Un bouton indique combien d'autres il y a ; cliquez pour développer le groupe, cliquez à nouveau pour le replier.

Sur un téléphone ou une tablette, vous pouvez faire glisser une ligne pour agir vite : vers la gauche pour ignorer, vers la droite pour reporter. La ligne montre ce qui se passera au relâchement. Chaque ligne comporte aussi des boutons Ignorer et Reporter.

Vous pouvez parcourir la liste au clavier : les flèches déplacent la sélection, Entrée ou Espace ouvre la notification sélectionnée, et Échap ferme le panneau. Le panneau passe au-dessus des autres éléments flottants pour que le focus reste à l'intérieur tant qu'il est ouvert.

Pendant le premier chargement de la liste, des lignes de substitution grises, en forme de vraies notifications, apparaissent à la place d’un spinner, pour que la mise en page ne saute pas quand les vraies lignes arrivent. Lorsque vous ignorez ou reportez une ligne, les lignes situées en dessous remontent en douceur plutôt que de sauter. Un groupe replié se déplie avec une animation.

## Reporter une notification

Vous pouvez reporter temporairement une notification d'action sans la marquer comme lue. Cliquez sur la cloche pour ouvrir la liste, puis choisissez **Snooze** sur la ligne concernée. Vous pouvez reporter jusqu'à :

- **1 heure** à partir de maintenant
- **Demain** à 09:00
- **La semaine prochaine** à 09:00

Après le prochain rafraîchissement, la notification disparaît de la liste des non-lues, mais la ligne reste visible avec un bouton d'annulation jusque-là. Les notes de version et les astuces ne peuvent pas être reportées; vous les lisez ou les marquez comme lues.

## Ne pas déranger

En bas du panneau de notifications, vous pouvez activer **Ne pas déranger** pour les notifications push. Choisissez entre :

- **Désactivé**
- **1 heure**
- **Jusqu'à demain** à 09:00

Tant que Ne pas déranger est actif, les notifications push sont retenues, mais les notifications continuent d'apparaître dans l'application et les e-mails restent envoyés. Le panneau affiche l'état actif et l'heure d'expiration.

## Le panneau de détail

Cliquer sur une notification ouvre un panneau à droite avec le contexte complet de cette notification. Pour une facture en retard, vous voyez le total, le montant restant dû, le statut de paiement et la date de facturation. Pour une échéance de TVA, vous voyez la période et la date d'échéance. Pour les notifications groupées, le panneau liste les factures, devis ou enregistrements individuels derrière le résumé.

Le panneau attend que l’enregistrement sous-jacent soit chargé avant de changer. Jusqu’alors, la notification précédente reste visible et ses boutons sont inactifs, pour que rien ne bouge sous votre curseur. Une fois l’enregistrement prêt, le panneau effectue un fondu enchaîné vers la nouvelle notification en une seule étape.

Les actions pour cette notification sont classées afin que la plus importante apparaisse en premier et soit mise en évidence comme action principale. Les autres restent sur la même ligne. S'il y a plus d'actions que l'espace ne le permet, les actions supplémentaires sont regroupées derrière un bouton **Plus** (trois points). Appuyez dessus pour voir les actions restantes sans fermer le panneau.

Les actions disponibles dépendent de la notification:

- **Marquer comme payée**: enregistre un paiement manuel pour le solde restant et clôt la notification de facture.
- **Marquer comme déclarée**: marque la période de TVA comme déclarée; s'affiche uniquement pour les notifications d'échéance de TVA.
- **Envoyer un rappel**: envoie un rappel de paiement pour la facture, affiché pour les factures en retard.
- **Ouvrir**: ouvre l'enregistrement sous-jacent, comme la facture, le devis ou le contrat.
- **Reporter** (ou **Plus tard**): diffère temporairement la notification sans la marquer comme lue.
- **Ignorer** (ou l'icône **X**): supprime la notification de votre propre liste de non-lues. Sur un téléphone, la même icône de fermeture se trouve en haut à droite de la superposition de détail, afin qu'elle ne recouvre pas le montant.

Les notes de version et les astuces n'ont pas de panneau de détail, car il n'y a aucun enregistrement sous-jacent sur lequel agir.

Les notifications push fonctionnent dans votre navigateur et dans l'application Android. Sur Android, la notification affiche l'icône de l'application, la couleur de la catégorie et, quand c'est possible, l'avatar de l'expéditeur.

Si une alerte vous échappe, vérifiez à la fois l'interrupteur de notification et l'adresse e-mail de votre compte.
