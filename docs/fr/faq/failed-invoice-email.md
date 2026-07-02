---
title: "Échec d'envoi d'une facture"
last_verified: 2026-07-02
chatbot:
  triggers: ["failed invoice email", "invoice email failed", "failed send invoice", "invoice not sending", "invoice email issue", "fix failed invoice email", "mislukte factuur-e-mail", "factuurmail mislukt", "factuur e-mail mislukt", "factuur versturen mislukt", "hoe los ik een mislukte factuur-e-mail op", "fehlgeschlagene rechnungs-e-mail", "rechnungs-e-mail fehlgeschlagen", "rechnung senden fehlgeschlagen", "wie behebe ich eine fehlgeschlagene rechnungs-e-mail", "e-mail de facture echoue", "email facture echoue", "envoi facture echec", "comment corriger un e-mail de facture echoue"]
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

Astuce : affichez d'abord l'aperçu de la facture si vous voulez confirmer le bon client et le bon document avant de renvoyer.
