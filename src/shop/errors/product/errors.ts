import { ErrorFactory } from '../../../common/errors';

export enum ProductErr {
  ADD_CATEGORY_TO_ORGANIZATION_FAILED = 'product/add-category-organization-failed',
  ADD_CATEGORY_TO_ORGANIZATION_FORBIDDEN = 'product/add-category-organization-forbidden',
  ADD_OPTION_FAILED = 'product/add-option-failed',
  ADD_OPTION_FORBIDDEN = 'product/add-option-forbidden',
  ADD_PRODUCT_LIKE_FAILED = 'product/add-product-likes-failed',
  ADD_PRODUCT_LIKE_FORBIDDEN = 'product/add-product-likes-forbidden',
  ADD_COMMENT_ON_PRODUCT_FAILED = 'product/add-product-comment-failed',
  ADD_COMMENT_ON_PRODUCT_FORBIDDEN = 'product/add-product-comment-forbidden',
  ADD_PRODUCT_VIEWS_FAILED = 'product/add-product-views-failed',
  ADD_PRODUCT_VIEWS_FORBIDDEN = 'product/add-product-views-forbidden',
  ADD_SUBCATEGORY_FAILED = 'product/add-subcategory-failed',
  ADD_SUBCATEGORY_FORBIDDEN = 'product/add-subcategory-forbidden',
  DELETE_CATEGORY_FAILED = 'product/delete-category-failed',
  DELETE_CATEGORY_FORBIDDEN = 'product/delete-category-forbidden',
  GET_CATEGORY_BY_ID_FAILED = 'product/get-category-by-id',
  GET_CATEGORY_BY_ID_FORBIDDEN = 'product/get-category-by-id-forbidden',
  GET_CATEGORIES_FAILED = 'product/get-categories-failed',
  GET_CATEGORIES_FORBIDDEN = 'product/get-categories-forbidden',
  GET_ORGANIZATION_CATEGORIES_FAILED = 'product/get-organization-categories-failed',
  GET_ORGANIZATION_CATEGORIES_FORBIDDEN = 'product/get-organization-categories-forbidden',
  GET_ORGANIZATION_SUBCATEGORIES_FAILED = 'product/get-organization-subcategories-failed',
  GET_ORGANIZATION_SUBCATEGORIES_FORBIDDEN = 'product/get-organization-subcategories-forbidden',
  GET_PRODUCT_COMMENTS_FAILED = 'product/get-product-comments-failed',
  GET_PRODUCT_COMMENTS_FORBIDDEN = 'product/get-product-comments-forbidden',
  GET_PRODUCT_LIKES_FAILED = 'product/get-product-likes-failed',
  GET_PRODUCT_LIKES_FORBIDDEN = 'product/get-product-likes-forbidden',
  GET_PRODUCT_VIEWS_FAILED = 'product/get-product-views-failed',
  GET_PRODUCT_VIEWS_FORBIDDEN = 'product/get-product-views-forbidden',
  GET_PRODUCT_FAILED = 'product/get-product-failed',
  GET_PRODUCT_FAILED_FORBIDDEN = 'product/get-product-failed-forbidden',
  GET_PRODUCTS_FAILED = 'product/get-products-failed',
  GET_PRODUCTS_FORBIDDEN = 'product/get-products-forbidden',
  GET_PUBLIC_CATEGORIES_AND_SUBS_FAILED = 'product/get-public-categories-and-subs-failed',
  GET_PUBLIC_CATEGORIES_AND_SUBS_FORBIDDEN = 'product/get-public-categories-and-subs-forbidden',
  GET_PUBLIC_CATEGORIES_FAILED = 'product/get-public-categories-failed',
  GET_PUBLIC_CATEGORIES_FORBIDDEN = 'product/get-public-categories-forbidden',
  GET_PUBLIC_CATEGORY_BY_SLUG_FAILED = 'product/get-public-category-by-slug-failed',
  GET_PUBLIC_CATEGORY_BY_SLUG_FORBIDDEN = 'product/get-public-category-by-slug-forbidden',
  GET_PUBLIC_PRODUCT_BY_SLUG_FAILED = 'product/get-public-product-by-slug-failed',
  GET_PUBLIC_PRODUCT_BY_SLUG_FORBIDDEN = 'product/get-public-product-by-slug-forbidden',
  GET_PUBLIC_PRODUCT_BY_ID_FAILED = 'product/get-public-product-by-id-failed',
  GET_PUBLIC_PRODUCT_BY_ID_FORBIDDEN = 'product/get-public-product-by-id-forbidden',
  GET_PUBLIC_PRODUCTS_WITH_FILTERS_FAILED = 'product/get-public-products-with-filters-failed',
  GET_PUBLIC_PRODUCTS_WITH_FILTERS_FORBIDDEN = 'product/get-public-products-with-filters-forbidden',
  GET_UNRESTRICTED_CATEGORIES_FAILED = 'product/get-unrestricted-categories-failed',
  GET_UNRESTRICTED_CATEGORIES_FORBIDDEN = 'product/get-unrestricted-categories-forbidden',
  REMOVE_OPTION_FAILED = 'product/remove-option-failed',
  REMOVE_OPTION_FORBIDDEN = 'product/remove-option-forbidden',
  UPDATE_CATEGORY_FAILED = 'product/update-category-failed',
  UPDATE_CATEGORY_FORBIDDEN = 'product/update-category-forbidden',
  PRODUCT_NOT_FOUND = 'product/product-not-found',
  CATEGORY_NOT_FOUND = 'product/category-not-found',
  OPTION_OR_PRODUCT_NOT_FOUND = 'product/option-or-product-not-found',
  ORGANIZATION_NOT_FOUND = 'product/organization-not-found',
}

export const errors = {
  [ProductErr.ADD_CATEGORY_TO_ORGANIZATION_FAILED]:
    'Failed to add category to organization',
  [ProductErr.ADD_CATEGORY_TO_ORGANIZATION_FORBIDDEN]:
    'Failed to add category to organization, forbidden',
  [ProductErr.ADD_OPTION_FAILED]: 'Failed to add option to product',
  [ProductErr.ADD_OPTION_FORBIDDEN]:
    'Failed to add option to product, forbidden',
  [ProductErr.ADD_PRODUCT_LIKE_FAILED]: 'Failed to add like to product',
  [ProductErr.ADD_PRODUCT_LIKE_FORBIDDEN]:
    'Failed to add like to product, forbidden',
  [ProductErr.ADD_COMMENT_ON_PRODUCT_FAILED]:
    'Failed to add comment to product',
  [ProductErr.ADD_COMMENT_ON_PRODUCT_FORBIDDEN]:
    'Failed to add comment to product, forbidden',
  [ProductErr.ADD_PRODUCT_VIEWS_FAILED]: 'Failed to add product views',
  [ProductErr.ADD_PRODUCT_VIEWS_FORBIDDEN]:
    'Failed to add product views, forbidden',
  [ProductErr.ADD_SUBCATEGORY_FAILED]: 'Failed to add subcategory to category',
  [ProductErr.ADD_SUBCATEGORY_FORBIDDEN]:
    'Failed to add subcategory to category, forbidden',
  [ProductErr.DELETE_CATEGORY_FAILED]: 'Failed to delete category',
  [ProductErr.DELETE_CATEGORY_FORBIDDEN]:
    'Failed to delete category, forbidden',
  [ProductErr.GET_CATEGORY_BY_ID_FAILED]: 'Failed to get category',
  [ProductErr.GET_CATEGORY_BY_ID_FORBIDDEN]:
    'Failed to get category, forbidden',
  [ProductErr.GET_CATEGORIES_FAILED]: 'Failed to get categories',
  [ProductErr.GET_CATEGORIES_FORBIDDEN]: 'Failed to get categories, forbidden',
  [ProductErr.GET_ORGANIZATION_CATEGORIES_FAILED]:
    "Failed to get organization's categories",
  [ProductErr.GET_ORGANIZATION_CATEGORIES_FORBIDDEN]:
    "Failed to get organization's categories, forbidden",
  [ProductErr.GET_ORGANIZATION_SUBCATEGORIES_FAILED]:
    "Failed to get organization's subcategories",
  [ProductErr.GET_ORGANIZATION_SUBCATEGORIES_FORBIDDEN]:
    "Failed to get organization's subcategories, forbidden",
  [ProductErr.GET_PRODUCT_COMMENTS_FAILED]: 'Failed to get product comments',
  [ProductErr.GET_PRODUCT_COMMENTS_FORBIDDEN]:
    'Failed to get product comments, forbidden',
  [ProductErr.GET_PRODUCT_LIKES_FAILED]: 'Failed to get product likes',
  [ProductErr.GET_PRODUCT_LIKES_FORBIDDEN]:
    'Failed to get product likes, forbidden',
  [ProductErr.GET_PRODUCTS_FAILED]: 'Failed to get products',
  [ProductErr.GET_PRODUCTS_FORBIDDEN]: 'Failed to get products, forbidden',
  [ProductErr.GET_PUBLIC_CATEGORIES_AND_SUBS_FAILED]:
    'Failed to get public categories and sub-categories',
  [ProductErr.GET_PUBLIC_CATEGORIES_AND_SUBS_FORBIDDEN]:
    'Failed to get public categories and sub-categories, forbidden',
  [ProductErr.GET_PUBLIC_CATEGORIES_FAILED]: 'Failed to get public categories',
  [ProductErr.GET_PUBLIC_CATEGORIES_FORBIDDEN]:
    'Failed to get public categories, forbidden',
  [ProductErr.GET_PUBLIC_CATEGORY_BY_SLUG_FAILED]:
    'Failed to get public category by slug',
  [ProductErr.GET_PUBLIC_CATEGORY_BY_SLUG_FORBIDDEN]:
    'Failed to get public category by slug, forbidden',
  [ProductErr.GET_PUBLIC_PRODUCT_BY_SLUG_FAILED]:
    'Failed to get public product by slug',
  [ProductErr.GET_PUBLIC_PRODUCT_BY_SLUG_FORBIDDEN]:
    'Failed to get public product by slug, forbidden',
  [ProductErr.GET_PUBLIC_PRODUCT_BY_ID_FAILED]:
    'Failed to get public product by id',
  [ProductErr.GET_PUBLIC_PRODUCT_BY_ID_FORBIDDEN]:
    'Failed to get public product by id, forbidden',
  [ProductErr.GET_PUBLIC_PRODUCTS_WITH_FILTERS_FAILED]:
    'Failed to get public products with filters',
  [ProductErr.GET_PUBLIC_PRODUCTS_WITH_FILTERS_FORBIDDEN]:
    'Failed to get public products with filters, forbidden',
  [ProductErr.GET_UNRESTRICTED_CATEGORIES_FAILED]:
    'Failed to get unrestricted categories',
  [ProductErr.GET_UNRESTRICTED_CATEGORIES_FORBIDDEN]:
    'Failed to get unrestricted categories, forbidden',
  [ProductErr.REMOVE_OPTION_FAILED]: 'Failed to remove option from product',
  [ProductErr.REMOVE_OPTION_FORBIDDEN]:
    'Failed to remove option from product, forbidden',
  [ProductErr.PRODUCT_NOT_FOUND]: 'Product not found',
  [ProductErr.CATEGORY_NOT_FOUND]: 'Category not found',
  [ProductErr.OPTION_OR_PRODUCT_NOT_FOUND]: 'Option or product not found',
  [ProductErr.ORGANIZATION_NOT_FOUND]: 'Organization not found',
  [ProductErr.GET_PRODUCT_VIEWS_FAILED]: 'Failed to get product views',
  [ProductErr.GET_PRODUCT_VIEWS_FORBIDDEN]:
    'Failed to get product views, forbidden',
  [ProductErr.UPDATE_CATEGORY_FAILED]: 'Failed to update category',
  [ProductErr.UPDATE_CATEGORY_FORBIDDEN]:
    'Failed to update category, forbidden',
};

export const errorFactory = new ErrorFactory<ProductErr>('Product', errors);
