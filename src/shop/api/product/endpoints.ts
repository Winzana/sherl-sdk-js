export const endpoints = {
  GET_PRODUCT: '/api/shop/products/:id',
  GET_PRODUCTS: '/api/shop/products',
  GET_PUBLIC_PRODUCTS: '/api/public/shop/products',
  CATEGORIES_ALL: '/api/shop/products/categories/all',
  GET_CATEGORY: '/api/shop/products/categories/:id',
  GET_PUBLIC_PRODUCT: '/api/public/shop/products/:id',
  GET_PUBLIC_PRODUCT_SLUG: '/api/public/shop/products/find-one-by-slug/:slug',
  GET_PUBLIC_CATEGORIES: '/api/public/shop/products/categories',
  GET_PUBLIC_CATEGORIES_SLUG:
    '/api/public/shop/products/categories/find-one-by-slug',
  GET_PUBLIC_CATEGORIES_AND_SUB:
    '/api/public/shop/products/categories-and-subcategories',
};
