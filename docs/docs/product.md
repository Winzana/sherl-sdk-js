---
id: product
title: Product
---

## Get product list

Retrieve a list of products.

```ts
// Require authentication
const products = await Sherl.product.getProducts(1, 10 {
  /* Filters */
});

// Public
const products = await Sherl.product.getPublicProducts(1, 10 {
  /* Filters */
});
```

Return a paginated array of Product.

## Get one product

Retrieve a product by ID.

```ts
// Require authentication
const product = await Sherl.product.getProduct('product-id');

// Public
const product = await Sherl.product.getPublicProduct('product-id');
```

Return a Product.

## Get product by slug

Retrieve Product by slug.

```ts
const product = await Sherl.product.getPublicProductBySlug('product-slug');
```

Return a Product.

## Get categories

Retrieve categories.

```ts
// Require authentication
const categories = await Sherl.product.getCategoriesById('organization-id');

// Public
const categories = await Sherl.product.getPublicCategories();
```

Return a category (with subcategories).

## Get sub-categories of a category

<span class="badge badge--warning">Require authentication</span>

Retrieve list of sub-categories of a category.

```ts
const subCategories = await Sherl.product.getCategories('organization-id');
```

Return an array of Category.

## Get category by slug

Retrieve category by slug.

```ts
const category = await Sherl.product.getPublicCategoriesSlug('slug');
```

Return a Category.

## Get categories and subcategories

Retrieve categories with subcategories list

```ts
const categories = await Sherl.product.getPublicCategoriesAndSub();
```

Return an array of Category.
