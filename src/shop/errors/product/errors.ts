import { ErrorFactory } from '../../../common/errors';

export enum ProductErr {
  PRODUCTS_FETCH_FAILED = 'product/product-fetch-failed',
  CATEGORIES_FETCH_FAILED = 'product/categories-fetch-failed',
  PRODUCT_NOT_FOUND = 'product/product-not-found',
  CATEGORY_NOT_FOUND = 'product/category-not-found',
  SUB_CATEGORIES_NOT_FOUND = 'product/sub-categories-not-found',
  PRODUCT_VIEWS_FAILED = 'product/get-product-views-failed',
  ADD_PRODUCT_VIEWS_FAILED = 'product/add-product-views-failed',
  ADD_PRODUCT_LIKES_FAILED = 'product/add-product-likes-failed',
  GET_PRODUCT_LIKES_FAILED = 'product/get-product-likes-failed',
  COMMENT_PRODUCT_FAILED = 'product/add-comment-failed',
  ADD_OPTION_FAILED = 'product/add-option-failed',
  REMOVE_OPTION_FAILED = 'product/remove-option-failed',
  ADD_PICTURE_PRODUCT_FAILED = 'product/add-picture-failed',
  REMOVE_PICTURE_PRODUCT_FAILED = 'product/remove-picture-failed',
  GET_PRODUCT_COMMENTS_FAILED = 'product/get-product-comments-failed',
  ADD_CATEGORY_TO_ORGANIZATION_FAILED = 'product/add-category-organization-failed',
  GET_ORGANIZATION_CATEGORIES_FAILED = 'product/get-organization-categories-failed',
  GET_ORGANIZATION_SUBCATEGORIES_FAILED = 'product/get-organization-subcategories-failed',
  ADD_SUBCATEGORY_FAILED = 'product/add-subcategory-failed',
  DELETE_CATEGORY_FAILED = 'product/delete-category-failed',
  UPDATE_CATEGORY_FAILED = 'product/update-category-failed',
  GET_UNRESTRICTED_CATEGORIES_FAILED = 'product/get-unrestricted-categories-failed',
}

export const errors = {
  [ProductErr.PRODUCTS_FETCH_FAILED]: 'Failed to fetch products API',
  [ProductErr.CATEGORIES_FETCH_FAILED]: 'Failed to fetch categories API',
  [ProductErr.PRODUCT_NOT_FOUND]: 'Product not found',
  [ProductErr.CATEGORY_NOT_FOUND]: 'Category not found',
  [ProductErr.SUB_CATEGORIES_NOT_FOUND]: 'Sub categories not found',
  [ProductErr.PRODUCT_VIEWS_FAILED]: 'Failed to get product views',
  [ProductErr.ADD_PRODUCT_VIEWS_FAILED]: 'Failed to add product views',
  [ProductErr.ADD_PRODUCT_LIKES_FAILED]: 'Failed to add like to product',
  [ProductErr.GET_PRODUCT_LIKES_FAILED]: 'Failed to get product likes',
  [ProductErr.COMMENT_PRODUCT_FAILED]: 'Failed to add comment to product',
  [ProductErr.ADD_OPTION_FAILED]: 'Failed to add option to product',
  [ProductErr.REMOVE_OPTION_FAILED]: 'Failed to remove option from product',
  [ProductErr.ADD_PICTURE_PRODUCT_FAILED]: 'Failed to add picture to product',
  [ProductErr.REMOVE_PICTURE_PRODUCT_FAILED]:
    'Failed to remove picture from product',
  [ProductErr.GET_PRODUCT_COMMENTS_FAILED]: 'Failed to get product comments',
  [ProductErr.ADD_CATEGORY_TO_ORGANIZATION_FAILED]:
    'Failed to add category to organization',
  [ProductErr.GET_ORGANIZATION_CATEGORIES_FAILED]:
    "Failed to get organization's categories",
  [ProductErr.ADD_SUBCATEGORY_FAILED]: 'Failed to add subcategory to category',
  [ProductErr.DELETE_CATEGORY_FAILED]: 'Failed to delete category',
  [ProductErr.UPDATE_CATEGORY_FAILED]: 'Failed to update category',
  [ProductErr.GET_ORGANIZATION_SUBCATEGORIES_FAILED]:
    "Failed to get organization's subcategories",
  [ProductErr.GET_UNRESTRICTED_CATEGORIES_FAILED]:
    'Failed to get unrestricted categories',
};

export const errorFactory = new ErrorFactory<ProductErr>('Product', errors);
