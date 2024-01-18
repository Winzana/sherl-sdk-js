import { ErrorFactory } from '../../../common/errors';

export enum BasketErr {
  GET_BASKET_FAILED = 'basket/get-basket-failed',
  GET_BASKET_FORBIDDEN = 'basket/get-basket-forbidden',
  BASKET_ADD_FAILED = 'basket/basket-add-failed',
  BASKET_ADD_FORBIDDEN = 'basket/add-basket-forbidden',
  BASKET_REMOVE_FAILED = 'basket/basket-remove-failed',
  BASKET_REMOVE_FORBIDDEN = 'basket/remove-product-forbidden',
  BASKET_CLEAR_FAILED = 'basket/basket-clear-failed',
  BASKET_CLEAR_FORBIDDEN = 'basket/clear-basket-forbidden',
  BASKET_COMMENT_FAILED = 'basket/basket-comment-failed',
  BASKET_COMMENT_FORBIDDEN = 'basket/basket-comment-forbidden',
  VALIDATE_AND_PAY_BASKET_FAILED = 'basket/validate-and-pay-basket-failed',
  VALIDATE_AND_PAY_BASKET_FORBIDDEN = 'basket/validate-and-pay-basket-forbidden',
  BASKET_VALIDATE_PAYMENT_FAILED = 'basket/basket-validate-payment-failed',
  BASKET_VALIDATE_PAYMENT_FORBIDDEN = 'basket/validate-payment-forbidden',
  BASKET_DISCOUNT_CODE_FAILED = 'basket/basket-discount-code-failed',
  BASKET_DISCOUNT_CODE_FORBIDDEN = 'basket/apply-discount-code-forbidden',
  BASKET_SPONSOR_CODE_FAILED = 'basket/apply-sponsor-discount-code-failed',
  BASKET_SPONSOR_CODE_FORBIDDEN = 'basket/apply-sponsor-discount-code-forbidden',
  BASKET_ALREADY_PAYED = 'basket/basket-already-payed',
  BASKET_ORDER_NOT_VALIDATED = 'basket/basket-order-not-validated',
  NO_DEFAULT_CARD = 'basket/no-default-card',
  CUSTOMER_NOT_FOUND = 'basket/customer-not-found',
  SPONSOR_CODE_NOT_FOUND = 'basket/sponsor-discount-code-not-found',
  CODE_NOT_FOUND = 'basket/discount-code-not-found',
  PRODUCT_NOT_FOUND = 'basket/product-not-found',
}

export const errors = {
  [BasketErr.GET_BASKET_FAILED]: 'Failed to fetch basket by id',
  [BasketErr.GET_BASKET_FORBIDDEN]: 'Failed to fetch basket by id, forbidden',
  [BasketErr.BASKET_ADD_FAILED]: 'Failed to add product to basket',
  [BasketErr.BASKET_ADD_FORBIDDEN]:
    'Failed to add product to basket, forbidden',
  [BasketErr.BASKET_REMOVE_FAILED]: 'Failed to remove product from basket',
  [BasketErr.BASKET_REMOVE_FORBIDDEN]:
    'Failed to remove product from basket, forbidden',
  [BasketErr.BASKET_CLEAR_FAILED]: 'Failed to clear basket',
  [BasketErr.BASKET_CLEAR_FORBIDDEN]: 'Failed to clear basket, forbidden',
  [BasketErr.VALIDATE_AND_PAY_BASKET_FAILED]:
    'Failed to validate and pay basket',
  [BasketErr.VALIDATE_AND_PAY_BASKET_FORBIDDEN]:
    'Failed to validate and pay basket, forbidden',
  [BasketErr.BASKET_COMMENT_FAILED]: 'Failed to comment basket',
  [BasketErr.BASKET_COMMENT_FORBIDDEN]: 'Failed to comment basket, forbidden',
  [BasketErr.BASKET_VALIDATE_PAYMENT_FAILED]:
    'Failed to validate pending payment',
  [BasketErr.BASKET_VALIDATE_PAYMENT_FORBIDDEN]:
    'Failed to validate pending payment, forbidden',
  [BasketErr.BASKET_DISCOUNT_CODE_FAILED]: 'Failed to set discount code',
  [BasketErr.BASKET_DISCOUNT_CODE_FORBIDDEN]:
    'Failed to set discount code, forbidden',
  [BasketErr.BASKET_SPONSOR_CODE_FAILED]: 'Failed to set sponsorship code',
  [BasketErr.BASKET_SPONSOR_CODE_FORBIDDEN]:
    'Failed to set sponsorship code, forbidden',
  [BasketErr.BASKET_ALREADY_PAYED]: 'Order already payed',
  [BasketErr.BASKET_ORDER_NOT_VALIDATED]: 'Basket order not validated',
  [BasketErr.NO_DEFAULT_CARD]: 'No default car provided',
  [BasketErr.CUSTOMER_NOT_FOUND]: 'Customer not found',
  [BasketErr.SPONSOR_CODE_NOT_FOUND]: 'Sponsor discount code not found',
  [BasketErr.CODE_NOT_FOUND]: 'Discount code not found',
  [BasketErr.PRODUCT_NOT_FOUND]: 'Product not found',
};

export const errorFactory = new ErrorFactory<BasketErr>('Basket', errors);
