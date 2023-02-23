---
id: discount
title: Discount
---

## Get discount list

Retrieve a list of all discounts, that you can filter with parameters
There is two version for this integration, public and private endpoint according to the public attribute.

Return a paginated array of Discount.

<span class="badge badge--warning">Require authentication</span>

```ts
const discounts = await shop(client).getDiscounts(1, 10, {
  /* Filters */
});
```

<span class="badge badge--success">Public</span>

```ts
const discounts = await shop(client).getPublicDiscounts(1, 10, {
  /* Filters */
});
```

## Get one discount by id

Retrieve a discount by ID.

<span class="badge badge--warning">Require authentication</span>

```ts
const discount = await shop(client).getDiscount('discount-id');
```

Return a Discount.

## Get one discount by params

Retrieve a discount by parameters.

<span class="badge badge--warning">Require authentication</span>

```ts
const discount = await shop(client).getDiscountByParams({
  your_key: 'Your_value',
  your_key: 'Your_value',
});
```

Return a Discount.

## Post Discount

Create a discount.

<span class="badge badge--warning">Require authentication</span>

```ts
const discount = await shop(client).postDiscount({
  id: 'string',
  name: 'string',
  availableFrom: 'Date',
  availableUntil: 'Date',
  enabled: boolean,
  highlight: boolean,
  cumulative: boolean,
  discountType: 'percent',
  code: 'string',
  percentage: number,
  amount: number,
  quantity: number,
  quantityPerUser: number,
  customers: ['string'],
  visibleToPublic: boolean,
  productRestrictions: [
    {
      requiredQuantity: number,
      productUri: 'string',
      categoryUri: 'string',
    },
  ],
  dateRestrictions: [
    {
      date: 'Date',
      dayOfWeek: 'string',
      fromHour: 'Date',
      toHour: 'Date',
    },
  ],
})
```

Create a Discount.
