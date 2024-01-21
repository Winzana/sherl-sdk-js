---
id: product
title: Product
---

## Get products list

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).getProducts(filters: IProductFindByDto);
```

**IProductFindByDto** extends [PaginationFilters](../pagination#pagination-filters)

```ts
interface IProductFindByDto extends PaginationFilters {
  ids?: string[];
  externalIds?: string[];
  excludedExternalIds?: string[];
  externalIdentifier?: string;
  uri?: string;
  versionNumber?: number;
  slug?: string;
  parentUri?: string;
  organizationUri?: string;
  organizationSlug?: string;
  id?: string;
  name?: string;
  categoryUri?: string;
  categoryUris?: string[];
  consumerId?: string;
  q?: string;
  isEnable?: boolean;
  languages?: string[];
  placeForward?: boolean;
  strictPlaceForward?: boolean;
  geopoint?: string;
  distance?: number;
  withinHours?: boolean;
  startDate?: string;
  endDate?: string;
  displayAllVersion?: boolean;
  includeDeleted?: boolean;
  isUpdatedByHuman?: boolean;
  tag?: ProductTags;
  tags?: number;
  displayMode?: ProductDisplayMode;
  type?: ProductTypeEnum;
  noBind?: boolean;
  uriOfPanels?: string[];
  panel?: string;
}

enum ProductTags {
  BACK_OFFICE = 'BACK_OFFICE',
  BACK_OFFICE_RESYNC = 'BACK_OFFICE_RESYNC',
}

enum ProductDisplayMode {
  DEFAULT = 'default',
  LIST = 'list',
  MAP = 'map',
}

enum ProductTypeEnum {
  CREDIT = 'CREDIT',
  DEFAULT = 'DEFAULT',
  ROOM = 'ROOM',
  TIP = 'TIP',
  SERVICE = 'SERVICE',
  PLAN = 'PLAN',
  QUOTA = 'QUOTA',
  REFUND = 'REFUND',
  EVENT = 'EVENT',
}
```

This call returns a [paginated](../pagination#pagination) array of [IProductResponse](../shop-types#iproductresponse) objects.

<span class="badge badge--success">Public</span>

```ts
await shop(client).getPublicProducts(filters: IProductFindByDto);
```

This call returns a [paginated](../pagination#pagination) array of [IPublicProductResponse](../shop-types#ipublicproductresponse) objects.

## Get product by id

<span class="badge badge--warning">Require authentication</span>

```ts
const product = await shop(client).getProduct(id: string);
```

This call returns an [IProductResponse](../shop-types#iproductresponse) object.

<span class="badge badge--success">Public</span>

```ts
await shop(client).getPublicProduct(id: string);
```

This call returns an [IPublicProductResponse](../shop-types#ipublicproductresponse) object.

## Get product by slug

<span class="badge badge--success">Public</span>

```ts
await shop(client).getPublicProductBySlug(id: string);
```

This call returns an [IPublicProductResponse](../shop-types#ipublicproductresponse) object.

## Add comment on product

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).addCommentOnProduct(productComment: IAddCommentOnProductDto);
```

```ts
interface IAddCommentOnProductDto {
  productId: string;
  content: string;
}
```

This call returns [IComment](../shop-types#icomment) object.

## Get all product comments

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).getProductComments(productId: string, filters?: IFindProductCommentsInputDto);
```

```ts
interface IFindProductCommentsInputDto extends PaginationFilters {
  productId?: string;
  personId?: string;
  organizationUri?: string;
  sort?: string;
}
```

This interface extends [PaginationFilters](../pagination#pagination-filters)

This call returns an [ISearchResult](../pagination#isearchresult) of [IComment](../shop-types#icomment) objects.

## Add option to product

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).getProductComments(productId: string, option: IShopProductOptionCreateInputDto);
```

```ts
export interface IShopProductOptionCreateInputDto {
  id: string;
  name: string;
  items?: IShopProductOptionItemCreateInputDto[];
  required?: boolean;
  rangeMin: number;
  enabled?: boolean;
  translations?: IProductOptionItemTranslationDto[];
}

export interface IShopProductOptionItemCreateInputDto {
  name: string;
  priceTaxIncluded: number;
  enabled: boolean;
}
```

- [IProductOptionItemTranslationDto](../shop-types#iproductoptionitemtranslationdto)(`translations`)

This call returns an [IProductResponse](../shop-types#iproductresponse) object.

## Remove a product option

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).removeProductOption(productId: string, optionId: string);
```

This call returns an [IProductResponse](../shop-types#iproductresponse) object.

## Add like to product

**This function requires the `analytics` domain be active.**
<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).addLikeToProduct(productId: string);
```

This call returns a number corresponding to current number of likes.

## Get product likes

**This function requires the `analytics` domain be active.**
<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).getProductLikes(productId: string);
```

This call returns a number corresponding to current number of likes.

## Add view to product

**This function requires the `analytics` domain be active.**
<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).addViewToProduct(productId: string);
```

This call returns a number corresponding to current number of views.

## Get product views

**This function requires the `analytics` domain be active.**
<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).getProductViews(productId: string);
```

This call returns a number corresponding to current number of views.
