---
title: API Integration
---

# API Integration

Access your MyCompanyDesk data programmatically through the REST API.

::: info
API access requires the **Business** plan.
:::

## Overview

The MyCompanyDesk API lets you:

- Create and retrieve invoices, expenses, and customers
- Automate billing workflows
- Integrate with other business tools
- Build custom reporting
- Sync data with external systems

## Authentication

All API requests require an API key sent in the request header:

```
Authorization: Bearer YOUR_API_KEY
```

### Creating an API key

1. Go to **Settings > API Keys**
2. Click **Generate New Key**
3. Give the key a descriptive name
4. Copy the key — it's only shown once

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
| `POST` | `/invoices/:id/send` | Send an invoice |
| `POST` | `/invoices/:id/mark-paid` | Mark as paid |

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

- `status` — Filter by status
- `customer_id` — Filter by customer
- `project_id` — Filter by project
- `limit` — Number of results (default: 50)
- `offset` — Pagination offset

## Rate limiting

API requests are rate-limited to ensure fair usage:

- Standard rate limit applies per API key
- Exceeding the limit returns a `429 Too Many Requests` response
- Include a retry strategy in your integration

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

Configure webhooks to receive real-time notifications when events occur:

- Invoice sent
- Invoice paid
- Customer created
- Expense added

Set up webhooks in **Settings > API Keys > Webhooks**.

## Tips

- Use pagination for large datasets
- Cache responses where appropriate to reduce API calls
- Implement retry logic with exponential backoff for rate limits
- Use webhooks instead of polling for real-time updates
