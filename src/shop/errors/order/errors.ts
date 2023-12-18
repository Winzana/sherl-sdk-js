import { ErrorFactory } from '../../../common/errors';

export enum OrderErr {
  FETCH_FAILED = 'order/fetch-failed',
  BAD_REQUEST = 'order/bad-request',
  NO_DEFAULT_CARD = 'order/no-default-card',
  PAYOUT_FAILED = 'order/payout-failed',
  GENERATE_PAYOUT_FAILED = 'order/generate-payout-failed',
  NOT_ALLOWED = 'order/not-allowed',
  ALREADY_CHANGED = 'order/already-updated',
  CANCEL_ORDER_FAILED = 'order/cancel-order-failed',
  CUSTOMER_NOT_FOUND = 'order/customer-not-found',
  SPONSOR_CODE_NOT_FOUND = 'order/sponsor-discount-code-not-found',
  CODE_NOT_FOUND = 'order/discount-code-not-found',
  PRODUCT_NOT_FOUND = 'order/product-not-found',
  NOT_FOUND = 'order/not-found',
}

export const errors = {
  [OrderErr.FETCH_FAILED]: 'Failed to fetch order API',
  [OrderErr.NOT_FOUND]: 'Order not found',
  [OrderErr.NO_DEFAULT_CARD]: 'Not have default card',
  [OrderErr.PAYOUT_FAILED]: 'Failed to payout',
  [OrderErr.GENERATE_PAYOUT_FAILED]: 'Failed to generate payout',
  [OrderErr.CANCEL_ORDER_FAILED]: 'Failed to cancel order',
  [OrderErr.NOT_ALLOWED]: 'Not allowed',
  [OrderErr.ALREADY_CHANGED]: 'Order already update',
};

export const errorFactory = new ErrorFactory<OrderErr>('Order', errors);
