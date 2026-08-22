---
title: "Paramètres de notification"
description: "Gérez vos sujets de notification dans Paramètres > Meldingen. Sur ordinateur, la cloche ouvre une popover compacte ; sur mobile, un sheet plein écran. Une page Notifications dédiée à /meldingen donne à la liste l’espace nécessaire pour la vue détaillée en deux panneaux et le tri au clavier."
last_verified: 2026-08-21
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

1. Allez dans Paramètres → "Meldingen" (notifications)
2. Activez ou désactivez les sujets de notification par catégorie :
   - **Attention factures** : factures en retard, factures proches de l’échéance, brouillons abandonnés, prélèvements échoués, factures non livrées, facturation automatique de contrats suspendue et saisies de temps sans tarif.
   - **Argent entrant** : paiements, paiements confirmés et transactions bancaires inhabituelles.
   - **Échéances proches** : TVA, impôt sur le revenu, impôt sur les sociétés, seuil KOR, et contrats ou projets arrivant à expiration. Vous les recevez bien à l’avance pour ne jamais être en retard. Cette catégorie inclut aussi les réservations automatiques qui n’ont pas pu être créées parce que la date tombe dans une période de TVA déjà déclarée et verrouillée, comme une facture de boîte de réception transférée ou une transaction bancaire. La notification cite le fournisseur et la date de facture et vous renvoie vers la boîte de réception ou le flux bancaire, afin que vous puissiez la comptabiliser dans la période en cours ou déposer une déclaration complémentaire.
   - **Nouvelles opportunités** : demandes de devis, devis signés et ventes sur votre site web.
   - **Nouveau message dans la boîte de réception** : une alerte sur votre téléphone dès qu’un client ou fournisseur envoie un e-mail.
   - **Dépense à échoir** : échéances à venir pour les dépenses que vous avez créées, comme un loyer planifié ou des charges, afin que vous puissiez les payer ou les enregistrer à temps.
   - **Règle fournisseur apprise** : une alerte in-app lorsque MyCompanyDesk apprend une nouvelle règle fournisseur de confiance pour le flux bancaire à partir de vos brouillons confirmés.
   - **Conseils et actualités MyCompanyDesk** : au maximum un e-mail par mois.
   Les messages vraiment importants concernant votre compte sont toujours envoyés et ne peuvent pas être désactivés.
3. Sur la même page, vous pouvez activer les notifications push pour l’appareil que vous utilisez
4. Si vous avez ignoré l’invite du navigateur, cliquez sur la cloche de notification en haut de l’application, choisissez **Plus d’options** (trois points), puis sélectionnez **Activer** pour activer les notifications push plus tard
5. Les modifications sont enregistrées automatiquement

## La liste de notifications

Les notifications sont regroupées en trois volets pour lire la liste comme une chronologie : **Aujourd’hui**, **Hier** et **Plus ancien**.

Ouvrir la liste marque tout ce qu’elle contient comme vu, de sorte que le compteur de la cloche revient à zéro. Chaque ligne garde son propre point non lu jusqu’à ce que vous l’ouvriez.

Si plusieurs mises à jour informatives similaires arrivent le même jour, par exemple des notes de version ou des astuces produit, elles se replient derrière la plus récente. Un bouton indique combien d’autres il y a ; cliquez pour développer le groupe, recliquez pour le réduire.

Sur un téléphone ou une tablette, vous pouvez balayer une ligne pour agir rapidement : vers la gauche pour rejeter, vers la droite pour reporter. La ligne montre ce qui se passe quand vous relâchez. Des boutons Rejeter et Reporter sont aussi disponibles sur chaque ligne.

Vous pouvez parcourir la liste au clavier : les flèches déplacent la sélection, Entrée ou Espace ouvre la notification sélectionnée, et Échap ferme la popover ou le sheet. La popover ou le sheet se situe au-dessus des autres éléments flottants, de sorte que le focus reste à l’intérieur tant qu’il est ouvert.

Pendant le premier chargement de la liste, des lignes grises en forme de vraies notifications apparaissent à la place d’un spinner, pour que la mise en page ne saute pas quand les vraies lignes arrivent. Quand vous rejetez ou reportez une ligne, les lignes restantes remontent en douceur dans l’espace plutôt que de sauter. Développer un groupe replié fait apparaître ses lignes supplémentaires en place.

## La popover et le sheet de notifications

Sur ordinateur, cliquer sur la cloche ouvre une popover compacte en dessous avec la même liste de notifications. Sur téléphone ou tablette, la cloche ouvre un sheet plein écran. L’un et l’autre servent à jeter un coup d’œil : cliquez sur une ligne pour quitter la popover ou le sheet et ouvrir directement l’enregistrement sous-jacent.

Un lien en bas, **Alle meldingen bekijken**, ouvre la page **Notifications** dédiée à `/meldingen`. Cette page donne à la liste assez d’espace pour afficher le panneau de détail à côté sur les grands écrans, avec le même tri au clavier : flèches pour se déplacer, Entrée ou Espace pour ouvrir, et `E` pour agir sur la notification sélectionnée.

Tant que la popover ou le sheet est ouvert, les popups d’arrivée de nouvelles notifications sont supprimées ; elles reprennent une fois que vous le fermez.

## Reporter une notification

Vous pouvez temporairement mettre une notification d’action en sourdine sans la marquer comme lue. Cliquez sur la cloche pour ouvrir la liste, puis choisissez **Reporter** sur la ligne concernée. Vous pouvez reporter jusqu’à :

- **1 heure** à partir de maintenant
- **Demain** à 09:00
- **La semaine prochaine** à 09:00

Après le prochain rafraîchissement, la notification disparaît de la liste non lue, mais la ligne reste visible un moment avec un bouton **Annuler**. Les notes de version et les astuces ne peuvent pas être reportées ; vous les lisez ou les marquez comme lues.

## Ne pas déranger

Ouvrez la liste de notifications et cliquez sur **Plus d’options** (trois points) dans l’en-tête pour régler **Ne pas déranger** pour les notifications push. Choisissez entre :

- **Désactivé**
- **1 heure**
- **Jusqu’à demain** à 09:00

Lorsque Ne pas déranger est actif, les notifications push sont retenues, mais les notifications apparaissent toujours dans la liste de l’application et les e-mails ne sont pas affectés. Une pastille dans l’en-tête du panneau indique l’état actif et l’heure d’expiration.

## Le panneau de détail

Le panneau de détail se trouve sur la page **Notifications** dédiée (`/meldingen`), où le tiroir a assez de largeur pour afficher la liste et le panneau côte à côte. Il ne fait pas partie de la popover ou du sheet compact de la cloche sur les petits écrans. Cliquez sur une notification dans la page pour ouvrir le panneau avec le contexte complet de l’élément. Pour une facture en retard, vous voyez le total, le montant ouvert, le statut de paiement et la date d’émission. Pour une échéance TVA, vous voyez la période et la date d’échéance. Pour les notifications regroupées, le panneau liste les factures, devis ou enregistrements individuels derrière le résumé.

Le panneau attend que l’enregistrement sous-jacent soit chargé avant de basculer. D’ici là, la notification précédente reste visible et ses boutons sont inactifs, pour que rien ne bouge sous votre curseur. Une fois l’enregistrement prêt, le panneau effectue un fondu enchaîné vers la nouvelle notification en une étape fluide.

Les actions pour cet élément sont classées afin que la plus importante soit la première et marquée comme action principale. Le reste reste sur la même ligne. S’il y a plus d’actions que le panneau n’a de place, les supplémentaires se cachent derrière le bouton **Plus d’actions** (trois points). Cliquez dessus pour voir le reste sans fermer le tiroir.

Les actions disponibles dépendent de la notification :

- **Marquer comme payé** : enregistre un paiement manuel pour le solde restant et clôture la notification de facture.
- **Marquer comme déclaré** : marque la période de TVA comme déclarée ; visible uniquement pour les échéances TVA.
- **Envoyer un rappel** : envoie un rappel de paiement pour la facture, visible pour les factures en retard.
- **Ouvrir** : ouvre l’enregistrement sous-jacent, comme la facture, le devis ou le contrat.
- **Reporter** (ou **Plus tard**) : reporte temporairement la notification sans la marquer comme lue.
- **Rejeter** (ou l’icône **X**) : supprime la notification de votre propre liste de non lus. Sur un téléphone, la même icône de fermeture se trouve en haut à droite de la superposition de détail, pour ne pas masquer le montant.

Les notes de version et les astuces n’ont pas de panneau de détail, car il n’y a pas d’enregistrement sous-jacent sur lequel agir.

Les notifications push fonctionnent dans votre navigateur et dans l’application Android. Sur Android, la notification affiche l’icône de l’application, la couleur de la catégorie et, si possible, l’avatar de l’expéditeur.

Si une alerte manque, vérifiez à la fois l’interrupteur de notification et l’adresse e-mail de votre compte.
