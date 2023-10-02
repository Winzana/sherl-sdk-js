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

  // Basket
  GET_BASKET: '/api/shop/baskets',
  ADD_PRODUCT_BASKET: '/api/shop/baskets/add',
  REMOVE_PRODUCT_BASKET: '/api/shop/baskets/remove/:id',
  CLEAR_BASKET: '/api/shop/baskets/clear',
  DISCOUNT_CODE_BASKET: '/api/shop/baskets/set-discount-code',
  SPONSOR_CODE_BASKET: '/api/shop/baskets/set-sponsorship-code',
  COMMENT_BASKET: '/api/shop/baskets/comment',
  VALIDATE_PAY_BASKET: '/api/shop/baskets/validate-and-pay',
  VALIDATE_PENDING_BASKET: '/api/shop/baskets/validate-payment',

  // Payout
  SUBMIT_PAYOUT: '/api/shop/submit-payout',
  GENERATE_PAYOUT: '/api/shop/generate-payout',

  // Loyalty
  CURRENT_USER_LOYALTIES_CARDS: '/api/shop/loyalties/to-me',
  LOYALTIES_CARD_ORGANIZATION: '/api/shop/loyalties/organizations/:id',
  UPDATE_LOYALTY_CARD: '/api/shop/loyalties/:id',

  // Invoice
  SEND_LINK_PAYED_ONLINE: '/api/shop/invoices/:id/send-link-to-payed-online',

  // Payment
  REQUEST_CREDENTIALS_ADD_CARD:
    '/api/shop/payments/request-credentials-to-add-card',
  VALIDATE_CARD: '/api/shop/payments/validate-card/:id',
  SAVE_CARD: '/api/shop/payments/save-card',
  SET_DEFAULT_CARD: '/api/shop/payments/card/:id/default',
  DELETE_CARD: '/api/shop/payments/card/:id',
  SECURE_3D_CARD: '/api/shop/payments/secure/:id',
};
