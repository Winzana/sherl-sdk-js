---
id: loyalty
title: Loyalty
---

## Get loyalty cards (current user connected)

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).getLoyaltiesCardToMe(filters?: ILoyaltyCardFindByDto);
```

```ts
interface ILoyaltyCardFindByDto extends PaginationFilters {
  id?: string;
  uri?: string;
  ownerUri?: string;
  ownerUris?: string[];
  enabled?: boolean;
}
```

This interface extends [PaginationFilters](../pagination#pagination-filters)

This call returns an [ISearchResult](../pagination#isearchresult) of [ILoyaltyCard](../shop-types#iloyaltycard) objects.

## Get organization loyalty card

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).getOrganizationLoyaltyCard(organizationId: string);
```

This call returns an [ILoyaltyCard](../shop-types#iloyaltycard) object.

## Update loyalty card

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).updateLoyaltyCard(cardId: string, updatedCard: IShopLoyaltyCardUpdateInputDto);
```

```ts
interface IShopLoyaltyCardUpdateInputDto {
  amount?: number;
  discountType: DiscountTypeEnum;
  percentage?: number;
  enabled?: boolean;
}
```
- [DiscountTypeEnum](../shop-types#discounttypeenum)(`discountType`)

This call returns an [ILoyaltyCard](../shop-types#iloyaltycard) object.