---
title: Transmission au comptable
last_verified: 2026-08-04
---

# Transmission au comptable

Si votre comptable travaille dans son propre logiciel, comme Exact, SnelStart, Twinfield ou Yuki, vous pouvez faire envoyer automatiquement factures et depenses par MyCompanyDesk. Cela evite d'envoyer les pieces une par une par e-mail.

## Ou la trouver

Allez dans **Parametres** > **Acces et comptable** (`/settings/team`) et ouvrez la section **Comptable**. Sous la liste de contacts se trouve la carte **Transmission automatique**.

## Ce que vous pouvez regler

La carte lit et ecrit sur `/api/team/accountant-delivery`. Chaque membre de l'espace de travail peut voir les reglages; seuls les administrateurs d'equipe peuvent les modifier.

| Reglage | Options |
|---|---|
| **Destinataire** | Choisir un contact comptable existant, ou aucun |
| **Factures de vente** | Desactive, a l'envoi, ou au paiement |
| **Depenses** | Desactivee, ou a la creation |
| **Frequence** | Directement, quotidiennement, hebdomadaire (lundi), mensuel ou trimestriel |
| **Uniquement les depenses avec justificatif** | Retenir les depenses sans justificatif |
| **Joindre les justificatifs** | Inclure les images de justificatifs en piece jointe |
| **Joindre le PDF de la facture** | Inclure le PDF de la facture |
| **Inclure aussi les devis** | Inclure egalement les devis acceptes |
| **Transmission automatique activee** | Interrupteur principal |

Le rythme par defaut pour la plupart des cabinets est hebdomadaire le lundi, car un seul e-mail regroupe est plus facile a traiter qu'un message par piece.

### Obligation de justificatif

Quand **Uniquement les depenses avec justificatif** est active, les depenses sans justificatif ne sont pas transmises. Elles restent dans l'espace de travail et le nombre est indique dans l'e-mail de transmission, pour que vous sachiez ce qui manque encore. Votre comptable a besoin du justificatif pour recuperer la TVA, donc ce commutateur empeche les pieces incompletes de quitter l'espace de travail.

## Permission de modifier les reglages

Seuls les administrateurs d'equipe peuvent modifier les listes deroulantes, les cases a cocher et l'interrupteur principal. Les non-administrateurs voient les reglages actuels mais ne peuvent pas enregistrer de modifications.

## Ce qui est transmis

Seules les pieces pretes pour un comptable quittent l'espace de travail :

- Non cachees au comptable.
- Non en attente de validation (elements bancaires ou de boite de reception que vous n'avez pas encore confirmes).
- Non mis a la corbeille ni archives.
- Les factures doivent etre envoyees; les brouillons ne sont pas transmis.
- Si l'obligation de justificatif est activee, les depenses doivent avoir un justificatif.

Le moteur fonctionne avec un watermark (`last_delivered_at`), et non avec des declencheurs de statut individuels, donc aucune piece n'est manquee parce qu'un nouveau mode de paiement a ete ajoute plus tard.

## Journal de livraison et activite

La page **Acces et comptable** conserve un journal de livraison indiquant ce qui a ete transmis et quand. Elle enregistre egalement une vue d'ensemble de l'activite du comptable connecte : ce qu'il a consulte ou modifie dans l'espace de travail. Les deux journaux sont visibles par les proprietaires et les administrateurs ; le comptable peut voir le journal de livraison mais ne peut pas l'effacer.

## Transmission manuelle depuis une piece

Vous pouvez aussi envoyer une seule facture, depense ou devis a votre comptable depuis sa page de detail. Cherchez le bouton **Envoyer au comptable** pres des actions e-mail. Cela enregistre une livraison manuelle dans le meme journal, pour que vous la voyiez a cote de la transmission automatique. Les envois manuels echoues sont aussi enregistres, afin que vous ne renvoyiez pas la meme piece par inadvertance.

## Elements envoyes

Les envois manuels et les autres e-mails de l'espace de travail apparaissent dans la boite **Envoye** de votre boite de reception. Ils sont regroupes sous la categorie comptable, pour que vous voyiez d'un coup d'oeil quels documents ont deja quitte l'espace de travail.

## Voir aussi

- [Acces et comptable](/fr/settings/team) pour inviter votre comptable et choisir un contact
- [Factures](/fr/features/invoices) pour envoyer et gerer les factures de vente
- [Depenses](/fr/features/expenses) pour ajouter des justificatifs et des depenses
- [Devis](/fr/features/quotes) pour creer et convertir des devis
