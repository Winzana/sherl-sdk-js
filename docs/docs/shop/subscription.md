---
id: subscription
title: Subscription
---

## Find one subscription

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).getSubscriptionFindOneBy(filters?: ISubscriptionFindOnByDto);
```

```ts
interface ISubscriptionFindOnByDto {
  id?: string;
  uri?: string;
  name?: string;
  ownerUri?: string;
  consumerId?: string;
  actionFrom?: string;
  activeUntil?: string;
  activeFor?: string;
  enabled?: boolean;
  sourceUri?: string;
}
```

This call returns an [ISubscription](../shop-types#isubscription) object.

## Cancel subscription

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).cancelSubscription(subscriptionId: string);
```

This call returns an [ISubscription](../shop-types#isubscription) object.