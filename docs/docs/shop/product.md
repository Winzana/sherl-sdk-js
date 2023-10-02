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

## Get category by id

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).getCategoriesById(id: string);
```

This call returns an [ICategoryResponse](../shop-types#icategoryresponse) object.


## Get public categories

<span class="badge badge--success">Public</span>

```ts
await shop(client).getPublicCategories();
```

This call returns an array of [IPublicCategoryResponse](../shop-types#ipubliccategoryresponse) objects.

## Get categories by organizationId

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).getCategories(organizationId: string, filters: any);
```

This call returns an array of [ICategoryResponse](../shop-types#icategoryresponse) objects.

## Get public category by slug

<span class="badge badge--success">Public</span>

```ts
await shop(client).getPublicCategoryBySlug(slug: string);
```

This call returns [IPublicCategoryResponse](../shop-types#ipubliccategoryresponse) object.


## Get categories and subcategories

<span class="badge badge--success">Public</span>

```ts
await shop(client).getPublicCategoriesAndSub();
```

Return an array of [IPublicCategoryResponse](../shop-types#ipubliccategoryresponse) objects.
