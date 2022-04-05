export const endpoints = {
  POST_CATEGORY_NEW: '/api/shop/products/categories',
  POST_NEW_SUB_CATEGORY: '/api/shop/products/categories/:id',
  GET__CATEGORIS: '/api/shop/products/categories?organizationId=:id',
  GET_SUB_CATEGORY: '/api/shop/products/categories/:id', //not complete
  GET_MAIN_AND_SUB_CATEGORIES: '/api/shop/products/categories/all', //not complete
  GET_PUBLIC_CATEGORIES: '/api/shop/products/categories/public', //not complete
  DELETE_CATEGORY: '/api/shop/products/categories/:id',
  PUT_CATEGORY: '/api/shop/products/categories/:id', //not complete
};
