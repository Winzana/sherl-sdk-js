---
id: order
title: Order
---

## Get orders list

Retrieve a list of Order.

```ts
const orders = await Sherl.order.getOrders(1, 10, {
  /* Filters */
});
```

Return a paginated array of Order.

## Get one order

```ts
const order = await Sherl.order.getOrder('order-id');
```

Return an Order.
