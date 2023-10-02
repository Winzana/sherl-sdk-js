import { ErrorFactory } from '../../../common/errors';

export enum ProductErr {
  PRODUCTS_FETCH_FAILED = 'product/product-fetch-failed',
  CATEGORIES_FETCH_FAILED = 'product/categories-fetch-failed',
  PRODUCT_NOT_FOUND = 'product/product-not-found',
  CATEGORY_NOT_FOUND = 'product/category-not-found',
  SUB_CATEGORIES_NOT_FOUND = 'product/sub-categories-not-found',
}

export const errors = {
  [ProductErr.PRODUCTS_FETCH_FAILED]: 'Failed to fetch products API',
  [ProductErr.CATEGORIES_FETCH_FAILED]: 'Failed to fetch categories API',
  [ProductErr.PRODUCT_NOT_FOUND]: 'Product not found',
  [ProductErr.CATEGORY_NOT_FOUND]: 'Category not found',
  [ProductErr.SUB_CATEGORIES_NOT_FOUND]: 'Sub categories not found',
};

export const errorFactory = new ErrorFactory<ProductErr>('Product', errors);
