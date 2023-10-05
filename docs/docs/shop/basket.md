---
id: basket
title: Basket
---

## Get current basket

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).getCurrentBasket(customerUri: string);
```

This call returns an [IOrderResponse](../shop-types#iorderresponse) object.

## Add product to basket

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).addProductToBasket(product: IShopBasketAddProductInputDto);
```

```ts
interface IShopBasketAddProductInputDto {
  organizationUri: string;
  orderId?: string;
  latitude?: number;
  longitude?: number;
  productId: string;
  orderQuantity: number;
  options?: IShopBasketAddProductOptionInputDto[];
  schedules?: IShopBasketAddProductScheduleInputDto[];
  offerId?: number;
  metadatas?: { [key: string]: any };
  customerUri?: string;
  isFreeTrial?: boolean;
}

interface IShopBasketAddProductScheduleInputDto {
  allowedFromDate: Date;
  allowedUntilDate: Date;
}

interface IShopBasketAddProductOptionInputDto {
  id: string;
  items?: IShopBasketAddProductOptionItemInputDto[];
}

interface IShopBasketAddProductOptionItemInputDto {
  name: string;
  quantity: number;
}
```

## Remove product to basket

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).removeItemToBasket(itemId: string);
```

This call returns an [IOrderResponse](../shop-types#iorderresponse) object.

## Clear basket

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).clearBasket(customerId: string);
```

This call returns an [IOrderResponse](../shop-types#iorderresponse) object.

## Add comment to basket

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).addCommentToBasket(comment: string);
```

This call returns an [IOrderResponse](../shop-types#iorderresponse) object.

## Add discount code to basket

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).addDiscountCodeToBasket(code: string);
```

This call returns an [IOrderResponse](../shop-types#iorderresponse) object.

## Add sponsor code to basket

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).addSponsorCodeToBasket(code: string);
```

This call returns an [IOrderResponse](../shop-types#iorderresponse) object.

## Validate pending payment to basket

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).validatePaymentBasket(validationInfo: IShopBasketValidatePaymentInputDto);
```

```ts
interface IShopBasketValidatePaymentInputDto {
  orderId: string;
  customerUri: string;
}
```

This call returns an [IOrderResponse](../shop-types#iorderresponse) object.

## Validate and pay current basket

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).validateAndPayBasket(validationInfo: IShopBasketValidateAndPayDto);
```

```ts
interface IShopBasketValidateAndPayDto extends IShopBasketValidatePaymentInputDto {
  meansOfPayment: ShopMeansOfPaymentEnum;
}
```

This call returns an [IOrderResponse](../shop-types#iorderresponse) object.
