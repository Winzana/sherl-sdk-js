---
id: discount
title: Discount
---

## Get discount list

Retrieve a list of all public discount, which you can filter with parameters

```ts
// Require authentication
const discounts = await Sherl.discount.getDiscounts(1, 10, {
  /* Filters */
});

// Public
const discounts = await Sherl.discount.getPublicDiscounts(1, 10, {
  /* Filters */
});
```

Return a paginated array of Discount.

## Get one discount by id

Retrieve a discount by ID.

```ts
const discount = await Sherl.discount.getDiscount('discount-id');
```

Return a Discount.

## Get one discount by params

Retrieve a discount by parameters.

```ts
const discount = await Sherl.discount.getDiscountByParams({
  your_key: 'Your_value',
  your_key: 'Your_value',
});
```

Return a Discount.

## Post Discount

Create a discount.

```ts
const discount = await Sherl.discount.postDiscount({
  id: 'string';
  name: 'string';
  availableFrom: 'Date';
  availableUntil: 'Date';
  enabled: boolean;
  highlight: boolean;
  cumulative: boolean;
  discountType: 'percent';
  code: 'string';
  percentage: number;
  amount: number;
  quantity: number;
  quantityPerUser: number;
  customers: ['string'];
  visibleToPublic: boolean;
  productRestrictions: [
    {
      requiredQuantity: number;
      productUri: 'string';
      categoryUri: 'string';
    },
  ];
  dateRestrictions: [
    {
      date: 'Date';
      dayOfWeek: 'string';
      fromHour: 'Date';
      toHour: 'Date';
    },
  ];
})
```

Create a Discount.
