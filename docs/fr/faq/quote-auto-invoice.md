---
title: "Brouillon de facture automatique à partir d'un devis signé"
last_verified: 2026-08-06
chatbot:
  triggers:
    - "quote auto invoice"
    - "automatic invoice from quote"
    - "draft invoice quote signing"
    - "offerte automatisch factuur"
    - "automatisch conceptfactuur offerte"
    - "angebot automatisch rechnung"
    - "devis facture automatique"
  actions:
    - { label: "Ouvrir les paramètres", to: "/settings/facturen" }
    - { label: "Ouvrir les devis", to: "/quotes" }
  follow_up:
    - "Où trouver le brouillon de facture ?"
    - "Puis-je modifier la facture après sa création ?"
    - "Que se passe-t-il si le brouillon ne peut pas être créé ?"
---

# Brouillon de facture automatique à partir d'un devis signé

Vous pouvez configurer MyCompanyDesk pour qu'il crée automatiquement un brouillon de facture lorsqu'un client signe un devis en ligne.

## Comment l'activer

1. Allez dans **Paramètres → Factures et devis** (`/settings/facturen`).
2. Faites défiler jusqu'à la section **Devis**.
3. Activez le bouton **Créer un brouillon de facture lors de la signature**.
4. Les modifications sont enregistrées automatiquement.

## Ce qui se passe lors de la signature

- Le devis signé suit son flux de statut normal.
- MyCompanyDesk crée une nouvelle facture au statut **brouillon** avec les mêmes lignes, totaux et client que le devis signé.
- Le brouillon apparaît dans **Factures → Brouillons**.

## Avant d'envoyer la facture

Vérifiez le brouillon comme n'importe quelle autre facture. Si votre espace de travail utilise la numérotation manuelle, le brouillon n'a pas encore de numéro. Ajoutez-en un avant de l'envoyer. Vous pouvez modifier les lignes, les notes et la date d'échéance comme d'habitude.

## Si quelque chose ne va pas

Si le brouillon ne peut pas être créé — par exemple parce qu'aucun numéro de facture n'est disponible — vous recevez une notification. Vous pouvez alors créer vous-même une facture depuis le devis signé avec **Convertir en facture**.

## Voir aussi

- [Devis](/fr/features/quotes)
- [Factures](/fr/features/invoices)
- [Numérotation des devis](/fr/faq/quote-numbering)
