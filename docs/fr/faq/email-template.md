---
title: Modèles d'e-mail
description: "Les e-mails de facture, devis, relance et avoir partent d'un texte standard. Votre texte se définit par type et par langue sous Paramètres → E-mail."
last_verified: 2026-09-30
chatbot:
  triggers: ["email template", "customize email", "invoice email message", "email text", "change email message", "email sjabloon", "email aanpassen", "e-mail vorlage", "modele email", "personnaliser email"]
  actions:
    - { label: "Ouvrir les textes e-mail", to: "/settings/email/facturen" }
  follow_up: ["How do I send an invoice by email?", "How do I change the PDF style?"]
---
Les e-mails de facture, de devis, de relance et d'avoir partent des textes standard et éprouvés de MyCompanyDesk, dans la langue de vos documents. Aucun modèle à créer ni à entretenir, et vous pouvez tout à fait le laisser ainsi. Vous préférez votre propre formulation ? Définissez-la une fois, et chaque nouveau document de ce type en partira.

Chaque type porte aussi le choix du **style de l'e-mail** : Formel (le texte d'origine, vouvoyé), Court, Personnel, Complet et Minimal. Le style décide des contenus que le texte standard emporte, par exemple si le tableau des lignes figure sous le message (Complet le fait toujours, même pour un devis, les autres suivent l'interrupteur des lignes de facture). Votre texte personnalisé gagne toujours contre un style, et le choix du style vaut pour toutes les langues.

Les e-mails d'avoir utilisent un modèle dédié qui présente le document comme un avoir, indique le montant crédité comme un nombre positif et ne demande pas de paiement ni n'inclut de date d'échéance.

## Votre propre texte standard

Vous définissez votre propre texte standard à deux endroits :

1. **E-mails de factures et devis** sous Paramètres → E-mail : choisissez le type d'e-mail (facture, devis, relance ou avoir) et la langue de l'e-mail, rédigez votre objet et votre message, puis enregistrez. Votre texte porte l'étiquette **Texte personnalisé** ; avec **Revenir au texte standard**, vous récupérez le texte d'origine après une confirmation.
2. **La fenêtre d'envoi** : rédigez l'objet et le message à votre goût, puis cochez **Utiliser ce texte désormais pour les factures** (ou pour les devis, relances, avoirs ou factures de loyer). Dès que l'e-mail est parti, votre texte est le point de départ de chaque nouveau document de ce type.

- Le texte est enregistré avec des espaces réservés : nom, numéro, montant et dates sont remplis par MyCompanyDesk à chaque e-mail.
- Votre texte vaut par type de document et par langue. Les autres langues conservent le texte standard.
- La fenêtre d'envoi indique quand votre propre texte est actif et propose **Revenir au texte standard de MyCompanyDesk**. Le changement prend effet à l'envoi ; juste après, vous pouvez l'annuler avec **Annuler**.
- Seul le propriétaire de l'espace de travail peut définir ou réinitialiser le texte standard. Un comptable ajuste un e-mail précis, mais ne change pas le texte par défaut.

## Le style de l'e-mail

Sous **Paramètres → E-mail → E-mails de factures et devis** vous choisissez un style par type d'e-mail. Les cinq styles remplissent le texte standard pour vous :

- **Formel** : le texte d'origine vouvoyé, comme l'e-mail partait déjà
- **Court** : quelques lignes avec l'essentiel, tutoyé
- **Personnel** : chaleureux, tutoyé, avec un mot de merci pour la collaboration
- **Complet** : tout pour payer ou décider, toujours avec le tableau des lignes en dessous, même pour un devis
- **Minimal** : seulement le numéro, le total et la date

Avec un style, chaque prochain e-mail de ce type ressort ainsi, dans toutes les langues. Avez-vous un texte personnalisé pour ce type, la page demande si le style doit le remplacer, et **Revenir au texte standard** vous ramène par type au style choisi en dernier. L'interrupteur dans la fenêtre d'envoi qui ajoute ou enlève le tableau des lignes décide à l'envoi des lignes, tant que le tableau est permis pour ce type ; le style Complet l'emporte toujours avec lui.

Ce que vous pouvez ajuster :
1. L'expéditeur : accédez à Paramètres → E-mail → Adresses et envoi et choisissez votre propre domaine (Office), Gmail ou Outlook
2. Votre signature : renseignez votre e-mail de support, votre site web et vos liens sociaux sous Paramètres → Informations de l'entreprise ; ils apparaissent sous chaque e-mail que vous envoyez, et sur vos factures et votre site web. Vos labels et certifications (STEK, VCA, CE et autres) y figurent également ; sous Paramètres → E-mail, vous choisissez par type d'e-mail si c'est le cas
3. Un e-mail ponctuel : dans la fenêtre d'envoi, vous pouvez ajuster le destinataire, l'objet et le message avant l'envoi

Astuce : les informations de votre signature figurent aussi sur vos factures et votre site web ; les remplir dans les Informations de l'entreprise suffit pour que chaque e-mail soit complet.