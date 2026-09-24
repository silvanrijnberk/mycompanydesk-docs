---
title: "Importer vos anciens e-mails"
description: "Reprenez vos anciens e-mails de Hostinger ou d'un autre fournisseur dans votre boîte MyCompanyDesk, avec dossiers, e-mails envoyés et dates d'origine."
last_verified: 2026-09-24
chatbot:
  triggers: ["oude e-mails importeren", "oude mail importeren", "mail overzetten", "mail verhuizen", "e-mail importeren", "hostinger mail", "postbus overzetten", "import email", "migrate email", "e-mails importieren", "importer mes e-mails", "importer mes anciens e-mails", "reprendre ma boîte mail", "migrer mes e-mails", "transférer mes anciens e-mails", "anciens messages"]
  actions:
    - { label: "Ouvrir Adresses", to: "/inbox/settings" }
    - { label: "Ouvrir Votre site et domaine", to: "/settings/domein" }
  follow_up: ["Comment connecter mon propre domaine ?", "Quels serveurs de noms saisir chez Hostinger ?"]
---

# Importer vos anciens e-mails

Oui, vous pouvez reprendre vos anciens e-mails dans la boîte de réception MyCompanyDesk, par exemple depuis Hostinger, TransIP, Gmail, Outlook ou un autre fournisseur. Il existe deux façons de le faire. Dans les deux cas, il vous faut Office, car la boîte mail sur votre propre domaine fait partie d'Office.

## Vous déménagez votre domaine et votre messagerie depuis Hostinger ou un autre hébergeur

Utilisez alors l'assistant **Je viens d'un autre hébergeur**. Il s'occupe de tout en une fois : connecter votre domaine, créer vos boîtes mail et reprendre vos anciens e-mails.

1. Allez dans **Paramètres** → **Votre site et domaine**.
2. Choisissez **Je viens d'un autre hébergeur**.
3. Saisissez votre nom de domaine et cliquez sur **Commencer**.
4. Saisissez chaque adresse e-mail que vous aviez chez votre ancien hébergeur, avec le mot de passe de cette boîte mail. Chaque adresse obtient sa propre boîte mail chez nous.
5. Cochez la case qui nous autorise à conserver votre mot de passe chiffré jusqu'à la fin du déménagement, puis cliquez sur **Connecter et transférer**.

L'assistant récupère tout de suite vos anciens e-mails. Une fois votre domaine passé chez nous, il récupère encore une fois ce qui est arrivé entre-temps, puis une dernière fois 48 heures plus tard. Nous effaçons ensuite votre mot de passe, et dans tous les cas au plus tard après quatorze jours. Ne résiliez votre offre chez votre ancien hébergeur que lorsque l'assistant vous indique que c'est possible.

## Vous avez déjà une boîte mail chez nous et voulez seulement reprendre vos anciens e-mails

1. Ouvrez **Boîte de réception** et choisissez **Adresses** en haut.
2. Allez à la carte **Reprendre une boîte mail existante**.
3. Choisissez votre **Ancien fournisseur**. Pour Hostinger, le serveur est déjà rempli (`imap.hostinger.com`, port 993).
4. Sous **Boîte mail chez nous**, choisissez la boîte mail qui doit recevoir les e-mails.
5. Saisissez l'adresse e-mail et le mot de passe de votre ancienne boîte mail.
6. Cliquez sur **Tester la connexion**, choisissez les dossiers à reprendre et cliquez sur **Lancer la reprise**.

Vous voyez l'avancement dossier par dossier. Une fois terminé, vous voyez combien de messages ont été repris et jusqu'à quelle date. Pour Gmail, Microsoft, iCloud et Yahoo, il vous faut un mot de passe d'application de ce fournisseur au lieu de votre mot de passe habituel.

## Qu'est-ce qui est repris ?

- **Dossiers :** Boîte de réception, Envoyés, Archives et vos propres dossiers sont cochés par défaut. Vous pouvez cocher vous-même Brouillons, Indésirables et Corbeille. Les dossiers deviennent des conversations dans votre boîte de réception, pas des dossiers séparés.
- **E-mails envoyés :** oui, ils sont repris comme e-mails sortants.
- **Dates :** chaque e-mail garde sa date d'origine.
- **Lu ou non lu :** reste comme avant.
- **Pièces jointes :** elles sont reprises. Seuls les messages de plus de 40 Mo sont ignorés.
- **Doublons :** ils sont ignorés, vous pouvez donc relancer la reprise sans crainte.

Les e-mails repris ne déclenchent pas de notifications et ne comptent pas dans votre limite mensuelle.

## Attention : la durée de conservation peut supprimer d'anciens e-mails

Chaque boîte mail peut avoir une **Conservation (jours)**. Les conversations dont le dernier message est plus ancien que cette durée sont supprimées automatiquement. Comme les e-mails repris gardent leur date d'origine, les anciens e-mails disparaissent alors dès le nettoyage quotidien suivant.

Par défaut, aucune durée de conservation n'est définie et tout est conservé. Si vous en avez défini une, videz-la avant d'importer : dans **Boîte de réception** → **Adresses**, cliquez sur le crayon à côté de la boîte mail et videz **Conservation (jours)**. MyCompanyDesk vous avertit aussi pendant la reprise si une durée de conservation est active.

## Voir aussi

- [Connecter votre propre domaine et les serveurs de noms](/fr/faq/connect-domain)
- [Domaines, site web et boîte de réception](/fr/features/domains-website-inbox)
