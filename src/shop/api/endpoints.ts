export const endpoints = {
  // Discounts
  GET_DISCOUNT_ID: '/api/shop/discounts/:id',
  GET_DISCOUNT_BY: '/api/shop/discounts/find-one-by',
  GET_DISCOUNTS: '/api/shop/discounts',
  GET_PUBLIC_DISCOUNTS: '/api/public/shop/discounts',
  POST_DISCOUNT: '/api/shop/discounts',

  // Orders
  GET_ORDER: '/api/shop/orders/:id',
  GET_CUSTOMER_ORDERS: '/api/shop/orders',
  GET_ORDERS: '/api/shop/orders/list-to/:id',
  GET_ORDER_AUTOMATION_PRIMARY: '/api/shop/order/:id/door/open/primary',
  GET_ORDER_AUTOMATION_SECONDARY: '/api/shop/order/:id/door/open/secondary',

  // Products
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
