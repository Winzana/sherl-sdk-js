---
id: discount
title: Discount
---

## Get discounts list

<span class="badge badge--success">Public</span>

```ts
const discounts = await shop(client).getPublicDiscounts(filters: IDiscountPublicFilter);
```

```ts
interface IDiscountPublicFilter extends PaginationFilters {
  ownerUri?: string;
  availableFrom?: Date;
  availableUntil?: Date;
}
```

See [**PaginationFilters**](../pagination#pagination-filters).

This call returns a [paginated](../pagination#pagination) of [IDiscount](../shop-types#idiscount) objects.


<span class="badge badge--warning">Require authentication</span>

```ts
const discounts = await shop(client).getDiscounts(filters: IDiscountFilter);
```

<a name="discountFilter"></a>

```ts
interface IDiscountFilter extends IDiscountPublicFilter {
  id?: string;
  uri?: string;
  name?: string;
  ownerUris?: string[];
  consumerId: string;
  validFor?: Date;
  enabled?: boolean;
  isSubscription?: boolean;
  public?: boolean;
  visibleToPublic?: boolean;
  highlight?: boolean;
  cumulative?: boolean;
  discountType?: DiscountTypeEnum;
  code?: string;
  toCode?: string;
  noCode?: boolean;
  percentage?: number;
  amount?: number;
  quantity?: number;
  quantityPerUser?: number;
  customerUri?: string;
  productUris?: string[];
  noProduct?: boolean;
  productRestrictions?: IProductRestriction;
  dateRestrictions?: IDateRestriction;
  toDate?: Date;
  toMe?: string;
  createdAt?: {
    from?: Date;
    to?: Date;
  };
  updatedAt?: {
    from?: Date;
    to?: Date;
  };
  offPeakHours?: boolean;
  toValidate?: boolean;
}
```

- *discount* : [DiscountTypeEnum](../shop-types#discounttypeenum)(`discountType`), [IProductRestriction](../shop-types#iproductrestriction)(`productRestrictions`), [IDateRestriction](../shop-types#idaterestriction)(`dateRestrictions`)


This call returns a [paginated](../pagination#pagination) of [IDiscount](../shop-types#idiscount) objects.

## Get discount by id


<span class="badge badge--warning">Require authentication</span>

```ts
const discount = await shop(client).getDiscount(discountId: string);
```

This call returns an [IDiscount](../shop-types#idiscount) object.

## Get discount by params

<span class="badge badge--warning">Require authentication</span>

```ts
const discount = await shop(client).getDiscountByParams(filters: IDiscountFilter);
```

[**IDiscountFilter**](#discountFilter)

This call returns an [IDiscount](../shop-types#idiscount) object.

## Create a discount

<span class="badge badge--warning">Require authentication</span>

```ts
const discount = await shop(client).postDiscount(discount: IDiscountParameter)
```

```ts
interface IDiscountParameter {
  id: string;
  name: string;
  availableFrom: Date;
  availableUntil: Date;
  enabled: boolean;
  highlight: boolean;
  cumulative: boolean;
  discountType: string;
  code: string;
  percentage: number;
  amount: number;
  quantity: number;
  quantityPerUser: number;
  customers: string[];
  visibleToPublic: boolean;
  productRestrictions: [
    {
      requiredQuantity: number;
      productUri: string;
      categoryUri: string;
    },
  ];
  dateRestrictions: [
    {
      date: Date;
      dayOfWeek: string;
      fromHour: Date;
      toHour: Date;
    },
  ];
}
```

This call returns an [IDiscount](../shop-types#idiscount) object.

## Update discount

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).updateDiscount(discountId: string, updatedDiscount: Partial<IDiscountParameter>);
```

This call returns an [IDiscount](../shop-types#idiscount) object.

## Delete discount

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).deleteDiscount(discountId: string);
```

This call returns an [IDiscount](../shop-types#idiscount) object.

## Validate discount code

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).validateDiscountCode(code: string, productUri: string);
```

This call returns an [IDiscount](../shop-types#idiscount) object.