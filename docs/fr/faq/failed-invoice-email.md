---
title: "Échec d'envoi d'une facture"
description: "Corrigez un e-mail de facture échoué et sachez quoi faire quand un message est retenu par le contrôle du contenu des envois."
last_verified: 2026-10-01
chatbot:
  triggers: ["failed invoice email", "invoice email failed", "failed send invoice", "invoice not sending", "invoice email issue", "fix failed invoice email", "mislukte factuur-e-mail", "factuurmail mislukt", "factuur e-mail mislukt", "factuur versturen mislukt", "hoe los ik een mislukte factuur-e-mail op", "te veel ontvangers", "inhoudscontrole", "bericht vastgehouden", "fehlgeschlagene rechnungs-e-mail", "rechnungs-e-mail fehlgeschlagen", "rechnung senden fehlgeschlagen", "wie behebe ich eine fehlgeschlagene rechnungs-e-mail", "e-mail de facture echoue", "email facture echoue", "envoi facture echec", "comment corriger un e-mail de facture echoue", "recipient cap", "content hold", "message retenu"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open email settings", to: "/settings/email" }
  follow_up: ["How do I change the customer email?", "How do I preview the invoice first?", "Where do I check email delivery settings?"]
---

Pour résoudre l'échec d'envoi d'une facture par e-mail :
1. Vérifiez que la fiche client contient la bonne adresse e-mail
2. Ouvrez la page de détail de la facture et consultez le statut d'envoi ou le message d'erreur affiché
3. Vérifiez vos réglages e-mail dans Paramètres → "E-mail"
4. Renvoyez la facture ; les brouillons peuvent aussi être envoyés par e-mail, Envoyer est l'action principale et finalise le brouillon dans la même étape
5. Si le client ne reçoit toujours rien, demandez-lui de vérifier son dossier spam ou courrier indésirable

## Nouveaux comptes et limites anti-abus

La facture vient-elle d'être envoyée depuis un nouvel espace de travail ? L'échec peut alors venir d'une de nos limites anti-abus :

- Le message a trop de destinataires (à, cc et cci ensemble). Le message d'erreur indique la limite actuelle ; divisez le message en plusieurs e-mails. La limite peut aussi être temporairement plus basse que d'habitude, par exemple un destinataire par message. Vous pouvez nous contacter si vous en avez besoin de plus.
- Le message est retenu pour vérification du contenu. Voir plus bas ce que cela signifie et que faire.

## Votre message est retenu pour vérification du contenu

L'application indique que le message n'est pas encore parti parce que nous le vérifions d'abord ? Notre contrôle du contenu des envois le retient alors un instant. Voici ce qui se passe :

- **Le message n'a pas été envoyé.** Il n'est pas non plus dans une file d'attente et ne partira pas tout seul plus tard. Votre client n'a donc encore rien reçu.
- **Nous regardons le texte et le contexte.** Par exemple le nombre de destinataires, le montant et l'ancienneté de votre espace de travail. Le contrôle vise les envois en masse à des inconnus et les abus. Une facture ordinaire ou un e-mail à vos propres clients est rarement retenu.
- **C'est généralement réglé sous une heure.** Après validation, vous recevez une notification dans l'application. Renvoyez alors le message vous-même. À partir de là, vos messages partent immédiatement.
- **Le contrôle couvre les factures et devis, les e-mails isolés et la boîte de réception.** Les messages à votre comptable n'en font pas partie.
- **Une panne du contrôle ne bloque jamais votre courrier.** Si quelque chose se passe mal de notre côté, votre message part simplement.

Le contrôle se désactive de lui-même dès que votre espace de travail a fait ses preuves : avec un domaine d'envoi vérifié, un abonnement payant (une période d'essai ne compte pas), une série de messages bien délivrés, ou après que nous avons validé un message retenu. Remplir votre numéro KVK n'aide pas ici : le registre ne montre pas qui se trouve réellement derrière un compte.

Votre message est toujours retenu après une heure, ou aucune notification n'est arrivée ? Contactez-nous, nous regarderons.

Astuce : affichez d'abord l'aperçu de la facture si vous voulez confirmer le bon client et le bon document avant de renvoyer.
