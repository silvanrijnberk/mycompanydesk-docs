---
title: Cookies et analytics
last_verified: 2026-07-14
---

# Cookies et analytics

Cette page explique comment MyCompanyDesk utilise les cookies, le stockage local et l'analytics. Elle concerne à la fois le site marketing public (mycompanydesk.nl / mycompanydesk.com) et l'application web.

## Site marketing

Le site marketing affiche une bannière de consentement aux cookies lors de votre première visite. Cette bannière demande si nous pouvons placer un stockage analytics. Vous pouvez modifier votre choix à tout moment via la bannière.

Si vous acceptez, le site stocke un identifiant analytics anonyme dans le `localStorage` de votre navigateur sous la clé `mcd_phid`. Cet identifiant sert uniquement à comprendre comment les visiteurs naviguent sur le site. Il n'est pas lié à votre compte ou à votre adresse e-mail.

Si vous refusez, ou si votre navigateur envoie un signal Do Not Track (DNT), aucun identifiant analytics n'est stocké. La bannière peut toutefois toujours apparaître, car elle couvre également les cookies non-analytics.

## Du site marketing vers l'application

Lorsque vous cliquez depuis le site marketing vers l'application, le site marketing peut ajouter un paramètre `phid` éphémère. L'application supprime ce paramètre immédiatement après le chargement et ne le conserve pas dans l'URL. Il sert uniquement à relier la même visite anonyme à la session de l'application, afin que nous puissions voir si le site aide les gens à s'inscrire.

Le paramètre n'est considéré comme fiable que si vous venez réellement de notre propre site marketing. Les liens falsifiés ou transférés sont ignorés.

## Dans l'application

L'application n'affiche **pas** de bannière de cookies. Elle est conçue pour éviter les cookies analytics et le suivi entre sessions pour les visiteurs anonymes :

- L'état analytics réside dans le `sessionStorage`, pas dans les cookies. Il survit aux rechargements au sein du même onglet, mais est supprimé lorsque vous fermez l'onglet.
- L'application respecte le signal Do Not Track du navigateur.
- Aucun enregistrement de session n'est effectué.
- Une fois connecté, l'application vous identifie à l'aide de votre véritable identifiant utilisateur, afin que les événements ultérieurs soient associés au même compte.

Cela signifie que les pages vues anonymes dans l'application ne sont pas reliées d'une visite à l'autre. L'entonnoir inscription → client payant est principalement mesuré par des événements côté serveur liés à votre identifiant utilisateur, et non par le stockage du navigateur.

## Ce que nous ne faisons pas

- Nous ne vendons ni ne partageons de données analytics avec des tiers à des fins publicitaires.
- Nous ne vous suivons pas sur des sites non liés.
- Nous n'utilisons pas les données analytics pour construire des profils publicitaires individuels.

## Vos choix

- Utilisez la bannière de cookies sur le site marketing pour accepter ou refuser le stockage analytics.
- Activez Do Not Track dans votre navigateur pour empêcher le stockage des identifiants analytics.
- Effacez les cookies et le stockage local pour mycompanydesk.nl / mycompanydesk.com dans votre navigateur pour supprimer les identifiants stockés.

Pour toute question, contactez [support@mycompanydesk.com](mailto:support@mycompanydesk.com).
