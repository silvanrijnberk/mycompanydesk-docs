---
title: Intégration API
---

# Intégration API

Accédez à vos données MyCompanyDesk de manière programmatique via l'API REST.

::: info
L'accès API fait partie du plan **Pro**.
:::

## Vue d'ensemble

L'API MyCompanyDesk vous permet de :

- Créer et récupérer des factures, dépenses et clients
- Automatiser les flux de facturation
- Intégrer d'autres outils professionnels
- Créer des rapports personnalisés
- Synchroniser les données avec des systèmes externes

## Authentification

Envoyez votre clé API dans l'en-tête `X-API-Key` :

```bash
curl -X GET "https://api.mycompanydesk.com/api/invoices" \
  -H "X-API-Key: mcd_live_xxxxx"
```

L'en-tête `Authorization: Bearer` est réservé aux sessions navigateur. Les clés API vont toujours dans `X-API-Key`.

### Créer une clé API

1. Allez dans **Paramètres > Clés API**
2. Cliquez sur **Créer une clé API**
3. Donnez à la clé un nom descriptif et choisissez ses permissions
4. Copiez la clé immédiatement, elle n'est affichée qu'une seule fois

Lors de la création d'une clé, vous pouvez définir :

- **Permissions** : *Lecture* (consulter les données), *Écriture* (créer, modifier et supprimer) et *Admin* (accès complet)
- **Liste d'IP autorisées** (optionnel) : limitez la clé à des adresses IP spécifiques
- **Expiration** (optionnel) : 30 jours, 90 jours, 1 an ou jamais

Vous pouvez révoquer une clé à tout moment depuis la même page. Les clés révoquées perdent immédiatement leur accès.

::: warning
Conservez votre clé API en lieu sûr. Ne la validez jamais dans un dépôt de code et ne la partagez pas publiquement.
:::

## URL de base

Tous les endpoints de l'API sont disponibles sur :

```
https://api.mycompanydesk.com/api
```

## Endpoints principaux

### Clients

| Méthode | Endpoint | Description |
|---|---|---|
| `GET` | `/customers` | Lister tous les clients |
| `POST` | `/customers` | Créer un client |
| `GET` | `/customers/:id` | Récupérer un client |
| `PUT` | `/customers/:id` | Mettre à jour un client |
| `DELETE` | `/customers/:id` | Supprimer un client |

### Factures

| Méthode | Endpoint | Description |
|---|---|---|
| `GET` | `/invoices` | Lister toutes les factures |
| `POST` | `/invoices` | Créer une facture |
| `GET` | `/invoices/:id` | Récupérer une facture |
| `PUT` | `/invoices/:id` | Mettre à jour une facture |
| `DELETE` | `/invoices/:id` | Supprimer une facture |
| `GET` | `/invoices/:id/pdf` | Télécharger le PDF de la facture |
| `POST` | `/invoices/:id/email` | Envoyer la facture par e-mail |
| `POST` | `/invoices/:id/reminder` | Envoyer un rappel de paiement |
| `POST` | `/invoices/:id/duplicate` | Dupliquer une facture |
| `POST` | `/invoices/:id/credit-note` | Créer un avoir |

### Dépenses

| Méthode | Endpoint | Description |
|---|---|---|
| `GET` | `/expenses` | Lister toutes les dépenses |
| `POST` | `/expenses` | Créer une dépense |
| `GET` | `/expenses/:id` | Récupérer une dépense |
| `PUT` | `/expenses/:id` | Mettre à jour une dépense |
| `DELETE` | `/expenses/:id` | Supprimer une dépense |

### Projets

| Méthode | Endpoint | Description |
|---|---|---|
| `GET` | `/projects` | Lister tous les projets |
| `POST` | `/projects` | Créer un projet |
| `GET` | `/projects/:id` | Récupérer un projet |
| `PUT` | `/projects/:id` | Mettre à jour un projet |
| `DELETE` | `/projects/:id` | Supprimer un projet |

### Recherche

| Méthode | Endpoint | Description |
|---|---|---|
| `GET` | `/search?q=term&type=entity` | Rechercher parmi toutes les entités |

## Filtrage

Les endpoints de liste acceptent des paramètres de requête pour filtrer :

```
GET /api/invoices?status=sent&customer_id=123&limit=50
```

Filtres courants :

- `status` : filtrer par statut
- `customer_id` : filtrer par client
- `search` : recherche en texte libre
- `date_from` / `date_to` : filtrer par plage de dates
- `limit` : nombre de résultats
- `offset` : décalage de pagination

## Limitation de débit

Les requêtes API sont limitées à 200 requêtes par minute. Chaque réponse contient les en-têtes `X-RateLimit-Limit`, `X-RateLimit-Remaining` et `X-RateLimit-Reset`. En cas de dépassement, vous recevez une réponse `429 Too Many Requests` avec un en-tête `Retry-After`, prévoyez donc une stratégie de nouvelle tentative dans votre intégration.

## Gestion des erreurs

L'API renvoie les codes de statut HTTP standard :

| Code | Description |
|---|---|
| `200` | Succès |
| `201` | Créé |
| `400` | Requête invalide (vérifiez vos paramètres) |
| `401` | Non autorisé (clé API invalide) |
| `403` | Interdit (permissions insuffisantes) |
| `404` | Introuvable |
| `429` | Limite de débit atteinte |
| `500` | Erreur serveur |

Les réponses d'erreur contiennent un corps JSON :

```json
{
  "error": "Description du problème"
}
```

## Webhooks

Les webhooks notifient vos systèmes en temps réel lorsqu'un événement se produit dans votre compte. Configurez-les dans **Paramètres > Webhooks** : donnez au webhook un nom et une URL, puis choisissez les événements que vous souhaitez recevoir.

Événements disponibles :

- `invoice.created`, `invoice.updated`, `invoice.paid`, `invoice.overdue`
- `expense.created`, `expense.updated`, `expense.deleted`
- `customer.created`, `customer.updated`
- `inbox.thread.received`, `inbox.message.received`
- `test.ping` (pour tester votre endpoint)

Chaque livraison est un `POST` HTTP avec un corps JSON :

```json
{
  "id": "event id",
  "type": "invoice.paid",
  "company_id": 123,
  "created_at": "2026-07-02T12:00:00.000Z",
  "data": { }
}
```

### Vérifier les livraisons

Chaque webhook possède un secret de signature, affiché une seule fois à la création (vous pouvez le renouveler plus tard). Chaque livraison contient un en-tête `X-MCD-Signature` avec un hachage HMAC-SHA256 (hex) du corps brut de la requête, calculé avec votre secret de signature. Recalculez le hachage de votre côté et comparez-le à l'en-tête avant de faire confiance à la charge utile. Les en-têtes `X-MCD-Event-Type`, `X-MCD-Event-Id` et `X-MCD-Delivery-Id` identifient la livraison.

### Nouvelles tentatives

Les livraisons échouées sont réessayées automatiquement avec des délais croissants. Un endpoint qui échoue de manière répétée est désactivé automatiquement ; réactivez-le depuis la page des webhooks dès que votre endpoint fonctionne à nouveau.

## Conseils

- Utilisez la pagination pour les grands volumes de données
- Mettez en cache les réponses lorsque c'est pertinent pour réduire les appels API
- Implémentez une logique de nouvelle tentative avec backoff exponentiel pour les limites de débit
- Utilisez les webhooks plutôt que le polling pour les mises à jour en temps réel
