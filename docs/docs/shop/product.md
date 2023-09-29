---
id: product
title: Product
---

## Get products list

<span class="badge badge--warning">Require authentication</span>

```ts
const products = await shop(client).getProducts(filters: {});
```

This call returns a [paginated](../pagination#pagination) array of [IProductResponse](../shop-types#iproductresponse) objects.

<span class="badge badge--success">Public</span>

```ts
const products = await shop(client).getPublicProducts(1, 10, {
  /* Filters */
});
```

## Get one product

Retrieve a product by ID.
There is two version for this integration, public and private endpoint according to the public attribute.

Return a Product.

<span class="badge badge--warning">Require authentication</span>

```ts
const product = await shop(client).getProduct('product-id');
```

<span class="badge badge--success">Public</span>

```ts
// Public
const product = await shop(client).getPublicProduct('product-id');
```

## Get product by slug

Retrieve Product by slug.
Return a Product.

<span class="badge badge--success">Public</span>

```ts
const product = await shop(client).getPublicProductBySlug('product-slug');
```

## Get categories from parent

Retrieve categories.
Return all subcategories for a parent category.

<span class="badge badge--warning">Require authentication</span>

```ts
const categories = await shop(client).getCategoriesById('organization-id');
```

## Get categories

Retrieve categories.
Return a category (with subcategories).

<span class="badge badge--success">Public</span>

```ts
// Public
const categories = await shop(client).getPublicCategories();
```

## Get sub-categories of a category

Retrieve list of sub-categories of a category.
Return an array of Category.

<span class="badge badge--warning">Require authentication</span>

```ts
const subCategories = await shop(client).getCategories('organization-id');
```

## Get category by slug

Retrieve category by slug.
Return a Category.

<span class="badge badge--success">Public</span>

```ts
const category = await shop(client).getPublicCategoriesSlug('slug');
```


## Get categories and subcategories

Retrieve categories with subcategories list

<span class="badge badge--success">Public</span>

```ts
const categories = await shop(client).getPublicCategoriesAndSub();
```

Return an array of Category.
