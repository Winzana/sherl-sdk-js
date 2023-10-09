---
id: product-category
title: Category
---

## Get category by id

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).getCategoryById(categoryId: string);
```

This call returns an [ICategoryResponse](../shop-types#icategoryresponse) object.

## Get organization categories

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).getCategories(filters?: IShopProductCategoryFindByQuery);
```

```ts
interface IShopProductCategoryFindByQuery {
  organizationId?: string;
  depth?: number;
}
```

This call returns an array of [ICategoryResponse](../shop-types#icategoryresponse) objects.

## Add category to organization

To determine which organization targeted, the api uses the `affiliation.id` property of the [IPerson](../person-types#iperson) interface (which corresponds to the logged-in user)

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).addCategoryToOrganization(category: IShopProductCategoryCreateInputDto);
```

```ts
interface IShopProductCategoryCreateInputDto {
  id: string;
  globalUri?: string;
  name?: string;
  color?: string;
  taxeValue: number;
  position?: number;
  seo?: ISEO;
}

interface ISEO {
  title?: string;
  description?: string;
  keywords?: string;
  others?: { [key: string]: string };
}
```

This call returns an [ICategoryResponse](../shop-types#icategoryresponse) object.

## Update category

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).updateCategory(categoryId: string, updatedCategory: Partial<IShopProductCategoryCreateInputDto>);
```
- [IShopProductCategoryCreateInputDto](#add-category-to-organization)

This call returns an [ICategoryResponse](../shop-types#icategoryresponse) object.

## Delete category

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).deleteCategory(categoryId: string);
```

This call returns an [ICategoryResponse](../shop-types#icategoryresponse) object.

## Add subcategory to category

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).addSubCategoryToCategory(categoryId: string, subCategory: IShopProductSubCategoryCreateInputDto);
```

```ts
interface IShopProductSubCategoryCreateInputDto {
  id: string;
  globalUri?: string;
  color?: string;
  name?: string;
  seo?: ISEO;
  position: number;
}
```

- [ISEO](#add-category-to-organization)(`seo`)

This call returns an [ICategoryResponse](../shop-types#icategoryresponse) object.

## Get organization categories

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).getOrganizationCategories(organizationId: string);
```

This call returns an array of [ICategoryResponse](../shop-types#icategoryresponse) objects.


## Get organization subcategories

<span class="badge badge--warning">Require authentication</span>

To determine which organization targeted, the api uses the `affiliation.id` property of the [IPerson](../person-types#iperson) interface (which corresponds to the logged-in user)

```ts
await shop(client).getOrganizationSubCategories(categoryId: string);
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
await shop(client).getPublicCategoriesAndSub(filters: IPublicCategoryAndSubCategoryFindByDto);
```

```ts
interface IPublicCategoryAndSubCategoryFindByDto {
  q?: string;
  organizationSlug?: string;
  organizationId?: string;
  organizationUri?: string;
  depth?: number;
}
```

Return an array of [IPublicCategoryResponse](../shop-types#ipubliccategoryresponse) objects.

## Get public categories

<span class="badge badge--success">Public</span>

```ts
await shop(client).getPublicCategories();
```

This call returns an array of [IPublicCategoryResponse](../shop-types#ipubliccategoryresponse) objects.

## Get unrestricted products

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).getUnrestrictedCategories();
```

This call returns an array of [ICategoryResponse](../shop-types#icategoryresponse) object.

