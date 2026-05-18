---
title: Integration API
---

# Integration API

Accedez a vos donnees MyCompanyDesk de maniere programmatique via l'API REST.

::: info
L'acces API necessite le plan **Pro**.
:::

## Vue d'ensemble

L'API MyCompanyDesk vous permet de :

- Creer et recuperer des factures, depenses et clients
- Automatiser les flux de facturation
- Integrer d'autres outils professionnels
- Creer des rapports personnalises
- Synchroniser les donnees avec des systemes externes

## Authentification

Toutes les requetes API necessitent une cle API envoyee dans l'en-tete de la requete :

```
Authorization: Bearer YOUR_API_KEY
```

### Creer une cle API

1. Allez dans **Parametres > Cles API**
2. Cliquez sur **Generer une nouvelle cle**
3. Donnez a la cle un nom descriptif
4. Copiez la cle -- elle n'est affichee qu'une seule fois

::: warning
Conservez votre cle API en lieu sur. Ne la commitez jamais dans un depot de code source et ne la partagez jamais publiquement.
:::

## URL de base

Tous les endpoints API sont disponibles a l'adresse :

```
https://api.mycompanydesk.com/api
```

## Endpoints principaux

### Clients

| Methode | Endpoint | Description |
|---|---|---|
| `GET` | `/customers` | Lister tous les clients |
| `POST` | `/customers` | Creer un client |
| `GET` | `/customers/:id` | Obtenir un client |
| `PUT` | `/customers/:id` | Mettre a jour un client |
| `DELETE` | `/customers/:id` | Supprimer un client |

### Factures

| Methode | Endpoint | Description |
|---|---|---|
| `GET` | `/invoices` | Lister toutes les factures |
| `POST` | `/invoices` | Creer une facture |
| `GET` | `/invoices/:id` | Obtenir une facture |
| `PUT` | `/invoices/:id` | Mettre a jour une facture |
| `DELETE` | `/invoices/:id` | Supprimer une facture |
| `POST` | `/invoices/:id/send` | Envoyer une facture |
| `POST` | `/invoices/:id/mark-paid` | Marquer comme payee |

### Depenses

| Methode | Endpoint | Description |
|---|---|---|
| `GET` | `/expenses` | Lister toutes les depenses |
| `POST` | `/expenses` | Creer une depense |
| `GET` | `/expenses/:id` | Obtenir une depense |
| `PUT` | `/expenses/:id` | Mettre a jour une depense |
| `DELETE` | `/expenses/:id` | Supprimer une depense |

### Projets

| Methode | Endpoint | Description |
|---|---|---|
| `GET` | `/projects` | Lister tous les projets |
| `POST` | `/projects` | Creer un projet |
| `GET` | `/projects/:id` | Obtenir un projet |
| `PUT` | `/projects/:id` | Mettre a jour un projet |

### Recherche

| Methode | Endpoint | Description |
|---|---|---|
| `GET` | `/search?q=term&type=entity` | Rechercher parmi les entites |

## Filtrage

Les endpoints de liste prennent en charge les parametres de requete pour le filtrage :

```
GET /api/invoices?status=sent&customer_id=123&limit=50
```

Filtres courants :

- `status` -- Filtrer par statut
- `customer_id` -- Filtrer par client
- `project_id` -- Filtrer par projet
- `limit` -- Nombre de resultats (par defaut : 50)
- `offset` -- Decalage de pagination

## Limitation de debit

Les requetes API sont soumises a une limitation de debit pour garantir une utilisation equitable :

- La limite standard s'applique par cle API
- Le depassement de la limite renvoie une reponse `429 Too Many Requests`
- Incluez une strategie de reessai dans votre integration

## Gestion des erreurs

L'API renvoie des codes de statut HTTP standard :

| Code | Description |
|---|---|
| `200` | Succes |
| `201` | Cree |
| `400` | Requete invalide (verifiez vos parametres) |
| `401` | Non autorise (cle API invalide) |
| `403` | Interdit (permissions insuffisantes) |
| `404` | Non trouve |
| `429` | Debit limite |
| `500` | Erreur serveur |

Les reponses d'erreur incluent un corps JSON :

```json
{
  "error": "Description de ce qui s'est mal passe"
}
```

## Webhooks

Configurez des webhooks pour recevoir des notifications en temps reel lorsque des evenements se produisent :

- Facture envoyee
- Facture payee
- Client cree
- Depense ajoutee

Configurez les webhooks dans **Parametres > Cles API > Webhooks**.

## Conseils

- Utilisez la pagination pour les grands ensembles de donnees
- Mettez en cache les reponses lorsque c'est possible pour reduire les appels API
- Implementez une logique de reessai avec un backoff exponentiel pour les limites de debit
- Utilisez les webhooks au lieu du polling pour les mises a jour en temps reel
