export const endpoints = {
  // Discounts
  MANAGE_DISCOUNT: '/api/shop/discounts/:id',
  GET_DISCOUNT_BY: '/api/shop/discounts/find-one-by',
  DISCOUNTS: '/api/shop/discounts',
  GET_PUBLIC_DISCOUNTS: '/api/public/shop/discounts',
  VALIDATE_DISCOUNT_CODE: '/api/shop/discounts/validate-code',

  // Orders
  GET_ORDER: '/api/shop/orders/:id',
  GET_CUSTOMER_ORDERS: '/api/shop/orders',
  GET_ORGANIZATION_ORDERS: '/api/shop/orders/list-to/:id',
  UPDATE_ORDER_STATUS: '/api/shop/orders/:id/status/:status',
  CANCEL_ORDER: '/api/shop/orders/:id/cancel',

  // Products
  GET_PRODUCT: '/api/shop/products/:id',
  GET_PRODUCTS: '/api/shop/products',
  GET_PUBLIC_PRODUCTS: '/api/public/shop/products',
  GET_PUBLIC_PRODUCTS_DEFAULT_FILTERS: '/api/shop/products/public',
  CATEGORIES_ALL: '/api/shop/products/categories/all',
  ORGANIZATION_CATEGORIES: '/api/shop/products/categories',
  CATEGORY: '/api/shop/products/categories/:id',
  GET_PUBLIC_PRODUCT: '/api/public/shop/products/:id',
  GET_PUBLIC_PRODUCT_SLUG: '/api/public/shop/products/find-one-by-slug/:slug',
  GET_PUBLIC_CATEGORIES: '/api/public/shop/products/categories',
  GET_PUBLIC_CATEGORIES_SLUG:
    '/api/public/shop/products/categories/find-one-by-slug',
  GET_PUBLIC_CATEGORIES_AND_SUB:
    '/api/public/shop/products/categories-and-subcategories',
  PRODUCT_VIEWS: '/api/shop/products/:id/views',
  PRODUCT_LIKE: '/api/shop/products/:id/like',
  COMMENT_PRODUCT: '/api/shop/products/comments',
  GET_PRODUCT_COMMENTS: '/api/shop/products/:id/comments',
  ADD_OPTION_TO_PRODUCT: '/api/shop/products/:id/options',
  REMOVE_OPTION_FROM_PRODUCT: '/api/shop/products/:productId/options/:optionId',
  PICTURE_TO_PRODUCT: '/api/shop/products/:productId/pictures/:idMedia',
  GET_UNRESTRICTED_CATEGORIES: '/api/shop/products/categories/public',

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

  // Subscriptions
  FIND_BY_SUBSCRIPTION: '/api/shop/subscriptions/find-one-by',
  CANCEL_SUBSCRIPTION: '/api/shop/subscriptions/:id/cancel',

  // Advertisement
  CREATE_ADVERTISEMENT: '/api/shop/advertisements',
  ADVERTISEMENT: '/api/shop/advertisements/:id',
  GET_ADVERTISEMENTS: '/api/shop/advertisements',
  GET_PUBLIC_ADVERTISEMENTS: '/api/public/shop/advertisements',
};
