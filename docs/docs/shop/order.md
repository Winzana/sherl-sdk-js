---
id: order
title: Order
---

## Get orders list

Retrieve a list of Order.
Return a paginated array of Order.

<span class="badge badge--warning">Require authentication</span>

```ts
const orders = await shop(client).getOrders(1, 10, {
  /* Filters */
});
```

## Get order

Return an Order.

<span class="badge badge--warning">Require authentication</span>

```ts
const order = await shop(client).getOrder('order-id');
```

## Get orders list by organization

Retrieve a list of Order depending on the organization
Return a paginated array of Order.

<span class="badge badge--warning">Require authentication</span>

```ts
const orders = await shop(client).getOrders('organization-id');
```
