---
id: payment
title: Payment
---

## Request credentials to add card

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).requestCredentialsToAddCard();
```

This call returns an [ICreditCard](../shop-types#icreditcard) object.

**Next step is specific to selected provider, please refers to the associated sdk.**

**The data supplied by the supplier's sdk must be used to fill parameters of the saveCard function.**

## Save card

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).saveCard(cardId: string, token: string);
```

This call returns an [IPerson](../person-types#iperson) object.

## Delete card

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).deleteCard(cardId: string);
```

This call returns an [IPerson](../person-types#iperson) object.

## Set default card

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).setDefaultCard(cardId: string);
```

This call returns an [IPerson](../person-types#iperson) object.

## Validate card

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).validateCard(cardId: string);
```

This call returns an [ICreditCard](../shop-types#icreditcard) object.