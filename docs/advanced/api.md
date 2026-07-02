---
title: API Integration
---

# API Integration

Access your MyCompanyDesk data programmatically through the REST API.

::: info
API access is part of the **Pro** plan.
:::

## Overview

The MyCompanyDesk API lets you:

- Create and retrieve invoices, expenses, and customers
- Automate billing workflows
- Integrate with other business tools
- Build custom reporting
- Sync data with external systems

## Authentication

Send your API key in the `X-API-Key` request header:

```bash
curl -X GET "https://api.mycompanydesk.com/api/invoices" \
  -H "X-API-Key: mcd_live_xxxxx"
```

The `Authorization: Bearer` header is used for browser sessions only. API keys always go in `X-API-Key`.

### Creating an API key

1. Go to **Settings > API Keys**
2. Click **Create API Key**
3. Give the key a descriptive name and choose its permissions
4. Copy the key right away, it is only shown once

When creating a key you can set:

- **Scopes**: *Read* (view data), *Write* (create, update, and delete), and *Admin* (full access)
- **IP allowlist** (optional): restrict the key to specific IP addresses
- **Expiration** (optional): 30 days, 90 days, 1 year, or never

You can revoke a key at any time from the same page. Revoked keys lose access immediately.

::: warning
Store your API key securely. Never commit it to source control or share it publicly.
:::

## Base URL

All API endpoints are available at:

```
https://api.mycompanydesk.com/api
```

## Key endpoints

### Customers

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/customers` | List all customers |
| `POST` | `/customers` | Create a customer |
| `GET` | `/customers/:id` | Get a customer |
| `PUT` | `/customers/:id` | Update a customer |
| `DELETE` | `/customers/:id` | Delete a customer |

### Invoices

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/invoices` | List all invoices |
| `POST` | `/invoices` | Create an invoice |
| `GET` | `/invoices/:id` | Get an invoice |
| `PUT` | `/invoices/:id` | Update an invoice |
| `DELETE` | `/invoices/:id` | Delete an invoice |
| `GET` | `/invoices/:id/pdf` | Download the invoice PDF |
| `POST` | `/invoices/:id/email` | Send the invoice by email |
| `POST` | `/invoices/:id/reminder` | Send a payment reminder |
| `POST` | `/invoices/:id/duplicate` | Duplicate an invoice |
| `POST` | `/invoices/:id/credit-note` | Create a credit note |

### Expenses

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/expenses` | List all expenses |
| `POST` | `/expenses` | Create an expense |
| `GET` | `/expenses/:id` | Get an expense |
| `PUT` | `/expenses/:id` | Update an expense |
| `DELETE` | `/expenses/:id` | Delete an expense |

### Projects

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/projects` | List all projects |
| `POST` | `/projects` | Create a project |
| `GET` | `/projects/:id` | Get a project |
| `PUT` | `/projects/:id` | Update a project |
| `DELETE` | `/projects/:id` | Delete a project |

### Search

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/search?q=term&type=entity` | Search across entities |

## Filtering

List endpoints support query parameters for filtering:

```
GET /api/invoices?status=sent&customer_id=123&limit=50
```

Common filters:

- `status`: filter by status
- `customer_id`: filter by customer
- `search`: free-text search
- `date_from` / `date_to`: filter by date range
- `limit`: number of results
- `offset`: pagination offset

## Rate limiting

API requests are rate-limited to 200 requests per minute. Every response includes `X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `X-RateLimit-Reset` headers. Exceeding the limit returns a `429 Too Many Requests` response with a `Retry-After` header, so include a retry strategy in your integration.

## Error handling

The API returns standard HTTP status codes:

| Code | Description |
|---|---|
| `200` | Success |
| `201` | Created |
| `400` | Bad request (check your parameters) |
| `401` | Unauthorized (invalid API key) |
| `403` | Forbidden (insufficient permissions) |
| `404` | Not found |
| `429` | Rate limited |
| `500` | Server error |

Error responses include a JSON body:

```json
{
  "error": "Description of what went wrong"
}
```

## Webhooks

Webhooks notify your systems in real time when something happens in your account. Set them up in **Settings > Webhooks**: give the webhook a name and a URL, and pick the events you want to receive.

Available events:

- `invoice.created`, `invoice.updated`, `invoice.paid`, `invoice.overdue`
- `expense.created`, `expense.updated`, `expense.deleted`
- `customer.created`, `customer.updated`
- `inbox.thread.received`, `inbox.message.received`
- `test.ping` (for testing your endpoint)

Each delivery is an HTTP `POST` with a JSON body:

```json
{
  "id": "event id",
  "type": "invoice.paid",
  "company_id": 123,
  "created_at": "2026-07-02T12:00:00.000Z",
  "data": { }
}
```

### Verifying deliveries

Every webhook has a signing secret, shown once when you create it (you can rotate it later). Each delivery includes an `X-MCD-Signature` header containing an HMAC-SHA256 hash (hex) of the raw request body, computed with your signing secret. Recompute the hash on your side and compare it to the header before trusting the payload. The `X-MCD-Event-Type`, `X-MCD-Event-Id`, and `X-MCD-Delivery-Id` headers identify the delivery.

### Retries

Failed deliveries are retried automatically with increasing delays. An endpoint that keeps failing is disabled automatically; re-enable it from the webhooks page once your endpoint is healthy again.

## Tips

- Use pagination for large datasets
- Cache responses where appropriate to reduce API calls
- Implement retry logic with exponential backoff for rate limits
- Use webhooks instead of polling for real-time updates
