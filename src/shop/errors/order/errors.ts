import { ErrorFactory } from '../../../common/errors';

export enum OrderErr {
  FETCH_FAILED = 'order/fetch-failed',
  NOT_FOUND = 'order/not-found',
  BASKET_FETCH_FAILED = 'order/basket-fetch-failed',
  BASKET_ADD_FAILED = 'order/basket-add-failed',
  BASKET_REMOVE_FAILED = 'order/basket-remove-failed',
  BASKET_CLEAR_FAILED = 'order/basket-clear-failed',
  BASKET_COMMENT_FAILED = 'order/basket-comment-failed',
  BASKET_VALIDATE_PAY_FAILED = 'order/basket-validate-pay-failed',
  BASKET_VALIDATE_PENDING_FAILED = 'order/basket-validate-pending-failed',
  BASKET_DISCOUNT_CODE_FAILED = 'order/basket-discount-code-failed',
  BASKET_SPONSOR_CODE_FAILED = 'order/basket-sponsor-code-failed',
  BASKET_ALREADY_PAYED = 'order/basket-already-payed',
  BASKET_ORDER_NOT_VALIDATED = 'order/basket-order-not-validated',
  NO_DEFAULT_CARD = 'order/no-default-card',
  PAYOUT_FAILED = 'order/payout-failed',
  GENERATE_PAYOUT_FAILED = 'order/generate-payout-failed',
}

export const errors = {
  [OrderErr.FETCH_FAILED]: 'Failed to fetch order API',
  [OrderErr.NOT_FOUND]: 'Order not found',
  [OrderErr.BASKET_FETCH_FAILED]: 'Failed to fetch basket API',
  [OrderErr.BASKET_ADD_FAILED]: 'Failed to add product to basket',
  [OrderErr.BASKET_REMOVE_FAILED]: 'Failed to remove product from basket',
  [OrderErr.BASKET_CLEAR_FAILED]: 'Failed to clear basket',
  [OrderErr.BASKET_COMMENT_FAILED]: 'Failed to comment basket',
  [OrderErr.BASKET_VALIDATE_PAY_FAILED]: 'Failed to validate and pay',
  [OrderErr.BASKET_VALIDATE_PENDING_FAILED]:
    'Failed to validate pending payment',
  [OrderErr.BASKET_DISCOUNT_CODE_FAILED]: 'Failed to set discount code',
  [OrderErr.BASKET_SPONSOR_CODE_FAILED]: 'Failed to set sponsorship code',
  [OrderErr.BASKET_ALREADY_PAYED]: 'Order already payed',
  [OrderErr.BASKET_ORDER_NOT_VALIDATED]: 'Basket order not validated',
  [OrderErr.NO_DEFAULT_CARD]: 'Not have default card',
  [OrderErr.PAYOUT_FAILED]: 'Failed to payout',
  [OrderErr.GENERATE_PAYOUT_FAILED]: 'Failed to generate payout',
};

export const errorFactory = new ErrorFactory<OrderErr>('Order', errors);
