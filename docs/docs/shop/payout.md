---
id: payout
title: Payout
---

## Generate payout

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).generatePayout();
```

This call returns an array [IPayout](../shop-types#ipayout) objects.

## Submit payout

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).submitPayout();
```

This call returns an [IPayout](../shop-types#ipayout) object.